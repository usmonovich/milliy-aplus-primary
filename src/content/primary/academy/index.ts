// Academy content package: courses, modules, full lessons and their questions.
import type { Course, Locale, Question, RichLesson } from '../../../core/types';
import { COURSES, MODULES } from './courses';
import { MATH_LESSONS } from './math';
import { SHARED_LESSONS } from './shared';
import { RU_LESSONS } from './ru';
import { UZ_LESSONS } from './uz';

export { COURSES, MODULES };

export const ACADEMY: RichLesson[] = [...UZ_LESSONS, ...RU_LESSONS, ...SHARED_LESSONS, ...MATH_LESSONS];

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
