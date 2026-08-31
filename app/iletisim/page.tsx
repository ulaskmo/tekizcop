import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { fullAddress, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${siteConfig.name} iletişim bilgileri: telefon, WhatsApp, e-posta, adres ve çalışma saatleri. Teklif talebiniz için formu doldurun, aynı iş günü içinde dönüş yapıyoruz.`,
  alternates: { canonical: "/iletisim" },
};

const mapQuery = encodeURIComponent(fullAddress);

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label="İletişim"
        title="Teklif talebiniz için bize yazın"
        description="Ürün grubu, adet ve teslim ili bilgilerini iletin; standart katalog ürünleri için teklifinizi aynı iş günü içinde gönderiyoruz. Özel ölçü taleplerinde teknik ekibimiz sizinle birlikte çalışır."
        breadcrumbs={[{ label: "İletişim" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" id="teklif">
            <SectionHeading label="Teklif Formu" title="Formu doldurun" as="h2" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal from="right">
              <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:rounded-4xl sm:p-9">
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Doğrudan iletişim
                </h2>

                <ul className="mt-7 space-y-6">
                  <li>
                    <a
                      href={siteConfig.phoneHref}
                      className="group flex items-start gap-4"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <PhoneIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wider text-charcoal-500">
                          Telefon
                        </span>
                        <span className="mt-1 block font-semibold text-charcoal-950">
                          {siteConfig.phone}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                        <WhatsAppIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wider text-charcoal-500">
                          WhatsApp
                        </span>
                        <span className="mt-1 block font-semibold text-charcoal-950">
                          Hemen mesaj gönderin
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={siteConfig.emailHref}
                      className="group flex items-start gap-4"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <MailIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wider text-charcoal-500">
                          E-posta
                        </span>
                        <span className="mt-1 block break-all font-semibold text-charcoal-950">
                          {siteConfig.email}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-inset ring-brand-100">
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-charcoal-500">
                        Adres
                      </span>
                      <address className="mt-1 not-italic leading-relaxed text-charcoal-700">
                        {fullAddress}
                      </address>
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-inset ring-brand-100">
                      <ClockIcon className="h-5 w-5" />
                    </span>
                    <span className="w-full">
                      <span className="block text-xs font-medium uppercase tracking-wider text-charcoal-500">
                        Çalışma saatleri
                      </span>
                      <dl className="mt-2 space-y-1.5">
                        {siteConfig.workingHours.map((slot) => (
                          <div
                            key={slot.days}
                            className="flex justify-between gap-4 text-sm"
                          >
                            <dt className="text-charcoal-700">{slot.days}</dt>
                            <dd className="font-medium text-charcoal-500">
                              {slot.hours}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-200">
        <h2 className="sr-only">Konum haritası</h2>
        {/*
          TODO: Gerçek adres girildiğinde harita otomatik güncellenir
          (data/site.ts içindeki address alanından türetilir).
        */}
        <iframe
          title={`${siteConfig.name} konum haritası`}
          src={`https://www.google.com/maps?q=${mapQuery}&hl=tr&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[16rem] w-full border-0 grayscale-[35%] sm:h-[26rem] lg:h-[32rem]"
        />
      </section>
    </>
  );
}
