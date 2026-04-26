import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background image */}
      <Image
        src="/hero-vials.png"
        alt="Valence Biologics research peptide vials"
        fill
        priority
        className="
          object-cover
          object-[72%_center]
          opacity-80
          sm:opacity-100
          lg:object-center
          lg:opacity-100
        "
      />

      {/* Mobile/tablet overlay - stronger so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/70 lg:hidden" />

      {/* Desktop overlay */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/90 to-white/20 lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:min-h-[720px] lg:px-8 lg:py-0">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
            Valence Biologics
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            A Higher Standard in Peptides
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Your trusted source for quality research peptides.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Explore Peptides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}