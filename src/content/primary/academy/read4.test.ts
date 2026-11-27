// Independent re-solve of every computed or counted answer in the reading batch-7 lessons.
import { describe, expect, it } from 'vitest';
import type { OpenQuestion, RichLesson } from '../../../core/types';
import { DIARY, GENRE_PCT, GENRE_PUPILS, ICON_KEY, MONTH_BOOKS, POEM_RU, POEM_UZ, READ4_LESSONS, SPEED } from './read4';

const all = READ4_LESSONS.flatMap((l: RichLesson) => [...l.blocks.flatMap((b) => (b.kind === 'try' ? [b.q] : [])), ...l.check]);
const open = (id: string) => {
  const q = all.find((x) => x.id === id);
  expect(q, id).toBeDefined();
  return q as OpenQuestion;
};
const wpm = (w: number, s: number) => (w / s) * 60;
const sylUz = (s: string) => (s.toLowerCase().match(/[aeiou]/g) ?? []).length;
const sylRu = (s: string) => (s.toLowerCase().match(/[аеёиоуыэюя]/g) ?? []).length;

describe('read4: numeric answers re-solved from the data', () => {
  it('reading speed and accuracy', () => {
    expect(wpm(SPEED.ex1.words, SPEED.ex1.sec)).toBe(72);
    expect(wpm(SPEED.ex2.words - SPEED.ex2.errors, SPEED.ex2.sec)).toBe(76);
    expect(((SPEED.ex2.words - SPEED.ex2.errors) / SPEED.ex2.words) * 100).toBe(95);
    expect(open('a-r4-rq-t1').numeric).toBe(wpm(SPEED.t1.words, SPEED.t1.sec));
    expect(open('a-r4-rq-c2').numeric).toBe(wpm(SPEED.c2.words, SPEED.c2.sec));
    expect(open('a-r4-rq-c5').numeric).toBeCloseTo(((SPEED.c5.words - SPEED.c5.errors) / SPEED.c5.words) * 100, 9);
  });
  it('poem: 7 syllables in every Uzbek line, first lines equal in both languages, rhyme pairs', () => {
    POEM_UZ.forEach((l) => expect(sylUz(l), l).toBe(7));
    expect(POEM_RU.map(sylRu)).toEqual([7, 7, 8, 8]);
    expect(open('a-r4-ly-c2').numeric).toBe(sylUz(POEM_UZ[0]));
    expect(open('a-r4-ly-c2').numeric).toBe(sylRu(POEM_RU[0]));
    expect(POEM_UZ[2].replace(/\W+$/, '').endsWith('monga') && POEM_UZ[3].replace(/\W+$/, '').endsWith('monga')).toBe(true);
  });
  it('reading diary', () => {
    expect(DIARY.ex.pages / DIARY.ex.perDay).toBe(8);
    expect(open('a-r4-ir-c2').numeric).toBe(DIARY.c.pages / DIARY.c.perDay);
  });
  it('charts: sums, differences, pictogram icons, pie shares', () => {
    const [sep, oct, nov, dec] = MONTH_BOOKS;
    expect(open('a-r4-ch-c1').numeric).toBe(MONTH_BOOKS.reduce((a, b) => a + b, 0));
    expect(nov - sep).toBe(12);
    expect(open('a-r4-ch-t1').numeric).toBe(nov - oct);
    expect(open('a-r4-ch-c2').numeric).toBe(nov / ICON_KEY);
    MONTH_BOOKS.forEach((b) => expect(b % ICON_KEY).toBe(0));
    expect(dec / ICON_KEY).toBe(7);
    expect(dec < oct && Math.max(...MONTH_BOOKS) === nov && Math.min(...MONTH_BOOKS) === sep).toBe(true);
    expect(GENRE_PCT.reduce((a, b) => a + b, 0)).toBe(100);
    expect(open('a-r4-ch-c3').numeric).toBe((GENRE_PCT[2] * GENRE_PUPILS) / 100);
    expect((GENRE_PCT[0] * GENRE_PUPILS) / 100).toBe(20);
    expect((GENRE_PCT[1] * GENRE_PUPILS) / 100).toBe(10);
    expect(GENRE_PCT[0] * 3.6).toBe(180);
  });
  it('library and PIRLS shares', () => {
    expect(open('a-r4-is-c2').numeric).toBe(3);
    expect(open('a-r4-is-c5').numeric).toBe(14);
    expect(open('a-r4-pe-c4').numeric).toBe(30 + 20);
    expect(open('a-r4-pl-c1').numeric).toBe(2);
  });
});
