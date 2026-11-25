// Mathematics — batch 3: equations, unknown components, divisibility and its tests,
// comparing fractions, operations with fractions, time, motion problems.
// Numeric answers are re-solved independently in content.test.ts.
import { B, cq, lesson, oq } from './build';

const S = ['math14', 'bikbayeva', 'jumayev2020', 'tojiyev2012'];
const M = (lessonId: string) => ({ lang: 'both' as const, lesson: lessonId, src: S });

/* ======================= 1. Equations from zero ======================= */
const EQ = 'math-equations';
export const MATH_EQUATIONS = lesson({
  id: EQ, module: 'math-eq', level: 'intro', stage: 'C', minutes: 22, codes: ['2.1.4', '2.1.5', '2.3.4'], requires: ['math-add-sub', 'math-mult-div'], sourceIds: S,
  title: ['Tenglama: noldan boshlab', 'Уравнение: с нуля'],
  blocks: [
    B.intro(["Bola «□ + 3 = 7» darchasiga son qo'yganda u allaqachon tenglama yechyapti. 2–4-sinflarda darcha o'rnini harf ($x$) egallaydi, lekin mohiyat o'zgarmaydi: qaysi son tenglikni to'g'ri qiladi?", 'Когда ребёнок вписывает число в окошко «□ + 3 = 7», он уже решает уравнение. Во 2–4 классах окошко заменяет буква ($x$), но суть не меняется: какое число делает равенство верным?']),
    B.definition(["**Tenglik** — ikki ifoda «=» belgisi bilan bog'langan yozuv ($5 + 3 = 8$). **Tenglama** — noma'lum son (harf) qatnashgan tenglik ($x + 3 = 8$). **Tenglamaning ildizi** — harf o'rniga qo'yilganda to'g'ri tenglik hosil qiladigan son. **Tenglamani yechish** — uning ildizini topish. **Tekshirish** — topilgan sonni tenglamaga qo'yib ko'rish.", '**Равенство** — запись, где два выражения соединены знаком «=» ($5 + 3 = 8$). **Уравнение** — равенство с неизвестным числом (буквой) ($x + 3 = 8$). **Корень уравнения** — число, при подстановке которого вместо буквы получается верное равенство. **Решить уравнение** — найти его корень. **Проверка** — подстановка найденного числа в уравнение.']),
    B.table([['Yozuv', 'Запись'], ['Nima bu', 'Что это'], ['Nega', 'Почему']], [
      ['$7 + 5 = 12$', ['Sonli tenglik', 'Числовое равенство'], ["Noma'lum yo'q", 'Нет неизвестного']],
      ['$x + 5$', ['Harfli ifoda', 'Буквенное выражение'], ["«=» belgisi yo'q", 'Нет знака «=»']],
      ['$x + 5 = 12$', ['Tenglama', 'Уравнение'], ["Noma'lum bor va tenglik", 'Есть неизвестное и равенство']],
      ['$x + 5 > 12$', ['Tengsizlik', 'Неравенство'], ["«=» o'rniga «>»", 'Вместо «=» знак «>»']],
    ], ['Tenglama va boshqa yozuvlar', 'Уравнение и похожие записи']),
    B.why(["Tenglamani **tarozi** sifatida tasavvur qiling: chap pallada $x$ va 5 ta tosh, o'ngda 12 ta tosh, tarozi muvozanatda. Har ikki palladan 5 tadan tosh olsak, muvozanat buzilmaydi: chapda faqat $x$, o'ngda 7. Demak, $x = 7$. Boshlang'ich sinfda bu harakat «noma'lum qo'shiluvchini topish qoidasi» ko'rinishida yoziladi: $x = 12 - 5$.", 'Представьте уравнение как **весы**: на левой чаше $x$ и 5 гирек, на правой — 12, весы в равновесии. Если с обеих чаш снять по 5 гирек, равновесие сохранится: слева только $x$, справа 7. Значит, $x = 7$. В начальной школе это действие записывается как правило нахождения неизвестного слагаемого: $x = 12 - 5$.'], undefined, ['Tarozi modeli', 'Модель весов']),
    B.formula('x + a = b \\;\\Rightarrow\\; x = b - a', [["$x$ — noma'lum qo'shiluvchi, $a$ — ma'lum qo'shiluvchi, $b$ — yig'indi", '$x$ — неизвестное слагаемое, $a$ — известное слагаемое, $b$ — сумма']], ["Qo'shish va ayirish o'zaro teskari amallar bo'lgani uchun noma'lumni teskari amal bilan topamiz.", 'Сложение и вычитание — взаимно обратные действия, поэтому неизвестное находим обратным действием.']),
    B.rule(["Yechish tartibi: 1) noma'lum qaysi komponent ekanini aniqlang (qo'shiluvchi, kamayuvchi, ko'paytuvchi...); 2) qoidani ayting; 3) hisoblang; 4) **albatta tekshiring** — ildizni qo'yib, tenglik to'g'riligini ko'ring.", 'Порядок решения: 1) определите, каким компонентом является неизвестное (слагаемое, уменьшаемое, множитель...); 2) назовите правило; 3) вычислите; 4) **обязательно проверьте** — подставьте корень и убедитесь, что равенство верно.']),
    B.example(['$x + 7 = 15$ tenglamani yeching.', 'Решите уравнение $x + 7 = 15$.'], [
      ["$x$ — noma'lum qo'shiluvchi. Noma'lum qo'shiluvchini topish uchun yig'indidan ma'lum qo'shiluvchini ayiramiz.", '$x$ — неизвестное слагаемое. Чтобы найти неизвестное слагаемое, из суммы вычитаем известное слагаемое.'],
      { s: ['Hisoblash:', 'Вычисление:'], tex: 'x = 15 - 7 = 8' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '8 + 7 = 15 \\;\\checkmark' },
    ], ['$x = 8$', '$x = 8$']),
    B.example(['$30 - x = 12$ tenglamani yeching.', 'Решите уравнение $30 - x = 12$.'], [
      ["$x$ — ayriluvchi (30 dan ayirilayotgan son). Noma'lum ayriluvchini topish uchun kamayuvchidan ayirmani ayiramiz.", '$x$ — вычитаемое (его вычитают из 30). Чтобы найти неизвестное вычитаемое, из уменьшаемого вычитаем разность.'],
      { s: ['Hisoblash:', 'Вычисление:'], tex: 'x = 30 - 12 = 18' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '30 - 18 = 12 \\;\\checkmark' },
    ], ['$x = 18$', '$x = 18$'], ["Muqobil: kesma modeli — butun 30, bir qismi 12, ikkinchi qismi $x$: $30 - 12$.", 'Другой способ: модель отрезка — целое 30, одна часть 12, другая $x$: $30 - 12$.']),
    B.example(['$x \\cdot 4 = 36$ tenglamani yeching.', 'Решите уравнение $x \\cdot 4 = 36$.'], [
      ["$x$ — noma'lum ko'paytuvchi. Uni topish uchun ko'paytmani ma'lum ko'paytuvchiga bo'lamiz.", '$x$ — неизвестный множитель. Чтобы его найти, произведение делим на известный множитель.'],
      { s: ['Hisoblash:', 'Вычисление:'], tex: 'x = 36 : 4 = 9' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '9 \\cdot 4 = 36 \\;\\checkmark' },
    ], ['$x = 9$', '$x = 9$']),
    B.exception(null, [
      ["Tenglamaning ildizi bo'lmasligi mumkin (natural sonlar ichida): $x + 9 = 4$ — boshlang'ich sinfda bunday son yo'q.", 'Уравнение может не иметь корня (среди натуральных чисел): $x + 9 = 4$ — в начальной школе такого числа нет.'],
      ["$x \\cdot 0 = 0$ — istalgan son ildiz; $x \\cdot 0 = 5$ — ildiz yo'q. Shuning uchun nolga bo'lish ma'nosiz.", '$x \\cdot 0 = 0$ — корень любое число; $x \\cdot 0 = 5$ — корней нет. Поэтому на нуль делить нельзя.'],
    ]),
    B.mistake(null, [
      ["Amalni ko'r-ko'rona takrorlash: $x - 15 = 40$ da $x = 40 - 15 = 25$ (to'g'ri: $x = 40 + 15 = 55$).", 'Механически повторять знак: в $x - 15 = 40$ писать $x = 40 - 15 = 25$ (верно: $x = 40 + 15 = 55$).'],
      ["Tekshirishni tashlab ketish — xato sezilmay qoladi.", 'Пропускать проверку — ошибка остаётся незамеченной.'],
      ["Ildiz o'rniga butun tenglikni javob deb yozish: «8 + 7 = 15».", 'Записывать в ответ всё равенство вместо корня: «8 + 7 = 15».'],
    ]),
    B.try(oq('a-m-eq-t1', '2.1.4', { ...M(EQ), d: 1, steps: [["Noma'lum qo'shiluvchi: $x = 50 - 18$.", 'Неизвестное слагаемое: $x = 50 - 18$.']] },
      ["$x + 18 = 50$ bo'lsa, $x$ nechaga teng? (son)", 'Если $x + 18 = 50$, чему равен $x$? (число)'], '32', ['$50 - 18 = 32$; tekshirish: $32 + 18 = 50$.', '$50 - 18 = 32$; проверка: $32 + 18 = 50$.'], {}, 32)),
    B.apply(["Tenglama — masalaning qisqa yozuvi: «Savatda bir nechta olma bor edi, yana 7 ta solindi, 15 ta bo'ldi» → $x + 7 = 15$. Teskari masalalar tuzishda va mantiqiy topshiriqlarda shu model ishlatiladi.", 'Уравнение — краткая запись задачи: «В корзине было несколько яблок, положили ещё 7, стало 15» → $x + 7 = 15$. Эта модель используется в обратных задачах и логических заданиях.']),
    B.method(["Tenglamani bolalarga qanday o'rgatish:", 'Как учить детей уравнениям:'], [
      ["Darchadan harfga: avval □, keyin $x$ — «harf — yashiringan son».", 'От окошка к букве: сначала □, затем $x$ — «буква — спрятанное число».'],
      ["Tarozi yoki «butun va qismlar» kesmasi — qaysi amalni bajarishni rasm ko'rsatadi.", 'Весы или отрезок «целое и части» — рисунок подсказывает действие.'],
      ["Sonli uchlik: $8 + 7 = 15$ dan to'rt tenglik ($15 - 7 = 8$, $15 - 8 = 7$...) — qoidalarning manbai.", 'Тройка чисел: из $8 + 7 = 15$ получить четыре равенства ($15 - 7 = 8$, $15 - 8 = 7$...) — источник правил.'],
      ["Har bir tenglamadan keyin tekshirish — odat.", 'После каждого уравнения — проверка, как привычка.'],
    ]),
    B.summary(null, [
      ["Tenglama — noma'lumli tenglik; ildiz — uni to'g'ri qiladigan son.", 'Уравнение — равенство с неизвестным; корень — число, делающее его верным.'],
      ["Noma'lum teskari amal bilan topiladi.", 'Неизвестное находят обратным действием.'],
      ["Tekshirish — yechimning majburiy qismi.", 'Проверка — обязательная часть решения.'],
    ]),
  ],
  check: [
    oq('a-m-eq-c1', '2.1.4', { ...M(EQ), steps: [["$x$ — qo'shiluvchi: $x = 63 - 27$.", '$x$ — слагаемое: $x = 63 - 27$.']] },
      ["Qutida bir nechta qalam bor edi; yana 27 ta solingach, 63 ta bo'ldi: $x + 27 = 63$. Qutida dastlab nechta qalam bo'lgan? (son)", 'В коробке было несколько карандашей; когда положили ещё 27, стало 63: $x + 27 = 63$. Сколько карандашей было сначала? (число)'], '36', ['$63 - 27 = 36$; tekshirish: $36 + 27 = 63$.', '$63 - 27 = 36$; проверка: $36 + 27 = 63$.'], {}, 36),
    cq('a-m-eq-c2', '2.1.4', { ...M(EQ) }, ['Qaysi yozuv tenglama?', 'Какая запись является уравнением?'],
      [['$x - 4 = 10$'], ['$14 - 4 = 10$', ["Noma'lum yo'q — sonli tenglik.", 'Нет неизвестного — числовое равенство.']], ['$x - 4$', ["Tenglik belgisi yo'q — ifoda.", 'Нет знака равенства — выражение.']], ['$x - 4 < 10$', ['Bu tengsizlik.', 'Это неравенство.']]],
      'A', ["Tenglama = noma'lum + tenglik belgisi.", 'Уравнение = неизвестное + знак равенства.']),
    oq('a-m-eq-c3', '2.1.4', { ...M(EQ), steps: [["$x$ — ayriluvchi: $x = 84 - 39$.", '$x$ — вычитаемое: $x = 84 - 39$.']] },
      ['$84 - x = 39$ tenglamaning ildizini toping. (son)', 'Найдите корень уравнения $84 - x = 39$. (число)'], '45', ['$84 - 39 = 45$; tekshirish: $84 - 45 = 39$.', '$84 - 39 = 45$; проверка: $84 - 45 = 39$.'], {}, 45),
    cq('a-m-eq-c4', '2.1.5', { ...M(EQ) }, ['Qaysi son $x \\cdot 8 = 56$ tenglamaning ildizi?', 'Какое число — корень уравнения $x \\cdot 8 = 56$?'],
      [['7'], ['48', ["56 − 8: ko'paytirish o'rniga ayirish ishlatilgan.", '56 − 8: вместо деления выполнено вычитание.']], ['64', ["56 + 8: teskari amal noto'g'ri tanlangan.", '56 + 8: неверно выбрано обратное действие.']], ['448', ["56 · 8: bo'lish o'rniga ko'paytirilgan.", '56 · 8: умножили вместо деления.']]],
      'A', ['$56 : 8 = 7$; tekshirish: $7 \\cdot 8 = 56$.', '$56 : 8 = 7$; проверка: $7 \\cdot 8 = 56$.']),
    cq('a-m-eq-c5', '2.3.4', { ...M(EQ) }, ["O'quvchi $x - 15 = 40$ ni $x = 25$ deb yechdi. Eng samarali yordam?", 'Ученик решил $x - 15 = 40$ и получил $x = 25$. Как помочь эффективнее всего?'],
      [[["25 ni tenglamaga qo'yib tekshirishni so'rash ($25 - 15 = 10 \\ne 40$) va kesmada butun (kamayuvchi) ni ko'rsatish", 'Попросить подставить 25 ($25 - 15 = 10 \\ne 40$) и показать на отрезке, что неизвестное — целое (уменьшаемое)']], [["To'g'ri javobni aytib, keyingisiga o'tish", 'Сказать правильный ответ и идти дальше'], ["Bola xatosining sababini tushunmaydi.", 'Ребёнок не поймёт причину ошибки.']], [["Qoidani besh marta yozdirish", 'Переписать правило пять раз'], ["Mexanik takror tushunish bermaydi.", 'Механическое повторение не даёт понимания.']], [["Tenglamalarni vaqtincha bermaslik", 'Временно не давать уравнений'], ["Muammo hal bo'lmaydi.", 'Проблема не решится.']]],
      'A', ["Tekshirish xatoni o'quvchining o'zi ko'radigan qiladi, model esa to'g'ri amalni tushuntiradi: $x = 40 + 15 = 55$.", 'Проверка делает ошибку видимой самому ученику, а модель объясняет нужное действие: $x = 40 + 15 = 55$.']),
  ],
});

/* ======================= 2. Unknown components ======================= */
const UK = 'math-unknown';
export const MATH_UNKNOWN = lesson({
  id: UK, module: 'math-eq', level: 'core', stage: 'B', minutes: 25, codes: ['2.1.4', '2.1.5', '2.1.6', '2.3.4'], requires: [EQ], sourceIds: S,
  title: ["To'rt amalning noma'lum komponentlari", 'Неизвестные компоненты четырёх действий'],
  blocks: [
    B.intro(["Oltita qoida — noma'lum qo'shiluvchi, kamayuvchi, ayriluvchi, ko'paytuvchi, bo'linuvchi va bo'luvchini topish — yodlash uchun emas. Ularning hammasi bitta g'oyadan kelib chiqadi: har bir amalning teskari amali bor.", 'Шесть правил — нахождение неизвестного слагаемого, уменьшаемого, вычитаемого, множителя, делимого и делителя — не для зубрёжки. Все они вытекают из одной идеи: у каждого действия есть обратное.']),
    B.definition(["**Komponentlar**: qo'shishda — qo'shiluvchilar va yig'indi; ayirishda — kamayuvchi, ayriluvchi, ayirma; ko'paytirishda — ko'paytuvchilar va ko'paytma; bo'lishda — bo'linuvchi, bo'luvchi, bo'linma. **Butun va qism**: qo'shish/ayirishda butun — yig'indi (kamayuvchi), ko'paytirish/bo'lishda butun — ko'paytma (bo'linuvchi).", '**Компоненты**: при сложении — слагаемые и сумма; при вычитании — уменьшаемое, вычитаемое, разность; при умножении — множители и произведение; при делении — делимое, делитель, частное. **Целое и часть**: при сложении/вычитании целое — сумма (уменьшаемое), при умножении/делении целое — произведение (делимое).']),
    B.why(["Bitta sonli uchlikdan to'rtta tenglik: $8 + 5 = 13$, $5 + 8 = 13$, $13 - 5 = 8$, $13 - 8 = 5$. Agar 13 noma'lum bo'lsa — qo'shamiz; agar qism noma'lum bo'lsa — butundan boshqa qismni ayiramiz. Xuddi shunday: $6 \\cdot 4 = 24$, $24 : 4 = 6$, $24 : 6 = 4$.", 'Из одной тройки чисел — четыре равенства: $8 + 5 = 13$, $5 + 8 = 13$, $13 - 5 = 8$, $13 - 8 = 5$. Если неизвестно 13 — складываем; если неизвестна часть — из целого вычитаем другую часть. Так же: $6 \\cdot 4 = 24$, $24 : 4 = 6$, $24 : 6 = 4$.'], undefined, ['Qoidalar qayerdan keladi', 'Откуда берутся правила']),
    B.table([["Noma'lum", 'Неизвестное'], ['Tenglama', 'Уравнение'], ['Qoida', 'Правило']], [
      [["Qo'shiluvchi", 'Слагаемое'], ['$x + a = b$', '$x + a = b$'], ["$x = b - a$ (yig'indidan ma'lum qo'shiluvchini ayiramiz)", '$x = b - a$ (из суммы вычитаем известное слагаемое)']],
      [['Kamayuvchi', 'Уменьшаемое'], ['$x - a = b$', '$x - a = b$'], ["$x = b + a$ (ayirmaga ayriluvchini qo'shamiz)", '$x = b + a$ (к разности прибавляем вычитаемое)']],
      [['Ayriluvchi', 'Вычитаемое'], ['$a - x = b$', '$a - x = b$'], ['$x = a - b$ (kamayuvchidan ayirmani ayiramiz)', '$x = a - b$ (из уменьшаемого вычитаем разность)']],
      [["Ko'paytuvchi", 'Множитель'], ['$x \\cdot a = b$', '$x \\cdot a = b$'], ["$x = b : a$ (ko'paytmani ma'lum ko'paytuvchiga bo'lamiz)", '$x = b : a$ (произведение делим на известный множитель)']],
      [["Bo'linuvchi", 'Делимое'], ['$x : a = b$', '$x : a = b$'], ["$x = b \\cdot a$ (bo'linmani bo'luvchiga ko'paytiramiz)", '$x = b \\cdot a$ (частное умножаем на делитель)']],
      [["Bo'luvchi", 'Делитель'], ['$a : x = b$', '$a : x = b$'], ["$x = a : b$ (bo'linuvchini bo'linmaga bo'lamiz)", '$x = a : b$ (делимое делим на частное)']],
    ], ["Oltita qoida", 'Шесть правил']),
    B.rule(["Qisqa kalit: **butun noma'lum bo'lsa** (yig'indi, kamayuvchi, bo'linuvchi) — «to'g'ri» amal (qo'shish yoki ko'paytirish); **qism noma'lum bo'lsa** — teskari amal (ayirish yoki bo'lish). Murakkab tenglamada ($(x + 12) \\cdot 3 = 60$) oxirgi bajariladigan amaldan boshlab «qobiq»larni birin-ketin ochamiz.", 'Короткий ключ: **если неизвестно целое** (сумма, уменьшаемое, делимое) — прямое действие (сложение или умножение); **если неизвестна часть** — обратное (вычитание или деление). В составном уравнении ($(x + 12) \\cdot 3 = 60$) «снимаем оболочки», начиная с действия, которое выполняется последним.']),
    B.example(['$x - 26 = 48$', '$x - 26 = 48$'], [
      ["$x$ — kamayuvchi, ya'ni butun. Butunni topish uchun qismlarni qo'shamiz.", '$x$ — уменьшаемое, то есть целое. Чтобы найти целое, складываем части.'],
      { s: ['Hisoblash:', 'Вычисление:'], tex: 'x = 48 + 26 = 74' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '74 - 26 = 48 \\;\\checkmark' },
    ], ['$x = 74$', '$x = 74$']),
    B.example(['$90 : x = 6$', '$90 : x = 6$'], [
      ["$x$ — bo'luvchi. Bo'luvchini topish uchun bo'linuvchini bo'linmaga bo'lamiz.", '$x$ — делитель. Чтобы найти делитель, делимое делим на частное.'],
      { s: ['Hisoblash:', 'Вычисление:'], tex: 'x = 90 : 6 = 15' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '90 : 15 = 6 \\;\\checkmark' },
    ], ['$x = 15$', '$x = 15$']),
    B.example(['$(x + 12) \\cdot 3 = 60$ (4-sinf darajasi)', '$(x + 12) \\cdot 3 = 60$ (уровень 4 класса)'], [
      ["Oxirgi amal — ko'paytirish. $(x + 12)$ ni bitta noma'lum ko'paytuvchi deb qaraymiz.", 'Последнее действие — умножение. Считаем $(x + 12)$ одним неизвестным множителем.'],
      { s: ["Ko'paytuvchi:", 'Множитель:'], tex: 'x + 12 = 60 : 3 = 20' },
      { s: ["Endi $x$ — qo'shiluvchi:", 'Теперь $x$ — слагаемое:'], tex: 'x = 20 - 12 = 8' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '(8 + 12) \\cdot 3 = 20 \\cdot 3 = 60 \\;\\checkmark' },
    ], ['$x = 8$', '$x = 8$']),
    B.example(['$x : 7 = 13$', '$x : 7 = 13$'], [
      ["$x$ — bo'linuvchi (butun). Bo'linmani bo'luvchiga ko'paytiramiz.", '$x$ — делимое (целое). Частное умножаем на делитель.'],
      { s: ['Hisoblash:', 'Вычисление:'], tex: 'x = 13 \\cdot 7 = 91' },
    ], ['$x = 91$', '$x = 91$']),
    B.mistake(null, [
      ["Ayriluvchi va kamayuvchi qoidalarini almashtirish: $56 - x = 20$ da $x = 56 + 20$.", 'Путать правила для уменьшаемого и вычитаемого: в $56 - x = 20$ писать $x = 56 + 20$.'],
      ["Murakkab tenglamada ichki amaldan boshlash: $(x + 12) \\cdot 3 = 60$ da avval 12 ni ayirish.", 'В составном уравнении начинать с внутреннего действия: в $(x + 12) \\cdot 3 = 60$ сначала вычитать 12.'],
      ["Bo'luvchi qoidasida bo'linma va bo'linuvchini ko'paytirish: $90 : x = 6$ → $x = 540$.", 'В правиле для делителя перемножать делимое и частное: $90 : x = 6$ → $x = 540$.'],
    ]),
    B.try(oq('a-m-uk-t1', '2.1.6', { ...M(UK), d: 1, steps: [["Noma'lum ko'paytuvchi: $x = 84 : 6$.", 'Неизвестный множитель: $x = 84 : 6$.']] },
      ['$x \\cdot 6 = 84$ (son)', '$x \\cdot 6 = 84$ (число)'], '14', ['$84 : 6 = 14$; tekshirish: $14 \\cdot 6 = 84$.', '$84 : 6 = 14$; проверка: $14 \\cdot 6 = 84$.'], {}, 14)),
    B.method(["Noma'lum komponentlarni o'rgatish:", 'Как учить нахождению неизвестных компонентов:'], [
      ["«Butun–qism» kesmasi: butun — uzun kesma, qismlar — uning bo'laklari; savol belgisini kesmaga qo'yish.", 'Отрезок «целое–части»: целое — длинный отрезок, части — его куски; знак вопроса ставят на отрезке.'],
      ["Sonli uchlik kartochkalari (8, 5, 13) — bolalar to'rtta tenglik tuzadi va qoidani o'zi «kashf» qiladi.", 'Карточки-тройки (8, 5, 13) — дети составляют четыре равенства и сами «открывают» правило.'],
      ["Komponent nomlarini rangli belgilash: butun — qizil, qismlar — ko'k.", 'Цветом выделять названия компонентов: целое — красным, части — синим.'],
      ["Murakkab tenglamani «qobiqlarni ochish» o'yini sifatida: oxirgi amalni aylana bilan belgilash.", 'Составное уравнение как игра «сними оболочку»: обвести последнее действие.'],
    ]),
    B.summary(null, [
      ["Butun noma'lum — qo'shamiz/ko'paytiramiz; qism noma'lum — ayiramiz/bo'lamiz.", 'Неизвестно целое — складываем/умножаем; неизвестна часть — вычитаем/делим.'],
      ["Murakkab tenglama oxirgi amaldan boshlab yechiladi.", 'Составное уравнение решают, начиная с последнего действия.'],
      ["Har doim tekshiring.", 'Всегда делайте проверку.'],
    ]),
  ],
  check: [
    oq('a-m-uk-c1', '2.1.6', { ...M(UK), steps: [["$x$ — bo'linuvchi: $x = 14 \\cdot 9$.", '$x$ — делимое: $x = 14 \\cdot 9$.']] },
      ["Noma'lum bo'linuvchini toping: $x : 9 = 14$. (son)", 'Найдите неизвестное делимое: $x : 9 = 14$. (число)'], '126', ['$14 \\cdot 9 = 126$; tekshirish: $126 : 9 = 14$.', '$14 \\cdot 9 = 126$; проверка: $126 : 9 = 14$.'], {}, 126),
    oq('a-m-uk-c2', '2.1.5', { ...M(UK), steps: [["$x$ — bo'luvchi: $x = 72 : 8$.", '$x$ — делитель: $x = 72 : 8$.']] },
      ["$72 : x = 8$ tenglamadagi noma'lum bo'luvchini toping. (son)", 'Найдите неизвестный делитель: $72 : x = 8$. (число)'], '9', ['$72 : 8 = 9$; tekshirish: $72 : 9 = 8$.', '$72 : 8 = 9$; проверка: $72 : 9 = 8$.'], {}, 9),
    oq('a-m-uk-c3', '2.3.4', { ...M(UK), d: 3, steps: [["Oxirgi amal — bo'lish: $x - 15 = 9 \\cdot 4 = 36$.", 'Последнее действие — деление: $x - 15 = 9 \\cdot 4 = 36$.'], ['$x = 36 + 15$.', '$x = 36 + 15$.']] },
      ["Murakkab tenglama $(x - 15) : 4 = 9$: oxirgi amaldan boshlab $x$ ni toping. (son)", 'Составное уравнение $(x - 15) : 4 = 9$: найдите $x$, начиная с последнего действия. (число)'], '51', ['$x - 15 = 36$, $x = 51$; tekshirish: $(51 - 15) : 4 = 9$.', '$x - 15 = 36$, $x = 51$; проверка: $(51 - 15) : 4 = 9$.'], {}, 51),
    cq('a-m-uk-c4', '2.1.4', { ...M(UK) }, ["Noma'lum ayriluvchini qanday topiladi?", 'Как найти неизвестное вычитаемое?'],
      [[['Kamayuvchidan ayirmani ayirish kerak', 'Из уменьшаемого вычесть разность']], [["Ayirmaga kamayuvchini qo'shish kerak", 'К разности прибавить уменьшаемое'], ["Bunda butundan katta son chiqadi — qism butundan katta bo'lolmaydi.", 'Получится число больше целого — часть не может быть больше целого.']], [["Ayirmaga ayriluvchini qo'shish kerak", 'К разности прибавить вычитаемое'], ["Bu kamayuvchini topish qoidasi.", 'Это правило для уменьшаемого.']], [["Kamayuvchini ayirmaga ko'paytirish kerak", 'Умножить уменьшаемое на разность'], ["Ayirish teskari amali ko'paytirish emas.", 'Обратное вычитанию действие — не умножение.']]],
      'A', ['$a - x = b \\Rightarrow x = a - b$: ayriluvchi — qism, butundan boshqa qismni ayiramiz.', '$a - x = b \\Rightarrow x = a - b$: вычитаемое — часть, из целого вычитаем другую часть.']),
    cq('a-m-uk-c5', '2.3.4', { ...M(UK) }, ["O'quvchi $56 - x = 20$ ni $x = 76$ deb yechdi. Xatoning sababi?", 'Ученик решил $56 - x = 20$ и получил $x = 76$. В чём причина ошибки?'],
      [[["Ayriluvchi uchun kamayuvchi qoidasini qo'llagan: butun va qismni farqlamagan", 'Применил правило для уменьшаемого к вычитаемому: не различает целое и часть']], [["Hisoblashda xato qilgan", 'Ошибся в вычислениях'], ["56 + 20 = 76 to'g'ri hisoblangan — amal noto'g'ri tanlangan.", '56 + 20 = 76 посчитано верно — неверно выбрано действие.']], [["Tenglamani diqqatsiz ko'chirgan", 'Невнимательно переписал уравнение'], ["Yozuvda xato yo'q.", 'Ошибки в записи нет.']], [["Ayirishni bilmaydi", 'Не умеет вычитать'], ["Muammo — komponentni tanishda.", 'Проблема — в распознавании компонента.']]],
      'A', ["$x$ — qism, butun 56: $x = 56 - 20 = 36$. Kesma modeli farqni ko'rsatadi.", '$x$ — часть, целое 56: $x = 56 - 20 = 36$. Модель отрезка показывает разницу.']),
  ],
});

/* ======================= 3. Divisibility ======================= */
const DV = 'math-divisibility';
export const MATH_DIVISIBILITY = lesson({
  id: DV, module: 'math-ops', level: 'core', stage: 'C', minutes: 22, codes: ['2.1.8'], requires: ['math-mult-div'], sourceIds: S,
  title: ["Bo'linish: karrali, bo'luvchi, tub va murakkab sonlar", 'Делимость: кратные, делители, простые и составные числа'],
  blocks: [
    B.intro(["24 ta konfetni bolalarga teng, qoldiqsiz bo'lib berish mumkinmi — 5 ta bolagami, 6 ta bolagami? Bu kundalik savol «bo'linish» tushunchasining o'zi. U kasrlarni qisqartirish va umumiy maxrajni topish uchun asos bo'ladi.", 'Можно ли разделить 24 конфеты поровну без остатка между 5 детьми? А между 6? Этот бытовой вопрос и есть понятие делимости. На нём держатся сокращение дробей и поиск общего знаменателя.']),
    B.definition(["$a$ son $b$ ga **qoldiqsiz bo'linadi**, agar shunday natural $k$ bo'lsaki, $a = b \\cdot k$. Bunda $b$ — $a$ ning **bo'luvchisi**, $a$ — $b$ ning **karralisi**. **Tub son** — faqat ikkita bo'luvchisi (1 va o'zi) bor son. **Murakkab son** — ikkitadan ko'p bo'luvchisi bor son. **1** — na tub, na murakkab (bo'luvchisi bitta).", 'Число $a$ **делится без остатка** на $b$, если есть натуральное $k$, такое что $a = b \\cdot k$. Тогда $b$ — **делитель** $a$, а $a$ — **кратное** $b$. **Простое число** — имеет ровно два делителя (1 и само число). **Составное** — больше двух делителей. **1** — ни простое, ни составное (один делитель).']),
    B.formula('a = b \\cdot k', [["$a$ — karrali (bo'linuvchi)", '$a$ — кратное (делимое)'], ["$b$ — bo'luvchi", '$b$ — делитель'], ["$k$ — natural son (bo'linma)", '$k$ — натуральное число (частное)']], ["Masalan, $24 = 6 \\cdot 4$: 6 — 24 ning bo'luvchisi, 24 — 6 ning karralisi.", 'Например, $24 = 6 \\cdot 4$: 6 — делитель 24, 24 — кратное 6.']),
    B.table(['', ["Bo'luvchilar", 'Делители'], ['Karralilar', 'Кратные']], [
      [['Soni', 'Количество'], ["Chekli (sonning o'zidan oshmaydi)", 'Конечно (не больше самого числа)'], ['Cheksiz', 'Бесконечно']],
      [['Eng kichigi', 'Наименьшее'], ['1', '1'], ["Sonning o'zi", 'Само число']],
      [['Eng kattasi', 'Наибольшее'], ["Sonning o'zi", 'Само число'], ["Yo'q", 'Нет']],
      [['12 uchun', 'Для 12'], ['1, 2, 3, 4, 6, 12', '1, 2, 3, 4, 6, 12'], ['12, 24, 36, 48, …', '12, 24, 36, 48, …']],
    ], ["Bo'luvchi va karrali farqi", 'Делители и кратные']),
    B.rule(["Bo'luvchilarni juft-juft qidiring: $24 = 1 \\cdot 24 = 2 \\cdot 12 = 3 \\cdot 8 = 4 \\cdot 6$. Juftlar «uchrashganda» (ko'paytuvchilar yaqinlashganda) qidiruv tugaydi. Sonning tubligini tekshirish uchun uni kvadrati shu sondan oshmaydigan tub sonlarga (2, 3, 5, 7, …) bo'lib ko'rish yetarli.", 'Ищите делители парами: $24 = 1 \\cdot 24 = 2 \\cdot 12 = 3 \\cdot 8 = 4 \\cdot 6$. Когда множители пары «сошлись», поиск окончен. Чтобы проверить, простое ли число, достаточно пробовать делить на простые 2, 3, 5, 7, …, квадрат которых не больше числа.']),
    B.example(["24 ning barcha bo'luvchilarini toping.", 'Найдите все делители числа 24.'], [
      { s: ['Juftlar:', 'Пары:'], tex: '1 \\cdot 24,\\; 2 \\cdot 12,\\; 3 \\cdot 8,\\; 4 \\cdot 6' },
      ["5 ga bo'linmaydi; keyingi 6 allaqachon juftda bor — qidiruv tugadi.", 'На 5 не делится; следующее, 6, уже есть в паре — поиск окончен.'],
      ["O'sish tartibida: 1, 2, 3, 4, 6, 8, 12, 24.", 'По возрастанию: 1, 2, 3, 4, 6, 8, 12, 24.'],
    ], ["8 ta bo'luvchi", '8 делителей']),
    B.example(['37 tub sonmi? 51-chi?', 'Простое ли 37? А 51?'], [
      ["37: 2 ga ham, 3 ga ham, 5 ga ham bo'linmaydi; $7 \\cdot 7 = 49 > 37$ — boshqa tekshirish kerak emas.", '37: не делится ни на 2, ни на 3, ни на 5; $7 \\cdot 7 = 49 > 37$ — дальше проверять не нужно.'],
      { s: ["51: raqamlar yig'indisi 6, demak 3 ga bo'linadi:", '51: сумма цифр 6, значит, делится на 3:'], tex: '51 = 3 \\cdot 17' },
    ], ['37 — tub; 51 — murakkab', '37 — простое; 51 — составное'], ["51 tub sonlarga o'xshaydi (toq, 5 ga tugamaydi) — shuning uchun tez-tez adashtiradi.", '51 «похоже» на простое (нечётное, не оканчивается на 5) — поэтому часто путают.']),
    B.example(["4 va 6 ning eng kichik umumiy karralisini toping (kasrlarni qo'shishda kerak bo'ladi).", 'Найдите наименьшее общее кратное 4 и 6 (пригодится для дробей).'], [
      ['4 ning karralilari: 4, 8, **12**, 16, 20, **24**, …', 'Кратные 4: 4, 8, **12**, 16, 20, **24**, …'],
      ['6 ning karralilari: 6, **12**, 18, **24**, …', 'Кратные 6: 6, **12**, 18, **24**, …'],
      ["Umumiy karralilar: 12, 24, …; eng kichigi — 12.", 'Общие кратные: 12, 24, …; наименьшее — 12.'],
    ], ['12', '12']),
    B.explain(["**Eratosfen g'alviri**: 2 dan 30 gacha sonlarni yozing; 2 ni qoldirib, 2 ning barcha karralilarini o'chiring; keyin 3, 5 uchun ham shunday qiling. Qolgan sonlar — tub: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 (10 ta).", '**Решето Эратосфена**: выпишите числа от 2 до 30; оставив 2, вычеркните все кратные 2; затем так же для 3 и 5. Оставшиеся числа — простые: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 (10 чисел).'], undefined, ["Tub sonlarni topish usuli", 'Способ найти простые числа']),
    B.mistake(null, [
      ["«Toq son — tub son»: 9, 15, 21, 27 toq, lekin murakkab.", '«Нечётное — значит простое»: 9, 15, 21, 27 нечётные, но составные.'],
      ["1 ni tub son deb hisoblash.", 'Считать 1 простым числом.'],
      ["2 ni murakkab deb o'ylash («juft son tub bo'lmaydi»): 2 — yagona juft tub son.", 'Считать 2 составным («чётные не бывают простыми»): 2 — единственное чётное простое.'],
      ["Bo'luvchi va karralini almashtirish: «12 — 4 ning bo'luvchisi».", 'Путать делитель и кратное: «12 — делитель 4».'],
    ]),
    B.try(oq('a-m-dv-t1', '2.1.8', { ...M(DV), d: 1, steps: [['10 dan 20 gacha tub sonlar: 11, 13, 17, 19.', 'Простые от 10 до 20: 11, 13, 17, 19.']] },
      ['10 va 20 orasida nechta tub son bor? (son)', 'Сколько простых чисел между 10 и 20? (число)'], '4', ['11, 13, 17, 19 — 4 ta.', '11, 13, 17, 19 — четыре числа.'], {}, 4)),
    B.method(["Bo'linishni bolalarga qanday o'rgatish:", 'Как учить делимости:'], [
      ["To'rtburchak modeli: 12 ta kvadratchadan to'g'ri to'rtburchaklar yasash (1×12, 2×6, 3×4) — har bir tomon bo'luvchi. 7 tadan faqat 1×7 chiqadi — u tub.", 'Модель прямоугольников: выкладывать из 12 квадратиков прямоугольники (1×12, 2×6, 3×4) — каждая сторона делитель. Из 7 получается только 1×7 — оно простое.'],
      ["Yuzlik jadvalda karralilarni bo'yash — naqshlar paydo bo'ladi.", 'Раскрашивать кратные на сотенной таблице — появляются узоры.'],
      ["Kundalik masalalar: guruhlarga bo'lish, qatorlarga terish.", 'Жизненные задачи: деление на группы, расстановка рядами.'],
    ]),
    B.summary(null, [
      ['$a = b \\cdot k$: $b$ — bo\'luvchi, $a$ — karrali.', '$a = b \\cdot k$: $b$ — делитель, $a$ — кратное.'],
      ["Tub — 2 ta bo'luvchi; murakkab — 2 tadan ko'p; 1 — hech biri.", 'Простое — 2 делителя; составное — больше 2; 1 — ни то ни другое.'],
      ["Bo'luvchilar juft-juft topiladi.", 'Делители ищут парами.'],
    ]),
  ],
  check: [
    oq('a-m-dv-c1', '2.1.8', { ...M(DV), steps: [['Juftlar: 1·36, 2·18, 3·12, 4·9, 6·6.', 'Пары: 1·36, 2·18, 3·12, 4·9, 6·6.'], ["6·6 da bitta son — 6 bir marta sanaladi.", 'В паре 6·6 одно число — 6 считаем один раз.']] },
      ["36 ning nechta bo'luvchisi bor? (son)", 'Сколько делителей у числа 36? (число)'], '9', ["1, 2, 3, 4, 6, 9, 12, 18, 36 — 9 ta.", '1, 2, 3, 4, 6, 9, 12, 18, 36 — девять делителей.'], {}, 9),
    cq('a-m-dv-c2', '2.1.8', { ...M(DV) }, ['Qaysi son tub?', 'Какое число простое?'],
      [['41'], ['51', ['$51 = 3 \\cdot 17$.', '$51 = 3 \\cdot 17$.']], ['57', ['$57 = 3 \\cdot 19$.', '$57 = 3 \\cdot 19$.']], ['91', ['$91 = 7 \\cdot 13$.', '$91 = 7 \\cdot 13$.']]],
      'A', ["41 ni 2, 3, 5 ga bo'lib bo'lmaydi; $7 \\cdot 7 = 49 > 41$.", '41 не делится на 2, 3, 5; $7 \\cdot 7 = 49 > 41$.']),
    oq('a-m-dv-c3', '2.1.8', { ...M(DV), steps: [['6, 12, …, 48: $48 = 6 \\cdot 8$.', '6, 12, …, 48: $48 = 6 \\cdot 8$.']] },
      ["1 dan 50 gacha bo'lgan sonlar ichida 6 ning nechta karralisi bor? (son)", 'Сколько чисел, кратных 6, среди чисел от 1 до 50? (число)'], '8', ["$50 : 6 = 8$ (qoldiq 2) — 8 ta karrali.", '$50 : 6 = 8$ (ост. 2) — восемь кратных.'], {}, 8),
    cq('a-m-dv-c4', '2.1.8', { ...M(DV) }, ['1 soni haqida qaysi gap to\'g\'ri?', 'Какое утверждение о числе 1 верно?'],
      [[["Na tub, na murakkab son", 'Оно ни простое, ни составное']], [['Tub son', 'Простое'], ["Tub sonning ikkita bo'luvchisi bor, 1 ning — bitta.", 'У простого два делителя, у 1 — один.']], [['Murakkab son', 'Составное'], ["Murakkabning ikkitadan ko'p bo'luvchisi bor.", 'У составного больше двух делителей.']], [["Eng kichik tub son", 'Наименьшее простое'], ['Eng kichik tub son — 2.', 'Наименьшее простое — 2.']]],
      'A', ["1 ning yagona bo'luvchisi — 1.", 'У 1 единственный делитель — 1.']),
    cq('a-m-dv-c5', '2.1.8', { ...M(DV) }, ["O'quvchi: «9 — tub son, chunki u toq». Eng yaxshi javob?", 'Ученик: «9 — простое, потому что нечётное». Как лучше ответить?'],
      [[["9 ta kvadratchadan 3×3 to'g'ri to'rtburchak yasashni taklif qilish: tomoni 1 dan katta to'rtburchak chiqsa — son murakkab", 'Предложить сложить из 9 квадратиков прямоугольник 3×3: если получается прямоугольник со сторонами больше 1, число составное']], [["«Yo'q, noto'g'ri» deyish", 'Сказать «нет, неверно»'], ["Sababini tushuntirmaydi.", 'Не объясняет причину.']], [["Tub sonlar ro'yxatini yod oldirish", 'Заставить выучить список простых'], ["Tushunchani bermaydi.", 'Не даёт понимания.']], [["Toq sonlar haqidagi qoidani tasdiqlash", 'Подтвердить правило про нечётные'], ["Qoida noto'g'ri: 9 = 3 · 3.", 'Правило неверно: 9 = 3 · 3.']]],
      'A', ["Model qarshi misolni ko'rinadigan qiladi: 9 = 3 · 3.", 'Модель делает контрпример наглядным: 9 = 3 · 3.']),
  ],
});

/* ======================= 4. Divisibility tests ======================= */
const DT = 'math-div-tests';
export const MATH_DIV_TESTS = lesson({
  id: DT, module: 'math-ops', level: 'core', stage: 'B', minutes: 22, codes: ['2.1.8'], requires: [DV], sourceIds: S,
  title: ["Bo'linish belgilari: 2, 3, 5, 9, 10", 'Признаки делимости на 2, 3, 5, 9, 10'],
  blocks: [
    B.intro(["7 254 sonini 9 ga bo'lmasdan turib, u qoldiqsiz bo'linishini bilish mumkinmi? Ha — raqamlarni qo'shish kifoya. Bo'linish belgilari — katta sonlar bilan tez ishlash va kasrlarni qisqartirish vositasi.", 'Можно ли, не деля 7 254 на 9, узнать, делится ли оно без остатка? Да — достаточно сложить цифры. Признаки делимости — инструмент быстрой работы с большими числами и сокращения дробей.']),
    B.definition(["**Bo'linish belgisi** — sonni bo'lmasdan, uning yozuviga qarab qoldiqsiz bo'linishini aniqlash qoidasi. **Raqamlar yig'indisi** — sondagi barcha raqamlarning yig'indisi (7 254 → 7 + 2 + 5 + 4 = 18). **Juft son** — 2 ga bo'linadigan son.", '**Признак делимости** — правило, позволяющее по записи числа, не выполняя деления, узнать, делится ли оно без остатка. **Сумма цифр** — сумма всех цифр числа (7 254 → 7 + 2 + 5 + 4 = 18). **Чётное число** — число, делящееся на 2.']),
    B.table([["Bo'luvchi", 'Делитель'], ['Belgi', 'Признак'], ['Misol', 'Пример']], [
      ['2', ["Oxirgi raqam juft (0, 2, 4, 6, 8)", 'Последняя цифра чётная (0, 2, 4, 6, 8)'], ['3 576', '3 576']],
      ['5', ["Oxirgi raqam 0 yoki 5", 'Последняя цифра 0 или 5'], ['4 105', '4 105']],
      ['10', ["Oxirgi raqam 0", 'Последняя цифра 0'], ['7 080', '7 080']],
      ['3', ["Raqamlar yig'indisi 3 ga bo'linadi", 'Сумма цифр делится на 3'], ['1 251 (9)', '1 251 (9)']],
      ['9', ["Raqamlar yig'indisi 9 ga bo'linadi", 'Сумма цифр делится на 9'], ['7 254 (18)', '7 254 (18)']],
    ], ["Bo'linish belgilari", 'Признаки делимости']),
    B.why(["**2, 5, 10 uchun.** Har qanday son = (o'nliklar soni) · 10 + oxirgi raqam. 10 soni 2 ga ham, 5 ga ham, 10 ga ham bo'linadi, demak, hammasi oxirgi raqamga bog'liq. **3 va 9 uchun.** $10 = 9 + 1$, $100 = 99 + 1$, $1000 = 999 + 1$. Shuning uchun $435 = 4 \\cdot 99 + 3 \\cdot 9 + (4 + 3 + 5)$. Birinchi ikki qo'shiluvchi 9 ga (demak, 3 ga ham) bo'linadi — qoldiq faqat raqamlar yig'indisiga bog'liq.", '**Для 2, 5, 10.** Любое число = (число десятков) · 10 + последняя цифра. 10 делится и на 2, и на 5, и на 10, поэтому всё зависит от последней цифры. **Для 3 и 9.** $10 = 9 + 1$, $100 = 99 + 1$, $1000 = 999 + 1$. Поэтому $435 = 4 \\cdot 99 + 3 \\cdot 9 + (4 + 3 + 5)$. Первые два слагаемых делятся на 9 (а значит, и на 3) — остаток зависит только от суммы цифр.'], undefined, ['Belgilar qayerdan keladi', 'Откуда берутся признаки']),
    B.formula('\\overline{abc} = 99a + 9b + (a + b + c)', [["$a, b, c$ — uch xonali sonning raqamlari (yuzlar, o'nlar, birlar)", '$a, b, c$ — цифры трёхзначного числа (сотни, десятки, единицы)'], ["$99a + 9b$ — har doim 9 ga bo'linadi", '$99a + 9b$ — всегда делится на 9']]),
    B.rule(["Birlashtirilgan belgilar: 6 ga — 2 ga **va** 3 ga bo'linsa; 15 ga — 3 ga **va** 5 ga bo'linsa. Faqat o'zaro tub (umumiy bo'luvchisi 1 bo'lgan) bo'luvchilarni birlashtirish mumkin: 2 va 4 ga bo'linishdan 8 ga bo'linish kelib chiqmaydi (12).", 'Комбинированные признаки: на 6 — если делится на 2 **и** на 3; на 15 — на 3 **и** на 5. Объединять можно только взаимно простые делители: из делимости на 2 и на 4 не следует делимость на 8 (12).']),
    B.example(["7 254 soni qaysi sonlarga bo'linadi: 2, 3, 5, 9, 10?", 'На какие из чисел 2, 3, 5, 9, 10 делится 7 254?'], [
      ["Oxirgi raqam 4 — juft: 2 ga bo'linadi; 0 ham, 5 ham emas: 5 ga va 10 ga bo'linmaydi.", 'Последняя цифра 4 — чётная: делится на 2; не 0 и не 5: на 5 и на 10 не делится.'],
      { s: ["Raqamlar yig'indisi:", 'Сумма цифр:'], tex: '7 + 2 + 5 + 4 = 18' },
      ["18 — 3 ga ham, 9 ga ham bo'linadi.", '18 делится и на 3, и на 9.'],
    ], ["2, 3 va 9 ga (demak, 6 va 18 ga ham)", 'На 2, 3 и 9 (а значит, и на 6, и на 18)']),
    B.example(["$73\\_$ yozuvida bo'sh joy o'rniga qanday raqam qo'yilsa, son 9 ga bo'linadi?", 'Какую цифру поставить вместо пропуска в $73\\_$, чтобы число делилось на 9?'], [
      { s: ["Raqamlar yig'indisi:", 'Сумма цифр:'], tex: '7 + 3 + \\square = 10 + \\square' },
      ["$10 + \\square$ 9 ga bo'linishi kerak: 18 (27 uchun 17 kerak — bitta raqam emas).", '$10 + \\square$ должно делиться на 9: 18 (для 27 нужно 17 — это не цифра).'],
      { s: ['Javob va tekshirish:', 'Ответ и проверка:'], tex: '\\square = 8,\\quad 738 : 9 = 82' },
    ], ['8 (738)', '8 (738)']),
    B.example(["3 105 soni 15 ga bo'linadimi?", 'Делится ли 3 105 на 15?'], [
      ["$15 = 3 \\cdot 5$, 3 va 5 o'zaro tub — ikkala belgini tekshiramiz.", '$15 = 3 \\cdot 5$, 3 и 5 взаимно простые — проверяем оба признака.'],
      ["Oxirgi raqam 5 → 5 ga bo'linadi.", 'Последняя цифра 5 → делится на 5.'],
      ["$3 + 1 + 0 + 5 = 9$ → 3 ga bo'linadi.", '$3 + 1 + 0 + 5 = 9$ → делится на 3.'],
    ], ["Ha: $3105 = 15 \\cdot 207$", 'Да: $3105 = 15 \\cdot 207$']),
    B.exception(null, [
      ["4 uchun oxirgi raqam emas, **oxirgi ikki raqam** hal qiladi (100 4 ga bo'linadi): 316 — 16 4 ga bo'linadi.", 'Для 4 решают **две последние цифры**, а не одна (100 делится на 4): 316 — 16 делится на 4.'],
      ["3 ga bo'linadigan son 9 ga bo'linmasligi mumkin (12, 21), lekin 9 ga bo'linadigan son doim 3 ga bo'linadi.", 'Число, делящееся на 3, может не делиться на 9 (12, 21), а делящееся на 9 всегда делится на 3.'],
    ]),
    B.mistake(null, [
      ["3 ga bo'linishni oxirgi raqamdan aniqlash: «13 — 3 bilan tugaydi, demak, 3 ga bo'linadi».", 'Определять делимость на 3 по последней цифре: «13 оканчивается на 3 — делится на 3».'],
      ["Raqamlar yig'indisini noto'g'ri hisoblash yoki bitta raqamni tushirib qoldirish.", 'Ошибаться в сумме цифр или пропускать цифру.'],
      ["O'zaro tub bo'lmagan bo'luvchilarni birlashtirish (2 va 4 → 8).", 'Объединять не взаимно простые делители (2 и 4 → 8).'],
    ]),
    B.try(oq('a-m-dt-t1', '2.1.8', { ...M(DT), d: 2, steps: [["$4 + \\square + 6 = 10 + \\square$; 3 ga bo'linadi: 12, 15, 18.", '$4 + \\square + 6 = 10 + \\square$; делится на 3: 12, 15, 18.']] },
      ["$4\\square 6$ soni 3 ga bo'linishi uchun $\\square$ o'rniga qo'yiladigan eng kichik raqam? (son)", 'Какую наименьшую цифру поставить вместо $\\square$ в $4\\square 6$, чтобы число делилось на 3? (число)'], '2', ['Mumkin: 2, 5, 8; eng kichigi 2 (426).', 'Подходят 2, 5, 8; наименьшая — 2 (426).'], {}, 2)),
    B.method(["Bo'linish belgilarini o'rgatish:", 'Как учить признакам делимости:'], [
      ["Kashfiyot orqali: yuzlik jadvalda 5 ning karralilarini bo'yash → «ular nima bilan tugaydi?»", 'Через открытие: раскрасить кратные 5 на сотенной таблице → «на что они оканчиваются?»'],
      ["9 ga karralilar ustuni (9, 18, 27, …, 90): raqamlar yig'indisi doim 9 — naqshni bolalar o'zi topadi.", 'Столбик кратных 9 (9, 18, 27, …, 90): сумма цифр всегда 9 — закономерность дети находят сами.'],
      ["Pul modeli: 435 so'm = 4 ta 100 talik + 3 ta 10 talik + 5; har bir 100 talik va 10 talikdan 1 so'mdan «qoladi» — 3 va 9 belgilari tushunchasi.", 'Модель с деньгами: 435 = 4 сотни + 3 десятка + 5; от каждой сотни и каждого десятка «остаётся» по единице — смысл признаков на 3 и 9.'],
    ]),
    B.summary(null, [
      ["2, 5, 10 — oxirgi raqam bo'yicha.", '2, 5, 10 — по последней цифре.'],
      ["3, 9 — raqamlar yig'indisi bo'yicha.", '3, 9 — по сумме цифр.'],
      ["Birlashtirish faqat o'zaro tub bo'luvchilar uchun (6 = 2·3, 15 = 3·5).", 'Объединять признаки можно только для взаимно простых делителей (6 = 2·3, 15 = 3·5).'],
    ]),
  ],
  check: [
    cq('a-m-dt-c1', '2.1.8', { ...M(DT) }, ["Qaysi son 9 ga qoldiqsiz bo'linadi?", 'Какое число делится на 9 без остатка?'],
      [['3 726'], ['3 724', ["Raqamlar yig'indisi 16 — 9 ga bo'linmaydi.", 'Сумма цифр 16 — не делится на 9.']], ['3 723', ["Yig'indi 15: 3 ga bo'linadi, 9 ga emas.", 'Сумма 15: делится на 3, но не на 9.']], ['3 720', ["Yig'indi 12; 0 bilan tugashi 10 ga bo'linishni bildiradi, 9 ga emas.", 'Сумма 12; ноль на конце говорит о делимости на 10, а не на 9.']]],
      'A', ["$3 + 7 + 2 + 6 = 18$ — 9 ga bo'linadi.", '$3 + 7 + 2 + 6 = 18$ — делится на 9.']),
    cq('a-m-dt-c2', '2.1.8', { ...M(DT) }, ["0 bilan tugaydigan son albatta qaysi sonlarga bo'linadi?", 'На какие числа обязательно делится число, оканчивающееся нулём?'],
      [[['2, 5 va 10 ga', 'На 2, 5 и 10']], [['Faqat 10 ga', 'Только на 10'], ["10 = 2 · 5, demak 2 va 5 ga ham.", '10 = 2 · 5, значит и на 2, и на 5.']], [['3 ga', 'На 3'], ['10 ga 3 ga bo\'linmaydi.', '10 на 3 не делится.']], [['Faqat 2 ga', 'Только на 2'], ["5 va 10 ga ham bo'linadi.", 'Делится и на 5, и на 10.']]],
      'A', ["Oxirgi raqam 0 — 2, 5 va 10 belgilari bajariladi.", 'Последняя цифра 0 — выполнены признаки 2, 5 и 10.']),
    oq('a-m-dt-c3', '2.1.8', { ...M(DT), steps: [["2 va 5 ga bir vaqtda — 10 ga, ya'ni 0 bilan tugashi kerak.", 'Одновременно на 2 и 5 — значит на 10, то есть оканчиваться нулём.']] },
      ["120, 135, 144, 150, 165 sonlaridan nechtasi ham 2 ga, ham 5 ga bo'linadi? (son)", 'Сколько из чисел 120, 135, 144, 150, 165 делятся и на 2, и на 5? (число)'], '2', ["120 va 150 — 0 bilan tugaydi.", '120 и 150 — оканчиваются нулём.'], {}, 2),
    cq('a-m-dt-c4', '2.1.8', { ...M(DT) }, ["Qaysi gap har doim to'g'ri?", 'Какое утверждение верно всегда?'],
      [[["9 ga bo'linadigan son 3 ga ham bo'linadi", 'Число, делящееся на 9, делится и на 3']], [["3 ga bo'linadigan son 9 ga ham bo'linadi", 'Число, делящееся на 3, делится и на 9'], ['Qarshi misol: 12.', 'Контрпример: 12.']], [["Raqamlar yig'indisi juft bo'lsa, son 2 ga bo'linadi", 'Если сумма цифр чётная, число делится на 2'], ['Qarshi misol: 13 (yig\'indi 4).', 'Контрпример: 13 (сумма 4).']], [["5 bilan tugaydigan son 10 ga bo'linadi", 'Число, оканчивающееся на 5, делится на 10'], ['Qarshi misol: 15.', 'Контрпример: 15.']]],
      'A', ["9 = 3 · 3, shuning uchun 9 ning har bir karralisi 3 ning ham karralisi.", '9 = 3 · 3, поэтому каждое кратное 9 — кратное 3.']),
    cq('a-m-dt-c5', '2.1.8', { ...M(DT) }, ["3 ga bo'linish belgisini 3-sinfda kiritishning eng to'g'ri yo'li?", 'Как лучше ввести признак делимости на 3 в 3 классе?'],
      [[["3 ning karralilarini yozib, raqamlar yig'indisini hisoblatish va naqshni bolalarning o'zi topishiga imkon berish", 'Выписать кратные 3, посчитать суммы их цифр и дать детям самим найти закономерность']], [["Qoidani tayyor holda aytib, 20 ta misol berish", 'Сообщить готовое правило и дать 20 примеров'], ["Tushunmasdan qo'llash tez unutiladi.", 'Применение без понимания быстро забывается.']], [["Isbotni algebraik formulalar bilan berish", 'Дать алгебраическое доказательство'], ["3-sinf uchun juda mavhum.", 'Слишком абстрактно для 3 класса.']], [["Belgini o'rgatmay, faqat bo'lish bilan tekshirish", 'Не учить признак, проверять только делением'], ["Belgi — dastur talabi va foydali vosita.", 'Признак — требование программы и полезный инструмент.']]],
      'A', ["Kuzatish → gipoteza → tekshirish: qoida tushunilgan holda o'zlashtiriladi.", 'Наблюдение → гипотеза → проверка: правило усваивается осознанно.']),
  ],
});

/* ======================= 5. Comparing fractions ======================= */
const FC = 'math-frac-compare';
export const MATH_FRAC_COMPARE = lesson({
  id: FC, module: 'math-frac', level: 'core', stage: 'C', minutes: 22, codes: ['2.1.9', '2.1.10'], requires: ['math-fractions-intro'], sourceIds: S,
  title: ['Kasrlarni taqqoslash', 'Сравнение дробей'],
  blocks: [
    B.intro(["Qaysi biri ko'p: pitsaning $\\frac{1}{4}$ qismimi yoki $\\frac{1}{6}$ qismi? Ko'p bolalar «6 katta, demak $\\frac{1}{6}$ katta» deydi. Kasrni taqqoslash — maxraj va surat ma'nosini chinakam tushunganlikning eng yaxshi sinovi.", 'Чего больше: $\\frac{1}{4}$ пиццы или $\\frac{1}{6}$? Многие дети говорят: «6 больше, значит, $\\frac{1}{6}$ больше». Сравнение дробей — лучшая проверка того, понят ли смысл числителя и знаменателя.']),
    B.definition(["**Maxraj** ($b$) — butun nechta teng bo'lakka bo'linganini, **surat** ($a$) — nechta bo'lak olinganini ko'rsatadi. **Umumiy maxraj** — ikkala maxrajning umumiy karralisi. **Asosiy xossa**: surat va maxrajni bir xil songa ko'paytirsak, kasr o'zgarmaydi: $\\frac{3}{4} = \\frac{9}{12}$.", '**Знаменатель** ($b$) показывает, на сколько равных долей разделили целое, **числитель** ($a$) — сколько долей взяли. **Общий знаменатель** — общее кратное знаменателей. **Основное свойство**: если числитель и знаменатель умножить на одно число, дробь не изменится: $\\frac{3}{4} = \\frac{9}{12}$.']),
    B.formula('\\frac{a}{c} < \\frac{b}{c} \\iff a < b \\qquad \\frac{a}{b} > \\frac{a}{c} \\iff b < c', [["Bir xil maxraj: surati katta kasr katta", 'Одинаковые знаменатели: больше та дробь, у которой больше числитель'], ["Bir xil surat: maxraji kichik kasr katta (bo'laklar yirikroq)", 'Одинаковые числители: больше та, у которой меньше знаменатель (доли крупнее)']]),
    B.widget('fractions', ["Ikki kasrni tasmada ko'rib solishtiring.", 'Сравните две дроби на полосках.']),
    B.rule(["Turli maxrajli kasrlar uchun usullar: 1) umumiy maxrajga keltirish; 2) **mo'ljal** bilan solishtirish: $\\frac{1}{2}$ yoki 1 dan katta-kichikligi; 3) «yetishmagan bo'lak»: $\\frac{7}{8}$ ga butungacha $\\frac{1}{8}$, $\\frac{8}{9}$ ga $\\frac{1}{9}$ yetmaydi, $\\frac{1}{9} < \\frac{1}{8}$, demak $\\frac{8}{9}$ katta. O'qituvchi uchun tekshiruv: $\\frac{a}{b}$ va $\\frac{c}{d}$ da $a \\cdot d$ va $c \\cdot b$ ni solishtirish.", 'Способы для дробей с разными знаменателями: 1) привести к общему знаменателю; 2) сравнить с **ориентиром**: больше или меньше $\\frac{1}{2}$ или 1; 3) «недостающая доля»: до целого $\\frac{7}{8}$ не хватает $\\frac{1}{8}$, а $\\frac{8}{9}$ — $\\frac{1}{9}$; $\\frac{1}{9} < \\frac{1}{8}$, значит, $\\frac{8}{9}$ больше. Проверка для учителя: для $\\frac{a}{b}$ и $\\frac{c}{d}$ сравнить $a \\cdot d$ и $c \\cdot b$.']),
    B.example(['$\\frac{2}{5}$ va $\\frac{2}{7}$ ni taqqoslang.', 'Сравните $\\frac{2}{5}$ и $\\frac{2}{7}$.'], [
      ["Suratlar teng — har ikkalasida 2 ta bo'lak olingan.", 'Числители равны — в обоих случаях взято 2 доли.'],
      ["Beshdan bir bo'lak yettidan bir bo'lakdan katta (butun kamroq bo'lakka bo'lingan).", 'Пятая доля больше седьмой (целое разделили на меньшее число частей).'],
    ], ['$\\frac{2}{5} > \\frac{2}{7}$', '$\\frac{2}{5} > \\frac{2}{7}$']),
    B.example(['$\\frac{3}{4}$ va $\\frac{5}{6}$ ni taqqoslang.', 'Сравните $\\frac{3}{4}$ и $\\frac{5}{6}$.'], [
      ["4 va 6 ning eng kichik umumiy karralisi — 12.", 'Наименьшее общее кратное 4 и 6 — 12.'],
      { s: ['Umumiy maxrajga keltiramiz:', 'Приводим к общему знаменателю:'], tex: '\\frac{3}{4} = \\frac{3 \\cdot 3}{4 \\cdot 3} = \\frac{9}{12},\\qquad \\frac{5}{6} = \\frac{5 \\cdot 2}{6 \\cdot 2} = \\frac{10}{12}' },
      ['$9 < 10$', '$9 < 10$'],
    ], ['$\\frac{3}{4} < \\frac{5}{6}$', '$\\frac{3}{4} < \\frac{5}{6}$'], ["Muqobil: «yetishmagan bo'lak» — $\\frac{1}{4} > \\frac{1}{6}$, demak $\\frac{5}{6}$ butunga yaqinroq.", 'Другой способ: «недостающая доля» — $\\frac{1}{4} > \\frac{1}{6}$, значит, $\\frac{5}{6}$ ближе к целому.']),
    B.example(['$\\frac{4}{9}$ va $\\frac{5}{8}$ ni hisoblamasdan taqqoslang.', 'Сравните $\\frac{4}{9}$ и $\\frac{5}{8}$ без вычислений.'], [
      ["Mo'ljal $\\frac{1}{2}$: $\\frac{4}{9}$ da 4 — 9 ning yarmidan kam (4,5), demak $\\frac{4}{9} < \\frac{1}{2}$.", 'Ориентир $\\frac{1}{2}$: в $\\frac{4}{9}$ числитель 4 меньше половины 9 (4,5), значит, $\\frac{4}{9} < \\frac{1}{2}$.'],
      ["$\\frac{5}{8}$ da 5 — 8 ning yarmidan ko'p (4), demak $\\frac{5}{8} > \\frac{1}{2}$.", 'В $\\frac{5}{8}$ числитель 5 больше половины 8 (4), значит, $\\frac{5}{8} > \\frac{1}{2}$.'],
    ], ['$\\frac{4}{9} < \\frac{5}{8}$', '$\\frac{4}{9} < \\frac{5}{8}$']),
    B.mistake(null, [
      ["Maxrajlarni butun sonlardek solishtirish: «$\\frac{1}{6} > \\frac{1}{4}$, chunki 6 > 4».", 'Сравнивать знаменатели как натуральные числа: «$\\frac{1}{6} > \\frac{1}{4}$, потому что 6 > 4».'],
      ["Turli maxrajda faqat suratlarga qarash: «$\\frac{3}{4} < \\frac{3}{8}$ emas, teng».", 'При разных знаменателях смотреть только на числители: «$\\frac{3}{4}$ и $\\frac{3}{8}$ равны».'],
      ["Turli o'lchamdagi butunlarning qismlarini solishtirish (katta va kichik pitsaning yarmi).", 'Сравнивать доли разных целых (половина большой и маленькой пиццы).'],
    ]),
    B.try(cq('a-m-fc-t1', '2.1.9', { ...M(FC), d: 1, rule: ['Maxraj bir xil — suratni solishtiramiz.', 'Знаменатели равны — сравниваем числители.'] },
      ['$\\frac{5}{9}$ va $\\frac{4}{9}$: qaysi belgi to\'g\'ri?', 'Какой знак верен: $\\frac{5}{9}$ … $\\frac{4}{9}$?'],
      [['>'], ['<', ["5 bo'lak 4 bo'lakdan ko'p.", '5 долей больше 4 долей.']], ['=', ['Suratlar har xil.', 'Числители разные.']], [['Solishtirib bo\'lmaydi', 'Сравнить нельзя'], ["Maxraj bir xil — solishtirish oson.", 'Знаменатели одинаковы — сравнить легко.']]],
      'A', ["To'qqizdan 5 ta bo'lak 4 ta bo'lakdan ko'p.", 'Пять девятых больше четырёх девятых.'])),
    B.method(["Kasrlarni taqqoslashni o'rgatish:", 'Как учить сравнению дробей:'], [
      ["Bir xil uzunlikdagi qog'oz tasmalar: 2, 4, 8 bo'lakka buklash — $\\frac{1}{2} > \\frac{1}{4} > \\frac{1}{8}$ ko'z bilan ko'rinadi.", 'Полоски одинаковой длины: сложить на 2, 4, 8 частей — $\\frac{1}{2} > \\frac{1}{4} > \\frac{1}{8}$ видно глазами.'],
      ["Son nurida kasrlarni joylashtirish: 0, $\\frac{1}{2}$, 1 mo'ljallari.", 'Расположить дроби на числовом луче: ориентиры 0, $\\frac{1}{2}$, 1.'],
      ["«Bir xil butun» qoidasi: solishtirishda har doim bitta butunning qismlari olinadi.", 'Правило «одно и то же целое»: сравниваем доли одного целого.'],
      ["Bolaga tushuntirishni so'rash: «Nega $\\frac{1}{6}$ kichik?» — «Pitsani ko'proq odamga bo'ldik».", 'Просить объяснить: «Почему $\\frac{1}{6}$ меньше?» — «Пиццу разделили на большее число людей».'],
    ]),
    B.summary(null, [
      ["Maxraj bir xil — surat katta, kasr katta.", 'Знаменатели равны — больше дробь с бо́льшим числителем.'],
      ["Surat bir xil — maxraj kichik, kasr katta.", 'Числители равны — больше дробь с меньшим знаменателем.'],
      ["Turli maxraj — umumiy maxraj, $\\frac{1}{2}$ mo'ljali yoki yetishmagan bo'lak.", 'Разные знаменатели — общий знаменатель, ориентир $\\frac{1}{2}$ или недостающая доля.'],
    ]),
  ],
  check: [
    cq('a-m-fc-c1', '2.1.9', { ...M(FC) }, ['Eng katta kasrni tanlang.', 'Выберите наибольшую дробь.'],
      [['$\\frac{3}{5}$'], ['$\\frac{3}{7}$', ["Yettidan bir bo'lak beshdan birdan kichik.", 'Седьмая доля меньше пятой.']], ['$\\frac{3}{10}$', ["O'ndan bir bo'lak eng kichik.", 'Десятая доля самая мелкая.']], ['$\\frac{3}{8}$', ["Sakkizdan bir bo'lak beshdan birdan kichik.", 'Восьмая доля меньше пятой.']]],
      'A', ["Suratlar teng — maxraji eng kichigi eng katta: $\\frac{3}{5}$.", 'Числители равны — больше та, у которой знаменатель меньше: $\\frac{3}{5}$.']),
    cq('a-m-fc-c2', '2.1.9', { ...M(FC) }, ['$\\frac{2}{3}$ va $\\frac{3}{5}$ ni taqqoslang.', 'Сравните $\\frac{2}{3}$ и $\\frac{3}{5}$.'],
      [['$\\frac{2}{3} > \\frac{3}{5}$'], ['$\\frac{2}{3} < \\frac{3}{5}$', ['$\\frac{10}{15} > \\frac{9}{15}$.', '$\\frac{10}{15} > \\frac{9}{15}$.']], ['$\\frac{2}{3} = \\frac{3}{5}$', ['Umumiy maxrajda suratlar har xil.', 'При общем знаменателе числители разные.']], [['Solishtirib bo\'lmaydi', 'Сравнить нельзя'], ['Umumiy maxraj 15 ga keltiriladi.', 'Приводим к общему знаменателю 15.']]],
      'A', ['$\\frac{2}{3} = \\frac{10}{15}$, $\\frac{3}{5} = \\frac{9}{15}$.', '$\\frac{2}{3} = \\frac{10}{15}$, $\\frac{3}{5} = \\frac{9}{15}$.']),
    oq('a-m-fc-c3', '2.1.9', { ...M(FC), d: 3, steps: [['$\\frac{3}{4} = \\frac{9}{12}$.', '$\\frac{3}{4} = \\frac{9}{12}$.'], ['$\\frac{n}{12} > \\frac{9}{12}$ ⇒ $n > 9$.', '$\\frac{n}{12} > \\frac{9}{12}$ ⇒ $n > 9$.']] },
      ['$\\frac{n}{12} > \\frac{3}{4}$ bo\'ladigan eng kichik natural $n$? (son)', 'Наименьшее натуральное $n$, при котором $\\frac{n}{12} > \\frac{3}{4}$? (число)'], '10', ["$n > 9$, eng kichigi 10.", '$n > 9$, наименьшее — 10.'], {}, 10),
    cq('a-m-fc-c4', '2.1.10', { ...M(FC) }, ["O'quvchi: «$\\frac{1}{6} > \\frac{1}{4}$, chunki 6 > 4». Eng yaxshi yordam?", 'Ученик: «$\\frac{1}{6} > \\frac{1}{4}$, потому что 6 > 4». Как лучше помочь?'],
      [[["Bir xil ikki tasmani 6 va 4 bo'lakka bo'lib, bitta bo'laklarni yonma-yon qo'yish", 'Разделить две одинаковые полоски на 6 и на 4 части и приложить по одной доле друг к другу']], [["«Maxraj katta — kasr kichik» qoidasini yodlatish", 'Заучить правило «больше знаменатель — меньше дробь»'], ["Ma'nosiz qoida boshqa holatda yana xatoga olib keladi.", 'Правило без смысла приведёт к ошибке в другом случае.']], [["Umumiy maxrajni tushuntirish", 'Объяснить общий знаменатель'], ["Bu bosqich uchun murakkab; avval bo'lak ma'nosi kerak.", 'Для этого этапа сложно; сначала нужен смысл доли.']], [["Xatoni kuzatmaslik", 'Не обращать внимания'], ["Noto'g'ri tasavvur mustahkamlanadi.", 'Неверное представление закрепится.']]],
      'A', ["Model bo'lak o'lchamini ko'rsatadi: ko'proq bo'lak — kichikroq bo'lak.", 'Модель показывает размер доли: больше частей — мельче доля.']),
    cq('a-m-fc-c5', '2.1.9', { ...M(FC) }, ['$\\frac{7}{8}$ va $\\frac{8}{9}$: qaysi biri katta va nega?', 'Что больше: $\\frac{7}{8}$ или $\\frac{8}{9}$ и почему?'],
      [[["$\\frac{8}{9}$: unga butungacha kichikroq bo'lak ($\\frac{1}{9}$) yetmaydi", '$\\frac{8}{9}$: ей до целого не хватает меньшей доли ($\\frac{1}{9}$)']], [["$\\frac{7}{8}$: maxraji kichik", '$\\frac{7}{8}$: знаменатель меньше'], ["Bu qoida faqat suratlar teng bo'lganda ishlaydi.", 'Это правило работает только при равных числителях.']], [["Teng: ikkalasida bittadan bo'lak yetmaydi", 'Равны: обеим не хватает одной доли'], ["Yetmagan bo'laklar har xil o'lchamda.", 'Недостающие доли разного размера.']], [["$\\frac{8}{9}$: surati katta", '$\\frac{8}{9}$: числитель больше'], ["Javob to'g'ri, lekin sabab noto'g'ri: maxrajlar har xil.", 'Ответ верен, но причина нет: знаменатели разные.']]],
      'A', ['$\\frac{1}{9} < \\frac{1}{8}$, demak $\\frac{8}{9}$ butunga yaqinroq. Tekshiruv: $7 \\cdot 9 = 63 < 64 = 8 \\cdot 8$.', '$\\frac{1}{9} < \\frac{1}{8}$, значит, $\\frac{8}{9}$ ближе к целому. Проверка: $7 \\cdot 9 = 63 < 64 = 8 \\cdot 8$.']),
  ],
});

/* ======================= 6. Operations with fractions ======================= */
const FO = 'math-frac-ops';
export const MATH_FRAC_OPS = lesson({
  id: FO, module: 'math-frac', level: 'core', stage: 'B', minutes: 25, codes: ['2.1.9', '2.1.11'], requires: [FC], sourceIds: S,
  title: ["Kasrlar ustida amallar: bir xil maxraj, sonning ulushi", 'Действия с дробями: одинаковые знаменатели, дробь от числа'],
  blocks: [
    B.intro(["Boshlang'ich sinfda kasrlar bilan ikki asosiy amal bajariladi: bir xil maxrajli kasrlarni qo'shish-ayirish va sonning ulushini (yoki ulushi bo'yicha sonni) topish. Ikkinchisi matnli masalalarda juda ko'p uchraydi.", 'В начальной школе с дробями выполняют два основных действия: сложение и вычитание дробей с одинаковыми знаменателями и нахождение дроби от числа (или числа по его дроби). Второе очень часто встречается в задачах.']),
    B.definition(["**Bir xil maxrajli kasrlar** — bir xil bo'laklar ($\\frac{2}{9}$ va $\\frac{5}{9}$: ikkalasi «to'qqizdan bir» lar). **Sonning ulushi** — sonning qismi: 20 ning $\\frac{3}{4}$ qismi. **Ulushi bo'yicha son** — qismi ma'lum bo'lganda butunni topish.", '**Дроби с одинаковыми знаменателями** — одинаковые доли ($\\frac{2}{9}$ и $\\frac{5}{9}$: обе — «девятые»). **Дробь от числа** — часть числа: $\\frac{3}{4}$ от 20. **Число по его дроби** — нахождение целого, когда известна его часть.']),
    B.formula('\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}, \\qquad \\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}', [["Bir xil bo'laklarni sanaymiz: maxraj (bo'lak nomi) o'zgarmaydi", 'Считаем одинаковые доли: знаменатель (название доли) не меняется']], ["2 ta «to'qqizdan bir» + 5 ta «to'qqizdan bir» = 7 ta «to'qqizdan bir» — xuddi 2 olma + 5 olma = 7 olma.", '2 «девятых» + 5 «девятых» = 7 «девятых» — как 2 яблока + 5 яблок = 7 яблок.']),
    B.formula('P = N : b \\cdot a, \\qquad N = P : a \\cdot b', [["$N$ — butun son, $b$ — maxraj (nechta teng qismga bo'lamiz), $a$ — surat (nechta qism olamiz)", '$N$ — целое, $b$ — знаменатель (на сколько частей делим), $a$ — числитель (сколько частей берём)'], ["$P$ — butunning $\\frac{a}{b}$ qismi (ma'lum qism)", '$P$ — известная часть, равная $\\frac{a}{b}$ целого']], ["Ulush: avval bitta bo'lakni topamiz (bo'lish), keyin kerakli bo'laklar sonini (ko'paytirish). Teskari masala: qismdan bitta bo'lakka (bo'lish), undan butunga (ko'paytirish).", 'Дробь от числа: сначала находим одну долю (делим), затем нужное число долей (умножаем). Обратная задача: от части к одной доле (делим), от доли к целому (умножаем).']),
    B.example(['$\\frac{2}{9} + \\frac{5}{9}$ va $\\frac{7}{10} - \\frac{3}{10}$', '$\\frac{2}{9} + \\frac{5}{9}$ и $\\frac{7}{10} - \\frac{3}{10}$'], [
      { s: ["Suratlarni qo'shamiz, maxraj o'zgarmaydi:", 'Складываем числители, знаменатель оставляем:'], tex: '\\frac{2}{9} + \\frac{5}{9} = \\frac{2 + 5}{9} = \\frac{7}{9}' },
      { s: ['Ayirish ham shunday:', 'Вычитание так же:'], tex: '\\frac{7}{10} - \\frac{3}{10} = \\frac{4}{10}' },
    ], ['$\\frac{7}{9}$; $\\frac{4}{10}$', '$\\frac{7}{9}$; $\\frac{4}{10}$']),
    B.example(["Arqon uzunligi 24 m. Uning $\\frac{5}{6}$ qismi kesib olindi. Necha metr kesildi?", 'Длина верёвки 24 м. Отрезали $\\frac{5}{6}$ её длины. Сколько метров отрезали?'], [
      { s: ["Bitta oltidan bir bo'lak:", 'Одна шестая:'], tex: '24 : 6 = 4' },
      { s: ["Beshta bo'lak:", 'Пять шестых:'], tex: '4 \\cdot 5 = 20' },
    ], ['20 m', '20 м'], ["Chizmada: 24 m li kesmani 6 ta teng qismga bo'lib, 5 tasini bo'yash.", 'На чертеже: отрезок 24 м делим на 6 равных частей и закрашиваем 5.']),
    B.example(["Ali kitobning $\\frac{3}{7}$ qismini o'qidi — bu 18 bet. Kitobda necha bet bor?", 'Али прочитал $\\frac{3}{7}$ книги — это 18 страниц. Сколько страниц в книге?'], [
      { s: ["3 ta bo'lak = 18 bet, bitta bo'lak:", '3 доли = 18 страниц, одна доля:'], tex: '18 : 3 = 6' },
      { s: ["Butun = 7 ta bo'lak:", 'Целое = 7 долей:'], tex: '6 \\cdot 7 = 42' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '42 : 7 \\cdot 3 = 18 \\;\\checkmark' },
    ], ['42 bet', '42 страницы']),
    B.example(["Pitsaning $\\frac{3}{8}$ qismi yeyildi. Qancha qoldi?", 'Съели $\\frac{3}{8}$ пиццы. Сколько осталось?'], [
      { s: ["Butun — $\\frac{8}{8}$:", 'Целое — это $\\frac{8}{8}$:'], tex: '1 - \\frac{3}{8} = \\frac{8}{8} - \\frac{3}{8} = \\frac{5}{8}' },
    ], ['$\\frac{5}{8}$', '$\\frac{5}{8}$']),
    B.mistake(null, [
      ["Maxrajlarni ham qo'shish: $\\frac{2}{9} + \\frac{5}{9} = \\frac{7}{18}$ — natija har bir qo'shiluvchidan kichik bo'lib qoladi (mantiqqa zid).", 'Складывать и знаменатели: $\\frac{2}{9} + \\frac{5}{9} = \\frac{7}{18}$ — сумма оказывается меньше слагаемых (абсурд).'],
      ["Ulush va butun masalalarini almashtirish: «18 bet — $\\frac{3}{7}$» da $18 : 7 \\cdot 3$ hisoblash.", 'Путать задачи на дробь от числа и число по дроби: в «18 страниц — это $\\frac{3}{7}$» считать $18 : 7 \\cdot 3$.'],
      ["Amallar tartibini almashtirish: avval ko'paytirib, keyin bo'lishda xato emas, lekin katta sonlar paydo bo'ladi; boshlang'ich sinfda avval bo'lish qulay.", 'Менять порядок: сначала умножить, потом разделить — не ошибка, но числа растут; в начальной школе удобнее сначала делить.'],
    ]),
    B.try(oq('a-m-fo-t1', '2.1.9', { ...M(FO), d: 1, steps: [['$32 : 4 = 8$.', '$32 : 4 = 8$.']] },
      ['32 ning $\\frac{1}{4}$ qismi nechaga teng? (son)', 'Чему равна $\\frac{1}{4}$ от 32? (число)'], '8', ["32 ni 4 ta teng qismga bo'lamiz: 8.", 'Делим 32 на 4 равные части: 8.'], {}, 8)),
    B.method(["Kasrlar bilan amallarni o'rgatish:", 'Как учить действиям с дробями:'], [
      ["Avval so'z bilan: «2 ta sakkizdan bir + 3 ta sakkizdan bir = 5 ta sakkizdan bir» — maxraj «bo'lak nomi» ekanini his qilish.", 'Сначала словами: «2 восьмых + 3 восьмых = 5 восьмых» — почувствовать, что знаменатель — «название доли».'],
      ["Ulush masalalarida doim chizma: kesma, teng qismlar, ma'lum va noma'lum qismni belgilash.", 'В задачах на дроби всегда чертёж: отрезок, равные части, отметка известного и искомого.'],
      ["Juft masalalar: «20 ning $\\frac{3}{4}$ i» va «$\\frac{3}{4}$ i 15 bo'lgan son» — farqni bolalar chizmadan ko'radi.", 'Парные задачи: «$\\frac{3}{4}$ от 20» и «число, $\\frac{3}{4}$ которого равны 15» — разницу дети видят на чертеже.'],
      ["Natijani mantiq bilan tekshirish: qism butundan kichik bo'lishi kerak.", 'Проверять результат здравым смыслом: часть меньше целого.'],
    ]),
    B.summary(null, [
      ["Bir xil maxraj: suratlar qo'shiladi/ayiriladi, maxraj o'zgarmaydi.", 'Одинаковые знаменатели: числители складываются/вычитаются, знаменатель не меняется.'],
      ['Sonning ulushi: $N : b \\cdot a$.', 'Дробь от числа: $N : b \\cdot a$.'],
      ['Ulushi bo\'yicha son: $P : a \\cdot b$.', 'Число по дроби: $P : a \\cdot b$.'],
    ]),
  ],
  check: [
    oq('a-m-fo-c1', '2.1.9', { ...M(FO), steps: [["Suratlar: $3 + 5 = 8$, maxraj 11.", 'Числители: $3 + 5 = 8$, знаменатель 11.']] },
      ['$\\frac{3}{11} + \\frac{5}{11}$ ni hisoblang (kasr ko\'rinishida, masalan 2/7).', 'Вычислите $\\frac{3}{11} + \\frac{5}{11}$ (дробью, например 2/7).'], '8/11', ['$\\frac{8}{11}$: maxraj o\'zgarmaydi.', '$\\frac{8}{11}$: знаменатель не меняется.']),
    oq('a-m-fo-c2', '2.1.9', { ...M(FO), steps: [['$27 : 3 = 9$ — bitta bo\'lak.', '$27 : 3 = 9$ — одна доля.'], ["$9 \\cdot 2 = 18$.", '$9 \\cdot 2 = 18$.']] },
      ["Sinfda 27 o'quvchi bor, ularning $\\frac{2}{3}$ qismi to'garakka qatnashadi. Nechta o'quvchi qatnashadi? (son)", 'В классе 27 учеников, $\\frac{2}{3}$ из них ходят в кружок. Сколько учеников ходят в кружок? (число)'], '18', ['$27 : 3 \\cdot 2 = 18$.', '$27 : 3 \\cdot 2 = 18$.'], {}, 18),
    oq('a-m-fo-c3', '2.1.11', { ...M(FO), d: 3, steps: [["3 ta bo'lak = 24, bitta bo'lak: $24 : 3 = 8$.", '3 доли = 24, одна доля: $24 : 3 = 8$.'], ["Butun: $8 \\cdot 8 = 64$.", 'Целое: $8 \\cdot 8 = 64$.']] },
      ["Do'konga keltirilgan tarvuzlarning $\\frac{3}{8}$ qismi sotildi — bu 24 ta tarvuz. Jami nechta tarvuz keltirilgan edi? (son)", 'В магазине продали $\\frac{3}{8}$ привезённых арбузов — это 24 арбуза. Сколько арбузов привезли? (число)'], '64', ['$24 : 3 \\cdot 8 = 64$; tekshirish: $64 : 8 \\cdot 3 = 24$.', '$24 : 3 \\cdot 8 = 64$; проверка: $64 : 8 \\cdot 3 = 24$.'], {}, 64),
    cq('a-m-fo-c4', '2.1.9', { ...M(FO) }, ['$1 - \\frac{2}{7}$ ifodaning qiymatini toping.', 'Найдите значение выражения $1 - \\frac{2}{7}$.'],
      [['$\\frac{5}{7}$'], ['$\\frac{1}{7}$', ["1 ni $\\frac{1}{7}$ deb olingan; butun = $\\frac{7}{7}$.", 'Единицу приняли за $\\frac{1}{7}$; целое = $\\frac{7}{7}$.']], ['$\\frac{3}{7}$', ["7 − 2 − 2: ikki marta ayirilgan.", 'Вычли дважды.']], ['$-\\frac{1}{7}$', ["1 − 2 = −1 deb suratlar bilan noto'g'ri ishlangan.", 'Неверно: 1 − 2 = −1 в числителе.']]],
      'A', ['$\\frac{7}{7} - \\frac{2}{7} = \\frac{5}{7}$.', '$\\frac{7}{7} - \\frac{2}{7} = \\frac{5}{7}$.']),
    cq('a-m-fo-c5', '2.1.9', { ...M(FO) }, ["O'quvchi yozdi: $\\frac{3}{5} + \\frac{1}{5} = \\frac{4}{10}$. Xatoni qanday ko'rsatish mumkin?", 'Ученик написал: $\\frac{3}{5} + \\frac{1}{5} = \\frac{4}{10}$. Как показать ошибку?'],
      [[["Tasmada $\\frac{3}{5}$ va $\\frac{1}{5}$ ni bo'yatib, natija $\\frac{4}{10}$ (ya'ni yarmidan kam) bo'lishi mumkin emasligini ko'rsatish", 'Закрасить на полоске $\\frac{3}{5}$ и $\\frac{1}{5}$ и показать, что результат не может быть $\\frac{4}{10}$ (меньше половины)']], [["Qoidani qayta aytish", 'Повторить правило'], ["Bola nega xato ekanini ko'rmaydi.", 'Ребёнок не увидит, почему это ошибка.']], [["Javobni to'g'ri deb qabul qilish", 'Принять ответ как верный'], ["$\\frac{4}{10} < \\frac{3}{5}$ — yig'indi qo'shiluvchidan kichik bo'lmaydi.", '$\\frac{4}{10} < \\frac{3}{5}$ — сумма не может быть меньше слагаемого.']], [["Faqat umumiy maxrajni o'rgatish", 'Учить только общему знаменателю'], ["Maxraj bir xil — muammo bo'lak ma'nosida.", 'Знаменатели одинаковы — проблема в смысле доли.']]],
      'A', ["Model qarama-qarshilikni ko'rsatadi: to'g'ri javob $\\frac{4}{5}$.", 'Модель показывает противоречие: верный ответ $\\frac{4}{5}$.']),
    oq('a-m-fo-c6', '2.1.11', { ...M(FO), steps: [["O'qilgan: $36 : 9 \\cdot 5 = 20$.", 'Прочитано: $36 : 9 \\cdot 5 = 20$.'], ['Qolgan: $36 - 20 = 16$.', 'Осталось: $36 - 20 = 16$.']] },
      ["Kitob 36 betli. Dilnoza uning $\\frac{5}{9}$ qismini o'qidi. Necha bet o'qilmay qoldi? (son)", 'В книге 36 страниц. Дильноза прочитала $\\frac{5}{9}$ книги. Сколько страниц осталось прочитать? (число)'], '16', ["Muqobil: qolgani $\\frac{4}{9}$: $36 : 9 \\cdot 4 = 16$.", 'Другой способ: осталось $\\frac{4}{9}$: $36 : 9 \\cdot 4 = 16$.'], {}, 16),
  ],
});

/* ======================= 7. Time ======================= */
const TM = 'math-time';
export const MATH_TIME = lesson({
  id: TM, module: 'math-geo', level: 'core', stage: 'C', minutes: 22, codes: ['2.2.7', '2.2.8'], requires: ['math-units'], sourceIds: S,
  title: ["Vaqt: birliklar, oraliqlar, soat", 'Время: единицы, промежутки, часы'],
  blocks: [
    B.intro(["Vaqt — o'nlik sistemaga bo'ysunmaydigan yagona «kundalik» kattalik: 1 soatda 100 emas, 60 daqiqa. Shuning uchun bolalar (va kattalar ham) bu yerda eng ko'p xato qiladi.", 'Время — единственная «бытовая» величина, которая не подчиняется десятичной системе: в часе не 100, а 60 минут. Поэтому здесь чаще всего ошибаются и дети, и взрослые.']),
    B.definition(["**Vaqt momenti** — soat ko'rsatgan payt (8:45). **Vaqt oralig'i (davomiylik)** — ikki moment orasidagi vaqt (45 daqiqa). **Sutka** — 24 soat; 24 soatlik yozuvda 15:00 = kunduzi soat 3.", '**Момент времени** — то, что показывают часы (8:45). **Промежуток (продолжительность)** — время между двумя моментами (45 минут). **Сутки** — 24 часа; в 24-часовой записи 15:00 = 3 часа дня.']),
    B.table([['Birlik', 'Единица'], ['Munosabat', 'Соотношение']], [
      [['1 daqiqa', '1 минута'], ['60 soniya', '60 секунд']],
      [['1 soat', '1 час'], ['60 daqiqa', '60 минут']],
      [['1 sutka', '1 сутки'], ['24 soat', '24 часа']],
      [['1 hafta', '1 неделя'], ['7 sutka', '7 суток']],
      [['1 oy', '1 месяц'], ['28, 29, 30 yoki 31 sutka', '28, 29, 30 или 31 сутки']],
      [['1 yil', '1 год'], ['12 oy; 365 yoki 366 (kabisa) sutka', '12 месяцев; 365 или 366 (високосный) суток']],
      [['1 asr', '1 век'], ['100 yil', '100 лет']],
    ], ["Vaqt birliklari", 'Единицы времени']),
    B.rule(["Katta birlikdan kichikka — ko'paytiramiz (3 soat = $3 \\cdot 60$ daqiqa); kichikdan kattaga — bo'lamiz, qoldiq kichik birlikda qoladi (250 daqiqa = 4 soat 10 daqiqa). Davomiylikni topishda **yaxlit soatgacha** sanash qulay: 7:50 → 8:00 (10 daq) → 10:00 (2 soat) → 10:20 (20 daq).", 'От крупной единицы к мелкой — умножаем (3 часа = $3 \\cdot 60$ минут); от мелкой к крупной — делим, остаток остаётся в мелкой единице (250 мин = 4 ч 10 мин). Продолжительность удобно считать **через целый час**: 7:50 → 8:00 (10 мин) → 10:00 (2 ч) → 10:20 (20 мин).']),
    B.formula('t_2 = t_1 + \\Delta t, \\qquad \\Delta t = t_2 - t_1', [["$t_1$ — boshlanish momenti, $t_2$ — tugash momenti, $\\Delta t$ — davomiylik", '$t_1$ — момент начала, $t_2$ — момент окончания, $\\Delta t$ — продолжительность'], ["Daqiqalar 60 dan oshsa, 60 daqiqa = 1 soat qilib o'tkaziladi", 'Если минут больше 60, 60 минут переводят в 1 час']]),
    B.example(["3 soat 15 daqiqani daqiqalarda ifodalang.", 'Выразите 3 ч 15 мин в минутах.'], [
      { s: ["Soatlarni daqiqaga:", 'Часы в минуты:'], tex: '3 \\cdot 60 = 180' },
      { s: ["Qo'shamiz:", 'Складываем:'], tex: '180 + 15 = 195' },
    ], ['195 daqiqa', '195 минут']),
    B.example(["Dars 8:45 da boshlanadi va 45 daqiqa davom etadi. U qachon tugaydi?", 'Урок начинается в 8:45 и длится 45 минут. Когда он закончится?'], [
      ["8:45 dan 9:00 gacha — 15 daqiqa.", 'С 8:45 до 9:00 — 15 минут.'],
      ["Qolgan $45 - 15 = 30$ daqiqa: 9:00 + 30 daqiqa = 9:30.", 'Осталось $45 - 15 = 30$ минут: 9:00 + 30 мин = 9:30.'],
    ], ['9:30', '9:30'], ["Muqobil: $45 + 45 = 90$ daqiqa = 1 soat 30 daqiqa → 8 soat + 1 soat 30 daq = 9:30.", 'Другой способ: $45 + 45 = 90$ мин = 1 ч 30 мин → 8 ч + 1 ч 30 мин = 9:30.']),
    B.example(["Avtobus 7:50 da jo'nadi va 10:20 da yetib keldi. Yo'lda qancha vaqt bo'ldi?", 'Автобус отправился в 7:50 и прибыл в 10:20. Сколько времени он был в пути?'], [
      ['7:50 → 8:00: 10 daqiqa.', '7:50 → 8:00: 10 минут.'],
      ['8:00 → 10:00: 2 soat.', '8:00 → 10:00: 2 часа.'],
      ['10:00 → 10:20: 20 daqiqa.', '10:00 → 10:20: 20 минут.'],
      ["Jami: 2 soat 30 daqiqa.", 'Всего: 2 ч 30 мин.'],
    ], ['2 soat 30 daqiqa', '2 ч 30 мин'], ["Ustun bilan ayirishda: 10:20 − 7:50 → «qarz» olamiz: 9 soat 80 daq − 7 soat 50 daq = 2 soat 30 daq.", 'Вычитание столбиком: 10:20 − 7:50 → занимаем час: 9 ч 80 мин − 7 ч 50 мин = 2 ч 30 мин.']),
    B.example(['250 daqiqa necha soat va necha daqiqa?', 'Сколько часов и минут в 250 минутах?'], [
      { s: ["60 ga bo'lamiz:", 'Делим на 60:'], tex: '250 = 60 \\cdot 4 + 10' },
    ], ['4 soat 10 daqiqa', '4 ч 10 мин']),
    B.mistake(null, [
      ["1 soat = 100 daqiqa deb hisoblash: 2,5 soat = «2 soat 50 daqiqa» (to'g'ri: 2 soat 30 daqiqa).", 'Считать 1 час = 100 минут: 2,5 часа = «2 ч 50 мин» (верно: 2 ч 30 мин).'],
      ["Vaqt momenti va davomiylikni chalkashtirish: «dars 9:30 davom etdi».", 'Путать момент и продолжительность: «урок длился 9:30».'],
      ["Ayirishda soatdan qarz olganda 100 qo'shish (60 o'rniga).", 'При вычитании «занимать» из часа 100 минут вместо 60.'],
      ["Yarim tundan o'tishni hisobga olmaslik (21:35 + 3 soat 50 daqiqa).", 'Не учитывать переход через полночь (21:35 + 3 ч 50 мин).'],
    ]),
    B.try(oq('a-m-tm-t1', '2.2.7', { ...M(TM), d: 1, steps: [['$3 \\cdot 60 = 180$.', '$3 \\cdot 60 = 180$.']] },
      ["Uch soatlik ekskursiya necha daqiqa davom etadi? (son)", 'Сколько минут длится трёхчасовая экскурсия? (число)'], '180', ['1 soat = 60 daqiqa, $3 \\cdot 60 = 180$.', '1 час = 60 минут, $3 \\cdot 60 = 180$.'], {}, 180)),
    B.method(["Vaqtni o'rgatish:", 'Как учить времени:'], [
      ["Strelkali soat modeli: bola strelkalarni o'zi buradi; daqiqa strelkasi aylanib chiqqanda soat strelkasi bitta raqamga o'tadi.", 'Модель часов со стрелками: ребёнок сам вращает стрелки; когда минутная делает круг, часовая переходит на одно деление.'],
      ["Vaqt chizig'i (son nuriga o'xshash): yaxlit soatlarni belgilab, «sakrash» bilan davomiylikni topish.", 'Линия времени (как числовой луч): отметить целые часы и находить продолжительность «прыжками».'],
      ["Kun tartibi jadvali: o'quvchining o'z kuni bo'yicha masalalar.", 'Таблица режима дня: задачи по собственному дню ученика.'],
      ["Kalendar bilan ishlash: oylar va hafta kunlari, kabisa yili.", 'Работа с календарём: месяцы, дни недели, високосный год.'],
    ]),
    B.summary(null, [
      ['1 soat = 60 daqiqa, 1 daqiqa = 60 soniya, 1 sutka = 24 soat.', '1 ч = 60 мин, 1 мин = 60 с, 1 сутки = 24 ч.'],
      ["Davomiylik — yaxlit soat orqali sanash.", 'Продолжительность — счёт через целый час.'],
      ["Qarz olinganda 1 soat = 60 daqiqa.", 'При «займе» 1 час = 60 минут.'],
    ]),
  ],
  check: [
    oq('a-m-tm-c1', '2.2.8', { ...M(TM), steps: [['$2 \\cdot 60 + 40$.', '$2 \\cdot 60 + 40$.']] },
      ['2 soat 40 daqiqa — necha daqiqa? (son)', 'Сколько минут в 2 ч 40 мин? (число)'], '160', ['$120 + 40 = 160$.', '$120 + 40 = 160$.'], {}, 160),
    oq('a-m-tm-c2', '2.2.7', { ...M(TM), d: 3, steps: [['21:35 + 25 daqiqa = 22:00.', '21:35 + 25 мин = 22:00.'], ["Qoldi 3 soat 25 daqiqa: 22:00 → 1:25 (keyingi kun).", 'Осталось 3 ч 25 мин: 22:00 → 1:25 (следующие сутки).']] },
      ["Poyezd 21:35 da jo'nadi va yo'lda 3 soat 50 daqiqa bo'ldi. U soat nechada yetib keldi? (masalan, 05:10)", 'Поезд отправился в 21:35 и был в пути 3 ч 50 мин. Во сколько он прибыл? (например, 05:10)'], '01:25',
      ["Yarim tundan o'tamiz: 21:35 + 3:50 = 25:25 → 25 − 24 = 1, ya'ni 01:25.", 'Переходим через полночь: 21:35 + 3:50 = 25:25 → 25 − 24 = 1, то есть 01:25.'], { uz: ['1:25'], ru: ['1:25'] }),
    cq('a-m-tm-c3', '2.2.8', { ...M(TM) }, ['Chorak soat — necha daqiqa?', 'Сколько минут в четверти часа?'],
      [[['15 daqiqa', '15 минут']], [['25 daqiqa', '25 минут'], ["1 soat = 100 daqiqa deb olingan.", 'Час приняли за 100 минут.']], [['4 daqiqa', '4 минуты'], ["Chorak — to'rtdan bir, 60 : 4.", 'Четверть — это 60 : 4.']], [['40 daqiqa', '40 минут'], ["60 dan 4 marta kam bo'lishi kerak.", 'Должно быть в 4 раза меньше 60.']]],
      'A', ['$60 : 4 = 15$.', '$60 : 4 = 15$.']),
    cq('a-m-tm-c4', '2.2.7', { ...M(TM) }, ["Film 9:40 da boshlanib, 11:15 da tugadi. Qancha davom etdi?", 'Фильм начался в 9:40 и закончился в 11:15. Сколько он длился?'],
      [[['1 soat 35 daqiqa', '1 ч 35 мин']], [['2 soat 25 daqiqa', '2 ч 25 мин'], ["Soat va daqiqalar alohida ayirilgan: 11 − 9 va 40 − 15.", 'Часы и минуты вычитали по отдельности: 11 − 9 и 40 − 15.']], [['1 soat 75 daqiqa', '1 ч 75 мин'], ["Qarzda 100 olingan (115 − 40).", 'При займе взяли 100 (115 − 40).']], [['2 soat 35 daqiqa', '2 ч 35 мин'], ["9:40 dan 10:00 gacha 20 daqiqa, keyin 1 soat 15 daqiqa — jami 1 soat 35.", 'С 9:40 до 10:00 — 20 мин, затем 1 ч 15 мин — всего 1 ч 35 мин.']]],
      'A', ['9:40 → 10:00 (20 daq) → 11:00 (1 soat) → 11:15 (15 daq).', '9:40 → 10:00 (20 мин) → 11:00 (1 ч) → 11:15 (15 мин).']),
    cq('a-m-tm-c5', '2.2.8', { ...M(TM) }, ["3-sinf o'quvchilari davomiylikni hisoblashda ko'p adashadi. Qaysi vosita eng ko'p yordam beradi?", 'Третьеклассники часто ошибаются при вычислении продолжительности. Какое средство поможет больше всего?'],
      [[["Yaxlit soatlar belgilangan vaqt chizig'i va «sakrashlar»", 'Линия времени с отметками целых часов и «прыжки»']], [["Faqat ustun bilan ayirish", 'Только вычитание столбиком'], ["60 lik qarz bolalarga mavhum; avval model kerak.", 'Займ 60 минут абстрактен; сначала нужна модель.']], [["Elektron soatdagi raqamlarni ayirish", 'Вычитать цифры электронных часов'], ["Bu 100 lik xatoga olib keladi.", 'Это ведёт к ошибке «как с сотней».']], [["Birliklar jadvalini yodlatish", 'Заучить таблицу единиц'], ["Jadval davomiylikni hisoblashni o'rgatmaydi.", 'Таблица не учит считать промежутки.']]],
      'A', ["Vaqt chizig'i 60 lik tuzilishni ko'rinadigan qiladi.", 'Линия времени делает видимой «шестидесятеричную» структуру.']),
  ],
});

/* ======================= 8. Motion problems ======================= */
const MO = 'math-motion';
export const MATH_MOTION = lesson({
  id: MO, module: 'math-prob', level: 'core', stage: 'B', minutes: 28, codes: ['2.1.11', '2.2.8'], requires: ['math-word-problems', 'math-mult-div'], sourceIds: S,
  title: ["Harakatga doir masalalar: tezlik, vaqt, masofa", 'Задачи на движение: скорость, время, расстояние'],
  blocks: [
    B.intro(["Harakat masalalari 4-sinf matematikasining markazida turadi va imtihonda muntazam uchraydi. Ularning hammasi bitta bog'lanishga tayanadi: masofa = tezlik × vaqt. Qolgani — chizma va tezliklarni to'g'ri birlashtirish.", 'Задачи на движение — центр математики 4 класса и регулярно встречаются на экзамене. Все они опираются на одну связь: расстояние = скорость × время. Остальное — чертёж и правильное объединение скоростей.']),
    B.definition(["**Tezlik** ($v$) — vaqt birligida bosib o'tilgan masofa (km/soat, m/daq). **Vaqt** ($t$) — harakat davomiyligi. **Masofa** ($s$) — bosib o'tilgan yo'l. **Yaqinlashish tezligi** — qarama-qarshi harakatda ikki jism orasidagi masofaning 1 soatda kamayishi. **Uzoqlashish tezligi** — qarama-qarshi tomonlarga harakatda masofaning 1 soatda ortishi.", '**Скорость** ($v$) — расстояние, пройденное за единицу времени (км/ч, м/мин). **Время** ($t$) — продолжительность движения. **Расстояние** ($s$) — пройденный путь. **Скорость сближения** — на сколько за 1 час уменьшается расстояние между телами при встречном движении. **Скорость удаления** — на сколько за 1 час растёт расстояние при движении в противоположные стороны.']),
    B.formula('s = v \\cdot t, \\qquad v = s : t, \\qquad t = s : v', [["$s$ — masofa, $v$ — tezlik, $t$ — vaqt", '$s$ — расстояние, $v$ — скорость, $t$ — время']], ["Kelib chiqishi: tezlik 60 km/soat — har soatda 60 km. 3 soatda — 3 marta 60 km: $60 \\cdot 3 = 180$. Bu ko'paytirishning ma'nosi (teng qo'shiluvchilar). Qolgan ikki formula — noma'lum ko'paytuvchini topish qoidasi.", 'Откуда формула: скорость 60 км/ч — каждый час по 60 км. За 3 часа — 3 раза по 60 км: $60 \\cdot 3 = 180$. Это смысл умножения (одинаковые слагаемые). Две другие формулы — правило нахождения неизвестного множителя.']),
    B.formula('t = s : (v_1 + v_2), \\qquad s = (v_1 + v_2) \\cdot t', [["Qarama-qarshi harakat (bir-biriga qarab): har soatda oradagi masofa $v_1 + v_2$ ga kamayadi", 'Встречное движение: каждый час расстояние уменьшается на $v_1 + v_2$'], ["Qarama-qarshi tomonlarga (bir nuqtadan): $t$ soatdan keyin masofa $(v_1 + v_2) \\cdot t$", 'В противоположные стороны (из одной точки): через $t$ ч расстояние $(v_1 + v_2) \\cdot t$']]),
    B.rule(["Yechish tartibi: 1) chizma — kesma, boshlanish nuqtalari, strelkalar, tezliklar, savol; 2) jadval: $v$, $t$, $s$ ustunlari; 3) birliklarni tekshirish (km/soat bilan soat, m/daq bilan daqiqa); 4) formula; 5) javobning ma'nosini tekshirish. Bir yo'nalishdagi harakatda (quvib yetish) tezliklar ayiriladi: $v_1 - v_2$.", 'Порядок решения: 1) чертёж — отрезок, точки старта, стрелки, скорости, вопрос; 2) таблица: столбцы $v$, $t$, $s$; 3) проверка единиц (км/ч с часами, м/мин с минутами); 4) формула; 5) проверка смысла ответа. При движении в одном направлении (догонялки) скорости вычитают: $v_1 - v_2$.']),
    B.table(['', '$v$', '$t$', '$s$'], [
      [['Avtomobil', 'Автомобиль'], ['60 km/soat', '60 км/ч'], ['3 soat', '3 ч'], ['?', '?']],
      [['Velosipedchi', 'Велосипедист'], ['?', '?'], ['4 soat', '4 ч'], ['48 km', '48 км']],
    ], ["Masala jadvali", 'Таблица к задаче']),
    B.example(["Avtomobil 60 km/soat tezlik bilan 3 soat yurdi. U qancha masofa bosib o'tdi?", 'Автомобиль ехал 3 ч со скоростью 60 км/ч. Какое расстояние он проехал?'], [
      { s: ['$s = v \\cdot t$:', '$s = v \\cdot t$:'], tex: 's = 60 \\cdot 3 = 180' },
    ], ['180 km', '180 км']),
    B.example(["Velosipedchi 48 km ni 4 soatda bosib o'tdi. Uning tezligi qanday?", 'Велосипедист проехал 48 км за 4 ч. С какой скоростью он ехал?'], [
      { s: ['$v = s : t$:', '$v = s : t$:'], tex: 'v = 48 : 4 = 12' },
      ['Tekshirish: $12 \\cdot 4 = 48$.', 'Проверка: $12 \\cdot 4 = 48$.'],
    ], ['12 km/soat', '12 км/ч']),
    B.example(["Oralaridagi masofa 27 km bo'lgan ikki qishloqdan bir vaqtda bir-biriga qarab ikki piyoda yo'lga chiqdi. Birinchisining tezligi 4 km/soat, ikkinchisiniki 5 km/soat. Ular necha soatdan keyin uchrashadi?", 'Из двух сёл, расстояние между которыми 27 км, одновременно навстречу друг другу вышли два пешехода. Скорость первого 4 км/ч, второго 5 км/ч. Через сколько часов они встретятся?'], [
      ["Chizma: 27 km li kesma, uchlaridan bir-biriga qarab strelkalar (4 va 5).", 'Чертёж: отрезок 27 км, с концов навстречу друг другу стрелки (4 и 5).'],
      { s: ["Yaqinlashish tezligi:", 'Скорость сближения:'], tex: '4 + 5 = 9' },
      { s: ['Uchrashish vaqti:', 'Время до встречи:'], tex: '27 : 9 = 3' },
      ['Tekshirish: $4 \\cdot 3 + 5 \\cdot 3 = 12 + 15 = 27$.', 'Проверка: $4 \\cdot 3 + 5 \\cdot 3 = 12 + 15 = 27$.'],
    ], ['3 soatdan keyin', 'Через 3 ч'], ["Soatma-soat jadval: 1 soatdan keyin orada 18 km, 2 soatdan keyin 9 km, 3 soatdan keyin 0.", 'Таблица по часам: через 1 ч между ними 18 км, через 2 ч — 9 км, через 3 ч — 0.']),
    B.example(["Bir bekatdan qarama-qarshi tomonlarga ikki avtobus jo'nadi: 70 km/soat va 80 km/soat. 2 soatdan keyin ular orasidagi masofa qancha bo'ladi?", 'От одной остановки в противоположные стороны выехали два автобуса: 70 км/ч и 80 км/ч. Каким будет расстояние между ними через 2 ч?'], [
      { s: ['1-usul — uzoqlashish tezligi:', '1-й способ — скорость удаления:'], tex: '(70 + 80) \\cdot 2 = 150 \\cdot 2 = 300' },
      { s: ["2-usul — har birining yo'li:", '2-й способ — путь каждого:'], tex: '70 \\cdot 2 + 80 \\cdot 2 = 140 + 160 = 300' },
    ], ['300 km', '300 км'], ["Ikki usulning bir xil javobi — taqsimot xossasining ko'rinishi.", 'Одинаковый ответ двух способов — проявление распределительного свойства.']),
    B.mistake(null, [
      ["Birliklarni aralashtirish: 2 soat 30 daqiqani «2,30 soat» deb ko'paytirish.", 'Смешивать единицы: умножать на «2,30 часа» вместо 2 ч 30 мин.'],
      ["Qarama-qarshi harakatda tezliklarni ayirish yoki bitta tezlik bilan hisoblash.", 'При встречном движении вычитать скорости или считать по одной скорости.'],
      ["Chizmasiz yechish — yo'nalish (bir-biriga qarab / qarama-qarshi tomonga / bir tomonga) adashtiriladi.", 'Решать без чертежа — путается направление (навстречу / в разные стороны / в одну сторону).'],
      ["Tezlik birligini yozmaslik yoki masofa birligini yozish: «tezlik 60 km».", 'Не писать единицу скорости или писать единицу расстояния: «скорость 60 км».'],
    ]),
    B.try(oq('a-m-mo-t1', '2.1.11', { ...M(MO), d: 1, steps: [['$s = 15 \\cdot 4$.', '$s = 15 \\cdot 4$.']] },
      ["Qayiq 15 km/soat tezlik bilan 4 soat suzdi. Qancha km yo'l bosdi? (son)", 'Лодка плыла 4 ч со скоростью 15 км/ч. Сколько километров она проплыла? (число)'], '60', ['$15 \\cdot 4 = 60$ km.', '$15 \\cdot 4 = 60$ км.'], {}, 60)),
    B.method(["Harakat masalalarini o'rgatish:", 'Как учить задачам на движение:'], [
      ["Sinfda «jonli» model: ikki o'quvchi doskaning ikki chetidan bir-biriga qarab qadam tashlaydi; har «soat»da masofa ikki qadamga qisqaradi.", 'Живая модель в классе: два ученика идут навстречу от краёв доски; за каждый «час» расстояние сокращается на два шага.'],
      ["Har bir masalaga chizma va $v$–$t$–$s$ jadvali majburiy.", 'К каждой задаче — обязательный чертёж и таблица $v$–$t$–$s$.'],
      ["Bir masaladan uchta teskari masala: $s$, $v$, $t$ ni navbatma-navbat noma'lum qilish.", 'Из одной задачи — три обратные: по очереди делать неизвестным $s$, $v$, $t$.'],
      ["Soatma-soat jadval — formulagacha bo'lgan qadam: bolalar yaqinlashish tezligini o'zi «kashf» qiladi.", 'Таблица по часам — шаг до формулы: дети сами «открывают» скорость сближения.'],
    ]),
    B.summary(null, [
      ['$s = v \\cdot t$; $v = s : t$; $t = s : v$.', '$s = v \\cdot t$; $v = s : t$; $t = s : v$.'],
      ["Bir-biriga qarab va qarama-qarshi tomonlarga — tezliklar qo'shiladi; bir tomonga — ayiriladi.", 'Навстречу и в противоположные стороны — скорости складываются; в одну сторону — вычитаются.'],
      ["Chizma, jadval, birliklar — har doim.", 'Чертёж, таблица, единицы — всегда.'],
    ]),
  ],
  check: [
    oq('a-m-mo-c1', '2.1.11', { ...M(MO), steps: [['$t = s : v = 20 : 5$.', '$t = s : v = 20 : 5$.']] },
      ["Piyoda 5 km/soat tezlik bilan 20 km yo'l yurdi. U necha soat yurgan? (son)", 'Пешеход прошёл 20 км со скоростью 5 км/ч. Сколько часов он шёл? (число)'], '4', ['$t = s : v = 20 : 5 = 4$ soat.', '$t = s : v = 20 : 5 = 4$ ч.'], {}, 4),
    oq('a-m-mo-c2', '2.1.11', { ...M(MO), d: 3, steps: [["Yaqinlashish tezligi: $50 + 70 = 120$.", 'Скорость сближения: $50 + 70 = 120$.'], ['$360 : 120 = 3$.', '$360 : 120 = 3$.']] },
      ["Ikki shahar orasi 360 km. Ulardan bir vaqtda bir-biriga qarab yuk mashinasi (50 km/soat) va avtomobil (70 km/soat) chiqdi. Necha soatdan keyin uchrashadi? (son)", 'Расстояние между городами 360 км. Из них одновременно навстречу друг другу выехали грузовик (50 км/ч) и легковой автомобиль (70 км/ч). Через сколько часов они встретятся? (число)'], '3', ['$360 : (50 + 70) = 3$ soat.', '$360 : (50 + 70) = 3$ ч.'], {}, 3),
    oq('a-m-mo-c3', '2.1.11', { ...M(MO), steps: [["Uzoqlashish tezligi: $15 + 12 = 27$.", 'Скорость удаления: $15 + 12 = 27$.'], ['$27 \\cdot 3 = 81$.', '$27 \\cdot 3 = 81$.']] },
      ["Bir pristandan qarama-qarshi tomonlarga ikki kater suzib ketdi: 15 km/soat va 12 km/soat. 3 soatdan keyin ular orasidagi masofa necha km? (son)", 'От одной пристани в противоположные стороны отплыли два катера: 15 км/ч и 12 км/ч. Каким будет расстояние между ними через 3 ч (км)? (число)'], '81', ['$(15 + 12) \\cdot 3 = 81$ km.', '$(15 + 12) \\cdot 3 = 81$ км.'], {}, 81),
    cq('a-m-mo-c4', '2.2.8', { ...M(MO) }, ["Mashina 120 km ni 2 soatda bosib o'tdi. Tezlikning to'g'ri yozuvi qaysi?", 'Машина проехала 120 км за 2 ч. Какая запись скорости верна?'],
      [[['60 km/soat', '60 км/ч']], [['240 km/soat', '240 км/ч'], ["Bo'lish o'rniga ko'paytirilgan.", 'Умножили вместо деления.']], [['60 km', '60 км'], ["Bu masofa birligi, tezlik emas.", 'Это единица расстояния, а не скорости.']], [['118 km/soat', '118 км/ч'], ["Ayirish ishlatilgan.", 'Использовано вычитание.']]],
      'A', ['$v = 120 : 2 = 60$ km/soat.', '$v = 120 : 2 = 60$ км/ч.']),
    oq('a-m-mo-c5', '2.1.11', { ...M(MO), d: 4, steps: [["Yaqinlashish tezligi: $220 : 2 = 110$.", 'Скорость сближения: $220 : 2 = 110$.'], ['Ikkinchisi: $110 - 60 = 50$.', 'Второй: $110 - 60 = 50$.']] },
      ["Oralig'i 220 km bo'lgan ikki shahardan bir-biriga qarab bir vaqtda ikki mashina chiqdi va 2 soatdan keyin uchrashdi. Birinchisining tezligi 60 km/soat. Ikkinchisining tezligi qanday (km/soat)? (son)", 'Из двух городов, расстояние между которыми 220 км, одновременно навстречу друг другу выехали две машины и встретились через 2 ч. Скорость первой 60 км/ч. Какова скорость второй (км/ч)? (число)'], '50', ['$220 : 2 - 60 = 50$; tekshirish: $(60 + 50) \\cdot 2 = 220$.', '$220 : 2 - 60 = 50$; проверка: $(60 + 50) \\cdot 2 = 220$.'], {}, 50),
    cq('a-m-mo-c6', '2.1.11', { ...M(MO) }, ["Uchrashma harakat masalasini birinchi marta kiritishda eng samarali usul?", 'Как эффективнее всего впервые ввести задачи на встречное движение?'],
      [[["Chizma va soatma-soat jadval: har soatda masofa qanchaga kamayishini bolalar o'zi topadi", 'Чертёж и таблица по часам: дети сами находят, на сколько уменьшается расстояние за час']], [["Yaqinlashish tezligi formulasini darhol berish", 'Сразу дать формулу скорости сближения'], ["Ma'nosiz formula yo'nalishlarni chalkashtirishga olib keladi.", 'Формула без смысла ведёт к путанице направлений.']], [["Faqat og'zaki tushuntirish", 'Только устное объяснение'], ["Harakatni ko'rmasdan tushunish qiyin.", 'Без наглядности движение трудно представить.']], [["Darsliksiz test yechish", 'Сразу решать тесты'], ["Avval model, keyin mashq.", 'Сначала модель, потом тренировка.']]],
      'A', ["Model → kashfiyot → formula: bilim tushunilgan holda o'zlashtiriladi.", 'Модель → открытие → формула: знание усваивается осознанно.']),
  ],
});

export const MATH3_LESSONS = [MATH_EQUATIONS, MATH_UNKNOWN, MATH_DIVISIBILITY, MATH_DIV_TESTS, MATH_FRAC_COMPARE, MATH_FRAC_OPS, MATH_TIME, MATH_MOTION];
