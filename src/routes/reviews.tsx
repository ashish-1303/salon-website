import { createFileRoute } from "@tanstack/react-router";

import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getReviews } from "@/lib/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Verve & Balm Salon" },
      {
        name: "description",
        content:
          "Read honest reviews from Verve & Balm clients on cuts, colour, shaves, facials and bridal makeup.",
      },
      { property: "og:title", content: "Client Reviews — Verve & Balm Salon" },
      { property: "og:description", content: "What our clients say after sitting in the chair." },
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
          subtitle="Unedited notes from the people who keep coming back."
          align="center"
        />

        {/* Mobile: horizontal scroll. Tablet and up: grid. */}
        <div className="mt-10 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0">
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
