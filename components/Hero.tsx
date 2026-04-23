import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.06),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.08),_transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Research Use Only
          </p>

          <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            A Higher Standard in Peptides 
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
         Trusted quality, consistent results, and fast delivery—when it matters most.</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Peptides
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              About Us
            </Link>
            <div className="flex gap-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
                <span className="items-center text-gray-700">✓</span>
                <span>High Purity</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="items-center text-gray-700">✓</span>
                <span>Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="items-center text-gray-700">✓</span>
                <span>Quality Tested</span>
            </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            All products listed on this site are for research use only.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
            <Image
              src="/valence-peptides-trio10.png"
              alt="Valence Biologics peptide vials"
              width={1400}
              height={1050}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}