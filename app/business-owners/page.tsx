export default function BusinessOwnersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* 🔥 HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[32px] md:text-5xl font-semibold text-gray-900 leading-tight">
            Helping Businesses Grow with
            <span className="text-[#1e3a8a]"> Modern Systems & Tools</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We help business owners simplify their marketing, improve communication,
            and use modern tools like AI to stay competitive — without needing to learn everything themselves.
          </p>
        </div>

        {/* 💎 SECTION 1 */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">

          {/* TEXT */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Social Media That Actually Brings Business
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Most businesses either don’t post consistently or waste money on ads that don’t convert.
              We help you understand the difference between organic content and paid advertising —
              and how to use both the right way.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The goal isn’t just more views — it’s more customers walking through your door.
            </p>
          </div>

          {/* ✅ TOP RIGHT BOX (FINAL POSITION) */}
          <div className="bg-white rounded-2xl p-6 shadow-md border max-w-sm mt-10 ml-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <ul className="space-y-2 text-gray-700 text-sm text-center">
              <li>• Organic content strategy</li>
              <li>• Paid ad guidance</li>
              <li>• Video content creation</li>
              <li>• Consistent posting systems</li>
            </ul>
          </div>

        </div>

        {/* 🤖 SECTION 2 */}
        <div className="mt-28 grid md:grid-cols-2 gap-12 items-start">

          {/* ✅ BOTTOM LEFT BOX (ALREADY PERFECT) */}
          <div className="bg-white rounded-2xl p-6 shadow-md border max-w-sm -ml-4 mt-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 order-2 md:order-1">
            <ul className="space-y-2 text-gray-700 text-sm text-center">
              <li>• AI chat and phone assistants</li>
              <li>• Automated customer responses</li>
              <li>• AI-powered SEO improvements</li>
              <li>• Visibility in AI search tools</li>
            </ul>
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Use AI Before Your Competitors Do
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              AI is already changing how customers find and interact with businesses.
              The companies that start using it now will have a major advantage.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We help you implement practical tools like automated responses,
              after-hours communication, and better search visibility —
              without making things complicated.
            </p>
          </div>

        </div>

        {/* 🚀 CTA */}
        <div className="mt-28 text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Let’s modernize how your business operates.
          </h2>

          <p className="mt-4 text-gray-600">
            We’ll show you exactly what to improve and how to do it.
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