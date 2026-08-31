import Image from "next/image";
import Link from "next/link";

import type { NewsMeta } from "@/data/types";
import { cn, formatDateTR } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";

type NewsCardProps = {
  post: NewsMeta;
  /** Öne çıkan yerleşim: görsel daha geniş, başlık daha büyük. */
  featured?: boolean;
  className?: string;
};

export function NewsCard({ post, featured, className }: NewsCardProps) {
  return (
    <Link
      href={`/haber/${post.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-200 bg-white shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-charcoal-100",
          featured ? "aspect-[16/9]" : "aspect-[3/2]",
        )}
      >
        {/* TODO: Gerçek haber görseli ile değiştirilecek (content/news frontmatter). */}
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-charcoal-700 shadow-sm backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-charcoal-400">
          <time dateTime={post.date}>{formatDateTR(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime} dk okuma</span>
        </div>

        <h3
          className={cn(
            "mt-3 font-semibold leading-snug text-charcoal-950 transition-colors group-hover:text-brand-800",
            featured ? "text-2xl sm:text-[1.75rem]" : "text-lg",
          )}
        >
          {post.title}
        </h3>

        <p
          className={cn(
            "mt-3 leading-relaxed text-charcoal-600",
            featured ? "text-[1.0625rem]" : "line-clamp-3 text-sm",
          )}
        >
          {post.excerpt}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-700">
          Haberi oku
          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
