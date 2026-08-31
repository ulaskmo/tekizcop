import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: false },
};

const suggestions = [
  { label: "Ürün kataloğu", href: "/urunler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Haberler", href: "/haberler" },
  { label: "İletişim", href: "/iletisim" },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-50">
      <div
        className="absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-brand-200/50 blur-[110px]"
        aria-hidden
      />
      <div className="container-page flex min-h-[60vh] flex-col justify-center py-section">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
          Hata 404
        </p>
        <h1 className="mt-5 max-w-2xl text-display-sm text-charcoal-950 sm:text-display-md">
          Aradığınız sayfayı bulamadık
        </h1>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-charcoal-600">
          Adres değişmiş veya sayfa kaldırılmış olabilir. Aşağıdaki
          bağlantılardan devam edebilir ya da doğrudan bize yazabilirsiniz.
        </p>

        <ul className="mt-9 flex flex-wrap gap-2.5">
          {suggestions.map((item) => (
            <li key={item.href}>
              <ButtonLink href={item.href} variant="outline" size="sm">
                {item.label}
              </ButtonLink>
            </li>
          ))}
        </ul>

        <ButtonLink href="/" size="lg" className="group mt-10 self-start">
          Ana sayfaya dön
          <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
        </ButtonLink>
      </div>
    </section>
  );
}
