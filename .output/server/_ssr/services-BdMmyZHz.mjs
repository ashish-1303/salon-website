import { n as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { s as getServices, t as cn } from "./utils-DRu1848-.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-tVI8UM8s.mjs";
import { t as ServiceCard } from "./ServiceCard-Cw_b6Bbz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BdMmyZHz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [{
	value: "women",
	label: "For Women"
}, {
	value: "men",
	label: "For Men"
}];
function ServicesPage() {
	const [category, setCategory] = (0, import_react.useState)("women");
	const services = getServices(category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The full menu",
					title: "Services",
					subtitle: "Every treatment includes a consultation to understand your needs.",
					align: "center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": "Service categories",
					className: "mx-auto mt-8 flex w-full max-w-sm items-center gap-1 rounded-full border border-border bg-white p-1.5 shadow-sm",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						id: `service-tab-${c.value}`,
						"aria-controls": "service-list",
						"aria-selected": category === c.value,
						tabIndex: category === c.value ? 0 : -1,
						onClick: () => setCategory(c.value),
						onKeyDown: (event) => {
							const currentIndex = CATEGORIES.findIndex((item) => item.value === category);
							let nextIndex = currentIndex;
							if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % CATEGORIES.length;
							else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
							else if (event.key === "Home") nextIndex = 0;
							else if (event.key === "End") nextIndex = CATEGORIES.length - 1;
							else return;
							event.preventDefault();
							const nextCategory = CATEGORIES[nextIndex];
							if (!nextCategory) return;
							setCategory(nextCategory.value);
							document.getElementById(`service-tab-${nextCategory.value}`)?.focus();
						},
						className: cn("relative min-h-11 flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", category === c.value ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
						children: [category === c.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "service-tab-pill",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 32
							},
							className: "absolute inset-0 rounded-full bg-primary"
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10",
							children: c.label
						})]
					}, c.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "service-list",
					role: "tabpanel",
					"aria-labelledby": `service-tab-${category}`,
					tabIndex: 0,
					className: "mt-9 grid gap-5 outline-none focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-2 lg:grid-cols-3",
					children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						service,
						index: i
					}, service.id))
				})
			]
		})
	});
}
//#endregion
export { ServicesPage as component };
