import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Escape From Duckov Wiki: Beginner Guide, Raid Tips & Loadouts",
    template: "%s",
  },
  description:
    "Escape From Duckov wiki: beginner guide, raid tips, trader notes, and the Raid Loadout + Hideout Planner — verified facts only.",
  icons: { icon: "/favicon.svg" },
  verification: { google: "CMEu9ebYVvHXLjZcv2qdXQnGfRRpmemTOIu9TAg2YTc" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}