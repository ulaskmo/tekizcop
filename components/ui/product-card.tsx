import Image from "next/image";
import Link from "next/link";

import { getCategoryName } from "@/data/categories";
import type { Product } from "@/data/types";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";

type ProductCardProps = {
  product: Product;
  /** İlk ekranda görünen kartlarda LCP için öncelikli yükleme. */
  priority?: boolean;
  className?: string;
};

export function ProductCard({ product, priority, className }: ProductCardProps) {
  return (
    <Link
      href={`/urun/${product.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-200 bg-white shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-charcoal-300 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
        {/* TODO: Gerçek ürün fotoğrafı ile değiştirilecek (data/products.ts). */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.07]"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <span className="absolute left-3 top-3 max-w-[calc(100%-5.5rem)] truncate rounded-full bg-white/95 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-charcoal-700 shadow-sm backdrop-blur sm:left-4 sm:top-4 sm:max-w-none sm:px-3 sm:py-1.5 sm:text-[0.6875rem]">
          {getCategoryName(product.category)}
        </span>

        {product.litre ? (
          <span className="absolute right-3 top-3 rounded-full bg-brand-700 px-2.5 py-1 text-[0.625rem] font-bold text-white shadow-sm sm:right-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[0.6875rem]">
            {product.litre >= 1000
              ? `${(product.litre / 1000).toLocaleString("tr-TR")} m³`
              : `${product.litre} L`}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-charcoal-400">
          {product.code}
        </p>

        <h3 className="mt-2 text-lg font-semibold leading-snug text-charcoal-950 transition-colors group-hover:text-brand-800">
          {product.name}
        </h3>

        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-charcoal-500">
          {product.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-xs font-medium text-charcoal-400">
            {product.material}
          </span>
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-charcoal-100 text-charcoal-600 transition-all duration-300 ease-out-expo group-hover:bg-brand-700 group-hover:text-white"
            aria-hidden
          >
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
