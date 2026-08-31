import { placeholderImage } from "@/lib/utils";
import type { Category } from "./types";

/**
 * Ürün kategorileri. `slug` değerleri /urunler/[category] rotasını besler,
 * bu yüzden değiştirilirken products.ts içindeki `category` alanları da
 * güncellenmelidir.
 *
 * TODO: `image` alanları placeholder'dır; gerçek kategori görselleri
 * /public/images/kategoriler altına eklenecek.
 */
export const categories: Category[] = [
  {
    slug: "metal-galvaniz-cop-konteyneri",
    name: "Metal Galvaniz Çöp Konteyneri",
    shortName: "Galvaniz Konteyner",
    description:
      "Sıcak daldırma galvaniz kaplamalı, DKP sacdan üretilen ağır hizmet konteynerleri. Belediye toplama araçlarıyla tam uyumlu, uzun ömürlü ve darbeye dayanıklı.",
    image: placeholderImage("tekiz-kategori-galvaniz", 1200, 800),
  },
  {
    slug: "plastik-cop-konteyneri",
    name: "Plastik Çöp Konteyneri",
    shortName: "Plastik Konteyner",
    description:
      "HDPE enjeksiyon kalıp ile üretilen, UV katkılı ve tamamen geri dönüştürülebilir plastik konteynerler. Hafif yapısı sayesinde kolay manevra imkânı sunar.",
    image: placeholderImage("tekiz-kategori-plastik", 1200, 800),
  },
  {
    slug: "yeralti-cop-konteyneri",
    name: "Yeraltı Çöp Konteyneri",
    shortName: "Yeraltı Konteyner",
    description:
      "Atık hacminin büyük bölümünü zemin altında saklayan, kent estetiğini bozmayan ve koku yayılımını engelleyen modern yeraltı toplama sistemleri.",
    image: placeholderImage("tekiz-kategori-yeralti", 1200, 800),
  },
  {
    slug: "sikistirmali-cop-konteyneri",
    name: "Sıkıştırmalı Çöp Konteyneri",
    shortName: "Sıkıştırmalı Konteyner",
    description:
      "Atığı 5 kata kadar sıkıştırarak toplama sefer sayısını düşüren, alışveriş merkezleri ve sanayi tesisleri için tasarlanmış hidrolik sistemler.",
    image: placeholderImage("tekiz-kategori-sikistirmali", 1200, 800),
  },
  {
    slug: "geri-donusum-kutusu",
    name: "Geri Dönüşüm Kutusu ve Çöp Kovası",
    shortName: "Geri Dönüşüm",
    description:
      "Sıfır atık yönetmeliğine uygun renk kodlu ayrıştırma istasyonları, iç mekân kovaları ve dış mekân park çöp kovaları.",
    image: placeholderImage("tekiz-kategori-geri-donusum", 1200, 800),
  },
  {
    slug: "moloz-ve-hurda-konteyneri",
    name: "Moloz ve Hurda Konteyneri",
    shortName: "Moloz Konteyner",
    description:
      "İnşaat sahaları ve hurda tesisleri için kancalı, kirişli ve devirmeli tiplerde ağır tonajlı açık kasa konteynerler.",
    image: placeholderImage("tekiz-kategori-moloz", 1200, 800),
  },
];

export const categoryMap = new Map(categories.map((c) => [c.slug, c]));

export function getCategory(slug: string) {
  return categoryMap.get(slug);
}

export function getCategoryName(slug: string) {
  return categoryMap.get(slug)?.name ?? slug;
}
