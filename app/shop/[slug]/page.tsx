import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getShopProduct, shopProducts } from "@/data/shopProducts";
import ProductAddToCartPanel from "@/components/ProductAddToCartPanel";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return shopProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getShopProduct(slug);

  if (!product) {
    return {
      title: "Product | Valence Biologics",
    };
  }

  return {
    title: `${product.name} ${product.size} | Valence Biologics`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getShopProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-slate-50 via-white to-white px-6 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/shop"
            className="inline-flex text-sm font-semibold text-teal-700 transition hover:text-teal-900"
          >
            ← Back to Shop
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-50 p-6">
                <div className="aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={`${product.name} ${product.size}`}
                    width={800}
                    height={800}
                    priority
                    className="max-h-[420px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                {product.category}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  {product.name}
                </h1>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {product.size}
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                {product.summary}
              </p>

              <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Size
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {product.size}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Price
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    ${product.price ?? 0}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Use
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Research only
                  </p>
                </div>
              </div>

              <div className="mt-8 max-w-xl">
                <ProductAddToCartPanel
                  product={{
                    id: product.slug,
                    name: product.name,
                    size: product.size,
                    image: product.image,
                    price: product.price ?? 0,
                    quantity: 1,
                  }}
                />
              </div>

              <div className="mt-5 max-w-xl rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-xs leading-6 text-slate-500">
                  No payment is required at this step. Availability and order
                  details are reviewed before confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Product Snapshot
            </p>

            <div className="mt-6 divide-y divide-slate-100">
              <div className="flex items-center justify-between gap-6 pb-4">
                <span className="text-sm text-slate-500">Product</span>
                <span className="text-right text-sm font-semibold text-slate-900">
                  {product.name}
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 py-4">
                <span className="text-sm text-slate-500">Size</span>
                <span className="text-right text-sm font-semibold text-slate-900">
                  {product.size}
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 py-4">
                <span className="text-sm text-slate-500">Category</span>
                <span className="text-right text-sm font-semibold text-slate-900">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 pt-4">
                <span className="text-sm text-slate-500">Intended use</span>
                <span className="text-right text-sm font-semibold text-slate-900">
                  Research Use Only
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Research Context
            </p>

            <div className="mt-5 space-y-4">
              {product.researchHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm leading-7 text-slate-600">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold text-slate-900">
            Research-use-only notice
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {product.researchNote}
          </p>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            Products listed by Valence Biologics are not intended for human
            consumption, clinical use, diagnostic use, therapeutic use,
            veterinary use, household use, or as food, drugs, cosmetics, or
            dietary supplements.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}