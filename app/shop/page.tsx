import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Retatrutide",
    href: "/shop/retatrutide",
    image: "/valence-reta10.png",
    description:
      "Presented as a research-use-only product within a clean, modern, and quality-focused shopping experience.",
  },
  {
    name: "GHK-Cu",
    href: "/shop/ghk-cu",
    image: "/valence-ghkcu10.png",
    description:
      "Structured for a clear and consistent product presentation designed for research-use-only materials.",
  },
  {
    name: "BPC-157",
    href: "/shop/bpc-157",
    image: "/valence-bpc10.png",
    description:
      "Displayed through a polished and professional layout aligned with the broader visual standard of the site.",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Shop Peptides
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Available Products
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Browse our available research-use-only products through a clean,
              modern, and professionally structured shopping experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1122}
                    height={1402}
                    className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {product.name}
                  </h2>

                  <span className="mt-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    RUO
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-900 transition group-hover:text-teal-700">
                    View Product
                  </span>

                  <span className="text-lg font-semibold text-slate-900 transition group-hover:translate-x-1 group-hover:text-teal-700">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm leading-7 text-slate-500">
              All products listed on this page are intended strictly for
              laboratory research use only and are not for human consumption,
              clinical use, diagnostic use, or household use.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}