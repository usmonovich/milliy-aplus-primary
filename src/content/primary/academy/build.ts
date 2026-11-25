// Builders for academy lessons. A Tx is a single string (single-language
// lesson) or [uz, ru]. Check questions are practice-pool items with rich feedback.
import type { ChoiceQuestion, Locale, OpenQuestion, RichBlock, RichLesson } from '../../../core/types';
import { tx, type Tx } from '../build';
import { PRIMARY_SPEC } from '../spec';

type Simple = 'intro' | 'explain' | 'definition' | 'rule' | 'derivation' | 'exception' | 'mistake' | 'apply' | 'method' | 'summary';
const simple = (kind: Simple) => (body: Tx | null, items?: Tx[], title?: Tx): RichBlock =>
  ({ kind, body: body === null ? undefined : tx(body), items: items?.map(tx), title: title ? tx(title) : undefined });

/** A step is text, or [text, '$tex$'] for a displayed formula under the text. */
type Step = Tx | { s: Tx; tex: string };

export const B = {
  intro: simple('intro'), explain: simple('explain'), definition: simple('definition'), rule: simple('rule'),
  why: simple('derivation'), exception: simple('exception'), mistake: simple('mistake'), apply: simple('apply'),
  method: simple('method'), summary: simple('summary'),
  formula: (tex: string, legend?: Tx[], body?: Tx): RichBlock => ({ kind: 'formula', tex, legend: legend?.map(tx), body: body ? tx(body) : undefined }),
  example: (task: Tx, steps: Step[], answer?: Tx, alt?: Tx, title?: Tx): RichBlock => ({
    kind: 'example', task: tx(task), title: title ? tx(title) : undefined, answer: answer ? tx(answer) : undefined, alt: alt ? tx(alt) : undefined,
    steps: steps.map((s) => (typeof s === 'object' && !Array.isArray(s) ? { text: tx(s.s), tex: s.tex } : { text: tx(s as Tx) })),
  }),
  table: (head: Tx[], rows: Tx[][], title?: Tx): RichBlock => ({ kind: 'table', head: head.map(tx), rows: rows.map((r) => r.map(tx)), title: title ? tx(title) : undefined }),
  widget: (widget: string, body?: Tx): RichBlock => ({ kind: 'interactive', widget, body: body ? tx(body) : undefined }),
  try: (q: ChoiceQuestion | OpenQuestion): RichBlock => ({ kind: 'try', q }),
};

interface QMeta { lang: Locale | 'both'; lesson: string; d?: 1 | 2 | 3 | 4 | 5; rule?: Tx; steps?: Tx[]; pit?: Tx; src?: string[] }

function base(id: string, code: string, m: QMeta) {
  const spec = PRIMARY_SPEC.codes.find((c) => c.code === code);
  if (!spec) throw new Error(`Unknown spec code ${code} in ${id}`);
  return {
    id, code, section: spec.section, lang: m.lang, pool: 'practice' as const, competency: spec.title,
    cognitive: 'higher' as const, difficulty: m.d ?? 2, sourceIds: m.src ?? ['spec2026'], academy: m.lesson,
    rule: m.rule ? tx(m.rule) : undefined, steps: m.steps?.map(tx), pitfalls: m.pit ? tx(m.pit) : undefined,
    status: 'auto_checked' as const, origin: 'original' as const, version: 1,
  };
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/** Choice question; each option is [text, whyWrong?] — the correct one needs no "why". */
export function cq(id: string, code: string, m: QMeta, stem: Tx, options: [Tx, Tx?][], ans: string, expl: Tx): ChoiceQuestion {
  const specType = PRIMARY_SPEC.codes.find((c) => c.code === code)!.type;
  return {
    ...base(id, code, m), type: specType === 'V-Y-1' ? 'V-Y-1' : 'Y-1', stem: tx(stem),
    choices: options.map(([text, why], i) => ({ id: LETTERS[i], text: tx(text), why: why ? tx(why) : undefined })), answer: ans, explanation: tx(expl),
  };
}

/** Short open answer (numbers accept equivalent notations). */
export function oq(id: string, code: string, m: QMeta, stem: Tx, answer: Tx, expl: Tx, accept: { uz?: string[]; ru?: string[] } = {}, numeric?: number): OpenQuestion {
  return { ...base(id, code, m), type: 'O-1', stem: tx(stem), answer: tx(answer), accept: { uz: accept.uz ?? [], ru: accept.ru ?? [] }, numeric, explanation: tx(expl) };
}

export function lesson(l: Omit<RichLesson, 'title'> & { title: Tx }): RichLesson {
  return { ...l, title: tx(l.title) };
}
