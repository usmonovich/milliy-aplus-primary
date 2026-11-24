// Persistent local state (IndexedDB, falls back to localStorage) with a tiny
// subscribe API for React. No server, no account: export/import moves progress.
import { useSyncExternalStore } from 'react';
import { isoDay, reviewCard, updateCodeStat, type CodeStat, type SrsCard, type ExamReport } from './engine';
import type { Locale, Response } from './types';

export interface Settings {
  uiLang: Locale;
  examLang: Locale;
  theme: 'system' | 'light' | 'dark';
  fontScale: number;
  reduceMotion: boolean;
  reminder: string; // HH:MM
}

export interface Profile {
  onboarded: boolean;
  experience: number;
  selfLevel: number;
  target: string;
  examDate?: string;
  minutes: number;
  mode: number;
  diagnosticDone: boolean;
}

export interface Attempt {
  id: string;
  kind: 'full' | 'section' | 'express' | 'untimed' | 'sit' | 'open' | 'hard';
  variant?: number;
  section?: number;
  lang: Locale;
  qids: string[];
  startedAt: number;
  endAt: number | null; // absolute deadline; null = untimed
  answers: Record<string, Response>;
  flags: string[];
  current: number;
  finishedAt?: number;
  report?: ExamReport;
  timedOut?: boolean;
}

export interface MistakeRec { qid: string; code: string; count: number; last: string; lastAnswer?: Response; resolved: boolean }

export interface State {
  v: 1;
  settings: Settings;
  profile: Profile;
  stats: Record<string, CodeStat>;
  srs: Record<string, SrsCard>;
  mistakes: Record<string, MistakeRec>;
  answerLog: { day: string; code: string; ok: boolean; ms: number; type: string }[];
  activeDays: string[];
  xp: number;
  achievements: string[];
  attempts: Attempt[];
  activeExam?: Attempt;
  lessonsDone: Record<string, string>;
  favorites: string[];
  simBest: Record<string, number>;
  dailyDone: Record<string, string[]>; // day -> block keys done
  lastNotified?: string;
}

const defaultLang: Locale = typeof navigator !== 'undefined' && navigator.language?.startsWith('ru') ? 'ru' : 'uz';

export const initialState = (): State => ({
  v: 1,
  settings: { uiLang: defaultLang, examLang: defaultLang, theme: 'system', fontScale: 1, reduceMotion: false, reminder: '19:00' },
  profile: { onboarded: false, experience: 1, selfLevel: 1, target: 'B+', minutes: 60, mode: 1, diagnosticDone: false },
  stats: {}, srs: {}, mistakes: {}, answerLog: [], activeDays: [], xp: 0, achievements: [], attempts: [],
  lessonsDone: {}, favorites: [], simBest: {}, dailyDone: {},
});

/* ---------------- persistence ---------------- */

const KEY = 'milliy-aplus-primary/state';
const DB = 'milliy-aplus';

function idb(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB, 1);
      req.onupgradeneeded = () => req.result.createObjectStore('kv');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function load(): Promise<State | null> {
  const db = await idb();
  if (db) {
    const v = await new Promise<unknown>((res) => {
      try {
        const r = db.transaction('kv').objectStore('kv').get(KEY);
        r.onsuccess = () => res(r.result);
        r.onerror = () => res(null);
      } catch { res(null); }
    });
    if (v) return v as State;
  }
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as State) : null;
  } catch { return null; }
}

let saveTimer: number | undefined;
async function persist(s: State) {
  const db = await idb();
  if (db) {
    try {
      db.transaction('kv', 'readwrite').objectStore('kv').put(s, KEY);
      return;
    } catch { /* fall through */ }
  }
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* quota or private mode */ }
}

/* ---------------- store ---------------- */

let state: State = initialState();
let ready = false;
const subs = new Set<() => void>();

export function merge(base: State, loaded: Partial<State>): State {
  return {
    ...base, ...loaded,
    settings: { ...base.settings, ...(loaded.settings ?? {}) },
    profile: { ...base.profile, ...(loaded.profile ?? {}) },
  };
}

export async function initStore() {
  const loaded = await load();
  if (loaded) state = merge(initialState(), loaded);
  ready = true;
  subs.forEach((f) => f());
}

export const getState = () => state;
export const isReady = () => ready;

export function setState(fn: (s: State) => State, immediate = false) {
  state = fn(state);
  subs.forEach((f) => f());
  window.clearTimeout(saveTimer);
  if (immediate) void persist(state);
  else saveTimer = window.setTimeout(() => void persist(state), 250);
}

export function useStore<T>(sel: (s: State) => T): T {
  return useSyncExternalStore(
    (cb) => { subs.add(cb); return () => subs.delete(cb); },
    () => sel(state),
  );
}

export const today = () => isoDay(new Date());

/* ---------------- actions ---------------- */

export function recordAnswer(args: { qid: string; code: string; type: string; correct: boolean; partial?: boolean; response?: Response; ms: number; fromExam?: boolean }) {
  const d = today();
  setState((s) => {
    const mistakes = { ...s.mistakes };
    if (!args.correct) {
      const prev = mistakes[args.qid];
      mistakes[args.qid] = { qid: args.qid, code: args.code, count: (prev?.count ?? 0) + 1, last: d, lastAnswer: args.response, resolved: false };
    } else if (mistakes[args.qid]) {
      mistakes[args.qid] = { ...mistakes[args.qid], last: d };
    }
    const itemKey = `q:${args.qid}`, codeKey = `c:${args.code}`;
    const srs = { ...s.srs };
    // Items are scheduled only once they were answered wrong; skills (codes) always.
    if (!args.correct || srs[itemKey]) srs[itemKey] = reviewCard(srs[itemKey], itemKey, args.correct, d);
    srs[codeKey] = reviewCard(srs[codeKey], codeKey, args.correct, d);
    // A mistake is resolved only after the item reaches box 3 (several spaced successes).
    if (mistakes[args.qid] && srs[itemKey]?.box >= 3) mistakes[args.qid] = { ...mistakes[args.qid], resolved: true };
    return {
      ...s,
      stats: { ...s.stats, [args.code]: updateCodeStat(s.stats[args.code], args.correct, d) },
      srs, mistakes,
      answerLog: [...s.answerLog.slice(-4999), { day: d, code: args.code, ok: args.correct, ms: args.ms, type: args.type }],
      activeDays: s.activeDays.includes(d) ? s.activeDays : [...s.activeDays, d],
      xp: s.xp + (args.fromExam ? 0 : args.correct ? 10 : 2),
    };
  });
}

export function addXp(n: number) { setState((s) => ({ ...s, xp: s.xp + n })); }

export function markDaily(key: string) {
  const d = today();
  setState((s) => ({ ...s, dailyDone: { [d]: [...new Set([...(s.dailyDone[d] ?? []), key])] } }));
}

export function exportJSON(): string {
  return JSON.stringify({ app: 'milliy-aplus-primary', exportedAt: new Date().toISOString(), state }, null, 1);
}

export function importJSON(text: string): boolean {
  try {
    const data = JSON.parse(text);
    if (data?.app !== 'milliy-aplus-primary' || data.state?.v !== 1) return false;
    setState(() => merge(initialState(), data.state), true);
    return true;
  } catch { return false; }
}

export function resetAll() { setState(() => ({ ...initialState(), settings: state.settings }), true); }
