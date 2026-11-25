// Academy: courses → modules → full lessons.
import { useState } from 'react';
import { BookOpenText, Brain, Calculator, CheckCircle2, ChevronRight, Circle, ClipboardCheck, GraduationCap, Languages, Trophy } from 'lucide-react';
import type { Question } from '../core/types';
import { PracticeSession } from '../ui/practice';
import type { Course, Track } from '../core/types';
import { useStore } from '../core/store';
import { MODULES, academyLesson, coursesFor, lessonsOfCourse, moduleOf } from '../content/primary';
import { Bar, Card, Screen, navigate, useLang } from '../ui/kit';
import { LessonBody } from '../ui/lesson';
import { Stars } from '../ui/fx';
import { starsFor } from '../ui/logic';

const ICON: Record<Track, typeof Brain> = { lang: Languages, read: BookOpenText, math: Calculator, ped: GraduationCap, psy: Brain };
const TONE: Record<Track, string> = { lang: 'bg-brand-soft text-brand', read: 'bg-brand-soft text-brand', math: 'bg-emerald-soft text-emerald', ped: 'bg-gold/15 text-gold', psy: 'bg-gold/15 text-gold' };

/** Course cards for the Learn tab. */
export function CourseList() {
  const { c, ex } = useLang();
  const progress = useStore((s) => s.academy);
  return (
    <div className="grid gap-2">
      {coursesFor(ex).map((course: Course) => {
        const ls = lessonsOfCourse(course.id);
        const done = ls.filter((l) => progress[l.id]?.done).length;
        const Icon = ICON[course.track];
        return (
          <Card key={course.id} onClick={() => navigate(`course/${course.id}`)}>
            <div className="flex items-center gap-3">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${TONE[course.track]}`}><Icon size={24} /></span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold leading-tight">{c(course.title)}</div>
                <div className="mt-1.5 flex items-center gap-2 text-xs text-ink-soft"><div className="flex-1"><Bar value={(done / ls.length) * 100} tone="emerald" /></div>{done}/{ls.length}</div>
              </div>
              <ChevronRight className="shrink-0 text-ink-soft" />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export function CourseScreen({ id }: { id: string }) {
  const { t, c, ex } = useLang();
  const progress = useStore((s) => s.academy);
  const course = coursesFor(ex).find((x) => x.id === id);
  if (!course) return <Screen title="—" back="learn"><Card>—</Card></Screen>;
  const lessons = lessonsOfCourse(id);
  const next = lessons.find((l) => !progress[l.id]?.done);
  const modules = MODULES.filter((m) => lessons.some((l) => l.module === m.id));
  const [test, setTest] = useState<{ title: string; items: Question[] } | null>(null);
  const pick = (ls: typeof lessons, n: number) => [...ls.flatMap((l) => l.check)].sort(() => Math.random() - 0.5).slice(0, n);
  if (test) {
    return (
      <Screen title={test.title} back={true}>
        <PracticeSession items={test.items} mode="test" title={test.title} onDone={() => setTest(null)} />
      </Screen>
    );
  }
  return (
    <Screen title={c(course.title)} back="learn">
      {modules.map((m) => (
        <section key={m.id} className="mb-5">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-ink-soft">{c(m.title)}</h2>
          <div className="grid gap-2">
            {lessons.filter((l) => l.module === m.id).map((l) => {
              const p = progress[l.id];
              const isNext = next?.id === l.id;
              const req = (l.requires ?? []).map(academyLesson).find((r) => r && !progress[r.id]?.done);
              return (
                <Card key={l.id} onClick={() => navigate(`a/${l.id}`)} className={isNext ? 'ring-2 ring-brand/40' : ''}>
                  <div className="flex items-center gap-3">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${p?.done ? 'bg-emerald text-white' : 'bg-surface-2 text-ink-soft'}`}>
                      {p?.done ? <CheckCircle2 size={22} /> : <Circle size={18} />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold leading-tight">{c(l.title)}</div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-ink-soft">
                        {l.stage && <span className="rounded bg-brand-soft px-1.5 font-semibold text-brand">{l.stage === 'F' ? 'Foundation' : l.stage}</span>}
                        <span>{t(`lv_${l.level}`)} · {l.minutes} {t('minutes')}</span>
                        {p && <Stars n={starsFor(p.best / 100)} size={12} />}
                        {isNext && <b className="text-brand">{t('nextLesson')}</b>}
                      </div>
                      {req && <div className="mt-0.5 text-xs text-gold">{t('requiresFirst', { t: c(req.title) })}</div>}
                    </div>
                    <ChevronRight className="shrink-0 text-ink-soft" />
                  </div>
                </Card>
              );
            })}
            {lessons.filter((l) => l.module === m.id).length > 1 && (
              <button type="button" onClick={() => setTest({ title: `${t('moduleCheck')}: ${c(m.title)}`, items: pick(lessons.filter((l) => l.module === m.id), 10) })}
                className="flex min-h-[3rem] items-center gap-2 rounded-2xl border border-dashed border-brand/40 px-4 text-sm font-semibold text-brand">
                <ClipboardCheck size={18} />{t('moduleCheck')}
              </button>
            )}
          </div>
        </section>
      ))}
      {lessons.length > 2 && (
        <button type="button" onClick={() => setTest({ title: t('courseFinal'), items: pick(lessons, 20) })}
          className="mb-4 flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-gold/15 font-semibold text-gold">
          <Trophy size={20} />{t('courseFinal')}
        </button>
      )}
    </Screen>
  );
}

export function AcademyLesson({ id }: { id: string }) {
  const l = academyLesson(id);
  if (!l) return <Screen title="—" back="learn"><Card>—</Card></Screen>;
  const m = moduleOf(l);
  return (
    <Screen back={true} title=" ">
      <LessonBody lesson={l} moduleTitle={m.title} onBack={() => navigate(`course/${m.course}`)} />
    </Screen>
  );
}
