"use client";

const reviews = [
  {
    quote:
      "Reliable static cover for our commercial site. Communication was clear and the service was straightforward to arrange.",
    name: "James R.",
    role: "Site Manager, Manchester",
  },
  {
    quote:
      "We needed regular office cleaning and the team fitted around our working hours without disruption.",
    name: "Sarah M.",
    role: "Office Manager, Trafford",
  },
  {
    quote:
      "Mobile patrols gave us the extra presence we needed across two locations. Professional and easy to deal with.",
    name: "David K.",
    role: "Facilities Lead, Salford",
  },
  {
    quote:
      "End-of-tenancy clean was thorough and completed on the agreed date. Would use again for similar work.",
    name: "Amira H.",
    role: "Property Coordinator, Stockport",
  },
  {
    quote:
      "Event security support was well organised. The team understood the brief and handled access calmly.",
    name: "Tom L.",
    role: "Event Coordinator, Greater Manchester",
  },
  {
    quote:
      "Retail unit cleaning has been consistent. Floors and customer areas stay presentable week after week.",
    name: "Priya S.",
    role: "Store Manager, Bolton",
  },
];

export function TestimonialsMarquee() {
  const items = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-ink-950 py-16 sm:py-20" aria-label="Client feedback">
      <div className="container-wide mb-10 text-center">
        <p className="accent-line justify-center !text-gold-400">Client Feedback</p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          What clients say
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-ink-400 sm:text-base">
          Sample feedback for layout — replace with real client reviews when available.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-950 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-950 to-transparent sm:w-20" />

        <div className="marquee-track flex w-max gap-5 pl-5">
          {items.map((review, i) => (
            <article
              key={`${review.name}-${i}`}
              className="w-[300px] shrink-0 rounded-xl border border-white/10 bg-ink-900/80 p-5 sm:w-[340px] sm:p-6"
            >
              <div className="mb-3 flex gap-0.5 text-gold-500" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-ink-200">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer className="mt-4 border-t border-white/10 pt-3">
                <p className="text-sm font-semibold text-white">{review.name}</p>
                <p className="text-xs text-ink-400">{review.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
