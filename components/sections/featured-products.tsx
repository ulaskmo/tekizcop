import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ProductCard } from "@/components/ui/product-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts(8);

  return (
    <section className="bg-white py-section">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label="Ürün Gamı"
            title="Öne çıkan çöp konteyner modelleri"
            description="Galvaniz, plastik, yeraltı ve geri dönüşüm gruplarından en çok tercih edilen modeller. Tüm ürünlerde ölçü, renk ve kapak tipi özelleştirilebilir."
          />
          <ButtonLink href="/urunler" variant="outline" className="group shrink-0">
            Tüm ürünler
            <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <RevealItem key={product.slug} className="h-full">
              <ProductCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
