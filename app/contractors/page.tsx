export default function ContractorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* 🔥 HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[32px] md:text-5xl font-semibold text-gray-900 leading-tight">
            Built for Contractors Who Want to
            <span className="text-[#1e3a8a]"> Grow Without Chaos</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We help contractors get organized, close more jobs, and run smoother operations —
            without the stress of things falling through the cracks.
          </p>
        </div>

        {/* 💎 EXPERIENCE */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              This isn’t theory. This is real experience.
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              I started in construction at a young age and have worked in sales,
              operations, and management for home improvement companies.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              I’ve helped contractors organize their businesses, improve their sales process,
              and build systems that actually work in the real world.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-md border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>• Built and organized contractor offices</li>
              <li>• Improved sales processes and closing rates</li>
              <li>• Helped companies implement real systems</li>
              <li>• Experience in construction, sales, and operations</li>
            </ul>
          </div>

        </div>

        {/* 🧱 SERVICES */}
        <div className="mt-28">

          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900">
            How We Help Contractors
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-white p-7 rounded-2xl border shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="font-semibold text-[#1e3a8a] text-lg">
                Systems & Operations
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                We help you standardize your estimates, pricing, and workflows so your business runs consistently.
                No more guessing, missed follow-ups, or jobs slipping through the cracks.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                The goal is simple — a system your team can follow every day without confusion.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-7 rounded-2xl border shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="font-semibold text-[#1e3a8a] text-lg">
                Lead Generation
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                We help you get more consistent jobs by improving how leads come in and how you follow up.
                It’s not just about getting attention — it’s about turning interest into booked work.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Better systems mean fewer missed opportunities and more closed deals.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-7 rounded-2xl border shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="font-semibold text-[#1e3a8a] text-lg">
                Permits & Plans
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Permits don’t have to take forever. We help prepare site plans, drawings,
                and connect you with the right engineers so projects move faster.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Less waiting, fewer delays, and a smoother path from sale to build.
              </p>
            </div>

          </div>

        </div>

        {/* 🚀 CTA */}
        <div className="mt-28 text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Let’s fix what’s slowing your business down.
          </h2>

          <p className="mt-4 text-gray-600">
            We’ll map out exactly what needs to change to help you grow.
          </p>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-[#1e3a8a] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 active:scale-[0.98]"
            >
              Book a Free Consultation
            </a>
          </div>

        </div>

      </div>

    </main>
  );
}