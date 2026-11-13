// Blog SV — gastos de tener una casa: tasas municipales, servicios, mantenimiento.
const article = {
  slug: 'gastos-mensuales-de-una-casa-en-el-salvador',
  title: 'Gastos mensuales de una casa en El Salvador',
  h1: 'Cuánto cuesta mantener una casa en El Salvador: tasas municipales, servicios y cuotas',
  description: 'Los gastos de tener una casa o un apartamento en El Salvador además de la cuota: tasas municipales, agua, luz, cuota de mantenimiento, seguros y reparaciones. Cómo estimarlos antes de comprar.',
  category: 'costos-e-impuestos',
  tags: ['gastos', 'tasas municipales', 'cuota de mantenimiento', 'servicios', 'seguros'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Tener una casa en El Salvador cuesta, además de la cuota del crédito, las tasas municipales que cobra la alcaldía por servicios como aseo y alumbrado, el agua (ANDA o el sistema local), la energía eléctrica, el internet y el gas, la cuota de mantenimiento o vigilancia si vive en un residencial o un edificio, el seguro de daños y un fondo para reparaciones. Para estimarlo antes de comprar, pida al vendedor los últimos recibos de cada servicio y la constancia de la cuota de mantenimiento.',
  sections: [
    {
      id: 'tasas',
      h2: 'Tasas municipales: lo que cobra la alcaldía',
      paras: [
        'En El Salvador las alcaldías cobran tasas por los servicios que prestan al inmueble, como recolección de basura, alumbrado público o mantenimiento de calles. El monto y la forma de cálculo dependen de cada municipio y de sus ordenanzas.',
        'Desde mayo de 2024, el país pasó de 262 a 44 municipios; los antiguos municipios ahora son distritos dentro de los nuevos. Si compra en una zona que cambió de municipio, pregunte en la alcaldía actual cómo se cobran las tasas del distrito y si hubo cambios.',
      ],
      tip: 'Antes de comprar, pida la solvencia municipal del inmueble. Si hay tasas atrasadas, que el vendedor las pague antes de escriturar.',
    },
    {
      id: 'servicios',
      h2: 'Agua, luz, internet y gas',
      paras: [
        'El agua la presta ANDA en buena parte del país, y en otras zonas sistemas municipales o comunitarios. La energía eléctrica la distribuye la empresa que atiende su zona. El consumo de luz cambia mucho según el uso de aire acondicionado y el número de personas.',
        'Pida al vendedor o al dueño anterior los recibos de varios meses. Le dan una idea realista de lo que pagará y, además, confirman que no hay deudas pendientes en los servicios.',
      ],
    },
    {
      id: 'cuota',
      h2: 'Cuota de mantenimiento o de vigilancia',
      paras: [
        'En residenciales cerrados y edificios de apartamentos se paga una cuota para vigilancia, áreas comunes, jardinería, elevadores o piscina. En los edificios, la Ley de Propiedad Inmobiliaria por Pisos y Apartamentos y el reglamento del condominio rigen cómo se reparten los gastos comunes.',
        'Pregunte cuánto es la cuota, qué cubre, si ha subido en los últimos años y si hay cuotas extraordinarias aprobadas (por ejemplo, para pintar el edificio o reparar un muro). Pida una constancia de que el vendedor no debe cuotas.',
      ],
    },
    {
      id: 'tabla',
      h2: 'Resumen de gastos y cómo estimarlos',
      table: {
        head: ['Gasto', 'Frecuencia', 'Cómo estimarlo antes de comprar'],
        rows: [
          ['Tasas municipales', 'Mensual o según la alcaldía', 'Solvencia y último recibo de la alcaldía'],
          ['Agua', 'Mensual', 'Recibos recientes del inmueble'],
          ['Energía eléctrica', 'Mensual', 'Recibos recientes; depende del aire acondicionado'],
          ['Internet y gas', 'Mensual', 'Cotización y su propio consumo'],
          ['Cuota de mantenimiento', 'Mensual', 'Constancia de la administración'],
          ['Seguro de daños', 'Mensual o anual', 'Cotización; con crédito suele ir en la cuota'],
          ['Reparaciones', 'Variable', 'Reserve un porcentaje del valor cada año'],
        ],
      },
    },
    {
      id: 'impuestos',
      h2: '¿Hay un impuesto anual sobre la vivienda?',
      paras: [
        'A diferencia de otros países, El Salvador no cobra un impuesto anual nacional sobre el valor de su vivienda. Lo que paga regularmente son las tasas municipales por servicios. El impuesto principal ligado a la propiedad aparece al comprar: el Impuesto sobre Transferencia de Bienes Raíces.',
        'Si alquila la casa a otra persona, los ingresos por alquiler sí tienen consecuencias en el impuesto sobre la renta. Consulte con un contador.',
      ],
    },
    {
      id: 'mantenimiento',
      h2: 'Mantenimiento: el gasto que más se olvida',
      paras: [
        'El clima salvadoreño, con una época lluviosa intensa, desgasta techos, canales y pintura. Revise el techo y los desagües antes del invierno, limpie las canaletas y repare filtraciones a tiempo. En zonas con pendiente, revise muros y drenajes.',
        'Una regla práctica es reservar cada año una parte del valor de la casa para reparaciones. Así una gotera o un calentador dañado no desordena su presupuesto.',
      ],
      bullets: [
        'Impermeabilizar y revisar techos antes de la época lluviosa.',
        'Limpiar canales y bajadas de agua.',
        'Revisar instalaciones eléctricas, sobre todo en casas antiguas.',
        'Fumigar y dar mantenimiento a cisternas y bombas si las hay.',
      ],
    },
    {
      id: 'antes-de-comprar',
      h2: 'Antes de comprar, pida estos papeles',
      steps: [
        'Últimos recibos de agua y luz del inmueble.',
        'Solvencia municipal.',
        'Constancia de cuotas de mantenimiento al día y el monto actual.',
        'Reglamento del condominio o residencial, si existe.',
        'Cotización de seguro de daños.',
      ],
    },
    {
      id: 'casa-o-apartamento',
      h2: 'Casa o apartamento: quién paga qué',
      paras: [
        'En una casa, usted asume todo el mantenimiento: techo, muros, jardín, cisterna. En un apartamento, una parte de esos gastos se comparte con los demás propietarios por medio de la cuota del condominio, pero también comparte las decisiones. Si compra un apartamento, lea el reglamento y las actas recientes de la asamblea de propietarios: ahí verá si se aprobaron obras grandes que se cobrarán pronto.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Compare el costo total, no solo el precio',
      paras: [
        'Dos casas con el mismo precio pueden tener gastos mensuales muy distintos. En Casa-Libre puede ver propiedades en el mapa y preguntar por WhatsApp al vendedor cuánto es la cuota de mantenimiento y cuánto se paga de servicios. También desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Se paga impuesto predial en El Salvador?', a: 'No hay un impuesto anual nacional sobre el valor de la vivienda. Lo que se paga regularmente son tasas municipales por servicios como aseo y alumbrado.' },
    { q: '¿Qué es la solvencia municipal?', a: 'Es la constancia de la alcaldía de que un inmueble no tiene tasas pendientes. Se pide al comprar para no heredar deudas.' },
    { q: '¿Cuánto es la cuota de mantenimiento de un residencial?', a: 'Depende de cada residencial o edificio y de lo que cubre. Pida a la administración el monto actual, el historial de aumentos y una constancia de que el vendedor no debe cuotas.' },
    { q: '¿Cambió algo con la reducción de municipios?', a: 'Desde mayo de 2024 hay 44 municipios y los antiguos son distritos. Consulte en la alcaldía actual cómo se cobran las tasas en su distrito.' },
  ],
  sources: [
    { name: 'El Salvador reduce de 262 a 44 municipios: así será la división territorial', publisher: 'Bloomberg Línea (14 de junio de 2023)', url: 'https://www.bloomberglinea.com/2023/06/14/aprueban-reducir-de-262-a-44-municipios-en-el-salvador-asi-sera-la-division-territorial/' },
    { name: 'El Salvador: Other taxes', publisher: 'PwC Worldwide Tax Summaries', url: 'https://taxsummaries.pwc.com/el-salvador/corporate/other-taxes' },
    { name: 'Cómo poner el recibo de agua a tu nombre (ANDA)', publisher: 'elsalvador.com (13 de agosto de 2026)', url: 'https://elsalvador.com/noticias/nacional/recibo-anda-titular-reconexion/1287920/2026/' },
    { name: 'Ley del Impuesto sobre Transferencia de Bienes Raíces', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-del-impuesto-sobre-transferencia-de-bienes-raices/gdoc' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=depto', label: 'Apartamentos en venta' },
    { href: '/propiedades-en/antiguo-cuscatlan', label: 'Propiedades en Antiguo Cuscatlán' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar con un contador/local: (1) que no existe impuesto predial anual nacional en SV (PwC no lo menciona; verificar); (2) cómo cobran hoy las alcaldías las tasas tras la reestructuración a 44 municipios (vigente desde 1 de mayo de 2024); (3) nombre exacto de la Ley de Propiedad Inmobiliaria por Pisos y Apartamentos (no se encontró una URL verificable, por eso no se cita); (4) que la solvencia municipal se pide al escriturar.',
};

export default article;
