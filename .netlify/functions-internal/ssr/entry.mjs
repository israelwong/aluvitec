import { renderers } from './renderers.mjs';
import { manifest } from './manifest_YNkGiNIE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_3yOsuBFJ.mjs');
const _page1 = () => import('./chunks/404_CWAMEH8C.mjs');
const _page2 = () => import('./chunks/afiliacion_BBSF2j82.mjs');
const _page3 = () => import('./chunks/contacto_3zgwQom6.mjs');
const _page4 = () => import('./chunks/nosotros_CkmlTrTl.mjs');
const _page5 = () => import('./chunks/adicionales_C0WHy6YI.mjs');
const _page6 = () => import('./chunks/aluminio_BwDNlnpt.mjs');
const _page7 = () => import('./chunks/cristal-procesos_pF3ciHPi.mjs');
const _page8 = () => import('./chunks/cristal-tipos_C36bf8I4.mjs');
const _page9 = () => import('./chunks/herrajes_CmzpjC_E.mjs');
const _page10 = () => import('./chunks/index_DpjcYTbW.mjs');
const _page11 = () => import('./chunks/index_Do4nnJ3D.mjs');
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
    ["src/pages/productos/herrajes.astro", _page9],
    ["src/pages/productos/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "90701cf4-8919-4656-bef9-c11ec0a414cd"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
