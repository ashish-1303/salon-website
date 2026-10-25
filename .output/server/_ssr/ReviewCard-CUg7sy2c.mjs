import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as cn } from "./utils-DRu1848-.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ReviewCard-CUg7sy2c.js
var import_jsx_runtime = require_jsx_runtime();
var MAX_RATING = 5;
function ReviewCard({ review, index = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
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
			amount: .25
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
		whileHover: { y: -2 },
		className: cn("flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_12px_34px_-28px_rgba(20,30,55,0.42)] sm:p-7", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 text-primary",
				children: [Array.from({ length: MAX_RATING }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: cn("size-4", i < review.rating ? "fill-primary" : "text-border"),
					"aria-hidden": "true"
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "sr-only",
					children: [review.rating, " out of 5 stars"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-4 font-display text-xl leading-snug text-foreground sm:text-2xl",
				children: [
					"“",
					review.text,
					"”"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-6 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-11 shrink-0 place-items-center rounded-full bg-secondary font-display text-lg font-semibold text-secondary-foreground",
					children: review.name.charAt(0)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-bold",
					children: review.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "block text-sm text-muted-foreground",
					children: [review.service, " client"]
				})] })]
			})
		]
	});
}
//#endregion
export { ReviewCard as t };
