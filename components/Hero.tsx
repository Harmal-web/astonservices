import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Professional security and commercial cleaning services in Manchester"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/45 to-ink-950/65" />
<div className="absolute inset-0 bg-gradient-to-r from-ink-950/35 via-transparent to-ink-950/25" />
      </div>

      <div className="container-wide relative">
        <div className="flex min-h-[34rem] flex-col items-center justify-center py-24 text-center sm:min-h-[40rem] sm:py-28 lg:min-h-[44rem] lg:py-32">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Manchester &amp; Surrounding Areas
            </p>
            <span className="h-px w-10 bg-gold-500" />
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-semibold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">
            Professional{" "}
            <span className="text-gold-400">Security</span>
            <br className="hidden sm:block" />
            {" "}&amp; Cleaning Services
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Security presence and commercial cleaning for businesses across Manchester and the surrounding areas. Clear communication and a straightforward service approach.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary !px-7 !py-3.5 !text-base shadow-gold">
              Request a Quote
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`tel:${company.phoneRaw}`}
              className="btn-ghost-light !px-7 !py-3.5 !text-base"
            >
              Call {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
