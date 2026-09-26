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
    (category === "security" ? "Security Service" : "Facilities & Cleaning");

  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20 transition-opacity group-hover:from-ink-950/95" />

      <div className="relative z-10 p-5 sm:p-6">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-sky-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-950">
          {badgeLabel}
        </span>
        <h3 className="text-xl font-semibold uppercase tracking-tight text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-200">
          {shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 transition-colors group-hover:text-sky-300">
          Explore Service
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
