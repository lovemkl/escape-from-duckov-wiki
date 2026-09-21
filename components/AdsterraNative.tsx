"use client";

import Script from "next/script";

/** Adsterra Native Banner (JS async). Key from publisher dashboard. */
const KEY =
  process.env.NEXT_PUBLIC_ADSTERRA_KEY ||
  "9caf20e7fed0cc672467258764f55918";
const HOST =
  process.env.NEXT_PUBLIC_ADSTERRA_HOST ||
  "pl31168612.profitableratecpmnetwork.com";

type Props = {
  className?: string;
};

export function AdsterraNative({ className = "" }: Props) {
  if (!KEY) return null;

  return (
    <div
      className={`mx-auto my-8 flex min-h-[90px] w-full max-w-3xl justify-center overflow-hidden ${className}`}
      aria-label="Advertisement"
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
