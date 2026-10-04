import { a as getReviews } from "./utils-BYDHnMYi.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-C4htRqxQ.mjs";
import { t as ReviewCard } from "./ReviewCard-W6X36RFA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-DJ1dGDGv.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsPage() {
  const reviews = getReviews();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "px-4 py-12",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-6xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
          eyebrow: "In their words",
          title: "Client reviews",
          subtitle: "Unedited notes from the people who keep coming back.",
          align: "center",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "mt-10 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0",
          children: reviews.map((review, i) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ReviewCard,
              {
                review,
                index: i,
                className: "min-w-[82%] snap-center sm:min-w-0",
              },
              review.id,
            ),
          ),
        }),
      ],
    }),
  });
}
//#endregion
export { ReviewsPage as component };
