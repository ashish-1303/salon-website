import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

import { getSalonInfo } from "@/lib/data";

const SOCIALS = [
  { label: "Instagram", Icon: Instagram },
] as const;

export function Footer() {
  const salon = getSalonInfo();

  return (
    <footer className="px-4 pb-8 pt-4">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-muted text-foreground px-6 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="size-9 rounded-full bg-gradient-to-br from-pink-400 to-pink-900 grid place-items-center text-white font-display font-bold">
              G
            </span>
            <span className="font-display font-semibold text-lg text-foreground">{salon.name}</span>
          </Link>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="size-9 rounded-full bg-brand/10 text-brand grid place-items-center hover:bg-brand/20 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 text-md text-gray-800">
          <span>{salon.address}</span>
          <span className="hidden sm:inline">{" "}</span>
          <span>{salon.phone}</span>
          <span className="hidden sm:inline">{" "}</span>
          <a href={`mailto:${salon.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Mail className="size-3.5" />
            {salon.email}
          </a>
        </div>

        <p className="mt-4 text-md text-gray-800">
          {salon.hours[0]?.day} [{salon.hours[0]?.time}]
        </p>
      </div>
    </footer>
  );
}

