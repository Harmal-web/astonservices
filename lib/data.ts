export const company = {
  name: "Aston Services Limited",
  shortName: "Aston Services",
  companyNumber: "15065209",
  registeredOffice: {
    line1: "317 3-9 Hyde Road",
    city: "Manchester",
    county: "England",
    postcode: "M12 6BQ",
  },
  phone: "07440 127087",
  phoneRaw: "07440127087",
  email: "Tajuddinnajar6@gmail.com",
  primaryContact: "Mahammad Tajuddin Najaar",
  serviceArea: "Manchester and surrounding areas",
  description:
    "Professional security and commercial cleaning services for businesses across Manchester and the surrounding areas.",
};

export const securityServices = [
  {
    slug: "static-guarding",
    title: "Static Guarding",
    shortDescription:
      "On-site security personnel providing a visible presence and controlled access for your premises.",
    description:
      "Static guarding places trained security personnel at fixed locations to monitor access points, deter unauthorised activity, and provide a consistent on-site presence. Suitable for commercial buildings, construction sites, retail premises, and other locations that benefit from a dedicated security presence.",
    image: "/images/static-guard.jpg",
    imageAlt: "Security officer providing static guarding services",
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Patrols",
    shortDescription:
      "Regular vehicle and foot patrols that check multiple sites and respond to incidents as required.",
    description:
      "Mobile patrols provide scheduled or random checks across one or more locations. Patrol officers can inspect premises, report issues, and respond to alarms or call-outs. This service is often used by businesses that require regular security oversight without a permanent on-site guard.",
    image: "/images/mobile-patrol.webp",
    imageAlt: "Security vehicle on mobile patrol",
  },
  {
    slug: "k9-security",
    title: "K9 Security",
    shortDescription:
      "Specialist dog-handler teams that provide an additional layer of detection and deterrence.",
    description:
      "K9 security teams combine trained detection or patrol dogs with experienced handlers. These units can support site security, event security, and specialist searches where an enhanced detection capability is required.",
    image: "/images/k9-security.webp",
    imageAlt: "K9 security dog and handler",
  },
  {
    slug: "event-security",
    title: "Event Security",
    shortDescription:
      "Security support for events, including crowd management, access control, and site safety.",
    description:
      "Event security covers planning and on-the-day support for corporate events, public gatherings, private functions, and other occasions that require controlled access, crowd management, and a clear security presence.",
    image: "/images/event-security.jpg",
    imageAlt: "Security team supporting an event",
  },
] as const;

export const cleaningServices = [
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    shortDescription:
      "Regular and planned cleaning programmes for offices and professional workspaces.",
    description:
      "Office cleaning covers the day-to-day and scheduled cleaning of commercial workspaces. Services typically include desk areas, meeting rooms, kitchens, washrooms, and common areas, helping maintain a clean and presentable working environment.",
    image: "/images/office-cleaning.jpg",
    imageAlt: "Clean modern office interior",
  },
  {
    slug: "retail-showrooms",
    title: "Retail & Showrooms",
    shortDescription:
      "Cleaning services tailored to retail floors, display areas, and customer-facing spaces.",
    description:
      "Retail and showroom cleaning focuses on presentation. High-traffic floors, display areas, fitting rooms, and entrances are kept clean so that customers experience a well-maintained environment that supports the brand.",
    image: "/images/retail-cleaning.jpg",
    imageAlt: "Clean retail showroom floor and displays",
  },
  {
    slug: "industrial-warehouse",
    title: "Industrial & Warehouse Facilities",
    shortDescription:
      "Cleaning support for warehouses, industrial units, and larger operational facilities.",
    description:
      "Industrial and warehouse cleaning addresses the practical needs of larger operational spaces. This can include floor cleaning, high-level dusting, loading areas, and welfare facilities, scheduled around operational requirements.",
    image: "/images/office-cleaning.jpg", // placeholder - no dedicated industrial image
    imageAlt: "Industrial facility cleaning",
  },
  {
    slug: "deep-cleans-end-of-tenancy",
    title: "Deep Cleans & End of Tenancy",
    shortDescription:
      "Thorough one-off cleans for handover, refurbishment, or end-of-tenancy requirements.",
    description:
      "Deep cleans and end-of-tenancy cleans provide a more intensive clean than regular maintenance. These services are commonly requested when premises are being handed over, refurbished, or prepared for new occupants.",
    image: "/images/retail-cleaning.jpg", // placeholder
    imageAlt: "Thorough deep clean of commercial premises",
  },
] as const;

export type SecurityService = (typeof securityServices)[number];
export type CleaningService = (typeof cleaningServices)[number];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/security", label: "Security" },
  { href: "/cleaning", label: "Cleaning" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
] as const;
