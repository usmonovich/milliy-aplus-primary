// Course and module map of the academy. Modules are listed in study order;
// only modules with ready lessons are shown. Full plan: CURRICULUM.md.
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
  m('uz-morfem', 'uz-lang', "Morfemika va so'z yasalishi", "Morfemika va so'z yasalishi"),
  m('uz-morf', 'uz-lang', "Morfologiya: so'z turkumlari", "Morfologiya: so'z turkumlari"),
  m('ru-fon', 'ru-lang', 'Фонетика и графика', 'Фонетика и графика'),
  m('ru-morfem', 'ru-lang', 'Состав слова и орфография корня', 'Состав слова и орфография корня'),
  m('ru-morf', 'ru-lang', 'Морфология: части речи', 'Морфология: части речи'),
  m('read-core', 'read', 'Matnni tushunish', 'Понимание текста'),
  m('math-num', 'math', 'Sonlar va sanoq sistemalari', 'Числа и системы счисления'),
  m('math-ops', 'math', 'Arifmetik amallar va ularning xossalari', 'Арифметические действия и их свойства'),
  m('math-eq', 'math', "Tenglamalar va noma'lum komponentlar", 'Уравнения и неизвестные компоненты'),
  m('math-geo', 'math', 'Kattaliklar va geometriya', 'Величины и геометрия'),
  m('math-frac', 'math', 'Ulushlar va kasrlar', 'Доли и дроби'),
  m('math-prob', 'math', 'Matnli masalalar', 'Текстовые задачи'),
  m('ped-found', 'ped', 'Pedagogika va didaktika asoslari', 'Основы педагогики и дидактики'),
  m('ped-lesson', 'ped', 'Darsni rejalashtirish', 'Планирование урока'),
  m('ped-methods', 'ped', "Ta'lim metodlari", 'Методы обучения'),
  m('ped-assess', 'ped', 'Baholash', 'Оценивание'),
  m('psy-age', 'psy', 'Kichik maktab yoshi', 'Младший школьный возраст'),
  m('psy-cog', 'psy', 'Bilish jarayonlari', 'Познавательные процессы'),
  m('psy-person', 'psy', 'Motivatsiya, emotsiyalar va individual farqlar', 'Мотивация, эмоции и индивидуальные различия'),
];
