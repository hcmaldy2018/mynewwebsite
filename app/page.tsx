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
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Everything your business needs.{" "}
              <span className="text-white/35">Today and tomorrow.</span>
            </h2>
          </div>

          {/* ── Business Growth Row ── */}
          <div className="mb-3">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-medium tracking-widest text-blue-400 uppercase">Business Growth</span>
              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {[
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  ),
                  title: "Social Media Management",
                  desc: "Consistent posting, local reputation building, and content that turns your past jobs into future customers.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  ),
                  title: "AI & Automation",
                  desc: "Off-hours answering bots, automated follow-up sequences, and custom systems built around how you actually work.",
                },
              ].map((svc, i) => (
                <div key={i} className="group relative bg-[#0a0f1e] p-8 transition-all duration-300 hover:bg-white/[0.03]">
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

          {/* ── Financial Security Row ── */}
          <div>
            <div className="flex items-center gap-3 mb-3 mt-8">
              <span className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-medium tracking-widest text-purple-400 uppercase">Financial Security</span>
              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  ),
                  title: "Employee Benefits & Retention",
                  desc: "Group life insurance and retirement plans that help you attract and keep quality workers — a competitive edge most small contractors overlook.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: "Owner & Self-Employed Protection",
                  desc: "Life insurance and annuity solutions that protect you and your family if something happens — because the business shouldn't stop if you do.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  ),
                  title: "Exit Strategy & Succession Planning",
                  desc: "When you're ready to step back or sell, we help you plan the transition — so the business you built actually pays off the way it should.",
                },
              ].map((svc, i) => (
                <div key={i} className="group relative bg-[#0a0f1e] p-8 transition-all duration-300 hover:bg-white/[0.03]">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 mb-5 transition-colors group-hover:bg-purple-500/20">
                    {svc.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">{svc.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{svc.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
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


      {/* ═══ CLAVE PRODUCT SECTION ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Our Products
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Built in-house.{" "}
              <span className="text-white/35">Ready for your business.</span>
            </h2>
          </div>

          <div
            className="rounded-3xl border border-blue-500/20 p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,58,138,0.3) 0%, rgba(10,15,30,0.9) 70%)",
            }}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="relative w-36 h-12 mb-6">
                  <img
                    src="/Clave-White.png"
                    alt="Clave"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
                  A custom CRM built for contractors — starting at $297/month.
                </h3>
                <p className="text-white/50 leading-relaxed mb-8">
                  Track leads, manage projects, send estimates with e-signature, collect payments,
                  and run your whole operation from your phone. Built simple on purpose —
                  by someone who has actually worked in the field.
                </p>
                <a
                  href="/clave"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0f1e] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]"
                >
                  Learn More About Clave
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📱", title: "Mobile App", desc: "Run your business from the field" },
                  { icon: "✍️", title: "E-Signature", desc: "Send and close estimates fast" },
                  { icon: "💳", title: "Payments", desc: "Get paid without chasing anyone" },
                  { icon: "👥", title: "Role-Based", desc: "Built for owners and teams" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5">
                    <div className="text-lg mb-3">{item.icon}</div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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