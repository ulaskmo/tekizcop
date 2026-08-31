"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Lightbox } from "@/components/ui/lightbox";
import { ZoomIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`${name} görselini büyüt`}
        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-charcoal-200 bg-charcoal-100"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* TODO: Gerçek ürün fotoğrafı ile değiştirilecek (data/products.ts). */}
            <Image
              src={images[active]}
              alt={`${name} — görsel ${active + 1}`}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-charcoal-700 shadow-sm backdrop-blur sm:bottom-4 sm:right-4 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
          <ZoomIcon className="h-4 w-4" />
          Büyüt
        </span>
      </button>

      {images.length > 1 ? (
        <ul className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image, i) => (
            <li key={image}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${i + 1}. görseli göster`}
                aria-current={i === active}
                className={cn(
                  "relative block aspect-square w-full overflow-hidden rounded-xl border-2 transition-all duration-300",
                  i === active
                    ? "border-brand-600"
                    : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <Lightbox
        images={images}
        index={active}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActive}
        caption={name}
      />
    </div>
  );
}
