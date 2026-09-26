import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { securityServices, company } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return securityServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = securityServices.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: `${service.shortDescription} Provided by ${company.name} in Manchester and surrounding areas.`,
    alternates: { canonical: `/security/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${company.shortName}`,
      description: service.shortDescription,
    },
  };
}

export default async function SecurityServicePage({ params }: Props) {
  const { slug } = await params;
  const service = securityServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = securityServices.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="border-b border-ink-100 bg-white">
        <div className="container-wide py-10 sm:py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
              <li>
                <Link href="/" className="hover:text-ink-900">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/security" className="hover:text-ink-900">Security</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-ink-900" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="accent-line">Security Service</p>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                </Link>
                <a href={`tel:${company.phoneRaw}`} className="btn-secondary">
                  Call {company.phone}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-100">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-wide">
          <h2 className="heading-section">Other security services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/security/${s.slug}`}
                className="card p-5 transition-shadow hover:shadow-elevated"
              >
                <h3 className="font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600 line-clamp-2">
                  {s.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Enquire about ${service.title.toLowerCase()}`}
        description="Tell us about your site or event and we will respond with the information you need."
      />
    </>
  );
}
