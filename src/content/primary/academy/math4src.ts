// Sources added in batch 7 for this course. accessed: true only if the text was actually read (with url and checkedAt).
import type { Source } from '../../../core/types';

const C = '2026-11-25';
const w = (id: string, title: string, url: string): Source => ({ id, title, url, kind: 'textbook', accessed: true, checkedAt: C });

export const MATH4_SOURCES: Source[] = [
  w('m4-line-en', 'Wikipedia: Line (geometry) — line, ray, line segment', 'https://en.wikipedia.org/wiki/Line_(geometry)'),
  w('m4-ray-ru', 'Википедия: Луч (геометрия) — начало луча, дополнительные лучи, обозначение', 'https://ru.wikipedia.org/wiki/Луч_(геометрия)'),
  w('m4-geo-method-uz', "Geometrik materialni o'rganish metodikasi (oefen.uz referati; nuqta, to'g'ri chiziq, kesma, to'g'ri burchak, aylana va doira)", 'https://oefen.uz/uz/documents/referatlar/umumiy/geometrik-materialni-o-rganish-metodikasi'),
  w('m4-angle-en', 'Wikipedia: Angle — vertex, sides, classification by measure (acute, right, obtuse, straight, reflex, full)', 'https://en.wikipedia.org/wiki/Angle'),
  w('m4-circle-ru', 'Википедия: Окружность — окружность и круг, радиус, хорда, диаметр (D = 2R)', 'https://ru.wikipedia.org/wiki/Окружность'),
  w('m4-euler-en', "Wikipedia: Euler characteristic — Euler's polyhedron formula V − E + F = 2 (cube, tetrahedron)", 'https://en.wikipedia.org/wiki/Euler_characteristic'),
  w('m4-pyramid-ru', 'Википедия: Пирамида (геометрия) — n боковых граней, тетраэдр как треугольная пирамида', 'https://ru.wikipedia.org/wiki/Пирамида_(геометрия)'),
  w('m4-litre-en', 'Wikipedia: Litre — 1 L = 1 dm³ = 1000 cm³ (CGPM 1964), 1 mL = 1 cm³', 'https://en.wikipedia.org/wiki/Litre'),
  w('m4-venn-en', 'Wikipedia: Venn diagram — John Venn (1880), regions for intersection and union', 'https://en.wikipedia.org/wiki/Venn_diagram'),
  w('m4-negation-ru', 'Википедия: Отрицание — таблица истинности отрицания', 'https://ru.wikipedia.org/wiki/Отрицание'),
  w('m4-quantifier-en', 'Wikipedia: Quantifier (logic) — negation of universal and existential statements', 'https://en.wikipedia.org/wiki/Quantifier_(logic)'),
  w('m4-product-rule-ru', 'Википедия: Правило умножения (комбинаторика)', 'https://ru.wikipedia.org/wiki/Правило_умножения_(комбинаторика)'),
  w('m4-pigeonhole-en', 'Wikipedia: Pigeonhole principle — Dirichlet (1834, Schubfachprinzip), generalized form ⌈n/m⌉', 'https://en.wikipedia.org/wiki/Pigeonhole_principle'),
  w('m4-arith-ru', 'Википедия: Арифметическая прогрессия — разность d, формула n-го члена', 'https://ru.wikipedia.org/wiki/Арифметическая_прогрессия'),
];
