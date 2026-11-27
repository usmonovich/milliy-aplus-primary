// Batch-7 interactive lesson widgets for this course. Each widget: ({ lang }) => JSX, mobile-first (375px),
// uses only React and tailwind tokens (bg-surface-2, border-line, text-ink, text-ink-soft, brand, emerald, gold, danger).
// Do not import from ../kit (avoids a cycle). Register widgets in the exported record; ids must be unique (math-*).
import { useState, type ReactNode } from 'react';
import type { Locale } from '../../core/types';

function Slider({ label, v, set, min, max, step = 1 }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step?: number }) {
  return (
    <label className="flex items-center gap-3 text-base text-ink">
      <span className="w-28 shrink-0">{label}: <b>{v}</b></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} className="h-8 flex-1 accent-emerald" aria-label={label} />
    </label>
  );
}

/** Angle 0–360°: drag the slider, see the angle, its arc and its type. */
function AngleType({ lang }: { lang: Locale }) {
  const [a, setA] = useState(60);
  const uz = lang === 'uz';
  const kind =
    a === 0 ? (uz ? "Nol burchak (tomonlar ustma-ust)" : 'Нулевой угол (стороны совпали)')
      : a < 90 ? (uz ? "O'tkir burchak (90° dan kichik)" : 'Острый угол (меньше 90°)')
        : a === 90 ? (uz ? "To'g'ri burchak (90°)" : 'Прямой угол (90°)')
          : a < 180 ? (uz ? "O'tmas burchak (90° dan katta, 180° dan kichik)" : 'Тупой угол (больше 90°, меньше 180°)')
            : a === 180 ? (uz ? 'Yoyiq burchak (180°)' : 'Развёрнутый угол (180°)')
              : a < 360 ? (uz ? "180° dan katta burchak (boshlang'ich sinfda o'rganilmaydi)" : 'Угол больше 180° (в начальной школе не изучается)')
                : (uz ? "To'la burchak (360°, to'liq aylanish)" : 'Полный угол (360°, полный оборот)');
  const cx = 150, cy = 110, R = 90, r = 34;
  const rad = (a * Math.PI) / 180;
  const ex = cx + R * Math.cos(rad), ey = cy - R * Math.sin(rad);
  const ax = cx + r * Math.cos(rad), ay = cy - r * Math.sin(rad);
  const large = a > 180 ? 1 : 0;
  const arc = a >= 360 ? `M ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy}` : `M ${cx + r} ${cy} A ${r} ${r} 0 ${large} 0 ${ax} ${ay}`;
  return (
    <div>
      <svg viewBox="0 0 300 220" className="w-full" role="img" aria-label={`${a}°`}>
        <rect x="2" y="2" width="296" height="216" rx="14" className="fill-surface-2 stroke-line" />
        {a > 0 && <path d={arc} fill="none" strokeWidth="3" className="stroke-gold" />}
        {a === 90 && <path d={`M ${cx + 16} ${cy} L ${cx + 16} ${cy - 16} L ${cx} ${cy - 16}`} fill="none" strokeWidth="2" className="stroke-ink" />}
        <line x1={cx} y1={cy} x2={cx + R} y2={cy} strokeWidth="4" strokeLinecap="round" className="stroke-brand" />
        <line x1={cx} y1={cy} x2={ex} y2={ey} strokeWidth="4" strokeLinecap="round" className="stroke-emerald" />
        <circle cx={cx} cy={cy} r="5" className="fill-ink" />
        <text x={cx - 10} y={cy + 22} className="fill-ink text-[15px] font-bold" textAnchor="middle">O</text>
        <text x={150} y={206} className="fill-ink text-[18px] font-bold" textAnchor="middle">{a}°</text>
      </svg>
      <Slider label={uz ? 'Burchak' : 'Угол'} v={a} set={setA} min={0} max={360} step={5} />
      <p className="mt-2 rounded-xl bg-brand-soft p-2 text-base font-semibold text-brand">{kind}</p>
      <p className="mt-1 text-sm text-ink-soft">{uz ? `Qo'shni burchak (yoyiq burchakkacha): 180° − ${Math.min(a, 180)}° = ${180 - Math.min(a, 180)}°` : `Дополнение до развёрнутого угла: 180° − ${Math.min(a, 180)}° = ${180 - Math.min(a, 180)}°`}</p>
    </div>
  );
}

/** Tree of possibilities: 2 or 3 choices in a row, the number of branches multiplies. */
function ChoiceTree({ lang }: { lang: Locale }) {
  const uz = lang === 'uz';
  const [n1, setN1] = useState(3);
  const [n2, setN2] = useState(2);
  const [n3, setN3] = useState(2);
  const [three, setThree] = useState(false);
  const levels = three ? [n1, n2, n3] : [n1, n2];
  const total = levels.reduce((p, x) => p * x, 1);
  const W = 320, H = three ? 230 : 170;
  const draw = total <= 36;
  // nodes per level: level k has prod(levels[0..k]) nodes
  const nodes: { x: number; y: number; parent?: number }[][] = [[{ x: W / 2, y: 18 }]];
  if (draw) {
    levels.forEach((n, k) => {
      const prev = nodes[k];
      const count = prev.length * n;
      const row: { x: number; y: number; parent?: number }[] = [];
      for (let i = 0; i < count; i++) row.push({ x: ((i + 0.5) * (W - 10)) / count + 5, y: 18 + (k + 1) * (three ? 65 : 70), parent: Math.floor(i / n) });
      nodes.push(row);
    });
  }
  const names = uz ? ["1-tanlov (ko'ylak)", '2-tanlov (shim)', '3-tanlov (bosh kiyim)'] : ['1-й выбор (рубашка)', '2-й выбор (брюки)', '3-й выбор (головной убор)'];
  return (
    <div>
      {draw ? (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={String(total)}>
          {nodes.slice(1).map((row, k) => row.map((p, i) => <line key={`${k}-${i}`} x1={nodes[k][p.parent!].x} y1={nodes[k][p.parent!].y} x2={p.x} y2={p.y} strokeWidth="1.5" className="stroke-line" />))}
          {nodes.map((row, k) => row.map((p, i) => <circle key={`c${k}-${i}`} cx={p.x} cy={p.y} r={k === 0 ? 7 : k === levels.length ? 4 : 6} className={k === 0 ? 'fill-ink' : k === levels.length ? 'fill-emerald' : 'fill-brand'} />))}
        </svg>
      ) : (
        <p className="rounded-xl bg-surface-2 p-3 text-base text-ink-soft">{uz ? "Shoxlar juda ko'p — daraxtni chizish o'rniga ko'paytiramiz." : 'Ветвей слишком много — вместо рисования дерева умножаем.'}</p>
      )}
      <div className="mt-2 space-y-1">
        <Slider label={names[0]} v={n1} set={setN1} min={1} max={4} />
        <Slider label={names[1]} v={n2} set={setN2} min={1} max={4} />
        {three && <Slider label={names[2]} v={n3} set={setN3} min={1} max={4} />}
      </div>
      <label className="mt-2 flex items-center gap-2 text-base text-ink">
        <input type="checkbox" checked={three} onChange={(e) => setThree(e.target.checked)} className="h-5 w-5 accent-emerald" />
        {uz ? 'Uchinchi tanlovni qo\'shish' : 'Добавить третий выбор'}
      </label>
      <p className="mt-2 rounded-xl bg-emerald-soft p-2 text-base font-semibold text-ink">{levels.join(' · ')} = {total} {uz ? 'ta imkoniyat (yashil uchlar)' : 'вариантов (зелёные концы ветвей)'}</p>
    </div>
  );
}

/** Rectangular box: change a, b, c and see volume (unit cubes), surface area and total edge length. */
function BoxVolume({ lang }: { lang: Locale }) {
  const uz = lang === 'uz';
  const [a, setA] = useState(4);
  const [b, setB] = useState(3);
  const [c, setC] = useState(2);
  const u = 22, dx = 0.5 * u, dy = 0.4 * u;
  const ox = 30, oy = 40 + b * dy + c * u;
  // front face a × c, depth b drawn obliquely
  const P = (x: number, y: number, z: number) => [ox + x * u + y * dx, oy - z * u - y * dy] as const;
  const poly = (pts: (readonly [number, number])[]) => pts.map((p) => p.join(',')).join(' ');
  const H = 40 + 6 * dy + 6 * u + 20;
  return (
    <div>
      <svg viewBox={`0 0 ${ox + 6 * u + 6 * dx + 20} ${H}`} className="w-full" role="img" aria-label={`${a}×${b}×${c}`}>
        <polygon points={poly([P(0, 0, c), P(a, 0, c), P(a, b, c), P(0, b, c)])} className="fill-emerald/30 stroke-emerald" />
        <polygon points={poly([P(a, 0, 0), P(a, b, 0), P(a, b, c), P(a, 0, c)])} className="fill-brand/20 stroke-brand" />
        <polygon points={poly([P(0, 0, 0), P(a, 0, 0), P(a, 0, c), P(0, 0, c)])} className="fill-gold/20 stroke-gold" />
        {Array.from({ length: a - 1 }, (_, i) => <line key={`x${i}`} x1={P(i + 1, 0, 0)[0]} y1={P(i + 1, 0, 0)[1]} x2={P(i + 1, 0, c)[0]} y2={P(i + 1, 0, c)[1]} className="stroke-gold" strokeWidth="0.8" />)}
        {Array.from({ length: c - 1 }, (_, i) => <line key={`z${i}`} x1={P(0, 0, i + 1)[0]} y1={P(0, 0, i + 1)[1]} x2={P(a, 0, i + 1)[0]} y2={P(a, 0, i + 1)[1]} className="stroke-gold" strokeWidth="0.8" />)}
      </svg>
      <div className="space-y-1">
        <Slider label={uz ? "Bo'yi a" : 'Длина a'} v={a} set={setA} min={1} max={6} />
        <Slider label={uz ? 'Eni b' : 'Ширина b'} v={b} set={setB} min={1} max={6} />
        <Slider label={uz ? 'Balandligi c' : 'Высота c'} v={c} set={setC} min={1} max={6} />
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2 text-base sm:grid-cols-3">
        <div className="rounded-xl bg-emerald-soft p-2"><div className="text-sm text-ink-soft">{uz ? 'Hajm (birlik kubchalar)' : 'Объём (единичные кубики)'}</div><b>V = {a}·{b}·{c} = {a * b * c}</b></div>
        <div className="rounded-xl bg-brand-soft p-2"><div className="text-sm text-ink-soft">{uz ? 'Sirt yuzasi (6 ta yoq)' : 'Площадь поверхности (6 граней)'}</div><b>S = 2·({a * b}+{b * c}+{a * c}) = {2 * (a * b + b * c + a * c)}</b></div>
        <div className="rounded-xl bg-surface-2 p-2"><div className="text-sm text-ink-soft">{uz ? "12 ta qirra uzunligi yig'indisi" : 'Сумма длин 12 рёбер'}</div><b>4·({a}+{b}+{c}) = {4 * (a + b + c)}</b></div>
      </div>
      <p className="mt-2 text-sm text-ink-soft">{uz ? `Pastki qatlamda ${a}·${b} = ${a * b} ta kubcha, qatlamlar soni ${c} — shuning uchun hajm ko'paytirish bilan topiladi.` : `В нижнем слое ${a}·${b} = ${a * b} кубиков, слоёв ${c} — поэтому объём находят умножением.`}</p>
    </div>
  );
}

export const W_MATH: Record<string, (p: { lang: Locale }) => ReactNode> = {
  'math-angle': AngleType,
  'math-tree': ChoiceTree,
  'math-box': BoxVolume,
};
