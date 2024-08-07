/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CrLGOSeF.mjs';
import { $ as $$BtnMostrarProductos } from '../../chunks/btn_mostrar_productos_DLat-lpJ.mjs';
import { $ as $$BtnCotizar } from '../../chunks/btn_cotizar_KKicCW_b.mjs';
export { renderers } from '../../renderers.mjs';

const $$CristalProcesos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Procesos en cristal", "descriptions": "Cristal templado, cristal canto pulido, cristal con grabado, cristal con bisel, cristal cenefas, cristal barrenos, cristal con saques, cristal esmerilado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10"> <div class="text-center"> <h1 class="font-Bebas-Neue text-4xl md:text-6xl pb-5 text-yellow-700">Procesos en cristal</h1> ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} <div class="md:w-3/4 mx-auto grid md:grid-cols-4 gap-4 mb-10 p-5 md:p-0"> <div class="relative max-w-xl mx-auto "> <img src="../images/producto/proceso-vidrio-barreno.jpg" alt="Vidrio barrenado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Barrenado</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/proceso-vidrio-biselado.jpg" alt="Vidrio biselado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Biselado</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/proceso-vidrio-canto-pulido.jpg" alt="Vidrio canto pulido"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Canto pulido</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/proceso-vidrio-cenefa.jpg" alt="Vidrio cenefa"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Cenefa</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/proceso-vidrio-grabado.jpg" alt="Vidrio grabado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Grabado</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/proceso-vidrio-saques.jpg" alt="Vidrio saque"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Saque</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/proceso-vidrio-templado.jpg" alt="Vidrio templado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Templado</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/vidrio-esmerilado.jpg" alt="Vidrio esmerilado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Esmerilado</h2> </div> </div> </div> ${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Cotizar proceso en cristal", "message": "Hola! Me interessa el servicio de proceso en cristal" })} ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-procesos.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-procesos.astro";
const $$url = "/productos/cristal-procesos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CristalProcesos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
