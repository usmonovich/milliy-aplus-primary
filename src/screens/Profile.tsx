// Profile: statistics & analytics, achievements, settings, certificate info.
import { useRef, useState } from 'react';
import { AlertTriangle, Award, BarChart3, Bug, ChevronRight, Copy, Download, ExternalLink, Flame, Lock, Settings as Cog, Share2, ShieldCheck, Upload } from 'lucide-react';
import { addDays, daysBetween, readiness, streak } from '../core/engine';
import { ACHIEVEMENTS, xpLevel } from '../core/gamification';
import { LOCALES } from '../core/i18n';
import { aiEnabled } from '../core/ai';
import { exportJSON, importJSON, resetAll, setState, today, useStore, type Settings } from '../core/store';
import { ALLOWANCE_LEVELS, ALLOWANCE_RATE, BANK, CERT_FACTS, CERT_INFO_VERSION, HAND_WRITTEN, LESSONS, REGISTRATION_URL, SCENARIOS, SPEC, TIERS, sourceById } from '../content/primary';
import { Bar, Button, Card, Chip, Ring, Screen, SectionTitle, Stat, navigate, useLang } from '../ui/kit';
import { download, getQ, icsReminder, shareOrDownload, variantsReady } from '../ui/logic';
import { Logo, Wordmark } from '../ui/fx';

export function ProfileHome() {
  const { t } = useLang();
  const s = useStore((x) => x);
  const lvl = xpLevel(s.xp);
  const links = [
    { to: 'profile/stats', icon: BarChart3, label: t('stats') },
    { to: 'profile/achievements', icon: Award, label: t('achievements') },
    { to: 'profile/settings', icon: Cog, label: t('settings') },
    { to: 'profile/cert', icon: ShieldCheck, label: t('certInfo') },
    { to: 'profile/report', icon: Bug, label: t('reportError') },
  ];
  return (
    <Screen title={t('navProfile')}>
      <Card tone="brand">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-2xl font-bold">{lvl.level}</div>
          <div className="min-w-0 flex-1">
            <div className="text-sm opacity-80">{t('level')} · {s.xp} XP</div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-gold" style={{ width: `${(lvl.into / lvl.need) * 100}%` }} /></div>
            <div className="mt-2 flex items-center gap-1 text-sm"><Flame size={16} className="text-gold" />{streak(s.activeDays, today())} · {t('target')}: {s.profile.target}</div>
          </div>
        </div>
      </Card>
      <div className="mt-3 grid gap-2">
        {links.map(({ to, icon: Icon, label }) => (
          <Card key={to} onClick={() => navigate(to)}><div className="flex items-center gap-3"><Icon className="text-brand" /><span className="flex-1 font-semibold">{label}</span><ChevronRight className="text-ink-soft" /></div></Card>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-2 text-center">
        <Logo size={36} />
        <Wordmark className="text-sm" />
        <p className="text-xs text-ink-soft">{t('version')} {__APP_VERSION__}</p>
        <p className="text-xs text-ink-soft">{t('disclaimer')}</p>
      </div>
    </Screen>
  );
}

function Heatmap({ days }: { days: string[] }) {
  const set = new Map<string, number>();
  for (const d of days) set.set(d, (set.get(d) ?? 0) + 1);
  const end = today();
  const cells = Array.from({ length: 84 }, (_, i) => addDays(end, i - 83));
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1" role="img" aria-label="activity">
      {cells.map((d) => {
        const n = set.get(d) ?? 0;
        const cls = n === 0 ? 'bg-line' : n < 10 ? 'bg-emerald/40' : n < 30 ? 'bg-emerald/70' : 'bg-emerald';
        return <div key={d} title={`${d}: ${n}`} className={`aspect-square rounded-[3px] ${cls}`} />;
      })}
    </div>
  );
}

/** Interactive line chart of exam results: tap a point to see its details. */
function Trend({ points }: { points: { v: number; label: string; detail: string }[] }) {
  const { t } = useLang();
  const [sel, setSel] = useState<number | null>(points.length ? points.length - 1 : null);
  if (!points.length) return <div className="text-sm text-ink-soft">—</div>;
  const w = 320, h = 140, pad = 18;
  const x = (i: number) => (points.length === 1 ? w / 2 : pad + (i / (points.length - 1)) * (w - 2 * pad));
  const y = (v: number) => h - pad - (v / 100) * (h - 2 * pad);
  const line = points.map((p, i) => `${x(i)},${y(p.v)}`).join(' ');
  const area = `${x(0)},${h - pad} ${line} ${x(points.length - 1)},${h - pad}`;
  const cur = sel !== null ? points[sel] : null;
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full touch-manipulation" role="img" aria-label="trend">
        {[25, 50, 75].map((g) => <line key={g} x1={pad} x2={w - pad} y1={y(g)} y2={y(g)} className="stroke-line" strokeDasharray="3 4" />)}
        {[25, 50, 75].map((g) => <text key={g} x={2} y={y(g) + 4} className="fill-ink-soft text-[9px]">{g}</text>)}
        <polygon points={area} className="fill-brand/10" />
        <polyline points={line} fill="none" strokeWidth="3" className="stroke-brand" strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p, i) => (
          <g key={i} onClick={() => setSel(i)} className="cursor-pointer">
            <circle cx={x(i)} cy={y(p.v)} r="14" fill="transparent" />
            <circle cx={x(i)} cy={y(p.v)} r={sel === i ? 7 : 4.5} className={sel === i ? 'fill-gold stroke-surface' : 'fill-emerald'} strokeWidth="2" />
          </g>
        ))}
      </svg>
      {cur ? <div className="mt-1 flex items-center justify-between gap-2 rounded-xl bg-surface-2 px-3 py-2 text-sm"><span>{cur.label}</span><b>{cur.detail}</b></div>
        : <p className="text-xs text-ink-soft">{t('tapPoint')}</p>}
    </div>
  );
}

/** Side-by-side section bars of two attempts. */
function CompareBars({ a, b, labels }: { a: Record<number, { correct: number; total: number }>; b: Record<number, { correct: number; total: number }>; labels: [string, string] }) {
  const pct = (v?: { correct: number; total: number }) => (v && v.total ? Math.round((v.correct / v.total) * 100) : 0);
  return (
    <div className="space-y-3">
      <div className="flex gap-4 text-xs text-ink-soft"><span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded bg-line" />{labels[0]}</span><span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded bg-brand" />{labels[1]}</span></div>
      {[1, 2, 3].map((sec) => {
        const pa = pct(a[sec]), pb = pct(b[sec]), d = pb - pa;
        return (
          <div key={sec}>
            <div className="mb-1 flex justify-between text-sm"><span>{sec}</span><b className={d > 0 ? 'text-emerald' : d < 0 ? 'text-danger' : ''}>{pb}% {d !== 0 && `(${d > 0 ? '+' : ''}${d})`}</b></div>
            <div className="space-y-1">
              <div className="h-2 overflow-hidden rounded-full bg-surface-2"><div className="grow-x h-full rounded-full bg-line" style={{ width: `${pa}%` }} /></div>
              <div className="h-2 overflow-hidden rounded-full bg-surface-2"><div className="grow-x h-full rounded-full bg-brand" style={{ width: `${pb}%` }} /></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Stats() {
  const { t, u } = useLang();
  const s = useStore((x) => x);
  const log = s.answerLog;
  const ok = log.filter((a) => a.ok).length;
  const timed = log.filter((a) => a.ms > 0);
  const avg = timed.length ? Math.round(timed.reduce((a, b) => a + b.ms, 0) / timed.length / 1000) : 0;
  const r = readiness(SPEC, s.stats);
  const codeStats = Object.entries(s.stats).filter(([, v]) => v.attempts >= 1);
  const weak = [...codeStats].sort((a, b) => a[1].ewma - b[1].ewma).filter(([, v]) => v.ewma < 0.7).slice(0, 5);
  const strong = [...codeStats].sort((a, b) => b[1].ewma - a[1].ewma).filter(([, v]) => v.ewma >= 0.7).slice(0, 5);
  const byType = (type: string) => { const l = log.filter((a) => a.type === type); return l.length ? Math.round((l.filter((a) => a.ok).length / l.length) * 100) : null; };
  const exams = s.attempts.filter((a) => a.report && (a.kind === 'full' || a.kind === 'untimed'));
  const trendPts = exams.map((a) => ({ v: a.report!.percent, label: `${t('variant')} ${a.variant} · ${new Date(a.finishedAt ?? a.startedAt).toLocaleDateString()}`, detail: `${a.report!.correct}/${a.report!.total} · ${a.report!.percent}%` }));
  const [pa, pb] = [exams[exams.length - 2], exams[exams.length - 1]];
  const repeat = Object.values(s.mistakes).filter((m) => m.count > 1).length;
  const title = (code: string) => u(SPEC.codes.find((c) => c.code === code)?.title ?? { uz: code, ru: code });

  return (
    <Screen title={t('stats')} back="profile">
      <div className="flex items-center gap-4">
        <Ring value={r.value} label={t('readiness')} sub={t('readiness')} />
        <div className="grid flex-1 grid-cols-2 gap-2">
          <Stat label={t('solved')} value={log.length} />
          <Stat label={t('accuracy')} value={log.length ? `${Math.round((ok / log.length) * 100)}%` : '—'} />
          <Stat label={t('avgTime')} value={avg ? `${avg} ${t('sec')}` : '—'} />
          <Stat label={t('repeatedErr')} value={repeat} />
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-soft">{t('readinessHint')}</p>

      <SectionTitle>{t('bySection')}</SectionTitle>
      <div className="grid gap-2">
        {SPEC.sections.map((sec) => {
          const l = log.filter((a) => a.code.startsWith(`${sec.id}.`));
          const pct = l.length ? Math.round((l.filter((a) => a.ok).length / l.length) * 100) : 0;
          return <Card key={sec.id}><div className="mb-2 flex justify-between gap-2 text-sm"><span>{sec.id}. {u(sec.title)}</span><b>{l.length ? `${pct}%` : '—'}</b></div><Bar value={pct} tone="emerald" /></Card>;
        })}
      </div>
      <SectionTitle>{t('byType')}</SectionTitle>
      <div className="grid grid-cols-4 gap-2">{['Y-1', 'V-Y-1', 'Y-2', 'O-1'].map((k) => <Stat key={k} label={k} value={byType(k) === null ? '—' : `${byType(k)}%`} />)}</div>

      <SectionTitle>{t('activity')}</SectionTitle>
      <Card><Heatmap days={log.map((a) => a.day)} /></Card>

      <SectionTitle>{t('examTrend')}</SectionTitle>
      <Card><Trend points={trendPts} /></Card>
      {pa && pb && <>
        <SectionTitle>{t('compareExams')}</SectionTitle>
        <Card><CompareBars a={pa.report!.bySection} b={pb.report!.bySection} labels={[new Date(pa.finishedAt ?? 0).toLocaleDateString(), new Date(pb.finishedAt ?? 0).toLocaleDateString()]} /></Card>
      </>}

      <SectionTitle>{t('recommendations')}</SectionTitle>
      <div className="grid gap-2">
        {!weak.length && <Card className="text-sm">{t('recNone')}</Card>}
        {weak.map(([code, v]) => (
          <Card key={code} onClick={() => navigate(`lesson/${code.split('.').slice(0, 2).join('.')}`)}>
            <p className="text-sm leading-relaxed">{t('recWeak', { topic: title(code), acc: Math.round(v.ewma * 100), n: 10 })}</p>
          </Card>
        ))}
      </div>
      {strong.length > 0 && <><SectionTitle>{t('strong')}</SectionTitle>
        <div className="grid gap-2">{strong.map(([code, v]) => <Card key={code}><div className="flex justify-between gap-2 text-sm"><span>{title(code)}</span><b className="text-emerald">{Math.round(v.ewma * 100)}%</b></div></Card>)}</div></>}
    </Screen>
  );
}

export function Achievements() {
  const { t, u } = useLang();
  const got = useStore((s) => s.achievements);
  return (
    <Screen title={t('achievements')} back="profile">
      <p className="mb-3 text-sm text-ink-soft">{t('internalAch')}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a) => {
          const has = got.includes(a.id);
          return (
            <Card key={a.id} tone={has ? 'gold' : undefined}>
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${has ? 'bg-gold text-white' : 'bg-surface-2 text-ink-soft'}`}>{has ? <Award /> : <Lock size={18} />}</span>
                <div><div className="font-semibold">{u(a.title)}</div><div className="text-xs text-ink-soft">{u(a.desc)}</div></div>
              </div>
            </Card>
          );
        })}
      </div>
    </Screen>
  );
}

export function SettingsScreen() {
  const { t, u, ui, ex } = useLang();
  const st = useStore((s) => s.settings);
  const examDate = useStore((s) => s.profile.examDate);
  const minutes = useStore((s) => s.profile.minutes);
  const prep = useStore((s) => s.profile.prep);
  const lastBackup = useStore((s) => s.lastBackup);
  const reviews = useStore((s) => s.reviews);
  const backupOld = !lastBackup || daysBetween(lastBackup, today()) > 14;
  const file = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');
  const [perm, setPerm] = useState(typeof Notification !== 'undefined' ? Notification.permission : 'denied');
  const set = (p: Partial<Settings>) => setState((s) => ({ ...s, settings: { ...s.settings, ...p } }), true);

  return (
    <Screen title={t('settings')} back="profile">
      <div className="space-y-5">
        <div><div className="mb-2 font-semibold">{t('uiLang')}</div><div className="flex flex-wrap gap-2">{LOCALES.map((l) => <Chip key={l.id} active={st.uiLang === l.id} onClick={() => set({ uiLang: l.id })}>{l.flag} {l.label}</Chip>)}</div></div>
        <div><div className="mb-2 font-semibold">{t('examLang')}</div><div className="flex flex-wrap gap-2">{LOCALES.map((l) => <Chip key={l.id} active={st.examLang === l.id} onClick={() => set({ examLang: l.id })}>{l.flag} {l.label}</Chip>)}</div><p className="mt-2 text-sm text-ink-soft">{t('examLangHint')}</p></div>
        <div><div className="mb-2 font-semibold">{t('theme')}</div><div className="flex flex-wrap gap-2">{(['system', 'light', 'dark'] as const).map((th) => <Chip key={th} active={st.theme === th} onClick={() => set({ theme: th })}>{t(th === 'system' ? 'themeSystem' : th === 'light' ? 'themeLight' : 'themeDark')}</Chip>)}</div></div>
        <div><div className="mb-2 font-semibold">{t('fontSize')}</div><div className="flex flex-wrap gap-2">{[1, 1.12, 1.25, 1.4].map((f) => <Chip key={f} active={st.fontScale === f} onClick={() => set({ fontScale: f })}><span style={{ fontSize: `${f}em` }}>A</span></Chip>)}</div></div>
        <div><div className="mb-2 font-semibold">{t('prepMode')}</div><div className="flex flex-wrap gap-2">{(['standard', 'bplus', 'aplus'] as const).map((p) => <Chip key={p} active={prep === p} onClick={() => setState((s) => ({ ...s, profile: { ...s.profile, prep: p, target: p === 'aplus' ? 'A+' : p === 'bplus' ? 'B+' : s.profile.target } }), true)}>{t(`prep_${p}`)}</Chip>)}</div><p className="mt-2 text-sm text-ink-soft">{t(`prepHint_${prep}`)}</p></div>
        <label className="flex min-h-[3rem] items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4"><span className="font-semibold">{t('reduceMotion')}</span><input type="checkbox" className="h-6 w-6 accent-emerald" checked={st.reduceMotion} onChange={(e) => set({ reduceMotion: e.target.checked })} /></label>
        <label className="flex min-h-[3rem] items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4"><span className="font-semibold">{t('haptics')}</span><input type="checkbox" className="h-6 w-6 accent-emerald" checked={st.haptics} onChange={(e) => set({ haptics: e.target.checked })} /></label>
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm font-semibold">{t('examDate')}<input type="date" value={examDate ?? ''} onChange={(e) => setState((s) => ({ ...s, profile: { ...s.profile, examDate: e.target.value || undefined } }))} className="mt-1 h-12 w-full rounded-xl border border-line bg-surface px-3 font-normal" /></label>
          <label className="text-sm font-semibold">{t('dailyMinutes')}<select value={minutes} onChange={(e) => setState((s) => ({ ...s, profile: { ...s.profile, minutes: +e.target.value } }))} className="mt-1 h-12 w-full rounded-xl border border-line bg-surface px-3 font-normal">{[15, 30, 45, 60, 90].map((m) => <option key={m} value={m}>{m} {t('minutes')}</option>)}</select></label>
        </div>

        <Card>
          <div className="mb-2 font-semibold">{t('notifications')}</div>
          <p className="mb-3 text-sm leading-relaxed text-ink-soft">{t('notifHint')}</p>
          <label className="mb-3 flex items-center gap-3 text-sm">{t('reminder')}<input type="time" value={st.reminder} onChange={(e) => set({ reminder: e.target.value })} className="h-11 rounded-xl border border-line bg-surface-2 px-3" /></label>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button variant="secondary" disabled={perm === 'granted' || typeof Notification === 'undefined'} onClick={async () => setPerm(await Notification.requestPermission())}>{t('enableNotif')}{perm === 'granted' ? ' ✓' : ''}</Button>
            <Button variant="secondary" onClick={() => download('milliy-aplus-reminder.ics', icsReminder(st.reminder, 'Milliy A+ Primary'), 'text/calendar')}>{t('addCalendar')}</Button>
          </div>
        </Card>

        <Card>
          <div className="mb-1 font-semibold">{t('backup')}</div>
          <p className="mb-2 text-sm leading-relaxed text-ink-soft">{t('backupHint')}</p>
          <p className={`mb-3 flex items-center gap-1.5 text-sm ${backupOld ? 'text-gold' : 'text-ink-soft'}`}>{backupOld && <AlertTriangle size={16} />}{t('lastBackup')}: <b>{lastBackup ?? t('never')}</b></p>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button variant="secondary" icon={<Share2 size={18} />} onClick={() => void shareOrDownload(`milliy-aplus-progress-${today()}.json`, exportJSON(), 'application/json')}>{t('backupNow')}</Button>
            <Button variant="secondary" icon={<Upload size={18} />} onClick={() => file.current?.click()}>{t('restore')}</Button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-ink-soft">{t('iosTip')}</p>
          <input ref={file} type="file" accept="application/json,.json" className="hidden" onChange={async (e) => { const f = e.target.files?.[0]; if (f) setMsg(importJSON(await f.text()) ? t('imported') : t('importFail')); }} />
          {msg && <p className="mt-2 text-sm" role="status">{msg}</p>}
          <Button full variant="ghost" className="mt-2 !text-danger" onClick={() => confirm(t('resetConfirm')) && resetAll()}>{t('resetData')}</Button>
        </Card>

        <Card>
          <div className="mb-2 font-semibold">{t('tiers')}</div>
          <p className="text-sm text-ink-soft">{t('tierNote')}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-sm">{TIERS.premium.prices.map((p) => <span key={p.months} className="rounded-lg bg-surface-2 px-2 py-1">{p.months} {t('perMonth')} · {p.uzs.toLocaleString('ru-RU')} {ui === 'uz' ? "so'm" : 'сум'}</span>)}</div>
          <p className="mt-3 text-sm text-ink-soft">{aiEnabled() ? '' : t('aiNote')}</p>
        </Card>

        <Card>
          <label className="flex items-center justify-between gap-3"><span className="font-semibold">{t('reviewerMode')}</span><input type="checkbox" className="h-6 w-6 accent-emerald" checked={st.reviewer} onChange={(e) => set({ reviewer: e.target.checked })} /></label>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t('reviewerHint')}</p>
          {Object.keys(reviews).length > 0 && (
            <div className="mt-3 flex items-center justify-between gap-2 text-sm"><span>{t('reviewed')}: <b>{Object.keys(reviews).length}</b></span>
              <Button variant="secondary" icon={<Download size={18} />} onClick={() => void shareOrDownload(`milliy-aplus-reviews-${today()}.json`, JSON.stringify({ app: 'milliy-aplus-primary', version: __APP_VERSION__, reviews }, null, 1), 'application/json')}>{t('exportReviews')}</Button></div>
          )}
        </Card>

        <Card onClick={() => navigate('profile/report')}><div className="flex items-center gap-3"><Bug className="text-danger" /><span className="flex-1 font-semibold">{t('reportError')}</span><ChevronRight className="text-ink-soft" /></div></Card>

        <Card className="text-sm text-ink-soft">
          <div className="font-semibold text-ink">{t('contentStatus')}</div>
          <p className="mt-1">{t('variantsPlanned', { n: 50, k: variantsReady(ex) })}</p>
          <p className="mt-1">{t('lessons')}: {LESSONS.length} · {t('simulator')}: {SCENARIOS.length} · {HAND_WRITTEN.length} + {BANK.length - HAND_WRITTEN.length} gen.</p>
          <p className="mt-1">{t('statusAuto')}</p>
          <p className="mt-1">{t('st_auto_checked')}: {HAND_WRITTEN.filter((q) => q.status === 'auto_checked').length} · {t('st_teacher_reviewed')}: {HAND_WRITTEN.filter((q) => q.status === 'teacher_reviewed' || q.status === 'approved').length}</p>
          <p className="mt-1">{t('version')}: {__APP_VERSION__} · {u({ uz: 'Spetsifikatsiya', ru: 'Спецификация' })} {SPEC.version}</p>
        </Card>
      </div>
    </Screen>
  );
}

export function CertInfo() {
  const { t, u, ui } = useLang();
  const [salary, setSalary] = useState('');
  const [level, setLevel] = useState('B+');
  const [spec, setSpec] = useState(true);
  const [teach, setTeach] = useState(true);
  const sal = Number(salary.replace(/\D/g, '')) || 0;
  const eligible = spec && teach && ALLOWANCE_LEVELS.includes(level);
  return (
    <Screen title={t('certInfo')} back="profile">
      <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="mb-4 flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl bg-brand px-4 font-semibold text-white dark:text-surface-2"><ExternalLink size={18} />{t('registration')}</a>
      <div className="grid gap-2">
        {CERT_FACTS.map((f, i) => (
          <Card key={i}>
            <div className="font-semibold">{u(f.title)}</div>
            <p className="mt-1 text-sm leading-relaxed">{u(f.body)}</p>
            <p className="mt-2 text-xs text-ink-soft">{t('source')}: {sourceById(f.sourceId)?.title} · {t('checkedAt')}: {f.checkedAt}</p>
          </Card>
        ))}
      </div>

      <SectionTitle>{t('allowanceCalc')}</SectionTitle>
      <Card>
        <label className="block text-sm font-semibold">{t('salary')}
          <input inputMode="numeric" value={salary} onChange={(e) => setSalary(e.target.value)} className="mt-1 h-12 w-full rounded-xl border border-line bg-surface-2 px-3 text-lg font-normal" placeholder="5 000 000" /></label>
        <div className="mt-3 text-sm font-semibold">{t('certLevel')}</div>
        <div className="mt-1 flex flex-wrap gap-2">{['C', 'C+', 'B', 'B+', 'A', 'A+'].map((l) => <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Chip>)}</div>
        <label className="mt-3 flex items-center gap-3 text-sm"><input type="checkbox" className="h-6 w-6 accent-emerald" checked={spec} onChange={(e) => setSpec(e.target.checked)} />{t('condSpec')}</label>
        <label className="mt-2 flex items-center gap-3 text-sm"><input type="checkbox" className="h-6 w-6 accent-emerald" checked={teach} onChange={(e) => setTeach(e.target.checked)} />{t('condTeach')}</label>
        <div className={`mt-4 rounded-xl p-3 ${eligible ? 'bg-emerald-soft' : 'bg-surface-2'}`} role="status">
          {eligible ? <><div className="text-sm">{t('allowanceRes')} (15%)</div><div className="text-2xl font-bold">{Math.round(sal * ALLOWANCE_RATE).toLocaleString('ru-RU')} {ui === 'uz' ? "so'm" : 'сум'}</div></> : <div className="text-sm">{t('allowanceNo')}</div>}
        </div>
        <p className="mt-2 text-xs text-ink-soft">{t('allowanceNote')} · {CERT_INFO_VERSION}</p>
      </Card>
    </Screen>
  );
}

/* ---------------- error report ---------------- */

const CATS = ['answer', 'translation', 'tech', 'other'] as const;

export function ReportScreen({ qid }: { qid?: string }) {
  const { t, ui, ex } = useLang();
  const reports = useStore((s) => s.reports);
  const [cat, setCat] = useState<(typeof CATS)[number]>(qid ? 'answer' : 'tech');
  const [id, setId] = useState(qid ?? '');
  const [text, setText] = useState('');
  const [msg, setMsg] = useState('');
  const q = id ? getQ(id.trim()) : undefined;
  const build = () => [
    'Milliy A+ Primary — error report',
    `App version: ${__APP_VERSION__}`,
    `Date: ${new Date().toISOString()}`,
    `Category: ${cat}`,
    `Question: ${id.trim() || '-'}${q ? ` (code ${q.code}, ${q.type}, lang ${q.lang}, status ${q.status}, v${q.version})` : ''}`,
    `Interface / exam language: ${ui} / ${ex}`,
    `Device: ${navigator.userAgent}`,
    `Screen: ${window.innerWidth}x${window.innerHeight}, standalone: ${matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true}`,
    '',
    'Description:',
    text.trim() || '-',
  ].join('\n');
  const save = () => {
    const body = build();
    setState((s) => ({ ...s, reports: [...s.reports.slice(-49), { id: `r-${Date.now()}`, at: new Date().toISOString(), category: cat, qid: id.trim() || undefined, text: body }] }), true);
    return body;
  };
  const copy = async () => {
    const body = save();
    try { await navigator.clipboard.writeText(body); setMsg(t('copied')); } catch { setMsg(body); }
  };
  return (
    <Screen title={t('reportError')} back={true}>
      <p className="mb-4 text-sm leading-relaxed text-ink-soft">{t('reportHint')}</p>
      <div className="mb-2 font-semibold">{t('reportCategory')}</div>
      <div className="mb-4 flex flex-wrap gap-2">{CATS.map((k) => <Chip key={k} active={cat === k} onClick={() => setCat(k)}>{t(`cat_${k}`)}</Chip>)}</div>
      <label className="block font-semibold">{t('reportQid')}
        <input value={id} onChange={(e) => setId(e.target.value)} autoCapitalize="off" autoComplete="off" spellCheck={false} placeholder="s3-v1-311"
          className="mt-1 h-12 w-full rounded-xl border border-line bg-surface px-3 font-mono font-normal" /></label>
      {q && <p className="mt-1 text-xs text-ink-soft">{q.code} · {q.type} · {t(`st_${q.status}`)}</p>}
      <label className="mt-4 block font-semibold">{t('reportText')}
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder={t('reportPlaceholder')}
          className="mt-1 w-full rounded-xl border border-line bg-surface p-3 font-normal leading-relaxed" /></label>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="secondary" icon={<Copy size={18} />} onClick={() => void copy()}>{t('copy')}</Button>
        <Button icon={<Share2 size={18} />} onClick={() => void shareOrDownload(`milliy-aplus-report-${Date.now()}.txt`, save(), 'text/plain')}>{t('share')}</Button>
      </div>
      {msg && <p className="mt-3 whitespace-pre-wrap text-sm" role="status">{msg}</p>}
      {reports.length > 0 && (
        <>
          <SectionTitle>{t('savedReports')}</SectionTitle>
          <div className="space-y-2">
            {[...reports].reverse().slice(0, 10).map((r) => (
              <Card key={r.id} onClick={() => void shareOrDownload(`milliy-aplus-report-${r.id}.txt`, r.text, 'text/plain')}>
                <div className="flex items-center justify-between gap-2 text-sm"><span>{t(`cat_${r.category as (typeof CATS)[number]}`)}{r.qid ? ` · ${r.qid}` : ''}</span><span className="text-xs text-ink-soft">{r.at.slice(0, 10)}</span></div>
              </Card>
            ))}
          </div>
        </>
      )}
    </Screen>
  );
}
