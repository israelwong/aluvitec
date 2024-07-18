/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, d as addAttribute } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BB_kwVml.mjs';
import { a as $$BtnMostrarProductos, $ as $$BtnCotizar } from './adicionales_BvWY4n44.mjs';

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

export { $$HerrajesCristal as default, $$file as file, $$url as url };
