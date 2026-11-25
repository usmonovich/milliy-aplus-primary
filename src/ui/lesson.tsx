// Academy lesson renderer: typed teaching blocks, KaTeX formulas, inline tasks, mastery check.
import { Fragment, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle, BookOpen, Calculator, CheckCircle2, ClipboardCheck, GraduationCap, HelpCircle, Lightbulb, ListChecks, MousePointerClick,
  Presentation, Repeat, Sigma, Sparkles, Table2, Target, Wrench,
} from 'lucide-react';
import type { L, Question, Response, RichBlock, RichLesson } from '../core/types';
import { setState, today, useStore } from '../core/store';
import { gradeQuestion, taskCount } from '../core/engine';
import { Button, Card, Widget, useLang } from './kit';
import { Feedback, PracticeSession, QuestionView } from './practice';
import { Celebrate } from './fx';
import { checkAchievements, gradeAndRecord, isAnswered, starsFor } from './logic';

/* ---------------- formulas ---------------- */

let katexCss = false;
/** Renders TeX with KaTeX, loaded on demand so the app start stays fast. */
export function Tex({ tex, block }: { tex: string; block?: boolean }) {
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    let live = true;
    if (!katexCss) { katexCss = true; void import('katex/dist/katex.min.css'); }
    void import('katex').then((k) => { if (live) setHtml(k.default.renderToString(tex, { displayMode: !!block, throwOnError: false })); });
    return () => { live = false; };
  }, [tex, block]);
  if (!html) return <code className={block ? 'block text-center' : ''}>{tex}</code>;
  return block ? <div className="overflow-x-auto py-1" dangerouslySetInnerHTML={{ __html: html }} /> : <span dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Text with inline $math$ and **bold**. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\$[^$]+\$|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => p.length > 2 && p.startsWith('$') && p.endsWith('$') ? <Tex key={i} tex={p.slice(1, -1)} />
        : p.startsWith('**') && p.endsWith('**') ? <b key={i}>{p.slice(2, -2)}</b> : <Fragment key={i}>{p}</Fragment>)}
    </>
  );
}

/* ---------------- block styles ---------------- */

type K = RichBlock['kind'];
const META: Record<K, { icon: typeof BookOpen; key: string; box: string; label: string }> = {
  intro: { icon: Sparkles, key: 'bIntro', box: 'bg-surface border-line', label: 'text-brand' },
  explain: { icon: BookOpen, key: 'bExplain', box: 'bg-surface border-line', label: 'text-brand' },
  definition: { icon: Target, key: 'bDefinition', box: 'bg-brand-soft border-brand/30', label: 'text-brand' },
  rule: { icon: CheckCircle2, key: 'bRule', box: 'bg-emerald-soft border-emerald/40', label: 'text-emerald' },
  formula: { icon: Sigma, key: 'bFormula', box: 'bg-surface border-brand/30', label: 'text-brand' },
  derivation: { icon: HelpCircle, key: 'bWhy', box: 'bg-surface border-line', label: 'text-brand' },
  example: { icon: Calculator, key: 'bExample', box: 'bg-surface border-gold/40', label: 'text-gold' },
  table: { icon: Table2, key: 'bTable', box: 'bg-surface border-line', label: 'text-brand' },
  interactive: { icon: MousePointerClick, key: 'bInteractive', box: 'bg-surface border-emerald/40', label: 'text-emerald' },
  exception: { icon: Lightbulb, key: 'bException', box: 'bg-gold/10 border-gold/40', label: 'text-gold' },
  mistake: { icon: AlertTriangle, key: 'bMistake', box: 'bg-danger-soft border-danger/30', label: 'text-danger' },
  apply: { icon: Wrench, key: 'bApply', box: 'bg-surface border-line', label: 'text-brand' },
  method: { icon: Presentation, key: 'bMethod', box: 'bg-emerald-soft border-emerald/40', label: 'text-emerald' },
  try: { icon: ClipboardCheck, key: 'bTry', box: 'bg-surface border-brand/40', label: 'text-brand' },
  summary: { icon: ListChecks, key: 'bSummary', box: 'bg-brand-soft border-brand/30', label: 'text-brand' },
};

function TryIt({ q }: { q: Question }) {
  const { t, ex } = useLang();
  const [r, setR] = useState<Response | undefined>();
  const [shown, setShown] = useState(false);
  const ok = shown && gradeQuestion(q, r, ex) === taskCount(q);
  return (
    <div>
      <QuestionView q={q} response={r} onChange={(x) => !shown && setR(x)} reveal={shown} shuffleSeed={7} />
      {!shown ? <Button className="mt-3" full disabled={!isAnswered(q, r)} onClick={() => { setShown(true); gradeAndRecord(q, r, ex, 0); }}>{t('check')}</Button>
        : <><Feedback q={q} response={r} />{!ok && <Button className="mt-2" full variant="secondary" icon={<Repeat size={18} />} onClick={() => { setR(undefined); setShown(false); }}>{t('retry')}</Button>}</>}
    </div>
  );
}

export function BlockView({ b }: { b: RichBlock }) {
  const { t, c, ex } = useLang();
  const m = META[b.kind];
  const Icon = m.icon;
  const title = 'title' in b && b.title ? c(b.title) : t(m.key as 'bIntro');
  return (
    <section className={`rounded-2xl border p-4 ${m.box}`}>
      <div className={`mb-2 flex items-center gap-2 text-sm font-semibold ${m.label}`}><Icon size={18} />{title}</div>
      {b.kind === 'formula' ? (
        <>
          <div className="text-xl"><Tex tex={b.tex} block /></div>
          {b.legend && <ul className="mt-2 space-y-1 text-sm">{b.legend.map((x, i) => <li key={i}><Rich text={c(x)} /></li>)}</ul>}
          {b.body && <p className="mt-2 leading-relaxed"><Rich text={c(b.body)} /></p>}
        </>
      ) : b.kind === 'example' ? (
        <>
          <p className="font-medium leading-relaxed"><Rich text={c(b.task)} /></p>
          <ol className="mt-3 space-y-2">
            {b.steps.map((s, i) => (
              <li key={i} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20 text-xs font-bold text-gold">{i + 1}</span>
                <div className="min-w-0 flex-1 leading-relaxed"><Rich text={c(s.text)} />{s.tex && <Tex tex={s.tex} block />}</div></li>
            ))}
          </ol>
          {b.answer && <p className="mt-3 rounded-xl bg-emerald-soft px-3 py-2 font-semibold"><Rich text={c(b.answer)} /></p>}
          {b.alt && <p className="mt-2 text-sm text-ink-soft"><b>{t('altWay')}:</b> <Rich text={c(b.alt)} /></p>}
        </>
      ) : b.kind === 'table' ? (
        <div className="-mx-1 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr>{b.head.map((h, i) => <th key={i} className="border-b border-line px-2 py-1.5 text-left font-semibold">{c(h)}</th>)}</tr></thead>
            <tbody>{b.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="border-b border-line/60 px-2 py-1.5 align-top"><Rich text={c(cell)} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      ) : b.kind === 'interactive' ? (
        <>{b.body && <p className="leading-relaxed"><Rich text={c(b.body)} /></p>}<Widget id={b.widget} lang={ex} /></>
      ) : b.kind === 'try' ? (
        <TryIt q={b.q} />
      ) : (
        <>
          {b.body && <p className="leading-relaxed"><Rich text={c(b.body)} /></p>}
          {b.items && <ul className="mt-2 space-y-2">{b.items.map((it, j) => <li key={j} className="flex gap-2 leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" /><span><Rich text={c(it)} /></span></li>)}</ul>}
        </>
      )}
    </section>
  );
}

/* ---------------- lesson screen ---------------- */

export function LessonBody({ lesson, moduleTitle, onBack }: { lesson: RichLesson; moduleTitle: L; onBack: () => void }) {
  const { t, c } = useLang();
  const progress = useStore((s) => s.academy[lesson.id]);
  const [mode, setMode] = useState<'read' | 'check'>('read');
  const [round, setRound] = useState(0);
  const [result, setResult] = useState<{ pct: number; stars: number } | null>(null);
  const items = useMemo(() => [...lesson.check].sort(() => Math.random() - 0.5), [lesson, round]);
  const knowledge = lesson.blocks.filter((b) => b.kind !== 'method');
  const method = lesson.blocks.filter((b) => b.kind === 'method');

  if (mode === 'check') {
    return (
      <PracticeSession key={round} items={items} mode="learn" title={c(lesson.title)} onDone={(sc) => {
        const pct = sc.total ? sc.correct / sc.total : 0;
        const st = starsFor(pct);
        setState((s) => ({ ...s, academy: { ...s.academy, [lesson.id]: { best: Math.max(s.academy[lesson.id]?.best ?? 0, Math.round(pct * 100)), done: pct >= 0.8 ? (s.academy[lesson.id]?.done ?? today()) : s.academy[lesson.id]?.done } }, xp: s.xp + 20 + st * 10 }), true);
        checkAchievements();
        setResult({ pct: Math.round(pct * 100), stars: st });
        setMode('read');
        window.scrollTo(0, 0);
      }} />
    );
  }

  const passed = (result?.pct ?? 0) >= 80;
  const start = () => { setRound((r) => r + 1); setMode('check'); window.scrollTo(0, 0); };
  return (
    <div>
      {result && (
        <Celebrate stars={passed ? result.stars : 0} title={passed ? t('lessonComplete') : t('notYet')}
          actions={passed
            ? <Button full onClick={() => { setResult(null); onBack(); }}>{t('continue')}</Button>
            : <><Button full onClick={() => { setResult(null); setTimeout(() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>{t('reviewMain')}</Button>
              <Button full variant="secondary" onClick={() => { setResult(null); start(); }}>{t('retry')}</Button></>}>
          <p className="text-3xl font-bold text-ink">{result.pct}%</p>
          {!passed && <p className="mt-1 text-sm">{t('notYetHint')}</p>}
        </Celebrate>
      )}
      <div className="mb-4">
        <p className="text-sm text-ink-soft">{c(moduleTitle)}</p>
        <h1 className="mt-1 text-2xl font-bold leading-tight">{c(lesson.title)}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-lg bg-brand-soft px-2 py-1 font-semibold text-brand">{t(`lv_${lesson.level}`)}</span>
          <span className="text-ink-soft">{lesson.minutes} {t('minutes')}</span>
          {progress?.done && <span className="flex items-center gap-1 text-emerald"><CheckCircle2 size={14} />{t('mastered')}</span>}
        </div>
      </div>
      <div className="space-y-3">
        {knowledge.map((b, i) => <div key={i} id={b.kind === 'summary' ? 'summary' : undefined}><BlockView b={b} /></div>)}
      </div>
      {method.length > 0 && (
        <>
          <h2 className="mb-3 mt-8 flex items-center gap-2 text-lg font-bold"><GraduationCap className="text-emerald" />{t('teachIt')}</h2>
          <div className="space-y-3">{method.map((b, i) => <BlockView key={i} b={b} />)}</div>
        </>
      )}
      <Card className="mt-6 text-center">
        <p className="font-semibold">{t('checkYourself')}</p>
        <p className="mt-1 text-sm text-ink-soft">{t('checkHint', { n: lesson.check.length })}{progress ? ` · ${t('best')}: ${progress.best}%` : ''}</p>
      </Card>
      <div className="action-bar"><Button full onClick={start}>{t('checkYourself')}</Button></div>
    </div>
  );
}
