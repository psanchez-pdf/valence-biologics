"use client";

import { useCart } from "@/context/CartContext";
import type { CartProduct } from "@/context/CartContext";

type AddToCartButtonProps = {
  product: CartProduct;
  onAdded?: () => void;
  label?: string;
};

export default function AddToCartButton({
  product,
  onAdded,
  label = "Add to Cart",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleClick() {
    addToCart(product);
    onAdded?.();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
    >
      {label}
    </button>
  );
}