// Reading literacy — batch 3: characters, author's position and fact vs opinion,
// literary vs informational texts, PIRLS basics. All texts are original.
import { B, cq, lesson, oq } from './build';
const SRC = ['pirls', 'pirlsuz2020', 'rtm2021', 'spec2026'];
const R = (l: string) => ({ lang: 'both' as const, lesson: l, src: SRC });

const NEWBOY: [string, string] = [
  "«Birinchi mashg'ulot». (1) Shaxmat to'garagiga yangi bola — Timur keldi. (2) U eshik oldida to'xtab, sumkasining bandini mahkam ushlab turdi. (3) Murabbiy uni Sardor bilan bir stolga o'tqazdi. (4) Sardor: «Bir o'yin o'ynaymizmi?» — deb so'radi. (5) Timur yerga qarab: «Men yaxshi o'ynay olmayman», — dedi. (6) Sardor kulib: «Men ham birinchi o'yinimda uch yurishda yutqazganman!» — dedi va donalarni terib, uni qo'lidan tortdi. (7) Kechqurun Timur onasiga: «Ertaga to'garakka erta boraman», — dedi.",
  '«Первое занятие». (1) В шахматный кружок пришёл новый мальчик — Тимур. (2) Он остановился у двери, крепко сжимая лямку рюкзака. (3) Тренер посадил его за один стол с Сардором. (4) Сардор спросил: «Сыграем партию?» (5) Тимур опустил глаза: «Я плохо играю». (6) Сардор засмеялся: «А я свою первую партию проиграл за три хода!» — расставил фигуры и потянул его за руку. (7) Вечером Тимур сказал маме: «Завтра я пойду в кружок пораньше».',
];
const PEN: [string, string] = [
  "«Ruchka». (1) Lola yo'lakda chiroyli ruchka topib oldi. (2) U atrofga qaradi — yo'lakda hech kim yo'q edi. (3) Lola ruchkani o'qituvchiga olib bordi: «Kimdir yo'qotgan bo'lsa kerak, qidirayotgandir». (4) Ertasi kuni 4-sinf o'quvchisi Malika Lolani quchoqlab: «Rahmat! Bu ruchkani menga buvim sovg'a qilgan edi», — dedi.",
  '«Ручка». (1) Лола нашла в коридоре красивую ручку. (2) Она огляделась — в коридоре никого не было. (3) Лола отнесла ручку учительнице: «Наверное, кто-то потерял и ищет». (4) На следующий день ученица 4 класса Малика обняла Лолу: «Спасибо! Эту ручку мне подарила бабушка».',
];
const GARDEN: [string, string] = [
  "«Maktab bog'i». (1) Maktabimiz hovlisida 12 ta mevali daraxt bor. (2) O'tgan kuzda o'quvchilar ulardan 80 kilogramm olma terishdi. (3) Menimcha, har bir maktabda shunday bog' bo'lishi kerak. (4) Daraxtlar yozda hovliga soya beradi. (5) Bog'da ishlagan bola mehnatni qadrlashni o'rganadi. (6) Bog'ni parvarish qilish — maktabdagi eng qiziqarli mashg'ulot.",
  '«Школьный сад». (1) Во дворе нашей школы растут 12 фруктовых деревьев. (2) Прошлой осенью ученики собрали с них 80 килограммов яблок. (3) По-моему, такой сад должен быть в каждой школе. (4) Летом деревья дают тень во дворе. (5) Ребёнок, который работает в саду, учится ценить труд. (6) Уход за садом — самое интересное занятие в школе.',
];
const ANT_TALE: [string, string] = [
  "Matn A. «Chumoli va ninachi». (1) Kichkina chumoli o'zidan katta bug'doy donini sudrab borardi. (2) «Nega buncha qiynalasan? Yoz — o'yin vaqti!» — dedi ninachi. (3) «Qishda och qolmaslik uchun», — javob berdi chumoli. (4) Ninachi kulib, gulga qo'ndi. (5) Qor yoqqan kuni ninachi chumolining eshigini taqillatdi.",
  'Текст А. «Муравей и стрекоза». (1) Маленький муравей тащил зерно пшеницы больше себя. (2) «Зачем ты так мучаешься? Лето — время игр!» — сказала стрекоза. (3) «Чтобы не голодать зимой», — ответил муравей. (4) Стрекоза засмеялась и села на цветок. (5) В день, когда выпал снег, стрекоза постучала в дверь муравья.',
];
const ANT_INFO: [string, string] = [
  "Matn B. «Chumolilar». (1) Chumolilar — katta oila bo'lib yashaydigan hasharotlar. (2) Chumoli o'z og'irligidan bir necha barobar og'ir yukni ko'tara oladi. (3) Chumoli uyasi yer ostidagi ko'plab yo'lak va xonalardan iborat. (4) Chumolilar bir-biriga hid orqali xabar beradi: topilgan ozuqaga boradigan yo'lda hid izi qoldiradi.",
  'Текст Б. «Муравьи». (1) Муравьи — насекомые, которые живут большими семьями. (2) Муравей может поднять груз, который в несколько раз тяжелее его самого. (3) Муравейник состоит из множества подземных ходов и камер. (4) Муравьи передают друг другу сообщения запахом: по дороге к найденной пище они оставляют пахучий след.',
];
const PARK: [string, string] = [
  "«Bog'da tozalik kuni». (1) Shanba kuni soat 9:00 da shahar bog'ida tozalik kuni o'tkaziladi. (2) Qatnashchilarga qo'lqop va qoplar beriladi. (3) Kelganlar ro'yxatdan o'tish uchun asosiy darvoza yonidagi stolga yaqinlashadi. (4) 10 yoshdan kichik bolalar kattalar bilan birga keladi. (5) Ish 12:00 da tugaydi, so'ng barcha qatnashchilarga choy beriladi.",
  '«День чистоты в парке». (1) В субботу в 9:00 в городском парке пройдёт день чистоты. (2) Участникам выдадут перчатки и мешки. (3) Чтобы зарегистрироваться, нужно подойти к столу у главных ворот. (4) Дети младше 10 лет приходят вместе со взрослыми. (5) Работа закончится в 12:00, после чего всех участников угостят чаем.',
];

/* ======================= 1. Characters ======================= */
const CH = 'read-characters';
export const READ_CHARACTERS = lesson({
  id: CH, module: 'read-core', level: 'core', stage: 'C', minutes: 20, codes: ['1.4.1', '1.4.2', '1.4.5'], requires: ['read-inference'], sourceIds: SRC,
  title: ["Qahramon xarakterini aniqlash", 'Характер персонажа'],
  blocks: [
    B.intro(["Muallif odatda «Timur uyatchan edi» deb yozmaydi — u qahramonni harakat qildiradi, gapirtiradi, boshqalarning munosabatini ko'rsatadi. O'quvchi esa shu belgilardan xarakterni o'zi «yig'adi». Bu PIRLS dagi xulosa chiqarish va talqin qilish savollarining eng ko'p uchraydigan turi.", 'Автор редко пишет прямо «Тимур был застенчивым» — он показывает поступки героя, его речь и реакцию других. Читатель сам «собирает» характер из этих признаков. Это один из самых частых типов вопросов PIRLS на вывод и интерпретацию.']),
    B.definition(["**Qahramon (personaj)** — asardagi harakat qiluvchi shaxs yoki jonzot. **Xarakter belgisi** — qahramonning barqaror xususiyati (mehribon, uyatchan, halol). **His-tuyg'u** — bir lahzalik holat (xafa, quvongan). **Dalil** — belgini isbotlaydigan matndagi gap.", '**Персонаж (герой)** — действующее лицо произведения. **Черта характера** — устойчивое качество (добрый, застенчивый, честный). **Чувство** — состояние в данный момент (обижен, рад). **Доказательство** — предложение текста, подтверждающее черту.']),
    B.explain(NEWBOY, undefined, ['Matn 1', 'Текст 1']),
    B.explain(PEN, undefined, ['Matn 2', 'Текст 2']),
    B.table([['Manba', 'Источник'], ['Savol', 'Вопрос к тексту'], ['Matn 1 dan misol', 'Пример из текста 1']], [
      [['Harakat', 'Поступки'], ['Nima qildi?', 'Что сделал?'], ["(6) Sardor uni qo'lidan tortdi", '(6) Сардор потянул его за руку']],
      [['Nutq', 'Речь'], ['Nima dedi va qanday?', 'Что и как сказал?'], ["(5) «Men yaxshi o'ynay olmayman»", '(5) «Я плохо играю»']],
      [["Tashqi ko'rinish, imo-ishora", 'Жесты, внешность'], ["Qanday turdi, qaradi?", 'Как стоял, смотрел?'], ["(2) bandni mahkam ushlab turdi", '(2) крепко сжимая лямку']],
      [["Boshqalarning munosabati", 'Реакция других'], ["Boshqalar unga qanday munosabatda?", 'Как к нему относятся другие?'], ["Matn 2, (4) Malika minnatdorchilik bildirdi", 'Текст 2, (4) Малика благодарит']],
      [["O'zgarish", 'Изменение'], ["Boshida va oxirida qanday?", 'Каким был в начале и в конце?'], ["(2) → (7) Timur to'garakka erta borishni xohlaydi", '(2) → (7) Тимур хочет пойти в кружок пораньше']],
    ], ['Xarakter qayerdan bilinadi', 'Откуда мы узнаём характер']),
    B.rule(["Xarakter haqidagi javob formulasi: **belgi + dalil + izoh**. «Sardor — mehribon (belgi), chunki u Timurga o'zi ham birinchi o'yinda yutqazganini aytdi (dalil, 6-gap); shu bilan u Timurni dalda berdi (izoh)». Bitta harakat — taxmin, ikki-uch dalil — ishonchli xulosa.", 'Формула ответа о характере: **черта + доказательство + пояснение**. «Сардор — добрый (черта), потому что рассказал Тимуру, что и сам проигрывал (доказательство, предложение 6); так он поддержал новенького (пояснение)». Один поступок — догадка, два-три доказательства — надёжный вывод.']),
    B.example(["Matn 1: Timur hikoya boshida qanday his qiladi? Qaysi gaplar buni isbotlaydi?", 'Текст 1: что чувствует Тимур в начале рассказа? Какие предложения это доказывают?'], [
      ["Imo-ishorani qidiramiz: (2) «eshik oldida to'xtab, bandni mahkam ushlab turdi» — odam xavotirlansa shunday qiladi.", 'Ищем жесты: (2) «остановился у двери, крепко сжимая лямку» — так ведёт себя тот, кто волнуется.'],
      ["Nutqni tekshiramiz: (5) «Men yaxshi o'ynay olmayman», «yerga qarab» — o'ziga ishonmaslik.", 'Проверяем речь: (5) «Я плохо играю», «опустил глаза» — неуверенность в себе.'],
      ["Ikki dalil bir xil xulosaga olib keladi.", 'Два доказательства ведут к одному выводу.'],
    ], ["Xavotirda, o'ziga ishonmaydi (2- va 5-gaplar)", 'Волнуется, не уверен в себе (предложения 2 и 5)']),
    B.example(["Matn 1: Sardor qanday bola? Belgi + dalil + izoh bilan javob bering.", 'Текст 1: какой Сардор? Ответьте по схеме «черта + доказательство + пояснение».'], [
      ["Harakatlar: (4) o'zi o'yinga taklif qildi; (6) donalarni terib, qo'lidan tortdi.", 'Поступки: (4) сам пригласил играть; (6) расставил фигуры, потянул за руку.'],
      ["Nutq: (6) o'z muvaffaqiyatsizligini kulib aytdi — Timur uyalmasligi uchun.", 'Речь: (6) со смехом рассказал о своей неудаче — чтобы Тимуру не было стыдно.'],
      ["Belgini nomlaymiz: do'stona, g'amxo'r (yangi bolani qo'llab-quvvatlaydi).", 'Называем черту: дружелюбный, отзывчивый (поддерживает новенького).'],
    ], ["Do'stona va g'amxo'r: taklif qildi (4), o'z xatosini aytib dalda berdi (6)", 'Дружелюбный и отзывчивый: пригласил (4), подбодрил, рассказав о своей ошибке (6)']),
    B.example(["Matn 2: Lolaning qaysi xususiyati eng muhim? Nega 2-gap muhim?", 'Текст 2: какое качество Лолы главное? Почему важно предложение 2?'], [
      ["Harakat: (3) ruchkani o'qituvchiga olib bordi.", 'Поступок: (3) отнесла ручку учительнице.'],
      ["(2) «hech kim yo'q edi» — uni hech kim ko'rmagan, demak, u maqtov uchun emas, vijdoni uchun shunday qildi.", '(2) «никого не было» — её никто не видел, значит, она поступила так не ради похвалы, а по совести.'],
      ["Boshqalarning munosabati: (4) Malikaning minnatdorligi — bu harakat qanchalik muhim bo'lganini ko'rsatadi.", 'Реакция других: (4) благодарность Малики показывает, как важен был поступок.'],
    ], ["Halollik: hech kim ko'rmaganda ham to'g'ri ish qildi (2–3)", 'Честность: поступила правильно, даже когда никто не видел (2–3)'], ["Muqobil to'g'ri javob: «boshqalar haqida o'ylaydi» — (3) «kimdir qidirayotgandir».", 'Допустимый ответ: «думает о других» — (3) «кто-то, наверное, ищет».']),
    B.exception(null, [
      ["His-tuyg'u ≠ xarakter: Timur (2) da xavotirda, lekin bu uning doimiy «qo'rqoqligi» degani emas — (7) da u o'zgaradi.", 'Чувство ≠ характер: в (2) Тимур волнуется, но это не значит, что он всегда «трус» — в (7) он меняется.'],
      ["Qahramonning o'z gapi har doim ham haqiqat emas: Timur «yaxshi o'ynay olmayman» deydi — bu uning o'zi haqidagi fikri.", 'Слова героя о себе — не всегда правда: Тимур говорит «я плохо играю» — это его мнение о себе.'],
    ]),
    B.mistake(null, [
      ["Dalilsiz belgi: «Sardor yaxshi» — qaysi gap? qanday yaxshi?", 'Черта без доказательства: «Сардор хороший» — какое предложение? в чём хороший?'],
      ["Juda umumiy so'zlar («yaxshi», «yomon») o'rniga aniq belgilar (do'stona, halol, uyatchan) ishlatish kerak.", 'Вместо общих слов («хороший», «плохой») нужны точные черты (дружелюбный, честный, застенчивый).'],
      ["Belgini harakat bilan aralashtirish: «Lola — ruchka topgan» — bu voqea, xarakter emas.", 'Путать черту с событием: «Лола — нашла ручку» — это событие, а не характер.'],
    ]),
    B.apply(["Imtihonda: savolda «qanday», «nega shunday qildi», «nimani ko'rsatadi» so'zlari bo'lsa — bu xarakter haqidagi savol. Variantlardan matndagi harakat bilan tasdiqlanadiganini tanlang; matnda dalili yo'q «chiroyli» variantlardan qoching.", 'На экзамене: если в вопросе есть «какой», «почему так поступил», «что показывает» — это вопрос о характере. Выбирайте вариант, который подтверждается поступком в тексте; избегайте «красивых» вариантов без доказательства.']),
    B.try(cq('a-r-chr-t1', '1.4.2', { ...R(CH), d: 2, rule: ["Xarakter — harakat va nutqdan.", 'Характер — из поступков и речи.'] },
      ["«Birinchi mashg'ulot» matnining 7-gapi Timur haqida nimani ko'rsatadi?", 'Что показывает предложение 7 текста «Первое занятие» о Тимуре?'],
      [[["U endi to'garakka borishni xohlaydi — xavotiri o'tib ketgan", 'Теперь он хочет идти в кружок — его волнение прошло']], [["U to'garakni yoqtirmaydi", 'Он не любит кружок'], ["Aksincha, erta borishni xohlaydi.", 'Наоборот, он хочет прийти пораньше.']], [["U onasidan qo'rqadi", 'Он боится маму'], ["Matnda bunga dalil yo'q.", 'В тексте нет доказательства.']], [["U doim erta turadi", 'Он всегда рано встаёт'], ["Gap faqat ertangi kun haqida.", 'Речь только о завтрашнем дне.']]],
      'A', ["(2) dagi xavotir bilan (7) ni solishtirsak, qahramon o'zgargan: endi u to'garakka intiladi.", 'Если сравнить волнение в (2) и предложение (7), герой изменился: теперь он стремится в кружок.'])),
    B.method(["Bolalarni xarakterni tahlil qilishga o'rgatish:", 'Как учить детей анализировать характер:'], [
      ["«Dalil zanjiri» jadvali: chap ustunda belgi, o'ngda matndagi gap (raqami bilan).", 'Таблица «Цепочка доказательств»: слева черта, справа предложение текста (с номером).'],
      ["Belgilar lug'ati: doskaga 15–20 ta aniq so'z (mehribon, sabrli, maqtanchoq...) — bolalar «yaxshi/yomon» dan chiqadi.", 'Словарик черт на доске: 15–20 точных слов (добрый, терпеливый, хвастливый...) — дети уходят от «хороший/плохой».'],
      ["Rolli o'qish: qahramon so'zlarini turli ohangda o'qib, qaysi ohang matnga mos ekanini muhokama qilish.", 'Чтение по ролям: прочитать реплику разной интонацией и обсудить, какая подходит к тексту.'],
      ["«Boshida — oxirida» savoli: qahramon o'zgardimi? Qaysi gap buni ko'rsatadi?", 'Вопрос «В начале — в конце»: изменился ли герой? Какое предложение это показывает?'],
    ]),
    B.summary(null, [
      ["Xarakter harakat, nutq, imo-ishora, boshqalarning munosabati va o'zgarishdan aniqlanadi.", 'Характер определяют по поступкам, речи, жестам, реакции других и изменению героя.'],
      ["Javob: belgi + dalil (gap raqami) + izoh.", 'Ответ: черта + доказательство (номер предложения) + пояснение.'],
      ["His-tuyg'u — vaqtinchalik, xarakter — barqaror.", 'Чувство — временное, черта характера — устойчивая.'],
    ]),
  ],
  check: [
    cq('a-r-chr-c1', '1.4.2', { ...R(CH) }, ["«Birinchi mashg'ulot»: qaysi gap Timurning xavotirini imo-ishora orqali ko'rsatadi?", '«Первое занятие»: какое предложение показывает волнение Тимура через жест?'],
      [[["2-gap: bandni mahkam ushlab turdi", 'Предложение 2: крепко сжимал лямку']], [["3-gap", 'Предложение 3'], ["Bu murabbiyning harakati.", 'Это действие тренера.']], [["4-gap", 'Предложение 4'], ["Bu Sardorning savoli.", 'Это вопрос Сардора.']], [["7-gap", 'Предложение 7'], ["Bu yerda xavotir emas, intilish bor.", 'Здесь не волнение, а желание прийти в кружок.']]],
      'A', ["Mahkam ushlash, eshik oldida to'xtash — xavotir belgisi.", 'Сжимать лямку, остановиться у двери — признаки волнения.']),
    cq('a-r-chr-c2', '1.4.2', { ...R(CH) }, ["Sardor nega o'zining yutqazganini aytdi?", 'Зачем Сардор рассказал, что сам проиграл?'],
      [[["Timur uyalmasin va o'zini yolg'iz his qilmasin deb", 'Чтобы Тимуру не было стыдно и одиноко']], [["Maqtanish uchun", 'Чтобы похвастаться'], ["Yutqazish bilan maqtanilmaydi.", 'Проигрышем не хвастаются.']], [["Timurni kulgiga qoldirish uchun", 'Чтобы посмеяться над Тимуром'], ["U o'zi ustidan kuldi va Timurni o'yinga tortdi.", 'Он смеялся над собой и позвал Тимура играть.']], [["Shaxmatni yoqtirmagani uchun", 'Потому что не любит шахматы'], ["U o'zi o'yinga taklif qildi (4).", 'Он сам предложил сыграть партию (4).']]],
      'A', ["Harakat (qo'lidan tortdi) va so'z birgalikda dalda berishni ko'rsatadi.", 'Слова и поступок (потянул за руку) вместе показывают поддержку.']),
    cq('a-r-chr-c3', '1.4.2', { ...R(CH) }, ["«Ruchka» matni: Lolaning halolligini eng kuchli isbotlaydigan juftlik qaysi?", '«Ручка»: какая пара предложений сильнее всего доказывает честность Лолы?'],
      [[["2- va 3-gaplar: hech kim yo'q edi, lekin ruchkani topshirdi", 'Предложения 2 и 3: никого не было, но она отдала ручку']], [["1-gap", 'Предложение 1'], ["Topish — voqea, xarakter emas.", 'Найти — событие, а не черта.']], [["4-gap", 'Предложение 4'], ["Bu Malikaning his-tuyg'usi.", 'Это чувство Малики.']], [["Sarlavha", 'Заголовок'], ["Sarlavhada xarakter haqida ma'lumot yo'q.", 'В заголовке нет сведений о характере.']]],
      'A', ["Hech kim ko'rmaganda to'g'ri ish qilish — halollikning eng kuchli dalili.", 'Поступить правильно, когда никто не видит, — самое сильное доказательство честности.']),
    cq('a-r-chr-c4', '1.4.1', { ...R(CH) }, ["Qaysi so'z his-tuyg'uni emas, xarakter belgisini bildiradi?", 'Какое слово называет черту характера, а не чувство?'],
      [[["Halol", 'Честный']], [["Xafa", 'Обиженный'], ["Bu vaqtinchalik holat.", 'Это временное состояние.']], [["Quvongan", 'Обрадованный'], ["Bu vaqtinchalik holat.", 'Это временное состояние.']], [["Hayron", 'Удивлённый'], ["Bu bir lahzalik his.", 'Это мгновенное чувство.']]],
      'A', ["Xarakter — barqaror xususiyat; xafa, quvongan, hayron — bir lahzalik holat.", 'Черта — устойчивое качество; обижен, рад, удивлён — состояния.']),
    cq('a-r-chr-c5', '1.4.5', { ...R(CH) }, ["O'quvchi yozdi: «Sardor — yaxshi bola». Qanday fikr-mulohaza (feedback) eng foydali?", 'Ученик написал: «Сардор — хороший мальчик». Какая обратная связь полезнее всего?'],
      [[["«Qanday yaxshi? Aniq so'z tanla va uni isbotlaydigan gap raqamini yoz»", '«В чём хороший? Подбери точное слово и укажи номер предложения-доказательства»']], [["«Noto'g'ri»", '«Неверно»'], ["Javob noto'g'ri emas, faqat to'liq emas; nima qilish kerakligi aytilmagan.", 'Ответ не ошибочен, а неполон; не сказано, что делать.']], [["«Yaxshi, 5 baho»", '«Молодец, пять»'], ["Dalilsiz javob to'liq emas.", 'Ответ без доказательства неполный.']], [["To'g'ri javobni o'zi yozib berish", 'Самому написать правильный ответ'], ["Bola o'zi fikrlamaydi.", 'Ребёнок не думает сам.']]],
      'A', ["Formativ izoh keyingi qadamni ko'rsatadi: aniq belgi + dalil.", 'Формирующий комментарий показывает следующий шаг: точная черта + доказательство.']),
  ],
});

/* ======================= 2. Author's position, fact vs opinion ======================= */
const AU = 'read-author-fact';
export const READ_AUTHOR_FACT = lesson({
  id: AU, module: 'read-core', level: 'core', stage: 'B', minutes: 20, codes: ['1.2.8', '1.4.2', '1.4.5'], requires: [CH], sourceIds: SRC,
  title: ["Muallif pozitsiyasi. Fakt va fikr", 'Позиция автора. Факт и мнение'],
  blocks: [
    B.intro(["Reklama, maqola, ijtimoiy tarmoqdagi post — har bir matn ortida o'z fikrini bildirayotgan muallif turadi. Kitobxon «bu tekshirsa bo'ladigan fakt» va «bu muallifning fikri» ni ajrata olsa, uni osonlikcha aldab bo'lmaydi. PIRLS ning 4-jarayoni (baholash) aynan shuni tekshiradi.", 'Реклама, статья, пост — за каждым текстом стоит автор со своим мнением. Читателя, который различает «проверяемый факт» и «мнение автора», трудно обмануть. Четвёртый процесс PIRLS (оценивание) проверяет именно это.']),
    B.definition(["**Fakt** — tekshirib ko'rsa bo'ladigan ma'lumot (sanash, o'lchash, kuzatish, ishonchli manbadan bilish mumkin). **Fikr** — kimningdir bahosi, ishonchi yoki taklifi; uni isbotlab bo'lmaydi, faqat asoslash mumkin. **Muallif pozitsiyasi** — muallifning mavzuga munosabati: u nimani to'g'ri deb hisoblaydi va o'quvchini nimaga ishontirmoqchi.", '**Факт** — сведения, которые можно проверить (посчитать, измерить, увидеть, узнать из надёжного источника). **Мнение** — чья-то оценка, убеждение или предложение; его нельзя доказать, можно только обосновать. **Позиция автора** — отношение автора к теме: что он считает правильным и в чём хочет убедить читателя.']),
    B.explain(GARDEN, undefined, ['Matn', 'Текст']),
    B.table([['Fikr belgisi', 'Признак мнения'], ['Misollar', 'Примеры']], [
      [["Kirish so'zlari", 'Вводные слова'], ["menimcha, fikrimcha, ishonamanki", 'по-моему, я считаю, я уверен']],
      [["Baho so'zlari", 'Оценочные слова'], ["eng yaxshi, qiziqarli, zerikarli, chiroyli", 'лучший, интересный, скучный, красивый']],
      [["Majburiyat, taklif", 'Долженствование, призыв'], ["kerak, lozim, keling", 'должен, нужно, давайте']],
      [["Umumlashtirish", 'Обобщение'], ["hamma, hech kim, har doim", 'все, никто, всегда']],
    ], ["Fikrni qanday tanish mumkin", 'Как распознать мнение']),
    B.rule(["Tekshirish savoli: «Buni sanab, o'lchab yoki kuzatib tekshira olamanmi?» Ha — fakt (hatto noto'g'ri bo'lsa ham, u fakt-da'vo: tekshirib, rost yoki yolg'onligini bilamiz). Yo'q, bu kimningdir bahosi — fikr. Muallif pozitsiyasini topish uchun: fikr gaplarini yig'ing va «Muallif nimani istaydi?» deb so'rang.", 'Проверочный вопрос: «Могу ли я это посчитать, измерить или увидеть?» Да — факт (даже ложный — это фактическое утверждение: его можно проверить и узнать, истинно ли оно). Нет, это чья-то оценка — мнение. Чтобы найти позицию автора, соберите предложения-мнения и спросите: «Чего хочет автор?»']),
    B.example(["«Maktab bog'i» matnidagi 1-, 2- va 4-gaplar fakt yoki fikr?", 'Предложения 1, 2 и 4 текста «Школьный сад» — факты или мнения?'], [
      ["(1) 12 ta daraxt — sanab tekshirish mumkin → fakt.", '(1) 12 деревьев — можно посчитать → факт.'],
      ["(2) 80 kg olma — o'lchangan → fakt.", '(2) 80 кг яблок — измерено → факт.'],
      ["(4) Daraxtlar soya beradi — kuzatib tekshirish mumkin → fakt.", '(4) Деревья дают тень — можно увидеть → факт.'],
    ], ['Uchalasi ham fakt', 'Все три — факты']),
    B.example(["3-, 5- va 6-gaplarni tahlil qiling.", 'Разберите предложения 3, 5 и 6.'], [
      ["(3) «Menimcha... bo'lishi kerak» — kirish so'zi va majburiyat → fikr.", '(3) «По-моему... должен быть» — вводное слово и долженствование → мнение.'],
      ["(5) «Bog'da ishlagan bola mehnatni qadrlashni o'rganadi» — umumiy da'vo, har bir bolada tekshirib bo'lmaydi; bu muallifning ishonchi → fikr (asos sifatida).", '(5) «Ребёнок, работающий в саду, учится ценить труд» — общее утверждение, его нельзя проверить для каждого ребёнка; это убеждение автора → мнение (как довод).'],
      ["(6) «eng qiziqarli» — baho so'zi; boshqa bola uchun eng qiziqarli — sport → fikr.", '(6) «самое интересное» — оценка; для другого ребёнка интереснее спорт → мнение.'],
    ], ['Uchalasi ham fikr', 'Все три — мнения']),
    B.example(["Muallifning pozitsiyasi qanday va u uni qanday asoslaydi?", 'Какова позиция автора и как он её обосновывает?'], [
      ["Asosiy fikr — (3): har bir maktabda bog' bo'lishi kerak.", 'Главное мнение — (3): сад должен быть в каждой школе.'],
      ["Asoslar: faktlar (1, 2, 4) — bog' foydali va hosil beradi; fikrlar (5, 6) — tarbiyaviy va qiziqarli.", 'Доводы: факты (1, 2, 4) — сад полезен и даёт урожай; мнения (5, 6) — воспитывает и интересен.'],
      ["Muallif faktlar yordamida o'z fikriga ishontirmoqchi.", 'Автор использует факты, чтобы убедить в своём мнении.'],
    ], ["Muallif maktab bog'ini qo'llab-quvvatlaydi va boshqa maktablarga ham tavsiya qiladi", 'Автор поддерживает школьные сады и предлагает завести их всем школам']),
    B.exception(null, [
      ["Noto'g'ri fakt ham «fakt-da'vo» bo'ladi: «Toshkentda 100 million odam yashaydi» — tekshirsa bo'ladi va bu yolg'on. Fikrni esa rost/yolg'on deb tekshirib bo'lmaydi.", 'Ложное утверждение тоже относится к фактическим: «В Ташкенте живут 100 миллионов человек» — проверяется и оказывается ложью. Мнение же нельзя проверить на истинность.'],
      ["Bitta gapda ikkalasi bo'lishi mumkin: «12 ta chiroyli daraxt» — soni fakt, «chiroyli» — baho.", 'В одном предложении бывает и то и другое: «12 красивых деревьев» — число факт, «красивые» — оценка.'],
    ]),
    B.mistake(null, [
      ["«Men rozi bo'lgan gap — fakt»: o'quvchining roziligi gapni faktga aylantirmaydi.", '«С чем я согласен — факт»: согласие читателя не делает мнение фактом.'],
      ["Raqam bor gapni avtomatik fakt deb hisoblash: «90% bolalar matematikani yoqtiradi, menimcha» — fikr.", 'Считать фактом любое предложение с числом: «по-моему, 90% детей любят математику» — мнение.'],
      ["Qahramonning fikrini muallif pozitsiyasi deb olish (badiiy matnda ular farq qilishi mumkin).", 'Принимать мнение героя за позицию автора (в художественном тексте они могут не совпадать).'],
    ]),
    B.apply(["Kundalik hayotda: ota-onalar chatidagi xabar, reklama, yangilik — «Bu kim aytgan fikr va qaysi faktga tayanadi?» savoli media-savodxonlikning asosi.", 'В жизни: сообщение в родительском чате, реклама, новость — вопрос «Чьё это мнение и на какие факты оно опирается?» лежит в основе медиаграмотности.']),
    B.try(cq('a-r-aut-t1', '1.4.2', { ...R(AU), d: 2, rule: ["Tekshirsa bo'ladi — fakt; baho — fikr.", 'Проверяется — факт; оценка — мнение.'] },
      ["Qaysi gap — fikr?", 'Какое предложение — мнение?'],
      [[["Futbol — dunyodagi eng zo'r o'yin.", 'Футбол — лучшая игра на свете.']], [["Futbol jamoasida 11 nafar o'yinchi maydonga tushadi.", 'В футбольной команде на поле выходят 11 игроков.'], ["Qoidalardan tekshirsa bo'ladi — fakt.", 'Проверяется по правилам — факт.']], [["Futbol to'pi dumaloq.", 'Футбольный мяч круглый.'], ["Kuzatib tekshirsa bo'ladi.", 'Проверяется наблюдением.']], [["Bir o'yin 90 daqiqa davom etadi.", 'Матч длится 90 минут.'], ["Qoidalarda belgilangan — fakt.", 'Установлено правилами — факт.']]],
      'A', ["«Eng zo'r» — baho so'zi; boshqalar boshqa o'yinni tanlashi mumkin.", '«Лучшая» — оценочное слово; другие могут выбрать другую игру.'])),
    B.method(["Fakt va fikrni farqlashni o'rgatish:", 'Как учить различать факт и мнение:'], [
      ["«Svetofor» o'yini: o'qituvchi gap o'qiydi, bolalar yashil (fakt) yoki qizil (fikr) kartochka ko'taradi va sababini aytadi.", 'Игра «Светофор»: учитель читает предложение, дети поднимают зелёную (факт) или красную (мнение) карточку и объясняют почему.'],
      ["Bir mavzuda ikki gap yozish: «Mushuk — sut emizuvchi» / «Mushuk — eng yaxshi uy hayvoni».", 'Написать на одну тему два предложения: «Кошка — млекопитающее» / «Кошка — лучшее домашнее животное».'],
      ["Fikrni asoslash mashqi: «Menimcha..., chunki (fakt)...» — bola fikr bildirishni ham, uni dalillashni ham o'rganadi.", 'Упражнение «Обоснуй мнение»: «По-моему..., потому что (факт)...» — ребёнок учится и высказывать мнение, и подкреплять его.'],
    ]),
    B.summary(null, [
      ["Fakt — tekshiriladi; fikr — baholanadi va asoslanadi.", 'Факт — проверяется; мнение — оценивается и обосновывается.'],
      ["Fikr belgilari: menimcha, eng, kerak, hamma.", 'Признаки мнения: по-моему, самый, должен, все.'],
      ["Muallif pozitsiyasi = asosiy fikr + uni qo'llab-quvvatlovchi dalillar.", 'Позиция автора = главное мнение + доводы в его поддержку.'],
    ]),
  ],
  check: [
    cq('a-r-aut-c1', '1.2.8', { ...R(AU) }, ["«Maktab bog'i» matnidagi qaysi gap fakt?", 'Какое предложение текста «Школьный сад» — факт?'],
      [[["2-gap: 80 kilogramm olma terildi", 'Предложение 2: собрали 80 кг яблок']], [["3-gap", 'Предложение 3'], ["«Menimcha» — fikr.", '«По-моему» — мнение.']], [["6-gap", 'Предложение 6'], ["«Eng qiziqarli» — baho.", '«Самое интересное» — оценка.']], [["5-gap", 'Предложение 5'], ["Umumiy ishonch, tekshirib bo'lmaydi.", 'Общее убеждение, проверить нельзя.']]],
      'A', ["Massani o'lchab tekshirish mumkin.", 'Массу можно проверить измерением.']),
    cq('a-r-aut-c2', '1.4.2', { ...R(AU) }, ["Muallif nima uchun 1- va 2-gaplarni (raqamlarni) keltirgan?", 'Зачем автор приводит числа в предложениях 1 и 2?'],
      [[["O'z fikrini faktlar bilan asoslash uchun", 'Чтобы подкрепить своё мнение фактами']], [["Matematik masala tuzish uchun", 'Чтобы составить задачу'], ["Matn maqsadi — ishontirish.", 'Цель текста — убедить.']], [["Olma sotish uchun", 'Чтобы продать яблоки'], ["Matnda savdo haqida gap yo'q.", 'О продаже в тексте нет речи.']], [["Bog' yomonligini ko'rsatish uchun", 'Чтобы показать, что сад плох'], ["Raqamlar bog' foydasini ko'rsatadi.", 'Числа показывают пользу сада.']]],
      'A', ["Faktlar (1, 2) → fikr (3): har bir maktabda bog' kerak.", 'Факты (1, 2) → мнение (3): сад нужен каждой школе.']),
    cq('a-r-aut-c3', '1.4.5', { ...R(AU) }, ["Qaysi gap fikr bo'lishiga qaramay raqam saqlaydi?", 'Какое предложение — мнение, хотя в нём есть число?'],
      [[["«Menimcha, 3-sinf — maktabdagi eng qiziq yil.»", '«По-моему, 3 класс — самый интересный год в школе.»']], [["«Sinfimizda 28 o'quvchi bor.»", '«В нашем классе 28 учеников.»'], ["Sanab tekshirsa bo'ladi.", 'Можно посчитать.']], [["«Dars 45 daqiqa davom etadi.»", '«Урок длится 45 минут.»'], ["Jadvaldan tekshirsa bo'ladi.", 'Проверяется по расписанию.']], [["«Maktab 1985-yilda qurilgan.»", '«Школа построена в 1985 году.»'], ["Hujjatdan tekshirsa bo'ladi.", 'Проверяется по документам.']]],
      'A', ["Raqam bo'lishi gapni faktga aylantirmaydi: «menimcha», «eng qiziq» — fikr belgilari.", 'Число не делает предложение фактом: «по-моему», «самый интересный» — признаки мнения.']),
    cq('a-r-aut-c4', '1.4.2', { ...R(AU) }, ["«Gazlangan ichimliklar bolalar uchun eng mazali ichimlik, shuning uchun ularni har kuni ichish kerak» degan reklama haqida to'g'ri baho?", 'Как верно оценить рекламу: «Газировка — самый вкусный напиток для детей, поэтому её нужно пить каждый день»?'],
      [[["Bu fikr, va u faktlar bilan asoslanmagan", 'Это мнение, и оно не подкреплено фактами']], [["Bu fakt, chunki reklamada aytilgan", 'Это факт, раз сказано в рекламе'], ["Manba aytgani fakt qilmaydi; «eng mazali» — baho.", 'Источник не делает мнение фактом; «самый вкусный» — оценка.']], [["Bu fakt, chunki ko'p bola gazli ichimlikni yoqtiradi", 'Это факт, ведь многие дети любят газировку'], ["Yoqtirish xulosani isbotlamaydi.", 'То, что нравится, не доказывает вывод.']], [["Baholab bo'lmaydi", 'Оценить нельзя'], ["Dalil bor-yo'qligini baholash mumkin.", 'Наличие доводов можно оценить.']]],
      'A', ["«Eng mazali», «kerak» — fikr; asos sifatida birorta tekshiriladigan fakt yo'q.", '«Самый вкусный», «нужно» — мнение; проверяемых доводов нет.']),
    cq('a-r-aut-c5', '1.4.5', { ...R(AU) }, ["2-sinfda fakt/fikrni farqlashni boshlash uchun eng mos topshiriq?", 'Какое задание лучше всего подходит, чтобы начать различать факт и мнение во 2 классе?'],
      [[["Bitta mavzuda juft gaplar: «Olma — meva» / «Olma — eng mazali meva» va «tekshira olamanmi?» savoli", 'Пары предложений на одну тему: «Яблоко — фрукт» / «Яблоко — самый вкусный фрукт» и вопрос «могу ли я это проверить?»']], [["Fakt va fikr ta'rifini yod oldirish", 'Выучить определения факта и мнения'], ["Ta'rifsiz ham, misolsiz ham amaliy ko'nikma shakllanmaydi.", 'Заучивание определений без примеров не формирует навык.']], [["Gazetadan uzun maqola tahlili", 'Анализ длинной газетной статьи'], ["2-sinf uchun juda murakkab boshlanish.", 'Слишком сложное начало для 2 класса.']], [["Bolalar fikrini tanqid qilish", 'Критиковать мнения детей'], ["Maqsad — farqlash, fikrni bostirish emas.", 'Цель — различать, а не подавлять мнения.']]],
      'A', ["Minimal juftliklar farqni yaqqol ko'rsatadi, tekshirish savoli esa vosita beradi.", 'Минимальные пары наглядно показывают разницу, а вопрос-проверка даёт инструмент.']),
  ],
});

/* ======================= 3. Literary vs informational ======================= */
const TT = 'read-text-types';
export const READ_TEXT_TYPES = lesson({
  id: TT, module: 'read-core', level: 'core', stage: 'C', minutes: 18, codes: ['1.2.8', '1.4.3', '1.4.5'], requires: ['read-explicit'], sourceIds: SRC,
  title: ["Badiiy va axborot matnlari", 'Художественные и информационные тексты'],
  blocks: [
    B.intro(["Bir mavzu — chumolilar — ikki xil yozilishi mumkin: ertak sifatida yoki ensiklopediya maqolasi sifatida. Ularni bir xil o'qib bo'lmaydi: ertakda biz qahramonlar va g'oyani izlaymiz, ma'lumot matnida esa faktlarni topamiz va ishlatamiz. PIRLS ham aynan shu ikki maqsadni tekshiradi.", 'Одна тема — муравьи — может быть изложена по-разному: как сказка или как статья энциклопедии. Читать их одинаково нельзя: в сказке мы ищем героев и идею, в информационном тексте — факты, которыми можно пользоваться. PIRLS проверяет именно эти две цели чтения.']),
    B.definition(["**Badiiy matn** — muallif to'qigan voqea, qahramonlar, obrazli til; maqsadi — his qildirish va o'ylatish (ertak, hikoya, she'r, masal). **Axborot matni** — real olam haqidagi ma'lumot; maqsadi — bilim berish yoki ish ko'rsatish (maqola, yo'riqnoma, e'lon, jadval, diagramma). **Matn tuzilishi** — qismlarning tartibi: badiiyda — boshlanish, voqea rivoji, yakun; axborotda — sarlavha, kichik sarlavhalar, ro'yxatlar, rasmlar.", '**Художественный текст** — придуманные события, герои, образный язык; цель — вызвать чувства и мысли (сказка, рассказ, стихотворение, басня). **Информационный текст** — сведения о реальном мире; цель — дать знания или показать, как что-то делать (статья, инструкция, объявление, таблица, диаграмма). **Структура текста** — порядок частей: в художественном — завязка, развитие, развязка; в информационном — заголовок, подзаголовки, списки, рисунки.']),
    B.explain(ANT_TALE, undefined, ['Matn A', 'Текст А']),
    B.explain(ANT_INFO, undefined, ['Matn B', 'Текст Б']),
    B.table([['Belgi', 'Признак'], ['Badiiy (A)', 'Художественный (А)'], ['Axborot (B)', 'Информационный (Б)']], [
      [['Maqsad', 'Цель'], ["His-tuyg'u, g'oya", 'Чувства, идея'], ['Bilim, foydali ma\'lumot', 'Знания, полезные сведения']],
      [['Kim gapiradi', 'Кто говорит'], ['Qahramonlar, dialog', 'Герои, диалог'], ['Muallif, betaraf', 'Автор, нейтрально']],
      [['Til', 'Язык'], ["Obrazli: jonlantirish, sifatlashlar", 'Образный: олицетворение, эпитеты'], ['Aniq: atamalar, raqamlar', 'Точный: термины, числа']],
      [['Tuzilish', 'Структура'], ["Voqea ketma-ketligi", 'Последовательность событий'], ["Mavzu bo'yicha qismlar", 'Части по подтемам']],
      [["Qanday o'qiladi", 'Как читать'], ["Boshidan oxirigacha", 'От начала до конца'], ["Kerakli joyni qidirib (scanning)", 'Выборочно, с поиском (scanning)']],
    ], ['Solishtirish', 'Сравнение']),
    B.rule(["Turini aniqlash uchun uch savol: 1) Bu voqea to'qimami yoki real ma'lumotmi? 2) Matn kimni gapirtiryapti — qahramonlarnimi yoki muallif betaraf tushuntiryaptimi? 3) Undan nima olaman — g'oyami yoki faktmi? Diqqat: hayvon gapirsa — bu deyarli har doim badiiy matn belgisi.", 'Чтобы определить тип, задайте три вопроса: 1) Это вымышленная история или реальные сведения? 2) Кто говорит — герои или автор нейтрально объясняет? 3) Что я получаю — идею или факты? Внимание: говорящее животное почти всегда признак художественного текста.']),
    B.example(["Matn A nega badiiy? Kamida ikki dalil keltiring.", 'Почему текст А художественный? Приведите не меньше двух доказательств.'], [
      ["Jonlantirish: chumoli va ninachi gapiradi (2, 3).", 'Олицетворение: муравей и стрекоза разговаривают (2, 3).'],
      ["Voqea va yakun bor: yozda ninachi kuladi (4), qishda yordam so'raydi (5).", 'Есть сюжет и развязка: летом стрекоза смеётся (4), зимой просит помощи (5).'],
      ["G'oya to'g'ridan-to'g'ri aytilmagan: «kelajakni o'ylab mehnat qil» — kitobxon o'zi xulosa chiqaradi.", 'Идея не названа прямо: «трудись, думая о будущем» — читатель делает вывод сам.'],
    ], ["Jonlantirish, voqea, yashirin g'oya — badiiy matn", 'Олицетворение, сюжет, скрытая идея — художественный текст']),
    B.example(["Matn B dan foydalanib: chumolilar ozuqaga yo'lni qanday topadi?", 'По тексту Б: как муравьи находят дорогу к пище?'], [
      ["Bu — axborot olish savoli; matnni boshidan o'qish shart emas, kalit so'z «ozuqa» ni qidiramiz.", 'Это вопрос на извлечение информации; читаем не подряд, а ищем ключевое слово «пища».'],
      ["Dalil — 4-gap: hid izi qoldiradi.", 'Доказательство — предложение 4: оставляют пахучий след.'],
    ], ["Boshqa chumolilar qoldirgan hid izi bo'yicha", 'По пахучему следу, оставленному другими муравьями']),
    B.example(["Ikki matnni birlashtiring: Matn A dagi chumolining «bug'doy donini sudrab borishi» Matn B dagi qaysi fakt bilan mos keladi?", 'Свяжите тексты: какой факт текста Б согласуется с тем, что муравей в тексте А «тащил зерно больше себя»?'], [
      ["Matn A, 1-gap: don chumolidan katta.", 'Текст А, предложение 1: зерно больше муравья.'],
      ["Matn B, 2-gap: chumoli o'zidan bir necha barobar og'ir yuk ko'taradi.", 'Текст Б, предложение 2: муравей поднимает груз в несколько раз тяжелее себя.'],
      ["Xulosa: ertakdagi tafsilot real faktga asoslangan — bu matnlararo bog'lash (PIRLS 3-jarayoni).", 'Вывод: деталь сказки опирается на реальный факт — это связывание текстов (3-й процесс PIRLS).'],
    ], ['Matn B, 2-gap', 'Текст Б, предложение 2']),
    B.exception(null, [
      ["Aralash matnlar bor: ilmiy-ommabop hikoya (qahramon orqali fakt beriladi). Turini asosiy maqsad hal qiladi.", 'Бывают смешанные тексты: научно-познавательный рассказ (факты через героя). Тип определяет главная цель.'],
      ["She'r ham ma'lumot berishi mumkin (alifbo she'ri), lekin obrazli shakli uni badiiy qiladi.", 'Стихотворение тоже может сообщать сведения (азбука в стихах), но образная форма делает его художественным.'],
    ]),
    B.mistake(null, [
      ["Badiiy matndagi gapni real fakt deb olish: «ninachi chumolidan yordam so'raydi».", 'Принимать события сказки за реальный факт: «стрекоза просит муравья о помощи».'],
      ["Axborot matnini ertakdek boshidan oxirigacha sekin o'qish — kerakli ma'lumot uzoq qidiriladi.", 'Читать информационный текст медленно подряд, как сказку, — нужное ищется долго.'],
      ["Rasm, jadval, sarlavhalarni e'tiborsiz qoldirish — axborot matnida ular asosiy ma'lumotni beradi.", 'Пропускать рисунки, таблицы, подзаголовки — в информационном тексте они несут главное.'],
    ]),
    B.apply(["Imtihonda matn turini birinchi bo'lib aniqlang: badiiy bo'lsa — qahramon, sabab, g'oya savollariga tayyor bo'ling; axborot bo'lsa — kalit so'z bo'yicha qidiring, jadval va rasm izohlarini o'qing.", 'На экзамене сначала определите тип текста: если художественный — готовьтесь к вопросам о героях, причинах, идее; если информационный — ищите по ключевым словам, читайте подписи к таблицам и рисункам.']),
    B.try(cq('a-r-typ-t1', '1.2.8', { ...R(TT), d: 1, rule: ["Maqsad turini belgilaydi.", 'Тип определяется целью.'] },
      ["Qaysi matn axborot matni?", 'Какой текст — информационный?'],
      [[["Shahar avtobusi jadvali va yo'nalish xaritasi", 'Расписание городского автобуса и схема маршрута']], [["Bo'ri va tulki haqidagi ertak", 'Сказка о волке и лисе'], ["Hayvonlar gapiradi — badiiy.", 'Животные говорят — художественный.']], [["Kuz haqida she'r", 'Стихотворение об осени'], ["Obrazli his-tuyg'u — badiiy.", 'Образные чувства — художественный.']], [["Masal", 'Басня'], ["Ibratli voqea — badiiy.", 'Поучительная история — художественный.']]],
      'A', ["Jadval va xarita amaliy ma'lumot beradi.", 'Расписание и схема дают практические сведения.'])),
    B.method(["Matn turlarini o'rgatish:", 'Как учить типам текстов:'], [
      ["Juft matnlar: bir mavzuda ertak va ensiklopediya maqolasi; bolalar Venn diagrammasida o'xshash va farqli tomonlarni yozadi.", 'Парные тексты: сказка и статья на одну тему; дети заполняют диаграмму Венна (сходства и различия).'],
      ["«Qanday o'qiyman?» kartochkasi: badiiy — «boshidan oxirigacha, his qil»; axborot — «sarlavha, rasm, kalit so'z».", 'Карточка «Как я читаю?»: художественный — «подряд, переживай»; информационный — «заголовок, рисунок, ключевое слово».'],
      ["Haqiqiy matnlar bilan ishlash: maktab e'loni, retsept, dori yo'riqnomasi (bolalarga mos), avtobus jadvali.", 'Работа с реальными текстами: школьное объявление, рецепт, расписание автобуса.'],
    ]),
    B.summary(null, [
      ["Badiiy matn — his va g'oya; axborot matni — fakt va amaliy foyda.", 'Художественный текст — чувства и идея; информационный — факты и практическая польза.'],
      ["Tur o'qish usulini belgilaydi: to'liq o'qish yoki qidirib o'qish.", 'Тип определяет способ чтения: подряд или с поиском.'],
      ["PIRLS da ikkala tur teng ulushda.", 'В PIRLS оба типа представлены поровну.'],
    ]),
  ],
  check: [
    cq('a-r-typ-c1', '1.2.8', { ...R(TT) }, ["Matn B ning asosiy maqsadi nima?", 'Какова главная цель текста Б?'],
      [[["Chumolilar haqida real ma'lumot berish", 'Сообщить реальные сведения о муравьях']], [["Mehnatsevarlikka o'rgatuvchi voqea aytib berish", 'Рассказать поучительную историю'], ["Bu Matn A ning maqsadi.", 'Это цель текста А.']], [["Ninachini tanqid qilish", 'Покритиковать стрекозу'], ["Ninachi Matn B da yo'q.", 'В тексте Б стрекозы нет.']], [["Kulgili hikoya", 'Рассмешить читателя'], ["Matnda hazil yo'q.", 'В тексте нет юмора.']]],
      'A', ["Betaraf til, faktlar, qahramonlar yo'q — axborot matni.", 'Нейтральный язык, факты, нет героев — информационный текст.']),
    cq('a-r-typ-c2', '1.4.3', { ...R(TT) }, ["Matn A ning qaysi xususiyati uni badiiy qiladi?", 'Какая особенность делает текст А художественным?'],
      [[["Hasharotlar odamdek gapiradi", 'Насекомые разговаривают, как люди']], [["Bug'doy doni tilga olingan", 'Упомянуто зерно пшеницы'], ["Don real narsa; bu turini belgilamaydi.", 'Зерно реально; тип это не определяет.']], [["Matn qisqa", 'Текст короткий'], ["Hajm turini belgilamaydi.", 'Объём не определяет тип.']], [["Qor haqida gap bor", 'Упоминается снег'], ["Qor real hodisa.", 'Снег — реальное явление.']]],
      'A', ["Jonlantirish — badiiy matnning yaqqol belgisi.", 'Олицетворение — явный признак художественного текста.']),
    cq('a-r-typ-c3', '1.2.8', { ...R(TT) }, ["Matn B ga ko'ra chumoli uyasi qanday tuzilgan?", 'Как устроен муравейник по тексту Б?'],
      [[["Yer ostidagi ko'plab yo'lak va xonalardan", 'Из множества подземных ходов и камер']], [["Daraxt shoxidagi in", 'Гнездо на ветке'], ["Matnda bunday yo'q.", 'В тексте этого нет.']], [["Bitta katta xona", 'Одна большая камера'], ["Matnda «ko'plab» deyilgan.", 'В тексте сказано «множество».']], [["Bug'doy donlaridan", 'Из зёрен пшеницы'], ["Don — Matn A dan, uya haqida emas.", 'Зерно — из текста А и не о муравейнике.']]],
      'A', ["Dalil — Matn B, 3-gap.", 'Доказательство — текст Б, предложение 3.']),
    oq('a-r-typ-c4', '1.2.8', { ...R(TT), steps: [["Kalit so'zlar: «boshlanadi» va «tugaydi».", 'Ключевые слова: «пройдёт в» и «закончится».'], ["9:00 dan 12:00 gacha.", 'С 9:00 до 12:00.']] },
      ["«Bog'da tozalik kuni» e'loni: ish necha soat davom etadi? (son) — " + PARK[0], 'Объявление «День чистоты в парке»: сколько часов продлится работа? (число) — ' + PARK[1]],
      '3', ["E'lon — axborot matni: 1-gap (9:00) va 5-gap (12:00) birlashtiriladi, 12 − 9 = 3.", 'Объявление — информационный текст: соединяем предложения 1 (9:00) и 5 (12:00), 12 − 9 = 3.'], {}, 3),
    cq('a-r-typ-c5', '1.4.5', { ...R(TT) }, ["Axborot matnini o'qishdan oldin o'quvchilarga eng foydali ko'rsatma?", 'Какое указание полезнее всего перед чтением информационного текста?'],
      [[["Avval sarlavha, kichik sarlavhalar va rasmlarni ko'rib chiqing, keyin savoldagi kalit so'zni qidiring", 'Сначала просмотрите заголовки и рисунки, затем ищите ключевое слово из вопроса']], [["Matnni ifodali, rollarga bo'lib o'qing", 'Прочитайте выразительно по ролям'], ["Bu badiiy matn uchun usul.", 'Это приём для художественного текста.']], [["Matnni yod oling", 'Выучите текст наизусть'], ["Ma'lumot topish uchun yodlash kerak emas.", 'Для поиска сведений заучивание не нужно.']], [["Qahramon xarakterini aniqlang", 'Определите характер героя'], ["Axborot matnida qahramon yo'q.", 'В информационном тексте нет героев.']]],
      'A', ["Axborot matni tuzilishiga tayanib qidirib o'qiladi.", 'Информационный текст читают выборочно, опираясь на его структуру.']),
  ],
});

/* ======================= 4. PIRLS basics ======================= */
const PI = 'read-pirls';
export const READ_PIRLS = lesson({
  id: PI, module: 'read-core', level: 'advanced', stage: 'B+', minutes: 25, codes: ['1.4.5', '1.2.8'], requires: ['read-inference', TT], sourceIds: SRC,
  title: ["PIRLS asoslari: jarayonlar, maqsadlar, topshiriq turlari", 'Основы PIRLS: процессы, цели, форматы заданий'],
  blocks: [
    B.intro(["PIRLS (Progress in International Reading Literacy Study) — 4-sinf o'quvchilarining o'qish savodxonligini o'rganuvchi xalqaro tadqiqot. U IEA tashkiloti tomonidan har 5 yilda o'tkaziladi. Sertifikat imtihonida PIRLS bo'yicha savollar bor, sinfda esa uning topshiriqlari o'qishni o'rgatishning tayyor modeli bo'lib xizmat qiladi.", 'PIRLS (Progress in International Reading Literacy Study) — международное исследование читательской грамотности учеников 4 класса. Его проводит IEA раз в 5 лет. На сертификационном экзамене есть вопросы о PIRLS, а в классе его задания служат готовой моделью обучения чтению.']),
    B.definition(["**O'qish savodxonligi** (PIRLS ta'rifi bo'yicha) — jamiyatda talab qilinadigan va shaxs uchun qimmatli yozma til shakllarini tushunish va ulardan foydalanish qobiliyati; o'quvchi matndan ma'no yaratadi, o'rganish, kitobxonlar jamoasida ishtirok etish va zavqlanish uchun o'qiydi. **Jarayon** — matnni tushunishning aqliy harakati. **Maqsad** — nima uchun o'qiyapmiz.", '**Читательская грамотность** (по PIRLS) — способность понимать и использовать формы письменного языка, которые нужны обществу и ценны для человека; читатель строит смысл текста и читает, чтобы учиться, участвовать в сообществе читателей и для удовольствия. **Процесс** — мыслительное действие понимания. **Цель** — зачем мы читаем.']),
    B.table([['Jarayon', 'Процесс'], ['Ulush', 'Доля'], ["Savol namunasi", 'Пример вопроса']], [
      [["1. Aniq berilgan ma'lumotni topish", '1. Поиск явно заданной информации'], ['20%', '20%'], ["Timur kimning yoniga o'tirdi?", 'Рядом с кем посадили Тимура?']],
      [["2. Oddiy xulosa chiqarish", '2. Формулирование прямых выводов'], ['30%', '30%'], ["Timur nega yerga qaradi?", 'Почему Тимур опустил глаза?']],
      [["3. G'oya va ma'lumotni talqin qilish va birlashtirish", '3. Интерпретация и обобщение идей и информации'], ['30%', '30%'], ["Hikoya boshida va oxirida Timur qanday o'zgardi?", 'Как изменился Тимур от начала к концу рассказа?']],
      [["4. Mazmun va matn elementlarini baholash va tanqid qilish", '4. Оценка и критика содержания и элементов текста'], ['20%', '20%'], ["Muallif nega aynan shu sarlavhani tanlagan?", 'Почему автор выбрал такой заголовок?']],
    ], ["PIRLS ning 4 jarayoni (taxminiy ulushlar, PIRLS framework)", '4 процесса PIRLS (примерные доли, PIRLS framework)']),
    B.explain(["Ikki o'qish maqsadi teng (50% / 50%): **badiiy tajriba uchun o'qish** (hikoya, ertak) va **ma'lumot olish va undan foydalanish uchun o'qish** (maqola, e'lon, yo'riqnoma, diagramma). Topshiriq turlari: **test (variantli)** savollar — 1 ball; **ochiq javobli** savollar — qisqa (1 ball) yoki kengaytirilgan (2–3 ball). Taxminan yarmi test, yarmi ochiq javob.", 'Две цели чтения представлены поровну (50% / 50%): **чтение для получения читательского (литературного) опыта** (рассказ, сказка) и **чтение для получения и использования информации** (статья, объявление, инструкция, диаграмма). Форматы заданий: **с выбором ответа** — 1 балл; **со свободным ответом** — краткие (1 балл) или развёрнутые (2–3 балла). Примерно половина заданий — с выбором ответа, половина — со свободным.'], undefined, ['Maqsadlar va topshiriq turlari', 'Цели и форматы заданий']),
    B.rule(["Ochiq savolga javob algoritmi: 1) savoldagi buyruqni aniqlang (toping / tushuntiring / ikki sabab keltiring / solishtiring); 2) jarayonni aniqlang; 3) matnda dalilni toping; 4) to'liq gap bilan javob yozing — **da'vo + dalil**; 5) «ikkita» so'ralgan bo'lsa — ikkitasini, «matndan misol bilan» bo'lsa — iqtibos bilan.", 'Алгоритм ответа на открытый вопрос: 1) определите, что требуется (найти / объяснить / привести две причины / сравнить); 2) определите процесс; 3) найдите в тексте доказательство; 4) ответьте полным предложением — **утверждение + доказательство**; 5) если просят «два» — дайте два, если «с примером из текста» — процитируйте.']),
    B.example(["«Birinchi mashg'ulot» matni bo'yicha savol: «Sardor Timurga qanday yordam berdi? Ikkita harakatni yozing» (2 ball). Javob tuzing.", 'Вопрос к тексту «Первое занятие»: «Как Сардор помог Тимуру? Назови два поступка» (2 балла). Составьте ответ.'], [
      ["Buyruq: «ikkita harakat» — ikki faktni topish (1-jarayon, lekin ikki joydan).", 'Требование: «два поступка» — найти два факта (1-й процесс, но в двух местах).'],
      ["Dalillar: (4) o'yinga taklif qildi; (6) o'zi ham yutqazganini aytib, donalarni terdi.", 'Доказательства: (4) предложил сыграть; (6) рассказал, что сам проигрывал, и расставил фигуры.'],
      ["Javob: «Sardor Timurni o'yinga taklif qildi va o'zi ham birinchi o'yinda yutqazganini aytib dalda berdi».", 'Ответ: «Сардор предложил Тимуру сыграть и подбодрил его, рассказав, что сам проиграл первую партию».'],
    ], ["Ikkala harakat — 2 ball; bittasi — 1 ball", 'Оба поступка — 2 балла; один — 1 балл']),
    B.example(["Savolning jarayonini aniqlang: «Matn A va Matn B ni o'qib, chumolilar haqida ertakda qaysi tafsilot hayotga mos kelishini tushuntiring».", 'Определите процесс: «Прочитав тексты А и Б, объясни, какая деталь сказки о муравье соответствует действительности».'], [
      ["Ikki matnni bog'lash kerak — bu bitta gapdan topilmaydi.", 'Нужно связать два текста — ответ не находится в одном предложении.'],
      ["Ma'lumotni birlashtirish — 3-jarayon (talqin va birlashtirish).", 'Объединение информации — 3-й процесс (интерпретация и обобщение).'],
    ], ['3-jarayon', '3-й процесс']),
    B.example(["Savolning jarayonini aniqlang: «Maktab bog'i matni muallifi o'z fikrini yetarli asoslaganmi? Javobingizni tushuntiring».", 'Определите процесс: «Достаточно ли автор текста «Школьный сад» обосновал своё мнение? Объясни».'], [
      ["Savol matnning sifatiga baho berishni so'raydi, mazmunni topishni emas.", 'Вопрос требует оценить качество текста, а не найти содержание.'],
      ["Bu — 4-jarayon: baholash va tanqid. Javob: «Qisman: faktlar (12 daraxt, 80 kg olma) bor, lekin 5- va 6-gaplar faqat fikr».", 'Это 4-й процесс: оценка и критика. Ответ: «Частично: есть факты (12 деревьев, 80 кг яблок), но предложения 5 и 6 — только мнения».'],
    ], ['4-jarayon', '4-й процесс']),
    B.mistake(null, [
      ["Ochiq savolga bir so'z bilan javob berish (2–3 ballik savolda) — tushuntirish yo'q.", 'Отвечать на развёрнутый вопрос (2–3 балла) одним словом — нет объяснения.'],
      ["«Ikkita sabab» so'ralganda bitta sababni ikki xil so'z bilan takrorlash.", 'Когда просят «две причины», повторять одну причину разными словами.'],
      ["Matndan dalil o'rniga shaxsiy tajribani yozish.", 'Писать личный опыт вместо доказательства из текста.'],
      ["PIRLS ni faqat «tez o'qish» testi deb o'ylash: u o'qish tezligini emas, tushunishni o'lchaydi.", 'Думать, что PIRLS — тест на «технику чтения»: он измеряет понимание, а не скорость.'],
    ]),
    B.apply(["Sinfda har bir matnga to'rt jarayondan savollar to'plami tuzing (1 → 4). Ochiq javobli savollarga rubrika yozing: 0 — javob yo'q yoki matnga zid; 1 — da'vo bor, dalil yo'q; 2 — da'vo + dalil.", 'В классе составляйте к каждому тексту вопросы всех четырёх процессов (1 → 4). Для открытых вопросов пишите рубрику: 0 — нет ответа или противоречит тексту; 1 — есть утверждение без доказательства; 2 — утверждение + доказательство.']),
    B.widget('pirls', ["Har bir savolning PIRLS jarayonini aniqlashni mashq qiling.", 'Потренируйтесь определять процесс PIRLS для каждого вопроса.']),
    B.try(cq('a-r-prl-t1', '1.4.5', { ...R(PI), d: 2, rule: ["Bitta gapda yozilgan — 1-jarayon.", 'Записано в одном предложении — 1-й процесс.'] },
      ["«Yarmarka soat nechada boshlanadi?» savoli qaysi jarayonga tegishli (javob matnda bitta gapda yozilgan)?", 'К какому процессу относится вопрос «Во сколько начнётся ярмарка?» (ответ записан в одном предложении)?'],
      [[["Aniq berilgan ma'lumotni topish", 'Поиск явно заданной информации']], [["Oddiy xulosa", 'Прямой вывод'], ["Xulosa kerak emas — vaqt yozilgan.", 'Вывод не нужен — время записано.']], [["Talqin va birlashtirish", 'Интерпретация и обобщение'], ["Bir nechta joyni bog'lash kerak emas.", 'Связывать несколько мест не нужно.']], [["Baholash", 'Оценка'], ["Matn sifati baholanmaydi.", 'Качество текста не оценивается.']]],
      'A', ["Javob matnda to'g'ridan-to'g'ri bor.", 'Ответ прямо указан в тексте.'])),
    B.method(["PIRLS yondashuvini sinfga olib kirish:", 'Как перенести подход PIRLS в класс:'], [
      ["Har hafta bitta badiiy va bitta axborot matni (50/50 qoidasi).", 'Каждую неделю один художественный и один информационный текст (правило 50/50).'],
      ["Savollarni darajalab berish: avval 1-jarayon (ishonch hosil qilish), keyin 2–3, oxirida 4-jarayon (munozara).", 'Давать вопросы по нарастанию: сначала 1-й процесс (уверенность), затем 2–3, в конце 4-й (обсуждение).'],
      ["Yozma javob namunasi: doskada «zaif — o'rtacha — kuchli» javoblarni solishtirish; bolalar rubrika bo'yicha baholaydi.", 'Образцы письменных ответов: сравнить на доске «слабый — средний — сильный» ответ; дети оценивают по рубрике.'],
      ["Matn tashqarisida qolmaslik: «Buni matnning qayeridan bilding?» savolini odat qilish.", 'Не уходить от текста: сделать привычкой вопрос «Откуда в тексте ты это узнал?».'],
    ]),
    B.summary(null, [
      ["PIRLS — 4-sinf, har 5 yilda, IEA.", 'PIRLS — 4 класс, раз в 5 лет, IEA.'],
      ["4 jarayon: 20% · 30% · 30% · 20%; 2 maqsad: 50% · 50%.", '4 процесса: 20% · 30% · 30% · 20%; 2 цели: 50% · 50%.'],
      ["Topshiriqlar: test (1 ball) va ochiq javob (1–3 ball); javob = da'vo + dalil.", 'Задания: с выбором (1 балл) и со свободным ответом (1–3 балла); ответ = утверждение + доказательство.'],
    ]),
  ],
  check: [
    cq('a-r-prl-c1', '1.4.5', { ...R(PI) }, ["PIRLS qaysi o'quvchilarning o'qish savodxonligini o'rganadi?", 'Читательскую грамотность каких учеников изучает PIRLS?'],
      [[["4-sinf (o'qishning 4-yili) o'quvchilari", 'Учеников 4 класса (четвёртый год обучения)']], [["15 yoshli o'quvchilar", '15-летних учащихся'], ["Bu PISA tadqiqoti.", 'Это исследование PISA.']], [["1-sinf o'quvchilari", 'Первоклассников'], ["PIRLS boshlang'ich ta'lim oxirini o'lchaydi.", 'PIRLS измеряет итог начального обучения.']], [["Faqat o'qituvchilar", 'Только учителей'], ["Tadqiqot o'quvchilarni baholaydi.", 'Исследование оценивает учеников.']]],
      'A', ["PIRLS — 4-sinf o'quvchilari, har 5 yilda.", 'PIRLS — ученики 4 класса, раз в 5 лет.']),
    cq('a-r-prl-c2', '1.4.5', { ...R(PI) }, ["PIRLS dagi ikkita o'qish maqsadi qaysi?", 'Какие две цели чтения выделяет PIRLS?'],
      [[["Badiiy tajriba uchun va ma'lumot olish va undan foydalanish uchun", 'Для читательского опыта и для получения и использования информации']], [["Tez o'qish va ifodali o'qish", 'Быстрое и выразительное чтение'], ["Bu o'qish texnikasi, maqsad emas.", 'Это техника чтения, а не цели.']], [["Ovoz chiqarib va ichda o'qish", 'Вслух и про себя'], ["Bu o'qish usullari.", 'Это способы чтения.']], [["Sinfda va uyda o'qish", 'В классе и дома'], ["Bu joy, maqsad emas.", 'Это место, а не цель.']]],
      'A', ["Ikki maqsad teng ulushda: 50% / 50%.", 'Две цели поровну: 50% / 50%.']),
    cq('a-r-prl-c3', '1.4.5', { ...R(PI) }, ["«Hikoyaning sarlavhasi mos tanlanganmi? Fikringizni matndan misol bilan asoslang» — bu qaysi jarayon?", '«Удачно ли выбран заголовок рассказа? Обоснуй мнение примером из текста» — какой это процесс?'],
      [[["Mazmun va matn elementlarini baholash", 'Оценка содержания и элементов текста']], [["Aniq ma'lumotni topish", 'Поиск явной информации'], ["Javob matnda yozilmagan.", 'Ответ не записан в тексте.']], [["Oddiy xulosa", 'Прямой вывод'], ["Bu matn elementi (sarlavha) sifatini baholash.", 'Здесь оценивается элемент текста (заголовок).']], [["PIRLS da bunday jarayon yo'q", 'Такого процесса в PIRLS нет'], ["Bu 4-jarayon.", 'Это 4-й процесс.']]],
      'A', ["Sarlavha — matn elementi; uning mosligi haqida fikr — 4-jarayon.", 'Заголовок — элемент текста; суждение о его уместности — 4-й процесс.']),
    oq('a-r-prl-c4', '1.4.5', { ...R(PI), steps: [["2-jarayon — 30%, 3-jarayon — 30%.", '2-й процесс — 30%, 3-й — 30%.']] },
      ["PIRLS framework bo'yicha 2- va 3-jarayonlar birgalikda topshiriqlarning necha foizini tashkil etadi? (son)", 'Какой процент заданий по PIRLS framework приходится вместе на 2-й и 3-й процессы? (число)'],
      '60', ["30% + 30% = 60%: xulosa va talqin savollari eng ko'p.", '30% + 30% = 60%: вопросов на выводы и интерпретацию больше всего.'], { uz: ['60%'], ru: ['60%'] }, 60),
    cq('a-r-prl-c5', '1.4.5', { ...R(PI) }, ["3 ballik ochiq savolga o'quvchi bitta so'z yozdi: «Mehribon». Eng to'g'ri baho va keyingi qadam?", 'На открытый вопрос на 3 балла ученик написал одно слово: «Добрый». Как оценить и что делать дальше?'],
      [[["Qisman ball; o'quvchiga «da'vo + dalil + izoh» namunasini ko'rsatib, javobni kengaytirishni o'rgatish", 'Частичный балл; показать образец «утверждение + доказательство + пояснение» и научить разворачивать ответ']], [["To'liq ball, chunki so'z to'g'ri", 'Полный балл, раз слово верное'], ["Dalil va izoh yo'q — to'liq emas.", 'Нет доказательства и пояснения — ответ неполный.']], [["0 ball va hech narsa demaslik", '0 баллов и без комментариев'], ["To'g'ri da'vo bor; izohsiz baho o'rgatmaydi.", 'Верное утверждение есть; оценка без комментария ничему не учит.']], [["Faqat test savollarini berish", 'Давать только тесты'], ["Ochiq savollar PIRLS ning yarmini tashkil etadi.", 'Открытые вопросы — около половины PIRLS.']]],
      'A', ["Kengaytirilgan javob — da'vo, dalil, izoh; buni namuna va rubrika orqali o'rgatamiz.", 'Развёрнутый ответ — утверждение, доказательство, пояснение; учим через образец и рубрику.']),
  ],
});

export const READ3_LESSONS = [READ_CHARACTERS, READ_AUTHOR_FACT, READ_TEXT_TYPES, READ_PIRLS];
