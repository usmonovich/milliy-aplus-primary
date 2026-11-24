# Milliy A+ Primary

Bilingual (O'zbek / Русский) progressive web app for preparing for the Uzbek **national certificate for primary-school teachers**
(*Boshlang'ich ta'lim o'qituvchilarining bilim darajasi va kasbiy mahorati bo'yicha milliy sertifikat*).

> Independent educational product. **Not** an official service of the Agency for Assessment of Knowledge and Skills.
> Mock items are original training items, not real exam questions. Practice scores are not official Rasch scores.

- Test version: https://usmonovich.github.io/milliy-aplus-primary/
- Status, counts and limitations: [PROJECT_STATUS.md](PROJECT_STATUS.md)

## Stack
React 19 · TypeScript · Vite · Tailwind CSS · IndexedDB · Service Worker (offline, installable) · Vitest.
No accounts, no payments, no paid APIs, no server. Progress stays on the device (export/import in Settings).

## Structure
- `src/core/` — reusable Core Engine (scoring, exam assembly, timer, spaced repetition, planner, i18n, storage, gamification, AI interfaces — disabled).
- `src/content/primary/` — content package: machine-readable exam spec, item banks (separate Uzbek and Russian section 1), generators, lessons, simulator scenarios, glossary, certificate info, sources.
- `src/ui/`, `src/screens/` — interface.

## Commands
```
npm ci
npm test        # engine + automated content audit
npm run build   # production build into dist/ (includes generated sw.js)
npm run icons   # regenerate PNG icons
```
Every push to `main` is tested, built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.
