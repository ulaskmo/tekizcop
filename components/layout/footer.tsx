import Link from "next/link";

import { footerNav } from "@/data/navigation";
import { fullAddress, siteConfig } from "@/data/site";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  socialIcons,
} from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";

const socialLabels: Record<keyof typeof socialIcons, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-950 text-charcoal-300">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-charcoal-400">
              {siteConfig.founded} yılından bu yana galvaniz, plastik ve yeraltı
              çöp konteyneri üretiyoruz. Belediyeler, siteler ve sanayi
              tesisleri için dayanıklı atık toplama çözümleri.
            </p>

            <ul className="mt-8 space-y-3.5 text-[0.9375rem]">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="group inline-flex items-start gap-3 transition-colors hover:text-white"
                >
                  <PhoneIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
                  <span className="font-medium">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="group inline-flex items-start gap-3 transition-colors hover:text-white"
                >
                  <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
                <address className="not-italic text-charcoal-400">
                  {fullAddress}
                </address>
              </li>
            </ul>

            <ul className="mt-8 flex items-center gap-2">
              {(Object.keys(socialIcons) as (keyof typeof socialIcons)[]).map(
                (key) => {
                  const Icon = socialIcons[key];
                  return (
                    <li key={key}>
                      <a
                        href={siteConfig.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialLabels[key]}
                        className="grid h-10 w-10 place-items-center rounded-full bg-charcoal-900 text-charcoal-300 ring-1 ring-inset ring-charcoal-800 transition-all duration-200 hover:bg-brand-700 hover:text-white hover:ring-brand-600"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    </li>
                  );
                },
              )}
            </ul>
          </div>

          <nav
            aria-label="Site haritası"
            className="grid gap-10 sm:grid-cols-3 lg:col-span-6"
          >
            {footerNav.map((column) => (
              <div key={column.title}>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-charcoal-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-2">
            <h2 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
              <ClockIcon className="h-4.5 w-4.5 text-brand-400" />
              Çalışma Saatleri
            </h2>
            <dl className="mt-5 space-y-3 text-[0.9375rem]">
              {siteConfig.workingHours.map((slot) => (
                <div key={slot.days}>
                  <dt className="text-charcoal-300">{slot.days}</dt>
                  <dd className="text-charcoal-500">{slot.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-900">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-sm text-charcoal-500 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName} — Tüm hakları saklıdır.
          </p>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            WhatsApp ile hızlı teklif
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
