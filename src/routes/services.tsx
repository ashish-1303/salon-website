import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { getServices } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AK Salon" },
      {
        name: "description",
        content:
          "Haircuts, colour, facials, waxing, spa and bridal services for men and women.",
      },
      {
        property: "og:title",
        content: "Services — AK Salon",
      },
      {
        property: "og:description",
        content:
          "Browse our full menu for men and women.",
      },
    ],
  }),
  component: ServicesPage,
});

const CATEGORIES: { value: ServiceCategory; label: string }[] = [
  { value: "women", label: "For Women" },
  { value: "men", label: "For Men" },
];

function ServicesPage() {
  const [category, setCategory] = useState<ServiceCategory>("women");
  const services = getServices(category);

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The full menu"
          title="Services"
          subtitle="Every treatment includes a consultation to understand your needs."
          align="center"
        />

        <div
          role="tablist"
          aria-label="Service categories"
          className="mx-auto mt-8 flex w-full max-w-sm items-center gap-1 rounded-full border border-border bg-white p-1.5 shadow-sm"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              role="tab"
              id={`service-tab-${c.value}`}
              aria-controls="service-list"
              aria-selected={category === c.value}
              tabIndex={category === c.value ? 0 : -1}
              onClick={() => setCategory(c.value)}
              onKeyDown={(event) => {
                const currentIndex = CATEGORIES.findIndex(
                  (item) => item.value === category,
                );
                let nextIndex = currentIndex;

                if (event.key === "ArrowRight") {
                  nextIndex = (currentIndex + 1) % CATEGORIES.length;
                } else if (event.key === "ArrowLeft") {
                  nextIndex =
                    (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
                } else if (event.key === "Home") {
                  nextIndex = 0;
                } else if (event.key === "End") {
                  nextIndex = CATEGORIES.length - 1;
                } else {
                  return;
                }

                event.preventDefault();
                const nextCategory = CATEGORIES[nextIndex];
                if (!nextCategory) return;
                setCategory(nextCategory.value);
                document
                  .getElementById(`service-tab-${nextCategory.value}`)
                  ?.focus();
              }}
              className={cn(
                "relative min-h-11 flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                category === c.value
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {category === c.value ? (
                <motion.span
                  layoutId="service-tab-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              ) : null}
              <span className="relative z-10">{c.label}</span>
            </button>
          ))}
        </div>

        <div
          id="service-list"
          role="tabpanel"
          aria-labelledby={`service-tab-${category}`}
          tabIndex={0}
          className="mt-9 grid gap-5 outline-none focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
