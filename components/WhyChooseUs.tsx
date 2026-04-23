import Image from "next/image";

const features = [
  {
   
    title: "High Purity Standards",
    description:
      "Committed to high purity products with a focus on quality, consistency, and customer confidence.",
    icon: "/shield.png",
  },
  {
    title: "Product Consistency",
    description:
      "Clear, dependable product presentation so customers know what they are order.",
    icon: "/flask.png",
  },
  {
    title: "Product Accuracy",
    description:
      "Customers should feel confident that what they order is what they receive.",
    icon: "/microscope.png",
  },
  {
    title: "Fast Shipping & Support",
    description:
      "Dependable shipping and responsive support from check to delivery.",
    icon: "/quality.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Why Choose Valence
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Quality products, reliable service, and confidence in every order
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="h-20 w-20 object-contain"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}