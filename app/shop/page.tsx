"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { shopProducts } from "@/data/shopProducts";
import { useCart } from "@/context/CartContext";
import ProductAddToCartPanel from "@/components/ProductAddToCartPanel";
import AddToCartButton from "@/components/AddToCartButton";
import type { CartProduct } from "@/context/CartContext";

type ShopProduct = (typeof shopProducts)[number];

function CatalogAddButton({ product }: { product: ShopProduct }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart({
      id: product.slug,
      name: product.name,
      size: product.size,
      image: product.image,
      price: product.price ?? 0,
      quantity: 1,
    });

    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
<button
  type="button"
  onClick={handleAddToCart}
  className={`mt-4 w-full rounded-full px-4 py-2.5 text-[12px] font-semibold transition-all duration-200 active:scale-[0.98] ${
    added
      ? "bg-teal-700 text-white shadow-sm"
      : "bg-slate-900 text-white shadow-sm hover:bg-slate-800"
  }`}
>
  <span className="relative flex items-center justify-center">
  <span className={`${added ? "opacity-0" : "opacity-100"} transition`}>
    Add to Cart
  </span>
  <span className={`absolute ${added ? "opacity-100" : "opacity-0"} transition`}>
    Added ✓
  </span>
</span>
</button>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(shopProducts.map((p) => p.category)))];
  }, []);

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = shopProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const searchableText =
        `${product.name} ${product.size} ${product.category}`.toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "price-low") return (a.price ?? 0) - (b.price ?? 0);
      if (sortBy === "price-high") return (b.price ?? 0) - (a.price ?? 0);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [activeCategory, search, sortBy]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-slate-50 via-white to-white px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                Shop Peptides
              </p>

              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Research peptides
              </h1>

              <p className="mt-3 text-sm text-slate-500">
                Browse available products
              </p>
            </div>
          </div>
          
      <div className="mb-6 border-b border-slate-100 pb-4"></div>

          <div className="mt-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      activeCategory === category
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

             <div className="grid gap-2 sm:grid-cols-2 lg:w-[420px]">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="h-10 rounded-full border border-slate-200 bg-white px-4 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
                />

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-10 w-full appearance-none rounded-full border border-slate-200 bg-white px-4 pr-10 text-xs font-medium text-slate-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A–Z</option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
                    ▼
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <div
                key={product.slug}
                className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link href={`/shop/${product.slug}`} className="block">
               <div className="flex h-[185px] items-center justify-center rounded-xl bg-slate-50 sm:h-[]">
                <Image
                  src={product.image}
                  alt={`${product.name} ${product.size}`}
                  width={420}
                  height={620}
                  className="flex h-[200px] w-auto object-contain transition duration-300 group-hover:scale-[1.05] sm:h-[]"
                />
              </div>

                  <div className="mt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-7]400">
                      {product.category}
                    </p>

                    <div className="mt-1">
                      <h2 className="text-[16px] font-semibold leading-5 text-slate-900">
                        {product.name}
                      </h2>

                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-[11px] text-slate-400">
                          {product.size}
                        </p>

                        <p className="text-[15px] font-semibold text-slate-900">
                          ${product.price ?? 0}
                        </p>
                      </div>
                    </div>
                  </div>
                <div className="mt-4 border-t border-slate-100 pt-4"></div> 
                </Link>
             
                <CatalogAddButton product={product} />

                <Link
                  href={`/shop/${product.slug}`}
                  className="mt-2 block text-center text-xs font-medium text-teal-700 transition hover:text-teal-900"
                >
                  View details →
                </Link>
              </div>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-8 text-center">
              <p className="text-sm text-slate-600">No products found.</p>
            </div>
          )}
       </div>
      </section>

      <Footer />
    </main>
  );
}