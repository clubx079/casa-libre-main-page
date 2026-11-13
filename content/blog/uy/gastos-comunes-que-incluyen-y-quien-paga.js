// Blog UY — gastos comunes en edificios (inquilino y comprador).
const article = {
  slug: 'gastos-comunes-que-incluyen-y-quien-paga',
  title: 'Gastos comunes en Uruguay: qué incluyen y quién los paga',
  h1: 'Gastos comunes: qué incluyen, quién los paga y cómo evaluarlos antes de alquilar o comprar',
  description: 'Qué son los gastos comunes en un edificio en Uruguay, qué incluyen, diferencia entre ordinarios y extraordinarios, quién los paga en un alquiler y qué revisar antes de comprar un apartamento.',
  category: 'costos-e-impuestos',
  tags: ['gastos comunes', 'apartamento', 'propiedad horizontal', 'alquiler', 'compra'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Los gastos comunes son lo que paga cada apartamento de un edificio por el mantenimiento y los servicios compartidos: limpieza, portería o vigilancia, ascensores, luz y agua de áreas comunes, administración, seguros y fondos de reserva. Se reparten según el reglamento de copropiedad y los administra un administrador. En un alquiler, lo habitual es que el inquilino pague los ordinarios y el dueño los extraordinarios, aunque lo define el contrato; en el régimen de la LUC, salvo pacto distinto, son del inquilino. Antes de comprar, pedí las últimas liquidaciones y una constancia de que no hay deuda.',
  sections: [
    {
      id: 'que-son',
      h2: 'Qué son y de dónde salen',
      paras: [
        'Un edificio de apartamentos en Uruguay se rige por el régimen de propiedad horizontal (Ley 10.751). Cada propietario es dueño de su unidad y copropietario de los bienes comunes: el terreno, la estructura, los pasillos, el ascensor, la azotea. Los gastos de esos bienes comunes se reparten entre todos según el reglamento de copropiedad, normalmente en proporción al valor o a la superficie de cada unidad.',
        'Los administra un administrador, que la ley prevé que dure un año en sus funciones y pueda ser reelecto, y que cobra los gastos comunes y hace los pagos. Las decisiones importantes se toman en asamblea de copropietarios.',
      ],
    },
    {
      id: 'que-incluyen',
      h2: 'Qué incluyen normalmente',
      bullets: [
        'Limpieza de áreas comunes.',
        'Portería, conserjería o vigilancia, si el edificio tiene.',
        'Mantenimiento y abono de ascensores.',
        'Luz y agua de áreas comunes; en algunos edificios, calefacción central o agua caliente.',
        'Honorarios de la administración.',
        'Seguro del edificio.',
        'Fondo de reserva para gastos imprevistos.',
        'Amenities: piscina, gimnasio, barbacoa, con su mantenimiento.',
      ],
      tip: 'Los edificios con portería las 24 horas, calefacción central o muchos amenities suelen tener gastos comunes bastante más altos. Miralo antes de enamorarte del apartamento.',
    },
    {
      id: 'ordinarios-extraordinarios',
      h2: 'Ordinarios y extraordinarios',
      table: {
        head: ['Tipo', 'Qué son', 'Quién los paga en un alquiler (habitual)'],
        rows: [
          ['Ordinarios', 'Los gastos de todos los meses: limpieza, portería, ascensor, luz común, administración', 'El inquilino'],
          ['Extraordinarios', 'Obras, reparaciones grandes, fachada, cambio de ascensor, fondos especiales', 'El propietario'],
        ],
      },
      paras: [
        'Esa división es la práctica habitual, pero el contrato puede decir otra cosa. En el régimen de arrendamiento sin garantía de la LUC, la ley dispone que los gastos comunes son de cargo del inquilino salvo pacto expreso en contrario, y que si el dueño tuvo que pagar dos o más meses por falta de pago del inquilino, esa deuda se suma al alquiler.',
      ],
    },
    {
      id: 'alquiler',
      h2: 'Si vas a alquilar',
      steps: [
        'Preguntá cuánto fueron los gastos comunes en los últimos meses, no solo "aproximadamente".',
        'Preguntá qué incluyen: ¿calefacción?, ¿agua?, ¿portería 24 horas?',
        'Confirmá si hay obras o gastos extraordinarios previstos.',
        'Que el contrato diga quién paga ordinarios y extraordinarios.',
        'Sumá alquiler más gastos comunes para saber el costo real mensual.',
      ],
    },
    {
      id: 'compra',
      h2: 'Si vas a comprar un apartamento',
      paras: [
        'Los gastos comunes son un costo fijo de por vida, así que conviene evaluarlos tanto como el precio. Pedí al vendedor:',
      ],
      bullets: [
        'Las liquidaciones de gastos comunes de los últimos meses.',
        'Una constancia de la administración de que la unidad no tiene deuda.',
        'Las actas de las últimas asambleas: muestran obras aprobadas, conflictos y el estado del edificio.',
        'El reglamento de copropiedad: dice qué se puede hacer (mascotas, alquileres temporarios, reformas).',
        'El saldo del fondo de reserva y si hay obras pendientes.',
      ],
    },
    {
      id: 'deudas',
      h2: 'Deudas de gastos comunes',
      paras: [
        'La deuda de gastos comunes de una unidad puede reclamarse a quien sea propietario, por eso tu escribano debería pedir la constancia de libre deuda a la administración antes de escriturar. Si hay deuda, que la cancele el vendedor o que se descuente del precio, por escrito.',
      ],
    },
    {
      id: 'reglamento',
      h2: 'El reglamento de copropiedad y la asamblea',
      paras: [
        'El reglamento de copropiedad es el documento que fija las reglas del edificio: cómo se reparten los gastos, qué usos están permitidos en las unidades, si se aceptan mascotas, cómo se hacen reformas y cómo se convoca la asamblea. A falta de reglamento, o en lo que no diga, la Ley 10.751 establece reglas supletorias.',
        'Si sos propietario, participar en las asambleas es la forma de controlar los gastos comunes: ahí se aprueban presupuestos, obras y la elección del administrador. Si sos inquilino, no votás, pero conviene que sepas qué se está decidiendo, porque puede afectar los gastos ordinarios que pagás.',
      ],
    },
    {
      id: 'comparar',
      h2: 'Cómo comparar apartamentos con distintos gastos comunes',
      paras: [
        'Un apartamento más barato con gastos comunes altos puede terminar costando más que otro con mejores condiciones. Para alquilar, compará alquiler más gastos comunes. Para comprar, multiplicá la diferencia mensual de gastos comunes por los años que pensás vivir ahí: el número suele sorprender.',
        'En Casa-Libre podés ver apartamentos en venta y en alquiler en el mapa y preguntar los gastos comunes directo por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Los gastos comunes pueden subir durante mi contrato de alquiler?', a: 'Sí. Se fijan según los costos reales del edificio y lo que apruebe la asamblea, así que pueden cambiar mes a mes. Preguntá el historial de los últimos meses para tener una idea.' },
    { q: '¿Quién paga los gastos comunes en un alquiler en Uruguay?', a: 'Lo habitual es que el inquilino pague los ordinarios y el propietario los extraordinarios, pero lo define el contrato. En el régimen de la LUC, salvo pacto en contrario, son del inquilino.' },
    { q: '¿Qué incluyen los gastos comunes?', a: 'Limpieza, portería o vigilancia, ascensores, luz y agua comunes, administración, seguro del edificio, fondo de reserva y amenities.' },
    { q: '¿Qué son los gastos comunes extraordinarios?', a: 'Los que se aprueban para obras o reparaciones grandes, como fachada o ascensores, o para fondos especiales. No son mensuales fijos.' },
    { q: '¿Si compro un apartamento con deuda de gastos comunes, la tengo que pagar?', a: 'Puede reclamarse al nuevo propietario. Por eso se pide constancia de libre deuda antes de escriturar.' },
  ],
  sources: [
    { name: 'Ley N° 10.751 (propiedad horizontal)', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/leyes/10751-1946' },
    { name: 'Ley N° 19.889 (LUC), art. 427', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/leyes/19889-2020' },
  ],
  related: [
    { href: '/propiedades?op=alquiler&type=depto', label: 'Apartamentos en alquiler' },
    { href: '/propiedades?op=venta&type=depto', label: 'Apartamentos en venta' },
    { href: '/blog/contrato-de-alquiler-en-uruguay-que-revisar', label: 'Qué revisar en el contrato de alquiler' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar con un escribano/administrador: (1) que la división ordinarios-inquilino/extraordinarios-propietario sea la práctica habitual bajo el régimen 14.219; (2) régimen legal de la deuda de gastos comunes frente al nuevo propietario (Ley 10.751 y modificativas); (3) criterio habitual de reparto (valor o superficie).',
};

export default article;
