import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArticleView } from "@/components/ArticleView";
import { makeGenerateMetadata } from "@/components/ArticlePage";
import { RaidLoadoutTool } from "@/components/RaidLoadoutTool";
import { resolveArticle } from "@/content";

export const generateMetadata = makeGenerateMetadata("raid-loadout");

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolved = resolveArticle("raid-loadout", locale);
  if (!resolved) notFound();
  return (
    <ArticleView
      article={resolved.article}
      fallbackEnglish={resolved.fallback}
    >
      <RaidLoadoutTool />
    </ArticleView>
  );
}
