import { _ as e, r as t } from "./utils-C8bnaApQ.js";
var n = e();
function r({ children: e, delay: r = 0, className: i }) {
  return (0, n.jsx)(t.div, {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, amount: 0.25 },
    transition: { duration: 0.55, delay: r, ease: [0.2, 0.8, 0.2, 1] },
    className: i,
    children: e,
  });
}
export { r as t };
