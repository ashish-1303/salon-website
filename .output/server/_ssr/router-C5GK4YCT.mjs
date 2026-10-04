import { n as __toESM } from "../_runtime.mjs";
import {
  n as AnimatePresence,
  t as motion,
} from "../_libs/framer-motion+[...].mjs";
import { o as getSalonInfo } from "./utils-BYDHnMYi.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import {
  n as require_jsx_runtime,
  t as QueryClientProvider,
} from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Cb6-52kX.mjs";
import {
  d as Instagram,
  f as Facebook,
  o as Music2,
  s as Menu,
  t as X,
} from "../_libs/lucide-react.mjs";
import {
  c as HeadContent,
  d as Outlet,
  f as lazyRouteComponent,
  g as useRouter,
  h as Link,
  m as createRootRouteWithContext,
  p as createFileRoute,
  s as Scripts,
  u as createRouter,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C5GK4YCT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BXS0HATw.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message,
    ...(stack !== void 0 && { stack }),
    filename: window.location.pathname,
  });
}
var QUICK_LINKS = [
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Reviews",
    to: "/reviews",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
var SOCIALS = [
  {
    label: "Instagram",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    Icon: Facebook,
  },
  {
    label: "TikTok",
    Icon: Music2,
  },
];
function Footer() {
  const salon = getSalonInfo();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    className: "px-4 pb-8 pt-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "mx-auto max-w-6xl rounded-[2rem] bg-ink text-cream/90 px-6 sm:px-8 py-10",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "flex flex-col md:flex-row md:items-center justify-between gap-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
              to: "/",
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "size-9 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-display font-bold",
                  children: "V",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "font-display font-semibold text-lg",
                  children: salon.name,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-cream/70",
              children: QUICK_LINKS.map((link) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Link,
                  {
                    to: link.to,
                    className: "hover:text-cream transition-colors",
                    children: link.label,
                  },
                  link.to,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "flex items-center gap-3",
              children: SOCIALS.map(({ label, Icon }) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "a",
                  {
                    href: "#",
                    "aria-label": label,
                    className:
                      "size-9 rounded-full bg-foreground/10 grid place-items-center hover:bg-foreground/20 transition-colors",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Icon,
                      { className: "size-4" },
                    ),
                  },
                  label,
                ),
              ),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          className: "mt-8 text-sm text-cream/50",
          children: [
            salon.address,
            " · ",
            salon.phone,
            " · ",
            salon.hours[0]?.day,
            " ",
            salon.hours[0]?.time,
          ],
        }),
      ],
    }),
  });
}
var NAV_LINKS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Reviews",
    to: "/reviews",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
function Navbar() {
  const [open, setOpen] = (0, import_react.useState)(false);
  const salon = getSalonInfo();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
    className: "sticky top-0 z-50 px-4 pt-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
      className:
        "mx-auto max-w-6xl rounded-3xl md:rounded-full bg-background/80 backdrop-blur-md px-5 py-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)] border border-border",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
              to: "/",
              className: "flex items-center gap-2",
              onClick: () => setOpen(false),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "size-9 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-display font-bold text-lg shadow-inner",
                  children: "V",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "font-display font-semibold text-lg tracking-tight",
                  children: salon.name,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "hidden md:flex items-center gap-7 text-sm font-semibold text-muted-foreground",
              children: NAV_LINKS.map((link) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Link,
                  {
                    to: link.to,
                    activeOptions: { exact: link.to === "/" },
                    activeProps: { className: "text-brand-dark" },
                    className: "hover:text-foreground transition-colors",
                    children: link.label,
                  },
                  link.to,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              asChild: true,
              size: "sm",
              className: "hidden md:inline-flex",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/contact",
                children: "Book Appointment",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              type: "button",
              "aria-label": open ? "Close menu" : "Open menu",
              "aria-expanded": open,
              onClick: () => setOpen((v) => !v),
              className:
                "md:hidden size-10 rounded-full border border-border grid place-items-center text-foreground",
              children: open
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                    className: "size-5",
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
                    className: "size-5",
                  }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
          initial: false,
          children: open
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
                initial: {
                  height: 0,
                  opacity: 0,
                },
                animate: {
                  height: "auto",
                  opacity: 1,
                },
                exit: {
                  height: 0,
                  opacity: 0,
                },
                transition: {
                  duration: 0.28,
                  ease: [0.2, 0.8, 0.2, 1],
                },
                className: "md:hidden overflow-hidden",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "pt-4 pb-1 flex flex-col gap-1",
                  children: [
                    NAV_LINKS.map((link) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        Link,
                        {
                          to: link.to,
                          activeOptions: { exact: link.to === "/" },
                          activeProps: {
                            className: "text-primary bg-secondary",
                          },
                          onClick: () => setOpen(false),
                          className:
                            "rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary/50",
                          children: link.label,
                        },
                        link.to,
                      ),
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      asChild: true,
                      size: "sm",
                      className: "mt-2 w-full",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        Link,
                        {
                          to: "/contact",
                          onClick: () => setOpen(false),
                          children: "Book Appointment",
                        },
                      ),
                    }),
                  ],
                }),
              })
            : null,
        }),
      ],
    }),
  });
}
var Toaster$1 = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...props,
  });
};
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Glow & Grace — Unisex Salon" },
      {
        name: "description",
        content: "A calm, sunlit unisex hair and beauty salon.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,700;6..12,800&display=swap",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
        ],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
    client: queryClient,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "min-h-screen bg-background font-body text-foreground antialiased overflow-x-hidden flex flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
            className: "flex-1",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
        position: "top-center",
        richColors: true,
      }),
    ],
  });
}
var $$splitComponentImporter$4 = () => import("./routes-61dRvaFs.mjs");
var Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glow & Grace — Unisex Hair & Beauty Salon" },
      {
        name: "description",
        content:
          "A calm, sunlit unisex salon for cuts, colour, facials and spa rituals. Book your appointment at Glow & Grace.",
      },
      {
        property: "og:title",
        content: "Glow & Grace — Unisex Hair & Beauty Salon",
      },
      {
        property: "og:description",
        content:
          "Cuts, colour and care for every face and every gender. Book your chair today.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
var $$splitComponentImporter$3 = () => import("./contact-Dit1cIM3.mjs");
var Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — Glow & Grace Salon" },
      {
        name: "description",
        content:
          "Find our address, opening hours and phone number, or send an enquiry to book your appointment at Glow & Grace.",
      },
      {
        property: "og:title",
        content: "Contact & Bookings — Glow & Grace Salon",
      },
      {
        property: "og:description",
        content: "Visit us, call us, or send a booking enquiry.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
var $$splitComponentImporter$2 = () => import("./gallery-DEd-I0Mt.mjs");
var Route$2 = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Glow & Grace Salon" },
      {
        name: "description",
        content:
          "Photos of our salon interior, styling work and before-and-after transformations at Glow & Grace.",
      },
      {
        property: "og:title",
        content: "Gallery — Glow & Grace Salon",
      },
      {
        property: "og:description",
        content: "A look inside the studio and the work we do there.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
var $$splitComponentImporter$1 = () => import("./reviews-DJ1dGDGv.mjs");
var Route$1 = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Glow & Grace Salon" },
      {
        name: "description",
        content:
          "Read honest reviews from Glow & Grace clients on cuts, colour, shaves, facials and bridal makeup.",
      },
      {
        property: "og:title",
        content: "Client Reviews — Glow & Grace Salon",
      },
      {
        property: "og:description",
        content: "What our clients say after sitting in the chair.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
var $$splitComponentImporter = () => import("./services-DfjSaUcE.mjs");
var Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — Glow & Grace Salon" },
      {
        name: "description",
        content:
          "Haircuts, colour, facials, waxing, spa and bridal services for men and women, with clear prices and durations.",
      },
      {
        property: "og:title",
        content: "Services & Prices — Glow & Grace Salon",
      },
      {
        property: "og:description",
        content:
          "Browse our full menu for men and women, with prices and appointment lengths.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
var rootRouteChildren = {
  IndexRoute: Route$4.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$5,
  }),
  ContactRoute: Route$3.update({
    id: "/contact",
    path: "/contact",
    getParentRoute: () => Route$5,
  }),
  GalleryRoute: Route$2.update({
    id: "/gallery",
    path: "/gallery",
    getParentRoute: () => Route$5,
  }),
  ReviewsRoute: Route$1.update({
    id: "/reviews",
    path: "/reviews",
    getParentRoute: () => Route$5,
  }),
  ServicesRoute: Route.update({
    id: "/services",
    path: "/services",
    getParentRoute: () => Route$5,
  }),
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
