import { _ as e, b as t, p as n, r, t as i, v as a } from "./utils-C8bnaApQ.js";
import { i as o, r as s } from "./index-vTozBOF5.js";
import { t as c } from "./SectionHeading-HRoQpnmm.js";
var l = t(a()),
  u = e();
function d() {
  let e = n(),
    [t, a] = (0, l.useState)(null),
    d = t === null ? null : e[t],
    f = (0, l.useCallback)(() => a(null), []);
  return (
    (0, l.useEffect)(() => {
      if (t === null) return;
      let e = (e) => {
        e.key === `Escape` && f();
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [t, f]),
    (0, u.jsxs)(`section`, {
      className: `px-4 py-12`,
      children: [
        (0, u.jsxs)(`div`, {
          className: `mx-auto max-w-6xl`,
          children: [
            (0, u.jsx)(c, {
              eyebrow: `The studio`,
              title: `Gallery`,
              subtitle: `Our space, our people, and the work that leaves the chair.`,
              align: `center`,
            }),
            (0, u.jsx)(`div`, {
              className: `mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]`,
              children: e.map((e, t) =>
                (0, u.jsx)(
                  r.button,
                  {
                    type: `button`,
                    onClick: () => a(t),
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0, amount: 0.15 },
                    transition: {
                      duration: 0.5,
                      delay: Math.min(t * 0.04, 0.3),
                    },
                    whileHover: { y: -4 },
                    className: `mb-5 block w-full overflow-hidden rounded-3xl border border-border bg-card shadow-xl group`,
                    children: (0, u.jsx)(`img`, {
                      src: e.src,
                      alt: e.alt,
                      loading: `lazy`,
                      className: i(
                        `w-full object-cover transition-transform duration-700 group-hover:scale-105`,
                        e.tall ? `aspect-[3/4]` : `aspect-[4/3]`,
                      ),
                    }),
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
        (0, u.jsx)(s, {
          children: d
            ? (0, u.jsxs)(r.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: f,
                role: `dialog`,
                "aria-modal": `true`,
                "aria-label": d.alt,
                className: `fixed inset-0 z-100 grid place-items-center bg-ink/80 backdrop-blur-sm p-4`,
                children: [
                  (0, u.jsx)(r.img, {
                    initial: { scale: 0.94, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.94, opacity: 0 },
                    transition: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] },
                    src: d.src,
                    alt: d.alt,
                    onClick: (e) => e.stopPropagation(),
                    className: `max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-2xl`,
                  }),
                  (0, u.jsx)(`button`, {
                    type: `button`,
                    onClick: f,
                    "aria-label": `Close image`,
                    className: `absolute right-5 top-5 size-11 rounded-full bg-card/90 text-foreground grid place-items-center hover:bg-card transition-colors`,
                    children: (0, u.jsx)(o, { className: `size-5` }),
                  }),
                  (0, u.jsx)(`p`, {
                    className: `absolute bottom-6 left-0 right-0 text-center text-sm text-cream/80 px-6`,
                    children: d.alt,
                  }),
                ],
              })
            : null,
        }),
      ],
    })
  );
}
export { d as component };
