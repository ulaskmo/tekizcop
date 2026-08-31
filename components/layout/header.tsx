"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { mainNav, type NavLink } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const isActive = (item: NavLink) =>
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href ||
        pathname.startsWith(`${item.href}/`) ||
        (item.children?.some((c) => pathname.startsWith(c.href)) ?? false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-all duration-300 ease-out-expo",
          scrolled
            ? "border-b border-charcoal-200/80 bg-white/90 backdrop-blur-md"
            : "border-b border-transparent bg-white",
        )}
      >
        <div
          className={cn(
            "container-page flex items-center justify-between gap-6 transition-all duration-300 ease-out-expo",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) => {
                const active = isActive(item);

                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative inline-flex h-10 items-center rounded-full px-2.5 text-sm font-medium transition-colors xl:px-3.5 xl:text-[0.9375rem]",
                          active
                            ? "text-brand-800"
                            : "text-charcoal-700 hover:text-charcoal-950",
                        )}
                      >
                        {item.label}
                        {active ? (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                            transition={{ type: "spring", damping: 30, stiffness: 350 }}
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                }

                const dropdownOpen = openDropdown === item.label;

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onBlur={(e) => {
                      // Klavye ile gezinirken odak menüden çıktığında kapat.
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={dropdownOpen}
                      onFocus={() => setOpenDropdown(item.label)}
                      className={cn(
                        "relative inline-flex h-10 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium transition-colors xl:px-3.5 xl:text-[0.9375rem]",
                        active
                          ? "text-brand-800"
                          : "text-charcoal-700 hover:text-charcoal-950",
                      )}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          dropdownOpen && "rotate-180",
                        )}
                      />
                      {active ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                          transition={{ type: "spring", damping: 30, stiffness: 350 }}
                        />
                      ) : null}
                    </Link>

                    <AnimatePresence>
                      {dropdownOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 top-full w-72 pt-2"
                        >
                          <ul className="overflow-hidden rounded-2xl border border-charcoal-200 bg-white p-2 shadow-card-hover">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block rounded-xl px-3.5 py-2.5 text-[0.9375rem] transition-colors",
                                    pathname === child.href
                                      ? "bg-brand-50 text-brand-800"
                                      : "text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-950",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-[0.9375rem] font-semibold text-charcoal-800 transition-colors hover:text-brand-700 xl:inline-flex"
            >
              <PhoneIcon className="h-4.5 w-4.5 text-brand-700" />
              {siteConfig.phone}
            </a>

            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile yazın"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700 transition-all duration-200 hover:bg-brand-100 hover:text-brand-800"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>

            <ButtonLink href="/iletisim#teklif" size="sm" className="hidden sm:inline-flex">
              Teklif Al
            </ButtonLink>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menüyü aç"
              aria-expanded={menuOpen}
              aria-controls="mobil-menu"
              className="grid h-10 w-10 place-items-center rounded-full text-charcoal-700 transition-colors hover:bg-charcoal-100 hover:text-charcoal-950 lg:hidden"
            >
              <MenuIcon className="h-5.5 w-5.5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
