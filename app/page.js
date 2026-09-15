'use client';
import { useState } from 'react';

// Eight-country network. Paraguay + Bolivia are live, Uruguay in early access,
// the rest scheduled/planned. Statuses: live | beta | next | planned.
const COUNTRIES = [
  { key: 'py', name: { es: 'Paraguay', en: 'Paraguay', pt: 'Paraguai' }, tld: 'casa-libre.com.py', url: 'https://casa-libre.com.py', status: 'live', city: 'Asunción', sub: { es: 'La cabecera', en: 'The beachhead', pt: 'A cabeça de ponte' } },
  { key: 'bo', name: { es: 'Bolivia', en: 'Bolivia', pt: 'Bolívia' }, tld: 'casa-libre.com.bo', url: 'https://casa-libre.com.bo', status: 'live', city: 'Santa Cruz · La Paz', sub: { es: 'Lanzado esta semana', en: 'Launched this week', pt: 'Lançado esta semana' } },
  { key: 'uy', name: { es: 'Uruguay', en: 'Uruguay', pt: 'Uruguai' }, tld: 'uy.casa-libre.com', url: 'https://uy.casa-libre.com', status: 'beta', city: 'Montevideo', sub: { es: 'Anuncios activos · casa-libre.com.uy pronto', en: 'Listings live · casa-libre.com.uy next', pt: 'Anúncios ativos · casa-libre.com.uy em breve' } },
  { key: 'ar', name: { es: 'Argentina', en: 'Argentina', pt: 'Argentina' }, tld: 'casa-libre.com.ar', url: 'https://casa-libre.com.ar', status: 'next', city: 'Buenos Aires' },
  { key: 'br', name: { es: 'Brasil', en: 'Brazil', pt: 'Brasil' }, tld: 'casa-libre.com.br', url: 'https://casa-libre.com.br', status: 'next', city: 'São Paulo' },
  { key: 'cl', name: { es: 'Chile', en: 'Chile', pt: 'Chile' }, tld: 'casa-libre.com.cl', url: 'https://casa-libre.com.cl', status: 'next', city: 'Santiago' },
  { key: 'pe', name: { es: 'Perú', en: 'Peru', pt: 'Peru' }, tld: 'casa-libre.com.pe', url: 'https://casa-libre.com.pe', status: 'planned', city: 'Lima' },
  { key: 've', name: { es: 'Venezuela', en: 'Venezuela', pt: 'Venezuela' }, tld: 'casa-libre.com.ve', url: 'https://casa-libre.com.ve', status: 'planned', city: 'Caracas' },
];

const TICKER = ['ASUNCIÓN', 'SANTA CRUZ', 'MONTEVIDEO', 'BUENOS AIRES', 'SÃO PAULO', 'SANTIAGO', 'LIMA', 'CARACAS'];

const DICT = {
  es: {
    nav: { countries: 'Países', opportunity: 'La oportunidad', invest: 'Invertí' },
    heroEyebrow: 'En vivo en tres países · con base en EE. UU. · API-first',
    heroA: 'El marketplace inmobiliario',
    heroB: 'de Sudamérica.',
    heroSub: 'Operadores con experiencia, tecnología de frontera y datos propios sobre cómo un continente realmente compra propiedades.',
    heroSubEm: 'Convertite en inversor. Entrá desde el principio.',
    heroCta: 'Hablá con el fundador', heroCta2: 'Velo en vivo',
    heroStats: [['3', 'países en vivo'], ['8', 'mercados objetivo'], ['+430M', 'personas en el mercado']],
    contTitle: 'Un continente sin estándar.',
    contLead: 'Sudamérica no tiene un MLS, ni una marca inmobiliaria regional, ni una plataforma que sea dueña de la transacción. El inventario está repartido entre miles de corredores, franquicias y vendedores particulares, y 430 millones de personas compran, alquilan y venden por grupos de WhatsApp, Facebook Marketplace y publicaciones de Instagram. Casa Libre es el estándar — y la primera plataforma que mide el mercado mientras se mueve.',
    contCards: [
      { t: 'Operando hoy', d: 'Paraguay y Bolivia están en vivo. Uruguay en acceso anticipado. Anuncios reales, compradores reales, conversaciones con dueños todos los días. Un producto en el mercado, no un plan.' },
      { t: 'Un build, ocho mercados', d: 'Una sola plataforma, localizada por país, facturada en dólares en todos. Un país nuevo es un lanzamiento, no una reconstrucción. El costo por mercado baja con cada uno.' },
      { t: 'Más que un marketplace', d: 'Los anuncios son la puerta de entrada. El sistema detrás es el negocio. No es público. Los inversores lo ven bajo NDA, después de una primera conversación.' },
    ],
    contBig: [['3', 'mercados en vivo'], ['5', 'próximos programados'], ['+430M', 'personas en la región'], ['1', 'marca a través de fronteras']],
    contFine: 'Argentina, Brasil y Chile siguen, después Perú y Venezuela. Cada lanzamiento financia el siguiente.',
    mapTitle: 'Ocho países. Tres en vivo.',
    mapLead: 'Cada país tiene su propio Casa Libre, con anuncios y precios locales. Todos facturan en dólares.',
    status: { live: 'En vivo', beta: 'En vivo · acceso anticipado', next: 'Próximo', planned: 'Planeado' },
    foot: { live: 'Entrar', beta: 'Entrar', next: 'Programado', planned: 'Planeado' },
    prodEyebrow: 'El producto',
    prodTitle: 'Simple por diseño.',
    prod: [
      { t: 'Contacto directo', d: 'Cada anuncio muestra quién lo publicó — dueño, agente o inmobiliaria — y los compradores lo contactan por WhatsApp en un toque. Sin portal en el medio, sin leads revendidos.' },
      { t: 'Cero comisión', d: 'Nunca una parte de la venta. Los ingresos vienen de anuncios, promoción y herramientas premium — no de pararse entre comprador y vendedor.' },
      { t: 'Facturado en dólares', d: 'Cada anuncio, boost y suscripción se cobra en dólares, en todos los países. Los ingresos son en dólares. El tipo de cambio nunca toca el balance.' },
    ],
    dataEyebrow: 'El hilo conductor',
    dataTitle: 'Datos del mundo real de un mercado que nadie midió.',
    dataLead: 'Cada búsqueda, cada toque de WhatsApp, cada anuncio publicado o renovado es actividad de compradores de primera mano en mercados emergentes que no tienen MLS, ni índice, ni historial. El marketplace la genera. Los datos se acumulan.',
    dataCards: [
      { t: 'Datos reales de compradores', d: 'Quién busca, qué, a qué precio, en qué barrio — capturado en el momento de la intención, no encuestado después.' },
      { t: 'Actividad en todo el continente', d: 'Una plataforma, un esquema, ocho países. La demanda en Santa Cruz es comparable a la de Montevideo porque se registra igual.' },
      { t: 'Tecnología y datos de mercados emergentes', d: 'Construido para mercados que las herramientas de los actores tradicionales nunca contemplaron. La tecnología es la capa de captura; los datos son el activo.' },
    ],
    thesisTitle: 'Por qué esto gana.',
    thesisBold: 'No hay MLS.',
    thesisProse: [
      'Sudamérica es el último gran mercado inmobiliario que funciona con grupos de WhatsApp, Facebook Marketplace, publicaciones de Instagram y carteles impresos. El inventario está con corredores, franquicias y dueños que nunca lo comparten. No hay MLS. En gran parte de la región no se necesita licencia para vender inmuebles. La infraestructura nunca se construyó. La estamos construyendo, a través de fronteras, bajo una sola marca.',
      'Los actores existentes probaron que la gente busca propiedades online, y después se detuvieron en una página de clasificados con un número de teléfono. Nadie es dueño de lo que pasa después del clic: el lead, el seguimiento, el cierre, la preventa del desarrollador, y los datos que todo eso genera. Ahí está el dinero, y está sin reclamar.',
      'Empezamos en Paraguay porque se puede ganar por completo. Bolivia y Uruguay siguieron en meses sobre el mismo build. Un solo código, APIs abiertas, anuncios y gestión de leads asistidos por IA, ingresos en dólares en cada mercado — y un playbook ya probado en EE. UU.',
      'La ventana está abierta ahora.',
    ],
    structTitle: 'Estructura americana. Juego de campo sudamericano.',
    structLead: 'Una entidad de EE. UU. para los inversores. Un equipo en el terreno para el mercado.',
    structCards: [
      { k: 'Fundador y estructura', t: 'Con base en Estados Unidos', d: 'El fundador y la estructura holding son de EE. UU. Contratos, cap table, banca y reportes corren en términos de EE. UU. Los ingresos se cobran en dólares. Invertís en una empresa estadounidense.' },
      { k: 'Operaciones', t: 'En el terreno en Asunción', d: 'El fundador divide su tiempo entre Nueva York, Ciudad de México y Asunción, con presencia local en cada mercado en vivo. Esta región no se maneja a la distancia.' },
    ],
    investEyebrow: 'Para inversores y socios',
    investTitle: 'Entrá temprano.',
    investLead: 'Las conversaciones de pre-seed y seed están abiertas a ángeles, family offices, estratégicos regionales y fondos con tesis LATAM. El producto está en vivo. El mapa está trazado. Los próximos mercados los financia esta ronda.',
    investSteps: [
      { t: 'Nos escribís', d: 'El formulario, o un espacio de 30 minutos con el fundador.' },
      { t: 'Recibís el resumen', d: 'Dos páginas dentro de la hora: mercado, tracción, mapa de expansión.' },
      { t: 'Hablamos', d: 'Treinta minutos. Preguntas y respuestas, no un pitch deck.' },
      { t: 'Data room', d: 'Bajo NDA: el cronograma, lo ya construido y el moat.' },
    ],
    form: { name: 'Tu nombre', namePh: 'Nombre completo', firm: 'Firma o fondo', firmPh: "O 'ángel'", country: 'País', countryPh: 'Dónde estás', email: 'Email', emailPh: 'nombre@fondo.com', wa: 'WhatsApp', waPh: '+1 …', invests: 'Qué invertís normalmente', why: '¿Por qué Casa Libre?', whyPh: 'Una o dos líneas.', submit: 'Pedí el resumen', or: 'o', book: 'Reservá una llamada con el fundador', reqHint: 'Email o teléfono requerido.', err: 'Ingresá tu nombre y un email o teléfono.', tiny: 'No es una oferta de valores. Una conversación.', sending: 'Enviando…', sent: 'Gracias — te contactamos en breve.', fail: 'Algo salió mal. Probá de nuevo.', call: { title: 'Reservá una llamada con el fundador', sub: '30 minutos. Contanos cuándo te queda cómodo y qué querés hablar.', name: 'Tu nombre', namePh: 'Nombre completo', email: 'Email', emailPh: 'nombre@fondo.com', phone: 'Teléfono / WhatsApp', phonePh: '+1 …', slot: 'Horario preferido', slotPh: 'ej. martes a jueves por la tarde, ET', reason: 'Motivo de la llamada', reasonPh: 'Qué te gustaría conversar.', submit: 'Pedir la llamada', cancel: 'Cancelar' } },
    stages: ['Pre-seed', 'Seed', 'Series A', 'Estratégico / corporativo', 'Otro'],
    footTag: 'El marketplace inmobiliario de Sudamérica. Con base en EE. UU., construido en el terreno, facturado en dólares.',
    colCountries: 'Países', colCompany: 'Empresa', colHelp: 'Ayuda', colLegal: 'Legal',
    lCompany: ['Nosotros', 'Invertí', 'Para inmobiliarias', 'Prensa', 'Contacto'],
    lHelp: ['Preguntas frecuentes', 'Cómo publicar', 'Consejos de seguridad', 'Soporte'],
    lLegal: ['Términos y condiciones', 'Privacidad', 'Cookies'],
    rights: 'Todos los derechos reservados.',
  },
  en: {
    nav: { countries: 'Countries', opportunity: 'The opportunity', invest: 'Invest' },
    heroEyebrow: 'Live in three countries · US-based · API-first',
    heroA: 'The property marketplace',
    heroB: 'of South America.',
    heroSub: 'Experienced operators, frontier technology, and first-party data on how a continent actually buys property.',
    heroSubEm: 'Become an investor. Get in at the ground level.',
    heroCta: 'Talk to the founder', heroCta2: 'See it live',
    heroStats: [['3', 'countries live'], ['8', 'target markets'], ['430M+', 'people in market']],
    contTitle: 'A continent without a standard.',
    contLead: 'South America has no MLS, no regional property brand and no platform that owns the transaction. Inventory is split across thousands of brokers, franchise offices and private sellers, and 430 million people buy, rent and sell through WhatsApp groups, Facebook Marketplace and Instagram posts. Casa Libre is the standard — and the first platform measuring the market as it moves.',
    contCards: [
      { t: 'Operating today', d: 'Paraguay and Bolivia are live. Uruguay is in early access. Real listings, real buyers, owner conversations every day. A product in market, not a plan.' },
      { t: 'One build, eight markets', d: 'One platform, localized per country, billed in dollars everywhere. A new country is a launch, not a rebuild. Cost per market falls with each one.' },
      { t: 'More than a marketplace', d: 'The listings are the front door. The system behind them is the business. It is not public. Investors see it under NDA, after a first conversation.' },
    ],
    contBig: [['3', 'live markets'], ['5', 'scheduled next'], ['430M+', 'people across the region'], ['1', 'brand across borders']],
    contFine: 'Argentina, Brazil and Chile are next, then Peru and Venezuela. Each launch funds the one after it.',
    mapTitle: 'Eight countries. Three live.',
    mapLead: 'Each country runs its own Casa Libre with local listings and local pricing. Every one of them bills in US dollars.',
    status: { live: 'Live', beta: 'Live · early access', next: 'Next', planned: 'Planned' },
    foot: { live: 'Enter', beta: 'Enter', next: 'Scheduled', planned: 'Planned' },
    prodEyebrow: 'The product',
    prodTitle: 'Simple by design.',
    prod: [
      { t: 'Direct contact', d: 'Every listing shows who posted it — owner, agent or agency — and buyers reach that person on WhatsApp in one tap. No portal in between, no lead resold.' },
      { t: 'Zero commission', d: 'No cut of the sale, ever. Revenue comes from listings, promotion and premium tools — not from standing between buyer and seller.' },
      { t: 'Billed in dollars', d: 'Every listing, boost and subscription is charged in US dollars, in every country. Revenue is dollar-denominated. Exchange rates never touch the ledger.' },
    ],
    dataEyebrow: 'The through line',
    dataTitle: 'Real-world data from a market no one has measured.',
    dataLead: 'Every search, every WhatsApp tap, every listing posted or renewed is first-party buyer activity in emerging markets that have no MLS, no index and no history. The marketplace generates it. The data compounds.',
    dataCards: [
      { t: 'Real buyer data', d: 'Who is looking, at what, at what price, in which neighborhood — captured at the moment of intent, not surveyed after the fact.' },
      { t: 'Activity across the continent', d: 'One platform, one schema, eight countries. Demand in Santa Cruz is comparable to demand in Montevideo because it is recorded the same way.' },
      { t: 'Emerging-market technology and data', d: "Built for markets the incumbents' tooling was never designed for. The technology is the collection layer; the data is the asset." },
    ],
    thesisTitle: 'Why this wins.',
    thesisBold: 'There is no MLS.',
    thesisProse: [
      'South America is the last large property market run on WhatsApp groups, Facebook Marketplace, Instagram posts and printed signs. Inventory sits with brokers, franchises and owners who never share it. There is no MLS. In most of the region, no license is required to sell real estate. The infrastructure was never built. We are building it, across borders, under one brand.',
      'The incumbents proved people search for property online, then stopped at a classifieds page with a phone number. Nobody owns what happens after the click: the lead, the follow-up, the deal, the developer presale, and the data all of it produces. That is where the money is, and it is unclaimed.',
      'We started in Paraguay because it can be won outright. Bolivia and Uruguay followed within months on the same build. One codebase, open APIs, AI-assisted listings and lead handling, dollar revenue in every market — and a playbook already proven in the US.',
      'The window is open now.',
    ],
    structTitle: 'American structure. South American ground game.',
    structLead: 'A US entity for investors. A team on the ground for the market.',
    structCards: [
      { k: 'Founder and structure', t: 'Based in the United States', d: 'Founder and holding structure are US-based. Contracts, cap table, banking and reporting run on US terms. Revenue is collected in dollars. You invest in a US company.' },
      { k: 'Operations', t: 'On the ground in Asunción', d: 'The founder splits time between New York, Mexico City and Asunción, with local presence in every live market. This region is not run from a distance.' },
    ],
    investEyebrow: 'For investors and partners',
    investTitle: 'Get in early.',
    investLead: 'Pre-seed and seed conversations are open to angels, family offices, regional strategics and funds with a LATAM thesis. The product is live. The map is drawn. The next markets are funded by this round.',
    investSteps: [
      { t: 'You reach out', d: 'The form, or a 30-minute slot with the founder.' },
      { t: 'You get the overview', d: 'Two pages within the hour: market, traction, expansion map.' },
      { t: 'We talk', d: 'Thirty minutes. Questions and answers, not a deck.' },
      { t: 'Data room', d: "Under NDA: the timeline, what's already built, and the moat." },
    ],
    form: { name: 'Your name', namePh: 'Full name', firm: 'Firm or fund', firmPh: "Or 'angel'", country: 'Country', countryPh: "Where you're based", email: 'Email', emailPh: 'name@firm.com', wa: 'WhatsApp', waPh: '+1 …', invests: 'What you typically invest in', why: 'Why Casa Libre?', whyPh: 'One or two lines.', submit: 'Request the overview', or: 'or', book: 'Book a call with the founder', reqHint: 'Email or phone required.', err: 'Add your name and an email or phone.', tiny: 'Not an offer of securities. A conversation.', sending: 'Sending…', sent: "Thanks — we'll be in touch shortly.", fail: 'Something went wrong. Please try again.', call: { title: 'Book a call with the founder', sub: '30 minutes. Tell us when suits you and what to cover.', name: 'Your name', namePh: 'Full name', email: 'Email', emailPh: 'name@firm.com', phone: 'Phone / WhatsApp', phonePh: '+1 …', slot: 'Preferred time slot', slotPh: 'e.g. Tue–Thu afternoons, ET', reason: 'Reason for the call', reasonPh: "What you'd like to cover.", submit: 'Request the call', cancel: 'Cancel' } },
    stages: ['Pre-seed', 'Seed', 'Series A', 'Strategic / corporate', 'Other'],
    footTag: 'The property marketplace of South America. US-based, built on the ground, billed in dollars.',
    colCountries: 'Countries', colCompany: 'Company', colHelp: 'Help', colLegal: 'Legal',
    lCompany: ['About us', 'Invest', 'For agencies', 'Press', 'Contact'],
    lHelp: ['FAQ', 'How to list', 'Safety tips', 'Support'],
    lLegal: ['Terms & conditions', 'Privacy', 'Cookies'],
    rights: 'All rights reserved.',
  },
  pt: {
    nav: { countries: 'Países', opportunity: 'A oportunidade', invest: 'Investir' },
    heroEyebrow: 'No ar em três países · sede nos EUA · API-first',
    heroA: 'O marketplace imobiliário',
    heroB: 'da América do Sul.',
    heroSub: 'Operadores experientes, tecnologia de fronteira e dados próprios sobre como um continente realmente compra imóveis.',
    heroSubEm: 'Torne-se investidor. Entre desde o começo.',
    heroCta: 'Fale com o fundador', heroCta2: 'Veja ao vivo',
    heroStats: [['3', 'países no ar'], ['8', 'mercados-alvo'], ['+430M', 'pessoas no mercado']],
    contTitle: 'Um continente sem padrão.',
    contLead: 'A América do Sul não tem MLS, nem marca imobiliária regional, nem plataforma dona da transação. O inventário está espalhado por milhares de corretores, franquias e vendedores particulares, e 430 milhões de pessoas compram, alugam e vendem por grupos de WhatsApp, Facebook Marketplace e posts de Instagram. Casa Libre é o padrão — e a primeira plataforma que mede o mercado enquanto ele se move.',
    contCards: [
      { t: 'Operando hoje', d: 'Paraguai e Bolívia estão no ar. Uruguai em acesso antecipado. Anúncios reais, compradores reais, conversas com proprietários todos os dias. Um produto no mercado, não um plano.' },
      { t: 'Um build, oito mercados', d: 'Uma plataforma, localizada por país, faturada em dólares em todos. Um país novo é um lançamento, não uma reconstrução. O custo por mercado cai a cada um.' },
      { t: 'Mais que um marketplace', d: 'Os anúncios são a porta de entrada. O sistema por trás é o negócio. Não é público. Investidores veem sob NDA, após uma primeira conversa.' },
    ],
    contBig: [['3', 'mercados no ar'], ['5', 'próximos agendados'], ['+430M', 'pessoas na região'], ['1', 'marca através de fronteiras']],
    contFine: 'Argentina, Brasil e Chile são os próximos, depois Peru e Venezuela. Cada lançamento financia o seguinte.',
    mapTitle: 'Oito países. Três no ar.',
    mapLead: 'Cada país tem o seu próprio Casa Libre, com anúncios e preços locais. Todos faturam em dólares.',
    status: { live: 'No ar', beta: 'No ar · acesso antecipado', next: 'Próximo', planned: 'Planejado' },
    foot: { live: 'Entrar', beta: 'Entrar', next: 'Agendado', planned: 'Planejado' },
    prodEyebrow: 'O produto',
    prodTitle: 'Simples por design.',
    prod: [
      { t: 'Contato direto', d: 'Cada anúncio mostra quem o publicou — proprietário, corretor ou imobiliária — e os compradores falam com essa pessoa pelo WhatsApp em um toque. Sem portal no meio, sem lead revendido.' },
      { t: 'Zero comissão', d: 'Nunca uma parte da venda. A receita vem de anúncios, promoção e ferramentas premium — não de ficar entre comprador e vendedor.' },
      { t: 'Faturado em dólares', d: 'Cada anúncio, boost e assinatura é cobrado em dólares, em todos os países. A receita é em dólares. O câmbio nunca toca o balanço.' },
    ],
    dataEyebrow: 'O fio condutor',
    dataTitle: 'Dados do mundo real de um mercado que ninguém mediu.',
    dataLead: 'Cada busca, cada toque de WhatsApp, cada anúncio publicado ou renovado é atividade de compradores de primeira mão em mercados emergentes sem MLS, sem índice e sem histórico. O marketplace a gera. Os dados se acumulam.',
    dataCards: [
      { t: 'Dados reais de compradores', d: 'Quem busca, o quê, a que preço, em qual bairro — capturado no momento da intenção, não pesquisado depois.' },
      { t: 'Atividade em todo o continente', d: 'Uma plataforma, um esquema, oito países. A demanda em Santa Cruz é comparável à de Montevidéu porque é registrada da mesma forma.' },
      { t: 'Tecnologia e dados de mercados emergentes', d: 'Construído para mercados que as ferramentas dos incumbentes nunca contemplaram. A tecnologia é a camada de coleta; os dados são o ativo.' },
    ],
    thesisTitle: 'Por que isso vence.',
    thesisBold: 'Não há MLS.',
    thesisProse: [
      'A América do Sul é o último grande mercado imobiliário que funciona com grupos de WhatsApp, Facebook Marketplace, posts de Instagram e placas impressas. O inventário está com corretores, franquias e proprietários que nunca o compartilham. Não há MLS. Na maior parte da região, não é preciso licença para vender imóveis. A infraestrutura nunca foi construída. Estamos construindo-a, através de fronteiras, sob uma marca.',
      'Os incumbentes provaram que as pessoas buscam imóveis online, e então pararam numa página de classificados com um número de telefone. Ninguém é dono do que acontece depois do clique: o lead, o follow-up, o negócio, a pré-venda do incorporador, e os dados que tudo isso gera. É aí que está o dinheiro, e está sem dono.',
      'Começamos no Paraguai porque pode ser conquistado por inteiro. Bolívia e Uruguai seguiram em meses sobre o mesmo build. Um código, APIs abertas, anúncios e gestão de leads com IA, receita em dólares em cada mercado — e um playbook já provado nos EUA.',
      'A janela está aberta agora.',
    ],
    structTitle: 'Estrutura americana. Jogo de campo sul-americano.',
    structLead: 'Uma entidade dos EUA para os investidores. Uma equipe no terreno para o mercado.',
    structCards: [
      { k: 'Fundador e estrutura', t: 'Com sede nos Estados Unidos', d: 'O fundador e a holding são dos EUA. Contratos, cap table, banco e relatórios rodam em termos dos EUA. A receita é coletada em dólares. Você investe numa empresa americana.' },
      { k: 'Operações', t: 'No terreno em Assunção', d: 'O fundador divide o tempo entre Nova York, Cidade do México e Assunção, com presença local em cada mercado no ar. Esta região não é gerida à distância.' },
    ],
    investEyebrow: 'Para investidores e parceiros',
    investTitle: 'Entre cedo.',
    investLead: 'Conversas de pre-seed e seed estão abertas a anjos, family offices, estratégicos regionais e fundos com tese LATAM. O produto está no ar. O mapa está desenhado. Os próximos mercados são financiados por esta rodada.',
    investSteps: [
      { t: 'Você fala com a gente', d: 'O formulário, ou 30 minutos com o fundador.' },
      { t: 'Você recebe o resumo', d: 'Duas páginas em uma hora: mercado, tração, mapa de expansão.' },
      { t: 'Conversamos', d: 'Trinta minutos. Perguntas e respostas, não um pitch deck.' },
      { t: 'Data room', d: 'Sob NDA: o cronograma, o que já foi construído e o moat.' },
    ],
    form: { name: 'Seu nome', namePh: 'Nome completo', firm: 'Firma ou fundo', firmPh: "Ou 'anjo'", country: 'País', countryPh: 'Onde você está', email: 'Email', emailPh: 'nome@fundo.com', wa: 'WhatsApp', waPh: '+1 …', invests: 'No que você costuma investir', why: 'Por que Casa Libre?', whyPh: 'Uma ou duas linhas.', submit: 'Peça o resumo', or: 'ou', book: 'Agende uma chamada com o fundador', reqHint: 'Email ou telefone obrigatório.', err: 'Informe seu nome e um email ou telefone.', tiny: 'Não é uma oferta de valores mobiliários. Uma conversa.', sending: 'Enviando…', sent: 'Obrigado — entraremos em contato em breve.', fail: 'Algo deu errado. Tente novamente.', call: { title: 'Agende uma chamada com o fundador', sub: '30 minutos. Diga quando é melhor para você e o que quer abordar.', name: 'Seu nome', namePh: 'Nome completo', email: 'Email', emailPh: 'nome@fundo.com', phone: 'Telefone / WhatsApp', phonePh: '+1 …', slot: 'Horário preferido', slotPh: 'ex. ter–qui à tarde, ET', reason: 'Motivo da chamada', reasonPh: 'O que você gostaria de abordar.', submit: 'Solicitar a chamada', cancel: 'Cancelar' } },
    stages: ['Pre-seed', 'Seed', 'Series A', 'Estratégico / corporativo', 'Outro'],
    footTag: 'O marketplace imobiliário da América do Sul. Sede nos EUA, construído no terreno, faturado em dólares.',
    colCountries: 'Países', colCompany: 'Empresa', colHelp: 'Ajuda', colLegal: 'Legal',
    lCompany: ['Sobre nós', 'Investir', 'Para imobiliárias', 'Imprensa', 'Contato'],
    lHelp: ['Perguntas frequentes', 'Como publicar', 'Dicas de segurança', 'Suporte'],
    lLegal: ['Termos e condições', 'Privacidade', 'Cookies'],
    rights: 'Todos os direitos reservados.',
  },
};

const Word = ({ className = '' }) => (
  <span className={`font-bold tracking-head whitespace-nowrap ${className}`}>casa-libre<em className="font-serif italic font-normal">.com</em></span>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function Hub() {
  const [lang, setLang] = useState('es');
  const t = DICT[lang];
  const nm = (c) => c.name[lang] || c.name.es;
  // Investor form. Email OR phone required. On submit we POST to /api/contact,
  // which sends a formatted email to omar@airosofts.com via Resend (no calendar,
  // no mailto — a real server-side send).
  const [inv, setInv] = useState({ name: '', firm: '', country: '', email: '', wa: '', stage: '', why: '' });
  const [invErr, setInvErr] = useState('');
  const [invState, setInvState] = useState('idle'); // idle | sending | sent | error
  const setF = (k) => (e) => setInv((f) => ({ ...f, [k]: e.target.value }));

  // "Book a call" modal — its own form (name, contact, preferred time slot, reason).
  const [callOpen, setCallOpen] = useState(false);
  const [call, setCall] = useState({ name: '', email: '', phone: '', slot: '', reason: '' });
  const [callErr, setCallErr] = useState('');
  const [callState, setCallState] = useState('idle');
  const setC = (k) => (e) => setCall((f) => ({ ...f, [k]: e.target.value }));

  async function post(payload) {
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      return res.ok;
    } catch { return false; }
  }

  const submitOverview = async () => {
    if (!inv.name.trim() || (!inv.email.trim() && !inv.wa.trim())) { setInvErr(t.form.err); return; }
    setInvErr(''); setInvState('sending');
    setInvState((await post({ type: 'overview', ...inv })) ? 'sent' : 'error');
  };
  const openCall = () => { setCallErr(''); setCallState('idle'); setCallOpen(true); };
  const closeCall = () => setCallOpen(false);
  const submitCall = async () => {
    if (!call.name.trim() || (!call.email.trim() && !call.phone.trim())) { setCallErr(t.form.err); return; }
    setCallErr(''); setCallState('sending');
    setCallState((await post({ type: 'call', ...call })) ? 'sent' : 'error');
  };

  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 backdrop-blur bg-paper/85 border-b border-ink/10">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 h-[64px] flex items-center justify-between">
          <a href="#top" className="shrink-0"><Word className="text-[clamp(14px,4.4vw,22px)]" /></a>
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-ink/70">
            <a href="#map" className="hover:text-ink">{t.nav.countries}</a>
            <a href="#thesis" className="hover:text-ink">{t.nav.opportunity}</a>
            <a href="#invest" className="text-ink border-[1.5px] border-ink rounded-pill px-4 py-1.5 hover:bg-ink hover:text-paper transition-colors">{t.nav.invest}</a>
          </nav>
          <div className="flex items-center gap-2.5">
            {/* Mobile-only Invest CTA (desktop has it in the nav) */}
            <a href="#invest-form" className="md:hidden inline-flex items-center px-4 py-1.5 rounded-pill border-[1.5px] border-ink text-ink font-bold text-[12.5px]">{t.nav.invest}</a>
            <div className="flex items-center border-[1.5px] border-ink rounded-pill overflow-hidden text-[12px] font-bold">
              {['es', 'en', 'pt'].map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`px-3 py-1.5 ${lang === l ? 'bg-ink text-paper' : 'text-ink'}`}>{l.toUpperCase()}</button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Ticker ── */}
      <div className="bg-ink text-paper py-2 overflow-hidden">
        <div className="cl-marquee font-mono text-[11px] tracking-label">
          {[0, 1].map((k) => (
            <span key={k} className="flex">
              {TICKER.concat(TICKER).map((c, i) => (
                <span key={i} className="px-6 opacity-80">{c}<span className="ml-6 opacity-40">◆</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Country flags strip ── */}
      <div className="border-b border-ink/10 bg-paper">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-3.5 flex flex-nowrap items-center justify-center gap-1.5 sm:gap-3">
          {COUNTRIES.map((c) => (
            <a key={c.key} href="#map" title={nm(c)} className="flex-1 max-w-[44px] min-w-0 transition-transform hover:-translate-y-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/flags/${c.key}.svg`} alt={nm(c)} className="w-full aspect-[3/2] object-cover rounded-[4px] border border-ink/25" />
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
          <p className="text-[16px] md:text-[18px] text-ink/65 mt-5 max-w-[560px] mx-auto md:mx-0 leading-relaxed">
            {t.heroSub} <span className="font-serif italic text-ink">{t.heroSubEm}</span>
          </p>
          <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
            <a href="#invest" className="btn btn-solid">{t.heroCta} <Arrow /></a>
            <a href="#map" className="btn btn-ghost">{t.heroCta2}</a>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-9 justify-center md:justify-start">
            {t.heroStats.map(([n, l]) => (
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

      {/* ── A continent without a standard (dark) ── */}
      <section className="mt-12 bg-ink text-paper">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-16">
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display max-w-[760px]">{t.contTitle}</h2>
          <p className="text-[16px] md:text-[18px] text-paper/70 mt-4 max-w-[820px] leading-relaxed">{t.contLead}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {t.contCards.map((w) => (
              <div key={w.t} className="border border-paper/20 rounded-card p-5">
                <div className="text-[18px] font-bold tracking-head mb-1.5">{w.t}</div>
                <div className="text-[14px] text-paper/65 leading-relaxed">{w.d}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {t.contBig.map(([n, l]) => (
              <div key={l}>
                <div className="text-[clamp(30px,4.5vw,46px)] font-bold tracking-display leading-none font-serif italic">{n}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/55 mt-2">{l}</div>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-paper/50 mt-6 max-w-[680px]">{t.contFine}</p>
        </div>
      </section>

      {/* ── Map: eight countries ── */}
      <section id="map" className="max-w-[1920px] mx-auto px-5 md:px-11 pt-14 pb-4 scroll-mt-20">
        <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display">{t.mapTitle}</h2>
        <p className="text-[15px] text-ink/60 mt-2 max-w-[620px]">{t.mapLead}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
          {COUNTRIES.map((c) => {
            const active = c.status === 'live' || c.status === 'beta';
            const inner = (
              <>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/flags/${c.key}.svg`} alt="" className="w-12 h-8 object-cover rounded-[5px] border border-ink/20" />
                  <span className={`ml-auto text-[10px] font-mono uppercase tracking-label px-2.5 py-1 rounded-pill border ${c.status === 'live' ? 'bg-ink text-paper border-ink' : active ? 'border-ink text-ink' : 'border-ink/25 text-ink/50'}`}>{t.status[c.status]}</span>
                </div>
                <div className="mt-4 text-[22px] font-bold tracking-head">{nm(c)}</div>
                <div className="font-mono text-[12px] text-ink/45 mt-0.5">{c.tld}</div>
                <div className="text-[12.5px] text-ink/50 mt-0.5">{c.city}</div>
                <div className={`mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold ${active ? '' : 'text-ink/40'}`}>
                  {t.foot[c.status]} {active && <Arrow />}
                </div>
                {c.sub && <div className="font-mono text-[10.5px] uppercase tracking-label text-ink/45 mt-3 pt-3 border-t border-ink/10">{c.sub[lang] || c.sub.es}</div>}
              </>
            );
            const base = 'block rounded-card p-5 border-[1.5px] transition-all';
            return active ? (
              <a key={c.key} href={c.url} target="_blank" rel="noopener noreferrer" className={`${base} bg-card border-ink shadow-hard-sm hover:shadow-hard hover:-translate-y-1`}>{inner}</a>
            ) : (
              <div key={c.key} className={`${base} bg-card/60 border-ink/20`}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* ── Product ── */}
      <section id="product" className="max-w-[1920px] mx-auto px-5 md:px-11 py-16 scroll-mt-20">
        <div className="font-mono text-[11px] tracking-label uppercase text-ink/50 mb-3">{t.prodEyebrow}</div>
        <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display">{t.prodTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {t.prod.map((s, i) => (
            <div key={s.t} className="rounded-card border-[1.5px] border-ink bg-card p-6 shadow-hard-sm">
              <div className="font-mono text-[13px] w-9 h-9 rounded-pill bg-ink text-paper flex items-center justify-center font-bold mb-4">{i + 1}</div>
              <div className="text-[18px] font-bold tracking-head mb-1.5">{s.t}</div>
              <div className="text-[14px] text-ink/60 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── The through line: data (dark) ── */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-16">
          <div className="font-mono text-[11px] tracking-label uppercase text-paper/45 mb-3">{t.dataEyebrow}</div>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display max-w-[820px]">{t.dataTitle}</h2>
          <p className="text-[16px] md:text-[18px] text-paper/70 mt-4 max-w-[820px] leading-relaxed">{t.dataLead}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {t.dataCards.map((w) => (
              <div key={w.t} className="border border-paper/20 rounded-card p-5">
                <div className="text-[18px] font-bold tracking-head mb-1.5">{w.t}</div>
                <div className="text-[14px] text-paper/65 leading-relaxed">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Thesis ── */}
      <section id="thesis" className="max-w-[820px] mx-auto px-5 pt-16 pb-16 scroll-mt-20">
        <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display mb-6">{t.thesisTitle}</h2>
        <div className="space-y-5 text-[16px] md:text-[17px] text-ink/75 leading-[1.7]">
          {t.thesisProse.map((p, i) => {
            const parts = t.thesisBold && p.includes(t.thesisBold) ? p.split(t.thesisBold) : null;
            return (
              <p key={i} className={i === t.thesisProse.length - 1 ? 'font-serif italic text-ink text-[19px]' : ''}>
                {parts ? (<>{parts[0]}<strong className="font-bold text-ink">{t.thesisBold}</strong>{parts[1]}</>) : p}
              </p>
            );
          })}
        </div>
      </section>

      {/* ── American structure (dark) ── */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-16">
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-display max-w-[820px]">{t.structTitle}</h2>
          <p className="text-[16px] md:text-[18px] text-paper/70 mt-4 max-w-[640px] leading-relaxed">{t.structLead}</p>
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {t.structCards.map((s) => (
              <div key={s.t} className="border border-paper/20 rounded-card p-6">
                <div className="font-mono text-[11px] uppercase tracking-label text-paper/45 mb-2">{s.k}</div>
                <div className="text-[20px] font-bold tracking-head mb-2">{s.t}</div>
                <div className="text-[14px] text-paper/65 leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Invest ── */}
      <section id="invest" className="max-w-[1920px] mx-auto px-5 md:px-11 py-16 grid lg:grid-cols-[1fr_.9fr] gap-12 items-start scroll-mt-20">
        <div>
          <div className="font-mono text-[11px] tracking-label uppercase text-ink/50 mb-3">{t.investEyebrow}</div>
          <h2 className="text-[clamp(28px,4.5vw,46px)] font-bold tracking-display">{t.investTitle}</h2>
          <p className="text-[16px] md:text-[18px] text-ink/65 mt-4 max-w-[560px] leading-relaxed">{t.investLead}</p>
          <div className="mt-8 space-y-4">
            {t.investSteps.map((s, i) => (
              <div key={s.t} className="flex gap-4">
                <div className="shrink-0 font-mono text-[13px] w-8 h-8 rounded-pill bg-ink text-paper flex items-center justify-center font-bold">{i + 1}</div>
                <div>
                  <div className="text-[16px] font-bold tracking-head">{s.t}</div>
                  <div className="text-[14px] text-ink/60 leading-relaxed">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Form */}
        <div id="invest-form" className="rounded-card border-[1.5px] border-ink bg-card p-6 md:p-7 shadow-hard-sm scroll-mt-20">
          <FormField label={t.form.name}><input value={inv.name} onChange={setF('name')} placeholder={t.form.namePh} className="cl-input" /></FormField>
          <div className="grid grid-cols-2 gap-3">
            <FormField label={t.form.firm}><input value={inv.firm} onChange={setF('firm')} placeholder={t.form.firmPh} className="cl-input" /></FormField>
            <FormField label={t.form.country}><input value={inv.country} onChange={setF('country')} placeholder={t.form.countryPh} className="cl-input" /></FormField>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormField label={t.form.email}><input type="email" value={inv.email} onChange={setF('email')} placeholder={t.form.emailPh} className="cl-input" /></FormField>
            <FormField label={t.form.wa}><input value={inv.wa} onChange={setF('wa')} placeholder={t.form.waPh} className="cl-input" /></FormField>
          </div>
          <FormField label={t.form.invests}>
            <select value={inv.stage} onChange={setF('stage')} className="cl-input">
              <option value="">—</option>
              {t.stages.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </FormField>
          <FormField label={t.form.why}><textarea value={inv.why} onChange={setF('why')} rows={3} placeholder={t.form.whyPh} className="cl-input resize-y" /></FormField>
          <p className="font-mono text-[11px] text-ink/45 mt-3">{t.form.reqHint}</p>
          {invErr && <p className="text-[13px] text-[#c0392b] mt-2">{invErr}</p>}
          {invState === 'sent' ? (
            <p className="mt-4 rounded-input bg-[#2f6f43]/10 px-3 py-3 text-center text-[14px] font-semibold text-[#2f6f43]">{t.form.sent}</p>
          ) : (
            <>
              <button type="button" onClick={submitOverview} disabled={invState === 'sending'} className="btn btn-solid w-full mt-3 disabled:opacity-60">{invState === 'sending' ? t.form.sending : <>{t.form.submit} <Arrow /></>}</button>
              {invState === 'error' && <p className="text-[13px] text-[#c0392b] mt-2 text-center">{t.form.fail}</p>}
              <div className="text-center font-mono text-[11px] uppercase tracking-label text-ink/40 my-3">{t.form.or}</div>
              <button type="button" onClick={openCall} className="btn btn-ghost w-full">{t.form.book}</button>
            </>
          )}
          <p className="font-mono text-[11px] text-ink/40 mt-3 text-center">{t.form.tiny}</p>
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
              {COUNTRIES.map((c) => {
                const active = c.status === 'live' || c.status === 'beta';
                return (
                  <FootLink key={c.key} href={active ? c.url : undefined}>
                    {nm(c)}{c.status !== 'live' && <span className="text-paper/35"> · {t.status[c.status]}</span>}
                  </FootLink>
                );
              })}
            </FootCol>
            <FootCol title={t.colCompany}>{t.lCompany.map((x) => <FootLink key={x}>{x}</FootLink>)}</FootCol>
            <FootCol title={t.colHelp}>{t.lHelp.map((x) => <FootLink key={x}>{x}</FootLink>)}</FootCol>
            <FootCol title={t.colLegal}>{t.lLegal.map((x) => <FootLink key={x}>{x}</FootLink>)}</FootCol>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-12 pt-6 border-t border-paper/15 font-mono text-[11px] text-paper/50">
            <div>© {new Date().getFullYear()} Casa Libre — {t.rights}</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">{COUNTRIES.map((c) => <span key={c.key}>{c.tld}</span>)}</div>
          </div>
        </div>
      </footer>

      {/* ── Book-a-call modal ── */}
      {callOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/50 p-4 py-10" onClick={closeCall}>
          <div className="w-full max-w-md rounded-card border-[1.5px] border-ink bg-card p-6 shadow-hard" onClick={(e) => e.stopPropagation()}>
            <div className="mb-1 flex items-start justify-between gap-3">
              <div className="text-[20px] font-bold tracking-head">{t.form.call.title}</div>
              <button onClick={closeCall} aria-label="Close" className="-mr-1 rounded-full p-1 text-ink/60 hover:bg-ink/10 hover:text-ink">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
            <p className="mb-4 text-[13px] text-ink/55">{t.form.call.sub}</p>
            {callState === 'sent' ? (
              <p className="rounded-input bg-[#2f6f43]/10 px-3 py-6 text-center text-[14px] font-semibold text-[#2f6f43]">{t.form.sent}</p>
            ) : (
              <>
                <FormField label={t.form.call.name}><input value={call.name} onChange={setC('name')} placeholder={t.form.call.namePh} className="cl-input" /></FormField>
                <div className="grid grid-cols-2 gap-3">
                  <FormField label={t.form.call.email}><input type="email" value={call.email} onChange={setC('email')} placeholder={t.form.call.emailPh} className="cl-input" /></FormField>
                  <FormField label={t.form.call.phone}><input value={call.phone} onChange={setC('phone')} placeholder={t.form.call.phonePh} className="cl-input" /></FormField>
                </div>
                <FormField label={t.form.call.slot}><input value={call.slot} onChange={setC('slot')} placeholder={t.form.call.slotPh} className="cl-input" /></FormField>
                <FormField label={t.form.call.reason}><textarea value={call.reason} onChange={setC('reason')} rows={3} placeholder={t.form.call.reasonPh} className="cl-input resize-y" /></FormField>
                <p className="mt-1 font-mono text-[11px] text-ink/45">{t.form.reqHint}</p>
                {callErr && <p className="mt-2 text-[13px] text-[#c0392b]">{callErr}</p>}
                {callState === 'error' && <p className="mt-2 text-[13px] text-[#c0392b]">{t.form.fail}</p>}
                <div className="mt-4 flex gap-2">
                  <button type="button" onClick={submitCall} disabled={callState === 'sending'} className="btn btn-solid flex-1 disabled:opacity-60">{callState === 'sending' ? t.form.sending : t.form.call.submit}</button>
                  <button type="button" onClick={closeCall} className="btn btn-ghost">{t.form.call.cancel}</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block mb-3">
      <span className="font-mono text-[11px] uppercase tracking-label text-ink/55 mb-1.5 block">{label}</span>
      {children}
    </label>
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
