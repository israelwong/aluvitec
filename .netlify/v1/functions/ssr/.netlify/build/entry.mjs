import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CL_QcUY5.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/afiliacion.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/nosotros.astro.mjs');
const _page5 = () => import('./pages/productos/adicionales.astro.mjs');
const _page6 = () => import('./pages/productos/aluminio.astro.mjs');
const _page7 = () => import('./pages/productos/cristal-procesos.astro.mjs');
const _page8 = () => import('./pages/productos/cristal-tipos.astro.mjs');
const _page9 = () => import('./pages/productos/herrajes-aluminio.astro.mjs');
const _page10 = () => import('./pages/productos/herrajes-cristal.astro.mjs');
const _page11 = () => import('./pages/productos.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/afiliacion.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/nosotros.astro", _page4],
    ["src/pages/productos/adicionales.astro", _page5],
    ["src/pages/productos/aluminio.astro", _page6],
    ["src/pages/productos/cristal-procesos.astro", _page7],
    ["src/pages/productos/cristal-tipos.astro", _page8],
    ["src/pages/productos/herrajes-aluminio.astro", _page9],
    ["src/pages/productos/herrajes-cristal.astro", _page10],
    ["src/pages/productos/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "bc887056-4c44-4ae9-b653-e8f6d2f0ab21"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
