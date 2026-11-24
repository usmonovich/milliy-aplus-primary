// App shell: routing, navigation, theming, reminders, achievement toasts, PWA updates.
import { useEffect, useState } from 'react';
import { Award, BookOpen, ClipboardCheck, Home as HomeIcon, Library, User } from 'lucide-react';
import { ACHIEVEMENTS } from './core/gamification';
import { getState, setState, today, useStore } from './core/store';
import { navigate, useLang, useRoute } from './ui/kit';
import { todayPlan } from './ui/logic';
import { Onboarding } from './screens/Onboarding';
import { Home } from './screens/Home';
import { DailyQuiz, Diagnostic, LearnHome, LessonScreen, PracticeRoute, ProgramScreen, SimList, SimRun } from './screens/Learn';
import { ExamReport, ExamRunner, ExamsHome, Mistakes } from './screens/Exams';
import { Flashcards, KnowledgeHome, SourcesScreen, TermScreen } from './screens/Knowledge';
import { Achievements, CertInfo, ProfileHome, ReportScreen, SettingsScreen, Stats } from './screens/Profile';
import { Logo, Wordmark, haptic } from './ui/fx';

const TABS = [
  { id: 'home', icon: HomeIcon, key: 'navHome' as const, match: ['home'] },
  { id: 'learn', icon: BookOpen, key: 'navLearn' as const, match: ['learn', 'lesson', 'practice', 'sim', 'diagnostic', 'quiz', 'plan'] },
  { id: 'exams', icon: ClipboardCheck, key: 'navExams' as const, match: ['exams', 'exam', 'mistakes'] },
  { id: 'know', icon: Library, key: 'navKnow' as const, match: ['know'] },
  { id: 'profile', icon: User, key: 'navProfile' as const, match: ['profile'] },
];

function Routes({ r }: { r: string[] }) {
  const [a, b, c] = r;
  switch (a) {
    case 'learn': return <LearnHome />;
    case 'lesson': return <LessonScreen key={b} block={b} />;
    case 'practice': return <PracticeRoute key={r.join('/')} args={r.slice(1)} />;
    case 'diagnostic': return <Diagnostic />;
    case 'quiz': return <DailyQuiz />;
    case 'plan': return <ProgramScreen />;
    case 'sim': return b ? <SimRun key={b} id={b} /> : <SimList />;
    case 'exams': return <ExamsHome />;
    case 'exam': return b === 'run' ? <ExamRunner /> : <ExamReport id={c} />;
    case 'mistakes': return <Mistakes key={b ?? 'list'} review={b === 'review'} />;
    case 'know': return b === 'flash' ? <Flashcards /> : b === 'sources' ? <SourcesScreen /> : b ? <TermScreen id={b} /> : <KnowledgeHome />;
    case 'profile':
      return b === 'stats' ? <Stats /> : b === 'achievements' ? <Achievements /> : b === 'settings' ? <SettingsScreen /> : b === 'cert' ? <CertInfo /> : b === 'report' ? <ReportScreen qid={c} /> : <ProfileHome />;
    default: return <Home />;
  }
}

function useAppearance() {
  const st = useStore((s) => s.settings);
  useEffect(() => {
    const root = document.documentElement;
    if (st.theme === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', st.theme);
    const dark = st.theme === 'dark' || (st.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', dark);
    root.style.fontSize = `${17 * st.fontScale}px`;
    root.classList.toggle('reduce-motion', st.reduceMotion);
    root.lang = st.uiLang;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0d111c' : '#1e3a8a');
  }, [st]);
}

/** In-app reminder: when the app is open after the reminder time and today's plan is unfinished. */
function useReminder(message: string) {
  useEffect(() => {
    const check = () => {
      const s = getState();
      const d = today();
      if (!s.profile.onboarded || s.lastNotified === d) return;
      const [h, m] = s.settings.reminder.split(':').map(Number);
      const now = new Date();
      if (now.getHours() * 60 + now.getMinutes() < h * 60 + m) return;
      const done = s.dailyDone[d] ?? [];
      if (todayPlan().every((b) => done.includes(b.key))) return;
      setState((st) => ({ ...st, lastNotified: d }));
      window.dispatchEvent(new CustomEvent('toast', { detail: message }));
      if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
        navigator.serviceWorker?.getRegistration()
          .then((reg) => { if (reg) void reg.showNotification('Milliy A+ Primary', { body: message, icon: './icons/icon-192.png' }); else new Notification('Milliy A+ Primary', { body: message }); })
          .catch(() => undefined);
      }
    };
    check();
    const id = window.setInterval(check, 60_000);
    return () => window.clearInterval(id);
  }, [message]);
}

export default function App() {
  const r = useRoute();
  const onboarded = useStore((s) => s.profile.onboarded);
  const { t, u } = useLang();
  const [toast, setToast] = useState<string | null>(null);
  const [update, setUpdate] = useState(false);
  useAppearance();
  useReminder(t('reminderNow'));

  useEffect(() => {
    const onAch = (e: Event) => {
      const ids = (e as CustomEvent<string[]>).detail;
      const a = ACHIEVEMENTS.find((x) => x.id === ids[0]);
      if (a) { setToast(`${t('achUnlocked')} ${u(a.title)}`); haptic('success'); }
    };
    const onToast = (e: Event) => setToast((e as CustomEvent<string>).detail);
    const onUpd = () => setUpdate(true);
    window.addEventListener('achievement', onAch);
    window.addEventListener('toast', onToast);
    window.addEventListener('sw-update', onUpd);
    return () => { window.removeEventListener('achievement', onAch); window.removeEventListener('toast', onToast); window.removeEventListener('sw-update', onUpd); };
  }, [t, u]);
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(id);
  }, [toast]);

  if (!onboarded) return <Onboarding />;
  const fullscreen = r[0] === 'exam' && r[1] === 'run';
  const activeTab = TABS.find((x) => x.match.includes(r[0]))?.id ?? 'home';

  return (
    <div className="md:flex">
      {!fullscreen && (
        <nav aria-label="main" className="hide-on-kb fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-safe backdrop-blur md:sticky md:top-0 md:h-[100dvh] md:w-60 md:shrink-0 md:border-r md:border-t-0 md:pt-6">
          <div className="hidden items-center gap-2.5 px-5 pb-6 text-[15px] md:flex"><Logo size={34} /><Wordmark /></div>
          <ul className="mx-auto grid max-w-2xl grid-cols-5 md:max-w-none md:grid-cols-1 md:gap-1 md:px-3">
            {TABS.map((tab) => {
              const active = tab.id === activeTab;
              const Icon = tab.icon;
              return (
                <li key={tab.id}>
                  <button type="button" onClick={() => { if (!active) haptic(); navigate(tab.id); }} aria-current={active ? 'page' : undefined}
                    className={`flex h-16 w-full flex-col items-center justify-center gap-1 text-[11px] font-medium md:h-12 md:flex-row md:justify-start md:gap-3 md:rounded-xl md:px-3 md:text-sm ${active ? 'text-brand md:bg-brand-soft' : 'text-ink-soft hover:text-ink'}`}>
                    <Icon size={24} strokeWidth={active ? 2.4 : 1.8} />
                    <span className="max-w-full truncate px-0.5">{t(tab.key)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      <main className="min-w-0 flex-1"><Routes r={r} /></main>
      {toast && (
        <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-safe" role="status" aria-live="polite">
          <div className="mt-3 flex items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-surface shadow-lg pop"><Award size={18} className="text-gold" />{toast}</div>
        </div>
      )}
      {update && (
        <div className="fixed inset-x-0 bottom-24 z-50 flex justify-center px-4 md:bottom-6">
          <button type="button" onClick={() => window.dispatchEvent(new Event('apply-update'))} className="rounded-2xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg dark:text-surface-2">{t('updateReady')}</button>
        </div>
      )}
    </div>
  );
}
