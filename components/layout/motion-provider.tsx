"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` işletim sistemindeki "hareketi azalt" ayarını tüm
 * Framer Motion animasyonlarına uygular; her bileşende ayrı ayrı
 * useReducedMotion kontrolü yapılmasına gerek kalmaz.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
