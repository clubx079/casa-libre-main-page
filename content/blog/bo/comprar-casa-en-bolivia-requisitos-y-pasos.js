// Blog BO — comprar una casa en Bolivia: requisitos y pasos (lado comprador).
const article = {
  slug: 'comprar-casa-en-bolivia-requisitos-y-pasos',
  title: 'Comprar casa en Bolivia: requisitos y pasos (comprador)',
  h1: 'Cómo comprar una casa en Bolivia: requisitos, papeles y pasos',
  description: 'Qué necesitas para comprar una casa en Bolivia: folio real, impuestos al día, minuta, escritura ante notario, pago del IMT e inscripción en Derechos Reales. Paso a paso.',
  category: 'comprar',
  tags: ['comprar', 'derechos reales', 'folio real', 'notario', 'primera vivienda'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  featured: true,
  answer: 'Para comprar una casa en Bolivia necesitas tu cédula de identidad, verificar en Derechos Reales que quien vende es el dueño y que la casa no tiene gravámenes (folio real y certificado alodial), revisar que los impuestos municipales estén pagados, firmar una minuta que el notario convierte en escritura pública, pagar el impuesto municipal a la transferencia e inscribir la compra en Derechos Reales. Mientras no inscribas, la compra no es oponible a terceros.',
  sections: [
    {
      id: 'antes-de-buscar',
      h2: 'Antes de buscar: cuánto puedes pagar y cómo',
      paras: [
        'El primer paso no es visitar casas, es saber con qué dinero vas a comprar. Si vas a pagar al contado, suma también los gastos de cierre: honorarios del notario, impuesto a la transferencia (si lo asumes por acuerdo con el vendedor), aranceles de Derechos Reales y el cambio de nombre en catastro. Si vas a usar un crédito, pide primero una precalificación en tu banco: te dirá un monto aproximado y evitarás enamorarte de una casa que no vas a poder financiar.',
        'Si tu ingreso y el valor de la casa entran en los topes de vivienda de interés social, puedes acceder a tasas máximas reguladas. Lo explicamos en la guía sobre crédito de vivienda social.',
      ],
    },
    {
      id: 'verificar-propiedad',
      h2: 'Verifica la propiedad antes de dar un solo boliviano',
      paras: [
        'En Bolivia el registro público de la propiedad es Derechos Reales (DD.RR.), que depende del Órgano Judicial. Cada inmueble inscrito tiene una matrícula y un folio real, donde figuran el dueño, la superficie y los gravámenes (hipotecas, anticréticos, embargos o anotaciones preventivas). Pide al vendedor el número de matrícula y solicita un folio real actualizado y, si puedes, un certificado alodial, que acredita si el inmueble está libre de cargas.',
      ],
      bullets: [
        'Que el nombre en el folio real coincida con la cédula de quien vende. Si son varios dueños (por ejemplo, una pareja casada o herederos), firman todos.',
        'Que no haya hipotecas, anticréticos ni embargos vigentes, o que se cancelen antes o en el mismo acto de la venta.',
        'Que la superficie del folio coincida con la del plano y con lo que ves en el terreno.',
        'Que el impuesto a la propiedad esté pagado en la alcaldía: puedes consultarlo en el sistema municipal de tu ciudad o en la plataforma RUAT, si tu municipio está vinculado.',
        'Que exista plano aprobado por la alcaldía y que la construcción coincida con lo aprobado.',
      ],
      tip: 'Si el vendedor ofrece vender "acciones y derechos" en lugar de la casa entera, significa que vende una parte de una copropiedad. Es una figura legal, pero tiene más riesgos: consúltalo con un abogado antes de seguir.',
    },
    {
      id: 'reserva',
      h2: 'La reserva o el anticipo: cómo no perder dinero',
      paras: [
        'Es común que el vendedor pida un anticipo para "reservar" la casa. Antes de pagarlo, ten ya el folio real en la mano. Haz el pago por transferencia bancaria a nombre del propietario registrado, no de un tercero, y firma un documento privado que diga el precio total, el monto del anticipo, el plazo para firmar la minuta y qué pasa con el dinero si la venta no se concreta por culpa de cualquiera de las partes.',
      ],
    },
    {
      id: 'pasos',
      h2: 'Los pasos de la compra, en orden',
      steps: [
        'Acuerda el precio, la moneda y la forma de pago con el vendedor.',
        'Revisa folio real, certificado alodial, impuestos municipales y plano aprobado.',
        'Firma un documento de reserva o anticipo, si lo hay, con condiciones claras.',
        'Un abogado redacta la minuta de compraventa con los datos de la matrícula, la superficie, el precio y la forma de pago.',
        'El notario de fe pública protocoliza la minuta y la convierte en escritura pública, con la firma de comprador y vendedor (y del cónyuge, si corresponde).',
        'Se paga el Impuesto Municipal a las Transferencias (IMT) en el municipio donde está el inmueble.',
        'Se presenta la escritura en Derechos Reales para inscribir la transferencia a tu nombre y obtener tu folio real.',
        'Haces el cambio de nombre en el catastro municipal y en los servicios (luz, agua, gas).',
      ],
    },
    {
      id: 'costos',
      h2: 'Qué gastos aparecen además del precio',
      paras: [
        'Los montos cambian según la ciudad y el valor del inmueble, por eso aquí van solo los conceptos. Pide un presupuesto por escrito al notario y al abogado antes de firmar.',
      ],
      table: {
        head: ['Gasto', 'Quién lo paga habitualmente', 'Nota'],
        rows: [
          ['Impuesto Municipal a las Transferencias (IMT)', 'La ley lo pone a cargo del vendedor (titular registrado)', 'Alícuota general del 3% según el reglamento; en la práctica se negocia'],
          ['Notario de fe pública', 'Según acuerdo', 'Arancel por protocolizar la escritura'],
          ['Abogado (minuta y revisión)', 'Normalmente el comprador', 'Honorario libre, pídelo por escrito'],
          ['Derechos Reales', 'El comprador', 'Aranceles de inscripción y certificados'],
          ['Catastro municipal', 'El comprador', 'Cambio de nombre y certificados'],
        ],
      },
    },
    {
      id: 'buscar',
      h2: 'Cómo buscar con criterio',
      paras: [
        'Define primero la zona y el presupuesto, y luego filtra. En Casa-Libre puedes ver casas en venta en el mapa y escribir directo por WhatsApp al dueño o a la inmobiliaria. Antes de visitar, pregunta si la casa tiene folio real a nombre del vendedor y si los impuestos están al día: te ahorra visitas a propiedades con problemas de papeles. También puedes guardar las que te gustan desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué documentos necesito para comprar una casa en Bolivia?', a: 'Como comprador, tu cédula de identidad (o pasaporte, si eres extranjero) y, si vas con crédito, los papeles que pida el banco. Del lado del vendedor tienes que revisar folio real, certificado alodial, impuestos pagados, plano aprobado y su cédula.' },
    { q: '¿Una compraventa sin inscribir en Derechos Reales vale?', a: 'Entre comprador y vendedor el contrato existe, pero frente a terceros (otro comprador, un acreedor del vendedor) la protección llega con la inscripción. Por eso conviene inscribir apenas tengas la escritura.' },
    { q: '¿Quién paga el impuesto a la transferencia?', a: 'El reglamento del IMT señala como obligado a la persona a cuyo nombre está registrado el bien, es decir, el vendedor. En la práctica muchas veces se negocia; déjalo escrito en la minuta.' },
    { q: '¿Necesito abogado y notario?', a: 'Sí. El notario de fe pública da forma de escritura pública a la venta, que es lo que se inscribe. Un abogado redacta la minuta y revisa los papeles; es la mejor inversión para evitar problemas.' },
  ],
  sources: [
    { name: 'Código Civil (Decreto Ley 12760), libro de los contratos y del registro', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-COD-DL12760B.xhtml' },
    { name: 'Decreto Supremo 27957: Reglamento de la Ley de Inscripción de Derechos Reales (folio real)', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-DS-27957.html' },
    { name: 'Decreto Supremo 24054: Reglamento del Impuesto Municipal a las Transferencias (IMT)', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-DS-24054.html' },
    { name: 'RUAT: consulta de impuestos municipales a inmuebles', publisher: 'RUAT', url: 'https://www.ruat.gob.bo/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta en el mapa' },
    { href: '/guias/comprar-primera-casa', label: 'Guía: cómo comprar tu primera casa' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar una casa' },
    { href: '/blog/folio-real-en-bolivia-que-es-y-como-obtenerlo', label: 'Folio real: qué es y cómo obtenerlo' },
  ],
  relatedGuias: ['comprar-primera-casa', 'gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar con un notario o abogado boliviano: (1) que el certificado alodial y el folio real actualizado se piden así hoy en DD.RR. y cuánto tardan; (2) alícuota vigente del IMT por municipio (DS 24054 dice 3%; las leyes municipales posteriores a la Ley 154 pueden fijar la suya); (3) costumbre real sobre quién paga IMT y notario; (4) si el cambio de nombre en catastro es obligatorio en todas las ciudades. El sitio del Consejo de la Magistratura / DD.RR. no abrió desde el equipo de prueba, por eso no se cita.',
};

export default article;
