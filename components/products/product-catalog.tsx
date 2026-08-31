"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ProductCard } from "@/components/ui/product-card";
import { SearchIcon } from "@/components/ui/icons";
import { categories } from "@/data/categories";
import type { Product } from "@/data/types";
import { cn } from "@/lib/utils";

type ProductCatalogProps = {
  products: Product[];
  /**
   * Kategori sayfalarında filtre sekmeleri linke dönüşür ve aktif kategori
   * sabitlenir; /urunler sayfasında istemci tarafı filtre olarak çalışır.
   */
  activeCategory?: string;
};

export function ProductCatalog({ products, activeCategory }: ProductCatalogProps) {
  const [selected, setSelected] = useState<string>(activeCategory ?? "tumu");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");

    return products.filter((p) => {
      const matchesCategory =
        activeCategory != null || selected === "tumu" || p.category === selected;

      if (!matchesCategory) return false;
      if (!q) return true;

      return (
        p.name.toLocaleLowerCase("tr").includes(q) ||
        p.code.toLocaleLowerCase("tr").includes(q) ||
        p.material.toLocaleLowerCase("tr").includes(q)
      );
    });
  }, [products, selected, query, activeCategory]);

  const tabs = [
    { slug: "tumu", name: "Tümü", href: "/urunler" },
    ...categories.map((c) => ({
      slug: c.slug,
      name: c.shortName,
      href: `/urunler/${c.slug}`,
    })),
  ];

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-charcoal-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
          <ul className="flex w-max items-center gap-2" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeCategory
                ? tab.slug === activeCategory
                : tab.slug === selected;

              // Kategori sayfasındayken sekmeler gerçek sayfa bağlantısıdır.
              if (activeCategory) {
                return (
                  <li key={tab.slug}>
                    <Link
                      href={tab.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-700 text-white"
                          : "bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200",
                      )}
                    >
                      {tab.name}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={tab.slug}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelected(tab.slug)}
                    className={cn(
                      "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
                      isActive
                        ? "text-white"
                        : "bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="catalog-tab"
                        className="absolute inset-0 rounded-full bg-brand-700"
                        transition={{ type: "spring", damping: 30, stiffness: 320 }}
                      />
                    ) : null}
                    <span className="relative">{tab.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative lg:w-72 lg:shrink-0">
          <SearchIcon
            className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-charcoal-400"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ürün adı veya kodu ara"
            aria-label="Ürün ara"
            className="h-11 w-full rounded-full border border-charcoal-300 bg-white pl-11 pr-4 text-[0.9375rem] text-charcoal-900 placeholder:text-charcoal-400 transition-colors focus:border-brand-600"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-charcoal-500" aria-live="polite">
        <span className="font-semibold text-charcoal-900">{visible.length}</span>{" "}
        ürün listeleniyor
      </p>

      {visible.length > 0 ? (
        <motion.ul
          layout
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((product, i) => (
              <motion.li
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(i * 0.04, 0.24),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <ProductCard product={product} priority={i < 4} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-charcoal-300 bg-charcoal-50 px-6 py-16 text-center">
          <p className="font-display text-lg font-semibold text-charcoal-900">
            Aramanıza uygun ürün bulunamadı
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-charcoal-600">
            Farklı bir anahtar kelime deneyin veya kategori filtresini
            sıfırlayın. Aradığınız ürün katalogda yoksa özel ölçü imalat için
            bize ulaşabilirsiniz.
          </p>
        </div>
      )}
    </div>
  );
}
