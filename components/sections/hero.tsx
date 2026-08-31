"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";
import { placeholderImage } from "@/lib/utils";

const highlights = [
  "Sıcak daldırma galvaniz üretim",
  "EN 840 uyumlu plastik seri",
  "81 ile sevkiyat",
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.7, delay, ease },
  });

  return (
    <section className="relative isolate overflow-hidden bg-brand-50">
      <div
        className="absolute -left-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-200/50 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-metal-200/40 blur-[100px]"
        aria-hidden
      />

      <div className="container-page grid items-center gap-14 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <motion.h1
            {...rise(0)}
            className="text-display-sm text-charcoal-950 sm:text-display-lg xl:text-display-xl"
          >
            Atık toplamanın{" "}
            <span className="relative whitespace-nowrap text-brand-700">
              dayanıklı
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand-400"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C40 3 92 2 198 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            tarafında duruyoruz
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-charcoal-600"
          >
            Galvaniz, plastik ve yeraltı çöp konteynerlerini kendi tesisimizde
            üretiyoruz. Sac kesimden galvaniz banyosuna kadar tüm süreç bizde
            olduğu için kaliteyi ve teslim tarihini biz garanti ediyoruz.
          </motion.p>

          <motion.ul {...rise(0.18)} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[0.9375rem] text-charcoal-700"
              >
                <CheckIcon className="h-4.5 w-4.5 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.26)} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/urunler" size="lg" className="group">
              Ürünleri keşfet
              <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5 text-brand-700" />
              WhatsApp ile teklif al
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 0.9, delay: 0.12, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-brand-100 shadow-card-hover sm:aspect-[5/4] lg:aspect-[4/5]">
            {/* TODO: Gerçek tesis/ürün fotoğrafı ile değiştirilecek. */}
            <Image
              src={placeholderImage("tekiz-hero-ana", 1200, 1500)}
              alt="Tekiz Çöp Konteyner üretim tesisi ve galvaniz konteyner serisi"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: 0.45, ease }}
            className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-card-hover sm:left-8 sm:right-auto sm:max-w-xs"
          >
            <p className="font-display text-3xl font-extrabold tracking-tight text-charcoal-950">
              500<span className="text-brand-600">+</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-charcoal-600">
              Belediye, sanayi ve kampüs projesi tamamlandı
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
