// Blog UY — contribución inmobiliaria y Primaria (dueño, comprador, inquilino).
const article = {
  slug: 'contribucion-inmobiliaria-quien-la-paga',
  title: 'Contribución inmobiliaria en Uruguay: qué es y quién la paga',
  h1: 'Contribución inmobiliaria: qué es, quién la paga y cómo verificar deudas antes de comprar o alquilar',
  description: 'Qué es la contribución inmobiliaria en Uruguay, quién la paga (dueño o inquilino), el impuesto de Primaria, tasas departamentales y cómo verificar que una propiedad no tenga deudas antes de comprar.',
  category: 'costos-e-impuestos',
  tags: ['contribución inmobiliaria', 'Primaria', 'impuestos', 'intendencia', 'padrón'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'La contribución inmobiliaria es el impuesto anual que cobra cada Intendencia sobre los inmuebles de su departamento, calculado a partir del valor catastral, y en general se puede pagar en cuotas. La paga el propietario. En un alquiler, salvo que el contrato diga otra cosa, sigue a cargo del dueño, aunque algunos contratos trasladan tasas al inquilino. A eso se suma, en zonas urbanas, el impuesto de Enseñanza Primaria. Si vas a comprar, tu escribano verifica que ambos estén al día: una deuda de contribución sigue al inmueble y conviene que la cancele el vendedor antes de escriturar.',
  sections: [
    {
      id: 'que-es',
      h2: 'Qué es la contribución inmobiliaria',
      paras: [
        'Es un tributo departamental: lo fija y cobra la Intendencia de cada departamento (Montevideo, Canelones, Maldonado, etc.), por eso las búsquedas son siempre "contribución inmobiliaria Montevideo", "Maldonado", "Salto"... Cada una tiene su propio sistema de cálculo, vencimientos, descuentos por pago anual y exoneraciones.',
        'Se calcula a partir del valor catastral del padrón. Por eso, dos propiedades del mismo precio de mercado pueden pagar contribuciones distintas. Para saber cuánto paga una propiedad concreta, lo más directo es pedirle al dueño el último recibo o consultar en el sitio de la Intendencia con el número de padrón.',
      ],
    },
    {
      id: 'otros-tributos',
      h2: 'Los otros tributos que acompañan al inmueble',
      table: {
        head: ['Tributo', 'Quién lo cobra', 'Qué saber'],
        rows: [
          ['Contribución inmobiliaria', 'La Intendencia del departamento', 'Anual, en cuotas; base en el valor catastral'],
          ['Impuesto de Enseñanza Primaria', 'Nacional, para inmuebles urbanos y suburbanos', 'Tiene exoneraciones según el valor y el uso'],
          ['Tasas departamentales', 'La Intendencia', 'Por ejemplo, tasas de servicios; varían por departamento'],
          ['Saneamiento', 'Intendencia u OSE según la zona', 'La Ley 18.840 obliga a conectarse si hay red frente al inmueble'],
        ],
      },
    },
    {
      id: 'alquiler',
      h2: 'En un alquiler, ¿quién la paga?',
      paras: [
        'Por regla general, los tributos que gravan la propiedad, como la contribución inmobiliaria y Primaria, los paga el propietario. Pero el contrato puede decir otra cosa, y hay contratos que trasladan al inquilino alguna tasa o parte de los tributos.',
        'En el régimen sin garantía de la LUC, la ley prevé que si el dueño tuvo que pagar dos o más mensualidades de tributos que el contrato o la ley ponían a cargo del inquilino, esa deuda se suma al alquiler. Por eso es importante saber, antes de firmar, qué tributos te tocan a vos.',
      ],
      tip: 'Si el aviso dice "alquiler + gastos", preguntá qué incluye "gastos": ¿solo gastos comunes, o también contribución y tasas?',
    },
    {
      id: 'compra',
      h2: 'Si vas a comprar: cómo verificar que no haya deudas',
      paras: [
        'La deuda de contribución inmobiliaria va con el inmueble, no con la persona. Si comprás una propiedad con deuda, la Intendencia puede reclamártela a vos. Por eso, en toda compraventa:',
      ],
      steps: [
        'Pedí al vendedor el número de padrón y el último recibo pago.',
        'Consultá la deuda en el sitio de la Intendencia con el padrón, o pedí que lo haga tu escribano.',
        'Tu escribano solicita los certificados de que la contribución y Primaria están al día.',
        'Si hay deuda, acordá por escrito que la cancele el vendedor antes de escriturar o que se descuente del precio.',
      ],
    },
    {
      id: 'como-pagar',
      h2: 'Cómo y dónde se paga',
      paras: [
        'Cada Intendencia permite pagar en línea y en las redes de cobranza. En Montevideo, por ejemplo, la Intendencia tiene un trámite en línea de contribución inmobiliaria con consulta de deuda y emisión de recibos. Suele haber descuento por pagar el año completo por adelantado y recargos por atraso.',
        'Si sos jubilado o pensionista, si la propiedad es tu única vivienda y de bajo valor, o si es de una cooperativa de usuarios, puede haber exoneraciones o descuentos. Consultalo en tu Intendencia.',
      ],
    },
    {
      id: 'vender',
      h2: 'Si sos dueño y vas a vender o alquilar',
      paras: [
        'Tener los tributos al día te ahorra demoras: el escribano del comprador lo va a pedir sí o sí. Si alquilás, dejá claro en el contrato quién paga cada tributo y tasa.',
      ],
    },
    {
      id: 'calcular-costo',
      h2: 'Cómo usarla para comparar propiedades',
      paras: [
        'Cuando compares dos propiedades para comprar, sumá al precio el costo anual de tenerlas: contribución inmobiliaria, Primaria, gastos comunes si es un apartamento, y seguros. Dividido por doce, es un costo mensual que vas a pagar todos los meses mientras seas dueño, igual que una cuota.',
        'Como la contribución se calcula a partir del valor catastral y cada Intendencia tiene su propio sistema, una casa en un departamento puede pagar bastante más o menos que otra parecida en el departamento vecino. Si dudás entre una propiedad en Montevideo y otra en Canelones, pedí los recibos de las dos.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Antes de decidir',
      paras: [
        'Al consultar un aviso, preguntá cuánto se paga de contribución inmobiliaria por año y si está al día. Es parte del costo real de tener esa propiedad. En Casa-Libre podés ver propiedades en Montevideo, Canelones, Maldonado y otras ciudades en el mapa y escribir directo por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Se puede pagar la contribución inmobiliaria en cuotas?', a: 'En general sí: las Intendencias permiten pagar en cuotas durante el año y suelen ofrecer descuento por pago anual adelantado. Consultá los vencimientos de tu departamento.' },
    { q: '¿Quién paga la contribución inmobiliaria en un alquiler?', a: 'En general el propietario. Pero el contrato puede trasladar tributos o tasas al inquilino: revisá esa cláusula antes de firmar.' },
    { q: '¿Cómo sé si una propiedad debe contribución inmobiliaria?', a: 'Con el número de padrón podés consultar en el sitio de la Intendencia del departamento. En una compra, el escribano pide los certificados.' },
    { q: '¿La deuda de contribución pasa al comprador?', a: 'Sí, la deuda va con el inmueble. Por eso el escribano controla que esté al día y lo habitual es que la cancele el vendedor.' },
    { q: '¿Qué es el impuesto de Primaria?', a: 'Un impuesto nacional sobre inmuebles urbanos y suburbanos destinado a la enseñanza primaria, con exoneraciones según el valor y el uso.' },
  ],
  sources: [
    { name: 'Contribución inmobiliaria (trámites y tributos)', publisher: 'Intendencia de Montevideo', url: 'https://tramites.montevideo.gub.uy/tramites-y-tributos/contribucion-inmobiliaria' },
    { name: 'Cédula catastral', publisher: 'Dirección Nacional de Catastro', url: 'https://www.gub.uy/tramites/cedula-catastral' },
    { name: 'Ley N° 19.889 (LUC), art. 427', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/leyes/19889-2020' },
    { name: 'Constancias y certificados — Ley 18.840 (saneamiento)', publisher: 'OSE', url: 'https://www.ose.com.uy/tramite/solicitud-de-constancias-y-certificados-ley-18840-obligatoriedad-de-conexion-al-saneamiento' },
  ],
  related: [
    { href: '/propiedades-en/montevideo', label: 'Propiedades en Montevideo' },
    { href: '/propiedades-en/canelones', label: 'Propiedades en Canelones' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar: (1) quién recauda hoy el impuesto de Primaria y sus exoneraciones (no se dieron cifras); (2) que en contratos bajo 14.219 la contribución sea del propietario salvo pacto; (3) exoneraciones de contribución para jubilados en Montevideo; (4) que la deuda de contribución sea reclamable al nuevo propietario.',
};

export default article;
