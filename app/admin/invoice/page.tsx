"use client";

import { useState } from "react";

export default function InvoicePage() {
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
    description: "",
    amount: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [paymentUrl, setPaymentUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.clientName || !form.clientEmail || !form.amount || !form.description) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: form.clientName,
          clientEmail: form.clientEmail,
          description: form.description,
          amount: parseFloat(form.amount),
        }),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        setPaymentUrl(data.url);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ clientName: "", clientEmail: "", description: "", amount: "" });
    setPaymentUrl("");
    setStatus("idle");
  };

  return (
    <main className="min-h-screen bg-[#0a0f1e] flex items-center justify-center px-6 py-24">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute top-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#1e3a8a] opacity-15 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-medium tracking-widest text-blue-300 uppercase">
              Admin · Invoice Tool
            </span>
          </div>
          <h1 className="text-3xl font-semibold text-white">Send a Payment Request</h1>
          <p className="text-white/40 mt-2 text-sm">
            Fill in the details below. Your client will receive an email with a secure Stripe payment link.
          </p>
        </div>

        {status === "success" ? (
          /* ── SUCCESS STATE ── */
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Payment link created</h2>
            <p className="text-white/40 text-sm mb-6">
              An email has been sent to <span className="text-white/70">{form.clientEmail}</span>.
              You can also copy the link below to send manually.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 mb-6 break-all text-xs text-blue-300 font-mono text-left">
              {paymentUrl}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigator.clipboard.writeText(paymentUrl)}
                className="flex-1 rounded-full border border-white/15 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Copy Link
              </button>
              <button
                onClick={handleReset}
                className="flex-1 rounded-full bg-white py-3 text-sm font-semibold text-[#0a0f1e] hover:bg-blue-100 transition-colors"
              >
                New Invoice
              </button>
            </div>
          </div>
        ) : (
          /* ── FORM STATE ── */
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 space-y-5">

            <div>
              <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                Client Name
              </label>
              <input
                type="text"
                name="clientName"
                placeholder="John Smith"
                value={form.clientName}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                Client Email
              </label>
              <input
                type="email"
                name="clientEmail"
                placeholder="john@example.com"
                value={form.clientEmail}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                Service Description
              </label>
              <textarea
                name="description"
                placeholder="CRM setup — Month 1 retainer"
                value={form.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">$</span>
                <input
                  type="number"
                  name="amount"
                  placeholder="500.00"
                  value={form.amount}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 pl-8 pr-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
            </div>

            {status === "error" && (
              <p className="text-red-400 text-xs">
                Something went wrong. Check your API setup and try again.
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full rounded-full bg-white py-3.5 text-sm font-semibold text-[#0a0f1e] transition-all duration-200 hover:bg-blue-100 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Creating payment link…" : "Send Payment Request →"}
            </button>

            <p className="text-center text-xs text-white/25">
              Powered by Stripe · Secure checkout
            </p>
          </div>
        )}
      </div>
    </main>
  );
}