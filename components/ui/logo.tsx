import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Koyu zeminde kullanım için beyaz tipografi. */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Tipografik logo.
 * TODO: Gerçek logo dosyası geldiğinde bu bileşenin içi
 * <Image src="/images/logo.svg" ... /> ile değiştirilecek.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} ana sayfa`}
      className={cn("group flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5",
          isLight ? "bg-brand-500 text-white" : "bg-brand-700 text-white",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4.5 7.5h15l-1.3 12.2a1.5 1.5 0 0 1-1.5 1.3H7.3a1.5 1.5 0 0 1-1.5-1.3L4.5 7.5Z" />
          <path d="M3 7.5h18" />
          <path d="M9.5 7.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v2.5" />
          <path d="M10 11.5v6M14 11.5v6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            isLight ? "text-white" : "text-charcoal-950",
          )}
        >
          Tekiz
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em]",
            isLight ? "text-brand-200" : "text-brand-700",
          )}
        >
          Çöp Konteyner
        </span>
      </span>
    </Link>
  );
}
