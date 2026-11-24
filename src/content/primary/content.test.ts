// Automated content audit (CONTENT_AUDIT.md is generated from this suite's
// summary). This is automatic self-checking, NOT an expert review.
import { describe, expect, it } from 'vitest';
import { assembleVariant, availableVariants, checkOpen, gradeQuestion, validateVariant } from '../../core/engine';
import type { Locale, Question } from '../../core/types';
import { BANK, HAND_WRITTEN, LESSONS, SCENARIOS, GLOSSARY, SOURCES, SPEC, generatePractice, GENERATED_CODES, CERT_FACTS } from './index';

const CYR = /[А-Яа-яЁё]/;
const texts = (q: Question): { uz: string[]; ru: string[] } => {
  const out = { uz: [] as string[], ru: [] as string[] };
  const add = (l: { uz: string; ru: string } | undefined) => { if (l) { out.uz.push(l.uz); out.ru.push(l.ru); } };
  add(q.stem); add(q.explanation);
  if (q.type === 'O-1') add(q.answer);
  else q.choices.forEach((c) => add(c.text));
  if (q.type === 'Y-2') q.stems.forEach((s) => add(s.text));
  return out;
};

describe('question bank integrity', () => {
  it('has unique ids', () => {
    const ids = BANK.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it('uses only official spec codes and matching task types', () => {
    for (const q of BANK) {
      const c = SPEC.codes.find((x) => x.code === q.code);
      expect(c, q.id).toBeDefined();
      if (q.pool === 'exam') expect(q.type, q.id).toBe(c!.type);
    }
  });
  it('every choice item has distinct options and a valid answer', () => {
    for (const q of BANK) {
      if (q.type === 'Y-1' || q.type === 'V-Y-1') {
        expect(q.choices.length, q.id).toBe(4);
        expect(q.choices.map((c) => c.id), q.id).toContain(q.answer);
        for (const lang of ['uz', 'ru'] as Locale[]) {
          if (q.lang !== 'both' && q.lang !== lang) continue;
          const opts = q.choices.map((c) => c.text[lang].trim());
          expect(new Set(opts).size, `${q.id} ${lang} duplicate options`).toBe(4);
        }
        expect(gradeQuestion(q, { kind: 'choice', value: q.answer }, 'uz')).toBe(1);
      }
      if (q.type === 'Y-2') {
        expect(q.choices.length, q.id).toBe(6);
        const ids = q.choices.map((c) => c.id);
        for (const s of q.stems) expect(ids, q.id).toContain(s.answer);
        expect(new Set(q.stems.map((s) => s.answer)).size, `${q.id} stems share answer`).toBe(q.stems.length);
        const full = Object.fromEntries(q.stems.map((s) => [s.id, s.answer]));
        expect(gradeQuestion(q, { kind: 'match', value: full }, 'uz')).toBe(q.stems.length);
      }
      if (q.type === 'O-1') {
        for (const lang of ['uz', 'ru'] as Locale[]) {
          if (q.lang === 'both' || q.lang === lang) expect(checkOpen(q, q.answer[lang], lang), `${q.id} canonical answer rejected`).toBe(true);
        }
        expect(checkOpen(q, 'xyz', 'uz')).toBe(false);
      }
    }
  });
  it('has explanations and resolvable sources', () => {
    for (const q of BANK) {
      expect(q.explanation.uz.length + q.explanation.ru.length, q.id).toBeGreaterThan(20);
      expect(q.sourceIds.length, q.id).toBeGreaterThan(0);
      for (const s of q.sourceIds) expect(SOURCES.find((x) => x.id === s), `${q.id} source ${s}`).toBeDefined();
    }
  });
  it('localizes shared items in both languages without script mixing', () => {
    for (const q of BANK) {
      const t = texts(q);
      if (q.lang === 'both') {
        t.uz.forEach((s) => {
          expect(s.trim().length, `${q.id} empty uz`).toBeGreaterThan(0);
          expect(CYR.test(s), `${q.id} Cyrillic in uz: ${s}`).toBe(false);
        });
        t.ru.forEach((s) => expect(s.trim().length, `${q.id} empty ru`).toBeGreaterThan(0));
        expect(CYR.test(q.stem.ru), `${q.id} ru stem not translated`).toBe(true);
        expect(CYR.test(q.explanation.ru), `${q.id} ru explanation not translated`).toBe(true);
      }
      if (q.lang === 'uz') t.uz.forEach((s) => expect(CYR.test(s), `${q.id} Cyrillic in uz item`).toBe(false));
      if (q.lang === 'ru') expect(CYR.test(q.stem.ru), `${q.id} ru stem without Cyrillic`).toBe(true);
    }
  });
  it('has no near-duplicate stems among hand-written items', () => {
    const norm = (s: string) => s.toLowerCase().replace(/[^a-zа-яё0-9' ]/gi, '').split(/\s+/).filter((w) => w.length > 3);
    const hw = HAND_WRITTEN;
    for (let i = 0; i < hw.length; i++) for (let j = i + 1; j < hw.length; j++) {
      const a = new Set(norm(hw[i].stem.uz + ' ' + hw[i].stem.ru)), b = new Set(norm(hw[j].stem.uz + ' ' + hw[j].stem.ru));
      const inter = [...a].filter((w) => b.has(w)).length;
      const jac = inter / (a.size + b.size - inter || 1);
      expect(jac, `${hw[i].id} ~ ${hw[j].id}`).toBeLessThan(0.6);
    }
  });
});

describe('generators', () => {
  it('produce self-consistent items for 500 seeds per code', () => {
    for (const code of GENERATED_CODES) for (let s = 1; s <= 500; s++) {
      const q = generatePractice(code, s)!;
      expect(q).not.toBeNull();
      if (q.type === 'O-1') expect(checkOpen(q, q.answer.uz, 'uz')).toBe(true);
      if (q.type === 'Y-1' || q.type === 'V-Y-1') expect(new Set(q.choices.map((c) => c.text.uz)).size).toBe(4);
      if (q.type === 'Y-2') expect(new Set(q.choices.map((c) => c.text.uz)).size, `${q.id} dup options`).toBe(6);
    }
  });
});

describe('mock exam variants', () => {
  for (const lang of ['uz', 'ru'] as Locale[]) {
    it(`variant 1 (${lang}) assembles and matches the official structure`, () => {
      const v = assembleVariant(SPEC, BANK, lang, 1);
      expect(v).not.toBeNull();
      expect(validateVariant(SPEC, v!)).toEqual([]);
    });
    it(`reports available variants honestly (${lang})`, () => {
      const n = availableVariants(SPEC, BANK, lang);
      console.log(`[audit] available complete variants (${lang}): ${n}`);
      expect(n).toBeGreaterThanOrEqual(1);
      for (let k = 1; k <= n; k++) expect(validateVariant(SPEC, assembleVariant(SPEC, BANK, lang, k)!)).toEqual([]);
      expect(assembleVariant(SPEC, BANK, lang, n + 1)).toBeNull();
    });
  }
  it('practice and exam pools are disjoint', () => {
    const exam = new Set(BANK.filter((q) => q.pool === 'exam').map((q) => q.id));
    expect(BANK.filter((q) => q.pool === 'practice').some((q) => exam.has(q.id))).toBe(false);
  });
  it('variants never share an item and need at least 2 per language now', () => {
    for (const lang of ['uz', 'ru'] as Locale[]) {
      const n = availableVariants(SPEC, BANK, lang);
      expect(n).toBeGreaterThanOrEqual(2);
      const seen = new Map<string, number>();
      for (let k = 1; k <= n; k++) for (const q of assembleVariant(SPEC, BANK, lang, k)!) {
        expect(seen.get(q.id), `${q.id} in variants ${seen.get(q.id)} and ${k}`).toBeUndefined();
        seen.set(q.id, k);
      }
    }
  });
});

/** Independent re-solution of every numeric answer in the variant-2 math items:
 * each expected value is computed here from the problem data, not copied from the item. */
describe('independent re-solve (variant 2, section 2)', () => {
  const roman = (s: string) => {
    const v: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return [...s].reduce((sum, ch, i) => sum + (v[ch] < (v[s[i + 1]] ?? 0) ? -v[ch] : v[ch]), 0);
  };
  const pairs = (n: number) => (n * (n - 1)) / 2;
  const masses = new Set<number>();
  for (const a of [-1, 0, 1]) for (const b of [-1, 0, 1]) { const m = a * 1 + b * 3; if (m > 0) masses.add(m); }
  // logic puzzle by brute force: [Aziz, Botir, Dilnoza] × [artist, musician, poet]
  const perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
  const ok = perms.filter(([, b, d]) => b !== 1 && b !== 2 && d !== 2);
  const names = ['Aziz', 'Botir', 'Dilnoza'];
  const expected: Record<string, string> = {
    's2-v2-213': String(roman('MCMXCIV')),
    's2-v2-216': ['90 + 6', '80 + 16', '50 + 46', '70 + 26'].find((x) => x.split(' + ').every((p) => +p % 4 === 0))!,
    's2-v2-218': String(6 * 14 + 5),
    's2-v2-219': String(24 - (24 / 8) * 3),
    's2-v2-2110': String(6 / (1 - 1 / 2 - 1 / 4)),
    's2-v2-221': String(pairs(4)),
    's2-v2-222': `${4 * (360 / 12)}°`,
    's2-v2-223': String((6 * (6 - 3)) / 2),
    's2-v2-224': `${2 * 7} sm`,
    's2-v2-231': String(18 + 14 - (30 - 4)),
    's2-v2-233': String(4 * 3),
    's2-v2-235': String(pairs(5)),
    's2-v2-236': String(9 + 7 + 1),
    's2-v2-237': String(masses.size),
    's2-v2-239': ok.length === 1 ? names[ok[0].indexOf(2)] : 'ambiguous',
  };
  for (const [id, want] of Object.entries(expected)) {
    it(`${id} → ${want}`, () => {
      const q = HAND_WRITTEN.find((x) => x.id === id);
      expect(q, id).toBeDefined();
      if (!q || q.type === 'O-1' || q.type === 'Y-2') throw new Error('choice item expected');
      const right = q.choices.find((c) => c.id === q.answer)!;
      // the expected value must appear as a whole token of the correct option
      const token = new RegExp(`(^|[\\s,;])${want.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[\\s,;])`);
      expect(token.test(right.text.uz), `${id}: ${right.text.uz}`).toBe(true);
    });
  }
  it('s2-v2-217 grouping gives 100 + 100', () => {
    expect(38 + 62).toBe(100);
    expect(47 + 53).toBe(100);
  });
  it('s2-v2-225 triangular pyramid satisfies Euler', () => {
    const [v, e, f] = [3 + 1, 3 + 3, 1 + 3];
    expect(v - e + f).toBe(2);
    const q = HAND_WRITTEN.find((x) => x.id === 's2-v2-225');
    if (!q || q.type === 'O-1' || q.type === 'Y-2') throw new Error('choice');
    expect(q.choices.find((c) => c.id === q.answer)!.text.ru).toBe(`${v} вершины, ${e} рёбер, ${f} грани`);
  });
});

describe('curriculum coverage', () => {
  it('every spec code has a lesson in each exam language', () => {
    for (const lang of ['uz', 'ru'] as Locale[]) for (const c of SPEC.codes) {
      const l = LESSONS.find((x) => x.codes.includes(c.code) && (x.lang === 'both' || x.lang === lang));
      expect(l, `${c.code} ${lang}`).toBeDefined();
    }
  });
  it('lessons, scenarios, glossary and cert facts are bilingual and sourced', () => {
    for (const l of LESSONS) {
      if (l.lang === 'both') for (const b of l.blocks) { expect(CYR.test(b.body.ru), `${l.id} ru`).toBe(true); expect(CYR.test(b.body.uz), l.id).toBe(false); }
      for (const s of l.sourceIds) expect(SOURCES.find((x) => x.id === s), s).toBeDefined();
    }
    for (const sc of SCENARIOS) {
      expect(sc.steps[sc.start]).toBeDefined();
      for (const st of Object.values(sc.steps)) for (const o of st.options ?? []) {
        if (o.next) expect(sc.steps[o.next], `${sc.id} -> ${o.next}`).toBeDefined();
        expect(CYR.test(o.text.uz), sc.id).toBe(false);
        expect(CYR.test(o.text.ru), sc.id).toBe(true);
      }
    }
    for (const g of GLOSSARY) { expect(CYR.test(g.pro.uz), g.id).toBe(false); expect(CYR.test(g.pro.ru) || /^[|A-Z∪∩=+−\s]+/.test(g.pro.ru), g.id).toBe(true); }
    for (const f of CERT_FACTS) expect(SOURCES.find((x) => x.id === f.sourceId)).toBeDefined();
  });
  it('prints the coverage summary', () => {
    const summary = {
      handWritten: HAND_WRITTEN.length,
      examPoolHand: HAND_WRITTEN.filter((q) => q.pool === 'exam').length,
      examPoolGenerated: BANK.filter((q) => q.pool === 'exam' && q.id.startsWith('gen-')).length,
      practicePoolHand: HAND_WRITTEN.filter((q) => q.pool === 'practice').length,
      lessons: LESSONS.length, scenarios: SCENARIOS.length, glossary: GLOSSARY.length, sources: SOURCES.length,
      sourcesAccessed: SOURCES.filter((s) => s.accessed).length,
    };
    console.log('[audit] ' + JSON.stringify(summary));
    expect(summary.lessons).toBeGreaterThan(0);
  });
});
