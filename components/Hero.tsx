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
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/75 to-ink-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/30" />
      </div>

      <div className="container-wide relative">
        <div className="flex min-h-[32rem] flex-col justify-center py-20 sm:min-h-[36rem] sm:py-24 lg:min-h-[40rem] lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-sky-400">
              Manchester &amp; surrounding areas
            </p>

            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Security and commercial cleaning for your business
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Professional security presence and commercial cleaning across Manchester and the surrounding areas. Clear communication and a straightforward service approach.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary !px-6 !py-3.5 !text-base shadow-sky">
                Request a Quote
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href={`tel:${company.phoneRaw}`}
                className="btn-ghost-light !px-6 !py-3.5 !text-base"
              >
                Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
