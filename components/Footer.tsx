import Link from "next/link";
import { company, navLinks, securityServices, cleaningServices } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-primary-950 text-stone-300">
      <div className="container-wide section-padding !pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-white text-sm font-bold tracking-tight text-primary-950">
                AS
              </span>
              <span className="text-base font-semibold tracking-tight text-white">
                Aston Services
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              Security and commercial cleaning services for businesses in Manchester and surrounding areas.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2 text-stone-300 transition-colors hover:text-white"
              >
                <svg className="h-4 w-4 shrink-0 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 break-all text-stone-300 transition-colors hover:text-white"
              >
                <svg className="h-4 w-4 shrink-0 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {company.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Security
            </h3>
            <ul className="mt-4 space-y-2.5">
              {securityServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/security/${service.slug}`}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cleaning */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Cleaning
            </h3>
            <ul className="mt-4 space-y-2.5">
              {cleaningServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/cleaning/${service.slug}`}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-800 pt-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Company number {company.companyNumber}.
          </p>
          <p className="text-stone-500">
            Registered office: {company.registeredOffice.line1},{" "}
            {company.registeredOffice.city}, {company.registeredOffice.postcode}
          </p>
        </div>
      </div>
    </footer>
  );
}
