// Mathematics course: full lessons (subject knowledge + teaching method).
import { B, cq, lesson, oq } from './build';

const AREA = 'math-area-rect';
const AM = { lang: 'both' as const, lesson: AREA, src: ['math14', 'bikbayeva', 'jumayev2020'] };

export const MATH_AREA = lesson({
  id: AREA, module: 'math-geo', level: 'core', minutes: 20, codes: ['2.2.7', '2.2.8', '2.2.9'], sourceIds: AM.src,
  title: ["To'g'ri to'rtburchakning yuzi", 'Площадь прямоугольника'],
  blocks: [
    B.intro(["Xona poliga gilam yoki plitka kerak. Qancha sotib olish kerak? Bunda xonaning atrofini o'lchash yetmaydi — pol qancha joyni egallashini bilish kerak. Shu kattalik yuza deyiladi.",
      'В комнату нужен ковёр или плитка. Сколько купить? Обойти комнату по краю и измерить мало — нужно знать, сколько места занимает пол. Эта величина и называется площадью.']),
    B.definition(["**Yuza** — tekis figura qancha joyni egallashini ko'rsatuvchi kattalik. U figurani bo'shliqsiz va ustma-ust tushmasdan qoplaydigan birlik kvadratlar soni bilan o'lchanadi.",
      '**Площадь** — величина, показывающая, сколько места занимает плоская фигура. Её измеряют числом единичных квадратов, которые покрывают фигуру без промежутков и наложений.']),
    B.explain(["Yuza birligi — kvadrat. **1 sm²** (bir kvadrat santimetr) — tomoni 1 sm bo'lgan kvadratning yuzi. Uzunlik birligi (sm) chiziqni o'lchaydi, yuza birligi (sm²) esa sirtni.",
      'Единица площади — квадрат. **1 см²** (квадратный сантиметр) — площадь квадрата со стороной 1 см. Единица длины (см) измеряет линию, единица площади (см²) — поверхность.'],
      [["Yuza — ichki qism, perimetr — chegara.", 'Площадь — «внутренность», периметр — граница.'],
       ["«Kvadrat» so'zi birlik shaklini bildiradi: sm² = sm × sm.", 'Слово «квадратный» описывает форму мерки: см² = см × см.']]),
    B.widget('areagrid', ["Bo'yi va enini o'zgartiring: kataklar soni va perimetr qanday o'zgarishini kuzating.", 'Меняйте длину и ширину и наблюдайте, как меняются число клеток и периметр.']),
    B.why(["Tomonlari a va b bo'lgan to'g'ri to'rtburchakda b ta qator bor, har bir qatorda a ta birlik kvadrat. Bir xil qo'shiluvchilarni qo'shish — ko'paytirish: a + a + … + a (b marta) = a · b. Formula yod olinadigan qoida emas, kataklarni tez sanash usuli.",
      'В прямоугольнике со сторонами a и b — b рядов, в каждом a единичных квадратов. Сложение одинаковых слагаемых — это умножение: a + a + … + a (b раз) = a · b. Формула — не заклинание, а быстрый способ сосчитать клетки.']),
    B.formula('S = a \\cdot b', [
      ['$S$ — yuza (kvadrat birliklarda)', '$S$ — площадь (в квадратных единицах)'],
      ["$a$ — bo'yi, $b$ — eni; ikkalasi **bir xil** birlikda", '$a$ — длина, $b$ — ширина; обе в **одинаковых** единицах'],
    ], ["Noma'lum tomon: $b = S : a$, $a = S : b$ (ko'paytirish va bo'lish o'zaro teskari).", 'Неизвестная сторона: $b = S : a$, $a = S : b$ (умножение и деление взаимно обратны).']),
    B.table([['', ''], ['Perimetr', 'Периметр'], ['Yuza', 'Площадь']], [
      [['Nimani o\'lchaydi', 'Что измеряет'], ['Chegara uzunligi', 'Длину границы'], ['Egallagan joy', 'Занимаемое место']],
      [['Birlik', 'Единицы'], ['mm, sm, dm, m', 'мм, см, дм, м'], ['mm², sm², dm², m²', 'мм², см², дм², м²']],
      [['Formula', 'Формула'], ['$P = 2(a+b)$', '$P = 2(a+b)$'], ['$S = a \\cdot b$', '$S = a \\cdot b$']],
      [['5 × 3 misol', 'Пример 5 × 3'], ['16 sm', '16 см'], ['15 sm²', '15 см²']],
    ], ['Perimetr va yuza', 'Периметр и площадь']),
    B.example(["Xona bo'yi 6 m, eni 4 m. Polning yuzi qancha?", 'Длина комнаты 6 м, ширина 4 м. Чему равна площадь пола?'], [
      ["Birliklar bir xilmi? Ha, ikkalasi metrda.", 'Единицы одинаковые? Да, обе в метрах.'],
      { s: ['Formulani qo\'llaymiz:', 'Применяем формулу:'], tex: 'S = 6 \\cdot 4 = 24' },
      ["Javobni kvadrat birlikda yozamiz.", 'Записываем ответ в квадратных единицах.'],
    ], ['S = 24 m²', 'S = 24 м²']),
    B.example(["To'g'ri to'rtburchak yuzi 48 sm², bo'yi 8 sm. Enini toping.", 'Площадь прямоугольника 48 см², длина 8 см. Найдите ширину.'], [
      ["S = a · b, demak b — noma'lum ko'paytuvchi.", 'S = a · b, значит, b — неизвестный множитель.'],
      { s: ["Noma'lum ko'paytuvchini topish uchun ko'paytmani ma'lum ko'paytuvchiga bo'lamiz:", 'Чтобы найти неизвестный множитель, делим произведение на известный множитель:'], tex: 'b = 48 : 8 = 6' },
      { s: ['Tekshiramiz:', 'Проверяем:'], tex: '8 \\cdot 6 = 48' },
    ], ['b = 6 sm', 'b = 6 см']),
    B.table([['Birlik', 'Единица'], ['Teng', 'Равно'], ['Nega', 'Почему']], [
      [['1 sm²', '1 см²'], ['100 mm²', '100 мм²'], ['10 mm × 10 mm', '10 мм × 10 мм']],
      [['1 dm²', '1 дм²'], ['100 sm²', '100 см²'], ['10 sm × 10 sm', '10 см × 10 см']],
      [['1 m²', '1 м²'], ['100 dm² = 10 000 sm²', '100 дм² = 10 000 см²'], ['100 sm × 100 sm', '100 см × 100 см']],
      [['1 a (sotix)', '1 а (сотка)'], ['100 m²', '100 м²'], ['10 m × 10 m', '10 м × 10 м']],
      [['1 ga', '1 га'], ['10 000 m²', '10 000 м²'], ['100 m × 100 m', '100 м × 100 м']],
    ], ['Yuza birliklari', 'Единицы площади']),
    B.example(['3 dm² necha sm²?', 'Сколько квадратных сантиметров в 3 дм²?'], [
      ["1 dm = 10 sm, shuning uchun 1 dm² — tomoni 10 sm bo'lgan kvadrat: 10 · 10 = 100 sm².", '1 дм = 10 см, поэтому 1 дм² — квадрат со стороной 10 см: 10 · 10 = 100 см².'],
      { s: ['Demak:', 'Значит:'], tex: '3 \\cdot 100 = 300' },
    ], ['300 sm²', '300 см²'], ["Uzunlik birliklarida qo'shni birliklar 10 marta, yuza birliklarida esa 100 marta farq qiladi.", 'У единиц длины соседние единицы отличаются в 10 раз, у единиц площади — в 100 раз.']),
    B.exception(null, [
      ["**Kvadrat** — tomonlari teng to'g'ri to'rtburchak: $S = a \\cdot a = a^2$.", '**Квадрат** — прямоугольник с равными сторонами: $S = a \\cdot a = a^2$.'],
      ["**Murakkab figura**ni to'g'ri to'rtburchaklarga bo'lib, yuzlarni qo'shish yoki katta to'rtburchakdan kesilgan qismni ayirish mumkin.", '**Сложную фигуру** можно разбить на прямоугольники и сложить их площади или из большого прямоугольника вычесть вырезанную часть.'],
      ["Perimetrlari teng figuralarning yuzlari har xil bo'lishi mumkin: 5×1 va 3×3 — ikkalasida P = 12, lekin S = 5 va S = 9.", 'У фигур с равными периметрами площади могут быть разными: 5×1 и 3×3 — у обоих P = 12, но S = 5 и S = 9.'],
    ]),
    B.example(["8 sm × 5 sm to'g'ri to'rtburchak burchagidan tomoni 3 sm bo'lgan kvadrat kesib olindi. Qolgan figuraning yuzi?", 'Из угла прямоугольника 8 см × 5 см вырезали квадрат со стороной 3 см. Какова площадь оставшейся фигуры?'], [
      { s: ['Butun to\'rtburchak:', 'Весь прямоугольник:'], tex: '8 \\cdot 5 = 40' },
      { s: ['Kesilgan kvadrat:', 'Вырезанный квадрат:'], tex: '3 \\cdot 3 = 9' },
      { s: ['Ayiramiz:', 'Вычитаем:'], tex: '40 - 9 = 31' },
    ], ['31 sm²', '31 см²'], ["Figurani ikki to'rtburchakka bo'lish: 8×2 = 16 va 5×3 = 15, jami 31 sm².", 'Разбить фигуру на два прямоугольника: 8×2 = 16 и 5×3 = 15, всего 31 см².']),
    B.mistake(null, [
      ["Yuza o'rniga perimetrni topish (tomonlarni qo'shish) va «sm²» deb yozish.", 'Находят периметр (складывают стороны) и пишут «см²».'],
      ["Javobda sm² o'rniga sm yozish — yuza bilan uzunlikni farqlamaslik belgisi.", 'Пишут см вместо см² — признак того, что площадь не отличают от длины.'],
      ["Turli birliklarni ko'paytirish: 2 m × 50 sm = 100. Avval bir xil birlikka o'tkazish kerak: 200 sm × 50 sm = 10 000 sm² = 1 m².", 'Умножают разные единицы: 2 м × 50 см = 100. Сначала переводят в одинаковые: 200 см × 50 см = 10 000 см² = 1 м².'],
      ["1 m² = 100 sm² deb o'ylash (uzunlikdagi 100 ni ko'chirish). To'g'ri: 1 m² = 10 000 sm².", 'Считают, что 1 м² = 100 см² (переносят «100» из длины). Верно: 1 м² = 10 000 см².'],
    ]),
    B.try(oq('a-m-area-t1', '2.2.9', { ...AM, d: 1, rule: ['S = a · b', 'S = a · b'] },
      ["To'g'ri to'rtburchakning bo'yi 7 sm, eni 5 sm. Yuzi necha sm²? (son)", 'Длина прямоугольника 7 см, ширина 5 см. Чему равна площадь в см²? (число)'],
      '35', ['7 · 5 = 35 sm².', '7 · 5 = 35 см².'], {}, 35)),
    B.apply(null, [
      ["Ta'mirlash: bo'yoq, gilam, plitka miqdori yuza bo'yicha hisoblanadi.", 'Ремонт: краску, ковёр, плитку рассчитывают по площади.'],
      ["Tomorqa, sotix va gektar — yer yuzasi birliklari.", 'Огород, сотка и гектар — единицы площади земли.'],
    ]),
    B.method(["Kichik maktab yoshida yuza tushunchasi formula bilan emas, **o'lchov tajribasi** bilan boshlanadi.", 'У младших школьников понятие площади начинается не с формулы, а с **опыта измерения**.'], [
      ["1-qadam: figuralarni ustma-ust qo'yib solishtirish («qaysi biri ko'p joy egallaydi?»).", 'Шаг 1: сравнение фигур наложением («какая занимает больше места?»).'],
      ["2-qadam: bir xil o'lchovlar (kvadratchalar, palitka) bilan qoplab sanash; har xil o'lchov — har xil son, shuning uchun umumiy birlik kerak.", 'Шаг 2: покрытие одинаковыми мерками (квадратики, палетка) и пересчёт; разные мерки дают разные числа — нужна общая единица.'],
      ["3-qadam: 1 sm² ni qirqib, qo'lda ushlab ko'rish.", 'Шаг 3: вырезать 1 см² и подержать в руках.'],
      ["4-qadam: qatorlarni sanash → ko'paytirish → formula. Bolaning o'zi «qatorlar × qatordagi kataklar» qonuniyatini topsin.", 'Шаг 4: счёт рядами → умножение → формула. Пусть ребёнок сам откроет закономерность «число рядов × клеток в ряду».'],
      ["Perimetr va yuzani qarama-qarshi qo'ying: «to'siq» (perimetr) va «gilam» (yuza) vazifalari.", 'Противопоставляйте периметр и площадь: задачи «забор» (периметр) и «ковёр» (площадь).'],
      ["Tushunishni tekshirish: «1 sm² ni ko'rsat», «Perimetri 12 bo'lgan, yuzi har xil ikki to'rtburchak chiz».", 'Проверка понимания: «Покажи 1 см²», «Нарисуй два прямоугольника с периметром 12 и разной площадью».'],
      ["Xato sababi ko'pincha formula ma'nosiz yodlangani — ma'noga qayting: kataklar modeli.", 'Причина ошибок чаще всего в том, что формула заучена без смысла, — возвращайтесь к модели клеток.'],
    ]),
    B.summary(null, [
      ["Yuza — figura egallagan joy, kvadrat birliklarda o'lchanadi.", 'Площадь — место, занимаемое фигурой; измеряется в квадратных единицах.'],
      ['$S = a \\cdot b$: qatorlar soni × qatordagi kvadratlar soni.', '$S = a \\cdot b$: число рядов × число квадратов в ряду.'],
      ["Tomonlar bir xil birlikda bo'lishi shart.", 'Стороны должны быть в одинаковых единицах.'],
      ['1 dm² = 100 sm², 1 m² = 10 000 sm².', '1 дм² = 100 см², 1 м² = 10 000 см².'],
    ]),
  ],
  check: [
    cq('a-m-area-c1', '2.2.9', { ...AM, rule: ['Yuza: S = a · b (kvadrat birliklar). Perimetr: P = 2(a + b) (uzunlik birliklari).', 'Площадь: S = a · b (квадратные единицы). Периметр: P = 2(a + b) (единицы длины).'],
      steps: [['Bu yuza haqidagi masala — tomonlarni ko\'paytiramiz.', 'Задача на площадь — перемножаем стороны.'], ['6 · 4 = 24 sm².', '6 · 4 = 24 см².']] },
      ["O'quvchi 6 sm × 4 sm to'g'ri to'rtburchak yuzini shunday topdi: 6 + 4 + 6 + 4 = 20 sm². Xato qayerda?", 'Ученик нашёл площадь прямоугольника 6 см × 4 см так: 6 + 4 + 6 + 4 = 20 см². Где ошибка?'],
      [
        [["U perimetrni topgan va unga yuza birligini yozgan", 'Он нашёл периметр и подписал единицы площади']],
        [["Qo'shishda xato bor", 'Ошибка в сложении'], ["Yig'indi to'g'ri: 20. Xato amalni tanlashda.", 'Сумма верна: 20. Ошибка — в выборе действия.']],
        [['6 + 4 = 10 deb topish kerak edi', 'Нужно было найти 6 + 4 = 10'], ["Bu yarim perimetr, yuza emas.", 'Это полупериметр, а не площадь.']],
        [["Xato yo'q", 'Ошибки нет'], ['Yuza 6 · 4 = 24 sm², 20 emas.', 'Площадь 6 · 4 = 24 см², а не 20.']],
      ], 'A', ["Yuza 24 sm²; o'quvchi topgan 20 — perimetr (sm da).", 'Площадь 24 см²; найденные 20 — это периметр (в см).']),
    oq('a-m-area-c2', '2.2.9', { ...AM, rule: ["Noma'lum tomon: b = S : a.", 'Неизвестная сторона: b = S : a.'], steps: [['56 : 8 = 7', '56 : 8 = 7'], ['Tekshirish: 8 · 7 = 56', 'Проверка: 8 · 7 = 56']] },
      ["Yer uchastkasi to'g'ri to'rtburchak shaklida, yuzi 56 m², bo'yi 8 m. Eni necha metr? (son)", 'Участок прямоугольной формы, площадь 56 м², длина 8 м. Какова ширина в метрах? (число)'],
      '7', ['b = 56 : 8 = 7 m.', 'b = 56 : 8 = 7 м.'], {}, 7),
    cq('a-m-area-c3', '2.2.8', { ...AM, d: 3, rule: ['1 m² = 100 sm × 100 sm = 10 000 sm².', '1 м² = 100 см × 100 см = 10 000 см².'], steps: [['1 m² = 10 000 sm²', '1 м² = 10 000 см²'], ['5 · 10 000 = 50 000 sm²', '5 · 10 000 = 50 000 см²']] },
      ['5 m² necha sm²?', 'Сколько см² в 5 м²?'],
      [
        [['500', '500'], ["Uzunlikdagidek 100 ga ko'paytirilgan; yuzada 10 000 ga ko'paytirish kerak.", 'Умножили на 100, как для длины; для площади нужно на 10 000.']],
        [['5 000', '5 000'], ["1 m² = 1 000 sm² deb olingan — bunday munosabat yo'q.", 'Взяли 1 м² = 1 000 см² — такого соотношения нет.']],
        [['50 000', '50 000']],
        [['500 000', '500 000'], ["100 000 ga ko'paytirilgan — bir nol ortiqcha.", 'Умножили на 100 000 — лишний нуль.']],
      ], 'C', ['5 m² = 50 000 sm².', '5 м² = 50 000 см².']),
    cq('a-m-area-c4', '2.2.9', { ...AM, rule: ["Perimetrlari teng figuralarning yuzlari har xil bo'lishi mumkin.", 'При равных периметрах площади могут быть разными.'],
      steps: [['6×2: P = 16, S = 12', '6×2: P = 16, S = 12'], ['4×4: P = 16, S = 16', '4×4: P = 16, S = 16']] },
      ["6 sm × 2 sm to'g'ri to'rtburchak va tomoni 4 sm kvadrat berilgan. Qaysi fikr to'g'ri?", 'Даны прямоугольник 6 см × 2 см и квадрат со стороной 4 см. Какое утверждение верно?'],
      [
        [["Perimetrlari ham, yuzalari ham teng", 'Равны и периметры, и площади'], ['Yuzalar 12 va 16 — teng emas.', 'Площади 12 и 16 — не равны.']],
        [["Perimetrlari teng, yuzalari har xil", 'Периметры равны, площади разные']],
        [["Yuzalari teng, perimetrlari har xil", 'Площади равны, периметры разные'], ['Ikkalasida P = 16; yuzalar har xil.', 'У обоих P = 16; разные именно площади.']],
        [["Ikkalasi ham har xil", 'Различаются и периметры, и площади'], ['Perimetrlari teng: 2(6+2) = 2(4+4) = 16.', 'Периметры равны: 2(6+2) = 2(4+4) = 16.']],
      ], 'B', ['P = 16 sm ikkalasida; S = 12 sm² va 16 sm².', 'P = 16 см у обоих; S = 12 см² и 16 см².']),
    oq('a-m-area-c5', '2.2.9', { ...AM, d: 3, rule: ["Murakkab figura: butun to'rtburchakdan kesilgan qismni ayirish.", 'Сложная фигура: из целого прямоугольника вычесть вырезанную часть.'],
      steps: [['10 · 6 = 60', '10 · 6 = 60'], ['4 · 4 = 16', '4 · 4 = 16'], ['60 − 16 = 44', '60 − 16 = 44']] },
      ["10 sm × 6 sm to'g'ri to'rtburchakdan tomoni 4 sm kvadrat kesib olindi. Qolgan figuraning yuzi necha sm²? (son)", 'Из прямоугольника 10 см × 6 см вырезали квадрат со стороной 4 см. Чему равна площадь оставшейся фигуры в см²? (число)'],
      '44', ['60 − 16 = 44 sm².', '60 − 16 = 44 см².'], {}, 44),
    cq('a-m-area-c6', '2.2.9', { ...AM, rule: ["Yuza o'lchov tajribasidan boshlanadi: qoplash va sanash, so'ng formula.", 'Площадь вводится через опыт измерения: покрыть и сосчитать, затем формула.'] },
      ["3-sinfda yuza tushunchasini kiritishning eng to'g'ri yo'li qaysi?", 'Как правильнее всего ввести понятие площади в 3 классе?'],
      [
        [["Darhol S = a · b formulasini berib, misollar yechish", 'Сразу дать формулу S = a · b и решать примеры'], ["Formula ma'nosiz yodlanadi, perimetr bilan chalkashtiriladi.", 'Формула заучивается без смысла и путается с периметром.']],
        [["Tomonlarni chizg'ich bilan o'lchab qo'shish", 'Измерить стороны линейкой и сложить'], ['Bu perimetr, yuza emas.', 'Это периметр, а не площадь.']],
        [["Figuralarni bir xil kvadratchalar bilan qoplab sanash, so'ng qatorlar bo'yicha sanashdan formulaga o'tish", 'Покрыть фигуры одинаковыми квадратиками и сосчитать, затем от счёта рядами перейти к формуле']],
        [["Yuza birliklari jadvalini yod oldirish", 'Выучить таблицу единиц площади'], ["Jadval tushuncha shakllangandan keyin kerak.", 'Таблица нужна после того, как сформировано понятие.']],
      ], 'C', ["O'lchov tajribasi → birlik → qatorlar → formula: tushunchaning mazmuni saqlanadi.", 'Опыт измерения → мерка → ряды → формула: смысл понятия сохраняется.']),
  ],
});

/* ---------------- fractions ---------------- */

const FR = 'math-fractions-intro';
const FM = { lang: 'both' as const, lesson: FR, src: ['bikbayeva', 'math14'] };

export const MATH_FRACTIONS = lesson({
  id: FR, module: 'math-frac', level: 'intro', minutes: 20, codes: ['2.1.9'], sourceIds: FM.src,
  title: ['Ulushlar va kasrlar: asoslar', 'Доли и дроби: основы'],
  blocks: [
    B.intro(["To'rt do'st bitta pishiriqni teng bo'lishmoqchi. Har biri qancha oladi? «Bittadan» ham, «yarimtadan» ham emas — butunning to'rtdan biri. Kasrlar aynan shunday — butunning teng qismlarini nomlash uchun kerak.",
      'Четверо друзей хотят поровну разделить один пирог. Сколько достанется каждому? Не «по одному» и не «по половине» — одна четвёртая часть целого. Дроби нужны именно для того, чтобы называть равные части целого.']),
    B.definition(["**Ulush** — butunning teng qismlaridan biri. **Kasr** — butunning bir nechta teng ulushi.", '**Доля** — одна из равных частей целого. **Дробь** — одна или несколько равных долей целого.']),
    B.formula('\\frac{a}{b}', [
      ["$b$ — **maxraj**: butun nechta teng qismga bo'lingan", '$b$ — **знаменатель**: на сколько равных частей разделили целое'],
      ["$a$ — **surat**: nechta shunday qism olingan", '$a$ — **числитель**: сколько таких частей взяли'],
    ], ['Masalan, $\\frac{3}{4}$: butun 4 teng qismga bo\'lingan, 3 tasi olingan.', 'Например, $\\frac{3}{4}$: целое разделили на 4 равные части и взяли 3.']),
    B.rule(["Qismlar **teng** bo'lishi shart. Butun teng bo'lmagan to'rt qismga bo'linsa, ulardan biri «to'rtdan bir» emas.", 'Части обязательно **равные**. Если целое разделили на четыре неравные части, ни одна из них не «одна четвёртая».']),
    B.widget('fractions', ["Ikki kasrni taqqoslang: butun bir xil, qismlar soni o'zgaradi.", 'Сравните две доли: целое одинаковое, меняется число частей.']),
    B.explain(["Kasrlarni taqqoslash:", 'Сравнение дробей:'], [
      ["Butun bir xil bo'lsa, qismlar ko'p bo'lsa — har biri kichik: $\\frac{1}{3} > \\frac{1}{5}$.", 'При одинаковом целом: чем больше частей, тем меньше каждая: $\\frac{1}{3} > \\frac{1}{5}$.'],
      ['Maxrajlar teng — suratni taqqoslaymiz: $\\frac{2}{7} < \\frac{5}{7}$.', 'Знаменатели равны — сравниваем числители: $\\frac{2}{7} < \\frac{5}{7}$.'],
      ["Suratlar teng — maxraji katta kasr kichik: $\\frac{3}{8} < \\frac{3}{5}$.", 'Числители равны — меньше та дробь, у которой знаменатель больше: $\\frac{3}{8} < \\frac{3}{5}$.'],
    ]),
    B.example(['20 ning $\\frac{3}{4}$ qismini toping.', 'Найдите $\\frac{3}{4}$ от 20.'], [
      { s: ["Avval bitta ulush: 20 ni 4 ga bo'lamiz.", 'Сначала одна доля: делим 20 на 4.'], tex: '20 : 4 = 5' },
      { s: ['3 ta ulush olamiz:', 'Берём 3 доли:'], tex: '5 \\cdot 3 = 15' },
    ], ['15', '15'], ["Avval ko'paytirib, keyin bo'lish: 20 · 3 : 4 = 15.", 'Сначала умножить, потом разделить: 20 · 3 : 4 = 15.']),
    B.example(["Sonning $\\frac{2}{5}$ qismi 12 ga teng. Sonni toping.", 'Две пятых числа равны 12. Найдите число.'], [
      { s: ["2 ulush = 12, demak 1 ulush:", '2 доли = 12, значит, 1 доля:'], tex: '12 : 2 = 6' },
      { s: ['Butun — 5 ulush:', 'Целое — 5 долей:'], tex: '6 \\cdot 5 = 30' },
      ["Tekshirish: 30 : 5 · 2 = 12 ✓", 'Проверка: 30 : 5 · 2 = 12 ✓'],
    ], ['30', '30']),
    B.exception(null, [
      ['$\\frac{4}{4} = 1$ — barcha qismlar olinsa, butun hosil bo\'ladi.', '$\\frac{4}{4} = 1$ — если взяли все части, получилось целое.'],
      ["Surat maxrajdan katta bo'lsa ($\\frac{5}{4}$), kasr 1 dan katta — bu noto'g'ri kasr.", 'Если числитель больше знаменателя ($\\frac{5}{4}$), дробь больше 1 — это неправильная дробь.'],
      ["Turli butunlarning ulushlarini taqqoslab bo'lmaydi: katta tarvuzning $\\frac{1}{4}$ qismi kichik olmaning $\\frac{1}{2}$ qismidan katta bo'lishi mumkin.", 'Доли разных целых сравнивать нельзя: $\\frac{1}{4}$ большого арбуза может быть больше $\\frac{1}{2}$ маленького яблока.'],
    ]),
    B.mistake(null, [
      ["«$\\frac{1}{5} > \\frac{1}{3}$, chunki 5 > 3» — natural sonlar qoidasini kasrlarga ko'chirish.", '«$\\frac{1}{5} > \\frac{1}{3}$, потому что 5 > 3» — перенос правил натуральных чисел на дроби.'],
      ["Teng bo'lmagan qismlarni «to'rtdan bir» deb atash.", 'Называть «четвертью» неравные части.'],
      ["20 ning $\\frac{3}{4}$ qismini 20 : 3 · 4 deb hisoblash — surat va maxrajni almashtirish.", 'Находить $\\frac{3}{4}$ от 20 как 20 : 3 · 4 — путать числитель и знаменатель.'],
    ]),
    B.try(oq('a-m-fr-t1', '2.1.9', { ...FM, d: 1, steps: [['18 : 3 = 6', '18 : 3 = 6'], ['6 · 2 = 12', '6 · 2 = 12']] },
      ['18 ning $\\frac{2}{3}$ qismi nechaga teng? (son)', 'Сколько составляют $\\frac{2}{3}$ от 18? (число)'], '12', ['Bitta ulush 18 : 3 = 6, ikkitasi 6 · 2 = 12.', 'Одна доля 18 : 3 = 6, две доли 6 · 2 = 12.'], {}, 12)),
    B.method(["Kasrlar — boshlang'ich matematikaning eng qiyin mavzularidan biri: bola natural sonlar tajribasiga tayanadi.", 'Дроби — одна из самых трудных тем начальной математики: ребёнок опирается на опыт натуральных чисел.'], [
      ["Amaliyotdan boshlang: qog'oz tasmani buklab teng qismlarga bo'lish, qismlarni nomlash.", 'Начинайте с действий: складывать полоску бумаги, делить на равные части, называть части.'],
      ["Uch xil modeldan foydalaning: yuza (doira, to'rtburchak), uzunlik (tasma, son nuri), to'plam (12 ta konfetning $\\frac{1}{3}$ qismi).", 'Используйте три модели: площадь (круг, прямоугольник), длина (полоска, числовой луч), множество ($\\frac{1}{3}$ от 12 конфет).'],
      ["«Kasrlar devori» bilan taqqoslang: $\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{4}$ tasmalarini ustma-ust qo'yish.", 'Сравнивайте на «стене дробей»: полоски $\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{4}$ одна под другой.'],
      ["Xatoning sababi — «katta son katta qiymat» degan odat. Uni model bilan qarama-qarshi qo'ying: «Pishiriqni 3 kishiga yoki 5 kishiga bo'lsak, kimning bo'lagi kattaroq?»", 'Причина ошибок — привычка «больше число — больше значение». Сталкивайте её с моделью: «Пирог делят на 3 или на 5 человек — у кого кусок больше?»'],
      ["Tushunishni tekshirish: «$\\frac{1}{4}$ ni uch xil usulda ko'rsat», «Bu to'rtdan bir bo'lagimi? Nega?» (teng bo'lmagan bo'laklar).", 'Проверка понимания: «Покажи $\\frac{1}{4}$ тремя способами», «Это четверть? Почему?» (неравные части).'],
    ]),
    B.summary(null, [
      ["Ulush — butunning teng qismlaridan biri; teng bo'lmasa, ulush emas.", 'Доля — одна из равных частей целого; если части неравные, это не доля.'],
      ['Maxraj — nechta qismga bo\'lingan, surat — nechta olingan.', 'Знаменатель — на сколько частей разделили, числитель — сколько взяли.'],
      ["Sonning kasrini topish: maxrajga bo'lib, suratga ko'paytirish.", 'Дробь от числа: разделить на знаменатель и умножить на числитель.'],
      ["Kasr bo'yicha sonni topish: suratga bo'lib, maxrajga ko'paytirish.", 'Число по его дроби: разделить на числитель и умножить на знаменатель.'],
    ]),
  ],
  check: [
    cq('a-m-fr-c1', '2.1.9', { ...FM, rule: ["Butun bir xil bo'lsa, maxraj katta — ulush kichik.", 'При одинаковом целом: больше знаменатель — меньше доля.'] },
      ['Qaysi ulush katta: $\\frac{1}{6}$ yoki $\\frac{1}{4}$?', 'Какая доля больше: $\\frac{1}{6}$ или $\\frac{1}{4}$?'],
      [
        [['$\\frac{1}{6}$', '$\\frac{1}{6}$'], ["6 > 4, lekin butun ko'proq qismga bo'lingan — har bir qism kichikroq.", '6 > 4, но целое разделено на большее число частей — каждая часть меньше.']],
        [['$\\frac{1}{4}$', '$\\frac{1}{4}$']],
        [['Teng', 'Равны'], ['Qismlar soni har xil, demak qismlar ham har xil.', 'Число частей разное — значит, и части разные.']],
        [["Taqqoslab bo'lmaydi", 'Сравнить нельзя'], ["Butun bir xil bo'lsa, taqqoslash mumkin.", 'Если целое одно и то же, сравнить можно.']],
      ], 'B', ["Butun 4 qismga bo'linsa, har bir qism 6 qismdagidan katta: $\\frac{1}{4} > \\frac{1}{6}$.", 'Если целое разделить на 4 части, каждая часть больше, чем при делении на 6: $\\frac{1}{4} > \\frac{1}{6}$.']),
    oq('a-m-fr-c2', '2.1.9', { ...FM, steps: [['35 : 5 = 7', '35 : 5 = 7'], ['7 · 3 = 21', '7 · 3 = 21']] },
      ["Sinfda 35 o'quvchi, ularning $\\frac{3}{5}$ qismi ekskursiyaga bordi. Necha o'quvchi bordi? (son)", 'В классе 35 учеников, $\\frac{3}{5}$ из них поехали на экскурсию. Сколько учеников поехали? (число)'],
      '21', ["Bitta ulush 35 : 5 = 7 o'quvchi, uchtasi 7 · 3 = 21.", 'Одна доля 35 : 5 = 7 учеников, три доли 7 · 3 = 21.'], {}, 21),
    oq('a-m-fr-c3', '2.1.9', { ...FM, d: 3, rule: ["Kasr bo'yicha sonni topish: suratga bo'lib, maxrajga ko'paytirish.", 'Число по дроби: разделить на числитель, умножить на знаменатель.'], steps: [['15 : 3 = 5 (bitta ulush)', '15 : 3 = 5 (одна доля)'], ['5 · 8 = 40', '5 · 8 = 40']] },
      ["Kitobning $\\frac{3}{8}$ qismi 15 betni tashkil etadi. Kitobda necha bet bor? (son)", '$\\frac{3}{8}$ книги составляют 15 страниц. Сколько страниц в книге? (число)'],
      '40', ['Bitta ulush 15 : 3 = 5 bet, butun kitob 5 · 8 = 40 bet.', 'Одна доля 15 : 3 = 5 страниц, вся книга 5 · 8 = 40 страниц.'], {}, 40),
    cq('a-m-fr-c4', '2.1.9', { ...FM, rule: ["Ulush — faqat teng qismlardan biri.", 'Доля — только одна из равных частей.'] },
      ["O'quvchi doirani teng bo'lmagan 4 bo'lakka bo'lib, bittasini «to'rtdan bir» deb atadi. O'qituvchi nima qilgani ma'qul?", 'Ученик разделил круг на 4 неравных куска и назвал один из них «одной четвёртой». Как лучше поступить учителю?'],
      [
        [["To'g'ri deb qabul qilish: bo'laklar soni 4 ta", 'Принять ответ: кусков ведь 4'], ["Qismlar teng emas — bu ulush emas.", 'Части не равны — это не доля.']],
        [["Bo'laklarni ustma-ust qo'yib solishtirish va teng bo'lishi kerakligini o'quvchining o'zi aniqlashiga yordam berish", 'Наложить куски друг на друга и помочь ученику самому увидеть, что они должны быть равными']],
        [["Qoidani yozdirish", 'Продиктовать правило'], ["Qoida yod olinadi, lekin tushunilmaydi.", 'Правило запомнится, но не будет понято.']],
        [["Keyingi mavzuga o'tish", 'Перейти к следующей теме'], ["Noto'g'ri tasavvur saqlanib qoladi.", 'Неверное представление закрепится.']],
      ], 'B', ["Ustma-ust qo'yish — teng ekanini tekshirishning ko'rgazmali usuli.", 'Наложение — наглядный способ проверить равенство частей.']),
    oq('a-m-fr-c5', '2.1.9', { ...FM, steps: [['24 : 6 = 4', '24 : 6 = 4'], ['4 · 5 = 20', '4 · 5 = 20']] },
      ["Lenta uzunligi 24 sm. Uning $\\frac{5}{6}$ qismi necha sm? (son)", 'Длина ленты 24 см. Сколько сантиметров составляют $\\frac{5}{6}$ её длины? (число)'],
      '20', ['24 : 6 · 5 = 20 sm.', '24 : 6 · 5 = 20 см.'], {}, 20),
  ],
});

export const MATH_LESSONS = [MATH_AREA, MATH_FRACTIONS];
