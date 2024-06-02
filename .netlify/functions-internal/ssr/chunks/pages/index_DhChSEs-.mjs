/* empty css                             */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_DCL6OqqE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './afiliate_B1Du89Rh.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { Fade } from 'react-awesome-reveal';

function Whatsapp({ props }) {
  const msg = props.msg;
  function mensaje() {
    alert(msg);
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { className: "text-2xl text-red-900", onClick: () => mensaje(), children: "Click para contactar" }) });
}

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Fade", Fade, { "client:load": true, "client:component-hydration": "load", "client:component-path": "react-awesome-reveal", "client:component-export": "Fade" }, { "default": ($$result2) => renderTemplate` <img src="/image-1.jpg" width="300"> ` })} </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lista = ["israel", "learsi", "Shirel"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenido" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-7xl text-purple-600">Principal</h1> ${renderComponent($$result2, "Whatsapp", Whatsapp, { "props": { msg: "hello world again" }, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Whatsapp", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", $$Hero, {})} <p>listado:</p> <ul> ${lista.map((item) => renderTemplate`<li>${item}</li>`)} </ul> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
