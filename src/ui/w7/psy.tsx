// Batch-7 interactive lesson widgets for this course. Each widget: ({ lang }) => JSX, mobile-first (375px),
// uses only React and tailwind tokens (bg-surface-2, border-line, text-ink, text-ink-soft, brand, emerald, gold, danger).
// Do not import from ../kit (avoids a cycle). Register widgets in the exported record; ids must be unique (psy-*).
import { useState, type ReactNode } from 'react';
import type { Locale } from '../../core/types';

const t = (lang: Locale, uz: string, ru: string) => (lang === 'uz' ? uz : ru);

/** Conflict or bullying? Three criteria toggles give a cautious verdict and the next step. */
function BullyCheck({ lang }: { lang: Locale }) {
  const [c, setC] = useState({ harm: false, repeat: false, power: false });
  const items: [keyof typeof c, string, string][] = [
    ['harm', "Xatti-harakat bolaga zarar yetkazmoqda va u buni istamaydi", 'Поведение причиняет вред, и ребёнок этого не хочет'],
    ['repeat', "Takrorlanmoqda yoki takrorlanishidan bola qo'rqadi", 'Повторяется, или ребёнок боится повторения'],
    ['power', "Kuchlar teng emas (yosh, jismoniy kuch, guruh, mavqe)", 'Неравенство сил (возраст, сила, группа, статус)'],
  ];
  const n = Object.values(c).filter(Boolean).length;
  const verdict = n === 3
    ? t(lang, "Bulling belgilari bor. Mediatsiya emas: avval jabrlanuvchini himoya qiling, tashabbuskor bilan alohida gaplashing, ma'muriyat va ota-onani xabardor qiling.", 'Есть признаки буллинга. Не медиация: сначала защитите пострадавшего, поговорите с инициатором отдельно, сообщите администрации и родителям.')
    : c.harm
      ? t(lang, "Zararli xatti-harakat — darhol to'xtating. Takror va kuch tengsizligini kuzating: bu nizo bo'lishi ham, bullingning boshlanishi ham mumkin.", 'Вредное поведение — остановите сразу. Наблюдайте за повторением и неравенством сил: это может быть и конфликт, и начало буллинга.')
      : t(lang, "Hozircha bu teng tomonlar o'rtasidagi nizo yoki o'yinga o'xshaydi. Kuzating; nizo bo'lsa — muzokara yoki mediatsiya.", 'Пока похоже на конфликт равных или игру. Наблюдайте; при конфликте — переговоры или медиация.');
  return (
    <div>
      <div className="space-y-2">
        {items.map(([k, uz, ru]) => (
          <label key={k} className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-surface-2 p-3 text-base text-ink">
            <input type="checkbox" checked={c[k]} onChange={() => setC({ ...c, [k]: !c[k] })} className="h-5 w-5 accent-brand" />
            <span>{t(lang, uz, ru)}</span>
          </label>
        ))}
      </div>
      <p className={`mt-3 rounded-xl p-3 text-sm ${n === 3 ? 'bg-danger/10 text-danger' : 'bg-brand-soft text-ink'}`}>{verdict}</p>
      <p className="mt-2 text-xs text-ink-soft">{t(lang, "Bu tashxis emas, faqat kuzatish uchun yo'naltiruvchi savollar.", 'Это не диагноз, а ориентир для наблюдения.')}</p>
    </div>
  );
}

/** Sociometric matrix (positive criterion only): toggle choices, see choices received and mutual pairs. */
function SocioMatrix({ lang }: { lang: Locale }) {
  const names = ['Oydin', 'Sardor', 'Kamola', 'Nilufar', 'Temur'];
  const [m, setM] = useState<boolean[][]>([
    [false, true, true, false, false],
    [true, false, false, true, false],
    [true, true, false, false, false],
    [true, false, true, false, false],
    [true, true, false, false, false],
  ]);
  const toggle = (i: number, j: number) => { if (i !== j) setM(m.map((r, a) => r.map((v, b) => (a === i && b === j ? !v : v)))); };
  const received = names.map((_, j) => m.filter((r) => r[j]).length);
  let mutual = 0;
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) if (m[i][j] && m[j][i]) mutual++;
  return (
    <div>
      <p className="mb-2 text-xs text-ink-soft">{t(lang, "Qator — kim tanlaydi, ustun — kimni tanlaydi. Katakni bosing.", 'Строка — кто выбирает, столбец — кого выбирают. Нажмите на клетку.')}</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center text-sm">
          <thead><tr><th className="p-1" />{names.map((n) => <th key={n} className="p-1 text-xs font-semibold text-ink-soft">{n.slice(0, 3)}</th>)}</tr></thead>
          <tbody>
            {names.map((n, i) => (
              <tr key={n}>
                <th className="p-1 text-left text-xs font-semibold text-ink">{n}</th>
                {names.map((_, j) => (
                  <td key={j} className="p-0.5">
                    <button type="button" onClick={() => toggle(i, j)} aria-label={`${n} → ${names[j]}`} disabled={i === j}
                      className={`h-11 w-11 rounded-lg border text-base font-bold ${i === j ? 'border-line bg-surface-2 text-ink-soft' : m[i][j] ? (m[j][i] ? 'border-emerald bg-emerald/30 text-ink' : 'border-brand bg-brand/20 text-ink') : 'border-line bg-surface-2 text-ink-soft'}`}>
                      {i === j ? '—' : m[i][j] ? '+' : ''}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
            <tr><th className="p-1 text-left text-xs text-ink-soft">{t(lang, 'Oldi', 'Получил')}</th>{received.map((r, j) => <td key={j} className={`p-1 text-base font-bold ${r === 0 ? 'text-danger' : 'text-ink'}`}>{r}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-ink">{t(lang, "O'zaro tanlovlar (yashil):", 'Взаимные выборы (зелёные):')} <b>{mutual}</b></p>
      <p className="mt-1 text-xs text-ink-soft">{t(lang, "Natija sir saqlanadi va faqat yordam rejasi uchun ishlatiladi. 0 — yorliq emas, e'tibor kerakligi haqida signal.", 'Результаты конфиденциальны и нужны только для плана помощи. 0 — не ярлык, а сигнал, что нужно внимание.')}</p>
    </div>
  );
}

/** Schematic work-capacity curve during a lesson, with an optional short movement break. */
function WorkCurve({ lang }: { lang: Locale }) {
  const [len, setLen] = useState(35);
  const [pause, setPause] = useState(false);
  const [min, setMin] = useState(18);
  const pauseAt = Math.round(len * 0.45);
  const f = (x: number) => {
    const warm = Math.min(1, x / 6);
    let v = 40 + 50 * warm;
    const start = pause ? pauseAt + 8 : len * 0.42;
    if (x > start) v -= (x - start) * (pause ? 1.6 : 2.4);
    if (pause && x > pauseAt && x <= pauseAt + 8) v = Math.max(v, 88 - (x - pauseAt) * 0.4);
    if (x > len - 3) v += 4;
    return Math.max(15, Math.min(95, v));
  };
  const W = 300, H = 140, sx = (x: number) => 10 + (x / len) * (W - 20), sy = (v: number) => H - 10 - (v / 100) * (H - 20);
  const pts = Array.from({ length: len + 1 }, (_, x) => `${sx(x)},${sy(f(x))}`).join(' ');
  const v = f(min);
  const phase = min < 6 ? t(lang, "Ishga kirishish: tinchlantirish, maqsadni aytish, oson boshlash.", 'Врабатывание: настроить, назвать цель, начать с посильного.')
    : v >= 70 ? t(lang, "Barqaror ish qobiliyati: eng qiyin yangi materialni shu yerga qo'ying.", 'Устойчивая работоспособность: самое трудное новое — сюда.')
      : t(lang, "Charchoq belgilari: faoliyatni almashtiring, harakatli pauza, ko'rgazma, o'yin elementi.", 'Признаки утомления: смените вид работы, динамическая пауза, наглядность, игровой элемент.');
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={t(lang, 'Ish qobiliyati egri chizig\'i', 'Кривая работоспособности')}>
        <rect x="1" y="1" width={W - 2} height={H - 2} rx="12" className="fill-surface-2 stroke-line" />
        <line x1={sx(0)} x2={sx(len)} y1={sy(70)} y2={sy(70)} strokeDasharray="4 4" className="stroke-emerald" />
        {pause && <rect x={sx(pauseAt)} y="8" width={sx(2) - sx(0)} height={H - 18} className="fill-gold/40" />}
        <polyline points={pts} fill="none" strokeWidth="3" className="stroke-brand" />
        <circle cx={sx(min)} cy={sy(v)} r="6" className="fill-danger" />
      </svg>
      <div className="mt-2 space-y-2 text-sm text-ink">
        <label className="flex items-center gap-3"><span className="w-28 shrink-0">{t(lang, 'Daqiqa', 'Минута')}: <b>{min}</b></span>
          <input type="range" min={0} max={len} value={Math.min(min, len)} onChange={(e) => setMin(+e.target.value)} className="flex-1 accent-brand" /></label>
        <div className="flex flex-wrap gap-2">
          {[35, 45].map((l) => (
            <button key={l} type="button" onClick={() => { setLen(l); setMin(Math.min(min, l)); }}
              className={`min-h-11 rounded-xl border px-3 text-base ${len === l ? 'border-brand bg-brand-soft text-brand' : 'border-line bg-surface-2 text-ink'}`}>{l} {t(lang, 'daq. dars', 'мин урок')}</button>
          ))}
          <button type="button" onClick={() => setPause(!pause)}
            className={`min-h-11 rounded-xl border px-3 text-base ${pause ? 'border-gold bg-gold/20 text-ink' : 'border-line bg-surface-2 text-ink'}`}>{t(lang, 'Harakatli pauza', 'Динамическая пауза')} {pause ? '✓' : ''}</button>
        </div>
      </div>
      <p className="mt-2 rounded-xl bg-brand-soft p-3 text-sm text-ink">{phase}</p>
      <p className="mt-1 text-xs text-ink-soft">{t(lang, "Sxema: haqiqiy egri chiziq yosh, kun vaqti, dars mazmuni va bolaga qarab farq qiladi.", 'Схема: реальная кривая зависит от возраста, времени дня, содержания урока и ребёнка.')}</p>
    </div>
  );
}

/** Classify feedback phrases: about the person, about the process/strategy, or vague. */
function FeedbackSort({ lang }: { lang: Locale }) {
  const kinds = [
    { id: 'self', uz: 'Shaxsga', ru: 'О личности' },
    { id: 'proc', uz: 'Jarayon/strategiyaga', ru: 'О процессе/стратегии' },
    { id: 'vague', uz: 'Noaniq', ru: 'Неконкретная' },
  ];
  const items: { uz: string; ru: string; k: string; why: [string, string] }[] = [
    { uz: '«Sen juda aqllisan!»', ru: '«Ты такой умный!»', k: 'self', why: ["Qobiliyat maqtovi: keyingi qiyin vazifadan qochishga undashi mumkin.", 'Похвала способностей: может подталкивать избегать трудного.'] },
    { uz: "«Avval shartni chizib olding — shuning uchun to'g'ri yechding.»", ru: '«Ты сначала начертил условие — поэтому решил верно.»', k: 'proc', why: ["Qaysi usul yordam berganini aytadi — bola uni takrorlay oladi.", 'Называет, какой способ помог, — ребёнок может его повторить.'] },
    { uz: '«Yaxshi, lekin yana harakat qil.»', ru: '«Хорошо, но постарайся ещё.»', k: 'vague', why: ["Nimani va qanday yaxshilash kerakligi aytilmagan.", 'Не сказано, что и как улучшить.'] },
    { uz: "«Gapning boshini bosh harf bilan yozding; endi oxiridagi nuqtani tekshir.»", ru: '«Начало предложения — с заглавной; теперь проверь точку в конце.»', k: 'proc', why: ["Mezon + keyingi qadam — samarali qayta aloqa.", 'Критерий + следующий шаг — эффективная обратная связь.'] },
    { uz: "«Sen matematikaga qobiliyatsizsan.»", ru: '«У тебя нет способностей к математике.»', k: 'self', why: ["Shaxsga salbiy yorliq: o'zgarmas qobiliyat haqidagi xabar.", 'Негативный ярлык: сообщение о неизменной неспособности.'] },
  ];
  const [ans, setAns] = useState<Record<number, string>>({});
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="rounded-xl border border-line bg-surface-2 p-3">
          <p className="text-base text-ink">{t(lang, it.uz, it.ru)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {kinds.map((k) => (
              <button key={k.id} type="button" onClick={() => setAns({ ...ans, [i]: k.id })}
                className={`min-h-11 rounded-xl border px-3 text-base ${ans[i] === k.id ? (k.id === it.k ? 'border-emerald bg-emerald/20 text-ink' : 'border-danger bg-danger/10 text-ink') : 'border-line text-ink'}`}>{t(lang, k.uz, k.ru)}</button>
            ))}
          </div>
          {ans[i] && <p className={`mt-2 text-sm ${ans[i] === it.k ? 'text-emerald' : 'text-danger'}`}>{ans[i] === it.k ? '✓ ' : '✗ '}{t(lang, it.why[0], it.why[1])}</p>}
        </li>
      ))}
    </ul>
  );
}

export const W_PSY: Record<string, (p: { lang: Locale }) => ReactNode> = {
  'psy-bullycheck': BullyCheck,
  'psy-sociomatrix': SocioMatrix,
  'psy-workcurve': WorkCurve,
  'psy-feedback': FeedbackSort,
};
