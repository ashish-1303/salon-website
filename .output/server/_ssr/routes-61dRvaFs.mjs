import { t as motion } from "../_libs/framer-motion+[...].mjs";
import {
  n as getFeaturedReviews,
  o as getSalonInfo,
  r as getFeaturedServices,
} from "./utils-BYDHnMYi.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Cb6-52kX.mjs";
import { t as Reveal } from "./Reveal-BotK5AEV.mjs";
import { t as SectionHeading } from "./SectionHeading-C4htRqxQ.mjs";
import {
  i as Scissors,
  r as Sparkles,
  u as Leaf,
} from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ReviewCard } from "./ReviewCard-W6X36RFA.mjs";
import { t as ServiceCard } from "./ServiceCard-Bdmi2t_B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-61dRvaFs.js
var import_jsx_runtime = require_jsx_runtime();
var salon_interior_default = "/assets/salon-interior-Dt69uwDq.jpg";
var WHY_US = [
  {
    Icon: Scissors,
    text: "Certified unisex stylists",
  },
  {
    Icon: Leaf,
    text: "Organic, cruelty-free products",
  },
  {
    Icon: Sparkles,
    text: "Relaxing, plant-filled space",
  },
];
function HomePage() {
  const salon = getSalonInfo();
  const featuredServices = getFeaturedServices(4);
  const featuredReviews = getFeaturedReviews(3);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "px-4 pt-10 pb-10",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-8 items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
                initial: {
                  opacity: 0,
                  y: 24,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                },
                transition: {
                  duration: 0.6,
                  ease: [0.2, 0.8, 0.2, 1],
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "inline-flex items-center rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary",
                    children: "Unisex hair & beauty studio",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                    className:
                      "mt-5 font-display font-bold leading-[1.05] text-[2.5rem] sm:text-6xl",
                    children: [
                      "Where style is ",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-primary",
                        children: "sculpted",
                      }),
                      " with softness.",
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-5 max-w-md text-lg text-muted-foreground",
                    children:
                      "A calm, sunlit salon for every face and every gender. Cuts, colour and care crafted to feel like a little ritual.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-8 flex flex-wrap items-center gap-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                        asChild: true,
                        size: "lg",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          Link,
                          {
                            to: "/contact",
                            children: "Book Appointment",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                        asChild: true,
                        variant: "soft",
                        size: "lg",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          Link,
                          {
                            to: "/services",
                            children: "Explore services",
                          },
                        ),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "size-2.5 rounded-full bg-primary",
                          }),
                          "4.9 rating",
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "size-2.5 rounded-full bg-secondary",
                          }),
                          "12k+ happy clients",
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "size-2.5 rounded-full bg-accent",
                          }),
                          "20 min avg wait",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
                initial: {
                  opacity: 0,
                  scale: 0.97,
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                },
                transition: {
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.2, 0.8, 0.2, 1],
                },
                className: "relative",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-secondary/40 to-primary/40 p-3 shadow-2xl",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "img",
                      {
                        src: salon_interior_default,
                        alt: `Inside ${salon.name}, a sunlit unisex salon with clay-toned styling chairs`,
                        width: 1024,
                        height: 1280,
                        className:
                          "w-full aspect-[4/5] rounded-[2rem] object-cover",
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "absolute -bottom-5 left-2 sm:-left-4 rounded-2xl bg-card px-5 py-3 shadow-xl flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "size-10 rounded-full bg-secondary grid place-items-center text-secondary-foreground font-display font-bold",
                        children: "5★",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "text-sm",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "block font-bold",
                            children: "Loved by all",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "block text-muted-foreground",
                            children: "For men & women",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "px-4 py-14",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mx-auto max-w-6xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-end justify-between gap-4 mb-7",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                    title: "Signature rituals",
                    subtitle: "A taste of what our stylists do best.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                    to: "/services",
                    className:
                      "hidden sm:block shrink-0 rounded-full bg-card px-4 py-2 text-sm font-bold text-foreground border border-border hover:bg-card/60 transition-colors",
                    children: "View all",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
                children: featuredServices.map((service, i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ServiceCard,
                    {
                      service,
                      index: i,
                    },
                    service.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "px-4 py-8",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mx-auto max-w-6xl grid lg:grid-cols-2 gap-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                className: "h-full",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "h-full rounded-[2rem] bg-gradient-to-br from-card to-background p-8 text-foreground border border-border shadow-2xl",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                      className: "font-display font-bold text-3xl",
                      children: ["Why ", salon.name],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                      className: "mt-6 space-y-4",
                      children: WHY_US.map(({ Icon, text }) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "li",
                          {
                            className: "flex gap-3 items-start",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                Icon,
                                {
                                  className:
                                    "mt-0.5 size-5 shrink-0 text-primary",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className: "text-foreground/90 font-semibold",
                                  children: text,
                                },
                              ),
                            ],
                          },
                          text,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              featuredReviews[0]
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
                    review: featuredReviews[0],
                    className: "h-full",
                  })
                : null,
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "px-4 py-14",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mx-auto max-w-6xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                title: "What people say",
                subtitle: "A few words from the chairs this month.",
                className: "mb-7",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid md:grid-cols-3 gap-5",
                children: featuredReviews.map((review, i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ReviewCard,
                    {
                      review,
                      index: i,
                    },
                    review.id,
                  ),
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-8",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  asChild: true,
                  variant: "soft",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                    to: "/reviews",
                    children: "Read all reviews",
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    },
  );
}
//#endregion
export { HomePage as component };
