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
      className={cn(align === "center" && "text-center mx-auto max-w-2xl", className)}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-sage/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink/70">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn("font-display font-bold text-3xl sm:text-4xl", eyebrow && "mt-4")}>{title}</h2>
      {subtitle ? <p className="mt-2 text-ink/60">{subtitle}</p> : null}
    </motion.div>
  );
}
