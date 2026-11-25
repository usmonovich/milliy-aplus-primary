// Academy content package: courses, modules, full lessons and their questions.
import type { Course, Locale, Question, RichLesson } from '../../../core/types';
import { COURSES, MODULES } from './courses';
import { MATH_LESSONS } from './math';
import { SHARED_LESSONS } from './shared';
import { RU_LESSONS } from './ru';
import { UZ_LESSONS } from './uz';
import { MATH2_LESSONS } from './math2';
import { PED2_LESSONS } from './ped2';
import { RU2_LESSONS } from './ru2';
import { UZ2_LESSONS } from './uz2';
import { READ2_LESSONS } from './read2';
import { READ3_LESSONS } from './read3';
import { MATH3_LESSONS } from './math3';

export { COURSES, MODULES };

const ALL: RichLesson[] = [...UZ_LESSONS, ...RU_LESSONS, ...SHARED_LESSONS, ...MATH2_LESSONS, ...MATH_LESSONS, ...PED2_LESSONS, ...RU2_LESSONS, ...UZ2_LESSONS, ...READ2_LESSONS,
  ...READ3_LESSONS, ...MATH3_LESSONS];
const STAGES = ['F', 'C', 'C+', 'B', 'B+', 'A', 'A+'];
const modIdx = (l: RichLesson) => MODULES.findIndex((m) => m.id === l.module);
/** Study order: module order, then internal stage, then authoring order. */
export const ACADEMY: RichLesson[] = ALL.map((l, i) => ({ l, i }))
  .sort((a, b) => modIdx(a.l) - modIdx(b.l) || STAGES.indexOf(a.l.stage ?? 'C') - STAGES.indexOf(b.l.stage ?? 'C') || a.i - b.i)
  .map((x) => x.l);

/** All check and inline "try" questions of academy lessons (practice pool). */
export const ACADEMY_QUESTIONS: Question[] = ACADEMY.flatMap((l) => [
  ...l.blocks.flatMap((b) => (b.kind === 'try' ? [b.q] : [])),
  ...l.check,
]);

export const moduleOf = (l: RichLesson) => MODULES.find((m) => m.id === l.module)!;
export const courseOf = (l: RichLesson) => COURSES.find((c) => c.id === moduleOf(l).course)!;
export const academyLesson = (id: string) => ACADEMY.find((l) => l.id === id);

/** Courses available for an exam language (language courses are separate for uz and ru). */
export const coursesFor = (ex: Locale): Course[] => COURSES.filter((c) => (c.lang === 'both' || c.lang === ex) && ACADEMY.some((l) => courseOf(l).id === c.id));
export const lessonsOfCourse = (courseId: string) => ACADEMY.filter((l) => courseOf(l).id === courseId);
