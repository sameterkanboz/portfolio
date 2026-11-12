# Portfolio refresh (seboz.dev)

Decided with Samet on 2026-11-12.

## Goal

The page is for employers and recruiters; a visitor should want to talk to Samet. It shows his work at beije and nothing else as proof: no indie apps, no side projects, no articles.

## Decisions

- **Languages:** English at `/`, Turkish at `/tr`. Both texts live in `src/content/` and share one type, so a missing key fails the typecheck.
- **Content:** four main pieces of work at beije (storefront, admin panel, platform upgrade, end-to-end tests) and four short ones (ruuts, localized errors, design tokens, backend services), drafted from his commit history and approved by him sentence by sentence.
- **Not on the page:** shipping carrier and payment provider names, the AI assistant, internal service names, pull request numbers, internal hosts. ruuts is named: it is beije's public sub-brand.
- **Hosting:** unchanged. This repository on Cloudflare Pages, built with `npm run pages:build`. Every route is static.
- **Design:** one column, serif display type over a paper background, one accent colour, light and dark from the system setting. No animation library, no client JavaScript of our own.

## Checks

`npm run build` runs `scripts/check-build.mjs` after `next build`: each page has the right `lang`, one `h1`, a title of 20 to 60 characters, a description of 120 to 160, both `hreflang` links, an email link, and no dashes as punctuation or placeholder text.

## Open

- An up-to-date CV. The old PDF stays in `public/` but nothing links to it.
- A share image for link previews.
