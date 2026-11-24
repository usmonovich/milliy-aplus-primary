// Prints hand-written stems (ru) per code, to avoid repeating topics in new variants.
import { HAND_WRITTEN } from '../src/content/primary';
const lang = (process.argv[2] ?? 'ru') as 'ru' | 'uz';
const sec = process.argv[3];
for (const q of HAND_WRITTEN.filter((x) => (!sec || x.code.startsWith(sec + '.')) && (x.lang === 'both' || x.lang === lang)))
  console.log(q.code.padEnd(7), q.pool[0], q.stem[lang].replace(/\s+/g, ' ').slice(0, 120));
