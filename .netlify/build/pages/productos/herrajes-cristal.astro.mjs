/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CrLGOSeF.mjs';
import { $ as $$BtnMostrarProductos } from '../../chunks/btn_mostrar_productos_DLat-lpJ.mjs';
import { $ as $$BtnCotizar } from '../../chunks/btn_cotizar_aJywLNHX.mjs';
export { renderers } from '../../renderers.mjs';

const $$HerrajesCristal = createComponent(($$result, $$props, $$slots) => {
  const cantidad = 20;
  let imagenes = [];
  for (let i = 1; i <= cantidad; i++) {
    let img = `../images/producto/herrajes-cristal/${i}.jpg`;
    imagenes.push(img);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Perfiles de aluminio", "descriptions": "Herrajes para cristal templado, Herrajes para canceler\xEDa de aluminio nacional, Herrajes para canceler\xEDa de aluminio nacional espa\xF1ola" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" mx-auto py-10"> <div class="text-center"> <div class="container mx-auto"> <h1 class="font-Bebas-Neue text-4xl md:text-6xl pb-3 text-yellow-700">
Herrajes Cristal Templado
</h1> ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} <!-- <Carrusel client:load/> --> <div class="grid md:grid-cols-4 md:p-2 grid-cols-2 gap-3 "> ${imagenes.map((item) => renderTemplate`<img${addAttribute(item, "src")}>`)} </div> </div> <div class="container mx-auto"> ${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Cotizar herrajes de cristal templado", "message": "Hola! Me interesa cotizar herrajes de cristal templado" })} ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} </div> </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes-cristal.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes-cristal.astro";
const $$url = "/productos/herrajes-cristal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$HerrajesCristal,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
