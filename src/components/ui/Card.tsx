import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-[10px] bg-background border border-foreground/5 shadow-sm p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
