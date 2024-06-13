/* empty css                               */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, m as maybeRenderHead, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_CLk474lC.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Menu;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  const active = "px-2 py-2 mt-2 text-base font-normal text-white";
  const noactive = "px-2 py-2 mt-2 text-base font-normal text-gray-500 transition-all duration-200 hover:text-white";
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script data-astro-rerun src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer><\/script> ', '<div class="antialiased text-gray-200 bg-zinc-950"> <div class="w-full text-gray-100"> <div x-data="{ open: true }" class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"> <div class="flex flex-row items-center justify-between p-3"> <a href="./"> <img src="./images/logo/logo_vector_blanco.svg" alt="aluvitec"', `> </a> <span class="md:ps-3 pt-1"> <h1 class="md:text-2xl md:items-center uppercase text-start font-bold text-zinc-400 ">
Aluminio y vidrio Tec\xE1mac
</h1> <p class="md:text-sm text-xs text-gray-400 uppercase">Distribuidores mayoreo menudeo</p> </span> <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open"> <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"> <path x-show="open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path> <path x-show="!open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> </div> <nav :class="{'flex': !open, 'hidden': open}" class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row pe-4"> <a`, ' href="./">Principal</a> <a', ' href="./nosotros">Nosotros</a> <a', ' href="./productos">Productos</a> <a', ' href="./contacto">Contacto</a> </nav> <div class="relative inline-flex items-center justify-center group hidden md:block"> <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div> <a href="./" title="" class="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">Afiliate</a> </div> </div> </div> </div>'])), maybeRenderHead(), addAttribute(70, "width"), addAttribute(currentPath === "" ? active : noactive, "class"), addAttribute(currentPath === "nosotros" ? active : noactive, "class"), addAttribute(currentPath === "productos" ? active : noactive, "class"), addAttribute(currentPath === "contacto" ? active : noactive, "class"));
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Menu.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto w-screen bg-zinc-900 p-12"> <div class="container"> <div class="grid md:grid-cols-4 gap-5"> <!-- //! Nuestros productos --> <div class="md:col-span-2 order-2 md:order-1"> <h1 class="font-Bebas-Neue text-3xl pb-4 text-yellow-600">Nuestros productos</h1> <div class="grid md:grid-cols-2 gap-x-5 gap-y-8"> <div> <div class="mb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Tipos de cristal</h3> <ul class="list-disc pl-5 text-sm"> <li><a target="_self" href="#">Flotado</a></li> <li><a target="_self" href="#">Reflectivo</a></li> <li><a target="_self" href="#">Esmerilado</a></li> <li><a target="_self" href="#">Espejo</a></li> <li><a target="_self" href="#">Laminado</a></li> </ul> </div> <div class=""> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Procesos en cristal</h3> <ul class="list-disc pl-5 text-sm"> <li><a href="#" target="_self">Templado</a></li> <li><a href="#" target="_self">Canto pulido</a></li> <li><a href="#" target="_self">Grabado</a></li> <li><a href="#" target="_self">Bisel</a></li> <li><a href="#" target="_self">Cenefas</a></li> <li><a href="#" target="_self">Barrenos</a></li> <li><a href="#" target="_self">Saques</a></li> <li><a href="#" target="_self">Esmerilados</a></li> </ul> </div> </div> <div> <div class="pb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Perfiles de aluminio</h3> <ul class="list-disc pl-5 text-sm"> <li><a href="#" target="_self">Línea nacional</a></li> <li><a href="#" target="_self">Línea española</a></li> <li><a href="#" target="_self">Venta al corte</a></li> <li><a href="#" target="_self">Colores blanco, natural, champagne, BTE, bronce, nogal</a></li> </ul> </div> <div class="pb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Herrajes</h3> <ul class="list-disc pl-5 text-sm"> <li><a href="#" target="_blank">Para cristal templado</a></li> <li><a href="#" target="_blank">Para cancelería de aluminio nacional y española</a></li> </ul> </div> <div class="pb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Productos adicionales</h3> <ul class="list-disc pl-5 text-sm"> <li><a href="#" target="_blank">Acrílicos</a></li> <li><a href="#" target="_blank">Policarbonato</a></li> <li><a href="#" target="_blank">Plásticos para baño</a></li> <li><a href="#" target="_blank">Domos</a></li> </ul> </div> </div> </div> </div> <!--//! Contacto --> <div class="col-span-2 order-1 md:order-2"> <h1 class="font-Bebas-Neue text-3xl pb-4 text-yellow-600">Contactanos hoy mismo</h1> <div class="grid md:grid-cols-2 gap-4"> <div> <div class="relative w-full h-96"> <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.3584712609995!2d-98.98006178844165!3d19.697356732094352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed19a652adbd%3A0x37f45662d04a2e0a!2sALUVITEC!5e0!3m2!1ses-419!2smx!4v1718233397884!5m2!1ses-419!2smx" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe> </div> </div> <div> <div> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Dirección</h3> <p class="pb-5 text-sm">
Temascalcingo LT 24, Col Hueyotencotl, Tecámac. Estado de
                            México. <span class="text-yellow-600">Estamos detrás de Power Center Tecámac, junto a Conalep</span> </p> </div> <div class="pb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Teléfonos</h3> <ul class="list-disc pl-5 text-sm"> <li><a href="" target="_self">5936 0365</a></li> <li><a href="" target="_self">5936 2789</a></li> <li><a href="" target="_self">5936 3562</a></li> <li><a href="" target="_self">6359 3952</a></li> </ul> </div> <div> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Horarios de liunes a viernes</h3> <ul class="list-disc pl-5 text-sm"> <li>de 8:30am - 2:00 pm</li> <li>de 3:15 a 6:00pm</li> </ul> </div> </div> </div> </div> </div> <div class="text-center italic py-12 text-zinc-400 text-sm"> <p>© Todos los derechos reservados</p> <p>aluvitec.mx 2024</p> </div> </div> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    descriptions
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="bg-gradient-to-b from-black to-zinc-950  text-gray-300"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/images/favicon.svg"><meta name="descriptions"', "><title>Aluvitec | ", ' </title><script data-astro-rerun src="https://kit.fontawesome.com/74d1405387.js" crossorigin="anonymous"><\/script>', "", "</head> <body> ", ' <main class="mx-auto "> ', " </main> ", " </body></html>"])), addAttribute(descriptions, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Menu", $$Menu, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Layout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-20 text-center text-6xl">
Pagina no encontrada
</div> ` })}`;
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
