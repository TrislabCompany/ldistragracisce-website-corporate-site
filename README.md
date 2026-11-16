# ldistragracisce-website-corporate-site

Lovska družina Istra Gračišče, ldistragracisce.si, built from `tl-template-website` v0.5.0. Read this first; the detail is in [`docs/`](docs/).

## What it is

An [Astro](https://astro.build) site built into static files, served by Cloudflare Pages. It has a home page, about, the hunting ground and its game, hunting tourism (a page per offer), the hunting lodge, game damage, membership, a gallery, documents, contact, an imprint, a privacy policy, an accessibility statement, a sitemap page and a 404 page, built to the brief in [docs/brief.md](docs/brief.md). It sets no cookies and loads no outside service.

**Texts:** the page texts are in `src/content/pages/<language>/site.yaml`, the hunting-tourism offers in `src/content/hunting-tourism/<language>/`, the legal texts in `src/content/legal/<language>/`. The photos are imported in `src/lib/photos.ts`. The addresses of the earlier site redirect to the new pages (`public/_redirects`).

**Languages:** Slovenian, English, Croatian, Serbian (Latin script), Italian, German. The first is the default; each language lives under its own URL.

## Environments

| Environment | Address | Shows | Who can open it |
| --- | --- | --- | --- |
| `dev` | `dev.ldistragracisce.si` | The newest merged work | Signed-in people only |
| `staging` | `staging.ldistragracisce.si` | The newest release | Signed-in people only |
| `production` | `ldistragracisce.si` | The promoted release | Everyone, after the cutover |

How a change moves between them is in [docs/deployment.md](docs/deployment.md). Where each one runs and which version is deployed: `pnpm status`.

## Before production

- **No placeholder left.** A dashed box ("Čaka na vsebino", `src/components/Placeholder.astro`) and every image labelled "ZAČASNA SLIKA" mark content still to come. Find them with `grep -rn "pending\|ZAČASNA" src/` and `src/lib/photos.ts`.
- **Photos:** replace the drawn placeholders in `src/assets/photos/` with photos of the real hunting ground (today's site first, then stock photos whose licence needs no attribution), and the alternative texts in `site.yaml`. Clear the red deer photo from today's site: where it was taken and that the club may publish it.
- **From the club:** the gallery photos, the documents (statute, rules), the hunting-lodge photos and description, the phone number to publish (`contact.phone` in `src/site.config.ts`), the seasons of every species and what a visiting hunter needs.
- **Facts:** the area, heights, species, founding year and seasons are from today's site; the club confirms each one.
- **Texts:** a lawyer reviews the privacy policy; a native speaker reviews every language but Slovenian (Serbian and German are new).
- **Logo:** draw an SVG from the badge (`src/assets/logo.png`, `public/logo.png`, `public/favicon.png`).
- **Analytics:** set `analytics` with the Cloudflare Web Analytics token and the CSP origins ([docs/analytics.md](docs/analytics.md)); the privacy policy already names it.

## Work on it

1. `pnpm install`, then `pnpm dev`, and open <http://localhost:4321>.
2. Run `pnpm test` and `pnpm test:a11y` before every push ([docs/getting-started.md](docs/getting-started.md)).
3. Every change is a PR to `main`. `ci / ci` must pass and a code owner must approve. A merge deploys to `dev`.

## More

- [AGENTS.md](AGENTS.md): the guide for coding agents and their skills.
- [Site settings](docs/site-settings.md): languages, lists of items, contact and legal pages, the brand.
- [Deployment](docs/deployment.md): deploy, release and promote.
- [Quality checks](docs/quality-checks.md): what `ci / ci` checks.
- [Updates from the template](docs/upgrading/README.md): `.template-version` and update PRs.
