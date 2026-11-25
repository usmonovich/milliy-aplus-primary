// Psychology — batch 3: thinking, perception, imagination, motivation, emotions,
// individual differences of primary schoolchildren. Equal content in uz and ru.
// Only well-supported claims; known myths are named as myths.
import { B, cq, lesson } from './build';

const YS = ['goziyev', 'nishanova', 'spec2026'];
const Y = (l: string) => ({ lang: 'both' as const, lesson: l, src: YS });

/* ======================= 1. Thinking ======================= */
const TH = 'psy-thinking';
export const PSY_THINKING = lesson({
  id: TH, module: 'psy-cog', level: 'core', stage: 'C', minutes: 20, codes: ['3.2.2'], requires: ['psy-age'], sourceIds: YS,
  title: ["Tafakkur va uning kichik maktab yoshida rivojlanishi", 'Мышление и его развитие в младшем школьном возрасте'],
  blocks: [
    B.intro(["Birinchi sinf o'quvchisiga «5 + 3 = 8 bo'lsa, 3 + 5 nechchi?» deysiz, u yana sanay boshlaydi. To'rtinchi sinf o'quvchisi esa darhol javob beradi: «O'rin almashtirish xossasi». Bu farq — tafakkurning rivojlanishi.", 'Первокласснику говорят: «Если 5 + 3 = 8, то сколько 3 + 5?» — и он снова начинает считать. Четвероклассник отвечает сразу: «Переместительное свойство». Эта разница — развитие мышления.']),
    B.definition(["**Tafakkur** — voqelikni umumlashgan va bilvosita aks ettirish, narsalar o'rtasidagi bog'lanishlarni tushunish jarayoni. **Tafakkur turlari**: ko'rgazmali-harakatli (narsa bilan harakat qilib o'ylash), ko'rgazmali-obrazli (tasavvur va rasm orqali o'ylash), so'z-mantiqiy (tushunchalar va mulohazalar bilan o'ylash). **Tafakkur operatsiyalari**: tahlil (bo'laklarga ajratish), sintez (birlashtirish), taqqoslash, umumlashtirish, tasniflash, abstraksiya (muhim belgini ajratish).", '**Мышление** — обобщённое и опосредованное отражение действительности, понимание связей между предметами. **Виды мышления**: наглядно-действенное (думать, действуя с предметами), наглядно-образное (думать с опорой на образы и картинки), словесно-логическое (думать понятиями и рассуждениями). **Мыслительные операции**: анализ (разделение на части), синтез (соединение), сравнение, обобщение, классификация, абстрагирование (выделение существенного признака).']),
    B.explain(["Kichik maktab yoshida (taxminan 7–11 yosh) tafakkur **ko'rgazmali-obrazlidan so'z-mantiqiyga** o'tadi. J. Piaje bu davrni **aniq operatsiyalar bosqichi** deb atagan: bola mantiqiy fikr yurita oladi, lekin aniq narsalar va vaziyatlarga tayanib. Masalan, «saqlanish» tushunchasi paydo bo'ladi: suvni keng idishdan tor idishga quysak, miqdori o'zgarmaganini tushunadi. Mavhum, faqat so'z bilan berilgan masalalar hali qiyin.", 'В младшем школьном возрасте (примерно 7–11 лет) мышление переходит **от наглядно-образного к словесно-логическому**. Ж. Пиаже назвал этот период **стадией конкретных операций**: ребёнок рассуждает логически, но с опорой на конкретные предметы и ситуации. Появляется понятие «сохранения»: если перелить воду из широкого сосуда в узкий, ребёнок понимает, что её количество не изменилось. Абстрактные, чисто словесные задачи ещё трудны.'], undefined, ['Yosh xususiyati', 'Возрастная особенность']),
    B.rule(["O'qituvchi uchun qoida: **aniqdan mavhumga** — predmet bilan harakat → rasm/sxema → so'z bilan umumlashtirish. Har bir yangi tushunchada operatsiyalarni maqsadli mashq qildiring: «Nimasi o'xshash? Nimasi farqli? Qaysi guruhga kiradi? Nega?» Bola javobini **asoslashga** («chunki...») o'rgating — so'z-mantiqiy tafakkur aynan shunda rivojlanadi.", 'Правило для учителя: **от конкретного к абстрактному** — действие с предметом → рисунок/схема → словесное обобщение. При каждом новом понятии целенаправленно тренируйте операции: «Что похоже? Чем отличается? В какую группу? Почему?» Учите ребёнка **обосновывать** («потому что...») — так и развивается словесно-логическое мышление.']),
    B.example(["Topshiriq: «olma, nok, sabzi, olcha» — ortiqchasini toping. Qaysi operatsiyalar ishlaydi?", 'Задание: «яблоко, груша, морковь, вишня» — найдите лишнее. Какие операции работают?'], [
      ["Tahlil: har bir so'zning belgilarini ajratish (qayerda o'sadi, meva yoki sabzavot).", 'Анализ: выделить признаки каждого слова (где растёт, фрукт или овощ).'],
      ["Taqqoslash va abstraksiya: muhim belgi — «meva yoki sabzavot» (rang muhim emas).", 'Сравнение и абстрагирование: существенный признак — «фрукт или овощ» (цвет неважен).'],
      ["Umumlashtirish va tasniflash: olma, nok, olcha — mevalar; sabzi — sabzavot.", 'Обобщение и классификация: яблоко, груша, вишня — фрукты; морковь — овощ.'],
    ], ["Ortiqcha — sabzi; asos: «u sabzavot»", 'Лишнее — морковь; основание: «это овощ»']),
    B.example(["Piaje tajribasi: ikki qator 6 tadan tanga. Bir qatorni siyraklashtiramiz. 6 yoshli bola: «Bu qatorda ko'proq». 8 yoshli: «Teng, faqat oraliq katta». Bu nimani ko'rsatadi?", 'Опыт Пиаже: два ряда по 6 монет. Один ряд раздвигаем. Ребёнок 6 лет: «Здесь больше». Ребёнок 8 лет: «Поровну, просто промежутки больше». Что это показывает?'], [
      ["6 yoshda bola tashqi ko'rinishga (qator uzunligiga) tayanadi — saqlanish hali yo'q.", 'В 6 лет ребёнок опирается на внешний вид (длину ряда) — сохранения ещё нет.'],
      ["8 yoshda miqdor saqlanishini tushunadi — aniq operatsiyalar bosqichi.", 'В 8 лет понимает сохранение количества — стадия конкретных операций.'],
      ["Amaliy xulosa: 1-sinfda «ko'p-kam» ni juftlab (birga-bir) solishtirish orqali o'rgatish.", 'Практический вывод: в 1 классе учить «больше-меньше» через сопоставление один к одному.'],
    ], ["Tafakkur ko'rinishdan mantiqqa o'tmoqda", 'Мышление переходит от внешнего вида к логике']),
    B.example(["Masala: «Alida 5 ta qalam bor, bu Validan 2 ta ko'p. Valida nechta?» Ko'p bolalar 7 deb javob beradi. Nega va nima qilish kerak?", 'Задача: «У Али 5 карандашей, это на 2 больше, чем у Вали. Сколько у Вали?» Многие дети отвечают 7. Почему и что делать?'], [
      ["Sabab: «ko'p» so'zi avtomatik «qo'shish» bilan bog'langan — mantiqiy tahlil o'rniga so'zga tayanish.", 'Причина: слово «больше» автоматически связано со сложением — опора на слово вместо логического анализа.'],
      ["Yordam: chizma (ikki kesma) — kimda ko'p, kimda kam ekani ko'rinadi.", 'Помощь: чертёж (два отрезка) — видно, у кого больше, у кого меньше.'],
      ["Savol: «Kimda ko'proq? Demak, Valida ko'pmi, kammi?» → $5 - 2 = 3$.", 'Вопрос: «У кого больше? Значит, у Вали больше или меньше?» → $5 - 2 = 3$.'],
    ], ["Javob: 3 ta; obrazli tayanch mantiqni qo'llab-quvvatlaydi", 'Ответ: 3; образная опора поддерживает логику']),
    B.mistake(null, [
      ["Tayyor xulosani berib, «nega?» deb so'ramaslik — tafakkur emas, xotira ishlaydi.", 'Давать готовые выводы и не спрашивать «почему?» — работает память, а не мышление.'],
      ["1-sinfda faqat so'z bilan tushuntirish (ko'rgazmasiz) — obrazli tafakkurga tayanch yo'q.", 'В 1 классе объяснять только словами (без наглядности) — нет опоры для образного мышления.'],
      ["4-sinfda ham doim faqat predmet bilan ishlash — mantiqiy tafakkur rivojlanmaydi.", 'И в 4 классе работать только с предметами — логическое мышление не развивается.'],
    ]),
    B.try(cq('a-y-th-t1', '3.2.2', { ...Y(TH), d: 1, rule: ["Umumlashtirish — umumiy belgi bo'yicha birlashtirish.", 'Обобщение — объединение по общему признаку.'] },
      ["«Bo'ri, tulki, ayiq — bular ... » Bola «yovvoyi hayvonlar» deb javob berdi. Qaysi operatsiya?", '«Волк, лиса, медведь — это...» Ребёнок ответил: «дикие животные». Какая операция?'],
      [[["Umumlashtirish", 'Обобщение']], [["Tahlil", 'Анализ'], ["Tahlil — bo'laklarga ajratish.", 'Анализ — разделение на части.']], [["Taqqoslash", 'Сравнение'], ["Taqqoslash — o'xshash va farqni topish.", 'Сравнение — поиск сходства и различий.']], [["Sintez", 'Синтез'], ["Sintez — qismlardan butun yaratish.", 'Синтез — создание целого из частей.']]],
      'A', ["Umumiy muhim belgi bo'yicha bitta tushunchaga birlashtirish — umumlashtirish.", 'Объединение в одно понятие по общему существенному признаку — обобщение.'])),
    B.method(["Tafakkurni rivojlantirish bo'yicha amaliy usullar:", 'Практические приёмы развития мышления:'], [
      ["«Ortiqchasini top», «Davom ettir», «Guruhlarga ajrat» — har biridan keyin «Nega?»", '«Найди лишнее», «Продолжи ряд», «Разложи на группы» — после каждого «Почему?»'],
      ["Masalani chizma bilan tahlil qilish — obrazdan mantiqqa ko'prik.", 'Анализ задачи по чертежу — мост от образа к логике.'],
      ["Bir masalani ikki usulda yechish va solishtirish.", 'Решать задачу двумя способами и сравнивать.'],
      ["Xato javobni ham muhokama qilish: «Bu fikr qayerda adashdi?»", 'Обсуждать и неверный ответ: «Где это рассуждение ошиблось?»'],
    ]),
    B.summary(null, [
      ["Tafakkur turlari: ko'rgazmali-harakatli, ko'rgazmali-obrazli, so'z-mantiqiy.", 'Виды: наглядно-действенное, наглядно-образное, словесно-логическое.'],
      ["7–11 yosh — aniq operatsiyalar: mantiq aniq narsaga tayanadi.", '7–11 лет — конкретные операции: логика опирается на конкретное.'],
      ["Aniqdan mavhumga; «Nega?» savoli va asoslash.", 'От конкретного к абстрактному; вопрос «Почему?» и обоснование.'],
    ]),
  ],
  check: [
    cq('a-y-th-c1', '3.2.2', { ...Y(TH) }, ["Kichik maktab yoshida tafakkur rivojlanishining asosiy yo'nalishi?", 'Главное направление развития мышления в младшем школьном возрасте?'],
      [[["Ko'rgazmali-obrazlidan so'z-mantiqiyga o'tish", 'Переход от наглядно-образного к словесно-логическому']], [["So'z-mantiqiydan ko'rgazmali-harakatliga", 'От словесно-логического к наглядно-действенному'], ["Rivojlanish teskari yo'nalishda.", 'Развитие идёт в обратном направлении.']], [["Mavhum-nazariy tafakkurning to'liq shakllanishi", 'Полное формирование абстрактно-теоретического мышления'], ["Bu o'smirlik davriga xos.", 'Это характерно для подросткового возраста.']], [["Tafakkur o'zgarmaydi", 'Мышление не меняется'], ["Bu davrda jadal rivojlanadi.", 'В этот период оно активно развивается.']]],
      'A', ["Bola aniq narsaga tayangan holda mantiqiy fikrlashni o'rganadi.", 'Ребёнок учится логически рассуждать, опираясь на конкретное.']),
    cq('a-y-th-c2', '3.2.2', { ...Y(TH) }, ["«Kvadrat, uchburchak, doira — nimasi bilan farq qiladi?» topshirig'i qaysi operatsiyani rivojlantiradi?", 'Какую операцию развивает задание «Квадрат, треугольник, круг — чем отличаются?»'],
      [[["Taqqoslash", 'Сравнение']], [["Sintez", 'Синтез'], ["Butun yaratilmayapti.", 'Целое не создаётся.']], [["Umumlashtirish", 'Обобщение'], ["Umumiy emas, farqli belgi so'ralmoqda.", 'Спрашивается различие, а не общее.']], [["Abstraksiya", 'Абстрагирование'], ["Bitta muhim belgini ajratish so'ralmagan.", 'Не требуется выделить один существенный признак.']]],
      'A', ["O'xshash va farqli belgilarni topish — taqqoslash.", 'Поиск сходства и различий — сравнение.']),
    cq('a-y-th-c3', '3.2.2', { ...Y(TH) }, ["J. Piaje bo'yicha 7–11 yoshli bolalar qaysi bosqichda?", 'На какой стадии, по Ж. Пиаже, находятся дети 7–11 лет?'],
      [[["Aniq operatsiyalar", 'Конкретных операций']], [["Sensomotor", 'Сенсомоторной'], ["Bu go'daklik davri (taxminan 0–2 yosh).", 'Это младенчество (примерно 0–2 года).']], [["Operatsiyagacha", 'Дооперациональной'], ["Bu maktabgacha yosh (taxminan 2–7).", 'Это дошкольный возраст (примерно 2–7).']], [["Formal operatsiyalar", 'Формальных операций'], ["Bu taxminan 11–12 yoshdan keyin.", 'Это примерно после 11–12 лет.']]],
      'A', ["Mantiq bor, lekin aniq narsalarga tayanadi.", 'Логика есть, но опирается на конкретное.']),
    cq('a-y-th-c4', '3.2.2', { ...Y(TH) }, ["Qaysi o'qituvchi harakati so'z-mantiqiy tafakkurni eng ko'p rivojlantiradi?", 'Какое действие учителя больше всего развивает словесно-логическое мышление?'],
      [[["Javobni «chunki...» bilan asoslashni so'rash", 'Просить обосновать ответ словами «потому что...»']], [["Faqat to'g'ri javobni qabul qilish", 'Принимать только правильный ответ'], ["Fikrlash jarayoni ko'rinmaydi.", 'Ход мысли остаётся скрытым.']], [["Qoidalarni yod oldirish", 'Заучивать правила'], ["Yodlash xotirani rivojlantiradi.", 'Заучивание развивает память.']], [["Tez javob uchun mukofot", 'Награждать за быстрый ответ'], ["Tezlik chuqur fikrlashga to'sqinlik qilishi mumkin.", 'Спешка может мешать глубокому рассуждению.']]],
      'A', ["Asoslash — mantiqiy fikrlashning asosi.", 'Обоснование — основа логического мышления.']),
    cq('a-y-th-c5', '3.2.2', { ...Y(TH) }, ["2-sinf o'quvchisi «ko'p» so'zini ko'rib, «ta ko'p» masalalarni doim qo'shish bilan yechadi. Eng samarali yordam?", 'Второклассник, увидев слово «больше», всегда решает задачи на «больше на» сложением. Самая эффективная помощь?'],
      [[["Masalani kesmalar chizmasi bilan tahlil qilib, kimda ko'p ekanini ko'rsatish", 'Разобрать задачу по чертежу из отрезков и показать, у кого больше']], [["«Ko'p — qo'shish» qoidasini o'rgatish", 'Учить правило «больше — значит сложение»'], ["Aynan shu «qoida» xatoga sabab.", 'Именно это «правило» и вызывает ошибку.']], [["Ko'proq misol yechtirish", 'Решать больше примеров'], ["Masala tahlili rivojlanmaydi.", 'Не развивается анализ задачи.']], [["Javobni aytib qo'yish", 'Подсказать ответ'], ["Bola o'zi fikrlamaydi.", 'Ребёнок не думает сам.']]],
      'A', ["Chizma obrazli tafakkurga tayanib, mantiqiy tahlilni o'rgatadi.", 'Чертёж, опираясь на образное мышление, учит логическому анализу.']),
  ],
});

/* ======================= 2. Perception ======================= */
const PC = 'psy-perception';
export const PSY_PERCEPTION = lesson({
  id: PC, module: 'psy-cog', level: 'core', stage: 'C', minutes: 18, codes: ['3.2.2'], requires: ['psy-attention'], sourceIds: YS,
  title: ["Idrok va kuzatuvchanlik", 'Восприятие и наблюдательность'],
  blocks: [
    B.intro(["Birinchi sinf o'quvchisi «b» va «d» harflarini, «6» va «9» raqamlarini almashtiradi, rasmda muhim tafsilotni ko'rmaydi. Bu ko'pincha diqqatsizlik emas — idrokning yoshga xos xususiyati, uni rivojlantirish mumkin.", 'Первоклассник путает буквы «б» и «д» (в латинице «b» и «d»), цифры «6» и «9», не замечает важной детали на рисунке. Чаще всего это не невнимательность, а возрастная особенность восприятия, которую можно развивать.']),
    B.definition(["**Sezgi** — narsaning alohida xossasini aks ettirish (rang, tovush). **Idrok** — sezgi a'zolariga ta'sir qilayotgan narsani **yaxlit obraz** sifatida aks ettirish. **Kuzatish** — maqsadli, rejali idrok. **Kuzatuvchanlik** — narsalarning kam seziladigan, lekin muhim belgilarini payqash qobiliyati.", '**Ощущение** — отражение отдельного свойства предмета (цвет, звук). **Восприятие** — отражение предмета, действующего на органы чувств, **целостным образом**. **Наблюдение** — целенаправленное, планомерное восприятие. **Наблюдательность** — способность замечать малозаметные, но существенные признаки.']),
    B.table([['Xususiyat', 'Свойство'], ["Ma'nosi", 'Смысл'], ['Sinfdagi misol', 'Пример в классе']], [
      [['Yaxlitlik', 'Целостность'], ["Qismlardan butun obraz", 'Целый образ из частей'], ["So'zni harflarga qaramay «taxmin» bilan o'qish", 'Чтение слова «угадыванием», без анализа букв']],
      [['Konstantlik', 'Константность'], ["Narsa uzoq-yaqinda ham bir xil idrok qilinadi", 'Предмет воспринимается одинаковым вблизи и издали'], ["Uzoqdagi uy kichik ko'rinsa ham «katta uy»", 'Дальний дом кажется маленьким, но воспринимается большим']],
      [["Tanlovchanlik", 'Избирательность'], ["Ba'zi narsalar fon ustida ajralib turadi", 'Одни предметы выделяются на фоне'], ["Rangli bo'r bilan ajratilgan qoida", 'Правило, выделенное цветным мелом']],
      [['Appertseptsiya', 'Апперцепция'], ["Idrok oldingi tajribaga bog'liq", 'Восприятие зависит от прежнего опыта'], ["Dengizni ko'rmagan bola «dengiz» ni ko'l kabi tasavvur qiladi", 'Ребёнок, не видевший моря, представляет его как озеро']],
    ], ['Idrok xususiyatlari', 'Свойства восприятия']),
    B.explain(["Kichik maktab yoshida idrok **hissiyotga boy**, yorqin narsalarga yo'nalgan, lekin **kam tahlil qilingan**: bola umumiy taassurotni ushlaydi, muhim tafsilotlarni o'tkazib yuboradi, o'xshash shakllarni (b–d, p–q, 6–9) farqlashda qiynaladi. **Vaqt** (daqiqa, asr) va **makon** (masofa, xarita) idroki hali shakllanmoqda. O'qitish jarayonida idrok maqsadli **kuzatishga** aylanadi.", 'В младшем школьном возрасте восприятие **эмоционально окрашено**, направлено на яркое, но **слабо дифференцировано**: ребёнок схватывает общее впечатление, пропускает существенные детали, с трудом различает похожие формы (б–д, p–q, 6–9). Восприятие **времени** (минута, век) и **пространства** (расстояние, карта) ещё формируется. В обучении восприятие превращается в целенаправленное **наблюдение**.'], undefined, ['Yosh xususiyati', 'Возрастная особенность']),
    B.rule(["Kuzatishni tashkil etish: 1) **maqsad** («Nimani kuzatamiz?»); 2) **reja** (qaysi belgilar bo'yicha); 3) **bir nechta sezgi** (ko'rish + ushlash + aytish); 4) **so'z bilan qayd** etish; 5) **taqqoslash** — o'xshash narsalarni yonma-yon qo'yish farqni ko'rsatadi.", 'Организация наблюдения: 1) **цель** («Что наблюдаем?»); 2) **план** (по каким признакам); 3) **несколько анализаторов** (видеть + трогать + проговаривать); 4) **словесная** фиксация; 5) **сравнение** — похожие предметы рядом делают различие заметным.']),
    B.example(["1-sinf o'quvchisi «b» va «d» harflarini almashtiryapti. Qanday yordam berish mumkin?", 'Первоклассник путает буквы «b» и «d». Как помочь?'], [
      ["Harflarni yonma-yon qo'yib, farqni so'z bilan aytish: «b — tayoqcha, keyin o'ngda aylana; d — aylana, keyin tayoqcha».", 'Поставить буквы рядом и проговорить разницу: «b — палочка, затем кружок справа; d — кружок, затем палочка».'],
      ["Ko'p sezgili usul: harfni qumda, havoda, barmoq bilan bo'rtma harf ustida yozish.", 'Мультисенсорно: писать букву на песке, в воздухе, обводить пальцем рельефную букву.'],
      ["Tayanch so'z: «b — bola», «d — daraxt» rasmlari bilan.", 'Опорное слово: «b — bola», «d — daraxt» с картинками.'],
    ], ["Taqqoslash + ko'p sezgili mashq + tayanch", 'Сравнение + мультисенсорная тренировка + опора']),
    B.example(["Tabiatshunoslik ekskursiyasida bolalar «daraxtlarni kuzating» degan topshiriqdan keyin hech narsa ayta olmadi. Nima yetishmadi?", 'На экскурсии после задания «понаблюдайте за деревьями» дети ничего не смогли рассказать. Чего не хватило?'], [
      ["Kuzatish rejasi yo'q edi.", 'Не было плана наблюдения.'],
      ["Reja: 1) Barglar shakli qanday? 2) Po'stlog'i qanday — silliq yoki g'adir-budur? 3) Ikki daraxt nimasi bilan farq qiladi?", 'План: 1) Какой формы листья? 2) Какая кора — гладкая или шершавая? 3) Чем отличаются два дерева?'],
      ["Natijani jadval yoki rasmga tushirish.", 'Зафиксировать результат в таблице или рисунке.'],
    ], ["Maqsad va reja idrokni kuzatishga aylantiradi", 'Цель и план превращают восприятие в наблюдение']),
    B.example(["«Asr» so'zi 3-sinf o'quvchilariga tushunarsiz. Vaqt idrokini qanday qo'llab-quvvatlash mumkin?", '«Век» непонятен третьеклассникам. Как поддержать восприятие времени?'], [
      ["Vaqt tasmasi: sinf devorida 100 katakli lenta — har katak 1 yil.", 'Лента времени: на стене класса лента из 100 клеток — каждая клетка 1 год.'],
      ["O'z hayotiga bog'lash: «Sen 9 yoshdasan — 9 katak, buvang 70 yoshda — 70 katak».", 'Связь с собственной жизнью: «Тебе 9 лет — 9 клеток, бабушке 70 — 70 клеток».'],
    ], ["Mavhum vaqtni ko'rinadigan uzunlikka aylantirish", 'Превратить абстрактное время в видимую длину']),
    B.mistake(null, [
      ["Harflarni almashtirishni darhol «disleksiya» deb atash — 1-sinfda bu ko'pincha normal bosqich; uzoq davom etsa mutaxassisga murojaat.", 'Сразу называть путаницу букв «дислексией» — в 1 классе это часто нормальный этап; при стойких трудностях — к специалисту.'],
      ["«Yaxshilab qara!» deyish — qanday qarash kerakligi aytilmaydi.", 'Говорить «Смотри внимательно!» — не объясняя, как смотреть.'],
      ["Kuzatishni maqsadsiz «sayr» ga aylantirish.", 'Превращать наблюдение в бесцельную «прогулку».'],
    ]),
    B.try(cq('a-y-pc-t1', '3.2.2', { ...Y(PC), d: 1, rule: ["Kuzatish — maqsadli, rejali idrok.", 'Наблюдение — целенаправленное, планомерное восприятие.'] },
      ["Qaysi topshiriq idrokni kuzatishga aylantiradi?", 'Какое задание превращает восприятие в наблюдение?'],
      [[["«Ikki barg rasmini solishtiring: shakli, cheti va tomirlari nimasi bilan farq qiladi?»", '«Сравните два листа: чем отличаются форма, край и жилки?»']], [["«Rasmga qarang»", '«Посмотрите на рисунок»'], ["Maqsad va reja yo'q.", 'Нет цели и плана.']], [["«Chiroyli rasmmi?»", '«Красивый рисунок?»'], ["Baho so'ralmoqda, kuzatish emas.", 'Спрашивается оценка, а не наблюдение.']], [["«Rasmni ko'chirib chizing»", '«Перерисуйте рисунок»'], ["Kuzatish vazifasi aniq emas.", 'Задача наблюдения не поставлена.']]],
      'A', ["Maqsad + belgilar rejasi + taqqoslash.", 'Цель + план признаков + сравнение.'])),
    B.method(["Idrok va kuzatuvchanlikni rivojlantirish:", 'Как развивать восприятие и наблюдательность:'], [
      ["«Farqini top» rasmlari, «Nima o'zgardi?» o'yini.", 'Картинки «Найди отличия», игра «Что изменилось?».'],
      ["Ko'p sezgili ishlash: ko'rish, eshitish, ushlash, harakat.", 'Работа с несколькими анализаторами: зрение, слух, осязание, движение.'],
      ["Kuzatish kundaligi: ob-havo, o'simlik o'sishi — reja bo'yicha.", 'Дневник наблюдений: погода, рост растения — по плану.'],
    ]),
    B.summary(null, [
      ["Idrok — yaxlit obraz; kuzatish — maqsadli idrok.", 'Восприятие — целостный образ; наблюдение — целенаправленное восприятие.'],
      ["Kichik maktab yoshida: hissiy, kam tahliliy; b–d tipidagi almashtirishlar.", 'У младших школьников: эмоционально, слабо дифференцировано; путаница типа б–д.'],
      ["Maqsad, reja, taqqoslash, ko'p sezgili mashq.", 'Цель, план, сравнение, мультисенсорные упражнения.'],
    ]),
  ],
  check: [
    cq('a-y-pc-c1', '3.2.2', { ...Y(PC) }, ["Sezgi va idrokning asosiy farqi?", 'Главное различие ощущения и восприятия?'],
      [[["Sezgi — alohida xossa, idrok — yaxlit obraz", 'Ощущение — отдельное свойство, восприятие — целостный образ']], [["Sezgi faqat ko'rish bilan bog'liq", 'Ощущение связано только со зрением'], ["Sezgilar barcha sezgi a'zolari orqali.", 'Ощущения — через все органы чувств.']], [["Idrok tug'ma, sezgi o'rganiladi", 'Восприятие врождённое, ощущение приобретается'], ["Ikkalasi ham rivojlanadi.", 'Оба развиваются.']], [["Farqi yo'q", 'Разницы нет'], ["Bular turli jarayonlar.", 'Это разные процессы.']]],
      'A', ["Idrok sezgilarni yaxlit obrazga birlashtiradi.", 'Восприятие объединяет ощущения в целостный образ.']),
    cq('a-y-pc-c2', '3.2.2', { ...Y(PC) }, ["Dengizni hech ko'rmagan bola «dengiz» haqidagi matnni ko'l kabi tasavvur qiladi. Idrokning qaysi xususiyati?", 'Ребёнок, никогда не видевший моря, представляет текст о море как об озере. Какое свойство восприятия?'],
      [[['Appertseptsiya', 'Апперцепция']], [['Konstantlik', 'Константность'], ["Konstantlik — o'lcham, rangning barqaror idroki.", 'Константность — устойчивость восприятия размера, цвета.']], [["Tanlovchanlik", 'Избирательность'], ["Bu fon ustida ajratish.", 'Это выделение на фоне.']], [['Yaxlitlik', 'Целостность'], ["Gap tajribaga bog'liqlik haqida.", 'Речь о зависимости от опыта.']]],
      'A', ["Idrok oldingi tajribaga bog'liq — appertseptsiya.", 'Восприятие зависит от прежнего опыта — апперцепция.']),
    cq('a-y-pc-c3', '3.2.2', { ...Y(PC) }, ["1-sinf o'quvchisi «6» va «9» ni almashtiradi. Eng to'g'ri dastlabki baho?", 'Первоклассник путает «6» и «9». Наиболее верная первичная оценка?'],
      [[["Bu ko'pincha idrokning yoshga xos xususiyati; taqqoslash va ko'p sezgili mashq bilan ishlash", 'Чаще всего это возрастная особенность восприятия; работать через сравнение и мультисенсорные упражнения']], [["Bu albatta disleksiya", 'Это обязательно дислексия'], ["1-sinfda bu ko'pincha normal; tashxisni mutaxassis qo'yadi.", 'В 1 классе это часто норма; диагноз ставит специалист.']], [["Bola dangasa", 'Ребёнок ленится'], ["Bu idrok xususiyati, dangasalik emas.", 'Это особенность восприятия, а не лень.']], [["E'tibor bermaslik", 'Не обращать внимания'], ["Mashq bilan tezroq yengiladi.", 'С упражнениями преодолевается быстрее.']]],
      'A', ["Yosh xususiyatini bilish — to'g'ri yordamning boshlanishi.", 'Знание возрастной особенности — начало правильной помощи.']),
    cq('a-y-pc-c4', '3.2.2', { ...Y(PC) }, ["Kuzatishni tashkil etishda birinchi qadam?", 'Первый шаг при организации наблюдения?'],
      [[["Kuzatish maqsadini aniq aytish", 'Чётко поставить цель наблюдения']], [["Natijani baholash", 'Оценить результат'], ["Baholash oxirida bo'ladi.", 'Оценка — в конце.']], [["Ko'rgazmani ko'proq qilish", 'Увеличить количество наглядности'], ["Miqdor maqsadni almashtirmaydi.", 'Количество не заменяет цель.']], [["Bolalarni jim o'tirishga majbur qilish", 'Заставить детей сидеть тихо'], ["Bu kuzatish emas, intizom.", 'Это не наблюдение, а дисциплина.']]],
      'A', ["Maqsad idrokni yo'naltiradi.", 'Цель направляет восприятие.']),
    cq('a-y-pc-c5', '3.2.2', { ...Y(PC) }, ["Kichik maktab yoshida qaysi idrok turi eng sekin shakllanadi?", 'Какое восприятие формируется у младших школьников медленнее всего?'],
      [[["Vaqt idroki (katta vaqt oraliqlari: asr, yil)", 'Восприятие времени (крупных промежутков: век, год)']], [["Rang idroki", 'Восприятие цвета'], ["Rang farqlash bu yoshda yaxshi rivojlangan.", 'Различение цвета в этом возрасте развито хорошо.']], [["Tovush balandligi idroki", 'Восприятие громкости'], ["Bu oddiy sezgi darajasida yaxshi.", 'На уровне ощущений развито хорошо.']], [["Yaqin narsalar shakli", 'Форма близких предметов'], ["Shaklni yaxshi idrok qiladi, faqat tafsilotlarni o'tkazadi.", 'Форму воспринимает хорошо, пропускает лишь детали.']]],
      'A', ["Mavhum vaqt oraliqlari uchun tasma, kalendar kabi tayanch kerak.", 'Для абстрактных промежутков времени нужны опоры: лента, календарь.']),
  ],
});

/* ======================= 3. Imagination ======================= */
const IM = 'psy-imagination';
export const PSY_IMAGINATION = lesson({
  id: IM, module: 'psy-cog', level: 'core', stage: 'C', minutes: 18, codes: ['3.2.2'], requires: [TH], sourceIds: YS,
  title: ["Xayol (tasavvur) va uni rivojlantirish", 'Воображение и его развитие'],
  blocks: [
    B.intro(["Ertak o'qiyotgan bola ko'z oldida qahramonni, o'rmonni, saroyni «ko'radi» — bu xayol. Matematik masalada vaziyatni tasavvur qilish ham xayol. Xayolsiz na matnni, na masalani tushunib bo'lmaydi.", 'Ребёнок, читающий сказку, «видит» героя, лес, дворец — это воображение. Представить ситуацию в задаче — тоже воображение. Без воображения не понять ни текст, ни задачу.']),
    B.definition(["**Xayol** — mavjud tasavvurlarni qayta ishlab, yangi obrazlar yaratish jarayoni. **Qayta tiklovchi xayol** — tavsif, matn, chizma bo'yicha obraz yaratish (o'qiyotganda o'rmonni tasavvur qilish). **Ijodiy xayol** — mutlaqo yangi, o'ziga xos obraz yaratish (o'z ertagini o'ylab topish). **Ixtiyorsiz** xayol — o'z-o'zidan (orzular), **ixtiyoriy** — maqsadli.", '**Воображение** — процесс создания новых образов путём переработки имеющихся представлений. **Воссоздающее воображение** — создание образа по описанию, тексту, чертежу (представить лес при чтении). **Творческое воображение** — создание совершенно нового, оригинального образа (придумать свою сказку). **Непроизвольное** — само собой (мечты), **произвольное** — целенаправленное.']),
    B.table([['Usul', 'Приём'], ["Ma'nosi", 'Суть'], ['Misol', 'Пример']], [
      [['Aglyutinatsiya', 'Агглютинация'], ["Turli narsalar qismlarini birlashtirish", 'Соединение частей разных предметов'], ["Qanotli ot, suv parisi", 'Крылатый конь, русалка']],
      [['Giperbola / litota', 'Гипербола / литота'], ["Kattalashtirish yoki kichraytirish", 'Преувеличение или преуменьшение'], ["Dev, Bolta-bola", 'Великан, Мальчик-с-пальчик']],
      [["Urg'u berish (bo'rttirish)", 'Заострение'], ["Bitta belgini ajratib ko'rsatish", 'Подчёркивание одного признака'], ["Karikatura", 'Карикатура']],
      [['Tipiklashtirish', 'Типизация'], ["Ko'p narsalarning umumiy belgisini bitta obrazda", 'Общее многих предметов в одном образе'], ["Ertakdagi «ayyor tulki»", 'Сказочная «хитрая лиса»']],
    ], ["Xayol obrazlarini yaratish usullari", 'Способы создания образов воображения']),
    B.explain(["Kichik maktab yoshida **qayta tiklovchi xayol** jadal rivojlanadi — o'qish va matnli masalalar uni talab qiladi. Ijodiy xayol yorqin, lekin ko'pincha real tajribaga kam tayanadi. Xayol tajriba (tasavvurlar zaxirasi) qancha boy bo'lsa, shuncha boy bo'ladi — shuning uchun ekskursiya, kitob, kuzatish xayolni ham rivojlantiradi.", 'В младшем школьном возрасте интенсивно развивается **воссоздающее воображение** — его требуют чтение и текстовые задачи. Творческое воображение яркое, но часто мало опирается на реальный опыт. Воображение тем богаче, чем богаче опыт (запас представлений), — поэтому экскурсии, книги, наблюдения развивают и воображение.'], undefined, ['Yosh xususiyati', 'Возрастная особенность']),
    B.rule(["Xayolni rivojlantirish: 1) **tasavvurlar zaxirasini** boyitish (kuzatish, kitob, ekskursiya); 2) **qayta tiklash** mashqlari — matn bo'yicha rasm, so'z bilan tasvirlash; 3) **ijodiy** topshiriqlar — «Agar ... bo'lsa nima bo'lardi?», hikoyani davom ettirish; 4) xayol mahsulini **matnga qaytarib tekshirish**: «Matnda shunday yozilganmi?»", 'Развитие воображения: 1) обогащать **запас представлений** (наблюдение, книги, экскурсии); 2) упражнения на **воссоздание** — рисунок по тексту, словесное описание; 3) **творческие** задания — «Что было бы, если...?», продолжение рассказа; 4) **сверять** продукт воображения с текстом: «Так ли сказано в тексте?»']),
    B.example(["O'qish darsida «Qishki o'rmon» tasvirini o'qigandan keyin qayta tiklovchi xayolni qanday faollashtirish mumkin?", 'Как активизировать воссоздающее воображение после чтения описания «Зимний лес»?'], [
      ["«Ko'zingizni yuming: nimani ko'ryapsiz? Qanday tovush eshityapsiz?»", '«Закройте глаза: что вы видите? Какие звуки слышите?»'],
      ["Matn bo'yicha rasm chizish, so'ng matn bilan solishtirish: «Rasmingizda matndagi qaysi tafsilot bor?»", 'Нарисовать по тексту и сверить: «Какие детали текста есть на вашем рисунке?»'],
      ["So'z bilan tasvirlash: muallifning sifatlarini ishlatib.", 'Словесное рисование с использованием эпитетов автора.'],
    ], ["Matn → obraz → matn bilan tekshirish", 'Текст → образ → проверка по тексту']),
    B.example(["Matematikada xayol: «Hovuzga 3 ta o'rdak suzib keldi, keyin yana 4 ta...» — masalani tasavvur qilishga qanday yordam berish mumkin?", 'Воображение в математике: «К пруду приплыли 3 утки, потом ещё 4...» — как помочь представить задачу?'], [
      ["Vaziyatni «kino» kabi so'zlab berish: avval nima, keyin nima.", 'Пересказать ситуацию как «кино»: что сначала, что потом.'],
      ["Sxematik chizma: doirachalar bilan o'rdaklar.", 'Схематический рисунок: утки кружочками.'],
      ["Xayoldan mantiqqa: «O'rdaklar ko'paydimi yoki kamaydimi? Qaysi amal?»", 'От образа к логике: «Уток стало больше или меньше? Какое действие?»'],
    ], ["Qayta tiklovchi xayol masalani tushunishning sharti", 'Воссоздающее воображение — условие понимания задачи']),
    B.example(["Ijodiy topshiriq: «Agar odamlar uchsa, shahar qanday o'zgarardi?» Bola: «Hamma uchadi». Qanday chuqurlashtirish mumkin?", 'Творческое задание: «Как изменился бы город, если бы люди умели летать?» Ребёнок: «Все бы летали». Как углубить?'], [
      ["Yo'naltiruvchi savollar: «Yo'llar kerak bo'larmidi? Uylarning eshigi qayerda bo'lardi? Svetofor qanday bo'lardi?»", 'Наводящие вопросы: «Нужны ли были бы дороги? Где были бы двери домов? Какими были бы светофоры?»'],
      ["Natijani rasm yoki qisqa hikoya sifatida rasmiylashtirish.", 'Оформить результат рисунком или коротким рассказом.'],
    ], ["Savollar xayolni tafsilotlar bilan boyitadi", 'Вопросы наполняют воображение деталями']),
    B.mistake(null, [
      ["Ijodiy javobni «bunday bo'lmaydi» deb rad etish — xayol so'nadi.", 'Отвергать творческий ответ словами «так не бывает» — воображение угасает.'],
      ["Faqat namuna bo'yicha ishlash — tayyor rasmni ko'chirish ijodiy xayolni rivojlantirmaydi.", 'Работать только по образцу — срисовывание не развивает творческое воображение.'],
      ["Qayta tiklovchi xayolni matn bilan tekshirmaslik — bola matnda yo'q narsani «o'qiydi».", 'Не сверять воссоздающее воображение с текстом — ребёнок «читает» то, чего нет.'],
    ]),
    B.try(cq('a-y-im-t1', '3.2.2', { ...Y(IM), d: 1, rule: ["Tavsif bo'yicha obraz — qayta tiklovchi xayol.", 'Образ по описанию — воссоздающее воображение.'] },
      ["O'quvchi geografik tavsifni o'qib, cho'l manzarasini tasavvur qildi. Xayolning qaysi turi?", 'Ученик, прочитав описание, представил пейзаж пустыни. Какой вид воображения?'],
      [[["Qayta tiklovchi", 'Воссоздающее']], [["Ijodiy", 'Творческое'], ["Obraz tavsif asosida, yangi emas.", 'Образ создан по описанию, он не новый.']], [["Ixtiyorsiz orzu", 'Непроизвольная мечта'], ["Maqsadli o'qish — ixtiyoriy jarayon.", 'Целенаправленное чтение — произвольный процесс.']], [["Idrok", 'Восприятие'], ["Cho'l ko'z oldida yo'q — bu xayol.", 'Пустыни перед глазами нет — это воображение.']]],
      'A', ["Tavsif, matn yoki chizma bo'yicha obraz — qayta tiklovchi xayol.", 'Образ по описанию, тексту или чертежу — воссоздающее воображение.'])),
    B.method(["Xayolni rivojlantirish bo'yicha amaliy usullar:", 'Практические приёмы развития воображения:'], [
      ["«Hikoyani davom ettir», «Boshqa yakun o'ylab top».", '«Продолжи рассказ», «Придумай другой конец».'],
      ["«Doiradan nima yasash mumkin?» — bitta shakldan ko'p obraz.", '«Во что можно превратить круг?» — много образов из одной фигуры.'],
      ["Matn bo'yicha so'z bilan rasm chizish va diafilm tuzish.", 'Словесное рисование и составление диафильма по тексту.'],
      ["Ijodiy javobni baholashda asoslilik va tafsilotlarni rag'batlantirish.", 'При оценке творческого ответа поощрять обоснованность и детализацию.'],
    ]),
    B.summary(null, [
      ["Xayol — tasavvurlardan yangi obraz yaratish.", 'Воображение — создание новых образов из представлений.'],
      ["Qayta tiklovchi (matn bo'yicha) va ijodiy (yangi) xayol.", 'Воссоздающее (по тексту) и творческое (новое) воображение.'],
      ["Tajriba boyligi — xayol boyligi; matn bilan tekshirish.", 'Богатство опыта — богатство воображения; сверка с текстом.'],
    ]),
  ],
  check: [
    cq('a-y-im-c1', '3.2.2', { ...Y(IM) }, ["Ertakdagi «qanotli ot» obrazi qaysi usul bilan yaratilgan?", 'Каким приёмом создан сказочный образ «крылатого коня»?'],
      [[['Aglyutinatsiya', 'Агглютинация']], [['Giperbola', 'Гипербола'], ["Kattalashtirish emas, qismlarni birlashtirish.", 'Не преувеличение, а соединение частей.']], [['Tipiklashtirish', 'Типизация'], ["Ko'p narsalarning umumlashmasi emas.", 'Это не обобщение многих предметов.']], [["Urg'u berish", 'Заострение'], ["Bitta belgi bo'rttirilmagan.", 'Один признак не подчёркнут.']]],
      'A', ["Ot va qush qismlarini birlashtirish — aglyutinatsiya.", 'Соединение частей коня и птицы — агглютинация.']),
    cq('a-y-im-c2', '3.2.2', { ...Y(IM) }, ["Kichik maktab yoshida xayolning qaysi turi o'qish va masala yechish talabi bilan jadal rivojlanadi?", 'Какой вид воображения интенсивно развивается у младших школьников благодаря чтению и решению задач?'],
      [[["Qayta tiklovchi", 'Воссоздающее']], [["Faqat ixtiyorsiz", 'Только непроизвольное'], ["O'qish ixtiyoriy xayolni talab qiladi.", 'Чтение требует произвольного воображения.']], [["Xayol bu yoshda rivojlanmaydi", 'В этом возрасте воображение не развивается'], ["Aksincha, faol rivojlanadi.", 'Наоборот, активно развивается.']], [["Faqat tush ko'rish", 'Только сновидения'], ["Bu o'quv faoliyatiga bog'liq emas.", 'Это не связано с учебной деятельностью.']]],
      'A', ["Matn va masala bo'yicha obraz yaratish — qayta tiklovchi xayol.", 'Создание образа по тексту и задаче — воссоздающее воображение.']),
    cq('a-y-im-c3', '3.2.2', { ...Y(IM) }, ["O'quvchi ertakka g'ayrioddiy yakun o'ylab topdi. O'qituvchining eng to'g'ri munosabati?", 'Ученик придумал необычный конец сказки. Наиболее верная реакция учителя?'],
      [[["Ijodini qo'llab-quvvatlab, «Bu yakun qahramonlar xarakteriga mosmi?» deb asoslashga undash", 'Поддержать творчество и предложить обосновать: «Подходит ли такой конец характерам героев?»']], [["«Ertakda bunday emas» deb tuzatish", 'Поправить: «В сказке не так»'], ["Topshiriq ijodiy edi; rad etish xayolni so'ndiradi.", 'Задание было творческим; отказ гасит воображение.']], [["E'tiborsiz qoldirish", 'Оставить без внимания'], ["Qo'llab-quvvatlash motivatsiyani oshiradi.", 'Поддержка повышает мотивацию.']], [["Faqat kulish", 'Просто посмеяться'], ["Kulgi bolani uyaltirishi mumkin.", 'Смех может смутить ребёнка.']]],
      'A', ["Ijodni rag'batlantirish + mantiqiy asoslash.", 'Поощрение творчества + логическое обоснование.']),
    cq('a-y-im-c4', '3.2.2', { ...Y(IM) }, ["Xayolni rivojlantirish uchun eng muhim shart?", 'Главное условие развития воображения?'],
      [[["Bolaning tajribasi va tasavvurlar zaxirasini boyitish", 'Обогащение опыта и запаса представлений ребёнка']], [["Ko'proq multfilm ko'rsatish", 'Показывать больше мультфильмов'], ["Passiv ko'rish faol xayol emas.", 'Пассивный просмотр — не активное воображение.']], [["Qat'iy namunalar bilan ishlash", 'Работать по жёстким образцам'], ["Namuna ijodiy xayolni cheklaydi.", 'Образец ограничивает творческое воображение.']], [["Xayolni cheklash, faqat faktlar bilan ishlash", 'Ограничивать фантазию, работать только с фактами'], ["Xayol o'quv faoliyati uchun ham zarur.", 'Воображение необходимо и для учёбы.']]],
      'A', ["Xayol tasavvurlar asosida quriladi.", 'Воображение строится на представлениях.']),
    cq('a-y-im-c5', '3.2.2', { ...Y(IM) }, ["O'quvchi matnni o'qib chizgan rasmida matnda yo'q tafsilotlar ko'p. Qanday davom ettirish kerak?", 'На рисунке ученика по тексту много деталей, которых в тексте нет. Как продолжить?'],
      [[["Rasmni matn bilan solishtirib, matnda bor va yo'q tafsilotlarni birga ajratish", 'Сверить рисунок с текстом и вместе разделить детали, которые есть и которых нет в тексте']], [["Rasmni yaroqsiz deb topish", 'Признать рисунок негодным'], ["Rag'batni yo'qotadi; tekshirish yetarli.", 'Теряется мотивация; достаточно сверки.']], [["Hech narsa demaslik", 'Ничего не говорить'], ["Matnni aniq tushunish o'rgatilmaydi.", 'Точному пониманию текста не учим.']], [["Faqat rang tanlovini baholash", 'Оценить только выбор цвета'], ["Asosiy maqsad — matnni tushunish.", 'Главная цель — понимание текста.']]],
      'A', ["Qayta tiklovchi xayol matnga tayanishi kerak.", 'Воссоздающее воображение должно опираться на текст.']),
  ],
});

/* ======================= 4. Motivation ======================= */
const MO = 'psy-motivation';
export const PSY_MOTIVATION = lesson({
  id: MO, module: 'psy-person', level: 'core', stage: 'C', minutes: 22, codes: ['3.1.3', '3.2.5'], requires: ['psy-age'], sourceIds: [...YS, 'karimova'],
  title: ["O'quv motivatsiyasi", 'Учебная мотивация'],
  blocks: [
    B.intro(["1-sinfga kelgan bolalarning ko'pchiligi maktabga intiladi, lekin 3–4-sinfga kelib ba'zilarining qiziqishi so'nadi. Motivatsiya o'z-o'zidan saqlanmaydi: uni o'qituvchining kundalik qarorlari kuchaytiradi yoki susaytiradi.", 'Большинство первоклассников стремятся в школу, но к 3–4 классу у некоторых интерес гаснет. Мотивация сама по себе не сохраняется: её укрепляют или ослабляют ежедневные решения учителя.']),
    B.definition(["**Motiv** — faoliyatga undovchi sabab. **Ichki motivatsiya** — faoliyatning o'zi qiziq (masalani yechish zavqi). **Tashqi motivatsiya** — natija tashqarisidagi narsa uchun (baho, maqtov, sovg'a, jazodan qochish). **O'quv motivlari**: bilish (yangi narsani bilish), ijtimoiy (o'qituvchi va ota-onaning roziligi, sinfdagi o'rin), muvaffaqiyatga intilish yoki muvaffaqiyatsizlikdan qochish.", '**Мотив** — причина, побуждающая к деятельности. **Внутренняя мотивация** — интересна сама деятельность (удовольствие от решения задачи). **Внешняя мотивация** — ради чего-то вне деятельности (отметка, похвала, подарок, избегание наказания). **Учебные мотивы**: познавательные (узнать новое), социальные (одобрение учителя и родителей, место в классе), стремление к успеху или избегание неудачи.']),
    B.explain(["O'z-o'zini belgilash nazariyasi (E. Desi, R. Rayan) — ko'p tadqiqotlar bilan qo'llab-quvvatlangan: ichki motivatsiya uchta ehtiyoj qondirilganda kuchayadi: **avtonomiya** (tanlov va ovoz), **kompetentlik** («men uddalayapman»), **bog'liqlik** (iliq munosabat, qabul qilinganlik). Tadqiqotlar shuni ham ko'rsatadi: allaqachon qiziq bo'lgan ish uchun oldindan va'da qilingan moddiy mukofot ba'zan ichki qiziqishni pasaytiradi.", 'Теория самодетерминации (Э. Деси, Р. Райан), поддержанная многими исследованиями: внутренняя мотивация растёт, когда удовлетворены три потребности: **автономия** (выбор и голос), **компетентность** («у меня получается»), **связанность** (тёплые отношения, принятие). Исследования показывают и другое: заранее обещанная материальная награда за уже интересное дело иногда снижает внутренний интерес.'], undefined, ['Ilmiy asos', 'Научная основа']),
    B.rule(["O'qituvchi harakatlari: 1) **muvaffaqiyat vaziyati** — topshiriq qiyin, lekin bajariladigan; 2) **tanlov** (ikki topshiriqdan birini tanlash); 3) **aniq maqtov** — natijani emas, **harakat va usulni**: «Sen chizma chizib, xatoni o'zing topding»; 4) bilimning **foydasini** ko'rsatish; 5) **taraqqiyotni** ko'rinadigan qilish (o'z natijasi bilan solishtirish, boshqalar bilan emas).", 'Действия учителя: 1) **ситуация успеха** — задание трудное, но выполнимое; 2) **выбор** (одно из двух заданий); 3) **конкретная похвала** — не результата, а **усилий и способа**: «Ты нарисовал схему и сам нашёл ошибку»; 4) показывать **пользу** знаний; 5) делать **прогресс** видимым (сравнение с собой, а не с другими).']),
    B.example(["3-sinf o'quvchisi matematikadan «Men baribir uddalay olmayman» deydi va urinmaydi. Qanday yordam berish mumkin?", 'Третьеклассник говорит: «Всё равно у меня не получится» — и не пытается. Как помочь?'], [
      ["Sabab: muvaffaqiyatsizlik tajribasi → kompetentlik hissi yo'q.", 'Причина: опыт неудач → нет чувства компетентности.'],
      ["Topshiriqni kichik qadamlarga bo'lish — birinchi qadam albatta muvaffaqiyatli bo'lsin.", 'Разбить задание на маленькие шаги — первый шаг обязательно успешный.'],
      ["Harakatni aniq maqtash: «Sen birinchi amalni to'g'ri tanlading».", 'Конкретно похвалить усилие: «Ты верно выбрал первое действие».'],
      ["Taraqqiyot jadvali: «Dushanba — 3 ta, juma — 6 ta to'g'ri».", 'Таблица прогресса: «В понедельник — 3 верных, в пятницу — 6».'],
    ], ["Muvaffaqiyat vaziyati + jarayonni maqtash + taraqqiyotni ko'rsatish", 'Ситуация успеха + похвала процесса + видимый прогресс']),
    B.example(["O'qituvchi har bir o'qilgan kitob uchun yulduzcha va sovg'a va'da qildi. Bir oydan keyin bolalar faqat yupqa kitoblarni tanlay boshladi. Nima bo'ldi?", 'Учитель пообещал звёздочку и подарок за каждую прочитанную книгу. Через месяц дети стали выбирать только тонкие книги. Что произошло?'], [
      ["Tashqi mukofot maqsadni o'zgartirdi: kitob o'qish emas, yulduzcha yig'ish.", 'Внешняя награда подменила цель: не чтение, а сбор звёздочек.'],
      ["Yaxshiroq: kitob muhokamasi, tavsiya devori, o'quvchi tanlagan kitob haqida so'zlab berish — ichki qiziqishni kuchaytiradi.", 'Лучше: обсуждение книг, «стена рекомендаций», рассказ о выбранной книге — это укрепляет внутренний интерес.'],
    ], ["Tashqi mukofot ehtiyotkorlik bilan; ichki qiziqishni oziqlantirish", 'Внешние награды — осторожно; питать внутренний интерес']),
    B.example(["Ikki xil maqtovni solishtiring: «Sen aqllisan!» va «Sen ikki usulni sinab, to'g'risini tanlading».", 'Сравните две похвалы: «Ты умный!» и «Ты попробовал два способа и выбрал верный».'], [
      ["Birinchisi — qobiliyatni maqtash: qiyin topshiriqda bola «aqlli» obrazini yo'qotishdan qo'rqib, urinmasligi mumkin.", 'Первая хвалит способности: в трудном задании ребёнок может не пытаться, боясь потерять образ «умного».'],
      ["Ikkinchisi — usul va harakatni maqtash: bolaga nima foydali bo'lganini ko'rsatadi va qiyinchilikda takrorlashga undaydi.", 'Вторая хвалит способ и усилие: показывает, что помогло, и побуждает повторять это в трудной ситуации.'],
    ], ["Jarayonni maqtash — samaraliroq", 'Похвала процесса эффективнее']),
    B.mistake(null, [
      ["Doimiy taqqoslash: «Qarang, Aziz qanday yaxshi yozdi!» — boshqalar uchun muvaffaqiyatsizlik hissi.", 'Постоянное сравнение: «Посмотрите, как хорошо написал Азиз!» — у остальных чувство неудачи.'],
      ["Faqat baho va jazo bilan qo'rqitish — muvaffaqiyatsizlikdan qochish motivi kuchayadi, qiziqish so'nadi.", 'Запугивание отметками и наказанием — растёт мотив избегания неудачи, гаснет интерес.'],
      ["Umumiy, mazmunsiz maqtov «Barakalla» — ma'lumot bermaydi.", 'Общая пустая похвала «Молодец» — не несёт информации.'],
      ["Juda oson yoki juda qiyin topshiriqlar — ikkalasi ham motivatsiyani pasaytiradi.", 'Слишком лёгкие или слишком трудные задания — оба снижают мотивацию.'],
    ]),
    B.try(cq('a-y-mo-t1', '3.1.3', { ...Y(MO), d: 1, rule: ["Ichki motivatsiya — faoliyatning o'zi qiziq.", 'Внутренняя мотивация — интересна сама деятельность.'] },
      ["Qaysi holat ichki motivatsiyaga misol?", 'Какая ситуация — пример внутренней мотивации?'],
      [[["Bola qiziqqani uchun tanaffusda ham jumboq yechyapti", 'Ребёнок решает головоломку даже на перемене, потому что ему интересно']], [["Bola sovg'a uchun kitob o'qiyapti", 'Ребёнок читает ради подарка'], ["Sovg'a — tashqi motiv.", 'Подарок — внешний мотив.']], [["Bola jazodan qo'rqib uy vazifasini qildi", 'Ребёнок сделал домашнее задание из страха наказания'], ["Jazodan qochish — tashqi motiv.", 'Избегание наказания — внешний мотив.']], [["Bola «5» baho olish uchun o'qiyapti", 'Ребёнок учится ради пятёрки'], ["Baho — tashqi motiv.", 'Отметка — внешний мотив.']]],
      'A', ["Faoliyatning o'zi qiziq — ichki motivatsiya.", 'Интересна сама деятельность — внутренняя мотивация.'])),
    B.method(["Motivatsiyani kundalik darsda qo'llab-quvvatlash:", 'Как поддерживать мотивацию на каждом уроке:'], [
      ["Dars boshida «Bugun nimani o'rganamiz va bu nima uchun kerak?»", 'В начале урока: «Чему научимся и зачем это нужно?»'],
      ["Har darsda kichik tanlov: topshiriq, sherik yoki natija shakli.", 'На каждом уроке маленький выбор: задание, партнёр или форма результата.'],
      ["Xatoni o'rganish imkoniyati sifatida ko'rsatish: «Bu xato bizga nimani o'rgatdi?»", 'Показывать ошибку как возможность научиться: «Чему нас научила эта ошибка?»'],
      ["Shaxsiy taraqqiyot papkasi (portfolio).", 'Личная папка достижений (портфолио).'],
    ]),
    B.summary(null, [
      ["Ichki va tashqi motivatsiya; bilish va ijtimoiy motivlar.", 'Внутренняя и внешняя мотивация; познавательные и социальные мотивы.'],
      ["Avtonomiya, kompetentlik, bog'liqlik — ichki motivatsiya manbai.", 'Автономия, компетентность, связанность — источник внутренней мотивации.'],
      ["Muvaffaqiyat vaziyati, tanlov, jarayonni maqtash; taqqoslash va qo'rqitishdan qochish.", 'Ситуация успеха, выбор, похвала процесса; избегать сравнений и запугивания.'],
    ]),
  ],
  check: [
    cq('a-y-mo-c1', '3.1.3', { ...Y(MO) }, ["Qaysi maqtov o'quvchining keyingi harakatiga eng ko'p yordam beradi?", 'Какая похвала больше всего помогает дальнейшим усилиям ученика?'],
      [[["«Sen masalani chizma bilan tahlil qilding, shuning uchun to'g'ri yechding»", '«Ты разобрал задачу по чертежу, поэтому решил верно»']], [["«Sen juda aqllisan»", '«Ты очень умный»'], ["Qobiliyatni maqtash qiyinchilikda urinishni kamaytirishi mumkin.", 'Похвала способностей может снижать усилия в трудностях.']], [["«Barakalla»", '«Молодец»'], ["Ma'lumot bermaydi.", 'Не несёт информации.']], [["«Sen hammadan yaxshisan»", '«Ты лучше всех»'], ["Taqqoslash boshqalarni ruhsizlantiradi.", 'Сравнение демотивирует остальных.']]],
      'A', ["Usulni aniq maqtash nima ishlaganini ko'rsatadi.", 'Конкретная похвала способа показывает, что сработало.']),
    cq('a-y-mo-c2', '3.2.5', { ...Y(MO) }, ["O'z-o'zini belgilash nazariyasi bo'yicha ichki motivatsiyaning uch asosi?", 'Три основы внутренней мотивации по теории самодетерминации?'],
      [[["Avtonomiya, kompetentlik, bog'liqlik", 'Автономия, компетентность, связанность']], [["Baho, maqtov, sovg'a", 'Отметка, похвала, подарок'], ["Bular tashqi omillar.", 'Это внешние факторы.']], [["Intizom, nazorat, jazo", 'Дисциплина, контроль, наказание'], ["Bular ichki motivatsiyani kuchaytirmaydi.", 'Это не усиливает внутреннюю мотивацию.']], [["Tezlik, aniqlik, xotira", 'Скорость, точность, память'], ["Bular kognitiv ko'rsatkichlar.", 'Это когнитивные показатели.']]],
      'A', ["Deci va Ryan: tanlov, uddalash hissi, iliq munosabat.", 'Деси и Райан: выбор, ощущение успеха, тёплые отношения.']),
    cq('a-y-mo-c3', '3.1.3', { ...Y(MO) }, ["Muvaffaqiyat vaziyati qanday topshiriq bilan yaratiladi?", 'Какое задание создаёт ситуацию успеха?'],
      [[["Qiyin, lekin o'quvchi kuchi yetadigan (kerak bo'lsa tayanch bilan)", 'Трудное, но посильное (при необходимости с опорой)']], [["Juda oson", 'Очень лёгкое'], ["Oson g'alaba qadrlanmaydi.", 'Лёгкая победа не ценится.']], [["Juda qiyin", 'Очень трудное'], ["Muvaffaqiyatsizlik hissi kuchayadi.", 'Усиливается чувство неудачи.']], [["Hamma uchun bir xil, tayanchsiz", 'Одинаковое для всех, без опоры'], ["Ba'zilar uchun qiyin, ba'zilar uchun oson bo'ladi.", 'Для одних трудно, для других легко.']]],
      'A', ["Bajariladigan qiyinlik — kompetentlik hissining manbai.", 'Посильная трудность — источник чувства компетентности.']),
    cq('a-y-mo-c4', '3.1.3', { ...Y(MO) }, ["Qaysi o'qituvchi harakati o'quv motivatsiyasini pasaytiradi?", 'Какое действие учителя снижает учебную мотивацию?'],
      [[["Har kuni eng yaxshi va eng yomon daftarlarni sinfga ko'rsatish", 'Каждый день показывать классу лучшую и худшую тетради']], [["O'quvchiga ikki topshiriqdan birini tanlashga ruxsat berish", 'Разрешить ученику выбрать одно из двух заданий'], ["Tanlov avtonomiyani qo'llab-quvvatlaydi.", 'Выбор поддерживает автономию.']], [["Taraqqiyotni o'z natijasi bilan solishtirish", 'Сравнивать прогресс с собственным результатом'], ["Bu kompetentlik hissini oshiradi.", 'Это повышает чувство компетентности.']], [["Bilimning hayotdagi foydasini ko'rsatish", 'Показывать пользу знаний в жизни'], ["Bu ma'no beradi va motivatsiyani kuchaytiradi.", 'Это придаёт смысл и усиливает мотивацию.']]],
      'A', ["Ommaviy taqqoslash va uyaltirish motivatsiyani pasaytiradi.", 'Публичное сравнение и пристыжение снижают мотивацию.']),
    cq('a-y-mo-c5', '3.2.5', { ...Y(MO) }, ["Bolalar allaqachon yoqtiradigan rasm chizish uchun o'qituvchi sovg'a va'da qila boshladi. Ehtimoliy oqibat?", 'Учитель стал обещать подарки за рисование, которое детям и так нравится. Вероятное последствие?'],
      [[["Ichki qiziqish pasayishi mumkin: bolalar sovg'asiz chizishni xohlamay qolishi mumkin", 'Внутренний интерес может снизиться: без подарка дети могут перестать хотеть рисовать']], [["Ichki qiziqish albatta ikki baravar oshadi", 'Внутренний интерес обязательно удвоится'], ["Tadqiqotlar buni tasdiqlamaydi.", 'Исследования этого не подтверждают.']], [["Hech qanday ta'sir bo'lmaydi", 'Никакого влияния не будет'], ["Kutilgan mukofot ta'sir qilishi mumkin.", 'Ожидаемая награда может влиять.']], [["Bolalar rasm chizishni butunlay unutadi", 'Дети полностью забудут, как рисовать'], ["Ko'nikma yo'qolmaydi, motiv o'zgaradi.", 'Навык не пропадёт, меняется мотив.']]],
      'A', ["Oldindan va'da qilingan mukofot ba'zan ichki motivatsiyani susaytiradi.", 'Заранее обещанная награда иногда ослабляет внутреннюю мотивацию.']),
  ],
});

/* ======================= 5. Emotions ======================= */
const EM = 'psy-emotions';
export const PSY_EMOTIONS = lesson({
  id: EM, module: 'psy-person', level: 'core', stage: 'C', minutes: 20, codes: ['3.2.4', '3.2.5'], requires: [MO], sourceIds: YS,
  title: ["Emotsiyalar va o'zini boshqarish", 'Эмоции и саморегуляция'],
  blocks: [
    B.intro(["Qo'rqib turgan bola masalani yecha olmaydi — bilmagani uchun emas, xavotir fikrlashga to'sqinlik qilgani uchun. Emotsiyalar o'qishning «foni»: xavfsiz, iliq muhitda bilim yaxshiroq o'zlashtiriladi.", 'Испуганный ребёнок не может решить задачу — не потому что не знает, а потому что тревога мешает думать. Эмоции — «фон» учения: в безопасной, тёплой обстановке знания усваиваются лучше.']),
    B.definition(["**Emotsiya** — vaziyatga bevosita, qisqa muddatli his-hayajonli javob (quvonch, qo'rquv, g'azab). **His-tuyg'u** — barqarorroq munosabat (do'stlik, vatanparvarlik, burch hissi). **Emotsional o'zini boshqarish** — o'z emotsiyasini sezish, nomlash va ifodalash usulini tanlash. **Xavotir** — kutilayotgan muvaffaqiyatsizlik yoki xavfdan bezovtalanish.", '**Эмоция** — непосредственная, кратковременная переживательная реакция на ситуацию (радость, страх, гнев). **Чувство** — более устойчивое отношение (дружба, любовь к Родине, чувство долга). **Эмоциональная саморегуляция** — умение заметить эмоцию, назвать её и выбрать способ её выражения. **Тревожность** — беспокойство из-за ожидаемой неудачи или опасности.']),
    B.explain(["Kichik maktab yoshida emotsiyalar **ochiq va tez almashinuvchan**: bola kulib turib, birdan yig'lashi mumkin. Emotsiyani **yashirish va boshqarish** ko'nikmasi endi shakllanmoqda. Baho va o'qituvchining munosabati kuchli his-hayajon manbai bo'ladi. Yuqori xavotir diqqat va ishchi xotirani band qiladi — natijada bola bilganini ham bajara olmaydi.", 'У младших школьников эмоции **открыты и изменчивы**: ребёнок может смеяться и вдруг заплакать. Умение **сдерживать и регулировать** эмоции только формируется. Отметки и отношение учителя — сильный источник переживаний. Высокая тревожность занимает внимание и рабочую память — ребёнок не может выполнить даже то, что знает.'], undefined, ['Yosh xususiyati', 'Возрастная особенность']),
    B.rule(["O'zini boshqarishga o'rgatish ketma-ketligi: 1) **sezish** («Tanangda nima bo'lyapti?»); 2) **nomlash** («Men g'azablandim»); 3) **to'xtash** (chuqur nafas, 10 gacha sanash); 4) **tanlash** (so'z bilan aytish, yordam so'rash). O'qituvchi bu ketma-ketlikni **namuna** sifatida o'zi ko'rsatadi va sinfda xatoga **xavfsiz munosabat** yaratadi.", 'Последовательность обучения саморегуляции: 1) **заметить** («Что происходит в теле?»); 2) **назвать** («Я злюсь»); 3) **остановиться** (глубокий вдох, счёт до 10); 4) **выбрать** (сказать словами, попросить помощи). Учитель сам показывает эту последовательность как **образец** и создаёт в классе **безопасное** отношение к ошибкам.']),
    B.example(["Nazorat ishi oldidan o'quvchi yig'lay boshladi: «Men hammasini unutdim!» O'qituvchining harakatlari?", 'Перед контрольной ученик заплакал: «Я всё забыл!» Действия учителя?'], [
      ["Emotsiyani tan olish: «Ko'rib turibman, sen xavotirdasan. Bu tabiiy».", 'Признать эмоцию: «Вижу, ты волнуешься. Это естественно».'],
      ["Tinchlantirish usuli: birga 3 marta chuqur nafas olish.", 'Приём успокоения: вместе 3 раза глубоко вдохнуть.'],
      ["Kichik birinchi qadam: «Birinchi, eng oson topshiriqni o'qib ko'r».", 'Маленький первый шаг: «Прочитай первое, самое лёгкое задание».'],
      ["Keyinroq: nazorat ishlarini qo'rqinchli emas, formativ mashq shaklida ham o'tkazish.", 'Позже: проводить проверки и в формате формативных тренировок, а не только как «страшные» контрольные.'],
    ], ["Tan olish → tinchlantirish → kichik qadam", 'Признание → успокоение → маленький шаг']),
    B.example(["Tanaffusdan keyin ikki o'quvchi janjallashib keldi, biri musht qisgan. Darsni qanday boshlash kerak?", 'После перемены двое учеников пришли поссорившись, один сжимает кулаки. Как начать урок?'], [
      ["Avval xavfsizlik: ularni ajratish, ovozni pasaytirib, xotirjam gapirish.", 'Сначала безопасность: развести их, говорить тихо и спокойно.'],
      ["Qisqa nomlash: «Sen hozir juda g'azablangansan» — baholamasdan.", 'Коротко назвать: «Ты сейчас очень злишься» — без оценки.'],
      ["Muhokamani keyinga qoldirish: «Tanaffusda uchalamiz gaplashamiz» — sinf darsni boshlaydi.", 'Отложить разбор: «На перемене поговорим втроём» — класс начинает урок.'],
    ], ["Xavfsizlik → nomlash → keyinroq hal qilish", 'Безопасность → называние → разбор позже']),
    B.example(["«His-tuyg'ular termometri»: kun boshida o'quvchilar kayfiyatini belgilaydi. Bu nima beradi?", '«Термометр настроения»: в начале дня ученики отмечают своё состояние. Что это даёт?'], [
      ["Bolalar emotsiyani sezish va nomlashni mashq qiladi.", 'Дети тренируются замечать и называть эмоции.'],
      ["O'qituvchi kimga e'tibor kerakligini ko'radi.", 'Учитель видит, кому нужно внимание.'],
      ["Shart: majburlash yo'q, sharhlar maxfiy, uyaltirish yo'q.", 'Условие: без принуждения, комментарии конфиденциальны, без пристыжения.'],
    ], ["Emotsional savodxonlik va erta yordam", 'Эмоциональная грамотность и ранняя помощь']),
    B.mistake(null, [
      ["«Yig'lama!», «Erkak kishi yig'lamaydi!» — emotsiyani taqiqlash uni yo'qotmaydi, faqat yashirishga o'rgatadi.", '«Не плачь!», «Мальчики не плачут!» — запрет не убирает эмоцию, а учит её прятать.'],
      ["Bolani sinf oldida uyaltirish — xavotir va qo'rquv kuchayadi.", 'Стыдить ребёнка перед классом — растут тревога и страх.'],
      ["O'qituvchining o'zi baqirishi — o'zini boshqarishning salbiy namunasi.", 'Крик самого учителя — отрицательный образец саморегуляции.'],
      ["G'azablangan bola bilan darhol «tarbiyaviy suhbat» — avval tinchlanish kerak.", 'Немедленная «воспитательная беседа» с разгневанным ребёнком — сначала нужно успокоиться.'],
    ]),
    B.try(cq('a-y-em-t1', '3.2.4', { ...Y(EM), d: 1, rule: ["Sezish → nomlash → to'xtash → tanlash.", 'Заметить → назвать → остановиться → выбрать.'] },
      ["O'zini boshqarishga o'rgatishda birinchi qadam qaysi?", 'Какой первый шаг в обучении саморегуляции?'],
      [[["Emotsiyani sezish va nomlash", 'Заметить и назвать эмоцию']], [["Emotsiyani darhol bostirish", 'Сразу подавить эмоцию'], ["Bostirish o'zini boshqarish emas.", 'Подавление — не саморегуляция.']], [["Jazolash", 'Наказать'], ["Jazo boshqarish usulini o'rgatmaydi.", 'Наказание не учит способу регуляции.']], [["E'tiborsiz qoldirish", 'Не замечать'], ["Bola usulni o'rganmaydi.", 'Ребёнок не научится способу.']]],
      'A', ["Nomlangan emotsiyani boshqarish osonroq.", 'Названную эмоцию легче регулировать.'])),
    B.method(["Emotsional muhitni yaratish:", 'Как создавать эмоциональный климат:'], [
      ["Xatoga munosabat qoidasi: «Xato — o'rganishning bir qismi».", 'Правило отношения к ошибкам: «Ошибка — часть учения».'],
      ["Emotsiyalar lug'ati: rasmli kartochkalar (quvonch, xafagarchilik, g'azab, qo'rquv, hayrat).", 'Словарь эмоций: карточки с картинками (радость, грусть, злость, страх, удивление).'],
      ["Tinchlanish burchagi yoki «nafas daqiqasi».", 'Уголок спокойствия или «минутка дыхания».'],
      ["O'qituvchining o'zi emotsiyani nomlab ko'rsatishi: «Men biroz charchadim, keling, qisqa tanaffus qilamiz».", 'Учитель сам называет свои эмоции: «Я немного устал, давайте сделаем короткий перерыв».'],
    ]),
    B.summary(null, [
      ["Emotsiya — qisqa reaksiya, his-tuyg'u — barqaror munosabat.", 'Эмоция — кратковременная реакция, чувство — устойчивое отношение.'],
      ["Kichik maktab yoshida emotsiyalar ochiq va o'zgaruvchan; xavotir o'qishga xalaqit beradi.", 'У младших школьников эмоции открыты и изменчивы; тревога мешает учению.'],
      ["Sezish → nomlash → to'xtash → tanlash; xavfsiz muhit.", 'Заметить → назвать → остановиться → выбрать; безопасная среда.'],
    ]),
  ],
  check: [
    cq('a-y-em-c1', '3.2.4', { ...Y(EM) }, ["Emotsiya va his-tuyg'uning farqi?", 'Чем эмоция отличается от чувства?'],
      [[["Emotsiya — qisqa muddatli reaksiya, his-tuyg'u — barqaror munosabat", 'Эмоция — кратковременная реакция, чувство — устойчивое отношение']], [["Farqi yo'q", 'Разницы нет'], ["Davomiylik va barqarorlikda farq bor.", 'Различаются длительностью и устойчивостью.']], [["His-tuyg'u faqat salbiy bo'ladi", 'Чувства бывают только отрицательными'], ["His-tuyg'ular ijobiy ham bo'ladi (do'stlik).", 'Чувства бывают и положительными (дружба).']], [["Emotsiya faqat kattalarda bo'ladi", 'Эмоции бывают только у взрослых'], ["Bolalarda ham emotsiyalar bor.", 'У детей тоже есть эмоции.']]],
      'A', ["Quvonch — emotsiya; do'stlik — his-tuyg'u.", 'Радость — эмоция; дружба — чувство.']),
    cq('a-y-em-c2', '3.2.4', { ...Y(EM) }, ["Yuqori xavotir o'qishga qanday ta'sir qiladi?", 'Как высокая тревожность влияет на учение?'],
      [[["Diqqat va ishchi xotirani band qilib, bilganini bajarishga xalaqit beradi", 'Занимает внимание и рабочую память, мешает выполнить даже то, что ребёнок знает']], [["Har doim natijani yaxshilaydi", 'Всегда улучшает результат'], ["Kuchli xavotir natijani pasaytiradi.", 'Сильная тревога снижает результат.']], [["Hech qanday ta'sir qilmaydi", 'Никак не влияет'], ["Emotsiya va bilish jarayonlari bog'liq.", 'Эмоции и познание связаны.']], [["Faqat sportga ta'sir qiladi", 'Влияет только на спорт'], ["O'quv faoliyatiga ham ta'sir qiladi.", 'Влияет и на учебную деятельность.']]],
      'A', ["Xavotir fikrlash resurslarini egallaydi.", 'Тревога занимает ресурсы мышления.']),
    cq('a-y-em-c3', '3.2.4', { ...Y(EM) }, ["O'quvchi g'azabdan daftarni yirtdi. Qaysi javob eng to'g'ri?", 'Ученик в гневе порвал тетрадь. Какой ответ наиболее верен?'],
      [[["Xotirjam ohangda emotsiyani nomlash, tinchlanishga vaqt berish, keyin sabab va boshqa yo'lni muhokama qilish", 'Спокойно назвать эмоцию, дать время успокоиться, затем обсудить причину и другой способ']], [["Sinf oldida qattiq tanbeh berish", 'Строго отчитать перед классом'], ["Uyaltirish vaziyatni kuchaytiradi.", 'Пристыжение усиливает ситуацию.']], [["Hech narsa demaslik", 'Ничего не сказать'], ["Bola boshqa usulni o'rganmaydi.", 'Ребёнок не научится другому способу.']], [["Darhol ota-onani chaqirish", 'Сразу вызвать родителей'], ["Avval vaziyatni sinfda hal qilish kerak.", 'Сначала нужно разрешить ситуацию в классе.']]],
      'A', ["Tinchlanish → nomlash → muhokama — o'zini boshqarishni o'rgatadi.", 'Успокоение → называние → обсуждение учат саморегуляции.']),
    cq('a-y-em-c4', '3.2.5', { ...Y(EM) }, ["Qaysi o'qituvchi gapi emotsional o'zini boshqarishni o'rgatadi?", 'Какая фраза учителя учит эмоциональной саморегуляции?'],
      [[["«Sen xafa bo'lganingni ko'ryapman. Keling, chuqur nafas olamiz va nima bo'lganini aytib berasan»", '«Я вижу, что ты расстроен. Давай глубоко вдохнём, и ты расскажешь, что случилось»']], [["«Yig'lashni bas qil!»", '«Прекрати плакать!»'], ["Taqiqlash usul bermaydi.", 'Запрет не даёт способа.']], [["«Bu arzimagan narsa»", '«Это пустяки»'], ["Emotsiyani kamsitish ishonchni yo'qotadi.", 'Обесценивание разрушает доверие.']], [["«Boshqalar xafa bo'lmayapti-ku»", '«Другие же не расстраиваются»'], ["Taqqoslash uyaltiradi.", 'Сравнение стыдит.']]],
      'A', ["Nomlash + usul + gapirish imkoni.", 'Называние + способ + возможность высказаться.']),
    cq('a-y-em-c5', '3.2.4', { ...Y(EM) }, ["Sinfda xatoga xavfsiz munosabat qanday yaratiladi?", 'Как создаётся безопасное отношение к ошибкам в классе?'],
      [[["Xatolarni birga tahlil qilish, ularni o'rganish imkoniyati deb ko'rsatish, xato uchun kulmaslik qoidasi", 'Совместно разбирать ошибки, показывать их как возможность учиться, правило «не смеяться над ошибками»']], [["Xato qilganlarni ro'yxatga yozib, devorga ilish", 'Записывать ошибившихся в список на стене'], ["Bu uyaltirish va xavotirni oshiradi.", 'Это пристыжение и рост тревоги.']], [["Xatolarni umuman muhokama qilmaslik", 'Вообще не обсуждать ошибки'], ["Xatodan o'rganish imkoni yo'qoladi.", 'Теряется возможность учиться на ошибках.']], [["Faqat xatosiz ishlarni maqtash", 'Хвалить только безошибочные работы'], ["Xatodan qo'rqish kuchayadi.", 'Растёт страх ошибки.']]],
      'A', ["Xavfsiz muhitda bolalar urinishdan qo'rqmaydi.", 'В безопасной среде дети не боятся пробовать.']),
  ],
});

/* ======================= 6. Individual differences ======================= */
const ID = 'psy-individual';
export const PSY_INDIVIDUAL = lesson({
  id: ID, module: 'psy-person', level: 'advanced', stage: 'B', minutes: 22, codes: ['3.2.5'], requires: [EM], sourceIds: YS,
  title: ["Kichik maktab yoshidagi individual farqlar", 'Индивидуальные различия младших школьников'],
  blocks: [
    B.intro(["Bir sinfda biri qo'lini birinchi bo'lib ko'taradi, boshqasi javobni bilsa ham uzoq o'ylaydi; biri shovqinda ham ishlaydi, boshqasi tez charchaydi. Bu farqlarni «yaxshi» va «yomon» ga bo'lmasdan, ular bilan ishlashni bilish — o'qituvchining kasbiy mahorati.", 'В одном классе один первым поднимает руку, другой долго думает, даже зная ответ; один работает в шуме, другой быстро устаёт. Умение работать с этими различиями, не деля их на «хорошие» и «плохие», — профессиональное мастерство учителя.']),
    B.definition(["**Individual-psixologik xususiyatlar** — bir kishini boshqasidan ajratib turadigan barqaror xususiyatlar: **temperament** (faollik va emotsional reaksiyaning tug'ma dinamik xususiyatlari), **xarakter** (hayot davomida shakllanadigan munosabatlar va xulq tizimi), **qobiliyatlar** (faoliyatni muvaffaqiyatli bajarish imkoniyati), **ish sur'ati** va **charchash tezligi**.", '**Индивидуально-психологические особенности** — устойчивые свойства, отличающие одного человека от другого: **темперамент** (врождённые динамические особенности активности и эмоциональных реакций), **характер** (система отношений и поведения, формирующаяся в течение жизни), **способности** (возможность успешно выполнять деятельность), **темп работы** и **утомляемость**.']),
    B.table([['Temperament', 'Темперамент'], ["Sinfda qanday ko'rinadi", 'Как проявляется в классе'], ["O'qituvchi nima qiladi", 'Что делает учитель']], [
      [['Xolerik', 'Холерик'], ["Tez, faol, ehtirosli; sabri kam, tez qiziqadi va tez soviydi", 'Быстрый, активный, страстный; мало терпения, быстро загорается и остывает'], ["Faol vazifa, aniq qoidalar, o'zini to'xtatishni o'rgatish", 'Активные задания, чёткие правила, обучение самоконтролю']],
      [['Sangvinik', 'Сангвиник'], ["Harakatchan, kirishimli, tez moslashadi; bir xillikdan zerikadi", 'Подвижный, общительный, быстро адаптируется; скучает от однообразия'], ["Faoliyat almashinuvi, ishni oxiriga yetkazishni nazorat qilish", 'Смена деятельности, контроль доведения дела до конца']],
      [['Flegmatik', 'Флегматик'], ["Sekin, xotirjam, puxta; tez o'tishda qiynaladi", 'Медленный, спокойный, основательный; трудно быстро переключаться'], ["Vaqt berish, oldindan ogohlantirish, shoshirmaslik", 'Давать время, предупреждать заранее, не торопить']],
      [['Melanxolik', 'Меланхолик'], ["Ta'sirchan, tez charchaydi, xavotirga moyil", 'Впечатлительный, быстро устаёт, склонен к тревоге'], ["Qo'llab-quvvatlash, ommaviy tanqiddan saqlash, muvaffaqiyat vaziyati", 'Поддержка, избегать публичной критики, ситуация успеха']],
    ], ["Temperament turlari (an'anaviy tasnif)", 'Типы темперамента (традиционная классификация)']),
    B.rule(["Muhim qoidalar: 1) **temperament yaxshi yoki yomon emas** — har birining kuchli tomoni bor; 2) to'rt tur — **soddalashtirilgan model**: ko'pchilik bolalarda aralash belgilar bor, shuning uchun **tamg'a qo'yilmaydi**; 3) temperament o'zgarmaydi, lekin **xarakter va ko'nikmalar** tarbiya bilan shakllanadi; 4) **chapaqay bolani qayta o'rgatish mumkin emas** — bu stress va yozuv qiyinchiliklariga olib kelishi mumkin; 5) «o'qish uslublari» (vizual/audial/kinestetik) bo'yicha o'qitish **ilmiy tasdiqlanmagan** — individual yondashuv tayyorgarlik, sur'at va ehtiyojga asoslanadi.", 'Важные правила: 1) **темперамент не бывает хорошим или плохим** — у каждого есть сильные стороны; 2) четыре типа — **упрощённая модель**: у большинства детей смешанные черты, поэтому **ярлыки не навешивают**; 3) темперамент не меняется, но **характер и навыки** формируются воспитанием; 4) **переучивать левшу нельзя** — это может привести к стрессу и трудностям письма; 5) обучение по «стилям» (визуал/аудиал/кинестетик) **научно не подтверждено** — индивидуальный подход опирается на подготовку, темп и потребности.']),
    B.example(["O'quvchi javobni biladi, lekin tez og'zaki so'rovda doim jim qoladi; yozma ishda esa yaxshi natija ko'rsatadi. Qanday yondashish kerak?", 'Ученик знает ответ, но при быстром устном опросе всегда молчит; в письменной работе показывает хороший результат. Как подойти?'], [
      ["Ehtimoliy sabab: sekin sur'at (masalan, flegmatik belgilari) yoki xavotir — bilim yetishmasligi emas.", 'Вероятная причина: медленный темп (например, черты флегматика) или тревога — а не нехватка знаний.'],
      ["Savol berib, javob uchun vaqt berish; oldindan ogohlantirish: «Keyingi savol senga».", 'Задавать вопрос и давать время; предупреждать заранее: «Следующий вопрос — тебе».'],
      ["Bilimni ko'rsatishning boshqa shakli: yozma javob, juftlikda muhokamadan keyin aytish.", 'Другая форма показа знаний: письменный ответ, ответ после обсуждения в паре.'],
    ], ["Sur'atga moslashish — talabni pasaytirish emas", 'Подстройка под темп — не снижение требований']),
    B.example(["Juda faol o'quvchi tez-tez gapni bo'ladi va topshiriqni oxiriga yetkazmaydi. Nima qilish kerak?", 'Очень активный ученик часто перебивает и не доводит задания до конца. Что делать?'], [
      ["Kuchli tomonidan foydalanish: yordamchi roli (materiallarni tarqatish), faol vazifalar.", 'Использовать сильные стороны: роль помощника (раздать материалы), активные задания.'],
      ["Aniq qoidalar va signal: «Avval qo'l, keyin gap».", 'Чёткие правила и сигнал: «Сначала рука, потом слово».'],
      ["Topshiriqni qisqa qadamlarga bo'lish va har qadamni belgilash.", 'Делить задание на короткие шаги и отмечать каждый.'],
      ["Davomli qiyinchilik (diqqat, giperfaollik) bo'lsa — psixolog bilan maslahatlashish; tashxisni o'qituvchi qo'ymaydi.", 'При стойких трудностях (внимание, гиперактивность) — консультация с психологом; диагноз учитель не ставит.'],
    ], ["Energiyani yo'naltirish + aniq tuzilma", 'Направить энергию + чёткая структура']),
    B.example(["Ota-ona so'raydi: «Bolam chap qo'li bilan yozadi, o'ng qo'lga o'rgatish kerakmi?» O'qituvchining javobi?", 'Родитель спрашивает: «Мой ребёнок пишет левой рукой, нужно переучить на правую?» Ответ учителя?'], [
      ["Yo'q: chapaqaylik — individual xususiyat, kasallik emas.", 'Нет: леворукость — индивидуальная особенность, а не болезнь.'],
      ["Majburiy qayta o'rgatish stress, yozuvning sekinlashuvi va qiyinchiliklarga olib kelishi mumkin.", 'Принудительное переучивание может вызвать стресс, замедление и трудности письма.'],
      ["Yordam: daftar holati, yorug'lik o'ng tomondan, partada chap tomonda o'tirish (qo'shni bilan to'qnashmaslik uchun).", 'Помощь: положение тетради, свет справа, место слева за партой (чтобы не сталкиваться локтями с соседом).'],
    ], ["Qayta o'rgatmaslik, sharoitni moslashtirish", 'Не переучивать, адаптировать условия']),
    B.mistake(null, [
      ["Bolaga «sen melanxoliksan» kabi tamg'a qo'yish yoki sinfni temperament bo'yicha bo'lish.", 'Навешивать ярлыки вроде «ты меланхолик» или делить класс по темпераментам.'],
      ["Sekin o'quvchini «dangasa» deb hisoblash.", 'Считать медленного ученика «ленивым».'],
      ["«Vizual o'quvchiga faqat rasm» kabi o'qitish uslubi afsonasiga tayanish.", 'Опираться на миф о стилях: «визуалу — только картинки».'],
      ["Hammadan bir xil sur'at va bir xil javob shaklini talab qilish.", 'Требовать от всех одинакового темпа и одинаковой формы ответа.'],
    ]),
    B.try(cq('a-y-id-t1', '3.2.5', { ...Y(ID), d: 1, rule: ["Temperament yaxshi yoki yomon emas; tamg'a qo'yilmaydi.", 'Темперамент не хорош и не плох; ярлыки не навешивают.'] },
      ["O'qituvchi sinfdagi turli temperamentli bolalar haqida qanday fikrga tayanishi kerak?", 'Из какого представления о детях с разным темпераментом должен исходить учитель?'],
      [[["Har bir temperamentning kuchli tomoni bor; o'qituvchi ish shaklini moslashtiradi", 'У каждого темперамента есть сильные стороны; учитель адаптирует формы работы']], [["Sangvinik eng yaxshi temperament", 'Сангвиник — лучший темперамент'], ["«Eng yaxshi» temperament yo'q.", '«Лучшего» темперамента нет.']], [["Temperamentni tarbiya bilan o'zgartirish kerak", 'Темперамент нужно менять воспитанием'], ["Temperament tug'ma; xarakter va ko'nikmalar tarbiyalanadi.", 'Темперамент врождённый; воспитываются характер и навыки.']], [["Flegmatik bolalar o'qishga qobiliyatsiz", 'Флегматики неспособны к учёбе'], ["Sur'at qobiliyatni bildirmaydi.", 'Темп не говорит о способностях.']]],
      'A', ["Temperament — dinamika; muvaffaqiyat moslashtirilgan sharoitga bog'liq.", 'Темперамент — это динамика; успех зависит от подходящих условий.'])),
    B.method(["Individual farqlarni hisobga olish:", 'Как учитывать индивидуальные различия:'], [
      ["Kuzatish kundaligi: sur'at, charchash, qiziqishlar — 2–3 hafta davomida.", 'Дневник наблюдений: темп, утомляемость, интересы — в течение 2–3 недель.'],
      ["Javob shakllarida tanlov: og'zaki, yozma, chizma.", 'Выбор формы ответа: устно, письменно, схемой.'],
      ["Vaqtni moslashtirish va oldindan ogohlantirish.", 'Гибкое время и предупреждение заранее.'],
      ["Psixolog va ota-onalar bilan hamkorlik — tashxis emas, kuzatuv ma'lumotlari bilan.", 'Сотрудничество с психологом и родителями — с данными наблюдений, а не с диагнозами.'],
    ]),
    B.summary(null, [
      ["Temperament (tug'ma dinamika), xarakter (shakllanadi), qobiliyat, sur'at.", 'Темперамент (врождённая динамика), характер (формируется), способности, темп.'],
      ["To'rt tur — model; tamg'a yo'q; har birining kuchli tomoni bor.", 'Четыре типа — модель; без ярлыков; у каждого сильные стороны.'],
      ["Chapaqaylarni qayta o'rgatmaslik; «o'qish uslublari» — afsona.", 'Не переучивать левшей; «стили обучения» — миф.'],
    ]),
  ],
  check: [
    cq('a-y-id-c1', '3.2.5', { ...Y(ID) }, ["Temperament va xarakterning asosiy farqi?", 'Главное различие темперамента и характера?'],
      [[["Temperament — tug'ma dinamik xususiyat, xarakter — hayot davomida shakllanadi", 'Темперамент — врождённая динамическая особенность, характер формируется в течение жизни']], [["Ikkalasi ham tug'ma va o'zgarmas", 'Оба врождённые и неизменные'], ["Xarakter tarbiya bilan shakllanadi.", 'Характер формируется воспитанием.']], [["Xarakter tug'ma, temperament shakllanadi", 'Характер врождённый, темперамент формируется'], ["Aksincha.", 'Наоборот.']], [["Farqi yo'q", 'Разницы нет'], ["Bular turli tushunchalar.", 'Это разные понятия.']]],
      'A', ["Temperament — «qanday tez», xarakter — «qanday munosabatda».", 'Темперамент — «как быстро», характер — «как относится».']),
    cq('a-y-id-c2', '3.2.5', { ...Y(ID) }, ["Sekin ishlaydigan, lekin puxta o'quvchi uchun eng mos o'qituvchi harakati?", 'Какое действие учителя лучше всего подходит медленному, но основательному ученику?'],
      [[["Javob uchun vaqt berish va o'tishlar haqida oldindan ogohlantirish", 'Давать время на ответ и заранее предупреждать о переходах']], [["Tezlashtirish uchun doim shoshirish", 'Постоянно торопить для ускорения'], ["Shoshirish xavotir va xatolarni oshiradi.", 'Спешка повышает тревогу и ошибки.']], [["Uni og'zaki so'rovdan butunlay ozod qilish", 'Полностью освободить от устного опроса'], ["Moslashtirish kerak, chiqarib tashlash emas.", 'Нужна адаптация, а не исключение.']], [["Talablarni pasaytirish", 'Снизить требования'], ["Sur'at moslashadi, talab saqlanadi.", 'Темп адаптируется, требования сохраняются.']]],
      'A', ["Sur'atni hisobga olish — individual yondashuv.", 'Учёт темпа — индивидуальный подход.']),
    cq('a-y-id-c3', '3.2.5', { ...Y(ID) }, ["Qaysi fikr ilmiy asoslanmagan?", 'Какое утверждение научно не обосновано?'],
      [[["Har bir bolani o'zining «o'qish uslubi» (vizual/audial/kinestetik) bo'yicha o'qitish natijani yaxshilaydi", 'Обучение каждого ребёнка по его «стилю» (визуал/аудиал/кинестетик) улучшает результат']], [["Bolalarning ish sur'ati har xil", 'Темп работы у детей разный'], ["Bu kuzatuv va tadqiqotlar bilan tasdiqlangan.", 'Это подтверждено наблюдениями и исследованиями.']], [["Chapaqay bolani majburan qayta o'rgatish zararli bo'lishi mumkin", 'Принудительное переучивание левши может навредить'], ["Bu zamonaviy pedagogika va psixologiyada qabul qilingan.", 'Это принято в современной педагогике и психологии.']], [["Temperament faollik dinamikasiga ta'sir qiladi", 'Темперамент влияет на динамику активности'], ["Bu temperamentning ta'rifi.", 'Это определение темперамента.']]],
      'A', ["«O'qish uslublari» bo'yicha moslashtirish samaradorligi tadqiqotlarda tasdiqlanmagan.", 'Эффективность подстройки под «стили обучения» в исследованиях не подтверждена.']),
    cq('a-y-id-c4', '3.2.5', { ...Y(ID) }, ["Ta'sirchan, tez xafa bo'ladigan o'quvchining xatosini qanday muhokama qilish kerak?", 'Как обсуждать ошибку впечатлительного, легко расстраивающегося ученика?'],
      [[["Yakka tartibda, avval yutug'ini aytib, keyin aniq keyingi qadamni ko'rsatib", 'Индивидуально, сначала отметив успех, затем показав конкретный следующий шаг']], [["Butun sinf oldida namuna sifatida", 'Перед всем классом как пример'], ["Ommaviy tanqid xavotirni kuchaytiradi.", 'Публичная критика усиливает тревогу.']], [["Umuman aytmaslik", 'Вообще не говорить'], ["Xatoni tuzatish imkoni yo'qoladi.", 'Теряется возможность исправить ошибку.']], [["Baho orqali bildirish", 'Сообщить только отметкой'], ["Baho nima qilishni ko'rsatmaydi.", 'Отметка не показывает, что делать.']]],
      'A', ["Qo'llab-quvvatlovchi, aniq, yakka tartibdagi qayta aloqa.", 'Поддерживающая, конкретная, индивидуальная обратная связь.']),
    cq('a-y-id-c5', '3.2.5', { ...Y(ID) }, ["O'qituvchi o'quvchini «giperaktiv» deb hisoblaydi. Uning to'g'ri harakati?", 'Учитель считает ученика «гиперактивным». Его правильное действие?'],
      [[["Kuzatuvlarini yozib, ota-ona va maktab psixologi bilan maslahatlashish, sinfda tuzilma va faol vazifalar berish", 'Записать наблюдения, проконсультироваться с родителями и школьным психологом, дать в классе структуру и активные задания']], [["O'zi tashxis qo'yib, sinfga e'lon qilish", 'Самому поставить диагноз и объявить классу'], ["Tashxis o'qituvchi vakolati emas; e'lon qilish tamg'alaydi.", 'Диагноз — не компетенция учителя; объявление — ярлык.']], [["O'quvchini boshqa sinfga o'tkazishni talab qilish", 'Потребовать перевести в другой класс'], ["Avval yordam va moslashtirish kerak.", 'Сначала нужны помощь и адаптация.']], [["Hech narsa qilmaslik", 'Ничего не делать'], ["Bola yordamsiz qoladi.", 'Ребёнок остаётся без помощи.']]],
      'A', ["Kuzatish → hamkorlik → sinfda moslashtirish; tashxis — mutaxassisda.", 'Наблюдение → сотрудничество → адаптация в классе; диагноз — у специалиста.']),
  ],
});

export const PSY3_LESSONS = [PSY_THINKING, PSY_PERCEPTION, PSY_IMAGINATION, PSY_MOTIVATION, PSY_EMOTIONS, PSY_INDIVIDUAL];
