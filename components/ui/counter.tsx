"use client";

import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Binlik ayırıcı uygulanmasın (ör. yıl değerleri için). */
  plain?: boolean;
  className?: string;
};

/** Viewport'a girdiğinde 0'dan hedef değere sayan sayaç. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  plain,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {plain ? display : display.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}
