// Blog PY — requisitos para alquilar (lado inquilino).
const article = {
  slug: 'requisitos-para-alquilar-una-casa',
  title: 'Requisitos para alquilar una casa en Paraguay (inquilino)',
  h1: 'Requisitos para alquilar una casa o un departamento en Paraguay',
  description: 'Qué papeles te piden para alquilar en Paraguay: cédula, comprobante de ingresos, garante o garantía, informes y depósito. Lista completa y cómo prepararte.',
  category: 'alquilar',
  tags: ['alquiler', 'inquilino', 'garantía', 'documentos'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  featured: true,
  answer: 'Para alquilar en Paraguay normalmente te piden cédula de identidad, un comprobante de ingresos (recibos de sueldo, constancia laboral o facturas si sos independiente), una garantía (garante propietario, garante con ingresos o un seguro/fianza de alquiler) y un pago inicial que suele incluir el primer mes adelantado y un depósito. No hay una lista única fijada por ley: cada dueño o inmobiliaria arma la suya, así que conviene preguntar antes de visitar.',
  sections: [
    {
      id: 'lista-basica',
      h2: 'La lista básica que vas a escuchar casi siempre',
      paras: [
        'El Código Civil paraguayo regula el contrato de locación (alquiler) pero no fija qué documentos tiene que presentar el inquilino. Esa lista la decide quien alquila: un dueño particular puede pedir poco y una inmobiliaria suele pedir más, porque responde ante el propietario por la elección del inquilino.',
        'Aun así, la mayoría de los pedidos se parecen. Si tenés esto listo en una carpeta (en papel y escaneado en el celular), vas a poder responder el mismo día en que te gusta una propiedad, que en las zonas con más demanda hace la diferencia.',
      ],
      bullets: [
        'Cédula de identidad paraguaya vigente (o pasaporte y carnet de radicación si sos extranjero).',
        'Comprobante de ingresos: últimos recibos de sueldo, constancia de trabajo con antigüedad y salario, o facturas y declaraciones si trabajás por tu cuenta.',
        'Datos de contacto y referencias: un anterior propietario, tu empleador o alguien que pueda dar fe de que cumplís.',
        'Garantía: garante (con propiedad o con ingresos demostrables) o una alternativa como seguro o fianza de alquiler, si el dueño la acepta.',
        'Dinero para la firma: generalmente el primer mes adelantado y un depósito de garantía; si interviene una inmobiliaria, puede haber además un honorario.',
      ],
    },
    {
      id: 'ingresos',
      h2: 'Cómo demostrar ingresos según cómo trabajás',
      paras: [
        'La pregunta de fondo del dueño es una sola: ¿vas a poder pagar todos los meses? Una referencia que se usa con frecuencia es que el alquiler no supere aproximadamente un tercio de los ingresos del hogar, aunque no es una regla legal y cada dueño la aplica a su manera.',
        'Si estás en relación de dependencia, los recibos de sueldo y una constancia firmada por la empresa suelen bastar. Si sos independiente o tenés un comercio, lo que más pesa es la constancia de RUC y un historial de facturación o de movimientos bancarios. Si recién llegás a una ciudad o a un trabajo, un adelanto de varios meses o un garante fuerte pueden compensar la falta de historial.',
      ],
      table: {
        head: ['Tu situación', 'Qué suele servir como comprobante'],
        rows: [
          ['Empleado/a', 'Últimos recibos de sueldo y constancia laboral con antigüedad'],
          ['Independiente o profesional', 'Constancia de RUC, facturas emitidas y extractos bancarios recientes'],
          ['Comerciante', 'Constancia de RUC, patente municipal del negocio y movimientos bancarios'],
          ['Jubilado/a', 'Recibo o constancia de haber jubilatorio'],
          ['Recién llegado/a del exterior', 'Contrato de trabajo, ahorros demostrables y, si se puede, adelanto de meses'],
        ],
      },
    },
    {
      id: 'garantia',
      h2: 'Garante, seguro o depósito: las opciones de garantía',
      paras: [
        'La garantía protege al dueño si el inquilino deja de pagar o deja daños. En Paraguay la forma tradicional es el garante: una persona que firma el contrato y se obliga a responder si vos no cumplís. Algunos dueños exigen que el garante tenga una propiedad a su nombre; otros aceptan un garante con buen sueldo.',
        'Cuando no tenés a quién pedirle, hay alternativas que algunos propietarios aceptan: seguros o fianzas de alquiler que ofrecen aseguradoras, un depósito mayor o el pago adelantado de varios meses. No todos los dueños las aceptan, por eso conviene preguntarlo en la primera consulta y no después de visitar.',
      ],
      tip: 'Si tu garante es un familiar, pedile con tiempo una copia de su cédula y, si corresponde, el título o un informe de la propiedad que ofrece en garantía. Es lo que más demora el trámite.',
    },
    {
      id: 'antes-de-visitar',
      h2: 'Qué preguntar antes de ir a ver la propiedad',
      paras: [
        'Muchas visitas se pierden porque el inquilino descubre al final que no cumple un requisito. Por WhatsApp, antes de coordinar la visita, preguntá lo concreto:',
      ],
      bullets: [
        '¿Qué garantía aceptan? ¿Solo garante propietario o también seguro de alquiler?',
        '¿Cuánto hay que pagar al firmar? (primer mes, depósito, honorarios, expensas si es un edificio).',
        '¿El precio incluye expensas? ¿Los servicios (ANDE, agua, internet) van a nombre del inquilino?',
        '¿Por cuánto tiempo es el contrato y cómo se actualiza el precio?',
        '¿Aceptan mascotas? ¿Se puede usar como oficina o solo vivienda?',
      ],
    },
    {
      id: 'contrato',
      h2: 'El contrato: lo que tenés que leer antes de firmar',
      paras: [
        'El contrato de alquiler conviene que esté por escrito y firmado por todas las partes, incluido el garante. Leelo entero: plazo, precio y moneda, forma de reajuste, quién paga qué arreglos, qué pasa si querés irte antes y cómo se devuelve el depósito.',
        'Pedí que se haga un inventario o un acta de entrega con fotos del estado de la propiedad al entrar. Es tu mejor defensa al momento de recuperar el depósito.',
      ],
    },
    {
      id: 'extranjeros',
      h2: 'Si sos extranjero o recién te mudaste a Paraguay',
      paras: [
        'Un extranjero puede alquilar en Paraguay. Lo habitual es que pidan pasaporte o el carnet de radicación que emite la Dirección General de Migraciones, y que la falta de historial local se compense con más meses adelantados, un depósito mayor o un garante local. Si tu empresa te trajo, una carta de la empresa ayuda mucho.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Cómo buscar alquiler sin perder tiempo',
      paras: [
        'Filtrá primero por zona y presupuesto, y escribí al anunciante con tus datos básicos: cuántas personas van a vivir, si tenés mascotas, cuándo querés entrar y qué garantía podés ofrecer. Un mensaje así recibe respuesta más rápido que un "¿sigue disponible?".',
        'En Casa-Libre ves los alquileres en el mapa y le escribís directo por WhatsApp al dueño o a la inmobiliaria, sin pagar nada por usar el sitio. También podés buscar desde la app de Casa-Libre para iPhone y Android y guardar las propiedades que te interesan.',
      ],
    },
  ],
  faq: [
    { q: '¿Se puede alquilar sin garante en Paraguay?', a: 'Sí, si el dueño acepta otra garantía: un seguro o fianza de alquiler, un depósito mayor o el pago adelantado de varios meses. Depende de cada propietario, por eso conviene preguntarlo antes de visitar.' },
    { q: '¿Cuánto dinero necesito para entrar a un alquiler?', a: 'Lo habitual es el primer mes adelantado más un depósito de garantía; si interviene una inmobiliaria, puede haber un honorario. Sumá también la mudanza y la conexión de servicios.' },
    { q: '¿El contrato de alquiler tiene que estar escrito?', a: 'Es lo recomendable. Un contrato escrito y firmado deja claro el plazo, el precio, los reajustes, los arreglos y la devolución del depósito, y evita discusiones al final.' },
    { q: '¿Un extranjero puede alquilar en Paraguay?', a: 'Sí. Normalmente se pide pasaporte o carnet de radicación, y la falta de historial local se compensa con garantías adicionales o pagos adelantados.' },
  ],
  sources: [
    { name: 'Ley N° 1183/1985 — Código Civil (locación, arts. 803 y siguientes)', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/5293/ley-n-1183-codigo-civil' },
    { name: 'Dirección General de Migraciones', publisher: 'Gobierno del Paraguay', url: 'https://www.migraciones.gov.py/' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Ver alquileres en el mapa' },
    { href: '/propiedades?op=alquiler&type=depto', label: 'Departamentos en alquiler' },
    { href: '/guias/como-alquilar-mi-propiedad', label: 'Guía para dueños: cómo alquilar tu propiedad' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad'],
  reviewNote: 'Confirmar: (1) URL exacta del Código Civil en BACN; (2) que el "un tercio del ingreso" sea una referencia de uso común en PY; (3) disponibilidad actual de seguros/fianzas de alquiler en el mercado paraguayo.',
};

export default article;
