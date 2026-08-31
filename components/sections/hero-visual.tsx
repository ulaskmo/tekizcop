"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";

type HeroVisualProps = {
  src: string;
  alt: string;
};

/**
 * Ana sayfa kahraman görseli.
 *
 * En-boy oranı kırılıma göre değişir (telefon 4/3, tablet 5/4, masaüstü 4/5)
 * böylece fotoğraf her genişlikte çerçeveyi doldurur, taşmaz.
 * 3B eğilme yalnızca fare + hover destekleyen cihazlarda açılır; dokunmatikte
 * düz kalır ki yatay taşma olmasın.
 *
 * TODO: Gerçek ürün fotoğrafı geldiğinde `src` prop'unu değiştirmek yeterlidir.
 */
export function HeroVisual({ src, alt }: HeroVisualProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    if (reduce) {
      setTiltEnabled(false);
      return;
    }
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setTiltEnabled(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [reduce]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 160, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), spring);
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [20, 80]), spring);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [15, 75]), spring);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.55), transparent 55%)`;

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl" style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          tiltEnabled
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
        className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card-hover touch-pan-y sm:aspect-[5/4] sm:rounded-4xl lg:aspect-[4/5]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[center_40%]"
        />

        {tiltEnabled ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{ background: glare }}
          />
        ) : null}

        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40"
          aria-hidden
        />
      </motion.div>

      {tiltEnabled ? (
        <div
          className="pointer-events-none absolute -bottom-6 left-8 right-8 -z-10 hidden h-16 rounded-full bg-charcoal-900/15 blur-2xl lg:block"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
