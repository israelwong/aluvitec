import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DkcyeFZt.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_sGo7u1xs.mjs');
const _page1 = () => import('./chunks/404_h743kaf1.mjs');
const _page2 = () => import('./chunks/afiliacion_DFfSWJGr.mjs');
const _page3 = () => import('./chunks/contacto_CAUx9fQ5.mjs');
const _page4 = () => import('./chunks/nosotros_DRmY8Upu.mjs');
const _page5 = () => import('./chunks/post_ymfoVNZg.mjs');
const _page6 = () => import('./chunks/producto-aluminio_BLdEDzPX.mjs');
const _page7 = () => import('./chunks/productos_B8GtqBK-.mjs');
const _page8 = () => import('./chunks/index_C2h9-Cdo.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/afiliacion.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/nosotros.astro", _page4],
    ["src/pages/post.astro", _page5],
    ["src/pages/producto-aluminio.astro", _page6],
    ["src/pages/productos.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8015e4a9-7efd-46a9-a9c3-ab0abced8f56"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
