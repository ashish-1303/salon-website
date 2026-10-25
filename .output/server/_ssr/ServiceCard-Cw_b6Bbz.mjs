import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceCard-Cw_b6Bbz.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 22
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: .5,
			delay: Math.min(index * .06, .3),
			ease: [
				.2,
				.8,
				.2,
				1
			]
		},
		whileHover: { y: -3 },
		className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_34px_-28px_rgba(20,30,55,0.42)] transition-shadow hover:shadow-[0_18px_42px_-30px_rgba(20,30,55,0.42)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: service.imageUrl,
				alt: service.name,
				loading: "lazy",
				width: 800,
				height: 600,
				className: "aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-semibold leading-tight text-foreground",
				children: service.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: service.description
			})]
		})]
	});
}
//#endregion
export { ServiceCard as t };
