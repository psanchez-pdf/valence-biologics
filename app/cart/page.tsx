"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
  } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shippingState: "",
    shippingZip: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function updateForm(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitOrderRequest(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/order-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          cartItems: items,
          subtotal,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      const submittedOrder = {
        customer: form,
        items,
        subtotal,
        submittedAt: new Date().toLocaleString(),
      };

      sessionStorage.setItem(
        "valence-order-confirmation",
        JSON.stringify(submittedOrder)
      );

      clearCart();
      window.location.href = "/order-confirmation";
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          Cart
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Request an Order
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
         Review your selected items and send us your request. 
         We'll confirm availability, answer any questions, and follow up with next steps.
        </p>

        {success && (
          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5 text-sm font-medium text-teal-800">
            Order request sent successfully.
          </div>
        )}

        {items.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Your cart is empty
            </h2>

            <p className="mt-2 text-slate-600">
              Add products to your cart to begin your order request.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Browse Peptides →
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Selected Items
                  </h2>

                </div>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm font-semibold text-slate-400 transition hover:text-slate-700"
                >
                  Clear Cart
                </button>
              </div>

              <div className="mt-7 divide-y divide-slate-100">
         {items.map((item) => {
  const unitPrice = item.price ?? 0;
  const lineTotal = unitPrice * item.quantity;

  return (
    <div
      key={`${item.id}-${item.size ?? "default"}`}
      className="relative py-6 last:pb-0"
    >
      <button
        type="button"
        onClick={() => removeFromCart(item.id)}
        aria-label={`Remove ${item.name}`}
        className="absolute right-0 top-0 text-lg leading-none text-slate-300 transition hover:text-slate-600"
      >
        ×
      </button>

      <div className="grid grid-cols-[1fr_auto] gap-6">
        <div className="min-w-0 pr-4">
          <h3 className="text-base font-semibold leading-6 text-slate-900">
            {item.name}
            {item.size ? ` - ${item.size}` : ""}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            ${unitPrice.toFixed(2)} each
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => decreaseQuantity(item.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span className="w-7 text-center text-sm font-semibold text-slate-900">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => increaseQuantity(item.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <p className="min-w-[105px] self-start pr-0 text-right text-base font-semibold leading-6 text-slate-900">
          ${lineTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
})}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="mt-1 text-lg font-semibold text-slate-900">
                    Estimated subtotal
                  </span>

                  <span className="mt-1 text-xl font-semibold text-slate-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

            
              </div>
            </div>

            <form
              onSubmit={submitOrderRequest}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                Contact Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Please enter the best contact information so our team can follow
                up promptly.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={updateForm}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-600"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={updateForm}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-600"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={updateForm}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-600"
                />

                <div className="grid gap-4 sm:grid-cols-2">
  <input
    name="shippingState"
    placeholder="State"
    value={form.shippingState}
    onChange={updateForm}
    required
    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-600"
  />

  <input
    name="shippingZip"
    placeholder="ZIP Code"
    value={form.shippingZip}
    onChange={updateForm}
    required
    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-600"
  />
</div>

                <textarea
                  name="notes"
                  placeholder="Notes"
                  value={form.notes}
                  onChange={updateForm}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-600"
                />
              </div>

              {error && (
                <p className="mt-4 text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Order Request"}
              </button>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                No payment is required at this time. We’ll review your request
                and follow up with next steps.
              </p>
            </form>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}