import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${company.name} — providing security and commercial cleaning services across Manchester and surrounding areas. Company number ${company.companyNumber}.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${company.shortName}`,
    description: company.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink-950">
        <div className="container-wide py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="accent-line !text-gold-400">About</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Aston Services Limited
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              Security and commercial cleaning for businesses in Manchester and the surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-section !mt-0">Who we are</h2>
          <p className="body-large mt-4">
            Aston Services Limited is a Manchester-based company providing professional security and commercial cleaning services. We work with businesses that need reliable on-site security presence or regular and one-off commercial cleaning support.
          </p>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Our focus is on clear communication and practical service delivery. Whether you require static guarding, mobile patrols, event security, or cleaning for offices, retail spaces, industrial facilities or end-of-tenancy handovers, we aim to respond with straightforward information so you can make informed decisions.
          </p>

          <h2 className="heading-section mt-12">Company details</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
              <dt className="text-sm font-medium text-ink-500">Company name</dt>
              <dd className="mt-1 font-semibold text-ink-950">{company.name}</dd>
            </div>
            <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
              <dt className="text-sm font-medium text-ink-500">Company number</dt>
              <dd className="mt-1 font-semibold text-ink-950">{company.companyNumber}</dd>
            </div>
            <div className="rounded-xl border border-ink-100 bg-ink-50 p-5 sm:col-span-2">
              <dt className="text-sm font-medium text-ink-500">Registered office</dt>
              <dd className="mt-1 font-semibold text-ink-950">
                {company.registeredOffice.line1}, {company.registeredOffice.city},{" "}
                {company.registeredOffice.county}, {company.registeredOffice.postcode}
              </dd>
            </div>
            <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
              <dt className="text-sm font-medium text-ink-500">Primary contact</dt>
              <dd className="mt-1 font-semibold text-ink-950">{company.primaryContact}</dd>
            </div>
            <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
              <dt className="text-sm font-medium text-ink-500">Service area</dt>
              <dd className="mt-1 font-semibold text-ink-950">{company.serviceArea}</dd>
            </div>
          </dl>

          <h2 className="heading-section mt-12">What we offer</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink-950">Security</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                <li>• Static Guarding</li>
                <li>• Mobile Patrols</li>
                <li>• K9 Security</li>
                <li>• Event Security</li>
              </ul>
              <Link href="/security" className="mt-4 inline-block text-sm font-medium text-gold-600 hover:text-gold-700">
                View security services →
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink-950">Commercial Cleaning</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                <li>• Office Cleaning</li>
                <li>• Retail & Showrooms</li>
                <li>• Industrial & Warehouse</li>
                <li>• Deep Cleans & End of Tenancy</li>
              </ul>
              <Link href="/cleaning" className="mt-4 inline-block text-sm font-medium text-gold-600 hover:text-gold-700">
                View cleaning services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get in touch"
        description="Whether you need security cover or commercial cleaning, we are ready to discuss your requirements."
      />
    </>
  );
}
