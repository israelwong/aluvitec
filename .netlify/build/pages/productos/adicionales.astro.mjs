/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CrLGOSeF.mjs';
import { $ as $$BtnMostrarProductos } from '../../chunks/btn_mostrar_productos_DLat-lpJ.mjs';
import { $ as $$BtnCotizar } from '../../chunks/btn_cotizar_KKicCW_b.mjs';
export { renderers } from '../../renderers.mjs';

const $$Adicionales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Perfiles de aluminio", "descriptions": "acr\xEDlicos, policarbonato, pl\xE1sticos para ba\xF1o, domos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10"> <div class="text-center"> <h1 class="font-Bebas-Neue text-4xl md:text-6xl pb-3 text-yellow-700">Productos adicionales</h1> ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} <div class="md:w-2/3 mx-auto p-5 md:p-0 grid md:grid-cols-2 gap-2 mb-10"> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-acrilico.jpg" alt="Acrilico"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Acrílico</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-domo.jpg" alt="Domos"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Domos</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-plastico-banio.jpg" alt="Plásticos para baño"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Plásticos para baño</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-policarbonato.jpg" alt="Policarbonato"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Policarbonato</h2> </div> </div> </div> ${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Cotizar productos adicionales", "message": "Hola! Estoy quiero cotizar productos adicionales" })} ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/adicionales.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/adicionales.astro";
const $$url = "/productos/adicionales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Adicionales,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
