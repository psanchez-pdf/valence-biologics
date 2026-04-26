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

    window.setTimeout(() => {
      setAdded(false);
    }, 3000);
  }

  const cartProduct: CartProduct = {
    ...product,
    quantity,
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">Selected size</p>
          <p className="mt-1 text-lg font-semibold text-slate-950">
            {product.size}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold text-slate-500">Price</p>
          <p className="mt-1 text-lg font-semibold text-slate-950">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-950">Quantity</p>
          <p className="text-xs text-slate-500">
            Adjust before adding to cart
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-700"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="min-w-6 text-center text-base font-semibold text-slate-950">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-700"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
        <p className="text-sm font-semibold text-slate-500">
          Estimated total
        </p>
        <p className="text-xl font-semibold text-slate-950">
          ${total.toFixed(2)}
        </p>
      </div>

      <div className="mt-5">
        <AddToCartButton
          product={cartProduct}
          onAdded={handleAdded}
          label={added ? "Added to Cart ✓" : "Add to Cart"}
        />
      </div>

      {added && (
        <p className="mt-3 text-center text-sm font-medium text-teal-700">
          Item added. You can review your cart from the header.
        </p>
      )}
    </div>
  );
}