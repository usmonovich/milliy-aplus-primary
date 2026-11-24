# Milliy A+ Primary — Project status (2026-11-25)

**Live test version:** https://usmonovich.github.io/milliy-aplus-primary/
**Repository:** https://github.com/usmonovich/milliy-aplus-primary (every push to `main` → tests → build → GitHub Pages)

## Working in the app (verified in a browser at 375×812 and on the published site)
- First screen: language choice O'zbek tili / Русский язык; interface language and exam language are set separately and can be changed later without losing progress.
- Onboarding: experience, current level, target level, exam date, mode, daily minutes, reminder time → optional 15-item diagnostic.
- Home: today's plan (adapts the minutes per section to weaknesses, review first), continue learning, days to exam, reviews due, streak, readiness index (transparent formula), XP level.
- Learning: roadmap Foundation → A (A+ = mock exams), 17 lessons with interactive widgets, lesson practice with instant feedback, "similar task", test-out (≥80%).
- Teacher Simulator: 8 branching scenarios with fit, consequences and reasoning for every option.
- Exams: mock variant 1 (uz and ru) in strict 180-min mode or untimed; per-section 60 min; express 15 min; situational, open and hardest-topic training (authorial formats).
  The timer uses an absolute deadline and survives reloads; the exam auto-finishes at 0; navigator; "return later" flags; report by section, type and code with an explicit "not a Rasch score" notice; answer review.
- My mistakes: SRS review (Leitner, several spaced successes needed), repeated-error topics, links to lessons.
- Knowledge hub: global search (terms, lessons, spec codes), categories, favorites, flashcards, source catalog with "accessed / not accessed" marks.
- Profile: statistics (per section, per type, heatmap, mock trend, strengths and weaknesses, recommendations), achievements, settings (languages, theme, font size, reduced motion, reminders, .ics, export/import/reset), certificate info with sources and dates, allowance calculator (15%, B+ and above, per Resolution 411).
- PWA: manifest, icons, service worker precaching every built file (offline after the first visit), update banner; progress in IndexedDB.

## Tests
- `npm test`: 29/29 (engine + automated content audit), also run in CI before every deploy.
- Browser checks: onboarding (ru), diagnostic, lesson practice, full 90-task exam with reload/resume and finish, Uzbek interface, all 24 routes without horizontal overflow at 375 px, live site resources (all 200), SW active and caching, progress persisting after reload on the live site.

## Content counts
- Hand-written items: 172 (exam pool 109: s1 uz 28, s1 ru 28, s2 23, s3 30; practice pool 63) + 201 computed exam items + unlimited computed practice.
- Complete mock variants: **1 of 50** per exam language. Others are not shown in the app.
- Lessons 17, scenarios 8, glossary 24, sources 43 (4 actually read: specification, demo, Resolution 411, announcement).
- Status of all items: `auto_checked` — **no expert review yet**.

## Next steps
1. Author mock variants 2–50 (about 85 hand-written slots per variant per language), with expert review.
2. Expand practice (especially V-Y-1 per code), lessons (deeper per-code lessons), scenarios and the glossary.
3. Playwright E2E in CI; i18n completeness test; code-splitting (bundle ≈ 200 KB gzip).
4. Remaining docs from the master prompt; competitor analysis; textbook review.
See KNOWN_LIMITATIONS.md.
