import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-[#0a0f1e]">

      {/* ═══ BACKGROUND ═══ */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[-15%] left-[10%] h-[700px] w-[700px] rounded-full bg-[#1e3a8a] opacity-20 blur-[130px]" />
        <div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#1e40af] opacity-10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[600px] rounded-full bg-[#1d4ed8] opacity-10 blur-[100px]" />
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-10 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-blue-300 uppercase">
            Services Built From Experience
          </span>
        </div>

        <h1 className="text-[42px] md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          Grow Your Business.{" "}
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Protect What You Build.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
          Real systems for contractors and self-employed individuals — built by people
          who have worked in the field, closed high-ticket deals, and understand what it takes
          to run a business and plan for the future.
        </p>

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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="h-8 w-[1px] bg-white animate-pulse" />
          <span className="text-[10px] tracking-widest text-white uppercase">Scroll</span>
        </div>
      </section>

      {/* ═══ CONTRACTOR SERVICES ═══ */}
      <section id="services" className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              For Contractors
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Everything you need to run{" "}
              <span className="text-white/35">a real operation.</span>
            </h2>
          </div>

          {/* Clave — featured */}
          <div
            className="rounded-3xl border border-blue-500/20 p-10 md:p-14 relative overflow-hidden mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(30,58,138,0.3) 0%, rgba(10,15,30,0.9) 70%)",
            }}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 mb-6">
                  <span className="text-xs font-medium text-blue-300 tracking-widest uppercase">Featured Product</span>
                </div>
                <div className="relative w-36 h-12 mb-5">
                  <img src="/Clave-White.png" alt="Clave" className="h-full w-auto object-contain" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
                  A custom CRM built for contractors — starting at $297/month.
                </h3>
                <p className="text-white/50 leading-relaxed mb-8">
                  Track leads, manage projects, send estimates with e-signature, collect payments,
                  and run your whole operation from your phone. Built simple on purpose —
                  by someone who has actually worked in the field.
                </p>
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-4 mb-8">
                  <p className="text-sm font-semibold text-white mb-1">
                    $400 one-time activation — includes 1-on-1 setup
                  </p>
                  <p className="text-xs text-white/50 leading-relaxed">
                    We sit down with you to organize your estimates, build your pricing, and teach
                    you how to present them in your specific trade — so Clave works from day one.
                  </p>
                </div>
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

          {/* Social Media Management */}
          <div className="group relative rounded-2xl border border-white/[0.06] bg-[#0a0f1e] p-8 md:p-10 transition-all duration-300 hover:bg-white/[0.03]">
            <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Social Media Management</h3>
                <p className="text-sm text-white/45 leading-relaxed max-w-2xl">
                  We create and post 4 professional pieces of content a month that tell your
                  company&apos;s story and show customers you&apos;re the real deal. Not paid ads —
                  just a consistent, polished presence. Today, having no presence makes a company
                  look smaller than it is.
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-xs text-white/35 uppercase tracking-widest mb-1">Starting at</p>
                <p className="text-2xl font-semibold text-white">$400<span className="text-sm text-white/40 font-normal">/month</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
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

      {/* ═══ FINANCIAL SERVICES ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-purple-400 uppercase mb-4">
              For Self-Employed Individuals & Business Owners
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
              Protect the business you worked hard to build.
            </h2>
            <p className="text-white/45 max-w-2xl leading-relaxed">
              Beyond operations and growth, we offer financial planning services for contractors
              and self-employed individuals — helping you protect your income, take care of your
              people, and plan for what comes next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: "🛡️",
                title: "Life Insurance",
                desc: "Protect your family and your business if something happens to you.",
              },
              {
                icon: "🏦",
                title: "Retirement Planning",
                desc: "Retirement solutions built for the self-employed — including options for your employees.",
              },
              {
                icon: "🤝",
                title: "Exit Strategy",
                desc: "Plan your transition out of the business so the work you put in actually pays off.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            Contact us to learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="rounded-3xl border border-white/10 p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,58,138,0.4) 0%, rgba(10,15,30,0.8) 60%)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-50%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[80px]" />
            </div>
            <p className="relative text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Get Started
            </p>
            <h2 className="relative text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
              Ready to take the next step?
            </h2>
            <p className="relative text-white/50 mb-10 max-w-lg mx-auto">
              15 minutes. No pitch. We'll look at where you are, where you want to go,
              and tell you exactly how we can help — whether that's systems, social media, or financial planning.
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