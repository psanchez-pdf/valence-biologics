import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What are these products intended for?",
    answer:
      "All products listed on this website are intended strictly for laboratory research use only.",
  },
  {
    question: "Are these products for human consumption?",
    answer:
      "No. These products are not for human consumption, clinical use, diagnostic use, or household use.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us through the Contact Us page or by emailing support@valencebiologics.com.",
  },
  {
    question: "Where can I find more product information?",
    answer:
      "Additional product information is available on each individual product page.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            FAQ
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Answers to common questions about our available products and support.
          </p>

          <div className="mt-12 space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}