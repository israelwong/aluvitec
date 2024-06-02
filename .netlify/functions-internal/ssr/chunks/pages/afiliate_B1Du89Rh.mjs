/* empty css                             */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderComponent, g as renderSlot, h as createAstro, m as maybeRenderHead } from '../astro_DCL6OqqE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

function Menu() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: " p-3 flex items-stretch", children: [
    /* @__PURE__ */ jsx("a", { href: "./", children: "Inicio" }),
    /* @__PURE__ */ jsx("a", { href: "./nosotros", children: "Nosotros" }),
    /* @__PURE__ */ jsx("a", { href: "./contacto", children: "Contacto" })
  ] }) });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    descriptions
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark:bg-black text-gray-200"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="descriptions"${addAttribute(descriptions, "content")}><title>Aluvitec | ${title} </title>${renderHead()}</head> <body> <!-- <ViewTransitions /> --> ${renderComponent($$result, "Menu", Menu, {})} <hr> <main class="mx-auto container"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Layout.astro", void 0);

const $$Afiliate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Afiliate</h1> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliate.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliate.astro";
const $$url = "/afiliate";

const afiliate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Afiliate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, afiliate as a };
