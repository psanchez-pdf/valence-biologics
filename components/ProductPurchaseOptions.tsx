"use client";

import { useState } from "react";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import type { Product } from "@/data/products";

type ProductVariant = {
  id: string;
  size: string;
  price: number;
};

type ProductPurchaseOptionsProps = {
  product: Product;
  variants: ProductVariant[];
};

export default function ProductPurchaseOptions({
  product,
  variants,
}: ProductPurchaseOptionsProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [showAddedOverlay, setShowAddedOverlay] = useState(false);
  const [addedLabel, setAddedLabel] = useState(false);

  const selectedVariant =
    variants.find((variant) => variant.id === selectedVariantId) || variants[0];

  const cartProduct = {
    ...product,
    id: selectedVariant.id,
    name: `${product.name} - ${selectedVariant.size}`,
    price: selectedVariant.price,
    size: selectedVariant.size,
    quantity,
  };

  function handleAddedToCart() {
    setShowAddedOverlay(true);
    setAddedLabel(true);

    setTimeout(() => {
      setShowAddedOverlay(false);
      setAddedLabel(false);
    }, 3000);
  }

  return (
    <div className="relative mt-8 rounded-[2rem]">
      {/* Added overlay */}
      {showAddedOverlay && (
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[2rem] bg-white/90 p-5 backdrop-blur-[2px]">
          <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Added to cart
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {product.name} — {selectedVariant.size} × {quantity} was added
              successfully.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/cart"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View cart
              </Link>

              <button
                type="button"
                onClick={() => {
                  setShowAddedOverlay(false);
                  setAddedLabel(false);
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`space-y-6 transition ${
          showAddedOverlay ? "pointer-events-none opacity-35" : ""
        }`}
      >
        {/* Size */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Size
          </p>

          <div className="grid grid-cols-3 gap-3">
            {variants.map((variant) => {
              const isActive = variant.id === selectedVariantId;

              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={`rounded-2xl border px-3 py-4 text-center shadow-sm transition ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span className="block text-sm font-bold">
                    {variant.size}
                  </span>

                  <span
                    className={`mt-1 block text-xs font-semibold ${
                      isActive ? "text-slate-200" : "text-slate-500"
                    }`}
                  >
                    ${variant.price.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Quantity
          </p>

          <div className="flex h-14 items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
            <button
              type="button"
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xl font-semibold text-slate-700 transition hover:bg-slate-100"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={quantity}
              onChange={(event) => {
                const value = event.target.value.replace(/\D/g, "");
                setQuantity(Math.max(1, Number(value) || 1));
              }}
              className="w-16 border-0 bg-transparent text-center text-base font-bold text-slate-900 outline-none"
              aria-label="Quantity"
            />

            <button
              type="button"
              onClick={() => setQuantity((current) => current + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xl font-semibold text-slate-700 transition hover:bg-slate-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Selected option
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                {selectedVariant.size} × {quantity}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-slate-500">Total</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                ${(selectedVariant.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <AddToCartButton
          product={cartProduct}
          onAdded={handleAddedToCart}
          label={addedLabel ? "Added ✓" : "Add to Cart"}
        />
      </div>
    </div>
  );
}