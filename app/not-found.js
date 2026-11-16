import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex min-h-[80vh] flex-col items-start justify-center pb-24 pt-40">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-6 text-6xl font-semibold md:text-8xl">
        Page <em className="accent">not found.</em>
      </h1>
      <p className="muted mt-6 text-lg">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-10">
        Back to home
      </Link>
    </section>
  );
}
