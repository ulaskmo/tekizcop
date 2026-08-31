import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTR(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Geçici görsel üreteci. Aynı `seed` her zaman aynı görseli döndürür, böylece
 * derlemeler arasında içerik zıplaması olmaz.
 *
 * TODO: Gerçek fotoğraflar geldiğinde bu fonksiyon yerine `/images/...`
 * altındaki yerel dosya yollarını kullanın.
 */
export function placeholderImage(seed: string, width = 1200, height = 900) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
