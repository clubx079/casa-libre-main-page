// Registry of BO blog articles (casa-libre.com/blog). One file per article; add
// new ones here. lib/blog.js is the only reader (routes, sitemap, llms.txt).
// Write internal links as relative paths of the country site (/propiedades?…,
// /vender, /guias/…); lib/blog.js makes them absolute on casa-libre.com.bo with
// UTM tags. Slugs must be unique across countries.
import agenciaEstatalDeViviendaProgramas from './agencia-estatal-de-vivienda-programas';
import anticreticoQueEsYComoFunciona from './anticretico-que-es-y-como-funciona';
import comprarCasaEnBoliviaRequisitosYPasos from './comprar-casa-en-bolivia-requisitos-y-pasos';
import comprarDepartamentoEnPreventaBolivia from './comprar-departamento-en-preventa-bolivia';
import comprarLoteEnBoliviaQueRevisar from './comprar-lote-en-bolivia-que-revisar';
import contratoDeAlquilerEnBoliviaDerechosDelInquilino from './contrato-de-alquiler-en-bolivia-derechos-del-inquilino';
import contratoDeAnticreticoQueRevisarAntesDeFirmar from './contrato-de-anticretico-que-revisar-antes-de-firmar';
import creditoDeViviendaSocialBolivia from './credito-de-vivienda-social-bolivia';
import creditoHipotecarioEnBoliviaComoFunciona from './credito-hipotecario-en-bolivia-como-funciona';
import dolaresOBolivianosAlComprarOAlquilar from './dolares-o-bolivianos-al-comprar-o-alquilar';
import extranjeroPuedeComprarCasaEnBolivia from './extranjero-puede-comprar-casa-en-bolivia';
import folioRealEnBoliviaQueEsYComoObtenerlo from './folio-real-en-bolivia-que-es-y-como-obtenerlo';
import impuestoALaPropiedadDeInmueblesBolivia from './impuesto-a-la-propiedad-de-inmuebles-bolivia';
import impuestoALaTransferenciaDeInmueblesBolivia from './impuesto-a-la-transferencia-de-inmuebles-bolivia';
import planoAprobadoYCatastroMunicipalBolivia from './plano-aprobado-y-catastro-municipal-bolivia';
import requisitosParaAlquilarEnBolivia from './requisitos-para-alquilar-en-bolivia';
import requisitosParaVenderUnaCasaEnBolivia from './requisitos-para-vender-una-casa-en-bolivia';
import transferenciaDeInmuebleEnBoliviaPasoAPaso from './transferencia-de-inmueble-en-bolivia-paso-a-paso';
import vivirEnLaPazOElAltoComoElegirZona from './vivir-en-la-paz-o-el-alto-como-elegir-zona';
import vivirEnSantaCruzDeLaSierraComoElegirZona from './vivir-en-santa-cruz-de-la-sierra-como-elegir-zona';

const POSTS = [
  agenciaEstatalDeViviendaProgramas,
  anticreticoQueEsYComoFunciona,
  comprarCasaEnBoliviaRequisitosYPasos,
  comprarDepartamentoEnPreventaBolivia,
  comprarLoteEnBoliviaQueRevisar,
  contratoDeAlquilerEnBoliviaDerechosDelInquilino,
  contratoDeAnticreticoQueRevisarAntesDeFirmar,
  creditoDeViviendaSocialBolivia,
  creditoHipotecarioEnBoliviaComoFunciona,
  dolaresOBolivianosAlComprarOAlquilar,
  extranjeroPuedeComprarCasaEnBolivia,
  folioRealEnBoliviaQueEsYComoObtenerlo,
  impuestoALaPropiedadDeInmueblesBolivia,
  impuestoALaTransferenciaDeInmueblesBolivia,
  planoAprobadoYCatastroMunicipalBolivia,
  requisitosParaAlquilarEnBolivia,
  requisitosParaVenderUnaCasaEnBolivia,
  transferenciaDeInmuebleEnBoliviaPasoAPaso,
  vivirEnLaPazOElAltoComoElegirZona,
  vivirEnSantaCruzDeLaSierraComoElegirZona,
];

export default POSTS;
