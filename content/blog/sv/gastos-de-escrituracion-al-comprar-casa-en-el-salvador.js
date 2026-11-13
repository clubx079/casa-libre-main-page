// Blog SV — gastos de escrituración e inscripción al comprar.
const article = {
  slug: 'gastos-de-escrituracion-al-comprar-casa-en-el-salvador',
  title: 'Gastos de escrituración al comprar casa en El Salvador',
  h1: 'Gastos de escrituración al comprar una casa en El Salvador: lista completa',
  description: 'Qué gastos hay además del precio al comprar casa en El Salvador: notario, impuesto de transferencia, inscripción en el CNR, certificaciones, solvencias y, con crédito, hipoteca, avalúo y seguros.',
  category: 'costos-e-impuestos',
  tags: ['escrituración', 'notario', 'cnr', 'gastos', 'comprar'],
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  answer: 'Al comprar una casa en El Salvador, además del precio, el comprador suele pagar: el Impuesto sobre Transferencia de Bienes Raíces (3% sobre el exceso de US$28,571.43), los honorarios del notario por la escritura, los derechos de inscripción en el Registro de la Propiedad Raíz e Hipotecas del CNR y las certificaciones previas. Si compra con crédito se suman la escritura de hipoteca, el avalúo, comisiones y seguros. Pida al notario una cotización por escrito antes de firmar.',
  sections: [
    {
      id: 'lista',
      h2: 'La lista de gastos, de un vistazo',
      table: {
        head: ['Gasto', 'Quién lo paga normalmente', 'Cómo se fija'],
        rows: [
          ['Impuesto sobre Transferencia de Bienes Raíces', 'Comprador', '3% sobre el valor que exceda US$28,571.43'],
          ['Honorarios del notario (compraventa)', 'Se pacta; con frecuencia el comprador', 'Libre acuerdo; pida cotización'],
          ['Inscripción en el CNR', 'Comprador', 'Arancel del registro'],
          ['Certificación extractada u otras certificaciones', 'Quien la pide, usualmente el comprador', 'Tarifa del CNR'],
          ['Solvencia municipal del inmueble', 'Vendedor', 'Debe estar al día antes de escriturar'],
          ['Escritura de hipoteca (si hay crédito)', 'Comprador', 'Honorarios del notario de la entidad'],
          ['Avalúo y seguros (si hay crédito)', 'Comprador', 'Según la entidad'],
        ],
      },
    },
    {
      id: 'notario',
      h2: 'El notario: qué hace y cómo cotizar',
      paras: [
        'En El Salvador la compraventa de un inmueble se formaliza en escritura pública ante notario, que es un abogado autorizado por la Corte Suprema de Justicia para ejercer la función notarial. El notario redacta la escritura, verifica identidades y facultades, revisa los antecedentes registrales y, normalmente, presenta la escritura al CNR para su inscripción.',
        'Sus honorarios se acuerdan con usted. Pida una cotización por escrito que diga qué incluye: estudio de antecedentes, redacción, testimonio, presentación al registro, declaración del impuesto y seguimiento hasta que la escritura salga inscrita.',
      ],
      tip: 'Pregunte si la cotización incluye el seguimiento de la inscripción. Una escritura firmada pero no inscrita no le protege frente a terceros.',
    },
    {
      id: 'registro',
      h2: 'Inscripción en el CNR',
      paras: [
        'La escritura se presenta al Registro de la Propiedad Raíz e Hipotecas, que administra el Centro Nacional de Registros. El registro cobra derechos según su arancel y, antes de inscribir, exige el comprobante de pago del impuesto de transferencia cuando corresponde.',
        'Una vez inscrita, conviene pedir una nueva certificación para confirmar que la casa ya aparece a su nombre y activar los avisos registrales gratuitos del CNR, que le notifican por correo cualquier trámite sobre el inmueble.',
      ],
    },
    {
      id: 'antes',
      h2: 'Certificaciones y solvencias antes de firmar',
      paras: [
        'Antes de escriturar, el notario o usted deberían revisar la situación del inmueble. Según el CNR, citado por la prensa, la certificación extractada resume el nombre del dueño, su porcentaje, la situación legal del inmueble y los documentos en trámite, y se puede pedir en línea.',
      ],
      bullets: [
        'Certificación extractada reciente del inmueble.',
        'Solvencia municipal: confirma que no hay tasas pendientes con la alcaldía.',
        'Recibos de agua y luz al día.',
        'Si la casa está en un residencial con administración, constancia de que no hay cuotas de mantenimiento pendientes.',
      ],
    },
    {
      id: 'credito',
      h2: 'Si compra con crédito',
      paras: [
        'Con crédito, la compraventa y la hipoteca suelen firmarse en el mismo acto. La entidad (banco o FSV) normalmente trabaja con sus notarios, y los honorarios de la hipoteca se suman a sus gastos. Además paga el avalúo y los seguros: de deuda, que cancela el saldo si el deudor fallece o queda inválido, y de daños sobre la vivienda. Pida a la entidad la lista completa de cargos iniciales antes de aceptar la oferta.',
      ],
    },
    {
      id: 'vendedor',
      h2: 'Qué le corresponde al vendedor',
      paras: [
        'El vendedor debe entregar el inmueble con sus tasas municipales y servicios al día y, si tiene una hipoteca, cancelarla (normalmente con parte del precio). Si obtiene una ganancia en la venta, el impuesto sobre esa ganancia es asunto suyo, no del comprador.',
      ],
    },
    {
      id: 'evitar-sorpresas',
      h2: 'Cómo evitar sorpresas',
      steps: [
        'Pida al notario una cotización por escrito con todo incluido.',
        'Calcule el impuesto de transferencia con la fórmula del 3% sobre el exceso.',
        'Pida a la entidad de crédito la lista de gastos iniciales.',
        'Acuerde por escrito con el vendedor quién paga qué.',
        'Reserve un margen extra para imprevistos.',
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Un ejemplo para ordenar la cuenta',
      paras: [
        'Ejemplo hipotético: compra una casa de US$70,000 al contado. El impuesto de transferencia es 3% sobre US$41,428.57 (70,000 − 28,571.43), unos US$1,243. A eso súmele los honorarios del notario según la cotización que le den, los derechos de inscripción del CNR y las certificaciones previas. Si además usa crédito, agregue la escritura de hipoteca, el avalúo y el primer pago de seguros.',
        'La lección: el efectivo que necesita el día de la firma es más que la prima o el precio. Haga la lista completa con su notario antes de comprometerse.',
      ],
    },
    {
      id: 'buscar',
      h2: 'Presupuestar desde el aviso',
      paras: [
        'En Casa-Libre puede ver el precio de cada casa o apartamento, sumarle los gastos de esta lista y preguntar por WhatsApp al vendedor si las solvencias están al día. También desde la app de Casa-Libre para iPhone y Android.',
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cobra un notario por una escritura de compraventa en El Salvador?', a: 'Los honorarios se acuerdan libremente con el notario. Pida varias cotizaciones por escrito y confirme qué incluyen, especialmente la inscripción en el CNR.' },
    { q: '¿Quién paga los gastos de escrituración?', a: 'Normalmente el comprador paga el impuesto de transferencia y la inscripción; los honorarios del notario se pactan. El vendedor entrega solvencias al día y cancela su hipoteca si la tiene.' },
    { q: '¿Cuánto cuesta una certificación extractada del CNR?', a: 'La prensa reportó en 2026 un precio de US$8.86 informado por el CNR. Confirme la tarifa vigente al solicitarla.' },
    { q: '¿Qué pasa si no inscribo la escritura?', a: 'Frente a terceros, el dueño seguiría siendo el vendedor: el inmueble podría ser embargado por sus deudas o vendido de nuevo. Inscribir es parte esencial de la compra.' },
  ],
  sources: [
    { name: 'Ley del Impuesto sobre Transferencia de Bienes Raíces', publisher: 'Justia El Salvador', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-del-impuesto-sobre-transferencia-de-bienes-raices/gdoc' },
    { name: 'Cómo asegurar que tu propiedad esté registrada en El Salvador (certificación extractada y avisos registrales del CNR)', publisher: 'elsalvador.com (31 de marzo de 2026)', url: 'https://www.elsalvador.com/noticias/nacional/verificar-propiedad-el-salvador/1268103/2026/' },
    { name: 'Compraventa de bienes raíces', publisher: 'eRegulations El Salvador', url: 'https://elsalvador.eregulations.org/menu/49?l=es' },
    { name: 'Seguro de deuda de los créditos del FSV', publisher: 'elsalvador.com (15 de julio de 2026)', url: 'https://www.elsalvador.com/dinero-y-negocios/entorno-economico/seguro-deuda-hipoteca-fsv/1283420/2026/' },
  ],
  related: [
    { href: '/propiedades?op=venta&type=casa', label: 'Casas en venta' },
    { href: '/propiedades?op=venta&type=depto', label: 'Apartamentos en venta' },
    { href: '/guias/gastos-al-comprar-una-casa', label: 'Guía: gastos al comprar una casa' },
  ],
  relatedGuias: ['gastos-al-comprar-una-casa'],
  reviewNote: 'Confirmar con un notario: (1) costumbre sobre quién paga honorarios notariales en compraventas; (2) arancel vigente de inscripción del CNR; (3) precio de la certificación extractada (US$8.86 según prensa marzo 2026); (4) si el notario es quien presenta la escritura al CNR habitualmente; (5) que la solvencia municipal es requisito para escriturar.',
};

export default article;
