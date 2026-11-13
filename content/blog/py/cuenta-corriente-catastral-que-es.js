// Blog PY — cuenta corriente catastral (qué es y para qué sirve).
const article = {
  slug: 'cuenta-corriente-catastral-que-es',
  title: 'Qué es la cuenta corriente catastral y cómo encontrarla',
  h1: 'Qué es la cuenta corriente catastral y por qué la vas a necesitar',
  description: 'La cuenta corriente catastral identifica a un inmueble urbano en Paraguay. Qué es, en qué se diferencia del padrón y de la finca, y dónde encontrarla.',
  category: 'documentos-y-tramites',
  tags: ['catastro', 'documentos', 'impuesto inmobiliario', 'compra'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'La cuenta corriente catastral es el número con el que el Catastro identifica a un inmueble urbano en Paraguay: con ese número se calcula y se cobra el impuesto inmobiliario y se piden certificados. En zonas rurales el equivalente es el número de padrón. No es lo mismo que la finca o matrícula, que es el número con el que el inmueble figura en la Dirección General de los Registros Públicos. Lo encontrás en la boleta del impuesto inmobiliario, en el título de propiedad y en los certificados catastrales.',
  sections: [
    {
      id: 'tres-numeros',
      h2: 'Tres números distintos para el mismo inmueble',
      paras: [
        'Cuando empezás a mirar papeles de una propiedad aparecen varios números y es fácil confundirlos. Cada uno pertenece a una oficina diferente y sirve para algo distinto. Entender cuál es cuál te ahorra idas y vueltas con el escribano, la municipalidad y el banco.',
        'Pensalo así: el Catastro describe el inmueble físicamente (dónde está, cuánto mide, qué tiene construido y cuál es su valor fiscal), mientras que el Registro dice quién es el dueño y si hay hipotecas, embargos u otras anotaciones. La municipalidad usa los datos catastrales para cobrar el impuesto inmobiliario.',
      ],
      table: {
        head: ['Número', 'Quién lo maneja', 'Para qué sirve'],
        rows: [
          ['Cuenta corriente catastral (urbano)', 'Servicio Nacional de Catastro', 'Identificar el lote urbano, su superficie y su valor fiscal; liquidar el impuesto inmobiliario'],
          ['Padrón (rural)', 'Servicio Nacional de Catastro', 'Lo mismo, para inmuebles rurales'],
          ['Finca o matrícula', 'Dirección General de los Registros Públicos', 'Identificar el inmueble en el Registro: dueño, hipotecas, embargos, inhibiciones'],
        ],
      },
    },
    {
      id: 'donde-encontrarla',
      h2: 'Dónde encontrar la cuenta corriente catastral',
      paras: [
        'Si sos el dueño, o si el dueño te pasa sus papeles, el número suele estar a la vista en más de un lugar. Lo habitual es encontrarlo en:',
      ],
      bullets: [
        'La boleta o comprobante de pago del impuesto inmobiliario que emite la municipalidad.',
        'El título de propiedad (la escritura), donde el escribano transcribe los datos catastrales del inmueble.',
        'Un certificado catastral o informe de valuación emitido por el Servicio Nacional de Catastro.',
        'Planos de mensura o planos aprobados por la municipalidad, en muchos casos.',
      ],
      tip: 'Cuando consultes por una propiedad en venta, pedile al anunciante la cuenta corriente catastral y el número de finca o matrícula. Un dueño que tiene los papeles en orden los pasa sin problema; si hay demoras o evasivas, tomalo como una señal para revisar con más cuidado.',
    },
    {
      id: 'para-que-sirve',
      h2: 'Para qué la necesitás si vas a comprar',
      paras: [
        'Con la cuenta corriente catastral se puede verificar en la municipalidad si el inmueble tiene deudas del impuesto inmobiliario. Las deudas de este impuesto quedan asociadas al inmueble, por eso el escribano pide un certificado de no adeudar antes de firmar la escritura. Si el número del aviso no coincide con el de la boleta o el título, hay que aclararlo antes de pagar una seña.',
        'También sirve para comparar lo que dice el aviso con lo que dice el Catastro: superficie del terreno, metros construidos y ubicación. No es raro que una casa tenga ampliaciones que nunca se declararon. Eso no impide la compra, pero conviene saberlo, porque puede tener costos de regularización y afecta la valuación fiscal.',
        'Por último, el banco o la financiera la van a pedir si sacás un crédito hipotecario, junto con los datos del Registro, para tasar y para inscribir la hipoteca.',
      ],
    },
    {
      id: 'y-si-alquilo',
      h2: '¿Y si solo vas a alquilar?',
      paras: [
        'Como inquilino no estás obligado a conocerla, pero pedirla tiene sentido en un caso concreto: cuando querés confirmar que quien te alquila es realmente el dueño o tiene autorización. Con el número de finca podés pedir, a través de un escribano o abogado, información del Registro; con la cuenta corriente catastral podés cruzar la dirección con los datos del Catastro. Para alquileres de largo plazo o locales comerciales, ese chequeo vale la pena.',
      ],
    },
    {
      id: 'valor-fiscal',
      h2: 'Valor fiscal no es valor de mercado',
      paras: [
        'El Catastro asigna a cada inmueble un valor fiscal, que es la base sobre la que se calcula el impuesto inmobiliario (en general, el 1% de ese valor, más adicionales según el caso). Ese valor se actualiza cada año por decreto del Poder Ejecutivo y suele ser bastante menor que el precio al que se vende la propiedad en el mercado.',
        'Por eso no sirve mirar el valor fiscal para saber si un precio es caro o barato. Para eso hay que comparar con propiedades parecidas en la misma zona. Lo que sí te dice el valor fiscal es, aproximadamente, cuánto vas a pagar de impuesto inmobiliario por año.',
      ],
    },
    {
      id: 'run',
      h2: 'Lo nuevo: el sistema unificado registral y catastral',
      paras: [
        'La Ley N° 7424/2025 creó el Sistema Nacional Unificado Registral y Catastral y el Registro Unificado Nacional (RUN), con la idea de que la información del Registro y la del Catastro dejen de vivir en oficinas separadas. En la práctica, eso apunta a que los números del inmueble y sus datos de dominio se puedan consultar de forma integrada.',
        'El Poder Judicial informó la presentación de un Certificado Catastro Registral Inmobiliario en formato digital, que reúne en un solo documento datos que antes se pedían por separado. La implementación es gradual: no todos los trámites ni todos los inmuebles pasan al nuevo sistema al mismo tiempo, y quienes lo solicitan suelen ser escribanos y abogados. Antes de iniciar un trámite, preguntale a tu escribano qué certificado corresponde en tu caso.',
      ],
    },
    {
      id: 'si-no-coincide',
      h2: 'Qué hacer si los números no coinciden',
      paras: [
        'A veces el aviso dice una superficie, el título otra y el Catastro una tercera. O la cuenta corriente catastral corresponde a un lote más grande que después se subdividió. Son situaciones comunes en zonas que crecieron rápido y no siempre esconden un problema, pero sí exigen que un escribano o un agrimensor revise antes de firmar.',
      ],
      steps: [
        'Pedí al vendedor copia del título, la última boleta del impuesto inmobiliario y, si tiene, el plano de mensura.',
        'Compará superficie, ubicación y número de lote entre los tres documentos.',
        'Si algo no cierra, pedí a tu escribano un certificado catastral y un informe del Registro actualizados.',
        'No pagues seña hasta que la diferencia esté explicada por escrito.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Antes de llegar a los papeles',
      paras: [
        'En Casa-Libre podés comparar propiedades en el mapa por zona y precio y escribir directo por WhatsApp al dueño o a la inmobiliaria para pedir estos datos antes de visitar. También funciona desde la app de Casa-Libre para iPhone y Android, donde podés guardar las propiedades que querés revisar con tu escribano.',
      ],
    },
  ],
  faq: [
    { q: '¿La cuenta corriente catastral es lo mismo que el número de finca?', a: 'No. La cuenta corriente catastral la asigna el Catastro para identificar el inmueble urbano y su valor fiscal; la finca o matrícula es el número del inmueble en la Dirección General de los Registros Públicos, donde consta quién es el dueño y si hay gravámenes.' },
    { q: '¿Qué es el padrón de un inmueble?', a: 'Es el equivalente rural de la cuenta corriente catastral: el número con el que el Catastro identifica un inmueble rural y sobre el que se liquida el impuesto inmobiliario.' },
    { q: '¿Dónde veo la cuenta corriente catastral de mi casa?', a: 'En la boleta del impuesto inmobiliario, en el título de propiedad y en cualquier certificado catastral del inmueble.' },
    { q: '¿Con la cuenta corriente catastral puedo saber quién es el dueño?', a: 'No directamente. La titularidad consta en los Registros Públicos, con el número de finca o matrícula. Lo más seguro es pedir un informe a través de un escribano.' },
  ],
  sources: [
    { name: 'Servicio Nacional de Catastro', publisher: 'Ministerio de Economía y Finanzas', url: 'https://www.catastro.gov.py/' },
    { name: 'Dirección General de los Registros Públicos', publisher: 'Poder Judicial', url: 'https://www.pj.gov.py/contenido/154-direccion-general-de-los-registros-publicos/206' },
    { name: 'Ley N° 7424/2025 — Sistema Nacional Unificado Registral y Catastral y Registro Unificado Nacional', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/12672/ley-n-7424-2025-que-crea-el-sistema-nacional-unificado-registral-y-catastral-y-el-registro-unificado-nacional' },
    { name: 'RUN: presentan el Certificado Catastro Registral Inmobiliario digital', publisher: 'Poder Judicial', url: 'https://www.pj.gov.py/notas/30592-run-presentan-el-certificado-catastro-registral-inmobiliario-digital' },
    { name: 'La DNIT habilita en su página web la liquidación del Impuesto Inmobiliario', publisher: 'DNIT', url: 'https://www.dnit.gov.py/en/web/portal-institucional/w/la-dnit-habilita-en-su-p%C3%A1gina-web-la-liquidaci%C3%B3n-del-impuesto-inmobiliario' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=terreno', label: 'Terrenos en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos e impuestos al comprar' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa', 'documentos-para-vender-un-inmueble'],
  reviewNote: 'Confirmar: (1) que la cuenta corriente catastral figure habitualmente en la boleta municipal del impuesto inmobiliario y en el título; (2) que el SNC siga bajo el MEF tras la Ley 7424/2025 y el alcance real del certificado digital RUN; (3) la tasa del 1% del impuesto inmobiliario y sus adicionales; (4) la página de la DNIT no se pudo abrir desde el entorno de prueba (DNS), se verificó por buscador.',
};

export default article;
