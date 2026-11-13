// Blog PY — cuánto ahorrar antes de comprar.
const article = {
  slug: 'cuanto-ahorrar-antes-de-comprar',
  title: 'Cuánto ahorrar antes de comprar una casa en Paraguay',
  h1: 'Cuánto tenés que ahorrar antes de comprar una casa',
  description: 'Cómo calcular el ahorro que necesitás para comprar: la parte que no financia el banco, gastos de escritura, mudanza y un fondo de emergencia. Con un ejemplo.',
  category: 'financiamiento',
  tags: ['ahorro', 'crédito', 'presupuesto', 'comprar'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Antes de comprar con crédito necesitás ahorro para cuatro cosas: la parte del precio que el banco no financia, los gastos de la operación (escribanía, inscripción, tasación, seguros iniciales), la mudanza y los arreglos de entrada, y un fondo de emergencia para no quedarte sin colchón con la primera cuota. El porcentaje que financia cada entidad varía, así que el cálculo empieza preguntando cuánto te prestan y sobre qué valor. Sumá los cuatro bloques y esa es tu meta real, no solo la "entrega inicial".',
  sections: [
    {
      id: 'cuatro-bloques',
      h2: 'Los cuatro bloques del ahorro',
      paras: [
        'El error más común es ahorrar solo la entrega inicial y descubrir en la escribanía que faltan varios millones de guaraníes. Pensá el ahorro en cuatro partes, cada una con su propio número.',
      ],
      table: {
        head: ['Bloque', 'Qué incluye', 'De qué depende'],
        rows: [
          ['1. Parte no financiada', 'La diferencia entre el precio y lo que presta la entidad', 'Porcentaje que financia la entidad y valor de tasación'],
          ['2. Gastos de la operación', 'Escribanía, inscripción, tasación, seguros y gastos del crédito', 'Valor del inmueble, entidad y escribano'],
          ['3. Mudanza y entrada', 'Flete, conexión o cambio de titular de servicios, arreglos y muebles básicos', 'Estado de la propiedad y distancia'],
          ['4. Fondo de emergencia', 'Varios meses de gastos fijos, incluida la nueva cuota', 'Estabilidad de tus ingresos'],
        ],
      },
    },
    {
      id: 'parte-no-financiada',
      h2: 'Bloque 1: la parte que no financia el banco',
      paras: [
        'Las entidades prestan un porcentaje del menor valor entre el precio y la tasación. Si la tasación sale por debajo del precio, la diferencia también la ponés vos. Por eso conviene preguntar el porcentaje antes de buscar y dejar un margen por si la tasación sale baja.',
        'Programas como Che Róga Porã tienen además un valor máximo de inmueble por franja de ingresos. Si tu meta es ese programa, empezá por esos topes.',
      ],
    },
    {
      id: 'gastos-operacion',
      h2: 'Bloque 2: gastos de la operación',
      paras: [
        'Al comprar pagás honorarios de escribanía, tasas de inscripción en los Registros Públicos, la tasación que pide la entidad y gastos vinculados al crédito, como seguros y gastos de otorgamiento. Los montos dependen del valor del inmueble y de cada profesional o entidad. En la guía de gastos al comprar una casa de Casa-Libre está el detalle; lo importante acá es que pidas presupuesto por escrito al escribano y a la entidad antes de señar.',
      ],
    },
    {
      id: 'mudanza',
      h2: 'Bloque 3: mudanza y arreglos de entrada',
      paras: [
        'Una casa usada casi siempre pide algo al entrar: pintura, cambio de cerraduras, revisión eléctrica, limpieza de tanque, algún arreglo de plomería. Si la compraste "para refaccionar", ese bloque es grande y conviene presupuestarlo con un profesional antes de comprar.',
        'Sumá el flete, el cambio de titular de ANDE y agua (o la conexión nueva) y lo mínimo para vivir: heladera, cama, cortinas. No hace falta comprar todo al principio, pero sí tener plata para lo que no puede esperar.',
      ],
    },
    {
      id: 'fondo-emergencia',
      h2: 'Bloque 4: el fondo de emergencia',
      paras: [
        'Tener una cuota de 20 o 30 años sin colchón es frágil: un mes sin ingresos o un arreglo grande y empezás atrasado. Una regla práctica muy difundida en finanzas personales es reservar entre tres y seis meses de gastos fijos, incluida la nueva cuota. Si tus ingresos son variables (comercio, trabajo independiente), apuntá al extremo alto.',
      ],
      tip: 'Guardá el fondo de emergencia en una cuenta separada y no lo uses para la entrega inicial. Si para comprar tenés que vaciarlo, todavía no es el momento o la propiedad es demasiado cara.',
    },
    {
      id: 'ejemplo',
      h2: 'Un ejemplo con números hipotéticos',
      paras: [
        'Los números de este ejemplo son inventados para mostrar el cálculo; no son precios de mercado ni condiciones reales de ninguna entidad. Supongamos una casa de Gs. 600.000.000, una entidad que financia el 80% del valor, gastos de operación estimados en 5% del precio, Gs. 15.000.000 para mudanza y arreglos, y gastos fijos del hogar de Gs. 6.000.000 por mes, incluida la cuota.',
      ],
      table: {
        head: ['Concepto', 'Cálculo', 'Monto (Gs.)'],
        rows: [
          ['Parte no financiada', '20% de 600.000.000', '120.000.000'],
          ['Gastos de la operación (supuesto)', '5% de 600.000.000', '30.000.000'],
          ['Mudanza y arreglos', 'Estimación propia', '15.000.000'],
          ['Fondo de emergencia', '4 meses × 6.000.000', '24.000.000'],
          ['Total a ahorrar', '', '189.000.000'],
        ],
      },
    },
    {
      id: 'cuota-ingreso',
      h2: 'La otra mitad: que la cuota entre en tu ingreso',
      paras: [
        'Ahorrar la entrada no alcanza si después la cuota te ahoga. Las entidades fijan un límite de cuota sobre tus ingresos demostrables, pero vos podés ser más prudente: calculá tu presupuesto con la cuota más seguros, sumá los gastos mensuales de la casa (expensas si es un edificio, luz, agua, impuesto inmobiliario anual dividido en meses) y fijate que te sobre algo para ahorrar.',
        'Un buen ejercicio: durante tres a seis meses antes de comprar, separá cada mes el equivalente a la cuota estimada más los gastos nuevos. Si podés hacerlo sin endeudarte, la cuota es realista. Y lo que separaste suma al ahorro.',
      ],
    },
    {
      id: 'como-acelerar',
      h2: 'Cómo llegar antes a la meta',
      bullets: [
        'Mirá propiedades un poco por debajo de tu tope: el ahorro necesario baja en todos los bloques a la vez.',
        'Considerá zonas del Gran Asunción o ciudades cercanas donde el mismo presupuesto rinde más metros.',
        'Si sos elegible, revisá programas con tasas más bajas, como Che Róga Porã.',
        'Negociá con el vendedor quién paga qué gastos y en qué plazos.',
      ],
      paras: [
        'Mientras ahorrás, seguí el mercado: en Casa-Libre podés ver casas y departamentos en venta en el mapa y guardar las que te interesan, también desde la app para iPhone y Android, para entender qué compra tu presupuesto en cada zona.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto es la entrega inicial para comprar una casa en Paraguay?', a: 'Depende del porcentaje que financie la entidad, que varía según la línea y tu perfil. Preguntalo antes de buscar y calculalo sobre el menor valor entre precio y tasación.' },
    { q: '¿Los gastos de escritura entran en el crédito?', a: 'Normalmente no: los gastos de escribanía, inscripción y tasación se pagan con ahorro propio. Pedí presupuesto por escrito al escribano y a la entidad.' },
    { q: '¿Cuántos meses de fondo de emergencia conviene tener?', a: 'Una referencia común en finanzas personales es de tres a seis meses de gastos fijos, incluida la nueva cuota. Con ingresos variables, más cerca de seis.' },
    { q: '¿Puedo usar todo mi ahorro para la entrada?', a: 'No es recomendable. Si después aparece un arreglo o un mes sin ingresos, te atrasás con la cuota. Separá el fondo de emergencia antes de calcular cuánto podés poner.' },
  ],
  sources: [
    { name: 'Che Róga Porã — sitio oficial (topes de valor del inmueble)', publisher: 'Gobierno del Paraguay', url: 'https://www.cherogapora.gov.py/' },
    { name: 'Agencia Financiera de Desarrollo (AFD)', publisher: 'AFD', url: 'https://www.afd.gov.py/' },
    { name: 'AFD: sepa las diferencias entre los créditos Che Róga Porã, Primera Vivienda y Mi Casa', publisher: 'ABC Color', url: 'https://www.abc.com.py/economia/2026/07/28/afd-sepa-las-diferencias-entre-los-creditos-che-roga-pora-primera-vivienda-y-mi-casa/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos e impuestos al comprar' },
    { href: '/guias/comprar-primera-casa', label: 'Guía: cómo comprar tu primera casa' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa', 'comprar-primera-casa'],
  reviewNote: 'El ejemplo usa números hipotéticos (80% financiado, 5% de gastos) claramente marcados; verificar que no se lean como condiciones reales. Confirmar que la regla de 3 a 6 meses de fondo de emergencia se presente como regla práctica, no como dato local.',
};

export default article;
