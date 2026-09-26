import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { cleaningServices, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services",
  description: `Commercial cleaning for offices, retail, industrial facilities and end-of-tenancy cleans from ${company.name} in Manchester and surrounding areas.`,
  alternates: { canonical: "/cleaning" },
  openGraph: {
    title: `Commercial Cleaning | ${company.shortName}`,
    description: `Office cleaning, retail & showrooms, industrial facilities and deep cleans across Manchester and surrounding areas.`,
  },
};

export default function CleaningPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink-950">
        <div className="container-wide py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="accent-line !text-gold-400">Commercial Cleaning Division</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Commercial cleaning for workplaces and premises
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              From regular office cleaning to retail floors, industrial units and one-off deep cleans — Aston Services supports businesses across Manchester and the surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-5 sm:grid-cols-2">
            {cleaningServices.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                shortDescription={s.shortDescription}
                href={`/cleaning/${s.slug}`}
                image={s.image}
                imageAlt={s.imageAlt}
                category="cleaning"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-narrow">
          <h2 className="heading-section text-center">Cleaning that fits your premises</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center body-large">
            Different buildings need different schedules and methods. Tell us about your site — size, usage, access times and any priority areas — and we will respond with a practical proposal.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Describe the premises",
                text: "Office, retail, warehouse or mixed-use — and how often you need cleaning support.",
              },
              {
                step: "02",
                title: "Agree the scope",
                text: "We discuss areas to cover, frequency, and any one-off deep clean or handover requirements.",
              },
              {
                step: "03",
                title: "Confirm and schedule",
                text: "You receive a clear outline so you can plan cleaning around your operations.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-sm font-bold tracking-wider text-gold-600">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Request a cleaning quote"
        description="Tell us about your premises and the cleaning support you need. We will respond as soon as possible."
      />
    </>
  );
}
