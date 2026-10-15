import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our website and what we do.",
};

export default function AboutPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
          About Us
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Welcome to Our Website
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          We&apos;re building a modern website using Next.js, React, TypeScript,
          and Tailwind CSS.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
