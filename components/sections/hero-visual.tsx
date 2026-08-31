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
import { useRef } from "react";

type HeroVisualProps = {
  src: string;
  alt: string;
};

/**
 * Ana sayfa kahraman görseli: fare konumuna göre hafif 3B eğilir, parlama
 * imleci takip eder. prefers-reduced-motion açıksa düz fotoğraf kalır.
 *
 * TODO: Gerçek ürün fotoğrafı geldiğinde `src` prop'unu değiştirmek yeterlidir.
 */
export function HeroVisual({ src, alt }: HeroVisualProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 160, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), spring);
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [20, 80]), spring);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [15, 75]), spring);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.55), transparent 55%)`;

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-brand-100 bg-white shadow-card-hover sm:aspect-[5/4] lg:aspect-[4/5]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        {reduce ? null : (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{ background: glare }}
          />
        )}

        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40"
          aria-hidden
        />
      </motion.div>

      {reduce ? null : (
        <div
          className="pointer-events-none absolute -bottom-6 left-8 right-8 -z-10 h-16 rounded-full bg-charcoal-900/15 blur-2xl"
          aria-hidden
        />
      )}
    </div>
  );
}
