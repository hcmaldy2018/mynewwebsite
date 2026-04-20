import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-[#0a0f1e]">

      {/* ═══ BACKGROUND GRID + GLOW ═══ */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Hero glow */}
        <div className="absolute top-[-15%] left-[10%] h-[700px] w-[700px] rounded-full bg-[#1e3a8a] opacity-20 blur-[130px]" />
        <div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#1e40af] opacity-10 blur-[120px]" />
        {/* Bottom accent */}
        <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[600px] rounded-full bg-[#1d4ed8] opacity-10 blur-[100px]" />
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-24 text-center">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-10 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-blue-300 uppercase">
            Technology Built From Field Experience
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[42px] md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          Stop Running Your Business{" "}
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            From Memory.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
          We build the systems, automations, and sales tools that let contractors
          win more jobs, follow up faster, and get paid — without adding more to your plate.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0f1e] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]"
          >
            Book a Free Strategy Call
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25"
          >
            See What We Do
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="h-8 w-[1px] bg-white animate-pulse" />
          <span className="text-[10px] tracking-widest text-white uppercase">Scroll</span>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="relative z-10 px-6 py-28">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="mb-16 max-w-xl">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Every tool your operation needs.{" "}
              <span className="text-white/35">None of the fluff.</span>
            </h2>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">

            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                ),
                title: "Operations & Contracts",
                desc: "Proposals, job contracts, and field workflows — standardized so every job starts clean and nothing falls through the cracks.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                ),
                title: "Lead Generation",
                desc: "Paid social and organic strategies that generate real inbound calls — not vanity metrics. We've done it for tree service, pool, and more.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
                title: "AI & Automation",
                desc: "Off-hours answering bots, automated follow-up sequences, and a custom CRM built around how you actually work.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: "Sales Training",
                desc: "Close more jobs with less pressure. Built on real high-ticket sales experience from roofing, windows, and siding.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
                title: "Social Media Management",
                desc: "Consistent posting, local reputation building, and content that turns your past jobs into future customers.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                ),
                title: "Financing & Payments",
                desc: "Help clients say yes with financing options. Send professional Stripe invoices in 30 seconds — no chasing checks.",
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="group relative bg-[#0a0f1e] p-8 transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 mb-5 transition-colors group-hover:bg-blue-500/20">
                  {svc.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{svc.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{svc.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROOF / STATS ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {[
              { value: "3+", label: "Contractor clients with real leads" },
              { value: "100%", label: "Focus on trades businesses" },
              { value: "$0", label: "Spent on theory — built from the field" },
              { value: "24/7", label: "AI systems that work while you sleep" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0a0f1e] px-8 py-10 text-center">
                <div
                  className="text-4xl md:text-5xl font-semibold mb-2 text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-sm text-white/40 leading-snug max-w-[140px] mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY US / DIFFERENTIATOR ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Why Romero & Locksley
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              We've been on the job site.{" "}
              <span className="text-white/35">Not just in the boardroom.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Most consultants hand you a slide deck and disappear. We come from high-ticket
              sales — roofing, siding, windows — where you either close or you don't.
              That's the same energy we bring to every system we build for your business.
            </p>
            <p className="text-white/50 leading-relaxed">
              Based in Fredericksburg, VA. Working with contractors across the region.
              No fluff. No vanity metrics. Just systems that move the needle.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Real Sales Background", desc: "High-ticket closes in construction, not theory" },
              { title: "Built for Contractors", desc: "Every tool is scoped for the trades industry" },
              { title: "Custom Systems", desc: "No off-the-shelf templates — built for your operation" },
              { title: "Local & Accessible", desc: "Fredericksburg, VA — we can sit across the table" },
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

      {/* ═══ CTA SECTION ═══ */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="rounded-3xl border border-white/10 p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,58,138,0.4) 0%, rgba(10,15,30,0.8) 60%)",
            }}
          >
            {/* Glow inside CTA */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-50%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[80px]" />
            </div>
            <p className="relative text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Get Started
            </p>
            <h2 className="relative text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
              Ready to stop doing<br />everything manually?
            </h2>
            <p className="relative text-white/50 mb-10 max-w-lg mx-auto">
              15-minute call. No pitch. Just a clear look at where you're losing time and money — and what we'd do about it.
            </p>
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#0a0f1e] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(96,165,250,0.4)]"
            >
              Book Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}