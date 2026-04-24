"use client";

import { useCart } from "@/context/CartContext";
import type { CartProduct } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: CartProduct }) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="w-full rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
    >
      Add to Cart
    </button>
  );
}