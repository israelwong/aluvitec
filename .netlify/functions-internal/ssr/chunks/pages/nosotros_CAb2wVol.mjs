/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_MTIgLGdC.mjs';
import { $ as $$LogosProveedores } from './afiliacion_C-edFfUu.mjs';
import { Fade, Zoom } from 'react-awesome-reveal';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Quienes somos", "descriptions": "Somos lideres en la distribuci\xF3n de aluminio, vidrio y herraje de la m\xE1s alta calidad." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10"> <div class="text-center pb-5 md:pb-5 "> <h3 class="
			font-Bebas-Neue text-6xl 
			pb-5
			text-yellow-700
			">
Quienes somos</h3> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <p class="
				text-xl md:text-5xl 
				px-10 md:px-48 
				text-zinc-400
				">
Somos una empresa líder en la distribución de
<span class="text-yellow-500 animate-pulse">perfil arquitectónico, cristal y herraje</span>
de la más alta calidad siempre cuidando la relación calidad precio que nuestros clientes necesitan para sus proyectos.
</p> ` })} </div> <!-- //! --> <div class="p-10"> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LogosProveedores", $$LogosProveedores, {})} ` })} </div> <!-- //! --> <div class="grid md:grid-cols-2 gap-4 mb-12 px-12 text-center"> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <div class="border-2 border-zinc-500 p-5"> <h3 class="font-Bebas-Neue text-4xl pb-3">Visión</h3> <p class="text-zinc-500 text-2xl">Ser en 2030 una de las principales distribuidoras de perfil arquitectónico, cristal y herraje a nivel nacional con soluciones integrales que van desde la compra hasta la logística en la entrega.</p> </div> ` })} ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <div class="border-2 border-zinc-500 p-5"> <h3 class="font-Bebas-Neue text-4xl pb-3">Misión</h3> <p class="text-zinc-500 text-2xl">Brindar a todos nuestros clientes un servicio de calidad ofreciendo soluciones integrales a la medida cuidando la relación calidad precio en toda nuestra línea de productos </p> </div> ` })} </div> <div class="grid md:grid-cols-2 gap-5 md:px-48 mx-auto"> <div> ${renderComponent($$result2, "Zoom", Zoom, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Zoom" }, { "default": ($$result3) => renderTemplate` <img src="./images/logo/logo_lineas.svg" class="w-screen"> ` })} </div> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <div class="ml-40 md:ml-10"> <h3 class="font-Bebas-Neue text-4xl pb-3">Valores</h3> <ul class="list-disc pl-5 text-sm text-zinc-400"> <li>Responsabilidad</li> <li>Honradez</li> <li>Solidaridad</li> <li>Empatía</li> <li>Compromiso</li> <li>Integridad</li> <li>Excelencia</li> <li>Servicio</li> </ul> </div> ` })} </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/nosotros.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/nosotros.astro";
const $$url = "/nosotros";

export { $$Nosotros as default, $$file as file, $$url as url };
