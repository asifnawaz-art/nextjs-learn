import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Contact Us
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Have a question or want to learn more? We&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Contact Our Team
          </h2>

          <p className="mt-4 text-slate-600">
            Contact information and a message form will be available here soon.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
