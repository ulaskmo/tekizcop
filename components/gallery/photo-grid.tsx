"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Lightbox } from "@/components/ui/lightbox";
import { ZoomIcon } from "@/components/ui/icons";
import { galleryCategories } from "@/data/gallery";
import type { GalleryPhoto } from "@/data/types";
import { cn } from "@/lib/utils";

const ALL = "Tümü";

export function PhotoGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [filter, setFilter] = useState(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === ALL ? photos : photos.filter((p) => p.category === filter)),
    [photos, filter],
  );

  const tabs = [ALL, ...galleryCategories];

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <ul className="flex w-max items-center gap-2">
          {tabs.map((tab) => {
            const isActive = tab === filter;
            return (
              <li key={tab}>
                <button
                  type="button"
                  onClick={() => {
                    setFilter(tab);
                    setOpenIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={cn(
                    "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
                    isActive
                      ? "text-white"
                      : "bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="gallery-tab"
                      className="absolute inset-0 rounded-full bg-brand-700"
                      transition={{ type: "spring", damping: 30, stiffness: 320 }}
                    />
                  ) : null}
                  <span className="relative">{tab}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <motion.ul
        layout
        className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((photo, i) => (
            <motion.li
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: Math.min(i * 0.03, 0.3),
                ease: [0.16, 1, 0.3, 1],
              }}
              /* Her beşinci görsel iki kolon genişliğinde: ritmi kıran mozaik düzen. */
              className={cn(i % 5 === 0 && "md:col-span-2 md:row-span-1")}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`${photo.title} görselini büyüt`}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-2xl bg-charcoal-100",
                  i % 5 === 0 ? "aspect-square md:aspect-[2/1]" : "aspect-square",
                )}
              >
                {/* TODO: Gerçek fotoğraf ile değiştirilecek (data/gallery.ts). */}
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  priority={i < 4}
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.07]"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent opacity-90 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
                  aria-hidden
                />

                <span className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 opacity-100 transition-all duration-500 ease-out-expo sm:inset-x-4 sm:bottom-4 md:opacity-0 md:group-hover:opacity-100">
                  <span className="text-left text-sm font-semibold leading-snug text-white">
                    {photo.title}
                  </span>
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/95 text-charcoal-800"
                    aria-hidden
                  >
                    <ZoomIcon className="h-4 w-4" />
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <Lightbox
        images={visible.map((p) => p.image)}
        titles={visible.map((p) => p.title)}
        index={openIndex ?? 0}
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </div>
  );
}
