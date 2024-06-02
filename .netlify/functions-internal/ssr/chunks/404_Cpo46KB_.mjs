export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_DrufkMNl.mjs').then(n => n._);

export { page };
