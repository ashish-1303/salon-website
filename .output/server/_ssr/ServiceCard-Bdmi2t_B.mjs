import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceCard-Bdmi2t_B.js
var import_jsx_runtime = require_jsx_runtime();
function formatPrice(price) {
  return `$${price}`;
}
function formatDuration(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const hours = minutes / 60;
  return Number.isInteger(hours)
    ? `${hours} hr${hours > 1 ? "s" : ""}`
    : `${Math.floor(hours)} hr ${minutes % 60} min`;
}
function ServiceCard({ service, index = 0 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
    initial: {
      opacity: 0,
      y: 22,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.2,
    },
    transition: {
      duration: 0.5,
      delay: Math.min(index * 0.06, 0.3),
      ease: [0.2, 0.8, 0.2, 1],
    },
    whileHover: { y: -6 },
    className:
      "group overflow-hidden rounded-3xl bg-card border border-border shadow-2xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "overflow-hidden",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
          src: service.imageUrl,
          alt: service.name,
          loading: "lazy",
          width: 800,
          height: 600,
          className:
            "w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "p-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
            className: "font-display font-semibold text-xl",
            children: service.name,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-1 text-sm text-muted-foreground",
            children: service.description,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "mt-4 flex items-center justify-between text-sm font-bold",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text-brand-dark",
                children: formatPrice(service.price),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text-muted-foreground",
                children: formatDuration(service.durationMinutes),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { ServiceCard as t };
