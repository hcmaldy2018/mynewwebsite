export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 md:py-0 bg-gradient-to-b from-white via-slate-50 to-slate-100">

      {/* 🔵 PREMIUM BACKGROUND (ENHANCED) */}
      <div className="pointer-events-none absolute inset-0">

        {/* top-left glow (stronger + bigger) */}
        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] bg-[#1e3a8a]/15 rounded-full blur-[160px]" />

        {/* bottom-right glow (stronger + bigger) */}
        <div className="absolute bottom-[-220px] right-[-220px] h-[500px] w-[500px] bg-[#1e3a8a]/15 rounded-full blur-[160px]" />

        {/* center soft glow (NEW — this is the missing piece) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.10),transparent_70%)]" />

        {/* subtle top fade (keeps it premium) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/60" />

      </div>

      <div className="relative w-full max-w-4xl text-center">

        {/* 🔥 HEADLINE */}
        <h1 className="text-[34px] md:text-6xl font-semibold tracking-tight text-gray-900 max-w-3xl mx-auto leading-[1.15]">
          We Fix How Small Businesses{" "}
          <span className="text-[#1e3a8a]">Actually Operate</span>.
        </h1>

        {/* 💬 PARAGRAPH */}
        <p className="mt-6 text-[16px] md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Built from real experience in construction, sales, and operations — not theory.
          We help contractors and small businesses get organized, generate consistent leads,
          and scale without chaos.
        </p>

        {/* 🔘 BUTTONS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">

          <a
            href="/contractors"
            className="group block cursor-pointer rounded-2xl border border-gray-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#1e3a8a]"
          >
            <h3 className="text-xl font-semibold text-[#1e3a8a]">
              Contractors & Trades
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Leads, systems, permits
            </p>

            <div className="mt-4 text-sm text-[#1e3a8a] opacity-0 group-hover:opacity-100 transition">
              Learn more →
            </div>
          </a>

          <a
            href="/business-owners"
            className="group block cursor-pointer rounded-2xl border border-gray-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#1e3a8a]"
          >
            <h3 className="text-xl font-semibold text-[#1e3a8a]">
              Growing Businesses
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Social media + AI systems
            </p>

            <div className="mt-4 text-sm text-[#1e3a8a] opacity-0 group-hover:opacity-100 transition">
              Learn more →
            </div>
          </a>

        </div>

      </div>
    </main>
  );
}