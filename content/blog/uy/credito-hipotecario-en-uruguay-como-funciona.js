// Blog UY — cómo funciona un crédito hipotecario.
const article = {
  slug: 'credito-hipotecario-en-uruguay-como-funciona',
  title: 'Crédito hipotecario en Uruguay: cómo funciona y cómo comparar',
  h1: 'Crédito hipotecario en Uruguay: cómo funciona, en qué moneda y cómo comparar ofertas',
  description: 'Cómo funciona un crédito hipotecario en Uruguay: BHU, BROU y bancos privados, préstamos en UI o dólares, ahorro previo, tasación, seguros, garantía de la ANV y cómo comparar simulaciones.',
  category: 'financiamiento',
  tags: ['crédito', 'hipoteca', 'BHU', 'BROU', 'UI', 'vivienda'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  featured: true,
  answer: 'Un crédito hipotecario es un préstamo de largo plazo para comprar, construir o refaccionar una vivienda, en el que la propiedad queda hipotecada a favor del banco hasta que terminás de pagar. En Uruguay los dan el Banco Hipotecario del Uruguay (BHU), el BROU y los bancos privados, y muchos se otorgan en Unidades Indexadas (UI), que se ajustan por inflación, o en dólares. Casi siempre tenés que poner una parte con ahorro propio; el banco tasa la propiedad, analiza tus ingresos y exige seguros. Para comparar, pedí simulaciones con el mismo monto y plazo y mirá el costo total, la moneda y la tasa.',
  sections: [
    {
      id: 'como-funciona',
      h2: 'Cómo funciona, en simple',
      paras: [
        'El banco te presta una parte del precio y vos la devolvés en cuotas mensuales durante muchos años. Como garantía, se constituye una hipoteca sobre la propiedad, por escritura ante escribano, normalmente en el mismo acto de la compra, y se inscribe en el Registro de la Propiedad. Si dejás de pagar, el banco puede ejecutar esa garantía. Cuando cancelás, se levanta la hipoteca.',
        'Por eso el crédito, la compraventa y la inscripción se coordinan entre el banco, los escribanos, el vendedor y vos. Si comprás con crédito, pedí que el boleto de reserva quede condicionado a la aprobación del préstamo.',
      ],
    },
    {
      id: 'quien-presta',
      h2: 'Quién presta: BHU, BROU y bancos privados',
      paras: [
        'El BHU es el banco público especializado en vivienda y tiene líneas de crédito y programas de ahorro previo. El BROU, el banco público comercial, también ofrece créditos hipotecarios, y los bancos privados tienen los suyos. Cada uno publica simuladores en su sitio: son útiles para una primera idea, pero la oferta real depende de tu perfil.',
        'Además, la Ley 18.795 creó en la Agencia Nacional de Vivienda (ANV) un Fondo de Garantía de Créditos Hipotecarios, que da garantías parciales para créditos destinados a la compra, construcción o refacción de una vivienda de interés social. En la práctica, esa garantía puede permitir que el banco financie un porcentaje mayor y que necesites menos ahorro. Preguntá en cada banco si trabaja con ese fondo y para qué viviendas.',
      ],
    },
    {
      id: 'moneda',
      h2: 'UI, dólares o pesos: la decisión más importante',
      paras: [
        'En Uruguay es muy común que los créditos hipotecarios se otorguen en Unidades Indexadas (UI). La UI es una unidad de cuenta que se ajusta según la inflación (el IPC), y su valor diario lo publica el INE. Eso significa que la cuota en UI es estable, pero la cuota en pesos sube a medida que sube la inflación.',
      ],
      table: {
        head: ['Moneda del crédito', 'Ventaja', 'Riesgo'],
        rows: [
          ['UI', 'Tasa en general más baja; acompaña la inflación', 'La cuota en pesos sube con el IPC; si tu sueldo sube menos que la inflación, pesa más'],
          ['Dólares', 'Útil si cobrás en dólares', 'Si cobrás en pesos y sube el dólar, la cuota sube'],
          ['Pesos nominales', 'Cuota en pesos previsible', 'Tasas en general más altas; menos oferta a largo plazo'],
        ],
      },
      tip: 'Regla práctica: endeudate en la misma moneda en la que cobrás, o en UI si tu sueldo se ajusta por inflación.',
    },
    {
      id: 'ahorro',
      h2: 'Cuánto ahorro necesitás',
      paras: [
        'Los bancos casi nunca financian el 100% del valor. Prestan un porcentaje del menor valor entre el precio y la tasación, y ese porcentaje depende del banco, del tipo de vivienda (por ejemplo, si es nueva o usada, o vivienda promovida) y de tu perfil. Preguntalo en la primera consulta.',
        'Además del ahorro para la parte no financiada, vas a necesitar dinero para el ITP (2% del comprador sobre el valor real de Catastro, según la DGI), los honorarios del escribano, la tasación, los seguros y la mudanza. Eso no suele entrar en el crédito.',
      ],
    },
    {
      id: 'tasacion-y-seguros',
      h2: 'Tasación y seguros',
      paras: [
        'El banco manda tasar la propiedad. Si la tasación da menos que el precio, te prestan sobre el valor tasado y la diferencia la cubrís vos o renegociás con el vendedor. El escribano del banco también estudia los títulos.',
        'Te van a exigir, como mínimo, un seguro de vida sobre el deudor (que cancela la deuda si fallece) y un seguro de incendio sobre la propiedad. Su costo se suma a la cuota.',
      ],
    },
    {
      id: 'documentos',
      h2: 'Documentos que te suelen pedir',
      bullets: [
        'Cédula de identidad de los titulares y, si corresponde, del cónyuge.',
        'Recibos de sueldo o certificado de ingresos de contador público si sos independiente.',
        'Historia laboral del BPS, en algunos casos.',
        'Datos de la propiedad: padrón, boleto de reserva y documentos del vendedor.',
        'Para construcción: permiso de construcción y presupuesto de obra.',
      ],
    },
    {
      id: 'comparar',
      h2: 'Cómo comparar dos ofertas',
      bullets: [
        'Moneda: UI, dólares o pesos.',
        'Tasa: fija o variable, y cuál es la tasa efectiva anual.',
        'Plazo: más años bajan la cuota pero suben los intereses totales.',
        'Seguros y comisiones: cuánto suman por mes y por única vez.',
        'Porcentaje financiado y ahorro que te exigen.',
        'Cancelación anticipada: si podés adelantar pagos sin penalidad.',
        'Tiempos de aprobación: el vendedor no siempre espera.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Elegir la propiedad pensando en el crédito',
      paras: [
        'Una propiedad con títulos en orden, sin deudas y con la tasación en línea con el precio se aprueba más rápido. Al consultar un aviso, preguntá si el dueño acepta venta con crédito bancario. En Casa-Libre podés filtrar casas y apartamentos por precio, verlos en el mapa y escribir directo por WhatsApp, también desde la app para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Qué es un crédito hipotecario en UI?', a: 'Un préstamo cuyo saldo y cuotas se expresan en Unidades Indexadas, que se ajustan por inflación. La cuota en UI es fija, pero en pesos sube con el IPC.' },
    { q: '¿Cuánto financian los bancos en Uruguay?', a: 'No hay un porcentaje único: depende del banco, del tipo de vivienda y de tu perfil. La garantía del Fondo de la ANV puede permitir financiar más en viviendas de interés social.' },
    { q: '¿Puedo pedir un crédito hipotecario siendo extranjero?', a: 'Algunos bancos lo permiten, pero suelen exigir ingresos demostrables en Uruguay, historial y a veces residencia. Consultalo con cada banco.' },
    { q: '¿Qué seguros exige un crédito hipotecario?', a: 'Habitualmente un seguro de vida del deudor y un seguro de incendio sobre la vivienda. Su costo se suma a la cuota.' },
  ],
  sources: [
    { name: 'Ley N° 18.795, cap. II (Fondo de Garantía de Créditos Hipotecarios)', publisher: 'IMPO', url: 'https://www.impo.com.uy/bases/leyes/18795-2011' },
    { name: 'Instituto Nacional de Estadística (Unidad Indexada, IPC)', publisher: 'INE', url: 'https://www.ine.gub.uy/' },
    { name: 'Banco Central del Uruguay', publisher: 'BCU', url: 'https://www.bcu.gub.uy/' },
    { name: 'Impuesto a las Transmisiones Patrimoniales', publisher: 'DGI', url: 'https://www.gub.uy/direccion-general-impositiva/comunicacion/publicaciones/impuesto-transmisiones-patrimoniales-0' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=depto', label: 'Apartamentos en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos e impuestos al comprar' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa', 'comprar-primera-casa'],
  reviewNote: 'Confirmar con un banco: (1) líneas vigentes del BHU y BROU y si siguen siendo mayoritariamente en UI; (2) qué bancos operan con el Fondo de Garantía de Créditos Hipotecarios de la ANV y para qué viviendas; (3) seguros exigidos; (4) política para extranjeros. Los sitios del BHU y BROU no respondieron a la verificación desde fuera de Uruguay (403/timeout), por eso no se citan.',
};

export default article;
