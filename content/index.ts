import type { ArticleMap, WikiArticle } from "./types";
import { articlesEn } from "./en";

const PACKS: Record<string, ArticleMap> = {
  en: articlesEn,
};

export function resolveArticle(
  slug: string,
  locale: string,
): { article: WikiArticle; fallback: boolean } | null {
  const local = PACKS[locale]?.[slug];
  if (local) return { article: local, fallback: false };
  const en = PACKS.en[slug];
  if (en) return { article: en, fallback: locale !== "en" };
  return null;
}

export function allEnglishArticles() {
  return Object.values(articlesEn);
}
