// Primary content package: the only module the app imports for content.
// A future product (e.g. Milliy A+ Math) provides its own package with the
// same exports and reuses the Core Engine unchanged.
import type { Locale, Question } from '../../core/types';
import { BANK_S1_RU } from './bank_s1_ru';
import { BANK_S1_UZ } from './bank_s1_uz';
import { BANK_S2 } from './bank_s2';
import { BANK_S3 } from './bank_s3';
import { BANK_PRACTICE } from './bank_practice';
import { generatedExamItems } from './generators';

export { PRIMARY_SPEC as SPEC, BLOCKS } from './spec';
export { LESSONS, lessonFor } from './lessons';
export { SCENARIOS } from './scenarios';
export { GLOSSARY, GLOSSARY_CATS } from './glossary';
export { SOURCES, sourceById } from './sources';
export { CERT_FACTS, CERT_INFO_VERSION, REGISTRATION_URL, ALLOWANCE_RATE, ALLOWANCE_LEVELS } from './cert';
export { generatePractice, GENERATED_CODES } from './generators';

/** Number of mock variants the product targets. */
export const TARGET_VARIANTS = 50;

export const HAND_WRITTEN: Question[] = [...BANK_S1_UZ, ...BANK_S1_RU, ...BANK_S2, ...BANK_S3, ...BANK_PRACTICE];

/** Full bank: hand-written items + computed items for computational slots. */
export const BANK: Question[] = [...HAND_WRITTEN, ...generatedExamItems(TARGET_VARIANTS)];

export const practiceFor = (examLang: Locale) =>
  BANK.filter((q) => q.pool === 'practice' && (q.lang === 'both' || q.lang === examLang));

/** Product tiers. Prices live in config; payments are NOT connected. */
export const TIERS = {
  free: { exams: 3, practiceDaily: 40 },
  premium: { prices: [{ months: 1, uzs: 19900 }, { months: 3, uzs: 49900 }] },
  /** During the test phase everything is open; real access control must be server-side. */
  testPhaseAllOpen: true,
};
