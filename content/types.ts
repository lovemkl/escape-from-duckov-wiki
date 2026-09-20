export type WikiSection = {
  h2: string;
  paragraphs: string[];
};

export type WikiTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type WikiArticle = {
  slug: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  sections: WikiSection[];
  related: { href: string; label: string }[];
  leadImage?: string;
  youtubeId?: string;
  bullets?: string[];
  tables?: WikiTable[];
  /** When true: robots noindex and omit from sitemap. */
  noindex?: boolean;
};

export type ArticleMap = Record<string, WikiArticle>;
