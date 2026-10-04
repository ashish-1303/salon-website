import { n as __toESM } from "../_runtime.mjs";
import {
  n as AnimatePresence,
  t as motion,
} from "../_libs/framer-motion+[...].mjs";
import { i as getGalleryImages, t as cn } from "./utils-BYDHnMYi.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-C4htRqxQ.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DEd-I0Mt.js
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mx-auto max-w-6xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "The studio",
            title: "Gallery",
            subtitle:
              "Our space, our people, and the work that leaves the chair.",
            align: "center",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]",
            children: images.map((image, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                motion.button,
                {
                  type: "button",
                  onClick: () => setActiveIndex(i),
                  initial: {
                    opacity: 0,
                    y: 20,
                  },
                  whileInView: {
                    opacity: 1,
                    y: 0,
                  },
                  viewport: {
                    once: true,
                    amount: 0.15,
                  },
                  transition: {
                    duration: 0.5,
                    delay: Math.min(i * 0.04, 0.3),
                  },
                  whileHover: { y: -4 },
                  className:
                    "mb-5 block w-full overflow-hidden rounded-3xl border border-border bg-card shadow-xl group",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                    src: image.src,
                    alt: image.alt,
                    loading: "lazy",
                    className: cn(
                      "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                      image.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                    ),
                  }),
                },
                image.id,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
        children: active
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: close,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": active.alt,
              className:
                "fixed inset-0 z-100 grid place-items-center bg-ink/80 backdrop-blur-sm p-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
                  initial: {
                    scale: 0.94,
                    opacity: 0,
                  },
                  animate: {
                    scale: 1,
                    opacity: 1,
                  },
                  exit: {
                    scale: 0.94,
                    opacity: 0,
                  },
                  transition: {
                    duration: 0.3,
                    ease: [0.2, 0.8, 0.2, 1],
                  },
                  src: active.src,
                  alt: active.alt,
                  onClick: (e) => e.stopPropagation(),
                  className:
                    "max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-2xl",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  onClick: close,
                  "aria-label": "Close image",
                  className:
                    "absolute right-5 top-5 size-11 rounded-full bg-card/90 text-foreground grid place-items-center hover:bg-card transition-colors",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                    className: "size-5",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "absolute bottom-6 left-0 right-0 text-center text-sm text-cream/80 px-6",
                  children: active.alt,
                }),
              ],
            })
          : null,
      }),
    ],
  });
}
//#endregion
export { GalleryPage as component };
