import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { getSalonInfo } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const salon = getSalonInfo();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-6xl rounded-3xl md:rounded-full bg-white/80 backdrop-blur-md px-5 py-3 shadow-[0_10px_30px_-15px_rgba(100,50,120,0.25)] border border-white">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="size-9 rounded-full bg-gradient-to-br from-pink-400 to-pink-900 grid place-items-center text-white font-display font-bold text-lg shadow-inner">
              G
            </span>
            <span className="font-display font-semibold text-lg tracking-tight">{salon.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-ink/70">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-brand-dark" }}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/contact">Book Appointment</Link>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden size-10 rounded-full border border-ink/10 grid place-items-center text-ink"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-1 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "text-brand-dark bg-cream" }}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink/70"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="sm" className="mt-2 w-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
