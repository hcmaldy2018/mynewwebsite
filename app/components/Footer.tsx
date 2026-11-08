import Link from "next/link";

const services: { label: string; href?: string }[] = [
  { label: "Clave CRM", href: "/clave" },
  { label: "Social Media Management" },
  { label: "Marketing Partnerships" },
  { label: "Life Insurance" },
  { label: "Retirement Planning" },
  { label: "Exit Strategy" },
];

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
              Services built from experience. Helping contractors and self-employed owners run, grow, and protect their business.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <Link
                      href={s.href}
                      className="text-xs text-white/35 hover:text-white/70 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ) : (
                    <span className="text-xs text-white/35 cursor-default">
                      {s.label}
                    </span>
                  )}
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
                <a
                  href="tel:+15403002501"
                  className="text-xs text-white/35 hover:text-white/70 transition-colors"
                >
                  540-300-2501
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@romerolocksley.com"
                  className="text-xs text-white/35 hover:text-white/70 transition-colors"
                >
                  contact@romerolocksley.com
                </a>
              </li>
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
            Services Built From Experience
          </p>
        </div>

      </div>
    </footer>
  );
}