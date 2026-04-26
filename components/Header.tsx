"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartLabel = itemCount > 0 ? `My Cart (${itemCount})` : "My Cart";

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/valence-logo.png"
            alt="Valence Biologics"
            width={180}
            height={48}
            className="h-auto w-auto max-h-10 object-contain md:max-h-12"
            priority
          />
        </Link>

        {/* Desktop nav */}
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
            {cartLabel}
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition hover:bg-slate-50"
            aria-label="Open cart"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h8.72a2 2 0 0 0 2-1.58l1.38-7.22H5.12" />
            </svg>

            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-900 px-1.5 text-[11px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>

        <button
  type="button"
  onClick={() => setMenuOpen((open) => !open)}
  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition hover:bg-slate-50"
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
>
  {menuOpen ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )}
</button>
        </div>
      </div>

      {/* Mobile dropdown */}
{/* Mobile dropdown */}
{menuOpen && (
  <div className="absolute right-5 top-[76px] w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl md:hidden">
    <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 border-l border-t border-slate-200 bg-white" />

    <nav className="relative flex flex-col text-right">
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
      >
        Home
      </Link>

      <Link
        href="/about"
        onClick={() => setMenuOpen(false)}
        className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
      >
        About Us
      </Link>

      <Link
        href="/shop"
        onClick={() => setMenuOpen(false)}
        className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
      >
        Shop Peptides
      </Link>
    </nav>
  </div>
)}
    </header>
  );
}