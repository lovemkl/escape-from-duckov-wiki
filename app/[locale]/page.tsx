import { setRequestLocale, getTranslations } from "next-intl/server";
import { HomeView } from "@/components/HomeView";
import { homeMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return homeMetadata(t("seoTitle"), t("seoDescription"), locale);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeView />;
}
