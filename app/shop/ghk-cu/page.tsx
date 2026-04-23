import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/data/products";

export default function GHKCuPage() {
  const product = products.find((p) => p.id === "ghk-cu");

  if (!product) return null;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-slate-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Available Products
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            GHK-Cu
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Displayed through a modern, structured, and quality-forward page
            design intended for research-use-only materials.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
            <Image
              src="/valence-ghkcu10.png"
              alt="GHK-Cu vial"
              width={1122}
              height={1402}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Research Use Only
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              GHK-Cu
            </h2>

            <p className="mt-4 text-2xl font-semibold text-slate-900">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              This page is presented with a clean and professional visual system
              designed to support a credible and consistent research-only product
              experience.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-slate-500">Format</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    Lyophilized peptide
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Size</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    10 MG
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Category</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    Research material
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Use</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    Laboratory research only
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <AddToCartButton product={product} />

              <Link
                href="/shop"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Back to Shop
              </Link>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              This product is offered strictly for laboratory research use only.
              It is not for human consumption, clinical use, diagnostic use, or
              household use.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}