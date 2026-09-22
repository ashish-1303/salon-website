import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Music2 } from "lucide-react";

import { getSalonInfo } from "@/lib/data";

const QUICK_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

const SOCIALS = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "TikTok", Icon: Music2 },
] as const;

export function Footer() {
  const salon = getSalonInfo();

  return (
    <footer className="px-4 pb-8 pt-4">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink text-cream/90 px-6 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="size-9 rounded-full bg-gradient-to-br from-brand to-accent-soft grid place-items-center text-white font-display font-bold">
              V
            </span>
            <span className="font-display font-semibold text-lg">{salon.name}</span>
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-cream/70">
            {QUICK_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-cream transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="size-9 rounded-full bg-white/10 grid place-items-center hover:bg-white/20 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-cream/50">
          {salon.address} · {salon.phone} · {salon.hours[0]?.day} {salon.hours[0]?.time}
        </p>
      </div>
    </footer>
  );
}
