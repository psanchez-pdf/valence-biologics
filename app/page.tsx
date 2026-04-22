export default function ValenceBiologicsWebsite() {
  const products = [
    {
      name: "BPC-157",
      format: "Lyophilized powder",
      size: "10 mg",
      note: "Research Use Only",
    },
    {
      name: "GHK-Cu",
      format: "Lyophilized powder",
      size: "10 mg",
      note: "Research Use Only",
    },
    {
      name: "TB-500",
      format: "Lyophilized powder",
      size: "10 mg",
      note: "Research Use Only",
    },
  ];

  const standards = [
    {
      title: "Batch Verification",
      text: "Each lot is documented with identity, purity, and batch-specific quality records.",
    },
    {
      title: "Research-Focused Packaging",
      text: "Minimal, traceable labeling designed for controlled handling and cataloging.",
    },
    {
      title: "Documentation First",
      text: "Structured specifications, storage details, and quality documentation built into every release.",
    },
    {
      title: "Controlled Presentation",
      text: "A precise, science-forward experience without exaggerated marketing language.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <div className="text-2xl font-semibold tracking-tight text-white">V</div>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.35em] text-white">VALENCE</div>
              <div className="text-[10px] tracking-[0.45em] text-[#7e92b7]">BIOLOGICS</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#quality" className="transition hover:text-white">Quality</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,113,181,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_24%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center rounded-full border border-[#4d71b5]/30 bg-[#4d71b5]/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#9ab0da]">
                Precision-led research identity
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Clean, controlled biologics branding for a modern research company.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Valence Biologics is positioned as a premium, science-forward brand with a quiet visual language, structured product presentation, and a documentation-first quality story.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-2xl border border-[#4d71b5]/40 bg-[#4d71b5] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore Products
                </a>
                <a
                  href="#quality"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  View Quality Standards
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["Research Grade", "Structured presentation for controlled, research-focused use."],
                  ["Documented Lots", "Batch-level identity and quality records designed for traceability."],
                  ["Minimal Packaging", "Premium visual restraint with operational clarity."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
                    <div className="text-sm font-medium text-white">{title}</div>
                    <div className="mt-2 text-sm leading-6 text-white/65">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#121317] p-6">
                  <div className="mx-auto h-10 w-10 rounded-2xl border border-white/10 bg-white/5 text-center text-2xl font-semibold leading-10 text-white">
                    V
                  </div>
                  <div className="mt-5 text-center text-2xl font-semibold tracking-[0.28em] text-white">
                    VALENCE
                  </div>
                  <div className="mt-1 text-center text-xs tracking-[0.42em] text-[#7e92b7]">
                    BIOLOGICS
                  </div>
                  <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                    <div className="text-3xl font-semibold text-white">BPC-157</div>
                    <div className="mt-2 text-sm text-white/65">10 mg · Lyophilized powder</div>
                    <div className="mt-8 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.28em] text-white/55">
                      Research Use Only
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[10px] uppercase tracking-[0.24em] text-white/45">
                    <div className="rounded-2xl border border-white/10 px-3 py-3">Batch</div>
                    <div className="rounded-2xl border border-white/10 px-3 py-3">Storage</div>
                    <div className="rounded-2xl border border-white/10 px-3 py-3">Spec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-[#8ba2cd]">Catalog</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Clean product presentation.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65">
              Product pages can stay minimal while still carrying the right signals: batch structure, documentation clarity, storage details, and a consistent research-only presentation style.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#4d71b5]/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white">
                  V
                </div>
                <div className="mt-8 text-3xl font-semibold tracking-tight text-white">{product.name}</div>
                <div className="mt-2 text-sm text-white/60">{product.size} · {product.format}</div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs uppercase tracking-[0.28em] text-[#9ab0da]">
                  {product.note}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/55">
                  <span>View details</span>
                  <span className="text-white transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="quality" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-[#8ba2cd]">Quality</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Documentation-first trust signals.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                  The strongest version of this brand does not rely on hype. It relies on clarity, traceability, and design restraint. The site should feel as structured as the documentation behind the products.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {standards.map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-white/10 bg-[#101115] p-6">
                    <div className="text-lg font-medium text-white">{item.title}</div>
                    <div className="mt-3 text-sm leading-7 text-white/60">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-[#8ba2cd]">About</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">A quieter kind of premium.</h3>
              <p className="mt-4 text-base leading-8 text-white/65">
                Valence Biologics is designed to feel precise and composed. The visual identity avoids trend-heavy wellness cues and instead leans on scientific credibility, minimal typography, and premium packaging language.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101115] to-[#151821] p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-[#8ba2cd]">Website Direction</div>
              <ul className="mt-4 space-y-4 text-base leading-7 text-white/70">
                <li>• Streamlined hero section with one dominant product visual</li>
                <li>• Minimal navigation and restrained accent color usage</li>
                <li>• Individual product pages with storage, lot, and batch detail modules</li>
                <li>• Quality section centered around records, testing, and traceability</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-[#8ba2cd]">Contact</div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                  Ready for the next pass.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
                  This first version gives you a strong visual and structural direction. From here, we can turn it into a full site with product detail pages, COA/document sections, contact forms, and polished brand assets.
                </p>
              </div>
              <a
                href="mailto:info@valencebiologics.com"
                className="inline-flex rounded-2xl border border-[#4d71b5]/40 bg-[#4d71b5] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Contact Valence
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/45 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Valence Biologics</div>
          <div>Clean biotech identity · Research-focused presentation</div>
        </div>
      </footer>
    </div>
  );
}