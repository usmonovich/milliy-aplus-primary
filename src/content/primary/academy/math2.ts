// Mathematics — foundation batch: numbers, operations, units, perimeter, word problems.
import { B, cq, lesson, oq } from './build';

const S = ['math14', 'bikbayeva', 'jumayev2020', 'tojiyev2012'];
const M = (lessonId: string) => ({ lang: 'both' as const, lesson: lessonId, src: S });

/* ======================= 1. Place value ======================= */
const PV = 'math-place-value';
export const MATH_PLACE_VALUE = lesson({
  id: PV, module: 'math-num', level: 'intro', stage: 'F', minutes: 20, codes: ['2.1.2', '2.1.1'], sourceIds: S,
  title: ["Ko'p xonali sonlar: xonalar va sinflar", 'Многозначные числа: разряды и классы'],
  blocks: [
    B.intro(["Atigi 10 ta raqam (0–9) bilan istalgan sonni yozish mumkin. Bu qanday ishlaydi? 303 sonida ikkita «3» bor, lekin ular har xil qiymatga ega: biri 300, ikkinchisi 3. Sir — raqamning **o'rnida**.",
      'Всего десятью цифрами (0–9) можно записать любое число. Как это работает? В числе 303 две «тройки», но они значат разное: одна — 300, другая — 3. Секрет — в **месте** цифры.']),
    B.definition(["**Raqam** — sonni yozish uchun belgi (0–9). **Son** — miqdor. **Xona** — raqamning sondagi o'rni (birlar, o'nlar, yuzlar…). **Sinf** — o'ngdan boshlab uchtadan guruhlangan xonalar: birlar sinfi, minglar sinfi, millionlar sinfi.",
      '**Цифра** — знак для записи чисел (0–9). **Число** — количество. **Разряд** — место цифры в записи числа (единицы, десятки, сотни…). **Класс** — группа из трёх разрядов, считая справа: класс единиц, класс тысяч, класс миллионов.']),
    B.table([['Millionlar sinfi', 'Класс миллионов'], ['Minglar sinfi', 'Класс тысяч'], ['Birlar sinfi', 'Класс единиц']], [
      [["yuz mln · o'n mln · mln", 'сот. млн · дес. млн · млн'], ["yuz ming · o'n ming · ming", 'сот. тыс. · дес. тыс. · тыс.'], ["yuzlar · o'nlar · birlar", 'сотни · десятки · единицы']],
      [['2', '2'], ['0 4 0', '0 4 0'], ['0 0 7', '0 0 7']],
    ], ['Sinflar jadvali: 2 040 007', 'Таблица классов: 2 040 007']),
    B.rule(["Raqamning qiymati = raqam × xona birligi. 0 raqami shu xonada birlik yo'qligini bildiradi va o'rinni «ushlab turadi». Eng katta sinfdan boshqa har bir sinf yozuvda aynan uch raqamdan iborat.",
      'Значение цифры = цифра × разрядная единица. Цифра 0 показывает, что единиц этого разряда нет, и «держит место». Каждый класс, кроме старшего, записывается ровно тремя цифрами.']),
    B.widget('placevalue', ["Son kiriting va har bir raqam qaysi xonada turganini ko'ring.", 'Введите число и посмотрите, в каком разряде стоит каждая цифра.']),
    B.example(["30 405 sonini xona qo'shiluvchilari yig'indisi ko'rinishida yozing va o'qing.", 'Запишите число 30 405 суммой разрядных слагаемых и прочитайте его.'], [
      ["Sinflarga ajratamiz: 30 | 405.", 'Делим на классы: 30 | 405.'],
      { s: ["Xona qo'shiluvchilari (nolli xonalar tushirib qoldiriladi):", 'Разрядные слагаемые (разряды с нулями пропускаются):'], tex: '30\\,405 = 30\\,000 + 400 + 5' },
      ["O'qiymiz: avval minglar sinfi, keyin birlar sinfi.", 'Читаем: сначала класс тысяч, затем класс единиц.'],
    ], ["o'ttiz ming to'rt yuz besh", 'тридцать тысяч четыреста пять']),
    B.example(["«Ikki million qirq ming yetti» sonini raqamlar bilan yozing.", 'Запишите цифрами: «два миллиона сорок тысяч семь».'], [
      ['Millionlar sinfi: 2.', 'Класс миллионов: 2.'],
      ["Minglar sinfi: qirq ming → 040 (uch raqam!).", 'Класс тысяч: сорок тысяч → 040 (три цифры!).'],
      ['Birlar sinfi: yetti → 007.', 'Класс единиц: семь → 007.'],
    ], ['2 040 007', '2 040 007']),
    B.example(["3 456 sonida o'nlar xonasining raqami qaysi va jami nechta o'nlik bor?", 'Какая цифра стоит в разряде десятков числа 3 456 и сколько в нём всего десятков?'], [
      ["O'nlar xonasidagi raqam — 5.", 'Цифра в разряде десятков — 5.'],
      { s: ["Jami o'nliklar: birlar xonasini tashlab yuboramiz:", 'Всего десятков: отбрасываем разряд единиц:'], tex: '3\\,456 \\to 345' },
    ], ["Raqam 5, jami 345 ta o'nlik", 'Цифра 5, всего 345 десятков']),
    B.mistake(null, [
      ["Nollarni tushirib qoldirish: «to'rt yuz yetti ming o'ttiz besh» → 40 735 (to'g'ri: 407 035).", 'Пропуск нулей: «четыреста семь тысяч тридцать пять» → 40 735 (верно: 407 035).'],
      ["«Xona raqami» bilan «xona birliklari soni»ni chalkashtirish (5 va 345).", 'Путаница «цифры разряда» и «количества единиц разряда» (5 и 345).'],
      ["Sinf nomini aytmasdan o'qish: 30 405 → «uch ming to'rt yuz besh».", 'Чтение без названия класса: 30 405 → «три тысячи четыреста пять».'],
    ]),
    B.try(oq('a-m-pv-t1', '2.1.2', { ...M(PV), d: 1, steps: [['Yuzlardan kichik xonalarni tashlaymiz: 7 285 → 72.', 'Отбрасываем разряды младше сотен: 7 285 → 72.']] },
      ['7 285 sonida jami nechta yuzlik bor? (son)', 'Сколько всего сотен в числе 7 285? (число)'], '72', ["7 285 = 72 yuzlik va 85 birlik.", '7 285 = 72 сотни и 85 единиц.'], {}, 72)),
    B.method(["Xona tushunchasini qanday shakllantirish:", 'Как формировать понятие разряда:'], [
      ["Predmetli model: tayoqchalar va ularning bog'lami (10 ta = 1 o'nlik), 10 ta bog'lam = 1 yuzlik.", 'Предметная модель: палочки и пучки (10 палочек = 1 десяток), 10 пучков = 1 сотня.'],
      ["Abak va xonalar jadvali: raqamni ustunga joylashtirish, nolni bo'sh ustun sifatida ko'rsatish.", 'Абак и таблица разрядов: цифра ставится в столбец, нуль показан как пустой столбец.'],
      ["Ustma-ust qo'yiladigan kartochkalar: 300 + 40 + 5 → 345.", 'Накладные карточки: 300 + 40 + 5 → 345.'],
      ["Tushunishni tekshirish: «Sonda nechta o'nlik bor?» va «O'nlar xonasida qaysi raqam?» savollarini farqlash.", 'Проверка понимания: различать вопросы «Сколько всего десятков?» и «Какая цифра в разряде десятков?».'],
    ]),
    B.summary(null, [
      ["Raqam qiymati uning xonasiga bog'liq.", 'Значение цифры зависит от её разряда.'],
      ["Sinf — uchta xona; sinflar o'ngdan ajratiladi.", 'Класс — три разряда; классы выделяются справа.'],
      ["Nol bo'sh xonani bildiradi va o'rinni saqlaydi.", 'Нуль обозначает пустой разряд и сохраняет место.'],
    ]),
  ],
  check: [
    oq('a-m-pv-c1', '2.1.2', { ...M(PV), rule: ["Har bir sinf uch raqam bilan yoziladi.", 'Каждый класс записывается тремя цифрами.'], steps: [["Minglar sinfi: 503.", 'Класс тысяч: 503.'], ["Birlar sinfi: oltmish → 060.", 'Класс единиц: шестьдесят → 060.']] },
      ["«Besh yuz uch ming oltmish» sonini raqamlar bilan yozing.", 'Запишите цифрами число «пятьсот три тысячи шестьдесят».'], '503 060', ["Minglar sinfi 503, birlar sinfi 060: 503 060.", 'Класс тысяч 503, класс единиц 060: 503 060.'], {}, 503060),
    cq('a-m-pv-c2', '2.1.2', { ...M(PV) },
      ['46 892 sonida 6 raqami nimani bildiradi?', 'Что обозначает цифра 6 в числе 46 892?'],
      [[['6 ming', '6 тысяч']], [["6 ta o'n ming", '6 десятков тысяч'], ["O'n minglar xonasida 4 turibdi.", 'В разряде десятков тысяч стоит 4.']], [['6 yuz', '6 сотен'], ['Yuzlar xonasida 8.', 'В разряде сотен — 8.']], [['6 birlik', '6 единиц'], ['Birlar xonasida 2.', 'В разряде единиц — 2.']]],
      'A', ["4 | 6 | 8 9 2: 6 — minglar xonasida.", '4 | 6 | 8 9 2: 6 стоит в разряде тысяч.']),
    oq('a-m-pv-c3', '2.1.2', { ...M(PV), steps: [["Mingdan kichik xonalarni tashlaymiz: 52 300 → 52.", 'Отбрасываем разряды младше тысяч: 52 300 → 52.']] },
      ["Kutubxonada 52 300 ta kitob bor. Bu jami necha mingta kitob (to'liq minglar)?", 'В библиотеке 52 300 книг. Сколько это полных тысяч книг?'], '52', ['52 300 = 52 ming va 300.', '52 300 = 52 тысячи и 300.'], {}, 52),
    cq('a-m-pv-c4', '2.1.2', { ...M(PV) },
      ['Eng katta olti xonali son qaysi?', 'Какое число — наибольшее шестизначное?'],
      [[['999 999', '999 999']], [['100 000', '100 000'], ['Bu eng kichik olti xonali son.', 'Это наименьшее шестизначное число.']], [['999 990', '999 990'], ['999 999 dan kichik.', 'Меньше 999 999.']], [['1 000 000', '1 000 000'], ['Yetti xonali son.', 'Семизначное число.']]],
      'A', ["Har bir xonada eng katta raqam — 9.", 'В каждом разряде наибольшая цифра — 9.']),
    cq('a-m-pv-c5', '2.1.2', { ...M(PV), rule: ["Nol bo'sh xonani ko'rsatadi.", 'Нуль показывает пустой разряд.'] },
      ["O'quvchi «besh yuz yetti» ni 57 deb yozdi: «o'nliklar yo'q, nol kerak emas». Eng to'g'ri yordam?", 'Ученик записал «пятьсот семь» как 57: «десятков нет, нуль не нужен». Как лучше помочь?'],
      [[["Qoidani yod oldirish", 'Заставить выучить правило'], ["Mazmunsiz qoida xatoni bartaraf etmaydi.", 'Правило без смысла ошибку не устранит.']],
       [["Abak yoki xonalar jadvalida 5 yuzlik va 7 birlikni ko'rsatib, o'nlar ustuni bo'sh qolganini va nol shu o'rinni bildirishini ko'rsatish", 'Показать на абаке или в таблице разрядов 5 сотен и 7 единиц, обратить внимание на пустой столбец десятков, который и обозначает нуль']],
       [["To'g'ri javobni o'n marta yozdirish", 'Переписать верный ответ десять раз'], ["Mexanik takror tushuntirmaydi.", 'Механическое повторение не объясняет.']],
       [["Baho pasaytirish", 'Снизить отметку'], ["Sababni bartaraf etmaydi.", 'Не устраняет причину.']]],
      'B', ["Modelda bo'sh ustun nolning ma'nosini ko'rsatadi: 507.", 'Пустой столбец на модели показывает смысл нуля: 507.']),
  ],
});

/* ======================= 2. Number systems ======================= */
const NS = 'math-number-systems';
export const MATH_NUMBER_SYSTEMS = lesson({
  id: NS, module: 'math-num', level: 'intro', stage: 'F', minutes: 15, codes: ['2.1.3'], requires: [PV], sourceIds: S,
  title: ['Pozitsion va nopozitsion sanoq sistemalari. Rim raqamlari', 'Позиционные и непозиционные системы счисления. Римские цифры'],
  blocks: [
    B.intro(["Biz o'nlik pozitsion sistemadan foydalanamiz, lekin soat siferblatida, kitob boblarida va asrlarni yozishda Rim raqamlarini ham uchratamiz. Ular boshqacha qonun bilan ishlaydi.", 'Мы пользуемся десятичной позиционной системой, но на циферблатах, в номерах глав и веков встречаем римские цифры. Они устроены по другому закону.']),
    B.definition(["**Pozitsion sistema** — raqam qiymati uning o'rniga bog'liq (o'nlik sistemada 5 — besh, ellik yoki besh yuz bo'lishi mumkin). **Nopozitsion sistema** — belgi qiymati o'rniga bog'liq emas (Rim sistemasida X doim 10).",
      '**Позиционная система** — значение цифры зависит от её места (в десятичной системе 5 может значить пять, пятьдесят или пятьсот). **Непозиционная система** — значение знака не зависит от места (в римской системе X всегда 10).']),
    B.table([['Belgi', 'Знак'], ['I', 'I'], ['V', 'V'], ['X', 'X'], ['L', 'L'], ['C', 'C'], ['D', 'D'], ['M', 'M']], [
      [['Qiymati', 'Значение'], ['1', '1'], ['5', '5'], ['10', '10'], ['50', '50'], ['100', '100'], ['500', '500'], ['1000', '1000']],
    ], ['Rim raqamlari', 'Римские цифры']),
    B.rule(["1) Katta belgidan keyin kichigi kelsa — qo'shiladi: VI = 6. 2) Kichik belgi kattasidan oldin kelsa — ayiriladi, faqat IV, IX, XL, XC, CD, CM juftlari mumkin. 3) Bitta belgi ketma-ket ko'pi bilan 3 marta yoziladi; V, L, D takrorlanmaydi.",
      '1) Меньший знак после большего — прибавляется: VI = 6. 2) Меньший знак перед большим — вычитается, допустимы только пары IV, IX, XL, XC, CD, CM. 3) Один знак подряд пишется не более трёх раз; V, L, D не повторяются.']),
    B.example(["XIV sonini o'qing.", 'Прочитайте число XIV.'], [
      ['X = 10.', 'X = 10.'], ["IV — kichik oldin: 5 − 1 = 4.", 'IV — меньший перед большим: 5 − 1 = 4.'], { s: ["Qo'shamiz:", 'Складываем:'], tex: '10 + 4 = 14' },
    ], ['14', '14']),
    B.example(['49 ni Rim raqamlari bilan yozing.', 'Запишите 49 римскими цифрами.'], [
      ["Xonalarga ajratamiz: 49 = 40 + 9.", 'Раскладываем по разрядам: 49 = 40 + 9.'],
      ['40 = XL, 9 = IX.', '40 = XL, 9 = IX.'],
    ], ['XLIX', 'XLIX'], ["«IL» yozish mumkin emas: I faqat V va X dan oldin ayiriladi.", 'Записать «IL» нельзя: I вычитается только перед V и X.']),
    B.example(['1999 ni yozing.', 'Запишите 1999.'], [
      ['1000 = M, 900 = CM, 90 = XC, 9 = IX.', '1000 = M, 900 = CM, 90 = XC, 9 = IX.'],
    ], ['MCMXCIX', 'MCMXCIX']),
    B.exception(null, [
      ["Rim sistemasida nol yo'q.", 'В римской системе нет нуля.'],
      ["Ba'zi soatlarda 4 an'anaviy ravishda IIII deb yoziladi — bu standart yozuv emas.", 'На некоторых часах 4 по традиции пишут IIII — это не стандартная запись.'],
    ]),
    B.mistake(null, [
      ["Barcha belgilarni chapdan o'ngga qo'shib chiqish: IX = 11.", 'Складывать все знаки слева направо: IX = 11.'],
      ["Ruxsat etilmagan juftlar: IL, VX, IC.", 'Недопустимые пары: IL, VX, IC.'],
      ["Belgini to'rt marta takrorlash: XXXX (to'g'ri: XL).", 'Повторять знак четыре раза: XXXX (верно: XL).'],
    ]),
    B.try(oq('a-m-ns-t1', '2.1.3', { ...M(NS), d: 1, steps: [['XX = 20', 'XX = 20'], ['IX = 9', 'IX = 9']] }, ['XXIX — qaysi son? (son)', 'Какое число записано: XXIX? (число)'], '29', ['20 + 9 = 29.', '20 + 9 = 29.'], {}, 29)),
    B.method(["Rim raqamlarini o'rgatish:", 'Как учить римским цифрам:'], [
      ["Tayoqchalar bilan yasash: I, V (qo'l kafti), X (ikki kaft).", 'Выкладывать из палочек: I, V (ладонь), X (две ладони).'],
      ["Hayotiy kontekst: soat, asrlar (XXI asr), kitob boblari.", 'Жизненный контекст: часы, века (XXI век), главы книг.'],
      ["Pozitsion sistema bilan solishtirish — o'nlik sistemaning afzalligini anglash.", 'Сравнение с позиционной системой — понимание преимуществ десятичной записи.'],
    ]),
    B.summary(null, [
      ["Pozitsion: qiymat o'ringa bog'liq; Rim: belgi qiymati doimiy.", 'Позиционная: значение зависит от места; римская: значение знака постоянно.'],
      ["Kichik oldin — ayirish (faqat 6 juft), keyin — qo'shish.", 'Меньший перед большим — вычитание (только 6 пар), после — сложение.'],
    ]),
  ],
  check: [
    oq('a-m-ns-c1', '2.1.3', { ...M(NS), steps: [['CD = 400', 'CD = 400'], ['XL = 40', 'XL = 40'], ['V = 5', 'V = 5']] }, ['CDXLV ni arab raqamlari bilan yozing. (son)', 'Запишите арабскими цифрами CDXLV. (число)'], '445', ['400 + 40 + 5 = 445.', '400 + 40 + 5 = 445.'], {}, 445),
    cq('a-m-ns-c2', '2.1.3', { ...M(NS), rule: ['90 = 100 − 10 = XC.', '90 = 100 − 10 = XC.'] },
      ["Rim raqamlarida 90 ning qoidaga mos yozuvini tanlang.", 'Выберите запись числа 90 римскими цифрами, соответствующую правилам.'],
      [[['XC', 'XC']], [['LXXXX', 'LXXXX'], ["X to'rt marta takrorlangan.", 'X повторён четыре раза.']], [['LC', 'LC'], ["L ayiriluvchi bo'la olmaydi.", 'L не бывает вычитаемым.']], [['XM', 'XM'], ["X faqat L va C dan oldin ayiriladi.", 'X вычитается только перед L и C.']]],
      'A', ['XC = 90.', 'XC = 90.']),
    cq('a-m-ns-c3', '2.1.3', { ...M(NS) },
      ['Qaysi sanoq sistemasi pozitsion?', 'Какая система счисления позиционная?'],
      [[["Biz foydalanadigan o'nlik sistema", 'Привычная десятичная система']], [['Rim sistemasi', 'Римская система'], ["Belgi qiymati o'ringa bog'liq emas.", 'Значение знака не зависит от места.']], [["Tayoqchalar bilan sanash", 'Счёт палочками'], ["Har bir belgi bir xil — o'rin ahamiyatsiz.", 'Все знаки одинаковы — место не важно.']], [["Hech biri", 'Никакая'], ["O'nlik sistema pozitsion.", 'Десятичная система позиционная.']]],
      'A', ["O'nlik sistemada raqam qiymati xonaga bog'liq.", 'В десятичной системе значение цифры зависит от разряда.']),
    cq('a-m-ns-c4', '2.1.3', { ...M(NS) },
      ["Nega 49 ni IL deb yozib bo'lmaydi?", 'Почему 49 нельзя записать как IL?'],
      [[["I faqat V va X dan oldin ayiriluvchi bo'la oladi", 'I может стоять вычитаемым только перед V и X']], [["Rim raqamlarida 49 yozilmaydi", 'Римскими цифрами 49 не записывается'], ['XLIX — 49.', 'XLIX — это 49.']], [['IL = 51', 'IL = 51'], ["Kichik oldin bo'lgani uchun qo'shilmaydi.", 'Меньший знак впереди — не прибавляется.']], [["L ni ishlatish taqiqlangan", 'L использовать запрещено'], ['L = 50 ishlatiladi.', 'L = 50 используется.']]],
      'A', ['49 = XL + IX = XLIX.', '49 = XL + IX = XLIX.']),
    oq('a-m-ns-c5', '2.1.3', { ...M(NS), steps: [['MM = 2000', 'MM = 2000'], ['XX = 20', 'XX = 20'], ['VI = 6', 'VI = 6']] }, ["Kitob sahifasida yil MMXXVI deb ko'rsatilgan. Bu qaysi yil?", 'На титульном листе книги год указан как MMXXVI. Какой это год?'], '2026', ['2000 + 20 + 6 = 2026.', '2000 + 20 + 6 = 2026.'], {}, 2026),
  ],
});

/* ======================= 3. Addition and subtraction ======================= */
const AS = 'math-add-sub';
export const MATH_ADD_SUB = lesson({
  id: AS, module: 'math-ops', level: 'intro', stage: 'F', minutes: 20, codes: ['2.1.4'], requires: [PV], sourceIds: S,
  title: ["Qo'shish va ayirish: komponentlar, bog'liqlik, usullar", 'Сложение и вычитание: компоненты, связь, приёмы'],
  blocks: [
    B.intro(["Qo'shish — to'plamlarni birlashtirish, ayirish — qismni olib tashlash yoki taqqoslash. Bu ikki amal o'zaro teskari: birining natijasini ikkinchisi bilan tekshirish mumkin.", 'Сложение — объединение множеств, вычитание — удаление части или сравнение. Эти действия взаимно обратны: результат одного проверяется другим.']),
    B.definition(["$a + b = c$: $a$, $b$ — **qo'shiluvchilar**, $c$ — **yig'indi**. $a - b = c$: $a$ — **kamayuvchi**, $b$ — **ayriluvchi**, $c$ — **ayirma**.",
      '$a + b = c$: $a$, $b$ — **слагаемые**, $c$ — **сумма**. $a - b = c$: $a$ — **уменьшаемое**, $b$ — **вычитаемое**, $c$ — **разность**.']),
    B.formula('a + b = c \\;\\Rightarrow\\; a = c - b', [
      ["Noma'lum qo'shiluvchi = yig'indi − ma'lum qo'shiluvchi", 'Неизвестное слагаемое = сумма − известное слагаемое'],
      ['Kamayuvchi = ayirma + ayriluvchi', 'Уменьшаемое = разность + вычитаемое'],
      ['Ayriluvchi = kamayuvchi − ayirma', 'Вычитаемое = уменьшаемое − разность'],
    ]),
    B.why(["Nega? Yig'indi butun, qo'shiluvchilar uning qismlari. Butundan bir qismni olsak, ikkinchi qism qoladi. Shu «butun va qismlar» modeli barcha uchta qoidani tushuntiradi.", 'Почему? Сумма — это целое, слагаемые — его части. Если из целого убрать одну часть, останется другая. Модель «целое и части» объясняет все три правила.']),
    B.explain(["Konsentrik o'rganish: amallar bosqichma-bosqich, sonlar sohasi kengayib boradi:", 'Концентрическое изучение: действия изучаются ступенями, область чисел расширяется:'], [
      ["10 ichida → 20 ichida o'nlikdan o'tish bilan → 100 ichida → 1000 ichida → ko'p xonali sonlar (ustun usulida).", 'в пределах 10 → в пределах 20 с переходом через десяток → в пределах 100 → в пределах 1000 → многозначные числа (письменно, столбиком).'],
    ]),
    B.example(["38 + 25 ni og'zaki hisoblang.", 'Вычислите устно 38 + 25.'], [
      ["25 ni qulay qismlarga ajratamiz: 2 va 23 (38 ni 40 gacha to'ldirish uchun).", 'Раскладываем 25 на удобные части: 2 и 23 (чтобы дополнить 38 до 40).'],
      { s: ['Hisoblaymiz:', 'Вычисляем:'], tex: '38 + 2 = 40,\\quad 40 + 23 = 63' },
    ], ['63', '63'], ["O'nliklar va birliklar alohida: 30 + 20 = 50, 8 + 5 = 13, 50 + 13 = 63.", 'Отдельно десятки и единицы: 30 + 20 = 50, 8 + 5 = 13, 50 + 13 = 63.']),
    B.example(['52 − 17 ni hisoblang.', 'Вычислите 52 − 17.'], [
      { s: ["Ayriluvchini xona qo'shiluvchilariga ajratamiz: 17 = 10 + 7.", 'Раскладываем вычитаемое: 17 = 10 + 7.'], tex: '52 - 10 = 42,\\quad 42 - 7 = 35' },
      { s: ["Tekshirish qo'shish bilan:", 'Проверка сложением:'], tex: '35 + 17 = 52' },
    ], ['35', '35']),
    B.example(["x + 27 = 63 tenglamani yeching.", 'Решите уравнение x + 27 = 63.'], [
      ["x — noma'lum qo'shiluvchi.", 'x — неизвестное слагаемое.'],
      { s: ["Yig'indidan ma'lum qo'shiluvchini ayiramiz:", 'Из суммы вычитаем известное слагаемое:'], tex: 'x = 63 - 27 = 36' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '36 + 27 = 63' },
    ], ['x = 36', 'x = 36']),
    B.mistake(null, [
      ["Ustunda ayirishda kichik raqamni kattasidan ayirish: 52 − 17 → 45 (2 − 7 o'rniga 7 − 2).", 'При вычитании столбиком вычитают меньшую цифру из большей: 52 − 17 → 45 (вместо 2 − 7 считают 7 − 2).'],
      ["Ustunda qo'shishda o'nlikni keyingi xonaga o'tkazmaslik: 47 + 36 = 73.", 'Не переносят десяток при сложении столбиком: 47 + 36 = 73.'],
      ["Kamayuvchini topishda ayirish: x − 18 = 27 → x = 9.", 'При поиске уменьшаемого вычитают: x − 18 = 27 → x = 9.'],
    ]),
    B.try(oq('a-m-as-t1', '2.1.4', { ...M(AS), d: 1, rule: ['Kamayuvchi = ayirma + ayriluvchi.', 'Уменьшаемое = разность + вычитаемое.'] }, ['x − 18 = 27. x ni toping. (son)', 'x − 18 = 27. Найдите x. (число)'], '45', ['x = 27 + 18 = 45.', 'x = 27 + 18 = 45.'], {}, 45)),
    B.method(["Qo'shish va ayirishni o'rgatish:", 'Как учить сложению и вычитанию:'], [
      ["Sonlar tarkibi (10 ning tarkibi) — o'nlikdan o'tishning asosi.", 'Состав чисел (состав 10) — основа перехода через десяток.'],
      ["Modellar: tayoqchalar va bog'lamlar, son nuri bo'ylab «sakrash», 10 lik ramka.", 'Модели: палочки и пучки, «прыжки» по числовой прямой, десятичная рамка.'],
      ["«Butun va qismlar» sxemasi — teskari amallar va tenglamalarni tushunish uchun.", 'Схема «целое и части» — для понимания обратных действий и уравнений.'],
      ["Xatoning sababini aniqlang: hisoblash emas, xona tushunchasi yetishmasligi bo'lishi mumkin.", 'Выясняйте причину ошибки: часто дело не в счёте, а в непонимании разряда.'],
    ]),
    B.summary(null, [
      ["Qo'shish va ayirish o'zaro teskari amallar.", 'Сложение и вычитание взаимно обратны.'],
      ["Noma'lum komponent «butun va qismlar» orqali topiladi.", 'Неизвестный компонент находят через «целое и части».'],
      ["O'nlikdan o'tish — qismlab qo'shish/ayirish.", 'Переход через десяток — сложение/вычитание по частям.'],
    ]),
  ],
  check: [
    cq('a-m-as-c1', '2.1.4', { ...M(AS), rule: ["Birlar: 3 dan 8 ni ayirib bo'lmaydi — o'nlikni maydalaymiz: 13 − 8 = 5.", 'Единицы: из 3 нельзя вычесть 8 — разбиваем десяток: 13 − 8 = 5.'], steps: [['13 − 8 = 5', '13 − 8 = 5'], ["5 − 2 = 3 o'nlik", '5 − 2 = 3 десятка'], ['Javob 35', 'Ответ 35']] },
      ["O'quvchi ustunda 63 − 28 = 45 deb yozdi. Xatoning sababi?", 'Ученик вычислил столбиком 63 − 28 = 45. Причина ошибки?'],
      [[["Birlarda 3 − 8 o'rniga 8 − 3 ni hisoblagan va o'nlikni maydalamagan", 'В разряде единиц вычел 3 из 8 вместо 8 из 3 и не занял десяток']], [["Ko'paytirish jadvalini bilmaydi", 'Не знает таблицу умножения'], ["Bu yerda ko'paytirish yo'q.", 'Умножения здесь нет.']], [["O'nliklarni qo'shgan", 'Сложил десятки'], ["O'nliklar ayirilgan: 6 − 2 = 4.", 'Десятки вычтены: 6 − 2 = 4.']], [["Xato yo'q", 'Ошибки нет'], ["To'g'ri javob 35.", 'Верный ответ 35.']]],
      'A', ['63 − 28 = 35.', '63 − 28 = 35.']),
    oq('a-m-as-c2', '2.1.4', { ...M(AS), rule: ['Kamayuvchi = ayirma + ayriluvchi.', 'Уменьшаемое = разность + вычитаемое.'] },
      ['Ayirma 34, ayriluvchi 19. Kamayuvchini toping. (son)', 'Разность равна 34, вычитаемое 19. Найдите уменьшаемое. (число)'], '53', ['34 + 19 = 53.', '34 + 19 = 53.'], {}, 53),
    cq('a-m-as-c3', '2.1.4', { ...M(AS) },
      ["Noma'lum qo'shiluvchi qanday topiladi?", 'Как найти неизвестное слагаемое?'],
      [[["Yig'indidan ma'lum qo'shiluvchini ayirish", 'Из суммы вычесть известное слагаемое']], [["Yig'indiga ma'lum qo'shiluvchini qo'shish", 'К сумме прибавить известное слагаемое'], ["Butundan katta son chiqadi, qism topilmaydi.", 'Получится больше целого, а не часть.']], [["Yig'indini ikkiga bo'lish", 'Разделить сумму на два'], ["Faqat qo'shiluvchilar teng bo'lsa to'g'ri.", 'Верно, только если слагаемые равны.']], [["Qo'shiluvchilarni ko'paytirish", 'Перемножить слагаемые'], ["Ko'paytirish bu yerda ma'nosiz.", 'Умножение здесь не имеет смысла.']]],
      'A', ["Qism = butun − boshqa qism.", 'Часть = целое − другая часть.']),
    oq('a-m-as-c4', '2.1.4', { ...M(AS), steps: [["7 + 6 = 13: 3 yoziladi, 1 o'nlik o'tadi", '7 + 6 = 13: пишем 3, переносим 1 десяток'], ['4 + 3 + 1 = 8', '4 + 3 + 1 = 8']] }, ["Ustun usulida qo'shing: 47 + 36. Yig'indini yozing.", 'Сложите столбиком 47 + 36 и запишите сумму.'], '83', ['47 + 36 = 83.', '47 + 36 = 83.'], {}, 83),
    cq('a-m-as-c5', '2.1.4', { ...M(AS) },
      ["38 + 25 ni o'rgatishda qaysi model o'nlikdan o'tishni eng yaqqol ko'rsatadi?", 'Какая модель наиболее наглядно показывает переход через десяток при обучении 38 + 25?'],
      [[["Son nurida 38 dan 40 gacha, keyin 23 ga «sakrash»", 'Прыжки по числовой прямой: от 38 до 40, затем на 23']], [["Javobni yod olish", 'Заучивание ответа'], ["Model emas.", 'Это не модель.']], [["Kalkulyator", 'Калькулятор'], ["Jarayonni ko'rsatmaydi.", 'Не показывает процесс.']], [["Faqat ustun usuli", 'Только запись столбиком'], ["Algoritm, lekin ma'noni ko'rsatmaydi.", 'Алгоритм, но не смысл перехода.']]],
      'A', ["Sakrashlar 40 — yaxlit o'nlik orqali o'tishni ko'rsatadi.", 'Прыжки показывают переход через круглый десяток 40.']),
  ],
});

/* ======================= 4. Multiplication and division ======================= */
const MD = 'math-mult-div';
export const MATH_MULT_DIV = lesson({
  id: MD, module: 'math-ops', level: 'intro', stage: 'F', minutes: 22, codes: ['2.1.5', '2.1.6'], requires: [AS], sourceIds: S,
  title: ["Ko'paytirish va bo'lish: ma'nosi va jadval", 'Умножение и деление: смысл и таблица'],
  blocks: [
    B.intro(["Ko'paytirish bir xil qo'shiluvchilarni tez qo'shish usuli sifatida paydo bo'lgan. Bo'lish esa teng bo'lish yoki guruhlarga ajratish masalalarini yechadi.", 'Умножение появилось как быстрый способ сложить одинаковые слагаемые. Деление решает задачи на разделение поровну и на группировку.']),
    B.definition(["$a \\cdot b = c$: $a$, $b$ — **ko'paytuvchilar**, $c$ — **ko'paytma**. $c : b = a$: $c$ — **bo'linuvchi**, $b$ — **bo'luvchi**, $a$ — **bo'linma**.",
      '$a \\cdot b = c$: $a$, $b$ — **множители**, $c$ — **произведение**. $c : b = a$: $c$ — **делимое**, $b$ — **делитель**, $a$ — **частное**.']),
    B.formula('4 \\cdot 3 = 4 + 4 + 4 = 12', [["Ko'paytirish — bir xil qo'shiluvchilar yig'indisi.", 'Умножение — сумма одинаковых слагаемых.']]),
    B.explain(["Bo'lishning ikki ma'nosi:", 'Два смысла деления:'], [
      ["**Mazmuniga ko'ra bo'lish**: 12 ta qalamni 3 tadan qutiga joylasak, nechta quti? (guruhlar soni)", '**Деление по содержанию**: 12 карандашей раскладываем по 3 в коробку — сколько коробок? (число групп)'],
      ["**Teng qismlarga bo'lish**: 12 ta qalamni 3 ta qutiga teng joylasak, har birida nechta? (guruhdagi soni)", '**Деление на равные части**: 12 карандашей раскладываем поровну в 3 коробки — сколько в каждой? (размер группы)'],
    ]),
    B.rule(["$a \\cdot 1 = a$; $a \\cdot 0 = 0$; $0 : a = 0$ ($a \\ne 0$); **nolga bo'lish mumkin emas**: 5 : 0 uchun 0 ga ko'paytirilganda 5 beradigan son kerak — bunday son yo'q.",
      '$a \\cdot 1 = a$; $a \\cdot 0 = 0$; $0 : a = 0$ ($a \\ne 0$); **на нуль делить нельзя**: для 5 : 0 нужно число, которое при умножении на 0 даёт 5, — такого числа нет.']),
    B.table([['Holat', 'Случай'], ['Usul', 'Приём'], ['Misol', 'Пример']], [
      [['· 2', '· 2'], ['Ikkilantirish', 'Удвоение'], ['8 · 2 = 8 + 8 = 16', '8 · 2 = 8 + 8 = 16']],
      [['· 4', '· 4'], ['Ikki marta ikkilantirish', 'Удвоить дважды'], ['7 · 4 = 14 · 2 = 28', '7 · 4 = 14 · 2 = 28']],
      [['· 5', '· 5'], ["· 10 ning yarmi", 'Половина от · 10'], ['6 · 5 = 60 : 2 = 30', '6 · 5 = 60 : 2 = 30']],
      [['· 9', '· 9'], ['· 10 dan bitta ko\'paytuvchini ayirish', '· 10 минус одно слагаемое'], ['7 · 9 = 70 − 7 = 63', '7 · 9 = 70 − 7 = 63']],
    ], ["Jadvalni ongli eslab qolish usullari", 'Приёмы осознанного запоминания таблицы']),
    B.example(["7 · 8 ni ma'lum faktlar orqali toping.", 'Найдите 7 · 8 через известные факты.'], [
      { s: ['7 ni 5 + 2 ga ajratamiz:', 'Раскладываем 7 = 5 + 2:'], tex: '7 \\cdot 8 = 5 \\cdot 8 + 2 \\cdot 8 = 40 + 16 = 56' },
    ], ['56', '56']),
    B.example(["x · 7 = 56 tenglamani yeching.", 'Решите уравнение x · 7 = 56.'], [
      ["x — noma'lum ko'paytuvchi: ko'paytmani ma'lum ko'paytuvchiga bo'lamiz.", 'x — неизвестный множитель: делим произведение на известный множитель.'],
      { s: ["Bo'lamiz:", 'Делим:'], tex: 'x = 56 : 7 = 8' },
      { s: ['Tekshirish:', 'Проверка:'], tex: '8 \\cdot 7 = 56' },
    ], ['x = 8', 'x = 8']),
    B.example(["«18 ta olma 3 ta savatga teng solindi» va «18 ta olma 3 tadan paketlarga solindi» masalalarini solishtiring.", 'Сравните задачи «18 яблок разложили поровну в 3 корзины» и «18 яблок разложили по 3 в пакеты».'], [
      ["Birinchisi — teng qismlarga bo'lish: 18 : 3 = 6 (har savatda 6 ta).", 'Первая — деление на равные части: 18 : 3 = 6 (в каждой корзине 6).'],
      ["Ikkinchisi — mazmuniga ko'ra bo'lish: 18 : 3 = 6 (6 ta paket).", 'Вторая — деление по содержанию: 18 : 3 = 6 (6 пакетов).'],
    ], ["Hisob bir xil, ma'no har xil", 'Вычисление одно, смысл разный']),
    B.mistake(null, [
      ["5 · 0 = 5 («nolga ko'paytirsa, son o'zgarmaydi»).", '5 · 0 = 5 («при умножении на нуль число не меняется»).'],
      ["0 : 5 ni «mumkin emas» deb hisoblash (aslida 0).", 'Считать, что 0 : 5 «нельзя» (на самом деле 0).'],
      ["Bo'lishning ikki turini farqlamaslik — masala sharti noto'g'ri modellashtiriladi.", 'Не различать два вида деления — условие задачи моделируется неверно.'],
    ]),
    B.try(oq('a-m-md-t1', '2.1.5', { ...M(MD), d: 1, steps: [['9 · 7 = 10 · 7 − 7', '9 · 7 = 10 · 7 − 7'], ['70 − 7 = 63', '70 − 7 = 63']] }, ["9 ga ko'paytirish usulidan foydalanib (10 ga ko'paytirib, bitta ko'paytuvchini ayirib), 9 · 7 ni toping.", 'Найдите 9 · 7 приёмом умножения на 9 (умножить на 10 и вычесть один множитель).'], '63', ['70 − 7 = 63.', '70 − 7 = 63.'], {}, 63)),
    B.method(["Ko'paytirish va bo'lishni o'rgatish:", 'Как учить умножению и делению:'], [
      ["Massivlar (nuqtalar qatorlari): 3 qatorda 5 tadan — ko'paytirish va o'rin almashtirish xossasi bir rasmda.", 'Массивы (ряды точек): 3 ряда по 5 — и умножение, и переместительное свойство на одной картинке.'],
      ["Bo'lishning ikki turini predmetlar bilan sahnalashtirish.", 'Инсценировать оба вида деления с предметами.'],
      ["Jadvalni yodlashdan oldin qonuniyatlarni topish (· 9 jadvalida ko'paytma raqamlari yig'indisi 9).", 'До заучивания таблицы искать закономерности (в таблице на 9 сумма цифр произведения равна 9).'],
    ]),
    B.summary(null, [
      ["Ko'paytirish — bir xil qo'shiluvchilar yig'indisi.", 'Умножение — сумма одинаковых слагаемых.'],
      ["Bo'lish: mazmuniga ko'ra va teng qismlarga.", 'Деление: по содержанию и на равные части.'],
      ["Nolga bo'lish mumkin emas; a · 0 = 0.", 'На нуль делить нельзя; a · 0 = 0.'],
    ]),
  ],
  check: [
    cq('a-m-md-c1', '2.1.5', { ...M(MD), rule: ["Guruhlar soni so'ralsa — mazmuniga ko'ra bo'lish.", 'Если ищут число групп — деление по содержанию.'] },
      ["«18 ta qalam qutilarga 6 tadan joylandi. Nechta quti kerak?» Bu qaysi bo'lish?", '«18 карандашей разложили по 6 в коробку. Сколько коробок?» Какой это вид деления?'],
      [[["Mazmuniga ko'ra bo'lish", 'Деление по содержанию']], [["Teng qismlarga bo'lish", 'Деление на равные части'], ["Unda guruhdagi soni so'raladi, guruhlar soni emas.", 'Там ищут размер группы, а не число групп.']], [["Qoldiqli bo'lish", 'Деление с остатком'], ["18 soni 6 ga qoldiqsiz bo'linadi.", '18 делится на 6 без остатка.']], [["Ko'paytirish", 'Умножение'], ["Amal — bo'lish.", 'Действие — деление.']]],
      'A', ['18 : 6 = 3 quti.', '18 : 6 = 3 коробки.']),
    cq('a-m-md-c2', '2.1.5', { ...M(MD) },
      ["Nega nolga bo'lish mumkin emas?", 'Почему на нуль делить нельзя?'],
      [[["0 ga ko'paytirilganda noldan farqli son beradigan son mavjud emas", 'Нет числа, которое при умножении на 0 давало бы ненулевое число']], [["Shunday kelishilgan, sababi yo'q", 'Так договорились, причины нет'], ["Sabab bor — bo'lish ko'paytirishga teskari.", 'Причина есть — деление обратно умножению.']], [["Natija juda katta", 'Получается слишком большое число'], ["Natija umuman mavjud emas.", 'Результата не существует вовсе.']], [['Natija 0 ga teng', 'Результат равен 0'], ["0 · 0 = 0 ≠ 5.", '0 · 0 = 0 ≠ 5.']]],
      'A', ["a : 0 = x bo'lsa, x · 0 = a bo'lishi kerak — bu mumkin emas.", 'Если a : 0 = x, то x · 0 = a — невозможно.']),
    oq('a-m-md-c3', '2.1.6', { ...M(MD), rule: ["Noma'lum ko'paytuvchi = ko'paytma : ma'lum ko'paytuvchi.", 'Неизвестный множитель = произведение : известный множитель.'] }, ["Noma'lum ko'paytuvchini toping: x · 7 = 56.", 'Найдите неизвестный множитель: x · 7 = 56.'], '8', ['56 : 7 = 8.', '56 : 7 = 8.'], {}, 8),
    cq('a-m-md-c4', '2.1.5', { ...M(MD) },
      ['6 · 0 nechaga teng?', 'Чему равно 6 · 0?'],
      [[['6', '6'], ["6 ni 0 marta qo'shish — hech narsa.", 'Сложить 6 ноль раз — ничего.']], [['0', '0']], [['1', '1'], ["1 — a : a natijasi, bu yerda emas.", '1 — результат a : a, а не здесь.']], [["Hisoblab bo'lmaydi", 'Вычислить нельзя'], ["0 ga ko'paytirish mumkin.", 'Умножать на 0 можно.']]],
      'B', ['a · 0 = 0.', 'a · 0 = 0.']),
    cq('a-m-md-c5', '2.1.5', { ...M(MD) },
      ["3 qatorda 5 tadan nuqta chizilgan massiv nimani ko'rsatadi?", 'Что показывает массив из 3 рядов по 5 точек?'],
      [[["3 · 5 = 5 · 3: o'rin almashtirish xossasini (qatorlar va ustunlar bo'yicha sanash)", '3 · 5 = 5 · 3: переместительное свойство (счёт по рядам и по столбцам)']], [["Faqat 3 + 5 ni", 'Только 3 + 5'], ["Bu yig'indi emas, ko'paytma.", 'Это не сумма, а произведение.']], [["Qoldiqli bo'lishni", 'Деление с остатком'], ["Qoldiq yo'q.", 'Остатка нет.']], [['Kasrni', 'Дробь'], ["Butun ulushlarga bo'linmagan.", 'Целое не делится на доли.']]],
      'A', ['15 ta nuqta = 3 · 5 = 5 · 3.', '15 точек = 3 · 5 = 5 · 3.']),
  ],
});

/* ======================= 5. Properties of operations ======================= */
const PR = 'math-properties';
export const MATH_PROPERTIES = lesson({
  id: PR, module: 'math-ops', level: 'core', stage: 'C', minutes: 22, codes: ['2.1.7'], requires: [MD], sourceIds: S,
  title: ["Amallar xossalari va og'zaki hisoblash", 'Свойства действий и устный счёт'],
  blocks: [
    B.intro(["25 · 13 · 4 ni qanday tez hisoblash mumkin? Xossalar hisobni qulay tartibga keltirishga imkon beradi — natija o'zgarmaydi, hisob esa osonlashadi.", 'Как быстро вычислить 25 · 13 · 4? Свойства действий позволяют переставить вычисления удобно — результат не меняется, а считать проще.']),
    B.formula('a + b = b + a,\\qquad a \\cdot b = b \\cdot a', [["O'rin almashtirish xossasi", 'Переместительное свойство']]),
    B.formula('(a + b) + c = a + (b + c),\\qquad (a b) c = a (b c)', [['Guruhlash xossasi', 'Сочетательное свойство']]),
    B.formula('a \\cdot (b + c) = a b + a c', [["Taqsimot xossasi: yig'indini songa ko'paytirish", 'Распределительное свойство: умножение суммы на число']]),
    B.formula('a - (b + c) = a - b - c,\\qquad (a + b) : c = a : c + b : c', [["Sondan yig'indini ayirish; yig'indini songa bo'lish", 'Вычитание суммы из числа; деление суммы на число']]),
    B.why(["Taqsimot xossasini yuza modeli tushuntiradi: tomonlari 4 va (20 + 3) bo'lgan to'g'ri to'rtburchak ikki qismdan iborat — 4 · 20 va 4 · 3.", 'Распределительное свойство объясняет модель площади: прямоугольник 4 на (20 + 3) состоит из двух частей — 4 · 20 и 4 · 3.']),
    B.example(['25 · 13 · 4 ni hisoblang.', 'Вычислите 25 · 13 · 4.'], [
      { s: ["O'rin almashtirib guruhlaymiz:", 'Переставляем и группируем:'], tex: '(25 \\cdot 4) \\cdot 13 = 100 \\cdot 13 = 1300' },
    ], ['1300', '1300']),
    B.example(["23 · 4 ni og'zaki hisoblang.", 'Вычислите устно 23 · 4.'], [
      { s: ['Taqsimot xossasi:', 'Распределительное свойство:'], tex: '23 \\cdot 4 = 20 \\cdot 4 + 3 \\cdot 4 = 80 + 12 = 92' },
    ], ['92', '92']),
    B.example(['99 · 6 ni hisoblang.', 'Вычислите 99 · 6.'], [
      { s: ['99 = 100 − 1:', '99 = 100 − 1:'], tex: '99 \\cdot 6 = 100 \\cdot 6 - 1 \\cdot 6 = 600 - 6 = 594' },
    ], ['594', '594']),
    B.example(['37 + 48 + 63 ni hisoblang.', 'Вычислите 37 + 48 + 63.'], [
      { s: ["Yaxlit son hosil qiladigan qo'shiluvchilarni guruhlaymiz:", 'Группируем слагаемые в круглое число:'], tex: '(37 + 63) + 48 = 100 + 48 = 148' },
    ], ['148', '148']),
    B.mistake(null, [
      ["23 · 4 = 20 · 4 + 3 — ikkinchi qo'shiluvchini ko'paytirmaslik.", '23 · 4 = 20 · 4 + 3 — не умножают второе слагаемое.'],
      ['a − (b + c) = a − b + c — qavsni ochishda ishorani almashtirmaslik.', 'a − (b + c) = a − b + c — неверно раскрывают скобки.'],
      ["Ayirish va bo'lishda o'rin almashtirish: 10 − 3 ≠ 3 − 10.", 'Переставлять компоненты вычитания и деления: 10 − 3 ≠ 3 − 10.'],
    ]),
    B.try(oq('a-m-pr-t1', '2.1.7', { ...M(PR), d: 1, steps: [['8 · 125 = 1000', '8 · 125 = 1000'], ['1000 · 7 = 7000', '1000 · 7 = 7000']] }, ["Ko'paytuvchilarni qulay guruhlab hisoblang: 8 · 7 · 125.", 'Вычислите, удобно сгруппировав множители: 8 · 7 · 125.'], '7000', ['(8 · 125) · 7 = 7000.', '(8 · 125) · 7 = 7000.'], {}, 7000)),
    B.method(["Xossalarni o'rgatish:", 'Как учить свойствам:'], [
      ["Xossani o'quvchilarning o'zi kashf etsin: bir nechta juftlikni hisoblab, natijalarni solishtirish.", 'Пусть ученики сами откроют свойство: вычислить несколько пар и сравнить результаты.'],
      ["Taqsimot xossasi uchun yuza modeli yoki massiv.", 'Для распределительного свойства — модель площади или массив.'],
      ["«Qulay hisoblash» o'yini: kim kamroq qadamda hisoblaydi va qaysi xossadan foydalandi?", 'Игра «Считаем удобно»: кто вычислит за меньшее число шагов и каким свойством воспользовался?'],
    ]),
    B.summary(null, [
      ["O'rin almashtirish va guruhlash — qo'shish va ko'paytirishda.", 'Переместительное и сочетательное — для сложения и умножения.'],
      ["Taqsimot: a(b + c) = ab + ac — og'zaki hisobning asosi.", 'Распределительное: a(b + c) = ab + ac — основа устного счёта.'],
    ]),
  ],
  check: [
    cq('a-m-pr-c1', '2.1.7', { ...M(PR) },
      ['6 · (10 + 3) = 60 + 18 hisobida qaysi xossa ishlatilgan?', 'Какое свойство использовано в вычислении 6 · (10 + 3) = 60 + 18?'],
      [[["O'rin almashtirish", 'Переместительное'], ["Ko'paytuvchilar o'rni almashmagan.", 'Множители не переставлены.']], [['Guruhlash', 'Сочетательное'], ["Uch ko'paytuvchi qayta guruhlanmagan.", 'Три множителя не перегруппированы.']], [['Taqsimot', 'Распределительное']], [["Sondan yig'indini ayirish", 'Вычитание суммы из числа'], ["Ayirish yo'q.", 'Вычитания нет.']]],
      'C', ["Yig'indi songa ko'paytirildi: har bir qo'shiluvchi alohida.", 'Сумма умножена на число: каждое слагаемое отдельно.']),
    oq('a-m-pr-c2', '2.1.7', { ...M(PR), steps: [['4 · 25 = 100', '4 · 25 = 100'], ['100 · 17 = 1700', '100 · 17 = 1700']] }, ["O'rin almashtirish va guruhlash xossalaridan foydalanib 4 · 17 · 25 ning qiymatini toping.", 'Используя переместительное и сочетательное свойства, найдите значение 4 · 17 · 25.'], '1700', ['(4 · 25) · 17 = 1700.', '(4 · 25) · 17 = 1700.'], {}, 1700),
    cq('a-m-pr-c3', '2.1.7', { ...M(PR), rule: ["a(b + c) = ab + ac — ikkala qo'shiluvchi ko'paytiriladi.", 'a(b + c) = ab + ac — умножается каждое слагаемое.'] },
      ["O'quvchi 7 · 12 = 7 · 10 + 2 = 72 deb hisobladi. Xato nimada?", 'Ученик вычислил 7 · 12 = 7 · 10 + 2 = 72. В чём ошибка?'],
      [[["2 ni ham 7 ga ko'paytirish kerak edi: 70 + 14 = 84", 'Нужно было умножить на 7 и второе слагаемое: 70 + 14 = 84']], [["10 ni ko'paytirmaslik kerak edi", 'Не нужно было умножать 10'], ["Ikkalasi ham ko'paytiriladi.", 'Умножаются оба слагаемых.']], [["Xato yo'q", 'Ошибки нет'], ['7 · 12 = 84.', '7 · 12 = 84.']], [["12 ni 6 + 6 ga ajratish shart edi", 'Обязательно было разложить 12 = 6 + 6'], ["Har qanday ajratish mumkin, muhimi — ikkala qismni ko'paytirish.", 'Можно любое разложение, важно умножить обе части.']]],
      'A', ['7 · 12 = 84.', '7 · 12 = 84.']),
    oq('a-m-pr-c4', '2.1.7', { ...M(PR), steps: [['98 = 100 − 2', '98 = 100 − 2'], ['500 − 10 = 490', '500 − 10 = 490']] }, ["98 ni 100 − 2 ko'rinishida yozib, 98 · 5 ni og'zaki hisoblang.", 'Представив 98 как 100 − 2, вычислите устно 98 · 5.'], '490', ['100 · 5 − 2 · 5 = 490.', '100 · 5 − 2 · 5 = 490.'], {}, 490),
    cq('a-m-pr-c5', '2.1.7', { ...M(PR) },
      ["Taqsimot xossasini 3-sinfda ko'rgazmali tushuntirish uchun eng mos model?", 'Какая модель лучше всего наглядно объясняет распределительное свойство в 3 классе?'],
      [[["To'g'ri to'rtburchakni ikki qismga bo'lish: 4 · (20 + 3) = 4 · 20 + 4 · 3", 'Прямоугольник, разделённый на две части: 4 · (20 + 3) = 4 · 20 + 4 · 3']], [["Qoidani yod oldirish", 'Выучить правило'], ["Ko'rgazma emas.", 'Это не наглядность.']], [["Son nuri", 'Числовая прямая'], ["Ko'proq qo'shish va ayirish uchun.", 'Удобнее для сложения и вычитания.']], [["Rim raqamlari", 'Римские цифры'], ["Mavzuga aloqasi yo'q.", 'Не относится к теме.']]],
      'A', ["Yuza modeli ikki qismning yig'indisini ko'rsatadi.", 'Модель площади показывает сумму двух частей.']),
  ],
});

/* ======================= 6. Units of length and mass ======================= */
const UN = 'math-units';
export const MATH_UNITS = lesson({
  id: UN, module: 'math-geo', level: 'intro', stage: 'F', minutes: 18, codes: ['2.2.6', '2.2.8'], requires: [MD], sourceIds: S,
  title: ["Kattaliklar: uzunlik va massa birliklari", 'Величины: единицы длины и массы'],
  blocks: [
    B.intro(["Qadam bilan o'lchangan xona har kimda har xil chiqadi. Shuning uchun odamlar umumiy o'lchov — birlikni kelishib olgan. Kattaliklarni bilish yuza, hajm va harakat masalalarining asosidir.", 'Если измерять комнату шагами, у каждого получится своё. Поэтому люди договорились об общей мерке — единице. Знание величин — основа задач на площадь, объём и движение.']),
    B.definition(["**Kattalik** — o'lchash mumkin bo'lgan xususiyat (uzunlik, massa, vaqt). **O'lchov birligi** — kattalikni taqqoslash uchun kelishilgan namuna (1 m, 1 kg).", '**Величина** — свойство, которое можно измерить (длина, масса, время). **Единица измерения** — принятый образец для сравнения (1 м, 1 кг).']),
    B.table([['Uzunlik', 'Длина'], ['Massa', 'Масса']], [
      [['1 sm = 10 mm', '1 см = 10 мм'], ['1 kg = 1000 g', '1 кг = 1000 г']],
      [['1 dm = 10 sm', '1 дм = 10 см'], ['1 sentner = 100 kg', '1 ц = 100 кг']],
      [['1 m = 10 dm = 100 sm', '1 м = 10 дм = 100 см'], ['1 t = 10 sentner = 1000 kg', '1 т = 10 ц = 1000 кг']],
      [['1 km = 1000 m', '1 км = 1000 м'], ['—', '—']],
    ], ["Birliklar jadvali", 'Таблица единиц']),
    B.rule(["Kattaroq birlikdan kichikroqqa o'tishda **ko'paytiramiz**, kichikdan kattaga — **bo'lamiz**. Kattaliklarni faqat bir xil birlikda taqqoslash, qo'shish va ayirish mumkin.", 'При переходе от крупной единицы к мелкой — **умножаем**, от мелкой к крупной — **делим**. Сравнивать, складывать и вычитать величины можно только в одинаковых единицах.']),
    B.example(['3 m 7 sm ni santimetrlarda ifodalang.', 'Выразите 3 м 7 см в сантиметрах.'], [
      { s: ['3 m = 3 · 100 sm:', '3 м = 3 · 100 см:'], tex: '300 + 7 = 307' },
    ], ['307 sm', '307 см'], ["Xato: 37 sm — metrda 10 sm bor deb olingan.", 'Ошибка: 37 см — будто в метре 10 см.']),
    B.example(['4 500 g ni kilogramm va grammlarda yozing.', 'Запишите 4 500 г в килограммах и граммах.'], [
      { s: ["1000 g lik guruhlarga ajratamiz:", 'Выделяем группы по 1000 г:'], tex: '4500 = 4 \\cdot 1000 + 500' },
    ], ['4 kg 500 g', '4 кг 500 г']),
    B.example(['Taqqoslang: 5 dm 3 sm va 52 sm.', 'Сравните: 5 дм 3 см и 52 см.'], [
      ['5 dm 3 sm = 50 + 3 = 53 sm.', '5 дм 3 см = 50 + 3 = 53 см.'], ['53 > 52.', '53 > 52.'],
    ], ['5 dm 3 sm > 52 sm', '5 дм 3 см > 52 см']),
    B.example(['2 t 50 kg ni kilogrammda ifodalang.', 'Выразите 2 т 50 кг в килограммах.'], [
      ['2 t = 2000 kg.', '2 т = 2000 кг.'], ['2000 + 50 = 2050.', '2000 + 50 = 2050.'],
    ], ['2050 kg', '2050 кг'], ["Xato: 250 kg — tonnani 100 kg deb olish.", 'Ошибка: 250 кг — тонна принята за 100 кг.']),
    B.mistake(null, [
      ["Har xil birliklardagi sonlarni bevosita qo'shish: 1 m + 20 sm = 21.", 'Складывать числа в разных единицах: 1 м + 20 см = 21.'],
      ["Chizg'ichni 0 dan emas, chetidan qo'yib o'lchash.", 'Прикладывать линейку не от нуля, а от края.'],
      ["Kundalik «og'irlik» va «massa»ni chalkashtirish (boshlang'ich sinfda massa — kg, g).", 'Путать бытовое «вес» и «массу» (в начальной школе масса — в кг, г).'],
    ]),
    B.try(oq('a-m-un-t1', '2.2.6', { ...M(UN), d: 1, steps: [['6 dm = 60 sm', '6 дм = 60 см'], ['60 + 4 = 64', '60 + 4 = 64']] }, ['6 dm 4 sm — necha santimetr? (son)', 'Сколько сантиметров в 6 дм 4 см? (число)'], '64', ['64 sm.', '64 см.'], {}, 64)),
    B.method(["Kattaliklarni o'rgatish ketma-ketligi:", 'Последовательность изучения величин:'], [
      ["Bevosita taqqoslash (ustma-ust qo'yish) → ixtiyoriy o'lchovlar (qadam, qarich) → standart birlik zaruriyati.", 'Прямое сравнение (наложение) → произвольные мерки (шаг, пядь) → необходимость стандартной единицы.'],
      ["Birlikni «his qilish»: 1 sm — barmoq kengligi, 1 m — katta qadam, 1 kg — bir paket un.", 'Почувствовать единицу: 1 см — ширина пальца, 1 м — большой шаг, 1 кг — пачка муки.'],
      ["Amaliy o'lchash: sinf, parta, daftar; pallali tarozida tortish.", 'Практические измерения: класс, парта, тетрадь; взвешивание на чашечных весах.'],
    ]),
    B.summary(null, [
      ["Kattalik o'lchanadi, birlik — kelishilgan namuna.", 'Величину измеряют, единица — принятый образец.'],
      ["Kattadan kichikka — ko'paytirish, kichikdan kattaga — bo'lish.", 'От крупной к мелкой — умножение, от мелкой к крупной — деление.'],
      ["Amallar faqat bir xil birliklarda.", 'Действия — только в одинаковых единицах.'],
    ]),
  ],
  check: [
    oq('a-m-un-c1', '2.2.6', { ...M(UN), steps: [['2 m = 200 sm', '2 м = 200 см'], ['200 + 5 = 205', '200 + 5 = 205']] }, ["Lenta uzunligi 2 m 5 sm. Uni santimetrlarda ifodalang.", 'Длина ленты 2 м 5 см. Выразите её в сантиметрах.'], '205', ['205 sm.', '205 см.'], {}, 205),
    cq('a-m-un-c2', '2.2.8', { ...M(UN), rule: ['1 kg = 1000 g.', '1 кг = 1000 г.'] },
      ['3 kg 40 g necha grammga teng?', 'Сколько граммов в 3 кг 40 г?'],
      [[['340', '340'], ["3 kg ni 300 g deb olingan.", 'Как будто 3 кг = 300 г.']], [['3040', '3040']], [['3400', '3400'], ["40 g o'rniga 400 g qo'shilgan.", 'Прибавили 400 г вместо 40 г.']], [['30 040', '30 040'], ['3 kg = 3000 g, 30 000 g emas.', '3 кг = 3000 г, а не 30 000 г.']]],
      'B', ['3000 + 40 = 3040 g.', '3000 + 40 = 3040 г.']),
    cq('a-m-un-c3', '2.2.8', { ...M(UN) },
      ["Kilometrlarni metrga qanday o'tkaziladi?", 'Как перевести километры в метры?'],
      [[["1000 ga ko'paytirish", 'Умножить на 1000']], [["1000 ga bo'lish", 'Разделить на 1000'], ["Kattadan kichikka — ko'paytirish.", 'От крупной к мелкой — умножают.']], [["100 ga ko'paytirish", 'Умножить на 100'], ['1 km = 1000 m.', '1 км = 1000 м.']], [["10 ga ko'paytirish", 'Умножить на 10'], ['1 km = 1000 m.', '1 км = 1000 м.']]],
      'A', ['1 km = 1000 m.', '1 км = 1000 м.']),
    oq('a-m-un-c4', '2.2.8', { ...M(UN), steps: [['7 sentner = 700 kg', '7 ц = 700 кг'], ['700 + 20 = 720', '700 + 20 = 720']] }, ['7 sentner 20 kg — necha kilogramm? (son)', 'Сколько килограммов в 7 ц 20 кг? (число)'], '720', ['720 kg.', '720 кг.'], {}, 720),
    cq('a-m-un-c5', '2.2.6', { ...M(UN) },
      ["O'quvchi chizg'ichni 0 belgisidan emas, chetidan qo'yib, kesma uzunligini 1 sm ortiq oldi. Eng to'g'ri yordam?", 'Ученик приложил линейку краем, а не нулём, и получил длину на 1 см больше. Как лучше помочь?'],
      [[["Shkala boshini (0) ko'rsatib, kesma boshini 0 ga to'g'rilashni mashq qildirish", 'Показать начало шкалы (0) и потренировать совмещать начало отрезка с нулём']], [["Javobni o'zi to'g'rilab qo'yish", 'Исправить ответ самому'], ["Sabab tushunilmaydi.", 'Причина останется непонятой.']], [["Chizg'ichdan foydalanmaslik", 'Не пользоваться линейкой'], ["Ko'nikma shakllanmaydi.", 'Навык не формируется.']], [["Baho pasaytirish", 'Снизить отметку'], ["Usul o'rgatilmaydi.", 'Способ не объяснён.']]],
      'A', ["O'lchash shkala boshidan boshlanadi.", 'Измерение начинается от начала шкалы.']),
  ],
});

/* ======================= 7. Perimeter ======================= */
const PE = 'math-perimeter';
export const MATH_PERIMETER = lesson({
  id: PE, module: 'math-geo', level: 'core', stage: 'C', minutes: 16, codes: ['2.2.9', '2.2.3'], requires: [UN], sourceIds: S,
  title: ['Perimetr', 'Периметр'],
  blocks: [
    B.intro(["Bog' atrofiga to'siq qurish uchun necha metr panjara kerak? Buning uchun figura chegarasining uzunligini — perimetrni bilish kerak.", 'Сколько метров сетки нужно, чтобы огородить сад? Для этого нужна длина границы фигуры — периметр.']),
    B.definition(["**Perimetr** — ko'pburchak barcha tomonlari uzunliklarining yig'indisi (chegara uzunligi). Uzunlik birliklarida o'lchanadi.", '**Периметр** — сумма длин всех сторон многоугольника (длина его границы). Измеряется в единицах длины.']),
    B.formula('P = 2(a + b) = 2a + 2b', [["To'g'ri to'rtburchak: qarama-qarshi tomonlar teng, shuning uchun har bir juft ikki marta olinadi.", 'Прямоугольник: противоположные стороны равны, поэтому каждая пара берётся дважды.']]),
    B.formula('P_{\\square} = 4a, \\qquad P_{\\triangle} = a + b + c', [['Kvadrat va uchburchak', 'Квадрат и треугольник']]),
    B.example(["Tomonlari 7 sm va 4 sm bo'lgan to'g'ri to'rtburchak perimetri?", 'Периметр прямоугольника со сторонами 7 см и 4 см?'], [
      { s: ['Formula:', 'Формула:'], tex: 'P = 2 \\cdot (7 + 4) = 2 \\cdot 11 = 22' },
    ], ['22 sm', '22 см'], ['7 + 4 + 7 + 4 = 22 sm.', '7 + 4 + 7 + 4 = 22 см.']),
    B.example(["Kvadrat perimetri 36 sm. Tomoni?", 'Периметр квадрата 36 см. Чему равна сторона?'], [
      { s: ["4 ta teng tomon:", '4 равные стороны:'], tex: 'a = 36 : 4 = 9' },
    ], ['9 sm', '9 см']),
    B.example(["To'g'ri to'rtburchak perimetri 30 sm, bo'yi 9 sm. Enini toping.", 'Периметр прямоугольника 30 см, длина 9 см. Найдите ширину.'], [
      { s: ["Yarim perimetr — bitta bo'y va bitta en:", 'Полупериметр — одна длина и одна ширина:'], tex: '30 : 2 = 15' },
      { s: ['Enini topamiz:', 'Находим ширину:'], tex: 'b = 15 - 9 = 6' },
    ], ['6 sm', '6 см']),
    B.exception(["To'g'ri to'rtburchakning burchagidan kvadrat kesib olinsa, perimetr o'zgarmaydi: ikki tomon qisqaradi, lekin xuddi shunday ikki ichki tomon qo'shiladi. Yuza esa kamayadi.", 'Если из угла прямоугольника вырезать квадрат, периметр не меняется: две стороны укорачиваются, но добавляются две такие же внутренние. А площадь уменьшается.']),
    B.mistake(null, [
      ["Perimetrni ko'paytirish bilan topish: P = a · b.", 'Находить периметр умножением: P = a · b.'],
      ["Faqat ikki tomonni qo'shish: 7 + 4 = 11.", 'Складывать только две стороны: 7 + 4 = 11.'],
      ["Birlikni sm² deb yozish.", 'Записывать единицы как см².'],
    ]),
    B.try(oq('a-m-pe-t1', '2.2.9', { ...M(PE), d: 1 }, ["Tomoni 6 sm bo'lgan kvadrat perimetri? (son)", 'Периметр квадрата со стороной 6 см? (число)'], '24', ['4 · 6 = 24 sm.', '4 · 6 = 24 см.'], {}, 24)),
    B.method(["Perimetrni o'rgatish:", 'Как учить периметру:'], [
      ["Ip bilan parta chetini aylanib o'lchash, so'ng ipni chizg'ich bilan o'lchash.", 'Обвести край парты нитью, затем измерить нить линейкой.'],
      ["«To'siq» (perimetr) va «gilam» (yuza) masalalarini yonma-yon qo'yish.", 'Ставить рядом задачи «забор» (периметр) и «ковёр» (площадь).'],
      ["Avval tomonlarni qo'shish, keyin formulaga o'tish — formula yig'indining qisqa yozuvi sifatida.", 'Сначала складывать стороны, потом перейти к формуле — как к сокращённой записи суммы.'],
    ]),
    B.summary(null, [
      ["Perimetr — chegara uzunligi, uzunlik birliklarida.", 'Периметр — длина границы, в единицах длины.'],
      ['P = 2(a + b); kvadrat: P = 4a.', 'P = 2(a + b); квадрат: P = 4a.'],
    ]),
  ],
  check: [
    oq('a-m-pe-c1', '2.2.9', { ...M(PE), steps: [['12 + 5 = 17', '12 + 5 = 17'], ['2 · 17 = 34', '2 · 17 = 34']] }, ["Tomonlari 12 sm va 5 sm bo'lgan to'g'ri to'rtburchak perimetri? (son)", 'Периметр прямоугольника со сторонами 12 см и 5 см? (число)'], '34', ['34 sm.', '34 см.'], {}, 34),
    oq('a-m-pe-c2', '2.2.9', { ...M(PE) }, ["Kvadrat shaklidagi gulzor atrofiga 48 m panjara ketdi. Gulzorning bir tomoni necha metr?", 'Вокруг квадратной клумбы поставили 48 м ограды. Какова длина одной стороны клумбы в метрах?'], '12', ['48 : 4 = 12.', '48 : 4 = 12.'], {}, 12),
    oq('a-m-pe-c3', '2.2.9', { ...M(PE), steps: [['26 : 2 = 13', '26 : 2 = 13'], ['13 − 8 = 5', '13 − 8 = 5']] }, ["To'g'ri to'rtburchak perimetri 26 sm, bo'yi 8 sm. Eni necha sm? (son)", 'Периметр прямоугольника 26 см, длина 8 см. Ширина в см? (число)'], '5', ['5 sm.', '5 см.'], {}, 5),
    cq('a-m-pe-c4', '2.2.9', { ...M(PE) },
      ["O'quvchi 6 × 3 to'g'ri to'rtburchak uchun P = 6 + 3 = 9 sm deb yozdi. Nimani hisobga olmadi?", 'Ученик для прямоугольника 6 × 3 записал P = 6 + 3 = 9 см. Что он не учёл?'],
      [[["To'rt tomondan faqat ikkitasini qo'shgan", 'Сложил только две стороны из четырёх']], [["Ko'paytirish kerak edi", 'Нужно было умножить'], ["Ko'paytirish yuzani beradi.", 'Умножение даёт площадь.']], [["Birlik sm² bo'lishi kerak", 'Единица должна быть см²'], ['Perimetr — sm da.', 'Периметр — в см.']], [["Xato yo'q", 'Ошибки нет'], ['P = 18 sm.', 'P = 18 см.']]],
      'A', ['P = 2 · (6 + 3) = 18 sm.', 'P = 2 · (6 + 3) = 18 см.']),
    cq('a-m-pe-c5', '2.2.9', { ...M(PE), d: 3, rule: ["Burchakdan kesilgan to'g'ri to'rtburchak perimetrni o'zgartirmaydi.", 'Вырезанный из угла прямоугольник не меняет периметр.'] },
      ["10 sm × 6 sm to'g'ri to'rtburchak burchagidan 2 sm × 2 sm kvadrat kesildi. Perimetr qanday o'zgardi?", 'Из угла прямоугольника 10 см × 6 см вырезали квадрат 2 см × 2 см. Как изменился периметр?'],
      [[["O'zgarmadi — 32 sm", 'Не изменился — 32 см']], [['4 sm ga kamaydi', 'Уменьшился на 4 см'], ["Qisqargan 4 sm o'rniga yangi 4 sm qo'shildi.", 'Вместо убранных 4 см добавились новые 4 см.']], [['8 sm ga kamaydi', 'Уменьшился на 8 см'], ["Yuza haqidagi mulohazani ko'chirish xatosi.", 'Это перенос рассуждения о площади.']], [['4 sm ga oshdi', 'Увеличился на 4 см'], ["Ichki tomonlar qisqargan qismlarga teng.", 'Внутренние стороны равны укороченным частям.']]],
      'A', ['P = 2(10 + 6) = 32 sm, kesishdan keyin ham 32 sm.', 'P = 2(10 + 6) = 32 см и после вырезания тоже 32 см.']),
  ],
});

/* ======================= 8. Word problems ======================= */
const WP = 'math-word-problems';
export const MATH_WORD_PROBLEMS = lesson({
  id: WP, module: 'math-prob', level: 'core', stage: 'C', minutes: 25, codes: ['2.1.11'], requires: [AS, MD], sourceIds: S,
  title: ['Matnli masalalar: tahlil va modellar', 'Текстовые задачи: анализ и модели'],
  blocks: [
    B.intro(["Matnli masala — hayotiy vaziyatni matematik tilga o'girish. O'quvchilar ko'pincha hisoblashda emas, aynan amalni tanlashda xato qiladi.", 'Текстовая задача — перевод жизненной ситуации на язык математики. Ученики чаще ошибаются не в вычислениях, а в выборе действия.']),
    B.definition(["Masala tarkibi: **shart** (ma'lum ma'lumotlar) va **savol** (nima topiladi). **Sodda masala** bitta amal bilan, **murakkab masala** — ikki va undan ko'p amal bilan yechiladi.", 'Состав задачи: **условие** (известные данные) и **вопрос** (что найти). **Простая задача** решается одним действием, **составная** — двумя и более.']),
    B.table([["Sodda masala turi", 'Вид простой задачи'], ['Amal', 'Действие'], ['Misol', 'Пример']], [
      [["Yig'indini topish", 'Нахождение суммы'], ['+', '+'], ['3 va 4 olma — jami?', '3 и 4 яблока — всего?']],
      [["Qoldiqni topish", 'Нахождение остатка'], ['−', '−'], ['10 ta edi, 4 tasi yeyildi', 'было 10, съели 4']],
      [["… ta ko'p / kam", 'Больше / меньше на …'], ['+ / −', '+ / −'], ["5 dan 3 ta ko'p", 'на 3 больше, чем 5']],
      [["Farq bo'yicha taqqoslash", 'Разностное сравнение'], ['−', '−'], ["Nechta ko'p?", 'На сколько больше?']],
      [["… marta ko'p / kam", 'Больше / меньше в … раз'], ['· / :', '· / :'], ["4 dan 3 marta ko'p", 'в 3 раза больше, чем 4']],
      [["Karrali taqqoslash", 'Кратное сравнение'], [':', ':'], ["Necha marta ko'p?", 'Во сколько раз больше?']],
    ], ["Sodda masalalar", 'Простые задачи']),
    B.rule(["Tahlilning ikki yo'li: **sintetik** (ma'lumotlardan savolga: «Bularni bilsak, nimani topa olamiz?») va **analitik** (savoldan ma'lumotlarga: «Savolga javob berish uchun nimani bilish kerak?»).", 'Два пути анализа: **синтетический** (от данных к вопросу: «Зная это, что можем найти?») и **аналитический** (от вопроса к данным: «Что нужно знать, чтобы ответить?»).']),
    B.example(["Birinchi qutida 24 kg olma, ikkinchisida 8 kg kam. Ikkala qutida jami necha kg?", 'В первом ящике 24 кг яблок, во втором на 8 кг меньше. Сколько килограммов в двух ящиках?'], [
      ["Analitik savol: jamini topish uchun ikkinchi qutidagini bilish kerak.", 'Аналитический вопрос: чтобы найти «всего», нужно знать, сколько во втором ящике.'],
      { s: ['Ikkinchi quti:', 'Второй ящик:'], tex: '24 - 8 = 16' },
      { s: ['Jami:', 'Всего:'], tex: '24 + 16 = 40' },
    ], ['40 kg', '40 кг'], ['Ifoda bilan: 24 + (24 − 8) = 40.', 'Выражением: 24 + (24 − 8) = 40.']),
    B.example(["Alida 15 ta marka bor, bu Validagidan 4 ta kam. Valida nechta marka bor?", 'У Али 15 марок, это на 4 меньше, чем у Вали. Сколько марок у Вали?'], [
      ["Bilvosita shakl: «kam» so'zi bor, lekin Valida **ko'proq**.", 'Косвенная форма: есть слово «меньше», но у Вали **больше**.'],
      ["Kesmalar chizmasi: Alining kesmasi Valinikidan 4 ga qisqa.", 'Схема отрезками: отрезок Али короче отрезка Вали на 4.'],
      { s: ["Valida ko'proq — qo'shamiz:", 'У Вали больше — складываем:'], tex: '15 + 4 = 19' },
    ], ['19 ta', '19 марок']),
    B.example(["Aziz 12 ta rasm chizdi, Botir 3 marta ko'p. Botir nechta rasm chizdi? Ular jami nechta chizdi?", 'Азиз нарисовал 12 рисунков, Ботир — в 3 раза больше. Сколько рисунков у Ботира? Сколько всего?'], [
      { s: ['Botir:', 'Ботир:'], tex: '12 \\cdot 3 = 36' },
      { s: ['Jami:', 'Всего:'], tex: '12 + 36 = 48' },
    ], ['36 ta; jami 48 ta', '36; всего 48']),
    B.mistake(null, [
      ["Kalit so'zga ko'r-ko'rona tayanish: «kam» → doim ayirish.", 'Слепо опираться на ключевое слово: «меньше» → всегда вычитание.'],
      ["«… ta ko'p» va «… marta ko'p»ni chalkashtirish.", 'Путать «на … больше» и «в … раз больше».'],
      ["Murakkab masalada oraliq savolni o'tkazib yuborish.", 'Пропускать промежуточный вопрос в составной задаче.'],
    ]),
    B.try(oq('a-m-wp-t1', '2.1.11', { ...M(WP), d: 2, steps: [['3 · 2500 = 7500', '3 · 2500 = 7500'], ['7500 + 3000 = 10 500', '7500 + 3000 = 10 500']] },
      ["3 ta daftar (har biri 2500 so'm) va 3000 so'mlik ruchka sotib olindi. Jami necha so'm to'landi? (son)", 'Купили 3 тетради по 2500 сумов и ручку за 3000 сумов. Сколько заплатили? (число)'], '10500', ['7500 + 3000 = 10 500.', '7500 + 3000 = 10 500.'], {}, 10500)),
    B.method(["Masala yechishga o'rgatish:", 'Как учить решению задач:'], [
      ["Masalani sahnalashtirish yoki predmetlar bilan modellashtirish.", 'Инсценировать задачу или моделировать предметами.'],
      ["Qisqa yozuv va kesmalar chizmasi — har bir masalada.", 'Краткая запись и схема отрезками — к каждой задаче.'],
      ["«Nima ma'lum? Nima topiladi? Avval nimani bilish kerak?» savollari tizimi.", 'Система вопросов «Что известно? Что найти? Что нужно узнать сначала?».'],
      ["Teskari masala tuzish va ma'lumoti yetishmaydigan/ortiqcha masalalar tahlilni chuqurlashtiradi.", 'Составление обратных задач и задачи с недостающими/лишними данными углубляют анализ.'],
    ]),
    B.summary(null, [
      ["Masala = shart + savol.", 'Задача = условие + вопрос.'],
      ["Amal so'zga qarab emas, munosabatga qarab tanlanadi.", 'Действие выбирают по отношению, а не по слову.'],
      ["Chizma va analitik tahlil — asosiy vositalar.", 'Схема и аналитический разбор — главные инструменты.'],
    ]),
  ],
  check: [
    oq('a-m-wp-c1', '2.1.11', { ...M(WP), steps: [['35 − 9 = 26 (ikkinchi javon)', '35 − 9 = 26 (вторая полка)'], ['35 + 26 = 61', '35 + 26 = 61']] },
      ["Birinchi javonda 35 ta kitob, ikkinchisida 9 ta kam. Ikkala javonda jami nechta kitob? (son)", 'На первой полке 35 книг, на второй на 9 меньше. Сколько книг на двух полках? (число)'], '61', ['35 + 26 = 61.', '35 + 26 = 61.'], {}, 61),
    cq('a-m-wp-c2', '2.1.11', { ...M(WP) },
      ["«Necha marta ko'p?» savoliga qaysi amal bilan javob beriladi?", 'Каким действием отвечают на вопрос «Во сколько раз больше?»'],
      [[["Bo'lish (karrali taqqoslash)", 'Делением (кратное сравнение)']], [["Ayirish", 'Вычитанием'], ["Ayirish «nechta ko'p?» savoliga javob beradi.", 'Вычитание отвечает на «на сколько больше?».']], [["Ko'paytirish", 'Умножением'], ["Ko'paytirish «… marta ko'p» sonni topadi.", 'Умножением находят число «в … раз больше».']], [["Qo'shish", 'Сложением'], ["Qo'shish taqqoslamaydi.", 'Сложение не сравнивает.']]],
      'A', ["Katta sonni kichigiga bo'lamiz.", 'Большее число делим на меньшее.']),
    oq('a-m-wp-c3', '2.1.11', { ...M(WP), rule: ["Bilvosita shakl: so'zga emas, kimda ko'p ekaniga qarang.", 'Косвенная форма: смотрите, у кого больше, а не на слово.'], steps: [["Dilnozada 6 ta ko'p", 'У Дильнозы на 6 больше'], ['18 + 6 = 24', '18 + 6 = 24']] },
      ["Lolada 18 ta qalam bor, bu Dilnozadagidan 6 ta kam. Dilnozada nechta qalam? (son)", 'У Лолы 18 карандашей, это на 6 меньше, чем у Дильнозы. Сколько карандашей у Дильнозы? (число)'], '24', ['18 + 6 = 24.', '18 + 6 = 24.'], {}, 24),
    cq('a-m-wp-c4', '2.1.11', { ...M(WP) },
      ["Masalani tahlil qilishning analitik usuli qaysi?", 'Что такое аналитический способ разбора задачи?'],
      [[["Savoldan ma'lumotlarga: «Javob uchun nimani bilish kerak?»", 'От вопроса к данным: «Что нужно знать для ответа?»']], [["Ma'lumotlardan savolga", 'От данных к вопросу'], ['Bu sintetik usul.', 'Это синтетический способ.']], [["Javobni taxmin qilish", 'Угадывание ответа'], ["Tahlil emas.", 'Это не анализ.']], [["Faqat hisoblash", 'Только вычисления'], ["Tahlil hisobdan oldin bo'ladi.", 'Анализ предшествует вычислениям.']]],
      'A', ["Analitik usul savoldan boshlanadi.", 'Аналитический способ начинается с вопроса.']),
    oq('a-m-wp-c5', '2.1.11', { ...M(WP), steps: [['8 · 4 = 32', '8 · 4 = 32'], ['32 + 8 = 40', '32 + 8 = 40']] },
      ["Bog'da 8 ta olma daraxti, nok daraxtlari esa 4 marta ko'p. Bog'da jami nechta daraxt? (son)", 'В саду 8 яблонь, а груш в 4 раза больше. Сколько всего деревьев? (число)'], '40', ['32 + 8 = 40.', '32 + 8 = 40.'], {}, 40),
  ],
});

export const MATH2_LESSONS = [MATH_PLACE_VALUE, MATH_NUMBER_SYSTEMS, MATH_ADD_SUB, MATH_MULT_DIV, MATH_PROPERTIES, MATH_UNITS, MATH_PERIMETER, MATH_WORD_PROBLEMS];
