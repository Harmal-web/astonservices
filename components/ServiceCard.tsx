import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  href: string;
  image: string;
  imageAlt: string;
  category?: "security" | "cleaning";
}

export function ServiceCard({
  title,
  shortDescription,
  href,
  image,
  imageAlt,
  category = "security",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group card card-hover flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span
          className={`mb-2 text-xs font-semibold uppercase tracking-wider ${
            category === "security" ? "text-primary-600" : "text-accent-700"
          }`}
        >
          {category === "security" ? "Security" : "Cleaning"}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-primary-950 group-hover:text-primary-800">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
          {shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-700 group-hover:text-accent-800">
          Find out more
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
