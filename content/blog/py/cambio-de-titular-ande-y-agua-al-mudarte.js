// Blog PY — servicios al mudarte: ANDE, agua, internet.
const article = {
  slug: 'cambio-de-titular-ande-y-agua-al-mudarte',
  title: 'Cambio de titular de ANDE y agua al mudarte: qué hacer',
  h1: 'Luz, agua e internet al mudarte: cambio de titular y lectura de medidores',
  description: 'Qué hacer con la ANDE, el agua y el internet cuando comprás o alquilás: cambio de titular, lectura final de medidores y a nombre de quién conviene el servicio.',
  category: 'documentos-y-tramites',
  tags: ['servicios', 'ANDE', 'agua', 'mudanza', 'alquiler', 'compra'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Al mudarte, lo primero es anotar (y fotografiar) la lectura de los medidores de luz y agua el día que recibís las llaves y confirmar que no haya facturas atrasadas. Si compraste, corresponde pasar los servicios a tu nombre: la ANDE tiene un trámite de cambio de titular del contrato de suministro, y el agua se gestiona con la ESSAP o con la junta de saneamiento o aguatera de tu zona. Si alquilás, muchas veces el servicio queda a nombre del dueño y vos pagás las facturas; lo importante es dejarlo por escrito en el contrato.',
  sections: [
    {
      id: 'dia-de-entrega',
      h2: 'El día que recibís las llaves',
      paras: [
        'Casi todas las discusiones sobre servicios empiezan por no saber quién consumió qué. La solución cuesta cinco minutos: el día de la entrega, con el dueño o el inquilino anterior presentes, sacá fotos de cada medidor con el número visible y la fecha del celular.',
      ],
      steps: [
        'Fotografiá el medidor de la ANDE mostrando la lectura y el número de medidor.',
        'Hacé lo mismo con el medidor de agua, si lo hay.',
        'Pedí la última factura pagada de cada servicio (o el comprobante de pago).',
        'Anotá en el acta de entrega o en el contrato las lecturas y quién paga a partir de esa fecha.',
        'Guardá todo en una carpeta del celular y mandalo por WhatsApp al dueño, así queda registrado.',
      ],
    },
    {
      id: 'ande',
      h2: 'ANDE: el cambio de titular del contrato de suministro',
      paras: [
        'La energía eléctrica la provee la Administración Nacional de Electricidad (ANDE). Cada suministro tiene un contrato a nombre de una persona. Según el procedimiento interno de atención al cliente que la ANDE publica, el cambio de titular es la solicitud para que un contrato de suministro que figura a nombre de otra persona pase a nombre del solicitante.',
        'Para trámites relacionados con la titularidad, la ANDE pide documentos que demuestren el vínculo con el inmueble; en sus procedimientos publicados se mencionan, por ejemplo, copia autenticada del título de propiedad o constancias de la municipalidad o de la inmobiliaria. Los requisitos exactos y el canal (oficina comercial o atención en línea) pueden cambiar, así que confirmalos en la ANDE antes de ir.',
      ],
      bullets: [
        'Llevá tu cédula y el documento que te vincula al inmueble (título o escritura, o contrato si corresponde).',
        'Tené a mano el número de contrato o de NIS que figura en la factura.',
        'Preguntá si hay deuda pendiente: conviene que el anterior titular la cancele antes del cambio.',
        'Si la casa estuvo mucho tiempo desocupada o el servicio fue cortado, preguntá por la reconexión.',
      ],
    },
    {
      id: 'agua',
      h2: 'Agua: ESSAP, junta de saneamiento o aguatera',
      paras: [
        'El agua no tiene un único proveedor en todo el país. En Asunción y parte del área metropolitana el servicio lo presta la ESSAP; en muchas otras ciudades y barrios lo prestan juntas de saneamiento o aguateras privadas, cada una con su propia oficina y sus requisitos. Antes de mudarte, preguntá al dueño quién provee el agua y cómo se paga.',
        'El trámite de cambio de titular, cuando corresponde, se hace ante ese proveedor. En general te van a pedir cédula y algún documento que acredite que sos el dueño o que estás autorizado. Si es una aguatera, preguntá también por la calidad y la presión del agua en horas pico: es una pregunta que pocos hacen y que cambia mucho la vida diaria.',
      ],
      tip: 'Si la casa tiene pozo propio o tanque elevado, pedí que te muestren la bomba y el estado del tanque. Limpiar un tanque es barato; descubrir el problema en pleno verano no.',
    },
    {
      id: 'comprar-vs-alquilar',
      h2: '¿A nombre de quién debe quedar el servicio?',
      paras: [
        'Depende de si compraste o alquilaste. En una compra, lo lógico es que todos los servicios pasen a tu nombre lo antes posible: sos el nuevo dueño y no conviene que facturas y deudas sigan a nombre de otra persona.',
        'En un alquiler hay dos formas habituales, y ninguna es mejor por sí sola: que el servicio siga a nombre del propietario y el inquilino pague las facturas, o que el inquilino lo ponga a su nombre durante el contrato. Lo que importa es que el contrato diga claramente quién paga, cómo se demuestra el pago (por ejemplo, mandando el comprobante cada mes) y qué pasa con la última factura al irse.',
      ],
      table: {
        head: ['Situación', 'Lo habitual', 'Qué dejar por escrito'],
        rows: [
          ['Compraste la propiedad', 'Pasar luz y agua a tu nombre', 'Lecturas del día de la escritura y deudas canceladas por el vendedor'],
          ['Alquilás, servicio a nombre del dueño', 'Vos pagás, el dueño controla', 'Que mandás los comprobantes y cómo se paga la última factura'],
          ['Alquilás, servicio a tu nombre', 'Vos pagás y sos titular', 'Que al irte devolvés el servicio al dueño sin deuda'],
        ],
      },
    },
    {
      id: 'deudas',
      h2: 'Cuidado con las deudas del anterior ocupante',
      paras: [
        'Una factura impaga puede terminar en corte de servicio aunque la deuda no sea tuya. Por eso, antes de pagar la seña de una compra o el primer mes de un alquiler, pedí ver las últimas facturas pagadas. En una compraventa, el escribano suele pedir constancias de que no hay deudas; para la luz y el agua, conviene que lo controles vos también.',
      ],
    },
    {
      id: 'internet',
      h2: 'Internet y TV: el servicio que más se olvida',
      paras: [
        'El internet no suele ser parte del contrato de alquiler, pero sí de tu rutina. Antes de firmar, preguntá qué empresas tienen cobertura en esa cuadra (no todas llegan a todos los barrios) y cuánto tardan en instalar. Si el inquilino anterior tenía fibra, a veces el cableado ya está y la instalación es más rápida.',
        'Si te vas de una casa, acordate de dar de baja tu propio servicio de internet y devolver los equipos. Muchas empresas cobran el equipo si no se devuelve.',
      ],
    },
    {
      id: 'al-irte',
      h2: 'Cuando sos vos el que se va',
      paras: [
        'Repetí el mismo ritual al revés: fotos de los medidores el día que entregás las llaves, última factura pagada o un acuerdo escrito sobre cómo se paga, y baja o devolución de los servicios que estaban a tu nombre. Es la manera más simple de que el depósito de garantía vuelva sin descuentos sorpresa.',
        'Si estás buscando dónde mudarte, en Casa-Libre ves casas y departamentos en el mapa y podés preguntar al dueño por WhatsApp quién provee el agua o si la casa tiene fibra antes de visitarla. También desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo se hace el cambio de titular de la ANDE?', a: 'Se solicita ante la ANDE presentando cédula y documentos que acrediten tu vínculo con el inmueble, como el título de propiedad. Confirmá los requisitos vigentes en la ANDE antes de ir.' },
    { q: 'Si alquilo, ¿tengo que poner la luz a mi nombre?', a: 'No necesariamente. Muchas veces queda a nombre del dueño y el inquilino paga las facturas. Lo importante es que el contrato diga quién paga y cómo se demuestra el pago.' },
    { q: '¿Quién paga una factura atrasada del inquilino anterior?', a: 'Quien consumió. Por eso conviene fotografiar los medidores y pedir la última factura pagada el día de la entrega, y dejarlo escrito en el acta o el contrato.' },
    { q: '¿Quién provee el agua en mi barrio?', a: 'Depende de la zona: la ESSAP en Asunción y parte del área metropolitana, y juntas de saneamiento o aguateras en muchas otras ciudades. Preguntale al dueño antes de mudarte.' },
  ],
  sources: [
    { name: 'Procedimiento PA0140 — Actualización de titular de contrato', publisher: 'Administración Nacional de Electricidad (ANDE)', url: 'https://mecip.ande.gov.py/images/sima/Control_de_la_Implementacion/Manuales_OPEN/Atencion_cliente/PA0140%20Actualizacion%20de%20Titular%20de%20Contrato.pdf' },
    { name: 'Ley N° 1183/1985 — Código Civil (locación)', publisher: 'Biblioteca y Archivo Central del Congreso (BACN)', url: 'https://www.bacn.gov.py/leyes-paraguayas/5293/ley-n-1183-codigo-civil' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Alquileres en el mapa' },
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/guias/como-alquilar-mi-propiedad', label: 'Guía: cómo alquilar tu propiedad' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad', 'gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar: (1) requisitos actuales de la ANDE para cambio de titular (el manual PA0140 y el de corrección de titular se verificaron solo por buscador; mecip.ande.gov.py/ande.gov.py no resuelven desde el entorno de prueba); (2) cobertura de la ESSAP en el área metropolitana y requisitos de cambio de titular de la ESSAP (no se encontró fuente oficial, texto cualitativo); (3) que "NIS" sea el identificador que figura en las facturas de la ANDE.',
};

export default article;
