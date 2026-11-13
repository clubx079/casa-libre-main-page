// Blog BO — impuesto a la propiedad de bienes inmuebles (IPBI): qué es y cómo verificarlo.
const article = {
  slug: 'impuesto-a-la-propiedad-de-inmuebles-bolivia',
  title: 'Impuesto a la propiedad de inmuebles en Bolivia: guía práctica',
  h1: 'Impuesto a la propiedad de bienes inmuebles en Bolivia: qué es, quién lo paga y cómo verificarlo',
  description: 'Qué es el impuesto municipal a la propiedad de bienes inmuebles (IPBI) en Bolivia, quién lo paga, de qué depende el monto, cómo consultar deudas en el RUAT o la alcaldía y por qué revisarlo antes de comprar.',
  category: 'costos-e-impuestos',
  tags: ['impuestos', 'ipbi', 'alcaldía', 'ruat', 'deudas'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'El impuesto a la propiedad de bienes inmuebles (IPBI) es un impuesto anual que cobra el gobierno municipal donde está el inmueble. Lo paga el propietario, y su monto depende de la valuación del inmueble según los criterios del municipio (zona, superficie, tipo y antigüedad de la construcción, entre otros). Antes de comprar, alquilar o entrar en anticrético, verifica que el impuesto esté al día: puedes consultarlo en la alcaldía o en el RUAT, si tu municipio está vinculado.',
  sections: [
    {
      id: 'que-es',
      h2: 'Qué es y quién lo cobra',
      paras: [
        'En Bolivia, la propiedad de inmuebles urbanos y rurales es un hecho imponible de dominio municipal: la Ley 154 de 2011 establece que los gobiernos municipales pueden crear impuestos sobre la propiedad de bienes inmuebles, con las exclusiones que fija la Constitución para la pequeña propiedad agraria y la propiedad comunitaria. Por eso cada municipio tiene su propio calendario, sus descuentos y sus sistemas de consulta.',
        'Muchos municipios administran el impuesto a través del Registro Único para la Administración Tributaria Municipal (RUAT), una plataforma compartida. Otros, como algunas ciudades grandes, tienen sistemas propios. Si no encuentras tu municipio en el RUAT, consulta directamente en la alcaldía.',
      ],
    },
    {
      id: 'monto',
      h2: 'De qué depende cuánto pagas',
      paras: [
        'El impuesto se calcula sobre una base imponible que surge de tablas de valuación que aprueba cada año el municipio, no del precio al que compraste. Los factores típicos son la zona tributaria, la superficie del terreno, la superficie construida, el tipo de construcción y su antigüedad. Por eso dos casas parecidas en barrios distintos pueden pagar montos muy diferentes.',
        'Si crees que los datos técnicos registrados (superficie, tipo de construcción) no coinciden con la realidad, puedes pedir su revisión en la alcaldía. Hacerlo vale la pena sobre todo después de ampliar o demoler parte de la construcción.',
      ],
    },
    {
      id: 'quien-paga',
      h2: 'Quién lo paga: dueño, inquilino o anticresista',
      table: {
        head: ['Situación', 'Quién paga normalmente'],
        rows: [
          ['Propietario que vive en su casa', 'El propietario'],
          ['Inmueble alquilado', 'El propietario, salvo que el contrato diga otra cosa'],
          ['Inmueble en anticrético', 'El anticresista, salvo pacto distinto (art. 1434 del Código Civil)'],
          ['Compraventa en curso', 'Las gestiones vencidas, el vendedor; conviene dejarlo escrito en la minuta'],
        ],
      },
      tip: 'Si entras en anticrético, lee bien la cláusula de impuestos: el Código Civil pone por defecto los impuestos y cargas anuales a cargo de quien entrega el dinero. Si acordaron que los paga el dueño, que quede escrito.',
    },
    {
      id: 'antes-de-comprar',
      h2: 'Por qué revisarlo antes de comprar',
      paras: [
        'Las deudas de impuestos municipales siguen al inmueble en la práctica: sin el impuesto al día es difícil hacer la transferencia, aprobar planos o pedir un crédito con esa garantía. Si compras un inmueble con años impagos, alguien tendrá que pagarlos (con multas e intereses) antes de avanzar.',
      ],
      steps: [
        'Pide al vendedor el número de inmueble o código catastral.',
        'Consulta la deuda en el RUAT o en el sistema de la alcaldía, o pide una certificación en ventanilla.',
        'Pide los comprobantes de pago de las últimas gestiones.',
        'Si hay deuda, acuerda por escrito que el vendedor la paga antes de la firma, o descuéntala del precio.',
      ],
    },
    {
      id: 'pagar-a-tiempo',
      h2: 'Pagar a tiempo y aprovechar descuentos',
      paras: [
        'Muchos municipios ofrecen descuentos por pago anticipado o dentro de un plazo, y a veces programas de condonación de multas para deudas antiguas. Los porcentajes y fechas cambian cada año y en cada ciudad, así que revísalos en el sitio de tu alcaldía o en el RUAT. Pagar fuera de plazo suma multas e intereses.',
      ],
    },
    {
      id: 'despues-de-comprar',
      h2: 'Después de comprar: pon el impuesto a tu nombre',
      paras: [
        'Cuando inscribes tu compra en Derechos Reales, el municipio no siempre actualiza solo sus registros. Tienes que hacer el cambio de nombre en el catastro y en el registro tributario municipal, con tu escritura inscrita y tu cédula. Si no lo haces, las boletas pueden seguir saliendo a nombre del vendedor, y cualquier deuda que se acumule complicará después una venta, un crédito o la aprobación de planos.',
        'Guarda cada comprobante de pago, en papel y escaneado. Si algún día vendes, el comprador te los va a pedir, y es mucho más fácil mostrarlos que reconstruir el historial en ventanilla.',
      ],
    },
    {
      id: 'errores',
      h2: 'Errores frecuentes con este impuesto',
      bullets: [
        'Creer que el inquilino o el anticresista lo paga "porque vive ahí", sin que el contrato lo diga.',
        'Ampliar la casa y no actualizar los datos técnicos: la diferencia aparece justo al vender.',
        'Pagar solo la gestión actual y dejar gestiones antiguas pendientes, que siguen sumando multas.',
        'Comprar sin consultar la deuda porque "el vendedor dijo que está todo pagado".',
      ],
    },
    {
      id: 'buscar',
      h2: 'Pregunta por los impuestos desde el primer mensaje',
      paras: [
        'Cuando veas una propiedad que te interesa, pregunta si tiene los impuestos al día y pide el número de inmueble para consultarlo tú. En Casa-Libre ves casas, departamentos y lotes en el mapa y escribes directo por WhatsApp al anunciante. También desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Quién cobra el impuesto a la propiedad de inmuebles?', a: 'El gobierno municipal donde está el inmueble. La Ley 154 lo define como un impuesto de dominio municipal.' },
    { q: '¿Cómo consulto si una casa debe impuestos?', a: 'En el RUAT, si el municipio está vinculado, o en la alcaldía, con el número de inmueble o código catastral. También puedes pedir una certificación.' },
    { q: '¿El inquilino paga el impuesto a la propiedad?', a: 'Normalmente no: lo paga el propietario, salvo que el contrato diga otra cosa. En anticrético, por defecto lo paga el anticresista.' },
    { q: '¿Hay descuento por pagar a tiempo?', a: 'Muchos municipios ofrecen descuentos por pronto pago, pero los porcentajes y plazos cambian cada año. Revísalos en tu alcaldía o en el RUAT.' },
  ],
  sources: [
    { name: 'Ley 154 de clasificación de impuestos de dominio de los gobiernos autónomos (art. 8)', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-L-N154.html' },
    { name: 'RUAT: consulta y pago de impuestos municipales', publisher: 'RUAT', url: 'https://www.ruat.gob.bo/' },
    { name: 'Código Civil (Decreto Ley 12760), art. 1434', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-COD-DL12760B.xhtml' },
    { name: 'Gobierno Autónomo Municipal de La Paz', publisher: 'GAMLP', url: 'https://www.lapaz.bo/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar una casa' },
    { href: '/guias/impuestos-y-gastos-al-vender', label: 'Guía: impuestos y gastos al vender' },
    { href: '/blog/impuesto-a-la-transferencia-de-inmuebles-bolivia', label: 'Impuesto a la transferencia de inmuebles' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa', 'impuestos-y-gastos-al-vender'],
  reviewNote: 'Confirmar con un local: (1) qué ciudades usan el RUAT y cuáles tienen sistema propio (La Paz, Santa Cruz, Cochabamba); (2) factores de valuación (se describen en forma general; varían por municipio); (3) descuentos por pronto pago vigentes en 2026; (4) práctica sobre deudas de impuestos en compraventas.',
};

export default article;
