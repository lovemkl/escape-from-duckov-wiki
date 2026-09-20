import Image from "next/image";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { WikiArticle } from "@/content/types";
import { STEAM_URL } from "@/lib/site";
import { AdsterraNative } from "@/components/AdsterraNative";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

type Props = {
  article: WikiArticle;
  fallbackEnglish?: boolean;
  children?: ReactNode;
};

export async function ArticleView({ article, fallbackEnglish, children }: Props) {
  const t = await getTranslations("common");

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      {fallbackEnglish ? (
        <p className="mb-4 rounded border border-line bg-panel px-3 py-2 text-sm text-muted">
          {t("englishNotice")}
        </p>
      ) : null}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-banana">
        {t("eyebrow")}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {article.h1}
      </h1>
      <p className="mt-5 text-lg leading-8 text-foreground/90">{article.lead}</p>

      {article.leadImage ? (
        <figure className="mt-8 overflow-hidden rounded-xl border border-line bg-panel">
          <Image
            src={article.leadImage}
            alt=""
            width={1920}
            height={1080}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </figure>
      ) : null}

      {article.bullets && article.bullets.length > 0 ? (
        <ul className="mt-8 space-y-3 rounded-xl border border-banana/40 bg-panel px-5 py-5">
          {article.bullets.map((b) => (
            <li key={b.slice(0, 48)} className="flex gap-3 text-sm leading-6 text-foreground">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-banana" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {article.tables?.map((table) => (
        <div key={table.caption ?? table.headers.join("-")} className="mt-8 overflow-x-auto rounded-xl border border-line">
          {table.caption ? (
            <p className="border-b border-line bg-panel-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-banana">
              {table.caption}
            </p>
          ) : null}
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-panel-2 text-xs uppercase tracking-wide text-muted">
              <tr>
                {table.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-line">
                  {row.map((cell, i) => (
                    <td key={`${row[0]}-${i}`} className="px-4 py-3 text-foreground/90">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {article.youtubeId ? (
        <div className="mt-8">
          <YouTubeEmbed videoId={article.youtubeId} title={article.h1} />
        </div>
      ) : null}

      <AdsterraNative />

      {children ? <div className="mt-10">{children}</div> : null}

      {article.sections.map((section) => (
        <section key={section.h2} className="mt-10">
          <h2 className="text-2xl font-semibold text-banana">{section.h2}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="mt-4 leading-7 text-muted">
              {p}
            </p>
          ))}
        </section>
      ))}

      {article.related.length > 0 ? (
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="text-xl font-semibold">{t("related")}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {article.related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg border border-line bg-panel px-4 py-3 text-sm hover:border-banana"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <p className="mt-10 text-xs text-muted">{t("updated")}</p>
      <p className="mt-4">
        <a
          href={STEAM_URL}
          className="inline-flex rounded-full bg-banana px-4 py-2 text-sm font-semibold text-background hover:brightness-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("steamCta")}
        </a>
      </p>
    </article>
  );
}
