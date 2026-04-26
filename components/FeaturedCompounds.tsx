import Link from "next/link";

const products = [
  {
    name: "Retatrutide",
    href: "/shop/retatrutide",
    sizes: "10mg and 20mg",
    description: "Studied in clinical research as an investigational multi-receptor agonist in metabolic and weight-management models.",
  },
  {
    name: "BPC-157",
    href: "/shop/bpc-157",
    sizes: "5mg and 10mg",
    description: "Explored in preclinical studies related to tissue repair, inflammatory response, and gastrointestinal protection.",
  },
  {
    name: "GHK-Cu",
    href: "/shop/ghk-cu",
    sizes: "50mg and 100mg",
    description: "Studied in published research involving skin remodeling, collagen activity, and tissue-repair pathways.",
  },
];

export default function FeaturedCompounds() {
  return (
    <section className="bg-slate-50 px-6 py-16 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Featured Peptides
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
           Popular research peptides
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Browse a few of our most-requested products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex min-h-full flex-col">
                <div>
                  <div className="mb-6 h-1 w-12 rounded-full bg-teal-700" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                    Research Use Only
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {product.name}
                  </h3>

                  <div className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {product.sizes}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>
                </div>

                <div className="mt-8 text-sm font-semibold text-slate-900 transition group-hover:text-teal-700">
                  View product →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}