import { allEnglishArticles } from "@/content";
import { siteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Minimal sitemap: sitemap.org 0.9 urlset only — no xhtml / hreflang. */
export function GET() {
  const SITE = siteUrl();
  const lastmod = "2026-09-20";
  const paths = [
    "/",
    ...allEnglishArticles()
      .filter((a) => !a.noindex)
      .map((a) => a.path),
  ];

  const urls = paths
    .map((path) => {
      const loc = path === "/" ? `${SITE}/` : `${SITE}${path}`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
