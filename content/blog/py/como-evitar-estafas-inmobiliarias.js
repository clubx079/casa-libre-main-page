// Blog PY — cómo evitar estafas al comprar o alquilar.
const article = {
  slug: 'como-evitar-estafas-inmobiliarias',
  title: 'Cómo evitar estafas al comprar o alquilar una propiedad',
  h1: 'Cómo evitar estafas inmobiliarias al comprar o alquilar en Paraguay',
  description: 'Las señales de un aviso falso, cómo verificar que quien vende o alquila es el dueño y por qué nunca hay que pagar una seña sin ver la propiedad ni firmar nada.',
  category: 'comprar',
  tags: ['estafas', 'seguridad', 'compra', 'alquiler', 'seña'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'La regla de oro es simple: no pagues nada (ni seña, ni reserva, ni "depósito para guardarte la propiedad") sin haber visto el inmueble por dentro, sin saber quién es el dueño y sin un documento firmado. Desconfiá de precios muy por debajo de la zona, de dueños que dicen estar en el exterior y piden transferencias, y de la urgencia artificial. En una compra, el escribano verifica la titularidad con un informe de condición de dominio de los Registros Públicos antes de firmar.',
  sections: [
    {
      id: 'como-funcionan',
      h2: 'Cómo funcionan las estafas más comunes',
      paras: [
        'La mayoría de las estafas inmobiliarias no necesitan una propiedad: usan fotos copiadas de otros avisos, un precio tentador y la presión para que pagues antes de pensar. El objetivo casi siempre es el mismo: que transfieras una seña, una reserva o un depósito a una cuenta que después desaparece.',
        'Otra variante, más grave, es la venta de una propiedad real por alguien que no es el dueño o que no puede venderla sola (un heredero que no tiene la conformidad de los demás, un inmueble hipotecado o embargado, un terreno con títulos superpuestos). Ahí el daño puede ser mucho mayor, porque ya hay escritos y dinero de por medio.',
      ],
    },
    {
      id: 'senales',
      h2: 'Señales de alerta en un aviso',
      bullets: [
        'Precio muy por debajo de propiedades parecidas en la misma zona, sin una explicación clara.',
        'El anunciante dice estar en el exterior, de viaje o "muy ocupado" y no puede mostrar la propiedad, pero ofrece mandarte las llaves o el contrato si transferís primero.',
        'Te piden una seña o reserva "para que no se la lleve otro" antes de cualquier visita.',
        'Fotos de calidad profesional que aparecen también en otros avisos con otro precio o en otra ciudad.',
        'Dirección imprecisa que nunca se termina de confirmar.',
        'Presión de tiempo: "hay tres interesados", "solo hoy a este precio".',
        'Pedido de pago a la cuenta de una tercera persona que no es ni el dueño ni la inmobiliaria.',
      ],
      tip: 'Hacé una búsqueda inversa de las fotos del aviso (por ejemplo con Google Lens). Si aparecen en otros portales con otros datos, frená.',
    },
    {
      id: 'verificar-dueno',
      h2: 'Cómo verificar que quien vende es el dueño',
      paras: [
        'En una compraventa, la verificación formal la hace el escribano antes de la escritura: solicita a la Dirección General de los Registros Públicos el informe o certificado de condición de dominio, que muestra a nombre de quién está inscripto el inmueble y si tiene hipotecas, embargos u otras restricciones. Ese trámite también puede hacerse en línea a través del Sistema de Gestión Registral (SIGRE), disponible para escribanos y abogados.',
        'Vos, como comprador, podés pedir desde el principio una copia del título y la cédula del vendedor, y comparar que el nombre coincida. Si quien te muestra la propiedad es otra persona, pedí que te explique en qué carácter actúa: inmobiliaria con autorización del dueño, apoderado con poder notarial o heredero. Cada caso tiene sus papeles.',
      ],
      bullets: [
        'El nombre del título coincide con la cédula de quien vende.',
        'Si es una sucesión, preguntá si está terminada y quiénes son los herederos.',
        'Si actúa un apoderado, pedí ver el poder y que tu escribano lo verifique.',
        'Si es una inmobiliaria, pedí la autorización de venta firmada por el dueño.',
      ],
    },
    {
      id: 'sena',
      h2: 'La seña: cuándo y cómo pagarla',
      paras: [
        'La seña es una práctica normal, pero tiene un momento: después de ver la propiedad, de tener una idea clara de la documentación y con un recibo o boleto firmado que diga cuánto pagás, por qué propiedad, qué pasa si alguna de las partes se arrepiente y en qué plazo se escritura.',
        'Pagala al titular o a la inmobiliaria que lo representa, nunca a terceros, y en lo posible por transferencia bancaria a una cuenta a nombre de esa persona o empresa, para que quede registro. Muchos compradores prefieren que la seña quede en manos del escribano hasta la escritura.',
      ],
    },
    {
      id: 'alquiler',
      h2: 'Estafas en alquileres',
      paras: [
        'En los alquileres el esquema suele ser más chico pero más frecuente: un aviso de un departamento lindo y barato, un "dueño" que no puede mostrarlo y que pide el primer mes y el depósito por adelantado para reservarlo. A veces la propiedad existe y está alquilada por otra persona; a veces ni siquiera existe.',
      ],
      bullets: [
        'No pagues nada antes de visitar la propiedad por dentro.',
        'Firmá el contrato antes o al mismo tiempo que pagás, nunca después.',
        'Pedí ver una factura de la ANDE o del impuesto inmobiliario a nombre del dueño, o la autorización de la inmobiliaria.',
        'Desconfiá de quien solo acepta efectivo o giros a nombre de otra persona.',
      ],
    },
    {
      id: 'terrenos',
      h2: 'Terrenos: el caso que más cuidado exige',
      paras: [
        'En terrenos el riesgo no es solo el aviso falso. Hay lotes que en la práctica son tierras fiscales, inmuebles con superposición de títulos o "derechos" sobre una ocupación que no se pueden escriturar. Antes de pagar por un terreno, pedí la cuenta corriente catastral o padrón, el título y el informe de condición de dominio, y dejá que un escribano o agrimensor confirme que lo que te muestran en el lugar coincide con lo que dicen los papeles. Lo explicamos en detalle en el artículo sobre cómo saber si un terreno tiene dueño.',
      ],
    },
    {
      id: 'si-te-pasa',
      h2: 'Si ya pagaste y sospechás de una estafa',
      steps: [
        'Guardá todo: capturas del aviso, chats, comprobantes de transferencia, números de teléfono.',
        'Avisá de inmediato a tu banco para intentar frenar o rastrear la transferencia.',
        'Hacé la denuncia ante la Policía Nacional o el Ministerio Público.',
        'Reportá el aviso en el sitio donde lo viste para que no le pase a otra persona.',
      ],
    },
    {
      id: 'casa-libre',
      h2: 'Cómo buscar con más tranquilidad en Casa-Libre',
      paras: [
        'En Casa-Libre hablás directo por WhatsApp con el dueño o la inmobiliaria que publicó, y usar el sitio no tiene costo: nadie de Casa-Libre te va a pedir una seña ni un pago para ver una propiedad. Si un aviso te parece sospechoso, podés reportar el aviso para que el equipo lo revise. Lo mismo vale desde la app de Casa-Libre para iPhone y Android.',
        'Igual que en cualquier portal, la verificación final de la propiedad y del dueño la hacés vos con tu escribano antes de pagar.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo sé si un aviso de alquiler es falso?', a: 'Las señales típicas son un precio muy bajo para la zona, un dueño que no puede mostrar la propiedad y el pedido de pagar antes de visitar. Buscá las fotos en otros sitios y no pagues nada sin ver la propiedad y sin contrato.' },
    { q: '¿Cómo verifico quién es el dueño de una propiedad?', a: 'El escribano solicita el informe de condición de dominio a la Dirección General de los Registros Públicos, que indica el titular inscripto y si hay hipotecas o embargos. Vos podés pedir antes una copia del título y comparar con la cédula del vendedor.' },
    { q: '¿Es normal pagar una seña?', a: 'Sí, pero después de ver la propiedad, con un recibo o boleto firmado que diga las condiciones, y pagándola al dueño, a la inmobiliaria que lo representa o al escribano, nunca a terceros.' },
    { q: '¿Qué hago si me estafaron?', a: 'Guardá todas las pruebas, avisá a tu banco, hacé la denuncia ante la Policía Nacional o el Ministerio Público y reportá el aviso en el sitio donde lo encontraste.' },
  ],
  sources: [
    { name: 'Dirección General de los Registros Públicos', publisher: 'Poder Judicial del Paraguay', url: 'https://www.pj.gov.py/contenido/154-direccion-general-de-los-registros-publicos/206' },
    { name: 'Sistema de Gestión Registral (SIGRE)', publisher: 'Poder Judicial del Paraguay', url: 'https://www.pj.gov.py/contenido/3324-sistema-de-gestion-registral-sigre/3325' },
    { name: 'Ley N° 1183/1985 — Código Civil', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/5293/ley-n-1183-codigo-civil' },
  ],
  related: [
    { href: '/propiedades?op=venta', label: 'Propiedades en venta' },
    { href: '/propiedades?op=alquiler', label: 'Propiedades en alquiler' },
    { href: '/guias/comprar-primera-casa', label: 'Guía: cómo comprar tu primera casa' },
  ],
  relatedGuias: ['comprar-primera-casa'],
  reviewNote: 'Confirmar: (1) que Casa-Libre tenga hoy un botón para reportar avisos en web y app (el texto dice "reportar el aviso"); (2) que nadie de Casa-Libre pide pagos para visitar (verdad para la política actual); (3) canales de denuncia correctos (Policía Nacional / Ministerio Público) y si conviene citar el artículo de estafa del Código Penal (Ley 1160/97).',
};

export default article;
