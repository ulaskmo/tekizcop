"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Saniye cinsinden gecikme; liste öğelerinde kademeli giriş için kullanılır. */
  delay?: number;
  /** Girişin geldiği yön. */
  from?: "bottom" | "top" | "left" | "right" | "none";
  as?: ElementType;
  className?: string;
};

const offsets = {
  bottom: { y: 28, x: 0 },
  top: { y: -28, x: 0 },
  left: { y: 0, x: -28 },
  right: { y: 0, x: 28 },
  none: { y: 0, x: 0 },
};

/**
 * Viewport'a girdiğinde bir kez oynayan giriş animasyonu.
 * `prefers-reduced-motion` açıkken hareket uygulanmaz.
 */
export function Reveal({
  children,
  delay = 0,
  from = "bottom",
  as = "div",
  className,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  const offset = reduce ? offsets.none : offsets[from];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0 : 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Alt öğelerini kademeli olarak açan sarmalayıcı. `RevealItem` ile birlikte kullanılır. */
export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={cn(className)} variants={staggerChild}>
      {children}
    </motion.div>
  );
}
