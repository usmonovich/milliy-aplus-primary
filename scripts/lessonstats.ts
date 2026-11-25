// Per-lesson block statistics for the academy (examples, checks, try, method).
import { ACADEMY } from '../src/content/primary/academy';
for (const l of ACADEMY) {
  const k = l.blocks.map((b) => b.kind);
  const n = k.filter((x) => x === 'example').length;
  const flag = n < 3 || l.check.length < 5 || !k.includes('try') ? '  <-- below standard' : '';
  console.log(l.id.padEnd(28), 'examples', n, 'checks', l.check.length, 'try', k.includes('try') ? 1 : 0, flag);
}
