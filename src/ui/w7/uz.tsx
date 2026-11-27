// Batch-7 interactive lesson widgets for this course. Each widget: ({ lang }) => JSX, mobile-first (375px),
// uses only React and tailwind tokens (bg-surface-2, border-line, text-ink, text-ink-soft, brand, emerald, gold, danger).
// Do not import from ../kit (avoids a cycle). Register widgets in the exported record; ids must be unique (uz-*).
// The Uzbek course is written in Uzbek only, so the widgets show Uzbek text for both interface languages.
import { useState, type ReactNode } from 'react';
import type { Locale } from '../../core/types';

/* ---------- Uzbek Latin word → sound units (o', g', sh, ch, ng are one sound; ʼ is not a sound) ---------- */
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', "o'"]);
export function uzUnits(word: string): string[] {
  const w = word.toLowerCase().replace(/[ʻʼ’‘`]/g, "'").replace(/[^a-z']/g, '');
  const out: string[] = [];
  for (let i = 0; i < w.length; i++) {
    const two = w.slice(i, i + 2);
    if (two === "o'" || two === "g'" || two === 'sh' || two === 'ch' || two === 'ng') { out.push(two); i++; continue; }
    out.push(w[i]);
  }
  return out;
}
export const isVowel = (u: string) => VOWELS.has(u);

function SoundScheme(_: { lang: Locale }) {
  const words = ['ona', 'shamol', "o'rik", "g'isht", 'tong', 'choynak', "ta'lim", 'kitob'];
  const [w, setW] = useState('shamol');
  const units = uzUnits(w);
  const sounds = units.filter((u) => u !== "'");
  const v = sounds.filter(isVowel).length;
  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-2">
        {words.map((x) => (
          <button key={x} type="button" onClick={() => setW(x)}
            className={`rounded-full border px-3 py-1.5 text-sm ${x === w ? 'border-brand bg-brand-soft text-brand' : 'border-line bg-surface-2 text-ink'}`}>{x}</button>
        ))}
      </div>
      <input value={w} onChange={(e) => setW(e.target.value)} aria-label="So'z"
        className="mb-3 h-12 w-full rounded-xl border border-line bg-surface-2 px-3 text-base font-semibold" />
      <div className="mb-3 flex flex-wrap gap-1.5">
        {units.map((u, i) => u === "'"
          ? <span key={i} className="grid h-11 min-w-[1.75rem] place-items-center rounded-lg border border-dashed border-line text-ink-soft" title="tutuq belgisi">ʼ</span>
          : <span key={i} className={`grid h-11 min-w-[2.75rem] place-items-center rounded-lg px-1 text-base font-bold ${isVowel(u) ? 'bg-danger-soft text-danger' : 'bg-brand-soft text-brand'}`}>{u}</span>)}
      </div>
      <p className="text-sm text-ink-soft">
        Tovushlar: <b className="text-ink">{sounds.length}</b> · unlilar (qizil): <b className="text-ink">{v}</b> · undoshlar (ko'k): <b className="text-ink">{sounds.length - v}</b> · bo'g'inlar: <b className="text-ink">{v}</b>
      </p>
      <p className="mt-1 text-xs text-ink-soft">o', g', sh, ch, ng — bitta tovush; tutuq belgisi (ʼ) tovush emas, oldingi unlini cho'zib yoki uzib aytishni ko'rsatadi.</p>
    </div>
  );
}

/* ---------- Generic sorter: each item gets one of 2–3 labels, instant feedback ---------- */
interface Item { w: string; a: number; why: string }
function Sorter({ labels, items }: { labels: string[]; items: Item[] }) {
  const [pick, setPick] = useState<Record<number, number>>({});
  const done = Object.keys(pick).length;
  const right = items.filter((it, i) => pick[i] === it.a).length;
  return (
    <div>
      <ul className="space-y-2">
        {items.map((it, i) => {
          const p = pick[i];
          const ok = p === it.a;
          return (
            <li key={it.w} className="rounded-xl border border-line bg-surface-2 p-2">
              <div className="mb-1.5 text-base font-semibold text-ink">{it.w}</div>
              <div className="flex flex-wrap gap-1.5">
                {labels.map((l, j) => (
                  <button key={l} type="button" onClick={() => setPick({ ...pick, [i]: j })}
                    className={`rounded-full border px-3 py-1 text-sm ${p === j ? (ok ? 'border-emerald bg-emerald-soft text-emerald' : 'border-danger bg-danger-soft text-danger') : 'border-line text-ink'}`}>{l}</button>
                ))}
              </div>
              {p !== undefined && <p className={`mt-1 text-xs ${ok ? 'text-emerald' : 'text-danger'}`}>{ok ? "To'g'ri: " : `Javob: ${labels[it.a]}. `}{it.why}</p>}
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-sm text-ink-soft">Natija: {right} / {items.length}{done < items.length ? ` (yana ${items.length - done} ta)` : ''}</p>
      {done > 0 && <button type="button" onClick={() => setPick({})} className="mt-1 text-sm text-brand underline">Qaytadan</button>}
    </div>
  );
}

export const IMLO_ITEMS: Item[] = [
  { w: 'qabul + xona', a: 0, why: "-xona yordamida yasalgan qo'shma ot qo'shib yoziladi: qabulxona." },
  { w: 'el + yurt', a: 1, why: "Juft so'z qismlari chiziqcha bilan yoziladi: el-yurt." },
  { w: 'sotib + oldi', a: 2, why: "Qo'shma fe'l qismlari ajratib yoziladi: sotib oldi." },
  { w: 'qip + qizil', a: 1, why: "Belgini kuchaytiruvchi shakl chiziqcha bilan: qip-qizil." },
  { w: "o'n + bir", a: 2, why: "Murakkab sonlar ajratib yoziladi: o'n bir." },
  { w: "ko'z + oynak", a: 0, why: "Vazifasini bildiruvchi qo'shma ot qo'shib yoziladi: ko'zoynak." },
  { w: 'keldi + ku', a: 1, why: "-ku yuklamasi chiziqcha bilan: keldi-ku." },
  { w: 'keldi + mi', a: 0, why: "-mi yuklamasi qo'shib yoziladi: keldimi." },
  { w: 'hech + qaysi', a: 2, why: "hech, har, hamma so'zlari keyingi so'zdan ajratib yoziladi: hech qaysi." },
  { w: 'bir + oz', a: 0, why: "Istisno: biroz, birpas, birmuncha qo'shib yoziladi." },
  { w: 'yildan + yilga', a: 2, why: "Chiqish va jo'nalish kelishigidagi takror ajratib yoziladi: yildan yilga." },
  { w: "op + oq (oq so'zining kuchaytirilgan shakli)", a: 0, why: "Istisno: oppoq qo'shib yoziladi." },
];
export const ALOQA_ITEMS: Item[] = [
  { w: 'mening ukam', a: 0, why: "Qaratqich (-ning) + egalik (-m): moslashuv." },
  { w: 'maktabga bormoq', a: 1, why: "Hokim so'z (bormoq) tobe so'zni jo'nalish kelishigida talab qiladi: boshqaruv." },
  { w: 'yangi daftar', a: 2, why: "Qo'shimchasiz, faqat tartib va ohang bilan: bitishuv." },
  { w: 'tez yugurmoq', a: 2, why: "Ravish fe'lga qo'shimchasiz bog'langan: bitishuv." },
  { w: "do'stim bilan gaplashmoq", a: 1, why: "Ko'makchi orqali bog'lanish ham boshqaruv hisoblanadi." },
  { w: 'daraxtning bargi', a: 0, why: "-ning va -i: moslashuv." },
  { w: 'uchta qalam', a: 2, why: "Son otga qo'shimchasiz bog'langan: bitishuv." },
  { w: "kitobni varaqlamoq", a: 1, why: "Tushum kelishigi talab qilinadi: boshqaruv." },
];
export const MAQSAD_ITEMS: Item[] = [
  { w: 'Ertaga sayohatga boramiz', a: 0, why: "Xabar beradi — darak gap, oxirida nuqta." },
  { w: 'Sen qachon qaytasan', a: 1, why: "So'roq olmoshi bor, javob kutiladi — so'roq gap, oxirida so'roq belgisi." },
  { w: 'Daftaringizni oching', a: 2, why: "Buyruq maylidagi fe'l — buyruq gap." },
  { w: "Kitobni o'qib bo'ldingmi", a: 1, why: "-mi yuklamasi so'roq hosil qiladi." },
  { w: 'Iltimos, derazani yop', a: 2, why: "Iltimos ham buyruq gap orqali ifodalanadi." },
  { w: 'Bahorda daraxtlar gullaydi', a: 0, why: "Voqelik haqida xabar — darak gap." },
];

export const W_UZ: Record<string, (p: { lang: Locale }) => ReactNode> = {
  'uz-tovush-sxema': SoundScheme,
  'uz-imlo-saralash': () => <Sorter labels={["Qo'shib", 'Chiziqcha', 'Ajratib']} items={IMLO_ITEMS} />,
  'uz-aloqa-saralash': () => <Sorter labels={['Moslashuv', 'Boshqaruv', 'Bitishuv']} items={ALOQA_ITEMS} />,
  'uz-gap-maqsad': () => <Sorter labels={['Darak', "So'roq", 'Buyruq']} items={MAQSAD_ITEMS} />,
};
