// Teacher Knowledge Hub: global search, categories, favorites, flashcards, sources.
import { useMemo, useState } from 'react';
import { BookOpen, ChevronRight, Layers, Search, Star } from 'lucide-react';
import { normalizeText } from '../core/engine';
import { setState, useStore } from '../core/store';
import { GLOSSARY, GLOSSARY_CATS, LESSONS, SOURCES, SPEC, lessonFor } from '../content/primary';
import { tx } from '../content/primary/build';
import { Button, Card, Chip, Screen, SectionTitle, navigate, useLang } from '../ui/kit';

export function KnowledgeHome() {
  const { t, u, c, ex } = useLang();
  const favs = useStore((s) => s.favorites);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string>('');
  const nq = normalizeText(q);
  const terms = GLOSSARY.filter((g) => (!cat || (cat === 'fav' ? favs.includes(g.id) : g.cat === cat)) &&
    (!nq || normalizeText([g.term.uz, g.term.ru, g.simple.uz, g.simple.ru, g.pro.uz, g.pro.ru].join(' ')).includes(nq)));
  const lessonHits = nq ? LESSONS.filter((l) => (l.lang === 'both' || l.lang === ex) && normalizeText(c(l.title) + ' ' + l.blocks.map((b) => c(b.body) + (b.items ?? []).map(c).join(' ')).join(' ')).includes(nq)).slice(0, 5) : [];
  const codeHits = nq ? SPEC.codes.filter((x) => normalizeText(x.code + ' ' + x.title.uz + ' ' + x.title.ru).includes(nq)).slice(0, 5) : [];

  return (
    <Screen title={t('navKnow')}>
      <label className="relative block">
        <Search size={20} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" />
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('search')} aria-label={t('search')}
          className="h-14 w-full rounded-2xl border border-line bg-surface pl-11 pr-4 text-base shadow-sm" />
      </label>
      <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4">
        <Chip active={!cat} onClick={() => setCat('')}>{t('all')}</Chip>
        <Chip active={cat === 'fav'} onClick={() => setCat('fav')}>★ {t('favorites')}</Chip>
        {Object.entries(GLOSSARY_CATS).map(([k, v]) => <Chip key={k} active={cat === k} onClick={() => setCat(k)}>{u(tx(v))}</Chip>)}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Card onClick={() => navigate('know/flash')}><Layers className="mb-1 text-emerald" /><div className="font-semibold">{t('flashcards')}</div></Card>
        <Card onClick={() => navigate('know/sources')}><BookOpen className="mb-1 text-brand" /><div className="font-semibold">{t('sources')}</div><div className="text-xs text-ink-soft">{SOURCES.length}</div></Card>
      </div>

      {lessonHits.length > 0 && <><SectionTitle>{t('lessons')}</SectionTitle>
        <div className="grid gap-2">{lessonHits.map((l) => <Card key={l.id} onClick={() => navigate(`lesson/${l.block}`)}><div className="flex items-center gap-2"><span className="font-mono text-xs text-ink-soft">{l.block}</span><span className="flex-1 font-medium">{c(l.title)}</span><ChevronRight size={16} /></div></Card>)}</div></>}
      {codeHits.length > 0 && <><SectionTitle>{t('competency')}</SectionTitle>
        <div className="grid gap-2">{codeHits.map((x) => <Card key={x.code} onClick={() => navigate(`lesson/${x.block}`)}><div className="flex items-center gap-2 text-sm"><span className="font-mono text-xs text-ink-soft">{x.code} · {x.type}</span><span className="flex-1">{u(x.title)}</span></div></Card>)}</div></>}

      <SectionTitle>{t('navKnow')} · {terms.length}</SectionTitle>
      <div className="grid gap-2">
        {terms.map((g) => (
          <Card key={g.id} onClick={() => navigate(`know/${g.id}`)}>
            <div className="flex items-center gap-2"><span className="flex-1 font-semibold">{u(g.term)}</span>{favs.includes(g.id) && <Star size={16} className="text-gold" fill="currentColor" />}<ChevronRight size={16} className="text-ink-soft" /></div>
            <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{u(g.simple)}</p>
          </Card>
        ))}
      </div>
    </Screen>
  );
}

export function TermScreen({ id }: { id: string }) {
  const { t, u, c, ex } = useLang();
  const favs = useStore((s) => s.favorites);
  const g = GLOSSARY.find((x) => x.id === id);
  if (!g) return <Screen title="—" back="know"><Card>—</Card></Screen>;
  const fav = favs.includes(g.id);
  const toggle = () => setState((s) => ({ ...s, favorites: fav ? s.favorites.filter((x) => x !== g.id) : [...s.favorites, g.id] }));
  const blocks: [string, string | undefined][] = [[t('simple'), u(g.simple)], [t('professional'), u(g.pro)], [t('example'), u(g.example)], [t('mistakesT'), g.mistakes && u(g.mistakes)]];
  return (
    <Screen title={u(g.term)} back="know" right={<button type="button" onClick={toggle} aria-pressed={fav} aria-label={t('favorites')} className="grid h-11 w-11 place-items-center rounded-full hover:bg-surface"><Star className={fav ? 'text-gold' : ''} fill={fav ? 'currentColor' : 'none'} /></button>}>
      <div className="space-y-3">
        {blocks.filter(([, v]) => v).map(([k, v]) => <Card key={k}><div className="mb-1 text-sm font-semibold text-brand">{k}</div><p className="leading-relaxed">{v}</p></Card>)}
      </div>
      {g.lessonIds && <><SectionTitle>{t('relatedLessons')}</SectionTitle>
        <div className="grid gap-2">{[...new Set(g.lessonIds.map((lid) => LESSONS.find((l) => l.id === lid)?.block).filter(Boolean))].map((b) => {
          const l = lessonFor(b!, ex);
          return l && <Card key={b} onClick={() => navigate(`lesson/${b}`)}><div className="flex items-center gap-2"><span className="flex-1 font-medium">{c(l.title)}</span><ChevronRight size={16} /></div></Card>;
        })}</div></>}
      <p className="mt-4 text-xs text-ink-soft">{t('source')}: {g.sourceIds.map((s) => SOURCES.find((x) => x.id === s)?.title).join('; ')}</p>
    </Screen>
  );
}

export function Flashcards() {
  const { t, u } = useLang();
  const favs = useStore((s) => s.favorites);
  const deck = useMemo(() => {
    const base = favs.length >= 3 ? GLOSSARY.filter((g) => favs.includes(g.id)) : GLOSSARY;
    return [...base].sort(() => Math.random() - 0.5);
  }, [favs]);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [known, setKnown] = useState(0);
  const g = deck[i % deck.length];
  const next = (k: boolean) => { if (k) setKnown(known + 1); setFlip(false); setI(i + 1); };
  return (
    <Screen title={t('flashcards')} back="know">
      <p className="mb-3 text-sm text-ink-soft">{i}/{deck.length} · {t('knew')}: {known}</p>
      <button type="button" onClick={() => setFlip(!flip)} className="flex min-h-[18rem] w-full flex-col items-center justify-center rounded-3xl border border-line bg-surface p-6 text-center shadow-sm transition active:scale-[.99]" aria-label={t('flip')}>
        {!flip ? <div className="text-2xl font-bold">{u(g.term)}</div> : <div className="fade-in"><p className="text-lg leading-relaxed">{u(g.simple)}</p><p className="mt-3 text-sm text-ink-soft">{u(g.pro)}</p></div>}
        {!flip && <div className="mt-4 text-sm text-ink-soft">{t('flip')}</div>}
      </button>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="secondary" onClick={() => next(false)}>{t('didntKnow')}</Button>
        <Button variant="emerald" onClick={() => next(true)}>{t('knew')}</Button>
      </div>
    </Screen>
  );
}

export function SourcesScreen() {
  const { t } = useLang();
  return (
    <Screen title={t('sources')} back="know">
      <div className="grid gap-2">
        {SOURCES.map((s) => (
          <Card key={s.id}>
            <div className="text-sm font-medium leading-snug">{s.author ? `${s.author} — ` : ''}{s.title}{s.year ? ` (${s.year})` : ''}</div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
              <span className={`rounded px-1.5 py-0.5 ${s.accessed ? 'bg-emerald-soft text-emerald' : 'bg-surface-2 text-ink-soft'}`}>{s.accessed ? t('accessed') : t('notAccessed')}</span>
              {s.checkedAt && <span className="text-ink-soft">{t('checkedAt')}: {s.checkedAt}</span>}
              {s.url && <a href={s.url} target="_blank" rel="noopener noreferrer" className="break-all text-brand underline">{new URL(s.url).host}</a>}
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
}
