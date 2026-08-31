"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
} from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [next, paused]);

  const active = testimonials[index];

  return (
    <section className="relative isolate overflow-hidden bg-charcoal-950 py-section">
      <div
        className="absolute inset-0 -z-10 bg-grid-fade bg-grid opacity-30"
        aria-hidden
      />
      <div
        className="absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand-700/20 blur-[110px]"
        aria-hidden
      />

      <div className="container-page">
        <SectionHeading
          label="Referans Görüşleri"
          title="Sahada birlikte çalıştığımız kurumlar ne diyor?"
          tone="light"
          align="center"
        />

        <div
          className="mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/*
            mode="wait" aynı anda tek slayt render ettiği için yüksekliği
            içerik belirler; sabit yükseklik verilse uzun alıntılar mobilde
            taşardı. layout animasyonu geçişteki sıçramayı yumuşatır.
          */}
          <motion.div layout aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={active.id}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                <QuoteIcon className="h-9 w-9 text-brand-500/70" />

                <blockquote className="mt-6 text-lg leading-relaxed text-charcoal-100 sm:text-xl sm:leading-relaxed">
                  “{active.quote}”
                </blockquote>

                <figcaption className="mt-7">
                  <p className="font-display font-semibold text-white">
                    {active.author}
                  </p>
                  <p className="mt-1 text-sm text-charcoal-400">
                    {active.role} · {active.company}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Önceki referans"
              className="grid h-11 w-11 place-items-center rounded-full text-charcoal-300 ring-1 ring-inset ring-white/15 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            <ul className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(i, i > index ? 1 : -1)}
                    aria-label={`${i + 1}. referansa git`}
                    aria-current={i === index}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 ease-out-expo",
                      i === index
                        ? "w-7 bg-brand-400"
                        : "w-1.5 bg-white/25 hover:bg-white/50",
                    )}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={next}
              aria-label="Sonraki referans"
              className="grid h-11 w-11 place-items-center rounded-full text-charcoal-300 ring-1 ring-inset ring-white/15 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
