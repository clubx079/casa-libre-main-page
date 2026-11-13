// Registry of UY blog articles (casa-libre.com/blog). One file per article; add
// new ones here. Same file shape as content/blog/py/*.js; internal links are
// relative paths of the country site (/propiedades?…, /vender, /guias/…) and
// lib/blog.js makes them absolute (https://uy.casa-libre.com) with UTM tags.
// Slugs must be unique across countries.
import alquilarSinGarantiaPorLaLuc from './alquilar-sin-garantia-por-la-luc';
import boletoDeReservaYPromesaDeCompraventa from './boleto-de-reserva-y-promesa-de-compraventa';
import cambioDeTitularUteOseYAntel from './cambio-de-titular-ute-ose-y-antel';
import comoElegirBarrioEnMontevideo from './como-elegir-barrio-en-montevideo';
import comprarApartamentoEnPozoEnMontevideo from './comprar-apartamento-en-pozo-en-montevideo';
import comprarCasaEnUruguaySiendoExtranjero from './comprar-casa-en-uruguay-siendo-extranjero';
import contratoDeAlquilerEnUruguayQueRevisar from './contrato-de-alquiler-en-uruguay-que-revisar';
import contribucionInmobiliariaQuienLaPaga from './contribucion-inmobiliaria-quien-la-paga';
import cooperativasDeViviendaComoFuncionan from './cooperativas-de-vivienda-como-funcionan';
import creditoHipotecarioEnUruguayComoFunciona from './credito-hipotecario-en-uruguay-como-funciona';
import depositoDeGarantiaEnElBhu from './deposito-de-garantia-en-el-bhu';
import estudioDeTitulosYCertificadosAlComprar from './estudio-de-titulos-y-certificados-al-comprar';
import garantiaDeAlquilerEnUruguayOpciones from './garantia-de-alquiler-en-uruguay-opciones';
import gastosComunesQueIncluyenYQuienPaga from './gastos-comunes-que-incluyen-y-quien-paga';
import gastosDeEscrituracionEItpEnUruguay from './gastos-de-escrituracion-e-itp-en-uruguay';
import padronCedulaCatastralYPlanoDeMensura from './padron-cedula-catastral-y-plano-de-mensura';
import requisitosParaAlquilarEnUruguay from './requisitos-para-alquilar-en-uruguay';
import venderUnaPropiedadHeredadaEnUruguay from './vender-una-propiedad-heredada-en-uruguay';
import viviendaPromovidaQueEs from './vivienda-promovida-que-es';
import vivirEnCiudadDeLaCostaYCanelones from './vivir-en-ciudad-de-la-costa-y-canelones';

const POSTS = [
  alquilarSinGarantiaPorLaLuc,
  boletoDeReservaYPromesaDeCompraventa,
  cambioDeTitularUteOseYAntel,
  comoElegirBarrioEnMontevideo,
  comprarApartamentoEnPozoEnMontevideo,
  comprarCasaEnUruguaySiendoExtranjero,
  contratoDeAlquilerEnUruguayQueRevisar,
  contribucionInmobiliariaQuienLaPaga,
  cooperativasDeViviendaComoFuncionan,
  creditoHipotecarioEnUruguayComoFunciona,
  depositoDeGarantiaEnElBhu,
  estudioDeTitulosYCertificadosAlComprar,
  garantiaDeAlquilerEnUruguayOpciones,
  gastosComunesQueIncluyenYQuienPaga,
  gastosDeEscrituracionEItpEnUruguay,
  padronCedulaCatastralYPlanoDeMensura,
  requisitosParaAlquilarEnUruguay,
  venderUnaPropiedadHeredadaEnUruguay,
  viviendaPromovidaQueEs,
  vivirEnCiudadDeLaCostaYCanelones,
];

export default POSTS;
