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
      { title: "Contact — AK Salon" },
      {
        name: "description",
        content:
          "Find AK Salon in Naranpura, Ahmedabad, or get in touch with the salon.",
      },
      {
        property: "og:title",
        content: "Contact — AK Salon",
      },
      {
        property: "og:description",
        content: "Find our location and contact details.",
      },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "min-h-12 w-full rounded-xl border border-input bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";

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

  const onSubmit = () => {
    toast.success("Demo only: your enquiry was not sent. Please contact the salon directly.");
    reset();
  };

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Say hello"
          title="Let's Create Your Perfect Look"
          subtitle="Connect with us to plan your next salon experience"
          align="center"
        />

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-3xl font-semibold text-foreground">{salon.name}</h3>
              <ul className="mt-6 space-y-5 text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{salon.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`tel:${salon.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-foreground"
                  >
                    {salon.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`mailto:${salon.email}`}
                    className="hover:text-foreground"
                  >
                    {salon.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="space-y-1">
                    {salon.hours.map((h) => (
                      <span key={h.day} className="flex flex-wrap gap-x-2">
                        <span className="font-semibold text-foreground">
                          {h.day}
                        </span>
                        <span>{h.time}</span>
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="mt-7 overflow-hidden rounded-2xl border border-border">
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
              className="rounded-2xl border border-border bg-accent/40 p-6 text-foreground sm:p-8"
            >
              <h3 className="font-display text-3xl font-semibold">
                Send an enquiry
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This demo form is not connected yet. No message will be sent.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    autoComplete="name"
                    className={cn(inputClass, errors.name && "border-destructive")}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-sm font-semibold text-destructive">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="e.g. +91 98200 12345"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    autoComplete="tel"
                    className={cn(inputClass, errors.phone && "border-destructive")}
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="mt-1.5 text-sm font-semibold text-destructive">
                      {errors.phone.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="Which service, and when suits you?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(
                      inputClass,
                      "resize-none",
                      errors.message && "border-destructive",
                    )}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-sm font-semibold text-destructive">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <Button
                type="submit"
                variant="soft"
                size="lg"
                disabled={isSubmitting}
                className="mt-7 w-full bg-background text-foreground hover:bg-background/90"
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
