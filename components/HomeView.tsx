import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HEADER_IMAGE, STEAM_URL, YOUTUBE } from "@/lib/site";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { AdsterraNative } from "@/components/AdsterraNative";

export async function HomeView() {
  const t = await getTranslations("home");
  const common = await getTranslations("common");

  const stats = [
    t("statRelease"),
    t("statGenre"),
    t("statPlayers"),
    t("statPlatform"),
  ];

  const scanBullets = [
    t("scan1"),
    t("scan2"),
    t("scan3"),
    t("scan4"),
    t("scan5"),
    t("scan6"),
  ];

  const cards = [
    {
      href: "/tools/raid-loadout" as const,
      title: t("cardLoadoutTitle"),
      body: t("cardLoadoutBody"),
      image: "/media/ss1.jpg",
    },
    {
      href: "/guides/beginner" as const,
      title: t("cardBeginnerTitle"),
      body: t("cardBeginnerBody"),
      image: "/media/ss0.jpg",
    },
    {
      href: "/guides/system-requirements" as const,
      title: t("cardSpecsTitle"),
      body: t("cardSpecsBody"),
      image: "/media/ss3.jpg",
    },
    {
      href: "/guides/extract-and-hideout" as const,
      title: t("cardExtractTitle"),
      body: t("cardExtractBody"),
      image: "/media/ss2.jpg",
    },
    {
      href: "/guides/workshop-and-mods" as const,
      title: "Workshop & mods",
      body: "Steam Workshop support framing — no forged mod catalogs or DPS sheets.",
      image: "/media/ss3.jpg",
    },
    {
      href: "/guides/weapons-and-blueprints" as const,
      title: "Weapons & blueprints",
      body: "50+ weapons, mods, blueprints from Steam about text — log only what you own.",
      image: "/media/ss1.jpg",
    },
    {
      href: "/faq" as const,
      title: t("cardFaqTitle"),
      body: t("cardFaqBody"),
      image: "/media/ss2.jpg",
    },
    {
      href: "/about" as const,
      title: t("cardAboutTitle"),
      body: t("cardAboutBody"),
      image: "/media/ss4.jpg",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={HEADER_IMAGE}
            alt="Escape From Duckov"
            fill
            priority
            className="object-cover object-center opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,160,32,0.14),transparent_45%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-banana">
            {common("eyebrow")}
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            {t("h1")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/90">
            {t("pitch")}
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{t("pitch2")}</p>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-lg border border-line/80 bg-panel/80 px-3 py-3 text-sm font-medium backdrop-blur"
              >
                {stat}
              </div>
            ))}
          </dl>
          <ul className="mt-8 max-w-3xl space-y-2.5 rounded-xl border border-banana/35 bg-panel/75 px-5 py-5 backdrop-blur">
            {scanBullets.map((b) => (
              <li
                key={b.slice(0, 40)}
                className="flex gap-3 text-sm leading-6 text-foreground/95"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-banana"
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tools/raid-loadout"
              className="rounded-full bg-banana px-5 py-2.5 text-sm font-semibold text-background hover:brightness-110"
            >
              {t("ctaLoadout")}
            </Link>
            <Link
              href="/guides/beginner"
              className="rounded-full border border-banana px-5 py-2.5 text-sm font-semibold text-banana hover:bg-panel/80"
            >
              {t("ctaBeginner")}
            </Link>
            <a
              href={STEAM_URL}
              className="rounded-full bg-fuse px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("ctaSteam")}
            </a>
          </div>
        </div>
      </section>

      <AdsterraNative className="px-4" />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">{t("startHere")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group overflow-hidden rounded-xl border border-line bg-panel transition hover:border-banana/60 hover:shadow-[0_0_30px_rgba(240,160,32,0.08)]"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-banana">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{card.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel-2/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">{common("watchTrailer")}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            {t("trailerHint")}
          </p>
          <div className="mt-6">
            <YouTubeEmbed
              videoId={YOUTUBE.releaseTrailer}
              title={common("watchTrailer")}
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            {t("trailerAlt")}{" "}
            <a
              href={`https://www.youtube.com/watch?v=${YOUTUBE.gameplayTrailer}`}
              className="font-semibold text-banana underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("trailerGameplayLink")}
            </a>
            {" · "}
            <a
              href={STEAM_URL}
              className="font-semibold text-banana underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("trailerSteamLink")}
            </a>
          </p>
        </div>
      </section>

      <ScreenshotGallery
        title={common("screenshots")}
        hint={common("galleryHint")}
      />


      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">{t("aboutGame")}</h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {(
            [
              ["dev", "devValue"],
              ["pub", "pubValue"],
              ["platforms", "platformsValue"],
              ["genre", "genreValue"],
              ["reviews", "reviewsValue"],
              ["coop", "coopValue"],
            ] as const
          ).map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-line bg-panel px-5 py-4"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {t(k)}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-foreground">{t(v)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">{t("features")}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-label="Escape From Duckov guide overview">
        <h2 className="text-2xl font-semibold">
          Escape From Duckov, explained for new raiders
        </h2>
        <div className="mt-6 space-y-5 text-sm leading-7 text-foreground/90">
          <p>
            Escape From Duckov is a top-down extraction shooter on Steam
            where you raid as an Average Duck — ordinary stats, one basic
            gun — and try to come home richer than you left. The official
            loop: scavenge valuables, extract in time, sell or craft,
            upgrade your hideout and gear, and take on quests for
            stronger runs. Every fact on this page comes from the Steam
            listing; exact loot tables, drop rates, and DPS grids are not
            published, so this wiki logs what you confirm in-client
            instead of forging cheat sheets.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            The raid loop, in order
          </h3>
          <p>
            Extraction shooters punish heroes, and Duckov is no
            exception. The winning rhythm follows the official loop:
            enter quietly, scavenge what is genuinely valuable, watch the
            clock, and extract on time — an Average Duck who leaves with
            something beats a greedy duck who leaves with nothing. Sell
            or craft between raids, then pour the profit into hideout
            upgrades and gear that make the next run safer, not just
            louder. Quests layer long-term goals over the loop and give
            shape to session planning.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Five maps that never sit still
          </h3>
          <p>
            Steam lists five unique maps with shifting loot, enemies, and
            weather. That shifting is the difficulty curve: no memorized
            route stays safe forever, and weather changes what a raid
            even looks like. The official map names are not published on
            the store — the wiki keeps them Unknown rather than guessing
            — but the loadout planner lets you log what you found, where,
            and in what weather, building a personal intel file that is
            actually yours.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            50+ weapons and the mod system
          </h3>
          <p>
            The arsenal is deep — Steam lists 50+ weapons with an
            extensive mod system — but names, stats, and attachments
            should be confirmed in-client before you trust any list,
            including community ones. The workbench framing from Steam
            covers crafting and upgrades; upgrade priorities are
            player-logged here, not a forged recipe sheet. Start with
            what your first gun does well, and let mods fix felt problems
            rather than chasing a meta someone invented.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            The hideout is the real progression
          </h3>
          <p>
            Between raids, the hideout is where an Average Duck becomes
            something tougher: workbench, blueprints, and upgrades form
            the permanent backbone the official description builds on.
            The Raid Loadout + Hideout Planner on this site sketches
            session goals — first raid, extract-safe, blueprint hunt,
            hideout night, quest run — with shareable presets and a
            plain-text log you can paste into Discord or Steam chat.
            Start with the beginner guide, plan the raid, and extract
            with something.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            The extract-safe checklist
          </h3>
          <p>
            Before every raid, run the same five checks: know which exit
            you are walking toward, know what the weather is doing to
            visibility and sound, carry only what you can afford to
            lose, keep the timer in your head rather than on your
            screen-edge, and quit while you are ahead — the official
            loop rewards the duck who banks loot, not the duck who
            rerolls a good run into a bad one. Print that habit into
            your presets and extraction stops being the scary part of
            the game; it becomes the whole point, exactly as the
            description intends.
          </p>
        </div>
      </section>
    </div>
  );
}