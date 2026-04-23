import Image from "next/image";

export default function ValenceBiologicsWebsite() {
  const products = [
    { name: "BPC-157", format: "Lyophilized powder", size: "10 mg", note: "Research Use Only" },
    { name: "GHK-Cu", format: "Lyophilized powder", size: "10 mg", note: "Research Use Only" },
    { name: "TB-500", format: "Lyophilized powder", size: "10 mg", note: "Research Use Only" },
  ];

  const standards = [
    { title: "Batch Verification", text: "Each lot is documented with identity, purity, and batch-specific quality records." },
    { title: "Research-Focused Packaging", text: "Minimal, traceable labeling designed for controlled handling and cataloging." },
    { title: "Documentation First", text: "Structured specifications, storage details, and quality documentation built into every release." },
    { title: "Controlled Presentation", text: "A precise, science-forward experience without exaggerated marketing language." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

          <Image
            src="/valence-logo.png"
            alt="Valence Biologics"
            width={260}
            height={70}
            className="h-auto w-[180px] md:w-[220px]"
            priority
          />

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#quality" className="hover:text-white">Quality</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,103,140,0.2),transparent_30%)]" />

          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

            {/* LEFT */}
            <div>
              <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
                Precision-driven biologics for advanced research environments.
              </h1>

              <p className="mt-6 text-lg text-white/70 max-w-xl">
                Valence Biologics delivers controlled, research-grade compounds with a focus on
                consistency, traceability, and scientific integrity.
              </p>

              <div className="mt-8 flex gap-4">
                <a href="#products" className="bg-[#4F678C] px-6 py-3 rounded-xl text-sm">
                  View Products
                </a>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#121317] p-6">

                <div className="flex justify-center">
                  <Image
                    src="/valence-icon.png"
                    alt="Valence icon"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="mt-6 text-center text-2xl tracking-wide">VALENCE</div>
                <div className="text-center text-xs tracking-widest text-[#4F678C]">
                  BIOLOGICS
                </div>

                <div className="mt-6 text-center text-3xl">BPC-157</div>
                <div className="text-center text-sm text-white/60">
                  10 mg · Lyophilized powder
                </div>

                <div className="mt-6 text-center text-xs text-white/50">
                  Research Use Only
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="text-3xl mb-10">Products</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="rounded-2xl border border-white/10 p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10">
                  <Image src="/valence-icon.png" alt="icon" width={28} height={28} />
                </div>

                <div className="mt-6 text-2xl">{product.name}</div>
                <div className="text-sm text-white/60">
                  {product.size} · {product.format}
                </div>

                <div className="mt-4 text-xs text-[#4F678C]">
                  {product.note}
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* QUALITY */}
        <section id="quality" className="bg-white/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="text-3xl mb-10">Quality</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {standards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 p-6">
                  <div className="text-lg">{item.title}</div>
                  <div className="text-sm text-white/60 mt-2">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-6 text-sm text-white/50">
        <div className="mx-auto max-w-7xl flex justify-between">
          <div>© 2026 Valence Biologics</div>
          <div>Research-focused biologics</div>
        </div>
      </footer>

    </div>
  );
}