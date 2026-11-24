# Known limitations (2026-11-25)

## Content volume
- Complete mock exams: **1 of 50** per exam language (uz, ru). The other 49 are not shown in the app.
- Practice pool is small: 32 hand-written items plus unlimited computed math items (codes 2.1.8, 2.2.6–2.2.10, 2.3.3, 2.3.4, 2.3.6, 2.3.8).
  Some lessons therefore offer only 2–4 practice items (e.g. Russian 1.1). Situational (V-Y-1) practice is the thinnest.
- 17 lessons (one per specification block; section 1 separate for uz and ru), 8 Teacher Simulator scenarios, 24 glossary terms.

## Verification
- All items are `auto_checked` only (automated audit). **No subject-matter expert has reviewed them.**
- Recommended textbooks (Section VIII of the specification) were catalogued but their full texts were not read.
- Resolution 411 was read to about 80%; the scale range and rounding of the official Rasch score are not published there.

## Scoring
- The app shows correct answers / 90, percentages, per-section and per-type results and an internal readiness index.
  It never converts these into an official Rasch score or certificate level.

## Platform
- No server: progress lives in the browser (IndexedDB). Clearing site data removes it; use Settings → Export.
- Background push notifications are not possible without a server. Available: reminder while the app is open,
  system notification while open (if permitted), and a daily calendar event (.ics).
- iOS: install via Safari → Share → "Add to Home Screen". Notifications on iOS require the installed app (iOS 16.4+).

## Not implemented yet
- Accounts, sync, payments, server-side access control (intentionally out of scope for the test version).
- AI features (interfaces exist, disabled).
- Playwright E2E suite in CI (browser flows were checked manually with the built-in browser).
- Competitor analysis; remaining documentation files from the master prompt.
