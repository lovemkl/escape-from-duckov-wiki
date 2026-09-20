import { ArticleRoute, makeGenerateMetadata } from "@/components/ArticlePage";

export const generateMetadata = makeGenerateMetadata("faq");

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ArticleRoute slug="faq" params={params} />;
}
