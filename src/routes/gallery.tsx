import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { getGalleryImages } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Verve & Balm Salon" },
      {
        name: "description",
        content:
          "Photos of our salon interior, styling work and before-and-after transformations at Verve & Balm.",
      },
      { property: "og:title", content: "Gallery — Verve & Balm Salon" },
      { property: "og:description", content: "A look inside the studio and the work we do there." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const images = getGalleryImages();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : images[activeIndex];

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeIndex, close]);

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The studio"
          title="Gallery"
          subtitle="Our space, our people, and the work that leaves the chair."
          align="center"
        />

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.map((image, i) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
              whileHover={{ y: -4 }}
              className="mb-5 block w-full overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-[0_18px_40px_-24px_rgba(90,76,66,0.5)] group"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                  image.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                )}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            className="fixed inset-0 z-100 grid place-items-center bg-ink/80 backdrop-blur-sm p-4"
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={close}
              aria-label="Close image"
              className="absolute right-5 top-5 size-11 rounded-full bg-white/90 text-ink grid place-items-center hover:bg-white transition-colors"
            >
              <X className="size-5" />
            </button>
            <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-cream/80 px-6">
              {active.alt}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
