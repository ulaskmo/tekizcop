import type { ReactNode } from "react";

import { Reveal } from "./reveal";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs: Crumb[];
  children?: ReactNode;
};

/** İç sayfaların ortak koyu başlık bloğu. */
export function PageHero({
  label,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal-950">
      <div
        className="absolute inset-0 -z-10 bg-grid-fade bg-grid opacity-30"
        aria-hidden
      />
      <div
        className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-700/25 blur-[110px]"
        aria-hidden
      />

      <div className="container-page py-14 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 max-w-3xl">
          {label ? (
            <Reveal from="none">
              <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                <span className="h-px w-8 bg-brand-400/60" aria-hidden />
                {label}
              </span>
            </Reveal>
          ) : null}

          <Reveal delay={0.05}>
            <h1 className="text-display-sm text-white sm:text-display-md">
              {title}
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={0.12}>
              <div className="mt-5 text-[1.0625rem] leading-relaxed text-charcoal-300">
                {description}
              </div>
            </Reveal>
          ) : null}
        </div>

        {children ? <Reveal delay={0.18}>{children}</Reveal> : null}
      </div>
    </section>
  );
}
