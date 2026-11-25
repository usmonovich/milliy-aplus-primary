# Milliy A+ Primary — Project status (2026-11-25, v0.6)

## New in v0.6
- v0.6.0: 12 lessons — reading (characters; author's position, fact/opinion; literary vs informational; PIRLS basics)
  and math (equations; unknown components; divisibility; divisibility tests; comparing fractions; operations with
  fractions; time; motion). 13 older lessons upgraded to ≥ 3 examples, a «try» task and ≥ 5 checks.
- Audit: stricter lesson standard, semantic-duplicate check (same code + same numbers), independent re-solve of the new
  numeric answers (57 tests).
- v0.6.1: 12 language lessons — Russian (animate, gender, number, cases, declension, adjective) and Uzbek (ot
  kategoriyalari, egalik, kelishik, sifat, son, fe'l), written separately in each language; all sequential with prerequisites.
- v0.6.2: 12 lessons — pedagogy (teaching methods; verbal; visual; practical; problem-based; differentiated) and
  psychology (thinking; perception; imagination; motivation; emotions; individual differences). Two new modules.
- Batch total (v0.6.0–0.6.2): 36 lessons, 183 check questions + 36 «try» tasks, 116 worked examples.
- Academy total: 69 lessons. Continuation point: CURRICULUM.md.

## New in v0.5
- 4 reading-literacy lessons with original texts and evidence-based answers; 21 new check questions.
- Audit extended: lesson structure, per-option explanations, prerequisite integrity (54 tests).
- Academy total: 33 lessons. Continuation point: CURRICULUM.md.


## New in v0.4
- 20 new full lessons (math 8, pedagogy 4, psychology 2, Russian 3, Uzbek 3), 100 new check questions with per-option explanations.
- Lessons carry internal stages (Foundation → A+) and prerequisites; courses list lessons in study order.
- Module check after each module and a final course test.
- Academy total: 29 lessons. Continuation point: CURRICULUM.md → «Continuation point».


## New in v0.3
- Interface cleaned: no internal codes, item ids, task-type codes, test counts, tariff/AI notes or developer status cards;
  long hints shortened. Reliability notes kept in one line (Settings) and in the exam report.
- Academy: courses → modules → full lessons in a new block format (definition, rule, KaTeX formulas, worked examples,
  exceptions, mistakes, interactive demos, "try it", teaching method, summary, mastery check ≥ 80 % with retry).
- First 9 full lessons (see CURRICULUM.md); interactive area grid.
- Wrong-answer feedback: why the chosen option is wrong, rule to remember, step-by-step solution, how to avoid, link to lesson.
- Tests: 51/51.


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
