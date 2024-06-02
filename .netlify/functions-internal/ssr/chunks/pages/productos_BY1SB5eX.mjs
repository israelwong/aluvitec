/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_Cc66P6_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_DrufkMNl.mjs';

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>
Productos
</h1> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos.astro";
const $$url = "/productos";

export { $$Productos as default, $$file as file, $$url as url };
