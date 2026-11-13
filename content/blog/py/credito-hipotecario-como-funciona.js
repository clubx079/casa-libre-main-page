// Blog PY — cómo funciona un crédito hipotecario.
const article = {
  slug: 'credito-hipotecario-como-funciona',
  title: 'Crédito hipotecario en Paraguay: cómo funciona y cómo comparar',
  h1: 'Crédito hipotecario en Paraguay: cómo funciona y cómo comparar ofertas',
  description: 'Cómo funciona un crédito hipotecario en Paraguay: quién presta, líneas con fondos de la AFD, ahorro previo, tasación, seguros, documentos y cómo comparar ofertas.',
  category: 'financiamiento',
  tags: ['crédito', 'hipoteca', 'afd', 'banco', 'vivienda'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  featured: true,
  answer: 'Un crédito hipotecario es un préstamo de largo plazo para comprar, construir o refaccionar una vivienda, en el que la propiedad queda hipotecada a favor de quien presta hasta que terminás de pagar. En Paraguay lo otorgan bancos, financieras y cooperativas, muchas veces con fondos de la AFD (líneas como Primera Vivienda, Mi Casa o el programa Che Róga Porã). Casi siempre tenés que poner una parte con ahorro propio, la entidad tasa el inmueble, exige seguros y analiza tus ingresos. Para comparar ofertas mirá la tasa, el plazo, la moneda y el costo total, no solo la cuota.',
  sections: [
    {
      id: 'como-funciona',
      h2: 'Cómo funciona, en simple',
      paras: [
        'La entidad te presta una parte del precio de la vivienda y vos la devolvés en cuotas mensuales durante muchos años. Como garantía, la propiedad se hipoteca: queda inscripta en los Registros Públicos una hipoteca a favor de la entidad. Si dejás de pagar, la entidad puede ejecutar esa garantía. Cuando cancelás la deuda, se levanta la hipoteca y la propiedad queda libre.',
        'La hipoteca se constituye por escritura pública ante escribano, normalmente en el mismo acto en que firmás la compra. Por eso el crédito, la compraventa y la inscripción se coordinan entre la entidad, el escribano, el vendedor y vos.',
      ],
    },
    {
      id: 'quien-presta',
      h2: 'Quién presta: bancos, financieras, cooperativas y la AFD',
      paras: [
        'Los créditos para vivienda los dan bancos, financieras y cooperativas. Muchos de ellos usan fondos de la Agencia Financiera de Desarrollo (AFD), un banco público de segundo piso: la AFD no le presta directamente a las personas, sino a las entidades, que a su vez te prestan a vos con condiciones de plazo y tasa más favorables que un crédito con fondos propios.',
        'Según la cobertura de prensa sobre los productos de la AFD, Primera Vivienda está pensada para quien todavía no tiene una vivienda a su nombre, con un tope de ingresos familiares, y Mi Casa no exige que sea la primera vivienda. Además está Che Róga Porã, el programa de vivienda con tasas fijas por franja de ingresos. Las condiciones cambian con el tiempo: pedile a la entidad que te explique qué línea te corresponde.',
      ],
      table: {
        head: ['Línea', 'Para quién es (en general)', 'Dónde se tramita'],
        rows: [
          ['Primera Vivienda (AFD)', 'Quien no tiene vivienda propia, con tope de ingresos', 'Entidades con línea AFD'],
          ['Mi Casa (AFD)', 'Compra, construcción o refacción, no exige que sea la primera', 'Entidades con línea AFD'],
          ['Che Róga Porã', 'Ingresos de 1 a 9 salarios mínimos, con tope de valor del inmueble', 'Bancos, financieras y cooperativas adheridas'],
          ['Crédito con fondos propios de la entidad', 'Según la política de cada entidad', 'Cada banco, financiera o cooperativa'],
        ],
      },
    },
    {
      id: 'ahorro-previo',
      h2: 'Ahorro previo: cuánto te prestan y cuánto ponés vos',
      paras: [
        'Las entidades casi nunca financian el 100% del valor. Prestan un porcentaje del menor valor entre el precio de compra y la tasación, y el resto lo ponés vos. Ese porcentaje depende de la entidad, de la línea y de tu perfil, así que no hay un número único para el país: preguntalo en la primera consulta.',
        'Además del ahorro para la parte no financiada, vas a necesitar plata para los gastos de la operación (escribanía, inscripción, tasación, seguros) y para la mudanza. Eso no suele entrar en el crédito.',
      ],
    },
    {
      id: 'tasacion-y-seguros',
      h2: 'Tasación, estudio de títulos y seguros',
      paras: [
        'Antes de aprobar, la entidad manda tasar la propiedad: un tasador verifica el estado y estima su valor. Si la tasación da menos que el precio, te prestan sobre el valor tasado y la diferencia la tenés que cubrir vos o renegociar con el vendedor.',
        'También se hace un estudio de títulos con escribano: que el vendedor sea el titular, que no haya embargos ni otras hipotecas y que los impuestos estén al día. Y casi siempre te exigen seguros: uno de vida o desgravamen, que cancela la deuda si fallece el deudor, y uno sobre el inmueble contra incendio u otros daños. Su costo se suma a la cuota.',
      ],
    },
    {
      id: 'documentos',
      h2: 'Documentos que te suelen pedir',
      bullets: [
        'Cédula de identidad del titular y, si corresponde, del cónyuge o codeudor.',
        'Comprobantes de ingresos: recibos de sueldo y constancia laboral, o constancia de RUC, facturación y extractos si sos independiente.',
        'Declaración de bienes y deudas.',
        'Datos de la propiedad: copia del título, datos de cuenta corriente catastral y documentos del vendedor.',
        'En construcción: planos aprobados y presupuesto de obra.',
      ],
    },
    {
      id: 'comparar',
      h2: 'Cómo comparar dos ofertas de crédito',
      paras: [
        'Dos créditos con la misma cuota pueden costar muy distinto. Pedí a cada entidad una simulación por escrito, con el mismo monto y plazo, y compará estos puntos:',
      ],
      bullets: [
        'Tasa de interés: si es fija durante todo el plazo o si puede cambiar.',
        'Plazo: más años bajan la cuota pero suben el total de intereses.',
        'Moneda: si cobrás en guaraníes, un crédito en dólares agrega riesgo de tipo de cambio.',
        'Costo total: sumá intereses, seguros, comisiones y gastos de otorgamiento a lo largo de todo el crédito.',
        'Precancelación: si podés adelantar pagos o cancelar antes, y si eso tiene penalidad.',
        'Tiempos: cuánto tarda la aprobación. Un vendedor no siempre espera semanas.',
      ],
      tip: 'Pedí siempre el cuadro de amortización completo: muestra cuánto de cada cuota va a interés y cuánto a capital, y cuánto pagás en total al final.',
    },
    {
      id: 'plazo-y-cuota',
      h2: 'Cuánto de tu ingreso puede ir a la cuota',
      paras: [
        'Cada entidad tiene su propio límite de cuota sobre ingresos, y lo aplica sobre tus ingresos demostrables, no sobre lo que ganás en negro. Más allá del límite de la entidad, hacé tu propia cuenta: la cuota más los seguros tiene que entrar en tu presupuesto aun en un mes malo, sin depender de horas extra ni de ingresos ocasionales.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Elegir la propiedad pensando en el crédito',
      paras: [
        'Una propiedad con papeles en orden se aprueba más rápido. Al consultar un aviso, preguntá si tiene título inscripto, si el impuesto inmobiliario está al día y si el dueño acepta venta con crédito bancario. En Casa-Libre podés filtrar por tipo y precio, ver las propiedades en el mapa y escribir directo por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto financian los bancos en Paraguay?', a: 'No hay un porcentaje único: depende de la entidad, de la línea de crédito y de tu perfil. Casi nunca es el 100%, así que preparate para poner una parte con ahorro propio y para cubrir los gastos de la operación.' },
    { q: '¿Qué es la AFD y cómo me presta?', a: 'La Agencia Financiera de Desarrollo es un banco público de segundo piso. No presta directo a personas: da fondos a bancos, financieras y cooperativas, que te prestan a vos con líneas como Primera Vivienda o Mi Casa.' },
    { q: '¿Me conviene un crédito en dólares o en guaraníes?', a: 'Si tus ingresos son en guaraníes, un crédito en guaraníes evita que la cuota suba si sube el dólar. Compará las dos opciones con el costo total, no solo con la tasa.' },
    { q: '¿Qué pasa con la hipoteca cuando termino de pagar?', a: 'Se cancela por escritura y se levanta la inscripción en los Registros Públicos. Pedí a la entidad el documento de cancelación y verificá que se inscriba.' },
  ],
  sources: [
    { name: 'Agencia Financiera de Desarrollo (AFD)', publisher: 'AFD', url: 'https://www.afd.gov.py/' },
    { name: 'AFD: sepa las diferencias entre los créditos Che Róga Porã, Primera Vivienda y Mi Casa', publisher: 'ABC Color', url: 'https://www.abc.com.py/economia/2026/07/28/afd-sepa-las-diferencias-entre-los-creditos-che-roga-pora-primera-vivienda-y-mi-casa/' },
    { name: 'Che Róga Porã — sitio oficial', publisher: 'Gobierno del Paraguay', url: 'https://www.cherogapora.gov.py/' },
    { name: 'Dirección General de los Registros Públicos', publisher: 'Poder Judicial', url: 'https://www.pj.gov.py/contenido/154-direccion-general-de-los-registros-publicos/206' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=depto', label: 'Departamentos en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos e impuestos al comprar' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa', 'comprar-primera-casa'],
  reviewNote: 'Confirmar con una entidad financiera: (1) condiciones actuales de Primera Vivienda y Mi Casa (topes de ingreso, plazos, si Mi Casa admite refacción); (2) seguros que exigen habitualmente (desgravamen, incendio); (3) si las líneas AFD tienen tasa fija o variable. Primera Vivienda/Mi Casa se describen según ABC Color, no según el sitio de la AFD.',
};

export default article;
