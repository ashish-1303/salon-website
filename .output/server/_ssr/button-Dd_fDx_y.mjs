import { n as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-DRu1848-.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-Dd_fDx_y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
			soft: "border border-border bg-white text-foreground hover:border-primary/40 hover:bg-muted",
			ghost: "text-foreground/75 hover:bg-muted hover:text-foreground",
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			sm: "px-5 py-2.5 text-sm",
			md: "px-7 py-3.5 text-base",
			lg: "px-8 py-4 text-base",
			default: "h-10 px-4 py-2 text-sm",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
