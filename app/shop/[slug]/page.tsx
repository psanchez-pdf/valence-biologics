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

  const relatedProducts = shopProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-slate-50 via-white to-white px-6 py-11 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/shop"
            className="inline-flex text-sm font-semibold text-teal-700 transition hover:text-teal-900"
          >
            ← Back to Shop
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex min-h-[480px] sm:max-h-[] items-center justify-center rounded-[1.5rem] bg-slate-50 p-6">
                <Image
                  src={product.image}
                  alt={`${product.name} ${product.size}`}
                  width={700}
                  height={700}
                  priority
                  className="max-h-[400px] w-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:pt-4">
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

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-2xl font-semibold tracking-tight text-slate-950">
                  ${product.price ?? 0}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  Research use only
                </span>
              </div>

              <div className="mt-6 mw-full max-w-xl">
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
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              About the Product
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              What the research says
            </h2>

            <div className="mt-6 grid gap-4">
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

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-950">
              Research use only notice
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {product.researchNote}
            </p>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Products listed by Valence Biologics are not intended for human
              consumption, clinical use, diagnostic use, therapeutic use,
              veterinary use, household use, or as food, drugs, cosmetics, or
              dietary supplements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Related Products
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Researchers also viewed
              </h2>
            </div>

            <Link
              href="/shop"
              className="hidden text-sm font-semibold text-teal-700 transition hover:text-teal-900 sm:inline-flex"
            >
              View all products →
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/shop/${item.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-[170px] items-center justify-center rounded-xl bg-slate-50">
                  <Image
                    src={item.image}
                    alt={`${item.name} ${item.size}`}
                    width={300}
                    height={300}
                    className="max-h-[145px] w-auto object-contain transition duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  {item.category}
                </p>

                <div className="mt-1 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-950">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.size}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-slate-950">
                    ${item.price ?? 0}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/shop"
            className="mt-7 inline-flex text-sm font-semibold text-teal-700 transition hover:text-teal-900 sm:hidden"
          >
            View all products →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}