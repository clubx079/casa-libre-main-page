'use client';
import { useState } from 'react';

// Six-country network. Only Paraguay is live today; the rest link to their future
// country TLDs and show a "coming soon" state until they launch.
const COUNTRIES = [
  { key: 'py', name: { es: 'Paraguay', en: 'Paraguay', pt: 'Paraguai' }, tld: 'casa-libre.com.py', url: 'https://casa-libre.com.py', live: true, city: 'Asunción' },
  { key: 'ar', name: { es: 'Argentina', en: 'Argentina', pt: 'Argentina' }, tld: 'casa-libre.com.ar', url: 'https://casa-libre.com.ar', live: false, city: 'Buenos Aires' },
  { key: 'br', name: { es: 'Brasil', en: 'Brazil', pt: 'Brasil' }, tld: 'casa-libre.com.br', url: 'https://casa-libre.com.br', live: false, city: 'São Paulo' },
  { key: 'bo', name: { es: 'Bolivia', en: 'Bolivia', pt: 'Bolívia' }, tld: 'casa-libre.com.bo', url: 'https://casa-libre.com.bo', live: false, city: 'La Paz' },
  { key: 'cl', name: { es: 'Chile', en: 'Chile', pt: 'Chile' }, tld: 'casa-libre.com.cl', url: 'https://casa-libre.com.cl', live: false, city: 'Santiago' },
  { key: 'uy', name: { es: 'Uruguay', en: 'Uruguay', pt: 'Uruguai' }, tld: 'casa-libre.com.uy', url: 'https://casa-libre.com.uy', live: false, city: 'Montevideo' },
];

const DICT = {
  es: {
    nav: { countries: 'Países', how: 'Cómo funciona', faq: 'Preguntas', about: 'Nosotros' },
    heroEyebrow: 'Sudamérica · un solo marketplace',
    heroA: 'El marketplace inmobiliario',
    heroB: 'de Sudamérica.',
    heroSub: 'Comprá, alquilá y vendé casas, departamentos y terrenos — directo con el dueño o la inmobiliaria, sin intermediarios y sin comisiones. Un solo lugar, seis países.',
    heroCta: 'Elegí tu país', heroCta2: 'Cómo funciona',
    statCountries: 'países', statDirect: 'contacto directo', statCommission: 'comisiones', statProps: 'propiedades en Paraguay',
    ticker: ['ASUNCIÓN', 'BUENOS AIRES', 'SÃO PAULO', 'LA PAZ', 'SANTIAGO', 'MONTEVIDEO'],
    countriesTitle: 'Elegí tu país',
    countriesSub: 'Cada país tiene su propio Casa Libre, con propiedades y precios locales. Tocá una tarjeta para entrar.',
    live: 'En vivo', soon: 'Próximamente', enter: 'Entrar', notify: 'Muy pronto',
    whyTitle: 'Un marketplace, todo un continente',
    whyLead: 'Sudamérica tiene cientos de millones de personas buscando dónde vivir, invertir o mudarse entre países. Casa Libre reúne esa demanda en una sola marca — con un sitio local para cada país y una experiencia consistente en todos.',
    why: [
      { t: 'Directo, sin intermediarios', d: 'Los compradores contactan al dueño o agente al instante por WhatsApp. Sin comisiones ocultas, sin fricción.' },
      { t: 'Local en cada país', d: 'Precios, zonas e idioma de cada mercado. Paraguay en guaraníes y dólares, Brasil en portugués, y así en cada uno.' },
      { t: 'Una sola marca de confianza', d: 'La misma experiencia Casa Libre, del Chaco a la Patagonia. Publicás una vez, llegás a toda la región.' },
    ],
    dataTitle: 'La escala de la región',
    data: [
      { n: '6', l: 'países en la red' },
      { n: '+430M', l: 'habitantes en Sudamérica' },
      { n: '+2.000', l: 'propiedades activas en Paraguay' },
      { n: '0', l: 'comisiones para publicar' },
    ],
    dataNote: 'Paraguay ya está en vivo. Argentina, Brasil, Bolivia, Chile y Uruguay se suman próximamente — la red crece país por país.',
    howTitle: 'Cómo funciona',
    how: [
      { t: 'Elegí tu país', d: 'Entrá al Casa Libre de tu país desde las tarjetas de arriba.' },
      { t: 'Explorá o publicá', d: 'Buscá entre miles de propiedades — o publicá la tuya, gratis, en minutos.' },
      { t: 'Contactá directo', d: 'Escribile al dueño o agente por WhatsApp, sin intermediarios.' },
    ],
    footTag: 'El marketplace inmobiliario de Sudamérica. Directo, local y sin comisiones.',
    colCountries: 'Países', colCompany: 'Empresa', colHelp: 'Ayuda', colLegal: 'Legal',
    lCompany: ['Nosotros', 'Para inmobiliarias', 'Prensa', 'Contacto'],
    lHelp: ['Preguntas frecuentes', 'Cómo publicar', 'Consejos de seguridad', 'Soporte'],
    lLegal: ['Términos y condiciones', 'Privacidad', 'Cookies'],
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Qué es Casa Libre?', a: 'Es el marketplace inmobiliario de Sudamérica: comprá, alquilá o vendé propiedades directo con el dueño o la inmobiliaria, sin intermediarios y sin comisiones.' },
      { q: '¿En qué países está disponible?', a: 'Paraguay ya está en vivo (casa-libre.com.py). Argentina, Brasil, Bolivia, Chile y Uruguay se lanzan próximamente.' },
      { q: '¿Cuánto cuesta publicar?', a: 'Publicar es gratis. Cada país ofrece planes opcionales para destacar tu propiedad y darle más visibilidad.' },
      { q: '¿Cómo contacto a quien publica?', a: 'Directo por WhatsApp o teléfono desde el aviso — sin comisiones ni intermediarios.' },
    ],
    rights: 'Todos los derechos reservados.',
  },
  en: {
    nav: { countries: 'Countries', how: 'How it works', faq: 'FAQ', about: 'About' },
    heroEyebrow: 'South America · one marketplace',
    heroA: 'The property marketplace',
    heroB: 'of South America.',
    heroSub: 'Buy, rent and sell houses, apartments and land — directly with the owner or agent, no intermediaries and no commissions. One place, six countries.',
    heroCta: 'Choose your country', heroCta2: 'How it works',
    statCountries: 'countries', statDirect: 'direct contact', statCommission: 'commissions', statProps: 'properties in Paraguay',
    ticker: ['ASUNCIÓN', 'BUENOS AIRES', 'SÃO PAULO', 'LA PAZ', 'SANTIAGO', 'MONTEVIDEO'],
    countriesTitle: 'Choose your country',
    countriesSub: 'Each country has its own Casa Libre, with local listings and prices. Tap a card to enter.',
    live: 'Live', soon: 'Coming soon', enter: 'Enter', notify: 'Soon',
    whyTitle: 'One marketplace, a whole continent',
    whyLead: 'South America has hundreds of millions of people looking for a place to live, invest, or move across borders. Casa Libre brings that demand under one brand — a local site for every country, with a consistent experience across all of them.',
    why: [
      { t: 'Direct, no middlemen', d: 'Buyers reach the owner or agent instantly on WhatsApp. No hidden commissions, no friction.' },
      { t: 'Local in every country', d: "Each market's own prices, neighborhoods and language — Paraguay in guaraníes and dollars, Brazil in Portuguese, and so on." },
      { t: 'One trusted brand', d: 'The same Casa Libre experience from the Chaco to Patagonia. Post once, reach the whole region.' },
    ],
    dataTitle: 'The scale of the region',
    data: [
      { n: '6', l: 'countries in the network' },
      { n: '430M+', l: 'people across South America' },
      { n: '2,000+', l: 'active listings in Paraguay' },
      { n: '0', l: 'commission to list' },
    ],
    dataNote: 'Paraguay is live today. Argentina, Brazil, Bolivia, Chile and Uruguay are coming soon — the network grows country by country.',
    howTitle: 'How it works',
    how: [
      { t: 'Choose your country', d: "Open your country's Casa Libre from the cards above." },
      { t: 'Browse or list', d: 'Search thousands of properties — or list yours, free, in minutes.' },
      { t: 'Contact directly', d: 'Message the owner or agent on WhatsApp, with no intermediaries.' },
    ],
    footTag: 'The property marketplace of South America. Direct, local, commission-free.',
    colCountries: 'Countries', colCompany: 'Company', colHelp: 'Help', colLegal: 'Legal',
    lCompany: ['About us', 'For agencies', 'Press', 'Contact'],
    lHelp: ['FAQ', 'How to list', 'Safety tips', 'Support'],
    lLegal: ['Terms & conditions', 'Privacy', 'Cookies'],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'What is Casa Libre?', a: "It's the property marketplace of South America: buy, rent or sell directly with the owner or agent — no intermediaries and no commissions." },
      { q: 'Which countries are available?', a: 'Paraguay is live today (casa-libre.com.py). Argentina, Brazil, Bolivia, Chile and Uruguay are launching soon.' },
      { q: 'How much does it cost to list?', a: 'Listing is free. Each country offers optional plans to feature your property for more visibility.' },
      { q: 'How do I contact a lister?', a: 'Directly by WhatsApp or phone from the listing — no commissions, no middlemen.' },
    ],
    rights: 'All rights reserved.',
  },
  pt: {
    nav: { countries: 'Países', how: 'Como funciona', faq: 'Perguntas', about: 'Sobre' },
    heroEyebrow: 'América do Sul · um só marketplace',
    heroA: 'O marketplace imobiliário',
    heroB: 'da América do Sul.',
    heroSub: 'Compre, alugue e venda casas, apartamentos e terrenos — direto com o proprietário ou corretor, sem intermediários e sem comissões. Um só lugar, seis países.',
    heroCta: 'Escolha seu país', heroCta2: 'Como funciona',
    statCountries: 'países', statDirect: 'contato direto', statCommission: 'comissões', statProps: 'imóveis no Paraguai',
    ticker: ['ASUNCIÓN', 'BUENOS AIRES', 'SÃO PAULO', 'LA PAZ', 'SANTIAGO', 'MONTEVIDEO'],
    countriesTitle: 'Escolha seu país',
    countriesSub: 'Cada país tem o seu próprio Casa Libre, com imóveis e preços locais. Toque num cartão para entrar.',
    live: 'Ao vivo', soon: 'Em breve', enter: 'Entrar', notify: 'Em breve',
    whyTitle: 'Um marketplace, um continente inteiro',
    whyLead: 'A América do Sul tem centenas de milhões de pessoas procurando onde morar, investir ou se mudar entre países. O Casa Libre reúne essa demanda em uma só marca — com um site local para cada país e uma experiência consistente em todos.',
    why: [
      { t: 'Direto, sem intermediários', d: 'Os compradores falam com o proprietário ou corretor na hora pelo WhatsApp. Sem comissões ocultas, sem fricção.' },
      { t: 'Local em cada país', d: 'Preços, bairros e idioma de cada mercado. Paraguai em guaranis e dólares, Brasil em português, e assim por diante.' },
      { t: 'Uma marca de confiança', d: 'A mesma experiência Casa Libre, do Chaco à Patagônia. Publique uma vez, alcance toda a região.' },
    ],
    dataTitle: 'A escala da região',
    data: [
      { n: '6', l: 'países na rede' },
      { n: '+430M', l: 'habitantes na América do Sul' },
      { n: '+2.000', l: 'imóveis ativos no Paraguai' },
      { n: '0', l: 'comissões para publicar' },
    ],
    dataNote: 'O Paraguai já está ao vivo. Argentina, Brasil, Bolívia, Chile e Uruguai chegam em breve — a rede cresce país por país.',
    howTitle: 'Como funciona',
    how: [
      { t: 'Escolha seu país', d: 'Entre no Casa Libre do seu país pelos cartões acima.' },
      { t: 'Explore ou publique', d: 'Busque entre milhares de imóveis — ou publique o seu, grátis, em minutos.' },
      { t: 'Fale direto', d: 'Fale com o proprietário ou corretor pelo WhatsApp, sem intermediários.' },
    ],
    footTag: 'O marketplace imobiliário da América do Sul. Direto, local e sem comissões.',
    colCountries: 'Países', colCompany: 'Empresa', colHelp: 'Ajuda', colLegal: 'Legal',
    lCompany: ['Sobre nós', 'Para imobiliárias', 'Imprensa', 'Contato'],
    lHelp: ['Perguntas frequentes', 'Como publicar', 'Dicas de segurança', 'Suporte'],
    lLegal: ['Termos e condições', 'Privacidade', 'Cookies'],
    faqTitle: 'Perguntas frequentes',
    faqs: [
      { q: 'O que é o Casa Libre?', a: 'É o marketplace imobiliário da América do Sul: compre, alugue ou venda imóveis direto com o proprietário ou corretor, sem intermediários e sem comissões.' },
      { q: 'Em quais países está disponível?', a: 'O Paraguai já está ao vivo (casa-libre.com.py). Argentina, Brasil, Bolívia, Chile e Uruguai serão lançados em breve.' },
      { q: 'Quanto custa publicar?', a: 'Publicar é grátis. Cada país oferece planos opcionais para destacar o seu imóvel e dar mais visibilidade.' },
      { q: 'Como falo com quem publica?', a: 'Direto pelo WhatsApp ou telefone a partir do anúncio — sem comissões nem intermediários.' },
    ],
    rights: 'Todos os direitos reservados.',
  },
};

const Word = ({ className = '' }) => (
  <span className={`font-bold tracking-head ${className}`}>casa-libre<em className="font-serif italic font-normal">.com</em></span>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function Hub() {
  const [lang, setLang] = useState('es');
  const [openFaq, setOpenFaq] = useState(0);
  const t = DICT[lang];
  const nm = (c) => c.name[lang] || c.name.es;

  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 backdrop-blur bg-paper/85 border-b border-ink/10">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 h-[64px] flex items-center justify-between">
          <a href="#top"><Word className="text-[22px]" /></a>
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-ink/70">
            <a href="#paises" className="hover:text-ink">{t.nav.countries}</a>
            <a href="#como" className="hover:text-ink">{t.nav.how}</a>
            <a href="#faq" className="hover:text-ink">{t.nav.faq}</a>
          </nav>
          <div className="flex items-center border-[1.5px] border-ink rounded-pill overflow-hidden text-[12px] font-bold">
            {['es', 'en', 'pt'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-3 py-1.5 ${lang === l ? 'bg-ink text-paper' : 'text-ink'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </header>

      {/* ── Ticker ── */}
      <div className="bg-ink text-paper py-2 overflow-hidden">
        <div className="cl-marquee font-mono text-[11px] tracking-label">
          {[0, 1].map((k) => (
            <span key={k} className="flex">
              {t.ticker.concat(t.ticker).map((c, i) => (
                <span key={i} className="px-6 opacity-80">{c}<span className="ml-6 opacity-40">◆</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Country flags strip ── */}
      <div className="border-b border-ink/10 bg-paper">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-3.5 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {COUNTRIES.map((c) => (
            <a key={c.key} href="#paises" title={nm(c)} className="shrink-0 transition-transform hover:-translate-y-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/flags/${c.key}.svg`} alt={nm(c)} className="w-9 h-6 sm:w-11 sm:h-[30px] object-cover rounded-[5px] border border-ink/25" />
            </a>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section id="top" className="max-w-[1920px] mx-auto px-5 md:px-11 pt-12 pb-6 md:pt-16 grid md:grid-cols-[1.1fr_.9fr] gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="font-mono text-[11px] tracking-label uppercase text-ink/50 mb-4">{t.heroEyebrow}</div>
          <h1 className="text-[clamp(38px,6vw,78px)] leading-[0.98] tracking-display font-bold">
            {t.heroA} <span className="font-serif italic font-normal">{t.heroB}</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink/65 mt-5 max-w-[540px] mx-auto md:mx-0 leading-relaxed">{t.heroSub}</p>
          <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
            <a href="#paises" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-ink text-paper font-bold text-[15px] shadow-hard-soft hover:-translate-y-0.5 transition-transform">{t.heroCta} <Arrow /></a>
            <a href="#como" className="inline-flex items-center px-6 py-3.5 rounded-pill border-[1.5px] border-ink font-bold text-[15px] hover:bg-ink hover:text-paper transition-colors">{t.heroCta2}</a>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-9 justify-center md:justify-start">
            {[['6', t.statCountries], ['100%', t.statDirect], ['0', t.statCommission]].map(([n, l]) => (
              <div key={l}>
                <div className="text-[26px] font-bold tracking-head leading-none">{n}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-label text-ink/50 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Mascot — floating, no framed/striped background */}
        <div className="flex items-center justify-center min-h-[300px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mascot.png" alt="Casa Libre" className="cl-float w-[74%] max-w-[400px] object-contain drop-shadow-[6px_6px_0_rgba(17,17,17,0.12)]" />
        </div>
      </section>

      {/* ── Country cards ── */}
      <section id="paises" className="max-w-[1920px] mx-auto px-5 md:px-11 pt-10 pb-4 scroll-mt-20">
        <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display">{t.countriesTitle}</h2>
        <p className="text-[15px] text-ink/60 mt-2 max-w-[560px]">{t.countriesSub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          {COUNTRIES.map((c) => {
            const inner = (
              <>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/flags/${c.key}.svg`} alt="" className="w-12 h-8 object-cover rounded-[5px] border border-ink/20" />
                  <span className={`ml-auto text-[10px] font-mono uppercase tracking-label px-2.5 py-1 rounded-pill border ${c.live ? 'bg-ink text-paper border-ink' : 'border-ink/25 text-ink/50'}`}>{c.live ? t.live : t.soon}</span>
                </div>
                <div className="mt-4 text-[24px] font-bold tracking-head">{nm(c)}</div>
                <div className="font-mono text-[12px] text-ink/45 mt-0.5">{c.tld}</div>
                <div className="text-[12.5px] text-ink/50 mt-0.5">{c.city}</div>
                <div className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold ${c.live ? '' : 'text-ink/40'}`}>
                  {c.live ? t.enter : t.notify} {c.live && <Arrow />}
                </div>
              </>
            );
            const base = 'block rounded-card p-5 border-[1.5px] transition-all';
            return c.live ? (
              <a key={c.key} href={c.url} target="_blank" rel="noopener noreferrer" className={`${base} bg-card border-ink shadow-hard-sm hover:shadow-hard hover:-translate-y-1`}>{inner}</a>
            ) : (
              <div key={c.key} className={`${base} bg-card/60 border-ink/20`}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* ── Why / marketplace data ── */}
      <section className="mt-16 bg-ink text-paper">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-16">
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display max-w-[760px]">{t.whyTitle}</h2>
          <p className="text-[16px] md:text-[18px] text-paper/70 mt-4 max-w-[720px] leading-relaxed">{t.whyLead}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {t.why.map((w) => (
              <div key={w.t} className="border border-paper/20 rounded-card p-5">
                <div className="text-[18px] font-bold tracking-head mb-1.5">{w.t}</div>
                <div className="text-[14px] text-paper/65 leading-relaxed">{w.d}</div>
              </div>
            ))}
          </div>
          {/* data band */}
          <div className="mt-12">
            <div className="font-mono text-[11px] tracking-label uppercase text-paper/45 mb-4">{t.dataTitle}</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.data.map((d) => (
                <div key={d.l}>
                  <div className="text-[clamp(30px,4.5vw,46px)] font-bold tracking-display leading-none font-serif italic">{d.n}</div>
                  <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/55 mt-2">{d.l}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-paper/50 mt-6 max-w-[640px]">{t.dataNote}</p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="como" className="max-w-[1920px] mx-auto px-5 md:px-11 py-16 scroll-mt-20">
        <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display">{t.howTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {t.how.map((s, i) => (
            <div key={s.t} className="rounded-card border-[1.5px] border-ink bg-card p-6 shadow-hard-sm">
              <div className="font-mono text-[13px] w-9 h-9 rounded-pill bg-ink text-paper flex items-center justify-center font-bold mb-4">{i + 1}</div>
              <div className="text-[18px] font-bold tracking-head mb-1.5">{s.t}</div>
              <div className="text-[14px] text-ink/60 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="max-w-[820px] mx-auto px-5 pb-16 scroll-mt-20">
        <h2 className="text-[clamp(24px,4vw,36px)] font-bold tracking-display mb-6">{t.faqTitle}</h2>
        <div className="rounded-card border-[1.5px] border-ink overflow-hidden bg-card">
          {t.faqs.map((f, i) => (
            <div key={i} className={i ? 'border-t border-ink/12' : ''}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4">
                <span className="font-bold text-[15px]">{f.q}</span>
                <span className="text-[20px] leading-none text-ink/50">{openFaq === i ? '–' : '+'}</span>
              </button>
              {openFaq === i && <div className="px-5 pb-4 -mt-1 text-[14px] text-ink/65 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ink text-paper">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-9">
            <div>
              <Word className="text-[22px] text-paper" />
              <p className="text-[13.5px] text-paper/60 mt-3 max-w-[260px] leading-relaxed">{t.footTag}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mascot.png" alt="" className="w-24 mt-5 opacity-90" />
            </div>
            <FootCol title={t.colCountries}>
              {COUNTRIES.map((c) => (
                <FootLink key={c.key} href={c.live ? c.url : undefined}>{nm(c)}{!c.live && <span className="text-paper/35"> · {t.soon}</span>}</FootLink>
              ))}
            </FootCol>
            <FootCol title={t.colCompany}>{t.lCompany.map((x) => <FootLink key={x}>{x}</FootLink>)}</FootCol>
            <FootCol title={t.colHelp}>{t.lHelp.map((x) => <FootLink key={x}>{x}</FootLink>)}</FootCol>
            <FootCol title={t.colLegal}>{t.lLegal.map((x) => <FootLink key={x}>{x}</FootLink>)}</FootCol>
          </div>

          {/* data strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-paper/15">
            {t.data.map((d) => (
              <div key={d.l}>
                <div className="text-[22px] font-bold tracking-head leading-none">{d.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-label text-paper/50 mt-1.5">{d.l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-10 pt-6 border-t border-paper/15 font-mono text-[11px] text-paper/50">
            <div>© {new Date().getFullYear()} Casa Libre — {t.rights}</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">{COUNTRIES.map((c) => <span key={c.key}>{c.tld}</span>)}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FootCol({ title, children }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/45 mb-3">{title}</div>
      <ul className="space-y-2 text-[13.5px]">{children}</ul>
    </div>
  );
}
function FootLink({ href, children }) {
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-paper/75 hover:text-paper">{children}</a>
      ) : (
        <span className="text-paper/75 hover:text-paper cursor-pointer">{children}</span>
      )}
    </li>
  );
}
