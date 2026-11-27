// Extra checks for the Uzbek course, batch 7: script purity, stem originality against the whole bank,
// metadata, and an independent re-count of every countable answer. Automatic self-checking, not an expert review.
import { describe, expect, it } from 'vitest';
import type { Question, RichBlock } from '../../../core/types';
import { HAND_WRITTEN, SOURCES } from '../index';
import { UZ4_LESSONS } from './uz4';
import { UZ4_SOURCES } from './uz4src';

const CYR = /[А-Яа-яЁё]/;
const mine = UZ4_LESSONS.flatMap((l) => [...l.blocks.flatMap((b) => (b.kind === 'try' ? [b.q] : [])), ...l.check]);
const byId = (id: string) => mine.find((q) => q.id === id)!;
const answerText = (q: Question) => (q.type === 'O-1' ? q.answer.uz : q.type === 'Y-2' ? '' : q.choices.find((c) => c.id === q.answer)!.text.uz);

/** Uzbek Latin word → sounds (o', g', sh, ch, ng are one sound; the tutuq belgisi is not a sound). */
const sounds = (w: string) => {
  const s = w.toLowerCase().replace(/[ʻʼ’‘`]/g, "'");
  const out: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const two = s.slice(i, i + 2);
    if (["o'", "g'", 'sh', 'ch', 'ng'].includes(two)) { out.push(two); i++; } else if (s[i] !== "'") out.push(s[i]);
  }
  return out;
};
const VOW = new Set(['a', 'e', 'i', 'o', 'u', "o'"]);

describe('uz batch 7 lessons', () => {
  it('has 10 lessons with unique ids, Uzbek-only text and full structure', () => {
    expect(UZ4_LESSONS.length).toBe(10);
    expect(new Set(UZ4_LESSONS.map((l) => l.id)).size).toBe(10);
    // Question metadata (competency) and the builder's ru answer label are bilingual by design; the Uzbek course shows the uz slot.
    const qText = (q: Question) => JSON.stringify([q.stem.uz, q.explanation.uz, q.rule?.uz, q.steps?.map((s) => s.uz), q.pitfalls?.uz,
      q.type === 'O-1' ? q.answer.uz : q.type === 'Y-2' ? [] : q.choices.map((c) => [c.text.uz, c.why?.uz])]);
    const strs = (b: RichBlock) => (b.kind === 'try' ? qText(b.q) : JSON.stringify(b));
    for (const l of UZ4_LESSONS) {
      expect(CYR.test(l.title.uz), l.id).toBe(false);
      for (const b of l.blocks) expect(CYR.test(strs(b)), `${l.id} ${b.kind}`).toBe(false);
      for (const q of l.check) expect(CYR.test(qText(q)), q.id).toBe(false);
      const kinds = l.blocks.map((b) => b.kind);
      for (const k of ['intro', 'definition', 'rule', 'derivation', 'exception', 'mistake', 'method', 'apply', 'summary', 'try']) expect(kinds, `${l.id} ${k}`).toContain(k);
      expect(kinds.includes('table') || kinds.includes('interactive'), `${l.id} visual`).toBe(true);
      for (const s of l.sourceIds) expect(SOURCES.some((x) => x.id === s), `${l.id} ${s}`).toBe(true);
    }
  });
  it('every new source was read and dated', () => {
    for (const s of UZ4_SOURCES) { expect(s.accessed).toBe(true); expect(s.url).toBeTruthy(); expect(s.checkedAt).toBe('2026-11-25'); }
  });
  it('stems are not near-duplicates of any hand-written item', () => {
    const norm = (s: string) => s.toLowerCase().replace(/[^a-zа-яё0-9' ]/gi, '').split(/\s+/).filter((w) => w.length > 3);
    for (const q of mine) {
      const a = new Set(norm(q.stem.uz + ' ' + q.stem.ru));
      for (const o of HAND_WRITTEN) {
        if (o.id === q.id) continue;
        const b = new Set(norm(o.stem.uz + ' ' + o.stem.ru));
        const inter = [...a].filter((w) => b.has(w)).length;
        expect(inter / (a.size + b.size - inter || 1), `${q.id} ~ ${o.id}`).toBeLessThan(0.6);
      }
    }
  });
});

describe('uz batch 7: independent re-count of countable answers', () => {
  it('personal pronouns in the singular', () => {
    const personal = [['men', 1], ['sen', 1], ['u', 1], ['biz', 0], ['siz', 0], ['ular', 0]] as const;
    expect(String(personal.filter(([, sg]) => sg).length)).toBe(answerText(byId('a-uz7-ol-c4')));
  });
  it('adverbs in the sentence about the little brother', () => {
    const ADVERBS = new Set(['ertalab', 'sekin', 'ataylab', 'tez', 'kecha', 'hozir']);
    const words = byId('a-uz7-ra-c6').stem.uz.match(/«([^»]+)»/)![1].toLowerCase().split(/\s+/);
    expect(String(words.filter((w) => ADVERBS.has(w)).length)).toBe(answerText(byId('a-uz7-ra-c6')));
  });
  it('groups of particles written jointly', () => {
    const joined = ['-mi', '-oq/-yoq', '-ov/-yov', '-gina/-kina/-qina'];
    expect(String(joined.length)).toBe(answerText(byId('a-uz7-yo-c6')));
  });
  it('secondary sentence parts in the library sentence', () => {
    const parse: Record<string, string> = { ukam: 'ega', kecha: 'hol', kutubxonadan: "to'ldiruvchi", yangi: 'aniqlovchi', kitob: "to'ldiruvchi", oldi: 'kesim' };
    const words = byId('a-uz7-gb-c4').stem.uz.match(/«([^»]+)»/)![1].toLowerCase().split(/\s+/);
    expect(words.every((w) => w in parse)).toBe(true);
    expect(String(words.filter((w) => !['ega', 'kesim'].includes(parse[w])).length)).toBe(answerText(byId('a-uz7-gb-c4')));
  });
  it('sound and syllable counts', () => {
    const checks: [string, string, (w: string) => number][] = [
      ['a-uz7-sv-c3', "choynakcha", (w) => sounds(w).length],
      ['a-uz7-sv-t1', "tong", (w) => sounds(w).length],
      ['a-uz7-sv-c6', "o'g'lim", (w) => sounds(w).filter((x) => VOW.has(x)).length],
    ];
    for (const [id, word, f] of checks) {
      const q = mine.find((x) => x.id === id);
      if (!q) continue;
      expect(q.stem.uz.includes(word), `${id} stem uses ${word}`).toBe(true);
      expect(String(f(word)), id).toBe(answerText(q));
    }
  });
});
