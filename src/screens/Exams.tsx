// Exams: mock list, strict exam runner (absolute deadline, resume), report, mistakes.
import { useEffect, useMemo, useState } from 'react';
import { Bookmark, CheckCircle2, ChevronLeft, ChevronRight, Clock, FileText, Flag, Grid3x3, History, Infinity as Inf, Repeat, Timer, Zap } from 'lucide-react';
import { formatClock, remainingMs, taskCount } from '../core/engine';
import { setState, today, useStore, type Attempt } from '../core/store';
import type { Question, Response } from '../core/types';
import { BLOCKS, SPEC, TARGET_VARIANTS } from '../content/primary';
import { Bar, Button, Card, Chip, Screen, SectionTitle, Sheet, navigate, useLang } from '../ui/kit';
import { dueReview, finishExam, getQ, isAnswered, startExam, variantsReady } from '../ui/logic';
import { Feedback, PracticeSession, QuestionView, TypeBadge } from '../ui/practice';

export function ExamsHome() {
  const { t, ex, u } = useLang();
  const attempts = useStore((s) => s.attempts);
  const active = useStore((s) => s.activeExam);
  const ready = variantsReady(ex);
  const begin = (kind: Attempt['kind'], o: { variant?: number; section?: number } = {}) => {
    if (active && !confirm(t('activeAttempt') + ' → ' + t('finish') + '?')) return;
    if (active) finishExam();
    startExam(kind, ex, o);
    navigate('exam/run');
  };

  return (
    <Screen title={t('navExams')}>
      {active && <Card tone="gold" className="mb-3" onClick={() => navigate('exam/run')}><div className="flex items-center gap-3"><Timer className="text-gold" /><span className="flex-1 font-semibold">{t('activeAttempt')}</span><span className="font-semibold">{t('resume')}</span></div></Card>}

      <SectionTitle>{t('fullExams')}</SectionTitle>
      <p className="mb-3 text-sm text-ink-soft">{t('examRules')}</p>
      <div className="grid gap-2">
        {Array.from({ length: ready }, (_, i) => i + 1).map((n) => {
          const best = attempts.filter((a) => a.kind === 'full' && a.variant === n && a.report).map((a) => a.report!.correct);
          return (
            <Card key={n}>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-lg font-bold text-white dark:text-surface-2">{n}</span>
                <div className="min-w-0 flex-1"><div className="font-semibold">{t('variant')} {n}</div><div className="text-xs text-ink-soft">{t('standard')} · 90 · 180 {t('minutes')}{best.length ? ` · max ${Math.max(...best)}/90` : ''}</div></div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button variant="secondary" icon={<Inf size={18} />} onClick={() => begin('untimed', { variant: n })}>{t('modeUntimed')}</Button>
                <Button icon={<Clock size={18} />} onClick={() => begin('full', { variant: n })}>{t('start')}</Button>
              </div>
            </Card>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-ink-soft">{t('variantsPlanned', { n: TARGET_VARIANTS, k: ready })} {t('authorItems')}</p>

      <SectionTitle>{t('otherModes')}</SectionTitle>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {SPEC.sections.map((s) => (
          <Card key={s.id} onClick={() => begin('section', { variant: 1, section: s.id })}>
            <div className="font-semibold leading-tight">{s.id}. {u(s.title)}</div><div className="text-xs text-ink-soft">{t('modeSection')} · {t('variant')} 1</div>
          </Card>
        ))}
        <Card onClick={() => begin('express')}><div className="flex items-center gap-2 font-semibold"><Zap size={18} className="text-gold" />{t('modeExpress')}</div></Card>
        <Card onClick={() => begin('sit')}><div className="font-semibold">{t('modeSit')}</div><div className="text-xs text-ink-soft">V-Y-1</div></Card>
        <Card onClick={() => begin('open')}><div className="font-semibold">{t('modeOpen')}</div><div className="text-xs text-ink-soft">O-1</div></Card>
        <Card onClick={() => begin('hard')}><div className="font-semibold">{t('modeHard')}</div></Card>
      </div>

      <SectionTitle>{t('mistakes')}</SectionTitle>
      <Card onClick={() => navigate('mistakes')}><div className="flex items-center gap-3"><Repeat className="text-brand" /><span className="flex-1 font-semibold">{t('mistakes')}</span><ChevronRight /></div></Card>

      <SectionTitle><span className="flex items-center gap-2"><History size={18} />{t('history')}</span></SectionTitle>
      {!attempts.length && <p className="text-sm text-ink-soft">{t('noHistory')}</p>}
      <div className="grid gap-2">
        {[...attempts].reverse().slice(0, 20).map((a) => (
          <Card key={a.id} onClick={() => navigate(`exam/report/${a.id}`)}>
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-ink-soft" />
              <div className="min-w-0 flex-1"><div className="font-medium">{a.kind === 'full' || a.kind === 'untimed' ? `${t('variant')} ${a.variant}` : a.kind === 'section' ? `${t('section')} ${a.section}` : a.kind}</div>
                <div className="text-xs text-ink-soft">{new Date(a.finishedAt ?? a.startedAt).toLocaleString()}</div></div>
              <b>{a.report?.correct}/{a.report?.total}</b>
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
}

/* ---------------- runner ---------------- */

export function ExamRunner() {
  const { t } = useLang();
  const a = useStore((s) => s.activeExam);
  const [now, setNow] = useState(Date.now());
  const [nav, setNav] = useState(false);
  const [confirmOpen, setConfirm] = useState(false);
  const qs = useMemo(() => (a ? a.qids.map(getQ).filter((q): q is Question => !!q) : []), [a?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const left = a?.endAt ? remainingMs(a.endAt, now) : null;
  useEffect(() => {
    if (a && a.endAt && left === 0) {
      const id = finishExam(true);
      if (id) navigate(`exam/report/${id}`);
    }
  }, [left, a]);

  if (!a) return <Screen title={t('navExams')} back="exams"><Card>{t('noHistory')}</Card></Screen>;
  const q = qs[a.current];
  if (!q) return null;
  const update = (patch: Partial<Attempt>) => setState((s) => (s.activeExam ? { ...s, activeExam: { ...s.activeExam, ...patch } } : s), true);
  const setAnswer = (r: Response) => update({ answers: { ...a.answers, [q.id]: r } });
  const go = (i: number) => { update({ current: Math.max(0, Math.min(qs.length - 1, i)) }); window.scrollTo(0, 0); };
  const flagged = a.flags.includes(q.id);
  // task numbering: Y-2 items occupy several numbers
  const starts: number[] = [];
  qs.reduce((n, x) => { starts.push(n); return n + taskCount(x); }, 1);
  const label = (i: number) => (taskCount(qs[i]) > 1 ? `${starts[i]}–${starts[i] + taskCount(qs[i]) - 1}` : `${starts[i]}`);
  const unanswered = qs.filter((x) => !isAnswered(x, a.answers[x.id])).length;
  const finish = () => { const id = finishExam(); if (id) navigate(`exam/report/${id}`); };
  const sectionsInExam = [...new Set(qs.map((x) => x.section))];

  return (
    <div className="mx-auto min-h-[100dvh] max-w-2xl px-4 pb-32">
      <header className="sticky top-0 z-20 -mx-4 bg-surface-2/95 px-4 pt-safe backdrop-blur">
        <div className="flex min-h-[3.5rem] items-center gap-2">
          <button type="button" onClick={() => navigate('exams')} className="-ml-2 grid h-11 w-11 place-items-center rounded-full hover:bg-surface" aria-label={t('back')}><ChevronLeft /></button>
          <div className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-base font-bold tabular-nums ${left !== null && left < 600000 ? 'bg-danger-soft text-danger' : 'bg-surface'}`} role="timer" aria-live="off">
            <Clock size={16} />{left === null ? '∞' : formatClock(left)}
          </div>
          <div className="flex-1" />
          <button type="button" onClick={() => setNav(true)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-surface" aria-label={t('navigator')}><Grid3x3 size={20} /></button>
          <Button variant="emerald" className="!min-h-[2.75rem] !px-4" onClick={() => setConfirm(true)}>{t('finish')}</Button>
        </div>
        {sectionsInExam.length > 1 && (
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
            {sectionsInExam.map((s) => <Chip key={s} active={q.section === s} onClick={() => go(qs.findIndex((x) => x.section === s))}>{t('section')} {s}</Chip>)}
          </div>
        )}
        <Bar value={((qs.length - unanswered) / qs.length) * 100} tone="emerald" />
      </header>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold">№ {label(a.current)}</span>
        <TypeBadge q={q} />
      </div>
      <Card className="mt-2">
        <QuestionView key={q.id} q={q} response={a.answers[q.id]} onChange={setAnswer} />
      </Card>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface/95 px-4 pt-3 pb-safe backdrop-blur">
        <div className="mx-auto grid max-w-2xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 pb-3">
          <Button variant="secondary" disabled={a.current === 0} onClick={() => go(a.current - 1)} className="!px-3" icon={<ChevronLeft size={18} />}><span className="truncate">{t('prev')}</span></Button>
          <button type="button" onClick={() => update({ flags: flagged ? a.flags.filter((f) => f !== q.id) : [...a.flags, q.id] })} aria-pressed={flagged} aria-label={t('mark')}
            className={`grid h-[3.1rem] w-[3.1rem] place-items-center rounded-xl border ${flagged ? 'border-gold bg-gold/15 text-gold' : 'border-line'}`}><Bookmark size={20} fill={flagged ? 'currentColor' : 'none'} /></button>
          <Button disabled={a.current === qs.length - 1} onClick={() => go(a.current + 1)} className="!px-3"><span className="truncate">{t('nextQ')}</span><ChevronRight size={18} className="shrink-0" /></Button>
        </div>
      </div>

      <Sheet open={nav} onClose={() => setNav(false)} title={t('navigator')}>
        <div className="mb-3 flex flex-wrap gap-3 text-xs">
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-emerald" />{t('answered')}</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-gold" />{t('marked')}</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded border border-line" />{t('unanswered')}</span>
        </div>
        <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
          {qs.map((x, i) => {
            const ans = isAnswered(x, a.answers[x.id]);
            const fl = a.flags.includes(x.id);
            return (
              <button key={x.id} type="button" onClick={() => { go(i); setNav(false); }}
                className={`h-11 rounded-lg text-xs font-bold ${i === a.current ? 'ring-2 ring-brand' : ''} ${fl ? 'bg-gold text-white' : ans ? 'bg-emerald text-white' : 'border border-line bg-surface'}`}>{label(i)}</button>
            );
          })}
        </div>
      </Sheet>
      <Sheet open={confirmOpen} onClose={() => setConfirm(false)} title={t('finish')}>
        <p className="mb-4">{t('confirmFinish', { n: unanswered })}</p>
        <div className="grid grid-cols-2 gap-2"><Button variant="secondary" onClick={() => setConfirm(false)}>{t('cancel')}</Button><Button variant="emerald" onClick={finish}>{t('finish')}</Button></div>
      </Sheet>
    </div>
  );
}

/* ---------------- report ---------------- */

export function ExamReport({ id }: { id: string }) {
  const { t, u } = useLang();
  const a = useStore((s) => s.attempts.find((x) => x.id === id));
  const [review, setReview] = useState(false);
  if (!a?.report) return <Screen title={t('report')} back="exams"><Card>—</Card></Screen>;
  const r = a.report;
  const qs = a.qids.map(getQ).filter((q): q is Question => !!q);
  return (
    <Screen title={t('report')} back="exams">
      {a.timedOut && <Card tone="gold" className="mb-3 text-sm">{t('timeUp')}</Card>}
      <Card tone="brand" className="text-center">
        <div className="text-5xl font-bold">{r.correct}<span className="text-2xl opacity-70">/{r.total}</span></div>
        <div className="mt-1 opacity-80">{r.total === 90 ? t('correctOf') : t('correct')} · {r.percent}%</div>
      </Card>
      <Card className="mt-3 text-sm leading-relaxed text-ink-soft">{t('notOfficial')}</Card>

      <SectionTitle>{t('bySection')}</SectionTitle>
      <div className="grid gap-2">
        {Object.entries(r.bySection).map(([s, v]) => (
          <Card key={s}><div className="mb-2 flex justify-between gap-2 text-sm"><span className="font-medium">{s}. {u(SPEC.sections[Number(s) - 1].title)}</span><b>{v.correct}/{v.total}</b></div><Bar value={(v.correct / v.total) * 100} tone="emerald" /></Card>
        ))}
      </div>
      <SectionTitle>{t('byType')}</SectionTitle>
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(r.byType).map(([k, v]) => <Card key={k}><div className="font-mono text-xs text-ink-soft">{k}</div><div className="text-xl font-bold">{v.correct}/{v.total}</div></Card>)}
      </div>
      <SectionTitle>{t('weak')}</SectionTitle>
      <div className="grid gap-2">
        {Object.entries(r.byCode).filter(([, v]) => v.correct < v.total).slice(0, 8).map(([code]) => {
          const blk = code.split('.').slice(0, 2).join('.');
          return <Card key={code} onClick={() => navigate(`lesson/${blk}`)}><div className="flex items-center gap-2 text-sm"><span className="font-mono text-xs">{code}</span><span className="flex-1">{u(SPEC.codes.find((c) => c.code === code)!.title)}</span><ChevronRight size={16} /></div></Card>;
        })}
      </div>
      <div className="mt-4"><Button full variant="secondary" icon={<Flag size={18} />} onClick={() => setReview(!review)}>{t('reviewAnswers')}</Button></div>
      {review && (
        <div className="mt-3 space-y-3">
          {qs.map((q, i) => (
            <Card key={q.id}>
              <div className="mb-2 flex justify-between"><b>{i + 1}</b><TypeBadge q={q} /></div>
              <QuestionView q={q} response={a.answers[q.id]} onChange={() => undefined} reveal />
              <Feedback q={q} response={a.answers[q.id]} />
            </Card>
          ))}
        </div>
      )}
    </Screen>
  );
}

/* ---------------- mistakes ---------------- */

export function Mistakes({ review }: { review?: boolean }) {
  const { t, c, u } = useLang();
  const mistakes = useStore((s) => s.mistakes);
  const srs = useStore((s) => s.srs);
  const items = useMemo(() => (review ? dueReview(20) : []), [review]);
  if (review) {
    return (
      <Screen title={t('planReview')} back="mistakes">
        {items.length ? <PracticeSession items={items} title={t('planReview')} onDone={() => { setState((s) => ({ ...s, dailyDone: { [today()]: [...new Set([...(s.dailyDone[today()] ?? []), 'review'])] } })); navigate('mistakes'); }} />
          : <Card>{t('noMistakes')}</Card>}
      </Screen>
    );
  }
  const list = Object.values(mistakes).sort((a, b) => Number(a.resolved) - Number(b.resolved) || b.count - a.count);
  const byBlock: Record<string, number> = {};
  for (const m of list) if (!m.resolved) { const b = m.code.split('.').slice(0, 2).join('.'); byBlock[b] = (byBlock[b] ?? 0) + m.count; }
  return (
    <Screen title={t('mistakes')} back="exams">
      <Button full icon={<Repeat size={18} />} onClick={() => navigate('mistakes/review')}>{t('reviewDue')} · {dueReview(99).length}</Button>
      {!list.length && <Card className="mt-3 text-sm leading-relaxed">{t('noMistakes')}</Card>}
      {Object.keys(byBlock).length > 0 && (
        <>
          <SectionTitle>{t('repeatedErr')}</SectionTitle>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
            {Object.entries(byBlock).sort((a, b) => b[1] - a[1]).map(([b, n]) => (
              <Chip key={b} onClick={() => navigate(`lesson/${b}`)}>{u(BLOCKS[b])} · {n}</Chip>
            ))}
          </div>
        </>
      )}
      <div className="mt-4 grid gap-2">
        {list.slice(0, 60).map((m) => {
          const q = getQ(m.qid);
          const card = srs[`q:${m.qid}`];
          return (
            <Card key={m.qid}>
              <div className="mb-1 flex items-center justify-between gap-2 text-xs text-ink-soft">
                <span className="font-mono">{m.code}</span>
                {m.resolved ? <span className="flex items-center gap-1 text-emerald"><CheckCircle2 size={14} />{t('mastered')}</span> : <span>{m.count} {t('timesWrong')} · {t('nextReview')}: {card?.due ?? '—'}</span>}
              </div>
              <p className="line-clamp-3 text-sm">{q ? c(q.stem) : u(SPEC.codes.find((x) => x.code === m.code)!.title)}</p>
              {q && q.type !== 'Y-2' && (
                <p className="mt-2 text-sm"><span className="text-ink-soft">{t('rightAnswer')}: </span><b>{q.type === 'O-1' ? c(q.answer) : c(q.choices.find((x) => x.id === q.answer)!.text)}</b></p>
              )}
            </Card>
          );
        })}
      </div>
    </Screen>
  );
}
