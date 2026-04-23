import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Shipping
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Shipping Policy
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Please review our shipping information before placing an order.
          </p>

          <div className="mt-12 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Order Processing
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Orders are processed in the order they are received. Processing
                times may vary based on order volume, product availability, and
                fulfillment considerations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Shipping Availability
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Shipping availability may vary by destination and applicable
                fulfillment limitations. Additional restrictions may apply based
                on order review and local requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Tracking Information
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                When available, tracking information will be provided after an
                order has been processed and prepared for shipment.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Delivery Delays
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Delivery timelines may be affected by carrier delays, weather,
                holidays, address verification issues, or other circumstances
                outside of our control.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Research Use Notice
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                All products listed on this website are intended strictly for
                laboratory research use only and are not for human consumption,
                clinical use, diagnostic use, or household use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}