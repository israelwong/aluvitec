/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_Cc66P6_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_DrufkMNl.mjs';

const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Mis posts</h1> <ul> ${data.map((user) => renderTemplate`<div> <h1>${user.id}</h1> <p>${user.title}</p> <p>${user.body}</p> </div>`)} </ul> ` })}`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/post.astro", void 0);

const $$file = "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/post.astro";
const $$url = "/post";

export { $$Post as default, $$file as file, $$url as url };
