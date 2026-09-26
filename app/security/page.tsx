import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { securityServices, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Security Services",
  description: `Professional security services including static guarding, mobile patrols, K9 security and event security from ${company.name} in Manchester and surrounding areas.`,
  alternates: { canonical: "/security" },
  openGraph: {
    title: `Security Services | ${company.shortName}`,
    description: `Static guarding, mobile patrols, K9 security and event security across Manchester and surrounding areas.`,
  },
};

export default function SecurityPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink-950">
        <div className="container-wide py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="accent-line !text-gold-400">Security Division</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Security services for businesses in Manchester
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              Aston Services provides static guarding, mobile patrols, K9 security and event security. Contact us to discuss the requirements of your site or event.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-5 sm:grid-cols-2">
            {securityServices.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                shortDescription={s.shortDescription}
                href={`/security/${s.slug}`}
                image={s.image}
                imageAlt={s.imageAlt}
                category="security"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-narrow">
          <h2 className="heading-section text-center">How we approach security enquiries</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center body-large">
            Every site and event is different. When you get in touch we will ask about location, hours, access requirements and any specific concerns so we can respond with a relevant proposal.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us about the site",
                text: "Share the location, type of premises, and the security cover you are considering.",
              },
              {
                step: "02",
                title: "Discuss the detail",
                text: "We will talk through access points, patrol needs, event timings, or other practical points.",
              },
              {
                step: "03",
                title: "Receive a clear proposal",
                text: "You receive a straightforward response so you can decide what works for your business.",
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
        title="Discuss your security requirements"
        description="Call or send an enquiry and we will respond with the information you need to move forward."
      />
    </>
  );
}
