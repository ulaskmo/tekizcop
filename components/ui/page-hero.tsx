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

/** İç sayfaların ortak açık başlık bloğu. */
export function PageHero({
  label,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-50">
      <div
        className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-200/50 blur-[110px]"
        aria-hidden
      />

      <div className="container-page py-10 sm:py-14 lg:py-20">
        <Breadcrumbs items={breadcrumbs} tone="dark" />

        <div className="mt-8 max-w-3xl">
          {label ? (
            <Reveal from="none">
              <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                <span className="h-px w-8 bg-brand-400" aria-hidden />
                {label}
              </span>
            </Reveal>
          ) : null}

          <Reveal delay={0.05}>
            <h1 className="text-display-sm text-charcoal-950 sm:text-display-md">
              {title}
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={0.12}>
              <div className="mt-5 text-pretty text-base leading-relaxed text-charcoal-600 sm:text-[1.0625rem]">
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
