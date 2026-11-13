// Blog VE — comprar un terreno en Venezuela: urbano, rural, ejido.
const article = {
  slug: 'comprar-terreno-en-venezuela',
  title: 'Comprar un terreno en Venezuela: qué revisar antes',
  h1: 'Comprar un terreno en Venezuela: urbano, rural o ejido, y qué revisar antes de pagar',
  description: 'Qué revisar al comprar un terreno en Venezuela: documento registrado, linderos y mensura, zonificación, servicios, terrenos ejidos y rurales, y por qué ver el terreno en persona.',
  category: 'comprar',
  tags: ['terreno', 'comprar', 'ejido', 'catastro', 'zonificación'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Antes de comprar un terreno en Venezuela confirma que el vendedor es el propietario según un documento registrado, que las medidas y linderos reales coinciden con el documento y el catastro, que la zonificación municipal permite lo que quieres construir y que hay acceso a agua, electricidad y vía. Distingue entre terreno urbano privado, terreno ejido (municipal) y tierra rural, porque cada uno tiene reglas distintas. Ve al terreno en persona con un topógrafo si las medidas importan.',
  sections: [
    {
      id: 'tipos',
      h2: 'No todos los terrenos son iguales',
      table: {
        head: ['Tipo', 'Qué es', 'Qué tener en cuenta'],
        rows: [
          ['Urbano privado', 'Terreno dentro del área urbana con título registrado a nombre de un particular', 'El caso más directo: revisar título, catastro y zonificación'],
          ['Ejido', 'Terreno propiedad del municipio', 'Hay procedimientos municipales para su uso o adquisición; un particular puede tener solo derechos de ocupación'],
          ['Rural o agrícola', 'Tierra con vocación agrícola fuera del área urbana', 'Hay una ley especial de tierras y el Instituto Nacional de Tierras (INTI) interviene en su regulación'],
          ['Parcela en urbanización o desarrollo', 'Lote dentro de un desarrollo con calles y servicios', 'Verificar que el desarrollo tenga permisos y el lote esté individualizado en el registro'],
        ],
      },
    },
    {
      id: 'titulo',
      h2: 'El título: quién es el dueño de verdad',
      paras: [
        'Pide copia del documento de propiedad registrado y haz que un abogado estudie la tradición legal y pida la certificación de gravámenes en el Registro Inmobiliario. En terrenos son frecuentes los problemas de sucesiones no hechas, ventas de "bienhechurías" sin título del suelo y terrenos ejidos ofrecidos como si fueran privados.',
        'Si alguien te vende solo "las bienhechurías" (lo construido o plantado) y no el suelo, ten claro qué estás comprando: no es lo mismo que la propiedad del terreno.',
      ],
    },
    {
      id: 'medidas',
      h2: 'Medidas, linderos y mensura',
      paras: [
        'El documento describe el terreno con medidas y linderos. En la realidad pueden no coincidir: cercas corridas, invasiones parciales o descripciones antiguas poco precisas. Un levantamiento topográfico hecho por un profesional te dice qué hay en el terreno y si coincide con el documento y con el catastro municipal.',
      ],
      steps: [
        'Compara el documento con la cédula catastral del terreno.',
        'Contrata un levantamiento topográfico si el terreno es grande o las medidas son clave para tu proyecto.',
        'Camina los linderos con el vendedor y, si puedes, con los vecinos.',
        'Verifica que no haya ocupantes ni construcciones de terceros.',
      ],
    },
    {
      id: 'zonificacion',
      h2: 'Zonificación y lo que puedes construir',
      paras: [
        'La alcaldía define qué se puede construir en cada zona: uso residencial o comercial, altura máxima, porcentaje de ocupación del terreno y retiros. Pide la constancia de zonificación o variables urbanas antes de comprar, sobre todo si piensas construir un edificio o un local.',
        'Un terreno barato puede no servirte si la zonificación no permite tu proyecto.',
      ],
    },
    {
      id: 'servicios',
      h2: 'Servicios y acceso',
      bullets: [
        'Agua: ¿hay acometida de acueducto, pozo o habrá que depender de cisternas?',
        'Electricidad: ¿hay red cercana o hay que tender línea?',
        'Vía de acceso: ¿pública, asfaltada, transitable en lluvias?',
        'Cloacas o necesidad de pozo séptico.',
        'Riesgos: cercanía a quebradas, pendientes fuertes o zonas inundables.',
      ],
      tip: 'Visita el terreno después de un día de lluvia fuerte. Verás si se inunda, si el acceso se vuelve intransitable o si hay escorrentías.',
    },
    {
      id: 'rural',
      h2: 'Si es tierra rural',
      paras: [
        'Las tierras con vocación agrícola tienen un régimen especial y el Instituto Nacional de Tierras (INTI) interviene en su regulación. Antes de comprar una finca o un lote rural, pide a un abogado con experiencia agraria que revise la situación del predio, porque hay figuras como la adjudicación o la garantía de permanencia que no equivalen a una propiedad privada plena.',
      ],
    },
    {
      id: 'construir',
      h2: 'Si piensas construir: calcula el proyecto completo',
      paras: [
        'El precio del terreno es solo el comienzo. Antes de comprar, pide una estimación preliminar a un arquitecto o ingeniero de lo que costaría tu proyecto en ese terreno concreto. Un terreno en pendiente, con suelo de relleno o lejos de las redes de servicios puede encarecer mucho la obra.',
      ],
      steps: [
        'Consulta las variables urbanas en la alcaldía para saber qué puedes construir.',
        'Pide un estudio de suelos si el terreno tiene pendiente o dudas sobre su firmeza.',
        'Averigua cuánto cuesta llevar agua, electricidad y cloacas hasta el terreno.',
        'Solicita el permiso de construcción en la alcaldía antes de empezar la obra.',
        'Reserva un margen para imprevistos: en obra, casi siempre aparecen.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Ver terrenos en el mapa',
      paras: [
        'En Casa-Libre puedes filtrar terrenos en venta y verlos en el mapa, lo que ayuda a ubicar accesos, vecinos y distancia a la ciudad antes de ir. Escribe al vendedor por WhatsApp para pedir el documento y la cédula catastral. Gratis, en la web y en la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo sé si un terreno tiene dueño en Venezuela?', a: 'Pide el documento de propiedad registrado y verifica en el Registro Inmobiliario la tradición legal y los gravámenes. Consulta también el catastro de la alcaldía.' },
    { q: '¿Qué es un terreno ejido?', a: 'Un terreno propiedad del municipio. Su uso o adquisición sigue procedimientos municipales, y quien lo ocupa no siempre tiene la propiedad del suelo.' },
    { q: '¿Un extranjero puede comprar un terreno en Venezuela?', a: 'Puede comprar terrenos urbanos. Para tierras rurales o zonas fronterizas y costeras hay normas especiales que conviene revisar con un abogado.' },
    { q: '¿Qué son las bienhechurías?', a: 'Las construcciones o mejoras hechas sobre un terreno. Comprar bienhechurías no es lo mismo que comprar el terreno.' },
    { q: '¿Qué son las variables urbanas?', a: 'Las reglas de la alcaldía sobre lo que se puede construir en un terreno: uso, altura, porcentaje de ocupación y retiros. Consúltalas antes de comprar si piensas construir.' },
    { q: '¿Necesito un topógrafo para comprar un terreno?', a: 'No es obligatorio, pero es muy recomendable si el terreno es grande o las medidas importan para tu proyecto. Te dice si lo real coincide con el documento.' },
  ],
  sources: [
    { name: 'Instituto Nacional de Tierras (INTI)', publisher: 'INTI', url: 'https://www.inti.gob.ve/' },
    { name: 'Servicio Autónomo de Registros y Notarías (SAREN)', publisher: 'SAREN', url: 'https://www.saren.gob.ve/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=terreno', label: 'Terrenos en venta' },
    { href: '/propiedades-en/isla-de-margarita', label: 'Propiedades en Isla de Margarita' },
    { href: '/blog/documento-de-propiedad-venezuela-como-verificarlo', label: 'Cómo verificar el documento de propiedad' },
  ],
  relatedGuias: ['comprar-primera-casa'],
  reviewNote: 'Confirmar con abogado: (1) régimen de ejidos y cómo se adquieren (Ley Orgánica del Poder Público Municipal, de memoria); (2) rol del INTI y figuras de adjudicación/garantía de permanencia (Ley de Tierras y Desarrollo Agrario, de memoria); (3) restricciones a extranjeros en zonas fronterizas/costeras; (4) constancia de variables urbanas como nombre del trámite.',
};

export default article;
