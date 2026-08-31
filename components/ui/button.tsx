import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white shadow-sm hover:bg-brand-800 hover:shadow-md active:bg-brand-900",
  secondary:
    "bg-charcoal-900 text-white shadow-sm hover:bg-charcoal-800 hover:shadow-md",
  outline:
    "border border-charcoal-300 bg-white text-charcoal-800 hover:border-brand-600 hover:text-brand-700",
  ghost: "text-charcoal-700 hover:bg-charcoal-100 hover:text-charcoal-950",
  light:
    "bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-4 text-sm",
  md: "h-11 gap-2 px-5 text-[0.9375rem]",
  lg: "h-12 gap-2.5 px-6 text-[0.9375rem] sm:h-13 sm:px-7 sm:text-base",
};

const baseClass =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out-expo disabled:pointer-events-none disabled:opacity-60";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(baseClass, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: CommonProps & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(baseClass, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
