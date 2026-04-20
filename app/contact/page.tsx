"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in name, email, and message.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0a0f1e] flex items-center justify-center px-6 py-28 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[-10%] right-[10%] h-[600px] w-[600px] rounded-full bg-[#1e3a8a] opacity-15 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[10%] h-[400px] w-[400px] rounded-full bg-[#1d4ed8] opacity-10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-16 items-start">

        {/* ── LEFT: context ── */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-blue-300 uppercase">
              Free Consultation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Let's talk about{" "}
            <span
              className="text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              your business.
            </span>
          </h1>

          <p className="text-white/45 leading-relaxed mb-10">
            15 minutes. No pitch. We'll look at where you're losing time and money
            and tell you exactly what we'd do about it — whether you hire us or not.
          </p>

          <div className="space-y-5">
            {[
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Fredericksburg, VA",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Response within 24 hours",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "No obligation — just a real conversation",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-white/55">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Message received</h2>
              <p className="text-white/40 text-sm">
                We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">
                  Phone <span className="text-white/20 normal-case font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="(540) 555-0100"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">
                  Tell us about your business
                </label>
                <textarea
                  name="message"
                  placeholder="What kind of work do you do, how many people on your team, what's the biggest thing slowing you down?"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-xs">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full rounded-full bg-white py-3.5 text-sm font-semibold text-[#0a0f1e] transition-all duration-200 hover:bg-blue-100 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Book Free Consultation →"}
              </button>

              <p className="text-center text-xs text-white/20">
                We'll respond within 24 hours. No spam, ever.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}