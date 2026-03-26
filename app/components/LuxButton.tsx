import Link from "next/link";
import React from "react";

export function LuxButton({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-300 transform-gpu";

  const primary =
    "bg-white/6 border border-white/10 lux-glow hover:bg-white/10 hover:-translate-y-0.5";

  const secondary =
    "bg-white/4 border border-white/10 hover:bg-white/7 hover:-translate-y-0.5";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={[base, variant === "primary" ? primary : secondary, className]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute -left-24 top-0 h-24 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span className="relative">{children}</span>
    </Link>
  );
}

