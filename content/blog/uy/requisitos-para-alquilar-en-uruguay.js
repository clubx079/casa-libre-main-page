// Blog UY — requisitos para alquilar (lado inquilino).
const article = {
  slug: 'requisitos-para-alquilar-en-uruguay',
  title: 'Requisitos para alquilar en Uruguay: lista completa (inquilino)',
  h1: 'Requisitos para alquilar una casa o un apartamento en Uruguay',
  description: 'Qué te piden para alquilar en Uruguay: cédula, ingresos, una garantía (CGN, ANDA, seguro, depósito en el BHU o propiedad) o un contrato por la LUC sin garantía. Lista y costos de entrada.',
  category: 'alquilar',
  tags: ['alquiler', 'inquilino', 'garantía', 'documentos', 'Uruguay'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  featured: true,
  answer: 'Para alquilar en Uruguay normalmente necesitás cédula de identidad (o pasaporte si sos extranjero), comprobantes de ingresos formales y una garantía que el dueño acepte: la garantía estatal de la Contaduría General de la Nación (CGN), una garantía de una institución como ANDA, un seguro de fianza de una aseguradora, un depósito en el Banco Hipotecario del Uruguay (BHU) o un fiador con propiedad. La otra vía es firmar un contrato por el régimen de la Ley de Urgente Consideración (LUC), que no lleva garantía. Además tenés que contar con el primer mes y, si interviene una inmobiliaria, su comisión.',
  sections: [
    {
      id: 'lista-basica',
      h2: 'La lista básica que te van a pedir',
      paras: [
        'No existe una lista única fijada por ley: cada propietario o inmobiliaria decide qué pide. Pero en la práctica los pedidos se parecen mucho, y tener todo listo en una carpeta (en papel y escaneado en el celular) te permite reservar el mismo día en que encontrás algo que te gusta.',
      ],
      bullets: [
        'Cédula de identidad vigente de quienes firman. Si sos extranjero, pasaporte o cédula uruguaya si ya iniciaste la residencia.',
        'Comprobante de ingresos: últimos recibos de sueldo, o certificado de ingresos firmado por contador público si sos independiente.',
        'Una garantía aceptada por el dueño, o el acuerdo de firmar por el régimen sin garantía de la LUC.',
        'Referencias: un propietario anterior o tu lugar de trabajo.',
        'Dinero para la firma: el primer mes, el costo de la garantía elegida y, si corresponde, la comisión de la inmobiliaria.',
      ],
    },
    {
      id: 'garantias',
      h2: 'Las garantías que se usan en Uruguay',
      paras: [
        'La pregunta clave antes de visitar es qué garantía acepta el dueño, porque no todos aceptan todas. Estas son las más comunes:',
      ],
      table: {
        head: ['Garantía', 'Cómo funciona', 'Lo que tenés que saber'],
        rows: [
          ['Contaduría General de la Nación (CGN)', 'El Estado garantiza el alquiler y lo descuenta de tu sueldo', 'Para funcionarios públicos y empleados de empresas registradas, con antigüedad mínima. Cada parte paga una comisión mensual del 3%.'],
          ['Fondo de Garantía de Alquiler (MVOT/ANV)', 'Certificado de garantía estatal según tus ingresos', 'Tiene topes de ingreso y de alquiler expresados en UR; el contrato se firma a través de la CGN.'],
          ['ANDA', 'Garantía de una asociación mutual', 'Requiere ser socio y cumplir sus requisitos de ingresos.'],
          ['Seguro de fianza', 'Una aseguradora privada responde ante el dueño', 'Pagás una prima; cada aseguradora evalúa tus ingresos.'],
          ['Depósito en el BHU', 'Dejás un depósito en garantía en el Banco Hipotecario', 'La ley pone un tope de cinco meses de alquiler para vivienda.'],
          ['Garantía de propiedad', 'Un familiar o conocido ofrece un inmueble', 'Cada vez menos usada; el dueño puede pedir certificados de esa propiedad.'],
        ],
      },
    },
    {
      id: 'sin-garantia',
      h2: 'Alquilar sin garantía: el régimen de la LUC',
      paras: [
        'Desde la Ley 19.889 (LUC) existe un régimen de arrendamiento sin garantía. Para que aplique, el contrato tiene que ser para vivienda, por escrito, con plazo y precio, sin ninguna garantía, y las partes tienen que declarar expresamente que se someten a esa ley. En ese régimen el dueño no puede pedirte más de un mes de alquiler por adelantado.',
        'A cambio, los plazos de desalojo son mucho más cortos si no pagás. Es una buena puerta de entrada si no tenés garantía, pero conviene leerlo con calma: lo explicamos en detalle en el artículo sobre alquilar por la LUC.',
      ],
    },
    {
      id: 'ingresos',
      h2: 'Cómo demostrar ingresos según cómo trabajás',
      paras: [
        'Lo que el dueño o la garantía quieren saber es si vas a poder pagar todos los meses. Las garantías estatales y las privadas calculan un alquiler máximo según tu ingreso líquido formal, así que antes de buscar conviene saber cuánto te aprueban: buscar por encima de ese monto es perder tiempo.',
      ],
      table: {
        head: ['Tu situación', 'Qué suele servir como comprobante'],
        rows: [
          ['Empleado/a', 'Últimos recibos de sueldo; en algunas garantías, historia laboral del BPS'],
          ['Independiente o profesional', 'Certificado de ingresos firmado por contador público'],
          ['Jubilado/a o pensionista', 'Recibo de cobro del último mes'],
          ['Estudiante', 'Ingresos propios o de un grupo; existe una garantía estatal para jóvenes de 18 a 29 años'],
          ['Recién llegado/a', 'Contrato de trabajo y ahorros demostrables; muchas veces el régimen LUC es la vía más simple'],
        ],
      },
    },
    {
      id: 'costos-de-entrada',
      h2: 'Cuánto dinero necesitás para entrar',
      paras: [
        'Sumá estos conceptos antes de reservar, para no descubrirlos en la firma:',
      ],
      bullets: [
        'El primer mes de alquiler.',
        'El costo de la garantía: la comisión mensual de la CGN, la prima del seguro, el depósito en el BHU o lo que cobre la institución que elijas.',
        'La comisión de la inmobiliaria, si hay una. Preguntá el monto exacto y si lleva IVA.',
        'Gastos comunes si es un apartamento en edificio, y la conexión o el cambio de titular de UTE, OSE e internet.',
        'La mudanza y lo básico para los primeros días.',
      ],
      tip: 'Si vas a pagar el alquiler con contrato escrito de un año o más y pagás IRPF por tu trabajo, podés tener derecho a un crédito fiscal por arrendamiento ante la DGI. Guardá el contrato y los recibos.',
    },
    {
      id: 'antes-de-visitar',
      h2: 'Qué preguntar antes de ir a ver',
      paras: [
        'Por WhatsApp, antes de coordinar la visita, preguntá lo concreto. Ahorrás viajes y el dueño ve que sos un inquilino serio:',
      ],
      bullets: [
        '¿Qué garantías aceptan? ¿Aceptan contrato por la LUC?',
        '¿El precio es en pesos o en dólares? ¿Cómo se reajusta?',
        '¿Cuánto son los gastos comunes y qué incluyen?',
        '¿Cuánto hay que pagar al firmar, en total?',
        '¿Aceptan mascotas? ¿Desde qué fecha está disponible?',
      ],
    },
    {
      id: 'buscar',
      h2: 'Cómo buscar alquiler sin perder tiempo',
      paras: [
        'Con el monto que te aprueba tu garantía, filtrá por zona y precio y escribí con tus datos: cuántas personas van a vivir, si tenés mascotas, cuándo querés entrar y qué garantía tenés. Ese mensaje recibe respuesta más rápido que un "¿sigue disponible?".',
        'En Casa-Libre ves los alquileres de Uruguay en el mapa y le escribís directo por WhatsApp al dueño o a la inmobiliaria, sin pagar por usar el sitio. También podés buscar desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Se puede alquilar sin garantía en Uruguay?', a: 'Sí. La LUC creó un régimen de arrendamiento sin garantía para vivienda, con contrato escrito y declaración expresa de las partes. El dueño no puede pedir más de un mes adelantado, y los desalojos por falta de pago son más rápidos.' },
    { q: '¿Quién puede usar la garantía de la CGN?', a: 'Según la CGN, funcionarios públicos y empleados de empresas registradas en el Servicio de Garantía de Alquileres con al menos 6 meses de antigüedad, además de beneficiarios de convenios con el MVOT y del subsidio del BPS.' },
    { q: '¿Cuánto es el depósito máximo para alquilar?', a: 'Para vivienda, el Decreto-Ley 14.219 fija un tope de cinco meses de alquiler, y el depósito se hace en el Banco Hipotecario del Uruguay.' },
    { q: '¿Un extranjero puede alquilar en Uruguay?', a: 'Sí. Con pasaporte o cédula uruguaya. La falta de historial local suele resolverse con un seguro de fianza, un depósito o un contrato por el régimen de la LUC, si el dueño lo acepta.' },
  ],
  sources: [
    { name: 'Alquiler por Contaduría General de la Nación', publisher: 'gub.uy — Ministerio de Economía y Finanzas', url: 'https://www.gub.uy/tramites/alquiler-contaduria-general-nacion' },
    { name: 'Fondo de Garantía de Alquiler', publisher: 'Agencia Nacional de Vivienda', url: 'https://www.anv.gub.uy/fondo-de-garantia-de-alquiler' },
    { name: 'Ley N° 19.889 (LUC), arts. 421 y siguientes', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/leyes/19889-2020' },
    { name: 'Decreto-Ley N° 14.219 (arrendamientos urbanos), art. 38', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/decretos-ley/14219-1974' },
    { name: 'Crédito fiscal por arrendamiento de inmuebles en IRPF', publisher: 'DGI', url: 'https://www.gub.uy/direccion-general-impositiva/comunicacion/publicaciones/credito-fiscal-arrendamiento-inmuebles-irpf' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Ver alquileres en el mapa' },
    { href: '/propiedades?op=alquiler&type=depto', label: 'Apartamentos en alquiler' },
    { href: '/blog/garantia-de-alquiler-en-uruguay-opciones', label: 'Garantías de alquiler: cuál elegir' },
    { href: '/blog/alquilar-sin-garantia-por-la-luc', label: 'Alquilar sin garantía por la LUC' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad'],
  reviewNote: 'Confirmar: (1) requisitos vigentes de la garantía CGN (6 meses de antigüedad, 3% por parte); (2) que ANDA siga ofreciendo garantía y sus requisitos; (3) que el depósito en el BHU siga siendo la práctica para depósitos en garantía; (4) vigencia y porcentaje del crédito fiscal IRPF por arrendamiento (la DGI indica 8% para el ejercicio 2025); (5) si las inmobiliarias cobran comisión al inquilino y cómo se expresa (meses de alquiler + IVA).',
};

export default article;
