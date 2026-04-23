"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/valence-logo.png"
            alt="Valence Biologics"
            width={180}
            height={48}
            className="h-auto w-auto max-h-12 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
          >
            Home
          </Link>
           
           <Link
            href="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
          >
            About Us
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
          >
            Shop Peptides
          </Link>
          <Link
            href="/cart"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            My Cart {itemCount > 0 ? `(${itemCount})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}