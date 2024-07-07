import { renderers } from './renderers.mjs';
import { manifest } from './manifest_WKV8bBYd.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_3yOsuBFJ.mjs');
const _page1 = () => import('./chunks/404_ncALsj6Q.mjs');
const _page2 = () => import('./chunks/afiliacion_Swe_AB9H.mjs');
const _page3 = () => import('./chunks/contacto_Rf4ULZUp.mjs');
const _page4 = () => import('./chunks/nosotros_Dr1KmHqv.mjs');
const _page5 = () => import('./chunks/adicionales_BoYMMA9h.mjs');
const _page6 = () => import('./chunks/aluminio_DPEOCF38.mjs');
const _page7 = () => import('./chunks/cristal-procesos_qNb8skYR.mjs');
const _page8 = () => import('./chunks/cristal-tipos_CUUAi26F.mjs');
const _page9 = () => import('./chunks/herrajes-aluminio_BP028aLT.mjs');
const _page10 = () => import('./chunks/herrajes-cristal_DYxXT3dF.mjs');
const _page11 = () => import('./chunks/index_BBSRB584.mjs');
const _page12 = () => import('./chunks/index_DC29bgF8.mjs');
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

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "fe14a403-3f99-43f2-8b09-cef57b8bb6b5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
