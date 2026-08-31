import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/products/product-gallery";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { ProductCard } from "@/components/ui/product-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCategory } from "@/data/categories";
import { getProduct, getRelatedProducts, products } from "@/data/products";
import { siteConfig } from "@/data/site";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.code}`,
    description: product.excerpt,
    alternates: { canonical: `/urun/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.excerpt,
      images: [{ url: product.images[0] }],
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: Params) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product, 4);

  // Schema.org Product yapılandırılmış verisi. Fiyat teklife bağlı olduğu için
  // `offers` yerine yalnızca ürün nitelikleri yayınlanır.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.code,
    description: product.excerpt,
    image: product.images,
    category: category?.name,
    material: product.material,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/urun/${product.slug}`,
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="border-b border-charcoal-200 bg-charcoal-50">
        <div className="container-page py-5">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Ürünler", href: "/urunler" },
              ...(category
                ? [{ label: category.shortName, href: `/urunler/${category.slug}` }]
                : []),
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="none">
            <ProductGallery images={product.images} name={product.name} />
          </Reveal>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              {category ? (
                <Link
                  href={`/urunler/${category.slug}`}
                  className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-800 transition-colors hover:bg-brand-100"
                >
                  {category.name}
                </Link>
              ) : null}
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-charcoal-400">
                {product.code}
              </span>
            </div>

            <h1 className="mt-5 text-display-sm sm:text-[2.75rem] sm:leading-[1.1]">
              {product.name}
            </h1>

            <p className="mt-5 text-[1.0625rem] leading-relaxed text-charcoal-600">
              {product.excerpt}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {product.litre ? (
                <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-4">
                  <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                    Hacim
                  </dt>
                  <dd className="mt-1.5 font-display text-xl font-bold text-charcoal-950">
                    {product.litre >= 1000
                      ? `${(product.litre / 1000).toLocaleString("tr-TR")} m³`
                      : `${product.litre} L`}
                  </dd>
                </div>
              ) : null}

              <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                  Malzeme
                </dt>
                <dd className="mt-1.5 text-sm font-semibold leading-snug text-charcoal-900">
                  {product.material}
                </dd>
              </div>

              <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                  Üretim
                </dt>
                <dd className="mt-1.5 text-sm font-semibold leading-snug text-charcoal-900">
                  Kendi tesisimizde
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-5 sm:rounded-3xl sm:p-6">
              <p className="font-display text-lg font-semibold text-brand-900">
                Bu ürün için fiyat teklifi alın
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/75">
                Adet ve teslim ili bilgisini iletin; teklifinizi aynı iş günü
                içinde gönderiyoruz. Ölçü, renk ve kapak tipi
                özelleştirilebilir.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href={`/iletisim?urun=${encodeURIComponent(product.name)}#teklif`}
                  className="group w-full sm:w-auto"
                >
                  Teklif isteyin
                  <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </ButtonLink>
                <ButtonLink
                  href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(
                    `Merhaba, ${product.name} (${product.code}) için teklif almak istiyorum.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5 text-brand-700" />
                  WhatsApp
                </ButtonLink>
              </div>

              <a
                href={siteConfig.phoneHref}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-900"
              >
                <PhoneIcon className="h-4.5 w-4.5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal-200 bg-charcoal-50 py-section">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading label="Ürün Açıklaması" title="Teknik detaylar" as="h2" />

            <div className="prose-tekiz mt-8">
              {product.description.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h3 className="mt-12 font-display text-xl font-semibold text-charcoal-950">
                Öne çıkan özellikler
              </h3>
            </Reveal>

            <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <RevealItem key={feature}>
                  <div className="flex items-start gap-3 rounded-2xl border border-charcoal-200 bg-white p-4">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                      <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                    </span>
                    <span className="text-sm leading-relaxed text-charcoal-700">
                      {feature}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="lg:col-span-5">
            <Reveal from="right">
              <div className="overflow-x-auto rounded-2xl border border-charcoal-200 bg-white shadow-card sm:rounded-3xl lg:sticky lg:top-28">
                <div className="border-b border-brand-100 bg-brand-50 px-4 py-4 sm:px-6 sm:py-5">
                  <h2 className="font-display text-lg font-semibold text-charcoal-950">
                    Teknik özellikler
                  </h2>
                  <p className="mt-1 text-sm text-charcoal-500">{product.code}</p>
                </div>

                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    {product.name} teknik özellik tablosu
                  </caption>
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 1 ? "bg-charcoal-50" : undefined}
                      >
                        <th
                          scope="row"
                          className="w-1/2 px-4 py-3.5 align-top font-medium text-charcoal-500 sm:px-6"
                        >
                          {spec.label}
                        </th>
                        <td className="px-4 py-3.5 align-top font-semibold text-charcoal-900 sm:px-6">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-white py-section">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                label="Benzer Ürünler"
                title="Bunlar da ilginizi çekebilir"
                as="h2"
              />
              <ButtonLink
                href={category ? `/urunler/${category.slug}` : "/urunler"}
                variant="outline"
                className="group shrink-0"
              >
                Gruptaki tüm ürünler
                <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
            </div>

            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <RevealItem key={item.slug} className="h-full">
                  <ProductCard product={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}
    </>
  );
}
