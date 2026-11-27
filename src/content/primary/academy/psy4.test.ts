// Psychology batch-7 checks: structure, bilingual text, independent re-solve of the sociometry counts,
// and stem similarity against the whole hand-written bank.
import { describe, expect, it } from 'vitest';
import type { L, Question, RichBlock } from '../../../core/types';
import { PSY4_LESSONS } from './psy4';
import { PSY4_SOURCES } from './psy4src';

const CYR = /[А-Яа-яЁё]/;
const ls = (b: RichBlock): L[] => {
  const o: L[] = [];
  const r = b as unknown as Record<string, unknown>;
  for (const k of ['body', 'title', 'task', 'answer', 'alt']) if (r[k]) o.push(r[k] as L);
  for (const k of ['items', 'legend', 'head']) if (Array.isArray(r[k])) o.push(...(r[k] as L[]));
  if (Array.isArray(r.rows)) for (const row of r.rows as L[][]) o.push(...row);
  if (Array.isArray(r.steps)) for (const s of r.steps as { text: L }[]) o.push(s.text);
  return o;
};
const qs = (): Question[] => PSY4_LESSONS.flatMap((l) => [...l.check, ...l.blocks.filter((b) => b.kind === 'try').map((b) => (b as { q: Question }).q)]);

describe('psychology batch 7 lessons', () => {
  it('has 10 lessons with full structure', () => {
    expect(PSY4_LESSONS.length).toBe(10);
    expect(new Set(PSY4_LESSONS.map((l) => l.id)).size).toBe(10);
    for (const l of PSY4_LESSONS) {
      const k = l.blocks.map((b) => b.kind);
      for (const need of ['intro', 'definition', 'explain', 'rule', 'derivation', 'exception', 'mistake', 'try', 'method', 'apply', 'summary', 'table'])
        expect(k, `${l.id} ${need}`).toContain(need);
      expect(k.filter((x) => x === 'example').length, l.id).toBeGreaterThanOrEqual(3);
      expect(l.check.length, l.id).toBeGreaterThanOrEqual(5);
    }
  });
  it('is fully bilingual: uz without Cyrillic, ru with Cyrillic', () => {
    for (const l of PSY4_LESSONS) {
      for (const t of [l.title, ...l.blocks.flatMap(ls)]) {
        expect(CYR.test(t.uz), `${l.id} uz: ${t.uz}`).toBe(false);
        if (/[A-Za-z]{4}/.test(t.uz)) expect(CYR.test(t.ru), `${l.id} ru: ${t.ru}`).toBe(true);
      }
    }
  });
  it('every wrong option explains why; answers vary in position', () => {
    const letters = new Set<string>();
    for (const q of qs()) if (q.type !== 'O-1' && q.type !== 'Y-2') {
      letters.add(q.answer);
      for (const c of q.choices) if (c.id !== q.answer) expect(c.why, `${q.id} ${c.id}`).toBeDefined();
    }
    expect(letters.size).toBeGreaterThanOrEqual(4);
  });
  it('sources are accessed with url and date', () => {
    for (const s of PSY4_SOURCES) { expect(s.accessed).toBe(true); expect(s.url).toMatch(/^https:\/\//); expect(s.checkedAt).toBe('2026-11-25'); }
  });
  it('sociometry counts are re-solved from the choice lists', () => {
    const count = (m: Record<string, string[]>) => {
      const got: Record<string, number> = Object.fromEntries(Object.keys(m).map((k) => [k, 0]));
      for (const v of Object.values(m)) for (const x of v) got[x]++;
      const names = Object.keys(m);
      let mutual = 0;
      for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) if (m[names[i]].includes(names[j]) && m[names[j]].includes(names[i])) mutual++;
      return { got, mutual };
    };
    const ex = count({ Ali: ['Barno', 'Davron'], Barno: ['Ali', 'Gulnora'], Davron: ['Ali', 'Jasur'], Gulnora: ['Barno', 'Laylo'], Jasur: ['Davron', 'Ali'], Laylo: ['Gulnora', 'Barno'] });
    expect(ex.got).toEqual({ Ali: 3, Barno: 3, Davron: 2, Gulnora: 2, Jasur: 1, Laylo: 1 });
    expect(ex.mutual).toBe(5);
    const q = count({ Oydin: ['Sardor', 'Kamola'], Sardor: ['Oydin', 'Nilufar'], Kamola: ['Oydin', 'Sardor'], Nilufar: ['Kamola', 'Oydin'], Temur: ['Sardor', 'Oydin'] });
    const all = qs();
    const t1 = all.find((x) => x.id === 'a-p4-pr-t1')!, c5 = all.find((x) => x.id === 'a-p4-pr-c5')!;
    if (t1.type !== 'O-1' || c5.type !== 'O-1') throw new Error('open items expected');
    expect(t1.answer.uz).toBe(String(q.mutual));
    expect(c5.answer.uz).toBe(String(q.got.Oydin));
  });
  it('stems are not near-duplicates of any hand-written item', async () => {
    const { HAND_WRITTEN } = await import('../index');
    const norm = (s: string) => new Set(s.toLowerCase().replace(/[^a-zа-яё0-9' ]/gi, '').split(/\s+/).filter((w) => w.length > 3));
    const mine = qs();
    const ids = new Set(mine.map((q) => q.id));
    const bad: string[] = [];
    for (const a of mine) {
      const A = norm(a.stem.uz + ' ' + a.stem.ru);
      for (const b of HAND_WRITTEN) {
        if (b.id === a.id) continue;
        const Bs = norm(b.stem.uz + ' ' + b.stem.ru);
        const inter = [...A].filter((w) => Bs.has(w)).length;
        const j = inter / (A.size + Bs.size - inter || 1);
        if (j >= 0.6) bad.push(`${a.id} ~ ${b.id} (${j.toFixed(2)})`);
      }
    }
    expect(bad).toEqual([]);
    expect(HAND_WRITTEN.filter((q) => ids.has(q.id)).length).toBe(ids.size);
  });
});
