/* empty css                                      */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CrLGOSeF.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactanos", "descriptions": "Contactanos hoy mismo", "footer": "v2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto"> <h1 class="
        font-Bebas-Neue text-5xl md:text-6xl
        text-yellow-700 text-center
        pt-10 pb-5
        ">Contactanos</h1> <div class="col-span-2 order-1 md:order-2 pb-10"> <div class="grid md:grid-cols-2 gap-4 p-5 md:w-3/4 mx-auto"> <div> <div class="relative w-full h-96 md:h-full mb-5"> <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.3584712609995!2d-98.98006178844165!3d19.697356732094352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed19a652adbd%3A0x37f45662d04a2e0a!2sALUVITEC!5e0!3m2!1ses-419!2smx!4v1718233397884!5m2!1ses-419!2smx" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe> </div> </div> <div> <div class="pb-5"> <h3 class="
                        font-Bebas-Neue text-5xl text-zinc-400
                        ">
Dirección</h3> <p class="pb-5 text-xl">
Temascalcingo LT 24, Col Hueyotencotl, Tecámac. Estado de
                        México. <span class="text-yellow-600">Estamos detrás de Power Center Tecámac, junto a Conalep</span> </p> </div> <div class="pb-10"> <h3 class="font-Bebas-Neue text-5xl text-zinc-400">
Contactanos
</h3> <ul class="text-xl"> <li><a href="tel:5559360365" target="_self"><i class="fas fa-phone-alt"></i> 55 5936 0365</a></li> <li><a href="tel:5559362789" target="_self"><i class="fas fa-phone-alt"></i> 55 5936 2789</a></li> <li><a href="tel:5559363562" target="_self"><i class="fas fa-phone-alt"></i> 55 5936 3562</a></li> <li><a href="tel:5563593952" target="_self"><i class="fas fa-phone-alt"></i> 55 6359 3952</a></li> </ul> </div> <div class="pb-10"> <h3 class="font-Bebas-Neue text-5xl text-zinc-400">Whatsapp</h3> <a href="https://wa.link/5q1zrg" target="_blank" class="text-xl"> <i class="fab fa-whatsapp"></i>
Envar mensaje
</a> </div> <div class=""> <h3 class="font-Bebas-Neue text-5xl text-zinc-400">
Horario</h3> <ul class="text-lg"> <li class="pb-3"> <i class="far fa-clock"></i> Lunes a viernes
<ul class="text-sm ps-5 list-disc text-gray-500"> <li>
De 8:30am - 2:00pm
</li> <li>
y de 3:15pm a 6:00pm
</li> </ul> </li> <li> <i class="far fa-clock"></i> Sábados
<ul class="text-sm ps-5 list-disc text-gray-500"> <li>
De 8:30pm a 3:00pm
</li> </ul> </li> </ul> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/contacto.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
