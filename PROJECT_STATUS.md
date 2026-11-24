# Milliy A+ Primary — Project status (2026-11-25, v0.2)

**Live test version:** https://usmonovich.github.io/milliy-aplus-primary/
**Repository:** https://github.com/usmonovich/milliy-aplus-primary (every push to `main` → tests → build → GitHub Pages)

## New in v0.2
- Learning: preparation modes (balanced / B+ / A+) that change item selection and daily plan weights; weak-topic sets (12 items);
  checkpoint exam at the end of every roadmap level; daily quiz (same 10 items for the day, all 3 sections).
- Intensive programs 7/14/30/60/90 days in 4 phases (foundation → practice → mock exams → final review); progress counts studied days,
  and after missed days the plan is rebuilt so mock exams and final review still happen; "welcome back" plan with more review.
- Exams: mock **variant 2** (uz and ru); section exams rotate through ready variants; comparison with the previous attempt
  (overall, per section, improved/regressed codes); interactive trend chart and side-by-side comparison in Statistics.
- Teacher Simulator: class mood (6 students), engagement/understanding meters, class reaction to each decision,
  collapsible analysis of the other options, debrief with the better choice for each step, stars.
- Feedback: "Report an error" (category, item id, app version, device) → copy / share / file; link under every explanation.
  Expert review mode with per-item marks exported as JSON.
- Data safety: IndexedDB + localStorage mirror, save on app switch/close, storage persistence request, backup through the share
  sheet (iPhone: Files/iCloud), restore with a safety copy, backup-age warning.
- UI: launch animation, logo, screen transitions, roadmap path with stars, celebration with confetti and stars, haptics (where supported).
- iPhone: inputs ≥ 16 px (no zoom), no double-tap zoom, tab bar hidden while the keyboard is open, update check when the app returns.
- Fixed: generated matching items were de-duplicated by their shared instruction, which blocked any second variant.

## Tests
- `npm test`: 51/51 (engine 18, content audit incl. independent re-solve of variant-2 math answers and variant disjointness).
- Browser (375×812): roadmap, simulator choice and reactions, intensive plan, report screen, no horizontal overflow.

## Content counts
- Hand-written items: 281 (exam 218: variants 1–2 × [s1 uz 28, s1 ru 28, s2 23, s3 30]; practice 63) + computed items.
- Complete mock variants: **2 of 50** per exam language.
- Lessons 17, scenarios 8, glossary 24, sources 43 (4 read). All items `auto_checked`, none expert-reviewed.

## Next steps
1. Variants 3–6 (batch of 5 → next publish), practice items for the 40 codes without any.
2. Micro-lessons per code; scenario-specific student reactions; more scenarios; glossary toward 300 cards.
3. Real-device iPhone check; WebKit E2E in CI.
See KNOWN_LIMITATIONS.md, CONTENT_AUDIT.md, COMPETITOR_ANALYSIS.md.
