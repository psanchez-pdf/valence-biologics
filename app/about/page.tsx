import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          About Us
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          A clean and research-focused brand experience
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Valence Biologics is designed around clarity, consistency, and a
          professional presentation standard for research-use-only materials.
        </p>
      </section>

      <Footer />
    </main>
  );
}