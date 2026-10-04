import { o as getSalonInfo, t as cn } from "./utils-BYDHnMYi.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Cb6-52kX.mjs";
import { t as Reveal } from "./Reveal-BotK5AEV.mjs";
import { t as SectionHeading } from "./SectionHeading-C4htRqxQ.mjs";
import {
  a as Phone,
  c as MapPin,
  l as Mail,
  p as Clock,
} from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dit1cIM3.js
var import_jsx_runtime = require_jsx_runtime();
var enquirySchema = objectType({
  name: stringType()
    .trim()
    .min(2, "Please enter your name")
    .max(60, "That name is too long"),
  phone: stringType()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "That number is too long")
    .regex(/^[0-9+()\-\s]+$/, "Only digits, spaces and + ( ) - are allowed"),
  message: stringType()
    .trim()
    .min(10, "Tell us a little more (10 characters minimum)")
    .max(500, "Please keep it under 500 characters"),
});
var inputClass =
  "w-full rounded-2xl border border-input bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:bg-background";
function ContactPage() {
  const salon = getSalonInfo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: u(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });
  const onSubmit = (values) => {
    console.info("Enquiry submitted", values);
    toast.success("Thanks! We'll call you back shortly to confirm your slot.");
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "px-4 py-12",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-6xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
          eyebrow: "Say hello",
          title: "Visit or book with us",
          subtitle:
            "Walk-ins welcome when we have a chair free — enquire ahead to be sure.",
          align: "center",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-10 grid lg:grid-cols-2 gap-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "rounded-[2rem] bg-card p-7 sm:p-8 border border-border shadow-2xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "font-display font-bold text-2xl",
                    children: salon.name,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                    className: "mt-6 space-y-5 text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                        className: "flex gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                            className: "size-5 shrink-0 text-brand-dark",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: salon.address,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                        className: "flex gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                            className: "size-5 shrink-0 text-brand-dark",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                            href: `tel:${salon.phone.replace(/[^0-9+]/g, "")}`,
                            className: "hover:text-foreground",
                            children: salon.phone,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                        className: "flex gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
                            className: "size-5 shrink-0 text-brand-dark",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                            href: `mailto:${salon.email}`,
                            className: "hover:text-foreground",
                            children: salon.email,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                        className: "flex gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                            className: "size-5 shrink-0 text-brand-dark",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "space-y-1",
                            children: salon.hours.map((h) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "span",
                                {
                                  className: "flex flex-wrap gap-x-2",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "font-semibold text-foreground",
                                        children: h.day,
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      { children: h.time },
                                    ),
                                  ],
                                },
                                h.day,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "mt-7 overflow-hidden rounded-3xl border border-ink/10",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "iframe",
                      {
                        title: `Map showing ${salon.name}`,
                        src: salon.mapEmbedUrl,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                        className: "h-64 w-full border-0",
                      },
                    ),
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              delay: 0.1,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                noValidate: true,
                className:
                  "rounded-[2rem] bg-gradient-to-br from-primary to-accent p-7 sm:p-8 text-primary-foreground shadow-2xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "font-display font-bold text-2xl",
                    children: "Send an enquiry",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 text-primary-foreground/80",
                    children:
                      "We reply within a few hours during opening times.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-6 space-y-5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            htmlFor: "name",
                            className: "block text-sm font-bold mb-2",
                            children: "Name",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            id: "name",
                            ...register("name"),
                            placeholder: "Your full name",
                            "aria-invalid": !!errors.name,
                            className: cn(
                              inputClass,
                              errors.name && "border-white",
                            ),
                          }),
                          errors.name
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "mt-1.5 text-sm font-semibold text-white",
                                children: errors.name.message,
                              })
                            : null,
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            htmlFor: "phone",
                            className: "block text-sm font-bold mb-2",
                            children: "Phone",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            id: "phone",
                            type: "tel",
                            ...register("phone"),
                            placeholder: "e.g. +91 98200 12345",
                            "aria-invalid": !!errors.phone,
                            className: cn(
                              inputClass,
                              errors.phone && "border-white",
                            ),
                          }),
                          errors.phone
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "mt-1.5 text-sm font-semibold text-white",
                                children: errors.phone.message,
                              })
                            : null,
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            htmlFor: "message",
                            className: "block text-sm font-bold mb-2",
                            children: "Message",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "textarea",
                            {
                              id: "message",
                              rows: 4,
                              ...register("message"),
                              placeholder: "Which service, and when suits you?",
                              "aria-invalid": !!errors.message,
                              className: cn(
                                inputClass,
                                "resize-none",
                                errors.message && "border-white",
                              ),
                            },
                          ),
                          errors.message
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "mt-1.5 text-sm font-semibold text-destructive-foreground",
                                children: errors.message.message,
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    type: "submit",
                    variant: "soft",
                    size: "lg",
                    disabled: isSubmitting,
                    className:
                      "mt-7 w-full bg-background text-foreground hover:bg-background/90",
                    children: isSubmitting ? "Sending…" : "Send enquiry",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { ContactPage as component };
