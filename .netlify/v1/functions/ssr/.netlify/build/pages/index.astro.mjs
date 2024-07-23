/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CrLGOSeF.mjs';
import 'clsx';
import { $ as $$LogosProveedores } from '../chunks/logos_proveedores_BG_qLdGs.mjs';
import { Fade } from 'react-awesome-reveal';
export { renderers } from '../renderers.mjs';

const $$Contactar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center pb-10 space-x-4 grid grid-cols-2 w-fit m-auto"> <a href="https://api.whatsapp.com/send?phone=525563593952&text=Hola! Estoy en su pagina web y me interesa obtener más información sobre sus productos." target="_blank" class="bg-green-700 text-white rounded-full py-3 px-4 border-2 border-green-600">
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
</p> </div> <!-- //!DERECHA --> <div class="relative text-first"> <img class="relative w-full max-w-md mx-auto" src="/images/home_productos.png" alt=""> </div> </div> </div> ${renderComponent($$result, "Contactar", $$Contactar, {})} </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Hero.astro", void 0);

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto container"> <div class="
        grid grid-cols-2 md:grid-cols-3 gap-4 
        font-Bebas-Neue
        md:p-12 p-4
        text-center
        md:text-3xl
        text-2xl
        "> <!-- <a href="./productos">
                <img src="./images/btn_aluminio.png" alt="Aluminio"
                class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
            </a>
            
            <a href="./productos">
                <img src="./images/btn_cristal.png" alt="Cristal"
                class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
            </a>
            
            <a href="./productos">
                <img src="./images/btn_herrajes_aluminio.png" alt="Herrajes para perfiles de aluminio"
                class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
            </a>
            
            <a href="./productos">
                <img src="./images/btn_herrajes_cristal.png" alt="Herrajes para cristales"
                class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
            </a> --> <div class="relative max-w-xl mx-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> <a href="./productos/aluminio" target="_self"> <img src="../images/producto/perfil-aluminio-espaniol.webp" alt="Perfiles de aluminio"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white md:p-0 p-5">Perfiles de aluminio</h2> </div> </a> </div> <div class="relative max-w-xl mx-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> <a href="./productos/cristal-tipos"> <img src="../images/producto/Vidrio-espejo.jpg" alt="Cristales"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white md:p-0 p-5">Cristales</h2> </div> </a> </div> <div class="relative max-w-xl mx-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> <a href="./productos/cristal-procesos"> <img src="../images/producto/Vidrio-flotado.jpg" alt="Procesos en cristal"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white md:p-0 p-5">Procesos en cristal</h2> </div> </a> </div> <div class="relative max-w-xl mx-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> <a href="./productos/herrajes-cristal"> <img src="../images/producto/herrajes-cristal/2.jpg" alt="Herrajes cristal templado"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white md:p-0 p-5">Herrajes cristal templado</h2> </div> </a> </div> <div class="relative max-w-xl mx-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> <a href="./productos/herrajes-aluminio"> <img src="../images/producto/herrajes-aluminio/5.jpg" alt="Herrajes aluminio"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white md:p-0 p-5">Herrajes aluminio</h2> </div> </a> </div> <div class="relative max-w-xl mx-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> <a href="./productos/adicionales"> <img src="../images/producto/adicional-policarbonato.jpg" alt="Productos adicionales"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white md:p-0 p-5">Productos adicionales</h2> </div> </a> </div> </div> <div class="text-center"> <p class="
            font-Bebas-Neue 
            text-yellow-600 
            py-5 
            text-2xl
            md:text-4xl
            ">
Manejamos la línea española <span class="text-yellow-400 animate-pulse">serie 1400, 3500 y 4600</span> </p> </div> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Productos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenido", "descriptions": "Distribuidores de aluminio, cristal y herrajes de alta calidad" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10"> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} </div> <div class="mb-10"> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LogosProveedores", $$LogosProveedores, {})} ` })} </div>  <div> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Productos", $$Productos, {})} ` })} <div class="text-center"> <i class="fas fa-angle-down text-4xl animate-bounce text-zinc-600"></i> </div> </div>  <div class="mx-auto text-center pb-5"> <h2 class="font-Bebas-Neue text-zinc-500 text-6xl py-6">¿Porqué nosotros?</h2> <div class="border-[.5px] border-solid border-zinc-600 mb-5"></div> <div class="
			bg-gradient-to-b from-zinc-950 via-blue-950 to-zinc-950 py-12
			sm:bg-gradient-to-r from-zinc-950 via-blue-950 to-zinc-950 py-12
			"> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <div class="
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
</p> </div> </div> ` })} </div> <div class="border-[.5px] border-solid border-zinc-600 mt-5"></div> </div> <div class="container grid grid-cols-1 mx-auto p-14"> <!-- //? --> <!-- //? --> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <div class="mb-0 md:flex md:mb-10"> <div> <img src="./images/img_abasto.png" alt="Soluciones de abasto de material" class="md:max-w-max border-2 border-solid border-zinc-500 p-2"> </div> <div class="py-5 md:px-5 text-center md:text-left"> <h3 class="font-Bebas-Neue text-3xl md:text-8xl">
Soluciones de abasto
</h3> <p class="text-zinc-500 text-lg md:text-5xl">
Si no lo tenemos, te lo conseguimos lo más pronto posible
</p> </div> </div> <div class="text-center mb-5 md:pb-10 block md:hidden"> <!-- //! arrow --> <i class="fas fa-angle-down text-3xl animate-pulse text-zinc-600"></i> </div> ` })} <!-- //? --> <!-- //? --> <!-- //? --> <!-- //? --> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <div class="mb-0 md:flex md:mb-10"> <div> <img src="./images/img_logistica.png" alt="Soluciones en logistica" class="md:max-w-max border-2 border-solid border-zinc-500 p-2"> </div> <div class="py-5 md:px-5 text-center md:text-left"> <h3 class="font-Bebas-Neue text-3xl md:text-8xl">
Logistica impecable
</h3> <p class="text-zinc-500 text-lg md:text-5xl">
Planeamos la entrega de tu pedido bajo ruta programada o exprés
</p> </div> </div> <div class="text-center mb-5 md:pb-10 block md:hidden"> <!-- //! arrow --> <i class="fas fa-angle-down text-4xl animate-pulse text-zinc-600"></i> </div> ` })} <!-- //? --> <!-- //? --> <!-- //? --> <!-- //? --> ${renderComponent($$result2, "Fade", Fade, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result3) => renderTemplate` <div class="mb-0 md:flex md:mb-10"> <div class=""> <img src="./images/img_personal.png" alt="Personal capacitado" class="md:max-w-max border-2 border-solid border-zinc-500 p-2"> </div> <div class="py-5 md:px-5 text-center md:text-left"> <h3 class="font-Bebas-Neue text-4xl md:text-8xl">
Personal capacitado
</h3> <p class="text-zinc-500 text-lg md:text-5xl">
Todos los colaboradores en nuestro equipo están capacitados
</p> </div> </div> ` })} <!-- //? --> <!-- //? --> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
