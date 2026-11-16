// The texts of the site's own pages in one language, from
// src/content/pages/<language>/site.yaml (the schema is in src/content.config.ts).

import { getEntry } from "astro:content";
import type { Lang } from "../i18n";

export async function pageTexts(lang: Lang) {
  const entry = await getEntry("pages", `${lang}/site`);
  if (!entry) throw new Error(`src/content/pages/${lang}/site.yaml is missing.`);
  return entry.data;
}

export type PageTexts = Awaited<ReturnType<typeof pageTexts>>;
