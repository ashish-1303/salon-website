import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as getFeaturedReviews, o as getSalonInfo, r as getFeaturedServices } from "./utils-DRu1848-.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Dd_fDx_y.mjs";
import { t as Reveal } from "./Reveal-BotK5AEV.mjs";
import { t as SectionHeading } from "./SectionHeading-tVI8UM8s.mjs";
import { i as Sparkles, l as HeartHandshake, n as UserRound, s as MapPin } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ReviewCard } from "./ReviewCard-CUg7sy2c.mjs";
import { t as ServiceCard } from "./ServiceCard-Cw_b6Bbz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DX4qu0o2.js
var import_jsx_runtime = require_jsx_runtime();
var salon_interior_default = "/assets/salon-interior-Dt69uwDq.jpg";
var WHY_US = [
	{
		Icon: UserRound,
		title: "Personalised Attention",
		description: "Services tailored to your preferences, style, and individual needs."
	},
	{
		Icon: Sparkles,
		title: "A Style That Feels Like You",
		description: "Thoughtful styling focused on helping you feel confident in your look."
	},
	{
		Icon: HeartHandshake,
		title: "A Welcoming Experience",
		description: "A friendly, comfortable salon experience with attention to your needs."
	}
];
function HomePage() {
	const salon = getSalonInfo();
	const featuredServices = getFeaturedServices(4);
	const featuredReviews = getFeaturedReviews(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pb-12 pt-10 sm:pb-16 sm:pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: [
							.2,
							.8,
							.2,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-secondary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-3.5",
								"aria-hidden": "true"
							}), "Naranpura, Ahmedabad"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl",
							children: ["A little more care. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "A lot more you."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",
							children: "Hair, skin and grooming, thoughtfully brought together at AK Salon. Find your next everyday refresh in Naranpura."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "min-h-12 px-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Send an enquiry"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "soft",
								size: "lg",
								className: "min-h-12 px-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Explore services"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex items-center gap-3 text-sm font-medium text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-px w-8 bg-primary/50",
								"aria-hidden": "true"
							}), "Hair · skin · grooming"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .97
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .7,
						delay: .1,
						ease: [
							.2,
							.8,
							.2,
							1
						]
					},
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[2rem] bg-accent p-2.5 sm:rounded-[2.5rem] sm:p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: salon_interior_default,
							alt: `Salon interior at ${salon.name}`,
							width: 1024,
							height: 1280,
							className: "aspect-4/3 w-full rounded-[1.5rem] object-cover sm:aspect-5/4 sm:rounded-[2rem] lg:aspect-4/5"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-5 left-5 flex max-w-[calc(100%-2.5rem)] items-center gap-3 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-4",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold text-foreground",
								children: "Visit AK Salon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-muted-foreground",
								children: "Naranpura, Ahmedabad"
							})]
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-white px-4 py-14 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-7 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						title: "Find Your Perfect Style",
						subtitle: "Explore our services and discover a look that feels uniquely yours."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "hidden shrink-0 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block",
						children: "View all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: featuredServices.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						service,
						index: i
					}, service.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-14 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border bg-accent/45 p-7 text-foreground sm:p-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl font-semibold",
							children: ["Why ", salon.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-5",
							children: WHY_US.map(({ Icon, title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "mt-0.5 size-5 shrink-0 text-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold leading-6 text-foreground",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-6 text-muted-foreground",
										children: description
									})]
								})]
							}, title))
						})]
					})
				}), featuredReviews[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
					review: featuredReviews[0],
					className: "h-full"
				}) : null]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-white px-4 py-14 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						title: "What people say",
						subtitle: "A little love from our clients",
						className: "mb-7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-5",
						children: featuredReviews.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
							review,
							index: i
						}, review.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reviews",
								children: "Read all reviews"
							})
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
