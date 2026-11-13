// Blog UY — garantías de alquiler: comparación desde el inquilino.
const article = {
  slug: 'garantia-de-alquiler-en-uruguay-opciones',
  title: 'Garantía de alquiler en Uruguay: CGN, MVOT, ANDA, seguro o depósito',
  h1: 'Garantía de alquiler en Uruguay: qué opciones hay y cuál te conviene',
  description: 'Comparación de las garantías para alquilar en Uruguay: CGN, Fondo de Garantía de Alquiler del MVOT, garantía para jóvenes, ANDA, seguro de fianza, depósito en el BHU y propiedad. Costos y requisitos.',
  category: 'alquilar',
  tags: ['alquiler', 'garantía', 'CGN', 'MVOT', 'ANDA', 'BHU'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'En Uruguay hay cinco grandes caminos para garantizar un alquiler: la garantía estatal de la Contaduría General de la Nación (si sos funcionario público o trabajás en una empresa registrada), el Fondo de Garantía de Alquiler del MVOT y la ANV (según tus ingresos, con una versión para jóvenes de 18 a 29 años), la garantía de una institución como ANDA, un seguro de fianza de una aseguradora o un depósito en el Banco Hipotecario. La mejor es la que el dueño acepta y que puedas pagar: las estatales cobran una comisión mensual del 3% a cada parte; el seguro, una prima; el depósito inmoviliza tu dinero.',
  sections: [
    {
      id: 'por-que-importa',
      h2: 'Por qué la garantía decide tu búsqueda',
      paras: [
        'En Uruguay la garantía es lo primero que pregunta un dueño o una inmobiliaria. Muchos avisos indican qué garantías aceptan, y no todas valen para todos. Si la definís antes de buscar, sabés cuánto alquiler te aprueban y a qué avisos escribir.',
        'Además, la garantía tiene un costo propio que se suma al alquiler. Compararlo antes de elegir te puede ahorrar bastante en un contrato de dos años.',
      ],
    },
    {
      id: 'cgn',
      h2: 'Garantía de la Contaduría General de la Nación (CGN)',
      paras: [
        'El Servicio de Garantía de Alquileres (SGA) de la CGN da una garantía con respaldo del Estado para vivienda. Según la CGN, pueden usarla los funcionarios públicos con 6 meses de antigüedad, los empleados de empresas privadas inscriptas en el registro del SGA con la misma antigüedad, y beneficiarios de convenios con el MVOT y del subsidio de alquiler del BPS.',
        'El alquiler se descuenta directamente de tu sueldo y la CGN le paga al dueño. El trámite no tiene costo inicial, pero una vez que empieza el descuento se cobra una comisión del 3% del alquiler a cada parte (dueño e inquilino) todos los meses. Para agendarte, normalmente necesitás un informe de líquido disponible de tu empleador.',
      ],
    },
    {
      id: 'mvot',
      h2: 'Fondo de Garantía de Alquiler (MVOT y ANV)',
      paras: [
        'Si no sos funcionario ni trabajás en una empresa registrada, el Fondo de Garantía de Alquiler, del MVOT en convenio con la ANV y la CGN, te da un certificado de garantía según tus ingresos. Según la ANV, el núcleo familiar debe tener un ingreso líquido formal de entre 15 y 100 UR, no ser propietario de inmuebles en el mismo departamento y no tener otra garantía estatal. El alquiler máximo garantizado se expresa en UR y es algo mayor si se trata de una vivienda promovida.',
        'Para jóvenes de 18 a 29 años que estudian o trabajan hay una versión específica: se puede pedir sola o en grupo de hasta cinco personas sumando ingresos, el alquiler no puede superar el 40% de los ingresos y, al autorizarse, hay que hacer un depósito único equivalente al 12% del monto garantizado. En ambos casos el contrato se firma a través de la CGN, con la misma comisión del 3% por parte.',
      ],
      tip: 'Para el Fondo de Garantía te piden también las facturas del último mes de tus gastos fijos (tarjeta, UTE, Antel, celular, internet) y la historia laboral del BPS. Pedí la historia laboral con tiempo: requiere agenda.',
    },
    {
      id: 'anda-y-seguros',
      h2: 'ANDA y seguros de fianza',
      paras: [
        'ANDA es una asociación mutual que ofrece garantía de alquiler a sus socios, con requisitos de ingresos y antigüedad propios. Los seguros de fianza los venden aseguradoras privadas: pagás una prima (en un pago o en cuotas) y la aseguradora responde ante el dueño si no pagás. Cada una evalúa tus ingresos y tiene su propio simulador.',
        'La ventaja de estas opciones es que no dependen de dónde trabajás. La desventaja es que el costo varía bastante entre una y otra, así que conviene pedir dos o tres cotizaciones con el mismo alquiler.',
      ],
    },
    {
      id: 'deposito',
      h2: 'Depósito en el Banco Hipotecario (BHU)',
      paras: [
        'El Decreto-Ley 14.219 permite garantizar el alquiler con un depósito que no puede superar cinco meses de alquiler en viviendas, y que se deposita en el Banco Hipotecario del Uruguay. Al terminar el contrato, si no hay deudas ni daños, se libera. Es la opción sin costo mensual, pero inmoviliza mucho dinero al principio.',
      ],
    },
    {
      id: 'comparar',
      h2: 'Comparación rápida',
      table: {
        head: ['Opción', 'Para quién', 'Costo para el inquilino'],
        rows: [
          ['CGN (SGA)', 'Funcionarios públicos y empleados de empresas registradas', 'Comisión mensual del 3% del alquiler'],
          ['Fondo de Garantía de Alquiler', 'Hogares con ingresos formales dentro de la franja en UR', 'Comisión mensual del 3% del alquiler'],
          ['Garantía para jóvenes', 'De 18 a 29 años que estudian o trabajan', '3% mensual y un depósito único del 12% del monto garantizado'],
          ['ANDA', 'Socios que cumplan sus requisitos', 'Según la institución'],
          ['Seguro de fianza', 'Quien califique ante la aseguradora', 'Prima según la aseguradora'],
          ['Depósito en el BHU', 'Quien tenga ahorros', 'Hasta cinco meses de alquiler inmovilizados'],
          ['Sin garantía (LUC)', 'Si el dueño lo acepta', 'Sin costo de garantía; desalojo más rápido si no pagás'],
        ],
      },
    },
    {
      id: 'elegir',
      h2: 'Cómo elegir en tres pasos',
      steps: [
        'Fijate si accedés a una garantía estatal: es la que más dueños e inmobiliarias conocen.',
        'Si no, pedí cotización a ANDA y a dos aseguradoras con el mismo monto de alquiler, y compará el costo total del contrato.',
        'Si tenés ahorros o el dueño acepta la LUC, compará también esas dos opciones: pueden salir más baratas.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Buscar con tu garantía en la mano',
      paras: [
        'Cuando sepas qué garantía tenés y por qué monto, escribí a los avisos indicándolo desde el primer mensaje. En Casa-Libre ves los alquileres de Uruguay en el mapa y hablás directo por WhatsApp con el anunciante, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuál es la garantía de alquiler más barata?', a: 'Depende de tu caso. Las estatales cobran un 3% mensual del alquiler a cada parte; un seguro cobra una prima; el depósito no tiene costo mensual pero inmoviliza hasta cinco meses de alquiler. Compará el costo total del contrato.' },
    { q: '¿Qué garantía aceptan todos los dueños?', a: 'Ninguna es universal. Las estatales son muy conocidas, pero cada propietario o inmobiliaria decide. Preguntalo antes de visitar.' },
    { q: '¿Puedo usar la garantía de jóvenes con amigos?', a: 'Sí. Según el MVOT, la garantía para jóvenes puede ser grupal, de hasta cinco personas, sumando ingresos.' },
    { q: '¿Si soy dueño de otra casa puedo pedir la garantía del MVOT?', a: 'No si la propiedad está en el mismo departamento donde pedís la garantía, según los requisitos publicados por la ANV.' },
  ],
  sources: [
    { name: 'Alquiler por Contaduría General de la Nación', publisher: 'gub.uy — MEF', url: 'https://www.gub.uy/tramites/alquiler-contaduria-general-nacion' },
    { name: 'Servicio de Garantía de Alquileres', publisher: 'Ministerio de Economía y Finanzas', url: 'https://www.gub.uy/ministerio-economia-finanzas/servicio-garant%C3%ADa-alquileres' },
    { name: 'Fondo de Garantía de Alquiler', publisher: 'Agencia Nacional de Vivienda', url: 'https://www.anv.gub.uy/fondo-de-garantia-de-alquiler' },
    { name: 'Garantía de alquiler para jóvenes', publisher: 'MVOT', url: 'https://www.gub.uy/ministerio-vivienda-ordenamiento-territorial/politicas-y-gestion/garantia-alquiler-para-jovenes' },
    { name: 'ANDA', publisher: 'ANDA', url: 'https://www.anda.com.uy/' },
    { name: 'Decreto-Ley N° 14.219, art. 38', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/decretos-ley/14219-1974' },
  ],
  related: [
    { href: '/propiedades?op=alquiler', label: 'Alquileres en el mapa' },
    { href: '/propiedades?op=alquiler&type=casa', label: 'Casas en alquiler' },
    { href: '/blog/requisitos-para-alquilar-en-uruguay', label: 'Requisitos para alquilar' },
    { href: '/blog/alquilar-sin-garantia-por-la-luc', label: 'Alquilar sin garantía por la LUC' },
  ],
  relatedGuias: ['como-alquilar-mi-propiedad'],
  reviewNote: 'Confirmar: (1) topes vigentes del Fondo de Garantía (15-100 UR de ingreso; alquiler máximo 18 UR o 21 UR en vivienda promovida según ANV) y de la garantía jóvenes (22,5 UR, 40%, 12%); (2) que el informe de líquido disponible (ILD) siga siendo requisito; (3) que ANDA siga ofreciendo garantía y a quién; (4) práctica actual del depósito en el BHU.',
};

export default article;
