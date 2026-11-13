// Registry of SV blog articles (casa-libre.com/blog). One file per article; add
// new ones here. lib/blog.js is the only reader (routes, sitemap, llms.txt).
// Same file shape as content/blog/py/*.js; internal links are relative paths of
// the country site (/propiedades?…, /propiedades-en/…, /guias/…) — lib/blog.js
// makes them absolute (https://sv.casa-libre.com) with UTM tags. Slugs must be
// unique across countries.
import cambioDeNombreReciboAndaYLuzElSalvador from './cambio-de-nombre-recibo-anda-y-luz-el-salvador';
import comoVerificarUnaPropiedadEnElCnr from './como-verificar-una-propiedad-en-el-cnr';
import comprarCasaDePlayaEnElSalvador from './comprar-casa-de-playa-en-el-salvador';
import comprarCasaEnElSalvadorDesdeEstadosUnidos from './comprar-casa-en-el-salvador-desde-estados-unidos';
import comprarElDerechoDeUnaCasaElSalvador from './comprar-el-derecho-de-una-casa-el-salvador';
import comprarTerrenoEnElSalvador from './comprar-terreno-en-el-salvador';
import creditoFondoSocialParaLaViviendaRequisitos from './credito-fondo-social-para-la-vivienda-requisitos';
import creditoHipotecarioEnElSalvadorComoFunciona from './credito-hipotecario-en-el-salvador-como-funciona';
import cuantoCuestaAlquilarUnaCasaEnElSalvador from './cuanto-cuesta-alquilar-una-casa-en-el-salvador';
import cuantoPuedoFinanciarParaUnaCasaElSalvador from './cuanto-puedo-financiar-para-una-casa-el-salvador';
import dondeVivirEnElSalvadorComoElegirZona from './donde-vivir-en-el-salvador-como-elegir-zona';
import escrituraDeCompraventaElSalvadorQueRevisar from './escritura-de-compraventa-el-salvador-que-revisar';
import gastosDeEscrituracionAlComprarCasaEnElSalvador from './gastos-de-escrituracion-al-comprar-casa-en-el-salvador';
import gastosMensualesDeUnaCasaEnElSalvador from './gastos-mensuales-de-una-casa-en-el-salvador';
import impuestoTransferenciaBienesRaicesElSalvador from './impuesto-transferencia-bienes-raices-el-salvador';
import leyDeInquilinatoElSalvadorDerechosDelInquilino from './ley-de-inquilinato-el-salvador-derechos-del-inquilino';
import poderEspecialDesdeElExteriorElSalvador from './poder-especial-desde-el-exterior-el-salvador';
import requisitosParaAlquilarUnaCasaEnElSalvador from './requisitos-para-alquilar-una-casa-en-el-salvador';
import venderCasaEnElSalvadorRequisitosEImpuestos from './vender-casa-en-el-salvador-requisitos-e-impuestos';
import vivirEnElGranSanSalvadorComoCompararMunicipios from './vivir-en-el-gran-san-salvador-como-comparar-municipios';

const POSTS = [
  cambioDeNombreReciboAndaYLuzElSalvador,
  comoVerificarUnaPropiedadEnElCnr,
  comprarCasaDePlayaEnElSalvador,
  comprarCasaEnElSalvadorDesdeEstadosUnidos,
  comprarElDerechoDeUnaCasaElSalvador,
  comprarTerrenoEnElSalvador,
  creditoFondoSocialParaLaViviendaRequisitos,
  creditoHipotecarioEnElSalvadorComoFunciona,
  cuantoCuestaAlquilarUnaCasaEnElSalvador,
  cuantoPuedoFinanciarParaUnaCasaElSalvador,
  dondeVivirEnElSalvadorComoElegirZona,
  escrituraDeCompraventaElSalvadorQueRevisar,
  gastosDeEscrituracionAlComprarCasaEnElSalvador,
  gastosMensualesDeUnaCasaEnElSalvador,
  impuestoTransferenciaBienesRaicesElSalvador,
  leyDeInquilinatoElSalvadorDerechosDelInquilino,
  poderEspecialDesdeElExteriorElSalvador,
  requisitosParaAlquilarUnaCasaEnElSalvador,
  venderCasaEnElSalvadorRequisitosEImpuestos,
  vivirEnElGranSanSalvadorComoCompararMunicipios,
];

export default POSTS;
