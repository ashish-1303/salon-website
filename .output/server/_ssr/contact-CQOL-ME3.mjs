import { o as getSalonInfo, t as cn } from "./utils-DRu1848-.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Dd_fDx_y.mjs";
import { t as Reveal } from "./Reveal-BotK5AEV.mjs";
import { t as SectionHeading } from "./SectionHeading-tVI8UM8s.mjs";
import { a as Phone, c as Mail, s as MapPin, u as Clock } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CQOL-ME3.js
var import_jsx_runtime = require_jsx_runtime();
var enquirySchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(60, "That name is too long"),
	phone: stringType().trim().min(7, "Please enter a valid phone number").max(20, "That number is too long").regex(/^[0-9+()\-\s]+$/, "Only digits, spaces and + ( ) - are allowed"),
	message: stringType().trim().min(10, "Tell us a little more (10 characters minimum)").max(500, "Please keep it under 500 characters")
});
var inputClass = "min-h-12 w-full rounded-xl border border-input bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";
function ContactPage() {
	const salon = getSalonInfo();
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: u(enquirySchema),
		defaultValues: {
			name: "",
			phone: "",
			message: ""
		}
	});
	const onSubmit = () => {
		toast.success("Demo only: your enquiry was not sent. Please contact the salon directly.");
		reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Say hello",
				title: "Let's Create Your Perfect Look",
				subtitle: "Connect with us to plan your next salon experience",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-9 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-semibold text-foreground",
							children: salon.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-5 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: salon.address })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${salon.phone.replace(/[^0-9+]/g, "")}`,
										className: "hover:text-foreground",
										children: salon.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "size-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${salon.email}`,
										className: "hover:text-foreground",
										children: salon.email
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "size-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "space-y-1",
										children: salon.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-wrap gap-x-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: h.day
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.time })]
										}, h.day))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 overflow-hidden rounded-2xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: `Map showing ${salon.name}`,
								src: salon.mapEmbedUrl,
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								className: "h-64 w-full border-0"
							})
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit(onSubmit),
						noValidate: true,
						className: "rounded-2xl border border-border bg-accent/40 p-6 text-foreground sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl font-semibold",
								children: "Send an enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: "This demo form is not connected yet. No message will be sent."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "name",
											className: "mb-2 block text-sm font-semibold text-foreground",
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "name",
											...register("name"),
											placeholder: "Your full name",
											"aria-invalid": !!errors.name,
											"aria-describedby": errors.name ? "name-error" : void 0,
											autoComplete: "name",
											className: cn(inputClass, errors.name && "border-destructive")
										}),
										errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "name-error",
											className: "mt-1.5 text-sm font-semibold text-destructive",
											children: errors.name.message
										}) : null
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "phone",
											className: "mb-2 block text-sm font-semibold text-foreground",
											children: "Phone"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phone",
											type: "tel",
											...register("phone"),
											placeholder: "e.g. +91 98200 12345",
											"aria-invalid": !!errors.phone,
											"aria-describedby": errors.phone ? "phone-error" : void 0,
											autoComplete: "tel",
											className: cn(inputClass, errors.phone && "border-destructive")
										}),
										errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "phone-error",
											className: "mt-1.5 text-sm font-semibold text-destructive",
											children: errors.phone.message
										}) : null
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "message",
											className: "mb-2 block text-sm font-semibold text-foreground",
											children: "Message"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "message",
											rows: 4,
											...register("message"),
											placeholder: "Which service, and when suits you?",
											"aria-invalid": !!errors.message,
											"aria-describedby": errors.message ? "message-error" : void 0,
											className: cn(inputClass, "resize-none", errors.message && "border-destructive")
										}),
										errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "message-error",
											className: "mt-1.5 text-sm font-semibold text-destructive",
											children: errors.message.message
										}) : null
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "soft",
								size: "lg",
								disabled: isSubmitting,
								className: "mt-7 w-full bg-background text-foreground hover:bg-background/90",
								children: isSubmitting ? "Sending…" : "Send enquiry"
							})
						]
					})
				})]
			})]
		})
	});
}
//#endregion
export { ContactPage as component };
