// Future AI module contracts. NOTHING here calls a model: the app currently
// uses verified static explanations and algorithmic personalization.
// A real implementation must run on a server (API keys never in the client)
// and answer only with retrieved, verified context (RAG over the content package).
import type { Locale, Question, Response } from '../types';

export interface RetrievedContext { sourceIds: string[]; passages: string[] }
export interface AIAnswer { text: string; context: RetrievedContext }

export interface AITeacher { ask(question: string, locale: Locale): Promise<AIAnswer> }
export interface AIExplanationService { explain(q: Question, r: Response | undefined, locale: Locale): Promise<AIAnswer> }
export interface AIPedagogicalCaseEvaluator { evaluate(caseText: string, answer: string, locale: Locale): Promise<AIAnswer & { rubric: Record<string, number> }> }
export interface AIStudyPlanner { suggest(stateSummary: unknown, locale: Locale): Promise<AIAnswer> }
export interface AIQuestionGenerator { generate(code: string, locale: Locale): Promise<Question & { status: 'draft' }> }

export interface AIServices {
  teacher?: AITeacher;
  explanation?: AIExplanationService;
  caseEvaluator?: AIPedagogicalCaseEvaluator;
  planner?: AIStudyPlanner;
  generator?: AIQuestionGenerator;
}

/** Current configuration: no AI provider is connected. */
export const AI: AIServices = {};
export const aiEnabled = () => Object.values(AI).some(Boolean);
