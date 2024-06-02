/* empty css                               */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_Cc66P6_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script data-astro-rerun src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer><\/script> ', '<div class="antialiased text-gray-200 bg-gray-900"> <div class="w-full text-gray-100"> <div x-data="{ open: true }" class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"> <div class="flex flex-row items-center justify-between p-3"> <a href="./"> <img src="./images/logo/logo_vector_blanco.svg" alt="aluvitec"', `> </a> <span class="md:ps-3 pt-2"> <h1 class="md:text-2xl md:items-center uppercase text-start font-bold ">
Aluminio y vidrio Tec\xE1mac
</h1> <p class="md:text-sm text-xs text-gray-400 uppercase">Distribuidores mayoreo menudeo</p> </span> <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open"> <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"> <path x-show="open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path> <path x-show="!open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> </div> <nav :class="{'flex': !open, 'hidden': open}" class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"> <a class="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="./">Principal</a> <a class="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="./nosotros">Nosotros</a> <a class="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="./productos">Productos</a> <a class="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="./afiliacion">Afiliaci\xF3n</a> <a class="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="./contacto">Contacto</a> </nav> </div> </div> </div>`])), maybeRenderHead(), addAttribute(70, "width"));
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Menu.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    descriptions
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="bg-black text-gray-300"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="descriptions"${addAttribute(descriptions, "content")}><title>Aluvitec | ${title} </title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class=""> ${renderComponent($$result, "Menu", $$Menu, {})} <main class="mx-auto container"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Layout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina no encontrada" }, { "default": ($$result2) => renderTemplate`
Not found
` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/404.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
