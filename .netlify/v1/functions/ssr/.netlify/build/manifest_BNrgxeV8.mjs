import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_m02BKbkd.mjs';
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
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
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
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/israelwong/Documents/Desarrollo/aluvitec.mx/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/afiliacion","isIndex":false,"type":"page","pattern":"^\\/afiliacion\\/?$","segments":[[{"content":"afiliacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/afiliacion.astro","pathname":"/afiliacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/productos/adicionales","isIndex":false,"type":"page","pattern":"^\\/productos\\/adicionales\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"adicionales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/adicionales.astro","pathname":"/productos/adicionales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/productos/aluminio","isIndex":false,"type":"page","pattern":"^\\/productos\\/aluminio\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"aluminio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/aluminio.astro","pathname":"/productos/aluminio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/productos/cristal-procesos","isIndex":false,"type":"page","pattern":"^\\/productos\\/cristal-procesos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"cristal-procesos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/cristal-procesos.astro","pathname":"/productos/cristal-procesos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/productos/cristal-tipos","isIndex":false,"type":"page","pattern":"^\\/productos\\/cristal-tipos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"cristal-tipos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/cristal-tipos.astro","pathname":"/productos/cristal-tipos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/productos/herrajes-aluminio","isIndex":false,"type":"page","pattern":"^\\/productos\\/herrajes-aluminio\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"herrajes-aluminio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/herrajes-aluminio.astro","pathname":"/productos/herrajes-aluminio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/productos/herrajes-cristal","isIndex":false,"type":"page","pattern":"^\\/productos\\/herrajes-cristal\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"herrajes-cristal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/herrajes-cristal.astro","pathname":"/productos/herrajes-cristal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/productos","isIndex":true,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/index.astro","pathname":"/productos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.CMmsMoDn.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliacion.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/adicionales.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/aluminio.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-procesos.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/cristal-tipos.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes-aluminio.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/herrajes-cristal.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/afiliacion@_@astro":"pages/afiliacion.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/productos/adicionales@_@astro":"pages/productos/adicionales.astro.mjs","\u0000@astro-page:src/pages/productos/aluminio@_@astro":"pages/productos/aluminio.astro.mjs","\u0000@astro-page:src/pages/productos/cristal-procesos@_@astro":"pages/productos/cristal-procesos.astro.mjs","\u0000@astro-page:src/pages/productos/cristal-tipos@_@astro":"pages/productos/cristal-tipos.astro.mjs","\u0000@astro-page:src/pages/productos/herrajes-aluminio@_@astro":"pages/productos/herrajes-aluminio.astro.mjs","\u0000@astro-page:src/pages/productos/herrajes-cristal@_@astro":"pages/productos/herrajes-cristal.astro.mjs","\u0000@astro-page:src/pages/productos/index@_@astro":"pages/productos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BNrgxeV8.mjs","/Users/israelwong/Documents/Desarrollo/aluvitec.mx/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Oozc_hRb.js","react-awesome-reveal":"_astro/_astro-entry_react-awesome-reveal.CllJstBK.js","@astrojs/react/client.js":"_astro/client.BxyV9eR_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/bebas-neue-latin-ext-400-normal.CH8jWPQC.woff2","/_astro/bebas-neue-latin-400-normal.5LZebNIn.woff2","/_astro/bebas-neue-latin-ext-400-normal.DZC-Wzbs.woff","/_astro/bebas-neue-latin-400-normal.Bv0c_J_s.woff","/_astro/afiliacion.CMmsMoDn.css","/favicon.svg","/_astro/_astro-entry_react-awesome-reveal.CllJstBK.js","/_astro/client.BxyV9eR_.js","/_astro/hoisted.Oozc_hRb.js","/_astro/index.t7h89SRg.js","/images/bg-main.png","/images/btn_aluminio.png","/images/btn_cristal.png","/images/btn_herrajes_aluminio.png","/images/btn_herrajes_cristal.png","/images/home_productos.png","/images/ico_asesoria.svg","/images/ico_garantia.svg","/images/ico_procesos.svg","/images/ico_soluciones.svg","/images/ico_transporte.svg","/images/img_abasto.png","/images/img_logistica.png","/images/img_personal.png","/images/organigrama.svg","/images/logo/logo_lineas.svg","/images/logo/logo_vector_blanco.svg","/images/logo/logo_vector_negro.svg","/images/logo_proveedores/bruken.svg","/images/logo_proveedores/estudiones_metalicas.svg","/images/logo_proveedores/madison.svg","/images/logo_proveedores/phillisps.svg","/images/logo_proveedores/sista.svg","/images/logo_proveedores/vitro.svg","/images/producto/Vidrio-espejo.jpg","/images/producto/Vidrio-flotado.jpg","/images/producto/adicional-acrilico.jpg","/images/producto/adicional-domo.jpg","/images/producto/adicional-plastico-banio.jpg","/images/producto/adicional-policarbonato.jpg","/images/producto/herraje-cristal.jpg","/images/producto/perfil-aluminio-espaniol.webp","/images/producto/perfil-aluminio-nacional.webp","/images/producto/proceso-vidrio-barreno.jpg","/images/producto/proceso-vidrio-biselado.jpg","/images/producto/proceso-vidrio-canto-pulido.jpg","/images/producto/proceso-vidrio-cenefa.jpg","/images/producto/proceso-vidrio-grabado.jpg","/images/producto/proceso-vidrio-saques.jpg","/images/producto/proceso-vidrio-templado.jpg","/images/producto/vidrio-esmerilado.jpg","/images/producto/vidrio-laminado.jpg","/images/producto/vidrio-reflectivo.jpg","/images/producto/herrajes-aluminio/1.jpg","/images/producto/herrajes-aluminio/10.jpg","/images/producto/herrajes-aluminio/11.jpg","/images/producto/herrajes-aluminio/12.jpg","/images/producto/herrajes-aluminio/13.jpg","/images/producto/herrajes-aluminio/2.jpg","/images/producto/herrajes-aluminio/3.jpg","/images/producto/herrajes-aluminio/4.jpg","/images/producto/herrajes-aluminio/5.jpg","/images/producto/herrajes-aluminio/6.jpg","/images/producto/herrajes-aluminio/7.jpg","/images/producto/herrajes-aluminio/8.jpg","/images/producto/herrajes-aluminio/9.jpg","/images/producto/herrajes-cristal/1.jpg","/images/producto/herrajes-cristal/10.jpg","/images/producto/herrajes-cristal/11.jpg","/images/producto/herrajes-cristal/12.jpg","/images/producto/herrajes-cristal/13.jpg","/images/producto/herrajes-cristal/14.jpg","/images/producto/herrajes-cristal/15.jpg","/images/producto/herrajes-cristal/16.jpg","/images/producto/herrajes-cristal/17.jpg","/images/producto/herrajes-cristal/18.jpg","/images/producto/herrajes-cristal/19.jpg","/images/producto/herrajes-cristal/2.jpg","/images/producto/herrajes-cristal/20.jpg","/images/producto/herrajes-cristal/3.jpg","/images/producto/herrajes-cristal/4.jpg","/images/producto/herrajes-cristal/5.jpg","/images/producto/herrajes-cristal/6.jpg","/images/producto/herrajes-cristal/7.jpg","/images/producto/herrajes-cristal/8.jpg","/images/producto/herrajes-cristal/9.jpg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
