"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { PlusIcon } from "@/components/ui/icons";
import { faqTopics } from "@/data/faq";
import type { FaqItem } from "@/data/types";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  return (
    <div className="space-y-14">
      {faqTopics.map((topic) => {
        const topicItems = items.filter((item) => item.topic === topic);
        if (topicItems.length === 0) return null;

        return (
          <section key={topic}>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
              {topic}
            </h2>

            <ul className="mt-5 divide-y divide-charcoal-200 border-y border-charcoal-200">
              {topicItems.map((item) => {
                const isOpen = open === item.question;
                const panelId = `sss-${slugify(item.question)}`;

                return (
                  <li key={item.question}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : item.question)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-brand-800"
                      >
                        <span
                          className={cn(
                            "font-display text-[1.0625rem] font-semibold leading-snug sm:text-lg",
                            isOpen ? "text-brand-800" : "text-charcoal-950",
                          )}
                        >
                          {item.question}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ease-out-expo",
                            isOpen
                              ? "rotate-45 bg-brand-700 text-white"
                              : "bg-charcoal-100 text-charcoal-600",
                          )}
                          aria-hidden
                        >
                          <PlusIcon className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-3xl pb-6 pr-12 text-[0.9375rem] leading-relaxed text-charcoal-600">
                            {item.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function slugify(value: string) {
  return value
    .toLocaleLowerCase("tr")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}
