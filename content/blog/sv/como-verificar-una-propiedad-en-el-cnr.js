// Blog SV — verificar una propiedad en el CNR (dueño, hipotecas, embargos).
const article = {
  slug: 'como-verificar-una-propiedad-en-el-cnr',
  title: 'Cómo verificar una propiedad en el CNR de El Salvador',
  h1: 'Cómo saber quién es el dueño de una casa y si tiene hipotecas: consulta en el CNR',
  description: 'Cómo consultar en el Centro Nacional de Registros (CNR) quién es el dueño de un inmueble en El Salvador, si tiene hipotecas o embargos: matrícula, certificación extractada y avisos registrales.',
  category: 'documentos-y-tramites',
  tags: ['cnr', 'matrícula', 'certificación extractada', 'hipoteca', 'embargo'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Para saber quién es el dueño de una casa o un terreno en El Salvador y si tiene hipotecas o embargos, consulte el Registro de la Propiedad Raíz e Hipotecas del Centro Nacional de Registros (CNR). Con el número de matrícula del inmueble puede pedir una certificación extractada, en línea o en una oficina del CNR, que resume el nombre del dueño, su porcentaje, la situación legal del inmueble y los documentos en trámite. Hágalo siempre antes de entregar cualquier anticipo.',
  sections: [
    {
      id: 'por-que',
      h2: 'Por qué la consulta es el primer paso',
      paras: [
        'En una compraventa, quien le muestra la casa no siempre es quien puede venderla. Puede ser un familiar sin poder, un inquilino o, en el peor caso, alguien que intenta una estafa. Y aunque sea el dueño, la casa puede tener una hipoteca o un embargo que usted heredaría.',
        'El registro público es la fuente que manda. Lo que diga el CNR sobre el inmueble pesa más que cualquier fotocopia o explicación.',
      ],
    },
    {
      id: 'matricula',
      h2: 'La matrícula: el número que identifica al inmueble',
      paras: [
        'Cada inmueble inscrito en el sistema registral tiene un número de matrícula. Aparece en la escritura del dueño y en sus documentos registrales. Pídaselo al vendedor junto con una copia de su escritura: si se niega a darlo, es una señal de alerta.',
        'Algunos inmuebles antiguos todavía están inscritos en el sistema de libros anterior y no tienen todos sus datos en el sistema digital. En esos casos, el CNR atiende la consulta como un estudio registral especial.',
      ],
    },
    {
      id: 'certificacion',
      h2: 'La certificación extractada: qué dice y cómo pedirla',
      paras: [
        'La certificación extractada es un documento oficial que resume la información registral de un inmueble. Según el CNR, citado por la prensa en 2026, incluye el nombre del propietario, el porcentaje de propiedad, la situación legal del inmueble y los documentos en trámite. Se puede pedir en línea, a través del sitio del CNR, y llega por correo electrónico, o en persona en sus oficinas. La prensa reportó un precio de US$8.86.',
      ],
      bullets: [
        '¿El nombre del dueño coincide con el DUI de quien le vende?',
        '¿Es dueño del 100% o hay copropietarios que también deben firmar?',
        '¿Hay hipotecas inscritas? ¿A favor de quién?',
        '¿Hay embargos, anotaciones preventivas u otros gravámenes?',
        '¿Hay documentos en trámite (otra venta, otra hipoteca) presentados y no inscritos aún?',
      ],
      tip: 'Un documento "en trámite" en la certificación es importante: puede ser otra venta o hipoteca que el vendedor ya firmó. No pague nada hasta saber qué es.',
    },
    {
      id: 'en-oficina',
      h2: 'Consultar en una oficina del CNR',
      paras: [
        'Si no tiene la matrícula o quiere confirmar datos, puede ir a una oficina del CNR y usar las máquinas de consulta, donde el personal le ayuda con la búsqueda. Ahí puede encontrar la matrícula, el número de la escritura y otros datos registrales.',
      ],
    },
    {
      id: 'avisos',
      h2: 'Avisos registrales: protección después de comprar',
      paras: [
        'Una vez que la casa esté a su nombre, active los avisos registrales del CNR. Según la prensa, la suscripción es gratuita por un año y le envía un correo cada vez que se presenta un trámite sobre su inmueble. Es una protección útil contra intentos de fraude, sobre todo si vive fuera del país.',
        'El CNR también tiene una Oficina de Seguridad Registral que atiende consultas sobre casos sospechosos.',
      ],
    },
    {
      id: 'catastro',
      h2: 'Registro y catastro: dos cosas distintas',
      paras: [
        'El registro dice quién es el dueño y qué gravámenes hay. El catastro describe el inmueble físicamente: ubicación, medidas y forma en el mapa. Ambos los administra el CNR. Si las medidas de la escritura no coinciden con el terreno real, el catastro y una remedición profesional le ayudan a aclararlo antes de comprar.',
      ],
    },
    {
      id: 'mas-alla',
      h2: 'Lo que el registro no le dice',
      paras: [
        'La certificación no le dice si hay tasas municipales atrasadas, deudas de agua o luz, cuotas de mantenimiento pendientes o si la casa tiene grietas. Para eso pida la solvencia municipal, los recibos de servicios y la constancia de la administración, y visite la casa con calma.',
      ],
    },
    {
      id: 'pasos',
      h2: 'Paso a paso',
      steps: [
        'Pida al vendedor la matrícula y copia de su escritura.',
        'Solicite una certificación extractada al CNR, en línea o en oficina.',
        'Compare el nombre del dueño con su DUI y verifique copropietarios.',
        'Revise hipotecas, embargos y documentos en trámite.',
        'Pida solvencia municipal y recibos de servicios.',
        'Lleve todo a su notario antes de firmar o pagar.',
        'Después de comprar, active los avisos registrales.',
      ],
    },
    {
      id: 'senales',
      h2: 'Señales de alerta',
      bullets: [
        'El vendedor no quiere dar la matrícula ni copia de la escritura.',
        'Le piden un anticipo urgente "porque hay otro interesado".',
        'Quien vende dice actuar por el dueño, pero no muestra un poder.',
        'El precio está muy por debajo de casas parecidas de la zona.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Preguntar desde el aviso',
      paras: [
        'En Casa-Libre puede escribir por WhatsApp al vendedor y pedirle la matrícula antes de visitar. Así hace la consulta en el CNR desde el principio. También desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo sé si una casa está a nombre del vendedor?', a: 'Pida una certificación extractada al CNR con la matrícula del inmueble y compare el nombre del propietario con el DUI del vendedor.' },
    { q: '¿Cómo sé si una casa tiene hipoteca o embargo?', a: 'La certificación extractada del CNR muestra la situación legal del inmueble, incluidas hipotecas, embargos y documentos en trámite.' },
    { q: '¿Cuánto cuesta una certificación extractada?', a: 'La prensa reportó en 2026 un precio de US$8.86. Confirme la tarifa vigente al solicitarla.' },
    { q: '¿Qué son los avisos registrales?', a: 'Un servicio del CNR que le envía un correo cuando se presenta un trámite sobre su inmueble. Según la prensa, es gratuito por un año.' },
  ],
  sources: [
    { name: 'Cómo asegurar que tu propiedad esté registrada en El Salvador', publisher: 'elsalvador.com (31 de marzo de 2026)', url: 'https://www.elsalvador.com/noticias/nacional/verificar-propiedad-el-salvador/1268103/2026/' },
    { name: 'Certificaciones extractadas y literales (trámite)', publisher: 'eRegulations El Salvador', url: 'https://elsalvador.eregulations.org/menu/49?l=es' },
    { name: 'Ley de Catastro', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-de-catastro/gdoc/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=terreno', label: 'Terrenos en venta' },
    { href: '/guias/documentos-para-vender-un-inmueble', label: 'Guía: documentos para vender un inmueble' },
  ],
  relatedGuias: ['documentos-para-vender-un-inmueble'],
  reviewNote: 'Confirmar con el CNR (cnr.gob.sv bloquea GET automatizados): (1) precio vigente de la certificación extractada (US$8.86 según prensa); (2) si el "Historial Registral" reemplazó a la extractada para algunos fines; (3) duración gratuita de los avisos registrales; (4) que las oficinas tienen máquinas de consulta; (5) cómo se tramitan inmuebles aún en sistema de folio/libros.',
};

export default article;
