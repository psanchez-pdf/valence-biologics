import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Returns
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Returns &amp; Refund Policy
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Please review our return and refund terms before placing an order.
          </p>

          <div className="mt-12 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Return Eligibility
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Return requests are reviewed on a case-by-case basis. Products
                must be unused, unopened, and in their original condition to be
                considered for return where applicable.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Non-Returnable Items
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Certain items may not be eligible for return once processed,
                shipped, opened, or otherwise handled. Please contact support
                before initiating a return request.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Damaged or Incorrect Orders
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                If your order arrives damaged or if you believe you received an
                incorrect item, please contact support promptly with your order
                details so the issue can be reviewed.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Refund Review
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Approved refunds, if applicable, will be processed according to
                the original payment method and internal review procedures.
                Timing may vary depending on the payment provider.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Contact Support
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                For questions related to returns, refunds, or order concerns,
                please contact us through the Contact Us page or by email at
                support@valencebiologics.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}