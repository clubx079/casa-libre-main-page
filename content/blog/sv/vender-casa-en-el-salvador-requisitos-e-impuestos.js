// Blog SV — vender una casa: requisitos, impuestos y cómo publicar (dueño que usa el portal).
const article = {
  slug: 'vender-casa-en-el-salvador-requisitos-e-impuestos',
  title: 'Vender una casa en El Salvador: requisitos e impuestos',
  h1: 'Vender una casa en El Salvador: requisitos, impuestos y cómo publicarla',
  description: 'Qué necesita para vender su casa en El Salvador: escritura y matrícula, solvencias, cancelación de hipoteca, impuesto sobre la ganancia de capital, quién paga el impuesto de transferencia y cómo publicarla.',
  category: 'vender',
  tags: ['vender', 'ganancia de capital', 'solvencias', 'hipoteca', 'publicar'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Para vender una casa en El Salvador necesita su DUI, la escritura inscrita a su nombre y la matrícula del inmueble, la solvencia municipal y los servicios al día, y, si la casa tiene hipoteca, cancelarla (normalmente con parte del precio). El impuesto de transferencia lo paga el comprador; usted, como vendedor, puede tener que pagar impuesto sobre la renta por la ganancia de capital si vende más caro de lo que le costó. La venta se formaliza con escritura ante notario y se inscribe en el CNR.',
  sections: [
    {
      id: 'papeles',
      h2: 'Los papeles que debe tener listos',
      paras: [
        'Un comprador serio, su notario y su banco o el FSV le pedirán los mismos documentos. Tenerlos listos desde que publica acelera la venta.',
      ],
      bullets: [
        'DUI vigente suyo y, si corresponde, de los copropietarios.',
        'Escritura de su compra inscrita y número de matrícula.',
        'Certificación extractada reciente del CNR.',
        'Solvencia municipal del inmueble.',
        'Últimos recibos de agua y luz pagados.',
        'Si está en residencial o condominio, constancia de cuotas al día y reglamento.',
        'Si tiene hipoteca, constancia del saldo emitida por el banco o el FSV.',
      ],
      tip: 'Saque usted mismo la certificación del CNR antes de publicar. Si aparece un error de nombre, de medidas o una anotación vieja, es mejor resolverlo antes de que lo descubra el comprador.',
    },
    {
      id: 'hipoteca',
      h2: 'Si la casa tiene hipoteca',
      paras: [
        'Puede vender una casa hipotecada, pero el comprador querrá recibirla libre. Lo habitual es que, en el mismo acto de la escritura, parte del precio se use para pagar el saldo y el acreedor otorgue la cancelación de la hipoteca. Si el comprador usa un crédito, su banco o el FSV coordina el pago del saldo.',
        'Evite los arreglos informales de "vender el derecho": usted seguiría siendo el deudor y el dueño registrado, con todos los riesgos que eso implica.',
      ],
    },
    {
      id: 'impuestos',
      h2: 'Impuestos: qué paga usted y qué paga el comprador',
      paras: [
        'El Impuesto sobre Transferencia de Bienes Raíces (3% sobre el valor que exceda US$28,571.43) lo paga el comprador, según la ley.',
        'Usted, como vendedor, debe considerar el impuesto sobre la renta por ganancia de capital. Si vende por más de lo que le costó la casa (más las mejoras documentadas), esa diferencia es una ganancia. Según la Ley de Impuesto sobre la Renta, la ganancia de capital se grava con una tasa del 10% cuando el bien se vende después de doce meses de adquirido; si se vende antes, la ganancia se suma a la renta ordinaria. Si vende con pérdida, no hay ganancia que gravar.',
      ],
      table: {
        head: ['Impuesto o gasto', 'Quién lo paga', 'Nota'],
        rows: [
          ['Impuesto sobre Transferencia de Bienes Raíces', 'Comprador', '3% sobre el exceso de US$28,571.43'],
          ['Impuesto sobre la renta por ganancia de capital', 'Vendedor', 'Solo si hay ganancia; consulte con un contador'],
          ['Cancelación de hipoteca', 'Vendedor', 'Con parte del precio, en el mismo acto'],
          ['Tasas municipales y servicios atrasados', 'Vendedor', 'Antes de escriturar'],
          ['Honorarios del notario', 'Se pacta', 'Acuérdelo por escrito con el comprador'],
        ],
      },
    },
    {
      id: 'precio',
      h2: 'Cómo poner el precio',
      paras: [
        'Compare con propiedades parecidas en su misma zona: tamaño, número de habitaciones, estado y tipo (colonia, residencial, apartamento). Un precio alineado con el mercado recibe consultas desde la primera semana; uno muy alto se queda publicado y termina vendiéndose más barato. Si el comprador va a usar crédito, recuerde que la entidad hará un avalúo y prestará sobre ese valor.',
      ],
    },
    {
      id: 'publicar',
      h2: 'Cómo publicar para vender más rápido',
      bullets: [
        'Fotos con buena luz de todos los ambientes, la fachada y la calle.',
        'Precio claro y si acepta crédito del FSV o bancario.',
        'Medidas del terreno y de la construcción.',
        'Lo que incluye: parqueo, cisterna, cuota de mantenimiento.',
        'Ubicación correcta en el mapa.',
      ],
    },
    {
      id: 'visitas',
      h2: 'Consultas y visitas con seguridad',
      paras: [
        'Responda rápido por WhatsApp, pida el nombre completo de quien quiere visitar y coordine visitas en horario diurno, acompañado. No entregue copias de su escritura o de su DUI a cualquiera que pregunte: compártalas con el notario o con un comprador que ya hizo una oferta seria.',
      ],
    },
    {
      id: 'pasos',
      h2: 'Paso a paso de la venta',
      steps: [
        'Reúna documentos y saque una certificación del CNR.',
        'Defina el precio comparando con su zona.',
        'Publique con buenas fotos y datos completos.',
        'Atienda consultas y visitas.',
        'Acuerde precio, forma de pago y fecha por escrito con el comprador.',
        'Firme la escritura ante notario y, si aplica, cancele la hipoteca.',
        'Declare la ganancia de capital si corresponde.',
      ],
    },
    {
      id: 'tiempos',
      h2: 'Cuánto puede tardar',
      paras: [
        'Una venta al contado con papeles en orden puede cerrarse en pocas semanas desde que hay comprador. Con crédito, sume el tiempo de aprobación y avalúo. Tener la documentación lista desde el principio es lo que más acorta los plazos.',
      ],
    },
    {
      id: 'casa-libre',
      h2: 'Publicar en Casa-Libre',
      paras: [
        'En Casa-Libre los compradores ven su casa en el mapa y le escriben directo por WhatsApp. Puede publicar desde el sitio o desde la app de Casa-Libre para iPhone y Android. Revise también la guía para vender sin inmobiliaria y la de documentos para vender.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué papeles necesito para vender mi casa en El Salvador?', a: 'DUI, escritura inscrita y matrícula, certificación del CNR, solvencia municipal, recibos de servicios al día y, si hay hipoteca, la constancia de saldo.' },
    { q: '¿Se pagan impuestos por vender una casa en El Salvador?', a: 'El vendedor puede pagar impuesto sobre la renta por la ganancia de capital si vende más caro de lo que le costó. El impuesto de transferencia lo paga el comprador.' },
    { q: '¿Puedo vender mi casa si todavía la estoy pagando?', a: 'Sí. Lo habitual es cancelar el saldo del crédito con parte del precio en el mismo acto de la escritura, para entregar la casa libre de hipoteca.' },
    { q: '¿Quién paga al notario en una compraventa?', a: 'Se pacta entre las partes. Déjelo por escrito antes de firmar.' },
  ],
  sources: [
    { name: 'Ley de Impuesto sobre la Renta (ganancias de capital)', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-de-impuesto-sobre-la-renta/gdoc' },
    { name: 'Tratamiento a las ganancias de capital en Centroamérica', publisher: 'Consortium Legal (14 de junio de 2023)', url: 'https://consortiumlegal.com/2023/06/14/tratamiento-a-las-ganancias-de-capital-en-centroamerica/' },
    { name: 'Ley del Impuesto sobre Transferencia de Bienes Raíces', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-del-impuesto-sobre-transferencia-de-bienes-raices/gdoc' },
    { name: 'Cómo asegurar que tu propiedad esté registrada en El Salvador', publisher: 'elsalvador.com (31 de marzo de 2026)', url: 'https://www.elsalvador.com/noticias/nacional/verificar-propiedad-el-salvador/1268103/2026/' },
  ],
  related: [
    { href: '/guias/vender-sin-inmobiliaria', label: 'Guía: vender sin inmobiliaria' },
    { href: '/guias/impuestos-y-gastos-al-vender', label: 'Guía: impuestos y gastos al vender' },
    { href: '/guias/cuanto-vale-mi-propiedad', label: 'Guía: cuánto vale mi propiedad' },
  ],
  relatedGuias: ['vender-sin-inmobiliaria', 'impuestos-y-gastos-al-vender', 'documentos-para-vender-un-inmueble'],
  reviewNote: 'Confirmar con un contador: (1) tasa del 10% (art. 42 LISR) para ganancia de capital con más de 12 meses y tratamiento si es menos; (2) cómo se declara la ganancia de capital (formulario y plazo); (3) si hay exención para vivienda propia. Se usa /guias/* en lugar de /publicar porque /publicar en sv.casa-libre.com responde 307 (redirige a /?sell=1).',
};

export default article;
