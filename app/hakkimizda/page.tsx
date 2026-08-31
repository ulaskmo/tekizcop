import type { Metadata } from "next";
import Image from "next/image";

import { QuoteCta } from "@/components/sections/quote-cta";
import { StatsBar } from "@/components/sections/stats-bar";
import { valueIcons } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutParagraphs,
  missionStatement,
  timeline,
  values,
  visionStatement,
} from "@/data/about";
import { placeholderImage } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "1985'ten bu yana çöp konteyneri üretiyoruz. Hadımköy'deki 12.000 m² kapalı alanlı tesisimiz, üretim süreçlerimiz, misyonumuz ve kilometre taşlarımız.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Kurumsal"
        title="Kırk yıldır konteyner üretiyoruz"
        description="1985'te Topkapı'da küçük bir sac atölyesiydik. Bugün Hadımköy'de 12.000 m² kapalı alanda, sac kesimden galvaniz banyosuna kadar tüm süreci kendi hattımızda yürütüyoruz."
        breadcrumbs={[{ label: "Hakkımızda" }]}
      />

      <StatsBar />

      <section className="bg-white py-section">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading label="Şirket Profili" title="Hikâyemiz" />
            <div className="prose-tekiz mt-8">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal from="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-card-hover">
                {/* TODO: Gerçek tesis fotoğrafı ile değiştirilecek. */}
                <Image
                  src={placeholderImage("tekiz-hakkimizda-hero", 1000, 1250)}
                  alt="Hadımköy üretim tesisinde konteyner imalat hattı"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal-200 bg-charcoal-50 py-section">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal from="left">
              <div className="h-full rounded-4xl border border-charcoal-200 bg-white p-8 shadow-card sm:p-10">
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Misyonumuz
                </h2>
                <p className="mt-5 text-xl leading-relaxed text-charcoal-800 sm:text-[1.375rem] sm:leading-relaxed">
                  {missionStatement}
                </p>
              </div>
            </Reveal>

            <Reveal from="right">
              <div className="h-full rounded-4xl bg-charcoal-950 p-8 shadow-card sm:p-10">
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">
                  Vizyonumuz
                </h2>
                <p className="mt-5 text-xl leading-relaxed text-charcoal-100 sm:text-[1.375rem] sm:leading-relaxed">
                  {visionStatement}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-20">
            <SectionHeading
              label="Değerlerimiz"
              title="Nasıl çalıştığımızı belirleyen ilkeler"
              description="Bu altı madde pazarlama metni değil; teklif verirken, üretim planlarken ve sahada karar alırken başvurduğumuz ölçüt."
            />

            <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => {
                const Icon = valueIcons[value.icon];
                return (
                  <RevealItem key={value.title} className="h-full">
                    <div className="h-full rounded-3xl border border-charcoal-200 bg-white p-7 shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 font-display text-lg font-semibold text-charcoal-950">
                        {value.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                        {value.description}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="container-page">
          <SectionHeading
            label="Kilometre Taşları"
            title="Atölyeden fabrikaya"
            description="Kırk yılda aldığımız her yatırım kararı, aynı sorunun cevabıydı: bu işi nasıl daha dayanıklı yaparız?"
          />

          <ol className="relative mt-16 space-y-12 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-charcoal-200 sm:before:left-1/2 sm:before:-translate-x-px">
            {timeline.map((entry, i) => (
              <li key={entry.year} className="relative">
                <Reveal
                  from={i % 2 === 0 ? "left" : "right"}
                  delay={0.04}
                  className={
                    i % 2 === 0
                      ? "sm:pr-[calc(50%+2.5rem)]"
                      : "sm:pl-[calc(50%+2.5rem)]"
                  }
                >
                  <div className="pl-9 sm:pl-0">
                    <span
                      className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-white ring-2 ring-brand-500 sm:left-1/2 sm:-translate-x-1/2"
                      aria-hidden
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                    </span>

                    <p
                      className={`font-display text-2xl font-extrabold tracking-tight text-brand-700 ${
                        i % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      {entry.year}
                    </p>
                    <h3
                      className={`mt-2 font-display text-lg font-semibold text-charcoal-950 ${
                        i % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      {entry.title}
                    </h3>
                    <p
                      className={`mt-2.5 text-sm leading-relaxed text-charcoal-600 ${
                        i % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      {entry.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
