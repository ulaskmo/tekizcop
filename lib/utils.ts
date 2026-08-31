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

/** public/images/placeholders altındaki üretilmiş dosya sayıları. */
const PLACEHOLDER_COUNT = { landscape: 12, portrait: 6 } as const;

/** Seed'i sabit bir sayıya indirger (FNV-1a). */
function hashSeed(seed: string) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return Math.abs(hash);
}

/**
 * Geçici görsel seçici. Aynı `seed` her zaman aynı dosyayı döndürür, böylece
 * derlemeler arasında içerik zıplaması olmaz.
 *
 * Görseller `npm run placeholders` ile yerel olarak üretilir ve depoda tutulur;
 * site hiçbir dış görsel servisine bağlı değildir.
 *
 * TODO: Gerçek fotoğraflar geldiğinde bu çağrılar doğrudan dosya yollarıyla
 * değiştirilecek, ör: images: ["/images/urunler/800-litre-galvaniz-1.jpg"].
 */
export function placeholderImage(seed: string, width = 1200, height = 900) {
  const portrait = height > width;
  const count = portrait
    ? PLACEHOLDER_COUNT.portrait
    : PLACEHOLDER_COUNT.landscape;

  const index = (hashSeed(seed) % count) + 1;
  const name = `${portrait ? "dikey" : "yatay"}-${String(index).padStart(2, "0")}`;

  return `/images/placeholders/${name}.jpg`;
}
