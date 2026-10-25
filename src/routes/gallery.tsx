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
      { title: "Gallery — AK Salon" },
      {
        name: "description",
        content:
            "Photos of our salon interior, styling work and before-and-after transformations at AK Salon.",
          },
          { property: "og:title", content: "Gallery — AK Salon" },
      {
        property: "og:description",
        content: "A look inside the studio and the work we do there.",
      },
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

        <div className="mt-9 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          {images.map((image, i) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
              whileHover={{ y: -2 }}
              className="group mb-4 block w-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:mb-5"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                  image.tall ? "aspect-3/4" : "aspect-4/3",
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
            className="fixed inset-0 z-100 grid place-items-center bg-foreground/85 p-4 backdrop-blur-sm"
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
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6 sm:top-6"
            >
              <X className="size-5" />
            </button>
            <p className="absolute bottom-5 left-0 right-0 px-6 text-center text-sm text-white sm:bottom-6">
              {active.alt}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
