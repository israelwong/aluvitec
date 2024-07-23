import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
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

export { $$LogosProveedores as $ };
