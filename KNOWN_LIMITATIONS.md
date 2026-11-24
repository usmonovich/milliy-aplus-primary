# Known limitations (2026-11-25, v0.2)

## Content volume (targets of the full version in brackets)
- Complete mock exams: **2 of 50** per exam language (uz, ru). Not-ready variants are not shown.
- Practice: 63 hand-written items + unlimited computed math items (target ≥ 2000). 40 of 88 codes have no hand-written practice item yet.
- Lessons: 17, one per specification block (target ~150 micro-lessons, one or more per code).
- Teacher Simulator: 8 scenarios (target ≥ 100). The new interactive layer (class mood, reactions, debrief) works for all of them;
  scenario-specific student reactions are not written yet — generic reactions by decision quality are used.
- Reference cards: 24 (target ≥ 300). Diagnostic: 15 items.

## Verification
- All items are `auto_checked` only. **No subject-matter expert has reviewed them.** See CONTENT_AUDIT.md.
- Recommended textbooks were catalogued but their full texts were not read.
- Competitor products named in the brief could not be found publicly under those names (COMPETITOR_ANALYSIS.md).

## Scoring
- Correct answers / 90, percentages, per-section/type/code results and an internal readiness index. Never an official Rasch score or certificate level.

## Platform
- No server: progress lives on the device (IndexedDB, mirrored to localStorage). Use Settings → Backup (share sheet → Files/iCloud on iPhone).
- Background push notifications are not possible without a server.
- Haptics: Android via Vibration API; iPhone only on iOS 18+ (system switch tick); elsewhere none.
- iPhone behaviour was tested in a 375×812 Chromium emulation, **not on a real iPhone/Safari**. Safari-specific fixes are in place
  (16 px inputs, no double-tap zoom, keyboard-aware tab bar, save on background, update check on return) but unverified on device.

## Not implemented yet
- Accounts, sync, payments (out of scope for the free test version). AI features (interfaces only).
- Playwright/WebKit E2E in CI.
