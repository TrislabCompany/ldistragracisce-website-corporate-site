// The site's own facts, read at build time: languages, company, contact,
// legal pages, lists of items, structured data and security.txt. Change the
// values here; the shape is in src/lib/site-settings.ts. Nothing here is
// secret: it all ends up in the public pages. Values that differ per
// Environment go to /config.json instead (src/lib/config.ts).
// First written by `pnpm init-site` from site.yaml; from then on it is the
// site's own.

import type { SiteSettings } from "./lib/site-settings";

/** The site's languages. With one language, the URLs have no language prefix. */
export const languages = ["sl", "en", "hr", "sr", "it", "de"] as const;
export type Lang = (typeof languages)[number];

const site: SiteSettings<Lang> = {
  url: "https://ldistragracisce.si",
  name: "Lovska družina Istra Gračišče",
  description: {
    sl: "Lovska družina Istra Gračišče upravlja lovišče v slovenski Istri. Predstavljamo lovišče, divjad, lovski turizem, lovski dom in članstvo.",
    en: "The hunting club Istra Gračišče manages a hunting ground in Slovenian Istria. Discover the ground, its game, hunting tourism, the hunting lodge and membership.",
    hr: "Lovačko društvo Istra Gračišče upravlja lovištem u slovenskoj Istri. Upoznajte lovište, divljač, lovni turizam, lovački dom i članstvo.",
    sr: "Lovačko društvo Istra Gračišče upravlja lovištem u slovenačkoj Istri. Upoznajte lovište, divljač, lovni turizam, lovački dom i članstvo.",
    it: "La società venatoria Istra Gračišče gestisce una riserva di caccia nell'Istria slovena. Scoprite la riserva, la selvaggina, il turismo venatorio, la casa di caccia e l'adesione.",
    de: "Die Jagdgesellschaft Istra Gračišče betreut ein Jagdrevier im slowenischen Istrien. Entdecken Sie das Revier, das Wild, den Jagdtourismus, die Jagdhütte und die Mitgliedschaft."
  },
  languages: languages,
  defaultLanguage: "sl",
  themeColor: "#ffffff",
  collections: [
    {
      id: "hunting-tourism",
      title: {
        sl: "Lovski turizem",
        en: "Hunting tourism",
        hr: "Lovni turizam",
        sr: "Lovni turizam",
        it: "Turismo venatorio",
        de: "Jagdtourismus"
      },
      lead: {
        sl: "Lov na srnjad in divjega prašiča v slovenski Istri, z vodenjem lovcev naše družine.",
        en: "Roe deer and wild boar hunting in Slovenian Istria, guided by the club's hunters.",
        hr: "Lov na srnu i divlju svinju u slovenskoj Istri, uz vodstvo lovaca našeg društva.",
        sr: "Lov na srnu i divlju svinju u slovenačkoj Istri, uz vođenje lovaca našeg društva.",
        it: "Caccia al capriolo e al cinghiale nell'Istria slovena, accompagnati dai cacciatori della nostra società.",
        de: "Jagd auf Rehwild und Schwarzwild im slowenischen Istrien, begleitet von den Jägern unserer Gesellschaft."
      },
      nav: true,
      home: true
    }
  ],
  company: {
    name: "Lovska družina Istra Gračišče",
    legalName: "Lovska družina Istra Gračišče",
    address: {
      street: "Gračišče 40",
      postalCode: "6272",
      city: "Gračišče",
      country: "SI"
    },
    logo: "/favicon.svg",
    profiles: []
  },
  contact: {
    topics: [
      {
        email: "ld.istra.gracisce@gmail.com",
        label: {
          sl: "Splošne informacije, lovski turizem in članstvo",
          en: "General information, hunting tourism and membership",
          hr: "Opće informacije, lovni turizam i članstvo",
          sr: "Opšte informacije, lovni turizam i članstvo",
          it: "Informazioni generali, turismo venatorio e adesione",
          de: "Allgemeine Informationen, Jagdtourismus und Mitgliedschaft"
        }
      }
    ],
    mapUrl: "https://www.google.com/maps?q=Gra%C4%8Di%C5%A1%C4%8De+40,+6272+Gra%C4%8Di%C5%A1%C4%8De,+Slovenia"
  },
  legalPages: {
    imprint: true,
    privacy: true,
    accessibility: false,
    sustainability: true
  },
  structuredData: "Organization",
  securityTxt: {
    contact: "mailto:info@trislab.com",
    expires: "2027-11-11T13:38:06.594Z"
  }
};

export default site;
