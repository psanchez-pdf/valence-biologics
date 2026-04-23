import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCompounds from "@/components/FeaturedCompounds";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedCompounds />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}