import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D2wrDfcv.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_3yOsuBFJ.mjs');
const _page1 = () => import('./chunks/404_DEKusrnS.mjs');
const _page2 = () => import('./chunks/afiliacion_DNh16tbH.mjs');
const _page3 = () => import('./chunks/contacto_DWCYZeuy.mjs');
const _page4 = () => import('./chunks/nosotros_C_T4asHZ.mjs');
const _page5 = () => import('./chunks/adicionales_DlfapdXM.mjs');
const _page6 = () => import('./chunks/aluminio_qI8mHz6C.mjs');
const _page7 = () => import('./chunks/cristal-procesos_Beqg34vb.mjs');
const _page8 = () => import('./chunks/cristal-tipos_C8o8nOmH.mjs');
const _page9 = () => import('./chunks/herrajes-aluminio_2vDTTIy7.mjs');
const _page10 = () => import('./chunks/herrajes-cristal_BpSr5ks6.mjs');
const _page11 = () => import('./chunks/index_CXzRjze2.mjs');
const _page12 = () => import('./chunks/index_CJlTCLIr.mjs');
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
    "middlewareSecret": "dd5837ec-165b-47e6-9e6c-63da99f84cd1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
