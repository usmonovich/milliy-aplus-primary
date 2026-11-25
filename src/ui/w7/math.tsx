// Batch-7 interactive lesson widgets for this course. Each widget: ({ lang }) => JSX, mobile-first (375px),
// uses only React and tailwind tokens (bg-surface-2, border-line, text-ink, text-ink-soft, brand, emerald, gold, danger).
// Do not import from ../kit (avoids a cycle). Register widgets in the exported record; ids must be unique (math-*).
import type { ReactNode } from 'react';
import type { Locale } from '../../core/types';

export const W_MATH: Record<string, (p: { lang: Locale }) => ReactNode> = {};
