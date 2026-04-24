import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProductPurchaseOptions from "@/components/ProductPurchaseOptions";
import { products } from "@/data/products";

export default function RetatrutidePage() {
  const product = products.find((p) => p.id === "retatrutide");

  if (!product) return null;

  const variants = [
    {
      id: "retatrutide-5mg",
      size: "5 MG",
      price: 80,
    },
    {
      id: "retatrutide-10mg",
      size: "10 MG",
      price: product.price,
    },
    {
      id: "retatrutide-15mg",
      size: "15 MG",
      price: 160,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/shop"
            className="text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            ← Back to Shop
          </Link>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                  Research Use Only
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Retatrutide
                </h1>

                <p className="mt-4 text-2xl font-bold text-slate-900">
                  Starting at ${variants[0].price.toFixed(2)}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  A polished research-use-only product listing designed for
                  clear selection, consistent presentation, and a professional
                  purchase experience.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Format
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Lyophilized peptide
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Sizes
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      5 MG, 10 MG, 15 MG
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Category
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Research material
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Use
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Research Use Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <ProductPurchaseOptions product={product} variants={variants} />
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm leading-7 text-slate-500">
            This product is offered strictly for laboratory research use only. It
            is not for human consumption, clinical use, diagnostic use, or
            household use.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}