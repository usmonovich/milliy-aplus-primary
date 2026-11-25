// Course and module map of the academy. Only modules with ready lessons are
// shown in the app; the full planned syllabus is in CURRICULUM.md.
import type { Course, Module } from '../../../core/types';
import { tx } from '../build';

export const COURSES: Course[] = [
  { id: 'uz-lang', track: 'lang', lang: 'uz', section: 1, title: tx(["Ona tili va uni o'qitish metodikasi", "Ona tili va uni o'qitish metodikasi"]) },
  { id: 'ru-lang', track: 'lang', lang: 'ru', section: 1, title: tx(['Русский язык и методика его преподавания', 'Русский язык и методика его преподавания']) },
  { id: 'read', track: 'read', lang: 'both', section: 1, title: tx(["O'qish savodxonligi", 'Читательская грамотность']) },
  { id: 'math', track: 'math', lang: 'both', section: 2, title: tx(["Matematika va uni o'qitish metodikasi", 'Математика и методика её преподавания']) },
  { id: 'ped', track: 'ped', lang: 'both', section: 3, title: tx(['Pedagogika va pedagogik mahorat', 'Педагогика и педагогическое мастерство']) },
  { id: 'psy', track: 'psy', lang: 'both', section: 3, title: tx(['Yosh va pedagogik psixologiya', 'Возрастная и педагогическая психология']) },
];

const m = (id: string, course: string, uz: string, ru: string): Module => ({ id, course, title: tx([uz, ru]) });

export const MODULES: Module[] = [
  m('uz-fon', 'uz-lang', 'Fonetika va grafika', 'Fonetika va grafika'),
  m('uz-morf', 'uz-lang', 'Morfologiya: so\'z turkumlari', "Morfologiya: so'z turkumlari"),
  m('ru-fon', 'ru-lang', 'Фонетика и графика', 'Фонетика и графика'),
  m('ru-morf', 'ru-lang', 'Морфология: части речи', 'Морфология: части речи'),
  m('read-core', 'read', "Matnni tushunish", 'Понимание текста'),
  m('math-geo', 'math', 'Kattaliklar va geometriya', 'Величины и геометрия'),
  m('math-frac', 'math', 'Ulushlar va kasrlar', 'Доли и дроби'),
  m('ped-assess', 'ped', 'Baholash', 'Оценивание'),
  m('psy-cog', 'psy', 'Bilish jarayonlari', 'Познавательные процессы'),
];
