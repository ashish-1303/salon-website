import { n as __toESM } from "../_runtime.mjs";
import { r as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { i as getGalleryImages, t as cn } from "./utils-DRu1848-.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-tVI8UM8s.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DdHN6351.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const images = getGalleryImages();
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(null);
	const active = activeIndex === null ? null : images[activeIndex];
	const close = (0, import_react.useCallback)(() => setActiveIndex(null), []);
	(0, import_react.useEffect)(() => {
		if (activeIndex === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [activeIndex, close]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The studio",
				title: "Gallery",
				subtitle: "Our space, our people, and the work that leaves the chair.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-9 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3",
				children: images.map((image, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					type: "button",
					onClick: () => setActiveIndex(i),
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .15
					},
					transition: {
						duration: .5,
						delay: Math.min(i * .04, .3)
					},
					whileHover: { y: -2 },
					className: "group mb-4 block w-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.src,
						alt: image.alt,
						loading: "lazy",
						className: cn("w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]", image.tall ? "aspect-3/4" : "aspect-4/3")
					})
				}, image.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: close,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": active.alt,
			className: "fixed inset-0 z-100 grid place-items-center bg-foreground/85 p-4 backdrop-blur-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					initial: {
						scale: .94,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .94,
						opacity: 0
					},
					transition: {
						duration: .3,
						ease: [
							.2,
							.8,
							.2,
							1
						]
					},
					src: active.src,
					alt: active.alt,
					onClick: (e) => e.stopPropagation(),
					className: "max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: close,
					"aria-label": "Close image",
					className: "absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6 sm:top-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute bottom-5 left-0 right-0 px-6 text-center text-sm text-white sm:bottom-6",
					children: active.alt
				})
			]
		}) : null })]
	});
}
//#endregion
export { GalleryPage as component };
