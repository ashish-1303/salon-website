globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/ak-salon.svg": {
		"type": "image/svg+xml",
		"etag": "\"130-fh1n3GES86odKZ5ApxK3trqWuyE\"",
		"mtime": "2026-10-04T14:13:32.497Z",
		"size": 304,
		"path": "../public/ak-salon.svg"
	},
	"/assets/contact-RJqyhalr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17384-rYzLb/dh+Z+eVoNk1A5/S2wNk88\"",
		"mtime": "2026-10-25T12:04:29.245Z",
		"size": 95108,
		"path": "../public/assets/contact-RJqyhalr.js"
	},
	"/assets/gallery-B_pFnaB7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9aa-nD3fFsSJ0DL0hhLwDsYliEuA7QY\"",
		"mtime": "2026-10-25T12:04:29.248Z",
		"size": 2474,
		"path": "../public/assets/gallery-B_pFnaB7.js"
	},
	"/assets/ReviewCard-DUwr-dkg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"708-6Rdq1hB+zcz5CZGSyzZh80L5koI\"",
		"mtime": "2026-10-25T12:04:29.235Z",
		"size": 1800,
		"path": "../public/assets/ReviewCard-DUwr-dkg.js"
	},
	"/assets/Reveal-Dw5vqLNv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21f-bAKFdh63Yn/pTQlVL7RHzrjHoXQ\"",
		"mtime": "2026-10-25T12:04:29.233Z",
		"size": 543,
		"path": "../public/assets/Reveal-Dw5vqLNv.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-04T12:57:45.968Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-04T12:57:45.941Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/reviews-B6lnBPzi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"320-1s8vdqytUpsG018IntUu4/3yPrQ\"",
		"mtime": "2026-10-25T12:04:29.250Z",
		"size": 800,
		"path": "../public/assets/reviews-B6lnBPzi.js"
	},
	"/assets/index-BvqROBIj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66814-pgoBLAXRZCV/JQVl8vix8Cr1Kcw\"",
		"mtime": "2026-10-25T12:04:29.231Z",
		"size": 419860,
		"path": "../public/assets/index-BvqROBIj.js"
	},
	"/assets/routes-nDMLcb3S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa9-Y80wZXdixoft1oxChgm9a5KvD3o\"",
		"mtime": "2026-10-25T12:04:29.252Z",
		"size": 6825,
		"path": "../public/assets/routes-nDMLcb3S.js"
	},
	"/assets/SectionHeading-BRoPV6o8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"312-JxhFKApJd/PZoqFat/4rQhERDgw\"",
		"mtime": "2026-10-25T12:04:29.241Z",
		"size": 786,
		"path": "../public/assets/SectionHeading-BRoPV6o8.js"
	},
	"/assets/service-facial-aL2nPBwM.jpg": {
		"type": "image/jpeg",
		"etag": "\"135c4-QII0ovjv0eNGZcAg2j9g4xPoFW0\"",
		"mtime": "2026-10-25T12:04:29.267Z",
		"size": 79300,
		"path": "../public/assets/service-facial-aL2nPBwM.jpg"
	},
	"/assets/salon-interior-Dt69uwDq.jpg": {
		"type": "image/jpeg",
		"etag": "\"279e9-h6y4hO9LstWN7AWwNdfcERNGUVI\"",
		"mtime": "2026-10-25T12:04:29.257Z",
		"size": 162281,
		"path": "../public/assets/salon-interior-Dt69uwDq.jpg"
	},
	"/assets/ServiceCard-v25B4K8a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f2-QNv/lbBCi4hPGLGS3kiE+h+O7O4\"",
		"mtime": "2026-10-25T12:04:29.243Z",
		"size": 1010,
		"path": "../public/assets/ServiceCard-v25B4K8a.js"
	},
	"/assets/services-CLTC98yC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"844-TDYeL+NnE2MCiXMD6DzeioKYgU4\"",
		"mtime": "2026-10-25T12:04:29.254Z",
		"size": 2116,
		"path": "../public/assets/services-CLTC98yC.js"
	},
	"/assets/service-hair-spa-D-C9mLtu.jpg": {
		"type": "image/jpeg",
		"etag": "\"18b6d-aTAxWkNCxWCvNqJz9Sues8PMcwE\"",
		"mtime": "2026-10-25T12:04:29.272Z",
		"size": 101229,
		"path": "../public/assets/service-hair-spa-D-C9mLtu.jpg"
	},
	"/assets/styles-RcoJ-k4g.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14620-KQt5+ZBf40GSXx7F4g+29zLB5j0\"",
		"mtime": "2026-10-25T12:04:29.318Z",
		"size": 83488,
		"path": "../public/assets/styles-RcoJ-k4g.css"
	},
	"/assets/service-styling-C0btXW04.jpg": {
		"type": "image/jpeg",
		"etag": "\"17353-0jOVpePyjBNvFLItQNgYu69v1n8\"",
		"mtime": "2026-10-25T12:04:29.275Z",
		"size": 95059,
		"path": "../public/assets/service-styling-C0btXW04.jpg"
	},
	"/assets/utils-GiAgysyv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2875e-hqnSlVBQ1vKtsr4QRP1r9P69wyc\"",
		"mtime": "2026-10-25T12:04:29.256Z",
		"size": 165726,
		"path": "../public/assets/utils-GiAgysyv.js"
	},
	"/assets/service-waxing-JKXSueIh.jpg": {
		"type": "image/jpeg",
		"etag": "\"165b4-zwewWxQhg+TOXPkHhzbH/+S8dIc\"",
		"mtime": "2026-10-25T12:04:29.308Z",
		"size": 91572,
		"path": "../public/assets/service-waxing-JKXSueIh.jpg"
	}
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
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_syShec = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_syShec
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
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
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
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
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
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
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
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
				context
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
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
