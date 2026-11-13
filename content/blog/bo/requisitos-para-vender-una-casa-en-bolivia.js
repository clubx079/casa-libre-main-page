// Blog BO — requisitos para vender una casa en Bolivia (dueños que publican).
const article = {
  slug: 'requisitos-para-vender-una-casa-en-bolivia',
  title: 'Requisitos para vender una casa en Bolivia: lista del dueño',
  h1: 'Requisitos para vender una casa en Bolivia: qué tener listo antes de publicar',
  description: 'Lo que necesitas para vender una casa en Bolivia: título, folio real, alodial, impuestos al día, plano aprobado, catastro, estado civil y herencias. Más cómo publicar y responder a compradores.',
  category: 'vender',
  tags: ['vender', 'documentos', 'folio real', 'impuestos', 'publicar'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Para vender una casa en Bolivia necesitas ser el titular inscrito en Derechos Reales y tener a mano: el testimonio de tu título, un folio real actualizado, el certificado alodial (o saber qué gravámenes hay que cancelar), el impuesto a la propiedad al día, el plano aprobado y el registro catastral, y tu cédula. Si estás casado, normalmente firma también tu cónyuge; si heredaste, la declaratoria de herederos debe estar inscrita. Tener todo listo antes de publicar acelera la venta.',
  sections: [
    {
      id: 'por-que-antes',
      h2: 'Por qué preparar los papeles antes de publicar',
      paras: [
        'Los compradores serios, y sobre todo los bancos que dan créditos, revisan los papeles antes de avanzar. Si un comprador te pide el folio real y tardas semanas en conseguirlo, es probable que siga buscando. Si al revisar aparece una diferencia de superficie o una hipoteca vieja sin cancelar, la venta se frena justo cuando ya había acuerdo.',
        'Preparar la carpeta antes de publicar te permite responder rápido, mostrar transparencia y negociar desde una posición más firme.',
      ],
    },
    {
      id: 'lista',
      h2: 'La lista de documentos',
      table: {
        head: ['Documento', 'Dónde se obtiene', 'Para qué sirve'],
        rows: [
          ['Testimonio del título (escritura de compra, declaratoria de herederos, etc.)', 'Tu archivo o el notario que lo protocolizó', 'Acredita cómo adquiriste'],
          ['Folio real actualizado', 'Derechos Reales', 'Muestra que eres el titular y qué gravámenes hay'],
          ['Certificado alodial', 'Derechos Reales', 'Certifica si el inmueble está libre de cargas'],
          ['Impuesto a la propiedad al día', 'Alcaldía o RUAT', 'Sin deudas, la transferencia avanza'],
          ['Plano aprobado y registro catastral', 'Alcaldía', 'Demuestra que la construcción está autorizada y registrada'],
          ['Cédula de identidad y certificado de matrimonio, si corresponde', 'SEGIP y Registro Civil', 'Identifica a quienes deben firmar'],
        ],
      },
    },
    {
      id: 'casos-especiales',
      h2: 'Casos que necesitan un paso previo',
      bullets: [
        'Casa heredada: la declaratoria de herederos debe estar inscrita en Derechos Reales y firman todos los herederos, o quien tenga poder de ellos.',
        'Casa con hipoteca: se puede vender, pero hay que coordinar con el banco el pago y la cancelación de la hipoteca en el mismo acto o antes.',
        'Casa en anticrético: el anticresista tiene derecho de retención hasta que se le devuelva su dinero; el comprador tiene que saberlo y el anticrético debe resolverse.',
        'Casa alquilada: si el contrato tiene fecha cierta, el comprador debe respetarlo. Avisa al inquilino y coordina las visitas con él.',
        'Ampliaciones sin aprobar o diferencias de superficie: conviene regularizar antes de vender o explicarlo con claridad y ajustarlo en el precio.',
        'Venta mediante apoderado: el poder debe ser específico para vender y estar vigente.',
      ],
    },
    {
      id: 'impuestos',
      h2: 'Impuestos y gastos del vendedor',
      paras: [
        'Cuando una persona vende un inmueble, corresponde el Impuesto Municipal a las Transferencias (IMT). Su reglamento pone como obligado al titular registrado, es decir, a ti como vendedor, con una alícuota general del 3% sobre el mayor entre el precio y el valor del inmueble para el impuesto a la propiedad. En la práctica, el reparto de gastos se negocia: déjalo claro desde la primera conversación y por escrito en la minuta.',
      ],
      tip: 'Antes de fijar el precio, calcula cuánto te queda neto después de impuestos, cancelación de gravámenes, comisión (si hay intermediario) y regularizaciones. Así sabes hasta dónde puedes negociar.',
    },
    {
      id: 'anticipo',
      h2: 'Cuando aparece un comprador: el anticipo y la minuta',
      paras: [
        'Si el comprador te ofrece un anticipo para reservar la casa, fírmalo en un documento privado que diga el precio total, el monto del anticipo, el plazo para firmar la minuta y qué pasa con el dinero si alguno de los dos se echa atrás. Recíbelo por transferencia bancaria, nunca solo en efectivo sin recibo.',
        'Luego un abogado redacta la minuta de compraventa, el notario la convierte en escritura pública, se paga el impuesto a la transferencia y el comprador inscribe en Derechos Reales. Mientras más ordenados estén tus papeles, más rápido llegas a la firma y al pago.',
      ],
    },
    {
      id: 'publicar',
      h2: 'Cómo publicar para atraer compradores serios',
      bullets: [
        'Fotos con luz natural de todos los ambientes, el frente y la calle.',
        'Superficie del terreno y construida, tal como figuran en los papeles.',
        'Precio y moneda claros. Si aceptas pago en bolivianos o en dólares, dilo.',
        'Si los papeles están en orden y la casa sirve para crédito bancario, menciónalo: amplía el número de compradores.',
        'Ubicación correcta en el mapa, para que el comprador vea accesos y entorno.',
      ],
    },
    {
      id: 'consultas',
      h2: 'Responder consultas sin perder tiempo',
      paras: [
        'Ten preparado un mensaje con los datos clave (superficie, documentos disponibles, gastos, disponibilidad para visitas) y respóndelo rápido. Antes de coordinar una visita, pregunta al interesado si va a comprar al contado o con crédito, y si ya tiene una precalificación. Te ayuda a priorizar.',
        'En Casa-Libre puedes publicar tu casa y recibir consultas directamente por WhatsApp, sin intermediarios. También puedes gestionar tus publicaciones desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué documentos necesito para vender mi casa en Bolivia?', a: 'Título (testimonio), folio real actualizado, certificado alodial, impuesto a la propiedad al día, plano aprobado y registro catastral, y tu cédula; si estás casado, también el certificado de matrimonio y la firma de tu cónyuge.' },
    { q: '¿Puedo vender una casa heredada?', a: 'Sí, después de que la declaratoria de herederos esté inscrita en Derechos Reales. Firman todos los herederos o sus apoderados.' },
    { q: '¿Puedo vender una casa con hipoteca?', a: 'Sí, coordinando con el banco para pagar la deuda y cancelar la hipoteca antes o en el mismo acto de la venta.' },
    { q: '¿Cuánto tarda conseguir los papeles para vender?', a: 'Depende de la ciudad y de si hay algo que regularizar. Pide el folio real y el alodial apenas decidas vender, para tener margen si aparece algún problema.' },
    { q: '¿Quién paga el impuesto a la transferencia?', a: 'El reglamento lo pone a cargo del vendedor como titular registrado, aunque en la práctica se negocia. Déjalo escrito en la minuta.' },
  ],
  sources: [
    { name: 'Decreto Supremo 24054: Reglamento del Impuesto Municipal a las Transferencias', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-DS-24054.html' },
    { name: 'Decreto Supremo 27957: Reglamento de Derechos Reales', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-DS-27957.html' },
    { name: 'Código Civil (Decreto Ley 12760), compraventa, arrendamiento y anticresis', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-COD-DL12760B.xhtml' },
    { name: 'RUAT: impuestos municipales a inmuebles', publisher: 'RUAT', url: 'https://www.ruat.gob.bo/' },
  ],
  related: [
    { href: '/vender', label: 'Publica tu casa en Casa-Libre' },
    { href: '/guias/documentos-para-vender-un-inmueble', label: 'Guía: documentos para vender un inmueble' },
    { href: '/guias/cuanto-vale-mi-propiedad', label: 'Guía: cuánto vale mi propiedad' },
    { href: '/guias/impuestos-y-gastos-al-vender', label: 'Guía: impuestos y gastos al vender' },
  ],
  relatedGuias: ['documentos-para-vender-un-inmueble', 'impuestos-y-gastos-al-vender', 'vender-sin-inmobiliaria'],
  reviewNote: 'Confirmar con notario: (1) lista de documentos que piden hoy notarios y DD.RR. al vendedor (p. ej., certificado catastral, formularios municipales); (2) práctica sobre firma del cónyuge; (3) cuántas gestiones de impuesto a la propiedad se revisan; (4) procedimiento con anticrético vigente al vender. Se evitó duplicar la guía /guias/documentos-para-vender-un-inmueble con el enfoque de casos especiales y publicación.',
};

export default article;
