// Compact builders for authoring content. A "Tx" is either a single string
// (single-language item, e.g. Uzbek-only mother-tongue content) or [uz, ru].
import type {
  ChoiceQuestion, Cognitive, Difficulty, L, Locale, MatchingQuestion, OpenQuestion,
} from '../../core/types';
import { PRIMARY_SPEC } from './spec';

export type Tx = string | [uz: string, ru: string];
export const tx = (t: Tx): L => (typeof t === 'string' ? { uz: t, ru: t } : { uz: t[0], ru: t[1] });

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

interface Meta {
  lang: Locale | 'both';
  pool: 'practice' | 'exam';
  d?: Difficulty;
  cog?: Cognitive;
  src?: string[];
  lesson?: string;
  pit?: Tx;
}

function common(id: string, code: string, m: Meta) {
  const spec = PRIMARY_SPEC.codes.find((c) => c.code === code);
  if (!spec) throw new Error(`Unknown spec code ${code} in ${id}`);
  return {
    id,
    code,
    section: spec.section,
    lang: m.lang,
    pool: m.pool,
    competency: spec.title,
    cognitive: m.cog ?? (spec.type === 'Y-1' ? 'lower' : 'higher') as Cognitive,
    difficulty: m.d ?? 3,
    sourceIds: m.src ?? ['spec2026'],
    lessonId: m.lesson ?? `L${spec.block}`,
    pitfalls: m.pit ? tx(m.pit) : undefined,
    status: 'auto_checked' as const,
    origin: 'original' as const,
    version: 1,
  };
}

/** Single-choice item (Y-1 or V-Y-1). `ans` is the letter of the correct choice. */
export function mc(id: string, code: string, m: Meta, stem: Tx, choices: Tx[], ans: string, expl: Tx): ChoiceQuestion {
  // Practice items may train a code in a different format than its exam slot
  // (e.g. a choice drill for an O-1 code); the exam slot type is enforced by the audit.
  const specType = PRIMARY_SPEC.codes.find((c) => c.code === code)!.type;
  const type: 'Y-1' | 'V-Y-1' = specType === 'V-Y-1' ? 'V-Y-1' : 'Y-1';
  return {
    ...common(id, code, m),
    type,
    stem: tx(stem),
    choices: choices.map((c, i) => ({ id: LETTERS[i], text: tx(c) })),
    answer: ans,
    explanation: tx(expl),
  };
}

/** Matching item (Y-2): stems with their correct letters, plus choices A..F. */
export function match(id: string, code: string, m: Meta, stem: Tx, stems: [Tx, string][], choices: Tx[], expl: Tx): MatchingQuestion {
  return {
    ...common(id, code, m),
    type: 'Y-2',
    stem: tx(stem),
    stems: stems.map(([t, a], i) => ({ id: String(i + 1), text: tx(t), answer: a })),
    choices: choices.map((c, i) => ({ id: LETTERS[i], text: tx(c) })),
    explanation: tx(expl),
  };
}

/** Open short-answer item (O-1). `accept` lists additional accepted forms. */
export function open(
  id: string, code: string, m: Meta, stem: Tx, answer: Tx, expl: Tx,
  accept: { uz?: string[]; ru?: string[] } = {}, numeric?: number,
): OpenQuestion {
  return {
    ...common(id, code, m),
    type: 'O-1',
    stem: tx(stem),
    answer: tx(answer),
    accept: { uz: accept.uz ?? [], ru: accept.ru ?? [] },
    numeric,
    explanation: tx(expl),
  };
}
