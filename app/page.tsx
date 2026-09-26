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

      {/* Key points bar */}
      <section className="bg-gold-500">
        <div className="container-wide">
          <div className="grid grid-cols-2 divide-x divide-gold-600/40 lg:grid-cols-4">
            {[
              { label: "Security", sub: "Guarding & Patrols" },
              { label: "Cleaning", sub: "Commercial Premises" },
              { label: "Local", sub: "Manchester Based" },
              { label: "Direct", sub: "Clear Communication" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center px-4 py-6 text-center sm:py-8"
              >
                <span className="text-lg font-bold tracking-tight text-ink-950 sm:text-xl">
                  {item.label}
                </span>
                <span className="mt-0.5 text-xs font-medium text-ink-800 sm:text-sm">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="accent-line justify-center">Our Capabilities</p>
            <h2 className="heading-section">What We Deliver</h2>
            <p className="mt-4 body-large">
              Security and commercial cleaning services for businesses across Manchester and the surrounding areas.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
  <Link href="/security" className="btn-secondary">
    View all security services
  </Link>
  <Link href="/cleaning" className="btn-secondary">
    View all cleaning services
  </Link>
</div>
        </div>
      </section>

      {/* Featured: Static Guarding split */}
      <section className="bg-ink-950">
        <div className="container-wide section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/static-guard.jpg"
                alt="Static guarding security officer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="accent-line !text-gold-400">Security Service</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Static Guarding
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-300">
                On-site security personnel providing a visible presence and controlled access for your premises. Suitable for commercial buildings, construction sites, retail premises, and other locations that benefit from a dedicated security presence.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Visible on-site presence",
                  "Access control support",
                  "Suitable for commercial & construction sites",
                  "Clear reporting and communication",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/security/static-guarding"
                className="btn-primary mt-8 !px-6"
              >
                Explore Static Guarding
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: Office Cleaning split (reversed) */}
      <section className="bg-white">
        <div className="container-wide section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="accent-line">Commercial Cleaning</p>
              <h2 className="heading-section">Office Cleaning</h2>
              <p className="mt-4 body-large">
                Regular and planned cleaning programmes for offices and professional workspaces. Desk areas, meeting rooms, kitchens, washrooms, and common areas kept presentable.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Daily, weekly or tailored schedules",
                  "Offices and professional workspaces",
                  "Kitchens, washrooms and common areas",
                  "Flexible timing around your operations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/cleaning/office-cleaning"
                className="btn-primary mt-8 !px-6"
              >
                Explore Office Cleaning
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-xl lg:order-2">
              <Image
                src="/images/office-cleaning.jpg"
                alt="Clean modern office interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

{/* Featured: Mobile Patrols */}
<section className="bg-ink-950">
  <div className="container-wide section-padding">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Image left */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src="/images/mobile-patrol.webp"
          alt="Mobile patrol security vehicle"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text right */}
      <div>
        <p className="accent-line !text-gold-400">Security Service</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Mobile Patrols
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-300">
          Regular vehicle and foot patrols that check multiple sites and respond to incidents as required.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Scheduled and random patrol routes",
            "Visible deterrence across multiple sites",
            "Incident reporting",
            "Flexible coverage",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink-200">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/security/mobile-patrols" className="btn-primary mt-8 !px-6">
          Explore Mobile Patrols
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>

{/* Featured: Retail & Showrooms */}
<section className="bg-white">
  <div className="container-wide section-padding">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Text left */}
      <div className="order-2 lg:order-1">
        <p className="accent-line">Commercial Cleaning</p>
        <h2 className="heading-section">Retail & Showrooms</h2>
        <p className="mt-4 body-large">
          Cleaning services tailored to retail floors, display areas, and customer-facing spaces.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "High-traffic floor cleaning",
            "Display and showroom areas",
            "Customer-facing presentation",
            "Flexible scheduling",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/cleaning/retail-showrooms" className="btn-primary mt-8 !px-6">
          Explore Retail Cleaning
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Image right */}
      <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-xl lg:order-2">
        <Image
          src="/images/retail-cleaning.jpg"
          alt="Clean retail showroom floor and displays"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>
      
      {/* How we work */}
      <section className="section-padding bg-ink-50">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="accent-line justify-center">Our Process</p>
            <h2 className="heading-section">How We Work</h2>
            <p className="mt-4 body-large">
              A clear process from first contact to ongoing service.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Tell us what you need",
                text: "Share the location, type of premises, and whether you need security, cleaning, or both.",
              },
              {
                step: "02",
                title: "Discuss the detail",
                text: "We talk through access, hours, areas to cover, and any specific requirements.",
              },
              {
                step: "03",
                title: "Receive a clear proposal",
                text: "You get a straightforward response so you can decide what works for your business.",
              },
              {
                step: "04",
                title: "Service delivery",
                text: "Once agreed, we deliver the service with clear communication throughout.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-3xl font-bold text-gold-500/30">
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

      {/* Contact strip */}
      <section className="border-y border-ink-100 bg-white">
        <div className="container-wide py-12 sm:py-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl">
                Prefer to speak to someone?
              </h2>
              <p className="mt-1 text-ink-600">
                Call us directly or send an enquiry online.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={`tel:${company.phoneRaw}`} className="btn-primary">
                Call {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="btn-secondary">
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
