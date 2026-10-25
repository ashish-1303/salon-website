import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeartHandshake, MapPin, Sparkles, UserRound } from "lucide-react";

import salonInterior from "@/assets/salon-interior.jpg";
import { ReviewCard } from "@/components/ReviewCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  getFeaturedReviews,
  getFeaturedServices,
  getSalonInfo,
} from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AK Salon | Hair & Beauty in Naranpura" },
      {
        name: "description",
        content:
          "Hair, skin and grooming services at AK Salon in Naranpura, Ahmedabad.",
      },
      {
        property: "og:title",
        content: "AK Salon | Hair & Beauty in Naranpura",
      },
      {
        property: "og:description",
        content: "Explore hair, skin and grooming services at AK Salon.",
      },
    ],
  }),
  component: HomePage,
});

const WHY_US = [
  {
    Icon: UserRound,
    title: "Personalised Attention",
    description:
      "Services tailored to your preferences, style, and individual needs.",
  },
  {
    Icon: Sparkles,
    title: "A Style That Feels Like You",
    description:
      "Thoughtful styling focused on helping you feel confident in your look.",
  },
  {
    Icon: HeartHandshake,
    title: "A Welcoming Experience",
    description:
      "A friendly, comfortable salon experience with attention to your needs.",
  },
] as const;

function HomePage() {
  const salon = getSalonInfo();
  const featuredServices = getFeaturedServices(4);
  const featuredReviews = getFeaturedReviews(3);

  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
              <MapPin className="size-3.5" aria-hidden="true" />
              Naranpura, Ahmedabad
            </span>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
             Where your style <span className="text-primary">comes to life</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
             Explore hair, skin and grooming services designed around your preferences and personal style.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="min-h-12 px-7">
                <Link to="/contact">Send an enquiry</Link>
              </Button>
              <Button asChild variant="soft" size="lg" className="min-h-12 px-7">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-muted-foreground">
              <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
              Hair · skin · grooming
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-accent p-2.5 sm:rounded-[2.5rem] sm:p-3">
              <img
                src={salonInterior}
                alt={`Salon interior at ${salon.name}`}
                width={1024}
                height={1280}
                className="aspect-4/3 w-full rounded-[1.5rem] object-cover sm:aspect-5/4 sm:rounded-[2rem] lg:aspect-4/5"
              />
            </div>
            <div className="absolute bottom-5 left-5 flex max-w-[calc(100%-2.5rem)] items-center gap-3 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 text-sm">
                <span className="block font-semibold text-foreground">Visit AK Salon</span>
                <span className="block truncate text-muted-foreground">Naranpura, Ahmedabad</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <SectionHeading
              title="Find Your Perfect Style"
              subtitle="Explore our services and discover a look that feels uniquely yours."
            />
            <Link
              to="/services"
              className="hidden shrink-0 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us + reviews preview */}
      <section className="px-4 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-border bg-accent/45 p-7 text-foreground sm:p-9">
              <h2 className="font-display text-4xl font-semibold">
                Why {salon.name}
              </h2>
              <ul className="mt-6 space-y-5">
                {WHY_US.map(({ Icon, title, description }) => (
                  <li key={title} className="flex items-start gap-3">
                    <Icon
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-6 text-foreground">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {featuredReviews[0] ? (
            <ReviewCard review={featuredReviews[0]} className="h-full" />
          ) : null}
        </div>
      </section>

      {/* Top reviews */}
      <section className="bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="What people say"
            subtitle="A little love from our clients."
            className="mb-7"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {featuredReviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="soft">
              <Link to="/reviews">Read all reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
