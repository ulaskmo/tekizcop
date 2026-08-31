import type { Metadata } from "next";

import { QuoteCta } from "@/components/sections/quote-cta";
import { Testimonials } from "@/components/sections/testimonials";
import { PageHero } from "@/components/ui/page-hero";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { referenceSectors, references } from "@/data/references";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "Belediyeler, organize sanayi bölgeleri, üniversiteler, hastaneler, oteller ve alışveriş merkezleri dâhil birlikte çalıştığımız kurumlar.",
  alternates: { canonical: "/referanslarimiz" },
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        label="Kurumsal"
        title="Birlikte çalıştığımız kurumlar"
        description={`${references.length}'ten fazla kurumun atık toplama altyapısını kurduk. Belediyelerden sanayi bölgelerine, kampüslerden hastanelere kadar her ölçekte proje yürütüyoruz.`}
        breadcrumbs={[{ label: "Referanslarımız" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page">
          {referenceSectors.map((sector, sectorIndex) => {
            const sectorRefs = references.filter((r) => r.sector === sector);

            return (
              <div key={sector} className={sectorIndex > 0 ? "mt-16" : undefined}>
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                    {sector}
                  </h2>
                  <span className="h-px flex-1 bg-charcoal-200" aria-hidden />
                  <span className="text-sm font-medium text-charcoal-400">
                    {sectorRefs.length}
                  </span>
                </div>

                <RevealGroup className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {sectorRefs.map((reference) => (
                    <RevealItem key={reference.name} className="h-full">
                      {/*
                        TODO: Gerçek logolar eklendiğinde bu kart içeriği
                        <Image src={reference.logo} .../> ile değiştirilecek.
                      */}
                      <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-charcoal-200 bg-white p-5 shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
                        <p className="font-display text-[0.9375rem] font-semibold leading-snug text-charcoal-900">
                          {reference.name}
                        </p>
                        <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">
                          {reference.city}
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            );
          })}

          <div className="mt-20 rounded-3xl border border-dashed border-charcoal-300 bg-charcoal-50 px-6 py-10 text-center">
            <SectionHeading
              align="center"
              title="Referans listemizin tamamı"
              description="Kamu ihalelerinde talep edilen iş bitirme belgeleri ve tam referans listemizi talebiniz üzerine paylaşıyoruz."
              as="h2"
              className="[&_h2]:text-2xl [&_h2]:sm:text-3xl"
            />
          </div>
        </div>
      </section>

      <Testimonials />

      <QuoteCta />
    </>
  );
}
