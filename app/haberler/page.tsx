import type { Metadata } from "next";

import { QuoteCta } from "@/components/sections/quote-cta";
import { NewsCard } from "@/components/ui/news-card";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { getNewsMeta } from "@/lib/news";

export const metadata: Metadata = {
  title: "Haberler",
  description:
    "Atık yönetimi mevzuatı, konteyner seçimi üzerine teknik karşılaştırmalar, üretim yatırımlarımız ve tamamlanan projelerin saha sonuçları.",
  alternates: { canonical: "/haberler" },
};

export default function NewsPage() {
  const posts = getNewsMeta();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        label="Haberler"
        title="Sektörden notlar, projelerden sonuçlar"
        description="Mevzuat değişikliklerini, ürün seçiminde işinize yarayacak teknik karşılaştırmaları ve tamamladığımız projelerin ölçülebilir sonuçlarını burada paylaşıyoruz."
        breadcrumbs={[{ label: "Haberler" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page">
          {featured ? (
            <Reveal>
              <NewsCard post={featured} featured />
            </Reveal>
          ) : null}

          {rest.length > 0 ? (
            <RevealGroup className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <RevealItem key={post.slug} className="h-full">
                  <NewsCard post={post} />
                </RevealItem>
              ))}
            </RevealGroup>
          ) : null}

          {posts.length === 0 ? (
            <p className="rounded-3xl border border-dashed border-charcoal-300 bg-charcoal-50 px-6 py-16 text-center text-charcoal-600">
              Henüz yayınlanmış bir haber bulunmuyor.
            </p>
          ) : null}
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
