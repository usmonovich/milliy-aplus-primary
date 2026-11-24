// Shared design-system components, hooks and interactive lesson widgets.
import { useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { t as tr, type Key } from '../core/i18n';
import { useStore } from '../core/store';
import type { L, Locale } from '../core/types';

/* ---------------- language ---------------- */

export function useLang() {
  const ui = useStore((s) => s.settings.uiLang);
  const ex = useStore((s) => s.settings.examLang);
  return {
    ui, ex,
    t: (k: Key, v?: Record<string, string | number>) => tr(ui, k, v),
    /** UI-language text (chrome, glossary, cert info). */
    u: (l: L) => l[ui],
    /** Preparation-language text (questions, lessons, scenarios). */
    c: (l: L) => l[ex],
  };
}

/* ---------------- hash router ---------------- */

export function navigate(path: string) {
  if (location.hash !== '#' + path) location.hash = path;
  window.scrollTo(0, 0);
}
const parse = () => (location.hash.replace(/^#\/?/, '') || 'home').split('/').map(decodeURIComponent);
export function useRoute(): string[] {
  const [r, setR] = useState(parse);
  useEffect(() => {
    const f = () => setR(parse());
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return r;
}

/* ---------------- layout ---------------- */

export function Screen({ title, back, right, children, wide }: { title?: string; back?: string | true; right?: ReactNode; children: ReactNode; wide?: boolean }) {
  const { t } = useLang();
  return (
    <div className={`mx-auto w-full ${wide ? 'max-w-4xl' : 'max-w-2xl'} px-4 pb-nav fade-in`}>
      {(title || back) ? (
        <header className="sticky top-0 z-20 -mx-4 mb-3 bg-surface-2/90 px-4 pt-safe backdrop-blur">
          <div className="flex min-h-[3.5rem] items-center gap-2">
            {back && (
              <button aria-label={t('back')} onClick={() => (back === true ? history.back() : navigate(back))}
                className="-ml-2 grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-surface"><ArrowLeft size={22} /></button>
            )}
            <h1 className="min-w-0 flex-1 truncate text-lg font-semibold">{title}</h1>
            {right}
          </div>
        </header>
      ) : <div className="pt-safe" />}
      {children}
    </div>
  );
}

export function Card({ children, className = '', onClick, tone }: { children: ReactNode; className?: string; onClick?: () => void; tone?: 'brand' | 'emerald' | 'gold' | 'danger' }) {
  const toneCls = tone === 'brand' ? 'bg-brand text-white border-transparent dark:text-surface-2' : tone === 'emerald' ? 'bg-emerald-soft border-emerald/30' : tone === 'gold' ? 'border-gold/40 bg-gold/10' : tone === 'danger' ? 'bg-danger-soft border-danger/30' : 'bg-surface border-line';
  const cls = `rounded-2xl border p-4 ${toneCls} ${className}`;
  return onClick ? (
    <button onClick={onClick} className={`${cls} block w-full text-left transition hover:shadow-md active:scale-[.99]`}>{children}</button>
  ) : <div className={cls}>{children}</div>;
}

type BtnVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'emerald';
export function Button({ children, onClick, variant = 'primary', disabled, full, icon, className = '' }: { children: ReactNode; onClick?: () => void; variant?: BtnVariant; disabled?: boolean; full?: boolean; icon?: ReactNode; className?: string }) {
  const v = {
    primary: 'bg-brand text-white hover:brightness-110 dark:text-surface-2',
    emerald: 'bg-emerald text-white hover:brightness-110 dark:text-surface-2',
    secondary: 'bg-surface border border-line hover:bg-brand-soft',
    ghost: 'hover:bg-brand-soft text-brand',
    danger: 'bg-danger text-white',
  }[variant];
  return (
    <button type="button" onClick={onClick} disabled={disabled}
      className={`inline-flex min-h-[3.1rem] items-center justify-center gap-2 rounded-xl px-5 font-semibold transition active:scale-[.98] disabled:opacity-40 ${v} ${full ? 'w-full' : ''} ${className}`}>
      {icon}{children}
    </button>
  );
}

export function Chip({ children, active, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      className={`min-h-[2.6rem] shrink-0 rounded-full border px-4 text-sm font-medium transition ${active ? 'border-brand bg-brand text-white dark:text-surface-2' : 'border-line bg-surface hover:bg-brand-soft'}`}>
      {children}
    </button>
  );
}

export function Bar({ value, tone = 'brand', label }: { value: number; tone?: 'brand' | 'emerald' | 'gold' | 'danger'; label?: string }) {
  const c = { brand: 'bg-brand', emerald: 'bg-emerald', gold: 'bg-gold', danger: 'bg-danger' }[tone];
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className={`h-full rounded-full ${c} transition-all`} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function Ring({ value, size = 92, label, sub }: { value: number; size?: number; label: string; sub?: string }) {
  const r = (size - 10) / 2, c = 2 * Math.PI * r;
  return (
    <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }} role="img" aria-label={`${label} ${value}%`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="9" className="stroke-line" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="9" strokeLinecap="round" className="stroke-emerald transition-all"
          strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(100, value) / 100)} />
      </svg>
      <div className="absolute text-center leading-tight">
        <div className="text-xl font-bold">{value}%</div>
        {sub && <div className="text-[11px] text-ink-soft">{sub}</div>}
      </div>
    </div>
  );
}

export function Stat({ label, value, icon }: { label: string; value: ReactNode; icon?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-3">
      <div className="flex items-center gap-1.5 text-xs text-ink-soft">{icon}{label}</div>
      <div className="mt-1 text-xl font-bold">{value}</div>
    </div>
  );
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return <div className="mb-2 mt-6 flex items-center justify-between gap-2"><h2 className="text-base font-semibold">{children}</h2>{action}</div>;
}

export function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const f = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', f);
    return () => window.removeEventListener('keydown', f);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 md:items-center" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="max-h-[88dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-surface p-4 pb-safe md:rounded-3xl fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button type="button" onClick={onClose} aria-label="close" className="grid h-11 w-11 place-items-center rounded-full hover:bg-surface-2"><X size={22} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export const sectionBg = (s: number) => (s === 1 ? 'bg-brand-soft text-brand' : s === 2 ? 'bg-emerald-soft text-emerald' : 'bg-gold/15 text-gold');

/* ---------------- interactive widgets ---------------- */

function SoundModel({ lang }: { lang: Locale }) {
  const demo = lang === 'uz'
    ? { letters: ['s', 'h', 'a', 'm', 'o', 'l'], sounds: ['sh', 'a', 'm', 'o', 'l'] }
    : { letters: ['ю', 'л', 'а'], sounds: ['й', 'у', 'л', 'а'] };
  const [showSounds, setShow] = useState(false);
  const items = showSounds ? demo.sounds : demo.letters;
  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {items.map((x, i) => (
          <span key={i + x + String(showSounds)} className={`pop grid h-12 min-w-[3rem] place-items-center px-2 text-lg font-bold ${showSounds ? 'rounded-full bg-emerald-soft text-emerald' : 'rounded-xl bg-brand-soft text-brand'}`}>{showSounds ? `[${x}]` : x}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Chip active={!showSounds} onClick={() => setShow(false)}>{lang === 'uz' ? `Harflar: ${demo.letters.length}` : `Буквы: ${demo.letters.length}`}</Chip>
        <Chip active={showSounds} onClick={() => setShow(true)}>{lang === 'uz' ? `Tovushlar: ${demo.sounds.length}` : `Звуки: ${demo.sounds.length}`}</Chip>
      </div>
    </div>
  );
}

function PlaceValue({ lang }: { lang: Locale }) {
  const [n, setN] = useState('30405');
  const digits = n.replace(/\D/g, '').slice(0, 7);
  const names = lang === 'uz' ? ['birlar', "o'nlar", 'yuzlar', 'minglar', "o'n minglar", 'yuz minglar', 'millionlar'] : ['единицы', 'десятки', 'сотни', 'тысячи', 'дес. тыс.', 'сот. тыс.', 'миллионы'];
  const arr = digits.split('').reverse();
  return (
    <div>
      <input inputMode="numeric" value={n} onChange={(e) => setN(e.target.value)} aria-label={lang === 'uz' ? 'Son' : 'Число'}
        className="mb-3 h-12 w-full rounded-xl border border-line bg-surface-2 px-3 text-lg font-semibold tracking-wider" />
      <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${Math.max(1, arr.length)}, minmax(0, 1fr))` }}>
        {[...arr].reverse().map((d, i) => {
          const pos = arr.length - 1 - i;
          return (
            <div key={i} className={`rounded-xl p-1.5 text-center ${pos >= 3 ? 'bg-emerald-soft' : 'bg-brand-soft'}`}>
              <div className={`text-2xl font-bold ${d === '0' ? 'text-gold' : ''}`}>{d}</div>
              <div className="break-words text-[10px] leading-tight text-ink-soft">{names[pos]}</div>
            </div>
          );
        })}
      </div>
      {digits && <p className="mt-2 break-words text-sm text-ink-soft">{arr.map((d, i) => (d !== '0' ? `${d}${'0'.repeat(i)}` : null)).filter(Boolean).reverse().join(' + ')}</p>}
    </div>
  );
}

function Fractions({ lang }: { lang: Locale }) {
  const [a, setA] = useState(3);
  const [b, setB] = useState(5);
  const row = (v: number, set: (n: number) => void) => (
    <div>
      <div className="mb-1 flex items-center justify-between gap-3 text-sm"><span className="w-10 font-semibold">1/{v}</span>
        <input type="range" min={1} max={12} value={v} onChange={(e) => set(+e.target.value)} className="flex-1 accent-emerald" aria-label="1/n" /></div>
      <div className="flex h-10 overflow-hidden rounded-lg border border-line">
        {Array.from({ length: v }, (_, i) => <div key={i} className={`flex-1 border-r border-surface last:border-0 ${i === 0 ? 'bg-emerald' : 'bg-surface-2'}`} />)}
      </div>
    </div>
  );
  return (
    <div className="space-y-3">
      {row(a, setA)}{row(b, setB)}
      <p className="text-base font-semibold">1/{a} {a === b ? '=' : a < b ? '>' : '<'} 1/{b}</p>
      <p className="text-sm text-ink-soft">{lang === 'uz' ? "Butun bir xil: bo'laklar ko'p bo'lsa, har biri kichik." : 'Целое одинаковое: чем больше частей, тем меньше каждая.'}</p>
    </div>
  );
}

function Venn({ lang }: { lang: Locale }) {
  const [v, setV] = useState({ total: 25, a: 15, b: 12, both: 5 });
  const onlyA = v.a - v.both, onlyB = v.b - v.both, none = v.total - (v.a + v.b - v.both);
  const bad = onlyA < 0 || onlyB < 0 || none < 0;
  const field = (k: keyof typeof v, label: string) => (
    <label className="text-xs text-ink-soft">{label}
      <input inputMode="numeric" value={v[k]} onChange={(e) => setV({ ...v, [k]: Math.max(0, +e.target.value.replace(/\D/g, '') || 0) })}
        className="mt-1 h-11 w-full rounded-xl border border-line bg-surface-2 px-2 text-base font-semibold text-ink" /></label>
  );
  return (
    <div>
      <div className="mb-3 grid grid-cols-4 gap-2">
        {field('total', lang === 'uz' ? 'Jami' : 'Всего')}{field('a', 'A')}{field('b', 'B')}{field('both', 'A∩B')}
      </div>
      <svg viewBox="0 0 300 160" className="w-full" role="img" aria-label="Venn">
        <rect x="2" y="2" width="296" height="156" rx="14" className="fill-surface-2 stroke-line" />
        <circle cx="118" cy="80" r="58" className="fill-brand/20 stroke-brand" />
        <circle cx="182" cy="80" r="58" className="fill-emerald/20 stroke-emerald" />
        <text x="88" y="86" className="fill-ink text-[18px] font-bold" textAnchor="middle">{bad ? '?' : onlyA}</text>
        <text x="150" y="86" className="fill-ink text-[18px] font-bold" textAnchor="middle">{bad ? '?' : v.both}</text>
        <text x="212" y="86" className="fill-ink text-[18px] font-bold" textAnchor="middle">{bad ? '?' : onlyB}</text>
        <text x="270" y="148" className="fill-ink-soft text-[13px]" textAnchor="middle">{bad ? '?' : none}</text>
      </svg>
      <p className={`text-sm ${bad ? 'text-danger' : 'text-ink-soft'}`}>{bad ? (lang === 'uz' ? 'Qiymatlar mos emas.' : 'Значения несовместимы.') : `${v.total} − (${v.a} + ${v.b} − ${v.both}) = ${none}`}</p>
    </div>
  );
}

function CubeNet({ lang }: { lang: Locale }) {
  const cells = [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]];
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 200 150" className="w-1/2" role="img" aria-label="net">
        {cells.map(([x, y], i) => <rect key={i} x={x * 48 + 4} y={y * 48 + 4} width="46" height="46" rx="4" className="fill-emerald/20 stroke-emerald" />)}
      </svg>
      <ul className="text-sm">
        <li>{lang === 'uz' ? 'Yoqlar' : 'Грани'}: <b>6</b></li>
        <li>{lang === 'uz' ? 'Qirralar' : 'Рёбра'}: <b>12</b></li>
        <li>{lang === 'uz' ? 'Uchlar' : 'Вершины'}: <b>8</b></li>
        <li className="mt-1 text-ink-soft">S = 6a², V = a³</li>
      </ul>
    </div>
  );
}

function Pirls({ lang }: { lang: Locale }) {
  const steps = lang === 'uz'
    ? ["Ma'lumot topish", 'Oddiy xulosa', 'Talqin va integratsiya', 'Baholash']
    : ['Поиск информации', 'Прямой вывод', 'Интерпретация и интеграция', 'Оценка'];
  return (
    <ol className="grid grid-cols-2 gap-2">
      {steps.map((s, i) => <li key={s} className="rounded-xl bg-brand-soft p-3"><div className="text-xs text-ink-soft">{i + 1}</div><div className="font-semibold text-brand">{s}</div></li>)}
    </ol>
  );
}

const WIDGETS: Record<string, (p: { lang: Locale }) => ReactNode> = { soundmodel: SoundModel, placevalue: PlaceValue, fractions: Fractions, venn: Venn, cubenet: CubeNet, pirls: Pirls };
export function Widget({ id, lang }: { id: string; lang: Locale }) {
  const W = WIDGETS[id];
  return W ? <div className="mt-3 rounded-xl border border-line bg-surface p-3"><W lang={lang} /></div> : null;
}
