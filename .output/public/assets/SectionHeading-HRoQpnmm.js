import { _ as e, r as t, t as n } from "./utils-C8bnaApQ.js";
var r = e();
function i({
  title: e,
  subtitle: i,
  eyebrow: a,
  align: o = `left`,
  className: s,
}) {
  return (0, r.jsxs)(t.div, {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, amount: 0.4 },
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
    className: n(o === `center` && `text-center mx-auto max-w-2xl`, s),
    children: [
      a
        ? (0, r.jsx)(`span`, {
            className: `inline-flex items-center rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary`,
            children: a,
          })
        : null,
      (0, r.jsx)(`h2`, {
        className: n(
          `font-display font-bold text-3xl sm:text-4xl`,
          a && `mt-4`,
        ),
        children: e,
      }),
      i
        ? (0, r.jsx)(`p`, {
            className: `mt-2 text-muted-foreground`,
            children: i,
          })
        : null,
    ],
  });
}
export { i as t };
