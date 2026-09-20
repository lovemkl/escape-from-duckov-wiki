import { ArticleRoute, makeGenerateMetadata } from "@/components/ArticlePage";

export const generateMetadata = makeGenerateMetadata("beginner");

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ArticleRoute slug="beginner" params={params} />;
}
