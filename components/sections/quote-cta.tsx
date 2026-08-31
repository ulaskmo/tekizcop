import { ButtonLink } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ClockIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function QuoteCta() {
  return (
    <section className="bg-white pb-section">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-4xl bg-brand-800 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div
              className="absolute inset-0 -z-10 bg-grid-fade bg-grid opacity-30"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -right-16 -z-10 h-80 w-80 rounded-full bg-brand-500/30 blur-[100px]"
              aria-hidden
            />

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100 ring-1 ring-inset ring-white/20">
                  <ClockIcon className="h-4 w-4" />
                  Aynı gün yanıt
                </span>

                <h2 className="mt-6 text-display-sm text-white sm:text-display-md">
                  Projeniz için fiyat çalışması hazırlayalım
                </h2>

                <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-brand-100/90">
                  Ürün grubu, adet ve teslim ili bilgilerini iletin; standart
                  katalog ürünleri için teklifinizi aynı iş günü içinde
                  gönderiyoruz. Özel ölçü taleplerinde teknik ekibimiz sizinle
                  birlikte çalışır.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink
                  href="/iletisim#teklif"
                  size="lg"
                  className="group bg-white text-brand-900 hover:bg-brand-50"
                >
                  Teklif formu
                  <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </ButtonLink>

                <ButtonLink
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="light"
                  size="lg"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-8">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-brand-200"
              >
                <PhoneIcon className="h-5 w-5 text-brand-300" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="text-brand-100/90 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
