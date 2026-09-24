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
      { title: "Services — Glow & Grace Salon" },
      {
        name: "description",
        content:
          "Haircuts, colour, facials, waxing, spa and bridal services for men and women at Glow & Grace.",
      },
      { property: "og:title", content: "Services — Glow & Grace Salon" },
      {
        property: "og:description",
        content: "Browse our full menu for men and women.",
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
          title="What We Offer"
          subtitle="Every treatment includes a consultation — no surprises at the counter."
          align="center"
        />

        <div
          role="tablist"
          aria-label="Service categories"
          className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-full bg-white p-1.5 border border-ink/10 shadow-[0_10px_30px_-20px_rgba(90,76,66,0.6)]"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              role="tab"
              aria-selected={category === c.value}
              onClick={() => setCategory(c.value)}
              className={cn(
                "relative rounded-full px-6 py-2.5 text-sm font-bold transition-colors",
                category === c.value ? "text-white" : "text-ink/60 hover:text-ink",
              )}
            >
              {category === c.value ? (
                <motion.span
                  layoutId="service-tab-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-brand"
                />
              ) : null}
              <span className="relative z-10">{c.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
