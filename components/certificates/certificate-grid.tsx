"use client";

import Image from "next/image";
import { useState } from "react";

import { Lightbox } from "@/components/ui/lightbox";
import { ZoomIcon } from "@/components/ui/icons";
import type { Certificate } from "@/data/types";

export function CertificateGrid({ certificates }: { certificates: Certificate[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((certificate, i) => (
          <li key={certificate.slug} className="h-full">
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-200 bg-white shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`${certificate.title} belgesini büyüt`}
                className="relative block aspect-[3/4] w-full overflow-hidden bg-charcoal-100"
              >
                {/* TODO: Gerçek belge taraması ile değiştirilecek (data/certificates.ts). */}
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  priority={i < 4}
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 grid place-items-center bg-charcoal-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-charcoal-800">
                    <ZoomIcon className="h-4 w-4" />
                    Belgeyi görüntüle
                  </span>
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-brand-700 px-2.5 py-1 text-[0.6875rem] font-bold text-white shadow-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5">
                  {certificate.year}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-semibold leading-snug text-charcoal-950">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-charcoal-400">
                  {certificate.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  {certificate.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Lightbox
        images={certificates.map((c) => c.image)}
        titles={certificates.map((c) => c.title)}
        index={openIndex ?? 0}
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}
