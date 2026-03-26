"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function LuxHeroButton({
  href,
  label,
  sublabel,
  delayMs = 0,
}: {
  href: string;
  label: string;
  sublabel?: string;
  delayMs?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: delayMs / 1000 }}
      whileHover={{ y: -6 }}
      className="relative"
    >
      <Link
        href={href}
        className={[
          "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-7",
          "shadow-glow transition-all duration-300 transform-gpu animate-float",
          "hover:bg-white/9 hover:border-white/15",
          "after:absolute after:inset-0 after:bg-[radial-gradient(600px_circle_at_15%_15%,rgba(255,255,255,0.16),transparent_45%)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100",
        ].join(" ")}
        aria-label={label}
      >
        <div className="relative">
          <div className="text-2xl font-semibold tracking-tight text-white/95">
            {label}
          </div>
          {sublabel ? (
            <div className="mt-2 text-sm leading-relaxed text-white/65">
              {sublabel}
            </div>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}

