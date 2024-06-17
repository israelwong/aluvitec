import { renderers } from './renderers.mjs';
import { manifest } from './manifest_XFw9LGRm.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_3yOsuBFJ.mjs');
const _page1 = () => import('./chunks/404_DkKQQ5qs.mjs');
const _page2 = () => import('./chunks/afiliacion_NGQAe_o6.mjs');
const _page3 = () => import('./chunks/contacto_DK8B0H-D.mjs');
const _page4 = () => import('./chunks/nosotros_BUpxcNUF.mjs');
const _page5 = () => import('./chunks/adicionales_Bi-5zoMe.mjs');
const _page6 = () => import('./chunks/aluminio_CIJDdEtX.mjs');
const _page7 = () => import('./chunks/cristal-procesos_Bmb3Re9f.mjs');
const _page8 = () => import('./chunks/cristal-tipos_9fBw3bVU.mjs');
const _page9 = () => import('./chunks/herrajes_Cu3vpkeZ.mjs');
const _page10 = () => import('./chunks/index_C8hT9zrn.mjs');
const _page11 = () => import('./chunks/index_XDcw9gw0.mjs');
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
    "middlewareSecret": "6a874156-7bbf-4747-ac2d-333f82772411"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
