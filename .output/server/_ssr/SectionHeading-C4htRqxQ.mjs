import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as cn } from "./utils-BYDHnMYi.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-C4htRqxQ.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  className,
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
    initial: {
      opacity: 0,
      y: 18,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.4,
    },
    transition: {
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
    className: cn(
      align === "center" && "text-center mx-auto max-w-2xl",
      className,
    ),
    children: [
      eyebrow
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "inline-flex items-center rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary",
            children: eyebrow,
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        className: cn(
          "font-display font-bold text-3xl sm:text-4xl",
          eyebrow && "mt-4",
        ),
        children: title,
      }),
      subtitle
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-2 text-muted-foreground",
            children: subtitle,
          })
        : null,
    ],
  });
}
//#endregion
export { SectionHeading as t };
