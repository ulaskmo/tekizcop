import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, valueIcons } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/data/about";
import { placeholderImage } from "@/lib/utils";

export function AboutSummary() {
  const shown = values.slice(0, 4);

  return (
    <section className="bg-charcoal-50 py-section">
      <div className="container-page grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal from="left">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card-hover">
              {/* TODO: Gerçek üretim tesisi fotoğrafı ile değiştirilecek. */}
              <Image
                src={placeholderImage("tekiz-hakkimizda-tesis", 1200, 900)}
                alt="Hadımköy üretim tesisinde galvaniz konteyner imalatı"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative -mt-14 ml-auto mr-4 w-56 overflow-hidden rounded-3xl border-4 border-charcoal-50 shadow-card-hover sm:w-64">
              <div className="relative aspect-square">
                <Image
                  src={placeholderImage("tekiz-hakkimizda-kaynak", 700, 700)}
                  alt="Robotik kaynak istasyonunda konteyner gövdesi"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            label="Hakkımızda"
            title="Kırk yıldır aynı işi yapıyoruz: konteyner"
            description="1985'te Topkapı'da küçük bir sac atölyesi olarak başladık. Bugün Hadımköy'deki 12.000 m² kapalı alanlı tesisimizde sac kesim, CNC büküm, robotik kaynak, sıcak daldırma galvaniz ve toz boya süreçlerinin tamamını kendi bünyemizde yürütüyoruz."
          />

          <dl className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {shown.map((value, i) => {
              const Icon = valueIcons[value.icon];
              return (
                <Reveal key={value.title} delay={0.06 * i}>
                  <div>
                    <dt className="flex items-center gap-3 font-display text-base font-semibold text-charcoal-950">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      {value.title}
                    </dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-charcoal-600">
                      {value.description}
                    </dd>
                  </div>
                </Reveal>
              );
            })}
          </dl>

          <Reveal delay={0.3}>
            <ButtonLink href="/hakkimizda" variant="outline" className="group mt-10">
              Kurumsal profilimiz
              <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
