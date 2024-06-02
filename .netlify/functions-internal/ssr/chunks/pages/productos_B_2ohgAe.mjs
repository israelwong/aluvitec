/* empty css                             */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, h as createAstro, f as renderComponent } from '../astro_DCL6OqqE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './afiliate_B1Du89Rh.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title = "no definido", description = "no definido" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h1> ${title} </h1> <p> ${description} </p> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Card.astro", void 0);

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>
Productos
</h1> ${renderComponent($$result2, "Card", $$Card, { "title": "Producto A", "description": "lorem ips" })} ${renderComponent($$result2, "Card", $$Card, { "title": "Producto B", "description": "lorem " })} ${renderComponent($$result2, "Card", $$Card, {})} ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos.astro";
const $$url = "/productos";

export { $$Productos as default, $$file as file, $$url as url };
