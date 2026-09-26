import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-primary-950 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-stone-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
