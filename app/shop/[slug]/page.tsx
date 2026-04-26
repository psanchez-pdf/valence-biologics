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

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
              <Image
                src={product.image}
                alt={`${product.name} ${product.size}`}
                width={1122}
                height={1402}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <Link
              href="/shop"
              className="text-sm font-semibold text-teal-700 transition hover:text-teal-900"
            >
              ← Back to Shop
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              {product.category}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {product.name}
              </h1>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {product.size}
              </span>

              <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                RUO
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {product.summary}
            </p>

            <div className="mt-8">
              <ProductAddToCartPanel
                product={{
                  id: product.slug,
                  name: product.name,
                  size: product.size,
                  image: product.image,
                  price: product.price ?? 0,
                  description: product.summary,
                  quantity: 1,
                }}
              />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              No payment is required at this time. Final availability, order
              details, and next steps are confirmed after review.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Research Profile
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Product overview
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <div>
                <p className="font-semibold text-slate-950">Product</p>
                <p>{product.name}</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Listed Size</p>
                <p>{product.size}</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Category</p>
                <p>{product.category}</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Use</p>
                <p>Laboratory research use only</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Published Research Context
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              What research commonly evaluates
            </h2>

            <div className="mt-6 grid gap-4">
              {product.researchHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-7 text-slate-700">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-5">
              <p className="text-sm font-semibold text-teal-950">
                Research-use-only statement
              </p>

              <p className="mt-2 text-sm leading-7 text-teal-900">
                {product.researchNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-slate-950 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
            Important Notice
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            All products listed by Valence Biologics are intended strictly for
            laboratory research use only. Products are not intended for human
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
