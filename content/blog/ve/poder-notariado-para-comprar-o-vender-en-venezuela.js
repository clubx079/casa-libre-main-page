// Blog VE — poder notariado para comprar o vender un inmueble (incluido desde el exterior).
const article = {
  slug: 'poder-notariado-para-comprar-o-vender-en-venezuela',
  title: 'Poder notariado para comprar o vender en Venezuela',
  h1: 'Poder notariado para comprar o vender un inmueble en Venezuela, también desde el exterior',
  description: 'Cuándo necesitas un poder para comprar o vender un inmueble en Venezuela, la diferencia entre poder general y especial, cómo otorgarlo en una notaría o en el exterior y cómo verificar uno.',
  category: 'documentos-y-tramites',
  tags: ['poder', 'notaría', 'apostilla', 'exterior', 'compraventa'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Si no puedes estar en Venezuela para firmar una compra o una venta, puedes otorgar un poder a alguien de confianza para que firme por ti. Para inmuebles conviene un poder especial que nombre el inmueble y las facultades exactas (vender, cobrar, firmar ante el registro). En Venezuela se otorga ante notaría; en el exterior, ante el consulado venezolano o ante un notario local con apostilla. Si compras a un apoderado, verifica el poder en la notaría que lo autenticó.',
  sections: [
    {
      id: 'cuando',
      h2: 'Cuándo necesitas un poder',
      paras: [
        'Muchos venezolanos que viven fuera tienen inmuebles en el país o quieren comprar uno. Como la compraventa se firma ante el Registro Inmobiliario, alguien tiene que estar presente. Si no puedes viajar, el poder permite que otra persona firme en tu nombre.',
        'También se usa cuando el propietario está enfermo, cuando varios herederos venden juntos y algunos viven lejos, o cuando una persona quiere que un familiar se encargue de los trámites.',
      ],
    },
    {
      id: 'tipos',
      h2: 'Poder general o poder especial',
      table: {
        head: ['Tipo', 'Qué permite', 'Cuándo usarlo'],
        rows: [
          ['Poder general de administración y disposición', 'Actuar en muchos asuntos del otorgante, incluidos sus bienes', 'Cuando confías plenamente en el apoderado y necesitas que maneje varios asuntos'],
          ['Poder especial', 'Actos concretos sobre un bien concreto: vender tal apartamento, cobrar el precio, firmar ante el registro', 'Para una compra o venta puntual; es lo más recomendable'],
        ],
      },
      paras: [
        'Para vender un inmueble, el poder debe incluir expresamente la facultad de disponer (vender) y, si el apoderado va a recibir el dinero, la de cobrar y dar recibo. Un poder que solo dice "administrar" no alcanza para vender.',
      ],
    },
    {
      id: 'contenido',
      h2: 'Qué debe decir un poder especial para un inmueble',
      bullets: [
        'Datos completos del otorgante y del apoderado: nombres, cédulas y estado civil.',
        'Identificación del inmueble: dirección, linderos y datos de registro del documento de propiedad.',
        'Facultades exactas: vender o comprar, fijar precio, cobrar o pagar, firmar el documento, tramitar solvencias y pagos ante el SENIAT y la alcaldía.',
        'Si hay cónyuge con derechos sobre el bien, su consentimiento o su propio poder.',
        'Vigencia, si quieres limitarla en el tiempo.',
      ],
    },
    {
      id: 'en-venezuela',
      h2: 'Cómo se otorga en Venezuela',
      steps: [
        'Pide a un abogado que redacte el poder. Las notarías suelen exigir que el documento esté visado por abogado.',
        'Inicia el trámite por el sistema en línea del SAREN, carga el documento y paga las tasas.',
        'Acude a la notaría en la cita asignada con tu cédula, para firmar ante el notario.',
        'Retira el poder autenticado y entrega una copia certificada al apoderado.',
      ],
    },
    {
      id: 'desde-exterior',
      h2: 'Si vives en el exterior',
      paras: [
        'Hay dos caminos habituales. El primero es otorgar el poder ante el consulado de Venezuela en tu país de residencia, que actúa como notaría. El segundo es firmarlo ante un notario del país donde vives y luego apostillarlo (si ese país es parte del Convenio de La Haya sobre la apostilla) para que tenga validez en Venezuela. Si el poder está en otro idioma, hará falta una traducción por intérprete público.',
        'Antes de firmar en el exterior, pide a tu abogado en Venezuela que revise el texto. Un error en los datos del inmueble o en las facultades puede hacer que el registro no acepte el poder y tengas que repetir todo.',
      ],
      tip: 'Envía al apoderado el original con la apostilla por un servicio de mensajería con seguimiento. Una copia simple escaneada no sirve para firmar ante el registro.',
    },
    {
      id: 'verificar',
      h2: 'Si compras a alguien que actúa con poder',
      paras: [
        'Es una situación común y legítima, pero también un punto donde aparecen fraudes: poderes falsos, revocados o que no incluyen la facultad de vender.',
      ],
      bullets: [
        'Pide copia del poder y revisa que incluya expresamente la facultad de vender ese inmueble.',
        'Verifica con la notaría o consulado que lo otorgó que el poder existe y no ha sido revocado.',
        'Si es del exterior, revisa la apostilla o legalización.',
        'Que tu abogado confirme que el registro aceptará ese poder.',
        'Paga a una cuenta a nombre del propietario, salvo que el poder autorice expresamente al apoderado a cobrar.',
      ],
    },
    {
      id: 'revocar',
      h2: 'Cómo revocar un poder',
      paras: [
        'Si ya no confías en el apoderado o la operación cambió, puedes revocar el poder con un documento de revocatoria autenticado ante notaría o consulado. Notifícale la revocatoria al apoderado y, si sabes con quién estaba negociando, también a esa persona, para que nadie actúe con un poder que ya no vale.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Comprar o vender a distancia con Casa-Libre',
      paras: [
        'Si vendes desde el exterior, puedes publicar tu inmueble en Casa-Libre y atender las consultas por WhatsApp mientras tu apoderado hace las visitas. Si compras, puedes ver opciones en el mapa y pedir videos antes de decidir. En la web y en la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Puedo vender mi apartamento en Venezuela estando en el exterior?', a: 'Sí, otorgando un poder especial ante el consulado venezolano o ante un notario local con apostilla, para que un apoderado firme en tu nombre.' },
    { q: '¿Un poder general sirve para vender?', a: 'Solo si incluye expresamente la facultad de disponer o vender bienes. Para una venta puntual, lo recomendable es un poder especial.' },
    { q: '¿Cómo verifico que un poder es real?', a: 'Confirma con la notaría o el consulado que lo otorgó que existe y que no fue revocado, y que tu abogado lo revise.' },
    { q: '¿Necesito apostillar un poder hecho en el exterior?', a: 'Si lo firmas ante un notario extranjero, normalmente sí, o legalizarlo si el país no es parte del convenio de la apostilla. Si lo otorgas en el consulado venezolano, sigue sus instrucciones.' },
    { q: '¿Se puede revocar un poder?', a: 'Sí, con un documento de revocatoria autenticado ante notaría o consulado. Notifícalo al apoderado y a quien estuviera negociando con él.' },
  ],
  sources: [
    { name: 'Servicio Autónomo de Registros y Notarías (SAREN)', publisher: 'SAREN', url: 'https://www.saren.gob.ve/' },
    { name: 'Ministerio del Poder Popular para Relaciones Exteriores (servicios consulares)', publisher: 'MPPRE', url: 'https://www.mppre.gob.ve/' },
  ],
  related: [
    { href: '/publicar', label: 'Publicar tu inmueble' },
    { href: '/propiedades?op=venta', label: 'Propiedades en venta' },
    { href: '/blog/comprar-casa-en-venezuela-desde-el-exterior', label: 'Comprar casa desde el exterior' },
  ],
  relatedGuias: ['documentos-para-vender-un-inmueble', 'vender-sin-inmobiliaria'],
  reviewNote: 'Confirmar: (1) que las notarías exigen visado de abogado; (2) disponibilidad actual de servicios notariales en consulados venezolanos (varía por país y por relaciones diplomáticas); (3) apostilla: Venezuela es parte del Convenio de La Haya (de memoria); (4) traducción por intérprete público.',
};

export default article;
