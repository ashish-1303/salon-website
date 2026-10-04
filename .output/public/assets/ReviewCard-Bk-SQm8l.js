import { _ as e, r as t, t as n } from "./utils-C8bnaApQ.js";
import { a as r } from "./index-vTozBOF5.js";
var i = r(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  a = e(),
  o = 5;
function s({ review: e, index: r = 0, className: s }) {
  return (0, a.jsxs)(t.figure, {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, amount: 0.25 },
    transition: {
      duration: 0.5,
      delay: Math.min(r * 0.06, 0.3),
      ease: [0.2, 0.8, 0.2, 1],
    },
    whileHover: { y: -4 },
    className: n(
      `rounded-[2rem] bg-card p-7 border border-border shadow-2xl flex flex-col`,
      s,
    ),
    children: [
      (0, a.jsxs)(`div`, {
        className: `flex items-center gap-1 text-brand-dark`,
        children: [
          Array.from({ length: o }).map((t, r) =>
            (0, a.jsx)(
              i,
              {
                className: n(
                  `size-4`,
                  r < e.rating ? `fill-primary` : `text-muted-foreground`,
                ),
                "aria-hidden": `true`,
              },
              r,
            ),
          ),
          (0, a.jsxs)(`span`, {
            className: `sr-only`,
            children: [e.rating, ` out of 5 stars`],
          }),
        ],
      }),
      (0, a.jsxs)(`blockquote`, {
        className: `mt-4 font-display text-lg sm:text-xl leading-snug`,
        children: [`“`, e.text, `”`],
      }),
      (0, a.jsxs)(`figcaption`, {
        className: `mt-6 flex items-center gap-3`,
        children: [
          (0, a.jsx)(`span`, {
            className: `size-11 rounded-full bg-secondary grid place-items-center font-display font-bold text-secondary-foreground`,
            children: e.name.charAt(0),
          }),
          (0, a.jsxs)(`span`, {
            children: [
              (0, a.jsx)(`span`, {
                className: `block font-bold`,
                children: e.name,
              }),
              (0, a.jsxs)(`span`, {
                className: `block text-sm text-muted-foreground`,
                children: [e.service, ` client`],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { s as t };
