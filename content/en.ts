import type { ArticleMap } from "./types";

export const articlesEn: ArticleMap = {
  "raid-loadout": {
    slug: "raid-loadout",
    path: "/tools/raid-loadout",
    seoTitle: "Raid Loadout + Hideout Planner — Escape From Duckov Fan Wiki",
    seoDescription:
      "Plan Escape From Duckov raid loadouts and hideout goals: map, weapons, armor, extract focus, hideout upgrades, presets, shareable URL. Steam facts only — not a DPS cheat sheet.",
    h1: "Raid loadout + hideout planner",
    lead:
      "Pick a map slot, set a Steam-aligned raid or hideout focus, log primary / secondary / melee / armor slots, note hideout goals, and share via query URL. Named maps, weapon DPS, and hideout recipes are not published on Steam — we do not invent them.",
    leadImage: "/media/ss1.jpg",
    youtubeId: "SfFmZvfn_xQ",
    bullets: [
      "Steam loop: scavenge valuables → extract in time → sell / craft → upgrade hideout & gear → quests & stronger runs.",
      "Start as an Average Duck — ordinary stats, one basic gun (Steam about text).",
      "Five unique maps with shifting loot, enemies, and weather (Steam) — official map names Unknown on store.",
      "50+ weapons with an extensive mod system (Steam) — log names you confirm in-client; empty slots stay Unknown.",
      "Hideout / workbench / blueprint framing from Steam — upgrade priorities are player-logged, not a forged recipe sheet.",
      "Presets sketch session goals (first raid, extract-safe, blueprint hunt, hideout night, quest run) without inventing DPS.",
      "Not a damage cheat sheet: no forged DPS grids, drop rates, or skill-tree math.",
      "Copy link restores query state; Copy log pastes a plain-text summary for Discord/Steam chat.",
    ],
    sections: [
      {
        h2: "What Steam actually says",
        paragraphs: [
          "Escape From Duckov (Steam app 3167020) is a PVE indie survival RPG set in a duck’s world, developed by Team Soda and published by bilibili. The short description: scavenge for resources, build your hideout, and upgrade your gear — start from nothing and rise to the top; outwit hostile ducks, survive, or make it out alive.",
          "Store about text highlights five unique maps with ever-changing loot, elusive enemies, and shifting weather; extract in time or you might lose everything; scavenge meds, gear, and rare collectibles; sell for profit and upgrade your Base; workbench can turn scrap into treasure; over 50 weapons with an extensive mod system; blueprints for crafting; skill trees for ranged, melee, and character attributes; quests and NPCs across 50+ hours of single-playthrough content; Steam Workshop support.",
          "The store page does not publish a public map roster with official names, weapon DPS sheet, hideout upgrade tree with costs, or drop-rate tables. Third-party damage spreadsheets are outside this wiki’s scope — we will not republish them as official Team Soda data.",
        ],
      },
      {
        h2: "How to use this planner",
        paragraphs: [
          "Select a map slot (starter / map 2–5 / custom), optionally type a custom name you confirmed in-game, pick a session focus grounded in Steam about bullets, fill primary / secondary / melee / armor fields with names you actually own, set a hideout focus if this is a base night, add short notes (extract plan, quest name Unknown, Workshop caveat), then Copy link or Copy log.",
          "Presets only fill map + focus + a notes hint — they never invent weapon catalogs or DPS. Empty gear slots stay labeled Unknown. The query string keeps state shareable without accounts.",
        ],
      },
      {
        h2: "When to use presets",
        paragraphs: [
          "Use First raid — basic gun when you are still the Average Duck with one basic gun. Use Extract-safe scav when the priority is getting out with loot. Use Blueprint / craft night when Steam’s blueprint & workbench framing is the session goal. Use Hideout upgrade night when you are spending at Base. Use Quest / clue run when NPCs and quests are the focus.",
          "Presets are planning shortcuts only. Confirm live map names, weapon names, hideout module names, and prices in the client — this wiki does not invent them.",
        ],
      },
    ],
    related: [
      { href: "/guides/beginner", label: "Beginner guide" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About" },
      { href: "/", label: "Home" },
    ],
  },

  beginner: {
    slug: "beginner",
    path: "/guides/beginner",
    seoTitle: "Beginner Guide: First Raid, Extract, Hideout — Escape From Duckov",
    seoDescription:
      "Beginner guide for Escape From Duckov on Steam: first raid as Average Duck, extract habits, hideout loop, blueprints & mods, system requirements. Steam facts only — no DPS cheat sheet.",
    h1: "Escape From Duckov beginner guide",
    lead:
      "Wake in Duckov, leave the safety of your base, scavenge, and extract before you lose everything. First-session notes grounded in Steam — not a damage-number dump.",
    leadImage: "/media/ss0.jpg",
    youtubeId: "SfFmZvfn_xQ",
    bullets: [
      "Released Oct 16, 2025 on Steam (app 3167020). Developer: Team Soda. Publisher: bilibili. Windows and macOS listed.",
      "Single-player PVE survival RPG (Action, Adventure, Indie, RPG on Steam).",
      "Core loop from Steam: scavenge → extract → sell/craft → upgrade hideout & gear → quests → stronger runs.",
      "You start as an Average Duck — ordinary stats, one basic gun.",
      "Five unique maps; shifting loot, enemies, weather; extract in time or risk losing everything.",
      "50+ weapons with mods; blueprints; skill trees (ranged / melee / attributes) — exact trees Unknown on store.",
      "Exact map names, DPS, and hideout costs: Unknown on store — use the Raid Loadout + Hideout Planner as a log, not a cheat sheet.",
      "Minimum specs (Steam summary): Win 10, i7-9700 / Ryzen 5 5600 / Snapdragon X class, 8 GB RAM, GTX 1060 / RX 6500 XT / Adreno X1 class, DX11, 16 GB storage. macOS min: 15.6.1, Apple M3, 16 GB RAM.",
    ],
    tables: [
      {
        caption: "First-session priorities (Steam-aligned)",
        headers: ["Step", "What Steam frames", "Wiki habit"],
        rows: [
          [
            "1 · Leave base carefully",
            "Beyond the safety of your base, enemies lurk",
            "Treat night one as learning extract rhythm, not DPS farming",
          ],
          [
            "2 · Scavenge & extract",
            "Scavenge valuables; extract in time or lose everything",
            "Prioritize a clean extract over greed — log what you brought home",
          ],
          [
            "3 · Sell / craft",
            "Sell for profit; workbench can turn scrap into treasure",
            "Confirm prices & recipes in-client (Unknown on store)",
          ],
          [
            "4 · Hideout upgrades",
            "Build your hideout / upgrade your Base",
            "Log hideout focus in the planner — module names Unknown on store",
          ],
          [
            "5 · Gear & blueprints",
            "50+ weapons, mods, blueprints, skill trees",
            "Open raid-loadout and name only gear you own",
          ],
        ],
      },
    ],
    sections: [
      {
        h2: "Before you raid",
        paragraphs: [
          "Escape From Duckov is a PVE indie survival RPG (Action, Adventure, Indie, RPG on Steam). Install on 64-bit Windows 10+ meeting the published minimums (roughly Intel Core i7-9700 / AMD Ryzen 5 5600 / Snapdragon X, 8 GB RAM, GeForce GTX 1060 / Radeon RX 6500 XT / Qualcomm Adreno X1 class, DirectX 11, 16 GB storage). Recommended line on Steam steps up CPU/GPU and 16 GB RAM. macOS minimum lists OS 15.6.1, Apple M3, 16 GB RAM (recommended macOS block may be empty on the store — re-check Steam).",
          "Steam categories include Single-player, Steam Achievements (55 listed), Steam Trading Cards, Steam Workshop, Steam Cloud, and Family Sharing. Follow Steam’s Family Sharing and age rules for your region.",
        ],
      },
      {
        h2: "First-session priorities (raid loop)",
        paragraphs: [
          "Night one is the Average Duck economy loop, not a DPS spreadsheet. Steam framing: ordinary stats, one basic gun; scavenge meds, gear, and rare collectibles; extract in time; sell and upgrade your Base; use the workbench; collect blueprints; grow through skill trees.",
          "Soft expectation check: five maps with shifting loot, enemies, and weather mean no two expeditions are the same (Steam). Treat early raids as learning extract timing and what worth bringing home — not as a meta-table grind.",
          "When you own a weapon, mod, or armor piece worth naming, open the Raid Loadout + Hideout Planner and log it under the map you ran. Empty slots stay Unknown — never fill them with guesses from third-party DPS sheets.",
        ],
      },
      {
        h2: "Hideout & progression habits",
        paragraphs: [
          "Steam emphasizes building your hideout, upgrading your Base, crafting from blueprints, and expanding ranged / melee / attribute skill trees. Put tonight’s hideout goal in the planner’s hideout focus and notes fields so you remember what the extract was funding.",
          "Do not paste unverified DPS grids into the shared notes and treat them as official. If a friend insists on a third-party table, keep it labeled as community speculation outside this wiki’s Unknown rule.",
        ],
      },
      {
        h2: "What this wiki will not invent",
        paragraphs: [
          "No official weapon DPS or drop-rate tables, no forged map guides claimed as Team Soda data, no hideout “meta” cost lists pretending to be from the store, and no redeem codes. If Steam is silent, we mark it Unknown. Prefer the live Steam page and in-client UI when something conflicts with an older wiki sentence.",
        ],
      },
    ],
    related: [
      { href: "/tools/raid-loadout", label: "Raid loadout + hideout planner" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy" },
    ],
  },

  about: {
    slug: "about",
    path: "/about",
    seoTitle: "About This Unofficial Fan Wiki — Escape From Duckov",
    seoDescription:
      "About this unofficial Escape From Duckov fan wiki: Steam-first facts, Raid Loadout + Hideout Planner, no invented DPS tables. Not affiliated with Team Soda, bilibili, or Valve.",
    h1: "About this unofficial Escape From Duckov fan wiki",
    lead:
      "Unofficial English fan site for Escape From Duckov (Steam app 3167020). Tool-first: Raid Loadout + Hideout Planner with shareable URL state. Not affiliated with Team Soda, bilibili, or Valve.",
    leadImage: "/media/ss4.jpg",
    bullets: [
      "Facts checked against the public Steam store page (app 3167020) only.",
      "Unpublished recipes, stats, and DPS tables are labeled Unknown — never invented as official.",
      "Differentiates from damage cheat sheets: we plan raid + hideout slots, not forge DPS math.",
      "Media: Steam header/screenshots for documentation + youtube-nocookie embeds of public trailers.",
      "EN only for v1 — lean indexable page set (home, tool, beginner, FAQ, about, privacy).",
      "Optional Google Analytics via NEXT_PUBLIC_GA_ID; no Adsterra on v1.",
    ],
    sections: [
      {
        h2: "Editorial rules",
        paragraphs: [
          "When Steam is silent, we say so. Prefer the live store page and client when something conflicts with an older wiki sentence. Snapshot language (recommendation counts, trailer IDs) carries an as-of note where useful.",
          "Home, Raid Loadout + Hideout Planner, beginner guide, FAQ, privacy, and about form the v1 map. We may expand guides later without fabricating databases.",
          "Screenshots and header art are from Steam store assets for identification; trademarks belong to their owners. Trailers embedded via youtube-nocookie point at public uploads — Steam also hosts studio trailers on the store page.",
        ],
      },
      {
        h2: "Not official support",
        paragraphs: [
          "This wiki is not Team Soda or bilibili player support and not a Valve help desk. Purchases, refunds, Family Sharing, and client issues go through Steam. Developer communications belong on Team Soda / bilibili official channels and the Steam hub for app 3167020.",
        ],
      },
    ],
    related: [
      { href: "/tools/raid-loadout", label: "Raid loadout + hideout planner" },
      { href: "/guides/beginner", label: "Beginner guide" },
      { href: "/privacy", label: "Privacy" },
      { href: "/faq", label: "FAQ" },
      { href: "/", label: "Home" },
    ],
  },

  privacy: {
    slug: "privacy",
    path: "/privacy",
    seoTitle: "Privacy Policy for This Fan Wiki — Escape From Duckov",
    seoDescription:
      "Privacy policy for the unofficial Escape From Duckov fan wiki. No accounts; loadout state stays in the URL; optional Google Analytics via NEXT_PUBLIC_GA_ID; no Adsterra on v1.",
    h1: "Privacy policy for this fan wiki",
    lead:
      "No user accounts. Raid Loadout + Hideout Planner state lives in the page URL on your device. We do not run a DPS backend or collect Steam credentials.",
    leadImage: "/media/ss3.jpg",
    bullets: [
      "No login, player profiles, payments, or redeem-code forms on this wiki.",
      "Planner selections (map, weapons, armor, focus, hideout, notes) stay in the browser address bar so you can share links — not uploaded to a wiki database.",
      "If NEXT_PUBLIC_GA_ID is configured, Google Analytics may collect standard usage metrics. Leave the env empty to disable analytics scripts.",
      "No Adsterra (or other ad network) scripts on v1.",
      "Steam / YouTube (youtube-nocookie) links leave this site — their policies apply there.",
      "Hosting is on Vercel; infrastructure logs may apply under Vercel’s privacy terms.",
    ],
    sections: [
      {
        h2: "What we collect",
        paragraphs: [
          "Raid Loadout + Hideout Planner state is encoded in query parameters (map, mname, primary, secondary, melee, armor, focus, hideout, notes). Anyone you send the link to can read those values — do not put passwords, payment data, or personal identifiers in notes.",
          "If analytics are enabled via NEXT_PUBLIC_GA_ID, Google’s scripts may set cookies or collect usage metrics under Google’s policies. Essential hosting cookies may come from the deployment platform (Vercel).",
        ],
      },
      {
        h2: "Third parties",
        paragraphs: [
          "Steam store links go to Valve. Embedded YouTube trailers use youtube-nocookie embeds; Steam CDN may serve linked store media. This site is not affiliated with Team Soda, bilibili, or Valve. For the game’s privacy practices, use Steam / official channels.",
        ],
      },
      {
        h2: "Contact",
        paragraphs: [
          "See About for wiki scope. For account, refund, or client issues, use Steam support — this fan wiki is not a help desk.",
        ],
      },
    ],
    related: [
      { href: "/about", label: "About" },
      { href: "/tools/raid-loadout", label: "Raid loadout + hideout planner" },
      { href: "/", label: "Home" },
    ],
  },

  faq: {
    slug: "faq",
    path: "/faq",
    seoTitle: "FAQ: Platforms, Loadouts, DPS, Workshop — Escape From Duckov Wiki",
    seoDescription:
      "FAQ for Escape From Duckov: Windows/macOS, why no DPS tables, how URL loadouts work, hideout planner, Workshop, system requirements. Steam facts only.",
    h1: "Escape From Duckov FAQ",
    lead:
      "Short answers grounded in the Steam store page for Escape From Duckov (app 3167020) — platforms, Unknown data, and how this wiki’s planner differs from damage cheat sheets.",
    leadImage: "/media/ss2.jpg",
    bullets: [
      "Windows and macOS on Steam platforms list.",
      "Single-player PVE (no multiplayer category on store snapshot).",
      "Released Oct 16, 2025 (Steam release_date).",
      "Developer: Team Soda · Publisher: bilibili.",
      "Weapon DPS / drop tables: Unknown on store — we will not invent them.",
      "Loadouts share via /tools/raid-loadout query URL — no accounts.",
      "Steam Workshop + 55 achievements listed on store.",
    ],
    sections: [
      {
        h2: "Is this the official wiki?",
        paragraphs: [
          "No. Unofficial fan wiki. Not affiliated with Team Soda, bilibili, or Valve. Prefer Steam and official channels for news, patches, and support.",
        ],
      },
      {
        h2: "Why no DPS / damage cheat sheets?",
        paragraphs: [
          "The Steam store does not publish an official weapon DPS encyclopedia, drop-rate sheet, or hideout cost tree. Cloning third-party damage grids as “official” would invent data. Our Raid Loadout + Hideout Planner logs gear and goals instead — player-confirmed names only, with Unknown labels for empty or unpublished fields.",
        ],
      },
      {
        h2: "How do I share a loadout?",
        paragraphs: [
          "Open /tools/raid-loadout, pick a map (and optional raid/hideout focus), fill primary / secondary / melee / armor if known, add notes, then Copy link (URL only) or Copy log (plain text + URL). The query string carries map, mname, primary, secondary, melee, armor, focus, hideout, and notes. Paste the same link to restore the plan.",
        ],
      },
      {
        h2: "Platforms, players, and Workshop?",
        paragraphs: [
          "Steam lists Windows and macOS. Categories include Single-player, Steam Achievements, Steam Trading Cards, Steam Workshop, Steam Cloud, and Family Sharing (plus accessibility-related category labels on the store). Confirm live store categories if they change after this snapshot.",
        ],
      },
      {
        h2: "System requirements?",
        paragraphs: [
          "Steam Windows minimum (summary): Windows 10, 64-bit; CPU intel Core i7-9700 / AMD Ryzen 5 5600 / Snapdragon X; 8 GB RAM; NVIDIA GeForce GTX 1060 / AMD Radeon RX 6500 XT / Qualcomm Adreno X1; DirectX 11; 16 GB storage. Recommended: higher CPU/GPU tier and 16 GB RAM. macOS minimum: OS 15.6.1, Apple M3, 16 GB RAM. Re-check Steam for updates.",
        ],
      },
      {
        h2: "Price / languages?",
        paragraphs: [
          "Store snapshot price was $17.99 USD (subject to regional pricing and sales). Supported languages on Steam include Simplified Chinese, English, Traditional Chinese, Japanese, German, Russian, Spanish - Latin America, Korean, French, and Portuguese - Brazil (interface + subtitles framing on store). Confirm the live store for your region.",
        ],
      },
    ],
    related: [
      { href: "/tools/raid-loadout", label: "Raid loadout + hideout planner" },
      { href: "/guides/beginner", label: "Beginner guide" },
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
};
