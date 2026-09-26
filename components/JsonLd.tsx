import { company } from "@/lib/data";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.description,
    url: "https://astonservices.co.uk",
    telephone: `+44${company.phoneRaw.slice(1)}`,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.registeredOffice.line1,
      addressLocality: company.registeredOffice.city,
      addressRegion: "England",
      postalCode: company.registeredOffice.postcode,
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "Place",
      name: "Manchester and surrounding areas",
    },
    // Note: only include properties supported by available information
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: "https://astonservices.co.uk",
    email: company.email,
    telephone: `+44${company.phoneRaw.slice(1)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.registeredOffice.line1,
      addressLocality: company.registeredOffice.city,
      postalCode: company.registeredOffice.postcode,
      addressCountry: "GB",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
