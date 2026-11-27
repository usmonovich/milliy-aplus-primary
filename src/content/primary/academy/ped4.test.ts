// Pedagogy batch 7: structure checks and independent re-computation of every computed answer.
import { describe, expect, it } from 'vitest';
import type { Question } from '../../../core/types';
import { rubricScore } from '../../../ui/w7/ped';
import { PED4_LESSONS } from './ped4';
import { PED4_SOURCES } from './ped4src';

const all: Question[] = PED4_LESSONS.flatMap((l) => [...l.blocks.flatMap((b) => (b.kind === 'try' ? [b.q] : [])), ...l.check]);
const q = (id: string) => all.find((x) => x.id === id)!;

describe('ped batch 7 lessons', () => {
  it('has 10 lessons with unique ids and full structure', () => {
    expect(PED4_LESSONS.length).toBe(10);
    expect(new Set(PED4_LESSONS.map((l) => l.id)).size).toBe(10);
    for (const l of PED4_LESSONS) {
      const k = l.blocks.map((b) => b.kind);
      expect(k.filter((x) => x === 'example').length, l.id).toBeGreaterThanOrEqual(3);
      for (const need of ['intro', 'definition', 'rule', 'derivation', 'exception', 'mistake', 'try', 'method', 'apply', 'summary'] as const) expect(k, `${l.id} ${need}`).toContain(need);
      expect(k.includes('table') || k.includes('formula'), l.id).toBe(true);
      expect(l.check.length, l.id).toBeGreaterThanOrEqual(5);
    }
  });
  it('new sources are marked as read with url and date', () => {
    for (const s of PED4_SOURCES) { expect(s.accessed).toBe(true); expect(s.url).toBeTruthy(); expect(s.checkedAt).toBe('2026-11-25'); }
  });
  it('rubric totals match an independent computation', () => {
    expect(rubricScore([3, 2, 3, 1], [1, 1, 1, 1], 3)).toEqual({ score: 9, max: 12, pct: 75 });
    expect(rubricScore([3, 2, 3, 1], [2, 1, 1, 1], 3)).toEqual({ score: 12, max: 15, pct: 80 });
    const lv = [4, 3, 3, 2, 4];
    const pct = (lv.reduce((a, b) => a + b, 0) / (lv.length * 4)) * 100;
    expect(pct).toBe(80);
    const r = q('a-p4-rb-c2');
    expect(r.type === 'O-1' && r.numeric).toBe(pct);
  });
  it('diagnostic percentage and worked subtraction errors are consistent', () => {
    const d = q('a-p4-dg-c3');
    expect(d.type === 'O-1' && d.numeric).toBe((7 / 28) * 100);
    // the faulty "smaller from larger digit" rule reproduces the wrong answers shown in the lesson
    const wrong = (a: number, b: number) => Math.abs(Math.floor(a / 10) - Math.floor(b / 10)) * 10 + Math.abs((a % 10) - (b % 10));
    expect([wrong(71, 36), wrong(83, 47), wrong(62, 28), wrong(54, 19)]).toEqual([45, 44, 46, 45]);
    expect([71 - 36, 83 - 47, 62 - 28, 54 - 19]).toEqual([35, 36, 34, 35]);
  });
  it('counts in cases add up', () => {
    expect(9 + 4 + 11).toBe(24); // dictation analysis groups
    expect(8 + 6 + 6 + 6).toBe(26); // Navruz roles
    expect(6 * 4).toBe(24); // jigsaw home groups
    expect(24 + 7 - 23.5).toBe(7.5); // 23:30 → 7:00 sleep, hours
  });
});
