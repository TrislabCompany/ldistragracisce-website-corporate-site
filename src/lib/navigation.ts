// The site's menu, shared by the header and the footer. Gallery and Documents
// are linked from the footer only until the club has supplied their content
// (docs/brief.md, Navigation).

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
    { href: "/gallery", label: t(lang, "nav.gallery") },
    { href: "/documents", label: t(lang, "nav.documents") },
    { href: "/contact", label: t(lang, "nav.contact") },
  ];
}
