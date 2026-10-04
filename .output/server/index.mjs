globalThis.__nitro_main__ = import.meta.url;
import {
  i as HTTPError,
  n as defineLazyEventHandler,
  t as H3Core,
} from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) return mod.fetch(req);
      if (!promise)
        promise = loader().then((_mod) => (mod = _mod.default || _mod));
      return promise.then((mod) => mod.fetch(req));
    },
  };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
  "/favicon.ico": {
    type: "image/vnd.microsoft.icon",
    etag: '"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y"',
    mtime: "2026-09-17T06:54:42.053Z",
    size: 20373,
    path: "../public/favicon.ico",
  },
  "/robots.txt": {
    type: "text/plain; charset=utf-8",
    etag: '"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0"',
    mtime: "2026-09-17T06:54:42.052Z",
    size: 160,
    path: "../public/robots.txt",
  },
  "/assets/Reveal-CXDPXVkY.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"12e-OMVtdEyhrtBL6v3eqX5TYs+sGcs"',
    mtime: "2026-09-17T06:54:41.677Z",
    size: 302,
    path: "../public/assets/Reveal-CXDPXVkY.js",
  },
  "/assets/ReviewCard-Bk-SQm8l.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"6cc-YHdbaXAtO6eB8x8XIj1M4wpgBqc"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 1740,
    path: "../public/assets/ReviewCard-Bk-SQm8l.js",
  },
  "/assets/SectionHeading-HRoQpnmm.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2ce-NkHtla17vMcBDungiFGO16jQhHk"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 718,
    path: "../public/assets/SectionHeading-HRoQpnmm.js",
  },
  "/assets/ServiceCard-Dr8-rnaB.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"4f4-mb05QvpY96vyW+2ovLUAMj3aOho"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 1268,
    path: "../public/assets/ServiceCard-Dr8-rnaB.js",
  },
  "/assets/contact-urvijvvH.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"172b9-cKKfUD5yPBHtpPBHTKIZ5dYUBwU"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 94905,
    path: "../public/assets/contact-urvijvvH.js",
  },
  "/assets/gallery-Cd_t95EF.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"8f9-wm1jkxlNZ2ZmC5ywKlrKS/mDGJU"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 2297,
    path: "../public/assets/gallery-Cd_t95EF.js",
  },
  "/assets/reviews-CWYChXcA.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2f9-XCALveroCjUK4OrEJlqw7PqM1NA"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 761,
    path: "../public/assets/reviews-CWYChXcA.js",
  },
  "/assets/routes-9_T4O2zT.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1803-kuysRpkii9W8jccMaTtV25EC490"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 6147,
    path: "../public/assets/routes-9_T4O2zT.js",
  },
  "/assets/index-vTozBOF5.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"66b28-dkFt8Z7CCPjWq173xWiMkun37og"',
    mtime: "2026-09-17T06:54:41.676Z",
    size: 420648,
    path: "../public/assets/index-vTozBOF5.js",
  },
  "/assets/salon-interior-Dt69uwDq.jpg": {
    type: "image/jpeg",
    etag: '"279e9-h6y4hO9LstWN7AWwNdfcERNGUVI"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 162281,
    path: "../public/assets/salon-interior-Dt69uwDq.jpg",
  },
  "/assets/service-facial-aL2nPBwM.jpg": {
    type: "image/jpeg",
    etag: '"135c4-QII0ovjv0eNGZcAg2j9g4xPoFW0"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 79300,
    path: "../public/assets/service-facial-aL2nPBwM.jpg",
  },
  "/assets/service-hair-spa-D-C9mLtu.jpg": {
    type: "image/jpeg",
    etag: '"18b6d-aTAxWkNCxWCvNqJz9Sues8PMcwE"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 101229,
    path: "../public/assets/service-hair-spa-D-C9mLtu.jpg",
  },
  "/assets/service-styling-C0btXW04.jpg": {
    type: "image/jpeg",
    etag: '"17353-0jOVpePyjBNvFLItQNgYu69v1n8"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 95059,
    path: "../public/assets/service-styling-C0btXW04.jpg",
  },
  "/assets/service-waxing-JKXSueIh.jpg": {
    type: "image/jpeg",
    etag: '"165b4-zwewWxQhg+TOXPkHhzbH/+S8dIc"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 91572,
    path: "../public/assets/service-waxing-JKXSueIh.jpg",
  },
  "/assets/services-BO5C0Dgf.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"5c2-DSmQ4Hm1Ef4suYg1Fd+N4R4HWDA"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 1474,
    path: "../public/assets/services-BO5C0Dgf.js",
  },
  "/assets/styles-BXS0HATw.css": {
    type: "text/css; charset=utf-8",
    etag: '"154fd-14mp/7XrF9EAQ6bGuxNcdkZDk04"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 87293,
    path: "../public/assets/styles-BXS0HATw.css",
  },
  "/assets/utils-C8bnaApQ.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"28793-azMzYwJ2DGaawNe/OY4PmdSxNpY"',
    mtime: "2026-09-17T06:54:41.678Z",
    size: 165779,
    path: "../public/assets/utils-C8bnaApQ.js",
  },
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (public_assets_data_default[id]) return true;
  for (const base in publicAssetBases) if (id.startsWith(base)) return true;
  return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = (m) =>
  function headersRouteRule(event) {
    for (const [key, value] of Object.entries(m.options || {}))
      event.res.headers.set(key, value);
  };
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [
    {
      name: "headers",
      route: "/assets/**",
      handler: headers,
      options: { "cache-control": "public, max-age=31536000, immutable" },
    },
  ];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/");
    if (s.length > 1) {
      if (s[1] === "assets")
        r.unshift({
          data: $0,
          params: { _: s.slice(2).join("/") },
        });
    }
    return r;
  };
})();
var _lazy_AbMPbd = defineLazyEventHandler(
  () => import("./_chunks/ssr-renderer.mjs"),
);
var findRoute = /* @__PURE__ */ (() => {
  const data = {
    route: "/**",
    handler: _lazy_AbMPbd,
  };
  return (_m, p) => {
    return {
      data,
      params: { _: p.slice(1) },
    };
  };
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(
    typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2),
    res,
  );
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL))
      return {
        status: 302,
        headers: new Headers({
          location: `${baseURL}${url.pathname.slice(1)}${url.search}`,
        }),
      };
  }
  const headers = new Headers(unhandled ? {} : error.headers);
  headers.set("content-type", "application/json; charset=utf-8");
  return {
    status,
    statusText,
    headers,
    body: {
      error: true,
      ...(unhandled
        ? {
            status,
            unhandled: true,
          }
        : typeof error.toJSON === "function"
          ? error.toJSON()
          : {
              status,
              statusText,
              message: error.message,
            }),
    },
  };
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
  for (const handler of errorHandlers)
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) return response;
    } catch (error) {
      console.error(error);
    }
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors)
        errors.push({
          error,
          context: errorCtx,
        });
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return error_handler_default(error, event);
    },
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError,
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) =>
    findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length)
      middleware.push(...routeRules.routeRuleMiddleware);
    if (route?.data?.middleware?.length)
      middleware.push(...route.data.middleware);
    return middleware;
  };
  return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) return instance;
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) return hooks;
  return (nitroApp.hooks = new HookableCore());
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) return { routeRuleMiddleware: [] };
  const routeRules = {};
  for (const layer of m)
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (
          typeof currentRule.options === "object" &&
          typeof rule.options === "object"
        )
          currentRule.options = {
            ...currentRule.options,
            ...rule.options,
          };
        else currentRule.options = rule.options;
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params,
        };
      } else if (rule.options !== false)
        routeRules[rule.name] = {
          ...rule,
          params: layer.params,
        };
    }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort(
    (a, b) => (a.handler?.order || 0) - (b.handler?.order || 0),
  );
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) continue;
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware,
  };
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context,
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) return res;
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:scheduled", {
          controller,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:email", {
          message,
          event: message,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:queue", {
          batch,
          event: batch,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:tail", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:trace", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx,
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({
  fetch(cfRequest, env, context, url) {
    if (env.ASSETS && isPublicAssetURL(url.pathname))
      return env.ASSETS.fetch(cfRequest);
  },
});
//#endregion
export { cloudflare_module_default as default };
