import { _ as e, r as t } from "./utils-C8bnaApQ.js";
function n(e) {
  return `$${e}`;
}
function r(e) {
  if (e < 60) return `${e} min`;
  let t = e / 60;
  return Number.isInteger(t)
    ? `${t} hr${t > 1 ? `s` : ``}`
    : `${Math.floor(t)} hr ${e % 60} min`;
}
var i = e();
function a({ service: e, index: a = 0 }) {
  return (0, i.jsxs)(t.article, {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, amount: 0.2 },
    transition: {
      duration: 0.5,
      delay: Math.min(a * 0.06, 0.3),
      ease: [0.2, 0.8, 0.2, 1],
    },
    whileHover: { y: -6 },
    className: `group overflow-hidden rounded-3xl bg-card border border-border shadow-2xl`,
    children: [
      (0, i.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, i.jsx)(`img`, {
          src: e.imageUrl,
          alt: e.name,
          loading: `lazy`,
          width: 800,
          height: 600,
          className: `w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105`,
        }),
      }),
      (0, i.jsxs)(`div`, {
        className: `p-5`,
        children: [
          (0, i.jsx)(`h3`, {
            className: `font-display font-semibold text-xl`,
            children: e.name,
          }),
          (0, i.jsx)(`p`, {
            className: `mt-1 text-sm text-muted-foreground`,
            children: e.description,
          }),
          (0, i.jsxs)(`div`, {
            className: `mt-4 flex items-center justify-between text-sm font-bold`,
            children: [
              (0, i.jsx)(`span`, {
                className: `text-brand-dark`,
                children: n(e.price),
              }),
              (0, i.jsx)(`span`, {
                className: `text-muted-foreground`,
                children: r(e.durationMinutes),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { a as t };
