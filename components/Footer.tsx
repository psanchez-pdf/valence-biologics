import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/valence-logo-white.png"
                alt="Valence Biologics"
                width={180}
                height={48}
                className="h-auto w-auto max-h-12 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Quality research peptides, reliable service, and confidence from
              order to delivery.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="text-slate-400 transition hover:text-white"
                >
                  Shop Peptides
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-slate-400 transition hover:text-white"
                >
                  Product Details
                </Link>
              </li>

              <li>
                <span className="text-slate-500">COA Information</span>
              </li>

              <li>
                <span className="text-slate-500">Research Use Only</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/shipping"
                  className="text-slate-400 transition hover:text-white"
                >
                  Shipping
                </Link>
              </li>

              <li>
                <Link
                  href="/returns"
                  className="text-slate-400 transition hover:text-white"
                >
                  Returns
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 transition hover:text-white"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>

              <li className="pt-1">
                <a
                  href="mailto:support@valencebiologics.com"
                  className="text-slate-400 transition hover:text-white"
                >
                  support@valencebiologics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Valence Biologics. All rights reserved.</p>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            For Research Use Only
          </p>
        </div>
      </div>
    </footer>
  );
}