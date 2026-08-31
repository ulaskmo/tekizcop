import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProductCatalog } from "@/components/products/product-catalog";
import { QuoteCta } from "@/components/sections/quote-cta";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/data/categories";
import { countProductsByCategory, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Galvaniz, plastik, yeraltı ve sıkıştırmalı çöp konteyneri modelleri, geri dönüşüm istasyonları ve moloz konteynerleri. Tüm ürünlerde ölçü, renk ve kapak tipi özelleştirilebilir.",
  alternates: { canonical: "/urunler" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Katalog"
        title="Çöp konteyneri ve atık toplama ekipmanları"
        description={`${products.length} model, ${categories.length} ürün grubu. Kendi tesisimizde ürettiğimiz için katalog dışı ölçü, hacim ve kapak tipi taleplerinizi de karşılıyoruz.`}
        breadcrumbs={[{ label: "Ürünler" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page">
          <ProductCatalog products={products} />
        </div>
      </section>

      <section className="border-t border-charcoal-200 bg-charcoal-50 py-section">
        <div className="container-page">
          <SectionHeading
            label="Ürün Grupları"
            title="Kategoriye göre inceleyin"
            description="Her grubun kullanım koşulları ve malzeme tercihleri farklıdır. Doğru seçimden emin değilseniz teknik ekibimiz kullanım noktanıza göre öneride bulunur."
          />

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <RevealItem key={category.slug} className="h-full">
                <Link
                  href={`/urunler/${category.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-200 bg-white shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-100">
                    {/* TODO: Gerçek kategori görseli ile değiştirilecek. */}
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent"
                      aria-hidden
                    />
                    <span className="absolute bottom-4 left-5 right-5 font-display text-lg font-semibold text-white">
                      {category.name}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-charcoal-600">
                      {category.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="text-sm font-semibold text-brand-700">
                        {countProductsByCategory(category.slug)} model
                      </span>
                      <span
                        className="grid h-9 w-9 place-items-center rounded-full bg-charcoal-100 text-charcoal-600 transition-all duration-300 ease-out-expo group-hover:bg-brand-700 group-hover:text-white"
                        aria-hidden
                      >
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
