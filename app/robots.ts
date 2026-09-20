import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

const SITE = siteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
