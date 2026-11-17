// The site's own facts, read at build time: languages, company, contact,
// legal pages, lists of items, structured data and security.txt. Change the
// values here; the shape is in src/lib/site-settings.ts. Nothing here is
// secret: it all ends up in the public pages. Values that differ per
// Environment go to /config.json instead (src/lib/config.ts).
// First written by `pnpm init-site` from site.yaml; from then on it is the
// site's own.

import shareImage from "./assets/photos/share.jpg";
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
  // A placeholder until a photo of the hunting ground is chosen (docs/brief.md, Assets).
  shareImage: {
    src: shareImage,
    alt: {
      sl: "Začasna slika: risba gričev slovenske Istre ob mraku",
      en: "Temporary image: a drawing of the hills of Slovenian Istria at dusk",
      hr: "Privremena slika: crtež brežuljaka slovenske Istre u sumrak",
      sr: "Privremena slika: crtež brežuljaka slovenačke Istre u sumrak",
      it: "Immagine provvisoria: disegno delle colline dell'Istria slovena al tramonto",
      de: "Vorläufiges Bild: Zeichnung der Hügel des slowenischen Istrien in der Abenddämmerung"
    }
  },
  themeColor: "#004720",
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
        sl: "Lov na jelenjad, srnjad in divjega prašiča v slovenski Istri, z vodenjem lovcev naše družine in prenočiščem v lovskem domu.",
        en: "Red deer, roe deer and wild boar hunting in Slovenian Istria, guided by the club's hunters, with a stay in the hunting lodge.",
        hr: "Lov na jelena, srnu i divlju svinju u slovenskoj Istri, uz vodstvo lovaca našeg društva i noćenje u lovačkom domu.",
        sr: "Lov na jelena, srnu i divlju svinju u slovenačkoj Istri, uz vođenje lovaca našeg društva i noćenje u lovačkom domu.",
        it: "Caccia al cervo, al capriolo e al cinghiale nell'Istria slovena, accompagnati dai cacciatori della nostra società, con pernottamento nella casa di caccia.",
        de: "Jagd auf Rot-, Reh- und Schwarzwild im slowenischen Istrien, begleitet von den Jägern unserer Gesellschaft, mit Übernachtung in der Jagdhütte."
      },
      // The header and the home page link it themselves (src/components/Header.astro, src/pages/[...lang]/index.astro).
      nav: false,
      home: false
    }
  ],
  company: {
    name: "Lovska družina Istra Gračišče",
    legalName: "Lovska družina Istra Gračišče",
    address: {
      street: "Trebeše 40",
      postalCode: "6272",
      city: "Gračišče",
      country: "SI"
    },
    logo: "/logo.png",
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
    mapUrl: "https://www.google.com/maps?q=Trebe%C5%A1e+40,+6272+Gra%C4%8Di%C5%A1%C4%8De,+Slovenia"
  },
  legalPages: {
    imprint: true,
    privacy: true,
    accessibility: true,
    sustainability: false
  },
  structuredData: "Organization",
  securityTxt: {
    contact: "mailto:info@trislab.com",
    expires: "2027-11-11T13:38:06.594Z"
  }
};

/**
 * The club's referent for hunting tourism, shown on the hunting-tourism page,
 * the hunting lodge, the contact page and the home page. The club has agreed
 * to publish the name and the phone number.
 */
export const tourismReferent = {
  name: "Iztok Trček",
  phone: "+386 41 721 176",
};

export default site;
