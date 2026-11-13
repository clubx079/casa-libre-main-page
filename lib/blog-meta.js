// Blog constants and helpers that do NOT import the article content, so client
// components can use them without pulling ~100 Spanish articles into the bundle.
// lib/blog.js re-exports everything here; server code keeps importing lib/blog.

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

// Category hubs, shared by every country. Each has its own intro copy so
// /blog/categoria/<cat> is a real page, not a bare list. Empty ones are hidden.
// English/Portuguese versions live in lib/blog-i18n.js (CATEGORY_I18N).
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

// "13 de noviembre de 2026" from YYYY-MM-DD, timezone-safe.
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
export function fechaLarga(iso) {
  const [y, m, d] = String(iso || '').split('-').map(Number);
  if (!y || !m || !d) return iso || '';
  return `${d} de ${MESES[m - 1]} de ${y}`;
}
