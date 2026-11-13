// Blog PY — cómo saber si un terreno tiene dueño o es fiscal (lado comprador).
const article = {
  slug: 'como-saber-si-un-terreno-tiene-dueno',
  title: 'Cómo saber si un terreno tiene dueño o es fiscal en Paraguay',
  h1: 'Cómo saber si un terreno tiene dueño o es fiscal antes de comprarlo',
  description: 'Catastro, Registros Públicos, INDERT y escribano: cómo verificar quién es el dueño de un terreno en Paraguay, si es fiscal o si tiene hipotecas antes de pagar.',
  category: 'comprar',
  tags: ['terreno', 'título', 'catastro', 'registros públicos', 'compra'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Para saber si un terreno tiene dueño en Paraguay se cruzan dos registros: el catastro (Servicio Nacional de Catastro), que identifica el inmueble por su cuenta corriente catastral o padrón, y la Dirección General de los Registros Públicos, donde está inscripto el título con el nombre del titular. El informe de condición de dominio, que normalmente pide un escribano, muestra quién es el dueño y si hay hipotecas o embargos. Si el terreno no aparece inscripto a nombre de una persona, puede ser fiscal o municipal, o estar en un asentamiento del INDERT.',
  sections: [
    {
      id: 'por-que',
      h2: 'Por qué no alcanza con lo que dice el vendedor',
      paras: [
        'Un terreno baldío no tiene una casa que demuestre quién vive ahí. Por eso es el tipo de inmueble donde más aparecen problemas: lotes que en realidad son del Estado o de la municipalidad, títulos superpuestos (dos personas con papeles sobre la misma tierra), sucesiones sin terminar o "derechos" sobre una ocupación que no se pueden escriturar.',
        'La única forma seria de saber quién es el dueño es verificar en los registros oficiales, y dejar que un escribano y, si hace falta, un agrimensor confirmen que el terreno que ves en el lugar es el mismo que figura en los papeles.',
      ],
    },
    {
      id: 'catastro',
      h2: 'Paso 1: identificar el inmueble en el catastro',
      paras: [
        'Todo inmueble registrado tiene un identificador catastral: en zonas urbanas, la cuenta corriente catastral; en zonas rurales, el padrón. Ese número aparece en la boleta del impuesto inmobiliario y en el título. Pedíselo al vendedor desde la primera conversación: si no lo tiene o no quiere darlo, es una señal de alerta.',
        'El Servicio Nacional de Catastro registra los datos físicos del inmueble (ubicación, superficie, medidas) y su valuación fiscal, que es la base del impuesto inmobiliario. Que el terreno figure en el catastro no prueba por sí solo quién es el dueño, pero permite ubicar con precisión el inmueble del que se habla y detectar diferencias entre lo que se ofrece y lo que está registrado.',
      ],
    },
    {
      id: 'registros-publicos',
      h2: 'Paso 2: el título y el informe de condición de dominio',
      paras: [
        'La titularidad se inscribe en la Dirección General de los Registros Públicos, que depende del Poder Judicial. El documento clave es el informe (o certificado) de condición de dominio: indica a nombre de quién está inscripto el inmueble, por qué finca o matrícula se lo identifica y si pesan sobre él hipotecas, embargos, inhibiciones u otras medidas.',
        'En la práctica, ese informe lo pide el escribano. Los escribanos y abogados pueden solicitarlo en línea a través del Sistema de Gestión Registral (SIGRE) del Poder Judicial, además del trámite presencial. Se paga una tasa judicial y la respuesta indica la situación del inmueble a esa fecha.',
      ],
      bullets: [
        'El nombre del titular coincide con la cédula de quien vende.',
        'No hay hipotecas ni embargos, o se cancelan antes o en el mismo acto de la escritura.',
        'La superficie y medidas coinciden con lo que te muestran y con el catastro.',
        'Si el titular falleció, la sucesión está terminada y adjudicó el inmueble a quien vende.',
      ],
    },
    {
      id: 'run',
      h2: 'El nuevo sistema unificado de registro y catastro',
      paras: [
        'La Ley N° 7424/2025 creó el Sistema Nacional Unificado Registral y Catastral y el Registro Unificado Nacional (RUN), con el objetivo de integrar la información del registro de la propiedad y del catastro. El Poder Judicial ya presentó un certificado catastro-registral inmobiliario digital que reúne ambas informaciones en un solo trámite.',
        'Como el sistema está en implementación, preguntale a tu escribano qué certificados corresponden hoy para tu caso. Lo importante para vos no cambia: la información catastral y la registral tienen que coincidir.',
      ],
    },
    {
      id: 'fiscal',
      h2: 'Cuándo un terreno puede ser fiscal o municipal',
      paras: [
        'Si el terreno no aparece inscripto a nombre de una persona, o el vendedor solo tiene un papel de "derechos", una constancia de ocupación o un recibo de compra anterior, el inmueble puede ser de dominio del Estado o de la municipalidad. También existen tierras que forman parte de asentamientos administrados por el Instituto Nacional de Desarrollo Rural y de la Tierra (INDERT), que tienen sus propias reglas de adjudicación y transferencia.',
        'Comprar "derechos" sobre un terreno así no te convierte en dueño. En el mejor caso te deja en el lugar del ocupante anterior para iniciar una regularización larga y sin garantía de resultado. Si el precio es muy bajo y no hay título, ese es casi siempre el motivo.',
      ],
      tip: 'Desconfiá de frases como "el título sale en unos meses" o "tiene todos los derechos, solo falta escriturar". Antes de pagar, pedí que tu escribano confirme si hay un título inscripto a nombre del vendedor.',
    },
    {
      id: 'en-el-lugar',
      h2: 'Paso 3: verificar en el terreno',
      paras: [
        'Los papeles pueden estar en orden y aun así no coincidir con lo que te muestran en el lugar. Antes de comprar, sobre todo en lotes grandes, rurales o sin cercar, conviene que un agrimensor ubique el terreno con las medidas del título y verifique los mojones. Hablá también con los vecinos: suelen saber si hay conflictos de límites o si alguien más reclama el lote.',
      ],
      bullets: [
        '¿Hay alguien ocupando el terreno o usándolo como paso?',
        '¿Las medidas en el lugar coinciden con las del título?',
        '¿Tiene salida a calle pública?',
        '¿Hay servicios (ANDE, agua) o habría que llevarlos?',
      ],
    },
    {
      id: 'extranjeros-frontera',
      h2: 'Si sos extranjero: la zona de seguridad fronteriza',
      paras: [
        'La Ley N° 2532/2005 establece una zona de seguridad fronteriza de 50 kilómetros junto a las fronteras terrestres y fluviales del país. Dentro de esa franja, los ciudadanos de países limítrofes, y las sociedades integradas mayoritariamente por ellos, no pueden ser propietarios, condóminos ni usufructuarios de inmuebles rurales, salvo autorización por decreto del Poder Ejecutivo. Si estás en ese caso y el terreno es rural, consultalo con un escribano antes de cualquier pago.',
      ],
    },
    {
      id: 'lista',
      h2: 'Lista corta antes de pagar una seña por un terreno',
      steps: [
        'Pedí la cuenta corriente catastral o el padrón y una copia del título.',
        'Pedí la última boleta del impuesto inmobiliario.',
        'Que tu escribano solicite el informe de condición de dominio.',
        'Si el lote es grande o no está cercado, contratá un agrimensor.',
        'Recién con todo en orden, firmá la seña con un recibo o boleto que indique las condiciones.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Buscá terrenos con información clara',
      paras: [
        'En Casa-Libre podés ver terrenos en venta en el mapa y preguntarle al vendedor por WhatsApp, desde el primer mensaje, si el lote tiene título y cuenta corriente catastral. También desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cómo sé si un terreno tiene dueño en Paraguay?', a: 'Con el informe de condición de dominio de la Dirección General de los Registros Públicos, que normalmente pide un escribano. Indica el titular inscripto y si hay hipotecas o embargos. Se complementa con los datos del Servicio Nacional de Catastro.' },
    { q: '¿Cómo sé si un terreno es fiscal?', a: 'Si no hay un título inscripto a nombre de una persona y solo existen "derechos" o constancias de ocupación, puede ser fiscal, municipal o parte de un asentamiento del INDERT. Un escribano puede confirmarlo con los registros.' },
    { q: '¿Qué es la cuenta corriente catastral?', a: 'Es el número con el que se identifica un inmueble urbano en el catastro y en la boleta del impuesto inmobiliario. En zonas rurales se usa el padrón.' },
    { q: '¿Un extranjero puede comprar un terreno en Paraguay?', a: 'En general sí. La excepción principal es la Ley 2532/2005: los ciudadanos de países limítrofes no pueden ser propietarios de inmuebles rurales en la franja de 50 km de frontera, salvo autorización por decreto.' },
  ],
  sources: [
    { name: 'Dirección General de los Registros Públicos', publisher: 'Poder Judicial del Paraguay', url: 'https://www.pj.gov.py/contenido/154-direccion-general-de-los-registros-publicos/206' },
    { name: 'Sistema de Gestión Registral (SIGRE)', publisher: 'Poder Judicial del Paraguay', url: 'https://www.pj.gov.py/contenido/3324-sistema-de-gestion-registral-sigre/3325' },
    { name: 'RUN: certificado catastro-registral inmobiliario digital', publisher: 'Poder Judicial del Paraguay', url: 'https://www.pj.gov.py/notas/30592-run-presentan-el-certificado-catastro-registral-inmobiliario-digital' },
    { name: 'Ley N° 7424/2025 — Sistema Nacional Unificado Registral y Catastral', publisher: 'BACN', url: 'https://www.bacn.gov.py/leyes-paraguayas/12672/ley-n-7424-2025-que-crea-el-sistema-nacional-unificado-registral-y-catastral-y-el-registro-unificado-nacional' },
    { name: 'Ley N° 2532/2005 — Zona de seguridad fronteriza', publisher: 'BACN', url: 'https://www.bacn.gov.py/leyes-paraguayas/4025/ley-n-2532-establece-la-zona-de-seguridad-fronteriza-de-la-republica-del-paraguay' },
    { name: 'Servicio Nacional de Catastro', publisher: 'Gobierno del Paraguay', url: 'https://www.catastro.gov.py/' },
    { name: 'Instituto Nacional de Desarrollo Rural y de la Tierra (INDERT)', publisher: 'INDERT', url: 'https://www.indert.gov.py/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=terreno', label: 'Terrenos en venta' },
    { href: '/guias/documentos-para-vender-un-inmueble', label: 'Guía: documentos de un inmueble' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar' },
  ],
  relatedGuias: ['documentos-para-vender-un-inmueble', 'gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar con un escribano: (1) que hoy el Servicio Nacional de Catastro siga bajo el Ministerio de Economía o haya pasado al sistema de la Ley 7424/2025, y qué certificado corresponde (RUN vs. condición de dominio + catastral); (2) que el SIGRE siga habilitado para escribanos/abogados; (3) reglas actuales del INDERT para transferir lotes de asentamientos; (4) que la excepción por decreto de la Ley 2532 siga vigente tal como se describe.',
};

export default article;
