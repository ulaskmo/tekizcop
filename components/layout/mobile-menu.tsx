"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  CloseIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Panel açıkken arka planın kaymasını engelle ve Esc ile kapanmayı sağla.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal-950/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            id="mobil-menu"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobil menü"
          >
            <div className="flex items-center justify-between border-b border-charcoal-200 px-5 py-4">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-charcoal-500">
                Menü
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Menüyü kapat"
                className="grid h-10 w-10 place-items-center rounded-full text-charcoal-600 transition-colors hover:bg-charcoal-100 hover:text-charcoal-950"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {mainNav.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  const isOpen = expanded === item.label;

                  if (!item.children) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            "block rounded-xl px-4 py-3 text-[1.0625rem] font-medium transition-colors",
                            isActive
                              ? "bg-brand-50 text-brand-800"
                              : "text-charcoal-800 hover:bg-charcoal-100",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[1.0625rem] font-medium transition-colors",
                          isActive
                            ? "bg-brand-50 text-brand-800"
                            : "text-charcoal-800 hover:bg-charcoal-100",
                        )}
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={cn(
                            "h-4.5 w-4.5 shrink-0 transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 space-y-0.5 border-l border-charcoal-200 pl-3">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className={cn(
                                      "block rounded-lg px-3 py-2.5 text-[0.9375rem] transition-colors",
                                      pathname === child.href
                                        ? "text-brand-700"
                                        : "text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-900",
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          </motion.ul>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-2 border-t border-charcoal-200 bg-charcoal-50 px-5 py-5">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-[0.9375rem] font-medium text-charcoal-800"
              >
                <PhoneIcon className="h-4.5 w-4.5 text-brand-700" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-3 text-[0.9375rem] text-charcoal-600"
              >
                <MailIcon className="h-4.5 w-4.5 text-brand-700" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full bg-brand-700 font-medium text-white transition-colors hover:bg-brand-800"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ile teklif al
              </a>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
