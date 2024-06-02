import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BFMZG9CW.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CPNREYEv.mjs');
const _page1 = () => import('./chunks/404_Cpo46KB_.mjs');
const _page2 = () => import('./chunks/afiliacion_cLQBrbCt.mjs');
const _page3 = () => import('./chunks/contacto_Cag2H8I_.mjs');
const _page4 = () => import('./chunks/nosotros_By2xYznD.mjs');
const _page5 = () => import('./chunks/post_B_dTbMIi.mjs');
const _page6 = () => import('./chunks/productos_xxg4gKV5.mjs');
const _page7 = () => import('./chunks/index_DFnxtOUH.mjs');
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
    "middlewareSecret": "74c3773c-4a38-4041-8e34-150d6d8df713"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
