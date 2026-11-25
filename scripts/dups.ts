// Lists near-duplicate stem pairs (same metric as the content audit).
import { HAND_WRITTEN } from '../src/content/primary';
const norm = (s: string) => s.toLowerCase().replace(/[^a-zа-яё0-9' ]/gi, '').split(/\s+/).filter((w) => w.length > 3);
const hw = HAND_WRITTEN;
for (let i = 0; i < hw.length; i++) for (let j = i + 1; j < hw.length; j++) {
  const a = new Set(norm(hw[i].stem.uz + ' ' + hw[i].stem.ru)), b = new Set(norm(hw[j].stem.uz + ' ' + hw[j].stem.ru));
  const inter = [...a].filter((w) => b.has(w)).length;
  const jac = inter / (a.size + b.size - inter || 1);
  if (jac >= 0.6) console.log(jac.toFixed(2), hw[i].id, '~', hw[j].id, '|', hw[j].stem.ru.slice(0, 80));
}
for (const q of hw) { if (q.explanation.uz.length <= 20 || q.explanation.ru.length <= 20) console.log('SHORT', q.id); }
