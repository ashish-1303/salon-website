import { _ as e, m as t } from "./utils-C8bnaApQ.js";
import { t as n } from "./ReviewCard-Bk-SQm8l.js";
import { t as r } from "./SectionHeading-HRoQpnmm.js";
var i = e();
function a() {
  let e = t();
  return (0, i.jsx)(`section`, {
    className: `px-4 py-12`,
    children: (0, i.jsxs)(`div`, {
      className: `mx-auto max-w-6xl`,
      children: [
        (0, i.jsx)(r, {
          eyebrow: `In their words`,
          title: `Client reviews`,
          subtitle: `Unedited notes from the people who keep coming back.`,
          align: `center`,
        }),
        (0, i.jsx)(`div`, {
          className: `mt-10 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0`,
          children: e.map((e, t) =>
            (0, i.jsx)(
              n,
              {
                review: e,
                index: t,
                className: `min-w-[82%] snap-center sm:min-w-0`,
              },
              e.id,
            ),
          ),
        }),
      ],
    }),
  });
}
export { a as component };
