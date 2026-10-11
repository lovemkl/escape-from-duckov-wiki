import { ArticleRoute, makeGenerateMetadata } from "@/components/ArticlePage";

export const generateMetadata = makeGenerateMetadata("workshop-and-mods");

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ArticleRoute slug="workshop-and-mods" params={params} />;
}
