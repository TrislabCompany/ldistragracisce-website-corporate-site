// The site's menu, shared by the header and the footer. Documents is linked
// from the footer, the about page and the game-damage page; the site has no
// gallery.

import { t, type Lang } from "../i18n";

export function mainLinks(lang: Lang) {
  return [
    { href: "/", label: t(lang, "nav.home") },
    { href: "/about", label: t(lang, "nav.about") },
    { href: "/hunting-ground", label: t(lang, "nav.huntingGround") },
    { href: "/hunting-tourism", label: t(lang, "nav.huntingTourism") },
    { href: "/hunting-lodge", label: t(lang, "nav.huntingLodge") },
    { href: "/game-damage", label: t(lang, "nav.gameDamage") },
    { href: "/membership", label: t(lang, "nav.membership") },
    { href: "/contact", label: t(lang, "nav.contact") },
  ];
}

export function clubLinks(lang: Lang) {
  return [
    { href: "/about", label: t(lang, "nav.about") },
    { href: "/membership", label: t(lang, "nav.membership") },
    { href: "/documents", label: t(lang, "nav.documents") },
    { href: "/contact", label: t(lang, "nav.contact") },
  ];
}
