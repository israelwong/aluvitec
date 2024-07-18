/* empty css                               */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, m as maybeRenderHead, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Menu;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  const active = "px-2 py-2 mt-2 text-base font-normal text-white";
  const noactive = "px-2 py-2 mt-2 text-base font-normal text-gray-500 transition-all duration-200 hover:text-white";
  const {
    path = "./"
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script data-astro-rerun src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer><\/script> ', '<div class="antialiased text-gray-200 bg-zinc-950"> <div class="w-full text-gray-100"> <div x-data="{ open: true }" class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"> <div class="flex flex-row items-center justify-between p-3"> <a href="./"> <img', ' alt="aluvitec"', `> </a> <span class="md:ps-3 pt-1"> <h1 class="md:text-2xl md:items-center uppercase text-start font-bold text-zinc-400 ">
Aluminio y vidrio Tec\xE1mac
</h1> <p class="md:text-sm text-xs text-gray-400 uppercase">Distribuidores mayoreo menudeo</p> </span> <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open"> <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"> <path x-show="open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path> <path x-show="!open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> </div> <nav :class="{'flex': !open, 'hidden': open}" class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row pe-4"> <a`, "", ">Principal</a> <a", "", ">Nosotros</a> <a", "", ">Productos</a> <a", "", ">Contacto</a> <a", "", '>Afiliate</a> </nav> <div class="relative items-center justify-center group hidden md:block"> <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div> <a', ' title="" class="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">Afiliate</a> </div> </div> </div> </div>'])), maybeRenderHead(), addAttribute(`${path}images/logo/logo_vector_blanco.svg`, "src"), addAttribute(70, "width"), addAttribute(currentPath === "" ? active : noactive, "class"), addAttribute(`${path}`, "href"), addAttribute(currentPath === "nosotros" ? active : noactive, "class"), addAttribute(`${path}nosotros`, "href"), addAttribute(currentPath === "productos" ? active : noactive, "class"), addAttribute(`${path}productos`, "href"), addAttribute(currentPath === "contacto" ? active : noactive, "class"), addAttribute(`${path}contacto`, "href"), addAttribute(`block md:hidden ${currentPath === "afiliacion" ? active : noactive}`, "class"), addAttribute(`${path}afiliacion`, "href"), addAttribute(`${path}afiliacion`, "href"));
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Menu.astro", void 0);

const $$Astro$1 = createAstro();
const $$FooterGlobal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterGlobal;
  const {
    path = "./"
  } = Astro2.props;
  console.log(path);
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto w-screen bg-zinc-900 p-12"> <div class="container"> <div class="grid md:grid-cols-4 gap-5"> <!-- //! Nuestros productos --> <div class="md:col-span-2 order-2 md:order-1"> <h1 class="font-Bebas-Neue text-3xl pb-4 text-yellow-600">Nuestros productos</h1> <div class="grid md:grid-cols-2 gap-x-5 gap-y-8"> <div> <div class="mb-5"> <a${addAttribute(`${path}productos/cristal-tipos`, "href")} target="_self"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Tipos de cristal</h3> <ul class="list-disc pl-5 text-sm"> <li>Flotado</li> <li>Reflectivo</li> <li>Esmerilado</li> <li>Espejo</li> <li>Laminado</li> </ul> </a> </div> <div class=""> <a${addAttribute(`${path}productos/cristal-procesos`, "href")} target="_self"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Procesos en cristal</h3> <ul class="list-disc pl-5 text-sm"> <li>Templado</li> <li>Canto pulido</li> <li>Grabado</li> <li>Bisel</li> <li>Cenefas</li> <li>Barrenos</li> <li>Saques</li> <li>Esmerilados</li> </ul> </a> </div> </div> <div> <div class="pb-5"> <a${addAttribute(`${path}productos/aluminio`, "href")} target="_self"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Perfiles de aluminio</h3> <ul class="list-disc pl-5 text-sm"> <li>Línea nacional</li> <li>Línea española</li> </ul> </a> </div> <div class="pb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Herrajes</h3> <ul class="list-disc pl-5 text-sm"> <li> <a${addAttribute(`${path}productos/herrajes-cristal`, "href")} target="_self">
Para cristal templado
</a> </li> <li> <a${addAttribute(`${path}productos/herrajes-aluminio`, "href")} target="_self">
Para cancelería de aluminio nacional y española
</a> </li> </ul> </div> <div class="pb-5"> <a${addAttribute(`${path}productos/adicionales`, "href")} target="_self"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Productos adicionales</h3> <ul class="list-disc pl-5 text-sm"> <li>Acrílicos</li> <li>Policarbonato</li> <li>Plásticos para baño</li> <li>Domos</li> </ul> </a> </div> </div> </div> </div> <!--//! Contacto --> <div class="col-span-2 order-1 md:order-2"> <h1 class="font-Bebas-Neue text-3xl pb-4 text-yellow-600">Contactanos hoy mismo</h1> <div class="grid md:grid-cols-2 gap-4"> <div> <div class="relative w-full h-96"> <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.3584712609995!2d-98.98006178844165!3d19.697356732094352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed19a652adbd%3A0x37f45662d04a2e0a!2sALUVITEC!5e0!3m2!1ses-419!2smx!4v1718233397884!5m2!1ses-419!2smx" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe> </div> </div> <div> <div> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Dirección</h3> <p class="pb-5 text-sm">
Temascalcingo LT 24, Col Hueyotencotl, Tecámac. Estado de
                            México. <span class="text-yellow-600">Estamos detrás de Power Center Tecámac, junto a Conalep</span> </p> </div> <div class="pb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Teléfonos</h3> <ul class="text-sm"> <li><a href="tel:5559360365" target="_self"><i class="fas fa-phone-alt"></i> 55 5936 0365</a></li> <li><a href="tel:5559362789" target="_self"><i class="fas fa-phone-alt"></i> 55 5936 2789</a></li> <li><a href="tel:5559363562" target="_self"><i class="fas fa-phone-alt"></i> 55 5936 3562</a></li> <li><a href="tel:5563593952" target="_self"><i class="fas fa-phone-alt"></i> 55 6359 3952</a></li> </ul> </div> <div class="pb-5"> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Whatsapp</h3> <a href="https://wa.link/5q1zrg" target="_blank"> <i class="fab fa-whatsapp"></i>
Envar mensaje
</a> </div> <div> <h3 class="font-Bebas-Neue text-lg text-zinc-400">Horarios</h3> <ul class="text-md"> <li class="pb-3"> <i class="far fa-clock"></i> Lunes a viernes
<ul class="text-sm ps-5 list-disc text-gray-500"> <li>
De 8:30am - 2:00pm
</li> <li>
y de 3:15pm a 6:00pm
</li> </ul> </li> <li> <i class="far fa-clock"></i> Sábados
<ul class="text-sm ps-5 list-disc text-gray-500"> <li>
De 8:30pm a 3:00pm
</li> </ul> </li> </ul> </div> </div> </div> </div> </div> <div class="text-center italic py-12 text-zinc-400 text-sm"> <p>© Todos los derechos reservados</p> <p>aluvitec.mx 2024</p> </div> </div> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/FooterGlobal.astro", void 0);

const $$FooterBasico = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto w-screen bg-zinc-900 p-12"> <div class="container"> <div class="text-center italic py-12 text-zinc-400 text-sm"> <p>© Todos los derechos reservados</p> <p>aluvitec.mx 2024</p> </div> </div> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/FooterBasico.astro", void 0);

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
    descriptions,
    footer = "global",
    path = "./"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="es" class="bg-gradient-to-b from-black to-zinc-950  text-gray-300"> <head><!-- Google Tag Manager --><script type="text/partytown">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TFCQZ7L5');<\/script><!-- End Google Tag Manager --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/images/favicon.svg"><meta name="descriptions"`, "><title>Aluvitec | ", ' </title><script data-astro-rerun src="https://kit.fontawesome.com/74d1405387.js" crossorigin="anonymous"><\/script>', "", '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFCQZ7L5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', ' <main class="mx-auto"> ', " </main> ", " </body></html>"])), addAttribute(descriptions, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Menu", $$Menu, { "path": path }), renderSlot($$result, $$slots["default"]), footer == "global" ? renderTemplate`${renderComponent($$result, "FooterGlobal", $$FooterGlobal, { "path": path })}` : renderTemplate`${renderComponent($$result, "FooterBasico", $$FooterBasico, {})}`);
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Layout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Pagina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-20 text-center text-6xl">
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
