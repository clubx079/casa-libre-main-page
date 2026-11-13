// Blog BO — requisitos para alquilar una casa o departamento (lado inquilino).
const article = {
  slug: 'requisitos-para-alquilar-en-bolivia',
  title: 'Requisitos para alquilar en Bolivia: lista para inquilinos',
  h1: 'Requisitos para alquilar una casa o un departamento en Bolivia',
  description: 'Qué te piden para alquilar en Bolivia: cédula de identidad, comprobante de ingresos, garante, mes de garantía y contrato con reconocimiento de firmas. Lista completa y consejos.',
  category: 'alquilar',
  tags: ['alquiler', 'inquilino', 'garante', 'documentos', 'contrato'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Para alquilar en Bolivia normalmente te piden cédula de identidad vigente, algún comprobante de ingresos (boletas de pago, certificado de trabajo o extractos si eres independiente), referencias o un garante, y un pago inicial que suele incluir el primer mes adelantado y una garantía. La ley no fija una lista de requisitos para el inquilino: la decide cada propietario o inmobiliaria, así que pregúntala antes de visitar.',
  sections: [
    {
      id: 'lista',
      h2: 'La lista que vas a escuchar casi siempre',
      paras: [
        'El Código Civil boliviano regula el arrendamiento (artículos 685 en adelante), pero no dice qué papeles tiene que presentar el inquilino. Cada propietario arma su propia lista: un dueño particular suele pedir poco, mientras que una inmobiliaria o un edificio administrado suele pedir más.',
        'Tener todo listo en una carpeta y escaneado en el celular te permite responder el mismo día. En barrios con mucha demanda, eso hace la diferencia.',
      ],
      bullets: [
        'Cédula de identidad vigente (o pasaporte y documento migratorio si eres extranjero).',
        'Comprobante de ingresos: últimas boletas de pago, certificado de trabajo, o NIT y extractos bancarios si eres independiente.',
        'Referencias: un propietario anterior, tu empleador o alguien que pueda dar fe de que cumples.',
        'Garante, si el dueño lo pide: una persona con ingresos o con un inmueble a su nombre.',
        'Dinero para la firma: normalmente el primer mes adelantado y una garantía; si interviene una inmobiliaria, a veces una comisión.',
      ],
    },
    {
      id: 'ingresos',
      h2: 'Cómo demostrar ingresos según tu trabajo',
      table: {
        head: ['Tu situación', 'Qué suele servir'],
        rows: [
          ['Dependiente', 'Últimas boletas de pago y certificado de trabajo con antigüedad'],
          ['Independiente o profesional', 'NIT, facturas emitidas y extractos bancarios recientes'],
          ['Comerciante', 'Licencia de funcionamiento del negocio, NIT y movimientos bancarios'],
          ['Jubilado/a', 'Boleta o constancia de renta'],
          ['Recién llegado/a', 'Contrato de trabajo, ahorros demostrables y, si se puede, más meses adelantados'],
        ],
      },
      paras: [
        'Lo que el propietario quiere saber es simple: si vas a poder pagar todos los meses. Una referencia que muchos usan es que el alquiler no se coma una parte muy grande del ingreso del hogar; no es una regla legal, pero te conviene hacer la cuenta tú primero.',
      ],
    },
    {
      id: 'garantia',
      h2: 'La garantía y el garante',
      paras: [
        'Lo más común es dejar una garantía en dinero, que se devuelve al final si entregas el inmueble en buen estado y sin deudas de servicios. Algunos propietarios piden además un garante que firme el contrato y se comprometa a pagar si tú no lo haces.',
        'Si no tienes garante, ofrece alternativas: una garantía mayor, pagar varios meses adelantados o mostrar ahorros. No todos los dueños las aceptan, por eso conviene plantearlo en el primer mensaje.',
      ],
      tip: 'Pide que el contrato diga exactamente cuánto es la garantía, en qué moneda y en qué plazo se devuelve después de entregar el inmueble.',
    },
    {
      id: 'preguntar',
      h2: 'Qué preguntar antes de ir a ver',
      bullets: [
        '¿Qué piden exactamente: garante, cuántos meses de garantía, comisión?',
        '¿El precio incluye expensas? ¿Luz, agua, gas e internet van por cuenta del inquilino?',
        '¿El precio está en bolivianos o en dólares? ¿Cómo y cuándo se reajusta?',
        '¿Cuánto dura el contrato y cómo se termina si necesitas irte antes?',
        '¿Se aceptan mascotas? ¿Se puede usar como oficina?',
      ],
    },
    {
      id: 'contrato',
      h2: 'El contrato: por escrito y con firmas reconocidas',
      paras: [
        'Firma siempre un contrato escrito. En Bolivia es habitual hacer un documento privado y luego el reconocimiento de firmas ante notario, lo que le da fecha cierta. Esto importa: según el Código Civil, si el contrato tiene fecha cierta y el dueño vende, el nuevo propietario debe respetar tu alquiler.',
        'Ten en cuenta también que, para una vivienda urbana, el Código Civil prohíbe que el inquilino subalquile o ceda el contrato salvo que se haya pactado lo contrario, y que la misma vivienda no puede estar a la vez en alquiler y en anticrético.',
      ],
    },
    {
      id: 'senales',
      h2: 'Señales de alerta antes de pagar',
      bullets: [
        'Te piden un adelanto para "reservar" una vivienda que todavía no pudiste visitar.',
        'El precio es mucho más bajo que el de viviendas parecidas en la misma zona.',
        'Quien alquila no puede mostrar que es el dueño ni un poder del dueño.',
        'Te piden pagar a la cuenta de un tercero o solo en efectivo, sin recibo.',
      ],
      paras: [
        'Si algo de esto pasa, pide ver el folio real del inmueble o la autorización del propietario antes de pagar.',
      ],
    },
    {
      id: 'extranjeros',
      h2: 'Si eres extranjero',
      paras: [
        'Un extranjero puede alquilar en Bolivia. Normalmente te pedirán pasaporte o tu cédula de extranjero, y la falta de historial local se suele compensar con más meses adelantados, una garantía mayor o una carta de tu empleador.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Busca y escribe con tus datos',
      paras: [
        'Filtra por zona y presupuesto, y escribe al anunciante con lo básico: cuántas personas vivirán, si tienes mascotas, desde cuándo y qué garantía ofreces. En Casa-Libre ves los alquileres en el mapa y escribes directo por WhatsApp al dueño o a la inmobiliaria, sin pagar por usar el sitio. También puedes hacerlo desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Se puede alquilar sin garante en Bolivia?', a: 'Sí, si el propietario acepta otra garantía, como un depósito mayor o varios meses adelantados. Depende de cada dueño: pregúntalo antes de visitar.' },
    { q: '¿Cuánto dinero necesito para entrar a un alquiler?', a: 'Lo habitual es el primer mes adelantado y una garantía; si hay inmobiliaria, a veces una comisión. Suma la mudanza y la conexión de servicios.' },
    { q: '¿Es obligatorio hacer el contrato ante notario?', a: 'No es obligatorio, pero el reconocimiento de firmas ante notario da fecha cierta al contrato, lo que te protege si el dueño vende el inmueble.' },
    { q: '¿Puedo subalquilar una habitación?', a: 'En vivienda urbana, el Código Civil lo prohíbe salvo que el contrato lo permita expresamente. Si lo necesitas, pídelo por escrito.' },
  ],
  sources: [
    { name: 'Código Civil (Decreto Ley 12760), arts. 685 a 722 (arrendamiento)', publisher: 'Lexivox', url: 'https://www.lexivox.org/norms/BO-COD-DL12760B.xhtml' },
    { name: 'Dirección General de Migración', publisher: 'Estado Plurinacional de Bolivia', url: 'https://migracion.gob.bo/' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Alquileres en el mapa' },
    { href: '/propiedades?op=alquiler&type=depto', label: 'Departamentos en alquiler' },
    { href: '/guias/como-alquilar-mi-propiedad', label: 'Guía para dueños: cómo alquilar tu propiedad' },
    { href: '/blog/contrato-de-alquiler-en-bolivia-derechos-del-inquilino', label: 'Contrato de alquiler: tus derechos' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad'],
  reviewNote: 'Confirmar con un local: (1) cuántos meses de garantía son habituales hoy en La Paz, Santa Cruz y Cochabamba; (2) si es común el garante o casi no se usa; (3) que el reconocimiento de firmas ante notario es la práctica habitual; (4) documentos que piden a extranjeros.',
};

export default article;
