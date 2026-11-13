// Blog PY — casa o departamento, comparación para compradores.
const article = {
  slug: 'casa-o-departamento-que-conviene',
  title: '¿Casa o departamento? Qué conviene comprar en Paraguay',
  h1: 'Casa o departamento: qué conviene comprar según tu forma de vivir',
  description: 'Comparación honesta entre comprar casa o departamento en Paraguay: gastos mensuales, expensas, seguridad, espacio, ubicación y facilidad para alquilar o revender.',
  category: 'comprar',
  tags: ['compra', 'casa', 'departamento', 'expensas', 'comparación'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Un departamento suele convenir si priorizás ubicación, seguridad y poco mantenimiento, y aceptás pagar expensas y tener menos espacio. Una casa conviene si necesitás patio, más metros o libertad para ampliar, y estás dispuesto a ocuparte vos del mantenimiento y la seguridad. Para el mismo presupuesto, en general el departamento te ubica más cerca del centro y la casa te da más superficie más lejos. La decisión depende de tu rutina, tu familia y cuánto tiempo pensás quedarte.',
  sections: [
    {
      id: 'pregunta-correcta',
      h2: 'La pregunta correcta no es cuál es mejor',
      paras: [
        'No hay una respuesta universal. Lo que sirve es preguntarte cómo vivís hoy y cómo vas a vivir en los próximos cinco a diez años: si vas a tener hijos o mascotas, si trabajás desde casa, cuánto tiempo pasás viajando al trabajo, si te gusta o te pesa ocuparte de arreglos.',
        'Con esas respuestas, la comparación de abajo se vuelve concreta.',
      ],
    },
    {
      id: 'tabla',
      h2: 'Comparación rápida',
      table: {
        head: ['Aspecto', 'Departamento', 'Casa'],
        rows: [
          ['Gasto fijo mensual', 'Expensas para áreas comunes, seguridad y mantenimiento del edificio', 'Sin expensas (salvo en condominio), pero mantenimiento a tu cargo'],
          ['Mantenimiento', 'Lo común lo resuelve la administración', 'Techo, patio, pintura, bombas y pozo los resolvés vos'],
          ['Seguridad', 'Portería, accesos controlados en muchos edificios', 'Depende del barrio; suele requerir rejas, alarma o cámaras'],
          ['Espacio', 'Menos metros, sin patio propio en general', 'Más metros, patio, lugar para ampliar'],
          ['Ubicación', 'Más oferta en zonas céntricas', 'Más oferta en barrios residenciales y ciudades del área metropolitana'],
          ['Libertad de uso', 'Sujeta al reglamento del edificio', 'Mayor, dentro de las normas municipales'],
          ['Alquilar o revender', 'Demanda de alquiler en zonas céntricas y universitarias', 'Demanda de familias; depende mucho del barrio'],
        ],
      },
    },
    {
      id: 'costos',
      h2: 'Costos: expensas contra mantenimiento',
      paras: [
        'Muchos compradores comparan solo el precio y se olvidan del gasto de todos los meses. En un departamento, las expensas cubren limpieza, portería, ascensores, piscina, seguridad y el fondo para arreglos del edificio. Varían muchísimo según los servicios: un edificio con amenities completos cobra bastante más que uno sencillo. Pedí siempre las últimas boletas de expensas antes de decidir.',
        'En una casa no hay expensas, pero el mantenimiento existe igual, solo que llega de golpe: impermeabilizar un techo, cambiar una bomba, vaciar el pozo ciego, pintar el frente, cuidar el jardín. Una forma práctica de compararlo es reservar todos los meses un monto para mantenimiento y ver si, sumado a la seguridad que vas a necesitar, se parece a las expensas del departamento.',
        'Los dos pagan impuesto inmobiliario a la municipalidad y los servicios de luz, agua e internet. El aire acondicionado pesa en la factura de la ANDE en ambos casos; una casa grande con muchos ambientes suele consumir más.',
      ],
    },
    {
      id: 'seguridad',
      h2: 'Seguridad y tranquilidad',
      paras: [
        'Para muchas personas que viven solas o viajan seguido, la seguridad es lo que define la elección. Un edificio con portería y control de acceso permite cerrar la puerta e irse unos días con menos preocupación. En una casa, la seguridad depende del barrio y de lo que invirtás vos.',
        'Una alternativa intermedia es la casa dentro de un condominio cerrado: tenés patio y metros, con seguridad compartida, pero pagás expensas y tenés reglamento. Lo explicamos en detalle en el artículo sobre condominios.',
      ],
    },
    {
      id: 'espacio-familia',
      h2: 'Espacio, familia y mascotas',
      paras: [
        'Si tenés chicos chicos o perros grandes, el patio cambia la vida diaria y una casa suele ganar. Revisá igual que el reglamento de un edificio permita mascotas antes de enamorarte de un departamento: algunos las restringen.',
        'Pensá también en el futuro: una casa con terreno te permite ampliar un dormitorio o un quincho; en un departamento estás limitado a la superficie que compraste.',
      ],
    },
    {
      id: 'ubicacion',
      h2: 'Ubicación y tiempo de viaje',
      paras: [
        'El tránsito en el área metropolitana de Asunción hace que la ubicación pese tanto como los metros. Por el mismo presupuesto, muchas veces la elección real es entre un departamento más chico cerca del trabajo o una casa más grande en Luque, San Lorenzo, Lambaré u otra ciudad vecina, con más tiempo de viaje.',
        'Hacé la prueba: recorré el trayecto en hora pico antes de decidir. Una hora diaria extra de viaje, multiplicada por años, es un costo real aunque no figure en el precio.',
      ],
    },
    {
      id: 'inversion',
      h2: 'Si pensás alquilarla o venderla después',
      paras: [
        'Si comprás pensando también en una renta, los departamentos pequeños bien ubicados (cerca de universidades, oficinas o centros comerciales) suelen tener demanda de inquilinos y son fáciles de administrar. Las casas atraen más a familias que buscan quedarse varios años, lo que da contratos más largos pero un mercado más chico y más dependiente del barrio.',
        'En los dos casos, lo que más protege el valor es la ubicación y el estado. Antes de comprar, mirá cuántas propiedades parecidas hay publicadas en la zona y a qué precio: es la mejor referencia de qué vas a enfrentar si algún día querés vender.',
      ],
    },
    {
      id: 'como-decidir',
      h2: 'Una forma simple de decidir',
      steps: [
        'Escribí tus tres prioridades no negociables (por ejemplo: menos de 30 minutos al trabajo, patio, seguridad).',
        'Calculá el gasto mensual total de cada opción: cuota o ahorro, expensas o mantenimiento, servicios, seguridad.',
        'Visitá al menos tres propiedades de cada tipo en las zonas que te interesan.',
        'Recorré el trayecto diario desde cada una en hora pico.',
        'Quedate con la opción que cumple tus tres prioridades con el gasto mensual que podés sostener.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Mirá las dos opciones en el mapa',
      paras: [
        'En Casa-Libre podés filtrar casas y departamentos en venta en la misma zona y compararlos lado a lado en el mapa, con contacto directo por WhatsApp con el dueño o la inmobiliaria. También funciona desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué es más barato de mantener, una casa o un departamento?', a: 'Depende. El departamento tiene expensas fijas todos los meses; la casa no, pero los arreglos (techo, pintura, bombas, pozo) y la seguridad corren por tu cuenta. Compará el gasto mensual total, no solo el precio.' },
    { q: '¿Es más fácil alquilar un departamento o una casa?', a: 'Los departamentos pequeños bien ubicados suelen tener más demanda y rotación; las casas atraen a familias que se quedan más tiempo. La ubicación pesa más que el tipo.' },
    { q: '¿Las casas en condominio pagan expensas?', a: 'Sí. Un condominio cerrado cobra expensas por la seguridad y las áreas comunes, y tiene un reglamento interno que tenés que respetar.' },
    { q: '¿Puedo tener mascotas en un departamento?', a: 'Depende del reglamento del edificio. Algunos las permiten sin problema y otros las restringen; pedí el reglamento antes de comprar o alquilar.' },
  ],
  sources: [
    { name: 'Municipalidad de Asunción', publisher: 'Municipalidad de Asunción', url: 'https://www.asuncion.gov.py/' },
    { name: 'Ley N° 1183/1985 — Código Civil', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/5293/ley-n-1183-codigo-civil' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=depto', label: 'Departamentos en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar una casa' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa', 'comprar-primera-casa'],
  reviewNote: 'Artículo mayormente cualitativo, sin cifras. Confirmar: (1) que la oferta de departamentos se concentre en zonas céntricas y la de casas en barrios residenciales y ciudades vecinas; (2) que haya edificios que restrinjan mascotas por reglamento. Las fuentes son genéricas (no hay datos oficiales comparando casa vs departamento).',
};

export default article;
