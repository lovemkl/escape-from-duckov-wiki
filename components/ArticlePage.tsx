import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArticleView } from "@/components/ArticleView";
import { resolveArticle } from "@/content";
import { articleMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type Params = { locale: string };

export function makeGenerateMetadata(slug: string) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<Params>;
  }): Promise<Metadata> {
    const { locale } = await params;
    const resolved = resolveArticle(slug, locale);
    if (!resolved) return {};
    return articleMetadata(resolved.article, locale);
  };
}

export async function ArticleRoute({
  slug,
  params,
}: {
  slug: string;
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolved = resolveArticle(slug, locale);
  if (!resolved) notFound();
  return (
    <ArticleView
      article={resolved.article}
      fallbackEnglish={resolved.fallback}
    />
  );
}
