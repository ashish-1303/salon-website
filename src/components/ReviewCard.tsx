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
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        "rounded-[2rem] bg-white p-7 border border-ink/5 shadow-[0_24px_50px_-28px_rgba(90,76,66,0.5)] flex flex-col",
        className,
      )}
    >
      <div className="flex items-center gap-1 text-brand-dark">
        {Array.from({ length: MAX_RATING }).map((_, i) => (
          <Star
            key={i}
            className={cn("size-4", i < review.rating ? "fill-current" : "text-ink/20")}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{review.rating} out of 5 stars</span>
      </div>
      <blockquote className="mt-4 font-display text-lg sm:text-xl leading-snug">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="size-11 rounded-full bg-lilac grid place-items-center font-display font-bold text-ink">
          {review.name.charAt(0)}
        </span>
        <span>
          <span className="block font-bold">{review.name}</span>
          <span className="block text-sm text-ink/50">{review.service} client</span>
        </span>
      </figcaption>
    </motion.figure>
  );
}
