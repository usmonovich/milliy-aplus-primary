// Batch-7 interactive lesson widgets for this course. Each widget: ({ lang }) => JSX, mobile-first (375px),
// uses only React and tailwind tokens (bg-surface-2, border-line, text-ink, text-ink-soft, brand, emerald, gold, danger).
// Do not import from ../kit (avoids a cycle). Register widgets in the exported record; ids must be unique (ped-*).
import { useState, type ReactNode } from 'react';
import type { Locale } from '../../core/types';

type T2 = [string, string];
const pick = (lang: Locale, t: T2) => (lang === 'uz' ? t[0] : t[1]);

/** Analytic rubric total: sum of level × weight, maximum = maxLevel × sum of weights, percent rounded to a whole number. */
export function rubricScore(levels: number[], weights: number[], maxLevel: number) {
  const score = levels.reduce((s, l, i) => s + l * (weights[i] ?? 1), 0);
  const max = weights.reduce((s, w) => s + w, 0) * maxLevel;
  return { score, max, pct: Math.round((score / max) * 100) };
}

/* ---------------- 1. Analytic rubric scorer ---------------- */

const CRIT: { name: T2; d: [T2, T2, T2] }[] = [
  { name: ['Mazmun mavzuga mos', 'Содержание по теме'], d: [
    ["Mavzudan chetga chiqadi, asosiy fikr yo'q", 'Уходит от темы, нет главной мысли'],
    ["Mavzuga mos, lekin fikr bitta gap bilan cheklangan", 'По теме, но мысль ограничена одним предложением'],
    ["Mavzuga mos, asosiy fikr 2–3 dalil bilan ochilgan", 'По теме, главная мысль раскрыта 2–3 подробностями'],
  ] },
  { name: ["Ketma-ketlik (boshlanma–voqea–yakun)", 'Последовательность (начало–событие–конец)'], d: [
    ["Qismlar aralashib ketgan", 'Части перепутаны'],
    ["Ikki qism bor, bittasi yo'q", 'Есть две части, одной нет'],
    ["Uch qism ham bor va tartibli", 'Есть все три части, по порядку'],
  ] },
  { name: ['Gap tuzilishi', 'Построение предложений'], d: [
    ["Ko'p gaplar tugallanmagan", 'Многие предложения не закончены'],
    ["Gaplar tugallangan, lekin bir xil boshlanadi", 'Предложения закончены, но начинаются одинаково'],
    ["Gaplar tugallangan va turlicha", 'Предложения закончены и разнообразны'],
  ] },
  { name: ['Imlo va tinish belgilari', 'Орфография и пунктуация'], d: [
    ["Gap oxirida nuqta va bosh harf ko'pincha yo'q", 'Точки в конце и заглавной буквы часто нет'],
    ["Bosh harf va nuqta bor, o'rganilgan so'zlarda 2–3 xato", 'Заглавная и точка есть, в изученных словах 2–3 ошибки'],
    ["Bosh harf, nuqta va o'rganilgan so'zlar to'g'ri", 'Заглавная, точка и изученные слова — верно'],
  ] },
];

function RubricScorer({ lang }: { lang: Locale }) {
  const [lv, setLv] = useState<number[]>([2, 3, 2, 1]);
  const [heavy, setHeavy] = useState(false);
  const weights = heavy ? [2, 1, 1, 1] : [1, 1, 1, 1];
  const r = rubricScore(lv, weights, 3);
  const weakest = lv.indexOf(Math.min(...lv));
  const lvName: T2[] = [['1 — boshlang\'ich', '1 — начальный'], ['2 — rivojlanmoqda', '2 — развивается'], ['3 — yetarli', '3 — достаточный']];
  return (
    <div className="space-y-3 text-base text-ink">
      <p className="text-sm text-ink-soft">{pick(lang, ["2-sinf: «Mening dam olish kunim» hikoyasi. Har mezon uchun darajani tanlang.", '2 класс: рассказ «Мой выходной день». Выберите уровень по каждому критерию.'])}</p>
      {CRIT.map((c, i) => (
        <div key={i} className="rounded-xl border border-line bg-surface-2 p-2">
          <p className="font-semibold">{pick(lang, c.name)}{heavy && i === 0 ? ' ×2' : ''}</p>
          <div className="mt-1 flex gap-1">
            {[1, 2, 3].map((n) => (
              <button key={n} onClick={() => setLv(lv.map((x, j) => (j === i ? n : x)))}
                className={`min-h-[44px] flex-1 rounded-lg border px-1 text-base ${lv[i] === n ? 'border-brand bg-brand text-white dark:text-surface-2' : 'border-line'}`}
                aria-pressed={lv[i] === n}>{n}</button>
            ))}
          </div>
          <p className="mt-1 text-sm text-ink-soft">{pick(lang, lvName[lv[i] - 1])}: {pick(lang, c.d[lv[i] - 1])}</p>
        </div>
      ))}
      <label className="flex min-h-[44px] items-center gap-2">
        <input type="checkbox" checked={heavy} onChange={(e) => setHeavy(e.target.checked)} className="h-5 w-5 accent-emerald" />
        <span>{pick(lang, ["Mazmun mezoniga ikki baravar vazn berish", 'Дать критерию «Содержание» двойной вес'])}</span>
      </label>
      <div className="rounded-xl bg-brand-soft p-2 font-semibold text-brand">
        {pick(lang, ['Jami', 'Итого'])}: {r.score} / {r.max} = {r.pct}%
      </div>
      <p className="rounded-xl border border-gold/40 bg-gold/10 p-2 text-sm">
        {pick(lang, ['Keyingi qadam', 'Следующий шаг'])}: {pick(lang, CRIT[weakest].name)} — {lv[weakest] < 3 ? pick(lang, CRIT[weakest].d[lv[weakest]]) : pick(lang, ['barcha mezonlar yetarli darajada', 'все критерии на достаточном уровне'])}
      </p>
    </div>
  );
}

/* ---------------- 2. A child's day: sleep, movement, screen ---------------- */

function Slider({ label, v, set, min, max, step, unit }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step: number; unit: string }) {
  return (
    <label className="block text-base text-ink">
      <span>{label}: <b>{v} {unit}</b></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} className="h-8 w-full accent-emerald" aria-label={label} />
    </label>
  );
}

function ScreenDay({ lang }: { lang: Locale }) {
  const [sleep, setSleep] = useState(8.5);
  const [move, setMove] = useState(40);
  const [screen, setScreen] = useState(150);
  const h = pick(lang, ['soat', 'ч']), m = pick(lang, ['daq', 'мин']);
  const rows: { ok: boolean; t: string }[] = [
    { ok: sleep >= 9 && sleep <= 12, t: pick(lang, ["Uyqu: 6–12 yoshda sutkasiga 9–12 soat tavsiya etiladi", 'Сон: в 6–12 лет рекомендуется 9–12 часов в сутки']) },
    { ok: move >= 60, t: pick(lang, ["Harakat: o'rtacha kuniga kamida 60 daqiqa o'rtacha va yuqori jadallikda", 'Движение: в среднем не меньше 60 минут в день умеренной и высокой интенсивности']) },
    { ok: screen <= move, t: pick(lang, ["Dam olish uchun ekran vaqti cheklangan va harakatdan oshmaydi (qanchalik kam — shunchalik yaxshi)", 'Экран для досуга ограничен и не больше времени движения (чем меньше, тем лучше)']) },
  ];
  return (
    <div className="space-y-2">
      <p className="text-sm text-ink-soft">{pick(lang, ["8 yoshli o'quvchining odatiy kuni. Surgichlarni siljiting.", 'Обычный день ученика 8 лет. Двигайте ползунки.'])}</p>
      <Slider label={pick(lang, ['Uyqu', 'Сон'])} v={sleep} set={setSleep} min={6} max={13} step={0.5} unit={h} />
      <Slider label={pick(lang, ["Faol harakat (yugurish, o'yin)", 'Активное движение (бег, игры)'])} v={move} set={setMove} min={0} max={180} step={10} unit={m} />
      <Slider label={pick(lang, ['Dam olish uchun ekran', 'Экран для досуга'])} v={screen} set={setScreen} min={0} max={300} step={10} unit={m} />
      <ul className="space-y-1">
        {rows.map((r, i) => (
          <li key={i} className={`rounded-xl p-2 text-sm ${r.ok ? 'bg-emerald-soft text-ink' : 'bg-danger-soft text-ink'}`}>{r.ok ? '✓' : '✗'} {r.t}</li>
        ))}
      </ul>
      <p className="text-sm text-ink-soft">{pick(lang, ["Bu tibbiy tashxis emas: o'qituvchi faqat ota-onalar bilan odatlar haqida suhbat uchun foydalanadi.", 'Это не медицинская оценка: учитель использует её только для разговора с родителями о привычках.'])}</p>
    </div>
  );
}

/* ---------------- 3. Fire-alarm evacuation: put the steps in order ---------------- */

const EVAC: T2[] = [
  ["Tinch ovozda qisqa buyruq: «Hamma ishni to'xtatadi, narsalarni qoldiramiz»", 'Спокойно и коротко: «Все прекращают работу, вещи оставляем»'],
  ["Sinf ro'yxatini (jurnalni) olish", 'Взять список класса (журнал)'],
  ["Belgilangan yo'l bo'yicha juft-juft, yugurmasdan chiqish; liftdan foydalanmaslik", 'Выходить парами по установленному маршруту, не бегом; лифтом не пользоваться'],
  ["Yig'ilish joyida o'quvchilarni ro'yxat bo'yicha sanash", 'На месте сбора пересчитать учеников по списку'],
  ["Ma'muriyatga darhol xabar berish: hamma bor yoki kim yo'q", 'Сразу доложить администрации: все на месте или кого нет'],
];
const SHUFFLE = [2, 4, 0, 3, 1];

function EvacOrder({ lang }: { lang: Locale }) {
  const [done, setDone] = useState<number[]>([]);
  const [miss, setMiss] = useState<number | null>(null);
  const tap = (k: number) => {
    if (done.includes(k)) return;
    if (k === done.length) { setDone([...done, k]); setMiss(null); } else setMiss(k);
  };
  return (
    <div className="space-y-2 text-base text-ink">
      <p className="text-sm text-ink-soft">{pick(lang, ["Yong'in signali chalindi. Qadamlarni to'g'ri tartibda bosing (maktabingiz evakuatsiya rejasi ustun turadi).", 'Звучит пожарная тревога. Нажимайте шаги в правильном порядке (план эвакуации вашей школы — главный).'])}</p>
      {SHUFFLE.map((k) => (
        <button key={k} onClick={() => tap(k)} disabled={done.includes(k)}
          className={`block min-h-[44px] w-full rounded-xl border p-2 text-left text-base ${done.includes(k) ? 'border-emerald bg-emerald-soft' : miss === k ? 'border-danger bg-danger-soft' : 'border-line bg-surface-2'}`}>
          {done.includes(k) ? `${done.indexOf(k) + 1}. ` : ''}{pick(lang, EVAC[k])}
        </button>
      ))}
      {miss !== null && <p className="text-sm text-danger">{pick(lang, ["Hali erta: avval oldingi qadamni bajaring.", 'Рано: сначала выполните предыдущий шаг.'])}</p>}
      {done.length === EVAC.length && (
        <p className="rounded-xl bg-emerald-soft p-2 text-sm">{pick(lang, ["To'g'ri! Asosiy g'oya: tinchlik → ro'yxat → xavfsiz chiqish → sanash → xabar.", 'Верно! Главное: спокойствие → список → безопасный выход → пересчёт → доклад.'])}</p>
      )}
      <button onClick={() => { setDone([]); setMiss(null); }} className="min-h-[44px] rounded-xl border border-line px-3 text-base">{pick(lang, ['Qaytadan', 'Заново'])}</button>
    </div>
  );
}

export const W_PED: Record<string, (p: { lang: Locale }) => ReactNode> = {
  'ped-rubric': ({ lang }) => <RubricScorer lang={lang} />,
  'ped-screenday': ({ lang }) => <ScreenDay lang={lang} />,
  'ped-evac': ({ lang }) => <EvacOrder lang={lang} />,
};
