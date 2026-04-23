"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    items,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Cart
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Your Cart
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Review your selected items before checkout.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Your cart is empty
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Browse available products to add items to your cart.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Shop Peptides
              </Link>
            </div>
          ) : (
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="w-full max-w-[180px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={1122}
                          height={1402}
                          className="h-auto w-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h2 className="text-2xl font-semibold text-slate-900">
                              {item.name}
                            </h2>
                            <p className="mt-2 text-sm text-slate-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>

                          <p className="text-lg font-semibold text-slate-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                          <div className="flex items-center rounded-full border border-slate-300">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                              −
                            </button>
                            <span className="px-4 py-2 text-sm font-semibold text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
                >
                  Clear Cart
                </button>
              </div>

              <div className="h-fit rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Order Summary
                </h2>

                <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-slate-900">
                      Total
                    </span>
                    <span className="text-2xl font-semibold text-slate-900">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="mt-8 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Proceed to Checkout
                </button>

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  Products listed on this website are intended strictly for
                  laboratory research use only.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}