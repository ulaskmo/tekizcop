import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  /** Başlığın üstündeki küçük etiket. */
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Koyu zeminde kullanım. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  /** Başlığın semantik seviyesi. */
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  label,
  title,
  description,
  tone = "dark",
  align = "left",
  as: Tag = "h2",
  className,
  children,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {label ? (
        <Reveal from="none">
          <span
            className={cn(
              "mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em]",
              isLight ? "text-brand-300" : "text-brand-700",
            )}
          >
            <span
              className={cn(
                "h-px w-8",
                isLight ? "bg-brand-400/60" : "bg-brand-400",
              )}
              aria-hidden
            />
            {label}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <Tag
          className={cn(
            "max-w-3xl text-display-sm sm:text-display-md",
            isLight && "text-white",
            align === "center" && "mx-auto",
          )}
        >
          {title}
        </Tag>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <div
            className={cn(
              "mt-5 max-w-2xl text-pretty text-base leading-relaxed sm:text-[1.0625rem]",
              isLight ? "text-charcoal-300" : "text-charcoal-600",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </div>
        </Reveal>
      ) : null}

      {children ? <Reveal delay={0.18}>{children}</Reveal> : null}
    </div>
  );
}
