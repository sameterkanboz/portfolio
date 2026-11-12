# portfolio

Samet Erkan Boz's site at [seboz.dev](https://seboz.dev): English at `/`, Turkish at `/tr`. Design notes: `docs/superpowers/specs/2026-11-12-portfolio-refresh-design.md`.

```sh
npm install
npm run dev          # http://localhost:3000
npm run build        # next build, then scripts/check-build.mjs
npm run pages:build  # what Cloudflare Pages runs
```

All text lives in `src/content/en.ts` and `src/content/tr.ts`; change both together.
