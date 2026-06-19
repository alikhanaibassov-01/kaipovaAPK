import { type ReactNode } from "react";

export function SectionHeading({
  title,
  description,
  label,
}: {
  title: string;
  description?: string;
  label?: string;
}) {
  return (
    <div className="max-w-2xl">
      {label && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {label}
        </p>
      )}
      <h2 className="heading-display mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-[1.75rem]">
        {title}
      </h2>
      <div className="section-rule" />
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 lg:px-6">{children}</div>
    </section>
  );
}
