import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { cleaningServices, company } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cleaningServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = cleaningServices.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: `${service.shortDescription} Provided by ${company.name} in Manchester and surrounding areas.`,
    alternates: { canonical: `/cleaning/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${company.shortName}`,
      description: service.shortDescription,
    },
  };
}

export default async function CleaningServicePage({ params }: Props) {
  const { slug } = await params;
  const service = cleaningServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = cleaningServices.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-wide py-10 sm:py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500">
              <li>
                <Link href="/" className="hover:text-primary-900">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/cleaning" className="hover:text-primary-900">
                  Cleaning
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-primary-900" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-700">
                Commercial Cleaning
              </p>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-primary-950 sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-stone-600">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
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

      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <h2 className="heading-section">Other cleaning services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/cleaning/${s.slug}`}
                className="card card-hover p-5 transition-shadow"
              >
                <h3 className="font-semibold text-primary-950">{s.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 line-clamp-2">
                  {s.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Enquire about ${service.title.toLowerCase()}`}
        description="Tell us about your premises and cleaning needs and we will respond promptly."
      />
    </>
  );
}
