// Blog PY — gastos mensuales de vivir en una casa o un departamento.
const article = {
  slug: 'gastos-mensuales-de-una-casa-o-departamento',
  title: 'Gastos mensuales de una casa o departamento: expensas y más',
  h1: 'Cuánto cuesta por mes vivir en una casa o un departamento: expensas, servicios y más',
  description: 'Los gastos fijos de una vivienda en Paraguay: expensas ordinarias y extraordinarias, ANDE, agua, internet, impuesto inmobiliario, mantenimiento y seguro.',
  category: 'costos-e-impuestos',
  tags: ['expensas', 'gastos', 'presupuesto', 'alquiler', 'comprar'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Además del alquiler o la cuota, una vivienda tiene gastos fijos: luz (ANDE), agua, internet, recolección de basura, expensas si es un departamento o un barrio cerrado, el impuesto inmobiliario anual si sos dueño, mantenimiento y, si querés, un seguro. Las expensas pueden ser ordinarias (gastos comunes de todos los meses) o extraordinarias (obras puntuales). Antes de decidir, pedí las facturas reales de los últimos meses: es la única forma de saber cuánto vas a gastar de verdad.',
  sections: [
    {
      id: 'por-que',
      h2: 'Por qué mirar más allá del precio',
      paras: [
        'Dos departamentos con el mismo alquiler pueden costar muy distinto por mes: uno con expensas altas, ascensor, piscina y seguridad las 24 horas, otro sin expensas pero con un equipo de aire acondicionado viejo que dispara la factura de ANDE. Lo mismo al comprar: la cuota es solo una parte de lo que vas a pagar cada mes durante años.',
        'Este artículo no da montos, porque varían mucho según la zona, el tamaño y el consumo. Te da la lista completa para que armes tu propio presupuesto con números reales.',
      ],
    },
    {
      id: 'tabla',
      h2: 'La lista de gastos, quién los paga y cada cuánto',
      table: {
        head: ['Gasto', 'Frecuencia', 'Si alquilás', 'Si sos dueño'],
        rows: [
          ['Luz (ANDE)', 'Mensual', 'Inquilino, en general', 'Dueño'],
          ['Agua (ESSAP, junta de saneamiento o aguatería)', 'Mensual', 'Inquilino, en general', 'Dueño'],
          ['Internet y TV', 'Mensual', 'Inquilino', 'Dueño'],
          ['Recolección de basura', 'Mensual o incluida en tasas municipales', 'Según contrato', 'Dueño'],
          ['Expensas ordinarias', 'Mensual', 'Según contrato (muchas veces el inquilino)', 'Dueño'],
          ['Expensas extraordinarias', 'Ocasional', 'Normalmente el dueño', 'Dueño'],
          ['Impuesto inmobiliario', 'Anual', 'Normalmente el dueño', 'Dueño'],
          ['Mantenimiento y arreglos', 'Variable', 'Arreglos menores el inquilino; estructurales el dueño, según contrato', 'Dueño'],
          ['Seguro del hogar', 'Anual o mensual', 'Opcional (contenido)', 'Opcional, salvo que lo exija el crédito'],
        ],
      },
      paras: [
        'Quién paga qué en un alquiler lo define el contrato. La tabla muestra lo más habitual, pero siempre leé esa parte antes de firmar.',
      ],
    },
    {
      id: 'expensas',
      h2: 'Expensas: qué son y qué cubren',
      paras: [
        'Las expensas son la parte que cada propietario aporta para los gastos comunes de un edificio o un condominio. Se fijan según el reglamento de copropiedad, normalmente en proporción a la superficie de cada unidad, y las administra un administrador o la comisión de propietarios.',
        'Las expensas ordinarias cubren lo de todos los meses: limpieza de áreas comunes, portería o seguridad, luz y agua de los espacios comunes, mantenimiento de ascensores, piscina, jardines y el sueldo del personal. Las extraordinarias se aprueban para algo puntual: pintar la fachada, cambiar un ascensor, impermeabilizar la azotea. Pueden ser montos importantes.',
      ],
      bullets: [
        'Preguntá cuánto son las expensas y qué incluyen exactamente.',
        'Pedí las últimas tres liquidaciones de expensas, no un número "aproximado".',
        'Preguntá si hay expensas extraordinarias aprobadas o en discusión.',
        'Si alquilás, verificá si el precio incluye expensas o se pagan aparte.',
      ],
    },
    {
      id: 'ande',
      h2: 'Luz: el gasto que más varía',
      paras: [
        'En Paraguay el calor hace que el aire acondicionado sea el factor que más mueve la factura de ANDE. Un departamento con buena orientación, ventanas que sombrean y equipos eficientes (tipo inverter) puede gastar bastante menos que otro igual de grande con equipos viejos o mucho sol de la tarde.',
        'Al visitar, mirá la cantidad y antigüedad de los equipos de aire, si la cocina y el termocalefón son eléctricos y hacia dónde dan los ambientes. Y pedí las facturas de los meses de verano, no solo las de invierno.',
      ],
    },
    {
      id: 'agua',
      h2: 'Agua: quién presta el servicio en esa zona',
      paras: [
        'Según la zona, el agua la provee ESSAP, una junta de saneamiento o una aguatería privada. El servicio, la presión y el costo cambian. En algunas zonas hay casas con pozo propio y bomba, que agregan consumo eléctrico y mantenimiento.',
        'Preguntá si hay tanque, si la presión alcanza para el segundo piso y si hubo cortes frecuentes en el último verano.',
      ],
    },
    {
      id: 'impuesto',
      h2: 'Impuesto inmobiliario: un gasto anual que conviene mensualizar',
      paras: [
        'Si sos dueño, el impuesto inmobiliario se paga una vez por año y equivale al 1% del valor fiscal del inmueble, que suele ser menor que el valor de mercado y se ajusta anualmente. Lo cobra la municipalidad. Para presupuestar, dividí el monto anual por doce y sumalo a tus gastos de cada mes.',
      ],
    },
    {
      id: 'mantenimiento',
      h2: 'Mantenimiento y seguro',
      paras: [
        'Una casa necesita mantenimiento constante: pintura, limpieza de canaletas, revisión del techo antes de la temporada de lluvias, el pozo ciego o la cámara séptica donde no hay cloaca, el jardín. Una forma práctica de no llevarte sorpresas es separar todos los meses un monto fijo para mantenimiento, más alto si la casa es antigua.',
        'El seguro del hogar es opcional, salvo que lo exija un crédito hipotecario. Cubre incendio y otros daños según la póliza; si alquilás, existe el seguro de contenido para tus cosas.',
      ],
      tip: 'Armá tu presupuesto con las facturas reales del último año de la propiedad, más un monto fijo para mantenimiento. Si el número total te incomoda, mejor saberlo antes de firmar.',
    },
    {
      id: 'comparar',
      h2: 'Compará opciones con el costo total',
      paras: [
        'Cuando compares avisos, sumá precio más gastos fijos. En Casa-Libre podés ver casas y departamentos en el mapa y preguntar por WhatsApp, directo al dueño o a la inmobiliaria, cuánto son las expensas y los servicios. También desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué son las expensas en un departamento?', a: 'Son el aporte de cada propietario a los gastos comunes del edificio: limpieza, seguridad, ascensores, luz y agua de áreas comunes y mantenimiento. Se fijan según el reglamento de copropiedad.' },
    { q: '¿Quién paga las expensas en un alquiler?', a: 'Lo define el contrato. Es frecuente que el inquilino pague las ordinarias y el dueño las extraordinarias, pero verificá si el precio las incluye o van aparte.' },
    { q: '¿Qué son las expensas extraordinarias?', a: 'Gastos puntuales aprobados por los propietarios para obras o reparaciones importantes, como pintar la fachada o cambiar un ascensor. Normalmente las paga el dueño.' },
    { q: '¿Cómo calculo cuánto voy a gastar por mes?', a: 'Pedí las facturas reales de luz, agua y expensas de los últimos meses (incluido el verano), sumá internet, el impuesto inmobiliario anual dividido en doce y un monto fijo para mantenimiento.' },
  ],
  sources: [
    { name: 'Ley N° 1183/1985 — Código Civil (locación y propiedad horizontal)', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/5293/ley-n-1183-codigo-civil' },
    { name: 'Peña decreta reajuste del 4,1% para el impuesto inmobiliario de 2026', publisher: 'Última Hora', url: 'https://www.ultimahora.com/santiago-pena-decreta-reajuste-del-4-1-para-el-impuesto-inmobiliario-del-2026' },
    { name: 'Municipalidad de Asunción', publisher: 'Municipalidad de Asunción', url: 'https://www.asuncion.gov.py/' },
  ],
  related: [
    { href: '/propiedades?op=alquiler&type=depto', label: 'Departamentos en alquiler' },
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/guias/como-alquilar-mi-propiedad', label: 'Guía: cómo alquilar tu propiedad' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad', 'gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar: (1) que el Código Civil regule la propiedad horizontal (o si rige otra ley específica) para citarlo correctamente; (2) práctica habitual en PY sobre quién paga expensas ordinarias/extraordinarias en alquileres; (3) si la recolección de basura se cobra junto con tasas municipales en Asunción.',
};

export default article;
