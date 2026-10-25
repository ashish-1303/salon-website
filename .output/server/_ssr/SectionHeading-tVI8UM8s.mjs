import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as cn } from "./utils-DRu1848-.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-tVI8UM8s.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ title, subtitle, eyebrow, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 18
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .4
		},
		transition: {
			duration: .5,
			ease: [
				.2,
				.8,
				.2,
				1
			]
		},
		className: cn(align === "center" && "mx-auto max-w-2xl text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl", eyebrow && "mt-4"),
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-7 text-muted-foreground sm:text-lg",
				children: subtitle
			}) : null
		]
	});
}
//#endregion
export { SectionHeading as t };
