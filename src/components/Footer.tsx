import { Link } from "@tanstack/react-router";
import { getSalonInfo } from "@/lib/data";

const QUICK_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  const salon = getSalonInfo();

  return (
    <footer className="mt-12 border-t border-border bg-white px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <Link to="/" className="flex items-center gap-2.5 self-start">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              AK
            </span>
            <span className="font-display text-2xl font-semibold text-foreground">
              {salon.name}
            </span>
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted-foreground">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="min-h-11 py-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>

        <p className="mt-7 max-w-3xl border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
          {salon.address} <span aria-hidden="true">&nbsp;</span> {salon.phone} <span aria-hidden="true">&nbsp;</span> {salon.hours[0]?.day}{" "}
          [{salon.hours[0]?.time}]
        </p>
      </div>
    </footer>
  );
}
