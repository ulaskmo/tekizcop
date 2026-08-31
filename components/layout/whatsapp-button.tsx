"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Sayfa bir miktar kaydırıldıktan sonra görünen sabit WhatsApp butonu. */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 320);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile teklif alın"
          className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-30 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-[0_8px_30px_-8px_rgba(37,211,102,0.7)] sm:bottom-7 sm:right-7"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="grid h-13 place-items-center">
            <WhatsAppIcon className="h-7 w-7" />
          </span>
          <span className="max-w-0 whitespace-nowrap text-[0.9375rem] font-semibold opacity-0 transition-all duration-300 ease-out-expo group-hover:max-w-[10rem] group-hover:pl-2.5 group-hover:opacity-100">
            Teklif Al
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
