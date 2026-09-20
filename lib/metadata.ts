import type { Metadata } from "next";
import type { WikiArticle } from "@/content/types";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";
import { siteUrl } from "@/lib/siteUrl";

const SITE = siteUrl();

export function localizedUrl(path: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path === "/" ? "" : path}` || "/";
}

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE}/`;
  return `${SITE}${path}`;
}

function languageAlternates(articlePath: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = absoluteUrl(localizedUrl(articlePath, loc));
  }
  languages["x-default"] = absoluteUrl(articlePath);
  return languages;
}

export function articleMetadata(article: WikiArticle, locale: string): Metadata {
  const path = localizedUrl(article.path, locale);
  const abs = absoluteUrl(path);
  const indexable = !article.noindex;

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: abs,
      languages: languageAlternates(article.path),
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      locale,
      url: abs,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary",
      title: article.seoTitle,
      description: article.seoDescription,
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export function homeMetadata(
  title: string,
  description: string,
  locale: string,
): Metadata {
  const path = localizedUrl("/", locale);
  const abs = absoluteUrl(path);
  return {
    title,
    description,
    alternates: {
      canonical: abs,
      languages: languageAlternates("/"),
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale,
      url: abs,
      siteName: SITE_NAME,
    },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true },
  };
}
