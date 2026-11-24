// Question rendering for all four official task types + practice sessions.
import { useMemo, useRef, useState } from 'react';
import { BookOpen, Check, RefreshCw, Sparkles, X } from 'lucide-react';
import { gradeQuestion, mulberry32, shuffle, taskCount } from '../core/engine';
import type { Question, Response } from '../core/types';
import { BLOCKS, sourceById } from '../content/primary';
import { Bar, Button, Card, navigate, useLang } from './kit';
import { checkAchievements, generated, gradeAndRecord, isAnswered, pickPractice } from './logic';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export function TypeBadge({ q }: { q: Question }) {
  return <span className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-ink-soft">{q.code} · {q.type}</span>;
}

/** Renders one item. `shuffleSeed` reorders choices (practice only; exams keep official order). */
export function QuestionView({ q, response, onChange, reveal, shuffleSeed }: {
  q: Question; response?: Response; onChange: (r: Response) => void; reveal?: boolean; shuffleSeed?: number;
}) {
  const { c, t } = useLang();
  const order = useMemo(() => {
    if (q.type === 'O-1') return [];
    const ids = q.choices.map((x) => x.id);
    return shuffleSeed && q.type !== 'Y-2' ? shuffle(ids, mulberry32(shuffleSeed)) : ids;
  }, [q, shuffleSeed]);

  return (
    <div>
      <p className="whitespace-pre-line text-[1.05rem] font-medium leading-relaxed">{c(q.stem)}</p>

      {(q.type === 'Y-1' || q.type === 'V-Y-1') && (
        <div className="mt-4 space-y-2.5" role="radiogroup">
          {order.map((id, i) => {
            const ch = q.choices.find((x) => x.id === id)!;
            const chosen = response?.kind === 'choice' && response.value === id;
            const right = reveal && id === q.answer;
            const wrong = reveal && chosen && id !== q.answer;
            return (
              <button key={id} type="button" role="radio" aria-checked={chosen} disabled={reveal}
                onClick={() => onChange({ kind: 'choice', value: id })}
                className={`flex w-full items-start gap-3 rounded-xl border-2 p-3.5 text-left transition ${right ? 'border-emerald bg-emerald-soft' : wrong ? 'border-danger bg-danger-soft' : chosen ? 'border-brand bg-brand-soft' : 'border-line bg-surface hover:border-brand/50'}`}>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold ${chosen || right ? 'bg-brand text-white dark:text-surface-2' : 'bg-surface-2'} ${right ? '!bg-emerald' : ''} ${wrong ? '!bg-danger' : ''}`}>
                  {right ? <Check size={16} /> : wrong ? <X size={16} /> : LETTERS[i]}
                </span>
                <span className="pt-1 leading-snug">{c(ch.text)}</span>
              </button>
            );
          })}
        </div>
      )}

      {q.type === 'Y-2' && (
        <div className="mt-4 space-y-4">
          <ul className="space-y-1.5">
            {q.choices.map((ch) => (
              <li key={ch.id} className="flex gap-2 rounded-xl bg-surface-2 p-2.5 text-sm"><b className="w-5 shrink-0">{ch.id})</b><span>{c(ch.text)}</span></li>
            ))}
          </ul>
          {q.stems.map((st) => {
            const val = response?.kind === 'match' ? response.value[st.id] : undefined;
            return (
              <div key={st.id} className="rounded-xl border border-line bg-surface p-3">
                <p className="mb-2 text-sm"><b>{st.id}.</b> {c(st.text)}</p>
                <div className="flex flex-wrap gap-2">
                  {q.choices.map((ch) => {
                    const sel = val === ch.id;
                    const right = reveal && ch.id === st.answer;
                    const wrong = reveal && sel && ch.id !== st.answer;
                    return (
                      <button key={ch.id} type="button" disabled={reveal} aria-pressed={sel} aria-label={`${st.id} → ${ch.id}`}
                        onClick={() => onChange({ kind: 'match', value: { ...(response?.kind === 'match' ? response.value : {}), [st.id]: ch.id } })}
                        className={`h-11 w-11 rounded-xl border-2 font-bold ${right ? 'border-emerald bg-emerald text-white' : wrong ? 'border-danger bg-danger text-white' : sel ? 'border-brand bg-brand text-white dark:text-surface-2' : 'border-line bg-surface-2'}`}>
                        {ch.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {q.type === 'O-1' && (
        <input
          className={`mt-4 h-14 w-full rounded-xl border-2 bg-surface px-4 text-lg ${reveal ? (gradeQuestion(q, response, 'uz') || gradeQuestion(q, response, 'ru') ? 'border-emerald' : 'border-danger') : 'border-line focus:border-brand'}`}
          value={response?.kind === 'open' ? response.value : ''} disabled={reveal} placeholder={t('typeAnswer')} aria-label={t('typeAnswer')}
          autoComplete="off" autoCapitalize="off" spellCheck={false}
          onChange={(e) => onChange({ kind: 'open', value: e.target.value })} />
      )}
    </div>
  );
}

export function Feedback({ q, response }: { q: Question; response?: Response }) {
  const { c, t, ex } = useLang();
  const got = gradeQuestion(q, response, ex), total = taskCount(q);
  const ok = got === total;
  const src = q.sourceIds.map((id) => sourceById(id)?.title).filter(Boolean).slice(0, 2);
  return (
    <div className={`mt-4 rounded-2xl border p-4 pop ${ok ? 'border-emerald/40 bg-emerald-soft' : 'border-danger/30 bg-danger-soft'}`} role="status">
      <div className="mb-2 flex items-center gap-2 font-semibold">
        {ok ? <Check size={20} className="text-emerald" /> : <X size={20} className="text-danger" />}
        {ok ? t('correct') : got > 0 ? `${t('partly')}: ${got}/${total}` : t('wrong')}
      </div>
      {!ok && q.type !== 'Y-2' && (
        <p className="mb-2 text-sm"><span className="text-ink-soft">{t('rightAnswer')}: </span>
          <b>{q.type === 'O-1' ? c(q.answer) : c(q.choices.find((x) => x.id === q.answer)!.text)}</b></p>
      )}
      <p className="text-sm leading-relaxed">{c(q.explanation)}</p>
      {q.pitfalls && <p className="mt-2 text-sm text-ink-soft">{c(q.pitfalls)}</p>}
      <p className="mt-3 text-xs text-ink-soft">{t('competency')}: {c(q.competency)} · {q.code}</p>
      {src.length > 0 && <p className="mt-1 text-xs text-ink-soft">{t('source')}: {src.join('; ')}</p>}
    </div>
  );
}

/** A run of items with immediate feedback ("learn") or feedback at the end ("test"). */
export function PracticeSession({ items: initial, mode = 'learn', title, onDone, block }: {
  items: Question[]; mode?: 'learn' | 'test'; title: string; onDone?: (score: { correct: number; total: number }) => void; block?: string;
}) {
  const { t, ex, c } = useLang();
  const [items, setItems] = useState(initial);
  const [i, setI] = useState(0);
  const [resp, setResp] = useState<Record<string, Response>>({});
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);
  const started = useRef(Date.now());
  const seed = useRef(Date.now() % 9973);

  if (!items.length) return <Card>{t('emptyPractice')}</Card>;
  const q = items[i];

  const submit = () => {
    const { got, total } = gradeAndRecord(q, resp[q.id], ex, Date.now() - started.current);
    setScore((s) => ({ correct: s.correct + (got === total ? 1 : 0), total: s.total + 1 }));
    if (mode === 'learn') setRevealed(true);
    else advance();
  };
  const advance = () => {
    setRevealed(false);
    started.current = Date.now();
    if (i + 1 < items.length) setI(i + 1);
    else { setFinished(true); checkAchievements(); }
  };
  const similar = () => {
    const g = generated(q.code) ?? pickPractice(ex, { block: q.code.split('.').slice(0, 2).join('.'), n: 3 }).find((x) => x.id !== q.id && !items.includes(x));
    if (g) setItems((xs) => [...xs.slice(0, i + 1), g, ...xs.slice(i + 1)]);
    advance();
  };

  if (finished) {
    const pct = score.total ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <Card className="text-center pop">
        <Sparkles className="mx-auto mb-2 text-gold" size={36} />
        <h2 className="text-xl font-bold">{t('sessionDone')}</h2>
        <p className="mt-1 text-4xl font-bold text-emerald">{score.correct}/{score.total}</p>
        <p className="text-sm text-ink-soft">{pct}%</p>
        <div className="mt-4 grid gap-2">
          <Button full onClick={() => onDone?.(score)}>{t('continue')}</Button>
        </div>
      </Card>
    );
  }

  const blk = block ?? q.code.split('.').slice(0, 2).join('.');
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <div className="flex-1"><Bar value={(i / items.length) * 100} tone="emerald" label={title} /></div>
        <span className="text-sm tabular-nums text-ink-soft">{i + 1}/{items.length}</span>
      </div>
      <Card>
        <div className="mb-3 flex flex-wrap items-center gap-2"><TypeBadge q={q} /><span className="text-xs text-ink-soft">{BLOCKS[blk] ? c(BLOCKS[blk]) : ''}</span></div>
        <QuestionView key={q.id} q={q} response={resp[q.id]} onChange={(r) => !revealed && setResp({ ...resp, [q.id]: r })} reveal={revealed} shuffleSeed={seed.current + i} />
        {revealed && <Feedback q={q} response={resp[q.id]} />}
      </Card>
      <div className="action-bar grid gap-2">
        {!revealed ? (
          <Button full onClick={submit} disabled={!isAnswered(q, resp[q.id])}>{t('check')}</Button>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {gradeQuestion(q, resp[q.id], ex) < taskCount(q) ? (
              <Button variant="secondary" icon={<RefreshCw size={18} />} onClick={similar}>{t('similar')}</Button>
            ) : (
              <Button variant="secondary" icon={<BookOpen size={18} />} onClick={() => navigate(`lesson/${blk}`)}>{t('openLesson')}</Button>
            )}
            <Button onClick={advance}>{t('continue')}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
