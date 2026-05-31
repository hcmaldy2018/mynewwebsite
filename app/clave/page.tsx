import Image from "next/image";
import Link from "next/link";

export default function ClavePage() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-[#0a0f1e]">

      {/* ═══ BACKGROUND ═══ */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glows */}
        <div className="absolute top-[-10%] left-[-5%] h-[700px] w-[700px] rounded-full bg-[#1e3a8a] opacity-20 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#2563eb] opacity-10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[500px] rounded-full bg-[#1d4ed8] opacity-10 blur-[100px]" />
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-24 text-center">

        {/* Clave Logo */}
        <div className="mb-10 relative w-48 h-16">
          <Image
            src="/Clave-White.png"
            alt="Clave"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-blue-300 uppercase">
            Custom CRM for Contractors
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[42px] md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          Every job. Every lead.{" "}
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #60a5fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Every dollar.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-6">
          A fully custom CRM built for contractors — from the field up.
          Track leads, send estimates, collect signatures, and get paid,
          all from your phone.
        </p>

        {/* Price callout */}
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 mb-10 backdrop-blur-sm">
          <span className="text-white/40 text-sm line-through">Used to cost $10,000+</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="text-white font-semibold text-sm">Starting at $297/month</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0f1e] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]"
          >
            Book a Free Demo
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            See What's Inside
          </a>
        </div>

        {/* Powered by */}
        <p className="mt-10 text-xs text-white/20 tracking-wide">
          A Romero & Locksley product · Technology Built From Field Experience
        </p>
      </section>

      {/* ═══ WHY IT'S AFFORDABLE ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl border border-blue-500/20 p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,58,138,0.35) 0%, rgba(10,15,30,0.8) 70%)",
            }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Why It's Affordable
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-6">
              This used to cost tens of thousands of dollars.
            </h2>
            <p className="text-white/55 leading-relaxed text-lg mb-4">
              Custom CRMs like Clave used to require a team of developers, months of build time,
              and a five-figure price tag — putting them out of reach for most contractors.
            </p>
            <p className="text-white/55 leading-relaxed text-lg mb-4">
              We built Clave with a small team and used AI to help us do it — the same way
              we help our clients build their businesses. That's how we can offer a fully
              custom system at a fraction of what it used to cost.
            </p>
            <p className="text-white/70 leading-relaxed text-lg font-medium">
              And if you want to start incorporating AI into your own operation the way we did ours — we can help with that too.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <div className="mb-16 max-w-xl">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              What Clave Does
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Everything in one place.{" "}
              <span className="text-white/30">Nothing you don't need.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Lead & Sales Pipeline",
                desc: "Track every lead from first contact to closed job. See where every deal stands at a glance.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "Project Stages & Budgets",
                desc: "Track construction projects through every phase with budgets attached. No more guessing where a job stands.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
                title: "Mobile App",
                desc: "Your whole operation in your pocket. Create estimates, check jobs, and follow up with clients from the field.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
                title: "Fast Estimates + E-Signature",
                desc: "Send a professional estimate in minutes. Clients sign electronically — no printing, no scanning, no delays.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                ),
                title: "Payment Requests",
                desc: "Send payment requests directly from the CRM. Get paid faster without chasing checks or making awkward calls.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: "Role-Based Access",
                desc: "Owner, sales rep, field crew — everyone sees exactly what they need and nothing they don't. Built for teams.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-[#0a0f1e] p-8 transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 mb-5 transition-colors group-hover:bg-blue-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BUILT SIMPLE ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Built Different
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              Powerful enough for a growing company.{" "}
              <span className="text-white/35">Simple enough for the field.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-5">
              We've used the CRMs that make you feel like you need a training course just to log a lead.
              Clave was designed by someone who has sold roofing, siding, and windows door to door —
              and knows that your team won't use a system that slows them down.
            </p>
            <p className="text-white/50 leading-relaxed">
              Whether you're a solo operator just getting organized or an established company
              with a sales team in the field, Clave is built to fit how you actually work.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Solo operators", desc: "Get organized from day one" },
              { title: "Growing teams", desc: "Role-based access as you scale" },
              { title: "Field crews", desc: "Mobile-first, works on any phone" },
              { title: "Sales reps", desc: "Pipeline and follow-up built in" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-4" />
                <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Simple, transparent pricing.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-3">Standard</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-semibold text-white">$297</span>
                <span className="text-white/40 text-sm mb-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Full CRM setup, built for your business",
                  "Lead & sales pipeline",
                  "Project tracking with stages",
                  "Estimates + electronic signature",
                  "Payment requests",
                  "Mobile app",
                  "Up to 5 user roles",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center rounded-full border border-white/15 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Book a Free Demo
              </Link>
            </div>

            {/* Custom */}
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-950/40 to-[#0a0f1e] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-blue-600/10 blur-[60px] pointer-events-none" />
              <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-3">Custom Build</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-semibold text-white">Let's talk</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Standard",
                  "Fully custom workflows for your operation",
                  "Unlimited user roles",
                  "AI integrations & automations",
                  "Custom reporting & dashboards",
                  "Priority support",
                  "Ongoing build & iteration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center rounded-full bg-white py-3 text-sm font-semibold text-[#0a0f1e] hover:bg-blue-100 transition-colors hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 relative w-32 h-10 mx-auto">
            <Image
              src="/Clave-White.png"
              alt="Clave"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            See it running on your business.
          </h2>
          <p className="text-white/45 mb-10 max-w-lg mx-auto">
            Book a free demo and we'll show you exactly how Clave would be set up for your operation — no commitment, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#0a0f1e] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(96,165,250,0.4)]"
          >
            Book a Free Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}