// Blog SV — requisitos para alquilar (lado inquilino).
const article = {
  slug: 'requisitos-para-alquilar-una-casa-en-el-salvador',
  title: 'Requisitos para alquilar una casa en El Salvador',
  h1: 'Requisitos para alquilar una casa o un apartamento en El Salvador',
  description: 'Qué le piden para alquilar en El Salvador: DUI, constancia de salario, fiador, depósito y mes adelantado. Lista completa, cómo prepararse y qué dice la ley sobre el contrato.',
  category: 'alquilar',
  tags: ['alquiler', 'inquilino', 'fiador', 'depósito', 'contrato'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  featured: true,
  answer: 'Para alquilar una casa o un apartamento en El Salvador normalmente le piden su DUI (o pasaporte y carné de residente si es extranjero), una constancia de salario o comprobantes de ingresos, referencias, a veces un fiador, y un pago inicial que suele incluir el primer mes adelantado y un depósito. No hay una lista única obligatoria: cada dueño o agente decide qué pide. Lo que sí exige la Ley de Inquilinato para la vivienda es que el contrato conste por escrito.',
  sections: [
    {
      id: 'lista-basica',
      h2: 'La lista básica que le van a pedir',
      paras: [
        'Los papeles que pide un arrendante (el dueño) se parecen mucho entre sí. Tenerlos listos, en papel y escaneados en el teléfono, le permite responder el mismo día en que encuentra una propiedad que le gusta.',
      ],
      bullets: [
        'DUI vigente. Si es extranjero, pasaporte y carné de residente emitido por la Dirección General de Migración y Extranjería.',
        'Constancia de salario o de trabajo, con cargo, antigüedad y sueldo, o comprobantes de ingresos si trabaja por su cuenta.',
        'Referencias personales y, si ha alquilado antes, el contacto del dueño anterior.',
        'Fiador, si el dueño lo pide: una persona con ingresos o bienes que responda si usted no paga.',
        'Dinero para la firma: por lo general el primer mes adelantado y un depósito.',
      ],
    },
    {
      id: 'ingresos',
      h2: 'Cómo demostrar sus ingresos según cómo trabaja',
      paras: [
        'Lo que el dueño quiere saber es si podrá pagar cada mes. Una referencia práctica es que el alquiler no supere alrededor de un tercio de los ingresos del hogar; no es una regla legal, pero muchos la usan para decidir.',
      ],
      table: {
        head: ['Su situación', 'Qué suele servir como comprobante'],
        rows: [
          ['Empleado del sector privado o público', 'Constancia de salario y, si la piden, estado de cuenta de AFP'],
          ['Profesional independiente', 'Facturas o comprobantes emitidos y estados de cuenta bancarios'],
          ['Comerciante o emprendedor', 'Matrícula o registro del negocio, estados de cuenta y declaraciones de renta'],
          ['Pensionado', 'Constancia de pensión'],
          ['Recibe remesas', 'Historial de remesas de los últimos meses y, si se puede, un fiador'],
        ],
      },
    },
    {
      id: 'fiador-deposito',
      h2: 'Fiador, depósito y meses adelantados',
      paras: [
        'El fiador es la garantía más tradicional: firma el contrato y se obliga a pagar si usted no lo hace. Algunos dueños aceptan, en lugar de fiador, un depósito más alto o el pago de varios meses por adelantado.',
        'La Ley de Inquilinato no fija un monto máximo de depósito para casas y apartamentos, así que es un punto que se negocia. Lo importante es que el contrato diga cuánto entregó, para qué sirve y cuándo y cómo se le devuelve al final.',
      ],
      tip: 'Pida siempre recibo de todo lo que pague: depósito, mes adelantado y cada mensualidad. La Ley de Inquilinato obliga al arrendante a extender recibo por cada pago.',
    },
    {
      id: 'contrato',
      h2: 'El contrato: por escrito y leído completo',
      paras: [
        'Para el alquiler de vivienda, la Ley de Inquilinato exige que el contrato conste por escrito, con las partes, el inmueble, el precio y la forma de pago. Léalo entero antes de firmar: plazo, monto y fecha de pago, quién paga agua, luz y cuota de mantenimiento, qué reparaciones le tocan a cada uno, si se permiten mascotas y qué pasa si quiere irse antes.',
        'Haga un inventario con fotos del estado de la casa el día que entra, firmado por ambos. Es su mejor prueba al momento de recuperar el depósito.',
      ],
    },
    {
      id: 'preguntar',
      h2: 'Qué preguntar antes de visitar',
      paras: [
        'Muchas visitas se pierden porque al final el inquilino no cumple algún requisito. Por WhatsApp, antes de ir, pregunte:',
      ],
      bullets: [
        '¿Piden fiador o aceptan depósito adicional?',
        '¿Cuánto hay que pagar al firmar, en total?',
        '¿El precio incluye la cuota de mantenimiento de la colonia o residencial?',
        '¿El agua y la luz se pasan a nombre del inquilino o se pagan al dueño?',
        '¿Por cuánto tiempo es el contrato y se puede renovar?',
        '¿Aceptan mascotas o uso como oficina?',
      ],
    },
    {
      id: 'extranjeros',
      h2: 'Si es extranjero o salvadoreño que regresa',
      paras: [
        'Un extranjero puede alquilar sin problema; lo normal es que le pidan pasaporte y carné de residente, y que compense la falta de historial local con más meses adelantados o un fiador local. Si regresa después de años fuera, una carta de su empleador en El Salvador o estados de cuenta recientes ayudan mucho.',
      ],
    },
    {
      id: 'avisos-falsos',
      h2: 'Cuidado con los avisos falsos',
      paras: [
        'No entregue depósitos ni adelantos antes de ver la propiedad en persona y de confirmar que quien la alquila es el dueño o está autorizado. Desconfíe de precios muy por debajo de la zona y de quien le apura a pagar para "apartar" la casa.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Cómo buscar alquiler sin perder tiempo',
      paras: [
        'Filtre por zona y presupuesto y escriba al anunciante con sus datos básicos: cuántas personas vivirán, si tiene mascotas, cuándo quiere entrar y qué garantía puede ofrecer. En Casa-Libre ve los alquileres en el mapa y escribe directo por WhatsApp al dueño o al agente, sin pagar nada por usar el sitio. También puede buscar desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué documentos piden para alquilar una casa en El Salvador?', a: 'Normalmente DUI, constancia de salario o comprobantes de ingresos, referencias y, a veces, un fiador. Además, el primer mes adelantado y un depósito.' },
    { q: '¿El contrato de alquiler tiene que ser escrito?', a: 'Para vivienda, la Ley de Inquilinato exige que conste por escrito con las partes, el inmueble, el precio y la forma de pago.' },
    { q: '¿Se puede alquilar sin fiador?', a: 'Sí, si el dueño lo acepta. Las alternativas más comunes son un depósito más alto o pagar varios meses por adelantado.' },
    { q: '¿Cuánto es el depósito de un alquiler?', a: 'La ley no fija un monto para casas y apartamentos; se negocia. Asegúrese de que el contrato diga cuánto entregó y cómo se devuelve.' },
  ],
  sources: [
    { name: 'Ley de Inquilinato (D.L. 2591 de 1958)', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-de-inquilinato/gdoc' },
    { name: 'Ley de Inquilinato (texto en PDF)', publisher: 'Facultad de Jurisprudencia, Universidad de El Salvador', url: 'https://www.jurisprudencia.ues.edu.sv/oajc/leyes/LegislacionCivil/Ley%20de%20Inquilinato.pdf' },
    { name: 'Código Civil (arrendamiento)', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/codigos/codigo-civil/gdoc/' },
    { name: 'Dirección General de Migración y Extranjería', publisher: 'Gobierno de El Salvador', url: 'https://www.migracion.gob.sv/' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Ver alquileres en el mapa' },
    { href: '/propiedades?op=alquiler&type=depto', label: 'Apartamentos en alquiler' },
    { href: '/guias/como-alquilar-mi-propiedad', label: 'Guía para dueños: cómo alquilar su propiedad' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad'],
  reviewNote: 'Confirmar con un abogado salvadoreño: (1) que la Ley de Inquilinato sigue vigente y aplica a alquileres de vivienda actuales (arts. 4-5 contrato escrito, art. 9 recibo); (2) que "fiador" y "arrendante" son los términos de uso común; (3) que la referencia de un tercio del ingreso es práctica usual en SV; (4) si se pide estado de cuenta de AFP para alquilar.',
};

export default article;
