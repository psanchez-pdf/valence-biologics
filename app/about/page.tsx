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
          Built around trust, quality, and consistency
        </h1>
        <p className="mt-6 text-lg text-justify leading-8 text-slate-600">
          Valence Biologics was created with a simple goal: to offer a more reliable 
          and professional experience for customers looking for quality peptide products. 
          We believe people should feel confident in where they shop, what they are ordering, 
          and the standard behind the brand.
</p>
        <p className="mt-4 text-lg text-justify  leading-8 text-slate-600">
        Our approach is centered on clarity, consistency, and a better overall 
        experience from start to finish. From product presentation to customer 
        support, we aim to make every part of the process feel straightforward, 
        polished, and dependable.
</p>
     <p className="mt-4 text-lg text-justify leading-8 text-slate-600">
        At Valence Biologics, we are committed to building trust through quality, professionalism, and attention to detail.
        </p>
      </section>

      <Footer />
    </main>
  );
}