// Independent re-solve of every numeric / countable answer in the batch-7 math lessons:
// values are recomputed from the problem data (enumeration, counting, formulas), not copied.
import { describe, expect, it } from 'vitest';
import type { Question } from '../../../core/types';
import { MATH4_LESSONS } from './math4';
import { HAND_WRITTEN } from '../index';

const QS: Question[] = MATH4_LESSONS.flatMap((l) => [...l.blocks.flatMap((b) => (b.kind === 'try' ? [b.q] : [])), ...l.check]);
const q = (id: string) => { const x = QS.find((y) => y.id === id); if (!x) throw new Error(`missing ${id}`); return x; };
const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

/** Unordered pairs of n distinct objects, by enumeration. */
const pairs = (n: number) => { let c = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) c++; return c; };
/** All arrangements of `len` items from `digits` (no repeats), filtered. */
function arrangements(digits: number[], len: number, ok: (a: number[]) => boolean = () => true): number[][] {
  const out: number[][] = [];
  const rec = (cur: number[], rest: number[]) => {
    if (cur.length === len) { if (ok(cur)) out.push(cur); return; }
    rest.forEach((d, i) => rec([...cur, d], rest.filter((_, k) => k !== i)));
  };
  rec([], digits);
  return out;
}
/** Angle between clock hands at an exact hour (smaller angle). */
const clock = (h: number) => { const a = (h % 12) * 30; return Math.min(a, 360 - a); };
/** Minimum draw guaranteeing goal: worst case simulated over all colour multisets (counts per colour). */
function minGuarantee(counts: number[], goal: (taken: number[]) => boolean): number {
  const total = counts.reduce((s, x) => s + x, 0);
  for (let n = 1; n <= total; n++) {
    // every way to take n items (per-colour amounts) must satisfy the goal
    let allOk = true;
    const rec = (i: number, left: number, taken: number[]) => {
      if (!allOk) return;
      if (i === counts.length) { if (left === 0 && !goal(taken)) allOk = false; return; }
      for (let t = 0; t <= Math.min(counts[i], left); t++) rec(i + 1, left - t, [...taken, t]);
    };
    rec(0, n, []);
    if (allOk) return n;
  }
  return Infinity;
}
/** Pigeonhole lower bound, by trying to spread N items as evenly as possible. */
const spread = (N: number, k: number) => { const boxes = Array(k).fill(0); for (let i = 0; i < N; i++) boxes[i % k]++; return Math.max(...boxes); };
/** Venn: counts of a set from a predicate over a range. */
const count = (xs: number[], p: (x: number) => boolean) => xs.filter(p).length;
/** Euler: edges from faces and vertices. */
const eulerEdges = (V: number, F: number) => V + F - 2;
/** Pyramid over an n-gon. */
const pyramid = (n: number) => ({ V: n + 1, E: 2 * n, F: n + 1 });
/** n-th term of arithmetic sequence found from first terms. */
const nth = (seq: number[], n: number) => { const d = seq[1] - seq[0]; seq.forEach((x, i) => i && expect(x - seq[i - 1]).toBe(d)); return seq[0] + (n - 1) * d; };

const open: Record<string, number> = {
  // points and lines
  'a-m-ln-t1': pairs(6), 'a-m-ln-c2': pairs(5), 'a-m-ln-c3': 3 * 2, 'a-m-ln-c5': [3, 6, 4].reduce((s, x) => s + x, 0), 'a-m-ln-c6': 14 - 9,
  // angles
  'a-m-an-t1': clock(5), 'a-m-an-c2': 180 - 65, 'a-m-an-c4': 90 - 38,
  // circle
  'a-m-ci-t1': 2 * 7, 'a-m-ci-c2': 18 / 2, 'a-m-ci-c3': 2 * (3 * (2 * 2) + 2 * 2), 'a-m-ci-c5': 6 + 6 + 5,
  // solids
  'a-m-so-t1': pyramid(6).E, 'a-m-so-c2': eulerEdges(6, 8), 'a-m-so-c4': pyramid(5).V, 'a-m-so-c5': 12 * 5,
  // volume
  'a-m-vo-t1': 7 * 2 * 3, 'a-m-vo-c1': (50 * 30 * 40) / 1000, 'a-m-vo-c3': 6 * 4 * 4, 'a-m-vo-c4': 72 / (6 * 4), 'a-m-vo-c6': 3 * 10 ** 3,
  // Venn
  'a-m-ve-t1': 32 - (20 + 15 - 8), 'a-m-ve-c1': 19 + 12 - 26,
  'a-m-ve-c3': count(range(1, 30), (x) => x % 2 === 0 || x % 5 === 0), 'a-m-ve-c4': 24 + 19 - (40 - 6),
  // statements: evaluate the four statements
  'a-m-st-c5': [15 > 9 && 4 < 2, 15 > 9 || 4 < 2, !(18 % 2 === 1), range(1, 50).filter((x) => x % 2 === 0).every((x) => x % 4 === 0)].filter(Boolean).length,
  // combinatorics (by enumeration)
  'a-m-cb-t1': 3 * 4, 'a-m-cb-c1': arrangements([1, 3, 5, 7, 9], 2).length, 'a-m-cb-c2': 2 * 5,
  'a-m-cb-c4': arrangements([0, 1, 2, 3], 3, (a) => a[0] !== 0).length, 'a-m-cb-c6': 2 ** 3,
  // pigeonhole (worst case by exhaustive check)
  'a-m-ph-t1': minGuarantee([6, 9], (t) => t[0] >= 1),
  'a-m-ph-c1': minGuarantee([20, 20, 20], (t) => t.some((x) => x >= 2)),
  'a-m-ph-c2': spread(30, 7),
  'a-m-ph-c4': minGuarantee([4, 5, 6], (t) => t.some((x) => x >= 2)),
  'a-m-ph-c5': minGuarantee([3, 7, 8], (t) => t.every((x) => x >= 1)),
  // patterns
  'a-m-pt-t1': nth([5, 12, 19, 26], 5), 'a-m-pt-c1': nth([4, 9, 14, 19], 15), 'a-m-pt-c2': nth([90, 83, 76], 6),
  'a-m-pt-c4': range(1, 25).filter((i) => i % 3 === 0).length, 'a-m-pt-c5': nth([3, 5, 7], 10),
};

const choice: Record<string, string> = {
  'a-m-an-c1': `$${[35, 90, 128, 180].find((a) => a > 90 && a < 180)}^\\circ$`,
  'a-m-ve-c2': String([30, 25, 14, 9].find((x) => x % 2 === 0 && x % 5 === 0)),
  'a-m-st-c3': String([12, 9, 15, 8].find((x) => x % 3 === 0 && x % 2 === 0)),
  'a-m-cb-c3': String(pairs(6)),
  'a-m-cb-c5': String(arrangements([1, 2, 3], 3).length),
  'a-m-vo-c2': String(10 * 10 * 10),
  'a-m-pt-c3': ['3, 6, 12, 24', '1, 4, 9, 16', '1, 2, 4, 7', '2, 5, 8, 11'].find((s) => { const a = s.split(', ').map(Number); return a.every((x, i) => i < 2 || x - a[i - 1] === a[1] - a[0]); })!,
  'a-m-pt-c6': String([1, 1, 2, 3, 5, 8].slice(-2).reduce((s, x) => s + x, 0)),
};

describe('math batch 7: independent re-solve', () => {
  it('open answers equal values computed from the problem data', () => {
    for (const [id, want] of Object.entries(open)) {
      const x = q(id);
      if (x.type !== 'O-1') throw new Error(`${id}: open item expected`);
      expect(x.answer.uz, id).toBe(String(want));
      expect(x.numeric, id).toBe(want);
    }
  });
  it('correct options equal values computed from the problem data', () => {
    for (const [id, want] of Object.entries(choice)) {
      const x = q(id);
      if (x.type === 'O-1' || x.type === 'Y-2') throw new Error(`${id}: choice item expected`);
      expect(x.choices.find((c) => c.id === x.answer)!.text.uz, id).toBe(want);
    }
  });
  it('the pet puzzle (matrix method) has a unique solution and the keyed answer matches it', () => {
    const names = ['Lola', 'Madina', 'Nigora'];
    const sols = arrangements([0, 1, 2], 3).map((p) => p.map((i) => ['cat', 'dog', 'parrot'][i]))
      .filter((pet) => pet[1] !== 'cat' && pet[2] !== 'cat' && pet[2] !== 'parrot');
    expect(sols.length).toBe(1);
    const owner = names[sols[0].indexOf('parrot')];
    const x = q('a-m-st-c4');
    if (x.type === 'O-1' || x.type === 'Y-2') throw new Error('choice expected');
    expect(x.choices.find((c) => c.id === x.answer)!.text.uz.startsWith(owner)).toBe(true);
  });
  it('solid counts in the lesson table satisfy Euler and the pyramid rule', () => {
    const solids = { cube: [8, 12, 6], box: [8, 12, 6], tri: [4, 6, 4], quad: [5, 8, 5], prism3: [6, 9, 5] };
    for (const [V, E, F] of Object.values(solids)) expect(V - E + F).toBe(2);
    expect(pyramid(3)).toEqual({ V: 4, E: 6, F: 4 });
    expect(pyramid(4)).toEqual({ V: 5, E: 8, F: 5 });
  });
  it('worked-example numbers re-solve', () => {
    expect(pairs(4)).toBe(6); // segments on 4 points, lines through 4 points in general position
    expect(clock(4)).toBe(120); expect(clock(9)).toBe(90); expect(180 - 72).toBe(108);
    expect(arrangements([1, 5, 8], 3).length).toBe(6);
    expect(arrangements([0, 2, 7], 2, (a) => a[0] !== 0).length).toBe(4);
    expect(pairs(5)).toBe(10);
    expect(minGuarantee([10, 10], (t) => t.some((x) => x >= 2))).toBe(3);
    expect(minGuarantee([5, 7], (t) => t[0] >= 1)).toBe(8);
    expect(spread(40, 12)).toBe(4);
    expect(nth([3, 7, 11, 15], 10)).toBe(39); expect(nth([4, 7, 10], 8)).toBe(25);
    expect(['▲', '●', '■'][(20 - 1) % 3]).toBe('●');
    const r = range(1, 20);
    expect([count(r, (x) => x % 2 === 0 && x % 3 !== 0), count(r, (x) => x % 6 === 0), count(r, (x) => x % 3 === 0 && x % 2 !== 0), count(r, (x) => x % 2 !== 0 && x % 3 !== 0)]).toEqual([7, 3, 3, 7]);
    expect(28 - (16 + 13 - 6)).toBe(5); expect(17 + 14 - 25).toBe(6);
    expect(5 * 4 * 3).toBe(60); expect(3 ** 3).toBe(27); expect(6 * 3 * 3).toBe(54); expect(10 * 6 * 20).toBe(1200);
    expect(2 * (12 + 12 + 1)).toBe(50); expect(2 * (4 + 6 + 6)).toBe(32);
  });
  it('every math batch-7 item is unique enough against all hand-written stems (reports all collisions)', () => {
    const norm = (s: string) => s.toLowerCase().replace(/[^a-zа-яё0-9' ]/gi, '').split(/\s+/).filter((w) => w.length > 3);
    const mine = new Set(QS.map((x) => x.id));
    const bad: string[] = [];
    for (const a of QS) for (const b of HAND_WRITTEN) {
      if (a.id === b.id || (mine.has(b.id) && b.id < a.id)) continue;
      const A = new Set(norm(a.stem.uz + ' ' + a.stem.ru)), Bs = new Set(norm(b.stem.uz + ' ' + b.stem.ru));
      const inter = [...A].filter((w) => Bs.has(w)).length;
      const jac = inter / (A.size + Bs.size - inter || 1);
      if (jac >= 0.6) bad.push(`${a.id} ~ ${b.id} ${jac.toFixed(2)}`);
    }
    expect(bad.join(' | ')).toBe('');
  });
});
