import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "./brand-mark";

type LogoProps = {
  /** Koyu zeminde kullanım için açık tipografi. */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Logo kilidi: altıgen plaka içinde izometrik konteyner + iki satırlı wordmark.
 *
 * Altıgen, jenerik yuvarlak/kare kurumsal rozetlerden ayırır; sembol düz bir
 * çöp kutusu değil, üretici kimliğini taşıyan 3B konteynerdir.
 *
 * TODO: Basılı iş için hazırlanmış bir logo dosyası geldiğinde
 * <BrandMark /> yerine <Image src="/images/logo.svg" ... /> kullanılabilir.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — ana sayfa`}
      className={cn("group flex min-w-0 items-center gap-2.5 sm:gap-3", className)}
    >
      <span
        className={cn(
          "relative grid h-10 w-10 shrink-0 place-items-center bg-gradient-to-br from-brand-500 to-brand-950 text-white shadow-sm transition-all duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-11 sm:w-11",
        )}
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      >
        <span
          className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent"
          aria-hidden
        />
        <BrandMark className="relative h-[1.55rem] w-[1.55rem]" />
      </span>

      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-base font-extrabold uppercase leading-none tracking-[0.08em] sm:text-[1.125rem]",
            isLight ? "text-white" : "text-charcoal-950",
          )}
        >
          Tekiz
        </span>
        <span
          className={cn(
            "mt-1.5 h-px w-8",
            isLight ? "bg-brand-400/70" : "bg-brand-600",
          )}
          aria-hidden
        />
        <span
          className={cn(
            "mt-1.5 text-[0.5rem] font-semibold uppercase leading-none tracking-[0.16em] sm:text-[0.5625rem] sm:tracking-[0.22em]",
            isLight ? "text-brand-300" : "text-brand-700",
          )}
        >
          Çöp Konteyner
        </span>
      </span>
    </Link>
  );
}
