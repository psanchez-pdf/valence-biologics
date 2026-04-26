"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type OrderItem = {
  id: string;
  name: string;
  size?: string;
  price: number;
  quantity: number;
};

type SubmittedOrder = {
  customer: {
    name: string;
    email: string;
    phone?: string;
    notes?: string;
  };
  items: OrderItem[];
  subtotal: number;
  submittedAt: string;
};

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<SubmittedOrder | null>(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("valence-order-confirmation");

    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch {
        setOrder(null);
      }
    }
  }, []);

  function downloadSummary() {
    if (!order) return;

    const itemLines = order.items
      .map((item) => {
        const itemTotal = item.price * item.quantity;

        return `${item.name}${item.size ? ` - ${item.size}` : ""} | Quantity: ${
          item.quantity
        } | Estimated total: $${itemTotal}`;
      })
      .join("\n");

    const summary = `
VALENCE BIOLOGICS
ORDER REQUEST SUMMARY

Submitted: ${order.submittedAt}

CUSTOMER INFORMATION
Name: ${order.customer.name}
Email: ${order.customer.email}
Phone: ${order.customer.phone || "Not provided"}

REQUESTED ITEMS
${itemLines}

Estimated Subtotal: $${order.subtotal}

NOTES
${order.customer.notes || "None"}

STATUS
Your order request has been received.

PAYMENT
No payment has been collected.

FOLLOW-UP
Our team will review your request and contact you directly using the information provided.
`;

    const blob = new Blob([summary.trim()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "valence-order-request-summary.txt";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden border-t border-slate-100 bg-white px-6 py-20 lg:px-8">

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
                Confirmation
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
               Your order request has been received.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Thank you — your request has been submitted successfully.
                </p>

              <p className="mt-5 max-w-xl border-l-2 border-teal-700 pl-4 text-sm leading-6 text-slate-500">
                Our team will review your request, confirm availability, and follow up with invoice details and next steps. 
                Please allow up to 24 hours for a response.
              </p>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Return to Shop
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              {!order ? (
                <div className="rounded-3xl bg-slate-50 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">
                    Summary
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    Request submitted
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Your request was submitted successfully. A detailed summary
                    is not available on this page.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">
                        Summary
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                        Request details
                      </h2>
                    </div>

                  </div>

                  <div className="mt-6 space-y-4">
                    {order.items.map((item) => {
                      const itemTotal = item.price * item.quantity;

                      return (
                        <div
                          key={item.id}
                          className="flex items-start justify-between gap-6 rounded-2xl bg-slate-50 p-5"
                        >
                          <div>
                            <h3 className="font-semibold text-slate-950">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              {item.size ? `${item.size} · ` : ""}
                              Quantity {item.quantity}
                            </p>
                          </div>

                          <p className="font-semibold text-slate-950">
                            ${itemTotal}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Estimated subtotal
                      </p>

                      <p className="text-2xl font-semibold tracking-tight text-slate-950">
                        ${order.subtotal}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={downloadSummary}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                  >
                    Download Summary
                  </button>

                  {order.customer.notes && (
                    <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                      <p className="text-sm font-semibold text-slate-950">
                        Notes
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {order.customer.notes}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}