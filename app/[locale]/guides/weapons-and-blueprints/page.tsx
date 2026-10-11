import { ArticleRoute, makeGenerateMetadata } from "@/components/ArticlePage";

export const generateMetadata = makeGenerateMetadata("weapons-and-blueprints");

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ArticleRoute slug="weapons-and-blueprints" params={params} />;
}
