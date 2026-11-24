// First run: language → interface/exam language → profile → mode → diagnostic.
import { useState, type ReactNode } from 'react';
import { GraduationCap } from 'lucide-react';
import { LOCALES, opts, t as tr } from '../core/i18n';
import { setState, useStore } from '../core/store';
import type { Locale } from '../core/types';
import { Button, Chip, navigate, useLang } from '../ui/kit';

const TARGETS = ['C', 'C+', 'B', 'B+', 'A', 'A+'];
const MINUTES = [15, 30, 45, 60, 90];

export function LanguagePick({ onPick }: { onPick: (l: Locale) => void }) {
  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-5 pt-safe pb-safe fade-in">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-3xl bg-brand text-white shadow-lg dark:text-surface-2"><GraduationCap size={42} /></div>
        <h1 className="text-2xl font-bold">Milliy A+ Primary</h1>
        <p className="mt-2 text-lg text-ink-soft">Tilni tanlang · Выберите язык</p>
      </div>
      <div className="space-y-3">
        {LOCALES.map((l) => (
          <button key={l.id} type="button" onClick={() => onPick(l.id)}
            className="flex min-h-[4.25rem] w-full items-center gap-4 rounded-2xl border-2 border-line bg-surface px-5 text-left text-lg font-semibold transition hover:border-brand active:scale-[.99]">
            <span className="text-3xl" aria-hidden>{l.flag}</span>{l.label}
          </button>
        ))}
      </div>
      <p className="mt-10 text-center text-xs leading-relaxed text-ink-soft">{tr('uz', 'disclaimer')}<br />{tr('ru', 'disclaimer')}</p>
    </div>
  );
}

function Row({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <div className="mb-6">
      <div className="mb-2 font-semibold">{label}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
      {hint && <p className="mt-2 text-sm text-ink-soft">{hint}</p>}
    </div>
  );
}

export function Onboarding() {
  const settings = useStore((s) => s.settings);
  const profile = useStore((s) => s.profile);
  const [step, setStep] = useState(0);
  const { t, ui } = useLang();

  if (step === 0) {
    return <LanguagePick onPick={(l) => { setState((s) => ({ ...s, settings: { ...s.settings, uiLang: l, examLang: l } })); setStep(1); }} />;
  }
  const setP = (p: Partial<typeof profile>) => setState((s) => ({ ...s, profile: { ...s.profile, ...p } }));
  const setS = (p: Partial<typeof settings>) => setState((s) => ({ ...s, settings: { ...s.settings, ...p } }));
  const finish = (diag: boolean) => {
    setState((s) => ({ ...s, profile: { ...s.profile, onboarded: true, prep: s.profile.mode === 3 || s.profile.target === 'B+' ? 'bplus' : s.profile.mode === 4 || s.profile.target === 'A+' ? 'aplus' : 'standard' } }), true);
    navigate(diag ? 'diagnostic' : 'home');
  };

  return (
    <div className="mx-auto max-w-xl px-5 pt-safe fade-in">
      <div className="flex items-center gap-2 pt-4" aria-hidden>
        {[1, 2, 3].map((n) => <div key={n} className={`h-1.5 flex-1 rounded-full ${n <= step ? 'bg-brand' : 'bg-line'}`} />)}
      </div>

      {step === 1 && (
        <section className="pt-6">
          <h1 className="mb-6 text-2xl font-bold">{t('uiLang')}</h1>
          <Row label={t('uiLang')}>
            {LOCALES.map((l) => <Chip key={l.id} active={settings.uiLang === l.id} onClick={() => setS({ uiLang: l.id })}>{l.flag} {l.label}</Chip>)}
          </Row>
          <Row label={t('examLang')} hint={t('examLangHint')}>
            {LOCALES.map((l) => <Chip key={l.id} active={settings.examLang === l.id} onClick={() => setS({ examLang: l.id })}>{l.flag} {l.label}</Chip>)}
          </Row>
        </section>
      )}

      {step === 2 && (
        <section className="pt-6">
          <h1 className="mb-6 text-2xl font-bold">{t('aboutYou')}</h1>
          <Row label={t('experience')}>{opts(ui, 'expOpts').map((o, i) => <Chip key={o} active={profile.experience === i} onClick={() => setP({ experience: i })}>{o}</Chip>)}</Row>
          <Row label={t('selfLevel')}>{opts(ui, 'selfOpts').map((o, i) => <Chip key={o} active={profile.selfLevel === i} onClick={() => setP({ selfLevel: i })}>{o}</Chip>)}</Row>
          <Row label={t('target')}>{TARGETS.map((x) => <Chip key={x} active={profile.target === x} onClick={() => setP({ target: x })}>{x}</Chip>)}</Row>
          <div className="mb-6">
            <label className="mb-2 block font-semibold" htmlFor="exd">{t('examDate')}</label>
            <input id="exd" type="date" value={profile.examDate ?? ''} onChange={(e) => setP({ examDate: e.target.value || undefined })}
              className="h-12 w-full rounded-xl border border-line bg-surface px-3" />
            <p className="mt-2 text-sm text-ink-soft">{t('examDateHint')}</p>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="pt-6">
          <h1 className="mb-6 text-2xl font-bold">{t('mode')}</h1>
          <div className="mb-6 grid gap-2">
            {opts(ui, 'modes').map((o, i) => (
              <button key={o} type="button" onClick={() => setP({ mode: i })} aria-pressed={profile.mode === i}
                className={`min-h-[3.25rem] rounded-xl border-2 px-4 text-left font-medium ${profile.mode === i ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`}>{o}</button>
            ))}
          </div>
          <Row label={t('dailyMinutes')}>{MINUTES.map((m) => <Chip key={m} active={profile.minutes === m} onClick={() => setP({ minutes: m })}>{m} {t('minutes')}</Chip>)}</Row>
          <div className="mb-6">
            <label className="mb-2 block font-semibold" htmlFor="rem">{t('reminder')}</label>
            <input id="rem" type="time" value={settings.reminder} onChange={(e) => setS({ reminder: e.target.value })} className="h-12 w-40 rounded-xl border border-line bg-surface px-3" />
          </div>
        </section>
      )}

      <div className="sticky bottom-0 -mx-5 mt-2 grid gap-2 bg-surface-2/95 px-5 py-4 pb-safe backdrop-blur">
        {step < 3 ? (
          <Button full onClick={() => setStep(step + 1)}>{t('next')}</Button>
        ) : (
          <>
            <Button full onClick={() => finish(true)}>{t('diagnostic')}</Button>
            <Button full variant="secondary" onClick={() => finish(false)}>{t('skipDiagnostic')}</Button>
          </>
        )}
        <Button full variant="ghost" onClick={() => setStep(step - 1)}>{t('back')}</Button>
      </div>
    </div>
  );
}
