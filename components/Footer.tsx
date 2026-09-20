import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { STEAM_URL } from "@/lib/site";

const LINKS = [
  { href: "/tools/raid-loadout" as const, key: "loadout" },
  { href: "/guides/beginner" as const, key: "beginner" },
  { href: "/faq" as const, key: "faq" },
  { href: "/about" as const, key: "about" },
  { href: "/privacy" as const, key: "privacy" },
];

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="mt-auto border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-semibold text-banana">Escape From Duckov Fan Wiki</p>
          <p className="mt-2 text-sm text-muted">{t("blurb")}</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
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
        <div className="text-sm text-muted">
          <a
            href={STEAM_URL}
            className="font-medium text-banana"
            rel="noopener noreferrer"
          >
            {t("steam")}
          </a>
          <p className="mt-3 leading-relaxed">{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
