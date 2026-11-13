// Blog UY — padrón, cédula catastral y plano de mensura.
const article = {
  slug: 'padron-cedula-catastral-y-plano-de-mensura',
  title: 'Padrón, cédula catastral y plano de mensura: qué son',
  h1: 'Padrón, cédula catastral y plano de mensura: los datos de una propiedad en Uruguay',
  description: 'Qué es el número de padrón, para qué sirve la cédula catastral, qué es el valor real de Catastro y qué es un plano de mensura en Uruguay. Cómo pedirlos y por qué importan al comprar un terreno o una casa.',
  category: 'documentos-y-tramites',
  tags: ['padrón', 'catastro', 'cédula catastral', 'plano de mensura', 'terreno'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'En Uruguay cada inmueble se identifica con un número de padrón, asignado por la Dirección Nacional de Catastro, junto con el departamento y la localidad. La cédula catastral es el documento con valor legal que certifica el valor catastral de ese padrón y se usa ante escribanos, registros y oficinas de cobro. El plano de mensura lo hace un ingeniero agrimensor y muestra las medidas, los límites y la superficie del terreno; se registra en Catastro. Si vas a comprar, pedí el padrón desde el primer contacto: con él se verifican deudas, títulos y medidas.',
  sections: [
    {
      id: 'padron',
      h2: 'El número de padrón: la "cédula de identidad" del inmueble',
      paras: [
        'El padrón es el número que identifica cada inmueble en el Catastro nacional. No alcanza con la dirección: en una misma dirección puede haber varios padrones (por ejemplo, cada apartamento de un edificio en propiedad horizontal tiene su propia unidad dentro del padrón matriz), y una casa puede ocupar más de un padrón.',
        'Con el padrón se consulta la deuda de contribución inmobiliaria, se piden certificados al Registro, se hace el cambio de titular de OSE y se calcula el ITP. Por eso es el primer dato que tu escribano te va a pedir.',
      ],
      tip: 'El padrón figura en el recibo de contribución inmobiliaria. Pedíselo al dueño desde el primer mensaje: si no lo quiere dar, es una señal para tener en cuenta.',
    },
    {
      id: 'cedula-catastral',
      h2: 'La cédula catastral y el valor real',
      paras: [
        'Según la Dirección Nacional de Catastro, la cédula catastral es el documento con valor legal que certifica el valor catastral base de un inmueble, y se presenta ante oficinas recaudadoras, registros notariales y cualquier trámite que requiera certificar ese valor. Se pide en línea o en las oficinas de Catastro, que tiene sede en Montevideo y oficinas delegadas en los departamentos.',
        'Ese valor catastral es la base del ITP, el impuesto de la compraventa: según la DGI, se toma el valor real fijado por Catastro, actualizado por IPC. También influye en otros tributos. Existe además la "cédula catastral informada", con más información del inmueble.',
      ],
    },
    {
      id: 'mensura',
      h2: 'El plano de mensura',
      paras: [
        'El plano de mensura es el plano que hace un ingeniero agrimensor midiendo el terreno: muestra sus medidas, linderos, superficie y ubicación, y las construcciones si corresponde. Se registra en Catastro y queda vinculado al padrón.',
        'Las búsquedas de "plano de mensura por padrón" son frecuentes porque se necesita en muchas situaciones: para comprar un terreno, para fraccionar, para construir o regularizar construcciones, para pedir un crédito o cuando hay dudas sobre dónde están los límites.',
      ],
      bullets: [
        'Si comprás un terreno: el plano te dice exactamente qué comprás y si coincide con lo que ves.',
        'Si las medidas reales no coinciden con el título o el plano, puede hacer falta una nueva mensura.',
        'Si el terreno viene de un fraccionamiento, verificá que el fraccionamiento esté aprobado y el plano registrado.',
        'Para construir, la Intendencia pide documentación del terreno, entre ella el plano.',
      ],
    },
    {
      id: 'comprar-terreno',
      h2: 'Si vas a comprar un terreno',
      steps: [
        'Pedí el número de padrón y el departamento.',
        'Pedí copia del plano de mensura registrado.',
        'Recorré el terreno con el plano: mojones, frentes, fondo.',
        'Consultá en la Intendencia qué se puede construir (normas de edificación de la zona).',
        'Verificá si hay servicios: agua, luz y saneamiento; si hay red frente al terreno, la Ley 18.840 obliga a conectarse.',
        'Que tu escribano estudie los títulos y las deudas.',
        'Si hay dudas en los límites, contratá un agrimensor antes de firmar.',
      ],
    },
    {
      id: 'propiedad-horizontal',
      h2: 'En un apartamento',
      paras: [
        'En un edificio en propiedad horizontal, cada unidad tiene su identificación dentro del padrón, y existe un plano de fraccionamiento horizontal que define cada unidad y los bienes comunes. Si comprás en pozo, la escritura definitiva requiere que ese plano esté registrado.',
      ],
    },
    {
      id: 'donde',
      h2: 'Dónde se piden',
      table: {
        head: ['Documento', 'Dónde'],
        rows: [
          ['Número de padrón', 'Recibo de contribución inmobiliaria, título o consulta al dueño'],
          ['Cédula catastral', 'Dirección Nacional de Catastro, en línea o presencial'],
          ['Plano de mensura', 'Catastro (planos registrados) o un ingeniero agrimensor'],
          ['Deudas de contribución', 'Intendencia del departamento, con el padrón'],
          ['Información registral', 'Registro de la Propiedad (DGR), normalmente vía escribano'],
        ],
      },
    },
    {
      id: 'errores',
      h2: 'Errores comunes con estos datos',
      bullets: [
        'Confiar en la dirección del aviso sin verificar el padrón: puede haber dos terrenos contiguos con padrones distintos.',
        'Suponer que el valor catastral es el precio de mercado: son cosas distintas, y el catastral suele ser menor.',
        'Comprar un terreno "de fraccionamiento" sin verificar que el plano esté registrado y aprobado.',
        'No consultar en la Intendencia qué se puede construir antes de comprar.',
        'Pensar que la cédula catastral prueba quién es el dueño: la titularidad la acreditan los títulos y el Registro.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Buscar con el padrón en mente',
      paras: [
        'Cuando consultes un aviso, pedí el padrón y, si es terreno, el plano. En Casa-Libre podés ver terrenos, casas y apartamentos en venta en el mapa y escribirle directo al anunciante por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué es el número de padrón?', a: 'El número que identifica a cada inmueble en el Catastro nacional, junto con el departamento y la localidad. Figura en el recibo de contribución inmobiliaria.' },
    { q: '¿Para qué sirve la cédula catastral?', a: 'Certifica el valor catastral del inmueble y se presenta ante escribanos, registros y oficinas de cobro. Es la base del ITP.' },
    { q: '¿Quién hace un plano de mensura?', a: 'Un ingeniero agrimensor, que mide el terreno y registra el plano en Catastro.' },
    { q: '¿Cómo consigo el plano de mensura de un padrón?', a: 'Consultando los planos registrados en Catastro con el número de padrón, o pidiéndoselo al dueño o a un agrimensor.' },
  ],
  sources: [
    { name: 'Cédula catastral', publisher: 'Dirección Nacional de Catastro', url: 'https://www.gub.uy/tramites/cedula-catastral' },
    { name: 'Cédula catastral informada', publisher: 'Dirección Nacional de Catastro', url: 'https://www.gub.uy/tramites/cedula-catastral-informada' },
    { name: 'Dirección Nacional de Catastro', publisher: 'MEF', url: 'https://www.gub.uy/ministerio-economia-finanzas/direccion-nacional-catastro' },
    { name: 'Impuesto a las Transmisiones Patrimoniales', publisher: 'DGI', url: 'https://www.gub.uy/direccion-general-impositiva/comunicacion/publicaciones/impuesto-transmisiones-patrimoniales-0' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=terreno', label: 'Terrenos en venta' },
    { href: '/guias/documentos-para-vender-un-inmueble', label: 'Guía: documentos de un inmueble' },
    { href: '/propiedades-en/canelones', label: 'Propiedades en Canelones' },
  ],
  relatedGuias: ['documentos-para-vender-un-inmueble', 'comprar-primera-casa'],
  reviewNote: 'Confirmar con un agrimensor/escribano: (1) cómo se identifican hoy las unidades de PH (padrón matriz + unidad); (2) cómo se consultan planos registrados por padrón (servicio en línea de Catastro); (3) que la cédula catastral informada se describe correctamente.',
};

export default article;
