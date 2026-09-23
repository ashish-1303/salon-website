import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { getSalonInfo } from "@/lib/data";
import { enquirySchema, type EnquiryFormValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — Glow & Grace Salon" },
      {
        name: "description",
        content:
          "Find our address, opening hours and phone number, or send an enquiry to book your appointment at Glow & Grace.",
      },
      { property: "og:title", content: "Contact & Bookings — Glow & Grace Salon" },
      { property: "og:description", content: "Visit us, call us, or send a booking enquiry." },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-gray-500/60 outline-none transition-colors focus:border-brand focus:bg-white";

function ContactPage() {
  const salon = getSalonInfo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", phone: "", message: "" },
  });

  const onSubmit = (values: EnquiryFormValues) => {
    // MVP: no backend yet — log and confirm to the visitor.
    console.info("Enquiry submitted", values);
    toast.success("Thanks! We'll call you back shortly to confirm your slot.");
    reset();
  };

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Say hello"
          title="Ready for Your Next Look?"
          subtitle="Get in touch with us for appointments, enquiries or any questions about our services."
          align="center"
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-[2rem] bg-white p-7 sm:p-8 border border-ink/5 shadow-[0_24px_50px_-28px_rgba(90,76,66,0.5)]">
              <h3 className="font-display font-bold text-2xl">{salon.name}</h3>
              <ul className="mt-6 space-y-5 text-gray-700">
                <li className="flex gap-3">
                  <MapPin className="size-5 shrink-0 text-brand-dark" />
                  <span>{salon.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="size-5 shrink-0 text-brand-dark" />
                  <a href={`tel:${salon.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-ink">
                    {salon.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="size-5 shrink-0 text-brand-dark" />
                  <a href={`mailto:${salon.email}`} className="hover:text-ink">
                    {salon.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="size-5 shrink-0 text-brand-dark" />
                  <span className="space-y-1">
                    {salon.hours.map((h) => (
                      <span key={h.day} className="flex flex-wrap gap-x-2">
                        <span className="">{h.day}</span>
                        <span className="">[{h.time}]</span>
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="mt-7 overflow-hidden rounded-3xl border border-ink/10">
                <iframe
                  title={`Map showing ${salon.name}`}
                  src={salon.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-[2rem] bg-gradient-to-br from-brand/90 to-brand-dark p-7 sm:p-8 text-white shadow-[0_24px_50px_-24px_rgba(232,143,94,0.8)]"
            >
              <h3 className="font-display font-bold text-2xl">Send an enquiry</h3>
              <p className="mt-2 text-white/80">We reply within a few hours during opening times.</p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-md font-bold mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    className={cn(inputClass, errors.name && "border-white")}
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-sm font-semibold text-white">{errors.name.message}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-md font-bold mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="e.g. +91 98200 12345"
                    aria-invalid={!!errors.phone}
                    className={cn(inputClass, errors.phone && "border-white")}
                  />
                  {errors.phone ? (
                    <p className="mt-1.5 text-sm font-semibold text-white">{errors.phone.message}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="block text-md font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="Which service are you looking for?"
                    aria-invalid={!!errors.message}
                    className={cn(inputClass, "resize-none", errors.message && "border-white")}
                  />
                  {errors.message ? (
                    <p className="mt-1.5 text-sm font-semibold text-white">{errors.message.message}</p>
                  ) : null}
                </div>
              </div>

              <Button
                type="submit"
                variant="soft"
                size="lg"
                disabled={isSubmitting}
                className="mt-7 w-full bg-white text-ink hover:bg-white/90"
              >
                {isSubmitting ? "Sending…" : "Send enquiry"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
