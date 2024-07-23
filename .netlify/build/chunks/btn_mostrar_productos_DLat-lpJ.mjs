import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_m02BKbkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$BtnMostrarProductos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center my-5 mb-10"> <a href="../productos" target="_self" class="
    py-3 px-4
    bg-blue-500 
    rounded-full border border-blue-200 
    text-sm 
    hover:bg-blue-700 transition ease-in-out duration-300
    "> <i class="fas fa-th"></i> Todos los productos
</a> </div>`;
}, "/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/btn_mostrar_productos.astro", void 0);

export { $$BtnMostrarProductos as $ };
