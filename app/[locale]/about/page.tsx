import { ArticleRoute, makeGenerateMetadata } from "@/components/ArticlePage";

export const generateMetadata = makeGenerateMetadata("about");

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ArticleRoute slug="about" params={params} />;
}
