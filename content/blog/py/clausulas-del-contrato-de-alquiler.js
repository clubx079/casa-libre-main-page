// Blog PY — cláusulas del contrato de alquiler que el inquilino tiene que revisar.
const article = {
  slug: 'clausulas-del-contrato-de-alquiler',
  title: 'Contrato de alquiler: cláusulas que tenés que revisar',
  h1: 'Las cláusulas del contrato de alquiler que tenés que leer antes de firmar',
  description: 'Guía para inquilinos: plazo, reajuste, moneda, salida anticipada, arreglos, mascotas, uso, depósito y garante. Qué cláusulas mirar y cuáles son señales de alerta.',
  category: 'alquilar',
  tags: ['alquiler', 'inquilino', 'contrato', 'cláusulas'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Antes de firmar un contrato de alquiler en Paraguay revisá siete cosas: el plazo y cómo se renueva, el precio con su moneda y su forma de reajuste, qué pasa si querés irte antes, quién paga cada tipo de arreglo, para qué uso se alquila (vivienda o comercio), cómo y cuándo se devuelve el depósito, y qué firma exactamente tu garante. El Código Civil regula la locación, pero casi todo lo concreto lo define el contrato, así que lo que no está escrito después se discute.',
  sections: [
    {
      id: 'por-que-leerlo',
      h2: 'Por qué el contrato importa más que la charla',
      paras: [
        'En una visita todo parece fácil: "si se rompe algo me avisás", "si te tenés que ir lo hablamos". Pero cuando aparece un problema, lo que vale es lo que firmaron. El Código Civil paraguayo (Ley 1183/1985) tiene un capítulo sobre la locación de cosas, a partir del artículo 803, con reglas generales sobre las obligaciones del locador y del locatario. Esas reglas cubren lo que el contrato no dice, pero muchas se pueden modificar por acuerdo de las partes.',
        'Traducido: el contrato manda. Leelo entero, con tiempo, y pedí cambios antes de firmar. Después es mucho más difícil.',
      ],
    },
    {
      id: 'plazo',
      h2: 'Plazo y renovación',
      paras: [
        'Verificá la fecha de inicio, la de fin y qué pasa al terminar. Algunas preguntas que el contrato debería responder:',
      ],
      bullets: [
        '¿Es por un año, dos, o por tiempo indeterminado?',
        '¿Se renueva solo, o hay que firmar un contrato nuevo?',
        '¿Con cuánta anticipación hay que avisar si no querés renovar?',
        '¿Qué pasa si te quedás unos días después del vencimiento?',
      ],
    },
    {
      id: 'precio',
      h2: 'Precio, moneda y reajuste',
      paras: [
        'Mirá tres datos juntos: cuánto, en qué moneda y cómo sube. Un alquiler en dólares con un sueldo en guaraníes te expone al tipo de cambio. Y un contrato que dice "el precio se actualizará anualmente" sin decir cómo deja la puerta abierta a cualquier aumento.',
        'Lo sano es que el reajuste tenga una regla clara: un porcentaje fijo, un índice concreto o un monto ya pactado para el segundo año. También fijate la fecha de pago, si hay recargo por atraso y cómo se paga (transferencia, depósito, efectivo con recibo).',
      ],
    },
    {
      id: 'salida-anticipada',
      h2: 'Si te tenés que ir antes: la rescisión anticipada',
      paras: [
        'Es una de las cláusulas que más conflictos genera. La vida cambia —un trabajo nuevo, una mudanza a otra ciudad— y conviene saber de antemano cuánto cuesta salir antes.',
        'Buscá que el contrato diga con cuánto preaviso podés rescindir y si hay una penalidad (por ejemplo, un mes de alquiler). Desconfiá de cláusulas que te obligan a pagar todos los meses que faltan hasta el final del contrato aunque te vayas: preguntá si se puede negociar una penalidad fija.',
      ],
    },
    {
      id: 'arreglos',
      h2: 'Arreglos: quién paga qué',
      paras: [
        'Una regla razonable, y la que suele verse, es que el inquilino se ocupa del mantenimiento menor y de los daños que cause, y el dueño de lo estructural y de lo que se rompe por el paso del tiempo. Pero conviene que el contrato lo diga con ejemplos.',
      ],
      table: {
        head: ['Tipo de arreglo', 'Suele corresponder a', 'Qué conviene que diga el contrato'],
        rows: [
          ['Focos, canillas que gotean, limpieza de canaletas', 'Inquilino', 'Que es mantenimiento menor a cargo del inquilino'],
          ['Daños causados por el uso indebido', 'Inquilino', 'Que se reparan a su costo'],
          ['Techo, cañerías internas, instalación eléctrica', 'Dueño', 'Que son a cargo del propietario y el plazo para repararlos'],
          ['Electrodomésticos incluidos en el alquiler', 'A definir', 'Quién paga si se rompen por desgaste'],
          ['Mejoras que haga el inquilino', 'A definir', 'Si necesitan permiso y si quedan para el dueño al final'],
        ],
      },
    },
    {
      id: 'uso',
      h2: 'Uso: vivienda, oficina o comercio',
      paras: [
        'El contrato tiene que decir para qué se alquila. Si pensás trabajar desde la casa con clientes, poner un consultorio o un pequeño negocio, decilo antes: muchos contratos de vivienda lo prohíben.',
        'El destino también tiene efecto impositivo. Según la Ley 6380/2019 y la información de la DNIT, el alquiler de inmuebles destinados exclusivamente a vivienda está alcanzado por el IVA a la tasa reducida del 5%, mientras que otros destinos, como el comercial, tributan a la tasa general del 10%. Si el dueño está inscripto en el IVA, el uso que figure en el contrato cambia el impuesto en la factura.',
      ],
    },
    {
      id: 'mascotas-y-subalquiler',
      h2: 'Mascotas, subalquiler y visitas',
      bullets: [
        'Mascotas: si tenés o pensás tener, que el contrato lo permita por escrito. Un "sí, no hay problema" verbal no te protege.',
        'Subalquiler o ceder el contrato: casi siempre está prohibido sin permiso del dueño. Si pensás compartir con alguien, que figure como ocupante.',
        'Visitas del dueño: es razonable que pueda inspeccionar o mostrar la propiedad al final del contrato, pero con aviso previo y en horarios acordados.',
        'Reglamento del edificio o condominio: si existe, pedilo antes de firmar. Ahí suelen estar las reglas sobre ruidos, mascotas y mudanzas.',
      ],
    },
    {
      id: 'deposito-y-garante',
      h2: 'Depósito y garante',
      paras: [
        'El contrato debería decir el monto exacto del depósito, que se devuelve al finalizar, en qué plazo y qué se puede descontar. Pedí también que se adjunte un inventario o acta del estado de la propiedad con fotos.',
        'Si hay garante, leé qué firma: ¿responde solo por los alquileres o también por daños y servicios? ¿Su obligación termina con el contrato o sigue si se renueva? Tu garante tiene derecho a saberlo antes de firmar.',
      ],
    },
    {
      id: 'alertas',
      h2: 'Señales de alerta en un contrato de alquiler',
      bullets: [
        'Quien firma como locador no es el dueño y no muestra una autorización o poder escrito.',
        'Te piden pagar antes de ver el contrato o antes de visitar.',
        'El reajuste queda librado a lo que decida el dueño.',
        'No hay plazo para devolver el depósito, o dice que no se devuelve.',
        'Te hacen renunciar de antemano a cualquier reclamo por arreglos estructurales.',
        'El texto está en blanco en partes clave ("precio: ____") para completar después.',
      ],
      tip: 'Si algo no te cierra, pedí el cambio por escrito y conservá los mensajes. Para contratos largos o montos altos, que lo lea un abogado o un escribano antes de firmar.',
    },
    {
      id: 'buscar',
      h2: 'Antes del contrato, la búsqueda',
      paras: [
        'En Casa-Libre podés comparar alquileres en el mapa y preguntar por WhatsApp, antes de visitar, las condiciones del contrato: plazo, reajuste, garantía y si aceptan mascotas. Funciona en la web y en la app para iPhone y Android, sin costo para el que busca.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué ley regula los alquileres en Paraguay?', a: 'El Código Civil (Ley 1183/1985) regula la locación de cosas a partir del artículo 803. Muchas de sus reglas se aplican cuando el contrato no dice nada, por eso conviene que el contrato sea completo.' },
    { q: '¿El alquiler de vivienda paga IVA?', a: 'Si el propietario está inscripto en el IVA, el alquiler de un inmueble destinado exclusivamente a vivienda tributa a la tasa del 5%; el alquiler comercial, a la tasa general del 10%, según la Ley 6380/2019.' },
    { q: '¿Me pueden aumentar el alquiler en mitad del contrato?', a: 'Solo si el contrato lo prevé. Por eso conviene que la forma de reajuste esté escrita con una regla concreta y no quede a criterio del dueño.' },
    { q: '¿Puedo irme antes de que termine el contrato?', a: 'Depende de lo que diga el contrato sobre rescisión anticipada: preaviso y penalidad. Si no dice nada, negocialo antes de firmar.' },
  ],
  sources: [
    { name: 'Ley N° 1183/1985 — Código Civil (locación, arts. 803 y siguientes)', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/5293/ley-n-1183-codigo-civil' },
    { name: 'Ley N° 6380/2019 — De modernización y simplificación del sistema tributario nacional', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/9332/ley-n-6380-de-' },
    { name: 'Cartilla del IVA (Ley 6380/19)', publisher: 'Dirección Nacional de Ingresos Tributarios (DNIT)', url: 'https://www.dnit.gov.py/documents/20123/224724/Cartilla%2BIVA%2B24%2B06%2B2024.pdf/2fc2b350-4bb8-f5cd-06ff-83f6b6d15750?t=1719584356809.pdf' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Ver alquileres en el mapa' },
    { href: '/propiedades?op=alquiler&type=duplex', label: 'Dúplex en alquiler' },
    { href: '/blog/deposito-de-garantia-como-recuperarlo', label: 'Cómo recuperar el depósito' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad'],
  reviewNote: 'Confirmar: (1) que las reglas de locación del Código Civil empiezan en el art. 803 y cuáles son dispositivas vs. imperativas; (2) IVA 5% vivienda / 10% comercial según cartilla DNIT (el PDF de dnit.gov.py no se pudo abrir desde el entorno de prueba; verificado por buscador); (3) la división habitual de arreglos inquilino/dueño en PY.',
};

export default article;
