// Checks /sitemap.xml, /robots.txt and /llms.txt of the casa-libre.com hub against a RUNNING server:
//   node scripts/check-sitemap.mjs [http://localhost:3150]
// Sitemap: 200 as XML, well-formed, every <loc> on https://casa-libre.com, listed once, YYYY-MM-DD lastmod; every
// URL (mapped to the local server) answers 200 with no redirect, is not noindex, and its canonical (when it declares
// one) is itself; every article of lib/blog.js is listed. robots.txt points to the sitemap. llms.txt answers 200,
// starts with an H1 and links every URL of the sitemap's blog articles.
import { readdirSync } from 'node:fs';
import path from 'node:path';

const LOCAL = (process.argv[2] || 'http://localhost:3150').replace(/\/$/, '');
const PROD = 'https://casa-libre.com';
const toLocal = (u) => LOCAL + (u.slice(PROD.length) || '/');
let errors = 0;
const err = (m) => { errors++; console.log(`ERROR ${m}`); };
const get = (u) => fetch(u, { redirect: 'manual' });

function wellFormed(xml) {
  const body = xml.replace(/^<\?xml[^>]*\?>\s*/, '');
  const stack = [];
  let roots = 0;
  for (const m of body.matchAll(/<(\/?)([A-Za-z][\w:.-]*)([^>]*?)(\/?)>/g)) {
    const [, close, name, , self] = m;
    if (close) { if (stack.pop() !== name) return `unbalanced </${name}>`; } else if (!self) { if (!stack.length) roots++; stack.push(name); } else if (!stack.length) roots++;
  }
  if (stack.length) return `unclosed <${stack.pop()}>`;
  if (roots !== 1) return `${roots} root elements`;
  return /&(?!amp;|lt;|gt;|quot;|apos;|#\d+;)/.test(body) ? 'bare & in the XML' : null;
}

const sm = await get(`${LOCAL}/sitemap.xml`);
const xml = await sm.text();
if (sm.status !== 200) err(`/sitemap.xml answered ${sm.status}`);
const wf = wellFormed(xml);
if (wf) err(`/sitemap.xml is not well-formed: ${wf}`);
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: ((/<loc>([^<]+)<\/loc>/.exec(m[1]) || [])[1] || '').replace(/&amp;/g, '&'),
  lastmod: (/<lastmod>([^<]+)<\/lastmod>/.exec(m[1]) || [])[1] || '',
}));
const locs = new Set();
for (const e of entries) {
  if (e.loc !== PROD && !e.loc.startsWith(`${PROD}/`)) err(`not on casa-libre.com: ${e.loc}`);
  if (locs.has(e.loc)) err(`listed twice: ${e.loc}`);
  locs.add(e.loc);
  if (!/^\d{4}-\d{2}-\d{2}/.test(e.lastmod)) err(`${e.loc}: lastmod "${e.lastmod}"`);
}

// every article file is in the sitemap
const dir = path.join(process.cwd(), 'content', 'blog');
let files = 0;
for (const cc of readdirSync(dir)) for (const f of readdirSync(path.join(dir, cc))) {
  if (!f.endsWith('.js') || f.startsWith('_') || f === 'index.js') continue;
  files++;
  const slug = f.replace(/\.js$/, '');
  if (![...locs].some((l) => l === `${PROD}/blog/${slug}`)) err(`article ${cc}/${slug} is not in the sitemap`);
}

let ok = 0;
let i = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (i < entries.length) {
    const e = entries[i++];
    const r = await get(toLocal(e.loc));
    if (r.status !== 200) { err(`${e.loc}: ${r.status}${r.headers.get('location') ? ` -> ${r.headers.get('location')}` : ''}`); continue; }
    const html = await r.text();
    const head = html.slice(0, html.indexOf('</head>') + 7);
    if (/<meta name="robots" content="[^"]*noindex/i.test(head) || /noindex/i.test(r.headers.get('x-robots-tag') || '')) err(`${e.loc}: noindex`);
    const canon = (/<link rel="canonical" href="([^"]+)"/.exec(head) || [])[1];
    if (canon && canon.replace(/\/$/, '') !== e.loc.replace(/\/$/, '')) err(`${e.loc}: canonical is ${canon}`);
    ok++;
  }
}));

const rb = await (await get(`${LOCAL}/robots.txt`)).text();
if (!/Sitemap: https:\/\/casa-libre\.com\/sitemap\.xml/.test(rb)) err('robots.txt does not point to the sitemap');

const lr = await get(`${LOCAL}/llms.txt`);
const llms = await lr.text();
if (lr.status !== 200) err(`/llms.txt answered ${lr.status}`);
if (!/^# \S/.test(llms)) err('/llms.txt does not start with an H1');
const linked = new Set([...llms.matchAll(/\]\((https:\/\/casa-libre\.com[^)\s]*)\)/g)].map((m) => m[1]));
for (const l of locs) if (l.startsWith(`${PROD}/blog`) && !linked.has(l)) err(`/llms.txt does not link ${l}`);

console.log(`casa-libre.com: sitemap ${entries.length} URLs (${files} article files), ${ok} answer 200; llms.txt ${Buffer.byteLength(llms)} bytes`);
console.log(`${errors} errors`);
process.exit(errors ? 1 : 0);
