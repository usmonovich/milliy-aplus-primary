// Home: today's plan, continue learning, exam countdown, reviews, streak, readiness.
import { useState } from 'react';
import { AlertTriangle, BookOpen, CalendarDays, CheckCircle2, ChevronRight, Flame, Info, Play, Repeat, Target, Timer } from 'lucide-react';
import { planForDate, readiness, streak } from '../core/engine';
import { xpLevel } from '../core/gamification';
import { today, useStore } from '../core/store';
import { SPEC } from '../content/primary';
import { Bar, Card, Ring, Screen, SectionTitle, Sheet, navigate, useLang } from '../ui/kit';
import { dueCount, nextLesson, todayPlan } from '../ui/logic';

export function Home() {
  const { t, c, u, ex } = useLang();
  const s = useStore((x) => x);
  const [info, setInfo] = useState(false);
  const d = today();
  const plan = todayPlan();
  const doneKeys = s.dailyDone[d] ?? [];
  const r = readiness(SPEC, s.stats);
  const st = streak(s.activeDays, d);
  const pf = planForDate(d, s.profile.examDate);
  const lvl = xpLevel(s.xp);
  const next = nextLesson(ex);
  const due = dueCount();

  const launch = (b: (typeof plan)[number]) => {
    if (b.kind === 'review') navigate('mistakes/review');
    else if (b.kind === 'quiz') navigate(`practice/quiz/${b.key}`);
    else if (b.section) {
      const l = nextLesson(ex, b.section);
      navigate(l ? `lesson/${l.block}` : `practice/section/${b.section}/${b.key}`);
    }
  };
  const label = (b: (typeof plan)[number]) =>
    b.kind === 'review' ? t('planReview') : b.kind === 'quiz' ? t('planQuiz') : u(SPEC.sections[b.section! - 1].title);

  return (
    <Screen>
      <div className="flex items-center justify-between pt-4">
        <div>
          <p className="text-sm text-ink-soft">{new Date().toLocaleDateString(s.settings.uiLang === 'uz' ? 'uz-UZ' : 'ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          <h1 className="text-2xl font-bold">{t('today')}</h1>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-surface px-3 py-2 text-sm font-semibold shadow-sm" aria-label={t('streak')}>
          <Flame size={18} className="text-gold" />{st}
        </div>
      </div>

      {s.activeExam && (
        <Card tone="gold" className="mt-4" onClick={() => navigate('exam/run')}>
          <div className="flex items-center gap-3"><Timer className="text-gold" /><div className="flex-1"><div className="font-semibold">{t('activeAttempt')}</div></div><ChevronRight /></div>
        </Card>
      )}

      {pf.tight && <Card tone="gold" className="mt-4"><div className="flex gap-3 text-sm"><AlertTriangle className="shrink-0 text-gold" size={20} />{t('tightWarn')}</div></Card>}

      <div className="mt-4 grid gap-2">
        {plan.map((b) => {
          const done = doneKeys.includes(b.key);
          const Icon = b.kind === 'review' ? Repeat : b.kind === 'quiz' ? Target : BookOpen;
          return (
            <button key={b.key} type="button" onClick={() => launch(b)}
              className={`flex min-h-[4rem] items-center gap-3 rounded-2xl border p-3 text-left transition active:scale-[.99] ${done ? 'border-emerald/40 bg-emerald-soft' : 'border-line bg-surface hover:shadow-md'}`}>
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${done ? 'bg-emerald text-white' : 'bg-brand-soft text-brand'}`}>{done ? <CheckCircle2 size={22} /> : <Icon size={22} />}</span>
              <span className="min-w-0 flex-1"><span className="block font-semibold leading-tight">{label(b)}</span><span className="text-sm text-ink-soft">{b.minutes} {t('minutes')}</span></span>
              <ChevronRight className="text-ink-soft" />
            </button>
          );
        })}
      </div>

      {next && (
        <Card tone="brand" className="mt-4" onClick={() => navigate(`lesson/${next.block}`)}>
          <div className="flex items-center gap-3">
            <Play size={26} className="shrink-0" />
            <div className="min-w-0 flex-1"><div className="text-sm opacity-80">{t('continueLearning')}</div><div className="font-semibold leading-tight">{c(next.title)}</div></div>
            <span className="rounded-lg bg-white/20 px-2 py-1 text-xs font-bold">{next.level}</span>
          </div>
        </Card>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Card onClick={() => navigate('mistakes')}>
          <div className="flex items-center gap-1.5 text-xs text-ink-soft"><Repeat size={14} />{t('dueReview')}</div>
          <div className="mt-1 text-2xl font-bold">{due}</div>
        </Card>
        <Card onClick={() => navigate('profile/settings')}>
          <div className="flex items-center gap-1.5 text-xs text-ink-soft"><CalendarDays size={14} />{t('daysToExam')}</div>
          <div className="mt-1 text-2xl font-bold">{pf.daysLeft !== null && pf.daysLeft >= 0 ? `${pf.daysLeft} ${t('days')}` : '—'}</div>
        </Card>
      </div>

      <SectionTitle action={<button type="button" onClick={() => setInfo(true)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-surface" aria-label="info"><Info size={18} /></button>}>{t('readiness')}</SectionTitle>
      <Card>
        <div className="flex items-center gap-4">
          <Ring value={r.value} label={t('readiness')} />
          <div className="min-w-0 flex-1 space-y-3">
            <div><div className="mb-1 flex justify-between text-sm"><span>{t('coverage')}</span><b>{r.coverage}%</b></div><Bar value={r.coverage} /></div>
            <div><div className="mb-1 flex justify-between text-sm"><span>{t('level')} {lvl.level}</span><b>{s.xp} XP</b></div><Bar value={(lvl.into / lvl.need) * 100} tone="gold" /></div>
            <div className="text-sm text-ink-soft">{t('target')}: <b className="text-ink">{s.profile.target}</b></div>
          </div>
        </div>
      </Card>
      <Sheet open={info} onClose={() => setInfo(false)} title={t('readiness')}><p className="leading-relaxed">{t('readinessHint')}</p></Sheet>
      <p className="mt-6 text-center text-xs text-ink-soft">{t('disclaimer')}</p>
    </Screen>
  );
}
