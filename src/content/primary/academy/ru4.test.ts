// Independent re-solve of the countable answers in the Russian batch-7 lessons (ru4.ts) and of the
// widget data in src/ui/w7/ru.tsx. Expected values are computed here from the task data, not copied.
import { describe, expect, it } from 'vitest';
import type { Question } from '../../../core/types';
import { RU4_LESSONS } from './ru4';
import { CONJ_ITEMS, SCHEME_WORDS, COMMA_ITEMS } from '../../../ui/w7/ru';

const ALL: Question[] = RU4_LESSONS.flatMap((l) => [...l.blocks.flatMap((b) => (b.kind === 'try' ? [b.q] : [])), ...l.check]);
const open = (id: string) => {
  const q = ALL.find((x) => x.id === id);
  if (!q || q.type !== 'O-1') throw new Error(`${id}: open item expected`);
  return q;
};

/** Conjugation by the school algorithm (unstressed endings): -ить → II except брить, стелить; 11 exceptions → II; else I. */
const II_EXC = ['смотреть', 'видеть', 'ненавидеть', 'обидеть', 'терпеть', 'вертеть', 'зависеть', 'гнать', 'держать', 'дышать', 'слышать'];
const conj = (inf: string): 1 | 2 => {
  const base = inf.replace(/^(вы|у|про|за|по|рас|при|пере)(?=гнать|видеть|смотреть|слышать|держать|дышать|терпеть|вертеть)/, '');
  if (II_EXC.includes(base)) return 2;
  if (inf.endsWith('ить') && !['брить', 'стелить'].includes(inf)) return 2;
  return 1;
};

/** Sound count for a word: ё/ю/я/е at the start or after a vowel/ь/ъ give two sounds; ь and ъ give none. */
const VOW = 'аеёиоуыэюя';
const soundCount = (w: string) => [...w].reduce((n, ch, i) => {
  if (ch === 'ь' || ch === 'ъ') return n;
  if ('ёюяе'.includes(ch) && (i === 0 || VOW.includes(w[i - 1]) || 'ьъ'.includes(w[i - 1]))) return n + 2;
  return n + 1;
}, 0);
const syllables = (w: string) => [...w].filter((c) => VOW.includes(c)).length;

describe('ru4: lesson structure', () => {
  it('has 10 lessons with unique ids and question ids', () => {
    expect(RU4_LESSONS.length).toBe(10);
    expect(new Set(RU4_LESSONS.map((l) => l.id)).size).toBe(10);
    expect(new Set(ALL.map((q) => q.id)).size).toBe(ALL.length);
    for (const q of ALL) expect(q.lang, q.id).toBe('ru');
  });
  it('the exception list of the II conjugation has exactly 2 + 7 + 4 members', () => {
    expect(II_EXC.filter((v) => v.endsWith('еть')).length).toBe(7);
    expect(II_EXC.filter((v) => v.endsWith('ать')).length).toBe(4);
  });
});

describe('ru4: independent re-solve of numeric answers', () => {
  it('conjugation count (a-ru4-cj-c5)', () => {
    const list = ['строить', 'сеять', 'вертеть', 'колоть', 'лепить', 'гнать', 'брить'];
    expect(open('a-ru4-cj-c5').answer.ru).toBe(String(list.filter((v) => conj(v) === 2).length));
  });
  it('personal pronouns count (a-ru4-pr-c5)', () => {
    const PERS = ['я', 'меня', 'мне', 'мной', 'ты', 'тебя', 'тебе', 'он', 'его', 'ему', 'им', 'она', 'её', 'ей', 'мы', 'нас', 'нам', 'вы', 'вас', 'вам', 'они', 'их', 'ими'];
    const text = 'Я попросил сестру помочь мне. Она взяла сказку и прочитала её нам вслух';
    const n = text.toLowerCase().split(/[^а-яё]+/).filter((w) => PERS.includes(w)).length;
    expect(open('a-ru4-pr-c5').answer.ru).toBe(String(n));
  });
  it('function words count (a-ru4-fw-c5)', () => {
    const FUNC = ['у', 'на', 'в', 'с', 'к', 'и', 'а', 'но', 'не', 'ли', 'же'];
    const text = 'У реки росла ива, и на ней сидели птицы, но не пели';
    const n = text.toLowerCase().split(/[^а-яё]+/).filter((w) => FUNC.includes(w)).length;
    expect(open('a-ru4-fw-c5').answer.ru).toBe(String(n));
  });
  it('sentence count (a-ru4-sn-c5): one predicate stem per sentence', () => {
    const predicates = ['стемнело', 'зажглись', 'пошли'];
    const text = 'стемнело на улицах зажглись фонари мы пошли домой';
    expect(open('a-ru4-sn-c5').answer.ru).toBe(String(predicates.filter((p) => text.includes(p)).length));
  });
  it('comma counts by the rules for homogeneous members', () => {
    // series = list of conjunctions before each member after the first ('' = none)
    const commas = (series: string[][]) => series.reduce((sum, s) => {
      const repeatedI = s.filter((c) => c === 'и').length >= 2;
      return sum + s.filter((c) => c === '' || c === 'а' || c === 'но' || (c === 'и' && repeatedI)).length;
    }, 0);
    // «Деревья шумели качались и скрипели» + «тихий но тревожный»
    expect(open('a-ru4-mb-t1').answer.ru).toBe(String(commas([['', 'и'], ['но']])));
    // «и зайцы и белки и лисы»: members after the first are introduced by repeated и
    expect(open('a-ru4-mb-c5').answer.ru).toBe(String(commas([['и', 'и']])));
  });
  it('sounds and syllables (a-ru4-lt-t1, a-ru4-lt-c5)', () => {
    expect(open('a-ru4-lt-t1').answer.ru).toBe(String(soundCount('маяк')));
    expect(open('a-ru4-lt-c5').answer.ru).toBe(String(syllables('черепаха')));
  });
});

describe('ru4 widgets: data agrees with the rules', () => {
  it('conjugation trainer items', () => {
    for (const it of CONJ_ITEMS) expect(conj(it.inf), it.inf).toBe(it.conj);
  });
  it('sound schemes: number of sounds and syllables', () => {
    for (const w of SCHEME_WORDS) {
      // ж and ш make the following и sound as [ы]; count stays the same
      expect(w.sounds.length, w.word).toBe(soundCount(w.word));
      expect(w.syl.split('-').length, w.word).toBe(syllables(w.word));
      expect(w.sounds.filter((s) => s.stress).length, w.word).toBe(1);
      expect(w.sounds.filter((s) => s.k === 'v').length, w.word).toBe(syllables(w.word));
    }
  });
  it('comma game: comma before а/но and between members without a conjunction; none before a single и', () => {
    for (const it of COMMA_ITEMS) it.parts.slice(1).forEach((p, k) => {
      const first = p.trim().split(/\s+/)[0];
      const expectComma = first === 'а' || first === 'но' || !['и', 'или'].includes(first);
      expect(it.need[k], p).toBe(expectComma);
    });
  });
});

describe('ru4: stems are not near-duplicates of other hand-written items', () => {
  it('Jaccard similarity of each ru4 stem with every other stem is below 0.6', async () => {
    const { HAND_WRITTEN } = await import('../index');
    const norm = (s: string) => s.toLowerCase().replace(/[^a-zа-яё0-9' ]/gi, '').split(/\s+/).filter((w) => w.length > 3);
    const mine = HAND_WRITTEN.filter((q) => q.id.startsWith('a-ru4-'));
    const bad: string[] = [];
    for (const a of mine) for (const b of HAND_WRITTEN) {
      if (a.id === b.id) continue;
      const x = new Set(norm(a.stem.uz + ' ' + a.stem.ru)), y = new Set(norm(b.stem.uz + ' ' + b.stem.ru));
      const inter = [...x].filter((w) => y.has(w)).length;
      const jac = inter / (x.size + y.size - inter || 1);
      if (jac >= 0.6) bad.push(`${a.id} ~ ${b.id} (${jac.toFixed(2)})`);
    }
    expect(bad).toEqual([]);
  });
});
