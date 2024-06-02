import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CeyJW684.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_D9Hfowf9.mjs');
const _page1 = () => import('./chunks/404_ChdNYtMV.mjs');
const _page2 = () => import('./chunks/afiliate_BJReQTDV.mjs');
const _page3 = () => import('./chunks/contacto_DngT7hLf.mjs');
const _page4 = () => import('./chunks/nosotros_CEAMIENF.mjs');
const _page5 = () => import('./chunks/post_CGUYWh2V.mjs');
const _page6 = () => import('./chunks/productos_B-kaV173.mjs');
const _page7 = () => import('./chunks/index_G4NT1Ulb.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/afiliate.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/nosotros.astro", _page4],
    ["src/pages/post.astro", _page5],
    ["src/pages/productos.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "74ec46d6-874e-46ba-9df7-8c5822017632"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
