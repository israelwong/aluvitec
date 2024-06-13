import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CZaHTLR6.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_sGo7u1xs.mjs');
const _page1 = () => import('./chunks/404_DNiiHn1D.mjs');
const _page2 = () => import('./chunks/afiliacion_B9Y-439n.mjs');
const _page3 = () => import('./chunks/contacto_BFbiT3Q7.mjs');
const _page4 = () => import('./chunks/nosotros_B2yoUGXK.mjs');
const _page5 = () => import('./chunks/post_rawrW6od.mjs');
const _page6 = () => import('./chunks/productos_Dg1ILaia.mjs');
const _page7 = () => import('./chunks/index_MMATAnjm.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/afiliacion.astro", _page2],
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
    "middlewareSecret": "12d5b892-0d67-42de-bd62-fcfb61008541"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
