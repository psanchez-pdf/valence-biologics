"use client";

import { useState } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import type { CartProduct } from "@/context/CartContext";

type ProductAddToCartPanelProps = {
  product: CartProduct;
};

export default function ProductAddToCartPanel({
  product,
}: ProductAddToCartPanelProps) {
  const [quantity, setQuantity] = useState(product.quantity ?? 1);
  const [added, setAdded] = useState(false);

  const total = product.price * quantity;

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function handleAdded() {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  const cartProduct: CartProduct = {
    ...product,
    quantity,
  };

 return (
  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-950">Quantity</p>
      </div>

      <div className="flex items-center gap-4 rounded-full border border-slate-200 bg-white-50 px-3 py-2">
        <button
          type="button"
          onClick={decreaseQuantity}
          className="flex h-5 w-7 items-center justify-center rounded-full text-md font-semibold text-slate-700 transition hover:bg-white hover:text-teal-700"
          aria-label="Decrease quantity"
        >
          −
        </button>

        <span className="min-w-5 text-center text-sm font-semibold text-slate-950">
          {quantity}
        </span>

        <button
          type="button"
          onClick={increaseQuantity}
          className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-semibold text-slate-700 transition hover:bg-white hover:text-teal-700"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-5">
      <p className="text-sm font-medium text-slate-500">Estimated total</p>
      <p className="text-2xl font-semibold text-slate-950">
        ${total.toFixed(2)}
      </p>
    </div>

    <div className="mt-4">
      <AddToCartButton
        product={cartProduct}
        onAdded={handleAdded}
        label={added ? "Added to Cart ✓" : "Add to Cart"}
      />
    </div>

  
  </div>
);
}