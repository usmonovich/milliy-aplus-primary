// Per-lesson block statistics for the academy (examples, checks, method).
import { ACADEMY } from '../src/content/primary/academy';
for (const l of ACADEMY) {
  const n = l.blocks.filter((b) => b.kind === 'example').length;
  console.log(l.id.padEnd(28), 'examples', n, 'checks', l.check.length);
}
