// Blog SV — Impuesto sobre Transferencia de Bienes Raíces (ITBR): cálculo y pago.
const article = {
  slug: 'impuesto-transferencia-bienes-raices-el-salvador',
  title: 'Impuesto de transferencia de bienes raíces en El Salvador',
  h1: 'Impuesto sobre Transferencia de Bienes Raíces en El Salvador: cuánto es y cómo se calcula',
  description: 'Cuánto se paga de impuesto al comprar una casa o un terreno en El Salvador: el 3% sobre el exceso de US$28,571.43, quién lo paga, cómo calcularlo, plazos y por qué sin él no se inscribe la escritura.',
  category: 'costos-e-impuestos',
  tags: ['impuesto', 'transferencia', 'hacienda', 'comprar', 'cnr'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'El Impuesto sobre Transferencia de Bienes Raíces grava la compra de inmuebles en El Salvador. Lo paga el comprador. Si el valor del inmueble es de hasta US$28,571.43 (el equivalente a 250,000 colones), no se paga; si es mayor, se paga 3% solo sobre la parte que excede esa cifra. Se declara y paga ante el Ministerio de Hacienda dentro de los 60 días siguientes a la escritura, y el Registro no inscribe la compraventa sin el comprobante de pago.',
  sections: [
    {
      id: 'que-es',
      h2: 'Qué grava y quién lo paga',
      paras: [
        'La Ley del Impuesto sobre Transferencia de Bienes Raíces grava la transferencia de inmuebles entre vivos, es decir, compraventas, permutas y otras formas de traspaso que no sean herencias. La ley dice que el obligado a pagar es la persona, natural o jurídica, que adquiere el inmueble: el comprador.',
        'Esto se puede negociar en el contrato (por ejemplo, que el vendedor asuma una parte), pero frente a Hacienda el responsable es quien compra.',
      ],
    },
    {
      id: 'calculo',
      h2: 'Cómo se calcula, con ejemplos',
      paras: [
        'La ley fija un tramo exento de 250,000 colones. Como El Salvador usa el dólar a un tipo de cambio fijo de 8.75 colones por dólar desde la Ley de Integración Monetaria, ese tramo equivale a US$28,571.43. Sobre lo que exceda esa cifra se paga 3%.',
        'Fórmula: (valor del inmueble − 28,571.43) × 3%. Si el resultado es negativo, no hay impuesto.',
      ],
      table: {
        head: ['Valor del inmueble (ejemplo)', 'Parte que excede US$28,571.43', 'Impuesto (3%)'],
        rows: [
          ['US$25,000', 'US$0', 'US$0 (exento)'],
          ['US$45,000', 'US$16,428.57', 'US$492.86'],
          ['US$80,000', 'US$51,428.57', 'US$1,542.86'],
          ['US$150,000', 'US$121,428.57', 'US$3,642.86'],
        ],
      },
      tip: 'Los valores de la tabla son ejemplos para mostrar el cálculo, no precios de mercado.',
    },
    {
      id: 'valor',
      h2: 'Sobre qué valor se calcula',
      paras: [
        'En principio, sobre el precio de la escritura. Pero la ley establece que el valor declarado no puede ser menor de ciertos mínimos, y Hacienda puede revisar valores que parezcan demasiado bajos. Declarar un precio menor al real para pagar menos impuesto es un riesgo: además de posibles multas, si luego vende, su costo de compra registrado será más bajo y podría pagar más impuesto sobre la ganancia.',
      ],
    },
    {
      id: 'plazo',
      h2: 'Cuándo y cómo se paga',
      paras: [
        'Según la ley, la declaración debe presentarse y el impuesto pagarse dentro de los 60 días siguientes a la fecha de la escritura. En la práctica, el notario suele indicarle cómo hacer la declaración ante el Ministerio de Hacienda y el pago.',
        'Ese pago no es opcional: la ley ordena al Registro de la Propiedad exigir el comprobante, y sin él no se inscribe la escritura. Una compraventa no inscrita le deja expuesto, porque frente a terceros el dueño sigue siendo el vendedor.',
      ],
      steps: [
        'Firme la escritura de compraventa ante notario.',
        'Presente la declaración del impuesto ante el Ministerio de Hacienda.',
        'Pague el impuesto si el valor supera US$28,571.43.',
        'Entregue el comprobante junto con la escritura para inscribirla en el CNR.',
      ],
    },
    {
      id: 'exenciones',
      h2: 'Casos en que no se paga',
      paras: [
        'Además de los inmuebles de hasta US$28,571.43, la ley contempla algunas exenciones, por ejemplo cuando el Estado o las municipalidades adquieren un inmueble y otros casos previstos en leyes especiales. Las herencias no pagan este impuesto porque no son transferencias entre vivos. Si cree que su caso tiene una exención, confírmelo con el notario o con Hacienda antes de firmar.',
      ],
    },
    {
      id: 'otros-costos',
      h2: 'No es el único costo de la compra',
      bullets: [
        'Honorarios del notario por la escritura.',
        'Derechos de inscripción en el CNR.',
        'Certificaciones registrales y solvencias.',
        'Si hay crédito: escritura de hipoteca, avalúo y seguros.',
      ],
    },
    {
      id: 'errores',
      h2: 'Errores comunes con este impuesto',
      paras: [
        'El primer error es no incluirlo en el presupuesto. Muchos compradores calculan la prima y los gastos del notario, pero se olvidan del impuesto, y en una casa de precio medio la cifra ya es considerable. Calcúlelo desde que ve el aviso.',
        'El segundo es calcular el 3% sobre el precio completo. El impuesto se aplica solo sobre la parte que excede US$28,571.43, no sobre todo el valor. En una casa de US$45,000, la diferencia entre un cálculo y otro es de varios cientos de dólares.',
        'El tercero es dejar pasar el plazo. Si la escritura se firma y el impuesto no se declara ni se paga a tiempo, la inscripción se atrasa y pueden aplicarse recargos. Mientras la escritura no se inscribe, el inmueble sigue figurando a nombre del vendedor.',
        'El cuarto es pensar que "lo paga el notario". El notario suele orientar o hacer el trámite, pero el dinero lo pone el comprador. Pida que le entreguen el comprobante y guárdelo con su escritura: le servirá si algún día vende.',
      ],
    },
    {
      id: 'vendedor',
      h2: '¿Y el vendedor paga algo?',
      paras: [
        'El impuesto de transferencia no es del vendedor. Pero si el vendedor obtiene una ganancia al vender, puede tener que pagar impuesto sobre la renta por esa ganancia de capital. Son dos impuestos distintos, cada uno a cargo de una parte.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Calcule antes de ofertar',
      paras: [
        'Sume el impuesto al precio desde el inicio. En Casa-Libre puede ver casas, apartamentos y terrenos en venta con su precio, calcular el impuesto con la fórmula de arriba y escribir por WhatsApp al vendedor. También desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto es el impuesto por comprar una casa en El Salvador?', a: '3% sobre la parte del valor que exceda US$28,571.43. Si la casa vale menos que esa cifra, no se paga.' },
    { q: '¿Quién paga el impuesto de transferencia, el comprador o el vendedor?', a: 'Según la ley, el comprador (quien adquiere el inmueble). Las partes pueden acordar otra distribución, pero ante Hacienda responde el comprador.' },
    { q: '¿En cuánto tiempo hay que pagarlo?', a: 'La ley da 60 días desde la fecha de la escritura para declarar y pagar. Sin el comprobante, el CNR no inscribe la compraventa.' },
    { q: '¿Las herencias pagan este impuesto?', a: 'No, porque el impuesto grava transferencias entre vivos. Las herencias tienen su propio trámite.' },
  ],
  sources: [
    { name: 'Ley del Impuesto sobre Transferencia de Bienes Raíces (D.L. 552 de 1986 y reformas)', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-del-impuesto-sobre-transferencia-de-bienes-raices/gdoc' },
    { name: 'El Salvador: Other taxes (real estate transfer tax)', publisher: 'PwC Worldwide Tax Summaries', url: 'https://taxsummaries.pwc.com/el-salvador/corporate/other-taxes' },
    { name: 'Compraventa de bienes raíces', publisher: 'eRegulations El Salvador', url: 'https://elsalvador.eregulations.org/menu/49?l=es' },
    { name: 'Ley de Integración Monetaria', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-de-integracion-monetaria/gdoc' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=terreno', label: 'Terrenos en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar una casa' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar con un notario o contador: (1) umbral US$28,571.43 y tasa 3% vigentes (Justia muestra reformas hasta 2000; algunas disposiciones pasaron al Código Tributario); (2) plazo de 60 días para declarar y pagar (arts. 8 y 20) y si cambió con el Código Tributario; (3) canal actual de declaración ante Hacienda (en línea o presencial); (4) que las permutas estén gravadas. Ejemplos de la tabla son hipotéticos.',
};

export default article;
