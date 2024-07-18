/* empty css                               */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BB_kwVml.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$BtnCotizar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BtnCotizar;
  const {
    title,
    message
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 text-center
top-0 z-[-10] bg-transparent bg-[radial-gradient(ellipse_50%_30%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
"> <p class="font-Bebas-Neue text-3xl md:text-4xl animate-pulse">${title}</p> <p class="font-thin text-lg">Mandanos mensaje o llama ahora, con gusto te atenderemos</p> <div class="py-5 md:space-x-2 space-y-2"> <a${addAttribute(`https://api.whatsapp.com/send?phone=525565819341&text=${message}`, "href")} class="py-3 px-5 bg-green-700 border border-green-400 rounded-md transition hover:bg-green-800 duration-300 ease-in-out block md:inline" href="" target="_blank"> <i class="fab fa-whatsapp"></i> Mandar mensaje
</a> <a href="tel:59360365" class="py-3 px-5 bg-slate-700 -700 border border-slate-400 rounded-md transition hover:bg-slate-800 duration-300 ease-in-out block md:inline" href="" target="_blank"> <i class="fas fa-phone-alt"></i> Llamar ahora
</a> </div> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/btn_cotizar.astro", void 0);

const $$BtnMostrarProductos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center my-5 mb-10"> <a href="../productos" target="_self" class="
    py-3 px-4
    bg-blue-500 
    rounded-full border border-blue-200 
    text-sm 
    hover:bg-blue-700 transition ease-in-out duration-300
    "> <i class="fas fa-th"></i> Todos los productos
</a> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/btn_mostrar_productos.astro", void 0);

const $$Adicionales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Perfiles de aluminio", "descriptions": "acr\xEDlicos, policarbonato, pl\xE1sticos para ba\xF1o, domos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10"> <div class="text-center"> <h1 class="font-Bebas-Neue text-4xl md:text-6xl pb-3 text-yellow-700">Productos adicionales</h1> ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} <div class="md:w-2/3 mx-auto p-5 md:p-0 grid md:grid-cols-2 gap-2 mb-10"> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-acrilico.jpg" alt="Acrilico"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Acrílico</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-domo.jpg" alt="Domos"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Domos</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-plastico-banio.jpg" alt="Plásticos para baño"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Plásticos para baño</h2> </div> </div> <div class="relative max-w-xl mx-auto"> <img src="../images/producto/adicional-policarbonato.jpg" alt="Policarbonato"> <div class="absolute inset-0 bg-gray-700 opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <h2 class="font-Bebas-Neue text-white text-3xl">Policarbonato</h2> </div> </div> </div> ${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Cotizar productos adicionales", "message": "Hola! Estoy quiero cotizar productos adicionales" })} ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/adicionales.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/adicionales.astro";
const $$url = "/productos/adicionales";

const adicionales = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Adicionales,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BtnCotizar as $, $$BtnMostrarProductos as a, adicionales as b };
