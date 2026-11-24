// Brand mark, haptic feedback and celebration overlays.
import { useEffect, useMemo, type ReactNode } from 'react';
import { Star } from 'lucide-react';
import { getState } from '../core/store';

/* ---------------- logo ---------------- */

/** Milliy A+ Primary mark: deep-blue tile, emerald ring (a full cycle of learning), "+" and a gold point (the goal). */
export function Logo({ size = 40, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Milliy A+ Primary" className={animated ? 'logo-anim' : undefined}>
      <defs>
        <linearGradient id="lg-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2747a8" />
          <stop offset="1" stopColor="#15296b" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="15" fill="url(#lg-tile)" />
      <circle cx="32" cy="32" r="17.5" fill="none" stroke="#10b981" strokeWidth="5.5" strokeLinecap="round" className="logo-ring" strokeDasharray="110" />
      <rect x="29.2" y="21.5" width="5.6" height="21" rx="2.8" fill="#fff" />
      <rect x="21.5" y="29.2" width="21" height="5.6" rx="2.8" fill="#fff" />
      <circle cx="46.5" cy="17.5" r="4.6" fill="#eab308" className="logo-dot" />
    </svg>
  );
}

export function Wordmark({ className = '' }: { className?: string }) {
  return <span className={`font-bold tracking-tight ${className}`}>Milliy <span className="text-emerald">A+</span> <span className="font-semibold text-ink-soft">Primary</span></span>;
}

/* ---------------- haptics ---------------- */

let switchEl: HTMLLabelElement | null = null;
/**
 * Tactile feedback on supported devices. Android/Chrome: Vibration API.
 * iOS Safari has no Vibration API; iOS 18+ gives a system tick when a native
 * switch control toggles, so a hidden one is toggled. Elsewhere this is a no-op.
 */
export function haptic(kind: 'tap' | 'success' | 'error' = 'tap') {
  if (!getState().settings.haptics) return;
  try {
    if (typeof navigator.vibrate === 'function') {
      navigator.vibrate(kind === 'success' ? [12, 60, 18] : kind === 'error' ? [30, 40, 30] : 10);
      return;
    }
    if (!/iP(hone|ad|od)/.test(navigator.userAgent)) return;
    if (!switchEl) {
      switchEl = document.createElement('label');
      switchEl.setAttribute('aria-hidden', 'true');
      switchEl.style.cssText = 'position:fixed;left:-100px;top:0;opacity:0;pointer-events:none';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.setAttribute('switch', '');
      input.tabIndex = -1;
      switchEl.appendChild(input);
      document.body.appendChild(switchEl);
    }
    switchEl.click();
    if (kind !== 'tap') setTimeout(() => switchEl?.click(), 90);
  } catch { /* unsupported */ }
}

/* ---------------- celebration ---------------- */

const COLORS = ['#10b981', '#eab308', '#2747a8', '#81a0f5', '#f97316'];

function Confetti() {
  const bits = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    left: Math.random() * 100, delay: Math.random() * 0.35, dur: 1.1 + Math.random() * 0.9,
    rot: Math.random() * 360, color: COLORS[i % COLORS.length], w: 6 + Math.random() * 6,
  })), []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bits.map((b, i) => (
        <span key={i} className="confetti" style={{ left: `${b.left}%`, width: b.w, height: b.w * 0.45, background: b.color, animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s`, transform: `rotate(${b.rot}deg)` }} />
      ))}
    </div>
  );
}

export function Stars({ n, size = 28, animate = false }: { n: number; size?: number; animate?: boolean }) {
  return (
    <span className="inline-flex items-end gap-1" role="img" aria-label={`${n}/3`}>
      {[1, 2, 3].map((i) => (
        <Star key={i} size={i === 2 ? size * 1.25 : size} className={`${i <= n ? 'fill-gold text-gold' : 'text-line'} ${animate && i <= n ? 'star-pop' : ''}`}
          style={animate ? { animationDelay: `${0.15 + i * 0.18}s` } : undefined} />
      ))}
    </span>
  );
}

/** Full-screen celebration card: stars, title, details and actions. */
export function Celebrate({ stars, title, children, actions }: { stars?: number; title: string; children?: ReactNode; actions: ReactNode }) {
  useEffect(() => { haptic(stars === 0 ? 'error' : 'success'); }, [stars]);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/45 px-4 fade-in" role="dialog" aria-modal="true" aria-label={title}>
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-surface p-6 text-center shadow-2xl pop">
        {stars !== 0 && <Confetti />}
        {stars !== undefined && <div className="mb-3 flex justify-center"><Stars n={stars} size={34} animate /></div>}
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-2 text-ink-soft">{children}</div>
        <div className="mt-5 grid gap-2">{actions}</div>
      </div>
    </div>
  );
}
