// Reading literacy — batch 2: explicit information, inference, subtext, cause and effect.
import { B, cq, lesson, oq } from './build';
const SRC = ['pirls', 'pirlsuz2020', 'spec2026'];
const R = (l: string) => ({ lang: 'both' as const, lesson: l, src: SRC });

/* Original texts written for this app. */
const FAIR: [string, string] = [
  "«Kitob yarmarkasi». Maktabimizda 15-aprel, shanba kuni kitob yarmarkasi bo'ladi. U soat 10:00 da maktab hovlisida boshlanib, 13:00 da tugaydi. Har bir sinf o'qib bo'lgan 5 tadan kitob olib keladi. Kitoblarni sotib bo'lmaydi — ularni almashtirish mumkin: bitta kitob olib kelgan o'quvchi bitta kitob tanlaydi. Yomg'ir yog'sa, yarmarka sport zalida o'tkaziladi.",
  '«Книжная ярмарка». В нашей школе 15 апреля, в субботу, пройдёт книжная ярмарка. Она начнётся в 10:00 во дворе школы и закончится в 13:00. Каждый класс приносит по 5 прочитанных книг. Книги нельзя купить — их можно обменять: ученик, принёсший одну книгу, выбирает одну книгу. Если пойдёт дождь, ярмарка пройдёт в спортивном зале.',
];
const MORNING: [string, string] = [
  "«Ertalab». Dilnoza eshikdan kirib, ho'l soyabonini burchakka qo'ydi. Etiklaridan suv tomchilardi. U derazaga qaradi: hovlidagi ko'lmaklar kattalashib borardi. «Bugun bog'da o'ynay olmaymiz», — dedi u xo'rsinib. Onasi issiq choy quyib berdi va kulimsirab: «Uyda ham qiziqarli o'yin topiladi», — dedi.",
  '«Утро». Дильноза вошла в дверь и поставила мокрый зонт в угол. С её сапог капала вода. Она посмотрела в окно: лужи во дворе становились всё больше. «Сегодня мы не сможем играть в саду», — вздохнула она. Мама налила ей горячего чаю и с улыбкой сказала: «И дома найдётся интересная игра».',
];
const BIRDS: [string, string] = [
  "«Qushxona». Bahorda Aziz otasi bilan qushxona yasadi. Ular uni daraxtga osib qo'yishdi, lekin bir hafta davomida bironta qush kelmadi. Aziz kitobdan o'qib bildi: qushxona tuynugi juda katta bo'lsa, qushlar unga xavfsiz deb ishonmaydi. Shuning uchun u tuynukni kichikroq qilib qayta yasadi. Ikki kundan keyin qushxonada chug'urchuqlar in qurdi.",
  '«Скворечник». Весной Азиз с папой сделал скворечник. Они повесили его на дерево, но целую неделю ни одна птица не прилетала. Азиз прочитал в книге: если леток слишком большой, птицы не считают домик безопасным. Поэтому он сделал новый скворечник с маленьким летком. Через два дня в скворечнике свили гнездо скворцы.',
];

/* ======================= 1. Explicit information ======================= */
const EX = 'read-explicit';
export const READ_EXPLICIT = lesson({
  id: EX, module: 'read-core', level: 'intro', stage: 'F', minutes: 18, codes: ['1.2.8', '1.4.5'], sourceIds: SRC,
  title: ["Aniq berilgan ma'lumotni topish", 'Поиск явно заданной информации'],
  blocks: [
    B.intro(["PIRLS ning birinchi jarayoni — matnda to'g'ridan-to'g'ri aytilgan ma'lumotni topish. Bu eng oddiy, lekin poydevor ko'nikma: o'quvchi uni egallamasa, xulosa chiqarish ham qiyinlashadi.", 'Первый процесс PIRLS — поиск информации, прямо названной в тексте. Это самый простой, но базовый навык: без него трудно делать и выводы.']),
    B.definition(["**Aniq ma'lumot** — matnda so'zma-so'z yoki sinonim bilan yozilgan fakt (kim, nima, qachon, qayerda, nechta). Javobni matndagi bitta gap **tasdiqlaydi**.", '**Явная информация** — факт, записанный в тексте дословно или синонимом (кто, что, когда, где, сколько). Ответ **подтверждается** одним предложением текста.']),
    B.explain(FAIR, undefined, ['Matn', 'Текст']),
    B.rule(["Strategiya: 1) savoldagi kalit so'zni toping; 2) matnda shu so'zni yoki uning sinonimini qidiring (scanning); 3) atrofdagi gapni to'liq o'qing; 4) javobni matndagi gap bilan solishtiring — **dalil** qaysi gapda?", 'Стратегия: 1) найдите ключевое слово вопроса; 2) найдите его или синоним в тексте (scanning); 3) прочитайте предложение целиком; 4) сверьте ответ с текстом — в каком предложении **доказательство**?']),
    B.example(["Yarmarka soat nechada tugaydi?", 'Во сколько закончится ярмарка?'], [
      ["Kalit so'z: «tugaydi».", 'Ключевое слово: «закончится».'],
      ["Dalil — 2-gap: «...13:00 da tugaydi».", 'Доказательство — 2-е предложение: «...закончится в 13:00».'],
    ], ['13:00', '13:00']),
    B.example(["Yomg'ir yog'sa, yarmarka qayerda bo'ladi?", 'Где пройдёт ярмарка, если пойдёт дождь?'], [
      ["Kalit so'z: «yomg'ir».", 'Ключевое слово: «дождь».'],
      ["Dalil — oxirgi gap: «...sport zalida o'tkaziladi».", 'Доказательство — последнее предложение: «...пройдёт в спортивном зале».'],
      ["Diqqat: «maktab hovlisi» ham matnda bor, lekin u yomg'irsiz holat uchun.", 'Внимание: «двор школы» тоже есть в тексте, но это место для сухой погоды.'],
    ], ['Sport zalida', 'В спортивном зале']),
    B.example(["Har bir sinf nechta kitob olib keladi?", 'Сколько книг приносит каждый класс?'], [
      ["Dalil — 3-gap: «Har bir sinf ... 5 tadan kitob olib keladi».", 'Доказательство — 3-е предложение: «Каждый класс приносит по 5 ... книг».'],
    ], ['5 ta', '5 книг']),
    B.mistake(null, [
      ["Matnni qayta o'qimay, xotiradan javob berish.", 'Отвечать по памяти, не возвращаясь к тексту.'],
      ["Kalit so'zga yaqin, lekin boshqa savolga tegishli faktni tanlash (hovli o'rniga sport zali).", 'Выбирать факт рядом с ключевым словом, но относящийся к другому вопросу (двор вместо зала).'],
      ["O'z bilimi bilan javob berish: «yarmarkada kitob sotiladi» — matnda aksi yozilgan.", 'Отвечать из своего опыта: «на ярмарке продают книги» — в тексте сказано обратное.'],
    ]),
    B.try(cq('a-r-ex-t1', '1.2.8', { ...R(EX), d: 1, rule: ["Javob matndagi gap bilan tasdiqlanishi kerak.", 'Ответ должен подтверждаться предложением текста.'] },
      ["«Kitob yarmarkasi» matniga ko'ra, kitob olish uchun nima qilish kerak?", 'По тексту «Книжная ярмарка»: что нужно сделать, чтобы получить книгу?'],
      [[["O'zi bitta kitob olib kelishi kerak", 'Принести одну свою книгу']], [["Kitobni sotib olish", 'Купить книгу'], ["Matnda: «Kitoblarni sotib bo'lmaydi».", 'В тексте: «Книги нельзя купить».']], [["O'qituvchidan ruxsat olish", 'Получить разрешение учителя'], ["Matnda bu aytilmagan.", 'В тексте об этом не сказано.']], [["Soat 13:00 da kelish", 'Прийти в 13:00'], ["Bu yarmarka tugash vaqti.", 'В это время ярмарка заканчивается.']]],
      'A', ["Dalil: «bitta kitob olib kelgan o'quvchi bitta kitob tanlaydi».", 'Доказательство: «ученик, принёсший одну книгу, выбирает одну книгу».'])),
    B.method(["Bolalarni aniq ma'lumotni topishga o'rgatish:", 'Как учить детей находить явную информацию:'], [
      ["«Dalilni ko'rsat» qoidasi: har bir javobdan keyin bola matndagi gapni barmog'i bilan ko'rsatadi yoki tagiga chizadi.", 'Правило «Покажи доказательство»: после каждого ответа ребёнок показывает или подчёркивает предложение.'],
      ["Kalit so'zlarni rangli qalam bilan belgilash.", 'Выделять ключевые слова цветным карандашом.'],
      ["Matnda sinonim bilan berilgan savollar (savolda «tugaydi», matnda «yakunlanadi») — skanerlashni chuqurlashtiradi.", 'Вопросы с синонимами (в вопросе «закончится», в тексте «завершится») углубляют поиск.'],
    ]),
    B.summary(null, [
      ["Aniq ma'lumot matnda to'g'ridan-to'g'ri yozilgan.", 'Явная информация прямо записана в тексте.'],
      ["Kalit so'z → qidirish → gapni o'qish → dalilni tekshirish.", 'Ключевое слово → поиск → чтение предложения → проверка доказательства.'],
    ]),
  ],
  check: [
    cq('a-r-ex-c1', '1.2.8', { ...R(EX) }, ["«Kitob yarmarkasi» qaysi kuni bo'ladi?", 'В какой день пройдёт «Книжная ярмарка»?'],
      [[["15-aprel, shanba", '15 апреля, в субботу']], [["13-aprel", '13 апреля'], ["13 — tugash soati.", '13 — это час окончания.']], [["Har shanba", 'Каждую субботу'], ["Matnda bitta sana bor.", 'В тексте названа одна дата.']], [["Yomg'irli kunda", 'В дождливый день'], ["Yomg'ir — joyni almashtirish sharti.", 'Дождь — условие смены места.']]],
      'A', ["Dalil — 1-gap.", 'Доказательство — 1-е предложение.']),
    cq('a-r-ex-c2', '1.2.8', { ...R(EX) }, ["Matnga ko'ra yarmarka qancha davom etadi?", 'Сколько времени продлится ярмарка по тексту?'],
      [[['3 soat', '3 часа']], [['10 soat', '10 часов'], ["10:00 — boshlanish vaqti.", '10:00 — время начала.']], [['13 soat', '13 часов'], ["13:00 — tugash vaqti.", '13:00 — время окончания.']], [["Butun kun", 'Весь день'], ["Matnda vaqt chegarasi bor.", 'В тексте указаны границы времени.']]],
      'A', ["10:00 dan 13:00 gacha — 3 soat (ikki faktni birlashtirish).", 'С 10:00 до 13:00 — 3 часа (соединение двух фактов).']),
    cq('a-r-ex-c3', '1.4.5', { ...R(EX) }, ["«Ertalab» matnida Dilnoza soyabonni qayerga qo'ydi?", 'Куда Дильноза поставила зонт в тексте «Утро»?'],
      [[["Burchakka", 'В угол']], [["Deraza yoniga", 'К окну'], ["U derazaga faqat qaradi.", 'В окно она только посмотрела.']], [["Hovliga", 'Во двор'], ["Hovlida ko'lmaklar bor edi.", 'Во дворе были лужи.']], [["Stol ustiga", 'На стол'], ["Matnda yo'q.", 'В тексте этого нет.']]],
      'A', ["Dalil: «ho'l soyabonini burchakka qo'ydi».", 'Доказательство: «поставила мокрый зонт в угол».']),
    oq('a-r-ex-c4', '1.2.8', { ...R(EX), steps: [["Kalit so'z: «nechta».", 'Ключевое слово: «сколько».'], ["Dalil: «har bir sinf 5 tadan».", 'Доказательство: «каждый класс по 5».']] },
      ["Yarmarkaga 4 ta sinf qatnashsa, «Kitob yarmarkasi» matni bo'yicha jami nechta kitob keltiriladi? (son)", 'Если в ярмарке участвуют 4 класса, сколько книг будет принесено по тексту «Книжная ярмарка»? (число)'],
      '20', ["4 · 5 = 20: aniq fakt (5 tadan) va savoldagi son birlashtirildi.", '4 · 5 = 20: явный факт (по 5) объединён с числом из вопроса.'], {}, 20),
    cq('a-r-ex-c5', '1.4.5', { ...R(EX) }, ["Aniq ma'lumotni topishni o'rgatishda qaysi talab eng muhim?", 'Какое требование важнее всего при обучении поиску явной информации?'],
      [[["Javobni matndagi gap bilan tasdiqlash (dalilni ko'rsatish)", 'Подтверждать ответ предложением из текста (показывать доказательство)']], [["Matnni yod olish", 'Заучить текст'], ["Yodlash qidirish ko'nikmasini bermaydi.", 'Заучивание не формирует навык поиска.']], [["Javobni tez aytish", 'Быстро отвечать'], ["Tezlik aniqlikdan muhim emas.", 'Скорость не важнее точности.']], [["O'z tajribasidan javob berish", 'Отвечать из собственного опыта'], ["Javob matnga tayanishi kerak.", 'Ответ должен опираться на текст.']]],
      'A', ["«Dalilni ko'rsat» — asosiy qoida.", '«Покажи доказательство» — главное правило.']),
  ],
});

/* ======================= 2. Straightforward inference ======================= */
const IN = 'read-inference';
export const READ_INFERENCE = lesson({
  id: IN, module: 'read-core', level: 'core', stage: 'C', minutes: 18, codes: ['1.4.5', '1.4.2'], requires: [EX], sourceIds: SRC,
  title: ["Oddiy xulosa chiqarish", 'Формулирование прямых выводов'],
  blocks: [
    B.intro(["Muallif hamma narsani aytmaydi: «yomg'ir yog'yapti» deb yozmasdan ham buni tushunish mumkin. PIRLS ning ikkinchi jarayoni — matndagi ikki-uch faktni bog'lab, oddiy xulosa chiqarish.", 'Автор говорит не всё: можно понять, что идёт дождь, даже если это не написано. Второй процесс PIRLS — связать два-три факта текста и сделать прямой вывод.']),
    B.definition(["**Oddiy xulosa** — matnda to'g'ridan-to'g'ri aytilmagan, lekin bir nechta aniq faktdan mantiqan kelib chiqadigan fikr.", '**Прямой вывод** — мысль, которая прямо не названа в тексте, но логически следует из нескольких явных фактов.']),
    B.explain(MORNING, undefined, ['Matn', 'Текст']),
    B.rule(["Formula: **fakt 1 + fakt 2 → xulosa**. Har bir xulosa uchun matndan kamida bitta dalil ko'rsating. Matnda yo'q narsani o'ylab topmang.", 'Формула: **факт 1 + факт 2 → вывод**. Для каждого вывода покажите хотя бы одно доказательство из текста. Не придумывайте то, чего нет в тексте.']),
    B.example(["Dilnoza uyga kirganda tashqarida ob-havo qanday edi?", 'Какая погода была на улице, когда Дильноза вошла в дом?'], [
      ["Fakt 1: «ho'l soyabon».", 'Факт 1: «мокрый зонт».'],
      ["Fakt 2: «etiklaridan suv tomchilardi», «ko'lmaklar kattalashib borardi».", 'Факт 2: «с сапог капала вода», «лужи становились всё больше».'],
      ["Xulosa: yomg'ir yog'ayotgan edi (va to'xtamagan).", 'Вывод: шёл дождь (и не прекращался).'],
    ], ["Yomg'ir yog'ayotgan edi", 'Шёл дождь']),
    B.example(["Nega Dilnoza «bog'da o'ynay olmaymiz» dedi?", 'Почему Дильноза сказала, что они не смогут играть в саду?'], [
      ["Fakt: ko'lmaklar kattalashmoqda — yomg'ir davom etmoqda.", 'Факт: лужи растут — дождь продолжается.'],
      ["Xulosa: ho'l va iflos bog'da o'ynab bo'lmaydi.", 'Вывод: в мокром саду играть нельзя.'],
    ], ["Yomg'ir sababli", 'Из-за дождя']),
    B.example(["Onaning gapidan Dilnozaning kayfiyati haqida nima bilamiz?", 'Что слова мамы говорят о настроении Дильнозы?'], [
      ["Fakt: Dilnoza «xo'rsinib» gapirdi.", 'Факт: Дильноза «вздохнула».'],
      ["Fakt: ona uni «kulimsirab» yupatdi.", 'Факт: мама с улыбкой её утешила.'],
      ["Xulosa: Dilnoza xafa edi, ona kayfiyatini ko'tarmoqchi.", 'Вывод: Дильноза была расстроена, мама хочет поднять ей настроение.'],
    ], ["Xafa edi", 'Была расстроена']),
    B.mistake(null, [
      ["Matnga asoslanmagan xulosa: «Dilnoza kasal bo'lib qoldi» — dalil yo'q.", 'Вывод без опоры на текст: «Дильноза заболела» — доказательств нет.'],
      ["Faqat bitta so'zga tayanib, boshqa faktlarni e'tiborsiz qoldirish.", 'Опираться на одно слово, игнорируя другие факты.'],
      ["Aniq ma'lumotni xulosa deb hisoblash.", 'Принимать явную информацию за вывод.'],
    ]),
    B.try(cq('a-r-in-t1', '1.4.5', { ...R(IN), d: 1 }, ["«Ertalab» matniga ko'ra, Dilnoza qayerdan keldi?", 'Откуда, судя по тексту «Утро», пришла Дильноза?'],
      [[["Tashqaridan, yomg'ir ostidan", 'С улицы, из-под дождя']], [["Qo'shni xonadan", 'Из соседней комнаты'], ["Ho'l soyabon va etiklar tashqaridan kelganini ko'rsatadi.", 'Мокрые зонт и сапоги показывают, что она пришла с улицы.']], [["Bog'dan o'yindan", 'Из сада, с игры'], ["U bog'da o'ynay olmasligini aytdi.", 'Она сказала, что играть в саду нельзя.']], [["Matndan bilib bo'lmaydi", 'По тексту определить нельзя'], ["Dalillar bor: ho'l soyabon, eshikdan kirdi.", 'Доказательства есть: мокрый зонт, вошла в дверь.']]],
      'A', ["«Eshikdan kirib, ho'l soyabonini...» — tashqaridan kelgan.", '«Вошла в дверь и поставила мокрый зонт» — пришла с улицы.'])),
    B.method(["Xulosa chiqarishga o'rgatish:", 'Как учить делать выводы:'], [
      ["«Detektiv» o'yini: «Qaysi so'zlar senga buni aytdi?»", 'Игра «Детектив»: «Какие слова тебе это подсказали?»'],
      ["«Fakt + fakt = xulosa» jadvali doskada.", 'Таблица «факт + факт = вывод» на доске.'],
      ["Avval rasm bo'yicha xulosa (ho'l soyabon rasmi), keyin matn bo'yicha.", 'Сначала выводы по картинке (мокрый зонт), затем по тексту.'],
    ]),
    B.summary(null, [
      ["Xulosa matnda aytilmaydi, lekin faktlardan kelib chiqadi.", 'Вывод не назван в тексте, но следует из фактов.'],
      ["Har bir xulosa uchun dalil ko'rsating.", 'Для каждого вывода покажите доказательство.'],
    ]),
  ],
  check: [
    cq('a-r-in-c1', '1.4.5', { ...R(IN) }, ["«Qushxona» matnidan qaysi xulosa to'g'ri?", 'Какой вывод верен по тексту «Скворечник»?'],
      [[["Tuynukning o'lchami qushlar uchun muhim", 'Размер летка важен для птиц']], [["Aziz qushlarni yoqtirmaydi", 'Азиз не любит птиц'], ["U qushlar uchun ikki marta uy yasadi.", 'Он дважды делал домик для птиц.']], [["Daraxt juda baland edi", 'Дерево было слишком высоким'], ["Matnda bunga dalil yo'q.", 'Доказательств этого нет.']], [["Qushlar qishda keldi", 'Птицы прилетели зимой'], ["Voqea bahorda bo'lgan.", 'События происходили весной.']]],
      'A', ["Kichik tuynukdan keyin qushlar keldi — demak, o'lcham muhim.", 'После маленького летка птицы прилетели — значит, размер важен.']),
    cq('a-r-in-c2', '1.4.5', { ...R(IN) }, ["Nega birinchi qushxonaga bir hafta qush kelmadi?", 'Почему в первый скворечник неделю не прилетали птицы?'],
      [[["Tuynuk juda katta edi, qushlar uni xavfsiz deb bilmadi", 'Леток был слишком большим, и птицы не считали домик безопасным']], [["Qushxona noto'g'ri rangda edi", 'Скворечник был неправильного цвета'], ["Rang haqida matnda gap yo'q.", 'О цвете в тексте нет.']], [["Qushlar boshqa shaharga ketgan edi", 'Птицы улетели в другой город'], ["Dalil yo'q.", 'Доказательств нет.']], [["Aziz uni noto'g'ri osgan", 'Азиз неправильно повесил его'], ["Matnda osish haqida muammo aytilmagan.", 'О проблеме с подвешиванием не сказано.']]],
      'A', ["Kitobdagi ma'lumot + yangi qushxona natijasi → xulosa.", 'Сведения из книги + результат нового домика → вывод.']),
    cq('a-r-in-c3', '1.4.2', { ...R(IN) }, ["«Ertalab» matnida ona qanday odam sifatida ko'rinadi?", 'Какой предстаёт мама в тексте «Утро»?'],
      [[["G'amxo'r va qo'llab-quvvatlovchi", 'Заботливой и поддерживающей']], [["Qattiqqo'l", 'Строгой'], ["U kulimsirab yupatdi.", 'Она утешила дочь с улыбкой.']], [["Befarq", 'Равнодушной'], ["U choy quyib, gapirdi.", 'Она налила чаю и заговорила.']], [["Xafa", 'Расстроенной'], ["Xafa — Dilnoza.", 'Расстроена Дильноза.']]],
      'A', ["Dalil: «issiq choy quyib berdi», «kulimsirab».", 'Доказательство: «налила горячего чаю», «с улыбкой».']),
    cq('a-r-in-c4', '1.4.5', { ...R(IN), d: 3 }, ["Qaysi biri xulosa emas, balki aniq berilgan ma'lumot?", 'Что из этого — не вывод, а явно данная информация?'],
      [[["Aziz otasi bilan qushxona yasadi", 'Азиз с папой сделал скворечник']], [["Aziz qiziquvchan bola", 'Азиз — любознательный мальчик'], ["Bu xulosa (kitob o'qiganidan).", 'Это вывод (из того, что он читал книгу).']], [["Aziz qiyinchilikda taslim bo'lmaydi", 'Азиз не сдаётся при трудностях'], ["Bu xulosa.", 'Это вывод.']], [["Qushlarga xavfsizlik muhim", 'Птицам важна безопасность'], ["Bu matn asosidagi xulosa.", 'Это вывод из текста.']]],
      'A', ["Dalil: 1-gap so'zma-so'z.", 'Доказательство: 1-е предложение дословно.']),
    cq('a-r-in-c5', '1.4.5', { ...R(IN) }, ["O'quvchi «Dilnoza kasal bo'ldi» deb xulosa chiqardi. O'qituvchi nima deyishi kerak?", 'Ученик решил: «Дильноза заболела». Что должен сказать учитель?'],
      [[["«Qaysi so'zlar buni ko'rsatadi? Matnda dalil topaylik»", '«Какие слова на это указывают? Давай найдём доказательство в тексте»']], [["«Yaxshi fikr!»", '«Хорошая мысль!»'], ["Dalilsiz xulosani mustahkamlaydi.", 'Закрепляет вывод без доказательства.']], [["«Noto'g'ri, o'tir»", '«Неверно, садись»'], ["Fikrlash usulini o'rgatmaydi.", 'Не учит способу рассуждения.']], [["«Bu sening fikring, hammasi to'g'ri»", '«Это твоё мнение, всё верно»'], ["Xulosa matnga tayanishi kerak.", 'Вывод должен опираться на текст.']]],
      'A', ["Dalil talab qilish — xulosani tekshirish usuli.", 'Требование доказательства — способ проверить вывод.']),
  ],
});

/* ======================= 3. Hidden meaning / subtext ======================= */
const HI = 'read-hidden';
export const READ_HIDDEN = lesson({
  id: HI, module: 'read-core', level: 'core', stage: 'B', minutes: 18, codes: ['1.4.2', '1.4.5'], requires: [IN], sourceIds: SRC,
  title: ["Yashirin ma'no va tagma'no", 'Скрытая информация и подтекст'],
  blocks: [
    B.intro(["Badiiy matnda eng muhim fikr ko'pincha ochiq aytilmaydi: muallif uni qahramon harakati, detal yoki sukut orqali beradi. Buni ko'ra olish — talqin darajasidagi o'qish.", 'В художественном тексте главное часто не говорится прямо: автор передаёт его через поступок героя, деталь или умолчание. Увидеть это — чтение на уровне интерпретации.']),
    B.definition(["**Tagma'no** — matnning so'zlarida emas, ularning orqasida turgan ma'no. U butun matn yoki bir nechta epizodni talqin qilish orqali topiladi.", '**Подтекст** — смысл, стоящий не в словах текста, а за ними. Он выявляется интерпретацией всего текста или нескольких эпизодов.']),
    B.table([['', ''], ["Oddiy xulosa", 'Прямой вывод'], ["Tagma'no (talqin)", 'Подтекст (интерпретация)']], [
      [["Nimaga tayanadi", 'На что опирается'], ["1–2 yaqin fakt", '1–2 близких факта'], ["Butun matn, detal, ramz", 'Весь текст, деталь, символ']],
      [['Misol', 'Пример'], ["Ho'l soyabon → yomg'ir", 'Мокрый зонт → дождь'], ["Aziz ikkinchi marta yasadi → qat'iyat", 'Азиз сделал второй раз → настойчивость']],
    ]),
    B.rule(["Tagma'noni topish savollari: «Muallif nima uchun bu detalni kiritdi?», «Qahramon nega aynan shunday qildi?», «Bu voqea butun hikoya uchun nimani anglatadi?»", 'Вопросы для поиска подтекста: «Зачем автор ввёл эту деталь?», «Почему герой поступил именно так?», «Что этот эпизод значит для всего рассказа?»']),
    B.explain(BIRDS, undefined, ['Matn', 'Текст']),
    B.example(["«Qushxona» hikoyasining tagma'nosi nima?", 'Каков подтекст рассказа «Скворечник»?'], [
      ["Epizod 1: qushlar kelmadi — muvaffaqiyatsizlik.", 'Эпизод 1: птицы не прилетели — неудача.'],
      ["Epizod 2: Aziz kitobdan sababini topdi — taslim bo'lmadi.", 'Эпизод 2: Азиз нашёл причину в книге — не сдался.'],
      ["Epizod 3: qushlar keldi — natija.", 'Эпизод 3: птицы прилетели — результат.'],
      ["Talqin: muammoni bilim orqali hal qilish va qat'iyat natija beradi.", 'Интерпретация: решать проблему с помощью знаний и настойчивости — значит добиться результата.'],
    ], ["Bilim va qat'iyat muvaffaqiyatga olib keladi", 'Знания и настойчивость ведут к успеху']),
    B.example(["«Ertalab» matnida onaning «Uyda ham qiziqarli o'yin topiladi» degan gapi nimani anglatadi?", 'Что означают слова мамы «И дома найдётся интересная игра» в тексте «Утро»?'], [
      ["To'g'ridan-to'g'ri: uyda o'yin bor.", 'Прямо: дома есть игры.'],
      ["Tagma'no: qiyin vaziyatda ham yaxshi tomon topish mumkin; ona qizini qo'llab-quvvatlayapti.", 'Подтекст: и в неприятной ситуации можно найти хорошее; мама поддерживает дочь.'],
    ], ["Ijobiy qarash va g'amxo'rlik", 'Позитивный взгляд и забота']),
    B.example(["«Kitob yarmarkasi» e'lonida «Kitoblarni sotib bo'lmaydi — ularni almashtirish mumkin» deyilgan. Bu qoida ortida qanday maqsad bor?", 'В объявлении «Книжная ярмарка» сказано: «Книги нельзя купить — их можно обменять». Какая цель стоит за этим правилом?'], [
      ["To'g'ridan-to'g'ri: pul bilan sotib olish mumkin emas.", 'Прямо: за деньги купить нельзя.'],
      ["Faktlarni bog'laymiz: har bir sinf o'qilgan kitob olib keladi, bitta kitobga bitta kitob.", 'Связываем факты: каждый класс приносит прочитанные книги, одна книга — за одну.'],
      ["Talqin: tashkilotchilar kitoblar «yangi hayot» topishini va o'quvchilar bir-biri bilan o'qiganini baham ko'rishini xohlaydi.", 'Интерпретация: организаторы хотят, чтобы книги получили «вторую жизнь», а ученики делились прочитанным.'],
    ], ["Kitobxonlikni rivojlantirish va baham ko'rish", 'Развивать чтение и учить делиться']),
    B.mistake(null, [
      ["Tagma'no o'rniga syujetni qayta aytish.", 'Пересказывать сюжет вместо подтекста.'],
      ["Matnga aloqasi yo'q «chuqur» talqin: dalilsiz fantaziya.", '«Глубокая» интерпретация без связи с текстом — фантазия без доказательств.'],
      ["Bitta epizodga asoslanib, butun matn haqida xulosa qilish.", 'Делать вывод обо всём тексте по одному эпизоду.'],
    ]),
    B.try(cq('a-r-hi-t1', '1.4.2', { ...R(HI), d: 2 }, ["Aziz ikkinchi qushxonani yasaganini muallif nima uchun ko'rsatdi?", 'Зачем автор показал, что Азиз сделал второй скворечник?'],
      [[["Qahramonning taslim bo'lmasligini va bilimini qo'llay olishini ko'rsatish uchun", 'Чтобы показать, что герой не сдаётся и применяет знания']], [["Qushxonalar soni muhimligi uchun", 'Потому что важно число скворечников'], ["Son emas, harakat sababi muhim.", 'Важно не количество, а причина поступка.']], [["Hikoyani uzaytirish uchun", 'Чтобы удлинить рассказ'], ["Epizod g'oya uchun kerak.", 'Эпизод нужен для идеи.']], [["Otasi buyurgani uchun", 'Потому что так велел папа'], ["Matnda bunday buyruq yo'q.", 'В тексте нет такого указания.']]],
      'A', ["Tagma'no qahramon harakati orqali beriladi.", 'Подтекст передаётся через поступок героя.'])),
    B.method(["Tagma'noni o'rgatish:", 'Как учить видеть подтекст:'], [
      ["Savollar zinapoyasi: «Nima bo'ldi?» → «Nega?» → «Bu nimani anglatadi?»", 'Лестница вопросов: «Что случилось?» → «Почему?» → «Что это значит?»'],
      ["Maqol tanlash: hikoyaga qaysi maqol mos keladi va nega?", 'Подбор пословицы: какая пословица подходит к рассказу и почему?'],
      ["Har bir talqin uchun «matndan dalil» talab qilish.", 'Требовать «доказательство из текста» для любой интерпретации.'],
    ]),
    B.summary(null, [
      ["Tagma'no — so'zlar orqasidagi ma'no.", 'Подтекст — смысл за словами.'],
      ["Qahramon harakati, detal va voqealar ketma-ketligi uni ochadi.", 'Его раскрывают поступки героя, детали и последовательность событий.'],
      ["Talqin har doim matnga tayanadi.", 'Интерпретация всегда опирается на текст.'],
    ]),
  ],
  check: [
    cq('a-r-hi-c1', '1.4.2', { ...R(HI) }, ["Qaysi savol tagma'noni ochishga yo'naltirilgan?", 'Какой вопрос направлен на выявление подтекста?'],
      [[["«Muallif nega aynan shu detalni tanladi?»", '«Почему автор выбрал именно эту деталь?»']], [["«Voqea qaysi faslda bo'ldi?»", '«В какое время года происходили события?»'], ["Aniq ma'lumot.", 'Явная информация.']], [["«Qahramonning ismi nima?»", '«Как зовут героя?»'], ["Aniq ma'lumot.", 'Явная информация.']], [["«Matnda nechta gap bor?»", '«Сколько предложений в тексте?»'], ["Mazmunga aloqasi yo'q.", 'Не связано со смыслом.']]],
      'A', ["Detalning vazifasi haqidagi savol — talqin.", 'Вопрос о функции детали — интерпретация.']),
    cq('a-r-hi-c2', '1.4.2', { ...R(HI) }, ["«Qushxona» hikoyasiga qaysi maqol eng mos?", 'Какая пословица лучше всего подходит к рассказу «Скворечник»?'],
      [[["«Sabr tagi — sariq oltin»", '«Терпение и труд всё перетрут»']], [["«Tez tez — tezakka botar»", '«Поспешишь — людей насмешишь»'], ["Hikoya shoshqaloqlik haqida emas.", 'Рассказ не о спешке.']], [["«Do'st boshga, dushman oyoqqa qaraydi»", '«Друг познаётся в беде»'], ["Do'stlik mavzusi yo'q.", 'Темы дружбы нет.']], [["«Yolg'onning umri qisqa»", '«У лжи короткие ноги»'], ["Yolg'on haqida emas.", 'Не о лжи.']]],
      'A', ["Qat'iyat va mehnat natija beradi.", 'Настойчивость и труд приносят результат.']),
    cq('a-r-hi-c3', '1.4.5', { ...R(HI), d: 3 }, ["Oddiy xulosa bilan talqinning farqi nimada?", 'Чем прямой вывод отличается от интерпретации?'],
      [[["Oddiy xulosa 1–2 yaqin faktga, talqin butun matn va detallarning ma'nosiga tayanadi", 'Прямой вывод опирается на 1–2 близких факта, интерпретация — на весь текст и смысл деталей']], [["Farqi yo'q", 'Разницы нет'], ["Ular PIRLS ning turli jarayonlari.", 'Это разные процессы PIRLS.']], [["Talqin dalil talab qilmaydi", 'Интерпретации не нужны доказательства'], ["Talqin ham matnga tayanadi.", 'Интерпретация тоже опирается на текст.']], [["Oddiy xulosa faqat she'rda bo'ladi", 'Прямой вывод бывает только в стихах'], ["Har qanday matnda bo'ladi.", 'Бывает в любом тексте.']]],
      'A', ["PIRLS: 2-jarayon va 3-jarayon.", 'PIRLS: процессы 2 и 3.']),
    cq('a-r-hi-c4', '1.4.2', { ...R(HI) }, ["O'quvchi hikoyaning tagma'nosi haqida dalilsiz «chuqur» fikr aytdi. O'qituvchining eng to'g'ri munosabati?", 'Ученик высказал «глубокую» мысль о подтексте без доказательств. Наиболее верная реакция учителя?'],
      [[["Fikrni qadrlab, matndan tasdiqlovchi detal topishni so'rash", 'Оценить мысль и попросить найти подтверждающую деталь в тексте']], [["Fikrni rad etish", 'Отвергнуть мысль'], ["Fikrlash istagini so'ndiradi.", 'Гасит желание думать.']], [["Hammaga yozdirib qo'yish", 'Записать как правильный ответ для всех'], ["Dalilsiz talqin mustahkamlanadi.", 'Закрепляется интерпретация без доказательств.']], [["E'tibor bermaslik", 'Не обращать внимания'], ["Imkoniyat boy beriladi.", 'Упускается возможность.']]],
      'A', ["Talqin + dalil.", 'Интерпретация + доказательство.']),
    cq('a-r-hi-c5', '1.4.2', { ...R(HI) }, ["«Ertalab» matnidagi qaysi detal Dilnozaning kayfiyatini bilvosita ko'rsatadi?", 'Какая деталь текста «Утро» косвенно показывает настроение Дильнозы?'],
      [[["U «xo'rsinib» gapirdi", 'Она «вздохнула»']], [["Soyabon ho'l edi", 'Зонт был мокрым'], ["Bu ob-havoni ko'rsatadi.", 'Это показывает погоду.']], [["Ko'lmaklar kattalashdi", 'Лужи росли'], ["Bu ob-havo haqida.", 'Это о погоде.']], [["Ona choy quydi", 'Мама налила чаю'], ["Bu onaning harakati.", 'Это действие мамы.']]],
      'A', ["Xo'rsinish — xafalik belgisi.", 'Вздох — признак огорчения.']),
  ],
});

/* ======================= 4. Cause and effect ======================= */
const CE = 'read-cause';
export const READ_CAUSE = lesson({
  id: CE, module: 'read-core', level: 'core', stage: 'C', minutes: 15, codes: ['1.2.7', '1.4.5'], requires: [IN], sourceIds: SRC,
  title: ["Sabab va oqibat", 'Причинно-следственные связи'],
  blocks: [
    B.intro(["Matnni tushunish — voqealar nima uchun sodir bo'lganini bilish demakdir. Sabab-oqibat savollari ham badiiy, ham axborot matnlarida doim uchraydi.", 'Понять текст — значит понять, почему происходят события. Вопросы о причинах и следствиях встречаются и в художественных, и в информационных текстах.']),
    B.definition(["**Sabab** — biror narsa sodir bo'lishiga olib kelgan voqea yoki holat. **Oqibat** — sababdan kelib chiqqan natija.", '**Причина** — событие или обстоятельство, которое вызвало другое. **Следствие** — результат, вызванный причиной.']),
    B.table([["Signal so'zlar", 'Слова-сигналы'], ['Misol', 'Пример']], [
      [["chunki, sababli, tufayli", 'потому что, так как, из-за'], ["Yomg'ir sababli yarmarka zalda o'tdi.", 'Из-за дождя ярмарка прошла в зале.']],
      [["shuning uchun, natijada, -gani uchun", 'поэтому, в результате, вследствие'], ["Tuynuk katta edi, shuning uchun qushlar kelmadi.", 'Леток был большим, поэтому птицы не прилетали.']],
    ], ["Sabab-oqibatni ko'rsatuvchi so'zlar", 'Слова, указывающие на причину и следствие']),
    B.rule(["Tekshirish savoli: «Nega?» savoliga javob — sabab; «Natijada nima bo'ldi?» savoliga javob — oqibat. Signal so'z bo'lmasa ham, voqealar tartibi va mantiq orqali aniqlang.", 'Проверочный вопрос: ответ на «Почему?» — причина; ответ на «Что получилось в результате?» — следствие. Если слов-сигналов нет, опирайтесь на порядок событий и логику.']),
    B.example(["«Qushxona»: tuynuk kichraytirilishining oqibati nima?", '«Скворечник»: каково следствие того, что леток сделали маленьким?'], [
      ["Sabab: tuynuk kichik qilindi.", 'Причина: леток сделали маленьким.'],
      ["Dalil: «Ikki kundan keyin ... chug'urchuqlar in qurdi».", 'Доказательство: «Через два дня ... свили гнездо скворцы».'],
    ], ["Qushlar in qurdi", 'Птицы свили гнездо']),
    B.example(["«Kitob yarmarkasi»: yarmarka qachon sport zalida o'tadi va nega?", '«Книжная ярмарка»: когда ярмарка пройдёт в спортзале и почему?'], [
      ["Shart-sabab: yomg'ir yog'sa.", 'Условие-причина: если пойдёт дождь.'],
      ["Oqibat: o'tkazish joyi o'zgaradi.", 'Следствие: меняется место проведения.'],
    ], ["Yomg'ir yog'sa", 'Если пойдёт дождь']),
    B.example(["Signal so'z yo'q: «Aziz kitobni o'qidi. U tuynukni kichikroq qildi.» Bog'liqlik bormi?", 'Слов-сигналов нет: «Азиз прочитал книгу. Он сделал леток меньше». Есть ли связь?'], [
      ["Kitobdagi ma'lumot — harakatning sababi.", 'Сведения из книги — причина действия.'],
      ["Mantiqiy tekshiruv: «Nega tuynukni kichraytirdi? — Kitobdan bilgani uchun».", 'Логическая проверка: «Почему уменьшил леток? — Потому что узнал из книги».'],
    ], ["Ha, yashirin sabab-oqibat", 'Да, скрытая причинно-следственная связь']),
    B.mistake(null, [
      ["Voqealar ketma-ketligini sabab deb hisoblash: «oldin bo'ldi — demak, sababi».", 'Считать порядок событий причиной: «было раньше — значит, причина».'],
      ["Sabab va oqibatni almashtirish.", 'Путать причину и следствие местами.'],
    ]),
    B.try(cq('a-r-ce-t1', '1.2.7', { ...R(CE), d: 1 }, ["«Ertalab»: nega bolalar bog'da o'ynay olmaydi?", '«Утро»: почему дети не смогут играть в саду?'],
      [[["Yomg'ir yog'ayotgani uchun", 'Потому что идёт дождь']], [["Ona ruxsat bermagani uchun", 'Потому что мама не разрешила'], ["Matnda taqiq yo'q.", 'Запрета в тексте нет.']], [["Choy ichish vaqti bo'lgani uchun", 'Потому что пора пить чай'], ["Bu sabab emas.", 'Это не причина.']], [["Bog' yopiq bo'lgani uchun", 'Потому что сад закрыт'], ["Dalil yo'q.", 'Доказательств нет.']]],
      'A', ["Dalil: ko'lmaklar, ho'l soyabon.", 'Доказательство: лужи, мокрый зонт.'])),
    B.method(["Sabab-oqibatni o'rgatish:", 'Как учить причинно-следственным связям:'], [
      ["«Nega? — Chunki…» zanjiri bilan qayta hikoya qilish.", 'Пересказ цепочкой «Почему? — Потому что…».'],
      ["Grafik organayzer: chap ustun — sabab, o'ng — oqibat.", 'Графический органайзер: слева причина, справа следствие.'],
      ["Tabiatshunoslik matnlari bilan integratsiya (yomg'ir → ko'lmak).", 'Интеграция с текстами о природе (дождь → лужи).'],
    ]),
    B.summary(null, [
      ["Sabab — «nega?», oqibat — «natijada nima?».", 'Причина — «почему?», следствие — «что в результате?».'],
      ["Signal so'zlar yordam beradi, lekin mantiq bilan tekshiring.", 'Слова-сигналы помогают, но проверяйте логикой.'],
    ]),
  ],
  check: [
    cq('a-r-ce-c1', '1.2.7', { ...R(CE) }, ["«Muz eridi, shuning uchun daryo toshdi» gapida sabab qaysi?", 'В предложении «Лёд растаял, поэтому река разлилась» что является причиной?'],
      [[["Muzning erishi", 'Таяние льда']], [["Daryoning toshishi", 'Разлив реки'], ["Bu oqibat.", 'Это следствие.']], [["«Shuning uchun» so'zi", 'Слово «поэтому»'], ["Bu signal so'z.", 'Это слово-сигнал.']], [["Sabab yo'q", 'Причины нет'], ["Sabab bor.", 'Причина есть.']]],
      'A', ["«Shuning uchun» dan oldingi qism — sabab.", 'Часть перед «поэтому» — причина.']),
    cq('a-r-ce-c2', '1.4.5', { ...R(CE) }, ["«Qushxona» matnida Azizning kitob o'qishi nimaga sabab bo'ldi?", 'К чему привело то, что Азиз прочитал книгу, в тексте «Скворечник»?'],
      [[["U tuynukni kichikroq qilib, qushxonani qayta yasadi", 'Он сделал новый скворечник с маленьким летком']], [["U qushxonani olib tashladi", 'Он снял скворечник'], ["Matnda yo'q.", 'В тексте нет.']], [["U boshqa daraxt tanladi", 'Он выбрал другое дерево'], ["Matnda yo'q.", 'В тексте нет.']], [["Hech narsa o'zgarmadi", 'Ничего не изменилось'], ["U qayta yasadi.", 'Он сделал домик заново.']]],
      'A', ["Bilim → harakat → natija.", 'Знание → действие → результат.']),
    cq('a-r-ce-c3', '1.2.7', { ...R(CE), d: 3 }, ["Qaysi juftlikda sabab-oqibat bog'liqligi YO'Q, faqat vaqt ketma-ketligi bor?", 'В какой паре НЕТ причинно-следственной связи, а есть только последовательность во времени?'],
      [[["«Men nonushta qildim. Keyin xat keldi.»", '«Я позавтракал. Потом пришло письмо.»']], [["«Kuchli shamol esdi va daraxt yiqildi.»", '«Подул сильный ветер, и дерево упало.»'], ["Shamol daraxt yiqilishiga sabab.", 'Ветер — причина падения.']], [["«U kasal bo'lgani uchun darsga kelmadi.»", '«Он не пришёл, потому что заболел.»'], ["«…gani uchun» — sabab.", '«потому что» — причина.']], [["«Tuynuk katta edi, shuning uchun qush kelmadi.»", '«Леток был большим, поэтому птица не прилетела.»'], ["Aniq sabab-oqibat.", 'Явная причинная связь.']]],
      'A', ["Nonushta xat kelishiga sabab emas.", 'Завтрак не причина прихода письма.']),
    cq('a-r-ce-c4', '1.2.7', { ...R(CE) }, ["Qaysi so'z odatda oqibatni bildiradi?", 'Какое слово обычно вводит следствие?'],
      [[["Shuning uchun", 'Поэтому']], [["Chunki", 'Потому что'], ["Sababni bildiradi.", 'Вводит причину.']], [["Sababli", 'Из-за'], ["Sababni bildiradi.", 'Вводит причину.']], [["Tufayli", 'Благодаря'], ["Sababni bildiradi.", 'Вводит причину.']]],
      'A', ["«Shuning uchun» dan keyin oqibat keladi.", 'После «поэтому» идёт следствие.']),
    cq('a-r-ce-c5', '1.4.5', { ...R(CE) }, ["Sabab-oqibatni o'rgatish uchun qaysi vosita eng mos?", 'Какой инструмент лучше всего подходит для обучения причинно-следственным связям?'],
      [[["«Sabab → oqibat» ustunli grafik organayzer", 'Графический органайзер со столбцами «причина → следствие»']], [["Matnni ko'chirib yozish", 'Переписывание текста'], ["Mexanik ish.", 'Механическая работа.']], [["Tez o'qish musobaqasi", 'Соревнование в скорости чтения'], ["Tushunishga qaratilmagan.", 'Не направлено на понимание.']], [["Lug'at diktanti", 'Словарный диктант'], ["Bog'liqlik o'rgatilmaydi.", 'Связи не изучаются.']]],
      'A', ["Organayzer bog'liqlikni ko'rinadigan qiladi.", 'Органайзер делает связь наглядной.']),
  ],
});

export const READ2_LESSONS = [READ_EXPLICIT, READ_INFERENCE, READ_HIDDEN, READ_CAUSE];
