/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CrLGOSeF.mjs';
import { $ as $$BtnMostrarProductos } from '../../chunks/btn_mostrar_productos_DLat-lpJ.mjs';
import { $ as $$BtnCotizar } from '../../chunks/btn_cotizar_KKicCW_b.mjs';
export { renderers } from '../../renderers.mjs';

const $$CristalTipos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "path": "../", "title": "Tipos de cristal", "descriptions": "cristal flotado, cristal reflectivo, cristal esmerilado, cristal espejo, cristal laminado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10"> <div class="md:w-3/4 mx-auto px-10"> <div class="pb-4 text-center"> <h1 class="
                text-6xl 
                text-yellow-500 
                md:text-6xl 
                mb-5
                font-Bebas-Neue 
                ">Tipos de cristal</h1> ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} <div class="grid md:grid-cols-3 gap-4 mb-10"> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/vidrio-esmerilado.jpg" alt="Vidrio esmerilado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Esmerilado</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/Vidrio-espejo.jpg" alt="Vidrio espejo"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Espejo</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/Vidrio-flotado.jpg" alt="Vidrio flotado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Flotado</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/vidrio-laminado.jpg" alt="Vidrio laminado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Laminado</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/vidrio-reflectivo.jpg" alt="Vidrio reflectivo"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Reflectivo</h2> </div> </div> </div> ${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Cotiza hoy mismo el cristal que necesitas", "message": "Hola! Me interesa m\xE1s informaci\xF3n sobre los vidrios" })} ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} </div> </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-tipos.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-tipos.astro";
const $$url = "/productos/cristal-tipos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CristalTipos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
