// Blog UY — cooperativas de vivienda (cómo funcionan y cómo entrar).
const article = {
  slug: 'cooperativas-de-vivienda-como-funcionan',
  title: 'Cooperativas de vivienda en Uruguay: cómo funcionan y cómo entrar',
  h1: 'Cooperativas de vivienda en Uruguay: ayuda mutua, ahorro previo, usuarios y propietarios',
  description: 'Cómo funcionan las cooperativas de vivienda en Uruguay: ayuda mutua o ahorro previo, cooperativas de usuarios o de propietarios, préstamo del MVOT, sorteo, tiempos y cómo sumarte a un grupo.',
  category: 'financiamiento',
  tags: ['cooperativas', 'vivienda', 'ayuda mutua', 'ahorro previo', 'MVOT'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Una cooperativa de vivienda es un grupo de familias que se organiza para construir sus casas con financiamiento del Estado. En Uruguay se rigen por la Ley 13.728 y otras normas, y hay dos grandes modalidades: ayuda mutua, en la que los socios aportan horas de trabajo en la obra, y ahorro previo, en la que aportan dinero. Además, pueden ser de usuarios (la propiedad es de la cooperativa y vos tenés derecho de uso y goce) o de propietarios. El préstamo lo otorga el MVOT, en general por sorteo entre las cooperativas que cumplen los requisitos. Es un camino largo, pero permite acceder a una vivienda con cuotas en función de los ingresos.',
  sections: [
    {
      id: 'que-es',
      h2: 'Qué es una cooperativa de vivienda',
      paras: [
        'El sistema cooperativo de vivienda es una de las formas más conocidas de acceso a la vivienda en Uruguay. Se basa en la Ley Nacional de Vivienda (Ley 13.728, de 1968), que ya preveía cooperativas de usuarios y que los organismos públicos dieran atención preferente a los programas por ayuda mutua.',
        'Un grupo de familias forma la cooperativa, consigue un terreno, contrata un Instituto de Asistencia Técnica (IAT) que hace el proyecto y acompaña la obra, y solicita el préstamo al Estado. Cuando la obra termina, cada familia recibe su vivienda y la cooperativa sigue funcionando: administra el conjunto y cobra las cuotas para devolver el préstamo.',
      ],
    },
    {
      id: 'modalidades',
      h2: 'Ayuda mutua o ahorro previo',
      table: {
        head: ['Modalidad', 'Qué aportás', 'Para quién suele servir'],
        rows: [
          ['Ayuda mutua', 'Horas de trabajo en la obra, organizadas por la cooperativa', 'Familias con poco ahorro y tiempo disponible para la obra'],
          ['Ahorro previo', 'Un ahorro en dinero antes y durante la obra', 'Familias con capacidad de ahorro y menos tiempo'],
        ],
      },
      paras: [
        'En las cooperativas de ayuda mutua, las horas de trabajo de los socios sustituyen parte del ahorro y se exige una cantidad mínima de horas por familia. Es un compromiso grande, que dura toda la obra. En las de ahorro previo, el aporte es en dinero.',
      ],
    },
    {
      id: 'usuarios-propietarios',
      h2: 'Cooperativa de usuarios o de propietarios',
      paras: [
        'En una cooperativa de usuarios, las viviendas son propiedad de la cooperativa y cada socio tiene un derecho de uso y goce sobre la suya, que puede heredarse. Si te vas, la cooperativa te devuelve tus partes sociales y la vivienda se adjudica a otro socio. En una cooperativa de propietarios, al terminar de pagar, cada socio queda dueño de su vivienda.',
        'La de usuarios es la forma más extendida y tiene algunos beneficios; por ejemplo, la Intendencia de Montevideo tiene un trámite de exoneración de contribución inmobiliaria para cooperativas de viviendas de usuarios.',
      ],
    },
    {
      id: 'etapas',
      h2: 'Las etapas, de la fundación a la llave',
      paras: [
        'La ANV describe el proceso por etapas. Simplificado, el camino es así:',
      ],
      steps: [
        'El grupo se forma y labra el acta de fundación de la cooperativa.',
        'Se elige un Instituto de Asistencia Técnica y se obtiene la personería jurídica y el certificado de regularidad.',
        'Se consigue un terreno, propio o de una cartera pública.',
        'Se presenta el proyecto y se inscribe la cooperativa para el préstamo.',
        'El MVOT adjudica los préstamos, en general por sorteo entre las cooperativas habilitadas.',
        'Se construye la obra, con horas de trabajo o ahorro según la modalidad.',
        'Se adjudican las viviendas y empieza el pago de las cuotas.',
      ],
    },
    {
      id: 'tiempos',
      h2: 'Cuánto tiempo lleva',
      paras: [
        'Desde que se forma un grupo hasta que las familias se mudan suelen pasar varios años: depende de conseguir terreno, de salir sorteado y del ritmo de la obra. No es una solución para quien necesita mudarse pronto. Muchas familias alquilan mientras tanto, y por eso conviene combinar la cooperativa con un buen plan de alquiler.',
      ],
    },
    {
      id: 'requisitos',
      h2: 'Requisitos para sumarte',
      bullets: [
        'Ingresos del núcleo familiar dentro de las franjas que fija la reglamentación, expresadas en UR.',
        'En general, no ser propietario de otra vivienda.',
        'Compromiso de participar en asambleas y, en ayuda mutua, en la obra.',
        'Documentación del núcleo familiar: cédulas, comprobantes de ingresos y, en algunos casos, historia laboral.',
      ],
      tip: 'Hay cooperativas ya formadas que buscan socios para completar el grupo, sobre todo cuando alguna familia se baja. Preguntá en las federaciones de cooperativas y en tu barrio.',
    },
    {
      id: 'mevir',
      h2: 'Si vivís en el interior rural',
      paras: [
        'En pequeñas localidades y zonas rurales, MEVIR construye viviendas con un sistema de ayuda mutua similar, en llamados que abre por localidad. Si vivís en el interior, consultá también esa opción.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Mientras tanto',
      paras: [
        'Si estás en una cooperativa o esperando un sorteo, probablemente alquiles durante la espera. En Casa-Libre podés ver alquileres de todo Uruguay en el mapa y escribir directo por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Puedo vender mi vivienda de una cooperativa?', a: 'En una cooperativa de usuarios no, porque la vivienda es de la cooperativa: si te vas, te devuelven tus partes sociales según el estatuto. En una de propietarios, una vez que sos dueño, aplican las reglas de la cooperativa y del préstamo.' },
    { q: '¿Qué es una cooperativa de ayuda mutua?', a: 'Una cooperativa en la que los socios aportan horas de trabajo en la obra en lugar de una parte del ahorro en dinero.' },
    { q: '¿En una cooperativa de usuarios soy dueño de mi casa?', a: 'No. La vivienda es de la cooperativa y vos tenés un derecho de uso y goce, que puede heredarse. Si te vas, te devuelven tus partes sociales.' },
    { q: '¿Cómo se consigue el préstamo de una cooperativa?', a: 'Lo otorga el MVOT; según la ANV, la adjudicación de préstamos se hace por sorteo entre las cooperativas que cumplen los requisitos.' },
    { q: '¿Cuánto se tarda en tener la vivienda?', a: 'Varios años en general, entre formar el grupo, conseguir terreno, salir sorteado y construir.' },
  ],
  sources: [
    { name: 'Ley N° 13.728 (Plan Nacional de Vivienda)', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/leyes/13728-1968' },
    { name: 'Cooperativas', publisher: 'Agencia Nacional de Vivienda', url: 'https://www.anv.gub.uy/cooperativas' },
    { name: 'Exoneración de contribución inmobiliaria a cooperativas de viviendas de usuarios', publisher: 'Intendencia de Montevideo', url: 'https://tramites.montevideo.gub.uy/tramites-y-tributos/exoneracion/contribucion-inmobiliaria-a-cooperativas-de-viviendas-de-usuarios' },
    { name: 'Ministerio de Vivienda y Ordenamiento Territorial', publisher: 'MVOT', url: 'https://www.gub.uy/ministerio-vivienda-ordenamiento-territorial/' },
    { name: 'FUCVAM', publisher: 'Federación Uruguaya de Cooperativas de Vivienda por Ayuda Mutua', url: 'https://www.fucvam.org.uy/' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Alquileres en el mapa' },
    { href: '/propiedades?op=venta&type=terreno', label: 'Terrenos en venta' },
    { href: '/blog/credito-hipotecario-en-uruguay-como-funciona', label: 'Crédito hipotecario en Uruguay' },
  ],
  relatedGuias: ['comprar-primera-casa'],
  reviewNote: 'Confirmar con el MVOT/ANV o una federación: (1) franjas de ingreso vigentes y requisito de no ser propietario; (2) que la adjudicación de préstamos siga siendo por sorteo; (3) horas mínimas de ayuda mutua (no se dio cifra); (4) que MEVIR siga funcionando por llamados (su sitio no respondió a la verificación, por eso no se cita).',
};

export default article;
