import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  index?: number;
  className?: string;
}

const MAX_RATING = 5;

export function ReviewCard({ review, index = 0, className }: ReviewCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.2, 0.8, 0.2, 1],
      }}
      whileHover={{ y: -2 }}
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_12px_34px_-28px_rgba(20,30,55,0.42)] sm:p-7",
        className,
      )}
    >
      <div className="flex items-center gap-1 text-primary">
        {Array.from({ length: MAX_RATING }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < review.rating ? "fill-primary" : "text-border",
            )}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{review.rating} out of 5 stars</span>
      </div>
      <blockquote className="mt-4 font-display text-xl leading-snug text-foreground sm:text-2xl">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary font-display text-lg font-semibold text-secondary-foreground">
          {review.name.charAt(0)}
        </span>
        <span>
          <span className="block font-bold">{review.name}</span>
          <span className="block text-sm text-muted-foreground">
            {review.service} client
          </span>
        </span>
      </figcaption>
    </motion.figure>
  );
}
