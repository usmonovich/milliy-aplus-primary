// App-level orchestration on top of the Core Engine and the content package.
import {
  assembleVariant, availableVariants, buildReport, dailyPlan, daysBetween, dueCards, gradeQuestion, mulberry32, shuffle, taskCount, type PlanBlock,
} from '../core/engine';
import { newAchievements } from '../core/gamification';
import { getState, recordAnswer, setState, today, type Attempt } from '../core/store';
import type { Lesson, LevelId, Locale, Question, Response } from '../core/types';
import { BANK, GENERATED_CODES, LESSONS, SPEC, TARGET_VARIANTS, generatePractice, practiceFor } from '../content/primary';

export const QMAP = new Map<string, Question>(BANK.map((q) => [q.id, q]));
const extra = new Map<string, Question>(); // generated on demand this session
/** Looks up an item; generated items are rebuilt deterministically from their id. */
export function getQ(id: string): Question | undefined {
  const q = QMAP.get(id) ?? extra.get(id);
  if (q) return q;
  const m = id.match(/^gen-([\d.]+)-(?:practice-)?(\d+)-\d+$/);
  if (!m) return undefined;
  const g = generatePractice(m[1], Number(m[2]));
  if (!g) return undefined;
  const rebuilt = { ...g, id };
  extra.set(id, rebuilt);
  return rebuilt;
}
const remember = (q: Question) => { if (!QMAP.has(q.id)) extra.set(q.id, q); return q; };

export const LEVELS: LevelId[] = ['F', 'C', 'C+', 'B', 'B+', 'A', 'A+'];

let seedCounter = Date.now() % 100000;
const nextSeed = () => ++seedCounter;

/** Freshly generated practice item for a code, or null if the code has no generator. */
export function generated(code: string): Question | null {
  const q = generatePractice(code, nextSeed());
  return q ? remember({ ...q, id: `${q.id}-${seedCounter}` }) : null;
}

/** Adaptive selection: weakest and due skills first, interleaved across codes. */
export function pickPractice(ex: Locale, opts: { block?: string; section?: number; n: number; types?: string[]; minDifficulty?: number }): Question[] {
  const s = getState();
  const d = today();
  const inScope = (code: string) => (!opts.block || code.startsWith(opts.block + '.')) && (!opts.section || code.startsWith(`${opts.section}.`));
  let pool = practiceFor(ex).filter((q) => inScope(q.code) && (!opts.types || opts.types.includes(q.type)) && (!opts.minDifficulty || q.difficulty >= opts.minDifficulty));
  // add computed items for generator codes in scope
  const genCodes = GENERATED_CODES.filter((c) => inScope(c));
  for (const c of genCodes) for (let i = 0; i < 2; i++) {
    const g = generated(c);
    if (g && (!opts.types || opts.types.includes(g.type))) pool.push(g);
  }
  const rnd = mulberry32(nextSeed());
  const score = (q: Question) => {
    const st = s.stats[q.code];
    const card = s.srs[`c:${q.code}`];
    const due = card && daysBetween(card.due, d) >= 0 ? -0.5 : 0;
    return (st ? st.ewma : 0.5) + due + rnd() * 0.3;
  };
  pool = shuffle(pool, rnd).sort((a, b) => score(a) - score(b));
  // interleave: avoid the same code twice in a row when possible
  const out: Question[] = [];
  const rest = [...pool];
  while (out.length < opts.n && rest.length) {
    const i = rest.findIndex((q) => q.code !== out[out.length - 1]?.code);
    out.push(...rest.splice(i < 0 ? 0 : i, 1));
  }
  return out;
}

/** 15-item diagnostic: 5 per section, spread across blocks. */
export function diagnosticSet(ex: Locale): Question[] {
  const out: Question[] = [];
  for (const sec of [1, 2, 3]) {
    const blocks = [...new Set(SPEC.codes.filter((c) => c.section === sec).map((c) => c.block))];
    const pool = practiceFor(ex).filter((q) => q.section === sec);
    const picked: Question[] = [];
    for (let round = 0; picked.length < 5 && round < 5; round++) for (const b of blocks) {
      if (picked.length >= 5) break;
      const cand = pool.filter((q) => q.code.startsWith(b + '.'));
      if (cand[round]) picked.push(cand[round]);
    }
    if (sec === 2) while (picked.length < 5) { const g = generated(['2.2.7', '2.3.4', '2.3.8', '2.1.8', '2.3.3'][picked.length % 5]); if (g) picked.push(g); else break; }
    out.push(...picked.slice(0, 5));
  }
  return out;
}

/** Items due for review: wrong answers scheduled by SRS, oldest/lowest box first. */
export function dueReview(limit = 20): Question[] {
  const s = getState();
  const cards = dueCards(Object.values(s.srs).filter((c) => c.key.startsWith('q:')), today());
  const out: Question[] = [];
  for (const c of cards) {
    const id = c.key.slice(2);
    const q = getQ(id);
    if (q) out.push(q);
    else {
      // generated item from an earlier session: give a new item of the same skill
      const code = s.mistakes[id]?.code;
      const g = code ? generated(code) : null;
      if (g) out.push(g);
    }
    if (out.length >= limit) break;
  }
  return out;
}

export const dueCount = () => dueCards(Object.values(getState().srs).filter((c) => c.key.startsWith('q:')), today()).length;

export function sectionAccuracy(): Record<number, number> {
  const s = getState();
  const acc: Record<number, number> = {};
  for (const sec of [1, 2, 3]) {
    const codes = SPEC.codes.filter((c) => c.section === sec);
    const vals = codes.map((c) => s.stats[c.code]?.ewma).filter((v): v is number => v !== undefined);
    acc[sec] = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0.5;
  }
  return acc;
}

export function todayPlan(): (PlanBlock & { key: string })[] {
  const s = getState();
  return dailyPlan(s.profile.minutes, dueCount(), sectionAccuracy()).map((b) => ({ ...b, key: b.kind + (b.section ?? '') }));
}

export function lessonsFor(ex: Locale): Lesson[] {
  return LESSONS.filter((l) => l.lang === 'both' || l.lang === ex)
    .sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) || a.section - b.section);
}

export function nextLesson(ex: Locale, section?: number): Lesson | undefined {
  const done = getState().lessonsDone;
  return lessonsFor(ex).find((l) => !done[l.id] && (!section || l.section === section));
}

export function checkAchievements() {
  const s = getState();
  const ids = newAchievements(s, today());
  if (ids.length) {
    setState((st) => ({ ...st, achievements: [...st.achievements, ...ids], xp: st.xp + ids.length * 50 }));
    window.dispatchEvent(new CustomEvent('achievement', { detail: ids }));
  }
}

/** True when a response is complete enough to submit. */
export function isAnswered(q: Question, r: Response | undefined): boolean {
  if (!r) return false;
  if (r.kind === 'choice') return !!r.value;
  if (r.kind === 'open') return r.value.trim().length > 0;
  return q.type === 'Y-2' && q.stems.every((st) => r.value[st.id]);
}

export function gradeAndRecord(q: Question, r: Response | undefined, ex: Locale, ms: number, fromExam = false) {
  const got = gradeQuestion(q, r, ex);
  const total = taskCount(q);
  recordAnswer({ qid: q.id, code: q.code, type: q.type, correct: got === total, partial: got > 0 && got < total, response: r, ms, fromExam });
  return { got, total };
}

/* ---------------- exams ---------------- */

export const variantsReady = (ex: Locale) => Math.min(TARGET_VARIANTS, availableVariants(SPEC, BANK, ex));

export function startExam(kind: Attempt['kind'], ex: Locale, opts: { variant?: number; section?: number } = {}): Attempt {
  let qs: Question[] = [];
  let minutes: number | null = null;
  if (kind === 'full' || kind === 'untimed' || kind === 'section') {
    qs = assembleVariant(SPEC, BANK, ex, opts.variant ?? 1) ?? [];
    if (kind === 'section') qs = qs.filter((q) => q.section === opts.section);
    minutes = kind === 'full' ? SPEC.durationMin : kind === 'section' ? 60 : null;
  } else if (kind === 'express') { qs = pickPractice(ex, { n: 8 }); minutes = 15; }
  else if (kind === 'sit') { qs = pickPractice(ex, { n: 10, types: ['V-Y-1'] }); minutes = 20; }
  else if (kind === 'open') { qs = pickPractice(ex, { n: 10, types: ['O-1'] }); minutes = 20; }
  else if (kind === 'hard') { qs = pickPractice(ex, { n: 10, minDifficulty: 3 }); minutes = 20; }
  const now = Date.now();
  const a: Attempt = {
    id: `${kind}-${now}`, kind, variant: opts.variant, section: opts.section, lang: ex,
    qids: qs.map((q) => remember(q).id), startedAt: now, endAt: minutes ? now + minutes * 60_000 : null,
    answers: {}, flags: [], current: 0,
  };
  setState((s) => ({ ...s, activeExam: a }), true);
  return a;
}

export function finishExam(timedOut = false): string | null {
  const s = getState();
  const a = s.activeExam;
  if (!a) return null;
  const qs = a.qids.map(getQ).filter((q): q is Question => !!q);
  const report = buildReport(qs, a.answers, a.lang);
  for (const q of qs) gradeAndRecord(q, a.answers[q.id], a.lang, 0, true);
  const done: Attempt = { ...a, finishedAt: Date.now(), report, timedOut };
  setState((st) => ({ ...st, activeExam: undefined, attempts: [...st.attempts, done], xp: st.xp + Math.round(report.correct * 2) }), true);
  checkAchievements();
  return done.id;
}

export function icsReminder(time: string, title: string): string {
  const [h, m] = time.split(':');
  const d = today().replace(/-/g, '');
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Milliy A+ Primary//EN', 'BEGIN:VEVENT',
    `UID:milliy-aplus-${d}@local`, `DTSTAMP:${d}T000000Z`, `DTSTART:${d}T${h}${m}00`, 'DURATION:PT30M',
    'RRULE:FREQ=DAILY', `SUMMARY:${title}`, 'BEGIN:VALARM', 'TRIGGER:PT0M', 'ACTION:DISPLAY', `DESCRIPTION:${title}`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
}

export function download(name: string, text: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
