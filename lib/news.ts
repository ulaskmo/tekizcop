import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { NewsMeta, NewsPost } from "@/data/types";

const NEWS_DIR = path.join(process.cwd(), "content", "news");

/** Ortalama okuma hızı: 200 kelime/dakika. */
function readingTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function parseFile(fileName: string): NewsPost {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(NEWS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    coverImage: String(data.coverImage ?? ""),
    excerpt: String(data.excerpt ?? ""),
    author: String(data.author ?? "Tekiz Çöp Konteyner"),
    category: String(data.category ?? "Haber"),
    readingTime: readingTime(content),
    body: content,
  };
}

/** Tüm yazıları tarihe göre yeniden eskiye sıralayarak döndürür. */
export function getAllNews(): NewsPost[] {
  if (!fs.existsSync(NEWS_DIR)) return [];

  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsMeta(): NewsMeta[] {
  return getAllNews().map(({ body: _body, ...meta }) => meta);
}

export function getNewsPost(slug: string): NewsPost | undefined {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(NEWS_DIR, file))) return undefined;
  return parseFile(file);
}

export function getNewsSlugs(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getRelatedNews(slug: string, limit = 3): NewsMeta[] {
  return getNewsMeta()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

export const newsCategories = () =>
  Array.from(new Set(getNewsMeta().map((p) => p.category)));
