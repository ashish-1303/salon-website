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
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl bg-card border border-border shadow-2xl"
    >
      <div className="overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.name}
          loading="lazy"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-xl">{service.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {service.description}
        </p>

      </div>
    </motion.article>
  );
}
