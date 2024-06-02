import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DCL6OqqE.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afiliate.Crt5S5ul.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afiliate.Crt5S5ul.css"}],"routeData":{"route":"/afiliate","isIndex":false,"type":"page","pattern":"^\\/afiliate\\/?$","segments":[[{"content":"afiliate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/afiliate.astro","pathname":"/afiliate","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afiliate.Crt5S5ul.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afiliate.Crt5S5ul.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afiliate.Crt5S5ul.css"}],"routeData":{"route":"/post","isIndex":false,"type":"page","pattern":"^\\/post\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post.astro","pathname":"/post","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afiliate.Crt5S5ul.css"}],"routeData":{"route":"/productos","isIndex":false,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos.astro","pathname":"/productos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/afiliate.Crt5S5ul.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/afiliate.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/post.astro",{"propagation":"none","containsHead":true}],["/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/pages/productos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/404.astro":"chunks/pages/404_Bcr6XGt5.mjs","/src/pages/contacto.astro":"chunks/pages/contacto_CnwKWu94.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DMSG9l6D.mjs","/src/pages/index.astro":"chunks/pages/index_DhChSEs-.mjs","/src/pages/nosotros.astro":"chunks/pages/nosotros_Cesm2Ka9.mjs","/src/pages/post.astro":"chunks/pages/post_BxGyQIug.mjs","/src/pages/productos.astro":"chunks/pages/productos_B_2ohgAe.mjs","\u0000@astrojs-manifest":"manifest_CeyJW684.mjs","/Users/israelwong/Documents/Desarrollo/aluvitec.mx/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D9Hfowf9.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_ChdNYtMV.mjs","\u0000@astro-page:src/pages/afiliate@_@astro":"chunks/afiliate_BJReQTDV.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_DngT7hLf.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"chunks/nosotros_CEAMIENF.mjs","\u0000@astro-page:src/pages/post@_@astro":"chunks/post_CGUYWh2V.mjs","\u0000@astro-page:src/pages/productos@_@astro":"chunks/productos_B-kaV173.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_G4NT1Ulb.mjs","/Users/israelwong/Documents/Desarrollo/aluvitec.mx/src/components/Whatsapp":"_astro/Whatsapp.GG3x-tzq.js","react-awesome-reveal":"_astro/_astro-entry_react-awesome-reveal.B7Jgn8CR.js","@astrojs/react/client.js":"_astro/client.BxyV9eR_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/afiliate.Crt5S5ul.css","/favicon.svg","/image-1.jpg","/_astro/Whatsapp.GG3x-tzq.js","/_astro/_astro-entry_react-awesome-reveal.B7Jgn8CR.js","/_astro/client.BxyV9eR_.js","/_astro/index.t7h89SRg.js","/_astro/jsx-runtime.DxitwGCr.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
