import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "./icons";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  tone = "light",
  className,
}: {
  items: Crumb[];
  /** "light" koyu zeminde açık metin, "dark" açık zeminde koyu metin. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const isLight = tone === "light";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Ana Sayfa", href: "/" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
      }),
    ),
  };

  return (
    <nav aria-label="Sayfa yolu" className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-sm",
          isLight ? "text-charcoal-400" : "text-charcoal-500",
        )}
      >
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors",
              isLight ? "hover:text-white" : "hover:text-charcoal-900",
            )}
          >
            Ana Sayfa
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 opacity-60" />
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isLight ? "hover:text-white" : "hover:text-charcoal-900",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn("font-medium", isLight ? "text-white" : "text-charcoal-900")}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
