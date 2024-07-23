import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$BtnCotizar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BtnCotizar;
  const {
    title,
    message
  } = Astro2.props;
  const numeros = [
    5559360365,
    5559363562,
    5559362789,
    5563593952
  ];
  function random() {
    let telefono = numeros[Math.floor(Math.random() * numeros.length)];
    console.log(telefono);
    return `tel:${telefono}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="p-5 text-center
top-0 z-[-10] bg-transparent bg-[radial-gradient(ellipse_50%_30%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
"> <p class="font-Bebas-Neue text-3xl md:text-4xl animate-pulse">${title}</p> <p class="font-thin text-lg">Mandanos mensaje o llama ahora, con gusto te atenderemos</p> <div class="py-5 md:space-x-2 space-y-2"> <a${addAttribute(`https://api.whatsapp.com/send?phone=525563593952&text=${message}`, "href")} class="py-3 px-5 bg-green-700 border border-green-400 rounded-md transition hover:bg-green-800 duration-300 ease-in-out block md:inline" href="" target="_blank"> <i class="fab fa-whatsapp"></i> Mandar mensaje
</a> <a${addAttribute(random(), "href")} class="py-3 px-5 bg-slate-700 -700 border border-slate-400 rounded-md transition hover:bg-slate-800 duration-300 ease-in-out block md:inline" href="" target="_blank"> <i class="fas fa-phone-alt"></i> Llamar ahora
</a> </div> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/btn_cotizar.astro", void 0);

export { $$BtnCotizar as $ };
