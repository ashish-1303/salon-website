import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, Scissors, Sparkles } from "lucide-react";

import salonInterior from "@/assets/salon-interior.jpg";
import { ReviewCard } from "@/components/ReviewCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { getFeaturedReviews, getFeaturedServices, getSalonInfo } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glow & Grace — Unisex Hair & Beauty Salon" },
      {
        name: "description",
        content:
          "A calm, sunlit unisex salon for cuts, colour, facials and spa rituals. Book your appointment at Glow & Grace.",
      },
      { property: "og:title", content: "Glow & Grace — Unisex Hair & Beauty Salon" },
      {
        property: "og:description",
        content: "Cuts, colour and care for every face and every gender. Book your chair today.",
      },
    ],
  }),
  component: HomePage,
});

const WHY_US = [
  { Icon: Scissors, text: "Personalised styling tailored to you" },
  { Icon: Leaf, text: "Premium products, thoughtfully selected" },
  { Icon: Sparkles, text: "A calm, welcoming salon experience" },
] as const;

function HomePage() {
  const salon = getSalonInfo();
  const featuredServices = getFeaturedServices(4);
  const featuredReviews = getFeaturedReviews(3);

  return (
    <>
      {/* Hero */}
      <section className="px-4 pt-10 pb-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="mt-5 font-display font-bold leading-[1.05] text-[2.5rem] sm:text-6xl">
              Where style is <span className="text-brand-dark">sculpted</span> with softness.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/70">
              A calm, sunlit salon for every face and every gender. Cuts, colour and care crafted to
              feel like a little ritual.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="rounded-[2.5rem] bg-gradient-to-br from-lilac/60 via-accent-soft/60 to-sage/60 p-3 shadow-[0_30px_60px_-30px_rgba(100,50,120,0.3)]">
              <img
                src={salonInterior}
                alt={`Inside ${salon.name}, a sunlit unisex salon with clay-toned styling chairs`}
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] rounded-[2rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-2 sm:-left-4 rounded-2xl bg-white px-5 py-3 shadow-[0_18px_35px_-18px_rgba(100,50,120,0.3)] flex items-center gap-3">
              <span className="text-sm">
                <span className="block text-gray-600">For men &amp; women</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured services */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4 mb-7">
            <SectionHeading title="Our Services" subtitle="Everything you need to refresh your look and feel your best." />
            <Link
              to="/services"
              className="hidden sm:block shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink/70 border border-ink/10 hover:bg-white/60 transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us + reviews preview */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl gap-6">
          <Reveal className="h-full">
            <div className="h-full rounded-[2rem] bg-gradient-to-br from-brand/90 to-brand-dark p-8 text-white shadow-[0_24px_50px_-24px_rgba(180,0,100,0.5)]">
              <h2 className="font-display font-bold text-3xl">Why {salon.name}</h2>
              <ul className="mt-6 space-y-4">
                {WHY_US.map(({ Icon, text }) => (
                  <li key={text} className="flex gap-3 items-start">
                    <Icon className="mt-0.5 size-5 shrink-0 text-white/80" />
                    <span className="text-white/90 font-semibold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {/* {featuredReviews[0] ? <ReviewCard review={featuredReviews[0]} className="h-full" /> : null} */}
        </div>
      </section>

      {/* Top reviews */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="What people say"
            subtitle="A few words from the chairs this month."
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
