// Prints per-code coverage: spec type/count, hand-written exam items per language, practice items, lessons.
import { SPEC, HAND_WRITTEN, BANK, LESSONS, SCENARIOS, GENERATED_CODES } from '../src/content/primary';
const rows: string[] = [];
for (const c of SPEC.codes) {
  const hw = HAND_WRITTEN.filter((q) => q.code === c.code);
  const exUz = hw.filter((q) => q.pool === 'exam' && (q.lang === 'both' || q.lang === 'uz')).length;
  const exRu = hw.filter((q) => q.pool === 'exam' && (q.lang === 'both' || q.lang === 'ru')).length;
  const gen = BANK.filter((q) => q.code === c.code && q.origin === 'generated' && q.pool === 'exam').length;
  const pr = hw.filter((q) => q.pool === 'practice').length;
  const les = LESSONS.filter((l) => l.codes.includes(c.code)).length;
  const sc = SCENARIOS.filter((s) => s.code === c.code).length;
  rows.push([c.code, c.type, c.count, c.groupId ?? '', exUz, exRu, gen, pr, les, sc, GENERATED_CODES.includes(c.code) ? 'gen' : ''].join('\t'));
}
console.log('code\ttype\tcount\tgroup\texUz\texRu\tgenEx\tpractice\tlessons\tscen\tgenerator');
console.log(rows.join('\n'));
