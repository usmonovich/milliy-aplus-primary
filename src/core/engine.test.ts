import { describe, expect, it } from 'vitest';
import {
  addDays, checkOpen, dailyPlan, formatClock, gradeQuestion, levelForOfficialScore, normalizeText,
  parseNumber, readiness, remainingMs, reviewCard, slotsFromSpec, streak, isMastered,
} from './engine';
import { PRIMARY_SPEC } from '../content/primary/spec';
import type { MatchingQuestion, OpenQuestion } from './types';

const base = {
  section: 2, code: '2.2.6', competency: { uz: '', ru: '' }, cognitive: 'lower' as const, difficulty: 2 as const,
  stem: { uz: '', ru: '' }, explanation: { uz: '', ru: '' }, sourceIds: [], status: 'auto_checked' as const,
  origin: 'original' as const, version: 1, pool: 'practice' as const, lang: 'both' as const,
};

describe('official spec', () => {
  it('has 90 tasks, 30 per section, 180 minutes', () => {
    const total = PRIMARY_SPEC.codes.reduce((s, c) => s + c.count, 0);
    expect(total).toBe(90);
    for (const s of [1, 2, 3]) {
      expect(PRIMARY_SPEC.codes.filter((c) => c.section === s).reduce((a, c) => a + c.count, 0)).toBe(30);
    }
    expect(PRIMARY_SPEC.durationMin).toBe(180);
  });
  it('matches official type distribution 18/59/6/7', () => {
    const by: Record<string, number> = {};
    for (const c of PRIMARY_SPEC.codes) by[c.type] = (by[c.type] ?? 0) + c.count;
    expect(by).toEqual({ 'Y-1': 18, 'V-Y-1': 59, 'Y-2': 6, 'O-1': 7 });
  });
  it('builds slots with two Y-2 blocks of 3 tasks', () => {
    const slots = slotsFromSpec(PRIMARY_SPEC);
    expect(slots.reduce((s, x) => s + x.tasks, 0)).toBe(90);
    expect(slots.filter((s) => s.type === 'Y-2').map((s) => s.tasks)).toEqual([3, 3]);
  });
  it('maps official scores to levels with A+ strictly above 70', () => {
    expect(levelForOfficialScore(PRIMARY_SPEC, 70)).toBe('A');
    expect(levelForOfficialScore(PRIMARY_SPEC, 70.1)).toBe('A+');
    expect(levelForOfficialScore(PRIMARY_SPEC, 60)).toBe('B+');
    expect(levelForOfficialScore(PRIMARY_SPEC, 45.9)).toBeNull();
  });
});

describe('open answer normalization', () => {
  it('ignores case, spaces, apostrophe variants and trailing dots', () => {
    expect(normalizeText('  Kontekst  orqali  ')).toBe('kontekst orqali');
    expect(normalizeText('O‘qish')).toBe(normalizeText("O'qish"));
    expect(normalizeText('Ёлка.')).toBe('елка');
  });
  it('parses numeric notations', () => {
    expect(parseNumber('2,5')).toBe(2.5);
    expect(parseNumber('2.5')).toBe(2.5);
    expect(parseNumber('5/2')).toBe(2.5);
    expect(parseNumber('2 1/2')).toBe(2.5);
    expect(parseNumber('1 200')).toBe(1200);
    expect(parseNumber('12 sm')).toBeNull();
    expect(parseNumber('1/0')).toBeNull();
  });
  it('accepts equivalent numbers but rejects wrong ones', () => {
    const q: OpenQuestion = { ...base, id: 'n', type: 'O-1', answer: { uz: '2,5', ru: '2,5' }, accept: { uz: [], ru: [] }, numeric: 2.5 };
    expect(checkOpen(q, '2.5', 'uz')).toBe(true);
    expect(checkOpen(q, '5/2', 'ru')).toBe(true);
    expect(checkOpen(q, '25', 'uz')).toBe(false);
    expect(checkOpen(q, '', 'uz')).toBe(false);
  });
  it('does not accept partial words', () => {
    const q: OpenQuestion = { ...base, id: 't', type: 'O-1', answer: { uz: 'baholash', ru: 'оценка' }, accept: { uz: [], ru: ['оценивание'] } };
    expect(checkOpen(q, 'Baholash', 'uz')).toBe(true);
    expect(checkOpen(q, 'bahola', 'uz')).toBe(false);
    expect(checkOpen(q, 'Оценивание', 'ru')).toBe(true);
  });
});

describe('grading', () => {
  it('scores each matching stem separately', () => {
    const q: MatchingQuestion = {
      ...base, id: 'm', type: 'Y-2', choices: [],
      stems: [{ id: '1', text: base.stem, answer: 'A' }, { id: '2', text: base.stem, answer: 'C' }, { id: '3', text: base.stem, answer: 'E' }],
    };
    expect(gradeQuestion(q, { kind: 'match', value: { '1': 'A', '2': 'B', '3': 'E' } }, 'uz')).toBe(2);
    expect(gradeQuestion(q, undefined, 'uz')).toBe(0);
  });
});

describe('timer', () => {
  it('computes remaining time from absolute end', () => {
    expect(remainingMs(1000, 400)).toBe(600);
    expect(remainingMs(1000, 5000)).toBe(0);
    expect(formatClock(3 * 3600 * 1000)).toBe('3:00:00');
    expect(formatClock(59_500)).toBe('01:00');
  });
});

describe('spaced repetition', () => {
  it('requires several spaced successes before mastery and resets on error', () => {
    const d0 = '2026-11-24';
    let c = reviewCard(undefined, 'k', false, d0);
    expect(c.box).toBe(0);
    expect(c.due).toBe(addDays(d0, 1));
    c = reviewCard(c, 'k', true, addDays(d0, 1));
    expect(isMastered(c)).toBe(false);
    const same = reviewCard(c, 'k', true, addDays(d0, 1));
    expect(same.box).toBe(c.box);
    c = reviewCard(c, 'k', true, c.due);
    c = reviewCard(c, 'k', true, c.due);
    expect(isMastered(c)).toBe(true);
    c = reviewCard(c, 'k', false, c.due);
    expect(c.box).toBe(0);
  });
});

describe('planning and streaks', () => {
  it('splits the budget exactly and gives more time to weak sections', () => {
    const p = dailyPlan(60, 12, { 1: 0.9, 2: 0.4, 3: 0.6 });
    expect(p.reduce((s, b) => s + b.minutes, 0)).toBe(60);
    const sec = (n: number) => p.find((b) => b.section === n)!.minutes;
    expect(sec(2)).toBeGreaterThan(sec(1));
  });
  it('counts streaks', () => {
    expect(streak(['2026-11-22', '2026-11-23', '2026-11-24'], '2026-11-24')).toBe(3);
    expect(streak(['2026-11-22', '2026-11-23'], '2026-11-24')).toBe(2);
    expect(streak(['2026-11-20'], '2026-11-24')).toBe(0);
  });
  it('readiness counts unpracticed codes as zero', () => {
    expect(readiness(PRIMARY_SPEC, {})).toEqual({ value: 0, coverage: 0 });
  });
});

describe('preparation modes and programs', () => {
  it('B+ mode ignores codes above 65%, A+ keeps maintenance for mastered codes', async () => {
    const { codePriority } = await import('./engine');
    const { PRIMARY_SPEC } = await import('../content/primary/spec');
    const stats = { '3.1.1': { attempts: 5, correct: 4, ewma: 0.7, lastDay: '2026-11-01' }, '2.1.1': { attempts: 5, correct: 1, ewma: 0.2, lastDay: '2026-11-01' } };
    const b = codePriority(PRIMARY_SPEC, stats, 'bplus');
    expect(b.find((x) => x.code === '3.1.1')).toBeUndefined();
    expect(b[0].code).toBe('1.4.1'); // 3 tasks × gap 0.15 outweighs 1 task × 0.45
    const a = codePriority(PRIMARY_SPEC, stats, 'aplus');
    expect(a.find((x) => x.code === '3.1.1')!.score).toBeGreaterThan(0);
    expect(a.find((x) => x.code === '2.1.1')!.score).toBeCloseTo(0.65);
  });

  it('dailyPlan gives review a bigger share after missed days', () => {
    const normal = dailyPlan(60, 30, { 1: 0.5, 2: 0.5, 3: 0.5 });
    const catchUp = dailyPlan(60, 30, { 1: 0.5, 2: 0.5, 3: 0.5 }, { catchUp: true });
    expect(catchUp[0].minutes).toBeGreaterThan(normal[0].minutes);
    expect(catchUp.reduce((s, b) => s + b.minutes, 0)).toBe(60);
  });

  it('programStatus follows the phases and rebuilds after missed days', async () => {
    const { programStatus } = await import('./engine');
    const start = '2026-11-01';
    const days = (n: number) => Array.from({ length: n }, (_, i) => addDays(start, i));
    // studied every day: day 5 of 30 is foundation
    expect(programStatus({ length: 30, start }, addDays(start, 4), days(4)).phase).toBe('foundation');
    // missed everything until day 25: calendar forces mock phase and marks the plan rebuilt
    const late = programStatus({ length: 30, start }, addDays(start, 24), []);
    expect(late.phase).toBe('mock');
    expect(late.rebuilt).toBe(true);
    expect(late.missed).toBe(24);
    // last 10% is always the final review
    expect(programStatus({ length: 30, start }, addDays(start, 28), days(28)).phase).toBe('final');
    expect(programStatus({ length: 7, start }, addDays(start, 9), days(7)).finished).toBe(true);
  });

  it('compareReports shows deltas per section and per code', async () => {
    const { compareReports } = await import('./engine');
    const prev = { correct: 40, total: 90, percent: 44, bySection: { 1: { correct: 10, total: 30 } }, byType: {}, byCode: { '1.1.1': { correct: 0, total: 1 }, '1.1.2': { correct: 1, total: 1 } } };
    const cur = { correct: 50, total: 90, percent: 56, bySection: { 1: { correct: 20, total: 30 } }, byType: {}, byCode: { '1.1.1': { correct: 1, total: 1 }, '1.1.2': { correct: 0, total: 1 } } };
    const d = compareReports(prev, cur);
    expect(d.correct).toBe(10);
    expect(d.bySection[1]).toBe(33);
    expect(d.improved).toEqual(['1.1.1']);
    expect(d.regressed).toEqual(['1.1.2']);
  });
});
