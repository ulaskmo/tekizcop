import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCatalog } from "@/components/products/product-catalog";
import { QuoteCta } from "@/components/sections/quote-cta";
import { PageHero } from "@/components/ui/page-hero";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

type Params = { params: { category: string } };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/urunler/${category.slug}` },
  };
}

export default function CategoryPage({ params }: Params) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <>
      <PageHero
        label="Ürün Grubu"
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { label: "Ürünler", href: "/urunler" },
          { label: category.shortName },
        ]}
      />

      <section className="bg-white py-section">
        <div className="container-page">
          <ProductCatalog products={items} activeCategory={category.slug} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
