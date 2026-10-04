import { n as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { s as getServices, t as cn } from "./utils-BYDHnMYi.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-C4htRqxQ.mjs";
import { t as ServiceCard } from "./ServiceCard-Bdmi2t_B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DfjSaUcE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
  {
    value: "women",
    label: "For Women",
  },
  {
    value: "men",
    label: "For Men",
  },
];
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
          title: "Services & prices",
          subtitle:
            "Every treatment includes a consultation — no surprises at the counter.",
          align: "center",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          role: "tablist",
          "aria-label": "Service categories",
          className:
            "mx-auto mt-8 flex w-fit items-center gap-1 rounded-full bg-card p-1.5 border border-border shadow-2xl",
          children: CATEGORIES.map((c) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": category === c.value,
                onClick: () => setCategory(c.value),
                className: cn(
                  "relative rounded-full px-6 py-2.5 text-sm font-bold transition-colors",
                  category === c.value
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                ),
                children: [
                  category === c.value
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
                        layoutId: "service-tab-pill",
                        transition: {
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        },
                        className: "absolute inset-0 rounded-full bg-primary",
                      })
                    : null,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "relative z-10",
                    children: c.label,
                  }),
                ],
              },
              c.value,
            ),
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
          children: services.map((service, i) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ServiceCard,
              {
                service,
                index: i,
              },
              service.id,
            ),
          ),
        }),
      ],
    }),
  });
}
//#endregion
export { ServicesPage as component };
