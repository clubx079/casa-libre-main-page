// Pre-translates every blog article (content/blog/<cc>/<slug>.js) into English and
// Portuguese with Groq, writing content/blog-i18n/<lang>/<cc>/<slug>.json. The
// Spanish sources are never touched. The site reads these JSON files at build
// time / in the client bundle — nothing calls Groq at runtime.
//
// Usage:  node scripts/translate-blog.mjs [--lang en,pt] [--cc py,bo] [--slug x] [--force] [--check]
//   --force   re-translate even if the output is current
//   --check   only validate existing outputs (shape + source hash), no API calls
//
// Re-runnable: each output stores `_src` (hash of the Spanish translatable fields);
// an article is re-translated only when it is missing, invalid or its source changed.
// Then content/blog-i18n/<lang>/index.json (slug → h1/title/description) is rebuilt.
//
// Env: GROQ_API_KEY (and optional GROQ_TRANSLATE_MODEL) are read from process.env,
// falling back to L:/wt-gsc/.env.local. The key is never printed.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'content', 'blog');
const OUT = path.join(ROOT, 'content', 'blog-i18n');

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : null; };
const flag = (name) => args.includes(`--${name}`);
const LANGS = (opt('lang') || 'en,pt').split(',');
const CCS = (opt('cc') || 'py,bo,uy,ve,sv').split(',');
const ONLY = opt('slug');
const FORCE = flag('force');
const CHECK = flag('check');
const CONCURRENCY = Number(opt('concurrency') || 4);

function loadEnv() {
  const env = {};
  for (const f of ['L:/wt-gsc/.env.local', path.join(ROOT, '.env.local')]) {
    try {
      for (const line of fs.readFileSync(f, 'utf8').split(/\r?\n/)) {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
        if (m && !(m[1] in env)) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    } catch { /* file missing */ }
  }
  return env;
}
const ENV = loadEnv();
const KEY = process.env.GROQ_API_KEY || ENV.GROQ_API_KEY;
// gpt-oss-120b translates noticeably better than the 20b default in GROQ_MODEL.
const MODEL = process.env.GROQ_TRANSLATE_MODEL || ENV.GROQ_TRANSLATE_MODEL || 'openai/gpt-oss-120b';

const LANG_NAME = { en: 'English', pt: 'Brazilian Portuguese' };
const COUNTRY = { py: 'Paraguay', bo: 'Bolivia', uy: 'Uruguay', ve: 'Venezuela', sv: 'El Salvador' };

// ---- article loading (ESM files without "type":"module" → import as data URL) ----
async function loadArticle(file) {
  const src = fs.readFileSync(file, 'utf8');
  const mod = await import(`data:text/javascript;base64,${Buffer.from(src).toString('base64')}`);
  return mod.default;
}

// The translatable part of an article. Everything else (slug, hrefs, urls, dates,
// ids, tags, sources) stays Spanish/unchanged and is never sent.
export function extract(a) {
  const pick = (o, keys) => Object.fromEntries(keys.filter((k) => o[k] != null && o[k] !== '').map((k) => [k, o[k]]));
  return {
    meta: pick(a, ['title', 'h1', 'description', 'answer']),
    sections: (a.sections || []).map((s) => {
      const o = pick(s, ['h2', 'paras', 'bullets', 'steps', 'tip']);
      if (s.table) o.table = { head: s.table.head, rows: s.table.rows };
      return o;
    }),
    faq: (a.faq || []).map((f) => ({ q: f.q, a: f.a })),
    related: (a.related || []).map((r) => r.label),
  };
}

const hash = (v) => crypto.createHash('sha1').update(JSON.stringify(v)).digest('hex').slice(0, 12);

// Same keys, same array lengths, every leaf a non-empty string where the source has one.
function sameShape(src, out, at = '$') {
  if (typeof src === 'string') {
    if (typeof out !== 'string' || (src.trim() && !out.trim())) throw new Error(`${at}: expected non-empty string`);
    return;
  }
  if (Array.isArray(src)) {
    if (!Array.isArray(out) || out.length !== src.length) throw new Error(`${at}: array length ${out?.length} ≠ ${src.length}`);
    src.forEach((v, i) => sameShape(v, out[i], `${at}[${i}]`));
    return;
  }
  if (src && typeof src === 'object') {
    if (!out || typeof out !== 'object' || Array.isArray(out)) throw new Error(`${at}: expected object`);
    const a = Object.keys(src).sort().join(','); const b = Object.keys(out).sort().join(',');
    if (a !== b) throw new Error(`${at}: keys [${b}] ≠ [${a}]`);
    for (const k of Object.keys(src)) sameShape(src[k], out[k], `${at}.${k}`);
    return;
  }
  if (src !== out) throw new Error(`${at}: non-string value changed`);
}

// ---- Groq ----
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Local terms with no exact equivalent: kept in Spanish with a short gloss on first use.
const KEEP_TERMS = 'escribano, escribanía, escritura (pública), anticrético, folio real, boleto de compraventa, cuenta corriente catastral, minuta, testimonio, derecho de posesión, el derecho (de una casa), expensas, aguinaldo, alcaldía, notario, registrador';

function systemPrompt(lang, cc) {
  const L = LANG_NAME[lang];
  return [
    `You are a professional real-estate translator. Translate the JSON you receive from Spanish (${COUNTRY[cc]}) into natural, fluent ${L} for a reader interested in property in ${COUNTRY[cc]}.`,
    'Rules:',
    '- Return ONLY a JSON object with exactly the same structure: same keys (never translate keys), same array lengths and order, one translated string for each string.',
    '- Translate every string fully. Do not summarize, add or drop content. Keep the tone (direct, practical, addressing the reader as "you").',
    '- Keep unchanged: URLs, numbers and their formatting, amounts, percentages, dates, law numbers, currency codes and symbols (Gs., US$, Bs., USD, $U, etc.).',
    '- Keep proper names and institutions as written in Spanish: Casa-Libre (always with the hyphen), WhatsApp, iPhone, Android, Che Róga Porã, Derechos Reales, CNR, SENIAT, SENAVITAT, ANDE, ESSAP, MUVH, BHU, ANV, AEV, Registro Público, Dirección General de los Registros Públicos, names of ministries, banks, laws, codes, programs, cities and neighborhoods.',
    `- Ordinary words (guarantor, deposit, insurance, mortgage, lease, owner, tenant, etc.) are simply translated into ${L}, with NO parentheses.`,
    `- Only these local legal terms are kept in Spanish: ${KEEP_TERMS}. The first time one appears in the JSON, write the Spanish term followed by a short ${L} gloss in parentheses, e.g. "escribano (${lang === 'pt' ? 'tabelião' : 'notary'})". After that, use the Spanish term alone.`,
    '- Never write a word followed by the same word in parentheses.',
    '- Quoted example messages (texts to an owner, etc.) are translated too.',
    '- Plain text only: no markdown, use the normal hyphen "-" (never non-breaking hyphens).',
  ].join('\n');
}

// Post-fixes for model quirks: non-breaking hyphens, "word (word)" echoes.
function tidy(v) {
  if (typeof v === 'string') {
    return v
      .replace(/[\u2010\u2011\u2012]/g, '-')
      .replace(/\u00a0/g, ' ')
      .replace(/(?<![\p{L}])([\p{L}][\p{L} -]{0,40}?) \((\1)\)/giu, '$1');
  }
  if (Array.isArray(v)) return v.map(tidy);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, tidy(x)]));
  return v;
}

async function groq(lang, cc, payload, attempt = 1) {
  const body = {
    model: MODEL,
    temperature: 0.2,
    response_format: { type: 'json_object' },
    max_completion_tokens: 16000,
    ...(MODEL.startsWith('openai/gpt-oss') ? { reasoning_effort: 'low' } : {}),
    messages: [
      { role: 'system', content: systemPrompt(lang, cc) },
      { role: 'user', content: JSON.stringify(payload) },
    ],
  };
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { authorization: `Bearer ${KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (res.status === 429 || res.status >= 500) {
    if (attempt > 8) throw new Error(`groq ${res.status} after ${attempt} attempts`);
    const ra = Number(res.headers.get('retry-after')) || 0;
    const wait = Math.max(ra * 1000, Math.min(60000, 2000 * 2 ** (attempt - 1))) + Math.random() * 1000;
    console.log(`  … ${res.status}, backing off ${Math.round(wait / 1000)}s`);
    await sleep(wait);
    return groq(lang, cc, payload, attempt + 1);
  }
  if (!res.ok) throw new Error(`groq ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const j = await res.json();
  const text = j.choices?.[0]?.message?.content || '';
  return JSON.parse(text);
}

// Translate one chunk, validating its shape; retry with backoff on any failure.
// The model sometimes drops the wrapper object and returns the bare array, or
// returns the JSON as a string: put the expected shape back when it is unambiguous.
function rewrap(chunk, out) {
  if (typeof out === 'string') { try { out = JSON.parse(out); } catch { /* keep */ } }
  const keys = Object.keys(chunk);
  if (Array.isArray(out) && keys.length === 1) return { [keys[0]]: out };
  if (out && typeof out === 'object' && !Array.isArray(out) && keys.length === 1 && !(keys[0] in out)) {
    const vals = Object.values(out);
    if (vals.length === 1) return { [keys[0]]: vals[0] };
  }
  return out;
}

async function translateChunk(lang, cc, chunk, label) {
  let lastErr;
  for (let i = 1; i <= 4; i++) {
    try {
      const out = tidy(rewrap(chunk, await groq(lang, cc, chunk)));
      sameShape(chunk, out);
      return out;
    } catch (e) {
      lastErr = e;
      console.log(`  ! ${label} try ${i}: ${e.message}`);
      // Several sections that keep failing: translate each half on its own.
      if (i >= 2 && chunk.sections?.length > 1) {
        const mid = Math.ceil(chunk.sections.length / 2);
        const a = await translateChunk(lang, cc, { sections: chunk.sections.slice(0, mid) }, `${label}a`);
        const b = await translateChunk(lang, cc, { sections: chunk.sections.slice(mid) }, `${label}b`);
        return { sections: [...a.sections, ...b.sections] };
      }
      await sleep(1500 * i);
    }
  }
  throw lastErr;
}

// Split an article into a few requests: meta+faq+related, then sections in groups
// of ~1200 words so every response is small enough to come back intact.
async function translateArticle(lang, cc, slug, src) {
  const words = (v) => JSON.stringify(v).split(/\s+/).length;
  const head = await translateChunk(lang, cc, { meta: src.meta, faq: src.faq, related: src.related }, `${lang}/${slug} head`);
  const groups = [];
  let cur = [];
  for (const s of src.sections) {
    if (cur.length && words(cur) + words(s) > 1200) { groups.push(cur); cur = []; }
    cur.push(s);
  }
  if (cur.length) groups.push(cur);
  const sections = [];
  for (const [i, g] of groups.entries()) {
    const out = await translateChunk(lang, cc, { sections: g }, `${lang}/${slug} sections#${i}`);
    sections.push(...out.sections);
  }
  const result = { meta: head.meta, sections, faq: head.faq, related: head.related };
  sameShape(src, result);
  return result;
}

// ---- main ----
async function pool(items, n, fn) {
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) { const it = items[i++]; await fn(it); }
  }));
}

function validateFile(file, src) {
  try {
    const j = JSON.parse(fs.readFileSync(file, 'utf8'));
    const { _src, _lang, _model, ...body } = j;
    sameShape(src, body);
    return _src === hash(src) ? 'ok' : 'stale';
  } catch (e) {
    return fs.existsSync(file) ? `invalid: ${e.message}` : 'missing';
  }
}

async function main() {
  if (!CHECK && !KEY) throw new Error('GROQ_API_KEY not found');
  const jobs = [];
  const articles = [];
  for (const cc of CCS) {
    const dir = path.join(SRC, cc);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js') && x !== 'index.js').sort()) {
      const a = await loadArticle(path.join(dir, f));
      if (!a?.slug) { console.log(`skip ${cc}/${f}: no slug`); continue; }
      if (ONLY && a.slug !== ONLY) continue;
      const src = extract(a);
      articles.push({ cc, a, src });
      for (const lang of LANGS) {
        const file = path.join(OUT, lang, cc, `${a.slug}.json`);
        const state = validateFile(file, src);
        if (CHECK) { if (state !== 'ok') console.log(`${state.padEnd(8)} ${lang}/${cc}/${a.slug}`); continue; }
        if (state === 'ok' && !FORCE) continue;
        jobs.push({ lang, cc, slug: a.slug, src, file });
      }
    }
  }
  console.log(`${articles.length} articles · ${jobs.length} translations to do · model ${MODEL}`);
  const failed = [];
  let done = 0;
  await pool(jobs, CONCURRENCY, async (j) => {
    try {
      const out = await translateArticle(j.lang, j.cc, j.slug, j.src);
      fs.mkdirSync(path.dirname(j.file), { recursive: true });
      fs.writeFileSync(j.file, `${JSON.stringify({ _src: hash(j.src), _lang: j.lang, _model: MODEL, ...out }, null, 1)}\n`);
      console.log(`✓ [${++done}/${jobs.length}] ${j.lang}/${j.cc}/${j.slug}`);
    } catch (e) {
      failed.push(`${j.lang}/${j.cc}/${j.slug}`);
      console.log(`✗ ${j.lang}/${j.cc}/${j.slug}: ${e.message}`);
    }
  });

  // Small per-language index for the list pages (cards): slug → h1/title/description.
  if (!ONLY && !opt('cc')) {
    for (const lang of LANGS) {
      const idx = {};
      for (const { cc, a, src } of articles) {
        const file = path.join(OUT, lang, cc, `${a.slug}.json`);
        if (validateFile(file, src) !== 'ok') continue;
        const { meta } = JSON.parse(fs.readFileSync(file, 'utf8'));
        idx[a.slug] = { h1: meta.h1, title: meta.title, description: meta.description };
      }
      fs.mkdirSync(path.join(OUT, lang), { recursive: true });
      fs.writeFileSync(path.join(OUT, lang, 'index.json'), `${JSON.stringify(idx, null, 1)}\n`);
      console.log(`index ${lang}: ${Object.keys(idx).length}/${articles.length}`);
    }
  }
  if (failed.length) { console.log(`FAILED (${failed.length}):\n  ${failed.join('\n  ')}`); process.exitCode = 1; }
}

const isMain = process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (isMain) main().catch((e) => { console.error(e.message); process.exit(1); });
