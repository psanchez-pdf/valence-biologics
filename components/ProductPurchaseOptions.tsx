"use client";

import { useState } from "react";
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

  return (
    <div className="mt-8 space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="size"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Size
          </label>

          <select
            id="size"
            value={selectedVariantId}
            onChange={(event) => setSelectedVariantId(event.target.value)}
            className="h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
          >
            {variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.size} — ${variant.price.toFixed(2)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Quantity
          </label>

          <div className="flex h-12 items-center justify-between rounded-2xl border border-slate-200 bg-white px-2 shadow-sm">
            <button
              type="button"
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              −
            </button>

            <input
              id="quantity"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={quantity}
              onChange={(event) => {
                const value = event.target.value.replace(/\D/g, "");
                setQuantity(Math.max(1, Number(value) || 1));
              }}
              className="w-14 border-0 bg-transparent text-center text-sm font-bold text-slate-900 outline-none"
            />

            <button
              type="button"
              onClick={() => setQuantity((current) => current + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Selected option
            </p>
            <p className="mt-1 text-base font-bold text-slate-900">
              {selectedVariant.size} × {quantity}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-slate-500">Total</p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              ${(selectedVariant.price * quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <AddToCartButton product={cartProduct} />
    </div>
  );
}