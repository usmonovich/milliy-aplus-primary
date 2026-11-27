// Batch-7 interactive lesson widgets for this course. Each widget: ({ lang }) => JSX, mobile-first (375px),
// uses only React and tailwind tokens (bg-surface-2, border-line, text-ink, text-ink-soft, brand, emerald, gold, danger).
// Do not import from ../kit (avoids a cycle). Register widgets in the exported record; ids must be unique (read-*).
import { useState, type ReactNode } from 'react';
import type { Locale } from '../../core/types';
import { GENRE_PCT, GENRE_PUPILS, ICON_KEY, MONTH_BOOKS } from '../../content/primary/academy/read4';

type W = (p: { lang: Locale }) => ReactNode;
const t = (lang: Locale, uz: string, ru: string) => (lang === 'uz' ? uz : ru);
const fmt = (n: number) => (Number.isFinite(n) ? String(Math.round(n * 10) / 10).replace('.', ',') : '—');

/** Reading-speed calculator: words, seconds, errors → words per minute, correct words per minute, accuracy. */
const ReadSpeed: W = ({ lang }) => {
  const [v, setV] = useState({ n: 96, s: 80, x: 3 });
  const field = (k: keyof typeof v, label: string) => (
    <label className="text-xs text-ink-soft">{label}
      <input inputMode="numeric" value={v[k]} aria-label={label}
        onChange={(e) => setV({ ...v, [k]: Math.max(0, +e.target.value.replace(/\D/g, '') || 0) })}
        className="mt-1 h-11 w-full rounded-xl border border-line bg-surface-2 px-2 text-base font-semibold text-ink" />
    </label>
  );
  const ok = v.n > 0 && v.s > 0 && v.x <= v.n;
  const speed = (v.n / v.s) * 60, good = ((v.n - v.x) / v.s) * 60, acc = ((v.n - v.x) / v.n) * 100;
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {field('n', t(lang, "So'zlar (N)", 'Слова (N)'))}{field('s', t(lang, 'Soniya (t)', 'Секунды (t)'))}{field('x', t(lang, 'Xatolar (X)', 'Ошибки (X)'))}
      </div>
      {ok ? (
        <div className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
          <div className="rounded-xl bg-brand-soft p-2"><div className="text-ink-soft">{t(lang, "Tezlik, so'z/daqiqa", 'Скорость, слов/мин')}</div><b className="text-lg">{fmt(speed)}</b></div>
          <div className="rounded-xl bg-emerald-soft p-2"><div className="text-ink-soft">{t(lang, "To'g'ri so'z/daqiqa", 'Правильных слов/мин')}</div><b className="text-lg">{fmt(good)}</b></div>
          <div className="rounded-xl bg-surface-2 p-2"><div className="text-ink-soft">{t(lang, "To'g'rilik", 'Правильность')}</div><b className="text-lg">{fmt(acc)}%</b></div>
        </div>
      ) : <p className="mt-3 rounded-xl bg-danger-soft p-2 text-sm text-danger">{t(lang, "So'zlar va vaqt 0 dan katta, xatolar so'zlardan ko'p bo'lmasin.", 'Слова и время больше 0, ошибок не больше, чем слов.')}</p>}
      <p className="mt-2 text-sm text-ink-soft">{t(lang, 'Eslatma: tezlik faqat mazmun savoli bilan birga baholanadi.', 'Помните: скорость оценивают только вместе с вопросом на понимание.')}</p>
    </div>
  );
};

/** Plot "mountain" of the story about the bridge: tap a point to see the element and the sentence. */
const PLOT: { uz: [string, string]; ru: [string, string]; x: number; y: number }[] = [
  { uz: ['Ekspozitsiya', "(1) qishloq, ariq, eski ko'prik"], ru: ['Экспозиция', '(1) село, арык, старый мостик'], x: 20, y: 150 },
  { uz: ['Tugun', "(2) suv ko'prikni oqizib ketdi"], ru: ['Завязка', '(2) вода унесла мостик'], x: 80, y: 125 },
  { uz: ['Voqealar rivoji', "(3)–(5) aylanma yo'l, qaror, taxta yetmadi"], ru: ['Развитие действия', '(3)–(5) обход, решение, доски не хватило'], x: 145, y: 80 },
  { uz: ['Avj nuqtasi', "(6) Anvar o'z taxtasini olib keldi"], ru: ['Кульминация', '(6) Анвар принёс свою доску'], x: 210, y: 25 },
  { uz: ['Yechim', "(7)–(8) ko'prik tayyor, vaqtida yetib borishdi"], ru: ['Развязка', '(7)–(8) мостик готов, пришли вовремя'], x: 290, y: 135 },
];
const ReadPlot: W = ({ lang }) => {
  const [i, setI] = useState(3);
  const path = PLOT.map((p, k) => `${k ? 'L' : 'M'}${p.x} ${p.y}`).join(' ');
  return (
    <div>
      <svg viewBox="0 0 310 170" className="w-full" role="img" aria-label={t(lang, 'Syujet tog\'i', 'Горка сюжета')}>
        <path d={path} fill="none" strokeWidth="3" className="stroke-brand" />
        {PLOT.map((p, k) => (
          <g key={k} onClick={() => setI(k)} className="cursor-pointer">
            <circle cx={p.x} cy={p.y} r={k === i ? 11 : 8} className={k === i ? 'fill-emerald' : 'fill-surface-2 stroke-brand'} strokeWidth="2" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" className="fill-ink text-[10px] font-bold">{k + 1}</text>
          </g>
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap gap-2">
        {PLOT.map((p, k) => (
          <button key={k} type="button" onClick={() => setI(k)}
            className={`min-h-[44px] rounded-xl border px-3 text-base ${k === i ? 'border-emerald bg-emerald-soft text-ink' : 'border-line bg-surface-2 text-ink-soft'}`}>{k + 1}. {p[lang][0]}</button>
        ))}
      </div>
      <p className="mt-2 rounded-xl bg-brand-soft p-2 text-sm"><b>{PLOT[i][lang][0]}:</b> {PLOT[i][lang][1]}</p>
    </div>
  );
};

/** Class reading data: bar chart ↔ pictogram for books per month, and a pie chart of favourite genres. */
const MONTHS = { uz: ['Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'], ru: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] };
const GENRES = { uz: ['Ertaklar', 'Sarguzasht', "She'rlar", 'Ilmiy-ommabop'], ru: ['Сказки', 'Приключения', 'Стихи', 'Научно-популярные'] };
const PIE_FILL = ['fill-brand', 'fill-emerald', 'fill-gold', 'fill-danger'];
const ReadChart: W = ({ lang }) => {
  const [view, setView] = useState<'bar' | 'pict' | 'pie'>('bar');
  const [sel, setSel] = useState(2);
  const max = 35, H = 150, bw = 46;
  const tab = (k: typeof view, label: string) => (
    <button type="button" onClick={() => setView(k)} className={`min-h-[44px] flex-1 rounded-xl border px-2 text-base ${view === k ? 'border-brand bg-brand-soft text-ink' : 'border-line bg-surface-2 text-ink-soft'}`}>{label}</button>
  );
  let acc = 0;
  const arcs = GENRE_PCT.map((p, k) => {
    const a0 = (acc / 100) * 2 * Math.PI, a1 = ((acc + p) / 100) * 2 * Math.PI; acc += p;
    const r = 70, cx = 80, cy = 80;
    const x0 = cx + r * Math.sin(a0), y0 = cy - r * Math.cos(a0), x1 = cx + r * Math.sin(a1), y1 = cy - r * Math.cos(a1);
    return <path key={k} d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 ${p > 50 ? 1 : 0} 1 ${x1} ${y1} Z`} className={`${PIE_FILL[k]} stroke-surface`} strokeWidth="2" onClick={() => setSel(k)} />;
  });
  return (
    <div>
      <div className="mb-3 flex gap-2">{tab('bar', t(lang, 'Ustunli', 'Столбчатая'))}{tab('pict', t(lang, 'Piktogramma', 'Пиктограмма'))}{tab('pie', t(lang, 'Doiraviy', 'Круговая'))}</div>
      {view === 'bar' && (
        <svg viewBox="0 0 300 190" className="w-full" role="img" aria-label={t(lang, "Oylar bo'yicha o'qilgan kitoblar", 'Прочитанные книги по месяцам')}>
          {[0, 10, 20, 30].map((g) => <g key={g}><line x1="30" x2="295" y1={160 - (g / max) * H} y2={160 - (g / max) * H} className="stroke-line" /><text x="24" y={164 - (g / max) * H} textAnchor="end" className="fill-ink-soft text-[10px]">{g}</text></g>)}
          {MONTH_BOOKS.map((b, k) => (
            <g key={k}>
              <rect x={45 + k * 63} y={160 - (b / max) * H} width={bw} height={(b / max) * H} rx="4" className="fill-brand/80" />
              <text x={45 + k * 63 + bw / 2} y={154 - (b / max) * H} textAnchor="middle" className="fill-ink text-[11px] font-bold">{b}</text>
              <text x={45 + k * 63 + bw / 2} y="178" textAnchor="middle" className="fill-ink-soft text-[10px]">{MONTHS[lang][k]}</text>
            </g>
          ))}
        </svg>
      )}
      {view === 'pict' && (
        <div className="space-y-2 text-sm">
          {MONTH_BOOKS.map((b, k) => (
            <div key={k} className="flex items-center gap-2">
              <span className="w-20 shrink-0 text-ink-soft">{MONTHS[lang][k]}</span>
              <span className="flex flex-wrap gap-1" aria-label={`${b / ICON_KEY}`}>{Array.from({ length: b / ICON_KEY }, (_, j) => <span key={j} className="inline-block h-5 w-4 rounded-sm bg-emerald" />)}</span>
            </div>
          ))}
          <p className="rounded-xl bg-surface-2 p-2 text-ink-soft"><span className="mr-1 inline-block h-4 w-3 rounded-sm bg-emerald align-middle" /> = {ICON_KEY} {t(lang, 'ta kitob (shartli belgi)', 'книги (условный знак)')}</p>
        </div>
      )}
      {view === 'pie' && (
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <svg viewBox="0 0 160 160" className="w-40" role="img" aria-label={t(lang, 'Sevimli janrlar', 'Любимые жанры')}>{arcs}</svg>
          <ul className="w-full space-y-1 text-sm">
            {GENRE_PCT.map((p, k) => (
              <li key={k}><button type="button" onClick={() => setSel(k)} className={`min-h-[40px] w-full rounded-xl px-2 text-left text-base ${sel === k ? 'bg-brand-soft' : ''}`}>
                <span className={`mr-2 inline-block h-3 w-3 rounded-full ${PIE_FILL[k].replace('fill-', 'bg-')}`} />{GENRES[lang][k]} — {p}%</button></li>
            ))}
          </ul>
        </div>
      )}
      {view === 'pie' && <p className="mt-2 text-sm text-ink-soft">{GENRES[lang][sel]}: {GENRE_PCT[sel]}% · {GENRE_PUPILS} = {(GENRE_PCT[sel] * GENRE_PUPILS) / 100} {t(lang, "o'quvchi", 'учеников')}; {t(lang, 'burchak', 'угол')} {GENRE_PCT[sel] * 3.6}°</p>}
      {view !== 'pie' && <p className="mt-2 text-sm text-ink-soft">{t(lang, "Bir xil ma'lumot — ikki ko'rinish: ustun balandligi ham, belgilar soni ham kitoblar sonini bildiradi.", 'Одни и те же данные — два вида: и высота столбика, и число значков показывают число книг.')}</p>}
    </div>
  );
};

/** Source-reliability checklist for two texts on the same topic. */
const CHECKS = {
  uz: ['Muallif yoki tashkilot nomi aytilganmi?', 'Maqsad — xabar berish (sotish yoki ishontirish emas)?', 'Da\'volar dalil yoki manba bilan berilganmi?', "«Hamma», «doim», «3 kunda» kabi mutlaq va'dalar yo'qmi?", "Boshqa ishonchli manba bilan mos keladimi?"],
  ru: ['Назван автор или организация?', 'Цель — сообщить (а не продать или убедить)?', 'Утверждения подкреплены доказательствами или источником?', 'Нет абсолютных обещаний вроде «все», «всегда», «за 3 дня»?', 'Совпадает ли с другим надёжным источником?'],
};
const ANSWERS = { ad: [false, false, false, false, false], nurse: [true, true, true, true, true] };
const ReadSource: W = ({ lang }) => {
  const [txt, setTxt] = useState<'ad' | 'nurse'>('ad');
  const [marks, setMarks] = useState<Record<string, boolean[]>>({ ad: [false, false, false, false, false], nurse: [false, false, false, false, false] });
  const m = marks[txt];
  const score = m.filter(Boolean).length;
  const right = m.every((x, k) => x === ANSWERS[txt][k]);
  return (
    <div>
      <div className="mb-3 flex gap-2">
        {(['ad', 'nurse'] as const).map((k) => (
          <button key={k} type="button" onClick={() => setTxt(k)} className={`min-h-[44px] flex-1 rounded-xl border px-2 text-base ${txt === k ? 'border-brand bg-brand-soft text-ink' : 'border-line bg-surface-2 text-ink-soft'}`}>
            {k === 'ad' ? t(lang, 'Reklama', 'Реклама') : t(lang, 'Hamshira maslahati', 'Совет медсестры')}</button>
        ))}
      </div>
      <ul className="space-y-2">
        {CHECKS[lang].map((q, k) => (
          <li key={k}><label className="flex min-h-[44px] items-center gap-3 rounded-xl border border-line bg-surface-2 px-3 text-base">
            <input type="checkbox" className="h-5 w-5 accent-emerald" checked={m[k]} onChange={() => setMarks({ ...marks, [txt]: m.map((x, j) => (j === k ? !x : x)) })} />
            <span>{q}</span></label></li>
        ))}
      </ul>
      <p className={`mt-3 rounded-xl p-2 text-sm ${score >= 4 ? 'bg-emerald-soft' : score >= 2 ? 'bg-surface-2' : 'bg-danger-soft'}`}>
        {t(lang, 'Belgilangan', 'Отмечено')}: <b>{score}/5</b> — {score >= 4 ? t(lang, 'ishonchli manbaga o\'xshaydi', 'похоже на надёжный источник') : score >= 2 ? t(lang, 'ehtiyot bo\'ling, tekshiring', 'осторожно, проверьте') : t(lang, 'ishonchsiz manba belgilari', 'признаки ненадёжного источника')}.
        {' '}{right ? t(lang, "Baholashingiz matnga mos.", 'Ваша оценка соответствует тексту.') : t(lang, "Matnni qayta o'qib, har bir savolni dalil bilan tekshiring.", 'Перечитайте текст и проверьте каждый пункт по доказательству.')}
      </p>
    </div>
  );
};

/** Sort reading-lesson activities into before / during / after reading. */
const ACTS: { uz: string; ru: string; p: 0 | 1 | 2 }[] = [
  { uz: "Sarlavha va rasmga qarab bashorat qilish", ru: 'Прогноз по заголовку и картинке', p: 0 },
  { uz: "Notanish so'zlarni oldindan tushuntirish", ru: 'Заранее объяснить незнакомые слова', p: 0 },
  { uz: "Klaster: mavzu bo'yicha bilganlarni yozish", ru: 'Кластер: записать, что знаем о теме', p: 0 },
  { uz: "To'xtab o'qish: «Endi nima bo'ladi?»", ru: 'Чтение с остановками: «Что будет дальше?»', p: 1 },
  { uz: "INSERT belgilari bilan hoshiyaga belgi qo'yish", ru: 'Пометки на полях знаками INSERT', p: 1 },
  { uz: "Venn diagrammasida ikki qahramonni solishtirish", ru: 'Сравнить двух героев на диаграмме Венна', p: 2 },
  { uz: "Reja tuzib, qayta hikoya qilish", ru: 'Составить план и пересказать', p: 2 },
  { uz: "Bashoratni matn bilan tekshirish (oxirida)", ru: 'Проверить прогноз по тексту (в конце)', p: 2 },
];
const ReadPhases: W = ({ lang }) => {
  const [ans, setAns] = useState<(number | null)[]>(ACTS.map(() => null));
  const names = [t(lang, 'Oldin', 'До'), t(lang, 'Jarayonda', 'Во время'), t(lang, 'Keyin', 'После')];
  const done = ans.filter((a, k) => a === ACTS[k].p).length;
  return (
    <div>
      <ul className="space-y-2">
        {ACTS.map((a, k) => (
          <li key={k} className="rounded-xl border border-line bg-surface-2 p-2">
            <div className="mb-1 text-base text-ink">{a[lang]}</div>
            <div className="flex gap-1">
              {names.map((n, j) => {
                const chosen = ans[k] === j, good = chosen && j === a.p, bad = chosen && j !== a.p;
                return <button key={j} type="button" onClick={() => setAns(ans.map((x, i) => (i === k ? j : x)))}
                  className={`min-h-[40px] flex-1 rounded-lg border px-1 text-base ${good ? 'border-emerald bg-emerald-soft' : bad ? 'border-danger bg-danger-soft' : 'border-line bg-surface'}`}>{n}</button>;
              })}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-sm text-ink-soft">{t(lang, "To'g'ri", 'Верно')}: <b>{done}/{ACTS.length}</b></p>
    </div>
  );
};

export const W_READ: Record<string, (p: { lang: Locale }) => ReactNode> = {
  'read-speed': ReadSpeed, 'read-plot': ReadPlot, 'read-chart': ReadChart, 'read-source': ReadSource, 'read-phases': ReadPhases,
};
