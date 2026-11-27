// Lists all hand-written item pairs whose stem word sets have Jaccard similarity >= 0.6 (same rule as the audit).
import { HAND_WRITTEN } from '../src/content/primary';
const norm = (s: string) => s.toLowerCase().replace(/[^a-zа-яё0-9' ]/gi, '').split(/\s+/).filter((w) => w.length > 3);
const hw = HAND_WRITTEN; const sets = hw.map((q) => new Set(norm(q.stem.uz + ' ' + q.stem.ru)));
for (let i = 0; i < hw.length; i++) for (let j = i + 1; j < hw.length; j++) {
  const a = sets[i], b = sets[j]; const inter = [...a].filter((w) => b.has(w)).length;
  const jac = inter / (a.size + b.size - inter || 1);
  if (jac >= 0.6) console.log(jac.toFixed(2), hw[i].id, '~', hw[j].id, '|', hw[i].stem.ru.slice(0, 70), '|', hw[j].stem.ru.slice(0, 70));
}
