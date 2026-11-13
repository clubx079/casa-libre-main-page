// Blog SV — cuánto puedo financiar / cuánto ahorrar antes de comprar.
const article = {
  slug: 'cuanto-puedo-financiar-para-una-casa-el-salvador',
  title: 'Cuánto me prestan para una casa en El Salvador',
  h1: 'Cuánto le pueden prestar para una casa en El Salvador y cuánto debe ahorrar antes',
  description: 'Cómo estimar cuánto le prestarían el FSV o un banco para comprar casa en El Salvador, qué gastos debe ahorrar aparte de la prima y cómo preparar su historial antes de aplicar.',
  category: 'financiamiento',
  tags: ['crédito', 'ahorro', 'prima', 'simulador', 'capacidad de pago'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Lo que le prestan depende de su capacidad de pago: la entidad calcula cuánto de su ingreso comprobable puede ir a la cuota después de descontar sus otras deudas, y con eso, la tasa y el plazo define el monto. Además, casi nunca financian el 100% del precio: tendrá que ahorrar una prima y, aparte, los gastos de la compra (notario, inscripción, avalúo y el impuesto de transferencia si la casa supera US$28,571.43). El simulador del FSV y las simulaciones de los bancos le dan una cifra orientativa antes de buscar casa.',
  sections: [
    {
      id: 'capacidad',
      h2: 'Cómo calculan su capacidad de pago',
      paras: [
        'La entidad toma su ingreso mensual comprobable, le resta las cuotas de otros préstamos (personales, tarjetas, otro crédito de vivienda) y aplica un límite: solo una parte de lo que queda puede ir a la cuota de la casa. Cada entidad fija su propio límite, por eso dos simulaciones pueden darle montos distintos.',
        'Con esa cuota máxima, la tasa de interés y el plazo, se calcula el monto que le pueden prestar. A mayor plazo, mayor monto, pero también más intereses en total.',
      ],
      tip: 'Liquidar una tarjeta o un préstamo personal antes de aplicar puede aumentar más su monto aprobado que un aumento de sueldo, porque libera capacidad de pago.',
    },
    {
      id: 'simulador',
      h2: 'Use un simulador antes de buscar',
      paras: [
        'El FSV tiene un simulador en su sitio web que le pide el número de solicitantes, su sector (empleado, pensionado, salvadoreño en el exterior, sector básico o microempresario), la línea de crédito, el tipo de inmueble, sus ingresos y deudas, y el precio de la vivienda. Los bancos ofrecen simulaciones similares en sus sitios o en agencia.',
        'El resultado es orientativo. Úselo para saber en qué rango de precio buscar y no enamorarse de una casa que no podrá financiar.',
      ],
    },
    {
      id: 'que-ahorrar',
      h2: 'Qué debe ahorrar aparte de la prima',
      paras: [
        'Muchas familias ahorran solo para la prima y se encuentran con gastos adicionales al momento de firmar. Haga una lista completa:',
      ],
      table: {
        head: ['Gasto', 'Cuándo aparece', 'Cómo estimarlo'],
        rows: [
          ['Prima', 'Al firmar', 'Precio menos monto financiado'],
          ['Impuesto de transferencia', 'Antes de inscribir', '3% sobre el valor que exceda US$28,571.43'],
          ['Honorarios del notario', 'Al firmar', 'Pida cotización por escrito'],
          ['Inscripción en el CNR', 'Después de firmar', 'Según arancel registral'],
          ['Avalúo y seguros', 'Durante el trámite y cada mes', 'Pregúntelo a la entidad'],
          ['Mudanza, reparaciones y muebles', 'Al entrar', 'Su propia lista'],
          ['Fondo de emergencia', 'Siempre', 'Varios meses de cuota'],
        ],
      },
    },
    {
      id: 'ejemplo',
      h2: 'Un ejemplo para ordenar los números',
      paras: [
        'Ejemplo hipotético, solo para ilustrar el cálculo: una casa de US$60,000. El impuesto de transferencia sería 3% sobre US$31,428.57 (60,000 − 28,571.43), es decir, unos US$943. Si la entidad financia una parte del precio, la diferencia es su prima. A eso súmele notario, inscripción, avalúo y mudanza. El total que necesita en efectivo es bastante más que la prima sola.',
        'Las cifras reales de tasa, plazo y porcentaje financiado dependen de la entidad y de su perfil; no las use como promesa de crédito.',
      ],
    },
    {
      id: 'historial',
      h2: 'Prepare su historial crediticio',
      paras: [
        'Un buen historial pesa tanto como el ingreso. Antes de aplicar, revise que no tenga atrasos y pague a tiempo todas sus cuotas durante varios meses. Si trabaja por su cuenta, ordene sus comprobantes y declare sus ingresos: lo que no está documentado no cuenta para el crédito.',
      ],
      bullets: [
        'Pague a tiempo tarjetas y préstamos; evite abrir créditos nuevos antes de aplicar.',
        'Reúna constancias de salario o comprobantes de ingresos de los últimos meses.',
        'Si recibe remesas, guarde el historial de envíos.',
        'Esté solvente con Hacienda, porque el FSV lo pide.',
      ],
    },
    {
      id: 'codeudor',
      h2: 'Aplicar con codeudor',
      paras: [
        'Sumar los ingresos de otra persona (pareja, familiar) aumenta la capacidad de pago. Pero el codeudor también queda obligado a pagar si usted no lo hace, y su propia capacidad de crédito se reduce. En el FSV, cuando uno de los solicitantes es del sector informal o pensionado, las condiciones del crédito pueden seguir las de ese sector.',
      ],
    },
    {
      id: 'cuota-real',
      h2: 'La cuota que puede pagar no siempre es la que le aprueban',
      paras: [
        'Que le aprueben un monto no significa que le convenga usarlo todo. Haga su presupuesto: la cuota más los seguros, las tasas municipales, los servicios y el mantenimiento tienen que caber en un mes normal, sin horas extra ni bonos.',
      ],
    },
    {
      id: 'prima-baja',
      h2: 'Si no tiene suficiente para la prima',
      paras: [
        'Algunas líneas del FSV están pensadas para personas con menos ahorro, y la prima varía según la línea y su situación. Otra opción es comprar una vivienda de menor precio como primer paso, o ahorrar unos meses más mientras alquila.',
        'Lo que conviene evitar es cubrir la prima con un préstamo personal caro: aumenta sus deudas justo cuando la entidad mide su capacidad de pago, y puede reducir el monto que le aprueban.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Buscar dentro de su rango',
      paras: [
        'Con su monto estimado, filtre casas y apartamentos por precio en Casa-Libre, véalos en el mapa y pregunte por WhatsApp si el vendedor acepta crédito del FSV o bancario. También puede hacerlo desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto me presta el FSV?', a: 'Depende de su ingreso comprobable, sus deudas, la línea y el plazo. El simulador del FSV le da una cifra orientativa; la definitiva la da el FSV al evaluar su solicitud.' },
    { q: '¿Cuánto debo ahorrar para comprar una casa?', a: 'La prima más los gastos de compra: impuesto de transferencia si aplica, notario, inscripción, avalúo y mudanza. Y conviene tener un fondo de emergencia aparte.' },
    { q: '¿Cómo se calcula el impuesto de transferencia?', a: 'Es 3% sobre la parte del valor que exceda US$28,571.43. En una casa de US$60,000 serían unos US$943.' },
    { q: '¿Me conviene aplicar con codeudor?', a: 'Aumenta el monto que le pueden prestar, pero el codeudor también responde por la deuda. Háganlo solo si ambos entienden ese compromiso.' },
  ],
  sources: [
    { name: 'Antes de solicitar tu crédito de vivienda, así podés calcular cuánto podrías financiar (simulador FSV)', publisher: 'elsalvador.com (30 de abril de 2026)', url: 'https://www.elsalvador.com/dinero-y-negocios/finanzas-personales/-simulador-credito-vivienda-como-calcular-financiamiento/1272256/2026/' },
    { name: 'Ley del Impuesto sobre Transferencia de Bienes Raíces', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-del-impuesto-sobre-transferencia-de-bienes-raices/gdoc' },
    { name: 'Tasas de interés', publisher: 'Superintendencia del Sistema Financiero (SSF)', url: 'https://www.ssf.gob.sv/tasas-de-interes/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=depto', label: 'Apartamentos en venta' },
    { href: '/guias/comprar-primera-casa', label: 'Guía: comprar su primera casa' },
  ],
  relatedGuias: ['comprar-primera-casa', 'gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar: (1) cálculo del ITBR del ejemplo (3% × 31,428.57 ≈ 942.86) y que no haya otros recargos; (2) que el FSV pide solvencia de Hacienda; (3) regla del FSV de que en solicitudes conjuntas con un informal o pensionado se aplican las condiciones de ese sector (según prensa). El ejemplo de US$60,000 es hipotético.',
};

export default article;
