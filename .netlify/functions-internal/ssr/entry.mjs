import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BnXoqlj7.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_3yOsuBFJ.mjs');
const _page1 = () => import('./chunks/404_D44u5-MZ.mjs');
const _page2 = () => import('./chunks/afiliacion_Dgpp2Rc_.mjs');
const _page3 = () => import('./chunks/contacto_CR_GamRr.mjs');
const _page4 = () => import('./chunks/nosotros_B7uhkk0q.mjs');
const _page5 = () => import('./chunks/adicionales_BRnqO7vH.mjs');
const _page6 = () => import('./chunks/aluminio_DqLp0eKv.mjs');
const _page7 = () => import('./chunks/cristal-procesos_BKFHMbme.mjs');
const _page8 = () => import('./chunks/cristal-tipos_BtN3z52s.mjs');
const _page9 = () => import('./chunks/herrajes_Cfh6-w6q.mjs');
const _page10 = () => import('./chunks/index_AGRKLPzU.mjs');
const _page11 = () => import('./chunks/index_DR7ehQqE.mjs');
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
    "middlewareSecret": "6e4429c4-de6e-4350-88ea-ebeb307f4769"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
