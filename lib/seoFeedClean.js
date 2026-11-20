// Pure helpers for the AI SEO feed of the casa-libre.com hub (lib/seoFeed.js): validate and clean everything the
// Casa-Libre admin sends. No Next, no React, no app imports, so lib/seoFeedClean.test.mjs runs them with plain
// `node --test`. Adapted from the six SEO sites (lib/seoFeedClean.js there); hub differences:
//   - guides live at /guias/<slug> (one namespace, no country prefix, no trailing slash);
//   - a hub guide is cross-country: it may link to every Casa-Libre country site (HUB_HOSTS) and to the
//     Casa-Libre app in the App Store / Google Play (exact URLs only);
//   - cc is informative (one of the live countries, or '' when missing/unknown) and never drops a guide.
//
// Rule: nothing from the feed is trusted. A field that is not what we expect is dropped; a guide that is missing
// what a page needs is dropped whole. HTML keeps only <a href> (internal paths or Casa-Libre), <strong> and <em>;
// every other tag goes, text is escaped.

export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// The live Casa-Libre countries a hub guide may be about, and the hosts its links may point to.
export const HUB_COUNTRIES = ['py', 'bo', 'uy', 've', 'sv'];
export const HUB_HOSTS = ['casa-libre.com', 'casa-libre.com.py', 'casa-libre.com.bo', 'uy.casa-libre.com', 'casa-libre.com.ve', 'sv.casa-libre.com'];
// The Casa-Libre app (same links as app/llms.txt): only these exact URLs (query/hash ignored).
export const APP_URLS = ['https://apps.apple.com/us/app/casa-libre/id6822493219', 'https://play.google.com/store/apps/details?id=py.casalibre.mobile'];
// Slugs a feed guide may never take (/guias/<slug> would shadow nothing today, but keep room for real pages).
export const RESERVED = ['guias', 'blog', 'api', 'llamada', 'sitemap', 'llms', 'pais', 'categoria'];

const LIMITS = { guides: 500, overrides: 500, sections: 12, blocks: 30, items: 30, faq: 10, summary: 8, extraLinks: 10, related: 10, html: 4000, text: 600 };

// ---- text ----------------------------------------------------------------------------------------------------

const decodeEntities = (s) => s
  .replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#0*39;|&#x0*27;|&apos;/gi, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/** Plain text: tags removed, entities decoded, control characters and extra spaces gone, cut at `max`. */
export function cleanText(v, max = LIMITS.text) {
  if (typeof v !== 'string') return '';
  let s = v.replace(/<(script|style)\b[\s\S]*?<\/\1\s*>/gi, ' ').replace(/<[^>]*>/g, ' ');
  s = decodeEntities(s).replace(/[\u0000-\u001f\u007f\u2028\u2029]/g, ' ').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim();
  if (s.length > max) s = s.slice(0, max).replace(/\s+\S*$/, '').trim() || s.slice(0, max);
  return s;
}

const escText = (s) => s.replace(/&(?!(?:[a-z]{2,8}|#\d{1,6}|#x[0-9a-f]{1,6});)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** A path on the hub: /, /guias, /guias/x, /blog/pais/py (optional #anchor). Normalized without a trailing slash, or ''. */
export function internalPath(href) {
  if (typeof href !== 'string') return '';
  const m = /^\/((?:[a-z0-9]+(?:-[a-z0-9]+)*)(?:\/[a-z0-9]+(?:-[a-z0-9]+)*){0,2})?\/?(#[a-z0-9-]{1,80})?$/.exec(href.trim());
  if (!m) return '';
  return `/${m[1] || ''}${m[2] || ''}`;
}

/** An https link to Casa-Libre (one of `hosts`, with or without www) or the Casa-Libre app. The URL string or ''. */
export function casaLibreUrl(href, hosts = HUB_HOSTS) {
  if (typeof href !== 'string' || !/^https:\/\//i.test(href.trim())) return '';
  let u;
  try { u = new URL(href.trim()); } catch { return ''; }
  if (u.protocol !== 'https:' || u.username || u.password || u.port) return '';
  const host = u.hostname.toLowerCase().replace(/^www\./, '');
  if (hosts.includes(host)) return u.toString();
  const app = `${u.origin}${u.pathname}${u.hostname === 'play.google.com' ? `?id=${u.searchParams.get('id') || ''}` : ''}`;
  return APP_URLS.includes(app) ? u.toString() : '';
}

/** href allowed in pipeline HTML: an internal path or Casa-Libre. '' when not allowed. */
export function allowedHref(raw, hosts = HUB_HOSTS) {
  const href = decodeEntities(String(raw || '')).trim();
  if (href.startsWith('/')) return internalPath(href);
  return casaLibreUrl(href, hosts);
}

const ALLOWED = new Set(['a', 'strong', 'em']);
const DROP_WITH_CONTENT = /<(script|style|iframe|object|embed|template|noscript|textarea|select|svg|math|title)\b[\s\S]*?<\/\1\s*>/gi;

/**
 * HTML with only <a href>, <strong>, <em>. Tags are rebuilt (no attributes besides href; external Casa-Libre links
 * get target="_blank" rel="noopener"), balanced, never nested <a>.
 */
export function sanitizeHtml(v, { hosts = HUB_HOSTS, max = LIMITS.html } = {}) {
  if (typeof v !== 'string') return '';
  let src = v.replace(/<!--[\s\S]*?(-->|$)/g, '').replace(DROP_WITH_CONTENT, '');
  src = src.replace(/<(script|style|iframe|object|embed|template|noscript|textarea|select|svg|math|title)\b[\s\S]*$/gi, ''); // unclosed
  src = src.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '');
  const out = [];
  const open = [];
  const re = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^<>]*)>|<|>/g;
  let last = 0;
  let m;
  while ((m = re.exec(src))) {
    out.push(escText(src.slice(last, m.index)));
    last = re.lastIndex;
    if (!m[1]) continue; // a lone < or > is dropped
    const name = m[1].toLowerCase();
    const closing = m[0].startsWith('</');
    if (!ALLOWED.has(name)) continue;
    if (closing) {
      const i = open.lastIndexOf(name);
      if (i === -1) continue;
      while (open.length > i) out.push(`</${open.pop()}>`);
      continue;
    }
    if (name === 'a') {
      if (open.includes('a')) continue;
      const hm = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i.exec(m[2]);
      const href = hm ? allowedHref(hm[1] ?? hm[2] ?? hm[3], hosts) : '';
      if (!href) continue; // the text stays, the link goes
      out.push(href.startsWith('/') ? `<a href="${escAttr(href)}">` : `<a href="${escAttr(href)}" target="_blank" rel="noopener">`);
      open.push('a');
      continue;
    }
    if (open.length >= 6) continue;
    out.push(`<${name}>`);
    open.push(name);
  }
  out.push(escText(src.slice(last)));
  while (open.length) out.push(`</${open.pop()}>`);
  const html = out.join('').replace(/\s+/g, ' ').trim();
  if (html.length > max) return ''; // too long to cut safely: drop it
  return cleanText(html) ? html : ''; // empty once the tags are gone = nothing to show
}

const arr = (v, max) => (Array.isArray(v) ? v.slice(0, max) : []);
const date = (v) => (typeof v === 'string' && DATE_RE.test(v.slice(0, 10)) ? v.slice(0, 10) : '');
const anchor = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);

// ---- guides --------------------------------------------------------------------------------------------------

/** One pipeline guide, cleaned, or null when it is not usable. opts: { hosts, reserved } */
export function cleanGuide(raw, { hosts = HUB_HOSTS, reserved = RESERVED } = {}) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const slug = typeof raw.slug === 'string' ? raw.slug : '';
  if (!SLUG_RE.test(slug) || slug.length > 100 || reserved.includes(slug)) return null;
  const cc = typeof raw.cc === 'string' && HUB_COUNTRIES.includes(raw.cc.toLowerCase()) ? raw.cc.toLowerCase() : '';
  const html = (x) => sanitizeHtml(x, { hosts });

  const title = cleanText(raw.title, 70);
  const h1 = cleanText(raw.h1, 140) || title;
  const answer = cleanText(raw.answer, 1200);
  if (!title || !h1 || !answer) return null;

  const ids = new Set(['preguntas-frecuentes', 'en-resumen', 'mas-guias', 'casa-libre']);
  const sections = [];
  for (const s of arr(raw.sections, LIMITS.sections)) {
    if (!s || typeof s !== 'object') continue;
    const h2 = cleanText(s.h2, 160);
    if (!h2) continue;
    const blocks = [];
    for (const b of arr(s.blocks, LIMITS.blocks)) {
      if (!b || typeof b !== 'object') continue;
      if (b.t === 'p') { const x = html(b.html); if (x) blocks.push({ t: 'p', html: x }); }
      else if (b.t === 'ul') { const items = arr(b.items, LIMITS.items).map(html).filter(Boolean); if (items.length) blocks.push({ t: 'ul', items }); }
    }
    if (!blocks.length) continue;
    let id = (typeof s.id === 'string' && SLUG_RE.test(s.id) ? s.id : anchor(h2)).slice(0, 80) || `seccion-${sections.length + 1}`;
    while (ids.has(id)) id = `${id}-${sections.length + 1}`;
    ids.add(id);
    sections.push({ id, h2, blocks });
  }
  if (!sections.length) return null;

  const faq = arr(raw.faq, LIMITS.faq).map((f) => (f && typeof f === 'object' ? { q: cleanText(f.q, 200), a: html(f.a) } : null)).filter((f) => f && f.q && f.a);
  const summary = arr(raw.summary, LIMITS.summary).map(html).filter(Boolean);
  const related = arr(raw.related, LIMITS.related).filter((x) => typeof x === 'string' && SLUG_RE.test(x) && x !== slug);
  const published = date(raw.published) || date(raw.updated);
  const updated = date(raw.updated) || published;

  return {
    cc, slug, title, h1,
    description: cleanText(raw.description, 160),
    navLabel: cleanText(raw.navLabel, 60),
    blurb: cleanText(raw.blurb, 240),
    published, updated, answer, summary, sections, faq, related,
    source: 'pipeline',
  };
}

/** One override, cleaned, or null. { path, title?, h1?, description?, extraLinks:[{href,label}] } */
export function cleanOverride(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const path = internalPath(raw.path);
  if (!path || path.includes('#')) return null;
  const out = { path };
  const title = cleanText(raw.title, 70);
  const h1 = cleanText(raw.h1, 140);
  const description = cleanText(raw.description, 160);
  if (title) out.title = title;
  if (h1) out.h1 = h1;
  if (description) out.description = description;
  const seen = new Set();
  out.extraLinks = arr(raw.extraLinks ?? raw.extra_links, LIMITS.extraLinks).map((l) => {
    if (!l || typeof l !== 'object') return null;
    const href = internalPath(l.href);
    const label = cleanText(l.label, 120);
    if (!href || !label || seen.has(href)) return null;
    seen.add(href);
    return { href, label };
  }).filter(Boolean);
  return out.title || out.h1 || out.description || out.extraLinks.length ? out : null;
}

export const EMPTY_FEED = Object.freeze({ updatedAt: '', guides: Object.freeze([]), overrides: Object.freeze([]) });

/** The whole feed response, cleaned. Anything that is not the expected shape gives the empty feed. */
export function cleanFeed(raw, { domain, ...opts } = {}) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return EMPTY_FEED;
  if (domain && raw.site && raw.site !== domain) return EMPTY_FEED;
  const guides = [];
  const slugs = new Set();
  for (const g of arr(raw.guides, LIMITS.guides)) {
    const x = cleanGuide(g, opts);
    if (!x || slugs.has(x.slug)) continue; // /guias/<slug> is one namespace: first one wins
    slugs.add(x.slug);
    guides.push(x);
  }
  const overrides = [];
  const paths = new Set();
  for (const o of arr(raw.overrides, LIMITS.overrides)) {
    const x = cleanOverride(o);
    if (!x || paths.has(x.path)) continue;
    paths.add(x.path);
    overrides.push(x);
  }
  return { updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt.slice(0, 40) : '', guides, overrides };
}

// ---- apply ---------------------------------------------------------------------------------------------------

export const guidePath = (slug) => `/guias/${slug}`;

/**
 * The hub's guides with the overrides applied (title/h1/description; extraLinks kept only when they point to a page
 * that exists: another guide or one of `extraPaths`), newest first. `related` keeps only slugs of existing guides.
 */
export function applyFeed(feed, { extraPaths = [] } = {}) {
  const guides = Array.isArray(feed?.guides) ? feed.guides : [];
  if (!guides.length) return [];
  const byPath = new Map((feed.overrides || []).map((o) => [o.path, o]));
  const known = new Set([...guides.map((g) => guidePath(g.slug)), ...extraPaths]);
  const slugs = new Set(guides.map((g) => g.slug));
  return guides.map((g) => {
    const own = guidePath(g.slug);
    const o = byPath.get(own);
    const related = (g.related || []).filter((s) => s !== g.slug && slugs.has(s));
    const extraLinks = o ? (o.extraLinks || []).filter((l) => l.href.split('#')[0] !== own && known.has(l.href.split('#')[0])) : [];
    return {
      ...g,
      related,
      ...(o?.title ? { title: o.title } : {}),
      ...(o?.h1 ? { h1: o.h1 } : {}),
      ...(o?.description ? { description: o.description } : {}),
      extraLinks,
    };
  }).sort((a, b) => (b.updated || b.published || '').localeCompare(a.updated || a.published || '') || a.title.localeCompare(b.title));
}

/** JSON for a <script type="application/ld+json">: `<`, `>`, `&` and line separators escaped. */
export function jsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}
