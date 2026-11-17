// Every photo of the site, imported once so Astro resizes them to AVIF at build.
// Their alternative texts are per language in src/content/pages/<language>/site.yaml.
//
// Where each photo comes from:
// - band-karst.jpg: the Karst Rim (Kraški rob) from Zjat above Podpeč, next to
//   the hunting ground; Wikimedia Commons, CC0 ("View from Zjat of Karst Rim
//   and Podpec tower 05.jpg").
// - species-*.jpg except the red deer and the jackal: stock photos from
//   Wikimedia Commons, CC0, so no credit is needed: "Rehbock (April 2025).jpg",
//   "Wildschwein + Frischlinge.jpg", "Feldhase (Mai 2024).jpg",
//   "Rotfuchs (Mai 2025) 1.jpg", "Perdix perdix1599.jpg",
//   "Jagdfasan-Hahn (März 2025).jpg"; cropped to 16:10 at 1440 px.
// - species-jackal.jpg: "Golden jackal (Canis aureus moreotica).jpg" by
//   Charles J. Sharp, Wikimedia Commons, CC BY-SA 4.0; the page credits it
//   (speciesCredits).
// - species-red-deer.png: from today's site; to check before production where
//   it was taken and that the club may publish it.
// - hunting-ground.jpg, hunting-tourism.jpg, hunting-lodge.jpg,
//   lodge-interior.jpg: flat illustrations drawn for this site (the hunting
//   ground by day, two hunters looking out over it at dusk, the stone lodge),
//   which the club chose to keep.
// - The others are placeholders (drawn landscapes labelled "ZAČASNA SLIKA"),
//   to be replaced by photos of the real hunting ground (docs/brief.md).

import about from "../assets/photos/about.jpg";
import bandForest from "../assets/photos/band-forest.jpg";
import bandKarst from "../assets/photos/band-karst.jpg";
import gameDamage from "../assets/photos/game-damage.jpg";
import hero from "../assets/photos/hero.jpg";
import huntingGround from "../assets/photos/hunting-ground.jpg";
import huntingLodge from "../assets/photos/hunting-lodge.jpg";
import huntingTourism from "../assets/photos/hunting-tourism.jpg";
import lodgeInterior from "../assets/photos/lodge-interior.jpg";
import membership from "../assets/photos/membership.jpg";
import fox from "../assets/photos/species-fox.jpg";
import jackal from "../assets/photos/species-jackal.jpg";
import hare from "../assets/photos/species-hare.jpg";
import partridge from "../assets/photos/species-partridge.jpg";
import pheasant from "../assets/photos/species-pheasant.jpg";
import redDeer from "../assets/photos/species-red-deer.png";
import roeDeer from "../assets/photos/species-roe-deer.jpg";
import wildBoar from "../assets/photos/species-wild-boar.jpg";

export const photos = {
  hero,
  about,
  huntingGround,
  huntingTourism,
  huntingLodge,
  lodgeInterior,
  gameDamage,
  membership,
  bandForest,
  bandKarst,
};

export type PhotoKey = keyof typeof photos;

export const speciesPhotos = {
  "red-deer": redDeer,
  "roe-deer": roeDeer,
  "wild-boar": wildBoar,
  hare,
  fox,
  jackal,
  partridge,
  pheasant,
};

/** Photos under a licence that asks for a credit: who took it and the licence. */
export const speciesCredits: Partial<Record<keyof typeof speciesPhotos, { author: string; licence: string; url: string }>> = {
  jackal: {
    author: "Charles J. Sharp",
    licence: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Golden_jackal_(Canis_aureus_moreotica).jpg",
  },
};

/** Widths a full-width photo is built in; the browser picks one. */
export const wideWidths = [640, 960, 1280, 1600];

/**
 * AVIF quality per kind of photo, so a page with real photos stays inside the
 * page-weight budget (scripts/check-page-weight.mjs counts the largest
 * candidate of each image): a wide photo lies under text or fills a band, a
 * card or species photo is shown at a third or half of the page.
 */
export const photoQuality = { wide: 30, card: 40 };
