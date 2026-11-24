# Content audit and review status (2026-11-25)

## Review statuses
Every item carries `status`: `draft` → `auto_checked` → `needs_review` → `teacher_reviewed` → `approved`.
**All current items are `auto_checked`. No item is `teacher_reviewed` or `approved`.** Automated checks are not an expert review.

## Automated checks (`npm test`, 51 tests, run in CI before every deploy)
- Unique ids; only official spec codes; exam slot task types match the specification.
- Choice items: distinct options, valid answer letter; explanations present; sources resolvable.
- Shared items translated into both languages without script mixing; Uzbek-only and Russian-only section 1 items kept separate.
- No near-duplicate stems among hand-written items (Jaccard < 0.6) — this caught 2 duplicates in variant 2, both rewritten.
- Generators: 500 seeds per code self-checked.
- Every available variant assembles to 90 tasks / 3×30 / official type totals; variants never share an item.
- **Independent re-solve:** every numeric answer of the variant-2 math items is recomputed in the test from the problem data
  (Roman numerals, divisibility split, remainder, fractions, diagrams, segments, clock angle, diagonals, Venn, combinatorics,
  handshakes, pigeonhole, balance weights, logic grid by brute force, Euler for the pyramid).

## Expert review workflow (in the app)
Settings → "Expert review mode": under every explanation a reviewer sees the item status and marks "Checked" or "Has an issue".
Marks are stored locally and exported as JSON (Settings → Export marks), then applied to the item `status` in the repository.
Users can also send error reports (Profile → Report an error) with item id and app version.

## Bug found during this audit
Generated matching items (2.2.8–2.2.10) were de-duplicated by their shared instruction text, so only one ever existed and
no second variant could be assembled. Fixed: the stems are part of the de-duplication key.
