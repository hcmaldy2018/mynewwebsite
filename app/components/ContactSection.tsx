"use client";

import { useMemo, useState } from "react";
import { LuxButton } from "./LuxButton";

function safeAppendQuery(url: string, params: Record<string, string>) {
  try {
    const u = new URL(url);
    for (const [k, v] of Object.entries(params)) {
      if (!v) continue;
      u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    // If it's not a valid absolute URL yet, just return the original.
    return url;
  }
}

export function ContactSection({
  pageContext,
}: {
  pageContext: "Home" | "Contractors" | "Business Owners";
}) {
  const bookCallUrl = process.env.NEXT_PUBLIC_BOOK_CALL_URL ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "error"; text: string }
    | { type: "success"; text: string }
  >({ type: "idle" });

  const defaultMessage = useMemo(() => {
    if (pageContext === "Contractors") {
      return "I want help with estimates, pricing, and turning more leads into booked jobs.";
    }
    if (pageContext === "Business Owners") {
      return "I want to improve our social media pipeline and integrate AI to capture and qualify leads.";
    }
    return "I want to scale my business with systems, consistent lead flow, and better execution.";
  }, [pageContext]);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-glow" />
            Strategy-first consulting
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Book a call. Get a plan.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Tell us where you’re stuck. We’ll map the fastest path to
            predictable growth—built around your team and your market.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={bookCallUrl || "#contact"}
              target={bookCallUrl ? "_blank" : undefined}
              rel={bookCallUrl ? "noreferrer noopener" : undefined}
              className={[
                "lux-glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all hover:bg-white/6",
                "border border-white/10",
              ].join(" ")}
            >
              <span className="text-primary font-semibold">1</span>
              <span>Pick a time</span>
            </a>
            <a
              href="#contact"
              className={[
                "lux-glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all hover:bg-white/6",
                "border border-white/10",
              ].join(" ")}
            >
              <span className="text-primary font-semibold">2</span>
              <span>Send context</span>
            </a>
            <a
              href="#contact"
              className={[
                "lux-glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all hover:bg-white/6",
                "border border-white/10",
              ].join(" ")}
            >
              <span className="text-primary font-semibold">3</span>
              <span>Receive next steps</span>
            </a>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl">
            <div className="text-sm font-semibold text-white/90">
              What to expect
            </div>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
              <div>• A clear, practical growth roadmap</div>
              <div>• Systems + lead flow recommendations</div>
              <div>• A strategy that fits your capacity</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white/90">
                  Contact form
                </div>
                <div className="mt-1 text-xs text-white/60">
                  Page context: {pageContext}
                </div>
              </div>

              <LuxButton
                href={bookCallUrl || "#contact"}
                ariaLabel="Book a Call"
                className="px-5 py-3"
              >
                Book a Call
              </LuxButton>
            </div>

            <form
              className="mt-5 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();

                if (!bookCallUrl) {
                  setStatus({
                    type: "error",
                    text: "Set NEXT_PUBLIC_BOOK_CALL_URL to your Calendly link to enable booking.",
                  });
                  return;
                }

                const missing: string[] = [];
                if (!name.trim()) missing.push("name");
                if (!email.trim()) missing.push("email");

                if (missing.length) {
                  setStatus({
                    type: "error",
                    text: `Please enter your ${missing.join(" and ")}.`,
                  });
                  return;
                }

                const urlWithContext = safeAppendQuery(bookCallUrl, {
                  utm_source: "website",
                  utm_medium: "contact_form",
                  utm_campaign: pageContext.toLowerCase().replaceAll(" ", "_"),
                  lead_name: name.trim().slice(0, 60),
                  lead_email: email.trim().slice(0, 80),
                  lead_business: business.trim().slice(0, 80),
                });

                window.open(urlWithContext, "_blank", "noopener,noreferrer");
                setStatus({
                  type: "success",
                  text: "Opening booking… If it doesn’t load, check your pop-up blocker.",
                });
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-white/70">
                    Name
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all focus:border-white/25"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-white/70">
                    Email
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all focus:border-white/25"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-semibold text-white/70">
                  Contractor / Business
                </span>
                <input
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all focus:border-white/25"
                  placeholder={
                    pageContext === "Contractors"
                      ? "Roofing, decks, pools, etc."
                      : "Company name or what you sell"
                  }
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-white/70">
                  What are you trying to achieve?
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 min-h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all focus:border-white/25"
                  placeholder={defaultMessage}
                />
              </label>

              {status.type !== "idle" ? (
                <div
                  className={[
                    "rounded-2xl border px-4 py-3 text-sm backdrop-blur-xl",
                    status.type === "error"
                      ? "border-red-500/30 bg-red-500/10 text-red-200"
                      : "border-green-500/30 bg-green-500/10 text-green-200",
                  ].join(" ")}
                  role={status.type === "error" ? "alert" : "status"}
                >
                  {status.text}
                </div>
              ) : null}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className={[
                    "lux-glow inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-semibold",
                    "bg-primary text-white transition-all duration-300",
                    "hover:brightness-110 hover:-translate-y-0.5",
                    "border border-white/10",
                  ].join(" ")}
                >
                  Book a Call
                </button>

                <div className="text-xs text-white/60">
                  We respect your time. No spam.
                </div>
              </div>
            </form>
          </div>

          <div className="mt-5 text-xs text-white/55">
            Tip: set `NEXT_PUBLIC_BOOK_CALL_URL` in an `.env.local` file so the booking button opens your scheduling tool.
          </div>
        </div>
      </div>
    </section>
  );
}

