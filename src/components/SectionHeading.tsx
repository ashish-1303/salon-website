import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl",
          eyebrow && "mt-4",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
