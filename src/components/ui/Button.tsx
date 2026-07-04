import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
  outline:
    "border border-foreground/15 text-foreground hover:border-accent hover:text-accent bg-transparent",
  ghost: "text-muted hover:text-accent bg-transparent",
};

function getClassName(variant: Variant, className?: string) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={getClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: LinkProps) {
  return (
    <a className={getClassName(variant, className)} href={href} {...props}>
      {children}
    </a>
  );
}
