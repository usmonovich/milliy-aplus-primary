// Pedagogy — batch 3: teaching methods (classification, verbal, visual, practical, problem-based,
// differentiated instruction). Equal content in uz and ru.
import { B, cq, lesson } from './build';

const PS = ['ibragimov', 'gafforova', 'azizxojayeva', 'mavlonova', 'spec2026'];
const P = (l: string) => ({ lang: 'both' as const, lesson: l, src: PS });

/* ======================= 1. Teaching methods: classification ======================= */
const MT = 'ped-methods';
export const PED_METHODS = lesson({
  id: MT, module: 'ped-methods', level: 'core', stage: 'C', minutes: 22, codes: ['3.3.1', '3.3.5'], requires: ['ped-principles'], sourceIds: PS,
  title: ["Ta'lim metodlari: tushuncha va tasnif", 'Методы обучения: понятие и классификация'],
  blocks: [
    B.intro(["Bitta mavzuni — masalan, «Kasr» ni — hikoya qilib, rasm ko'rsatib, olmani bo'lib yoki o'quvchilarga muammo qo'yib o'tish mumkin. Qaysi yo'l yaxshiroq? Javob «metodni tanlash mezonlari» da. Imtihonda metodlar bo'yicha vaziyatli savollar ko'p uchraydi.", 'Одну тему — например, «Дробь» — можно пройти рассказом, показом рисунка, делением яблока или постановкой проблемы. Какой путь лучше? Ответ — в критериях выбора метода. На экзамене много ситуационных вопросов о методах.']),
    B.definition(["**Ta'lim metodi** — o'qituvchi va o'quvchilarning ta'lim maqsadiga erishishga qaratilgan **birgalikdagi faoliyat usuli**. **Usul (priyom)** — metodning bir qismi, alohida harakat (masalan, suhbatdagi yetaklovchi savol). **Vosita** — nima yordamida o'qitamiz (darslik, jadval, kompyuter). **Ta'limni tashkil etish shakli** — o'quvchilar ishining tashkiliy ko'rinishi (dars, guruh ishi, ekskursiya).", '**Метод обучения** — способ **совместной деятельности** учителя и учеников, направленной на достижение цели обучения. **Приём** — часть метода, отдельное действие (например, наводящий вопрос в беседе). **Средство** — то, с помощью чего обучают (учебник, таблица, компьютер). **Форма организации обучения** — организационный вид работы учеников (урок, групповая работа, экскурсия).']),
    B.table([['Asos', 'Основание'], ['Metodlar guruhi', 'Группы методов'], ['Misol', 'Пример']], [
      [["Bilim manbai", 'Источник знаний'], ["So'z (og'zaki), ko'rgazmali, amaliy", 'Словесные, наглядные, практические'], ["Hikoya; jadval ko'rsatish; o'lchash", 'Рассказ; показ таблицы; измерение']],
      [["Bilish faoliyati xarakteri (I.Ya. Lerner, M.N. Skatkin)", 'Характер познавательной деятельности (И.Я. Лернер, М.Н. Скаткин)'], ["Tushuntirish-illyustrativ, reproduktiv, muammoli bayon, qisman izlanish (evristik), tadqiqot", 'Объяснительно-иллюстративный, репродуктивный, проблемное изложение, частично-поисковый (эвристический), исследовательский'], ["Namuna bo'yicha mashq — reproduktiv; qoidani o'zi topish — qisman izlanish", 'Упражнение по образцу — репродуктивный; самостоятельное открытие правила — частично-поисковый']],
      [["Faoliyat tuzilishi (Yu.K. Babanskiy)", 'Структура деятельности (Ю.К. Бабанский)'], ["Tashkil etish, rag'batlantirish, nazorat metodlari", 'Методы организации, стимулирования, контроля'], ["Didaktik o'yin — rag'batlantirish; og'zaki so'rov — nazorat", 'Дидактическая игра — стимулирование; устный опрос — контроль']],
    ], ['Metodlar tasnifi', 'Классификации методов']),
    B.rule(["Metodni tanlash mezonlari: 1) dars **maqsadi** (yangi bilim, ko'nikma, nazorat); 2) **mazmun** xususiyati; 3) o'quvchilarning **yoshi va tayyorgarligi**; 4) **vaqt**; 5) mavjud **vositalar**; 6) o'qituvchining imkoniyati. Yagona «eng yaxshi» metod yo'q: bir darsda odatda bir nechta metod birlashtiriladi.", 'Критерии выбора метода: 1) **цель** урока (новое знание, навык, контроль); 2) особенности **содержания**; 3) **возраст и подготовка** учеников; 4) **время**; 5) имеющиеся **средства**; 6) возможности учителя. Единственного «лучшего» метода нет: на уроке обычно сочетают несколько методов.']),
    B.example(["O'qituvchi «Qushlar qishni qanday o'tkazadi?» mavzusini hikoya qilib beradi va rasmlar ko'rsatadi. Metodlarni aniqlang.", 'Учитель рассказывает на тему «Как птицы зимуют» и показывает картинки. Определите методы.'], [
      ["Bilim manbai bo'yicha: hikoya — so'z metodi, rasm — ko'rgazmali (illyustratsiya).", 'По источнику: рассказ — словесный метод, картинки — наглядный (иллюстрация).'],
      ["Bilish faoliyati bo'yicha: o'quvchilar tayyor bilimni qabul qiladi — tushuntirish-illyustrativ.", 'По характеру познавательной деятельности: ученики воспринимают готовое знание — объяснительно-иллюстративный.'],
    ], ["So'z + ko'rgazmali; tushuntirish-illyustrativ", 'Словесный + наглядный; объяснительно-иллюстративный']),
    B.example(["3-sinfda o'quvchilar bir nechta to'g'ri to'rtburchakning tomonlarini o'lchab, yuzini kvadratchalar bilan sanaydi va yuza formulasini o'zlari taxmin qiladi. Metod?", 'В 3 классе ученики измеряют стороны нескольких прямоугольников, считают площадь по квадратикам и сами догадываются о формуле площади. Какой метод?'], [
      ["Manba: o'lchash, sanash — amaliy metod.", 'Источник: измерение, подсчёт — практический метод.'],
      ["Faoliyat: qoidani o'quvchilar o'qituvchi yo'naltirishi bilan o'zlari topadi — qisman izlanish (evristik).", 'Деятельность: правило ученики находят сами под руководством учителя — частично-поисковый (эвристический).'],
    ], ["Amaliy; qisman izlanish", 'Практический; частично-поисковый']),
    B.example(["O'qituvchi o'quvchilarning o'qish tezligini tekshirish uchun 1 daqiqalik o'qitishni o'tkazdi. Babanskiy tasnifi bo'yicha bu qaysi guruh?", 'Учитель провёл минутное чтение, чтобы проверить скорость чтения. К какой группе по Бабанскому это относится?'], [
      ["Maqsad — natijani aniqlash.", 'Цель — выявить результат.'],
      ["Bu — nazorat va o'z-o'zini nazorat metodlari guruhi.", 'Это группа методов контроля и самоконтроля.'],
    ], ['Nazorat metodi', 'Метод контроля']),
    B.mistake(null, [
      ["Metod va shaklni chalkashtirish: «guruh ishi — metod» (bu tashkil etish shakli).", 'Путать метод и форму: «групповая работа — метод» (это форма организации).'],
      ["Bitta metodni «eng zamonaviy» deb, maqsadga qaramay hamma darsda qo'llash.", 'Считать один метод «самым современным» и применять его на всех уроках без учёта цели.'],
      ["Usulni metod deb atash: «yetaklovchi savol metodi».", 'Называть приём методом: «метод наводящего вопроса».'],
    ]),
    B.apply(["Dars rejasini yozishda har bir bosqichga metodni maqsad bilan bog'lab yozing: «Yangi mavzu — qisman izlanish (o'quvchilar qoidani jadvaldan topadi), mustahkamlash — reproduktiv mashq, yakun — o'z-o'zini nazorat».", 'В конспекте урока указывайте метод для каждого этапа вместе с целью: «Новая тема — частично-поисковый (ученики находят правило по таблице), закрепление — репродуктивные упражнения, итог — самоконтроль».']),
    B.try(cq('a-p-mt-t1', '3.3.1', { ...P(MT), d: 1, rule: ["Shakl — ishni tashkil etish, metod — faoliyat usuli.", 'Форма — организация работы, метод — способ деятельности.'] },
      ["Qaysi biri ta'lim metodi emas, balki tashkil etish shakli?", 'Что является не методом, а формой организации обучения?'],
      [[["Ekskursiya", 'Экскурсия']], [["Suhbat", 'Беседа'], ["Suhbat — so'z metodi.", 'Беседа — словесный метод.']], [["Demonstratsiya", 'Демонстрация'], ["Ko'rgazmali metod.", 'Наглядный метод.']], [["Mashq", 'Упражнение'], ["Amaliy metod.", 'Практический метод.']]],
      'A', ["Ekskursiya — o'quv ishini tashkil etish shakli; uning ichida kuzatish, suhbat kabi metodlar qo'llanadi.", 'Экскурсия — форма организации; внутри неё применяются методы наблюдения, беседы и др.'])),
    B.method(["Metodlar haqidagi bilimni sinfda qo'llash:", 'Как применять знания о методах в классе:'], [
      ["Bir darsda kamida ikki xil manba: so'z + ko'rgazma yoki ko'rgazma + amaliy ish.", 'На одном уроке не меньше двух источников: слово + наглядность или наглядность + практическая работа.'],
      ["Reproduktivdan izlanishga: avval namuna, keyin «o'zing top» topshirig'i.", 'От репродуктивного к поисковому: сначала образец, затем задание «найди сам».'],
      ["Darsdan keyin o'zini tahlil: maqsadga qaysi metod eng ko'p xizmat qildi?", 'Самоанализ после урока: какой метод лучше всего работал на цель?'],
    ]),
    B.summary(null, [
      ["Metod — birgalikdagi faoliyat usuli; usul — uning qismi; shakl — tashkil etish.", 'Метод — способ совместной деятельности; приём — его часть; форма — организация.'],
      ["Tasniflar: manba bo'yicha; bilish faoliyati bo'yicha (Lerner–Skatkin); Babanskiy bo'yicha.", 'Классификации: по источнику; по характеру познавательной деятельности (Лернер–Скаткин); по Бабанскому.'],
      ["Tanlov mezoni — maqsad, mazmun, yosh, vaqt, vositalar.", 'Критерии выбора — цель, содержание, возраст, время, средства.'],
    ]),
  ],
  check: [
    cq('a-p-mt-c1', '3.3.1', { ...P(MT) }, ["O'quvchilar o'qituvchi ko'rsatgan namunaga qarab 10 ta shunga o'xshash misol yechdi. Lerner–Skatkin tasnifi bo'yicha metod?", 'Ученики решили 10 примеров по образцу, показанному учителем. Какой это метод по классификации Лернера–Скаткина?'],
      [[['Reproduktiv', 'Репродуктивный']], [["Tadqiqot", 'Исследовательский'], ["Mustaqil izlanish yo'q — namuna takrorlanadi.", 'Самостоятельного поиска нет — повторяется образец.']], [["Muammoli bayon", 'Проблемное изложение'], ["Muammo qo'yilmagan.", 'Проблема не ставилась.']], [["Qisman izlanish", 'Частично-поисковый'], ["Yangi narsani topish talab qilinmaydi.", 'Не требуется открывать новое.']]],
      'A', ["Namuna bo'yicha takrorlash — reproduktiv metod.", 'Воспроизведение по образцу — репродуктивный метод.']),
    cq('a-p-mt-c2', '3.3.5', { ...P(MT) }, ["Metodni tanlashda birinchi navbatda nimaga tayaniladi?", 'На что в первую очередь опираются при выборе метода?'],
      [[["Dars maqsadi va o'quvchilarning tayyorgarligiga", 'На цель урока и подготовку учеников']], [["O'qituvchining eng yoqtirgan metodiga", 'На любимый метод учителя'], ["Shaxsiy afzallik mezon emas.", 'Личное предпочтение — не критерий.']], [["Metodning yangiligiga", 'На новизну метода'], ["Yangi metod maqsadga mos kelmasligi mumkin.", 'Новый метод может не соответствовать цели.']], [["Darslik muallifining ko'rsatmasiga, maqsaddan qat'i nazar", 'На указание автора учебника независимо от цели'], ["Maqsad va sinfni hisobga olish shart.", 'Нужно учитывать цель и класс.']]],
      'A', ["Maqsad — asosiy mezon; yosh, mazmun, vaqt va vositalar uni to'ldiradi.", 'Цель — главный критерий; возраст, содержание, время и средства его дополняют.']),
    cq('a-p-mt-c3', '3.3.1', { ...P(MT) }, ["Suhbat davomida o'qituvchi «O'ylab ko'r: agar maxraj katta bo'lsa, bo'lak qanday bo'ladi?» deb so'radi. Bu nima?", 'В ходе беседы учитель спросил: «Подумай: если знаменатель больше, какой будет доля?» Что это?'],
      [[["Usul (yetaklovchi savol) — suhbat metodining qismi", 'Приём (наводящий вопрос) — часть метода беседы']], [["Alohida metod", 'Отдельный метод'], ["Bu metod ichidagi harakat.", 'Это действие внутри метода.']], [["Ta'lim vositasi", 'Средство обучения'], ["Vosita — darslik, jadval va h.k.", 'Средство — учебник, таблица и т. п.']], [["Tashkil etish shakli", 'Форма организации'], ["Shakl — dars, guruh ishi.", 'Форма — урок, групповая работа.']]],
      'A', ["Yetaklovchi savol — suhbatning usuli.", 'Наводящий вопрос — приём беседы.']),
    cq('a-p-mt-c4', '3.3.1', { ...P(MT) }, ["Babanskiy tasnifida «didaktik o'yin» ko'pincha qaysi guruhga kiritiladi?", 'В какую группу классификации Бабанского обычно относят дидактическую игру?'],
      [[["O'quv faoliyatini rag'batlantirish metodlari", 'Методы стимулирования учебной деятельности']], [["Nazorat metodlari", 'Методы контроля'], ["O'yinning asosiy vazifasi — qiziqish uyg'otish.", 'Главная функция игры — вызвать интерес.']], [["Faqat so'z metodlari", 'Только словесные методы'], ["Bu manba bo'yicha tasnif, Babanskiyniki emas.", 'Это классификация по источнику, а не Бабанского.']], [["Tadqiqot metodlari", 'Исследовательские методы'], ["Bu Lerner–Skatkin tasnifining guruhi.", 'Это группа классификации Лернера–Скаткина.']]],
      'A', ["O'yin qiziqish va motivatsiya hosil qiladi — rag'batlantirish metodi.", 'Игра создаёт интерес и мотивацию — метод стимулирования.']),
    cq('a-p-mt-c5', '3.3.5', { ...P(MT) }, ["1-sinfda 35 daqiqalik dars faqat o'qituvchining tushuntirishidan iborat bo'ldi. Asosiy kamchilik?", 'В 1 классе 35-минутный урок состоял только из объяснения учителя. Главный недостаток?'],
      [[["Yoshga mos kelmaydi: bolalarning diqqati qisqa, ko'rgazma va amaliy harakat kerak", 'Не соответствует возрасту: внимание детей кратковременно, нужны наглядность и практические действия']], [["Kamchilik yo'q — tushuntirish eng samarali", 'Недостатка нет — объяснение самое эффективное'], ["Bitta metod bilan maqsadga erishish qiyin.", 'Одним методом трудно достичь цели.']], [["Darsda baho qo'yilmagan", 'На уроке не ставились отметки'], ["Asosiy muammo metod tanlovida.", 'Главная проблема — в выборе метода.']], [["Uy vazifasi kam", 'Мало домашнего задания'], ["1-sinfda bu asosiy mezon emas.", 'Для 1 класса это не главный критерий.']]],
      'A', ["Metodni tanlashda yosh mezoni buzilgan; metodlarni almashtirib, birlashtirish kerak.", 'Нарушен критерий возраста; методы нужно чередовать и сочетать.']),
  ],
});

/* ======================= 2. Verbal methods ======================= */
const VB = 'ped-verbal';
export const PED_VERBAL = lesson({
  id: VB, module: 'ped-methods', level: 'core', stage: 'C', minutes: 18, codes: ['3.3.1'], requires: [MT], sourceIds: PS,
  title: ["So'z (og'zaki) metodlari: hikoya, tushuntirish, suhbat", 'Словесные методы: рассказ, объяснение, беседа'],
  blocks: [
    B.intro(["O'qituvchining asosiy quroli — so'z. Lekin so'z metodlari to'g'ri ishlatilmasa, dars «gapirib berish» ga aylanadi va bolalar passiv tinglovchiga aylanadi. Qachon hikoya, qachon tushuntirish, qachon suhbat kerak?", 'Главный инструмент учителя — слово. Но если словесные методы применять неумело, урок превращается в «рассказывание», а дети — в пассивных слушателей. Когда нужен рассказ, когда объяснение, когда беседа?']),
    B.definition(["**Hikoya** — voqea yoki hodisani obrazli, izchil bayon qilish (tabiatshunoslik, tarix, adabiyot). **Tushuntirish** — qoida, tushuncha, hodisa sababini dalillar bilan ochib berish (matematika, ona tili). **Suhbat** — savol-javob metodi: o'qituvchi savollar orqali o'quvchilarni bilimga olib boradi. **Kitob bilan ishlash** — darslik, lug'at, ma'lumotnoma bilan mustaqil ishlash.", '**Рассказ** — образное, последовательное изложение событий или явлений (природоведение, история, литература). **Объяснение** — раскрытие правила, понятия, причины явления с доказательствами (математика, родной язык). **Беседа** — вопросно-ответный метод: учитель вопросами подводит учеников к знанию. **Работа с книгой** — самостоятельная работа с учебником, словарём, справочником.']),
    B.table([['Metod', 'Метод'], ['Qachon mos', 'Когда уместен'], ['Talablar', 'Требования']], [
      [['Hikoya', 'Рассказ'], ["O'quvchilarda tajriba kam, yangi faktlar kerak", 'У учеников мало опыта, нужны новые факты'], ["Qisqa, obrazli, ko'rgazma bilan; oxirida xulosa", 'Кратко, образно, с наглядностью; в конце вывод']],
      [['Tushuntirish', 'Объяснение'], ["Qoida, algoritm, sabab-oqibat", 'Правило, алгоритм, причина-следствие'], ["Bosqichma-bosqich, misol bilan, tushunishni tekshirish", 'Пошагово, с примером, с проверкой понимания']],
      [['Suhbat', 'Беседа'], ["O'quvchilarda tayanch bilim bor", 'У учеников есть опорные знания'], ["Aniq, ketma-ket savollar; javobni kutish vaqti", 'Чёткие, последовательные вопросы; время на ответ']],
    ], ["So'z metodlari", 'Словесные методы']),
    B.rule(["Suhbat savollari: **aniq** (bitta javob talab qiladi), **mantiqiy ketma-ket**, o'quvchi **kuchi yetadigan**, «ha/yo'q» bilan cheklanmaydigan. Savol berib, **3–5 soniya kuting** — shunda ko'proq o'quvchi fikrlaydi va javoblar to'liqroq bo'ladi. Avval savol, keyin o'quvchi ismi (hammasi o'ylashi uchun).", 'Вопросы беседы: **чёткие** (требуют одного ответа), **логически последовательные**, **посильные**, не ограниченные «да/нет». Задав вопрос, **подождите 3–5 секунд** — тогда думает больше учеников и ответы полнее. Сначала вопрос, потом имя ученика (чтобы думали все).']),
    B.example(["«Qishda nega daraxtlar barg to'kadi?» mavzusini evristik suhbat bilan o'tkazing. Savollar ketma-ketligini tuzing.", 'Проведите эвристическую беседу «Почему деревья зимой сбрасывают листья?». Составьте последовательность вопросов.'], [
      ["1) Kuzda daraxtlarda nima o'zgaradi? (kuzatishga tayanish)", '1) Что меняется на деревьях осенью? (опора на наблюдение)'],
      ["2) Barglar orqali daraxt nimani bug'latadi? (oldingi bilim)", '2) Что испаряет дерево через листья? (прежние знания)'],
      ["3) Qishda yer muzlasa, daraxt suvni ola oladimi? (bog'lash)", '3) Может ли дерево брать воду, если земля замёрзла? (связь)'],
      ["4) Demak, nega barglar to'kiladi? (xulosani o'quvchilar chiqaradi)", '4) Так почему же опадают листья? (вывод делают ученики)'],
    ], ["Savollar kuzatishdan xulosaga olib boradi", 'Вопросы ведут от наблюдения к выводу']),
    B.example(["O'qituvchi tushuntirish paytida 15 daqiqa uzluksiz gapirdi, oxirida «Tushunarlimi?» deb so'radi. Qanday yaxshilash mumkin?", 'Учитель 15 минут непрерывно объяснял, а в конце спросил: «Всем понятно?» Как улучшить?'], [
      ["Tushuntirishni 2–3 qisqa qismga bo'lish.", 'Разбить объяснение на 2–3 коротких части.'],
      ["Har qismdan keyin bitta misolni o'quvchilar bilan birga yechish.", 'После каждой части решить один пример вместе с учениками.'],
      ["«Tushunarlimi?» o'rniga tekshiruvchi savol: «Nega bu yerda o'nlik almashtiramiz?»", 'Вместо «Понятно?» — проверочный вопрос: «Почему здесь переходим через десяток?»'],
    ], ["Qisqa qismlar + birga bajarish + tekshiruv savoli", 'Короткие части + совместное выполнение + проверочный вопрос']),
    B.example(["«Ona tili» darsida o'qituvchi lug'at bilan ishlashni qanday tashkil qiladi?", 'Как учитель организует работу со словарём на уроке родного языка?'], [
      ["Maqsad: notanish so'z ma'nosini mustaqil topish.", 'Цель: самостоятельно найти значение незнакомого слова.'],
      ["Namuna: o'qituvchi bitta so'zni lug'atdan qanday topishni ko'rsatadi (alifbo tartibi).", 'Образец: учитель показывает, как найти одно слово (алфавитный порядок).'],
      ["Mustaqil ish: juftlikda 3 ta so'zni topib, gap tuzish.", 'Самостоятельная работа: в парах найти 3 слова и составить предложения.'],
    ], ["Kitob bilan ishlash: namuna → mustaqil topish → qo'llash", 'Работа с книгой: образец → самостоятельный поиск → применение']),
    B.mistake(null, [
      ["Uzoq monolog — kichik maktab yoshidagi bolalarning diqqati tez pasayadi.", 'Длинный монолог — внимание младших школьников быстро падает.'],
      ["Faqat «ha/yo'q» savollari yoki bir vaqtda ikki savol berish.", 'Только вопросы «да/нет» или два вопроса сразу.'],
      ["Savoldan keyin darhol o'zi javob berish — o'quvchilar o'ylashga ulgurmaydi.", 'Сразу после вопроса отвечать самому — ученики не успевают подумать.'],
      ["«Tushunarlimi?» savolini tushunishni tekshirish deb hisoblash.", 'Считать вопрос «Понятно?» проверкой понимания.'],
    ]),
    B.try(cq('a-p-vb-t1', '3.3.1', { ...P(VB), d: 1, rule: ["Savoldan keyin kutish vaqti — ko'proq fikrlash.", 'Пауза после вопроса — больше думающих.'] },
      ["Suhbatda ko'proq o'quvchi fikrlashi uchun eng to'g'ri harakat qaysi?", 'Какое действие в беседе больше всего помогает думать всем ученикам?'],
      [[["Avval savol berib, bir necha soniya kutish, keyin javob beruvchini chaqirish", 'Задать вопрос, подождать несколько секунд и только потом вызвать отвечающего']], [["Avval o'quvchi ismini aytib, keyin savol berish", 'Сначала назвать ученика, потом задать вопрос'], ["Qolganlar savolni o'zlariga tegishli emas deb o'ylaydi.", 'Остальные решат, что вопрос не к ним.']], [["Faqat qo'l ko'targanlardan so'rash", 'Спрашивать только поднявших руку'], ["Doimo bir xil o'quvchilar javob beradi.", 'Отвечают всегда одни и те же.']], [["Savolni o'zi tezda javoblash", 'Быстро ответить на вопрос самому'], ["O'quvchilar fikrlamaydi.", 'Ученики не думают.']]],
      'A', ["Kutish vaqti va savoldan keyin ism — butun sinfni fikrlashga undaydi.", 'Пауза и имя после вопроса побуждают думать весь класс.'])),
    B.method(["So'z metodlarini samarali qilish:", 'Как сделать словесные методы эффективными:'], [
      ["Har bir hikoya yoki tushuntirish — ko'rgazma yoki doskadagi qisqa sxema bilan.", 'Каждый рассказ или объяснение — с наглядностью или короткой схемой на доске.'],
      ["Tinglash vazifasi oldindan: «Hikoyadan qushning ikki moslashuvini topinglar».", 'Задание на слушание заранее: «Найдите в рассказе два приспособления птиц».'],
      ["Suhbat savollarini oldindan yozib, ketma-ketligini tekshirish.", 'Заранее записать вопросы беседы и проверить их последовательность.'],
    ]),
    B.summary(null, [
      ["Hikoya — faktlar, tushuntirish — qoida va sabab, suhbat — savollar orqali kashfiyot.", 'Рассказ — факты, объяснение — правило и причина, беседа — открытие через вопросы.'],
      ["Qisqa, ko'rgazmali, tekshiruv savollari bilan.", 'Кратко, с наглядностью, с проверочными вопросами.'],
      ["Kutish vaqti va aniq savollar — suhbat sifati.", 'Пауза и чёткие вопросы — качество беседы.'],
    ]),
  ],
  check: [
    cq('a-p-vb-c1', '3.3.1', { ...P(VB) }, ["O'qituvchi savollar orqali o'quvchilarni o'zlari xulosa chiqarishga olib boryapti. Bu qaysi metod?", 'Учитель вопросами подводит учеников к самостоятельному выводу. Какой это метод?'],
      [[["Evristik suhbat", 'Эвристическая беседа']], [['Hikoya', 'Рассказ'], ["Hikoyada o'qituvchi bayon qiladi, savol-javob yo'q.", 'В рассказе учитель излагает, вопросов-ответов нет.']], [['Demonstratsiya', 'Демонстрация'], ["Bu ko'rgazmali metod.", 'Это наглядный метод.']], [['Mashq', 'Упражнение'], ["Bu amaliy metod.", 'Это практический метод.']]],
      'A', ["Savollar orqali yangi bilimga olib borish — evristik suhbat.", 'Подведение к новому знанию вопросами — эвристическая беседа.']),
    cq('a-p-vb-c2', '3.3.1', { ...P(VB) }, ["Suhbat uchun qaysi savol eng yaxshi tuzilgan?", 'Какой вопрос для беседы составлен лучше всего?'],
      [[["«Nega qushlar issiq o'lkalarga uchib ketadi?»", '«Почему птицы улетают в тёплые края?»']], [["«Qushlar uchib ketadimi?»", '«Птицы улетают?»'], ["«Ha/yo'q» savoli fikrlatmaydi.", 'Вопрос «да/нет» не заставляет думать.']], [["«Qushlar qayerga va qachon, nega va qanday uchadi?»", '«Куда и когда, почему и как летят птицы?»'], ["Bir vaqtda to'rt savol — chalkashtiradi.", 'Четыре вопроса сразу — сбивают.']], [["«Qushlar haqida nima bilasiz, hammasini ayting»", '«Расскажите всё, что знаете о птицах»'], ["Juda noaniq.", 'Слишком расплывчато.']]],
      'A', ["Aniq, bitta, sababni so'raydigan savol.", 'Чёткий, один, причинный вопрос.']),
    cq('a-p-vb-c3', '3.3.1', { ...P(VB) }, ["«Tushunarlimi?» savoli o'rniga qaysi harakat tushunishni haqiqatan tekshiradi?", 'Какое действие вместо вопроса «Понятно?» действительно проверяет понимание?'],
      [[["O'quvchidan qoidani yangi misolda qo'llab, sababini tushuntirishni so'rash", 'Попросить ученика применить правило к новому примеру и объяснить почему']], [["Sinfdan «ha» deb javob berishni so'rash", 'Попросить класс ответить «да»'], ["Ko'pchilik tushunmasa ham «ha» deydi.", 'Многие скажут «да», даже не поняв.']], [["Qoidani qayta o'qib berish", 'Перечитать правило'], ["Bu tekshiruv emas.", 'Это не проверка.']], [["Keyingi mavzuga o'tish", 'Перейти к следующей теме'], ["Tushunish noma'lum qoladi.", 'Понимание останется неизвестным.']]],
      'A', ["Qo'llash va izohlash — tushunishning dalili.", 'Применение и объяснение — доказательство понимания.']),
    cq('a-p-vb-c4', '3.3.1', { ...P(VB) }, ["Qaysi vaziyatda hikoya metodi eng mos keladi?", 'В какой ситуации метод рассказа уместнее всего?'],
      [[["O'quvchilar umuman bilmaydigan tarixiy voqea bilan tanishtirishda", 'При знакомстве с историческим событием, о котором ученики ничего не знают']], [["Ko'paytirish jadvalini mustahkamlashda", 'При закреплении таблицы умножения'], ["Mustahkamlash uchun mashq kerak.", 'Для закрепления нужны упражнения.']], [["O'quvchilar tajribasidan xulosa chiqarishda", 'Когда вывод делают из опыта учеников'], ["Bunda suhbat mos.", 'Здесь уместна беседа.']], [["O'lchash ko'nikmasini shakllantirishda", 'При формировании навыка измерения'], ["Amaliy ish kerak.", 'Нужна практическая работа.']]],
      'A', ["Tayanch tajriba yo'q bo'lsa — obrazli hikoya.", 'Если нет опорного опыта — образный рассказ.']),
    cq('a-p-vb-c5', '3.3.5', { ...P(VB) }, ["Darsni kuzatgan metodist: «O'qituvchi savol beradi va darhol o'zi javob beradi». Asosiy tavsiya?", 'Методист после урока: «Учитель задаёт вопрос и сразу отвечает сам». Главная рекомендация?'],
      [[["Savoldan keyin 3–5 soniya kutish va javobni o'quvchilardan olish", 'После вопроса ждать 3–5 секунд и получать ответ от учеников']], [["Savollar sonini oshirish", 'Задавать больше вопросов'], ["Muammo savollar sonida emas.", 'Проблема не в количестве вопросов.']], [["Savollarni butunlay olib tashlash", 'Совсем убрать вопросы'], ["Suhbat foydali metod.", 'Беседа — полезный метод.']], [["Faqat kuchli o'quvchilardan so'rash", 'Спрашивать только сильных'], ["Qolganlar fikrlashdan chetda qoladi.", 'Остальные исключаются из размышления.']]],
      'A', ["Kutish vaqti o'quvchilarga fikrlash imkonini beradi.", 'Пауза даёт ученикам возможность подумать.']),
  ],
});

/* ======================= 3. Visual methods ======================= */
const VS = 'ped-visual';
export const PED_VISUAL = lesson({
  id: VS, module: 'ped-methods', level: 'core', stage: 'C', minutes: 18, codes: ['3.3.1', '3.1.4'], requires: [MT], sourceIds: PS,
  title: ["Ko'rgazmali metodlar: illyustratsiya va demonstratsiya", 'Наглядные методы: иллюстрация и демонстрация'],
  blocks: [
    B.intro(["Kichik maktab yoshidagi bola obrazlar orqali fikrlaydi, shuning uchun ko'rgazma — boshlang'ich ta'limning tayanchi. Lekin ko'rgazmaning ko'pligi samaraga teng emas: yorqin, ammo mavzuga aloqasiz rasm diqqatni chalg'itadi.", 'Младший школьник мыслит образами, поэтому наглядность — опора начального обучения. Но много наглядности не значит эффективно: яркая, но не относящаяся к теме картинка отвлекает внимание.']),
    B.definition(["**Illyustratsiya** — statik qo'llanmalarni ko'rsatish: rasm, plakat, jadval, xarita, sxema. **Demonstratsiya** — jarayonni harakatda ko'rsatish: tajriba, video, asbob ishlashi, o'qituvchi harakatining namunasi (harfni yozish). **Ko'rgazma darajalari**: predmet (haqiqiy olma) → tasvir (rasm) → sxema (doiracha) → belgi (raqam, harf).", '**Иллюстрация** — показ статичных пособий: картин, плакатов, таблиц, карт, схем. **Демонстрация** — показ процесса в движении: опыт, видео, работа прибора, образец действия учителя (написание буквы). **Уровни наглядности**: предмет (настоящее яблоко) → изображение (рисунок) → схема (кружок) → знак (цифра, буква).']),
    B.rule(["Ko'rgazma talablari: 1) **maqsadga mos** — mavzuning asosiy tomonini ko'rsatadi; 2) **hamma ko'radi** (o'lcham, joylashuv); 3) **o'z vaqtida** ko'rsatiladi va keyin olib qo'yiladi; 4) **kuzatish vazifasi** bilan birga («Nimasi bilan farq qiladi?»); 5) **so'z bilan bog'lanadi** — o'qituvchi diqqatni muhim belgiga yo'naltiradi; 6) predmetdan sxemaga va belgiga bosqichma-bosqich o'tiladi.", 'Требования к наглядности: 1) **соответствует цели** — показывает главное в теме; 2) **видна всем** (размер, расположение); 3) показывается **вовремя** и затем убирается; 4) сопровождается **заданием на наблюдение** («Чем отличаются?»); 5) **связана со словом** — учитель направляет внимание на существенный признак; 6) переход от предмета к схеме и знаку — постепенный.']),
    B.example(["1-sinfda «Qo'shish» mavzusi. Ko'rgazmani darajalar bo'yicha rejalashtiring.", 'В 1 классе тема «Сложение». Спланируйте наглядность по уровням.'], [
      ["Predmet: 3 ta va 2 ta haqiqiy qalamni birlashtirish.", 'Предмет: объединить 3 и 2 настоящих карандаша.'],
      ["Tasvir: rasmda 3 ta va 2 ta olma.", 'Изображение: на рисунке 3 и 2 яблока.'],
      ["Sxema: 3 ta va 2 ta doiracha.", 'Схема: 3 и 2 кружка.'],
      ["Belgi: $3 + 2 = 5$.", 'Знак: $3 + 2 = 5$.'],
    ], ["Predmet → tasvir → sxema → belgi", 'Предмет → изображение → схема → знак']),
    B.example(["O'qituvchi darsning boshidan oxirigacha doskaga 6 ta yorqin plakat ilib qo'ydi. Bolalar diqqati tarqoq. Nima qilish kerak?", 'Учитель с начала до конца урока повесил на доску 6 ярких плакатов. Внимание детей рассеяно. Что делать?'], [
      ["Sabab: ixtiyorsiz diqqat yorqin narsalarga tortiladi.", 'Причина: непроизвольное внимание притягивается ко всему яркому.'],
      ["Har bir plakatni faqat kerakli paytda ochish va keyin yopish.", 'Открывать каждый плакат только в нужный момент и затем закрывать.'],
      ["Mavzuga aloqasi kam bo'lganlarini olib tashlash.", 'Убрать плакаты, слабо связанные с темой.'],
    ], ["Ko'rgazma — o'z vaqtida va o'lchov bilan", 'Наглядность — вовремя и в меру']),
    B.example(["Tabiatshunoslikda «Suv bug'lanishi» ni qanday ko'rsatish kerak?", 'Как показать на природоведении «испарение воды»?'], [
      ["Demonstratsiya: ikki likopchaga suv quyib, birini issiq joyga qo'yish.", 'Демонстрация: налить воду в два блюдца и одно поставить в тёплое место.'],
      ["Kuzatish vazifasi: «Qaysi likopchada suv tezroq kamayadi? Nega?»", 'Задание на наблюдение: «В каком блюдце вода убывает быстрее? Почему?»'],
      ["Natijani jadvalga yozish va xulosa qilish.", 'Записать результат в таблицу и сделать вывод.'],
    ], ["Demonstratsiya + kuzatish vazifasi + xulosa", 'Демонстрация + задание на наблюдение + вывод']),
    B.exception(null, [
      ["Ko'rgazma tafakkurni almashtirmasligi kerak: 4-sinfda faqat predmet bilan ishlash umumlashtirishni sekinlashtiradi.", 'Наглядность не должна подменять мышление: в 4 классе работа только с предметами тормозит обобщение.'],
      ["Ko'rish imkoniyati cheklangan o'quvchiga taktil (bo'rtma) yoki audio ko'rgazma kerak — inklyuziv yondashuv.", 'Ученику с нарушением зрения нужна тактильная (рельефная) или звуковая наглядность — инклюзивный подход.'],
    ]),
    B.mistake(null, [
      ["Kuzatish vazifasisiz ko'rsatish — bolalar asosiy belgini ko'rmaydi.", 'Показ без задания на наблюдение — дети не видят главного.'],
      ["Kichik, orqa partadan ko'rinmaydigan rasm.", 'Маленькая картинка, не видная с задних парт.'],
      ["Chiroyli, lekin mavzuga aloqasiz ko'rgazma.", 'Красивая, но не относящаяся к теме наглядность.'],
    ]),
    B.try(cq('a-p-vs-t1', '3.3.1', { ...P(VS), d: 1, rule: ["Illyustratsiya — statik, demonstratsiya — jarayon.", 'Иллюстрация — статика, демонстрация — процесс.'] },
      ["Qaysi biri demonstratsiya?", 'Что из этого — демонстрация?'],
      [[["Magnit temir qirindilarini qanday tortishini tajribada ko'rsatish", 'Показать на опыте, как магнит притягивает железные опилки']], [["Hayvonlar rasmini ko'rsatish", 'Показать картинку с животными'], ["Statik tasvir — illyustratsiya.", 'Статичное изображение — иллюстрация.']], [["Xaritani ilib qo'yish", 'Повесить карту'], ["Illyustratsiya.", 'Иллюстрация.']], [["Jadvalni doskaga chizish", 'Начертить таблицу на доске'], ["Illyustratsiya.", 'Иллюстрация.']]],
      'A', ["Jarayonni harakatda ko'rsatish — demonstratsiya.", 'Показ процесса в действии — демонстрация.'])),
    B.method(["Ko'rgazmadan foydalanish bo'yicha amaliy tavsiyalar:", 'Практические советы по использованию наглядности:'], [
      ["Har bir ko'rgazma uchun bitta savol tayyorlang: «Bu yerda nimani ko'ryapsiz? Nimasi o'xshash/farqli?»", 'Для каждого пособия готовьте один вопрос: «Что вы здесь видите? Что похоже/различно?»'],
      ["Bolalarning o'zi yasagan ko'rgazmasi (kartochka, model) — eng yaxshi eslab qolinadi.", 'Наглядность, сделанная самими детьми (карточки, модели), запоминается лучше всего.'],
      ["Raqamli ko'rgazmada (taqdimot) bir slaydda bitta g'oya.", 'В цифровой наглядности (презентации) — одна идея на слайде.'],
    ]),
    B.summary(null, [
      ["Illyustratsiya — statik, demonstratsiya — jarayon.", 'Иллюстрация — статика, демонстрация — процесс.'],
      ["Predmet → tasvir → sxema → belgi.", 'Предмет → изображение → схема → знак.'],
      ["O'z vaqtida, hammaga ko'rinadigan, kuzatish vazifasi bilan.", 'Вовремя, видно всем, с заданием на наблюдение.'],
    ]),
  ],
  check: [
    cq('a-p-vs-c1', '3.3.1', { ...P(VS) }, ["Ko'rgazmali metodning qaysi talabi buzilgan: rasm darsning boshidan oxirigacha doskada turdi?", 'Какое требование к наглядности нарушено: картина висела на доске весь урок?'],
      [[["O'z vaqtida ko'rsatish va olib qo'yish", 'Показывать вовремя и убирать']], [["Hamma ko'rishi", 'Видимость для всех'], ["Rasmning ko'rinishi haqida gap yo'q.", 'О видимости речи нет.']], [["Ilmiylik", 'Научность'], ["Rasmning mazmuni haqida gap yo'q.", 'О содержании картины речи нет.']], [["Hech qaysi talab buzilmagan", 'Ничего не нарушено'], ["Uzoq turgan ko'rgazma diqqatni chalg'itadi.", 'Долго висящая наглядность отвлекает.']]],
      'A', ["Keraksiz paytda ko'rgazma diqqatni tortadi.", 'Ненужная в данный момент наглядность отвлекает внимание.']),
    cq('a-p-vs-c2', '3.3.1', { ...P(VS) }, ["«Predmet → tasvir → sxema → belgi» ketma-ketligining ma'nosi nima?", 'В чём смысл последовательности «предмет → изображение → схема → знак»?'],
      [[["Aniq tasavvurdan mavhum tushunchaga bosqichma-bosqich o'tish", 'Постепенный переход от конкретного представления к абстрактному понятию']], [["Ko'rgazmani tejash", 'Экономия наглядности'], ["Maqsad tejash emas.", 'Цель — не экономия.']], [["Darsni uzaytirish", 'Удлинение урока'], ["Vaqt maqsad emas.", 'Время — не цель.']], [["Faqat 1-sinf uchun qoida", 'Правило только для 1 класса'], ["Har bir yangi tushunchada qo'llanadi.", 'Применяется при любом новом понятии.']]],
      'A', ["Bola aniq narsadan belgiga tushunib o'tadi.", 'Ребёнок осознанно переходит от конкретного к знаку.']),
    cq('a-p-vs-c3', '3.1.4', { ...P(VS) }, ["Sinfda ko'rish qobiliyati past o'quvchi bor. Ko'rgazmali metodni qanday moslashtirish kerak?", 'В классе ученик со слабым зрением. Как адаптировать наглядный метод?'],
      [[["Katta, kontrastli materiallar, bo'rtma modellar va og'zaki izoh berish, uni old partaga o'tqazish", 'Крупные контрастные материалы, рельефные модели, словесный комментарий, место за первой партой']], [["Ko'rgazmadan butunlay voz kechish", 'Полностью отказаться от наглядности'], ["Boshqa o'quvchilar uchun ham zarar.", 'Это вредно и для остальных.']], [["O'quvchini darsdan ozod qilish", 'Освободить ученика от урока'], ["Inklyuziya tamoyiliga zid.", 'Противоречит принципу инклюзии.']], [["Hech narsa o'zgartirmaslik", 'Ничего не менять'], ["O'quvchi ma'lumotni ololmaydi.", 'Ученик не получит информацию.']]],
      'A', ["Moslashtirish — teng imkoniyat yaratish.", 'Адаптация создаёт равные возможности.']),
    cq('a-p-vs-c4', '3.3.1', { ...P(VS) }, ["Ko'rgazmani ko'rsatishda eng muhim qo'shimcha harakat?", 'Какое дополнительное действие важнее всего при показе наглядности?'],
      [[["O'quvchilarga aniq kuzatish vazifasini berish", 'Дать ученикам конкретное задание на наблюдение']], [["Ko'rgazmani iloji boricha ko'p ko'rsatish", 'Показать как можно больше пособий'], ["Ko'plik diqqatni tarqatadi.", 'Обилие рассеивает внимание.']], [["Ko'rgazmani rangli qilish", 'Сделать пособие цветным'], ["Rang yordam beradi, lekin asosiy emas.", 'Цвет помогает, но не главное.']], [["Jim ko'rsatish", 'Показывать молча'], ["So'z bilan bog'lanmasa, asosiy belgi ko'rinmaydi.", 'Без слова главное не будет замечено.']]],
      'A', ["Vazifa diqqatni muhim belgiga yo'naltiradi.", 'Задание направляет внимание на существенный признак.']),
    cq('a-p-vs-c5', '3.3.5', { ...P(VS) }, ["4-sinfda o'qituvchi barcha masalalarni faqat predmetlar bilan yechtiradi. Xavf nimada?", 'В 4 классе учитель решает все задачи только с предметами. В чём опасность?'],
      [[["Mavhum tafakkur va umumlashtirish rivojlanmay qoladi", 'Не развиваются абстрактное мышление и обобщение']], [["Xavf yo'q — ko'rgazma har doim foydali", 'Опасности нет — наглядность всегда полезна'], ["Bosqichma-bosqich sxema va belgiga o'tish kerak.", 'Нужен постепенный переход к схеме и знаку.']], [["Predmetlar tez buziladi", 'Предметы быстро портятся'], ["Bu pedagogik muammo emas.", 'Это не педагогическая проблема.']], [["Darsda shovqin ko'payadi", 'На уроке становится шумно'], ["Asosiy xavf rivojlanishga oid.", 'Главная опасность — для развития.']]],
      'A', ["Ko'rgazma tafakkurni qo'llab-quvvatlashi, uni almashtirmasligi kerak.", 'Наглядность должна поддерживать мышление, а не заменять его.']),
  ],
});

/* ======================= 4. Practical methods ======================= */
const PR = 'ped-practical';
export const PED_PRACTICAL = lesson({
  id: PR, module: 'ped-methods', level: 'core', stage: 'C', minutes: 20, codes: ['3.3.1', '3.4.2'], requires: [MT], sourceIds: PS,
  title: ["Amaliy metodlar: mashq, tajriba, amaliy ish, didaktik o'yin", 'Практические методы: упражнение, опыт, практическая работа, дидактическая игра'],
  blocks: [
    B.intro(["Bilim ko'nikmaga faqat harakat orqali aylanadi: o'qishni o'qib, yozishni yozib, o'lchashni o'lchab o'rganamiz. Amaliy metodlar — boshlang'ich ta'limning eng ko'p vaqt oladigan qismi va ularning sifati natijani belgilaydi.", 'Знание превращается в навык только через действие: читать учатся, читая, писать — записывая, измерять — измеряя. Практические методы занимают больше всего времени в начальной школе, и от их качества зависит результат.']),
    B.definition(["**Mashq** — ko'nikma hosil qilish uchun harakatni ongli, ko'p marta takrorlash. **Tajriba (laboratoriya ishi)** — hodisani o'quvchilarning o'zi asbob bilan o'rganishi. **Amaliy ish** — bilimni real vazifada qo'llash (o'lchash, chizish, yasash). **Didaktik o'yin** — o'quv maqsadi o'yin qoidalari ichiga joylashtirilgan faoliyat.", '**Упражнение** — сознательное многократное повторение действия для формирования навыка. **Опыт (лабораторная работа)** — самостоятельное изучение явления учениками с приборами. **Практическая работа** — применение знаний в реальной задаче (измерение, черчение, изготовление). **Дидактическая игра** — деятельность, в которой учебная цель заложена в правила игры.']),
    B.table([["Mashq turi", 'Вид упражнения'], ['Maqsad', 'Цель'], ['Misol', 'Пример']], [
      [["Tayyorlov", 'Подготовительные'], ["Yangi mavzuga zamin", 'Подготовка к новой теме'], ["Ikki xonali sonlarni xonalarga ajratish", 'Разложение двузначных чисел на разряды']],
      [["Sharhlab bajarish", 'Комментированные'], ["Harakatni ongli qilish", 'Осознание действия'], ["O'quvchi har qadamni ovoz chiqarib aytadi", 'Ученик проговаривает каждый шаг вслух']],
      [["Mustaqil (mashq qilish)", 'Тренировочные'], ["Avtomatlashtirish", 'Автоматизация'], ["10 ta shu turdagi misol", '10 однотипных примеров']],
      [["Ijodiy", 'Творческие'], ["Yangi vaziyatda qo'llash", 'Перенос в новую ситуацию'], ["Masala tuzish", 'Составление задачи']],
    ], ['Mashqlar turlari', 'Виды упражнений']),
    B.rule(["Mashq samarali bo'lishi uchun: 1) o'quvchi **maqsadni** biladi; 2) avval **namuna** va sharhlab bajarish; 3) qiyinlik **bosqichma-bosqich** oshadi; 4) har bir urinishdan keyin **tezkor qayta aloqa**; 5) mashq **vaqt bo'yicha tarqatiladi** (har kuni oz-ozdan) — bir martalik uzoq mashqdan samaraliroq.", 'Чтобы упражнение было эффективным: 1) ученик знает **цель**; 2) сначала **образец** и комментированное выполнение; 3) трудность растёт **постепенно**; 4) после каждой попытки — **быстрая обратная связь**; 5) упражнения **распределены во времени** (каждый день понемногу) — это эффективнее одной долгой тренировки.']),
    B.example(["Ko'paytirish jadvalini (7 ga) mashq qildirish rejasini tuzing.", 'Составьте план тренировки таблицы умножения на 7.'], [
      ["Tayyorlov: 7 tadan sakrab sanash son nurida.", 'Подготовка: счёт прыжками по 7 на числовом луче.'],
      ["Sharhlab: «$7 \\cdot 6$ — bu $7 \\cdot 5$ va yana 7, ya'ni $35 + 7 = 42$».", 'Комментированно: «$7 \\cdot 6$ — это $7 \\cdot 5$ и ещё 7, то есть $35 + 7 = 42$».'],
      ["Mustaqil: har kuni 3 daqiqalik kartochkalar (tarqatilgan mashq).", 'Самостоятельно: каждый день 3-минутные карточки (распределённая тренировка).'],
      ["Ijodiy: «7 ga ko'paytirishga masala tuzing».", 'Творчески: «Составьте задачу на умножение на 7».'],
    ], ["Tayyorlov → sharhlab → mustaqil → ijodiy", 'Подготовка → комментирование → самостоятельно → творчески']),
    B.example(["Matematika va texnologiya integratsiyasi: «Uzunlikni o'lchash» bo'yicha amaliy ish.", 'Интеграция математики и технологии: практическая работа «Измерение длины».'], [
      ["Vazifa: sinfdagi 5 ta narsani chizg'ich bilan o'lchab, jadvalga yozish.", 'Задание: измерить линейкой 5 предметов в классе и записать в таблицу.'],
      ["Juftlikda: biri o'lchaydi, ikkinchisi tekshiradi (rollar almashadi).", 'В парах: один измеряет, другой проверяет (роли меняются).'],
      ["Xulosa: eng uzun va eng qisqa narsa; farqi necha santimetr?", 'Вывод: самый длинный и самый короткий предмет; на сколько сантиметров разница?'],
    ], ["Amaliy ish bilimni real vaziyatga olib chiqadi", 'Практическая работа переносит знание в реальную ситуацию']),
    B.example(["«Do'konda» didaktik o'yini: o'quv maqsadini qanday saqlash kerak?", 'Дидактическая игра «Магазин»: как сохранить учебную цель?'], [
      ["Maqsad: pul birliklari bilan qo'shish-ayirish.", 'Цель: сложение и вычитание с денежными единицами.'],
      ["Qoida: har bir xariddan keyin «sotuvchi» qaytimni hisoblab, «xaridor» tekshiradi.", 'Правило: после каждой покупки «продавец» считает сдачу, «покупатель» проверяет.'],
      ["Yakun: kim qanday hisobladi — muhokama; o'yin baho uchun emas, o'rganish uchun.", 'Итог: обсуждение, кто как считал; игра — для обучения, а не для оценки.'],
    ], ["O'yin qoidasi = o'quv vazifasi", 'Правило игры = учебная задача']),
    B.mistake(null, [
      ["Maqsadsiz ko'p mashq: 40 ta bir xil misol — charchoq, xatolar ko'payadi.", 'Много упражнений без цели: 40 однотипных примеров — утомление, рост ошибок.'],
      ["Qayta aloqasiz mashq — xato ham mustahkamlanadi.", 'Упражнения без обратной связи — закрепляется и ошибка.'],
      ["O'yinda o'quv maqsadining yo'qolishi: faqat «kim tezroq».", 'Потеря учебной цели в игре: только «кто быстрее».'],
    ]),
    B.try(cq('a-p-pr-t1', '3.3.1', { ...P(PR), d: 1, rule: ["Tarqatilgan mashq samaraliroq.", 'Распределённая тренировка эффективнее.'] },
      ["Ko'paytirish jadvalini mustahkamlash uchun qaysi tashkil etish samaraliroq?", 'Какая организация тренировки таблицы умножения эффективнее?'],
      [[["Har kuni 5 daqiqadan qisqa mashq", 'Каждый день короткая тренировка по 5 минут']], [["Haftada bir marta 45 daqiqa", 'Раз в неделю 45 минут'], ["Bir martalik uzoq mashq tez unutiladi.", 'Одна долгая тренировка быстро забывается.']], [["Faqat imtihondan oldin", 'Только перед контрольной'], ["Mustahkam ko'nikma hosil bo'lmaydi.", 'Прочный навык не формируется.']], [["Jadvalni ko'chirib yozish", 'Переписывать таблицу'], ["Eslashni mashq qildirmaydi.", 'Не тренирует припоминание.']]],
      'A', ["Vaqt bo'yicha tarqatilgan qisqa mashqlar xotirani mustahkamlaydi.", 'Короткие распределённые упражнения укрепляют память.'])),
    B.method(["Amaliy metodlarni rejalashtirish:", 'Как планировать практические методы:'], [
      ["Har bir mashqning maqsadini doskaga yozing: «Bugun o'nlik almashtirishni tezlashtiramiz».", 'Пишите цель упражнения на доске: «Сегодня ускоряем переход через десяток».'],
      ["Mashq turlarini ketma-ket joylashtiring: tayyorlovdan ijodiygacha.", 'Располагайте упражнения по порядку: от подготовительных к творческим.'],
      ["Tezkor tekshiruv: javoblar kaliti, juftlikda tekshirish, svetofor.", 'Быстрая проверка: ключ ответов, взаимопроверка в парах, светофор.'],
    ]),
    B.summary(null, [
      ["Mashq, tajriba, amaliy ish, didaktik o'yin — ko'nikma manbai.", 'Упражнение, опыт, практическая работа, дидактическая игра — источник навыка.'],
      ["Maqsad, namuna, bosqichlilik, qayta aloqa, tarqatilganlik.", 'Цель, образец, постепенность, обратная связь, распределённость.'],
      ["O'yinda o'quv vazifasi qoida ichida.", 'В игре учебная задача заложена в правила.'],
    ]),
  ],
  check: [
    cq('a-p-pr-c1', '3.3.1', { ...P(PR) }, ["O'quvchi misolni yechayotib har bir qadamni ovoz chiqarib aytadi. Bu qaysi mashq turi?", 'Ученик, решая пример, проговаривает вслух каждый шаг. Какой это вид упражнений?'],
      [[["Sharhlab bajariladigan mashq", 'Комментированное упражнение']], [["Ijodiy mashq", 'Творческое упражнение'], ["Yangi narsa yaratilmayapti.", 'Ничего нового не создаётся.']], [["Tayyorlov mashqi", 'Подготовительное упражнение'], ["Tayyorlov yangi mavzudan oldin bo'ladi.", 'Подготовительное — до новой темы.']], [["Nazorat ishi", 'Контрольная работа'], ["Bu nazorat emas, o'rganish.", 'Это не контроль, а обучение.']]],
      'A', ["Ovoz chiqarib izohlash harakatni ongli qiladi.", 'Проговаривание делает действие осознанным.']),
    cq('a-p-pr-c2', '3.3.1', { ...P(PR) }, ["Didaktik o'yinning asosiy belgisi nima?", 'Главный признак дидактической игры?'],
      [[["O'quv maqsadi o'yin qoidalari ichiga joylashtirilgan", 'Учебная цель заложена в правила игры']], [["O'quvchilar xursand bo'lishi", 'Ученики радуются'], ["Quvonch — natija, belgi emas.", 'Радость — результат, а не признак.']], [["G'olib aniqlanishi", 'Определяется победитель'], ["Musobaqa shart emas.", 'Соревнование не обязательно.']], [["Darsning oxirida o'tkazilishi", 'Проводится в конце урока'], ["O'yin istalgan bosqichda bo'lishi mumkin.", 'Игра может быть на любом этапе.']]],
      'A', ["O'yin qoidasi — o'quv vazifasi.", 'Правило игры — учебная задача.']),
    cq('a-p-pr-c3', '3.4.2', { ...P(PR) }, ["Qaysi topshiriq matematika va texnologiyani integratsiya qiluvchi amaliy ish?", 'Какое задание — практическая работа, интегрирующая математику и технологию?'],
      [[["Qog'ozdan berilgan o'lchamdagi quti yasash va uning perimetrini hisoblash", 'Сделать из бумаги коробку заданного размера и вычислить её периметр']], [["Perimetr formulasini yod olish", 'Выучить формулу периметра'], ["Amaliy harakat yo'q.", 'Нет практического действия.']], [["Darslikdagi masalani yechish", 'Решить задачу из учебника'], ["Integratsiya va amaliy ish yo'q.", 'Нет интеграции и практической работы.']], [["Video ko'rish", 'Посмотреть видео'], ["Bu ko'rgazmali metod.", 'Это наглядный метод.']]],
      'A', ["Yasash + hisoblash — bilimni real vazifada qo'llash.", 'Изготовление + вычисление — применение знаний в реальной задаче.']),
    cq('a-p-pr-c4', '3.3.5', { ...P(PR) }, ["Mashq paytida o'quvchilarning ko'pchiligi bir xil xatoni takrorlayapti. To'g'ri qaror?", 'Во время тренировки большинство учеников повторяет одну и ту же ошибку. Верное решение?'],
      [[["Mashqni to'xtatib, xatoni namunada birga tahlil qilish va sharhlab bajarishga qaytish", 'Остановить тренировку, разобрать ошибку на образце и вернуться к комментированному выполнению']], [["Mashqni davom ettirish — o'zlari tushunib oladi", 'Продолжать — сами разберутся'], ["Xato mustahkamlanadi.", 'Ошибка закрепится.']], [["Mashqlar sonini ikki baravar oshirish", 'Удвоить количество упражнений'], ["Noto'g'ri usulni ko'proq takrorlash zarar.", 'Повторять неверный способ ещё больше — вредно.']], [["Baho qo'yish", 'Поставить отметки'], ["Baho xatoni tuzatmaydi.", 'Отметка не исправит ошибку.']]],
      'A', ["Qayta aloqa va namunaga qaytish — mashq samaradorligining sharti.", 'Обратная связь и возврат к образцу — условие эффективности тренировки.']),
    cq('a-p-pr-c5', '3.3.1', { ...P(PR) }, ["Tajriba (laboratoriya ishi) ning demonstratsiyadan asosiy farqi?", 'Главное отличие опыта (лабораторной работы) от демонстрации?'],
      [[["Tajribani o'quvchilarning o'zi bajaradi", 'Опыт выполняют сами ученики']], [["Tajribada asbob ishlatiladi", 'В опыте используются приборы'], ["Demonstratsiyada ham asbob bo'ladi.", 'В демонстрации тоже бывают приборы.']], [["Tajriba faqat tabiatshunoslikda", 'Опыт — только на природоведении'], ["Matematikada ham o'lchash tajribalari bor.", 'В математике тоже есть опыты-измерения.']], [["Farqi yo'q", 'Разницы нет'], ["Bajaruvchi har xil.", 'Различается, кто выполняет.']]],
      'A', ["Demonstratsiyada o'qituvchi ko'rsatadi, tajribada o'quvchilar bajaradi.", 'В демонстрации показывает учитель, в опыте действуют ученики.']),
  ],
});

/* ======================= 5. Problem-based learning ======================= */
const ML = 'ped-problem';
export const PED_PROBLEM = lesson({
  id: ML, module: 'ped-methods', level: 'core', stage: 'B', minutes: 22, codes: ['3.3.2', '3.3.1'], requires: [MT], sourceIds: PS,
  title: ["Muammoli ta'lim", 'Проблемное обучение'],
  blocks: [
    B.intro(["Bola o'zi topgan qoidani uzoq eslab qoladi. Muammoli ta'lim aynan shunga qurilgan: o'qituvchi tayyor bilimni bermaydi, balki o'quvchilar «qoqiladigan» vaziyat yaratadi va ularni yechimni izlashga undaydi.", 'Правило, которое ребёнок открыл сам, запоминается надолго. На этом построено проблемное обучение: учитель не даёт готовое знание, а создаёт ситуацию, в которой ученики «спотыкаются», и побуждает их искать решение.']),
    B.definition(["**Muammoli vaziyat** — o'quvchi mavjud bilimi bilan vazifani hal qila olmaydigan, lekin yechimni izlashga qiziqadigan holat (bilim va vazifa o'rtasidagi **qarama-qarshilik**). **O'quv muammosi** — shu vaziyatdan kelib chiqqan va so'z bilan ifodalangan savol. **Gipoteza** — yechim haqidagi taxmin.", '**Проблемная ситуация** — состояние, когда ученик не может решить задачу имеющимися знаниями, но заинтересован в поиске решения (**противоречие** между знанием и задачей). **Учебная проблема** — вопрос, сформулированный из этой ситуации. **Гипотеза** — предположение о решении.']),
    B.table([['Bosqich', 'Этап'], ["Nima bo'ladi", 'Что происходит'], ['Misol (1-sinf, «11 dan 20 gacha»)', 'Пример (1 класс, «числа 11–20»)']], [
      [["Muammoli vaziyat", 'Проблемная ситуация'], ["Eski usul ishlamaydi", 'Старый способ не работает'], ["14 ni bitta raqam bilan yozib bo'lmaydi", 'Число 14 нельзя записать одной цифрой']],
      [["Muammoni ifodalash", 'Формулирование проблемы'], ["Savol shakllanadi", 'Формулируется вопрос'], ["«Katta sonlarni qanday yozamiz?»", '«Как записывать большие числа?»']],
      [["Gipoteza", 'Гипотеза'], ["Taxminlar", 'Предположения'], ["«O'nlikni alohida yozamiz»", '«Десяток запишем отдельно»']],
      [["Tekshirish", 'Проверка'], ["Tayoqcha bog'lamlari bilan", 'На пучках палочек'], ["1 bog'lam va 4 tayoqcha → 14", '1 пучок и 4 палочки → 14']],
      [["Xulosa", 'Вывод'], ["Yangi bilim", 'Новое знание'], ["Chapdagi raqam — o'nliklar", 'Левая цифра — десятки']],
    ], ["Muammoli dars bosqichlari", 'Этапы проблемного урока']),
    B.rule(["Muammoli vaziyat yaratish usullari: 1) eski bilim bilan **yechib bo'lmaydigan vazifa**; 2) o'quvchilarning **qarama-qarshi fikrlari** to'qnashuvi; 3) kutilmagan **fakt** («og'ir kema nega cho'kmaydi?»); 4) **turli javoblarni** solishtirish. Darajalar: muammoli bayon (o'qituvchi muammoni qo'yib, o'zi yechadi va fikrlash yo'lini ko'rsatadi) → qisman izlanish → tadqiqot (o'quvchilar mustaqil). Muammo **o'quvchi kuchi yetadigan** bo'lishi kerak.", 'Способы создать проблемную ситуацию: 1) **задача, не решаемая** прежними знаниями; 2) столкновение **противоположных мнений** учеников; 3) неожиданный **факт** («почему тяжёлый корабль не тонет?»); 4) сравнение **разных ответов**. Уровни: проблемное изложение (учитель ставит проблему, сам решает, показывая ход мысли) → частично-поисковый → исследовательский (ученики самостоятельно). Проблема должна быть **посильной**.']),
    B.example(["2-sinf, «O'nlikdan o'tib qo'shish». Muammoli vaziyatni tuzing.", '2 класс, «Сложение с переходом через десяток». Создайте проблемную ситуацию.'], [
      ["Bolalar $34 + 25$ ni bilishadi (o'tishsiz).", 'Дети умеют складывать $34 + 25$ (без перехода).'],
      ["Vazifa: $37 + 25$. Birliklar: $7 + 5 = 12$ — «12 ni birlar xonasiga qanday yozamiz?» — qarama-qarshilik.", 'Задание: $37 + 25$. Единицы: $7 + 5 = 12$ — «Как записать 12 в разряд единиц?» — противоречие.'],
      ["Gipotezalar va tekshirish: tayoqcha bog'lamlari bilan 12 birlik = 1 o'nlik va 2 birlik.", 'Гипотезы и проверка на пучках: 12 единиц = 1 десяток и 2 единицы.'],
      ["Xulosa o'quvchilar tomonidan: «10 birlik — 1 o'nlik, uni o'nliklarga qo'shamiz».", 'Вывод формулируют ученики: «10 единиц — 1 десяток, прибавляем его к десяткам».'],
    ], ['$37 + 25 = 62$', '$37 + 25 = 62$']),
    B.example(["Tabiatshunoslik: «Nega og'ir temir kema suvda cho'kmaydi, kichik mix esa cho'kadi?»", 'Природоведение: «Почему тяжёлый железный корабль не тонет, а маленький гвоздь тонет?»'], [
      ["Kutilmagan fakt — bolalarning «og'ir narsa cho'kadi» degan tasavvuri bilan qarama-qarshilik.", 'Неожиданный факт противоречит представлению детей «тяжёлое тонет».'],
      ["Tajriba: bir bo'lak plastilin (cho'kadi) va undan yasalgan «qayiq» (suzadi).", 'Опыт: комок пластилина (тонет) и «лодочка» из того же пластилина (плавает).'],
      ["Xulosa: shakl va siqib chiqarilgan suv hajmi muhim — massa emas.", 'Вывод: важны форма и объём вытесненной воды, а не только масса.'],
    ], ["Fakt → tajriba → xulosa", 'Факт → опыт → вывод']),
    B.example(["O'qituvchi muammo qo'ydi, lekin hech kim taxmin ham aytmadi. Nima noto'g'ri bo'lishi mumkin?", 'Учитель поставил проблему, но никто не выдвинул даже предположения. Что могло быть не так?'], [
      ["Muammo juda qiyin — o'quvchilarda tayanch bilim yo'q.", 'Проблема слишком трудная — у учеников нет опорных знаний.'],
      ["Yechim: muammoni kichik qadamlarga bo'lish, yetaklovchi savol, model berish (muammoli bayon darajasiga tushish).", 'Решение: разбить проблему на шаги, дать наводящий вопрос, модель (перейти на уровень проблемного изложения).'],
    ], ["Muammo kuch yetadigan bo'lishi kerak", 'Проблема должна быть посильной']),
    B.mistake(null, [
      ["«Muammo» deb oddiy savolni berish: «7 + 5 nechchi?» — qarama-qarshilik yo'q.", 'Называть проблемой обычный вопрос: «Сколько будет 7 + 5?» — противоречия нет.'],
      ["Xulosani o'qituvchi o'zi aytib qo'yishi — izlanish to'xtaydi.", 'Учитель сам озвучивает вывод — поиск прекращается.'],
      ["Har bir darsni muammoli qilish — vaqt yetmaydi, ko'nikma mashqlari ham kerak.", 'Делать проблемным каждый урок — не хватит времени, нужны и тренировочные упражнения.'],
    ]),
    B.try(cq('a-p-ml-t1', '3.3.2', { ...P(ML), d: 1, rule: ["Muammoli vaziyat — bilim va vazifa o'rtasidagi qarama-qarshilik.", 'Проблемная ситуация — противоречие между знанием и задачей.'] },
      ["Qaysi topshiriq muammoli vaziyat yaratadi?", 'Какое задание создаёт проблемную ситуацию?'],
      [[["Ko'paytirishni bilgan, lekin hali bo'lishni o'rganmagan bolalarga 12 ta konfetni 3 kishiga teng bo'lish", 'Детям, знающим умножение, но не изучавшим деление, — разделить 12 конфет поровну на троих']], [["Ko'paytirish jadvalini takrorlash", 'Повторить таблицу умножения'], ["Yangi qarama-qarshilik yo'q.", 'Нового противоречия нет.']], [["Darslikdagi qoidani o'qish", 'Прочитать правило в учебнике'], ["Tayyor bilim beriladi.", 'Знание даётся в готовом виде.']], [["Ma'lum misolni yechish", 'Решить знакомый пример'], ["Eski usul yetarli.", 'Старого способа достаточно.']]],
      'A', ["Vazifa yangi amalni talab qiladi, bolalar esa unga yetarli asosga ega.", 'Задача требует нового действия, а основа для него у детей есть.'])),
    B.method(["Muammoli darsni tayyorlash:", 'Как подготовить проблемный урок:'], [
      ["Mavzudagi asosiy «qarama-qarshilik»ni toping: bolalar nimani bilmaydi va qayerda «qoqiladi»?", 'Найдите главное «противоречие» темы: чего дети не знают и где «споткнутся»?'],
      ["Yetaklovchi savollar zaxirasini tayyorlang — sinf to'xtab qolsa.", 'Подготовьте запас наводящих вопросов — на случай, если класс «застрял».'],
      ["Xulosani bolalar so'zi bilan yozing, keyin darslik qoidasi bilan solishtiring.", 'Запишите вывод словами детей, затем сравните с правилом учебника.'],
    ]),
    B.summary(null, [
      ["Muammoli vaziyat — qarama-qarshilik + qiziqish.", 'Проблемная ситуация — противоречие + интерес.'],
      ["Bosqichlar: vaziyat → muammo → gipoteza → tekshirish → xulosa.", 'Этапы: ситуация → проблема → гипотеза → проверка → вывод.'],
      ["Muammo kuch yetadigan bo'lsin; xulosani o'quvchilar chiqarsin.", 'Проблема посильная; вывод делают ученики.'],
    ]),
  ],
  check: [
    cq('a-p-ml-c1', '3.3.2', { ...P(ML) }, ["Muammoli vaziyatning asosiy belgisi?", 'Главный признак проблемной ситуации?'],
      [[["O'quvchi bilimi bilan vazifa o'rtasidagi qarama-qarshilik va izlanishga qiziqish", 'Противоречие между знаниями ученика и задачей и интерес к поиску']], [["Qiyin topshiriq", 'Трудное задание'], ["Qiyinlikning o'zi muammoli vaziyat emas.", 'Сама по себе трудность — не проблемная ситуация.']], [["O'qituvchining savoli", 'Вопрос учителя'], ["Har savol muammo emas.", 'Не каждый вопрос — проблема.']], [["Guruh ishi", 'Групповая работа'], ["Bu tashkil etish shakli.", 'Это форма организации.']]],
      'A', ["Qarama-qarshilik izlanishni boshlaydi.", 'Противоречие запускает поиск.']),
    cq('a-p-ml-c2', '3.3.2', { ...P(ML) }, ["O'qituvchi muammoni qo'yib, uni o'zi yechadi va fikrlash yo'lini ovoz chiqarib ko'rsatadi. Bu qaysi daraja?", 'Учитель ставит проблему, сам её решает и вслух показывает ход рассуждения. Какой это уровень?'],
      [[["Muammoli bayon", 'Проблемное изложение']], [["Tadqiqot metodi", 'Исследовательский метод'], ["Tadqiqotda o'quvchilar mustaqil izlanadi.", 'В исследовании ученики ищут самостоятельно.']], [["Qisman izlanish", 'Частично-поисковый'], ["Unda o'quvchilar izlanishning bir qismini bajaradi.", 'В нём часть поиска выполняют ученики.']], [["Reproduktiv", 'Репродуктивный'], ["Reproduktivda muammo qo'yilmaydi.", 'В репродуктивном проблема не ставится.']]],
      'A', ["Muammoli bayonda o'qituvchi fikrlash namunasini ko'rsatadi.", 'При проблемном изложении учитель показывает образец рассуждения.']),
    cq('a-p-ml-c3', '3.3.2', { ...P(ML) }, ["Qaysi muammo 3-sinf uchun kuch yetadigan?", 'Какая проблема посильна для 3 класса?'],
      [[["«Nega bir xil perimetrli to'rtburchaklarning yuzi har xil bo'lishi mumkin?» (kvadratchalar bilan tekshirish)", '«Почему у прямоугольников с одинаковым периметром площадь может быть разной?» (проверка по клеткам)']], [["«Nega kasrni nolga bo'lib bo'lmaydi?» — formal isbot", '«Почему нельзя делить на нуль?» — формальное доказательство'], ["Formal isbot 3-sinf uchun murakkab.", 'Формальное доказательство сложно для 3 класса.']], [["«Yer yoshini qanday aniqlash mumkin?»", '«Как определить возраст Земли?»'], ["Tayanch bilim yo'q.", 'Нет опорных знаний.']], [["«7 · 8 nechchi?»", '«Сколько будет 7 · 8?»'], ["Bu muammo emas, oddiy savol.", 'Это не проблема, а простой вопрос.']]],
      'A', ["Bolalar o'lchash va sanash orqali qarama-qarshilikni hal qila oladi.", 'Дети могут разрешить противоречие измерением и подсчётом.']),
    cq('a-p-ml-c4', '3.3.2', { ...P(ML) }, ["Muammoli darsda xulosani kim chiqarishi kerak?", 'Кто должен формулировать вывод на проблемном уроке?'],
      [[["O'quvchilar (o'qituvchi yo'naltiradi va aniqlaydi)", 'Ученики (учитель направляет и уточняет)']], [["Faqat o'qituvchi", 'Только учитель'], ["Izlanish natijasini bolalar o'zlari ifodalaydi.", 'Результат поиска формулируют сами дети.']], [["Darslik", 'Учебник'], ["Darslik bilan keyin solishtiriladi.", 'С учебником сравнивают потом.']], [["Xulosa shart emas", 'Вывод не обязателен'], ["Xulosasiz bilim mustahkamlanmaydi.", 'Без вывода знание не закрепляется.']]],
      'A', ["O'zi chiqargan xulosa chuqurroq tushuniladi.", 'Сделанный самостоятельно вывод понимается глубже.']),
    cq('a-p-ml-c5', '3.3.5', { ...P(ML) }, ["O'qituvchi har bir darsni faqat muammoli metodda o'tkazmoqda, natijada hisoblash ko'nikmasi sust. Tavsiya?", 'Учитель проводит каждый урок только проблемным методом, и навыки вычислений слабые. Рекомендация?'],
      [[["Muammoli usulni reproduktiv mashqlar bilan muvozanatlash", 'Сбалансировать проблемный подход с репродуктивными упражнениями']], [["Muammoli ta'limni to'xtatish", 'Отказаться от проблемного обучения'], ["Muammoli usul foydali, faqat muvozanat kerak.", 'Проблемный подход полезен, нужен баланс.']], [["Faqat test yechtirish", 'Решать только тесты'], ["Bir tomonlamalik boshqa tomonga o'tadi.", 'Перекос просто сменит направление.']], [["Uy vazifasini ko'paytirish", 'Увеличить домашние задания'], ["Darsdagi muvozanat muammosini hal qilmaydi.", 'Не решает проблему баланса на уроке.']]],
      'A', ["Tushunish (muammoli) + avtomatlashtirish (mashq) birga kerak.", 'Нужны и понимание (проблемное), и автоматизация (упражнение).']),
  ],
});

/* ======================= 6. Differentiated instruction ======================= */
const DF = 'ped-differentiated';
export const PED_DIFFERENTIATED = lesson({
  id: DF, module: 'ped-methods', level: 'advanced', stage: 'B', minutes: 25, codes: ['3.3.4', '3.1.4'], requires: [MT, 'ped-formative'], sourceIds: [...PS, 'inklyuziv2022'],
  title: ["Tabaqalashtirilgan ta'lim", 'Дифференцированное обучение'],
  blocks: [
    B.intro(["Bir sinfda o'qishni endi o'rganayotgan bola ham, kitobni ravon o'qiydigan bola ham bor. Bir xil topshiriq birinchisi uchun juda qiyin, ikkinchisi uchun zerikarli. Tabaqalashtirish — hammaga bir xil maqsadga turli yo'llar bilan yetish imkonini berish.", 'В одном классе есть ребёнок, который только учится читать, и тот, кто бегло читает книги. Одинаковое задание первому слишком трудно, второму скучно. Дифференциация — это возможность всем прийти к общей цели разными путями.']),
    B.definition(["**Tabaqalashtirilgan ta'lim** — o'quvchilarning **tayyorgarligi**, **qiziqishi** va **o'qish sur'ati**ni hisobga olib, mazmun, jarayon yoki natijani moslashtirish. **Ichki tabaqalashtirish** — bitta sinf ichida guruhlar va darajali topshiriqlar. **Tashqi** — maxsus sinflar, to'garaklar. **Tayanch (scaffolding)** — vaqtinchalik yordam (namuna, reja, kalit so'zlar), o'quvchi mustaqil bo'lgach olib tashlanadi.", '**Дифференцированное обучение** — адаптация содержания, процесса или результата с учётом **подготовки**, **интересов** и **темпа** учеников. **Внутренняя дифференциация** — группы и разноуровневые задания внутри одного класса. **Внешняя** — специальные классы, кружки. **Опора (scaffolding)** — временная помощь (образец, план, ключевые слова), которая убирается, когда ученик становится самостоятельным.']),
    B.table([["Nimani moslashtiramiz", 'Что адаптируем'], ['Qanday', 'Как'], ['Misol', 'Пример']], [
      [['Mazmun', 'Содержание'], ["Bir mavzu, turli murakkablik", 'Одна тема, разная сложность'], ["Matnning qisqartirilgan va to'liq varianti", 'Сокращённый и полный вариант текста']],
      [['Jarayon', 'Процесс'], ["Turli yordam darajasi", 'Разный уровень помощи'], ["A guruh — namuna bilan, B — reja bilan, C — mustaqil", 'Группа A — с образцом, B — с планом, C — самостоятельно']],
      [['Natija', 'Результат'], ["Bilimni ko'rsatishning turli shakllari", 'Разные формы показа знаний'], ["Hikoya, rasm-sxema yoki jadval", 'Рассказ, рисунок-схема или таблица']],
    ], ["Tabaqalashtirish yo'nalishlari", 'Направления дифференциации']),
    B.rule(["Asosiy tamoyillar: 1) **maqsad hamma uchun bir xil** — yo'l va yordam farqlanadi; 2) guruhlar **diagnostika** (formativ baholash) asosida tuziladi va **o'zgaruvchan** bo'ladi; 3) o'quvchilarga doimiy «kuchsiz» degan tamg'a qo'yilmaydi; 4) har bir o'quvchi **kuchi yetadigan, lekin o'stiradigan** topshiriq oladi; 5) tabaqalashtirish **tayyorgarlik** bo'yicha qilinadi — «vizual/audial» kabi «o'qish uslublari» bo'yicha emas: bunday moslashtirish samaradorligi tadqiqotlarda tasdiqlanmagan.", 'Основные принципы: 1) **цель общая для всех** — различаются путь и помощь; 2) группы формируются по **диагностике** (формативное оценивание) и **меняются**; 3) ученикам не приклеивают постоянный ярлык «слабый»; 4) каждый получает **посильное, но развивающее** задание; 5) дифференцируют по **подготовке**, а не по «стилям обучения» («визуал/аудиал»): эффективность такой подстройки исследованиями не подтверждена.']),
    B.example(["3-sinf, «Ikki amalli masalalar». Uch darajali topshiriq tuzing (maqsad bir xil).", '3 класс, «Задачи в два действия». Составьте задание трёх уровней (цель общая).'], [
      ["Maqsad: ikki amalli masalani yechish va javobni tushuntirish.", 'Цель: решить задачу в два действия и объяснить ответ.'],
      ["A daraja: masala + to'ldirilgan qisqa yozuv va birinchi savol («Avval nimani bilib olamiz?»).", 'Уровень A: задача + заполненная краткая запись и первый вопрос («Что узнаем сначала?»).'],
      ["B daraja: masala + qisqa yozuv sxemasi (bo'sh kataklar).", 'Уровень B: задача + схема краткой записи (пустые клетки).'],
      ["C daraja: masala + «shu masalaga teskari masala tuzing».", 'Уровень C: задача + «составьте обратную задачу».'],
    ], ["Bitta maqsad — uch xil tayanch", 'Одна цель — три вида опоры']),
    B.example(["Chiqish kartochkasidan keyin guruhlarni qanday tuzish kerak?", 'Как сформировать группы после карточек выхода?'], [
      ["Natijalar: 6 o'quvchi qoidani tushunmagan, 14 tasi qo'llay oladi, 5 tasi tez va to'g'ri bajargan.", 'Итоги: 6 учеников не поняли правило, 14 могут применять, 5 выполнили быстро и верно.'],
      ["Ertangi dars: 6 kishi — o'qituvchi bilan model orqali qayta o'rganish; 14 kishi — mashq; 5 kishi — murakkab topshiriq.", 'Завтра: 6 человек — повторное объяснение с учителем на модели; 14 — тренировка; 5 — усложнённое задание.'],
      ["Keyingi mavzuda guruhlar qaytadan tuziladi — tamg'a yo'q.", 'В следующей теме группы формируются заново — без ярлыков.'],
    ], ["Diagnostika → vaqtinchalik guruhlar → qayta tekshiruv", 'Диагностика → временные группы → повторная проверка']),
    B.example(["O'qishda qiynalayotgan o'quvchi uchun matn ustida ishlashni qanday moslashtirish mumkin?", 'Как адаптировать работу с текстом для ученика, которому трудно читать?'], [
      ["Mazmun bir xil — matnning asosiy g'oyasini tushunish.", 'Содержание общее — понять главную мысль текста.'],
      ["Tayanch: matn qismlarga bo'lingan, har qismdan keyin bitta savol; kalit so'zlar ajratilgan.", 'Опора: текст разбит на части, после каждой — один вопрос; ключевые слова выделены.'],
      ["Natija: javobni og'zaki yoki rasm-sxema bilan berishi mumkin.", 'Результат: ответ можно дать устно или рисунком-схемой.'],
      ["Tayanch asta-sekin kamaytiriladi.", 'Опора постепенно уменьшается.'],
    ], ["Maqsad saqlanadi, yo'l moslashtiriladi", 'Цель сохраняется, путь адаптируется']),
    B.mistake(null, [
      ["«Kuchsiz» o'quvchilarga faqat oson va kam topshiriq berish — ular hech qachon yetib ololmaydi.", 'Давать «слабым» только лёгкие и короткие задания — они никогда не догонят.'],
      ["Doimiy guruhlar va ochiq tamg'alar («kuchsizlar guruhi») — motivatsiya pasayadi.", 'Постоянные группы и открытые ярлыки («группа слабых») — падает мотивация.'],
      ["Kuchli o'quvchilarga «qo'shimcha» sifatida faqat ko'proq bir xil misol berish.", 'Давать сильным в качестве «дополнительного» просто больше однотипных примеров.'],
      ["O'quvchilarni «vizual/audial/kinestetik» deb ajratib, faqat shu kanal orqali o'qitish.", 'Делить учеников на «визуалов/аудиалов/кинестетиков» и учить только через этот канал.'],
    ]),
    B.try(cq('a-p-df-t1', '3.3.4', { ...P(DF), d: 2, rule: ["Maqsad bir xil, tayanch farqli.", 'Цель общая, опора разная.'] },
      ["Qaysi yondashuv to'g'ri tabaqalashtirish?", 'Какой подход — правильная дифференциация?'],
      [[["Hamma bir xil maqsad ustida ishlaydi, lekin turli darajadagi yordam bilan; guruhlar diagnostika bo'yicha o'zgaradi", 'Все работают над общей целью, но с разным уровнем помощи; группы меняются по итогам диагностики']], [["Kuchsizlar butun yil bitta guruhda oson topshiriq bajaradi", 'Слабые весь год в одной группе выполняют лёгкие задания'], ["Tamg'a va past kutish rivojlanishni to'xtatadi.", 'Ярлык и заниженные ожидания тормозят развитие.']], [["Har bir o'quvchi «o'qish uslubi»ga ko'ra o'qitiladi", 'Каждого учат по его «стилю обучения»'], ["Bu yondashuv samaradorligi tasdiqlanmagan.", 'Эффективность этого подхода не подтверждена.']], [["Kuchli o'quvchilar sinfdan chiqarib yuboriladi", 'Сильных выводят из класса'], ["Bu ichki tabaqalashtirish emas.", 'Это не внутренняя дифференциация.']]],
      'A', ["Umumiy maqsad, moslashuvchan yordam, o'zgaruvchan guruhlar.", 'Общая цель, гибкая помощь, подвижные группы.'])),
    B.method(["Tabaqalashtirilgan darsni rejalashtirish:", 'Как планировать дифференцированный урок:'], [
      ["Bitta maqsaddan boshlang, keyin uch darajadagi tayanchni yozing.", 'Начните с одной цели, затем пропишите три уровня опоры.'],
      ["Rangli kartochkalar — daraja emas, tayanch turi (namuna, reja, mustaqil); o'quvchi keyingi darajaga o'tishga harakat qiladi.", 'Цветные карточки — не уровень ученика, а вид опоры (образец, план, самостоятельно); ученик стремится перейти к следующей.'],
      ["Darsni umumiy yakun bilan tugating — barcha guruhlar natijasi bitta maqsadga bog'lanadi.", 'Заканчивайте общим итогом — результаты всех групп связываются с общей целью.'],
    ]),
    B.summary(null, [
      ["Tabaqalashtirish — tayyorgarlik, qiziqish, sur'atni hisobga olish.", 'Дифференциация — учёт подготовки, интересов, темпа.'],
      ["Maqsad umumiy; mazmun, jarayon yoki natija moslashtiriladi.", 'Цель общая; адаптируются содержание, процесс или результат.'],
      ["Diagnostika asosida o'zgaruvchan guruhlar; «o'qish uslublari» afsona.", 'Подвижные группы по диагностике; «стили обучения» — миф.'],
    ]),
  ],
  check: [
    cq('a-p-df-c1', '3.3.4', { ...P(DF) }, ["Tabaqalashtirilgan ta'limda guruhlar nimaga asoslanib tuziladi?", 'На основе чего формируются группы при дифференцированном обучении?'],
      [[["Joriy diagnostika (formativ baholash) natijalariga", 'На результатах текущей диагностики (формативного оценивания)']], [["O'tgan yilgi baholarga", 'На прошлогодних отметках'], ["Eski ma'lumot hozirgi holatni ko'rsatmaydi.", 'Старые данные не отражают текущее состояние.']], [["O'quvchilarning «o'qish uslubi»ga", 'На «стилях обучения» учеников'], ["Bu asos tasdiqlanmagan.", 'Это основание не подтверждено.']], [["Ota-onalar istagiga", 'На пожеланиях родителей'], ["Pedagogik asos — o'quvchining joriy tayyorgarligi.", 'Педагогическое основание — текущая подготовка ученика.']]],
      'A', ["Guruhlar joriy ma'lumot bo'yicha tuziladi va o'zgarib turadi.", 'Группы формируются по текущим данным и меняются.']),
    cq('a-p-df-c2', '3.3.4', { ...P(DF) }, ["«Scaffolding» (tayanch) nimani anglatadi?", 'Что означает «scaffolding» (опора)?'],
      [[["O'quvchi mustaqil bo'lgach olib tashlanadigan vaqtinchalik yordam", 'Временная помощь, которую убирают, когда ученик становится самостоятельным']], [["Doimiy yordamchi o'qituvchi", 'Постоянный помощник учителя'], ["Tayanch vaqtinchalik.", 'Опора временна.']], [["Oson topshiriqlar to'plami", 'Набор лёгких заданий'], ["Tayanch qiyinlikni pasaytirmaydi, unga yetishga yordam beradi.", 'Опора не снижает трудность, а помогает её преодолеть.']], [["Baholash mezoni", 'Критерий оценивания'], ["Bu boshqa tushuncha.", 'Это другое понятие.']]],
      'A', ["Namuna, reja, kalit so'zlar — vaqtinchalik tayanch.", 'Образец, план, ключевые слова — временная опора.']),
    cq('a-p-df-c3', '3.1.4', { ...P(DF) }, ["Sinfda tez bajaradigan 4 o'quvchi doim zerikadi. Eng to'g'ri harakat?", 'Четверо учеников, которые всё делают быстро, постоянно скучают. Самое верное действие?'],
      [[["Shu mavzu bo'yicha chuqurroq topshiriq: masala tuzish, usullarni solishtirish, tushuntirib berish", 'Дать углублённое задание по той же теме: составить задачу, сравнить способы, объяснить другим']], [["Ko'proq bir xil misollar berish", 'Давать больше однотипных примеров'], ["Miqdor emas, chuqurlik kerak.", 'Нужна глубина, а не количество.']], [["Ularni kutishga majbur qilish", 'Заставить ждать'], ["Vaqt behuda ketadi, motivatsiya pasayadi.", 'Время теряется, мотивация падает.']], [["Keyingi sinf darsligini berish", 'Дать учебник следующего класса'], ["Izchillik buziladi, umumiy maqsad yo'qoladi.", 'Нарушается последовательность, теряется общая цель.']]],
      'A', ["Kuchli o'quvchilarga — murakkablik va chuqurlik.", 'Сильным — усложнение и углубление.']),
    cq('a-p-df-c4', '3.3.4', { ...P(DF) }, ["Qaysi holat tabaqalashtirish tamoyiliga zid?", 'Какая ситуация противоречит принципам дифференциации?'],
      [[["«Kuchsizlar» guruhi butun yil o'zgarmaydi va faqat oson topshiriq oladi", 'Группа «слабых» весь год не меняется и получает только лёгкие задания']], [["Guruhlar har mavzudan keyin qayta tuziladi", 'Группы пересматриваются после каждой темы'], ["Bu tamoyilga mos.", 'Это соответствует принципам.']], [["Bitta maqsadga uch xil yordam", 'Три вида помощи к одной цели'], ["Bu to'g'ri tabaqalashtirish.", 'Это правильная дифференциация.']], [["Natijani turli shaklda ko'rsatish imkoni", 'Возможность показать результат в разной форме'], ["Bu natija bo'yicha moslashtirish.", 'Это адаптация по результату.']]],
      'A', ["Doimiy guruh va past kutish — tamg'alash.", 'Постоянная группа и заниженные ожидания — это навешивание ярлыков.']),
    cq('a-p-df-c5', '3.1.4', { ...P(DF) }, ["Inklyuziv sinfda alohida ta'lim ehtiyoji bor o'quvchi uchun eng to'g'ri yondashuv?", 'Какой подход наиболее верен для ученика с особыми образовательными потребностями в инклюзивном классе?'],
      [[["Umumiy dars maqsadini saqlab, individual tayanch va moslashtirilgan topshiriqlar berish", 'Сохранить общую цель урока, дать индивидуальную опору и адаптированные задания']], [["Uni alohida burchakda boshqa ish bilan band qilish", 'Занять его в углу отдельным делом'], ["Bu ajratish, inklyuziya emas.", 'Это изоляция, а не инклюзия.']], [["Hammaga bir xil talab qo'yish", 'Требовать от всех одинаково'], ["Ehtiyojlar hisobga olinmaydi.", 'Потребности не учитываются.']], [["Faqat ota-onaga topshirish", 'Переложить всё на родителей'], ["Ta'lim maktab vazifasi.", 'Обучение — задача школы.']]],
      'A', ["Inklyuziya — umumiy jarayonda ishtirok etish + individual moslashtirish.", 'Инклюзия — участие в общем процессе + индивидуальная адаптация.']),
  ],
});

export const PED3_LESSONS = [PED_METHODS, PED_VERBAL, PED_VISUAL, PED_PRACTICAL, PED_PROBLEM, PED_DIFFERENTIATED];
