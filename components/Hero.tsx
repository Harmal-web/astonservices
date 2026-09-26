import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Professional security and commercial cleaning services"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/85 to-primary-950/70" />
      </div>

      <div className="container-wide relative">
        <div className="flex min-h-[32rem] flex-col justify-center py-20 sm:min-h-[36rem] sm:py-24 lg:min-h-[40rem] lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent-400">
              Manchester & Surrounding Areas
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Security and commercial cleaning for your business
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
              Aston Services Limited provides professional security and commercial cleaning solutions across Manchester and the surrounding areas. Clear communication, reliable service delivery, and a straightforward approach.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-accent !px-6 !py-3.5 !text-base">
                Request a Quote
              </Link>
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
