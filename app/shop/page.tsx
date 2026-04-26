import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { shopProducts } from "@/data/shopProducts";

const categories = [
  "Metabolic Research",
  "Repair & Recovery Research",
  "Skin & Cellular Research",
  "Cellular & Longevity Research",
  "Growth Hormone Research",
];

const featuredProducts = shopProducts.filter((product) =>
  ["Tirzepatide", "Retatrutide", "BPC-157", "GHK-Cu"].includes(product.name)
);

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Shop Peptides
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Research products with a cleaner, more confident shopping
              experience.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Browse research-use-only products organized by category, with
              clear sizing, consistent product presentation, and a simple
              order-request flow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#all-products"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Browse Products
              </Link>

              <Link
                href="/cart"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-700 hover:text-teal-700"
              >
                View Cart
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/shop/${product.slug}`}
                  className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-2xl bg-slate-50">
                    <Image
                      src={product.image}
                      alt={`${product.name} ${product.size}`}
                      width={1122}
                      height={1402}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-semibold text-slate-950">
                      {product.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {product.size}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="all-products" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                Available Products
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Organized by research category
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Each product card includes the listed size, product category,
                and a short research-focused overview.
              </p>
            </div>

            <div className="rounded-2xl border border-teal-100 bg-teal-50 px-5 py-4">
              <p className="text-sm font-semibold text-teal-900">
                Research Use Only
              </p>
              <p className="mt-1 max-w-sm text-sm leading-6 text-teal-800">
                Not for human consumption, clinical use, diagnostic use, or
                household use.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-14">
            {categories.map((category) => {
              const categoryProducts = shopProducts.filter(
                (product) => product.category === category
              );

              if (categoryProducts.length === 0) return null;

              return (
                <section key={category}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {category}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {categoryProducts.length} product
                      {categoryProducts.length === 1 ? "" : "s"}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {categoryProducts.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/shop/${product.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
                      >
                        <div className="bg-slate-50 p-5">
                          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                            <Image
                              src={product.image}
                              alt={`${product.name} ${product.size}`}
                              width={1122}
                              height={1402}
                              className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                            />
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-2xl font-semibold text-slate-950">
                                {product.name}
                              </h4>

                              <p className="mt-1 text-sm font-semibold text-teal-700">
                                {product.size}
                              </p>
                            </div>

                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                              RUO
                            </span>
                          </div>

                          <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                            {product.summary}
                          </p>

                          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                            <span className="text-sm font-semibold text-slate-950 transition group-hover:text-teal-700">
                              View Product
                            </span>

                            <span className="text-lg font-semibold text-slate-950 transition group-hover:translate-x-1 group-hover:text-teal-700">
                              →
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
              Research Use Only
            </p>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              All products listed on this page are intended strictly for
              laboratory research use only. They are not intended for human
              consumption, clinical use, diagnostic use, therapeutic use,
              veterinary use, household use, or as food, drugs, cosmetics, or
              dietary supplements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}