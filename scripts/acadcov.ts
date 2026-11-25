// Prints, per spec code, its topic and how many academy lessons cover it (to plan new lessons).
import { SPEC } from '../src/content/primary';
import { ACADEMY } from '../src/content/primary/academy';
for (const c of SPEC.codes) {
  const n = ACADEMY.filter((l) => l.codes.includes(c.code)).length;
  const t = (c as unknown as { topic?: unknown; title?: unknown }).topic ?? (c as unknown as { title?: unknown }).title;
  console.log([c.code, n, JSON.stringify(t)].join('\t'));
}
