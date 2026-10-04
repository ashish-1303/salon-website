import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as cn } from "./utils-BYDHnMYi.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ReviewCard-W6X36RFA.js
var import_jsx_runtime = require_jsx_runtime();
var MAX_RATING = 5;
function ReviewCard({ review, index = 0, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
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
      amount: 0.25,
    },
    transition: {
      duration: 0.5,
      delay: Math.min(index * 0.06, 0.3),
      ease: [0.2, 0.8, 0.2, 1],
    },
    whileHover: { y: -4 },
    className: cn(
      "rounded-[2rem] bg-card p-7 border border-border shadow-2xl flex flex-col",
      className,
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-1 text-brand-dark",
        children: [
          Array.from({ length: MAX_RATING }).map((_, i) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Star,
              {
                className: cn(
                  "size-4",
                  i < review.rating ? "fill-primary" : "text-muted-foreground",
                ),
                "aria-hidden": "true",
              },
              i,
            ),
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "sr-only",
            children: [review.rating, " out of 5 stars"],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
        className: "mt-4 font-display text-lg sm:text-xl leading-snug",
        children: ["“", review.text, "”"],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
        className: "mt-6 flex items-center gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "size-11 rounded-full bg-secondary grid place-items-center font-display font-bold text-secondary-foreground",
            children: review.name.charAt(0),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "block font-bold",
                children: review.name,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: "block text-sm text-muted-foreground",
                children: [review.service, " client"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { ReviewCard as t };
