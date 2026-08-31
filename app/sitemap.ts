import type { MetadataRoute } from "next";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { getNewsMeta } from "@/lib/news";

/** Statik sayfalar ve öncelik değerleri. */
const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/urunler", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projeler", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hakkimizda", priority: 0.7, changeFrequency: "yearly" },
  { path: "/belgelerimiz", priority: 0.6, changeFrequency: "yearly" },
  { path: "/referanslarimiz", priority: 0.6, changeFrequency: "yearly" },
  { path: "/foto-galeri", priority: 0.6, changeFrequency: "monthly" },
  { path: "/haberler", priority: 0.7, changeFrequency: "weekly" },
  { path: "/sss", priority: 0.5, changeFrequency: "yearly" },
  { path: "/iletisim", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),

    ...categories.map((category) => ({
      url: `${base}/urunler/${category.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...products.map((product) => ({
      url: `${base}/urun/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    ...getNewsMeta().map((post) => ({
      url: `${base}/haber/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
