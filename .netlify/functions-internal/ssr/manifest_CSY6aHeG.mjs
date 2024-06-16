import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CglybI6J.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/afiliacion","isIndex":false,"type":"page","pattern":"^\\/afiliacion\\/?$","segments":[[{"content":"afiliacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/afiliacion.astro","pathname":"/afiliacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/productos/adicionales","isIndex":false,"type":"page","pattern":"^\\/productos\\/adicionales\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"adicionales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/adicionales.astro","pathname":"/productos/adicionales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/productos/aluminio","isIndex":false,"type":"page","pattern":"^\\/productos\\/aluminio\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"aluminio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/aluminio.astro","pathname":"/productos/aluminio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/productos/cristal-procesos","isIndex":false,"type":"page","pattern":"^\\/productos\\/cristal-procesos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"cristal-procesos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/cristal-procesos.astro","pathname":"/productos/cristal-procesos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/productos/cristal-tipos","isIndex":false,"type":"page","pattern":"^\\/productos\\/cristal-tipos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"cristal-tipos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/cristal-tipos.astro","pathname":"/productos/cristal-tipos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"},{"type":"external","src":"/_astro/herrajes.DPIf8cY3.css"}],"routeData":{"route":"/productos/herrajes","isIndex":false,"type":"page","pattern":"^\\/productos\\/herrajes\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"herrajes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/herrajes.astro","pathname":"/productos/herrajes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/productos","isIndex":true,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/index.astro","pathname":"/productos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.sBincxCQ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliacion.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/adicionales.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/aluminio.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-procesos.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-tipos.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/productos/aluminio.astro":"chunks/pages/aluminio_CmmL5r7x.mjs","/src/pages/contacto.astro":"chunks/pages/contacto_D4NwD1zU.mjs","/src/pages/productos/cristal-procesos.astro":"chunks/pages/cristal-procesos_V56IBoV6.mjs","/src/pages/productos/cristal-tipos.astro":"chunks/pages/cristal-tipos_CJja_W__.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_B_hJVZPW.mjs","/src/pages/productos/herrajes.astro":"chunks/pages/herrajes_BpV910Gg.mjs","/src/pages/nosotros.astro":"chunks/pages/nosotros_DljDxd-0.mjs","\u0000@astrojs-manifest":"manifest_CSY6aHeG.mjs","/Users/israelwong/Documents/Desarrollo/aluvitec.mx/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_3yOsuBFJ.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_DkKQQ5qs.mjs","\u0000@astro-page:src/pages/afiliacion@_@astro":"chunks/afiliacion_BenkfS4v.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_DK8B0H-D.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"chunks/nosotros_C2UBwpVJ.mjs","\u0000@astro-page:src/pages/productos/adicionales@_@astro":"chunks/adicionales_C76v1afu.mjs","\u0000@astro-page:src/pages/productos/aluminio@_@astro":"chunks/aluminio_BDTiqokP.mjs","\u0000@astro-page:src/pages/productos/cristal-procesos@_@astro":"chunks/cristal-procesos_Bo0lYjZN.mjs","\u0000@astro-page:src/pages/productos/cristal-tipos@_@astro":"chunks/cristal-tipos_B2nOQR66.mjs","\u0000@astro-page:src/pages/productos/herrajes@_@astro":"chunks/herrajes_DgonMMXc.mjs","\u0000@astro-page:src/pages/productos/index@_@astro":"chunks/index_BusabwMr.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CZZmFQiw.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DZL4CV8D.js","react-awesome-reveal":"_astro/_astro-entry_react-awesome-reveal.B8OMpFq4.js","/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Carrusel.jsx":"_astro/Carrusel.DIhVqnhX.js","@astrojs/react/client.js":"_astro/client.C-Wmy-ep.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/bebas-neue-latin-400-normal.5LZebNIn.woff2","/_astro/bebas-neue-latin-ext-400-normal.CH8jWPQC.woff2","/_astro/bebas-neue-latin-400-normal.Bv0c_J_s.woff","/_astro/bebas-neue-latin-ext-400-normal.DZC-Wzbs.woff","/_astro/afiliacion.sBincxCQ.css","/_astro/herrajes.DPIf8cY3.css","/favicon.svg","/_astro/Carrusel.DIhVqnhX.js","/_astro/_astro-entry_react-awesome-reveal.B8OMpFq4.js","/_astro/client.C-Wmy-ep.js","/_astro/hoisted.DZL4CV8D.js","/_astro/index.a3y3H-wG.js","/_astro/jsx-runtime.D9hbF3Nh.js","/images/bg-main.png","/images/btn_aluminio.png","/images/btn_cristal.png","/images/btn_herrajes_aluminio.png","/images/btn_herrajes_cristal.png","/images/home_productos.png","/images/ico_asesoria.svg","/images/ico_garantia.svg","/images/ico_procesos.svg","/images/ico_soluciones.svg","/images/ico_transporte.svg","/images/img_abasto.png","/images/img_logistica.png","/images/img_personal.png","/images/organigrama.svg","/images/logo/logo_lineas.svg","/images/logo/logo_vector_blanco.svg","/images/logo/logo_vector_negro.svg","/images/logo_proveedores/bruken.svg","/images/logo_proveedores/estudiones_metalicas.svg","/images/logo_proveedores/madison.svg","/images/logo_proveedores/phillisps.svg","/images/logo_proveedores/sista.svg","/images/logo_proveedores/vitro.svg","/images/producto/Vidrio-espejo.jpg","/images/producto/Vidrio-flotado.jpg","/images/producto/adicional-acrilico.jpg","/images/producto/adicional-domo.jpg","/images/producto/adicional-plastico-banio.jpg","/images/producto/adicional-policarbonato.jpg","/images/producto/herraje-cristal.jpg","/images/producto/perfil-aluminio-espaniol.webp","/images/producto/perfil-aluminio-nacional.webp","/images/producto/proceso-vidrio-barreno.jpg","/images/producto/proceso-vidrio-biselado.jpg","/images/producto/proceso-vidrio-canto-pulido.jpg","/images/producto/proceso-vidrio-cenefa.jpg","/images/producto/proceso-vidrio-grabado.jpg","/images/producto/proceso-vidrio-saques.jpg","/images/producto/proceso-vidrio-templado.jpg","/images/producto/vidrio-esmerilado.jpg","/images/producto/vidrio-laminado.jpg","/images/producto/vidrio-reflectivo.jpg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
