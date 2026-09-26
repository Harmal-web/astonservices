"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="hidden border-b border-white/5 bg-ink-950 lg:block">
        <div className="container-wide flex h-10 items-center justify-between text-xs text-ink-300">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-400"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-400"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {company.email}
            </a>
          </div>
          <span className="text-ink-400">Security &amp; Commercial Cleaning · Manchester</span>
        </div>
      </div>

      <div className="container-wide">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 focus-visible:outline-none"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-500 text-sm font-bold tracking-tight text-ink-950">
              AS
            </span>
            <div className="hidden sm:block">
              <span className="block text-base font-semibold tracking-tight text-white">
                Aston Services
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-wider text-gold-500">
                Limited
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-gold-400"
                      : "text-ink-300 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/contact" className="btn-primary !py-2.5 !text-sm">
              Request a Quote
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-300 hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-white/10 bg-ink-950 lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="container-wide space-y-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-base font-medium",
                  isActive ? "text-gold-400" : "text-ink-300 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium text-gold-400"
            >
              {company.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
