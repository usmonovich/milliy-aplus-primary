// Learning: roadmap (Foundation → A+), lessons, practice, diagnostic, Teacher Simulator.
import { useMemo, useState } from 'react';
import { AlertTriangle, BookOpen, CalendarCheck, Check, CheckCircle2, ChevronRight, Compass, Crosshair, Frown, GraduationCap, Lightbulb, Meh, Rocket, School, Smile, Sparkles, Star, Stethoscope, Target, Trophy, Users } from 'lucide-react';
import type { LessonBlock, LevelId, ScenarioOption } from '../core/types';
import { PROGRAM_MINUTES, programStatus, type ProgramLength } from '../core/engine';
import { markDaily, setState, today, useStore } from '../core/store';
import { BLOCKS, SCENARIOS, SPEC, lessonFor, sourceById } from '../content/primary';
import { Bar, Button, Card, Chip, Screen, SectionTitle, Widget, navigate, sectionBg, useLang } from '../ui/kit';
import { LEVELS, checkAchievements, dailyQuizSet, diagnosticSet, lessonsFor, pickPractice, startExam, starsFor } from '../ui/logic';
import { PracticeSession } from '../ui/practice';
import { Celebrate, Stars, haptic } from '../ui/fx';

/* ---------------- roadmap ---------------- */

const OFFSETS = [0, 0, 0, 0];

export function LearnHome() {
  const { t, c, u, ex } = useLang();
  const done = useStore((s) => s.lessonsDone);
  const stars = useStore((s) => s.stars);
  const cps = useStore((s) => s.checkpoints);
  const diag = useStore((s) => s.profile.diagnosticDone);
  const simBest = useStore((s) => s.simBest);
  const quizToday = useStore((s) => s.quizzes[today()]);
  const [sec, setSec] = useState(0);
  const all = lessonsFor(ex);
  const lessons = all.filter((l) => !sec || l.section === sec);
  const doneN = all.filter((l) => done[l.id]).length;
  const current = all.find((l) => !done[l.id]);
  const starsN = all.reduce((n, l) => n + (stars[l.id] ?? (done[l.id] ? 1 : 0)), 0);
  const begin = (level: LevelId) => { startExam('checkpoint', ex, { level }); navigate('exam/run'); };

  return (
    <Screen title={t('navLearn')}>
      <Card className="mb-3">
        <div className="mb-2 flex items-center justify-between text-sm"><span className="font-semibold">{t('roadmap')}</span><span className="flex items-center gap-3 text-ink-soft"><span className="flex items-center gap-1"><Star size={15} className="fill-gold text-gold" />{starsN}/{all.length * 3}</span>{doneN}/{all.length}</span></div>
        <Bar value={(doneN / all.length) * 100} tone="emerald" />
      </Card>

      <div className="grid grid-cols-2 gap-2">
        <Card onClick={() => navigate('quiz')} tone={quizToday ? 'emerald' : undefined}>
          <CalendarCheck className="mb-2 text-gold" /><div className="font-semibold leading-tight">{t('dailyQuiz')}</div>
          <div className="text-xs text-ink-soft">{quizToday ? `${quizToday.correct}/${quizToday.total}` : '10'}</div>
        </Card>
        <Card onClick={() => { startExam('weak', ex); navigate('exam/run'); }}>
          <Crosshair className="mb-2 text-danger" /><div className="font-semibold leading-tight">{t('weakTopics')}</div>
          <div className="text-xs text-ink-soft">12 · 25 {t('minutes')}</div>
        </Card>
        <Card onClick={() => navigate('sim')}>
          <School className="mb-2 text-emerald" /><div className="font-semibold leading-tight">{t('simulator')}</div>
          <div className="text-xs text-ink-soft">{Object.keys(simBest).length}/{SCENARIOS.length}</div>
        </Card>
        <Card onClick={() => navigate('diagnostic')}>
          <Stethoscope className="mb-2 text-brand" /><div className="font-semibold leading-tight">{t('diagnostic')}</div>
          <div className="text-xs text-ink-soft">{diag ? t('done') : '15'}</div>
        </Card>
      </div>
      <Card className="mt-2" onClick={() => navigate('plan')}>
        <div className="flex items-center gap-3"><Rocket className="text-brand" /><span className="flex-1 font-semibold">{t('program')} · 7–90</span><ChevronRight className="text-ink-soft" /></div>
      </Card>

      <div className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4">
        <Chip active={sec === 0} onClick={() => setSec(0)}>{t('all')}</Chip>
        {SPEC.sections.map((s) => <Chip key={s.id} active={sec === s.id} onClick={() => setSec(s.id)}>{s.id}. {u(s.title)}</Chip>)}
      </div>

      {LEVELS.map((lv) => {
        const ls = lessons.filter((l) => l.level === lv);
        if (lv === 'A+') {
          return (
            <div key={lv} className="mt-6 rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 p-4">
              <div className="flex items-center gap-3"><Trophy className="text-gold" size={28} /><div className="min-w-0 flex-1"><div className="font-bold">A+</div><div className="text-sm text-ink-soft">{t('fullExams')}</div></div>
                <Button variant="secondary" onClick={() => navigate('exams')}>{t('start')}</Button></div>
            </div>
          );
        }
        if (!ls.length) return null;
        const lvDone = ls.filter((l) => done[l.id]).length;
        const cp = cps[lv];
        return (
          <section key={lv} className="mt-6" aria-label={lv}>
            <div className="mb-3 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand to-brand/80 px-4 py-3 text-white dark:text-surface-2">
              <span className="text-lg font-bold">{lv === 'F' ? 'Foundation' : lv}</span>
              <span className="flex-1 text-sm opacity-80">{lvDone}/{ls.length}</span>
              {cp !== undefined && cp >= 80 && <CheckCircle2 size={20} />}
            </div>
            <ol className="relative">
              <span className="absolute bottom-8 left-[calc(2.125rem-2px)] top-8 w-1 rounded-full bg-line" aria-hidden="true" />
              {ls.map((l, i) => {
                const isDone = !!done[l.id];
                const isCur = current?.id === l.id;
                return (
                  <li key={l.id} className="relative mb-1.5" style={{ paddingLeft: OFFSETS[i % 4] }}>
                    <button type="button" onClick={() => navigate(`lesson/${l.block}`)} className="flex w-full items-center gap-3 rounded-2xl p-1.5 text-left transition hover:bg-surface active:scale-[.99]">
                      <span className={`relative z-[1] grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-surface-2 text-sm font-bold shadow-sm ${isDone ? 'bg-emerald text-white' : isCur ? 'pulse-ring bg-brand text-white dark:text-surface-2' : sectionBg(l.section)}`}>
                        {isDone ? <Check size={24} strokeWidth={3} /> : l.block}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold leading-tight">{c(l.title)}</span>
                        <span className="mt-0.5 flex items-center gap-2 text-xs text-ink-soft">{l.minutes} {t('minutes')}{isDone && <Stars n={stars[l.id] ?? 1} size={12} />}{isCur && <b className="text-brand">{t('start')}</b>}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
              <li className="relative" style={{ paddingLeft: OFFSETS[ls.length % 4] }}>
                <button type="button" onClick={() => begin(lv)} className="flex w-full items-center gap-3 rounded-2xl p-1.5 text-left transition hover:bg-surface">
                  <span className={`relative z-[1] grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-4 border-surface-2 ${cp !== undefined && cp >= 80 ? 'bg-gold text-white' : 'bg-gold/20 text-gold'}`}><Trophy size={22} /></span>
                  <span className="min-w-0 flex-1"><span className="block font-semibold">{t('checkpoint')}</span>
                    <span className="text-xs text-ink-soft">{cp !== undefined ? `${cp}% · ` : ''}{t('checkpointHint')}</span></span>
                </button>
              </li>
            </ol>
          </section>
        );
      })}
      <p className="mt-4 text-xs text-ink-soft">{t('levelDesc')}</p>
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
  const [result, setResult] = useState<{ stars: number; pct: number; passed: boolean } | null>(null);
  const items = useMemo(() => (mode === 'read' ? [] : pickPractice(ex, { block, n: mode === 'testout' ? 8 : 6 })), [mode, block, ex]);
  if (!lesson) return <Screen title="—" back="learn"><Card>—</Card></Screen>;

  const complete = (sc: { correct: number; total: number }) => {
    const pct = sc.total ? sc.correct / sc.total : 0;
    const passed = (mode === 'practice' && pct >= 0.6) || (mode === 'testout' && pct >= 0.8);
    const st = passed ? Math.max(1, starsFor(pct)) : 0;
    if (passed) {
      setState((s) => ({ ...s, lessonsDone: { ...s.lessonsDone, [lesson.id]: s.lessonsDone[lesson.id] ?? today() }, stars: { ...s.stars, [lesson.id]: Math.max(s.stars[lesson.id] ?? 0, st) }, xp: s.xp + 30 + st * 10 }));
      markDaily('section' + lesson.section);
      checkAchievements();
    }
    setResult({ stars: st, pct: Math.round(pct * 100), passed });
    setMode('read');
  };
  const celebration = result && (
    <Celebrate stars={result.stars} title={result.passed ? t('lessonComplete') : t('sessionDone')}
      actions={<>
        {result.passed && <Button full onClick={() => { setResult(null); navigate('learn'); }}>{t('continue')}</Button>}
        <Button full variant={result.passed ? 'secondary' : 'primary'} onClick={() => { setResult(null); setMode('practice'); }}>{t('retry')}</Button>
        {!result.passed && <Button full variant="ghost" onClick={() => setResult(null)}>{t('close')}</Button>}
      </>}>
      <p className="text-3xl font-bold text-ink">{result.pct}%</p>
      <p className="mt-1 text-sm">{result.passed ? (result.stars < 3 ? t('moreStars') : t('xpGained', { n: 60 })) : t('notPassed')}</p>
    </Celebrate>
  );

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
      {celebration}
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
              <div className="min-w-0 flex-1"><div className="font-semibold leading-tight">{c(sc.title)}</div><div className="text-xs text-ink-soft">{sc.code} · {sc.grade}-{t('grade')} · {Object.keys(sc.steps).length}</div></div>
              {best[sc.id] !== undefined && <Stars n={best[sc.id]} size={13} />}
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
}

const FIT_EFFECT = [{ engagement: -18, understanding: -12 }, { engagement: -6, understanding: 0 }, { engagement: 8, understanding: 6 }, { engagement: 15, understanding: 16 }];
const GENERIC_REACTION = [
  { uz: "Shovqin kuchaydi, ayrim o'quvchilar xafa yoki befarq ko'rinadi.", ru: 'Шум усилился, часть учеников выглядит расстроенной или безразличной.' },
  { uz: "Sinf sustlashdi: ba'zilar chalg'iyapti, savollar kamaydi.", ru: 'Класс притих: часть учеников отвлекается, вопросов меньше.' },
  { uz: "Ko'pchilik ishga kirishdi, lekin bir nechta o'quvchi hali ikkilanmoqda.", ru: 'Большинство включилось в работу, но несколько учеников ещё сомневаются.' },
  { uz: "Sinf jonlandi: qo'llar ko'tarildi, savollar aniqroq bo'ldi.", ru: 'Класс оживился: поднимаются руки, вопросы становятся точнее.' },
];
const STUDENTS = ['A', 'B', 'D', 'M', 'S', 'Z'];
const SPREAD = [8, -12, 3, -4, 14, -8];
const clamp = (v: number) => Math.max(0, Math.min(100, v));

function ClassView({ eng, und }: { eng: number; und: number }) {
  const { t } = useLang();
  return (
    <Card className="mb-3">
      <div className="mb-3 flex items-center justify-between text-sm font-semibold"><span>{t('climate')}</span></div>
      <div className="mb-3 grid grid-cols-6 gap-1.5" aria-hidden="true">
        {STUDENTS.map((s, i) => {
          const v = eng + SPREAD[i];
          const Icon = v >= 62 ? Smile : v >= 40 ? Meh : Frown;
          const cls = v >= 62 ? 'bg-emerald-soft text-emerald' : v >= 40 ? 'bg-gold/15 text-gold' : 'bg-danger-soft text-danger';
          return <div key={s} className={`grid aspect-square place-items-center rounded-2xl transition-colors duration-500 ${cls}`}><Icon size={22} /></div>;
        })}
      </div>
      <div className="space-y-2 text-xs">
        <div><div className="mb-1 flex justify-between"><span>{t('engagement')}</span><b>{eng}%</b></div><Bar value={eng} tone={eng >= 60 ? 'emerald' : eng >= 40 ? 'gold' : 'danger'} label={t('engagement')} /></div>
        <div><div className="mb-1 flex justify-between"><span>{t('understanding')}</span><b>{und}%</b></div><Bar value={und} tone={und >= 60 ? 'emerald' : und >= 40 ? 'gold' : 'danger'} label={t('understanding')} /></div>
      </div>
    </Card>
  );
}

export function SimRun({ id }: { id: string }) {
  const { t, c } = useLang();
  const sc = SCENARIOS.find((x) => x.id === id);
  const [stepId, setStepId] = useState(sc?.start ?? '');
  const [chosen, setChosen] = useState<ScenarioOption | null>(null);
  const [path, setPath] = useState<{ step: string; opt: ScenarioOption }[]>([]);
  const [meters, setMeters] = useState({ eng: 55, und: 40 });
  if (!sc) return <Screen title="—" back="sim"><Card>—</Card></Screen>;
  const step = sc.steps[stepId];
  const finished = stepId === '__end' || !step || !step.options?.length;

  const pick = (o: ScenarioOption) => {
    const e = o.effects ?? FIT_EFFECT[o.fit];
    setChosen(o);
    setPath((p) => [...p, { step: stepId, opt: o }]);
    setMeters((m) => ({ eng: clamp(m.eng + e.engagement), und: clamp(m.und + e.understanding) }));
    haptic(o.fit >= 2 ? 'success' : 'error');
  };
  const goOn = () => {
    const nxt = chosen?.next;
    setChosen(null);
    window.scrollTo(0, 0);
    if (nxt && sc.steps[nxt]?.options?.length) { setStepId(nxt); return; }
    const all = [...path];
    const avg = all.reduce((a, x) => a + x.opt.fit, 0) / Math.max(1, all.length);
    const stars = avg >= 2.5 ? 3 : avg >= 1.75 ? 2 : avg >= 1 ? 1 : 0;
    setState((s) => ({ ...s, simBest: { ...s.simBest, [sc.id]: Math.max(s.simBest[sc.id] ?? 0, stars) }, xp: s.xp + 20 + stars * 5 }));
    checkAchievements();
    setStepId(nxt && sc.steps[nxt] ? nxt : '__end');
  };
  const restart = () => { setStepId(sc.start); setPath([]); setMeters({ eng: 55, und: 40 }); setChosen(null); };

  if (finished) {
    const avg = path.reduce((a, x) => a + x.opt.fit, 0) / Math.max(1, path.length);
    const stars = avg >= 2.5 ? 3 : avg >= 1.75 ? 2 : avg >= 1 ? 1 : 0;
    const endSummary = step?.summary;
    return (
      <Screen title={c(sc.title)} back="sim">
        <Card className="pop text-center">
          <div className="mb-2 flex justify-center"><Stars n={stars} size={30} animate /></div>
          <div className="text-sm text-ink-soft">{t('simScore')}</div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-xl bg-surface-2 p-2">{t('engagement')}<div className="text-xl font-bold">{meters.eng}%</div></div>
            <div className="rounded-xl bg-surface-2 p-2">{t('understanding')}<div className="text-xl font-bold">{meters.und}%</div></div>
          </div>
        </Card>
        {endSummary && <Card className="mt-3"><p className="leading-relaxed">{c(endSummary)}</p></Card>}
        <SectionTitle>{t('debrief')}</SectionTitle>
        <div className="space-y-2">
          {path.map(({ step: sid, opt }, i) => {
            const st = sc.steps[sid];
            const best = [...(st.options ?? [])].sort((a, b) => b.fit - a.fit)[0];
            return (
              <Card key={i}>
                <p className="line-clamp-2 text-sm text-ink-soft">{c(st.situation)}</p>
                <p className="mt-2 text-sm"><b>{t('yourPath')}:</b> {c(opt.text)} <span className="whitespace-nowrap font-semibold">{'●'.repeat(opt.fit)}{'○'.repeat(3 - opt.fit)}</span></p>
                <p className="mt-1 text-sm"><b>{t('whyFit')}:</b> {c(opt.reasoning)}</p>
                {best && best.id !== opt.id && best.fit > opt.fit && <p className="mt-2 rounded-xl bg-emerald-soft p-2 text-sm"><b>{t('bestChoice')}:</b> {c(best.text)}</p>}
              </Card>
            );
          })}
        </div>
        <Card tone="emerald" className="mt-3">
          <p className="font-semibold">{t('principle')}</p>
          <p className="mt-1 leading-relaxed">{c(sc.principle)}</p>
        </Card>
        <div className="action-bar grid grid-cols-2 gap-2">
          <Button variant="secondary" onClick={restart}>{t('retry')}</Button>
          <Button onClick={() => navigate('sim')}>{t('continue')}</Button>
        </div>
      </Screen>
    );
  }

  return (
    <Screen title={c(sc.title)} back="sim">
      <Card tone="emerald" className="mb-3 text-sm">
        <div><b>{t('blockGoal')}:</b> {c(sc.goal)}</div>
        <div className="mt-1"><b>{t('constraints')}:</b> {c(sc.constraints)}</div>
      </Card>
      <ClassView eng={meters.eng} und={meters.und} />
      <Card>
        <p className="leading-relaxed">{c(step.situation)}</p>
        {step.dialogue && (
          <div className="mt-3 space-y-2">
            {step.dialogue.map((d, i) => (
              <div key={i} className="react-in flex gap-2" style={{ animationDelay: `${i * 0.25}s` }}><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand">{c(d.who)[0]}</span>
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
          if (reveal && !isChosen) {
            return (
              <details key={o.id} className={`rounded-xl border-2 p-3 text-sm ${tone}`}>
                <summary className="cursor-pointer leading-snug">{c(o.text)} <span className="whitespace-nowrap font-semibold">{'●'.repeat(o.fit)}{'○'.repeat(3 - o.fit)}</span></summary>
                <div className="mt-2 space-y-1"><div><b>{t('consequence')}:</b> {c(o.consequence)}</div><div><b>{t('whyFit')}:</b> {c(o.reasoning)}</div></div>
              </details>
            );
          }
          return (
            <button key={o.id} type="button" disabled={reveal} onClick={() => pick(o)}
              className={`rounded-xl border-2 p-3.5 text-left transition ${reveal ? `${tone} ring-2 ring-brand` : 'border-line bg-surface hover:border-brand/50 active:scale-[.99]'}`}>
              <div className="leading-snug">{c(o.text)}</div>
              {reveal && (
                <div className="react-in mt-3 space-y-2 text-sm">
                  <div className="flex gap-2 rounded-xl bg-surface p-2.5"><Users size={18} className="shrink-0 text-brand" /><span><b>{t('classReacts')}:</b> {c(o.reaction ?? GENERIC_REACTION[o.fit])}</span></div>
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
    </Screen>
  );
}

/* ---------------- daily quiz ---------------- */

export function DailyQuiz() {
  const { t, ex } = useLang();
  const d = today();
  const result = useStore((s) => s.quizzes[d]);
  const quizDays = useStore((s) => Object.keys(s.quizzes).length);
  const [running, setRunning] = useState(false);
  const [celebrate, setCelebrate] = useState<{ correct: number; total: number } | null>(null);
  const items = useMemo(() => dailyQuizSet(ex, d), [ex, d]);

  if (running) {
    return (
      <Screen title={t('dailyQuiz')} back={true}>
        <PracticeSession items={items} title={t('dailyQuiz')} onDone={(sc) => {
          setState((s) => ({ ...s, quizzes: { ...s.quizzes, [d]: sc }, xp: s.xp + 20 }), true);
          markDaily('quiz');
          checkAchievements();
          setRunning(false);
          setCelebrate(sc);
        }} />
      </Screen>
    );
  }
  return (
    <Screen title={t('dailyQuiz')} back="learn">
      {celebrate && (
        <Celebrate stars={starsFor(celebrate.total ? celebrate.correct / celebrate.total : 0)} title={t('quizDoneToday')}
          actions={<Button full onClick={() => { setCelebrate(null); navigate('home'); }}>{t('continue')}</Button>}>
          <p className="text-3xl font-bold text-ink">{celebrate.correct}/{celebrate.total}</p>
        </Celebrate>
      )}
      <Card className="text-center">
        <CalendarCheck size={44} className="mx-auto mb-3 text-gold" />
        <p className="leading-relaxed">{t('dailyQuizHint')}</p>
        {result ? (
          <div className="mt-4"><Stars n={starsFor(result.total ? result.correct / result.total : 0)} /><p className="mt-2 text-2xl font-bold">{result.correct}/{result.total}</p><p className="text-sm text-ink-soft">{t('quizDoneToday')}</p></div>
        ) : null}
        <p className="mt-3 text-sm text-ink-soft">{quizDays} {t('quizDays')}</p>
        <div className="mt-5"><Button full onClick={() => setRunning(true)}>{result ? t('retry') : t('start')}</Button></div>
      </Card>
    </Screen>
  );
}

/* ---------------- intensive program ---------------- */

const PHASE_KEYS = ['foundation', 'practice', 'mock', 'final'] as const;

export function ProgramScreen() {
  const { t } = useLang();
  const program = useStore((s) => s.program);
  const prep = useStore((s) => s.profile.prep);
  const activeDays = useStore((s) => s.activeDays);
  const [len, setLen] = useState<ProgramLength>(30);
  const setPrep = (p: typeof prep) => setState((s) => ({ ...s, profile: { ...s.profile, prep: p, target: p === 'aplus' ? 'A+' : p === 'bplus' ? 'B+' : s.profile.target } }), true);
  const prepPicker = (
    <>
      <SectionTitle>{t('prepMode')}</SectionTitle>
      <div className="grid gap-2">
        {(['bplus', 'aplus', 'standard'] as const).map((p) => (
          <button key={p} type="button" onClick={() => setPrep(p)} aria-pressed={prep === p}
            className={`rounded-2xl border-2 p-3.5 text-left transition ${prep === p ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`}>
            <div className="font-semibold">{t(`prep_${p}`)}</div><div className="mt-0.5 text-sm text-ink-soft">{t(`prepHint_${p}`)}</div>
          </button>
        ))}
      </div>
    </>
  );

  if (program) {
    const st = programStatus(program, today(), activeDays);
    const idx = PHASE_KEYS.indexOf(st.phase);
    return (
      <Screen title={t('program')} back="learn">
        <Card tone="brand">
          <div className="text-sm opacity-80">{t('programDay', { d: st.day, n: st.total })}</div>
          <div className="mt-1 text-2xl font-bold">{st.finished ? t('programFinished') : t(`phase_${st.phase}`)}</div>
          <div className="mt-3 flex gap-1" aria-hidden="true">
            {PHASE_KEYS.map((k, i) => <div key={k} className={`h-2 flex-1 rounded-full ${i < idx ? 'bg-white/70' : i === idx ? 'bg-gold' : 'bg-white/20'}`} />)}
          </div>
          <div className="mt-3 text-sm opacity-90">{t('programMinutes', { m: PROGRAM_MINUTES[program.length] })}</div>
        </Card>
        {st.rebuilt && <Card tone="gold" className="mt-3 text-sm leading-relaxed">{t('programRebuilt', { n: st.missed, phase: t(`phase_${st.phase}`) })}</Card>}
        <div className="mt-3 space-y-2">
          {PHASE_KEYS.map((k, i) => (
            <Card key={k} tone={i === idx ? 'emerald' : undefined}>
              <div className="flex items-start gap-3">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold ${i < idx ? 'bg-emerald text-white' : i === idx ? 'bg-brand text-white dark:text-surface-2' : 'bg-surface-2'}`}>{i < idx ? <Check size={16} /> : i + 1}</span>
                <div><div className="font-semibold">{t(`phase_${k}`)}</div><div className="text-sm text-ink-soft">{t(`phaseHint_${k}`)}</div></div>
              </div>
            </Card>
          ))}
        </div>
        {prepPicker}
        <div className="mt-4 grid gap-2">
          <Button full onClick={() => navigate('home')}>{t('today')}</Button>
          <Button full variant="ghost" className="!text-danger" onClick={() => setState((s) => ({ ...s, program: undefined }), true)}>{t('programStop')}</Button>
        </div>
      </Screen>
    );
  }
  return (
    <Screen title={t('program')} back="learn">
      <p className="mb-4 leading-relaxed text-ink-soft">{t('programIntro')}</p>
      <div className="grid grid-cols-5 gap-2">
        {([7, 14, 30, 60, 90] as ProgramLength[]).map((n) => (
          <button key={n} type="button" onClick={() => setLen(n)} aria-pressed={len === n}
            className={`rounded-2xl border-2 py-3 text-center transition ${len === n ? 'border-brand bg-brand text-white dark:text-surface-2' : 'border-line bg-surface'}`}>
            <div className="text-xl font-bold">{n}</div><div className="text-[11px] opacity-80">{t('days')}</div>
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-ink-soft">{t('programMinutes', { m: PROGRAM_MINUTES[len] })}</p>
      {prepPicker}
      <div className="action-bar">
        <Button full onClick={() => {
          setState((s) => ({ ...s, program: { length: len, start: today() }, profile: { ...s.profile, minutes: PROGRAM_MINUTES[len] } }), true);
          haptic('success');
        }}>{t('programStart')}</Button>
      </div>
    </Screen>
  );
}
