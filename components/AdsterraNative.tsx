"use client";

import Script from "next/script";

/**
 * Adsterra Native Banner (JS async), one unit per site.
 *
 * Key/host come ONLY from NEXT_PUBLIC_ADSTERRA_KEY / NEXT_PUBLIC_ADSTERRA_HOST
 * (per-site values live in the committed `.env.production` and, for CLI-deployed
 * Vercel projects, in the project env). There is deliberately NO hardcoded
 * default: if the key/host is missing, no ad slot is rendered at all.
 *
 * Clone guard: `.env.production` also pins NEXT_PUBLIC_ADSTERRA_DOMAIN. If this
 * repo is cloned into a new site (NEXT_PUBLIC_SITE_URL points elsewhere), the
 * old site's key is NOT used — register the new domain in Adsterra, create its
 * own Native Banner unit and replace all three values.
 */
const KEY = (process.env.NEXT_PUBLIC_ADSTERRA_KEY || "").trim();
const HOST = (process.env.NEXT_PUBLIC_ADSTERRA_HOST || "").trim();
const AD_DOMAIN = (process.env.NEXT_PUBLIC_ADSTERRA_DOMAIN || "").trim();
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").trim();

function siteHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return "";
  }
}

const DOMAIN_OK =
  !AD_DOMAIN || !SITE_URL || siteHost(SITE_URL) === AD_DOMAIN;

export const ADSTERRA_ENABLED = Boolean(KEY && HOST && DOMAIN_OK);

type Props = {
  className?: string;
};

export function AdsterraNative({ className = "" }: Props) {
  if (!ADSTERRA_ENABLED) return null;

  return (
    <div
      className={`mx-auto my-8 flex min-h-[90px] w-full max-w-3xl justify-center overflow-hidden ${className}`}
      aria-label="Advertisement"
      data-ad-slot="adsterra-native"
    >
      <div id={`container-${KEY}`} />
      <Script
        id={`adsterra-${KEY}`}
        src={`https://${HOST}/${KEY}/invoke.js`}
        strategy="afterInteractive"
        async
        data-cfasync="false"
      />
    </div>
  );
}
