import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: `Contact ${company.name} for security or commercial cleaning enquiries in Manchester. Call ${company.phone} or send a message online.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${company.shortName}`,
    description: `Request a quote or enquire about security and commercial cleaning services in Manchester.`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink-950">
        <div className="container-wide py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="accent-line !text-sky-400">Contact</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Request a quote or get in touch
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              Tell us about your security or commercial cleaning requirements. We will respond as soon as possible. For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold tracking-tight text-ink-950">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-ink-600">
                Complete the form below and we will get back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink-950">
                    Contact details
                  </h2>
                  <dl className="mt-6 space-y-6">
                    <div>
                      <dt className="text-sm font-medium text-ink-500">Phone</dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${company.phoneRaw}`}
                          className="text-lg font-semibold text-ink-900 hover:text-sky-600"
                        >
                          {company.phone}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-ink-500">Email</dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${company.email}`}
                          className="break-all text-base font-medium text-ink-900 hover:text-sky-600"
                        >
                          {company.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-ink-500">Primary contact</dt>
                      <dd className="mt-1 text-base text-ink-800">
                        {company.primaryContact}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-ink-500">Registered office</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-700">
                        {company.registeredOffice.line1}<br />
                        {company.registeredOffice.city}<br />
                        {company.registeredOffice.postcode}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
                  <h3 className="font-semibold text-ink-950">Prefer to call?</h3>
                  <p className="mt-1.5 text-sm text-ink-600">
                    Speak to us directly about your requirements.
                  </p>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="btn-primary mt-4 w-full"
                  >
                    Call {company.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
