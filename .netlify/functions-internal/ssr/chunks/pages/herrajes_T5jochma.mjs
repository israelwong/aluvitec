/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BNRg56sw.mjs';
import { $ as $$BtnMostrarProductos, a as $$BtnCotizar } from './adicionales_9aFSVYSw.mjs';

const $$Herrajes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Perfiles de aluminio", "descriptions": "Herrajes para cristal templado, Herrajes para canceler\xEDa de aluminio nacional, Herrajes para canceler\xEDa de aluminio nacional espa\xF1ola" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10"> <div class="text-center"> <h1 class="font-Bebas-Neue text-4xl md:text-6xl pb-3 text-yellow-700">Herrajes</h1> ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})}
Herrajes para cristal templado, Herrajes para cancelería de aluminio nacional y española
${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Cotizar herrajes", "message": "Hola! Me interesa cotizar herrajes " })} ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes.astro";
const $$url = "/productos/herrajes";

export { $$Herrajes as default, $$file as file, $$url as url };
