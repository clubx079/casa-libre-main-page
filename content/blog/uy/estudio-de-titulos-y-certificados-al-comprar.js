// Blog UY — estudio de títulos y certificados al comprar (lado comprador).
const article = {
  slug: 'estudio-de-titulos-y-certificados-al-comprar',
  title: 'Estudio de títulos y certificados al comprar en Uruguay',
  h1: 'Estudio de títulos y certificados: qué controla el escribano antes de que compres',
  description: 'Qué revisa el escribano antes de una compraventa en Uruguay: cadena de títulos, información del Registro de la Propiedad, embargos, hipotecas, contribución, Primaria, gastos comunes, saneamiento y certificados.',
  category: 'documentos-y-tramites',
  tags: ['estudio de títulos', 'escribano', 'certificados', 'registro', 'compra'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Antes de escriturar, tu escribano hace un estudio de títulos: revisa la cadena de compras, herencias y otras transmisiones de la propiedad para confirmar que el vendedor es el dueño y puede vender. Además pide información al Registro de la Propiedad sobre embargos, hipotecas, interdicciones y otros gravámenes, y controla que la contribución inmobiliaria, el impuesto de Primaria y los gastos comunes estén al día. Según el caso, también pide constancias de saneamiento, certificados tributarios del vendedor y la cédula catastral. Si algo falla, se corrige antes de pagar o la compra no se hace.',
  sections: [
    {
      id: 'por-que',
      h2: 'Por qué el estudio de títulos te protege',
      paras: [
        'En Uruguay el escribano tiene un papel central en la compraventa: no solo redacta la escritura, sino que controla que lo que comprás esté en condiciones de ser vendido. El estudio de títulos es ese control. Por eso conviene que vos tengas tu propio escribano, que revise todo pensando en tus intereses.',
        'El estudio se hace en el período de la reserva, antes de la escritura. Si aparece un problema, tu escribano te dice si se puede subsanar y cuánto podría demorar.',
      ],
    },
    {
      id: 'cadena',
      h2: 'La cadena de títulos',
      paras: [
        'El escribano revisa las escrituras anteriores de la propiedad, hacia atrás en el tiempo, para comprobar que cada transmisión fue válida: que quien vendió era el dueño, que las herencias se tramitaron, que las firmas y los poderes eran correctos. Problemas típicos:',
      ],
      bullets: [
        'Una sucesión que no se terminó: el vendedor heredó pero la herencia no está inscripta.',
        'Un vendedor casado o divorciado cuya situación de bienes no está clara.',
        'Un poder vencido o insuficiente.',
        'Diferencias entre las medidas del título y el plano de mensura.',
        'Construcciones no declaradas o no regularizadas.',
      ],
    },
    {
      id: 'registro',
      h2: 'La información del Registro de la Propiedad',
      paras: [
        'El escribano pide información a la Dirección General de Registros sobre el inmueble y las personas que venden. Así detecta hipotecas, embargos, promesas inscriptas a favor de otro, interdicciones (por ejemplo, limitaciones a la capacidad de una persona para vender) y otros gravámenes.',
        'Si hay una hipoteca, por ejemplo porque el vendedor todavía le debe al banco, lo habitual es cancelarla en el mismo acto de la compraventa con parte del precio, coordinando con el banco.',
      ],
    },
    {
      id: 'certificados',
      h2: 'Los controles de deudas y certificados',
      table: {
        head: ['Qué se controla', 'Por qué importa'],
        rows: [
          ['Contribución inmobiliaria', 'La deuda va con el inmueble'],
          ['Impuesto de Primaria', 'Debe estar al día en inmuebles urbanos'],
          ['Gastos comunes', 'Constancia de libre deuda de la administración del edificio'],
          ['Saneamiento (Ley 18.840)', 'Si hay red frente al inmueble, debe estar conectado o en regla; se piden constancias'],
          ['Cédula catastral', 'Valor real para el ITP'],
          ['Situación tributaria del vendedor', 'Según el caso, certificados de DGI o BPS, por ejemplo si el vendedor es una empresa'],
        ],
      },
    },
    {
      id: 'lavado',
      h2: 'Controles sobre las personas y el dinero',
      paras: [
        'La Ley 19.574 incluye a los escribanos entre los sujetos obligados a prevenir el lavado de activos cuando intervienen en compraventas. Por eso te van a pedir datos personales y documentación sobre el origen de los fondos, sobre todo en montos importantes. Tené esos papeles listos para no demorar la firma.',
      ],
    },
    {
      id: 'tiempos',
      h2: 'Cuánto demora',
      paras: [
        'Depende de la propiedad y de lo que aparezca. Una propiedad con títulos limpios y deudas al día se resuelve más rápido; una herencia sin terminar o una construcción sin regularizar puede llevar mucho más. Por eso el boleto de reserva tiene que dar un plazo razonable y prever qué pasa si los títulos no están en orden.',
      ],
      tip: 'Pedí que el boleto diga que, si el estudio de títulos tiene observaciones que no se pueden subsanar en el plazo, te devuelven la seña.',
    },
    {
      id: 'checklist',
      h2: 'Qué podés pedir vos desde el principio',
      steps: [
        'Número de padrón y copia del título del vendedor.',
        'Último recibo de contribución inmobiliaria y de Primaria.',
        'Constancia de gastos comunes al día, si es un apartamento.',
        'Plano de mensura o de propiedad horizontal.',
        'Datos del escribano del vendedor, para que los escribanos coordinen.',
      ],
    },
    {
      id: 'senales',
      h2: 'Señales de alerta antes de llegar al escribano',
      paras: [
        'Hay situaciones que no siempre impiden la compra, pero que conviene conocer desde el primer contacto para no perder tiempo ni dinero en una reserva:',
      ],
      bullets: [
        'El vendedor no es el titular y "está tramitando" la herencia.',
        'Te piden la seña antes de darte el número de padrón.',
        'El precio es muy inferior al de propiedades parecidas en la zona.',
        'Hay ampliaciones evidentes que no figuran en los planos.',
        'Venden "con boleto" o "con derechos" en lugar de con título.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Antes de reservar',
      paras: [
        'Al consultar un aviso, preguntá si la propiedad tiene títulos en orden y si está libre de deudas. En Casa-Libre podés ver casas, apartamentos y terrenos en venta en el mapa y escribir directo por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué pasa si el estudio de títulos encuentra un problema?', a: 'Tu escribano te dice si se puede subsanar y en cuánto tiempo. Si no se puede, y el boleto lo prevé, la reserva se deja sin efecto y te devuelven la seña.' },
    { q: '¿Qué es el estudio de títulos?', a: 'La revisión que hace el escribano de las escrituras anteriores de una propiedad para confirmar que el vendedor es el dueño y que no hay problemas que impidan la venta.' },
    { q: '¿Qué certificados pide el escribano para una compraventa?', a: 'Información del Registro de la Propiedad sobre gravámenes e interdicciones, y constancias de contribución, Primaria, gastos comunes y saneamiento al día; según el caso, certificados de DGI o BPS del vendedor.' },
    { q: '¿Se puede comprar una casa con hipoteca?', a: 'Sí, si la hipoteca se cancela en el mismo acto de la compra con parte del precio, coordinando con el banco del vendedor.' },
    { q: '¿Quién paga el estudio de títulos?', a: 'Normalmente forma parte de los honorarios del escribano del comprador. Pedí un presupuesto que lo detalle.' },
  ],
  sources: [
    { name: 'Dirección General de Registros', publisher: 'DGR', url: 'https://www.dgr.gub.uy/' },
    { name: 'Ley N° 19.574 (prevención del lavado de activos)', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/leyes/19574-2017' },
    { name: 'Constancias y certificados — Ley 18.840 (saneamiento)', publisher: 'OSE', url: 'https://www.ose.com.uy/tramite/solicitud-de-constancias-y-certificados-ley-18840-obligatoriedad-de-conexion-al-saneamiento' },
    { name: 'Cédula catastral', publisher: 'Dirección Nacional de Catastro', url: 'https://www.gub.uy/tramites/cedula-catastral' },
    { name: 'Asociación de Escribanos del Uruguay', publisher: 'AEU', url: 'https://www.aeu.org.uy/' },
  ],
  related: [
    { href: '/propiedades?op=venta', label: 'Propiedades en venta' },
    { href: '/guias/documentos-para-vender-un-inmueble', label: 'Guía: documentos de un inmueble' },
    { href: '/blog/boleto-de-reserva-y-promesa-de-compraventa', label: 'Boleto de reserva y promesa' },
  ],
  relatedGuias: ['documentos-para-vender-un-inmueble', 'comprar-primera-casa'],
  reviewNote: 'Confirmar con un escribano: (1) período que abarca usualmente el estudio de títulos (no se dio cifra); (2) qué certificados de DGI/BPS se piden y cuándo (persona física vs empresa); (3) que las constancias de saneamiento de la Ley 18.840 se exijan en compraventas y quién las emite en Montevideo (Intendencia) vs interior (OSE).',
};

export default article;
