import { motion } from "framer-motion";


import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.2, 0.8, 0.2, 1],
      }}
      whileHover={{ y: -3 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_34px_-28px_rgba(20,30,55,0.42)] transition-shadow hover:shadow-[0_18px_42px_-30px_rgba(20,30,55,0.42)]"
    >
      <div className="overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.name}
          loading="lazy"
          width={800}
          height={600}
          className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">{service.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {service.description}
        </p>

      </div>
    </motion.article>
  );
}
