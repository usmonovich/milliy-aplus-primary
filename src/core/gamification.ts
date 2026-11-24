// Internal achievements and XP levels (adult-oriented: no lives, no lockouts).
// Achievements are app-internal and unrelated to the official certificate.
import { streak } from './engine';
import type { State } from './store';
import type { L } from './types';

export interface Achievement { id: string; title: L; desc: L; test: (s: State, today: string) => boolean }

const correctIn = (s: State, prefix: string) => s.answerLog.filter((a) => a.ok && a.code.startsWith(prefix)).length;

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first', title: { uz: 'Birinchi qadam', ru: 'Первый шаг' }, desc: { uz: 'Birinchi mashqni bajaring', ru: 'Выполните первое упражнение' }, test: (s) => s.answerLog.length > 0 },
  { id: 'arith', title: { uz: 'Arifmetika ustasi', ru: 'Мастер арифметики' }, desc: { uz: "2.1 bo'yicha 30 ta to'g'ri javob", ru: '30 верных ответов по блоку 2.1' }, test: (s) => correctIn(s, '2.1') >= 30 },
  { id: 'pirls', title: { uz: 'PIRLS eksperti', ru: 'Эксперт PIRLS' }, desc: { uz: "1.4 bo'yicha 20 ta to'g'ri javob", ru: '20 верных ответов по блоку 1.4' }, test: (s) => correctIn(s, '1.4') >= 20 },
  { id: 'flex', title: { uz: 'Pedagogik moslashuvchanlik', ru: 'Педагогическая гибкость' }, desc: { uz: "Teacher Simulator'da 5 ta vaziyatni eng yaxshi yechim bilan o'tish", ru: 'Пройти 5 ситуаций Teacher Simulator с лучшим решением' }, test: (s) => Object.values(s.simBest).filter((v) => v >= 3).length >= 5 },
  { id: 'assess', title: { uz: 'Baholash ustasi', ru: 'Мастер оценивания' }, desc: { uz: "3.6 bo'yicha 20 ta to'g'ri javob", ru: '20 верных ответов по блоку 3.6' }, test: (s) => correctIn(s, '3.6') >= 20 },
  { id: 'method', title: { uz: 'Professional metodist', ru: 'Профессиональный методист' }, desc: { uz: 'Barcha darslarni o\'zlashtirish', ru: 'Освоить все уроки' }, test: (s) => Object.keys(s.lessonsDone).length >= 13 },
  { id: 'fixer', title: { uz: 'Xatolar ustida', ru: 'Работа над ошибками' }, desc: { uz: '10 ta xatoni bartaraf etish', ru: 'Устранить 10 ошибок' }, test: (s) => Object.values(s.mistakes).filter((m) => m.resolved).length >= 10 },
  { id: 'mock', title: { uz: 'Sinov imtihoni', ru: 'Пробный экзамен' }, desc: { uz: "To'liq sinov imtihonini yakunlash", ru: 'Завершить полный пробный экзамен' }, test: (s) => s.attempts.some((a) => a.kind === 'full' && a.finishedAt) },
  { id: 'c90', title: { uz: "90 ta to'g'ri javob", ru: '90 правильных ответов' }, desc: { uz: "Jami 90 ta to'g'ri javob", ru: 'Всего 90 верных ответов' }, test: (s) => s.answerLog.filter((a) => a.ok).length >= 90 },
  { id: 'd7', title: { uz: '7 kun ketma-ket', ru: '7 дней подряд' }, desc: { uz: '7 kunlik seriya', ru: 'Серия 7 дней' }, test: (s, d) => streak(s.activeDays, d) >= 7 },
  { id: 'd30', title: { uz: '30 kunlik tayyorgarlik', ru: '30 дней подготовки' }, desc: { uz: '30 ta faol kun', ru: '30 активных дней' }, test: (s) => s.activeDays.length >= 30 },
];

export function newAchievements(s: State, today: string): string[] {
  return ACHIEVEMENTS.filter((a) => !s.achievements.includes(a.id) && a.test(s, today)).map((a) => a.id);
}

/** XP levels grow linearly-quadratic so early progress is visible. */
export function xpLevel(xp: number): { level: number; into: number; need: number } {
  let level = 1, need = 100, rest = xp;
  while (rest >= need) { rest -= need; level++; need = 100 + (level - 1) * 50; }
  return { level, into: rest, need };
}
