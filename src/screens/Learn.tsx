// Learning: roadmap (Foundation → A+), lessons, practice, diagnostic, Teacher Simulator.
import { useMemo, useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronRight, Compass, GraduationCap, Lightbulb, Lock, School, Sparkles, Stethoscope, Target, Users } from 'lucide-react';
import type { LessonBlock, ScenarioOption } from '../core/types';
import { markDaily, setState, today, useStore } from '../core/store';
import { BLOCKS, SCENARIOS, SPEC, lessonFor, sourceById } from '../content/primary';
import { Bar, Button, Card, Chip, Screen, SectionTitle, Widget, navigate, sectionBg, useLang } from '../ui/kit';
import { LEVELS, checkAchievements, diagnosticSet, lessonsFor, pickPractice } from '../ui/logic';
import { PracticeSession } from '../ui/practice';

/* ---------------- roadmap ---------------- */

export function LearnHome() {
  const { t, c, u, ex } = useLang();
  const done = useStore((s) => s.lessonsDone);
  const diag = useStore((s) => s.profile.diagnosticDone);
  const simBest = useStore((s) => s.simBest);
  const [sec, setSec] = useState(0);
  const lessons = lessonsFor(ex).filter((l) => !sec || l.section === sec);
  const total = lessonsFor(ex).length, doneN = lessonsFor(ex).filter((l) => done[l.id]).length;

  return (
    <Screen title={t('navLearn')}>
      <Card className="mb-3">
        <div className="mb-2 flex items-center justify-between text-sm"><span className="font-semibold">{t('roadmap')}</span><span className="text-ink-soft">{doneN}/{total}</span></div>
        <Bar value={(doneN / total) * 100} tone="emerald" />
      </Card>

      <div className="grid grid-cols-2 gap-2">
        <Card onClick={() => navigate('diagnostic')}>
          <Stethoscope className="mb-2 text-brand" /><div className="font-semibold leading-tight">{t('diagnostic')}</div>
          <div className="text-xs text-ink-soft">{diag ? t('done') : '15'}</div>
        </Card>
        <Card onClick={() => navigate('sim')}>
          <School className="mb-2 text-emerald" /><div className="font-semibold leading-tight">{t('simulator')}</div>
          <div className="text-xs text-ink-soft">{Object.keys(simBest).length}/{SCENARIOS.length}</div>
        </Card>
      </div>

      <div className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4">
        <Chip active={sec === 0} onClick={() => setSec(0)}>{t('all')}</Chip>
        {SPEC.sections.map((s) => <Chip key={s.id} active={sec === s.id} onClick={() => setSec(s.id)}>{s.id}. {u(s.title)}</Chip>)}
      </div>
      <p className="mt-3 text-xs text-ink-soft">{t('levelDesc')}</p>

      {LEVELS.map((lv) => {
        const ls = lessons.filter((l) => l.level === lv);
        if (lv === 'A+') {
          return (
            <div key={lv}>
              <SectionTitle><span className="mr-2 rounded-lg bg-gold/20 px-2 py-0.5 text-gold">A+</span>{t('fullExams')}</SectionTitle>
              <Card onClick={() => navigate('exams')}><div className="flex items-center gap-3"><Target className="text-gold" /><span className="flex-1 font-medium">{t('fullExams')} · {t('mistakes')}</span><ChevronRight /></div></Card>
            </div>
          );
        }
        if (!ls.length) return null;
        return (
          <div key={lv}>
            <SectionTitle><span className="mr-2 rounded-lg bg-brand-soft px-2 py-0.5 text-brand">{lv === 'F' ? 'Foundation' : lv}</span></SectionTitle>
            <div className="grid gap-2">
              {ls.map((l) => (
                <Card key={l.id} onClick={() => navigate(`lesson/${l.block}`)}>
                  <div className="flex items-center gap-3">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold ${done[l.id] ? 'bg-emerald text-white' : sectionBg(l.section)}`}>{done[l.id] ? <CheckCircle2 size={22} /> : l.block}</span>
                    <div className="min-w-0 flex-1"><div className="font-semibold leading-tight">{c(l.title)}</div><div className="text-xs text-ink-soft">{l.minutes} {t('minutes')} · {l.codes.length} {t('competency').toLowerCase()}</div></div>
                    <ChevronRight className="shrink-0 text-ink-soft" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </Screen>
  );
}

/* ---------------- lesson ---------------- */

const BLOCK_META: Record<LessonBlock['kind'], { icon: typeof BookOpen; key: 'blockGoal' | 'blockTheory' | 'blockVisual' | 'blockExample' | 'blockClassroom' | 'blockMistake' | 'blockTip'; cls: string }> = {
  goal: { icon: Target, key: 'blockGoal', cls: 'text-brand' },
  theory: { icon: BookOpen, key: 'blockTheory', cls: 'text-brand' },
  visual: { icon: Sparkles, key: 'blockVisual', cls: 'text-emerald' },
  example: { icon: Lightbulb, key: 'blockExample', cls: 'text-gold' },
  classroom: { icon: Users, key: 'blockClassroom', cls: 'text-emerald' },
  mistake: { icon: AlertTriangle, key: 'blockMistake', cls: 'text-danger' },
  tip: { icon: Compass, key: 'blockTip', cls: 'text-brand' },
};

export function LessonScreen({ block }: { block: string }) {
  const { t, c, ex } = useLang();
  const lesson = lessonFor(block, ex);
  const done = useStore((s) => (lesson ? s.lessonsDone[lesson.id] : undefined));
  const [mode, setMode] = useState<'read' | 'practice' | 'testout'>('read');
  const items = useMemo(() => (mode === 'read' ? [] : pickPractice(ex, { block, n: mode === 'testout' ? 8 : 6 })), [mode, block, ex]);
  if (!lesson) return <Screen title="—" back="learn"><Card>—</Card></Screen>;

  const complete = (sc: { correct: number; total: number }) => {
    const pct = sc.total ? sc.correct / sc.total : 0;
    if ((mode === 'practice' && pct >= 0.6) || (mode === 'testout' && pct >= 0.8)) {
      setState((s) => ({ ...s, lessonsDone: { ...s.lessonsDone, [lesson.id]: today() }, xp: s.xp + 30 }));
      markDaily('section' + lesson.section);
      checkAchievements();
    }
    setMode('read');
  };

  if (mode !== 'read') {
    return (
      <Screen title={c(lesson.title)} back={true}>
        {mode === 'testout' && <p className="mb-3 text-sm text-ink-soft">{t('testOutHint')}</p>}
        <PracticeSession items={items} title={c(lesson.title)} mode={mode === 'testout' ? 'test' : 'learn'} block={block} onDone={complete} />
      </Screen>
    );
  }

  return (
    <Screen title={`${t('lesson')} ${lesson.block}`} back="learn">
      <div className="mb-4">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
          <span className={`rounded-lg px-2 py-1 font-bold ${sectionBg(lesson.section)}`}>{lesson.level === 'F' ? 'Foundation' : lesson.level}</span>
          <span className="text-ink-soft">{lesson.minutes} {t('minutes')}</span>
          {done && <span className="flex items-center gap-1 text-emerald"><CheckCircle2 size={14} />{t('lessonDone')}</span>}
        </div>
        <h1 className="text-2xl font-bold leading-tight">{c(lesson.title)}</h1>
        <p className="mt-1 text-sm text-ink-soft">{lesson.codes.join(' · ')}</p>
      </div>

      <div className="space-y-3">
        {lesson.blocks.map((b, i) => {
          const m = BLOCK_META[b.kind];
          const Icon = m.icon;
          return (
            <Card key={i} tone={b.kind === 'goal' ? 'emerald' : b.kind === 'mistake' ? 'danger' : undefined}>
              <div className={`mb-2 flex items-center gap-2 text-sm font-semibold ${m.cls}`}><Icon size={18} />{t(m.key)}</div>
              <p className="leading-relaxed">{c(b.body)}</p>
              {b.items && <ul className="mt-2 space-y-2">{b.items.map((it, j) => <li key={j} className="flex gap-2 leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" /><span>{c(it)}</span></li>)}</ul>}
              {b.widget && <Widget id={b.widget} lang={ex} />}
            </Card>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-ink-soft">{t('sources')}: {lesson.sourceIds.map((id) => sourceById(id)?.title).filter(Boolean).join('; ')}</p>

      <div className="action-bar grid grid-cols-2 gap-2">
        <Button variant="secondary" onClick={() => setMode('testout')}>{t('testOut')}</Button>
        <Button onClick={() => setMode('practice')}>{t('startPractice')}</Button>
      </div>
    </Screen>
  );
}

/* ---------------- free practice routes ---------------- */

export function PracticeRoute({ args }: { args: string[] }) {
  const { t, u, ex } = useLang();
  const [kind, arg] = args;
  const items = useMemo(() => {
    if (kind === 'section') return pickPractice(ex, { section: Number(arg), n: 8 });
    if (kind === 'block') return pickPractice(ex, { block: arg, n: 8 });
    return pickPractice(ex, { n: 5 });
  }, [kind, arg, ex]);
  const title = kind === 'section' ? u(SPEC.sections[Number(arg) - 1].title) : kind === 'block' ? u(BLOCKS[arg] ?? { uz: arg, ru: arg }) : t('quiz');
  return (
    <Screen title={title} back={true}>
      <PracticeSession items={items} title={title} onDone={() => { markDaily(kind === 'section' ? 'section' + arg : 'quiz'); navigate('home'); }} />
    </Screen>
  );
}

/* ---------------- diagnostic ---------------- */

export function Diagnostic() {
  const { t, u, ex } = useLang();
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState(false);
  const items = useMemo(() => diagnosticSet(ex), [ex]);
  const stats = useStore((s) => s.stats);

  if (result) {
    return (
      <Screen title={t('diagnosticDone')} back="home">
        <div className="space-y-3">
          {SPEC.sections.map((s) => {
            const codes = items.filter((q) => q.section === s.id).map((q) => q.code);
            const vals = codes.map((c) => stats[c]?.ewma ?? 0);
            const pct = vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 100) : 0;
            return (
              <Card key={s.id}>
                <div className="mb-2 flex justify-between gap-2"><span className="font-semibold">{s.id}. {u(s.title)}</span><b>{pct}%</b></div>
                <Bar value={pct} tone={pct >= 70 ? 'emerald' : pct >= 40 ? 'gold' : 'danger'} />
              </Card>
            );
          })}
          <p className="text-sm text-ink-soft">{t('diagnosticIntro')}</p>
          <Button full onClick={() => navigate('home')}>{t('today')}</Button>
        </div>
      </Screen>
    );
  }
  if (!started) {
    return (
      <Screen title={t('diagnostic')} back="home">
        <Card className="text-center">
          <GraduationCap size={44} className="mx-auto mb-3 text-brand" />
          <p className="leading-relaxed">{t('diagnosticIntro')}</p>
          <div className="mt-5 grid gap-2"><Button full onClick={() => setStarted(true)}>{t('start')}</Button><Button full variant="ghost" onClick={() => navigate('home')}>{t('skipDiagnostic')}</Button></div>
        </Card>
      </Screen>
    );
  }
  return (
    <Screen title={t('diagnostic')} back="home">
      <PracticeSession items={items} mode="test" title={t('diagnostic')} onDone={() => { setState((s) => ({ ...s, profile: { ...s.profile, diagnosticDone: true } }), true); setResult(true); }} />
    </Screen>
  );
}

/* ---------------- Teacher Simulator ---------------- */

export function SimList() {
  const { t, c } = useLang();
  const best = useStore((s) => s.simBest);
  return (
    <Screen title={t('simulator')} back="learn">
      <p className="mb-4 text-sm leading-relaxed text-ink-soft">{t('simIntro')}</p>
      <div className="grid gap-2">
        {SCENARIOS.map((sc) => (
          <Card key={sc.id} onClick={() => navigate(`sim/${sc.id}`)}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-soft text-sm font-bold text-emerald">{sc.grade}</span>
              <div className="min-w-0 flex-1"><div className="font-semibold leading-tight">{c(sc.title)}</div><div className="text-xs text-ink-soft">{sc.code} · {sc.grade}-{t('grade')}</div></div>
              {best[sc.id] !== undefined ? <span className="text-sm font-bold text-emerald">{best[sc.id]}/3</span> : <Lock size={16} className="text-ink-soft opacity-0" />}
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
}

export function SimRun({ id }: { id: string }) {
  const { t, c } = useLang();
  const sc = SCENARIOS.find((x) => x.id === id);
  const [stepId, setStepId] = useState(sc?.start ?? '');
  const [chosen, setChosen] = useState<ScenarioOption | null>(null);
  const [fits, setFits] = useState<number[]>([]);
  if (!sc) return <Screen title="—" back="sim"><Card>—</Card></Screen>;
  const step = sc.steps[stepId];
  const finished = !step || (!step.options?.length);

  const pick = (o: ScenarioOption) => { setChosen(o); setFits((f) => [...f, o.fit]); };
  const goOn = () => {
    const nxt = chosen?.next;
    setChosen(null);
    if (nxt) setStepId(nxt);
    else {
      const score = Math.min(...[...fits]);
      setState((s) => ({ ...s, simBest: { ...s.simBest, [sc.id]: Math.max(s.simBest[sc.id] ?? 0, score) }, xp: s.xp + 20 }));
      checkAchievements();
      setStepId('__end');
    }
  };

  return (
    <Screen title={c(sc.title)} back="sim">
      <Card tone="emerald" className="mb-3 text-sm">
        <div><b>{t('blockGoal')}:</b> {c(sc.goal)}</div>
        <div className="mt-1"><b>{t('constraints')}:</b> {c(sc.constraints)}</div>
      </Card>

      {stepId === '__end' || finished ? (
        <Card className="pop">
          <Sparkles className="mb-2 text-gold" />
          <p className="font-semibold">{t('principle')}</p>
          <p className="mt-1 leading-relaxed">{c(sc.principle)}</p>
          {Object.values(sc.steps).map((st, i) => st.summary && <p key={i} className="mt-3 text-sm leading-relaxed text-ink-soft">{c(st.summary)}</p>)}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => { setStepId(sc.start); setFits([]); }}>{t('retry')}</Button>
            <Button onClick={() => navigate('sim')}>{t('continue')}</Button>
          </div>
        </Card>
      ) : (
        <>
          <Card>
            <p className="leading-relaxed">{c(step.situation)}</p>
            {step.dialogue && (
              <div className="mt-3 space-y-2">
                {step.dialogue.map((d, i) => (
                  <div key={i} className="flex gap-2"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand">{c(d.who)[0]}</span>
                    <div className="rounded-2xl rounded-tl-sm bg-surface-2 px-3 py-2 text-sm"><b>{c(d.who)}:</b> {c(d.line)}</div></div>
                ))}
              </div>
            )}
          </Card>
          <div className="mt-3 grid gap-2">
            {step.options!.map((o) => {
              const isChosen = chosen?.id === o.id;
              const reveal = !!chosen;
              const tone = o.fit === 3 ? 'border-emerald bg-emerald-soft' : o.fit === 0 ? 'border-danger/50 bg-danger-soft' : 'border-gold/50 bg-gold/10';
              return (
                <button key={o.id} type="button" disabled={reveal} onClick={() => pick(o)}
                  className={`rounded-xl border-2 p-3.5 text-left transition ${reveal ? tone : 'border-line bg-surface hover:border-brand/50'} ${isChosen ? 'ring-2 ring-brand' : ''}`}>
                  <div className="leading-snug">{c(o.text)}</div>
                  {reveal && (
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="font-semibold">{t('fit')}: {'●'.repeat(o.fit)}{'○'.repeat(3 - o.fit)}</div>
                      <div><b>{t('consequence')}:</b> {c(o.consequence)}</div>
                      <div><b>{t('whyFit')}:</b> {c(o.reasoning)}</div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          {chosen && <div className="action-bar"><Button full onClick={goOn}>{t('continue')}</Button></div>}
        </>
      )}
    </Screen>
  );
}
