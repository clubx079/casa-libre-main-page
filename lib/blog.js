// Blog on the casa-libre.com hub (/blog) — long-form articles for every country,
// one file per article under content/blog/<cc>/<slug>.js, registered in
// content/blog/<cc>/index.js. Ported from the Paraguay site's blog (branch
// omar-blog); the article files are byte-for-byte the same.
//
// Multi-country: REGISTRY maps a country code to its article list. Today only
// Paraguay has articles; bo/uy/ve/sv are wired up and stay hidden (no country
// filter, /blog/pais/<cc> 404s) until their index.js lists something.
//
// Links: article files keep the country site's own relative paths
// (/propiedades?…, /propiedades-en/…, /publicar, /guias/…). The hub is a different
// domain, so normalize() rewrites every non-/blog relative link to an absolute URL
// on that country's Casa-Libre site, with UTM tags (utm_campaign=<cc>,
// utm_content=<slug>). Links between blog articles (/blog/…) stay relative.
//
// Article shape: slug, title (SEO <title>), h1, description, category (key of
// CATEGORIES), tags[], author, datePublished, dateModified (YYYY-MM-DD), featured?,
// answer, sections[{ id, h2, paras[], bullets[], steps[], table{head,rows}, tip }],
// faq[{q,a}], sources[{name,publisher,url}], related[{href,label}],
// relatedGuias[slug], reviewNote (internal; never rendered).
import PY from '@/content/blog/py';
import BO from '@/content/blog/bo';
import UY from '@/content/blog/uy';
import VE from '@/content/blog/ve';
import SV from '@/content/blog/sv';

export const HUB = 'https://casa-libre.com';
export const BLOG_URL = `${HUB}/blog`;
export const BLOG_AUTHOR = 'Equipo editorial de Casa-Libre';

// Country sites the articles link to. `locale` feeds inLanguage; `notary` is the
// professional named in the disclaimer.
export const COUNTRIES = {
  py: { code: 'py', name: 'Paraguay', site: 'https://casa-libre.com.py', locale: 'es-PY', notary: 'escribano' },
  bo: { code: 'bo', name: 'Bolivia', site: 'https://casa-libre.com.bo', locale: 'es-BO', notary: 'notario' },
  uy: { code: 'uy', name: 'Uruguay', site: 'https://uy.casa-libre.com', locale: 'es-UY', notary: 'escribano' },
  ve: { code: 've', name: 'Venezuela', site: 'https://casa-libre.com.ve', locale: 'es-VE', notary: 'abogado o registrador' },
  sv: { code: 'sv', name: 'El Salvador', site: 'https://sv.casa-libre.com', locale: 'es-SV', notary: 'notario' },
};

const REGISTRY = { py: PY, bo: BO, uy: UY, ve: VE, sv: SV };

// Category hubs, shared by every country. Each has its own intro copy so
// /blog/categoria/<cat> is a real page, not a bare list. Empty ones are hidden.
export const CATEGORIES = {
  comprar: {
    name: 'Comprar',
    title: 'Comprar una propiedad',
    intro: 'Qué mirar en una visita, cómo comparar opciones, cómo comprar en pozo o un terreno sin sorpresas y cómo detectar avisos falsos antes de pagar nada.',
  },
  alquilar: {
    name: 'Alquilar',
    title: 'Alquilar una casa o un departamento',
    intro: 'Requisitos, garantías, contratos, depósito y presupuesto de mudanza, contados desde el lado del inquilino.',
  },
  financiamiento: {
    name: 'Créditos y financiamiento',
    title: 'Créditos y financiamiento para tu vivienda',
    intro: 'Cómo funcionan el crédito hipotecario, los programas públicos de vivienda y las compras en cuotas, y cuánto conviene ahorrar antes de dar el paso.',
  },
  'costos-e-impuestos': {
    name: 'Costos e impuestos',
    title: 'Costos, impuestos y gastos de una propiedad',
    intro: 'Lo que cuesta tener, comprar o alquilar una propiedad más allá del precio: deudas a verificar, gastos mensuales y la moneda en la que conviene operar.',
  },
  'documentos-y-tramites': {
    name: 'Documentos y trámites',
    title: 'Documentos y trámites inmobiliarios',
    intro: 'Catastro, servicios, poderes y papeles: los trámites que aparecen al comprar, alquilar o mudarte, explicados paso a paso.',
  },
  'barrios-y-ciudades': {
    name: 'Barrios y ciudades',
    title: 'Barrios y ciudades: dónde vivir',
    intro: 'Cómo elegir zona según tu rutina, tu presupuesto y el terreno, con criterios que sirven para cualquier barrio.',
  },
  vender: {
    name: 'Vender y publicar',
    title: 'Vender o alquilar tu propiedad',
    intro: 'Para dueños y agentes que publican: cómo atender consultas, mostrar y cerrar operaciones con menos vueltas.',
  },
};

// Absolute, UTM-tagged URL on a country's Casa-Libre site. Relative /blog/… links
// and anything already absolute are returned unchanged.
export function siteUrl(cc, path, slug) {
  if (!path || /^https?:\/\//i.test(path) || path === '/blog' || path.startsWith('/blog/') || path.startsWith('#')) return path;
  const c = COUNTRIES[cc];
  const u = new URL(path, c.site);
  u.searchParams.set('utm_source', 'casa-libre-blog');
  u.searchParams.set('utm_medium', 'blog');
  u.searchParams.set('utm_campaign', cc);
  if (slug) u.searchParams.set('utm_content', slug);
  return u.toString();
}

const wordsOf = (a) => {
  const parts = [a.answer];
  (a.sections || []).forEach((s) => {
    parts.push(s.h2, ...(s.paras || []), ...(s.bullets || []), ...(s.steps || []), s.tip || '');
    if (s.table) s.table.rows.forEach((r) => parts.push(...r));
  });
  (a.faq || []).forEach((f) => parts.push(f.q, f.a));
  return parts.join(' ').split(/\s+/).filter(Boolean).length;
};

function normalize(a, cc) {
  const words = wordsOf(a);
  const link = (href) => siteUrl(cc, href, a.slug);
  return {
    author: BLOG_AUTHOR,
    tags: [],
    relatedGuias: [],
    sources: [],
    faq: [],
    ...a,
    country: cc,
    related: (a.related || []).map((r) => ({ ...r, href: link(r.href), external: !r.href.startsWith('/blog') })),
    guiaLinks: (a.relatedGuias || []).map((g) => ({ slug: g, href: link(`/guias/${g}`) })),
    dateModified: a.dateModified || a.datePublished,
    words,
    readingMinutes: Math.max(3, Math.round(words / 200)),
  };
}

const sortByDate = (x, y) => (y.datePublished || '').localeCompare(x.datePublished || '') || x.title.localeCompare(y.title);

const ALL = Object.entries(REGISTRY)
  .flatMap(([cc, list]) => (list || []).map((a) => normalize(a, cc)))
  .sort(sortByDate);

// Slugs are global on the hub (/blog/<slug>), so two countries can't share one.
if (new Set(ALL.map((p) => p.slug)).size !== ALL.length) {
  throw new Error('lib/blog.js: duplicate blog slug across countries');
}

export function allPosts(cc = null) { return cc ? ALL.filter((p) => p.country === cc) : ALL; }
export function getPost(slug) { return ALL.find((p) => p.slug === slug) || null; }
export function postSlugs() { return ALL.map((p) => p.slug); }
export function featuredPosts(n = 3, cc = null) {
  const pool = allPosts(cc);
  const f = pool.filter((p) => p.featured);
  return (f.length ? f : pool).slice(0, n);
}
export function postsInCategory(cat, cc = null) { return allPosts(cc).filter((p) => p.category === cat); }

// Only categories that actually have articles — no empty hub pages.
export function activeCategories(cc = null) {
  const pool = allPosts(cc);
  return Object.entries(CATEGORIES)
    .map(([slug, c]) => ({ slug, ...c, count: pool.filter((p) => p.category === slug).length }))
    .filter((c) => c.count > 0);
}
export function categoryBySlug(slug) {
  const c = CATEGORIES[slug];
  return c ? { slug, ...c } : null;
}

// Only countries that actually have articles (country filter, /blog/pais/<cc>).
export function activeCountries() {
  return Object.values(COUNTRIES)
    .map((c) => ({ ...c, count: ALL.filter((p) => p.country === c.code).length }))
    .filter((c) => c.count > 0);
}
export function countryByCode(cc) { return COUNTRIES[cc] || null; }

// Related articles: same country only, same category first, then shared tags.
export function relatedPosts(post, n = 3) {
  const score = (p) => (p.category === post.category ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length;
  return ALL.filter((p) => p.slug !== post.slug && p.country === post.country)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.p);
}

export function blogLastModified(list = ALL) {
  return list.reduce((m, p) => (p.dateModified > m ? p.dateModified : m), '') || null;
}

// "13 de noviembre de 2026" from YYYY-MM-DD, timezone-safe.
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
export function fechaLarga(iso) {
  const [y, m, d] = String(iso || '').split('-').map(Number);
  if (!y || !m || !d) return iso || '';
  return `${d} de ${MESES[m - 1]} de ${y}`;
}

export function breadcrumbLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
  };
}
