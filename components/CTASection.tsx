import Link from "next/link";
import { company } from "@/lib/data";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
}

export function CTASection({
  title = "Ready to discuss your requirements?",
  description = "Contact Aston Services for a straightforward conversation about security or commercial cleaning for your premises in Manchester and the surrounding areas.",
  primaryLabel = "Request a Quote",
  primaryHref = "/contact",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
      <div className="container-wide relative section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <p className="accent-line justify-center !text-gold-400">
            Get in touch
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="btn-primary !px-7 !py-3.5 !text-base shadow-gold"
            >
              {primaryLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            {showPhone && (
              <a
                href={`tel:${company.phoneRaw}`}
                className="btn-ghost-light !px-7 !py-3.5 !text-base"
              >
                Call {company.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
