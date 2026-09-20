/** Canonical production origin — never use localhost in metadata/sitemap. */
export const PRODUCTION_SITE_URL = "https://escape-from-duckov-wiki.vercel.app";

export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit && !/localhost|127\.0\.0\.1/i.test(explicit)) {
    return explicit;
  }
  return PRODUCTION_SITE_URL;
}
