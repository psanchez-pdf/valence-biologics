import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/about" className="transition hover:text-white">
                About Us
              </Link>
              <Link href="/shop" className="transition hover:text-white">
                Shop Peptides
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Shop
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/shipping" className="transition hover:text-white">
                Shipping
              </Link>
              <Link href="/returns" className="transition hover:text-white">
                Returns
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Help
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/faq" className="transition hover:text-white">
                FAQ
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact Us
              </Link>
              <a
                href="mailto:support@valencebiologics.com"
                className="transition hover:text-white"
              >
                support@valencebiologics.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-800 px-6 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Valence Biologics. All rights reserved.</p>
        <p className="uppercase tracking-[0.18em] text-slate-400">
          Research Use Only
        </p>
      </div>
    </footer>
  );
}