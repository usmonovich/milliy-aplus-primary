// Core Engine: pure, framework-free logic (scoring, exam assembly, spaced
// repetition, readiness, planning). Fully unit-tested in engine.test.ts.
import type {
  ChoiceQuestion, ExamSpec, Locale, MatchingQuestion, OpenQuestion, Question, Response, SpecCode,
} from './types';

/* ------------------------------------------------------------------ */
/* Answer normalization (O-1)                                          */
/* ------------------------------------------------------------------ */

const APOSTROPHES = /[ʻʼ‘’`´']/g;

/** Normalizes free-text answers: case, spacing, apostrophe variants, quotes,
 * trailing punctuation, Russian ё. Does NOT remove letters or fuzzy-match. */
export function normalizeText(s: string): string {
  return s
    .normalize('NFC')
    .toLowerCase()
    .replace(APOSTROPHES, "'")
    .replace(/ё/g, 'е')
    .replace(/[«»"“”„]/g, '')
    .replace(/[‐-―]/g, '-')
    .replace(/\s*-\s*/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?]+$/g, '')
    .trim();
}

/** Parses a number written as 12, 12.5, 12,5, 1 200, 5/2 or 2 1/2. Returns null if not a pure number. */
export function parseNumber(raw: string): number | null {
  const s = raw.trim().replace(/ /g, ' ');
  if (!s) return null;
  const mixed = s.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) {
    const d = Number(mixed[3]);
    if (d === 0) return null;
    const w = Number(mixed[1]);
    return w + Math.sign(w || 1) * (Number(mixed[2]) / d);
  }
  const frac = s.match(/^(-?\d+)\/(\d+)$/);
  if (frac) {
    const d = Number(frac[2]);
    return d === 0 ? null : Number(frac[1]) / d;
  }
  // thousands separated by single spaces: "1 200"
  const compact = /^-?\d{1,3}( \d{3})+([.,]\d+)?$/.test(s) ? s.replace(/ /g, '') : s;
  if (!/^-?\d+([.,]\d+)?$/.test(compact)) return null;
  return Number(compact.replace(',', '.'));
}

export function checkOpen(q: OpenQuestion, value: string, locale: Locale): boolean {
  if (q.numeric !== undefined) {
    const n = parseNumber(value);
    return n !== null && Math.abs(n - q.numeric) < 1e-9;
  }
  const v = normalizeText(value);
  if (!v) return false;
  const accepted = [...q.accept[locale], q.answer[locale]].map(normalizeText);
  return accepted.includes(v);
}

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

/** Number of official tasks a question represents (Y-2 stems are separate tasks). */
export function taskCount(q: Question): number {
  return q.type === 'Y-2' ? q.stems.length : 1;
}

/** Returns correct task count for this question (0..taskCount). Dichotomous per task. */
export function gradeQuestion(q: Question, r: Response | undefined, locale: Locale): number {
  if (!r) return 0;
  switch (q.type) {
    case 'Y-1':
    case 'V-Y-1':
      return r.kind === 'choice' && r.value === (q as ChoiceQuestion).answer ? 1 : 0;
    case 'Y-2': {
      if (r.kind !== 'match') return 0;
      return (q as MatchingQuestion).stems.filter((s) => r.value[s.id] === s.answer).length;
    }
    case 'O-1':
      return r.kind === 'open' && checkOpen(q as OpenQuestion, r.value, locale) ? 1 : 0;
  }
}

export interface ExamReport {
  correct: number;
  total: number;
  percent: number;
  bySection: Record<number, { correct: number; total: number }>;
  byType: Record<string, { correct: number; total: number }>;
  byCode: Record<string, { correct: number; total: number }>;
}

export function buildReport(qs: Question[], answers: Record<string, Response>, locale: Locale): ExamReport {
  const rep: ExamReport = { correct: 0, total: 0, percent: 0, bySection: {}, byType: {}, byCode: {} };
  const add = (bucket: Record<string | number, { correct: number; total: number }>, k: string | number, c: number, t: number) => {
    bucket[k] ??= { correct: 0, total: 0 };
    bucket[k].correct += c;
    bucket[k].total += t;
  };
  for (const q of qs) {
    const t = taskCount(q);
    const c = gradeQuestion(q, answers[q.id], locale);
    rep.correct += c;
    rep.total += t;
    add(rep.bySection, q.section, c, t);
    add(rep.byType, q.type, c, t);
    add(rep.byCode, q.code, c, t);
  }
  rep.percent = rep.total ? Math.round((rep.correct / rep.total) * 1000) / 10 : 0;
  return rep;
}

/**
 * Looks up the official certificate level for an OFFICIAL Rasch-scaled score.
 * Not used with raw percentages: the app never converts % into a certificate level.
 */
export function levelForOfficialScore(spec: ExamSpec, score: number): string | null {
  const sorted = [...spec.levels].sort((a, b) => b.minScore - a.minScore);
  for (const l of sorted) {
    if (l.exclusiveMin ? score > l.minScore : score >= l.minScore) return l.level;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Deterministic randomness                                            */
/* ------------------------------------------------------------------ */

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: T[], rnd: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ------------------------------------------------------------------ */
/* Exam assembly                                                       */
/* ------------------------------------------------------------------ */

export interface Slot {
  /** Codes the slot covers (several for a shared Y-2 block). */
  codes: string[];
  section: number;
  type: SpecCode['type'];
  tasks: number;
}

/** Builds the list of slots from the spec: one slot per code, one per Y-2 group. */
export function slotsFromSpec(spec: ExamSpec): Slot[] {
  const slots: Slot[] = [];
  const groups = new Map<string, Slot>();
  for (const c of spec.codes) {
    if (c.groupId) {
      const g = groups.get(c.groupId);
      if (g) {
        g.codes.push(c.code);
        g.tasks += c.count;
      } else {
        const s: Slot = { codes: [c.code], section: c.section, type: c.type, tasks: c.count };
        groups.set(c.groupId, s);
        slots.push(s);
      }
    } else if (c.type === 'Y-2') {
      slots.push({ codes: [c.code], section: c.section, type: c.type, tasks: c.count });
    } else {
      for (let i = 0; i < c.count; i++) slots.push({ codes: [c.code], section: c.section, type: c.type, tasks: 1 });
    }
  }
  return slots;
}

function fitsLang(q: Question, section: number, spec: ExamSpec, examLang: Locale) {
  const langDep = spec.sections.find((s) => s.id === section)?.languageDependent;
  return langDep ? q.lang === examLang : q.lang === 'both' || q.lang === examLang;
}

/** Candidate questions for each slot, in stable bank order. */
export function candidatesForSlot(slot: Slot, bank: Question[], spec: ExamSpec, examLang: Locale): Question[] {
  return bank.filter(
    (q) =>
      q.pool === 'exam' &&
      q.section === slot.section &&
      q.type === slot.type &&
      slot.codes.includes(q.code) &&
      taskCount(q) === slot.tasks &&
      fitsLang(q, slot.section, spec, examLang),
  );
}

/** How many complete, non-overlapping variants the bank supports for a language. */
export function availableVariants(spec: ExamSpec, bank: Question[], examLang: Locale): number {
  const slots = slotsFromSpec(spec);
  // slots sharing a code consume candidates jointly
  const demand = new Map<string, { need: number; have: number }>();
  for (const s of slots) {
    const key = `${s.section}|${s.type}|${s.codes.join(',')}|${s.tasks}`;
    const d = demand.get(key) ?? { need: 0, have: candidatesForSlot(s, bank, spec, examLang).length };
    d.need += 1;
    demand.set(key, d);
  }
  let min = Infinity;
  for (const d of demand.values()) min = Math.min(min, Math.floor(d.have / d.need));
  return Number.isFinite(min) ? min : 0;
}

/**
 * Assembles variant `n` (1-based). Variant n uses the n-th disjoint set of items
 * for every slot, so no two variants share an item. Returns null if the bank
 * cannot support that variant.
 */
export function assembleVariant(spec: ExamSpec, bank: Question[], examLang: Locale, n: number): Question[] | null {
  if (n < 1 || n > availableVariants(spec, bank, examLang)) return null;
  const slots = slotsFromSpec(spec);
  const used = new Map<string, number>();
  const out: Question[] = [];
  for (const s of slots) {
    const key = `${s.section}|${s.type}|${s.codes.join(',')}|${s.tasks}`;
    const need = slots.filter((x) => `${x.section}|${x.type}|${x.codes.join(',')}|${x.tasks}` === key).length;
    const k = used.get(key) ?? 0;
    used.set(key, k + 1);
    const cands = candidatesForSlot(s, bank, spec, examLang);
    out.push(cands[(n - 1) * need + k]);
  }
  return out;
}

/** Structural validation of an assembled variant against the spec. Returns problems. */
export function validateVariant(spec: ExamSpec, qs: Question[]): string[] {
  const problems: string[] = [];
  const total = qs.reduce((s, q) => s + taskCount(q), 0);
  if (total !== spec.totalTasks) problems.push(`total tasks ${total} != ${spec.totalTasks}`);
  for (const sec of spec.sections) {
    const n = qs.filter((q) => q.section === sec.id).reduce((s, q) => s + taskCount(q), 0);
    if (n !== sec.count) problems.push(`section ${sec.id}: ${n} != ${sec.count}`);
  }
  const want: Record<string, number> = {};
  for (const c of spec.codes) want[c.type] = (want[c.type] ?? 0) + c.count;
  const got: Record<string, number> = {};
  for (const q of qs) got[q.type] = (got[q.type] ?? 0) + taskCount(q);
  for (const t of Object.keys(want)) if (want[t] !== got[t]) problems.push(`type ${t}: ${got[t] ?? 0} != ${want[t]}`);
  if (new Set(qs.map((q) => q.id)).size !== qs.length) problems.push('duplicate item ids');
  return problems;
}

/* ------------------------------------------------------------------ */
/* Timer                                                               */
/* ------------------------------------------------------------------ */

/** Remaining milliseconds computed from an absolute end time (survives reloads). */
export function remainingMs(endAt: number, now: number): number {
  return Math.max(0, endAt - now);
}

export function formatClock(ms: number): string {
  const s = Math.ceil(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const p = (x: number) => String(x).padStart(2, '0');
  return h > 0 ? `${h}:${p(m)}:${p(sec)}` : `${p(m)}:${p(sec)}`;
}

/* ------------------------------------------------------------------ */
/* Spaced repetition (Leitner boxes with expanding intervals)          */
/* ------------------------------------------------------------------ */

export interface SrsCard {
  key: string; // question id or competency code
  box: number; // 0..5
  due: string; // YYYY-MM-DD
  streak: number;
  lapses: number;
  lastSeen: string;
}

/** Days until the next review for each box. A skill needs several spaced
 * successes before it leaves the review queue. */
export const BOX_DAYS = [0, 1, 3, 7, 16, 35];

export function isoDay(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function addDays(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number);
  return isoDay(new Date(y, m - 1, d + n));
}

export function daysBetween(a: string, b: string): number {
  const [y1, m1, d1] = a.split('-').map(Number);
  const [y2, m2, d2] = b.split('-').map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
}

export function reviewCard(card: SrsCard | undefined, key: string, correct: boolean, today: string): SrsCard {
  const c: SrsCard = card ? { ...card } : { key, box: 0, due: today, streak: 0, lapses: 0, lastSeen: today };
  if (correct) {
    // A correct answer only promotes the card if it was due (prevents cramming).
    if (!card || daysBetween(card.due, today) >= 0) c.box = Math.min(5, c.box + 1);
    c.streak += 1;
  } else {
    c.box = 0;
    c.streak = 0;
    c.lapses += 1;
  }
  c.due = addDays(today, correct ? BOX_DAYS[c.box] : 1);
  c.lastSeen = today;
  return c;
}

export function dueCards(cards: SrsCard[], today: string): SrsCard[] {
  return cards.filter((c) => daysBetween(c.due, today) >= 0).sort((a, b) => a.box - b.box || a.due.localeCompare(b.due));
}

/** A skill counts as mastered only after reaching box 3+ (≥3 spaced successes). */
export function isMastered(c: SrsCard | undefined): boolean {
  return !!c && c.box >= 3;
}

/* ------------------------------------------------------------------ */
/* Readiness index (transparent, internal — NOT an official score)     */
/* ------------------------------------------------------------------ */

export interface CodeStat {
  attempts: number;
  correct: number;
  /** Exponentially weighted recent accuracy 0..1. */
  ewma: number;
  lastDay: string;
}

export function updateCodeStat(s: CodeStat | undefined, correct: boolean, today: string): CodeStat {
  const prev = s ?? { attempts: 0, correct: 0, ewma: 0.5, lastDay: today };
  return {
    attempts: prev.attempts + 1,
    correct: prev.correct + (correct ? 1 : 0),
    ewma: prev.attempts === 0 ? (correct ? 1 : 0) : prev.ewma * 0.7 + (correct ? 0.3 : 0),
    lastDay: today,
  };
}

/**
 * Readiness = weighted mean over all spec codes of recent accuracy (EWMA),
 * weighted by the code's task count; codes never practiced count as 0.
 * Documented formula, shown to the user; not a prediction of the official score.
 */
export function readiness(spec: ExamSpec, stats: Record<string, CodeStat>): { value: number; coverage: number } {
  let w = 0, sum = 0, covered = 0;
  for (const c of spec.codes) {
    w += c.count;
    const s = stats[c.code];
    if (s && s.attempts > 0) {
      covered += c.count;
      sum += c.count * s.ewma;
    }
  }
  return { value: w ? Math.round((sum / w) * 100) : 0, coverage: w ? Math.round((covered / w) * 100) : 0 };
}

/* ------------------------------------------------------------------ */
/* Study planning                                                      */
/* ------------------------------------------------------------------ */

export interface PlanBlock {
  kind: 'review' | 'section' | 'quiz' | 'exam';
  section?: number;
  minutes: number;
}

/** Preparation target: B+ focuses on high-yield gaps, A+ on full mastery and hard items. */
export type PrepMode = 'standard' | 'bplus' | 'aplus';
export const MODE_TARGET: Record<PrepMode, number> = { standard: 0.75, bplus: 0.65, aplus: 0.85 };

/** Splits the daily time budget: review first, the rest by section weakness.
 * `catchUp` (after missed days) gives review a larger share; the mode target
 * decides when a section counts as "good enough" and only gets maintenance time. */
export function dailyPlan(minutes: number, dueCount: number, sectionAccuracy: Record<number, number>, opts: { catchUp?: boolean; mode?: PrepMode } = {}): PlanBlock[] {
  const blocks: PlanBlock[] = [];
  const share = opts.catchUp ? 0.35 : 0.2;
  const review = dueCount > 0 ? Math.min(Math.round(minutes * share), Math.max(5, dueCount)) : 0;
  const quiz = minutes >= 30 ? 5 : 0;
  const rest = Math.max(0, minutes - review - quiz);
  if (review) blocks.push({ kind: 'review', minutes: review });
  const target = MODE_TARGET[opts.mode ?? 'standard'];
  // weakness weight: gap to the target + 0.2 floor so every section is practiced
  const secs = [1, 2, 3];
  const weights = secs.map((s) => Math.max(0, target - (sectionAccuracy[s] ?? 0.5)) + 0.2);
  const tw = weights.reduce((a, b) => a + b, 0);
  let assigned = 0;
  secs.forEach((s, i) => {
    const m = i === secs.length - 1 ? rest - assigned : Math.round((rest * weights[i]) / tw);
    assigned += m;
    if (m > 0) blocks.push({ kind: 'section', section: s, minutes: m });
  });
  if (quiz) blocks.push({ kind: 'quiz', minutes: quiz });
  return blocks;
}

/**
 * Ranks spec codes for personal practice. Score = task weight × gap to the
 * mode target. Unpractised codes are assumed at 0.5. In A+ mode mastered codes
 * keep a small maintenance score; in B+ mode codes above target drop out.
 */
export function codePriority(spec: ExamSpec, stats: Record<string, CodeStat>, mode: PrepMode = 'standard'): { code: string; score: number }[] {
  const target = MODE_TARGET[mode];
  return spec.codes
    .map((c) => {
      const acc = stats[c.code]?.attempts ? stats[c.code].ewma : 0.5;
      const gap = Math.max(0, target - acc);
      const score = c.count * (gap > 0 ? gap : mode === 'aplus' ? 0.02 : 0);
      return { code: c.code, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.code.localeCompare(b.code, undefined, { numeric: true }));
}

/* ------------------------------------------------------------------ */
/* Intensive programs (7/14/30/60/90 days) with automatic re-planning  */
/* ------------------------------------------------------------------ */

export type ProgramLength = 7 | 14 | 30 | 60 | 90;
export type Phase = 'foundation' | 'practice' | 'mock' | 'final';
const PHASES: Phase[] = ['foundation', 'practice', 'mock', 'final'];
const PHASE_SHARE = [0.4, 0.3, 0.2, 0.1];
export const PROGRAM_MINUTES: Record<ProgramLength, number> = { 7: 120, 14: 90, 30: 75, 60: 60, 90: 45 };

export interface ProgramStatus {
  day: number; // 1-based calendar day of the program
  total: number;
  daysLeft: number; // including today
  missed: number; // calendar days without activity since the start (before today)
  activeDone: number; // active days before today
  phase: Phase;
  mockToday: boolean;
  /** True when missed days forced the plan to compress or skip ahead. */
  rebuilt: boolean;
  finished: boolean;
}

/**
 * Where the learner is in a program. Progress is measured in days actually
 * studied, not calendar days; when days were missed, the remaining phases are
 * squeezed into the remaining calendar so mock exams and the final review
 * still happen before the end (the "rebuilt" plan).
 */
export function programStatus(p: { length: ProgramLength; start: string }, today: string, activeDays: string[]): ProgramStatus {
  const total = p.length;
  const elapsed = Math.max(0, daysBetween(p.start, today));
  const active = new Set(activeDays);
  let activeDone = 0;
  for (let i = 0; i < Math.min(elapsed, total); i++) if (active.has(addDays(p.start, i))) activeDone++;
  const missed = Math.min(elapsed, total) - activeDone;
  const daysLeft = Math.max(0, total - elapsed);
  const finished = daysLeft === 0;
  // phase by work done
  let cum = 0, byWork = PHASES.length - 1;
  for (let i = 0; i < PHASES.length; i++) { cum += PHASE_SHARE[i] * total; if (activeDone < cum - 1e-9) { byWork = i; break; } }
  // phase by calendar: the last 10% is always the final review, the 20% before it mock exams
  const left = daysLeft / total;
  const byTime = left <= PHASE_SHARE[3] + 1e-9 ? 3 : left <= PHASE_SHARE[3] + PHASE_SHARE[2] + 1e-9 ? 2 : 0;
  const idx = Math.max(byWork, byTime);
  const phase = PHASES[idx];
  const rebuilt = missed > 0 && byTime > byWork;
  const day = Math.min(total, elapsed + 1);
  const mockEvery = total <= 14 ? 2 : 3;
  const mockToday = !finished && ((phase === 'mock' && (day % mockEvery === 0 || daysLeft <= 2)) || (phase === 'practice' && total >= 30 && day % 7 === 0));
  return { day, total, daysLeft, missed, activeDone, phase, mockToday, rebuilt, finished };
}

/** Days since the last active day minus one (0 when active yesterday or today). */
export function missedSinceLast(activeDays: string[], today: string): number {
  const past = activeDays.filter((d) => d < today).sort();
  if (!past.length) return 0;
  return Math.max(0, daysBetween(past[past.length - 1], today) - 1);
}

/* ------------------------------------------------------------------ */
/* Comparing exam attempts                                             */
/* ------------------------------------------------------------------ */

export interface ReportDiff {
  correct: number; // delta in correct answers
  percent: number;
  bySection: Record<number, number>; // delta in percentage points
  improved: string[]; // codes wrong before, right now
  regressed: string[]; // codes right before, wrong now
}

export function compareReports(prev: ExamReport, cur: ExamReport): ReportDiff {
  const pct = (v?: { correct: number; total: number }) => (v && v.total ? (v.correct / v.total) * 100 : 0);
  const bySection: Record<number, number> = {};
  for (const k of new Set([...Object.keys(prev.bySection), ...Object.keys(cur.bySection)].map(Number))) {
    bySection[k] = Math.round(pct(cur.bySection[k]) - pct(prev.bySection[k]));
  }
  const improved: string[] = [], regressed: string[] = [];
  for (const code of Object.keys(cur.byCode)) {
    const a = prev.byCode[code], b = cur.byCode[code];
    if (!a) continue;
    if (b.correct > a.correct) improved.push(code);
    else if (b.correct < a.correct) regressed.push(code);
  }
  return { correct: cur.correct - prev.correct, percent: cur.percent - prev.percent, bySection, improved, regressed };
}

export type PlanLength = 7 | 14 | 30 | 60 | 90 | 0;

/** Picks a plan length from days to exam and warns honestly when time is short. */
export function planForDate(today: string, examDay: string | undefined): { length: PlanLength; daysLeft: number | null; tight: boolean } {
  if (!examDay) return { length: 0, daysLeft: null, tight: false };
  const d = daysBetween(today, examDay);
  const length: PlanLength = d <= 7 ? 7 : d <= 14 ? 14 : d <= 30 ? 30 : d <= 60 ? 60 : 90;
  return { length, daysLeft: d, tight: d < 14 };
}

/** Counts consecutive active days ending today (or yesterday). */
export function streak(activeDays: string[], today: string): number {
  const set = new Set(activeDays);
  let d = set.has(today) ? today : addDays(today, -1);
  let n = 0;
  while (set.has(d)) {
    n++;
    d = addDays(d, -1);
  }
  return n;
}
