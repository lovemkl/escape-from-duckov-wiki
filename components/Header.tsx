import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { STEAM_URL } from "@/lib/site";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/tools/raid-loadout" as const, key: "loadout" },
  { href: "/guides/beginner" as const, key: "beginner" },
  { href: "/faq" as const, key: "faq" },
  { href: "/about" as const, key: "about" },
];

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-banana"
        >
          <Logo className="h-8 w-8 shrink-0" />
          <span className="font-semibold tracking-tight">Duckov Wiki</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-banana"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={STEAM_URL}
            className="hidden rounded-full bg-fuse px-3 py-1.5 text-xs font-semibold text-white hover:brightness-110 sm:inline-block"
            rel="noopener noreferrer"
          >
            {t("play")}
          </a>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded border border-line px-2 py-1 text-xs text-muted">
              {t("menu")}
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-lg border border-line bg-panel p-2 shadow-xl">
              {LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded px-2 py-1.5 text-sm text-foreground hover:bg-panel-2"
                >
                  {t(item.key)}
                </Link>
              ))}
              <a
                href={STEAM_URL}
                className="mt-1 block rounded px-2 py-1.5 text-sm text-banana"
                rel="noopener noreferrer"
              >
                {t("play")}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
