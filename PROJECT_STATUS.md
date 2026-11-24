# Milliy A+ Primary — Project status (2026-11-24)

Handoff file: the next session continues from here. Nothing is published, nothing is committed (not a git repo yet).

## Research done (sources actually read)
- Official specification, 30.10.2026 (PDF text extracted): 90 tasks, 180 min, 3×30, 88 codes.
  Verified type totals: Y-1 18, V-Y-1 59, Y-2 6, O-1 7. Y-2 = two blocks of 3 (1.4.1; 2.2.8–2.2.10).
  **Section 1 has an official Russian-language topic table** (and a Karakalpak one), so the spec supports Russian as an exam language.
- Demo test: used for format only. It has no answer key, and its items are not reproduced.
- Resolution 411 (lex.uz, ~80% read): A+ >70, A 65–69.9, B+ 60–64.9, B 55–59.9, C+ 50–54.9, C 46–49.9; Rasch model;
  3-year validity; fee 1.5 BHM; allowance 15% of position salary for B+ and above (primary specialty, teaching primary grades).
  Exam dates: not announced. Scale range and rounding: not stated.
- Section VIII literature (34 items) is catalogued in `src/content/primary/sources.ts`, marked `accessed: false`. Full texts were NOT read.
- Not done: competitor analysis, curricula/standards documents, PIRLS/TIMSS frameworks.

## Built and tested (`npx vitest run`: 29/29 pass; `npx tsc -b`: clean)
- `src/core/` Core Engine (subject-agnostic): types, engine (O-1 normalization, per-stem Y-2 grading, report,
  official-level lookup for official scores only, disjoint variant assembly and validation, absolute-deadline timer,
  Leitner SRS, readiness index, daily planner, streaks), i18n (uz/ru), store (IndexedDB + export/import),
  gamification, AI interfaces (disabled, no fake assistant).
- `src/content/primary/`: spec.ts (machine-readable config); exam variant 1 (s1 uz 28, s1 ru 28 written to the
  Russian table, s2 23, s3 30); computed math generators; practice pool 32 items; 17 lessons (s1 separate uz/ru);
  8 Teacher Simulator scenarios; 24 glossary terms; certificate facts with sources and check dates.
- `content.test.ts` audit: ids, codes and types, answers, sources, script mixing, near-duplicates, generators
  over 500 seeds, variant structure, disjoint pools, lesson coverage of all 88 codes in both languages.

## Honest counts
- Complete mock variants: **1 of 50** per exam language.
- All items have status `auto_checked`. **No expert review yet.**

## NOT done (next steps, in order)
1. UI: `src/ui/kit.tsx` (components and widgets: soundmodel, placevalue, fractions, venn, cubenet, pirls), screens
   (Onboarding: language → profile → diagnostic; Home; Learn/lesson/practice/Simulator; Exams runner and report,
   Mistakes; Knowledge hub; Profile/analytics/settings/cert/allowance calculator), `App.tsx` (hash router, 5 tabs),
   `main.tsx`, `index.css`. The template files (`App.tsx`, `App.css`, `index.css`, `assets/`) still need to be replaced.
2. PWA: manifest, `public/sw.js`, PNG icons, index.html meta.
3. Answer-order shuffling in practice mode (the practice pool leans toward "B").
4. Author variants 2–50 (about 85 hand-written slots per variant per language), plus more practice items.
5. E2E tests and a browser check at mobile width; i18n completeness test.
6. Remaining docs: ROADMAP, EXAM_SPECIFICATION, CONTENT_SOURCES, CONTENT_AUDIT, SYLLABUS_COVERAGE, QUESTION_BANK_REPORT,
   LOCALIZATION_REPORT, TEST_REPORT, KNOWN_LIMITATIONS, COMPETITOR_ANALYSIS, DEPLOYMENT.
7. GitHub repo `milliy-aplus-primary` + Pages workflow (needs the user's permission; `gh` is not installed).
