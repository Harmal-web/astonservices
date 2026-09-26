import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  href: string;
  image: string;
  imageAlt: string;
  category?: "security" | "cleaning";
  badge?: string;
}

export function ServiceCard({
  title,
  shortDescription,
  href,
  image,
  imageAlt,
  category = "security",
  badge,
}: ServiceCardProps) {
  const badgeLabel =
    badge ||
    (category === "security" ? "Security" : "Cleaning");

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink-100 bg-white shadow-card transition-all hover:border-sky-200 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-400 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span
          className={`mb-2 inline-flex w-fit rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
            category === "security"
              ? "bg-sky-50 text-sky-700"
              : "bg-ink-100 text-ink-600"
          }`}
        >
          {badgeLabel}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-ink-950 group-hover:text-sky-700">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
          {shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 group-hover:text-sky-700">
          Explore service
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
