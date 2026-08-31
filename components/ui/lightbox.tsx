"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";

import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./icons";

type LightboxProps = {
  images: string[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  caption?: string;
  /** Görsel başlıkları; verilirse `caption` yerine aktif görselin başlığı yazılır. */
  titles?: string[];
};

/** Galeri, proje ve ürün görselleri için paylaşılan tam ekran görüntüleyici. */
export function Lightbox({
  images,
  index,
  open,
  onClose,
  onIndexChange,
  caption,
  titles,
}: LightboxProps) {
  const total = images.length;

  const go = useCallback(
    (delta: number) => {
      onIndexChange((index + delta + total) % total);
    },
    [index, onIndexChange, total],
  );

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, go]);

  const label = titles?.[index] ?? caption;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-charcoal-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-label={label ? `${label} — büyütülmüş görsel` : "Büyütülmüş görsel"}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="text-sm font-medium text-charcoal-300">
              {index + 1} / {total}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Kapat"
              className="grid h-11 w-11 place-items-center rounded-full text-charcoal-300 ring-1 ring-inset ring-white/15 transition-all hover:bg-white/10 hover:text-white"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-20">
            {/* Boşluğa tıklayınca kapanır. */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Kapat"
              tabIndex={-1}
              className="absolute inset-0 cursor-zoom-out"
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={images[index]}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full max-h-[75vh] w-full max-w-5xl"
              >
                <Image
                  src={images[index]}
                  alt={label ? `${label} — görsel ${index + 1}` : `Görsel ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="pointer-events-none object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Önceki görsel"
                  className="absolute left-2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Sonraki görsel"
                  className="absolute right-2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white/20 sm:right-6"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </>
            ) : null}
          </div>

          {label ? (
            <p className="px-5 pb-6 text-center text-[0.9375rem] text-charcoal-300 sm:px-8">
              {label}
            </p>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
