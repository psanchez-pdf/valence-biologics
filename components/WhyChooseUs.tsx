import Image from "next/image";

const features = [
  {
    title: "Clear Product Information",
    description:
      "Vial sizes, product details, and research-use information are easy to review before you order.",
    icon: "/shield.png",
  },
  {
    title: "COA Information",
    description:
      "COA details will be linked on applicable product pages so available testing information is easy to review.",
    icon: "/flask.png",
  },
  {
    title: "Simple Ordering",
    description:
      "A streamlined cart and order flow designed to make the process straightforward from start to finish.",
    icon: "/microscope.png",
  },
  {
    title: "Responsive Support",
    description:
      "Questions are handled with clear communication and support from order review through delivery.",
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
            A clearer way to order research peptides
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Image
                  src={feature.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
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