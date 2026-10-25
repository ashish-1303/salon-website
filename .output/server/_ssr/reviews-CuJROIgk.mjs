import { a as getReviews } from "./utils-DRu1848-.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-tVI8UM8s.mjs";
import { t as ReviewCard } from "./ReviewCard-CUg7sy2c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-CuJROIgk.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsPage() {
	const reviews = getReviews();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "In their words",
				title: "Client reviews",
				subtitle: "A little love from our clients.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3",
				children: reviews.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
					review,
					index: i,
					className: "min-w-[82%] snap-center sm:min-w-0"
				}, review.id))
			})]
		})
	});
}
//#endregion
export { ReviewsPage as component };
