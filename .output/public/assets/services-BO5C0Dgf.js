import { _ as e, b as t, g as n, r, t as i, v as a } from "./utils-C8bnaApQ.js";
import { t as o } from "./SectionHeading-HRoQpnmm.js";
import { t as s } from "./ServiceCard-Dr8-rnaB.js";
var c = t(a()),
  l = e(),
  u = [
    { value: `women`, label: `For Women` },
    { value: `men`, label: `For Men` },
  ];
function d() {
  let [e, t] = (0, c.useState)(`women`),
    a = n(e);
  return (0, l.jsx)(`section`, {
    className: `px-4 py-12`,
    children: (0, l.jsxs)(`div`, {
      className: `mx-auto max-w-6xl`,
      children: [
        (0, l.jsx)(o, {
          eyebrow: `The full menu`,
          title: `Services & prices`,
          subtitle: `Every treatment includes a consultation — no surprises at the counter.`,
          align: `center`,
        }),
        (0, l.jsx)(`div`, {
          role: `tablist`,
          "aria-label": `Service categories`,
          className: `mx-auto mt-8 flex w-fit items-center gap-1 rounded-full bg-card p-1.5 border border-border shadow-2xl`,
          children: u.map((n) =>
            (0, l.jsxs)(
              `button`,
              {
                type: `button`,
                role: `tab`,
                "aria-selected": e === n.value,
                onClick: () => t(n.value),
                className: i(
                  `relative rounded-full px-6 py-2.5 text-sm font-bold transition-colors`,
                  e === n.value
                    ? `text-primary-foreground`
                    : `text-muted-foreground hover:text-foreground`,
                ),
                children: [
                  e === n.value
                    ? (0, l.jsx)(r.span, {
                        layoutId: `service-tab-pill`,
                        transition: {
                          type: `spring`,
                          stiffness: 380,
                          damping: 32,
                        },
                        className: `absolute inset-0 rounded-full bg-primary`,
                      })
                    : null,
                  (0, l.jsx)(`span`, {
                    className: `relative z-10`,
                    children: n.label,
                  }),
                ],
              },
              n.value,
            ),
          ),
        }),
        (0, l.jsx)(`div`, {
          className: `mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: a.map((e, t) =>
            (0, l.jsx)(s, { service: e, index: t }, e.id),
          ),
        }),
      ],
    }),
  });
}
export { d as component };
