import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { seoFields } from "./components/seo/fields";

// Content is kept per language: src/content/<collection>/<language>/<name>.md.
// The same file name in two languages is the same item translated; its id is
// "<language>/<name>" (src/lib/content.ts splits it). The language of the
// source text and the others, as drafts from it, are the site's choice.

// One page per item: /<lang>/<collection>/<name>. A list of items is a
// collection here and an entry in `collections` in src/site.config.ts, under
// the same id. To add another list (news, products, cases...), copy a block,
// give it its id, add it to `collections` below and to src/site.config.ts. Add
// fields to the schema as the items need them: a date, an image, a category.
// The search fields (a search title, a share image, noindex) are in seoFields.
const huntingTourism = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hunting-tourism" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      /** Position in lists, lowest first. */
      order: z.number().int(),
      tags: z.array(z.string()).default([]),
      ...seoFields(image),
    }),
});


// The texts of the site's own pages (home, about, hunting ground, the hunting
// lodge, game damage, membership, gallery, documents, contact and the extra
// sections of the hunting-tourism page): src/content/pages/<language>/site.yaml,
// one file per language. The schema makes every language carry every text.
// A text marked "pending" is shown in a dashed placeholder box until the club
// has supplied the content (src/components/Placeholder.astro).
const text = z.string().min(1);
const section = z.object({ heading: text, paragraphs: z.array(text).min(1) });
const species = ["red-deer", "roe-deer", "wild-boar", "hare", "fox", "badger", "partridge", "pheasant"] as const;

const pages = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/pages" }),
  schema: z.object({
    /** Alternative text of the photos, per photo. A placeholder photo says it is one. */
    alt: z.object({
      hero: text,
      about: text,
      huntingGround: text,
      huntingTourism: text,
      huntingLodge: text,
      lodgeInterior: text,
      gameDamage: text,
      membership: text,
      bandForest: text,
      bandKarst: text,
    }),
    /** The label of a placeholder box and the note on facts still to be confirmed. */
    pendingLabel: text,
    home: z.object({
      heroText: text,
      numbersHeading: text,
      /** Four figures of the hunting ground; each is cited in numbersSource. */
      numbers: z.array(z.object({ value: text, label: text })).length(4),
      numbersSource: text,
      waysHeading: text,
      ways: z.object({ huntingGround: text, huntingTourism: text, huntingLodge: text }),
      tourismHeading: text,
      tourismText: text,
      tourismSeasons: text,
      localHeading: text,
      local: z.object({ gameDamage: text, membership: text }),
      contactHeading: text,
      contactText: text,
    }),
    about: z.object({
      lead: text,
      sections: z.array(section).min(1),
      officersHeading: text,
      officersText: text,
      /** Officer roles only, never a person's name (docs/brief.md). */
      officers: z.array(text).min(1),
      clubHeading: text,
    }),
    huntingGround: z.object({
      lead: text,
      sections: z.array(section).min(1),
      speciesHeading: text,
      speciesIntro: text,
      species: z.array(z.object({ id: z.enum(species), name: text, latin: text, text, alt: text })).length(species.length),
      management: section,
    }),
    huntingTourism: z.object({
      offersHeading: text,
      seasonsHeading: text,
      seasonsIntro: text,
      seasonColumns: z.object({ species: text, season: text }),
      /** From today's site; to be confirmed with the club before production. */
      seasons: z.array(z.object({ species: text, season: text })).min(1),
      seasonsPending: text,
      needsHeading: text,
      needs: z.array(text).min(1),
      needsPending: text,
      enquireHeading: text,
      enquireText: text,
    }),
    huntingLodge: z.object({
      lead: text,
      sections: z.array(section).min(1),
      featuresHeading: text,
      features: z.array(text).min(1),
      pending: text,
    }),
    gameDamage: z.object({
      lead: text,
      reportHeading: text,
      reportIntro: text,
      steps: z.array(text).min(1),
      protectHeading: text,
      protectIntro: text,
      measures: z.array(text).min(1),
      maintenance: text,
    }),
    membership: z.object({
      lead: text,
      requirementsHeading: text,
      requirementsIntro: text,
      requirements: z.array(text).min(1),
      examHeading: text,
      examIntro: text,
      examSteps: z.array(text).min(1),
      applyHeading: text,
      applyText: text,
    }),
    gallery: z.object({ lead: text, pending: text }),
    documents: z.object({
      lead: text,
      pending: text,
      /** The documents the club will supply; shown without a file until they arrive. */
      items: z.array(z.object({ title: text, meta: text })).min(1),
    }),
    contact: z.object({
      lead: text,
      officersHeading: text,
      officersText: text,
      phonePending: text,
    }),
  }),
});

// The texts of the privacy policy, the accessibility statement and the
// sustainability page: src/content/legal/<language>/privacy.md,
// accessibility.md and sustainability.md. The imprint is built from
// src/site.config.ts. The pages show no date: no law asks for one, and a date
// that is not kept up to date does more harm than good.
const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { "hunting-tourism": huntingTourism, pages, legal };
