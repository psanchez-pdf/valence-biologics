"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartProvider";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    intendedUse: "",
    acknowledgment: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/order-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          items,
          subtotal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      clearCart();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit request. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <main className="min-h-screen bg-white">
        <Header />

        <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
          <CheckCircle2 className="h-16 w-16 text-teal-700" />

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900">
            Request Submitted
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Thank you. Your order request has been submitted for review. If
            approved, our team will follow up with next steps and invoice
            instructions.
          </p>

          <a
            href="/"
            className="mt-8 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Return Home
          </a>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Order Request
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            Submit for Review
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Complete the request below. Orders are reviewed before approval.
            Payment is not collected on this website.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 p-10 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              Your cart is empty
            </h2>

            <p className="mt-3 text-slate-600">
              Add products to your cart before submitting an order request.
            </p>

            <a
              href="/"
              className="mt-6 inline-block rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Continue Browsing
            </a>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                Request Information
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-700"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-700"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-700"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-700"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Organization / Institution *
                  </label>
                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-700"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Intended Research Use *
                  </label>
                  <textarea
                    name="intendedUse"
                    value={formData.intendedUse}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Briefly describe the intended research purpose."
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-700"
                  />
                </div>
              </div>

              <label className="mt-6 flex gap-3 rounded-2xl border border-teal-100 bg-teal-50 p-4 text-sm leading-6 text-slate-700">
                <input
                  type="checkbox"
                  name="acknowledgment"
                  checked={formData.acknowledgment}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 accent-teal-700"
                />

                <span>
                  I acknowledge that these products are intended for qualified
                  research use only and are not for human consumption,
                  diagnostic use, or therapeutic use.
                </span>
              </label>

              {status === "error" && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 flex w-full items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Request
                  </>
                ) : (
                  "Submit Order Request"
                )}
              </button>
            </form>

            <aside className="h-fit rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Request Summary
              </h2>

              <div className="mt-5 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{item.name}</p>
                      {item.size && (
                        <p className="text-sm text-slate-500">{item.size}</p>
                      )}
                      <p className="mt-1 text-sm text-slate-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-medium text-slate-600">Subtotal</span>
                <span className="text-2xl font-semibold text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                This is not a completed purchase. Pricing and availability are
                subject to review and approval.
              </p>
            </aside>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}