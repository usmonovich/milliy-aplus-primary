// Pedagogy foundations and age psychology — foundation batch (equal content in uz and ru).
import { B, cq, lesson } from './build';

const PS = ['kasbstandart', 'mavlonova', 'ibragimov', 'spec2026'];
const YS = ['goziyev', 'nishanova', 'spec2026'];
const P = (l: string) => ({ lang: 'both' as const, lesson: l, src: PS });
const Y = (l: string) => ({ lang: 'both' as const, lesson: l, src: YS });

/* ======================= Pedagogy basics ======================= */
const PB = 'ped-basics';
export const PED_BASICS = lesson({
  id: PB, module: 'ped-found', level: 'intro', stage: 'F', minutes: 18, codes: ['3.1.5', '3.3.5'], sourceIds: PS,
  title: ['Pedagogika: asosiy tushunchalar', 'Педагогика: основные понятия'],
  blocks: [
    B.intro(["Pedagogika — o'qituvchi kasbining fani. Uning tushunchalari imtihon topshiriqlarida doimo uchraydi: «tarbiya» va «ta'lim», «o'qitish» va «rivojlanish» farqini bilmasdan vaziyatli savollarni ishonchli yechib bo'lmaydi.", 'Педагогика — наука профессии учителя. Её понятия постоянно встречаются в экзаменационных заданиях: не различая «воспитание» и «образование», «обучение» и «развитие», трудно уверенно решать ситуационные вопросы.']),
    B.definition(["**Pedagogika** — inson tarbiyasi, ta'limi va rivojlanishi qonuniyatlarini o'rganadigan fan. Uning predmeti — maqsadga yo'naltirilgan pedagogik jarayon.", '**Педагогика** — наука о закономерностях воспитания, образования и развития человека. Её предмет — целенаправленный педагогический процесс.']),
    B.table([['Tushuncha', 'Понятие'], ["Mazmuni", 'Суть'], ['Misol', 'Пример']], [
      [["Ta'lim", 'Образование'], ["O'qitish va tarbiya jarayoni va natijasi: bilim, ko'nikma, qadriyatlar tizimi", 'Процесс и результат обучения и воспитания: система знаний, умений, ценностей'], ["Boshlang'ich ta'lim", 'Начальное образование']],
      [["O'qitish", 'Обучение'], ["O'qituvchi va o'quvchining bilim va ko'nikmalarni egallashga qaratilgan birgalikdagi faoliyati", 'Совместная деятельность учителя и ученика по овладению знаниями и умениями'], ["Ko'paytirish jadvalini o'rganish", 'Изучение таблицы умножения']],
      [['Tarbiya', 'Воспитание'], ["Shaxsning qadriyatlari, munosabatlari va xulq-atvorini shakllantirish", 'Формирование ценностей, отношений и поведения личности'], ["Mehnatsevarlikni tarbiyalash", 'Воспитание трудолюбия']],
      [['Rivojlanish', 'Развитие'], ["Shaxsdagi miqdoriy va sifat o'zgarishlar jarayoni", 'Процесс количественных и качественных изменений в личности'], ["Tafakkurning rivojlanishi", 'Развитие мышления']],
      [['Ijtimoiylashuv', 'Социализация'], ["Jamiyat me'yorlari va rollarini o'zlashtirish", 'Усвоение норм и ролей общества'], ["Sinf jamoasida muloqot", 'Общение в классном коллективе']],
    ], ["Pedagogikaning asosiy kategoriyalari", 'Основные категории педагогики']),
    B.explain(["Pedagogik tadqiqot metodlari (o'qituvchi ham ulardan amalda foydalanadi):", 'Методы педагогического исследования (учитель тоже применяет их на практике):'], [
      ["**Kuzatish** — tabiiy sharoitda maqsadli qayd etish.", '**Наблюдение** — целенаправленная фиксация в естественных условиях.'],
      ["**Suhbat, anketa** — fikr va munosabatlarni aniqlash.", '**Беседа, анкетирование** — выяснение мнений и отношений.'],
      ["**Faoliyat mahsullarini o'rganish** — daftar, rasm, loyihalar.", '**Изучение продуктов деятельности** — тетради, рисунки, проекты.'],
      ["**Pedagogik eksperiment** — yangi usulni nazorat guruhi bilan solishtirib sinash.", '**Педагогический эксперимент** — проверка нового метода в сравнении с контрольной группой.'],
    ]),
    B.rule(["Tarbiya va o'qitish yagona pedagogik jarayonning ikki tomoni: har bir darsda ta'limiy (bilim), tarbiyaviy (munosabat) va rivojlantiruvchi (tafakkur, nutq) maqsadlar birga qo'yiladi.", 'Обучение и воспитание — две стороны единого педагогического процесса: на каждом уроке вместе ставятся образовательные (знания), воспитательные (отношения) и развивающие (мышление, речь) цели.']),
    B.example(["Vaziyatni tushuncha bilan bog'lang: «O'qituvchi guruh ishida bolalarni bir-birini tinglashga o'rgatdi».", 'Соотнесите ситуацию с понятием: «Учитель на групповой работе учил детей слушать друг друга».'], [
      ["Bilim emas, munosabat va xulq shakllanmoqda.", 'Формируются не знания, а отношения и поведение.'],
      ["Demak, bu — tarbiya (va ijtimoiylashuv).", 'Значит, это воспитание (и социализация).'],
    ], ["Tarbiya", 'Воспитание']),
    B.example(["O'qituvchi yangi o'qish usulini bir sinfda qo'llab, natijani parallel sinf natijasi bilan solishtirdi. Bu qaysi metod?", 'Учитель применил новый приём чтения в одном классе и сравнил результат с параллельным классом. Какой это метод?'], [
      ["Yangi usul sinalmoqda va nazorat guruhi bor.", 'Проверяется новый приём, и есть контрольная группа.'],
    ], ['Pedagogik eksperiment', 'Педагогический эксперимент']),
    B.example(["Darsda o'quvchilar masalani bir necha usulda yechib, eng qulayini tanladi. Qaysi maqsad amalga oshmoqda?", 'На уроке ученики решили задачу несколькими способами и выбрали удобный. Какая цель реализуется?'], [
      ["Bilim (yechim) bilan birga tafakkur — taqqoslash va tanlash rivojlanmoqda.", 'Вместе со знанием (решением) развивается мышление — сравнение и выбор.'],
    ], ['Rivojlantiruvchi maqsad', 'Развивающая цель']),
    B.mistake(null, [
      ["«Ta'lim» va «o'qitish»ni bir xil deb hisoblash: o'qitish — faoliyat, ta'lim — jarayon va natija.", 'Считать «образование» и «обучение» одним и тем же: обучение — деятельность, образование — процесс и результат.'],
      ["Tarbiyani faqat sinfdan tashqari tadbir deb bilish — tarbiya har bir darsda bo'ladi.", 'Считать воспитание только внеклассной работой — воспитание идёт на каждом уроке.'],
      ["Kuzatishni «shunchaki qarash» deb tushunish: kuzatishning maqsadi va qayd etish shakli bo'ladi.", 'Понимать наблюдение как «просто смотреть»: у наблюдения есть цель и форма фиксации.'],
    ]),
    B.try(cq('a-p-pb-t1', '3.1.5', { ...P(PB), d: 1 },
      ["Bir yil davomida o'quvchining nutqi va mantiqiy fikrlashi sifat jihatidan o'zgardi. Bu qaysi tushunchaga mos?", 'За год речь и логическое мышление ученика качественно изменились. Какому понятию это соответствует?'],
      [[["Rivojlanish", 'Развитие']], [["Tarbiya", 'Воспитание'], ["Tarbiya — qadriyat, munosabat va xulqni shakllantirish.", 'Воспитание — формирование ценностей, отношений и поведения.']], [["O'qitish", 'Обучение'], ["O'qitish — o'qituvchi va o'quvchining birgalikdagi faoliyati, natija emas.", 'Обучение — совместная деятельность учителя и ученика, а не изменение само по себе.']], [["Nazorat", 'Контроль'], ["Nazorat natijani tekshiradi, uni hosil qilmaydi.", 'Контроль проверяет результат, а не создаёт его.']]],
      'A', ["Psixik jarayonlarning sifat o'zgarishi — rivojlanish.", 'Качественные изменения психических процессов — это развитие.'])),
    B.method(["Bu bilimni amalda qo'llash:", 'Как применять эти знания на практике:'], [
      ["Dars rejasida uchta maqsadni (ta'limiy, tarbiyaviy, rivojlantiruvchi) alohida yozing.", 'В плане урока записывайте три цели (образовательную, воспитательную, развивающую) отдельно.'],
      ["O'quvchini o'rganishda bir nechta metodni birlashtiring: kuzatish + daftar tahlili + ota-ona bilan suhbat.", 'Изучая ученика, сочетайте методы: наблюдение + анализ тетрадей + беседа с родителями.'],
      ["Imtihonda: vaziyatda nima o'zgarayotganini aniqlang — bilim, munosabat yoki qobiliyat.", 'На экзамене: определите, что меняется в ситуации — знание, отношение или способность.'],
    ]),
    B.summary(null, [
      ["Pedagogika — tarbiya, ta'lim va rivojlanish fani.", 'Педагогика — наука о воспитании, образовании и развитии.'],
      ["O'qitish — faoliyat; ta'lim — jarayon va natija; tarbiya — qadriyat va xulq.", 'Обучение — деятельность; образование — процесс и результат; воспитание — ценности и поведение.'],
      ["Metodlar: kuzatish, suhbat, anketa, faoliyat mahsullari, eksperiment.", 'Методы: наблюдение, беседа, анкета, продукты деятельности, эксперимент.'],
    ]),
  ],
  check: [
    cq('a-p-pb-c1', '3.1.5', { ...P(PB), rule: ["Tarbiya — qadriyat, munosabat, xulq.", 'Воспитание — ценности, отношения, поведение.'] },
      ["O'qituvchi o'quvchilarda sinf mulkiga ehtiyotkor munosabatni shakllantirmoqda. Bu qaysi jarayon?", 'Учитель формирует у учеников бережное отношение к имуществу класса. Какой это процесс?'],
      [[['Tarbiya', 'Воспитание']], [["O'qitish", 'Обучение'], ["Bilim va ko'nikma emas, munosabat shakllanmoqda.", 'Формируются не знания и умения, а отношение.']], [['Diagnostika', 'Диагностика'], ["Hech narsa o'lchanmayapti.", 'Ничего не измеряется.']], [['Eksperiment', 'Эксперимент'], ["Usul sinalmayapti.", 'Метод не проверяется.']]],
      'A', ["Munosabat va xulqni shakllantirish — tarbiya.", 'Формирование отношения и поведения — воспитание.']),
    cq('a-p-pb-c2', '3.3.5', { ...P(PB) },
      ["O'quvchilar daftarlarini tahlil qilib, xatolar turini aniqlash qaysi metod?", 'Анализ тетрадей учеников для выявления типов ошибок — какой это метод?'],
      [[["Faoliyat mahsullarini o'rganish", 'Изучение продуктов деятельности']], [['Kuzatish', 'Наблюдение'], ["Kuzatish jarayonni tabiiy sharoitda qayd etadi, tayyor ishni emas.", 'Наблюдение фиксирует процесс в естественных условиях, а не готовую работу.']], [['Anketa', 'Анкетирование'], ["Savollarga javob olinmayapti.", 'Ответы на вопросы не собираются.']], [['Eksperiment', 'Эксперимент'], ["Yangi usul sinalmayapti.", 'Новый метод не проверяется.']]],
      'A', ["Daftar — o'quvchi faoliyatining mahsuli.", 'Тетрадь — продукт деятельности ученика.']),
    cq('a-p-pb-c3', '3.1.5', { ...P(PB) },
      ["«O'qitish» va «ta'lim» tushunchalari qanday farqlanadi?", 'Чем различаются понятия «обучение» и «образование»?'],
      [[["O'qitish — o'qituvchi va o'quvchining birgalikdagi faoliyati; ta'lim — shu faoliyat (va tarbiya) jarayoni hamda natijasi", 'Обучение — совместная деятельность учителя и ученика; образование — процесс и результат этой деятельности (и воспитания)']], [["Ular sinonim", 'Это синонимы'], ["Ular bog'liq, lekin bir xil emas.", 'Они связаны, но не тождественны.']], [["Ta'lim faqat oliy maktabda bo'ladi", 'Образование бывает только в вузе'], ["Boshlang'ich ta'lim ham ta'lim.", 'Начальное образование — тоже образование.']], [["O'qitish faqat tarbiyani o'z ichiga oladi", 'Обучение включает только воспитание'], ["O'qitish bilim va ko'nikmaga qaratilgan.", 'Обучение направлено на знания и умения.']]],
      'A', ["Faoliyat va uning natijasi.", 'Деятельность и её результат.']),
    cq('a-p-pb-c4', '3.3.5', { ...P(PB), d: 3 },
      ["O'qituvchi yangi «zigzag» usulini 3«A» sinfda qo'llab, 3«B» sinf bilan natijani solishtirdi. Bu qaysi metod?", 'Учитель применил новый приём «зигзаг» в 3 «А» и сравнил результаты с 3 «Б». Какой это метод?'],
      [[['Pedagogik eksperiment', 'Педагогический эксперимент']], [['Suhbat', 'Беседа'], ["Ma'lumot savol-javob orqali olinmayapti.", 'Данные получены не через беседу.']], [['Kuzatish', 'Наблюдение'], ["Kuzatishda shart-sharoit o'zgartirilmaydi.", 'При наблюдении условия не изменяются.']], [['Anketa', 'Анкетирование'], ["Yozma so'rov yo'q.", 'Письменного опроса нет.']]],
      'A', ["Yangi usul + nazorat sinfi = eksperiment.", 'Новый приём + контрольный класс = эксперимент.']),
    cq('a-p-pb-c5', '3.1.5', { ...P(PB) },
      ["Qaysi maqsad rivojlantiruvchi?", 'Какая цель развивающая?'],
      [[["O'quvchilarda taqqoslash va umumlashtirish ko'nikmasini rivojlantirish", 'Развивать у учеников умение сравнивать и обобщать']], [["Ko'paytirish jadvalini bilish", 'Знать таблицу умножения'], ["Bu ta'limiy maqsad.", 'Это образовательная цель.']], [["Tabiatga mehr uyg'otish", 'Воспитывать любовь к природе'], ["Bu tarbiyaviy maqsad.", 'Это воспитательная цель.']], [["Darsni o'z vaqtida tugatish", 'Закончить урок вовремя'], ["Bu tashkiliy vazifa.", 'Это организационная задача.']]],
      'A', ["Tafakkur operatsiyalari — rivojlantiruvchi maqsad.", 'Мыслительные операции — развивающая цель.']),
  ],
});

/* ======================= Didactic principles ======================= */
const DP = 'ped-principles';
export const PED_PRINCIPLES = lesson({
  id: DP, module: 'ped-found', level: 'core', stage: 'C', minutes: 20, codes: ['3.3.5', '3.1.2'], requires: [PB], sourceIds: PS,
  title: ["O'qitish tamoyillari (didaktik prinsiplar)", 'Принципы обучения (дидактические принципы)'],
  blocks: [
    B.intro(["Didaktika — o'qitish nazariyasi. Uning tamoyillari har qanday dars uchun «sifat mezonlari»: dars yaxshimi yoki yo'qmi, ko'pincha qaysi tamoyil buzilganiga qarab aniqlanadi.", 'Дидактика — теория обучения. Её принципы — «критерии качества» любого урока: удачен урок или нет, часто определяется тем, какой принцип нарушен.']),
    B.definition(["**O'qitish tamoyili** — o'qitish jarayonini tashkil etishga qo'yiladigan asosiy, boshlang'ich talab.", '**Принцип обучения** — основное исходное требование к организации процесса обучения.']),
    B.table([['Tamoyil', 'Принцип'], ['Mazmuni', 'Суть'], ['Darsda', 'На уроке']], [
      [["Ko'rgazmalilik", 'Наглядность'], ["Tushuncha sezgi tajribasiga tayanadi", 'Понятие опирается на чувственный опыт'], ["Kasrni tasma bilan ko'rsatish", 'Показ дроби на полоске']],
      [["Tushunarlilik", 'Доступность'], ["Material yosh va tayyorgarlikka mos, lekin rivojlantiradi", 'Материал соответствует возрасту и подготовке, но развивает'], ["Oddiydan murakkabga", 'От простого к сложному']],
      [["Tizimlilik va izchillik", 'Систематичность и последовательность'], ["Bilim mantiqiy tartibda, avvalgisiga tayanib beriladi", 'Знания даются в логическом порядке, с опорой на предыдущие'], ["Yuza — birliklar va ko'paytirishdan keyin", 'Площадь — после единиц и умножения']],
      [["Onglilik va faollik", 'Сознательность и активность'], ["O'quvchi tushunib, faol harakat qiladi", 'Ученик понимает и действует активно'], ["Qoidani o'zi «kashf etadi»", 'Сам «открывает» правило']],
      [["Mustahkamlik", 'Прочность'], ["Bilim uzoq saqlanadi va qo'llanadi", 'Знания долго сохраняются и применяются'], ["Oraliqli takrorlash", 'Интервальное повторение']],
      [["Ilmiylik", 'Научность'], ["Faqat ishonchli, ilmiy to'g'ri mazmun", 'Только достоверное, научно верное содержание'], ["Ta'riflarni soddalashtirib, lekin buzmasdan berish", 'Упрощать определения, не искажая']],
      [["Hayot bilan bog'liqlik", 'Связь с жизнью'], ["Bilim amaliyotda qo'llanadi", 'Знания применяются на практике'], ["Do'kon masalalari", 'Задачи «в магазине»']],
    ], ["Asosiy tamoyillar", 'Основные принципы']),
    B.rule(["Tamoyillar bir-biri bilan bog'liq va birga ishlaydi. Imtihon vaziyatida savol: «Bu yerda qaysi talab buzilgan yoki amalga oshirilgan?»", 'Принципы взаимосвязаны и работают вместе. В экзаменационной ситуации вопрос: «Какое требование здесь нарушено или реализовано?»']),
    B.example(["O'qituvchi 2-sinfda yuzani tushuntirib, o'quvchilar ko'paytirishni hali bilmasligini payqadi. Qaysi tamoyil buzilgan?", 'Учитель объяснял площадь во 2 классе и заметил, что ученики ещё не умеют умножать. Какой принцип нарушен?'], [
      ["Yangi mavzu zarur avvalgi bilimga tayanmayapti.", 'Новая тема не опирается на необходимые прежние знания.'],
    ], ['Tizimlilik va izchillik', 'Систематичность и последовательность']),
    B.example(["Bolalar qoidani yod aytadi, lekin misolda qo'llay olmaydi. Qaysi tamoyil yetarli amalga oshmagan?", 'Дети наизусть повторяют правило, но не могут применить его на примере. Какой принцип реализован недостаточно?'], [
      ["Mexanik yodlash bor, tushunish yo'q.", 'Есть механическое заучивание, нет понимания.'],
    ], ['Onglilik va faollik', 'Сознательность и активность']),
    B.example(["O'qituvchi sonlarni yaxlitlashni do'kondagi xaridlar misolida o'rgatdi. Qaysi tamoyil?", 'Учитель изучал округление чисел на примере покупок в магазине. Какой принцип?'], [
      ["Bilim hayotiy vaziyatda qo'llanmoqda.", 'Знание применяется в жизненной ситуации.'],
    ], ["Hayot bilan bog'liqlik", 'Связь с жизнью']),
    B.exception(["Ko'rgazmalilik «iloji boricha ko'p rasm» degani emas: ortiqcha yoki mavzuga aloqasiz ko'rgazma diqqatni chalg'itadi. Ko'rgazma tushunchaning muhim belgisini ko'rsatishi kerak.", 'Наглядность — это не «как можно больше картинок»: лишняя или не относящаяся к делу наглядность отвлекает. Наглядность должна показывать существенный признак понятия.']),
    B.mistake(null, [
      ["Tushunarlilikni «oson» bilan aralashtirish: haddan tashqari oson material rivojlantirmaydi.", 'Путать доступность с «лёгкостью»: слишком лёгкий материал не развивает.'],
      ["Ilmiylikni buzish: «Kvadrat to'g'ri to'rtburchak emas» kabi soddalashtirish.", 'Нарушать научность упрощениями вроде «квадрат — не прямоугольник».'],
      ["Mustahkamlikni bir martada ko'p takrorlash deb tushunish — oraliqli takrorlash samaraliroq.", 'Понимать прочность как многократное повторение за один раз — интервальное повторение эффективнее.'],
    ]),
    B.try(cq('a-p-dp-t1', '3.3.5', { ...P(DP), d: 1 },
      ["3-sinf o'quvchilariga 6-sinf darsligidagi masala berildi va hech kim yecha olmadi. Qaysi tamoyil buzilgan?", 'Третьеклассникам дали задачу из учебника 6 класса, и никто не смог её решить. Какой принцип нарушен?'],
      [[["Tushunarlilik (kuch yetarlilik)", 'Доступность']], [["Ko'rgazmalilik", 'Наглядность'], ["Muammo ko'rgazmada emas, qiyinlik darajasida.", 'Проблема не в наглядности, а в уровне трудности.']], [["Ilmiylik", 'Научность'], ["Masala ilmiy jihatdan to'g'ri bo'lishi mumkin.", 'Задача может быть научно корректной.']], [["Mustahkamlik", 'Прочность'], ["Mustahkamlik o'rganilganni saqlash haqida.", 'Прочность — о сохранении усвоенного.']]],
      'A', ["Topshiriq yosh imkoniyatlariga mos bo'lishi kerak — tushunarlilik tamoyili.", 'Задание должно соответствовать возможностям возраста — принцип доступности.'])),
    B.method(["Tamoyillarni rejalashtirishda qo'llash:", 'Как применять принципы при планировании:'], [
      ["Har bir yangi mavzudan oldin «zarur tayanch bilimlar» ro'yxatini tuzing (tizimlilik).", 'Перед каждой новой темой составляйте список «необходимых опорных знаний» (систематичность).'],
      ["Ko'rgazmani tanlashda so'rang: u qaysi muhim belgini ko'rsatadi?", 'Выбирая наглядность, спрашивайте: какой существенный признак она показывает?'],
      ["Mavzuni 1 kun, 1 hafta, 1 oydan keyin qisqa takrorlashni rejalashtiring (mustahkamlik).", 'Планируйте короткое повторение через день, неделю, месяц (прочность).'],
    ]),
    B.summary(null, [
      ["Tamoyillar — darsga qo'yiladigan asosiy talablar.", 'Принципы — основные требования к уроку.'],
      ["Ko'rgazmalilik, tushunarlilik, tizimlilik, onglilik, mustahkamlik, ilmiylik, hayot bilan bog'liqlik.", 'Наглядность, доступность, систематичность, сознательность, прочность, научность, связь с жизнью.'],
    ]),
  ],
  check: [
    cq('a-p-dp-c1', '3.3.5', { ...P(DP) },
      ["O'qituvchi bo'lishni ko'paytirish jadvali o'rganilmasdan oldin o'tdi. Qaysi tamoyil buzilgan?", 'Учитель начал деление до изучения таблицы умножения. Какой принцип нарушен?'],
      [[['Tizimlilik va izchillik', 'Систематичность и последовательность']], [["Ko'rgazmalilik", 'Наглядность'], ["Gap ko'rgazmada emas, tartibda.", 'Дело не в наглядности, а в порядке.']], [["Hayot bilan bog'liqlik", 'Связь с жизнью'], ["Gap o'rganish tartibi haqida.", 'Речь о порядке изучения.']], [['Ilmiylik', 'Научность'], ["Mazmun to'g'ri, tartib noto'g'ri.", 'Содержание верно, неверен порядок.']]],
      'A', ["Bo'lish ko'paytirishga tayanadi.", 'Деление опирается на умножение.']),
    cq('a-p-dp-c2', '3.1.2', { ...P(DP) },
      ["Qaysi holat onglilik va faollik tamoyilini amalga oshiradi?", 'Какая ситуация реализует принцип сознательности и активности?'],
      [[["O'quvchilar bir nechta misolni tahlil qilib, qoidani o'zlari ta'riflaydi", 'Ученики анализируют несколько примеров и сами формулируют правило']], [["O'quvchilar qoidani yod aytadi", 'Ученики пересказывают правило наизусть'], ["Mexanik yodlash — onglilik emas.", 'Механическое заучивание — не сознательность.']], [["O'qituvchi o'zi barcha misollarni yechadi", 'Учитель сам решает все примеры'], ["O'quvchilar passiv.", 'Ученики пассивны.']], [["Qoida doskaga yozib qo'yiladi", 'Правило записано на доске'], ["Faollik yo'q.", 'Активности нет.']]],
      'A', ["Tushunib, o'zi kashf etish.", 'Понимание и самостоятельное открытие.']),
    cq('a-p-dp-c3', '3.3.5', { ...P(DP) },
      ["O'qituvchi o'tilgan materialni 1 kun, 1 hafta va 1 oydan keyin qisqa takrorlaydi. Qaysi tamoyil?", 'Учитель кратко повторяет материал через день, неделю и месяц. Какой принцип?'],
      [[['Mustahkamlik', 'Прочность']], [["Ko'rgazmalilik", 'Наглядность'], ["Ko'rgazma haqida gap yo'q.", 'Речь не о наглядности.']], [["Tushunarlilik", 'Доступность'], ["Qiyinlik darajasi haqida emas.", 'Речь не об уровне трудности.']], [['Ilmiylik', 'Научность'], ["Mazmun to'g'riligi haqida emas.", 'Речь не о верности содержания.']]],
      'A', ["Oraliqli takrorlash bilimni mustahkamlaydi.", 'Интервальное повторение обеспечивает прочность.']),
    cq('a-p-dp-c4', '3.3.5', { ...P(DP), d: 3 },
      ["O'qituvchi «Kvadrat to'g'ri to'rtburchak emas» deb tushuntirdi. Qaysi tamoyil buzilgan?", 'Учитель объяснил: «Квадрат — не прямоугольник». Какой принцип нарушен?'],
      [[['Ilmiylik', 'Научность']], [["Tushunarlilik", 'Доступность'], ["Muammo soddalikda emas, noto'g'rilikda.", 'Проблема не в простоте, а в неверности.']], [['Mustahkamlik', 'Прочность'], ["Takrorlash haqida emas.", 'Речь не о повторении.']], [["Hayot bilan bog'liqlik", 'Связь с жизнью'], ["Bu yerda mazmun xato.", 'Здесь ошибка в содержании.']]],
      'A', ["Kvadrat — tomonlari teng to'g'ri to'rtburchak.", 'Квадрат — прямоугольник с равными сторонами.']),
    cq('a-p-dp-c5', '3.1.2', { ...P(DP) },
      ["Ko'rgazmalilik tamoyiliga eng to'g'ri mos keladigan harakat?", 'Какое действие наиболее верно отражает принцип наглядности?'],
      [[["Tushunchaning muhim belgisini ko'rsatadigan model tanlash (kasr — teng qismlarga bo'lingan tasma)", 'Выбрать модель, показывающую существенный признак понятия (дробь — полоска, разделённая на равные части)']], [["Doskaga iloji boricha ko'p rangli rasm ilish", 'Повесить на доску как можно больше ярких картинок'], ["Ortiqcha ko'rgazma chalg'itadi.", 'Избыточная наглядность отвлекает.']], [["Faqat videodan foydalanish", 'Использовать только видео'], ["Vosita emas, maqsad muhim.", 'Важно не средство, а цель.']], [["Ko'rgazmani dars oxirida ko'rsatish", 'Показывать наглядность в конце урока'], ["U tushunchani shakllantirishda kerak.", 'Она нужна при формировании понятия.']]],
      'A', ["Ko'rgazma muhim belgiga xizmat qilishi kerak.", 'Наглядность должна работать на существенный признак.']),
  ],
});

/* ======================= Lesson goals and SMART ======================= */
const GO = 'ped-goals';
export const PED_GOALS = lesson({
  id: GO, module: 'ped-lesson', level: 'core', stage: 'C', minutes: 18, codes: ['3.1.1'], requires: [PB], sourceIds: PS,
  title: ["Dars maqsadlari: Blum taksonomiyasi va SMART", 'Цели урока: таксономия Блума и SMART'],
  blocks: [
    B.intro(["Maqsad noaniq bo'lsa, dars natijasini o'lchab bo'lmaydi. Aniq maqsad — rejalashtirish, baholash va refleksiyaning boshlanish nuqtasi.", 'Если цель размыта, результат урока не измерить. Чёткая цель — отправная точка планирования, оценивания и рефлексии.']),
    B.definition(["**Dars maqsadi** — dars oxirida o'quvchi nimani bilishi va qila olishi kerakligi haqidagi aniq ta'rif. U **o'quvchi natijasi** sifatida yoziladi, o'qituvchi harakati sifatida emas.", '**Цель урока** — точное описание того, что ученик должен знать и уметь к концу урока. Она формулируется как **результат ученика**, а не действие учителя.']),
    B.table([['Daraja', 'Уровень'], ["Fe'llar", 'Глаголы'], ['Misol', 'Пример']], [
      [['Eslash', 'Запоминание'], ["aytib beradi, sanab o'tadi", 'называет, перечисляет'], ["Unlilarni sanab o'tadi", 'Перечисляет гласные']],
      [['Tushunish', 'Понимание'], ["o'z so'zlari bilan tushuntiradi", 'объясняет своими словами'], ["Nega 1/3 > 1/5 ekanini tushuntiradi", 'Объясняет, почему 1/3 > 1/5']],
      [["Qo'llash", 'Применение'], ['yechadi, foydalanadi', 'решает, применяет'], ["Yuzaga oid masala yechadi", 'Решает задачу на площадь']],
      [['Tahlil', 'Анализ'], ['taqqoslaydi, ajratadi', 'сравнивает, выделяет'], ["Ikki qahramonni taqqoslaydi", 'Сравнивает двух героев']],
      [['Baholash', 'Оценка'], ['asoslaydi, baholaydi', 'обосновывает, оценивает'], ["Yechim to'g'riligini asoslaydi", 'Обосновывает верность решения']],
      [['Yaratish', 'Создание'], ['tuzadi, yaratadi', 'составляет, создаёт'], ["Teskari masala tuzadi", 'Составляет обратную задачу']],
    ], ["Blum taksonomiyasi (qayta ko'rilgan)", 'Таксономия Блума (пересмотренная)']),
    B.rule(["SMART maqsad: **S** — aniq, **M** — o'lchanadigan (mezon bor), **A** — erishiladigan, **R** — dolzarb (dastur va ehtiyojga mos), **T** — vaqt bilan cheklangan.", 'SMART-цель: **S** — конкретная, **M** — измеримая (есть критерий), **A** — достижимая, **R** — значимая (соответствует программе и потребностям), **T** — ограниченная во времени.']),
    B.example(["«O'quvchilar kasrlarni o'rganadi» maqsadini SMART qiling.", 'Сделайте SMART-целью формулировку «Ученики изучат дроби».'], [
      ["Aniq harakat: «ulushni modelda ko'rsatadi va ikki ulushni taqqoslaydi».", 'Конкретное действие: «показывают долю на модели и сравнивают две доли».'],
      ["Mezon: «6 ta topshiriqdan kamida 5 tasi to'g'ri».", 'Критерий: «верно не менее 5 из 6 заданий».'],
      ["Muddat: «dars oxirida».", 'Срок: «к концу урока».'],
    ], ["«Dars oxirida o'quvchilar ulushni modelda ko'rsatadi va ikki ulushni taqqoslaydi: 6 ta topshiriqdan kamida 5 tasi to'g'ri»", '«К концу урока ученики показывают долю на модели и сравнивают две доли: не менее 5 из 6 заданий верно»']),
    B.example(["«O'qituvchi masalalar yechishni tushuntiradi» — nima noto'g'ri?", '«Учитель объяснит решение задач» — что не так?'], [
      ["Bu o'qituvchi harakati, o'quvchi natijasi emas.", 'Это действие учителя, а не результат ученика.'],
      ["O'lchov mezoni va muddat yo'q.", 'Нет критерия и срока.'],
    ], ["Maqsadni o'quvchi natijasi sifatida qayta yozish kerak", 'Цель нужно переписать как результат ученика']),
    B.example(["«Bolalar matematikani sevadi» maqsadi qaysi talablarni bajarmaydi?", 'Каким требованиям не отвечает цель «Дети полюбят математику»?'], [
      ["Bitta darsda o'lchab bo'lmaydi va vaqt chegarasi yo'q.", 'Не измерима за урок и не ограничена во времени.'],
      ["Bu uzoq muddatli tarbiyaviy yo'nalish bo'lishi mumkin, dars maqsadi emas.", 'Это может быть долгосрочным воспитательным ориентиром, но не целью урока.'],
    ], ["M va T", 'M и T']),
    B.mistake(null, [
      ["«Biladi», «tushunadi» kabi o'lchab bo'lmaydigan fe'llar — natijani qanday ko'rish mumkin?", 'Неизмеримые глаголы «знает», «понимает» — как увидеть результат?'],
      ["Bitta darsga haddan tashqari ko'p maqsad.", 'Слишком много целей на один урок.'],
      ["Maqsadni yozib, baholashni unga bog'lamaslik.", 'Записать цель, но не связать с ней оценивание.'],
    ]),
    B.try(cq('a-p-go-t1', '3.1.1', { ...P(GO), d: 1 },
      ["O'lchanadigan maqsad uchun qaysi fe'l mos?", 'Какой глагол подходит для измеримой цели?'],
      [[["Taqqoslaydi", 'Сравнивает']], [["Tushunadi", 'Понимает'], ["Tushunishni bevosita kuzatib bo'lmaydi.", 'Понимание нельзя наблюдать напрямую.']], [["Biladi", 'Знает'], ["Noaniq: nimani va qanday ko'rsatadi?", 'Неясно: что именно и как покажет?']], [["His qiladi", 'Чувствует'], ["Kuzatib o'lchab bo'lmaydi.", 'Нельзя наблюдать и измерить.']]],
      'A', ["Harakat fe'li (taqqoslaydi, topadi, tuzadi) natijani ko'rinadigan qiladi.", 'Глагол действия (сравнивает, находит, составляет) делает результат наблюдаемым.'])),
    B.method(["Maqsadni amalda ishlatish:", 'Как использовать цель на практике:'], [
      ["Maqsadni bolalar tilida dars boshida ayting: «Bugun biz … ni o'rganamiz va oxirida … ni qila olamiz».", 'Озвучьте цель на детском языке в начале урока: «Сегодня мы научимся … и в конце сможем …».'],
      ["Chiqish kartochkasini to'g'ridan-to'g'ri maqsad mezoni asosida tuzing.", 'Составляйте карточку выхода прямо по критерию цели.'],
      ["Refleksiyada maqsadga qayting: «Erishdikmi? Nima yordam berdi?»", 'На рефлексии возвращайтесь к цели: «Достигли? Что помогло?»'],
    ]),
    B.summary(null, [
      ["Maqsad — o'quvchi natijasi, o'lchanadigan fe'l bilan.", 'Цель — результат ученика, через измеримый глагол.'],
      ["SMART: aniq, o'lchanadigan, erishiladigan, dolzarb, muddatli.", 'SMART: конкретная, измеримая, достижимая, значимая, срочная.'],
      ["Blum darajalari — eslashdan yaratishgacha.", 'Уровни Блума — от запоминания до создания.'],
    ]),
  ],
  check: [
    cq('a-p-go-c1', '3.1.1', { ...P(GO), rule: ["Maqsad — o'quvchi natijasi + mezon + muddat.", 'Цель — результат ученика + критерий + срок.'] },
      ["Qaysi maqsad o'quvchi natijasi sifatida to'g'ri yozilgan?", 'Какая цель правильно сформулирована как результат ученика?'],
      [[["Dars oxirida o'quvchilar 5 ta so'zdan kamida 4 tasini bo'g'inlarga to'g'ri ajratadi", 'К концу урока ученики верно делят на слоги не менее 4 слов из 5']], [["O'qituvchi bo'g'inga ajratishni tushuntiradi", 'Учитель объяснит деление на слоги'], ["O'qituvchi harakati.", 'Действие учителя.']], [["O'quvchilar bo'g'inlarni yaxshi biladi", 'Ученики хорошо знают слоги'], ["O'lchab bo'lmaydi.", 'Неизмеримо.']], [["Bo'g'in mavzusini o'tish", 'Пройти тему «Слог»'], ["Natija ko'rsatilmagan.", 'Не указан результат.']]],
      'A', ["Natija, mezon va muddat bor.", 'Есть результат, критерий и срок.']),
    cq('a-p-go-c2', '3.1.1', { ...P(GO) },
      ["«Teskari masala tuzadi» qaysi Blum darajasiga mos?", 'Какому уровню Блума соответствует «составляет обратную задачу»?'],
      [[['Yaratish', 'Создание']], [['Eslash', 'Запоминание'], ["Yangi mahsulot yaratilmoqda.", 'Создаётся новый продукт.']], [['Tushunish', 'Понимание'], ["Tushuntirishdan yuqori daraja.", 'Уровень выше объяснения.']], [["Qo'llash", 'Применение'], ["Tayyor masalani yechish emas, yangisini tuzish.", 'Не решение готовой, а составление новой задачи.']]],
      'A', ["Yangi narsa tuzish — yaratish.", 'Составление нового — создание.']),
    cq('a-p-go-c3', '3.1.1', { ...P(GO) },
      ["SMART dagi «M» harfi nimani bildiradi?", 'Что означает буква «M» в аббревиатуре SMART?'],
      [[["O'lchanadigan: natijani tekshirish mezoni bor", 'Измеримая: есть критерий проверки результата']], [['Motivatsion', 'Мотивирующая'], ["M — measurable.", 'M — measurable.']], [["Murakkab", 'Сложная'], ["Murakkablik talab emas.", 'Сложность — не требование.']], [["Metodik", 'Методическая'], ["Bunday talab yo'q.", 'Такого требования нет.']]],
      'A', ["Measurable — o'lchanadigan.", 'Measurable — измеримая.']),
    cq('a-p-go-c4', '3.1.1', { ...P(GO), d: 3 },
      ["«O'quvchilar kitobga qiziqadi» maqsadining asosiy kamchiligi?", 'Главный недостаток цели «Ученики заинтересуются книгой»?'],
      [[["Bir darsda o'lchab bo'lmaydi va natija mezoni yo'q", 'Её нельзя измерить за урок, нет критерия результата']], [["Juda aniq", 'Слишком конкретная'], ["Aksincha, noaniq.", 'Наоборот, размытая.']], [["Dasturga mos emas", 'Не соответствует программе'], ["Kitobxonlik dasturga mos.", 'Читательский интерес соответствует программе.']], [["Kamchilik yo'q", 'Недостатков нет'], ["O'lchanmaydi.", 'Не измерима.']]],
      'A', ["Qiziqish — uzoq muddatli yo'nalish, dars maqsadi emas.", 'Интерес — долгосрочный ориентир, не цель урока.']),
    cq('a-p-go-c5', '3.1.1', { ...P(GO) },
      ["Maqsad va baholash qanday bog'lanishi kerak?", 'Как должны быть связаны цель и оценивание?'],
      [[["Chiqish kartochkasi aynan maqsad mezonini tekshiradi", 'Карточка выхода проверяет именно критерий цели']], [["Ular bog'lanmaydi", 'Они не связаны'], ["Baholash maqsadga erishilganini ko'rsatadi.", 'Оценивание показывает достижение цели.']], [["Baholash faqat chorak oxirida", 'Оценивание только в конце четверти'], ["Dars maqsadi dars oxirida tekshiriladi.", 'Цель урока проверяется в конце урока.']], [["Maqsad baholashdan keyin yoziladi", 'Цель пишется после оценивания'], ["Maqsad avval qo'yiladi.", 'Цель ставится заранее.']]],
      'A', ["Maqsad → mezon → tekshiruv.", 'Цель → критерий → проверка.']),
  ],
});

/* ======================= Lesson types and structure ======================= */
const LT = 'ped-lesson-types';
export const PED_LESSON_TYPES = lesson({
  id: LT, module: 'ped-lesson', level: 'core', stage: 'C', minutes: 18, codes: ['3.1.2', '3.4.1'], requires: [GO], sourceIds: PS,
  title: ['Dars turlari va tuzilishi', 'Типы и структура урока'],
  blocks: [
    B.intro(["Har bir dars bir xil qurilmaydi: yangi bilim berish darsi va nazorat darsi turli bosqichlardan iborat. Turini to'g'ri tanlash vaqtni samarali taqsimlashga yordam beradi.", 'Не все уроки строятся одинаково: урок изучения нового и контрольный урок состоят из разных этапов. Правильно выбранный тип помогает распределить время.']),
    B.definition(["**Dars** — o'qitishni tashkil etishning asosiy shakli: doimiy tarkibdagi o'quvchilar bilan, aniq vaqtda, jadval bo'yicha o'tkaziladi. **Dars turi** asosiy didaktik maqsadga ko'ra aniqlanadi.", '**Урок** — основная форма организации обучения: с постоянным составом учеников, в определённое время, по расписанию. **Тип урока** определяется главной дидактической целью.']),
    B.table([['Tur', 'Тип'], ['Asosiy maqsad', 'Главная цель']], [
      [["Yangi bilim berish", 'Изучение нового'], ["Yangi tushuncha yoki usulni o'zlashtirish", 'Освоение нового понятия или способа']],
      [["Mustahkamlash", 'Закрепление'], ["Ko'nikmani mashq bilan shakllantirish", 'Формирование умения через упражнения']],
      [["Takrorlash va umumlashtirish", 'Повторение и обобщение'], ["Bilimlarni tizimga solish", 'Систематизация знаний']],
      [['Nazorat', 'Контроль'], ["Natijani tekshirish va baholash", 'Проверка и оценка результатов']],
      [["Aralash (kombinatsiyalashgan)", 'Комбинированный'], ["Bir nechta maqsad birgalikda", 'Несколько целей вместе']],
    ], ['Dars turlari', 'Типы уроков']),
    B.explain(["Aralash darsning odatiy tuzilishi (45 daqiqa):", 'Типичная структура комбинированного урока (45 минут):'], [
      ["Tashkiliy qism va motivatsiya (2–3 daq).", 'Организационный момент и мотивация (2–3 мин).'],
      ["Bilimlarni faollashtirish, uyga vazifani tekshirish (5–7 daq).", 'Актуализация знаний, проверка домашнего задания (5–7 мин).'],
      ["Maqsad qo'yish va yangi materialni o'rganish (10–12 daq).", 'Постановка цели и изучение нового (10–12 мин).'],
      ["Yo'naltirilgan va mustaqil mashq (12–15 daq), orasida harakat pauzasi.", 'Направляемая и самостоятельная практика (12–15 мин), между ними физкультминутка.'],
      ["Refleksiya, chiqish kartochkasi, uyga vazifa (5 daq).", 'Рефлексия, карточка выхода, домашнее задание (5 мин).'],
    ]),
    B.rule(["Vaqt — taxminiy. Asosiy talab: tushuntirishdan keyin o'quvchining **o'zi ishlaydigan** vaqt bo'lishi va dars refleksiya bilan tugashi.", 'Время ориентировочное. Главное требование: после объяснения должно быть время **самостоятельной работы** ученика, и урок завершается рефлексией.']),
    B.example(["Dars maqsadi: «Ko'p xonali sonlarni ustunda qo'shishni o'zlashtirish». Dars turi?", 'Цель урока: «Освоить сложение многозначных чисел столбиком». Тип урока?'], [
      ["Yangi usul o'rganilmoqda.", 'Изучается новый способ.'],
    ], ["Yangi bilim berish (yoki aralash)", 'Изучение нового (или комбинированный)']),
    B.example(["Bo'lim oxirida o'quvchilar yozma ish bajaradi, natijalar baholanadi. Dars turi?", 'В конце раздела ученики выполняют письменную работу, результаты оцениваются. Тип урока?'], [
      ["Asosiy maqsad — natijani tekshirish.", 'Главная цель — проверить результат.'],
    ], ['Nazorat darsi', 'Контрольный урок']),
    B.example(["O'qituvchi 25 daqiqani tushuntirishga sarfladi va mustaqil ishga vaqt qolmadi. Qanday tuzatish kerak?", 'Учитель потратил 25 минут на объяснение, на самостоятельную работу времени не осталось. Как исправить?'], [
      ["Tushuntirishni namuna bilan qisqartirish (10–12 daq).", 'Сократить объяснение с образцом (10–12 мин).'],
      ["Mashq va refleksiyaga vaqtni oldindan rejalashtirish.", 'Заранее запланировать время на практику и рефлексию.'],
    ], ["Vaqtni muvozanatlash", 'Сбалансировать время']),
    B.mistake(null, [
      ["Darsni refleksiyasiz tugatish — maqsadga erishilgani noma'lum qoladi.", 'Заканчивать урок без рефлексии — неизвестно, достигнута ли цель.'],
      ["Mashqsiz «faqat tushuntirish» darsi.", 'Урок «только объяснение» без практики.'],
      ["Har bir darsni maqsadga qaramay bir xil qolipda o'tkazish.", 'Проводить все уроки по одному шаблону, независимо от цели.'],
    ]),
    B.try(cq('a-p-lt-t1', '3.1.2', { ...P(LT), d: 1 },
      ["Darsda yangi material berilmaydi: o'quvchilar bo'lim bo'yicha yozma ish bajaradi. Bu qaysi dars turi?", 'На уроке не дают нового материала: ученики выполняют письменную работу по разделу. Какой это тип урока?'],
      [[["Bilimlarni tekshirish va baholash darsi", 'Урок контроля и оценки знаний']], [["Yangi bilim berish darsi", 'Урок изучения нового'], ["Yangi material yo'q.", 'Нового материала нет.']], [["Aralash dars", 'Комбинированный урок'], ["Aralash darsda bir nechta bosqich, jumladan yangi mavzu bor.", 'В комбинированном уроке несколько этапов, включая новое.']], [["Mustahkamlash darsi", 'Урок закрепления'], ["Maqsad — mashq emas, natijani tekshirish.", 'Цель — не тренировка, а проверка результата.']]],
      'A', ["Asosiy maqsad tekshirish — dars turi shu maqsad bilan belgilanadi.", 'Главная цель — контроль; тип урока определяется целью.'])),
    B.method(["Rejalashtirishda:", 'При планировании:'], [
      ["Avval maqsadni yozing, keyin turni va bosqichlarni tanlang.", 'Сначала запишите цель, затем выберите тип и этапы.'],
      ["Har bosqich uchun vaqt va «agar …, unda …» rejasini yozing.", 'Для каждого этапа запишите время и план «если …, то …».'],
      ["1-sinfda bosqichlar qisqaroq va faoliyat almashinuvi ko'proq bo'ladi.", 'В 1 классе этапы короче, а смена деятельности чаще.'],
    ]),
    B.summary(null, [
      ["Dars turi asosiy maqsadga bog'liq.", 'Тип урока зависит от главной цели.'],
      ["Aralash dars: faollashtirish → yangi → mashq → refleksiya.", 'Комбинированный: актуализация → новое → практика → рефлексия.'],
    ]),
  ],
  check: [
    cq('a-p-lt-c1', '3.1.2', { ...P(LT) },
      ["Darsning asosiy maqsadi — o'rganilgan qoidani ko'p mashqlar bilan ko'nikmaga aylantirish. Bu qaysi tur?", 'Главная цель урока — превратить изученное правило в навык с помощью упражнений. Какой это тип?'],
      [[['Mustahkamlash darsi', 'Урок закрепления']], [['Nazorat darsi', 'Контрольный урок'], ["Maqsad tekshirish emas, mashq.", 'Цель — не проверка, а тренировка.']], [["Yangi bilim berish", 'Изучение нового'], ["Qoida allaqachon o'rganilgan.", 'Правило уже изучено.']], [['Umumlashtirish', 'Обобщение'], ["Tizimga solish emas.", 'Не систематизация.']]],
      'A', ["Mashq orqali ko'nikma — mustahkamlash.", 'Навык через упражнения — закрепление.']),
    cq('a-p-lt-c2', '3.1.2', { ...P(LT) },
      ["Aralash darsning qaysi bosqichlar ketma-ketligi to'g'ri?", 'Какая последовательность этапов комбинированного урока верна?'],
      [[["Tashkiliy qism → faollashtirish → yangi material → mashq → refleksiya", 'Оргмомент → актуализация → новое → практика → рефлексия']], [["Refleksiya → yangi material → tashkiliy qism", 'Рефлексия → новое → оргмомент'], ["Mantiqsiz tartib.", 'Нелогичный порядок.']], [["Mashq → maqsad qo'yish → faollashtirish", 'Практика → постановка цели → актуализация'], ["Maqsad mashqdan oldin qo'yiladi.", 'Цель ставится до практики.']], [["Yangi material → uyga vazifa → tashkiliy qism", 'Новое → домашнее задание → оргмомент'], ["Tashkiliy qism boshida bo'ladi.", 'Оргмомент — в начале.']]],
      'A', ["Mantiqiy tartib maqsadga erishishga yordam beradi.", 'Логичный порядок помогает достичь цели.']),
    cq('a-p-lt-c3', '3.4.1', { ...P(LT), d: 3 },
      ["Darsning 30-daqiqasida rejalashtirilgan mashqlarning faqat bittasi bajarilgan. To'g'ri qaror?", 'На 30-й минуте выполнено лишь одно из запланированных упражнений. Верное решение?'],
      [[["Asosiy maqsad uchun eng muhim mashqni qoldirib, refleksiyaga vaqt ajratish", 'Оставить самое важное для цели упражнение и сохранить время на рефлексию']], [["Barcha mashqlarni tez bajartirish", 'Быстро прогнать все упражнения'], ["Sifat va tushunish yo'qoladi.", 'Пострадают качество и понимание.']], [["Darsni tanaffusga cho'zish", 'Задержать детей на перемене'], ["Dam olish huquqi buziladi.", 'Нарушается право на отдых.']], [["Hammasini uyga vazifaga berish", 'Всё задать на дом'], ["Ko'nikma yordamisiz shakllanmaydi.", 'Без поддержки навык не сформируется.']]],
      'A', ["Dinamik rejalashtirish: maqsad bo'yicha ustuvorlik.", 'Динамическое планирование: приоритет по цели.']),
    cq('a-p-lt-c4', '3.1.2', { ...P(LT) },
      ["Dars turini nima belgilaydi?", 'Что определяет тип урока?'],
      [[["Asosiy didaktik maqsad", 'Главная дидактическая цель']], [["Darsning davomiyligi", 'Продолжительность урока'], ["Darslar odatda 45 daqiqa.", 'Уроки обычно по 45 минут.']], [["Sinfdagi o'quvchilar soni", 'Число учеников в классе'], ["Tur bunga bog'liq emas.", 'Тип от этого не зависит.']], [["Fan nomi", 'Название предмета'], ["Har qanday fanda turli dars turlari bo'ladi.", 'В любом предмете бывают разные типы.']]],
      'A', ["Maqsad → tur → tuzilish.", 'Цель → тип → структура.']),
    cq('a-p-lt-c5', '3.1.2', { ...P(LT) },
      ["Nega dars refleksiya bilan tugashi kerak?", 'Почему урок должен заканчиваться рефлексией?'],
      [[["O'quvchi va o'qituvchi maqsadga erishilganini va keyingi qadamni aniqlaydi", 'Ученик и учитель выясняют, достигнута ли цель, и определяют следующий шаг']], [["Vaqtni to'ldirish uchun", 'Чтобы заполнить время'], ["Refleksiya mazmunli bosqich.", 'Рефлексия — содержательный этап.']], [["Baho qo'yish uchun", 'Чтобы поставить отметки'], ["Refleksiya baho emas.", 'Рефлексия — не выставление отметок.']], [["Uyga vazifa berish uchun", 'Чтобы задать домашнее задание'], ["Bu alohida qism.", 'Это отдельная часть.']]],
      'A', ["Refleksiya maqsad va natijani bog'laydi.", 'Рефлексия связывает цель и результат.']),
  ],
});

/* ======================= Psychology: primary-school age ======================= */
const AG = 'psy-age';
export const PSY_AGE = lesson({
  id: AG, module: 'psy-age', level: 'intro', stage: 'F', minutes: 20, codes: ['3.2.1', '3.2.3'], sourceIds: YS,
  title: ["Kichik maktab yoshi: yetakchi faoliyat, 7 yosh inqirozi, maktabga tayyorlik", 'Младший школьный возраст: ведущая деятельность, кризис 7 лет, готовность к школе'],
  blocks: [
    B.intro(["6–7 yoshdan 10–11 yoshgacha bo'lgan davr — bola hayotidagi katta burilish: o'yin o'rnini o'qish egallaydi. Bu davr qonuniyatlarini bilish o'qituvchiga «xulq muammolari»ning sababini tushunishga yordam beradi.", 'Период от 6–7 до 10–11 лет — крупный поворот в жизни ребёнка: место игры занимает учение. Знание закономерностей этого возраста помогает учителю понять причины «проблем поведения».']),
    B.definition(["**Yetakchi faoliyat** — muayyan yoshda psixik rivojlanishni eng ko'p belgilaydigan faoliyat. Kichik maktab yoshida bu — **o'quv faoliyati** (D.B. Elkonin).", '**Ведущая деятельность** — деятельность, которая в данном возрасте сильнее всего определяет психическое развитие. В младшем школьном возрасте это **учебная деятельность** (Д.Б. Эльконин).']),
    B.table([['Yosh', 'Возраст'], ['Yetakchi faoliyat', 'Ведущая деятельность']], [
      [["Go'daklik", 'Младенчество'], ["Kattalar bilan bevosita emotsional muloqot", 'Непосредственно-эмоциональное общение со взрослыми']],
      [['Ilk bolalik', 'Раннее детство'], ["Predmetli-manipulyativ faoliyat", 'Предметно-манипулятивная деятельность']],
      [['Maktabgacha yosh', 'Дошкольный возраст'], ["Syujetli-rolli o'yin", 'Сюжетно-ролевая игра']],
      [['Kichik maktab yoshi', 'Младший школьный возраст'], ["O'quv faoliyati", 'Учебная деятельность']],
      [["O'smirlik", 'Подростковый возраст'], ["Tengdoshlar bilan intim-shaxsiy muloqot", 'Интимно-личностное общение со сверстниками']],
    ], ["Yetakchi faoliyatlar (Elkonin periodizatsiyasi)", 'Ведущие деятельности (периодизация Эльконина)']),
    B.explain(["Kichik maktab yoshining **yangi tuzilmalari**:", '**Новообразования** младшего школьного возраста:'], [
      ["**Ixtiyoriylik** — o'z xulqi va diqqatini maqsadga bo'ysundirish.", '**Произвольность** — подчинение поведения и внимания цели.'],
      ["**Ichki harakat rejasi** — harakatni «ichida» rejalashtirish.", '**Внутренний план действий** — планирование действий «в уме».'],
      ["**Refleksiya** — o'z harakati va bilimini tahlil qilish.", '**Рефлексия** — анализ собственных действий и знаний.'],
    ]),
    B.explain(["**7 yosh inqirozi** (L.S. Vygotskiy): bolaning bevositaligi yo'qoladi, u «katta» bo'lishni xohlaydi, ichki va tashqi xulq ajraladi. Belgilar: tantiqlik, kattalarga taqlid, «men kattaman!». Bu tabiiy bosqich.", '**Кризис 7 лет** (Л.С. Выготский): ребёнок утрачивает непосредственность, стремится быть «большим», разделяются внутреннее и внешнее поведение. Признаки: кривляние, манерничанье, подражание взрослым, «я уже большой!». Это нормальный этап.']),
    B.table([['Maktabga tayyorlik', 'Готовность к школе'], ['Mazmuni', 'Суть']], [
      [['Motivatsion', 'Мотивационная'], ["O'qishga, bilimga intilish", 'Желание учиться, интерес к знаниям']],
      [['Intellektual', 'Интеллектуальная'], ["Tafakkur, nutq, xotira rivojlanganligi", 'Развитие мышления, речи, памяти']],
      [['Irodaviy (ixtiyoriy)', 'Волевая (произвольная)'], ["Qoidaga va ko'rsatmaga amal qila olish", 'Умение действовать по правилу и инструкции']],
      [['Ijtimoiy-shaxsiy', 'Социально-личностная'], ["Kattalar va tengdoshlar bilan muloqot", 'Общение со взрослыми и сверстниками']],
    ]),
    B.example(["1-sinf o'quvchisi tantiqlik qiladi, kattalarga taqlid qiladi va «Men allaqachon kattaman!» deydi. O'qituvchining to'g'ri talqini?", 'Первоклассник кривляется, подражает взрослым и заявляет «Я уже большой!». Верная интерпретация учителя?'], [
      ["Bu 7 yosh inqirozining odatiy belgilari.", 'Это типичные признаки кризиса 7 лет.'],
      ["Bolaning «kattalik»ka intilishini mas'uliyatli topshiriqlar orqali qo'llab-quvvatlash.", 'Поддержать стремление к «взрослости» ответственными поручениями.'],
    ], ["Inqiroz — rivojlanish bosqichi, «tarbiyasizlik» emas", 'Кризис — этап развития, а не «невоспитанность»']),
    B.example(["Bola o'yinda qoidaga amal qiladi, lekin darsda topshiriqni oxirigacha bajara olmaydi. Qaysi tayyorlik komponenti zaif?", 'Ребёнок соблюдает правила в игре, но на уроке не может довести задание до конца. Какой компонент готовности слабее?'], [
      ["Muammo — maqsadga bo'ysundirilgan harakatni ushlab turishda.", 'Проблема — в удержании действия, подчинённого цели.'],
    ], ['Irodaviy (ixtiyoriy) tayyorlik', 'Волевая (произвольная) готовность']),
    B.example(["Nega kichik maktab yoshida o'yin elementlari foydali, lekin darsning asosiy shakli bo'la olmaydi?", 'Почему в младшем школьном возрасте игровые элементы полезны, но не могут быть основной формой урока?'], [
      ["O'yin — oldingi davrning yetakchi faoliyati: u motivatsiya beradi.", 'Игра — ведущая деятельность предыдущего периода: она даёт мотивацию.'],
      ["Lekin rivojlanish endi o'quv faoliyati orqali boradi: vazifani qabul qilish, usulni o'rganish, nazorat va baholash.", 'Но развитие теперь идёт через учебную деятельность: принятие задачи, освоение способа, контроль и оценка.'],
    ], ["O'yindan o'qishga o'tish ko'prigi sifatida", 'Как мост от игры к учению']),
    B.mistake(null, [
      ["Inqiroz belgilarini jazolash bilan «tuzatish».", '«Исправлять» признаки кризиса наказаниями.'],
      ["Yetakchi faoliyat sifatida o'yinni ko'rsatish (bu maktabgacha yosh).", 'Называть ведущей деятельностью игру (это дошкольный возраст).'],
      ["Maktabga tayyorlikni faqat o'qish va sanash bilan o'lchash.", 'Оценивать готовность к школе только по умению читать и считать.'],
    ]),
    B.try(cq('a-y-ag-t1', '3.2.1', { ...Y(AG), d: 1 },
      ["Boshlang'ich sinf o'quvchisining psixik rivojlanishini asosan qaysi faoliyat belgilaydi?", 'Какая деятельность в основном определяет психическое развитие младшего школьника?'],
      [[["O'quv faoliyati", 'Учебная деятельность']], [["Syujetli-rolli o'yin", 'Сюжетно-ролевая игра'], ["Bu maktabgacha yoshning yetakchi faoliyati.", 'Это ведущая деятельность дошкольника.']], [["Tengdoshlar bilan shaxsiy muloqot", 'Личное общение со сверстниками'], ["Bu o'smirlik davrida yetakchi bo'ladi.", 'Ведущей она становится в подростковом возрасте.']], [["Kasbiy faoliyat", 'Профессиональная деятельность'], ["Bu kattalar davriga tegishli.", 'Это относится к взрослости.']]],
      'A', ["7–10/11 yoshda yetakchi faoliyat — o'qish (o'quv faoliyati).", 'В 7–10/11 лет ведущая деятельность — учебная.'])),
    B.method(["O'qituvchi uchun xulosa:", 'Выводы для учителя:'], [
      ["Mas'uliyatli yumushlar (navbatchilik, yordamchi) «kattalik» ehtiyojini qondiradi.", 'Ответственные поручения (дежурство, помощник) удовлетворяют потребность во «взрослости».'],
      ["Ixtiyoriylikni bosqichma-bosqich rivojlantiring: aniq ko'rsatma, namuna, o'zini tekshirish.", 'Развивайте произвольность постепенно: чёткая инструкция, образец, самопроверка.'],
      ["Imtihonda: yoshga xos qonuniyatni tan oladigan va bolani qo'llab-quvvatlaydigan variantni tanlang.", 'На экзамене выбирайте вариант, который признаёт возрастную закономерность и поддерживает ребёнка.'],
    ]),
    B.summary(null, [
      ["Yetakchi faoliyat — o'quv faoliyati.", 'Ведущая деятельность — учебная.'],
      ["Yangi tuzilmalar: ixtiyoriylik, ichki harakat rejasi, refleksiya.", 'Новообразования: произвольность, внутренний план действий, рефлексия.'],
      ["7 yosh inqirozi tabiiy; maktabga tayyorlik 4 komponentli.", 'Кризис 7 лет естественен; готовность к школе — 4 компонента.'],
    ]),
  ],
  check: [
    cq('a-y-ag-c1', '3.2.1', { ...Y(AG) },
      ["D.B. Elkonin periodizatsiyasiga ko'ra 7–10 yoshli bolaning psixik rivojlanishini eng ko'p qaysi faoliyat belgilaydi?", 'Согласно периодизации Д.Б. Эльконина, какая деятельность сильнее всего определяет психическое развитие ребёнка 7–10 лет?'],
      [[["O'quv faoliyati", 'Учебная']], [["Syujetli-rolli o'yin", 'Сюжетно-ролевая игра'], ["Bu maktabgacha yosh.", 'Это дошкольный возраст.']], [["Tengdoshlar bilan intim muloqot", 'Интимно-личностное общение со сверстниками'], ["Bu o'smirlik.", 'Это подростковый возраст.']], [["Predmetli faoliyat", 'Предметная деятельность'], ["Bu ilk bolalik.", 'Это раннее детство.']]],
      'A', ["Elkonin bo'yicha — o'quv faoliyati.", 'По Эльконину — учебная деятельность.']),
    cq('a-y-ag-c2', '3.2.1', { ...Y(AG), rule: ["7 yosh inqirozi: bevositalikning yo'qolishi, «kattalik»ka intilish.", 'Кризис 7 лет: утрата непосредственности, стремление к «взрослости».'] },
      ["7 yosh inqiroziga xos belgi qaysi?", 'Какой признак характерен для кризиса 7 лет?'],
      [[["Bevositalikning yo'qolishi, tantiqlik va kattalarga taqlid", 'Утрата непосредственности, кривляние, подражание взрослым']], [["«Men o'zim!» deb mustaqillik talab qilish", 'Требование самостоятельности «я сам!»'], ["Bu 3 yosh inqirozi.", 'Это кризис 3 лет.']], [["Kattalik hissi va tengdoshlar guruhiga intilish", 'Чувство взрослости и тяга к группе сверстников'], ["Bu o'smirlik.", 'Это подростковый возраст.']], [["Nutqning paydo bo'lishi", 'Появление речи'], ["Bu ilk bolalik.", 'Это раннее детство.']]],
      'A', ["Vygotskiy bo'yicha 7 yosh inqirozi belgilari.", 'Признаки кризиса 7 лет по Выготскому.']),
    cq('a-y-ag-c3', '3.2.1', { ...Y(AG) },
      ["Qaysi biri kichik maktab yoshining yangi tuzilmasi?", 'Что является новообразованием младшего школьного возраста?'],
      [[['Refleksiya', 'Рефлексия']], [["Rolli o'yin", 'Ролевая игра'], ["Maktabgacha yosh faoliyati.", 'Деятельность дошкольника.']], [['Kattalik hissi', 'Чувство взрослости'], ["O'smirlik yangi tuzilmasi.", 'Новообразование подростка.']], [["Tik yurish", 'Прямохождение'], ["Go'daklik yutug'i.", 'Достижение младенчества.']]],
      'A', ["Ixtiyoriylik, ichki harakat rejasi, refleksiya.", 'Произвольность, внутренний план действий, рефлексия.']),
    cq('a-y-ag-c4', '3.2.3', { ...Y(AG), d: 3 },
      ["Bola o'qishni xohlaydi va yaxshi gapiradi, lekin ko'rsatmani oxirigacha ushlab turolmaydi. Qaysi tayyorlik komponentini rivojlantirish kerak?", 'Ребёнок хочет учиться и хорошо говорит, но не удерживает инструкцию до конца. Какой компонент готовности нужно развивать?'],
      [[["Irodaviy (ixtiyoriylik)", 'Волевую (произвольность)']], [["Motivatsion", 'Мотивационную'], ["O'qish istagi bor.", 'Желание учиться есть.']], [["Intellektual", 'Интеллектуальную'], ["Nutq va tafakkur yaxshi.", 'Речь и мышление развиты.']], [["Jismoniy", 'Физическую'], ["Muammo xulqni boshqarishda.", 'Проблема в управлении поведением.']]],
      'A', ["Ko'rsatma bo'yicha harakat — ixtiyoriylik.", 'Действие по инструкции — произвольность.']),
    cq('a-y-ag-c5', '3.2.1', { ...Y(AG) },
      ["1-sinf o'quvchisi «Men kattaman!» deb kattalarga taqlid qiladi. Eng to'g'ri munosabat?", 'Первоклассник подражает взрослым: «Я уже большой!». Наиболее верная реакция?'],
      [[["Mas'uliyatli yumush berib, «kattalik» intilishini ijobiy yo'naltirish", 'Дать ответственное поручение и направить стремление к «взрослости» в позитивное русло']], [["Sinf oldida tanbeh berish", 'Сделать замечание перед классом'], ["Inqiroz tabiiy; tanbeh qarshilikni kuchaytiradi.", 'Кризис естественен; замечание усилит сопротивление.']], [["E'tibor bermaslik", 'Не обращать внимания'], ["Qo'llab-quvvatlash imkoniyati boy beriladi.", 'Упускается возможность поддержать.']], [["Ota-onani chaqirish", 'Вызвать родителей'], ["Vaziyat muammo emas.", 'Ситуация не является проблемой.']]],
      'A', ["Inqiroz ehtiyojini qondirish rivojlanishni qo'llaydi.", 'Удовлетворение потребности кризиса поддерживает развитие.']),
  ],
});

/* ======================= Psychology: memory ======================= */
const ME = 'psy-memory';
export const PSY_MEMORY = lesson({
  id: ME, module: 'psy-cog', level: 'core', stage: 'C', minutes: 20, codes: ['3.2.2'], requires: [AG], sourceIds: YS,
  title: ['Xotira va eslab qolishni boshqarish', 'Память и управление запоминанием'],
  blocks: [
    B.intro(["Bola qoidani bugun biladi, bir haftadan keyin esa unutadi. Bu «dangasalik» emas — xotira qonuniyati. O'qituvchi bu qonuniyatlarni bilsa, unutishni kamaytira oladi.", 'Ребёнок сегодня знает правило, а через неделю забывает. Это не «лень», а закономерность памяти. Зная её, учитель может уменьшить забывание.']),
    B.definition(["**Xotira** — tajribani eslab qolish, saqlash va qayta tiklash jarayonlari.", '**Память** — процессы запоминания, сохранения и воспроизведения опыта.']),
    B.table([['Asos', 'Основание'], ['Turlari', 'Виды']], [
      [['Material', 'Материал'], ["Harakat, emotsional, obrazli, so'z-mantiqiy", 'Двигательная, эмоциональная, образная, словесно-логическая']],
      [['Maqsad', 'Цель'], ['Ixtiyorsiz va ixtiyoriy', 'Непроизвольная и произвольная']],
      [['Usul', 'Способ'], ["Mexanik va mazmunli", 'Механическая и смысловая']],
      [['Muddat', 'Длительность'], ["Qisqa muddatli, operativ, uzoq muddatli", 'Кратковременная, оперативная, долговременная']],
    ], ['Xotira turlari', 'Виды памяти']),
    B.explain(["Kichik maktab yoshida obrazli va ixtiyorsiz xotira kuchli; mazmunli ixtiyoriy xotira esa o'qitish jarayonida rivojlanadi. Bola nimani tushunsa va nimaga faol ishlov bersa, shuni yaxshiroq eslab qoladi.", 'У младших школьников сильны образная и непроизвольная память; смысловая произвольная память развивается в обучении. Ребёнок лучше запоминает то, что понял и с чем активно работал.']),
    B.rule(["Tadqiqotlarda tasdiqlangan samarali usullar: **oraliqli takrorlash** (vaqt o'tishi bilan bir necha marta), **xotiradan tiklash** (qayta o'qish emas, o'zini tekshirish), **mazmunli ishlov** (o'z so'zlari bilan tushuntirish, misol topish).", 'Подтверждённые исследованиями эффективные приёмы: **интервальное повторение** (несколько раз с промежутками), **припоминание** (самопроверка, а не перечитывание), **смысловая обработка** (объяснить своими словами, привести пример).']),
    B.explain(["Unutish egri chizig'i (G. Ebbingauz): yangi material o'rganilgandan keyingi dastlabki soat va kunlarda eng tez unutiladi, keyin unutish sekinlashadi. Har bir takrorlash unutishni sekinlashtiradi.", 'Кривая забывания (Г. Эббингауз): новый материал быстрее всего забывается в первые часы и дни после изучения, затем забывание замедляется. Каждое повторение замедляет забывание.']),
    B.example(["O'quvchilar qoidani so'zma-so'z yodlaydi, lekin qo'llay olmaydi. Xotiraning qaysi turi ishlatilmoqda va nima qilish kerak?", 'Ученики дословно заучивают правило, но не применяют. Какая память задействована и что делать?'], [
      ["Mexanik xotira — tushunishsiz takrorlash.", 'Механическая — повторение без понимания.'],
      ["Mazmunli xotiraga o'tish: misollar bilan tushuntirish, tayanch sxema, o'z so'zlari bilan qayta aytish.", 'Перейти к смысловой: объяснение на примерах, опорная схема, пересказ своими словами.'],
    ], ["Mexanikdan mazmunliga", 'От механической к смысловой']),
    B.example(["Ko'paytirish jadvalini qanday takrorlash samaraliroq: bir kunda 1 soat yoki 5 kun davomida 10 daqiqadan?", 'Как повторять таблицу умножения эффективнее: 1 час за один день или по 10 минут в течение 5 дней?'], [
      ["Oraliqli takrorlash effekti: taqsimlangan mashq uzoq muddatli eslab qolishni yaxshilaydi.", 'Эффект интервального повторения: распределённая практика лучше для долговременного запоминания.'],
    ], ["5 kun × 10 daqiqa", '5 дней × 10 минут']),
    B.example(["Qaysi takrorlash usuli yaxshiroq: darslikni qayta o'qish yoki kichik o'zini tekshirish testi?", 'Какой способ повторения лучше: перечитать учебник или пройти небольшой тест-самопроверку?'], [
      ["Xotiradan tiklash (test) eslab qolishni qayta o'qishdan ko'ra kuchliroq mustahkamlaydi.", 'Припоминание (тест) укрепляет запоминание сильнее, чем перечитывание.'],
    ], ["O'zini tekshirish testi", 'Тест-самопроверка']),
    B.mistake(null, [
      ["Bir kunda ko'p marta takrorlab, keyin qaytmaslik.", 'Много раз повторить за один день и больше не возвращаться.'],
      ["Faqat qayta o'qish va «tushunarli» hissiga ishonish.", 'Только перечитывать и доверять ощущению «понятно».'],
      ["Unutishni «e'tiborsizlik» deb jazolash.", 'Наказывать за забывание как за «невнимательность».'],
    ]),
    B.try(cq('a-y-me-t1', '3.2.2', { ...Y(ME), d: 1 },
      ["Lug'at so'zlarini uzoq eslab qolishga qaysi usul eng ko'p yordam beradi?", 'Какой способ лучше всего помогает надолго запомнить словарные слова?'],
      [[["Vaqt oralatib takrorlash va o'zini tekshirish (yopib eslash)", 'Повторение с интервалами и самопроверка (закрыть и вспомнить)']], [["Bir kunda ketma-ket ko'p marta ko'chirish", 'Многократное переписывание подряд в один день'], ["Tez esda qoladi, lekin tez unutiladi.", 'Быстро запоминается, но быстро забывается.']], [["Ro'yxatni faqat ko'zdan kechirish", 'Только просматривать список'], ["Passiv o'qish eslashni mashq qildirmaydi.", 'Пассивное чтение не тренирует припоминание.']], [["Marker bilan belgilash", 'Выделять маркером'], ["Belgilashning o'zi xotirani kam mustahkamlaydi.", 'Само выделение мало укрепляет память.']]],
      'A', ["Oralatib takrorlash va eslashga urinish — xotirani mustahkamlashning isbotlangan usullari.", 'Интервальное повторение и попытки вспомнить — доказанные способы закрепления памяти.'])),
    B.method(["Darsda xotirani qo'llab-quvvatlash:", 'Как поддерживать память на уроке:'], [
      ["Dars boshida avvalgi mavzudan 2–3 savol (xotiradan tiklash).", 'В начале урока 2–3 вопроса по прошлой теме (припоминание).'],
      ["Mavzuni 1 kun, 1 hafta, 1 oydan keyin qisqa takrorlash.", 'Короткое повторение через день, неделю и месяц.'],
      ["Ko'rgazma + so'z: sxemani tushuntirish bilan birga berish.", 'Наглядность + слово: давать схему вместе с объяснением.'],
      ["O'quvchiga mavzuni o'z so'zlari bilan tushuntirib berishni topshirish.", 'Просить ученика объяснить тему своими словами.'],
    ]),
    B.summary(null, [
      ["Xotira: eslab qolish, saqlash, tiklash.", 'Память: запоминание, сохранение, воспроизведение.'],
      ["Kichik maktab yoshida obrazli xotira kuchli; mazmunli xotira rivojlantiriladi.", 'У младших школьников сильна образная память; смысловую развивают.'],
      ["Oraliqli takrorlash va xotiradan tiklash — eng samarali usullar.", 'Интервальное повторение и припоминание — самые эффективные приёмы.'],
    ]),
  ],
  check: [
    cq('a-y-me-c1', '3.2.2', { ...Y(ME) },
      ["Uzoq muddatli eslab qolish uchun qaysi takrorlash usuli eng samarali?", 'Какой способ повторения наиболее эффективен для долговременного запоминания?'],
      [[["Bir necha kun davomida oraliqli qisqa takrorlash", 'Короткое повторение с интервалами в течение нескольких дней']], [["Bir kunda uzoq vaqt takrorlash", 'Долгое повторение за один день'], ["Tez unutiladi.", 'Быстро забывается.']], [["Faqat qayta o'qish", 'Только перечитывание'], ["Xotiradan tiklashdan kuchsizroq.", 'Слабее припоминания.']], [["Takrorlamaslik", 'Не повторять'], ["Unutish egri chizig'iga zid.", 'Противоречит кривой забывания.']]],
      'A', ["Oraliqli takrorlash effekti.", 'Эффект интервального повторения.']),
    cq('a-y-me-c2', '3.2.2', { ...Y(ME) },
      ["O'quvchi she'rni ma'nosini tushunmay so'zma-so'z yodladi. Xotiraning qaysi turi?", 'Ученик выучил стихотворение дословно, не понимая смысла. Какой вид памяти?'],
      [[['Mexanik', 'Механическая']], [['Mazmunli', 'Смысловая'], ["Ma'no tushunilmagan.", 'Смысл не понят.']], [['Emotsional', 'Эмоциональная'], ["Hissiyot haqida gap yo'q.", 'Речь не о чувствах.']], [['Harakat', 'Двигательная'], ["Harakatlar eslab qolinmayapti.", 'Запоминаются не движения.']]],
      'A', ["Tushunishsiz takrorlash — mexanik xotira.", 'Повторение без понимания — механическая память.']),
    cq('a-y-me-c3', '3.2.2', { ...Y(ME), rule: ["Unutish o'rganilgandan keyin dastlab eng tez.", 'Забывание быстрее всего сразу после изучения.'] },
      ["Ebbingauz unutish egri chizig'iga ko'ra material qachon eng tez unutiladi?", 'Когда, по кривой забывания Эббингауза, материал забывается быстрее всего?'],
      [[["O'rganilgandan keyingi dastlabki soat va kunlarda", 'В первые часы и дни после изучения']], [["Bir oydan keyin", 'Через месяц'], ["Unutish vaqt o'tishi bilan sekinlashadi.", 'Со временем забывание замедляется.']], [["Bir yildan keyin", 'Через год'], ["Bu davrda unutish sekin.", 'В этот период забывание медленное.']], [["Bir tekis", 'Равномерно'], ["Egri chiziq notekis.", 'Кривая неравномерная.']]],
      'A', ["Shuning uchun birinchi takrorlash erta bo'lishi kerak.", 'Поэтому первое повторение должно быть ранним.']),
    cq('a-y-me-c4', '3.2.2', { ...Y(ME), d: 3 },
      ["Qaysi usul xotiradan tiklashga (retrieval practice) misol?", 'Какой приём является примером припоминания (retrieval practice)?'],
      [[["Dars boshida o'tgan mavzu bo'yicha yozma javob talab qiladigan 3 ta qisqa savol", 'Три коротких вопроса по прошлой теме в начале урока с письменным ответом']], [["Konspektni qayta o'qish", 'Перечитать конспект'], ["Tiklash emas, qayta tanishish.", 'Это узнавание, а не припоминание.']], [["Qoidani ko'chirib yozish", 'Переписать правило'], ["Mexanik harakat.", 'Механическое действие.']], [["Videoni qayta ko'rish", 'Пересмотреть видео'], ["Passiv takrorlash.", 'Пассивное повторение.']]],
      'A', ["Javobni xotiradan chiqarish eslab qolishni mustahkamlaydi.", 'Извлечение ответа из памяти укрепляет запоминание.']),
    cq('a-y-me-c5', '3.2.2', { ...Y(ME) },
      ["Kichik maktab yoshidagi o'quvchilarda qaysi xotira turi ustun?", 'Какой вид памяти преобладает у младших школьников?'],
      [[["Obrazli (ko'rgazmali)", 'Образная (наглядная)']], [["So'z-mantiqiy", 'Словесно-логическая'], ["U endi rivojlanmoqda.", 'Она только развивается.']], [["Faqat harakat", 'Только двигательная'], ["Obrazli xotira ustunroq.", 'Преобладает образная.']], [["Hech biri", 'Никакая'], ["Obrazli xotira ustun.", 'Преобладает образная.']]],
      'A', ["Shuning uchun ko'rgazma va so'zni birga berish foydali.", 'Поэтому полезно сочетать наглядность и слово.']),
  ],
});

export const PED2_LESSONS = [PED_BASICS, PED_PRINCIPLES, PED_GOALS, PED_LESSON_TYPES, PSY_AGE, PSY_MEMORY];
