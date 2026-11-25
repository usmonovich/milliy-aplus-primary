// Batch-7 interactive lesson widgets for this course. Each widget: ({ lang }) => JSX, mobile-first (375px),
// uses only React and tailwind tokens (bg-surface-2, border-line, text-ink, text-ink-soft, brand, emerald, gold, danger).
// Do not import from ../kit (avoids a cycle). Register widgets in the exported record; ids must be unique (ru-*).
// The Russian course is Russian-only, so widget texts are in Russian for both locales.
import { useState, type ReactNode } from 'react';
import type { Locale } from '../../core/types';

const btn = (active: boolean) =>
  `min-h-[2.75rem] rounded-full border px-4 text-base font-medium transition ${active ? 'border-brand bg-brand text-white dark:text-surface-2' : 'border-line bg-surface hover:bg-brand-soft'}`;

/* ---------- 1. Спряжение глагола: тренажёр «I или II?» ---------- */
interface VerbItem { inf: string; conj: 1 | 2; form: string; why: string }
export const CONJ_ITEMS: VerbItem[] = [
  { inf: 'строить', conj: 2, form: 'он стро..т', why: 'Окончание безударное; глагол на -ить и не исключение → II спряжение: строит.' },
  { inf: 'таять', conj: 1, form: 'снег та..т', why: 'Окончание безударное; глагол на -ять (не -ить) и не исключение → I спряжение: тает.' },
  { inf: 'брить', conj: 1, form: 'он бр..т', why: 'Исключение: «брить» — I спряжение: бреет.' },
  { inf: 'гнать', conj: 2, form: 'они гон..т', why: 'Исключение среди глаголов на -ать: «гнать» — II спряжение: гонят.' },
  { inf: 'вертеть', conj: 2, form: 'ты верт..шь', why: 'Исключение среди глаголов на -еть: II спряжение: вертишь.' },
  { inf: 'клеить', conj: 2, form: 'мы кле..м', why: 'Глагол на -ить, не исключение → II спряжение: клеим.' },
  { inf: 'стелить', conj: 1, form: 'вы стел..те', why: 'Исключение: «стелить» — I спряжение: стелете.' },
  { inf: 'колоть', conj: 1, form: 'он кол..т', why: 'Глагол на -оть → I спряжение: колет.' },
  { inf: 'дышать', conj: 2, form: 'они дыш..т', why: 'Исключение среди глаголов на -ать: II спряжение: дышат.' },
  { inf: 'выгнать', conj: 2, form: 'ты выгон..шь', why: 'Приставочный глагол от исключения «гнать» сохраняет II спряжение: выгонишь.' },
];

function ConjTrainer() {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<0 | 1 | 2>(0);
  const [score, setScore] = useState(0);
  const it = CONJ_ITEMS[i];
  const answered = pick !== 0;
  const choose = (c: 1 | 2) => { if (answered) return; setPick(c); if (c === it.conj) setScore((s) => s + 1); };
  const next = () => { setPick(0); setI((x) => (x + 1) % CONJ_ITEMS.length); if (i === CONJ_ITEMS.length - 1) setScore(0); };
  return (
    <div>
      <p className="text-sm text-ink-soft">Глагол {i + 1} из {CONJ_ITEMS.length} · верно: {score}</p>
      <p className="mt-2 text-lg font-semibold">{it.form}</p>
      <p className="text-base text-ink-soft">неопределённая форма: <b>{it.inf}</b></p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className={btn(pick === 1)} onClick={() => choose(1)}>I спряжение (-ешь, -ет, -ут)</button>
        <button type="button" className={btn(pick === 2)} onClick={() => choose(2)}>II спряжение (-ишь, -ит, -ат)</button>
      </div>
      {answered && (
        <div className={`mt-3 rounded-xl p-3 text-base ${pick === it.conj ? 'bg-emerald-soft' : 'bg-danger-soft'}`}>
          <b>{pick === it.conj ? 'Верно. ' : 'Неверно. '}</b>{it.why}
          <div className="mt-2"><button type="button" className={btn(false)} onClick={next}>Следующий глагол</button></div>
        </div>
      )}
    </div>
  );
}

/* ---------- 2. Звуковая схема слова (красный — гласный, синий — твёрдый, зелёный — мягкий согласный) ---------- */
type Kind = 'v' | 'h' | 's';
interface SchemeWord { word: string; syl: string; sounds: { s: string; k: Kind; stress?: boolean }[]; note: string }
export const SCHEME_WORDS: SchemeWord[] = [
  { word: 'мак', syl: 'мак', sounds: [{ s: 'м', k: 'h' }, { s: 'а', k: 'v', stress: true }, { s: 'к', k: 'h' }], note: '1 слог, 3 буквы, 3 звука.' },
  { word: 'лиса', syl: 'ли-са', sounds: [{ s: 'л’', k: 's' }, { s: 'и', k: 'v' }, { s: 'с', k: 'h' }, { s: 'а', k: 'v', stress: true }], note: 'Гласная «и» показывает мягкость [л’]. 2 слога, 4 буквы, 4 звука.' },
  { word: 'юла', syl: 'ю-ла', sounds: [{ s: 'й’', k: 's' }, { s: 'у', k: 'v' }, { s: 'л', k: 'h' }, { s: 'а', k: 'v', stress: true }], note: '«ю» в начале слова обозначает два звука [й’у]. 3 буквы, 4 звука.' },
  { word: 'конь', syl: 'конь', sounds: [{ s: 'к', k: 'h' }, { s: 'о', k: 'v', stress: true }, { s: 'н’', k: 's' }], note: '«ь» звука не обозначает, он показывает мягкость [н’]. 4 буквы, 3 звука.' },
  { word: 'ёжик', syl: 'ё-жик', sounds: [{ s: 'й’', k: 's' }, { s: 'о', k: 'v', stress: true }, { s: 'ж', k: 'h' }, { s: 'ы', k: 'v' }, { s: 'к', k: 'h' }], note: '«ё» в начале — [й’о]; [ж] всегда твёрдый, после него «и» звучит как [ы]. 4 буквы, 5 звуков.' },
];

const chip: Record<Kind, string> = { v: 'bg-danger text-white', h: 'bg-brand text-white', s: 'bg-emerald text-white' };

function SoundScheme() {
  const [w, setW] = useState(0);
  const [open, setOpen] = useState(false);
  const it = SCHEME_WORDS[w];
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {SCHEME_WORDS.map((x, i) => (
          <button key={x.word} type="button" className={btn(i === w)} onClick={() => { setW(i); setOpen(false); }}>{x.word}</button>
        ))}
      </div>
      <p className="mt-3 text-lg">Слово: <b>{it.word}</b> · по слогам: <b>{it.syl}</b></p>
      <div className="mt-2 flex flex-wrap gap-2" aria-label="Звуковая схема">
        {it.sounds.map((x, i) => (
          <span key={i} className={`relative grid h-12 min-w-[3rem] place-items-center rounded-lg px-2 text-lg font-bold ${open ? chip[x.k] : 'border-2 border-dashed border-line text-ink-soft'}`}>
            {open && x.stress && <span className="absolute -top-3 text-base text-ink">´</span>}
            {open ? `[${x.s}]` : '?'}
          </span>
        ))}
      </div>
      <div className="mt-3">
        <button type="button" className={btn(open)} onClick={() => setOpen((o) => !o)}>{open ? 'Скрыть схему' : 'Показать схему'}</button>
      </div>
      {open && <p className="mt-2 text-base text-ink-soft">{it.note}</p>}
      <p className="mt-2 text-sm text-ink-soft">Красный — гласный, синий — твёрдый согласный, зелёный — мягкий согласный; знак ´ — ударение.</p>
    </div>
  );
}

/* ---------- 3. Однородные члены: где нужна запятая? ---------- */
interface CommaItem { parts: string[]; need: boolean[]; why: string }
export const COMMA_ITEMS: CommaItem[] = [
  { parts: ['В саду росли яблони', ' груши', ' и сливы.'], need: [true, false], why: 'Без союза — запятая; перед одиночным «и» запятой нет.' },
  { parts: ['Дождь был короткий', ' но сильный.'], need: [true], why: 'Перед союзом «но» между однородными членами ставится запятая.' },
  { parts: ['Дети читали', ' и рисовали.'], need: [false], why: 'Одиночный союз «и» соединяет два однородных сказуемых — запятая не нужна.' },
  { parts: ['Это не ворона', ' а галка.'], need: [true], why: 'Перед союзом «а» ставится запятая.' },
];

function CommaGame() {
  const [i, setI] = useState(0);
  const [marks, setMarks] = useState<boolean[]>(COMMA_ITEMS[0].need.map(() => false));
  const [checked, setChecked] = useState(false);
  const it = COMMA_ITEMS[i];
  const ok = checked && marks.every((m, k) => m === it.need[k]);
  const go = (n: number) => { setI(n); setMarks(COMMA_ITEMS[n].need.map(() => false)); setChecked(false); };
  const out: ReactNode[] = [];
  it.parts.forEach((p, k) => {
    out.push(<span key={`p${k}`}>{p}</span>);
    if (k < it.need.length) out.push(
      <button key={`b${k}`} type="button" aria-label="Поставить или убрать запятую" onClick={() => { if (!checked) setMarks((m) => m.map((x, j) => (j === k ? !x : x))); }}
        className={`mx-0.5 inline-grid h-9 w-9 place-items-center rounded-lg border text-lg font-bold ${marks[k] ? 'border-brand bg-brand-soft text-brand' : 'border-dashed border-line text-ink-soft'}`}>{marks[k] ? ',' : '·'}</button>,
    );
  });
  return (
    <div>
      <p className="text-sm text-ink-soft">Нажмите на квадратик, чтобы поставить запятую. Предложение {i + 1} из {COMMA_ITEMS.length}.</p>
      <p className="mt-2 text-lg leading-10">{out}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" className={btn(false)} onClick={() => setChecked(true)}>Проверить</button>
        <button type="button" className={btn(false)} onClick={() => go((i + 1) % COMMA_ITEMS.length)}>Дальше</button>
      </div>
      {checked && <p className={`mt-3 rounded-xl p-3 text-base ${ok ? 'bg-emerald-soft' : 'bg-danger-soft'}`}><b>{ok ? 'Верно. ' : 'Есть ошибка. '}</b>{it.why}</p>}
    </div>
  );
}

export const W_RU: Record<string, (p: { lang: Locale }) => ReactNode> = {
  'ru-conj': ConjTrainer,
  'ru-scheme': SoundScheme,
  'ru-commas': CommaGame,
};
