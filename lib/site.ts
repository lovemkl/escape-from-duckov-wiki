export const STEAM_URL =
  "https://store.steampowered.com/app/3167020/Escape_From_Duckov/";

export const STEAM_APP_ID = 3167020;

export const SITE_NAME = "Escape From Duckov Fan Wiki";

export const DISCLAIMER =
  "This is an unofficial fan-made wiki. It is not affiliated with Team Soda, bilibili, or Valve.";

export const LOCALES = ["en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const SCREENSHOTS = [
  "/media/ss0.jpg",
  "/media/ss1.jpg",
  "/media/ss2.jpg",
  "/media/ss3.jpg",
  "/media/ss4.jpg",
  "/media/ss5.jpg",
] as const;

export const HEADER_IMAGE = "/media/header.jpg";

/** Public YouTube trailers (demo + gameplay showcase). Steam also hosts store movies. */
export const YOUTUBE = {
  releaseTrailer: "SfFmZvfn_xQ",
  gameplayTrailer: "9GqnSPkNfY0",
} as const;

/** Steam store page — studio-hosted trailers also live here. */
export const STEAM_TRAILER_STORE =
  "https://store.steampowered.com/app/3167020/Escape_From_Duckov/";
