import Link from "next/link";

const products = [
  {
    name: "Retatrutide",
    href: "/shop/retatrutide",
    description:
      "10mg, 20mg, and 30mg vials available for research use only.",
  },
  {
    name: "BPC-157",
    href: "/shop/bpc-157",
    description:
      "5mg and 10mg vials available for research use only.",
  },
  {
    name: "GHK-Cu",
    href: "/shop/ghk-cu",
    description:
      "10mg and 50mg vials available for research use only.",
  },
];

export default function FeaturedCompounds() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Available Products
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Explore Available Products
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Browse available products and view product details.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
              <Link
                href={product.href}
                className="mt-6 inline-block text-sm font-semibold text-slate-900 hover:text-teal-700"
              >
                View Product →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}