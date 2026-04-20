import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#0a0f1e] px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-white mb-2 tracking-wide">
              Romero & Locksley
            </p>
            <p className="text-xs text-white/30 leading-relaxed max-w-[220px]">
              Technology built from field experience. Helping contractors operate like a real business.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {[
                "Operations & Contracts",
                "Lead Generation",
                "AI & Automation",
                "Sales Training",
                "Social Media Management",
              ].map((s) => (
                <li key={s}>
                  <span className="text-xs text-white/35 hover:text-white/70 transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <ul className="space-y-2.5">
              <li>
                <span className="text-xs text-white/35">Fredericksburg, VA</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Book a Free Consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Romero & Locksley LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Technology Built From Field Experience
          </p>
        </div>

      </div>
    </footer>
  );
}