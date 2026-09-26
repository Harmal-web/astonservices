import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description: `${company.name} provides security and commercial cleaning services across Manchester and surrounding areas and cities.`,
  alternates: { canonical: "/areas" },
  openGraph: {
    title: `Areas We Cover | ${company.shortName}`,
    description: `Security and commercial cleaning across Manchester and surrounding areas.`,
  },
};

export default function AreasPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink-950">
        <div className="container-wide py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="accent-line !text-sky-400">Service Area</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Manchester and surrounding areas
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              Aston Services Limited provides security and commercial cleaning across Manchester and the surrounding areas and cities. Contact us to confirm coverage for your location.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-section">Where we work</h2>
          <p className="mt-4 body-large">
            Our primary focus is Manchester and the surrounding areas. If your premises or event is nearby, we are happy to discuss whether we can support your requirements.
          </p>

          <div className="mt-10 rounded-xl border border-ink-100 bg-ink-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink-950">
              Primary service area
            </h3>
            <p className="mt-2 text-ink-600">
              Manchester and surrounding areas and cities.
            </p>
            <p className="mt-4 text-sm text-ink-500">
              If you are outside the immediate area, please still get in touch — we will confirm whether we can cover your location.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-section">Registered office</h2>
            <address className="mt-4 not-italic text-ink-600 leading-relaxed">
              {company.name}<br />
              {company.registeredOffice.line1}<br />
              {company.registeredOffice.city}<br />
              {company.registeredOffice.county}<br />
              {company.registeredOffice.postcode}
            </address>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Check coverage for your site
            </Link>
            <a href={`tel:${company.phoneRaw}`} className="btn-secondary">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Confirm we cover your location"
        description="Tell us where your premises or event is based and we will let you know how we can help."
      />
    </>
  );
}
