import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-BotK5AEV.js
var import_jsx_runtime = require_jsx_runtime();
/** Scroll-triggered fade + rise used across the site. */
function Reveal({ children, delay = 0, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
      duration: 0.55,
      delay,
      ease: [0.2, 0.8, 0.2, 1],
    },
    className,
    children,
  });
}
//#endregion
export { Reveal as t };
