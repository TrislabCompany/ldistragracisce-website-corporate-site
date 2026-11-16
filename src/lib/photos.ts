// Every photo of the site, imported once so Astro resizes them to AVIF at build.
// Their alternative texts are per language in src/content/pages/<language>/site.yaml.
//
// Most of them are placeholders (drawn landscapes labelled "ZAČASNA SLIKA"),
// to be replaced by photos of the real hunting ground: today's site first,
// then stock photos whose licence needs no attribution (docs/brief.md). The
// red deer is from today's site: to check before production where it was
// taken and that the club may publish it.

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
import badger from "../assets/photos/species-badger.jpg";
import fox from "../assets/photos/species-fox.jpg";
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
  badger,
  partridge,
  pheasant,
};

/** Widths a full-width photo is built in; the browser picks one. */
export const wideWidths = [640, 960, 1280, 1600];
