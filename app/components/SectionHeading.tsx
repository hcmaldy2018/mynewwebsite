import React from "react";

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <div className="text-xs font-semibold tracking-[0.18em] text-primary/90 uppercase">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-white/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

