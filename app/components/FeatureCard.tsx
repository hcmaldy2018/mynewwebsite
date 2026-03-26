import React from "react";

export function FeatureCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/7 hover:border-white/15 hover:-translate-y-1">
      {icon ? (
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/6 p-3 text-primary shadow-glow">
            {icon}
          </div>
          <div className="text-lg font-semibold tracking-tight text-white/95">
            {title}
          </div>
        </div>
      ) : (
        <div className="text-lg font-semibold tracking-tight text-white/95">
          {title}
        </div>
      )}
      <div className="mt-4 text-sm leading-relaxed text-white/70">
        {children}
      </div>
    </div>
  );
}

