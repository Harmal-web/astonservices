import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { company, securityServices, cleaningServices } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Dual service pillars */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Two service divisions. One local provider.</h2>
            <p className="mt-4 body-large">
              Whether you need security presence on site or commercial cleaning for your premises, Aston Services offers a clear, professional approach for businesses in Manchester and the surrounding areas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Security pillar */}
            <div className="card overflow-hidden">
              <div className="border-b border-stone-100 bg-primary-50 px-6 py-5 sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-900 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-primary-950">
                    Security Services
                  </h3>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3">
                  {securityServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/security/${s.slug}`}
                        className="group flex items-start gap-3 text-stone-700 transition-colors hover:text-primary-900"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400 group-hover:bg-accent-500" />
                        <span>
                          <span className="font-medium">{s.title}</span>
                          <span className="mt-0.5 block text-sm text-stone-500">
                            {s.shortDescription}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/security"
                  className="btn-secondary mt-8 w-full sm:w-auto"
                >
                  View security services
                </Link>
              </div>
            </div>

            {/* Cleaning pillar */}
            <div className="card overflow-hidden">
              <div className="border-b border-stone-100 bg-accent-50 px-6 py-5 sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-600 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-primary-950">
                    Commercial Cleaning
                  </h3>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3">
                  {cleaningServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/cleaning/${s.slug}`}
                        className="group flex items-start gap-3 text-stone-700 transition-colors hover:text-primary-900"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400 group-hover:bg-accent-600" />
                        <span>
                          <span className="font-medium">{s.title}</span>
                          <span className="mt-0.5 block text-sm text-stone-500">
                            {s.shortDescription}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/cleaning"
                  className="btn-secondary mt-8 w-full sm:w-auto"
                >
                  View cleaning services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured services grid */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="heading-section">Explore our services</h2>
              <p className="mt-2 max-w-xl text-stone-600">
                From static guarding and mobile patrols to office and retail cleaning — select a service to learn more.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityServices.slice(0, 2).map((s) => (
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
            {cleaningServices.slice(0, 2).map((s) => (
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

      {/* Why / approach */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="heading-section">
                A practical approach to security and cleaning
              </h2>
              <p className="mt-4 body-large">
                Aston Services Limited works with businesses that need reliable security presence or commercial cleaning support across Manchester and nearby areas. We focus on clear communication and service that matches the needs of your premises.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Local service across Manchester and surrounding areas",
                  "Security and commercial cleaning under one provider",
                  "Straightforward enquiries and quote process",
                  "Flexible arrangements to suit different premises",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="btn-secondary">
                  About Aston Services
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
              <Image
                src="/images/static-guard.jpg"
                alt="Security officer on site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className="container-wide py-12 sm:py-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-primary-950 sm:text-2xl">
                Prefer to speak to someone?
              </h2>
              <p className="mt-1 text-stone-600">
                Call us directly or send an enquiry online.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${company.phoneRaw}`}
                className="btn-primary"
              >
                Call {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="btn-secondary"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
