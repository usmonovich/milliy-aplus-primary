// Core Engine domain types. Nothing here is specific to primary education:
// a future "Milliy A+ Math" or "Milliy A+ Russian" product reuses these types
// with its own content package.

export type Locale = 'uz' | 'ru';
/** A localized string. Every learner-facing text must exist in all locales. */
export type L = Record<Locale, string>;

/** Official task types of the national certificate test format. */
export type TaskType = 'Y-1' | 'V-Y-1' | 'Y-2' | 'O-1';

export type Cognitive = 'lower' | 'higher';
export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type ReviewStatus = 'draft' | 'auto_checked' | 'needs_review' | 'teacher_reviewed' | 'approved';
export type Origin = 'original' | 'official_sample' | 'generated';

/** One row of the official specification table. */
export interface SpecCode {
  code: string; // e.g. "1.2.3"
  section: number; // 1..3
  block: string; // e.g. "1.2"
  type: TaskType;
  count: number; // tasks taken from this code in one variant
  /** Y-2 codes sharing one matching block (e.g. 2.2.8–2.2.10). */
  groupId?: string;
  title: L;
}

export interface SectionSpec {
  id: number;
  title: L;
  count: number;
  /** True when content differs by exam language (mother tongue section). */
  languageDependent: boolean;
}

export interface ExamSpec {
  id: string;
  version: string;
  publishedAt: string;
  durationMin: number;
  totalTasks: number;
  sections: SectionSpec[];
  codes: SpecCode[];
  /** Official certificate thresholds on the Rasch-based score scale. */
  levels: { level: string; minScore: number; exclusiveMin?: boolean }[];
  sourceUrl: string;
}

export interface Choice {
  id: string; // "A".."F"
  text: L;
  /** Why this option is right or wrong. */
  why?: L;
}

interface QuestionBase {
  id: string;
  /** Exam-language scope. 'both' = shared, professionally localized content. */
  lang: Locale | 'both';
  section: number;
  code: string;
  competency: L;
  cognitive: Cognitive;
  difficulty: Difficulty;
  stem: L;
  explanation: L;
  pitfalls?: L;
  lessonId?: string;
  sourceIds: string[];
  status: ReviewStatus;
  origin: Origin;
  version: number;
  /** 'practice' items never appear in mock exams; 'exam' items never in practice. */
  pool: 'practice' | 'exam';
}

export interface ChoiceQuestion extends QuestionBase {
  type: 'Y-1' | 'V-Y-1';
  choices: Choice[];
  answer: string;
}

export interface MatchingQuestion extends QuestionBase {
  type: 'Y-2';
  /** Each stem is scored dichotomously and counts as one task. */
  stems: { id: string; text: L; answer: string }[];
  choices: Choice[];
}

export interface OpenQuestion extends QuestionBase {
  type: 'O-1';
  answer: L;
  /** Accepted forms per locale, compared after normalization. */
  accept: Record<Locale, string[]>;
  /** For numeric answers: exact value; equivalent notations are accepted. */
  numeric?: number;
}

export type Question = ChoiceQuestion | MatchingQuestion | OpenQuestion;

export type Response =
  | { kind: 'choice'; value: string }
  | { kind: 'match'; value: Record<string, string> }
  | { kind: 'open'; value: string };

export type LevelId = 'F' | 'C' | 'C+' | 'B' | 'B+' | 'A' | 'A+';

export interface LessonBlock {
  kind: 'goal' | 'theory' | 'visual' | 'example' | 'classroom' | 'mistake' | 'tip';
  body: L;
  items?: L[];
  /** Interactive widget id rendered by the UI. */
  widget?: string;
}

export interface Lesson {
  id: string;
  /** Exam-language scope, as for questions. */
  lang: Locale | 'both';
  /** Block id from the spec ("1.2"); used to link questions to lessons. */
  block: string;
  section: number;
  level: LevelId;
  codes: string[];
  title: L;
  minutes: number;
  blocks: LessonBlock[];
  sourceIds: string[];
}

export interface Source {
  id: string;
  title: string;
  author?: string;
  year?: string;
  url?: string;
  kind: 'official' | 'textbook' | 'international' | 'law';
  /** Whether the full text was actually read when building this app. */
  accessed: boolean;
  checkedAt?: string;
}

export interface ScenarioOption {
  id: string;
  text: L;
  /** 0..3: fit to the lesson goal under the stated conditions. */
  fit: 0 | 1 | 2 | 3;
  consequence: L;
  reasoning: L;
  next?: string;
  /** What the class visibly does after this decision (Teacher Simulator). */
  reaction?: L;
  /** Change of class engagement / understanding (−30..30); derived from fit if absent. */
  effects?: { engagement: number; understanding: number };
}

export interface ScenarioStep {
  situation: L;
  dialogue?: { who: L; line: L }[];
  options?: ScenarioOption[];
  summary?: L;
}

export interface Scenario {
  id: string;
  code: string;
  grade: number;
  title: L;
  goal: L;
  constraints: L;
  start: string;
  steps: Record<string, ScenarioStep>;
  principle: L;
  sourceIds: string[];
}

export interface GlossaryTerm {
  id: string;
  cat: string;
  term: L;
  simple: L;
  pro: L;
  example: L;
  mistakes?: L;
  lessonIds?: string[];
  sourceIds: string[];
}
