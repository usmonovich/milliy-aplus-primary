// Lists exam slots whose candidate count limits the number of variants.
import { slotsFromSpec, candidatesForSlot } from '../src/core/engine';
import { SPEC, BANK } from '../src/content/primary';
for (const lang of ['uz', 'ru'] as const) {
  const short = slotsFromSpec(SPEC).map((s) => [s.codes.join(','), candidatesForSlot(s, BANK, SPEC, lang).length] as const).filter(([, n]) => n < 50);
  console.log(lang, short.length, 'slots below 50:', short.map(([c, n]) => `${c}:${n}`).join(' '));
}
