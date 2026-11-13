// UI strings for the /blog pages in Spanish (default, what the server renders),
// English and Portuguese. Article bodies are pre-translated JSON files under
// content/blog-i18n/<lang>/<cc>/<slug>.json (scripts/translate-blog.mjs); this file
// only holds the chrome: header, footer, filters, labels, CTAs, empty states.
//
// Entries are strings or functions of a vars object `v` (n, name, host, cc…), so
// server components can render <T k="…" v={…} /> with plain serializable props.

export const LANGS = ['es', 'en', 'pt'];
// Shared with the hub homepage (app/page.js) so the choice follows the reader.
export const LANG_KEY = 'cl-lang';

// Voseo where the country uses it (Paraguay, Uruguay), tuteo elsewhere.
const vos = (cc) => cc === 'py' || cc === 'uy';

export const COUNTRY_NAMES = {
  es: { py: 'Paraguay', bo: 'Bolivia', uy: 'Uruguay', ve: 'Venezuela', sv: 'El Salvador' },
  en: { py: 'Paraguay', bo: 'Bolivia', uy: 'Uruguay', ve: 'Venezuela', sv: 'El Salvador' },
  pt: { py: 'Paraguai', bo: 'Bolívia', uy: 'Uruguai', ve: 'Venezuela', sv: 'El Salvador' },
};

export const CATEGORY_I18N = {
  en: {
    comprar: { name: 'Buying', title: 'Buying a property', intro: 'What to look at on a viewing, how to compare options, how to buy off-plan or a plot without surprises, and how to spot fake listings before you pay anything.' },
    alquilar: { name: 'Renting', title: 'Renting a house or an apartment', intro: 'Requirements, guarantees, contracts, deposits and moving budget, told from the tenant’s side.' },
    financiamiento: { name: 'Loans and financing', title: 'Loans and financing for your home', intro: 'How mortgages, public housing programs and installment purchases work, and how much to save before taking the step.' },
    'costos-e-impuestos': { name: 'Costs and taxes', title: 'Costs, taxes and expenses of a property', intro: 'What it costs to own, buy or rent a property beyond the price: debts to check, monthly expenses and the best currency to deal in.' },
    'documentos-y-tramites': { name: 'Documents and paperwork', title: 'Real-estate documents and paperwork', intro: 'Land registry, utilities, powers of attorney and papers: the procedures that come up when you buy, rent or move, explained step by step.' },
    'barrios-y-ciudades': { name: 'Neighborhoods and cities', title: 'Neighborhoods and cities: where to live', intro: 'How to choose an area based on your routine, your budget and the terrain, with criteria that work for any neighborhood.' },
    vender: { name: 'Selling and listing', title: 'Selling or renting out your property', intro: 'For owners and agents who list: how to handle inquiries, show and close deals with less back-and-forth.' },
  },
  pt: {
    comprar: { name: 'Comprar', title: 'Comprar um imóvel', intro: 'O que observar numa visita, como comparar opções, como comprar na planta ou um terreno sem surpresas e como detectar anúncios falsos antes de pagar qualquer coisa.' },
    alquilar: { name: 'Alugar', title: 'Alugar uma casa ou um apartamento', intro: 'Requisitos, garantias, contratos, depósito e orçamento da mudança, contados do lado do inquilino.' },
    financiamiento: { name: 'Crédito e financiamento', title: 'Crédito e financiamento para a sua moradia', intro: 'Como funcionam o crédito imobiliário, os programas públicos de habitação e as compras parceladas, e quanto vale a pena poupar antes de dar o passo.' },
    'costos-e-impuestos': { name: 'Custos e impostos', title: 'Custos, impostos e despesas de um imóvel', intro: 'O que custa ter, comprar ou alugar um imóvel além do preço: dívidas a verificar, despesas mensais e a moeda em que convém negociar.' },
    'documentos-y-tramites': { name: 'Documentos e trâmites', title: 'Documentos e trâmites imobiliários', intro: 'Cadastro, serviços, procurações e papéis: os trâmites que aparecem ao comprar, alugar ou se mudar, explicados passo a passo.' },
    'barrios-y-ciudades': { name: 'Bairros e cidades', title: 'Bairros e cidades: onde morar', intro: 'Como escolher a região conforme a sua rotina, o seu orçamento e o terreno, com critérios que servem para qualquer bairro.' },
    vender: { name: 'Vender e anunciar', title: 'Vender ou alugar o seu imóvel', intro: 'Para proprietários e corretores que anunciam: como atender consultas, mostrar e fechar negócios com menos idas e vindas.' },
  },
};

// Portuguese needs the article: "no Paraguai", "na Bolívia", "em El Salvador".
const PT_IN = { py: 'no Paraguai', bo: 'na Bolívia', uy: 'no Uruguai', ve: 'na Venezuela', sv: 'em El Salvador' };
const PT_FOR = { py: 'o Paraguai', bo: 'a Bolívia', uy: 'o Uruguai', ve: 'a Venezuela', sv: 'El Salvador' };
const ptIn = (v) => PT_IN[v.cc] || `em ${v.name}`;
const ptFor = (v) => PT_FOR[v.cc] || v.name;

const NOTARY = {
  en: { py: 'notary (escribano)', bo: 'notary', uy: 'notary (escribano)', ve: 'lawyer or registrar', sv: 'notary' },
  pt: { py: 'tabelião (escribano)', bo: 'tabelião', uy: 'tabelião (escribano)', ve: 'advogado ou registrador', sv: 'tabelião' },
};

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  pt: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
};
// Long date from YYYY-MM-DD, timezone-safe, per language.
export function longDate(iso, lang = 'es') {
  const [y, m, d] = String(iso || '').split('-').map(Number);
  if (!y || !m || !d) return iso || '';
  const mo = (MONTHS[lang] || MONTHS.es)[m - 1];
  if (lang === 'en') return `${mo} ${d}, ${y}`;
  return `${d} de ${mo} de ${y}`;
}

export const UI = {
  es: {
    navCountries: 'Países',
    connect: 'Conectar',
    connectFounder: 'Conectar con el fundador',
    footerTag: 'El marketplace inmobiliario de Sudamérica. En la web y en la app para iPhone y Android.',
    rights: 'Todos los derechos reservados.',
    earlyAccess: 'acceso anticipado',
    author: 'Equipo editorial de Casa-Libre',
    indexEyebrow: (v) => `Blog · ${v.n} artículos`,
    indexH1A: 'Comprar, alquilar y vivir en Sudamérica,',
    noFrills: 'sin vueltas.',
    indexSub: 'Respuestas directas para quien busca, alquila o publica una propiedad: requisitos, créditos, costos, trámites y cómo elegir zona. Cada artículo está escrito para un país, por el Equipo editorial de Casa-Libre.',
    emptyTitle: 'Pronto vas a encontrar artículos acá',
    emptyText: 'Estamos preparando el blog. Mientras tanto, entrá al sitio de Casa-Libre de tu país desde la página principal.',
    seeCountries: 'Ver los países',
    filterCountry: 'País',
    filterTopic: 'Tema',
    featured: 'Destacados',
    seeAll: 'Ver todo',
    all: 'Todos',
    allCountries: 'Todos los países',
    indexCtaA: 'Publicá gratis en Casa-Libre,',
    noCommission: 'sin comisión.',
    indexCtaText: 'Dueños e inmobiliarias publican sin comisión y reciben consultas por WhatsApp. Buscá en el mapa desde la web o desde la app para iPhone y Android.',
    publishFreeIn: (v) => `Publicar gratis en Casa-Libre ${v.name}`,
    seeProperties: 'Ver propiedades',
    chooseCountry: 'Elegí tu país',
    topicEyebrow: (v) => `Tema · ${v.n} artículos`,
    allArticles: 'Todos los artículos',
    countryEyebrow: (v) => `${v.n} artículos · ${v.host}`,
    countryH1A: (v) => `Comprar, alquilar y vivir en ${v.name},`,
    countryIntro: (v) => `Requisitos, créditos, costos, trámites y cómo elegir zona en ${v.name}, con respuestas directas. Para ver propiedades o publicar, entrá a Casa-Libre ${v.name}.`,
    countryCtaH: (v) => `${vos(v.cc) ? 'Publicá' : 'Publica'} gratis en Casa-Libre ${v.name}`,
    countryCtaText: 'Sin comisión. Casas, departamentos y terrenos de dueños e inmobiliarias en el mapa, con contacto directo por WhatsApp. En la web y en la app para iPhone y Android.',
    publishFree: 'Publicar gratis',
    minutes: (v) => `${v.n} min`,
    by: 'Por',
    published: 'Publicado el',
    updated: 'Actualizado el',
    readTime: (v) => `${v.n} min de lectura`,
    shortAnswer: 'Respuesta corta',
    inThisArticle: 'En este artículo',
    faq: 'Preguntas frecuentes',
    tip: 'Consejo: ',
    keepOn: (v) => `${vos(v.cc) ? 'Seguí' : 'Sigue'} en Casa-Libre ${v.name}`,
    guide: 'Guía: ',
    sources: 'Fuentes',
    disclaimer: (v) => `Artículo informativo del ${v.author}, pensado para ${v.name}. No reemplaza el asesoramiento de un ${v.notary}, abogado o asesor financiero; los montos, requisitos y plazos pueden cambiar o variar según el caso.`,
    sellerH: (v) => `${vos(v.cc) ? 'Publicá' : 'Publica'} gratis en Casa-Libre ${v.name}`,
    sellerText: 'Sin comisión. Tu aviso aparece en el mapa y los interesados te escriben directo por WhatsApp. También desde la app para iPhone y Android.',
    buyerH: (v) => `${vos(v.cc) ? 'Mirá' : 'Mira'} ${v.rent ? 'alquileres' : 'propiedades'} en ${v.name}`,
    buyerText: (v) => `Casas, departamentos y terrenos de dueños e inmobiliarias en el mapa de Casa-Libre ${v.name}, con contacto directo por WhatsApp. También en la app para iPhone y Android.`,
    related: 'Artículos relacionados',
    breadcrumb: 'Ruta',
    contents: 'Contenido',
    onlySpanish: '',
    language: 'Idioma',
  },
  en: {
    navCountries: 'Countries',
    connect: 'Connect',
    connectFounder: 'Connect with the founder',
    footerTag: 'The real-estate marketplace of South America. On the web and in the app for iPhone and Android.',
    rights: 'All rights reserved.',
    earlyAccess: 'early access',
    author: 'Casa-Libre editorial team',
    indexEyebrow: (v) => `Blog · ${v.n} articles`,
    indexH1A: 'Buying, renting and living in South America,',
    noFrills: 'straight to the point.',
    indexSub: 'Direct answers for anyone searching for, renting or listing a property: requirements, loans, costs, paperwork and how to choose an area. Each article is written for one country by the Casa-Libre editorial team.',
    emptyTitle: 'Articles are coming soon',
    emptyText: 'We are preparing the blog. In the meantime, open your country’s Casa-Libre site from the home page.',
    seeCountries: 'See the countries',
    filterCountry: 'Country',
    filterTopic: 'Topic',
    featured: 'Featured',
    seeAll: 'See all',
    all: 'All',
    allCountries: 'All countries',
    indexCtaA: 'List for free on Casa-Libre,',
    noCommission: 'no commission.',
    indexCtaText: 'Owners and agencies list with no commission and get inquiries on WhatsApp. Search the map on the web or in the app for iPhone and Android.',
    publishFreeIn: (v) => `List for free on Casa-Libre ${v.name}`,
    seeProperties: 'See properties',
    chooseCountry: 'Choose your country',
    topicEyebrow: (v) => `Topic · ${v.n} articles`,
    allArticles: 'All articles',
    countryEyebrow: (v) => `${v.n} articles · ${v.host}`,
    countryH1A: (v) => `Buying, renting and living in ${v.name},`,
    countryIntro: (v) => `Requirements, loans, costs, paperwork and how to choose an area in ${v.name}, with direct answers. To see properties or list one, go to Casa-Libre ${v.name}.`,
    countryCtaH: (v) => `List for free on Casa-Libre ${v.name}`,
    countryCtaText: 'No commission. Houses, apartments and plots from owners and agencies on the map, with direct contact on WhatsApp. On the web and in the app for iPhone and Android.',
    publishFree: 'List for free',
    minutes: (v) => `${v.n} min`,
    by: 'By',
    published: 'Published',
    updated: 'Updated',
    readTime: (v) => `${v.n} min read`,
    shortAnswer: 'Short answer',
    inThisArticle: 'In this article',
    faq: 'Frequently asked questions',
    tip: 'Tip: ',
    keepOn: (v) => `Continue on Casa-Libre ${v.name}`,
    guide: 'Guide (in Spanish): ',
    sources: 'Sources',
    disclaimer: (v) => `Informational article by the ${v.author}, written for ${v.name}. It does not replace advice from a ${v.notary}, lawyer or financial advisor; amounts, requirements and timeframes may change or vary from case to case.`,
    sellerH: (v) => `List for free on Casa-Libre ${v.name}`,
    sellerText: 'No commission. Your listing appears on the map and interested buyers message you directly on WhatsApp. Also from the app for iPhone and Android.',
    buyerH: (v) => `See ${v.rent ? 'rentals' : 'properties'} in ${v.name}`,
    buyerText: (v) => `Houses, apartments and plots from owners and agencies on the Casa-Libre ${v.name} map, with direct contact on WhatsApp. Also in the app for iPhone and Android.`,
    related: 'Related articles',
    breadcrumb: 'Breadcrumb',
    contents: 'Contents',
    onlySpanish: 'This article is not available in English yet, so it is shown in Spanish.',
    language: 'Language',
  },
  pt: {
    navCountries: 'Países',
    connect: 'Conectar',
    connectFounder: 'Conectar com o fundador',
    footerTag: 'O marketplace imobiliário da América do Sul. Na web e no app para iPhone e Android.',
    rights: 'Todos os direitos reservados.',
    earlyAccess: 'acesso antecipado',
    author: 'Equipe editorial da Casa-Libre',
    indexEyebrow: (v) => `Blog · ${v.n} artigos`,
    indexH1A: 'Comprar, alugar e morar na América do Sul,',
    noFrills: 'sem rodeios.',
    indexSub: 'Respostas diretas para quem procura, aluga ou anuncia um imóvel: requisitos, crédito, custos, trâmites e como escolher a região. Cada artigo é escrito para um país pela Equipe editorial da Casa-Libre.',
    emptyTitle: 'Em breve você vai encontrar artigos aqui',
    emptyText: 'Estamos preparando o blog. Enquanto isso, acesse o site da Casa-Libre do seu país pela página principal.',
    seeCountries: 'Ver os países',
    filterCountry: 'País',
    filterTopic: 'Tema',
    featured: 'Destaques',
    seeAll: 'Ver tudo',
    all: 'Todos',
    allCountries: 'Todos os países',
    indexCtaA: 'Anuncie grátis na Casa-Libre,',
    noCommission: 'sem comissão.',
    indexCtaText: 'Proprietários e imobiliárias anunciam sem comissão e recebem consultas pelo WhatsApp. Procure no mapa pela web ou pelo app para iPhone e Android.',
    publishFreeIn: (v) => `Anunciar grátis na Casa-Libre ${v.name}`,
    seeProperties: 'Ver imóveis',
    chooseCountry: 'Escolha o seu país',
    topicEyebrow: (v) => `Tema · ${v.n} artigos`,
    allArticles: 'Todos os artigos',
    countryEyebrow: (v) => `${v.n} artigos · ${v.host}`,
    countryH1A: (v) => `Comprar, alugar e morar ${ptIn(v)},`,
    countryIntro: (v) => `Requisitos, crédito, custos, trâmites e como escolher a região ${ptIn(v)}, com respostas diretas. Para ver imóveis ou anunciar, acesse a Casa-Libre ${v.name}.`,
    countryCtaH: (v) => `Anuncie grátis na Casa-Libre ${v.name}`,
    countryCtaText: 'Sem comissão. Casas, apartamentos e terrenos de proprietários e imobiliárias no mapa, com contato direto pelo WhatsApp. Na web e no app para iPhone e Android.',
    publishFree: 'Anunciar grátis',
    minutes: (v) => `${v.n} min`,
    by: 'Por',
    published: 'Publicado em',
    updated: 'Atualizado em',
    readTime: (v) => `${v.n} min de leitura`,
    shortAnswer: 'Resposta curta',
    inThisArticle: 'Neste artigo',
    faq: 'Perguntas frequentes',
    tip: 'Dica: ',
    keepOn: (v) => `Continue na Casa-Libre ${v.name}`,
    guide: 'Guia (em espanhol): ',
    sources: 'Fontes',
    disclaimer: (v) => `Artigo informativo da ${v.author}, pensado para ${ptFor(v)}. Não substitui a orientação de um ${v.notary}, advogado ou consultor financeiro; valores, requisitos e prazos podem mudar ou variar conforme o caso.`,
    sellerH: (v) => `Anuncie grátis na Casa-Libre ${v.name}`,
    sellerText: 'Sem comissão. Seu anúncio aparece no mapa e os interessados escrevem direto para você pelo WhatsApp. Também pelo app para iPhone e Android.',
    buyerH: (v) => `Veja ${v.rent ? 'imóveis para alugar' : 'imóveis'} ${ptIn(v)}`,
    buyerText: (v) => `Casas, apartamentos e terrenos de proprietários e imobiliárias no mapa da Casa-Libre ${v.name}, com contato direto pelo WhatsApp. Também no app para iPhone e Android.`,
    related: 'Artigos relacionados',
    breadcrumb: 'Navegação',
    contents: 'Conteúdo',
    onlySpanish: 'Este artigo ainda não está disponível em português, por isso é exibido em espanhol.',
    language: 'Idioma',
  },
};

// Resolve a UI string. `v` may carry cc; name is localized from it when absent.
export function ui(lang, key, v = {}) {
  const dict = UI[lang] || UI.es;
  const entry = dict[key] ?? UI.es[key];
  const vars = { ...v };
  if (vars.cc && vars.name == null) vars.name = countryName(vars.cc, lang);
  return typeof entry === 'function' ? entry(vars) : entry;
}

export function countryName(cc, lang = 'es') {
  return (COUNTRY_NAMES[lang] || COUNTRY_NAMES.es)[cc] || cc;
}

// Category { name, title, intro } in a language; Spanish comes from lib/blog-meta.
export function categoryText(slug, lang, es) {
  if (lang === 'es') return es;
  return (CATEGORY_I18N[lang] || {})[slug] || es;
}

export function notaryFor(cc, lang, es) {
  if (lang === 'es') return es;
  return (NOTARY[lang] || {})[cc] || es;
}
