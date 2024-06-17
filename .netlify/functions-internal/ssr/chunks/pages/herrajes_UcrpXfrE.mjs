/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_CglybI6J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_CDT6GPDK.mjs';
import { a as $$BtnMostrarProductos, $ as $$BtnCotizar } from './adicionales_dTkxsO09.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                             */
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carrusel() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    Swiper,
    {
      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides: false,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: true,
      modules: [Autoplay, Pagination, Navigation],
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 0
        }
      },
      className: "mySwiper h-full text-gray-100 w-full",
      children: [
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "../images/producto/herraje-cristal.jpg", alt: "" }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "../images/producto/adicional-acrilico.jpg", alt: "" }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "../images/producto/adicional-domo.jpg", alt: "" }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "../images/producto/adicional-policarbonato.jpg", alt: "" }) })
      ]
    }
  ) });
}

const $$Herrajes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "path": "../", "title": "Perfiles de aluminio", "descriptions": "Herrajes para cristal templado, Herrajes para canceler\xEDa de aluminio nacional, Herrajes para canceler\xEDa de aluminio nacional espa\xF1ola" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" mx-auto py-10"> <div class="text-center"> <div class="container mx-auto"> <h1 class="font-Bebas-Neue text-4xl md:text-6xl pb-3 text-yellow-700">Herrajes</h1> ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} <p class="text-2xl p-5 md:pb-10">
Herrajes para cristal templado, herrajes para cancelería de aluminio nacional y española
</p> </div> ${renderComponent($$result2, "Carrusel", Carrusel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Carrusel.jsx", "client:component-export": "default" })} <div class="container mx-auto"> ${renderComponent($$result2, "BtnCotizar", $$BtnCotizar, { "title": "Cotizar herrajes", "message": "Hola! Me interesa cotizar herrajes " })} ${renderComponent($$result2, "BtnMostrarProductos", $$BtnMostrarProductos, {})} </div> </div> </div> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes.astro";
const $$url = "/productos/herrajes";

export { $$Herrajes as default, $$file as file, $$url as url };
