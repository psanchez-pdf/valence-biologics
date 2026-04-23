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
              <div
                key={product.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1122}
                    height={1402}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-slate-900">
                  {product.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={product.href}
                    className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    View Product
                  </Link>

                  <Link
                    href={product.href}
                    className="text-sm font-semibold text-slate-700 transition hover:text-teal-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
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