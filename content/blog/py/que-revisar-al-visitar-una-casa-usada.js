// Blog PY — checklist de visita a una casa usada (lado comprador).
const article = {
  slug: 'que-revisar-al-visitar-una-casa-usada',
  title: 'Qué revisar al visitar una casa usada antes de comprarla',
  h1: 'Qué revisar al visitar una casa usada: checklist para compradores',
  description: 'Humedad, techos, instalación eléctrica, desagües, aberturas y barrio: la lista de lo que tenés que mirar y preguntar en la visita a una casa usada en Paraguay.',
  category: 'comprar',
  tags: ['compra', 'casa usada', 'visita', 'inspección'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  featured: true,
  answer: 'En la visita a una casa usada revisá, en este orden: humedad en paredes y techos, estado del techo y de las canaletas, la instalación eléctrica (tablero, cables, potencia contratada en la ANDE), el desagüe (si va a la red cloacal o a un pozo ciego), aberturas, orientación y ruido. Volvé a otra hora para ver el barrio, pedí ver facturas y papeles, y si algo te preocupa, llevá a un técnico antes de dar cualquier seña.',
  sections: [
    {
      id: 'antes-de-ir',
      h2: 'Antes de ir: tres preguntas por WhatsApp',
      paras: [
        'Una visita bien preparada dura menos y te deja más información. Antes de coordinar, preguntale al dueño o a la inmobiliaria lo básico: cuántos años tiene la casa, si tuvo reformas grandes (y si están en los planos aprobados) y si la propiedad está a nombre de quien vende o es parte de una sucesión.',
        'Pedí también la dirección exacta o la ubicación en el mapa. Así podés recorrer la cuadra por tu cuenta antes de la cita, ver cómo se llega en hora pico y si hay algo que no te convence (un taller ruidoso al lado, una calle que se llena de agua).',
      ],
      bullets: [
        '¿Qué antigüedad tiene la casa y qué se reformó?',
        '¿El título está a nombre de quien vende? ¿Hay hipoteca o sucesión en trámite?',
        '¿Los impuestos y servicios están al día?',
      ],
    },
    {
      id: 'humedad',
      h2: 'Humedad: lo primero que tenés que mirar',
      paras: [
        'La humedad es el problema más común en casas usadas y uno de los más caros de resolver bien. Mirá la parte baja de las paredes (manchas, pintura que se infla, revoque que se desprende), las esquinas de los techos y el contorno de las ventanas. Un olor a encierro en un ambiente cerrado también es una pista.',
        'Desconfiá de una pared recién pintada en un solo sector: a veces es mantenimiento normal y a veces tapa una mancha. Preguntá directamente por qué se pintó. Revisá también el placard y detrás de los muebles grandes, que son los lugares donde la humedad se esconde.',
      ],
      tip: 'Si podés, hacé la visita después de una lluvia fuerte. Es el mejor momento para ver goteras, filtraciones y si el patio o la vereda acumulan agua.',
    },
    {
      id: 'techos',
      h2: 'Techos, canaletas y filtraciones',
      paras: [
        'Preguntá de qué es el techo (losa, tejas, chapa) y cuándo se le hizo mantenimiento por última vez. En una losa, buscá manchas en el cielorraso y preguntá si se impermeabilizó. En techos de tejas, pedí ver el entretecho si hay acceso: maderas manchadas o con polilla son señal de trabajo pendiente.',
        'Las canaletas y bajadas de agua tapadas generan filtraciones en paredes que parecen problemas de humedad de cimientos. Fijate que existan, que estén enteras y que descarguen lejos de las paredes.',
      ],
    },
    {
      id: 'electricidad',
      h2: 'Instalación eléctrica: tablero, cables y potencia',
      paras: [
        'Abrí el tablero eléctrico. Una instalación más nueva suele tener disyuntor diferencial y llaves termomagnéticas identificadas; un tablero con fusibles viejos, cables sueltos o empalmes a la vista indica que probablemente haya que rehacer parte de la instalación.',
        'Si pensás usar varios equipos de aire acondicionado, preguntá cuál es la potencia contratada con la ANDE y si la conexión es monofásica o trifásica. Cambiarla es posible, pero es un trámite y un costo que conviene conocer antes de cerrar el precio. Pedí ver la última factura de la ANDE: además de confirmar que no hay deuda, te da una idea del consumo.',
      ],
      bullets: [
        'Probá varias tomas y llaves de luz.',
        'Buscá marcas de quemado en enchufes o tomas flojas.',
        'Preguntá si los aires tienen circuitos propios.',
      ],
    },
    {
      id: 'agua-desague',
      h2: 'Agua y desagüe: red cloacal o pozo ciego',
      paras: [
        'En muchas zonas del país no hay red cloacal y las casas descargan en un pozo ciego o una cámara séptica. No es un problema en sí mismo, pero cambia el mantenimiento: preguntá dónde está el pozo, cuándo se vació por última vez y si alguna vez rebalsó.',
        'Abrí canillas y duchas para ver la presión y cuánto tarda en salir agua caliente. Preguntá quién provee el agua en esa zona (la ESSAP, una junta de saneamiento o un aguatero privado) y pedí una factura reciente. Mirá debajo de las piletas de cocina y baño: manchas o madera hinchada indican pérdidas.',
      ],
    },
    {
      id: 'aberturas-orientacion',
      h2: 'Aberturas, orientación y ruido',
      paras: [
        'Abrí y cerrá todas las puertas y ventanas. Si rozan o no cierran, puede ser solo un ajuste o puede indicar movimientos de la estructura; las fisuras en diagonal desde las esquinas de puertas y ventanas merecen la opinión de un técnico.',
        'La orientación importa mucho con el calor paraguayo: los ambientes que reciben el sol fuerte de la tarde son más calurosos y gastan más aire acondicionado. Fijate de qué lado da el dormitorio principal y si hay árboles o aleros que den sombra.',
        'Escuchá el ruido con las ventanas cerradas y abiertas: avenidas, colectivos, locales nocturnos, iglesias o escuelas cercanas. Lo que a la mañana es silencio puede ser otra cosa un viernes a la noche.',
      ],
    },
    {
      id: 'barrio',
      h2: 'El barrio a distintas horas',
      paras: [
        'Volvé al menos una vez a otra hora y otro día. A la noche mirá la iluminación de la calle y el movimiento; en hora pico, cuánto tardás en salir hacia tu trabajo; un día de lluvia, si la calle se transforma en raudal. Hablá con algún vecino: suelen contar sin vueltas cómo es la cuadra.',
      ],
      bullets: [
        'Distancia real a supermercado, farmacia, escuela y parada de colectivo.',
        'Estado de las calles de acceso (asfalto, empedrado, tierra).',
        'Señal de celular e internet dentro de la casa.',
      ],
    },
    {
      id: 'papeles',
      h2: 'Qué pedirle al vendedor en la visita',
      paras: [
        'No hace falta ver toda la documentación en la primera visita, pero sí conviene saber que existe. Pedí una copia o foto del título, la última boleta del impuesto inmobiliario y facturas recientes de la ANDE y del agua. Si hubo ampliaciones, preguntá si están en los planos aprobados por la municipalidad: una construcción no declarada puede complicar el trámite de transferencia o una futura venta.',
        'La verificación legal de fondo (que el vendedor sea el dueño, que no haya hipotecas ni embargos) la hace el escribano con el informe de condición de dominio de los Registros Públicos antes de la escritura. La visita sirve para detectar si hay algo raro que valga la pena preguntar antes.',
      ],
    },
    {
      id: 'tecnico',
      h2: 'Cuándo llevar a un técnico',
      paras: [
        'Si la casa tiene más de veinte o treinta años, si viste fisuras, humedad extendida, un techo dudoso o una instalación eléctrica vieja, vale la pena pagar la visita de un arquitecto, ingeniero o electricista de confianza antes de señar. Lo que te diga sirve para decidir, y también para negociar: un arreglo presupuestado por escrito es un argumento concreto para ajustar el precio.',
        'Hacelo antes de firmar cualquier seña o boleto. Después, renegociar es mucho más difícil.',
      ],
    },
    {
      id: 'seguir-buscando',
      h2: 'Compará antes de decidir',
      paras: [
        'Lo más útil es ver varias casas parecidas en la misma zona. En Casa-Libre podés filtrar casas en venta en el mapa, guardar las que te interesan y escribirle directo por WhatsApp al dueño o a la inmobiliaria para coordinar visitas. La app de Casa-Libre para iPhone y Android te permite hacer lo mismo desde el celular mientras recorrés el barrio.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuántas veces conviene visitar una casa antes de comprarla?', a: 'Por lo menos dos: una para ver la casa con calma y otra en otro horario para ver el barrio, el ruido y el tránsito. Si vas a señar, una tercera con un técnico es una buena inversión.' },
    { q: '¿Cómo me doy cuenta si una casa tiene humedad?', a: 'Buscá manchas en la parte baja de las paredes, pintura inflada, revoque que se cae y olor a encierro. Mirá detrás de muebles y en placares, y si podés, visitala después de una lluvia.' },
    { q: '¿Es malo que una casa tenga pozo ciego?', a: 'No necesariamente: en muchas zonas sin red cloacal es lo habitual. Preguntá dónde está, cuándo se vació por última vez y si tuvo problemas, porque define el mantenimiento.' },
    { q: '¿Qué papeles pido en la visita?', a: 'Una copia del título, la última boleta del impuesto inmobiliario y facturas recientes de luz y agua. La verificación legal completa la hace el escribano antes de la escritura.' },
  ],
  sources: [
    { name: 'Ley N° 1183/1985 — Código Civil', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/5293/ley-n-1183-codigo-civil' },
    { name: 'Dirección General de los Registros Públicos', publisher: 'Poder Judicial del Paraguay', url: 'https://www.pj.gov.py/contenido/154-direccion-general-de-los-registros-publicos/206' },
    { name: 'Municipalidad de Asunción', publisher: 'Municipalidad de Asunción', url: 'https://www.asuncion.gov.py/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta en el mapa' },
    { href: '/guias/comprar-primera-casa', label: 'Guía: cómo comprar tu primera casa' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar una casa' },
  ],
  relatedGuias: ['comprar-primera-casa', 'gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar: (1) que en las zonas sin red de la ESSAP el agua la provean juntas de saneamiento o prestadores privados (aguateras) como se describe; (2) que el cambio de monofásica a trifásica sea un trámite con costo ante la ANDE; (3) que las ampliaciones no aprobadas efectivamente puedan trabar la transferencia según la municipalidad.',
};

export default article;
