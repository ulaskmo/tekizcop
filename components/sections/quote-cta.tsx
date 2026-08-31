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
          <div className="relative isolate overflow-hidden rounded-4xl border border-brand-100 bg-brand-50 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div
              className="absolute -bottom-24 -right-16 -z-10 h-80 w-80 rounded-full bg-brand-200/50 blur-[100px]"
              aria-hidden
            />

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  <ClockIcon className="h-4 w-4" />
                  Aynı gün yanıt
                </span>

                <h2 className="mt-6 text-display-sm text-charcoal-950 sm:text-display-md">
                  Projeniz için fiyat çalışması hazırlayalım
                </h2>

                <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-charcoal-600">
                  Ürün grubu, adet ve teslim ili bilgilerini iletin; standart
                  katalog ürünleri için teklifinizi aynı iş günü içinde
                  gönderiyoruz. Özel ölçü taleplerinde teknik ekibimiz sizinle
                  birlikte çalışır.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink href="/iletisim#teklif" size="lg" className="group">
                  Teklif formu
                  <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </ButtonLink>

                <ButtonLink
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <WhatsAppIcon className="h-5 w-5 text-brand-700" />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-brand-200 pt-8">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2.5 font-semibold text-charcoal-900 transition-colors hover:text-brand-700"
              >
                <PhoneIcon className="h-5 w-5 text-brand-700" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="text-charcoal-600 transition-colors hover:text-brand-700"
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
