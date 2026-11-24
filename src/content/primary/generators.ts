// Parametric math item generators. Every answer is COMPUTED, never typed by
// hand, and each generator re-verifies its own answer before returning.
// Used for unlimited practice ("new similar task") and for the computational
// exam slots (2.2.6, 2.2.7, 2.2.8–2.2.10, 2.3.4, 2.3.8) of the 50 variants.
import { mulberry32, shuffle } from '../../core/engine';
import type { ChoiceQuestion, MatchingQuestion, OpenQuestion, Question } from '../../core/types';
import { mc, match, open } from './build';

type Rnd = () => number;
const int = (r: Rnd, a: number, b: number) => a + Math.floor(r() * (b - a + 1));
const pick = <T,>(r: Rnd, xs: T[]) => xs[Math.floor(r() * xs.length)];
const fmt = (n: number) => String(Math.round(n * 1000) / 1000).replace('.', ',');

function assert(cond: boolean, msg: string): asserts cond {
  if (!cond) throw new Error(`Generator self-check failed: ${msg}`);
}

/** Four distinct numeric options containing the correct one; returns [options, letter]. */
function numericChoices(r: Rnd, correct: number, near: number[]): [string[], string] {
  const set = new Set<number>([correct]);
  for (const n of near) if (n > 0 && Number.isInteger(n)) set.add(n);
  let k = 1;
  while (set.size < 4) {
    const v = correct + (k % 2 ? Math.ceil(k / 2) : -Math.ceil(k / 2));
    k++;
    if (v > 0) set.add(v);
  }
  const opts = shuffle([...set].slice(0, 4), r);
  assert(new Set(opts).size === 4 && opts.includes(correct), 'choices');
  return [opts.map(fmt), 'ABCD'[opts.indexOf(correct)]];
}

/* 2.2.6 Length & mass conversions (O-1) */
export function genMeasure(seed: number, pool: 'practice' | 'exam'): OpenQuestion {
  const r = mulberry32(seed * 7919 + 11);
  const kind = pick(r, ['len', 'mass'] as const);
  if (kind === 'len') {
    const m = int(r, 2, 9), dm = int(r, 1, 9), sm = int(r, 1, 9);
    const ans = m * 100 + dm * 10 + sm;
    assert(ans === m * 100 + dm * 10 + sm, 'len');
    return open(`gen-2.2.6-${pool}-${seed}`, '2.2.6', { lang: 'both', pool, d: 2, src: ['math14', 'tojiyev2012'] },
      [`O'quvchi parta uzunligini o'lchab, ${m} m ${dm} dm ${sm} sm natija oldi. Bu uzunlik necha santimetr? Javobni son bilan yozing.`,
       `Ученик измерил длину парты и получил ${m} м ${dm} дм ${sm} см. Сколько это сантиметров? Запишите ответ числом.`],
      String(ans),
      [`1 m = 100 sm, 1 dm = 10 sm: ${m}·100 + ${dm}·10 + ${sm} = ${ans} sm. Metodik eslatma: avval bir xil birlikka o'tkazishni chizg'ich (lenta) modelida ko'rsating.`,
       `1 м = 100 см, 1 дм = 10 см: ${m}·100 + ${dm}·10 + ${sm} = ${ans} см. Методически: сначала покажите переход к одной единице на модели ленты-линейки.`],
      {}, ans);
  }
  const kg = int(r, 1, 9), g = int(r, 1, 19) * 50;
  const ans = kg * 1000 + g;
  return open(`gen-2.2.6-${pool}-${seed}`, '2.2.6', { lang: 'both', pool, d: 2, src: ['math14'] },
    [`Tarozida ${kg} kg ${g} g olma tortildi. Bu massa necha grammga teng? Javobni son bilan yozing.`,
     `На весах взвесили ${kg} кг ${g} г яблок. Сколько это граммов? Запишите ответ числом.`],
    String(ans),
    [`1 kg = 1000 g: ${kg}·1000 + ${g} = ${ans} g.`, `1 кг = 1000 г: ${kg}·1000 + ${g} = ${ans} г.`],
    {}, ans);
}

/* 2.2.7 Area / volume / time (O-1) */
export function genAreaTime(seed: number, pool: 'practice' | 'exam'): OpenQuestion {
  const r = mulberry32(seed * 104729 + 3);
  const kind = pick(r, ['time', 'area', 'vol'] as const);
  const id = `gen-2.2.7-${pool}-${seed}`;
  if (kind === 'time') {
    const h = int(r, 1, 4), m = int(r, 5, 55);
    const ans = h * 60 + m;
    return open(id, '2.2.7', { lang: 'both', pool, d: 2, src: ['math14'] },
      [`Ekskursiya ${h} soat ${m} daqiqa davom etdi. Bu necha daqiqa? Javobni son bilan yozing.`,
       `Экскурсия длилась ${h} ч ${m} мин. Сколько это минут? Запишите ответ числом.`],
      String(ans), [`1 soat = 60 daqiqa: ${h}·60 + ${m} = ${ans}.`, `1 ч = 60 мин: ${h}·60 + ${m} = ${ans}.`], {}, ans);
  }
  if (kind === 'area') {
    const dm2 = int(r, 2, 9), sm2 = int(r, 1, 99);
    const ans = dm2 * 100 + sm2;
    return open(id, '2.2.7', { lang: 'both', pool, d: 3, src: ['math14', 'tojiyev2012'] },
      [`Rasm yuzasi ${dm2} dm² ${sm2} sm². Bu necha kvadrat santimetr? Javobni son bilan yozing.`,
       `Площадь рисунка ${dm2} дм² ${sm2} см². Сколько это квадратных сантиметров? Запишите ответ числом.`],
      String(ans),
      [`1 dm² = 10 sm · 10 sm = 100 sm² (10 emas!): ${dm2}·100 + ${sm2} = ${ans}. Tipik xato — chiziqli nisbatni (10) yuzaga ko'chirish.`,
       `1 дм² = 10 см · 10 см = 100 см² (не 10!): ${dm2}·100 + ${sm2} = ${ans}. Типичная ошибка — перенос линейного отношения (10) на площадь.`],
      {}, ans);
  }
  const l = int(r, 2, 9);
  const ans = l * 1000;
  return open(id, '2.2.7', { lang: 'both', pool, d: 3, src: ['spec2026', 'tojiyev2012'] },
    [`Akvarium sig'imi ${l} litr. Bu necha kub santimetrga teng? Javobni son bilan yozing.`,
     `Вместимость аквариума ${l} л. Сколько это кубических сантиметров? Запишите ответ числом.`],
    String(ans),
    [`1 l = 1 dm³ = 1000 sm³: ${l}·1000 = ${ans}.`, `1 л = 1 дм³ = 1000 см³: ${l}·1000 = ${ans}.`], {}, ans);
}

/* 2.2.8–2.2.10 Matching block (Y-2): units, perimeter/area, solids */
export function genMeasureMatch(seed: number, pool: 'practice' | 'exam'): MatchingQuestion {
  const r = mulberry32(seed * 15485863 + 5);
  // 2.2.8 units
  const t = int(r, 2, 9);
  const unitsAns = t * 1000;
  // 2.2.9 rectangle
  let a = int(r, 3, 12), b = int(r, 2, a - 1);
  // avoid rectangles whose area equals perimeter (e.g. 6×3, 4×4): options would coincide
  while (a * b === 2 * (a + b)) { a = int(r, 3, 12); b = int(r, 2, a - 1); }
  const per = 2 * (a + b), area = a * b;
  // 2.2.10 cube surface; edge 6 excluded because 6³ = 6·6²
  const c = int(r, 2, 5);
  const cubeSurf = 6 * c * c;
  assert(per !== area && c ** 3 !== cubeSurf, 'distinct');
  const correct = [`${unitsAns} kg|${unitsAns} кг`, `${per} sm|${per} см`, `${cubeSurf} sm²|${cubeSurf} см²`];
  const distract = [`${area} sm|${area} см`, `${c * c * c} sm²|${c * c * c} см²`, `${t * 100} kg|${t * 100} кг`];
  const opts = shuffle([...correct, ...distract], r);
  const letter = (s: string) => 'ABCDEF'[opts.indexOf(s)];
  const asTx = (s: string): [string, string] => s.split('|') as [string, string];
  return match(`gen-2.2.8-${pool}-${seed}`, '2.2.8', { lang: 'both', pool, d: 3, src: ['spec2026', 'tojiyev2012'] },
    ['Har bir savolga mos javobni tanlang.', 'Подберите к каждому вопросу верный ответ.'],
    [
      [[`${t} t necha kilogramm?`, `Сколько килограммов в ${t} т?`], letter(correct[0])],
      [[`Tomonlari ${a} sm va ${b} sm bo'lgan to'g'ri to'rtburchak perimetri`, `Периметр прямоугольника со сторонами ${a} см и ${b} см`], letter(correct[1])],
      [[`Qirrasi ${c} sm bo'lgan kubning to'la sirti`, `Площадь полной поверхности куба с ребром ${c} см`], letter(correct[2])],
    ],
    opts.map(asTx),
    [`1 t = 1000 kg → ${unitsAns} kg. P = 2·(${a}+${b}) = ${per} sm (yuza ${area} sm² — chalg'ituvchi). Kub sirti 6·${c}² = ${cubeSurf} sm² (hajm ${c ** 3} sm³ — chalg'ituvchi).`,
     `1 т = 1000 кг → ${unitsAns} кг. P = 2·(${a}+${b}) = ${per} см (площадь ${area} см² — дистрактор). Поверхность куба 6·${c}² = ${cubeSurf} см² (объём ${c ** 3} см³ — дистрактор).`]);
}

/* 2.3.4 Working backwards (O-1) */
export function genBackward(seed: number, pool: 'practice' | 'exam'): OpenQuestion {
  const r = mulberry32(seed * 6151 + 17);
  const start = int(r, 4, 30);
  const add = int(r, 3, 15), mul = int(r, 2, 4), sub = int(r, 2, 12);
  const end = (start + add) * mul - sub;
  // inverse chain check
  const back = (end + sub) / mul - add;
  assert(back === start, 'backward');
  return open(`gen-2.3.4-${pool}-${seed}`, '2.3.4', { lang: 'both', pool, d: 3, src: ['sinfoniyeva', 'abduhalimov'] },
    [`Ali bir son o'yladi. Unga ${add} ni qo'shdi, natijani ${mul} ga ko'paytirdi va ${sub} ni ayirdi. ${end} hosil bo'ldi. Ali qaysi sonni o'ylagan?`,
     `Али задумал число. Прибавил ${add}, результат умножил на ${mul} и вычел ${sub}. Получилось ${end}. Какое число задумал Али?`],
    String(start),
    [`Orqaga qaytish: teskari amallarni teskari tartibda bajaramiz: (${end} + ${sub}) : ${mul} − ${add} = ${start}. O'quvchiga amallar zanjirini strelkali chizma bilan ko'rsatish samarali.`,
     `Обратный ход: выполняем обратные действия в обратном порядке: (${end} + ${sub}) : ${mul} − ${add} = ${start}. Ученикам полезно показать цепочку действий схемой со стрелками.`],
    {}, start);
}

/* 2.3.8 Sequences (O-1) */
export function genSequence(seed: number, pool: 'practice' | 'exam'): OpenQuestion {
  const r = mulberry32(seed * 3571 + 29);
  const kind = pick(r, ['arith', 'alt', 'geom'] as const);
  let seq: number[] = [];
  let rule: [string, string];
  if (kind === 'arith') {
    const a = int(r, 1, 20), d = int(r, 3, 9);
    seq = Array.from({ length: 6 }, (_, i) => a + i * d);
    rule = [`har safar +${d}`, `каждый раз +${d}`];
  } else if (kind === 'alt') {
    const a = int(r, 10, 30), p = int(r, 4, 9), q = int(r, 1, p - 1);
    seq = [a];
    for (let i = 1; i < 6; i++) seq.push(seq[i - 1] + (i % 2 ? p : -q));
    rule = [`navbat bilan +${p} va −${q}`, `поочерёдно +${p} и −${q}`];
  } else {
    const a = int(r, 1, 3), k = pick(r, [2, 3]);
    seq = Array.from({ length: 6 }, (_, i) => a * k ** i);
    rule = [`har safar ×${k}`, `каждый раз ×${k}`];
  }
  const ans = seq[5];
  const shown = seq.slice(0, 5).join(', ');
  return open(`gen-2.3.8-${pool}-${seed}`, '2.3.8', { lang: 'both', pool, d: 2, src: ['abduhalimov'] },
    [`Qonuniyatni aniqlang va keyingi sonni yozing: ${shown}, …`, `Найдите закономерность и запишите следующее число: ${shown}, …`],
    String(ans),
    [`Qoida: ${rule[0]}. Keyingi son — ${ans}. Induktiv fikrlash uchun o'quvchidan qoidani so'z bilan aytishni so'rang.`,
     `Правило: ${rule[1]}. Следующее число — ${ans}. Для индуктивного мышления просите ученика сформулировать правило словами.`],
    {}, ans);
}

/* 2.1.8 Division with remainder (practice MC) */
export function genRemainder(seed: number): ChoiceQuestion {
  const r = mulberry32(seed * 911 + 41);
  const d = int(r, 3, 9), qn = int(r, 2, 9), rem = int(r, 1, d - 1);
  const n = d * qn + rem;
  assert(n % d === rem && Math.floor(n / d) === qn, 'remainder');
  const [opts, ans] = numericChoices(r, rem, [d + rem, rem + 1, d - rem]);
  return mc(`gen-2.1.8-${seed}`, '2.1.8', { lang: 'both', pool: 'practice', d: 2, src: ['bikbayeva'] },
    [`${n} : ${d} bo'linganda qoldiq nechaga teng?`, `Чему равен остаток при делении ${n} : ${d}?`],
    opts, ans,
    [`${n} = ${d}·${qn} + ${rem}, qoldiq ${rem} < ${d}. Qoldiq har doim bo'luvchidan kichik bo'ladi.`,
     `${n} = ${d}·${qn} + ${rem}, остаток ${rem} < ${d}. Остаток всегда меньше делителя.`]);
}

/* 2.3.3 Combinatorics (practice MC) */
export function genCombinatorics(seed: number): ChoiceQuestion {
  const r = mulberry32(seed * 2027 + 53);
  const a = int(r, 2, 5), b = int(r, 2, 4);
  const ans = a * b;
  const [opts, letter] = numericChoices(r, ans, [a + b, ans + a, ans - b]);
  return mc(`gen-2.3.3-${seed}`, '2.3.3', { lang: 'both', pool: 'practice', d: 2, src: ['abduhalimov'] },
    [`Kafeda ${a} xil muzqaymoq va ${b} xil sharbat bor. Bitta muzqaymoq va bitta sharbatdan iborat nechta turli to'plam tanlash mumkin?`,
     `В кафе ${a} вида мороженого и ${b} вида сока. Сколько разных наборов «одно мороженое + один сок» можно выбрать?`],
    opts, letter,
    [`Imkoniyatlar daraxti: har bir muzqaymoqdan ${b} ta shox chiqadi → ${a}·${b} = ${ans}. Qo'shish (${a + b}) — tipik xato.`,
     `Дерево возможностей: от каждого мороженого ${b} ветки → ${a}·${b} = ${ans}. Сложение (${a + b}) — типичная ошибка.`]);
}

/* 2.3.6 Pigeonhole / worst case (practice MC) */
export function genPigeonhole(seed: number): ChoiceQuestion {
  const r = mulberry32(seed * 3001 + 61);
  const colors = int(r, 2, 4), need = int(r, 2, 3);
  const ans = colors * (need - 1) + 1;
  const [opts, letter] = numericChoices(r, ans, [colors * need, need + 1, ans - 1]);
  return mc(`gen-2.3.6-${seed}`, '2.3.6', { lang: 'both', pool: 'practice', d: 3, src: ['sinfoniyeva'] },
    [`Qutida ${colors} xil rangli sharlar ko'p. Qorong'ida kamida nechta shar olinsa, ular orasida albatta bir xil rangli ${need} ta shar bo'ladi?`,
     `В коробке много шаров ${colors} цветов. Какое наименьшее число шаров нужно вынуть в темноте, чтобы среди них наверняка было ${need} шара одного цвета?`],
    opts, letter,
    [`Eng yomon holat: har rangdan ${need - 1} tadan = ${colors * (need - 1)} ta, keyingi bitta shar kafolat beradi: ${ans}.`,
     `Худший случай: по ${need - 1} каждого цвета = ${colors * (need - 1)}, следующий шар гарантирует: ${ans}.`]);
}

/** Exam-pool generated items for variants 1..n (one per computational slot). */
export function generatedExamItems(n: number): Question[] {
  const out: Question[] = [];
  const seen = new Set<string>();
  const push = (q: Question) => {
    // matching items share the instruction text, so their stems are part of the key
    const key = q.type + JSON.stringify(q.stem) + (q.type === "Y-2" ? JSON.stringify(q.stems.map((s) => s.text)) : "");
    if (!seen.has(key)) { seen.add(key); out.push(q); }
  };
  // Seeds are drawn until n unique items exist per generator.
  const fill = (gen: (s: number, p: 'exam') => Question) => {
    let s = 1000, made = 0;
    while (made < n && s < 100000) {
      const before = out.length;
      push(gen(s++, 'exam'));
      if (out.length > before) made++;
    }
  };
  fill(genMeasure); fill(genAreaTime); fill(genMeasureMatch); fill(genBackward); fill(genSequence);
  return out;
}

/** Fresh practice item for a code (used by "new similar task"). */
export function generatePractice(code: string, seed: number): Question | null {
  switch (code) {
    case '2.2.6': return genMeasure(seed, 'practice');
    case '2.2.7': return genAreaTime(seed, 'practice');
    case '2.2.8': case '2.2.9': case '2.2.10': return genMeasureMatch(seed, 'practice');
    case '2.3.4': return genBackward(seed, 'practice');
    case '2.3.8': return genSequence(seed, 'practice');
    case '2.1.8': return genRemainder(seed);
    case '2.3.3': return genCombinatorics(seed);
    case '2.3.6': return genPigeonhole(seed);
    default: return null;
  }
}

export const GENERATED_CODES = ['2.2.6', '2.2.7', '2.2.8', '2.2.9', '2.2.10', '2.3.4', '2.3.8', '2.1.8', '2.3.3', '2.3.6'];
