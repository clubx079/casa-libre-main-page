// Blog UY — gastos de escrituración e ITP (lado comprador).
const article = {
  slug: 'gastos-de-escrituracion-e-itp-en-uruguay',
  title: 'Gastos de escrituración e ITP en Uruguay: cuánto suma comprar',
  h1: 'Gastos de escrituración en Uruguay: ITP, escribano, inmobiliaria y otros costos del comprador',
  description: 'Qué paga el comprador al escriturar en Uruguay: ITP (2% sobre el valor real de Catastro), honorarios del escribano, aportes y timbres, comisión inmobiliaria, crédito y certificados. Cómo presupuestarlo.',
  category: 'costos-e-impuestos',
  tags: ['ITP', 'escrituración', 'escribano', 'impuestos', 'compra'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Al comprar una propiedad en Uruguay, además del precio vas a pagar: el Impuesto a las Transmisiones Patrimoniales (ITP), que según la DGI es del 2% para el comprador sobre el valor real fijado por Catastro (no sobre el precio); los honorarios de tu escribano, que suelen calcularse como un porcentaje del precio más IVA; los aportes a la Caja Notarial y timbres; la comisión de la inmobiliaria si interviene, y, si pedís crédito, la tasación, los seguros y los gastos de la hipoteca. Pedí presupuestos por escrito al escribano y a la inmobiliaria antes de firmar el boleto de reserva.',
  sections: [
    {
      id: 'resumen',
      h2: 'Los gastos del comprador, de un vistazo',
      table: {
        head: ['Concepto', 'Sobre qué se calcula', 'Quién lo cobra'],
        rows: [
          ['ITP del comprador', '2% del valor real de Catastro (DGI)', 'Lo retiene el escribano y lo paga a la DGI'],
          ['Honorarios del escribano', 'Porcentaje del precio según arancel, más IVA', 'Tu escribano'],
          ['Aportes notariales y timbres', 'Según el acto y el monto', 'Caja Notarial y Estado, vía el escribano'],
          ['Inscripción y certificados', 'Tasas por documento', 'Registro y organismos, vía el escribano'],
          ['Comisión inmobiliaria', 'Porcentaje del precio, más IVA', 'La inmobiliaria, si intervino'],
          ['Gastos del crédito', 'Tasación, seguros, escritura de hipoteca', 'El banco y su escribano'],
        ],
      },
    },
    {
      id: 'itp',
      h2: 'El ITP: el impuesto de la compraventa',
      paras: [
        'El Impuesto a las Transmisiones Patrimoniales grava las enajenaciones de inmuebles, las promesas de enajenación y otras transmisiones. Según la DGI, en las operaciones a título oneroso la tasa es del 2% para el enajenante (el vendedor) y del 2% para el adquirente (el comprador).',
        'La base no es el precio que pagás, sino el valor real que fija la Dirección Nacional de Catastro, actualizado por IPC. En muchos casos ese valor es menor que el precio de mercado, así que el ITP puede ser menos que el 2% del precio. Tu escribano lo calcula con la cédula catastral.',
        'El escribano actúa como agente de retención: te cobra el impuesto en la escritura, presenta la declaración jurada (formulario 1700 para urbanos) y lo paga dentro del plazo.',
      ],
      tip: 'Si la compra es la primera venta de una vivienda promovida, el ITP podría estar exonerado. Preguntá al desarrollador y a tu escribano.',
    },
    {
      id: 'escribano',
      h2: 'Honorarios del escribano',
      paras: [
        'En Uruguay el escribano es quien estudia los títulos, pide los certificados, redacta la escritura, retiene impuestos e inscribe la compra. Sus honorarios suelen fijarse como un porcentaje del precio, tomando como referencia el arancel de la Asociación de Escribanos del Uruguay, más IVA. A eso se suman los aportes a la Caja Notarial y los timbres profesionales.',
        'Es habitual que cada parte tenga su escribano, o que uno intervenga por ambas. Pedí un presupuesto que detalle honorarios, IVA, aportes, timbres, certificados e inscripción, para no sumar sorpresas el día de la firma.',
      ],
    },
    {
      id: 'inmobiliaria',
      h2: 'Comisión de la inmobiliaria',
      paras: [
        'Si la operación la intermedia una inmobiliaria, normalmente cobra una comisión a cada parte, expresada como un porcentaje del precio más IVA. No es un monto fijado por ley: preguntalo al principio y que figure en el boleto de reserva. Si comprás directo al dueño, no hay comisión.',
      ],
    },
    {
      id: 'credito',
      h2: 'Si comprás con crédito',
      paras: [
        'El crédito agrega sus propios costos: la tasación del inmueble, la escritura de hipoteca (con honorarios del escribano del banco), los seguros de vida e incendio y, a veces, comisiones de otorgamiento. Pedí al banco el detalle completo junto con la simulación.',
      ],
    },
    {
      id: 'deudas',
      h2: 'Deudas que no deberías heredar',
      paras: [
        'El escribano controla que la contribución inmobiliaria, el impuesto de Primaria y los gastos comunes estén al día al escriturar. Lo habitual es que esas deudas las cancele el vendedor antes o en la firma, a veces descontándolas del precio. Si aparece una deuda, que quede resuelta por escrito antes de pagar el saldo.',
      ],
    },
    {
      id: 'presupuesto',
      h2: 'Cómo armar tu presupuesto',
      steps: [
        'Pedí al vendedor el número de padrón y al escribano el valor real de Catastro para calcular el ITP.',
        'Pedí un presupuesto escrito de honorarios, IVA, aportes, timbres e inscripción.',
        'Preguntá la comisión de la inmobiliaria, si hay una.',
        'Si usás crédito, sumá tasación, seguros y escritura de hipoteca.',
        'Sumá la mudanza, conexiones (UTE, OSE, internet) y arreglos iniciales.',
      ],
    },
    {
      id: 'vendedor',
      h2: 'Y el vendedor, ¿qué paga?',
      paras: [
        'El vendedor paga su 2% de ITP, su escribano si tiene uno, la comisión inmobiliaria que le corresponda y, si hay ganancia, el IRPF por incrementos patrimoniales en los casos en que aplique. Si vas a vender, mirá la guía de impuestos y gastos al vender.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Comparar con todo incluido',
      paras: [
        'Dos propiedades al mismo precio pueden costar distinto si una tiene comisión y la otra no, o si una es promovida. En Casa-Libre podés ver casas y apartamentos en venta en el mapa y hablar directo con el dueño o la inmobiliaria por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Los gastos de escrituración entran en el crédito hipotecario?', a: 'En general no: el banco financia una parte del precio y los gastos de la operación los cubrís con ahorro propio. Preguntalo en cada banco.' },
    { q: '¿Cuánto es el ITP en Uruguay?', a: 'Según la DGI, en una compraventa es 2% para el vendedor y 2% para el comprador, sobre el valor real fijado por Catastro, no sobre el precio.' },
    { q: '¿Quién paga la escritura en Uruguay?', a: 'Cada parte paga a su escribano. El comprador paga además su ITP, aportes y timbres, y la comisión inmobiliaria si corresponde.' },
    { q: '¿El ITP se calcula sobre el precio de venta?', a: 'No. Se calcula sobre el valor real de Catastro vigente, actualizado por IPC.' },
    { q: '¿Cuánto cobra un escribano por una compraventa?', a: 'Suele cobrar un porcentaje del precio tomando como referencia el arancel de la Asociación de Escribanos, más IVA y aportes. Pedí un presupuesto por escrito.' },
  ],
  sources: [
    { name: 'Impuesto a las Transmisiones Patrimoniales', publisher: 'DGI', url: 'https://www.gub.uy/direccion-general-impositiva/comunicacion/publicaciones/impuesto-transmisiones-patrimoniales-0' },
    { name: 'Cédula catastral', publisher: 'Dirección Nacional de Catastro', url: 'https://www.gub.uy/tramites/cedula-catastral' },
    { name: 'Asociación de Escribanos del Uruguay', publisher: 'AEU', url: 'https://www.aeu.org.uy/' },
    { name: 'Caja Notarial de Seguridad Social', publisher: 'Caja Notarial', url: 'https://www.cajanotarial.org.uy/' },
  ],
  related: [
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos e impuestos al comprar' },
    { href: '/guias/impuestos-y-gastos-al-vender', label: 'Guía: impuestos y gastos al vender' },
    { href: '/propiedades?op=venta', label: 'Propiedades en venta' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa', 'impuestos-y-gastos-al-vender'],
  reviewNote: 'Confirmar con un escribano: (1) porcentaje de honorarios de referencia del arancel AEU y si se calcula sobre precio o valor catastral (no se dio cifra); (2) comisión inmobiliaria usual (no se dio cifra); (3) que el pago de deudas de contribución/Primaria por el vendedor sea la práctica; (4) casos en que el vendedor paga IRPF por incremento patrimonial.',
};

export default article;
