"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setShowThankYou(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Contact Us
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We're here to help with product questions and general support.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Send a message
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Complete the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </button>

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Contact Information
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                    support@valencebiologics.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showThankYou && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 px-6 backdrop-blur-sm">
    <div className="relative w-full max-w-[380px] rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-2xl sm:p-7">
      <button
        onClick={() => setShowThankYou(false)}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
      >
        ×
      </button>

      <div className="mb-5 h-[3px] w-12 rounded-full bg-green-900" />

      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Message sent
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700">
        We've received your message and will get back to you as soon as possible.
      </p>
    </div>
  </div>
)}
      <Footer />
    </main>
  );
}