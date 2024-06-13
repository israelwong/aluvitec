export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_D7P_PA4d.mjs').then(n => n.i);

export { page };
