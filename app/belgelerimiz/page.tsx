import type { Metadata } from "next";

import { CertificateGrid } from "@/components/certificates/certificate-grid";
import { QuoteCta } from "@/components/sections/quote-cta";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Belgelerimiz",
  description:
    "ISO 9001, ISO 14001, ISO 45001, CE uygunluk, EN 840 test raporu, TSE Hizmet Yeterlilik, Sanayi Sicil ve Yerli Malı belgelerimiz.",
  alternates: { canonical: "/belgelerimiz" },
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        label="Kurumsal"
        title="Kalite belgelerimiz"
        description="Kalite, çevre ve iş güvenliği yönetim sistemlerimiz TÜRKAK akrediteli kuruluşlar tarafından denetlenir. Belgelerin tamamı kamu ihale dosyalarında kullanılmaya hazırdır."
        breadcrumbs={[{ label: "Belgelerimiz" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page">
          <Reveal>
            <div className="mb-14 flex flex-col gap-6 rounded-3xl border border-brand-200 bg-brand-50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                  <CheckIcon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-brand-900">
                    İhale dosyanız için ıslak imzalı kopya
                  </p>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-brand-900/75">
                    Belgelerin güncel ve ıslak imzalı kopyalarını talebiniz
                    üzerine aynı iş günü içinde e-posta veya kargo ile
                    gönderiyoruz.
                  </p>
                </div>
              </div>
              <ButtonLink href="/iletisim" className="group shrink-0">
                Belge talebi
                <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
            </div>
          </Reveal>

          <CertificateGrid certificates={certificates} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
