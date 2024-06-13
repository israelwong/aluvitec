import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CLk474lC.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.Vhp2Cm6P.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.Vhp2Cm6P.css"}],"routeData":{"route":"/afiliacion","isIndex":false,"type":"page","pattern":"^\\/afiliacion\\/?$","segments":[[{"content":"afiliacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/afiliacion.astro","pathname":"/afiliacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.Vhp2Cm6P.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.Vhp2Cm6P.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.Vhp2Cm6P.css"}],"routeData":{"route":"/post","isIndex":false,"type":"page","pattern":"^\\/post\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post.astro","pathname":"/post","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.Vhp2Cm6P.css"}],"routeData":{"route":"/productos","isIndex":false,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos.astro","pathname":"/productos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/afiliacion.Vhp2Cm6P.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliacion.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/post.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/afiliacion.astro":"chunks/pages/afiliacion_L5e16U23.mjs","/src/pages/contacto.astro":"chunks/pages/contacto_DIhrZUZX.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BRqSkFLd.mjs","/src/pages/nosotros.astro":"chunks/pages/nosotros_CeBa9Lvh.mjs","/src/pages/post.astro":"chunks/pages/post_Cu1MFGPL.mjs","/src/pages/productos.astro":"chunks/pages/productos_HiyHXHjj.mjs","\u0000@astrojs-manifest":"manifest_CZaHTLR6.mjs","/Users/israelwong/Documents/Desarrollo/aluvitec.mx/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_sGo7u1xs.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_DNiiHn1D.mjs","\u0000@astro-page:src/pages/afiliacion@_@astro":"chunks/afiliacion_B9Y-439n.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_BFbiT3Q7.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"chunks/nosotros_B2yoUGXK.mjs","\u0000@astro-page:src/pages/post@_@astro":"chunks/post_rawrW6od.mjs","\u0000@astro-page:src/pages/productos@_@astro":"chunks/productos_Dg1ILaia.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_MMATAnjm.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DZL4CV8D.js","react-awesome-reveal":"_astro/_astro-entry_react-awesome-reveal.ChDPlO5x.js","@astrojs/react/client.js":"_astro/client.BxyV9eR_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/bebas-neue-latin-ext-400-normal.CH8jWPQC.woff2","/_astro/bebas-neue-latin-400-normal.5LZebNIn.woff2","/_astro/bebas-neue-latin-ext-400-normal.DZC-Wzbs.woff","/_astro/bebas-neue-latin-400-normal.Bv0c_J_s.woff","/_astro/afiliacion.Vhp2Cm6P.css","/favicon.svg","/_astro/_astro-entry_react-awesome-reveal.ChDPlO5x.js","/_astro/client.BxyV9eR_.js","/_astro/hoisted.DZL4CV8D.js","/_astro/index.t7h89SRg.js","/images/bg-main.png","/images/btn_aluminio.png","/images/btn_cristal.png","/images/btn_herrajes_aluminio.png","/images/btn_herrajes_cristal.png","/images/home_productos.png","/images/ico_asesoria.svg","/images/ico_garantia.svg","/images/ico_procesos.svg","/images/ico_soluciones.svg","/images/ico_transporte.svg","/images/img_abasto.png","/images/img_logistica.png","/images/img_personal.png","/images/organigrama.svg","/images/logo/logo_lineas.svg","/images/logo/logo_vector_blanco.svg","/images/logo/logo_vector_negro.svg","/images/logo_proveedores/bruken.svg","/images/logo_proveedores/estudiones_metalicas.svg","/images/logo_proveedores/madison.svg","/images/logo_proveedores/phillisps.svg","/images/logo_proveedores/sista.svg","/images/logo_proveedores/vitro.svg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
