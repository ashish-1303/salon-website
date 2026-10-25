import { createFileRoute } from "@tanstack/react-router";

import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getReviews } from "@/lib/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — AK Salon" },
      {
        name: "description",
        content:
          "Sample review content shown for AK Salon website preview.",
      },
      { property: "og:title", content: "Client Reviews — AK Salon" },
      {
        property: "og:description",
        content: "What our clients say after sitting in the chair.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const reviews = getReviews();

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="In their words"
          title="Client reviews"
          subtitle="Sample testimonials for preview only. Replace with salon-approved reviews before publishing."
          align="center"
        />

        {/* Mobile: horizontal scroll. Tablet and up: grid. */}
        <div className="-mx-4 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={i}
              className="min-w-[82%] snap-center sm:min-w-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
