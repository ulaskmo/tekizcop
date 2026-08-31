import type { Metadata } from "next";

import { FaqAccordion } from "@/components/faq/faq-accordion";
import { QuoteCta } from "@/components/sections/quote-cta";
import { PageHero } from "@/components/ui/page-hero";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Minimum sipariş adedi, teslim süreleri, garanti kapsamı, galvaniz ve plastik konteyner farkı, özel ölçü üretim ve kamu ihalesi belgeleri hakkında sık sorulan sorular.",
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label="Yardım"
        title="Sıkça sorulan sorular"
        description="Teklif sürecinden garanti kapsamına, ürün seçiminden kamu ihalesi belgelerine kadar en çok aldığımız soruları yanıtladık. Aradığınızı bulamazsanız bize yazın."
        breadcrumbs={[{ label: "Sıkça Sorulan Sorular" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page max-w-4xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
