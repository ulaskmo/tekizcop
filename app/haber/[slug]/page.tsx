import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { QuoteCta } from "@/components/sections/quote-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { NewsCard } from "@/components/ui/news-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { getNewsPost, getNewsSlugs, getRelatedNews } from "@/lib/news";
import { formatDateTR } from "@/lib/utils";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getNewsPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/haber/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.coverImage }],
    },
  };
}

export default function NewsDetailPage({ params }: Params) {
  const post = getNewsPost(params.slug);
  if (!post) notFound();

  const related = getRelatedNews(post.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/haber/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="relative isolate overflow-hidden bg-charcoal-950">
          <div
            className="absolute inset-0 -z-10 bg-grid-fade bg-grid opacity-25"
            aria-hidden
          />
          <div className="container-page py-14 lg:py-20">
            <Breadcrumbs
              items={[
                { label: "Haberler", href: "/haberler" },
                { label: post.title },
              ]}
            />

            <div className="mt-8 max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-charcoal-400">
                <span className="rounded-full bg-brand-700/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300 ring-1 ring-inset ring-brand-500/30">
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatDateTR(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime} dk okuma</span>
              </div>

              <h1 className="mt-6 text-display-sm text-white sm:text-display-md">
                {post.title}
              </h1>

              <p className="mt-6 text-[1.0625rem] leading-relaxed text-charcoal-300">
                {post.excerpt}
              </p>

              <p className="mt-6 text-sm text-charcoal-500">{post.author}</p>
            </div>
          </div>
        </header>

        <div className="bg-white py-14 lg:py-20">
          <div className="container-page">
            <Reveal from="none">
              <div className="relative aspect-[16/9] overflow-hidden rounded-4xl bg-charcoal-100 shadow-card">
                {/* TODO: Gerçek haber görseli ile değiştirilecek (frontmatter coverImage). */}
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="mx-auto mt-14 max-w-3xl">
              <Reveal>
                <div className="prose-tekiz">
                  <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
                </div>
              </Reveal>

              <Reveal>
                <div className="mt-14 flex flex-col gap-4 border-t border-charcoal-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.9375rem] text-charcoal-600">
                    Projeniz için teknik görüş mü gerekiyor?
                  </p>
                  <ButtonLink href="/iletisim#teklif" className="group shrink-0">
                    Bize ulaşın
                    <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-charcoal-200 bg-charcoal-50 py-section">
          <div className="container-page">
            <SectionHeading
              label="Diğer Haberler"
              title="Bunları da okuyabilirsiniz"
              as="h2"
            />
            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <RevealItem key={item.slug} className="h-full">
                  <NewsCard post={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <QuoteCta />
    </>
  );
}
