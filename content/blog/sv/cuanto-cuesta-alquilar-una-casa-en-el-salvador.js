// Blog SV — cuánto cuesta alquilar (presupuesto de entrada y mensual, sin cifras inventadas).
const article = {
  slug: 'cuanto-cuesta-alquilar-una-casa-en-el-salvador',
  title: 'Cuánto cuesta alquilar una casa en El Salvador',
  h1: 'Cuánto cuesta alquilar una casa o un apartamento en El Salvador: cómo calcularlo',
  description: 'Cómo calcular lo que de verdad cuesta alquilar en El Salvador: qué mueve el precio, cuánto dinero necesita para entrar y qué gastos mensuales se suman a la renta.',
  category: 'alquilar',
  tags: ['alquiler', 'presupuesto', 'precio', 'mudanza', 'gastos'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'El costo de alquilar en El Salvador depende sobre todo de la zona, del tipo de inmueble y de si está amueblado; por eso no hay un precio único y lo mejor es comparar avisos actuales de la zona que le interesa. Para calcular su presupuesto real sume tres cosas: lo que paga al entrar (normalmente el primer mes adelantado más un depósito), la renta mensual y los gastos que no siempre están incluidos (agua, luz, internet, cuota de mantenimiento y seguridad). Todo se paga en dólares.',
  sections: [
    {
      id: 'que-mueve-el-precio',
      h2: 'Qué hace que un alquiler cueste más o menos',
      paras: [
        'Dos casas del mismo tamaño pueden tener rentas muy distintas. Los factores que más pesan son:',
      ],
      bullets: [
        'Zona: cercanía a centros de trabajo, colegios y comercios, y el tiempo de traslado en hora pico.',
        'Tipo de inmueble: casa en colonia abierta, casa en residencial cerrado o apartamento en edificio con amenidades.',
        'Seguridad y acceso: portón, vigilancia, parqueo propio.',
        'Amueblado o no: un inmueble amueblado suele costar más, pero le ahorra la compra de muebles.',
        'Estado y antigüedad: cocina, baños, instalaciones eléctricas y techos.',
        'Servicios incluidos: si la cuota de mantenimiento, el agua o el internet van dentro del precio.',
      ],
    },
    {
      id: 'comparar',
      h2: 'Cómo saber si un precio es razonable',
      paras: [
        'La forma más confiable es comparar. Busque en la misma zona propiedades parecidas en tamaño, número de habitaciones y nivel de acabados, y anote el precio y qué incluye cada una. Con cinco o seis comparaciones ya puede detectar si un aviso está muy por encima o, al revés, sospechosamente barato.',
        'Un precio muy por debajo del resto puede ser una oportunidad, pero también una señal de estafa: nunca pague un depósito antes de ver la propiedad y comprobar que quien la alquila es el dueño o está autorizado.',
      ],
      tip: 'Pregunte siempre "¿qué incluye el precio?". Una renta un poco más alta con cuota de mantenimiento y agua incluidas puede salir más barata que otra que parece menor.',
    },
    {
      id: 'entrada',
      h2: 'El dinero que necesita para entrar',
      paras: [
        'Lo habitual es pagar el primer mes por adelantado y dejar un depósito al firmar. Algunos dueños piden más meses adelantados cuando no hay fiador o cuando el inquilino no tiene historial. A eso se suma la mudanza y, a veces, la conexión de servicios.',
      ],
      table: {
        head: ['Concepto', 'Cuándo se paga', 'Cómo estimarlo'],
        rows: [
          ['Primer mes adelantado', 'Al firmar', 'Una renta mensual'],
          ['Depósito', 'Al firmar', 'Según lo pactado; pregunte antes de visitar'],
          ['Meses adicionales adelantados', 'Al firmar, si se piden', 'Sustituyen al fiador en algunos casos'],
          ['Mudanza', 'Al entrar', 'Cotice con dos o tres transportistas'],
          ['Muebles y electrodomésticos', 'Al entrar', 'Si el inmueble no está amueblado'],
        ],
      },
    },
    {
      id: 'mensual',
      h2: 'Los gastos mensuales además de la renta',
      paras: [
        'Pregunte quién paga cada servicio y cuánto se ha pagado en meses recientes. Pida ver algunos recibos de agua y luz del inmueble: le dan una idea real del consumo.',
      ],
      bullets: [
        'Energía eléctrica: depende mucho del uso de aire acondicionado.',
        'Agua: de ANDA o del sistema local de la zona.',
        'Internet y televisión.',
        'Cuota de mantenimiento o vigilancia de la colonia, residencial o edificio, si no está incluida.',
        'Gas propano para cocinar.',
        'Transporte: una renta más barata lejos del trabajo puede costarle más en tiempo y combustible.',
      ],
    },
    {
      id: 'cuanto-destinar',
      h2: 'Cuánto de su ingreso destinar al alquiler',
      paras: [
        'Una referencia común es que el alquiler no pase de alrededor de un tercio de los ingresos del hogar. Si a la renta le suma los servicios, la proporción real es más alta. Haga la cuenta con un mes normal, sin contar horas extra ni bonos.',
        'Ejemplo hipotético: si en su hogar entran US$1,200 al mes, una renta cercana a US$400 deja espacio para servicios, comida y transporte. Si la renta sube a US$600, la mitad del ingreso se va en vivienda y queda poco margen para imprevistos.',
      ],
    },
    {
      id: 'negociar',
      h2: 'Qué se puede negociar',
      paras: [
        'El precio no siempre es fijo. Puede negociar un contrato más largo a cambio de mantener la renta, que el dueño haga ciertas reparaciones antes de entrar, o que la cuota de mantenimiento quede incluida. Todo lo que acuerde, déjelo por escrito en el contrato.',
      ],
    },
    {
      id: 'amueblado',
      h2: '¿Amueblado o sin amueblar?',
      paras: [
        'Un alquiler amueblado cuesta más al mes, pero le ahorra comprar camas, comedor, refrigeradora y cocina. Si va a quedarse poco tiempo, por ejemplo mientras busca casa para comprar o por un contrato de trabajo temporal, suele convenir. Si piensa quedarse años, comprar sus propios muebles puede salir más barato.',
        'Pida un inventario detallado y con fotos de lo que incluye. Lo que no esté en la lista puede convertirse en una discusión al momento de devolver el depósito.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Comparar alquileres en el mapa',
      paras: [
        'En Casa-Libre puede ver alquileres en el mapa por zona y precio, comparar varios en pocos minutos y escribir por WhatsApp al dueño o al agente para preguntar qué incluye la renta. También puede hacerlo desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cuesta alquilar una casa en El Salvador?', a: 'Depende de la zona, el tipo de inmueble y si está amueblado. Compare avisos actuales de la zona que le interesa y sume los gastos que no estén incluidos en la renta.' },
    { q: '¿Cuánto dinero necesito para entrar a un alquiler?', a: 'Normalmente el primer mes adelantado más un depósito. Si no tiene fiador, pueden pedirle meses adicionales. Sume mudanza y muebles si los necesita.' },
    { q: '¿En qué moneda se paga el alquiler?', a: 'En dólares estadounidenses, que es la moneda de uso en El Salvador desde la Ley de Integración Monetaria.' },
    { q: '¿Qué gastos no suelen estar incluidos en la renta?', a: 'Con frecuencia la luz, el agua, el internet, el gas y, a veces, la cuota de mantenimiento o vigilancia. Pregúntelo antes de visitar.' },
  ],
  sources: [
    { name: 'Ley de Integración Monetaria', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-de-integracion-monetaria/gdoc' },
    { name: 'Ley de Inquilinato', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-de-inquilinato/gdoc' },
    { name: 'Cambio de titular del recibo de ANDA (para inquilinos y nuevos ocupantes)', publisher: 'elsalvador.com', url: 'https://elsalvador.com/noticias/nacional/recibo-anda-titular-reconexion/1287920/2026/' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Ver alquileres en el mapa' },
    { href: '/propiedades?op=alquiler&type=casa', label: 'Casas en alquiler' },
    { href: '/propiedades-en/santa-tecla', label: 'Propiedades en Santa Tecla' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad'],
  reviewNote: 'Confirmar con un local: (1) que el primer mes + depósito es la práctica habitual en SV; (2) que la cuota de mantenimiento/vigilancia suele ser aparte; (3) el ejemplo de US$1,200 / US$400 es hipotético y no refleja precios de mercado.',
};

export default article;
