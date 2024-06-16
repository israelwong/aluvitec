/* empty css                               */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_CyfkxRdu.mjs';
import { Fade } from 'react-awesome-reveal';
import 'clsx';

const $$LogosProveedores = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    "./images/logo_proveedores/bruken.svg",
    "./images/logo_proveedores/estudiones_metalicas.svg",
    "./images/logo_proveedores/madison.svg",
    "./images/logo_proveedores/phillisps.svg",
    "./images/logo_proveedores/sista.svg",
    "./images/logo_proveedores/vitro.svg"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="
    w-full 
    inline-flex 
    flex-nowrap 
    overflow-hidden 
    [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] 
    h-auto"> <ul class="
    flex items-center justify-center 
    md:justify-start 
    [&_li]:mx-6 [&_img]:max-w-none 
    animate-infinite-scroll"> ${logos.map(
    (item) => renderTemplate`<li> <img${addAttribute(item, "src")} class="h-8 md:h-14"> </li>`
  )} </ul> <ul class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll"> ${logos.map(
    (item) => renderTemplate`<li> <img${addAttribute(item, "src")} class="h-8 md:h-14"> </li>`
  )} </ul> <ul class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll"> ${logos.map(
    (item) => renderTemplate`<li> <img${addAttribute(item, "src")} class="h-8 md:h-14"> </li>`
  )} </ul> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/logos_proveedores.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Productos", "descriptions": "Cristal, Procesos en cristal, Herrajes, Acr\xEDlicos, Policarbonato, Pl\xE1sticos para ba\xF1o, Domos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10 "> <h1 class="text-center font-Bebas-Neue text-4xl md:text-6xl py-5 text-yellow-700">Nuestros Productos</h1> <div class="p-5 md:p-0 md:w-1/3 grid mx-auto"> <a class="grid grid-cols-4 grid-flow-col bg-zinc-900 py-5 rounded mb-5 border border-zinc-700  hover:animate-pulse" href="./productos/aluminio"> <div class="text-center"> <i class="text-4xl fab fa-gg"></i> </div> <h1 class="text-left col-span-2 text-lg pt-1">
Perfiles de aluminio</h1> <p class="pt-2 text-right"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 mx-auto animate-pulse"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path> </svg> </p> </a> <!-- //? --> <!-- //? --> <a class="grid grid-cols-4 md:grid-flow-col bg-zinc-900 py-5 rounded mb-5 border border-zinc-700 hover:animate-pulse" href="./productos/cristal-tipos"> <div class="text-center"> <i class="text-3xl fas fa-layer-group"></i> </div> <h1 class="text-left col-span-2 text-lg pt-1">
Tipos de cristal
</h1> <p class="pt-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 mx-auto animate-pulse"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path> </svg> </p> </a> <!-- //? --> <!-- //? --> <a class="grid grid-cols-4 grid-flow-col bg-zinc-900 py-5 rounded mb-5 border border-zinc-700  hover:animate-pulse" href="./productos/cristal-procesos"> <div class="text-center"> <i class="text-3xl fas fa-drafting-compass"></i> </div> <h1 class="text-left col-span-2 text-lg pt-1">
Procesos en cristal</h1> <p class="pt-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 mx-auto animate-pulse"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path> </svg> </p> </a> <!-- //? --> <!-- //? --> <a class="grid grid-cols-4 grid-flow-col bg-zinc-900 py-5 rounded mb-5 border border-zinc-700  hover:animate-pulse" href="./productos/herrajes"> <div class="text-center"> <i class="text-3xl fab fa-hive"></i> </div> <h1 class="text-left col-span-2 text-lg pt-1">
Herrajes</h1> <p class="pt-2 text-right"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 mx-auto animate-pulse"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path> </svg> </p> </a> <!-- //? --> <!-- //? --> <a class="grid grid-cols-4 grid-flow-col bg-zinc-900 py-5 rounded mb-5 border border-zinc-700  hover:animate-pulse" href="./productos/adicionales"> <div class="text-center"> <i class="text-3xl fas fa-stream"></i> </div> <h1 class="text-left col-span-2 text-lg pt-1">
Productos adicionales
</h1> <p class="pt-2 text-right"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 mx-auto animate-pulse"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path> </svg> </p> </a> </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/index.astro", void 0);

const $$file$1 = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/index.astro";
const $$url$1 = "/productos";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Contactar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center pb-10 space-x-4 grid grid-cols-2 w-fit m-auto"> <a href="https://wa.link/5q1zrg" target="_blank" class="bg-green-700 text-white rounded-full py-3 px-4 border-2 border-green-600">
Manda mensaje
<i class="fab fa-whatsapp"></i> </a> <a href="tel:59360365" target="_self" class="bg-yellow-700 text-white rounded-full py-3 px-4 border-2 border-yellow-500">
Llama ahora
<i class="fas fa-phone-alt"></i> </a> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Contactar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=""> <div class="text-center font-Bebas-Neue pt-10"> <h2 class="text-gray-100 text-2xl md:text-6xl">
Venta al mayoreo y menudeo
</h2> <h4 class="text-red-400 text-xl md:text-4xl">
Tenemos venta al corte
</h4> </div> <div class="px-4 my-10 md:my-20 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl"> <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-8"> <!-- !!/ IZQUIERDA --> <div class="text-end px-[30]"> <h1 class="
            font-Bebas-Neue
            text-center md:text-right
            text-6xl lg:text-6xl xl:text-8xl 
            bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text
            animate-pulse
            ">
+ 23 años
</h1> <p class="
            mt-2 text-3xl 
            md:text-5xl 
            text-center md:text-right
            font-normal 
            text-gray-400
            ">
Distribuyendo productos de la más alta calidad
</p> </div> <!-- //!DERECHA --> <div class="relative text-first"> ${renderComponent($$result, "Fade", Fade, { "client:visible": true, "cascade": true, "damping": 0.2, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result2) => renderTemplate` <img class="relative w-full max-w-md mx-auto" src="/images/home_productos.png" alt=""> ` })} </div> </div> </div> ${renderComponent($$result, "Contactar", $$Contactar, {})} </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Hero.astro", void 0);

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto container"> <div class="
        grid 
        grid-cols-2 md:grid-cols-4
        gap-4 
        font-Bebas-Neue text-4xl
        p-12
        "> <a href="./producto-aluminio"> <img src="./images/btn_aluminio.png" alt="Aluminio" class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> </a> <a href="./productos/cristal"> <img src="./images/btn_cristal.png" alt="Cristal" class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> </a> <a href="./productos/herraje-aluminio"> <img src="./images/btn_herrajes_aluminio.png" alt="Herrajes para perfiles de aluminio" class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> </a> <a href="./productos/herraje-cristal"> <img src="./images/btn_herrajes_cristal.png" alt="Herrajes para cristales" class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> </a> </div> <div class="text-center"> <p class="
            font-Bebas-Neue 
            text-yellow-600 
            py-5 
            text-2xl
            md:text-4xl
            ">
Manejamos la línea española <span class="text-yellow-400 animate-pulse">serie 1400</span> </p> </div> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Productos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenido", "descriptions": "Distribuidores de aluminio, cristal y herrajes de alta calidad" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10"> ${renderComponent($$result2, "Hero", $$Hero, {})} </div> <div class="mb-10"> ${renderComponent($$result2, "LogosProveedores", $$LogosProveedores, {})} </div>  <div> ${renderComponent($$result2, "Productos", $$Productos, {})} <div class="text-center"> <i class="fas fa-angle-down text-4xl animate-bounce text-zinc-600"></i> </div> </div>  <div class="mx-auto text-center pb-5"> <h2 class="font-Bebas-Neue text-zinc-500 text-6xl py-6">¿Porqué nosotros?</h2> <div class="border-[.5px] border-solid border-zinc-600 mb-5"></div> <div class="
			bg-gradient-to-b from-zinc-950 via-blue-950 to-zinc-950 py-12
			sm:bg-gradient-to-r from-zinc-950 via-blue-950 to-zinc-950 py-12
			"> <div class="
				mx-auto 
				grid md:grid-cols-5 
				text-center"> <div class="m-auto text-center py-4"> <img src="./images/ico_asesoria.svg" class="h-8 md:h-14 mx-auto"> <p class="py-4 px-24 text-lg md:text-xl">
Asesoría personalizada
</p> </div> <div class="m-auto text-center py-4"> <img src="./images/ico_procesos.svg" class="h-8 md:h-14 mx-auto"> <p class="py-4 px-16 text-lg md:text-xl">
Procesos controlados y eficientes
</p> </div> <div class="m-auto text-center py-4"> <img src="./images/ico_garantia.svg" class="h-8 md:h-14 mx-auto"> <p class="py-4 px-16 text-lg md:text-xl">
Garantía de calidad en materiales
</p> </div> <div class="m-auto text-center py-4"> <img src="./images/ico_transporte.svg" class="h-8 md:h-14 mx-auto"> <p class="py-4 px-16 text-lg md:text-xl">
Entregas a hasta tu domicilio
</p> </div> <div class="m-auto text-center py-4"> <img src="./images/ico_soluciones.svg" class="h-8 md:h-14 mx-auto"> <p class="py-4 px-16 text-lg md:text-xl">
Soluciones integrales a la medida
</p> </div> </div> </div> <div class="border-[.5px] border-solid border-zinc-600 mt-5"></div> </div> <div class="container grid grid-cols-1 mx-auto p-14"> <!-- //? --> <!-- //? --> <div class="mb-0 md:flex md:mb-10"> <div> <img src="./images/img_abasto.png" alt="Soluciones de abasto de material" class="md:max-w-max border-2 border-solid border-zinc-500 p-2"> </div> <div class="py-5 md:px-5 text-center md:text-left"> <h3 class="font-Bebas-Neue text-3xl md:text-8xl">
Soluciones de abasto
</h3> <p class="text-zinc-500 text-lg md:text-5xl">
Si no lo tenemos, te lo conseguimos lo más pronto posible
</p> </div> </div> <div class="text-center mb-5 md:pb-10 block md:hidden"> <!-- //! arrow --> <i class="fas fa-angle-down text-3xl animate-pulse text-zinc-600"></i> </div> <!-- //? --> <!-- //? --> <!-- //? --> <!-- //? --> <div class="mb-0 md:flex md:mb-10"> <div> <img src="./images/img_logistica.png" alt="Soluciones en logistica" class="md:max-w-max border-2 border-solid border-zinc-500 p-2"> </div> <div class="py-5 md:px-5 text-center md:text-left"> <h3 class="font-Bebas-Neue text-3xl md:text-8xl">
Logistica impecable
</h3> <p class="text-zinc-500 text-lg md:text-5xl">
Planeamos la entrega de tu pedido bajo ruta programada o exprés
</p> </div> </div> <div class="text-center mb-5 md:pb-10 block md:hidden"> <!-- //! arrow --> <i class="fas fa-angle-down text-4xl animate-pulse text-zinc-600"></i> </div> <!-- //? --> <!-- //? --> <!-- //? --> <!-- //? --> <div class="mb-0 md:flex md:mb-10"> <div class=""> <img src="./images/img_personal.png" alt="Personal capacitado" class="md:max-w-max border-2 border-solid border-zinc-500 p-2"> </div> <div class="py-5 md:px-5 text-center md:text-left"> <h3 class="font-Bebas-Neue text-4xl md:text-8xl">
Personal capacitado
</h3> <p class="text-zinc-500 text-lg md:text-5xl">
Todos los colaboradores en nuestro equipo están capacitados
</p> </div> </div> <!-- //? --> <!-- //? --> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LogosProveedores as $, index as a, index$1 as i };
