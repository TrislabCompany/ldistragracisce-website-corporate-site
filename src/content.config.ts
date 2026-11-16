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
// lodge, game damage, membership, documents, contact and the extra sections of
// the hunting-tourism page): src/content/pages/<language>/site.yaml, one file
// per language. The schema makes every language carry every text. A fact taken
// from an outside source names it in `sources` (shown by SourceList.astro).
const text = z.string().min(1);
const section = z.object({ heading: text, paragraphs: z.array(text).min(1) });
const link = z.object({ label: text, url: z.string().url() });
const sources = z.array(link).min(1);
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
    /** The heading of the list of sources at the foot of a page. */
    sourcesHeading: text,
    /** The club's referent for hunting tourism (name and phone: src/lib/contacts.ts). */
    tourismContact: z.object({ heading: text, role: text, text }),
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
      /** Before the offers: the hunting ground for guests and the stay in the lodge. */
      sections: z.array(section).min(1),
      offersHeading: text,
      seasonsHeading: text,
      seasonsIntro: text,
      seasonColumns: z.object({ species: text, season: text }),
      /** Per Uredba o določitvi divjadi in lovnih dob, as gov.si sums it up (in sources). */
      seasons: z.array(z.object({ species: text, season: text })).min(1),
      needsHeading: text,
      needs: z.array(text).min(1),
      /** The permit for hunting guests (Pravilnik o dovolilnici za lovske goste). */
      permit: section,
      enquireHeading: text,
      enquireText: text,
      sources,
    }),
    huntingLodge: z.object({
      lead: text,
      sections: z.array(section).min(1),
      featuresHeading: text,
      features: z.array(text).min(1),
      tourismHeading: text,
      tourismText: text,
    }),
    gameDamage: z.object({
      lead: text,
      /** Game (lovna divjad) or a protected species (zavarovana vrsta): who answers for the damage. */
      kindsHeading: text,
      kindsIntro: text,
      kinds: z.array(z.object({ heading: text, text, species: text })).length(2),
      reportHeading: text,
      reportIntro: text,
      steps: z.array(text).min(1),
      formsText: text,
      protectedHeading: text,
      protectedIntro: text,
      protectedSteps: z.array(text).min(1),
      nonHunting: section,
      compensationHeading: text,
      compensationIntro: text,
      compensation: z.array(text).min(1),
      compensationNote: text,
      protectHeading: text,
      protectIntro: text,
      measures: z.array(text).min(1),
      maintenance: text,
      stewardship: text,
      sources,
    }),
    membership: z.object({
      lead: text,
      requirementsHeading: text,
      requirementsIntro: text,
      requirements: z.array(text).min(1),
      examHeading: text,
      examIntro: text,
      /** After Lovska zveza Slovenije, "Kako postati lovec" (in sources). */
      examSteps: z.array(z.object({ heading: text, text })).min(1),
      examNote: text,
      applyHeading: text,
      applyText: text,
      sources,
    }),
    documents: z.object({
      lead: text,
      /** Every document links to its file; one without a file is not listed. */
      groups: z
        .array(
          z.object({
            heading: text,
            items: z.array(z.object({ title: text, meta: text, href: z.string().url() })).min(1),
          }),
        )
        .min(1),
    }),
    contact: z.object({
      lead: text,
      officersHeading: text,
      officersText: text,
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
