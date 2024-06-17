/* empty css                               */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_CDT6GPDK.mjs';
import 'clsx';
import { $ as $$BtnCotizar } from './adicionales_dTkxsO09.mjs';

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

const $$Afiliacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aficiaci\xF3n", "descriptions": "Obt\xE9n descuentos exclusivos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto"> <div class="
        text-center 
        pt-10 md:pb-10
        "> <h1 class="
            font-Bebas-Neue text-4xl md:text-6xl
            text-yellow-700
            ">
Afiliate hoy mismo
<span class="text-yellow-400 animate-pulse">es gratis</span> </h1> <h5 class="text-xl md:text-4xl">y obtén increíbles beneficios</h5> </div> <div class="md:w-2/3 mx-auto p-5 md:p-0"> <p class="mb-10 text-center text-xl md:text-3xl text-zinc-500">
Si eres dueño de negocio en vidrio y/o aluminio queremos ser tu aliado. No importa si solo compras una pieza o un millar, te daremos el mejor precio,
</p> <div class="pb-10 md:pb-10"> ${renderComponent($$result2, "LogosProveedores", $$LogosProveedores, {})} </div> <div class="mb-10"> <div class="text-center border border-zinc-500 bg-zinc-950 p-5"> <h3 class="font-Bebas-Neue text-2xl text-zinc-500 mb-3">¿Porqué afiliarse con nosotros?</h3> <p class="font-normal text-2xl md:text-4xl">
Tenemos <span class="animate-pulse text-yellow-400">más de 23 años</span> siendo líderes en la distribución de perfiles arquitectónicos, cristal y herrajes mayoreo menudeo.
</p> </div> <p class="text-center text-sm italic text-zinc-600 py-3">
Nuestras oficinas están ubicadas en Hueyotencotl Tecámac Estado de México
</p> </div> <div> <h3 class="font-Bebas-Neue text-2xl text-zinc-500 mb-2">¿Cuáles son los beneficios?</h3> <ul class="list-disc pl-5 text-lg pb-10"> <li>Atención personalizada vía telefónica.</li> <li>Entrega de material en tu negocio sin ningún costo adicional. <span class="italic text-zinc-500">(Envíos estándar con ruta programada en compras menores a $9,999 y envíos exprés con envío inmediato en compras mayores a $10,000)</span></li> <li>Precio preferente de afiliado.</li> <li>Descuento adicional en tu primer compra.</li> <li>Integridad en los materiales desde la salida de almacén hasta la entrega en tu negocio.</li> <li>Si el producto que buscas no lo tenemos en nuestro almacén para entrega inmediata, te lo conseguimos (Aplica únicamente sobre la línea de productos que manejamos).</li> <li>Si encuentras el producto más económico con otro proveedor te mejoramos el precio <span class="italic text-zinc-500">(Siempre y cuando tenia las mismas especificaciones)</span></li> </ul> </div> <div class="mb-10"> ${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Solicita tu afiliaci\xF3n hoy mismo", "message": "Hola! Me interesa afiliarme con ustedes" })} </div> </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliacion.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliacion.astro";
const $$url = "/afiliacion";

const afiliacion = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Afiliacion,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LogosProveedores as $, afiliacion as a };
