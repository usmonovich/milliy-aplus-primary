// Pedagogy, psychology and reading-literacy lessons (equal content in uz and ru).
import { B, cq, lesson } from './build';

/* ---------------- Pedagogy: formative assessment ---------------- */

const FA = 'ped-formative';
const PM = { lang: 'both' as const, lesson: FA, src: ['kriterial2023', 'spec2026'] };

export const PED_FORMATIVE = lesson({
  id: FA, module: 'ped-assess', level: 'core', minutes: 22, codes: ['3.6.1', '3.6.4', '3.4.6'], sourceIds: PM.src,
  title: ['Formativ baholash', 'Формативное оценивание'],
  blocks: [
    B.intro(["Ikki o'qituvchi bir mavzuni o'tdi. Birinchisi chorak oxirida nazorat ishida sinfning yarmi mavzuni tushunmaganini bildi — vaqt o'tib ketgan. Ikkinchisi har dars oxirida 2 daqiqalik tekshiruv o'tkazdi va ertasi kuni tushunmaganlar bilan qayta ishladi. Ikkinchi o'qituvchi formativ baholashdan foydalandi.",
      'Два учителя прошли одну тему. Первый узнал из четвертной контрольной, что половина класса тему не поняла, — время упущено. Второй в конце каждого урока проводил двухминутную проверку и на следующий день работал с теми, кто не понял. Второй учитель использовал формативное оценивание.']),
    B.definition(["**Formativ baholash** — o'qitish jarayonida o'quvchilar qanchalik tushunganini aniqlash va shu ma'lumot asosida darhol o'qitishni moslashtirish hamda qayta aloqa berish. Uni «o'qitish uchun baholash» deb ham atashadi.",
      '**Формативное оценивание** — выяснение в ходе обучения, насколько ученики поняли материал, и немедленная корректировка обучения и обратная связь на основе этих данных. Его называют «оцениванием для обучения».']),
    B.rule(["Formativ baholashning maqsadi — baho qo'yish emas, **keyingi qadamni tanlash**: o'qituvchi uchun (darsni qanday o'zgartirish) va o'quvchi uchun (nimani yaxshilash).", 'Цель формативного оценивания — не поставить отметку, а **выбрать следующий шаг**: для учителя (как изменить урок) и для ученика (что улучшить).']),
    B.table([['', ''], ['Formativ', 'Формативное'], ['Summativ', 'Суммативное']], [
      [['Maqsad', 'Цель'], ["O'qitishni yaxshilash", 'Улучшить обучение'], ['Natijani qayd etish', 'Зафиксировать итог']],
      [['Qachon', 'Когда'], ['Dars davomida, har kuni', 'В ходе урока, ежедневно'], ["Bo'lim, chorak oxirida", 'В конце раздела, четверти']],
      [['Baho', 'Отметка'], ["Jurnalga qo'yilmaydi", 'В журнал не ставится'], ["Qo'yiladi (BSB, ChSB)", 'Ставится (СОР, СОЧ)']],
      [['Natijadan kim foydalanadi', 'Кто использует результат'], ["O'qituvchi va o'quvchi — darhol", 'Учитель и ученик — сразу'], ["O'qituvchi, ota-ona, maktab", 'Учитель, родители, школа']],
      [['Misollar', 'Примеры'], ['Chiqish kartochkasi, svetofor', 'Карточка выхода, светофор'], ['Bo\'lim yakuniy ishi', 'Итоговая работа раздела']],
    ], ['Farqi', 'Отличия']),
    B.explain(["Formativ tekshiruv darsning uch nuqtasida foydali:", 'Формативная проверка полезна в трёх точках урока:'], [
      ["**Boshida** — o'quvchilar nimani biladi? (2–3 savol, assotsiatsiya)", '**В начале** — что ученики уже знают? (2–3 вопроса, ассоциации)'],
      ["**O'rtasida** — tushunishyaptimi? Davom etish yoki qayta tushuntirish kerakmi?", '**В середине** — понимают ли? Двигаться дальше или объяснить иначе?'],
      ["**Oxirida** — dars maqsadiga erishildimi? Ertangi darsni qanday boshlash kerak?", '**В конце** — достигнута ли цель урока? С чего начать завтра?'],
    ]),
    B.table([['Usul', 'Приём'], ['Qanday', 'Как'], ['Nima beradi', 'Что даёт']], [
      [['Chiqish kartochkasi', 'Карточка выхода'], ['Dars oxirida 1–2 ta topshiriq', '1–2 задания в конце урока'], ['Har bir o\'quvchi bo\'yicha ma\'lumot', 'Данные по каждому ученику']],
      [['«Hamma javob beradi»', '«Отвечают все»'], ['A/B/C/D kartochka yoki mini-doska', 'Карточки A/B/C/D или мини-доски'], ['Butun sinf rasmi — bir zumda', 'Картина по всему классу за секунды']],
      [['Svetofor', 'Светофор'], ["Yashil — tushundim, sariq — ikkilanaman, qizil — yordam kerak", 'Зелёный — понял, жёлтый — сомневаюсь, красный — нужна помощь'], ["Kimga yordam kerakligini ko'rsatadi", 'Показывает, кому помочь']],
      [['«Ikki yulduz, bir istak»', '«Две звезды и пожелание»'], ['2 ta yutuq + 1 ta yaxshilash', '2 удачи + 1 улучшение'], ['Mezonga asoslangan qayta aloqa', 'Обратная связь по критериям']],
      [['Kuzatish varag\'i', 'Лист наблюдений'], ['Mezonlar bo\'yicha belgi', 'Отметки по критериям'], ['Guruh ishida dalil', 'Доказательства при групповой работе']],
    ], ['Asboblar', 'Инструменты']),
    B.rule(["Samarali qayta aloqa: **aniq** (nima to'g'ri), **mezonga asoslangan**, **o'z vaqtida** va **keyingi qadamni ko'rsatadi**. U shaxsga emas, ishga qaratiladi.", 'Эффективная обратная связь: **конкретная** (что именно удалось), **опирается на критерии**, **своевременная** и **указывает следующий шаг**. Она направлена на работу, а не на личность.'], undefined, ['Qayta aloqa qoidasi', 'Правило обратной связи']),
    B.example(["«Barakalla!» degan qayta aloqani samarali qiling (masala: 52 − 17 = 45).", 'Сделайте эффективной обратную связь «Молодец!» (задача: 52 − 17 = 45).'], [
      ["Nima to'g'ri ekanini ayting: «Masalaning qisqa yozuvini to'g'ri tuzding, amalni to'g'ri tanlading».", 'Назовите, что получилось: «Ты верно составил краткую запись и правильно выбрал действие».'],
      ["Xatoni mezon bilan bog'lang: «Hisoblashda o'nlik almashtirishni tekshir».", 'Свяжите ошибку с критерием: «Проверь вычитание с переходом через десяток».'],
      ["Keyingi qadamni bering: «O'nliklar va birliklar modelida 52 dan 17 ni ayirib ko'r».", 'Дайте следующий шаг: «Вычти 17 из 52 на модели десятков и единиц».'],
    ], ["Natija: o'quvchi xatoni o'zi topadi va usulni o'rganadi.", 'Итог: ученик сам находит ошибку и осваивает способ.']),
    B.example(["Chiqish kartochkalari: 25 o'quvchidan 12 tasi o'nlik almashtirishli ayirishda xato qildi. O'qituvchi nima qiladi?", 'Карточки выхода: 12 из 25 учеников ошиблись в вычитании с переходом через десяток. Что делает учитель?'], [
      ["1-variant: rejaga ko'ra keyingi mavzuga o'tish — yarmi sinf bo'shliq bilan qoladi, keyingi mavzu ham qiyinlashadi. ❌", 'Вариант 1: по плану перейти к новой теме — половина класса останется с пробелом, следующая тема тоже пойдёт тяжело. ❌'],
      ["2-variant: butun sinfga xuddi o'sha usulda qayta tushuntirish — 13 o'quvchi zerikadi, 12 tasiga esa usul allaqachon yordam bermagan. ⚠️", 'Вариант 2: объяснить заново всему классу тем же способом — 13 учеников скучают, а 12 этот способ уже не помог. ⚠️'],
      ["3-variant: guruhlash — 13 o'quvchiga qo'llash topshiriqlari, 12 o'quvchi bilan boshqa model (o'nliklar va birliklar, son o'qi) orqali qisqa mashg'ulot, oxirida yana tekshiruv. ✅", 'Вариант 3: группировка — 13 ученикам задания на применение, с 12 — короткое занятие с другой моделью (десятки и единицы, числовая прямая), в конце повторная проверка. ✅'],
    ], ["Formativ ma'lumot rejani o'zgartirdi — bu uning asosiy vazifasi.", 'Формативные данные изменили план — в этом их главная функция.']),
    B.mistake(null, [
      ["Formativ natijalarni jurnalga baho sifatida qo'yish — o'quvchilar xatodan qo'rqib, haqiqiy tushunishini yashiradi.", 'Ставить формативные результаты в журнал — ученики, боясь ошибок, скрывают реальное понимание.'],
      ["Ma'lumot yig'ish, lekin darsni o'zgartirmaslik.", 'Собирать данные, но не менять урок.'],
      ["«Hammaga tushunarlimi?» savolini tekshiruv deb hisoblash — ko'pchilik «ha» deydi.", 'Считать проверкой вопрос «Всем понятно?» — большинство скажет «да».'],
      ["Faqat «barakalla / yomon» degan qayta aloqa.", 'Обратная связь только «молодец / плохо».'],
    ]),
    B.try(cq('a-p-fa-t1', '3.6.1', { ...PM, d: 1 },
      ["Qaysi biri formativ baholash?", 'Что из этого — формативное оценивание?'],
      [
        [["Dars oxirida chiqish kartochkasi, natijasi ertangi darsni rejalashtirish uchun", 'Карточка выхода в конце урока, по которой планируется следующий урок']],
        [['Chorak nazorat ishi', 'Четвертная контрольная работа'], ['Bu summativ: davr yakunini qayd etadi.', 'Это суммативное: фиксирует итог периода.']],
        [["Bo'lim yakuniy testi bahosi bilan", 'Итоговый тест раздела с отметкой'], ['Summativ baholash.', 'Суммативное оценивание.']],
        [['Maktab olimpiadasi', 'Школьная олимпиада'], ["Tanlov, o'qitishni moslashtirish uchun emas.", 'Конкурс, а не инструмент корректировки обучения.']],
      ], 'A', ["Formativ — natija o'qitishni o'zgartirish uchun ishlatiladi.", 'Формативное — результат используют, чтобы изменить обучение.'])),
    B.method(["Formativ baholashni darsga oldindan kiriting.", 'Встраивайте формативное оценивание в урок заранее.'], [
      ["Dars rejasida 2–3 tekshiruv nuqtasini va «agar … bo'lsa, unda …» qarorini yozing (masalan: «80% dan ko'p — mustaqil ish; kam — model bilan qayta»).", 'В плане урока запишите 2–3 точки проверки и решение «если …, то …» (например: «больше 80% — самостоятельная работа; меньше — повтор с моделью»).'],
      ["Mezonlarni o'quvchilar bilan oldindan muhokama qiling — ular nimaga intilishini bilsin.", 'Обсуждайте критерии с учениками заранее — пусть знают, к чему стремиться.'],
      ["Xatoni xavfsiz qiling: «Xato — ma'lumot, jazo emas».", 'Сделайте ошибку безопасной: «Ошибка — это информация, а не наказание».'],
      ["Boshlang'ich sinfda vizual va tez usullar ishlaydi: svetofor, barmoq bilan ko'rsatish, mini-doskalar.", 'В начальной школе работают наглядные и быстрые приёмы: светофор, показ пальцами, мини-доски.'],
    ]),
    B.summary(null, [
      ["Formativ baholash — o'qitish davomida, o'qitishni yaxshilash uchun.", 'Формативное оценивание — в ходе обучения, для улучшения обучения.'],
      ["Asosiy belgi: natija keyingi qadamni o'zgartiradi.", 'Главный признак: результат меняет следующий шаг.'],
      ['Qayta aloqa: aniq, mezonli, o\'z vaqtida, keyingi qadam bilan.', 'Обратная связь: конкретная, по критериям, своевременная, со следующим шагом.'],
      ["Jurnalga baho qo'yilmaydi.", 'Отметка в журнал не ставится.'],
    ]),
  ],
  check: [
    cq('a-p-fa-c1', '3.6.4', { ...PM, rule: ['Qayta aloqa: aniq + mezon + keyingi qadam.', 'Обратная связь: конкретно + критерий + следующий шаг.'] },
      ["Qaysi qayta aloqa eng samarali?", 'Какая обратная связь наиболее эффективна?'],
      [
        [['«Barakalla, zo\'r!»', '«Молодец, отлично!»'], ["Nima yaxshi ekanini va keyingi qadamni ko'rsatmaydi.", 'Не говорит, что именно удалось и что делать дальше.']],
        [['«Yana harakat qil»', '«Старайся больше»'], ['Noaniq: qanday harakat qilish kerak?', 'Неясно: в чём именно стараться?']],
        [["«3-masalada qisqa yozuvni to'g'ri tuzding; javobdagi ayirishni o'nliklar modeli bilan tekshir»", '«В задаче 3 ты верно составил краткую запись; проверь вычитание в ответе на модели десятков»']],
        [['«Sen sinfdagi eng aqlli o\'quvchisan»', '«Ты самый умный в классе»'], ["Shaxsni baholaydi, ishni emas; o'sishga undamaydi.", 'Оценивает личность, а не работу; не ведёт к росту.']],
      ], 'C', ["Aniq yutuq + mezon + keyingi qadam.", 'Конкретная удача + критерий + следующий шаг.']),
    cq('a-p-fa-c2', '3.6.1', { ...PM, d: 3, rule: ["Formativ ma'lumot rejani o'zgartiradi: tabaqalashtirilgan qayta o'qitish.", 'Формативные данные меняют план: дифференцированное повторное обучение.'],
      steps: [['Natijani tahlil qilish: kim tushundi, kim yo\'q.', 'Проанализировать: кто понял, кто нет.'], ['Guruhlarga bo\'lish.', 'Разделить на группы.'], ['Boshqa model bilan qayta o\'qitish va qayta tekshirish.', 'Переобучить другой моделью и проверить снова.']] },
      ["Chiqish kartochkalari sinfning 60% i mavzuni tushunmaganini ko'rsatdi. To'g'ri qaror qaysi?", 'Карточки выхода показали, что 60% класса не поняли тему. Какое решение верно?'],
      [
        [["Rejaga ko'ra yangi mavzuga o'tish", 'Перейти к новой теме по плану'], ["Ko'pchilik bo'shliq bilan qoladi.", 'Большинство останется с пробелом.']],
        [["Natijalarni jurnalga baho sifatida qo'yish", 'Поставить результаты в журнал как отметки'], ["Formativ ma'lumot baho uchun emas.", 'Формативные данные — не для отметок.']],
        [["Ertangi darsda mavzuni boshqa model bilan qayta tushuntirish, tushunganlarga qo'llash topshirig'i berish, so'ng yana tekshirish", 'На следующем уроке объяснить тему другой моделью, тем, кто понял, дать задания на применение, затем проверить снова']],
        [["Tushunmaganlarga uyga ko'proq vazifa berish", 'Задать непонявшим больше домашних заданий'], ["Tushuntirmasdan mashq qildirish xatoni mustahkamlaydi.", 'Тренировка без объяснения закрепит ошибку.']],
      ], 'C', ["Ma'lumot → qaror → qayta tekshiruv.", 'Данные → решение → повторная проверка.']),
    cq('a-p-fa-c3', '3.6.1', { ...PM, rule: ['Formativ — o\'qitish uchun, summativ — natijani qayd etish uchun.', 'Формативное — для обучения, суммативное — для фиксации итога.'] },
      ['Formativ va summativ baholashning asosiy farqi nimada?', 'В чём главное отличие формативного оценивания от суммативного?'],
      [
        [["Formativ — og'zaki, summativ — yozma", 'Формативное — устное, суммативное — письменное'], ['Ikkalasi ham og\'zaki yoki yozma bo\'lishi mumkin.', 'Оба бывают и устными, и письменными.']],
        [["Maqsadda: formativ o'qitishni jarayonda yaxshilaydi, summativ yakuniy natijani qayd etadi", 'В цели: формативное улучшает обучение в процессе, суммативное фиксирует итоговый результат']],
        [['Formativ faqat kuchli o\'quvchilar uchun', 'Формативное — только для сильных учеников'], ['Hamma uchun qo\'llanadi.', 'Применяется ко всем.']],
        [["Summativda mezon bo'lmaydi", 'В суммативном нет критериев'], ['Summativ ham mezonlarga asoslanadi.', 'Суммативное тоже опирается на критерии.']],
      ], 'B', ['Farq — maqsadda va natijadan foydalanishda.', 'Отличие — в цели и использовании результата.']),
    cq('a-p-fa-c4', '3.4.6', { ...PM, rule: ["Svetofor — o'z-o'zini baholash; o'qituvchi kimga yordam kerakligini ko'radi.", 'Светофор — самооценка; учитель видит, кому нужна помощь.'] },
      ["«Svetofor» usuli o'qituvchiga nima beradi?", 'Что даёт учителю приём «Светофор»?'],
      [
        [["Har bir o'quvchi o'z tushunishini baholaydi va o'qituvchi kimga yordam kerakligini darhol ko'radi", 'Каждый ученик оценивает своё понимание, и учитель сразу видит, кому нужна помощь']],
        [['Jurnal uchun baho', 'Отметку для журнала'], ['Formativ usul baho bermaydi.', 'Формативный приём отметок не даёт.']],
        [['Intizomni nazorat qilish', 'Контроль дисциплины'], ['Usul tushunish haqida, intizom haqida emas.', 'Приём — о понимании, а не о дисциплине.']],
        [["O'quvchilar reytingi", 'Рейтинг учеников'], ["Solishtirish maqsad emas.", 'Сравнение учеников — не цель.']],
      ], 'A', ["Tezkor o'z-o'zini baholash → o'qituvchining qarori.", 'Быстрая самооценка → решение учителя.']),
  ],
});

/* ---------------- Psychology: attention ---------------- */

const AT = 'psy-attention';
const SM = { lang: 'both' as const, lesson: AT, src: ['goziyev', 'nishanova'] };

export const PSY_ATTENTION = lesson({
  id: AT, module: 'psy-cog', level: 'core', minutes: 18, codes: ['3.2.2', '3.4.4', '3.2.5'], sourceIds: SM.src,
  title: ["Diqqat: turlari, xususiyatlari va o'quvchining diqqatini boshqarish", 'Внимание: виды, свойства и управление вниманием учеников'],
  blocks: [
    B.intro(["«Diqqatli bo'l!» — o'qituvchi eng ko'p aytadigan gap. Lekin bu iboraning o'zi yordam bermaydi: diqqat qanday ishlashini bilgan o'qituvchi uni boshqaradi, bilmagan esa faqat talab qiladi.", '«Будь внимателен!» — самая частая фраза учителя. Но сама по себе она не помогает: учитель, понимающий, как работает внимание, управляет им, а не понимающий — только требует.']),
    B.definition(["**Diqqat** — ongning muayyan obyektga yo'naltirilishi va jamlanishi. U alohida jarayon emas: idrok, xotira, tafakkurning «tashkilotchisi».", '**Внимание** — направленность и сосредоточенность сознания на определённом объекте. Это не отдельный процесс, а «организатор» восприятия, памяти и мышления.']),
    B.table([['Turi', 'Вид'], ['Qanday paydo bo\'ladi', 'Как возникает'], ['Sinfdagi misol', 'Пример в классе']], [
      [['Ixtiyorsiz', 'Непроизвольное'], ["O'zidan o'zi: yorqin, yangi, kutilmagan narsa", 'Само: яркое, новое, неожиданное'], ['Doskada rangli rasm paydo bo\'ldi', 'На доске появилась яркая картинка']],
      [['Ixtiyoriy', 'Произвольное'], ['Maqsad bilan, iroda kuchi talab qiladi', 'По цели, требует волевого усилия'], ['Qiziq bo\'lmagan qoidani o\'qish', 'Чтение неинтересного правила']],
      [['Ixtiyoriydan keyingi', 'Послепроизвольное'], ['Avval kuch bilan, keyin qiziqish paydo bo\'ladi', 'Сначала с усилием, потом появляется интерес'], ['Masalaga «kirib ketish»', '«Втянулся» в решение задачи']],
    ], ['Diqqat turlari', 'Виды внимания']),
    B.table([['Xususiyat', 'Свойство'], ['Nima', 'Что это'], ["Kichik maktab yoshida", 'В младшем школьном возрасте']], [
      [['Hajm', 'Объём'], ['Bir vaqtda qamrab olinadigan obyektlar soni', 'Сколько объектов охватывается одновременно'], ['Kattalarnikidan kichik', 'Меньше, чем у взрослых']],
      [['Barqarorlik', 'Устойчивость'], ['Bir obyektda qancha vaqt tura oladi', 'Как долго удерживается на объекте'], ["Qisqa, qiziqish va topshiriq turiga bog'liq", 'Невелика, зависит от интереса и вида задания']],
      [['Taqsimlash', 'Распределение'], ['Ikki ishni bir vaqtda bajarish', 'Выполнение двух дел одновременно'], ['Qiyin: tinglash + yozish', 'Трудно: слушать + писать']],
      [["Ko'chirish", 'Переключение'], ['Bir faoliyatdan boshqasiga o\'tish', 'Переход от одной деятельности к другой'], ['Sekin; aniq signal yordam beradi', 'Медленное; помогает чёткий сигнал']],
    ], ['Diqqat xususiyatlari', 'Свойства внимания']),
    B.explain(["Kichik maktab yoshida ixtiyorsiz diqqat ustun, ixtiyoriy diqqat esa endi shakllanmoqda. Bu rivojlanish bosqichi, «dangasalik» emas. Ixtiyoriy diqqat bola o'z harakatini reja asosida boshqarishni o'rganganida kuchayadi.", 'У младших школьников преобладает непроизвольное внимание, а произвольное только формируется. Это этап развития, а не «лень». Произвольное внимание растёт, когда ребёнок учится управлять своими действиями по плану.']),
    B.apply(["O'qituvchi diqqatni qanday qo'llab-quvvatlaydi:", 'Как учитель поддерживает внимание:'], [
      ["Faoliyat turlarini almashtirish va qisqa harakat pauzalari.", 'Смена видов деятельности и короткие двигательные паузы.'],
      ["Aniq maqsad va qadamma-qadam ko'rsatma; doskada vizual reja.", 'Ясная цель и пошаговая инструкция; наглядный план на доске.'],
      ["Katta topshiriqni qisqa qismlarga bo'lish.", 'Деление большого задания на короткие части.'],
      ["Tashqi tayanchlar: namuna, tekshirish ro'yxati, barmoq bilan kuzatish.", 'Внешние опоры: образец, чек-лист, следить пальцем.'],
      ["O'z-o'zini tekshirishga o'rgatish: «Namuna bilan solishtir».", 'Обучение самоконтролю: «Сравни с образцом».'],
      ["Chalg'ituvchilarni kamaytirish va qiziqish uyg'otish (muammoli savol, o'yin elementi).", 'Меньше отвлекающих факторов, больше интереса (проблемный вопрос, элемент игры).'],
    ]),
    B.example(["O'quvchi ko'chirib yozishda harflarni tushirib qoldiradi. O'qituvchi buni dangasalik deb hisoblaydi. To'g'ri yondashuv?", 'Ученик при списывании пропускает буквы. Учитель считает это ленью. Как поступить правильно?'], [
      ["Sababini aniqlash: ixtiyoriy diqqat va o'z-o'zini nazorat hali shakllanmagan.", 'Определить причину: произвольное внимание и самоконтроль ещё не сформированы.'],
      ["Tayanch berish: so'zni bo'g'inlab o'qib, keyin yozish; har satrdan keyin namuna bilan solishtirish.", 'Дать опору: прочитать слово по слогам, затем писать; после каждой строки сверять с образцом.'],
      ["Tekshiruvni bosqichma-bosqich o'quvchiga o'tkazish va muvaffaqiyatni qayd etish.", 'Постепенно передавать проверку ученику и отмечать успехи.'],
    ], ["Natija: xato kamayadi, o'quvchida o'z-o'zini nazorat usuli paydo bo'ladi.", 'Итог: ошибок меньше, у ученика появляется способ самоконтроля.']),
    B.mistake(null, [
      ["Doimiy tanbeh «Diqqatli bo'l!» — usul bermaydi, xavotirni oshiradi.", 'Постоянное «Будь внимателен!» — не даёт способа и повышает тревожность.'],
      ["Uzoq bir xil topshiriqlar.", 'Длинные однообразные задания.'],
      ["Diqqatsizlik uchun jazolash va «dangasa» degan tamg'a.", 'Наказание за невнимательность и ярлык «ленивый».'],
    ]),
    B.exception(["**Isbotlanmagan g'oya:** bolalarni «vizual / audial / kinestetik» deb ajratib, faqat «yetakchi kanal» orqali o'qitish natijani yaxshilashi tadqiqotlarda tasdiqlanmagan. Hamma uchun foydali narsa — mazmunni bir necha usulda ko'rsatish.", '**Неподтверждённая идея:** исследования не подтверждают, что обучение детей только через их «ведущий канал» (визуал / аудиал / кинестетик) улучшает результат. Полезно всем другое — показывать содержание несколькими способами.'], undefined, ['Afsona', 'Миф']),
    B.method(["Imtihon topshiriqlarida diqqat bo'yicha savollarni qanday yechish kerak:", 'Как решать экзаменационные задания о внимании:'], [
      ["1) Vaziyatda diqqatning qaysi turi yoki xususiyati haqida gap borayotganini aniqlang.", '1) Определите, о каком виде или свойстве внимания идёт речь.'],
      ["2) Yoshga xos xususiyatni hisobga oling (ixtiyoriy diqqat endi shakllanmoqda).", '2) Учтите возрастную особенность (произвольное внимание только формируется).'],
      ["3) Jazolovchi yoki faqat talab qiluvchi variantni emas, diqqatni rivojlantiradigan va tashkil etadigan harakatni tanlang.", '3) Выбирайте не наказание и не одно требование, а действие, которое организует и развивает внимание.'],
    ]),
    B.summary(null, [
      ["Diqqat — ongning yo'nalganligi va jamlanishi.", 'Внимание — направленность и сосредоточенность сознания.'],
      ['Turlari: ixtiyorsiz, ixtiyoriy, ixtiyoriydan keyingi.', 'Виды: непроизвольное, произвольное, послепроизвольное.'],
      ['Xususiyatlari: hajm, barqarorlik, taqsimlash, ko\'chirish.', 'Свойства: объём, устойчивость, распределение, переключение.'],
      ["O'qituvchi diqqatni tashkil etadi: almashinuv, qadamlar, tayanchlar, o'z-o'zini tekshirish.", 'Учитель организует внимание: смена деятельности, шаги, опоры, самопроверка.'],
    ]),
  ],
  check: [
    cq('a-s-at-c1', '3.2.2', { ...SM, rule: ["Ixtiyoriydan keyingi diqqat: kuch bilan boshlanadi, qiziqish bilan davom etadi.", 'Послепроизвольное внимание: начинается с усилия, продолжается из интереса.'] },
      ["O'quvchi avval zerikarli matnni o'zini majburlab o'qidi, keyin qiziqib qolib, tanaffusni ham sezmadi. Bu diqqatning qaysi turi?", 'Ученик сначала заставлял себя читать скучный текст, потом увлёкся и не заметил перемены. Какой это вид внимания?'],
      [
        [['Ixtiyorsiz', 'Непроизвольное'], ["Boshida iroda kuchi bor edi — ixtiyorsiz emas.", 'Вначале было волевое усилие — значит, не непроизвольное.']],
        [['Ixtiyoriy', 'Произвольное'], ["Keyin kuch kerak bo'lmay qoldi — bu keyingi bosqich.", 'Потом усилие стало не нужно — это следующая ступень.']],
        [["Ixtiyoriydan keyingi", 'Послепроизвольное']],
        [['Taqsimlangan', 'Распределённое'], ["Taqsimlash — xususiyat, tur emas; bu yerda bitta faoliyat.", 'Распределение — свойство, а не вид; здесь одна деятельность.']],
      ], 'C', ['Kuch → qiziqish = ixtiyoriydan keyingi diqqat.', 'Усилие → интерес = послепроизвольное внимание.']),
    cq('a-s-at-c2', '3.2.2', { ...SM, d: 1 },
      ["O'quvchi bir vaqtda o'qituvchini tinglaydi va daftarga yozadi. Diqqatning qaysi xususiyati ishlaydi?", 'Ученик одновременно слушает учителя и записывает. Какое свойство внимания работает?'],
      [
        [['Hajm', 'Объём'], ['Hajm — bir vaqtda idrok qilinadigan obyektlar soni.', 'Объём — число одновременно воспринимаемых объектов.']],
        [['Taqsimlash', 'Распределение']],
        [["Ko'chirish", 'Переключение'], ["Ko'chirish — ketma-ket o'tish, bir vaqtda bajarish emas.", 'Переключение — последовательный переход, а не одновременность.']],
        [['Barqarorlik', 'Устойчивость'], ['Barqarorlik — davomiylik haqida.', 'Устойчивость — о длительности.']],
      ], 'B', ['Ikki faoliyat bir vaqtda — taqsimlash.', 'Две деятельности одновременно — распределение.']),
    cq('a-s-at-c3', '3.4.4', { ...SM, rule: ["Diqqatni tashkil etish: faoliyat almashinuvi, qisqa qadamlar, tayanchlar.", 'Организация внимания: смена деятельности, короткие шаги, опоры.'] },
      ["1-sinf o'quvchilari uzoq mashqda chalg'iy boshladi. Eng samarali harakat?", 'Первоклассники начали отвлекаться во время длинного упражнения. Самое эффективное действие?'],
      [
        [["Ovozni ko'tarib, intizomni talab qilish", 'Повысить голос и потребовать дисциплины'], ["Sababni bartaraf etmaydi.", 'Не устраняет причину.']],
        [["Topshiriqni qisqa qadamlarga bo'lish va faoliyat turini almashtirish (harakat pauzasi)", 'Разбить задание на короткие шаги и сменить вид деятельности (двигательная пауза)']],
        [["Chalg'iganlarni tanaffusdan mahrum qilish", 'Лишить отвлекающихся перемены'], ['Jazo diqqatni rivojlantirmaydi.', 'Наказание не развивает внимание.']],
        [['Mashqni oxirigacha davom ettirish', 'Продолжать упражнение до конца'], ["Barqarorlik chegarasidan oshib ketiladi.", 'Превышается предел устойчивости внимания.']],
      ], 'B', ["Yoshga xos barqarorlikni hisobga olish.", 'Учёт возрастной устойчивости внимания.']),
    cq('a-s-at-c4', '3.2.5', { ...SM, d: 3, rule: ["«Yetakchi kanal» bo'yicha o'qitish samaradorligi tasdiqlanmagan.", 'Эффективность обучения по «ведущему каналу» не подтверждена.'] },
      ["Qaysi fikr ilmiy dalillar bilan tasdiqlanmagan?", 'Какое утверждение не подтверждено научными данными?'],
      [
        [["Faoliyat almashinuvi diqqatni saqlashga yordam beradi", 'Смена деятельности помогает удерживать внимание'], ["Bu amaliyotda va tadqiqotlarda qo'llab-quvvatlanadi.", 'Это поддерживается практикой и исследованиями.']],
        [["Bolani faqat uning «yetakchi kanali» (vizual/audial/kinestetik) orqali o'qitish natijani yaxshilaydi", 'Обучение ребёнка только через его «ведущий канал» (визуал/аудиал/кинестетик) улучшает результат']],
        [["Ixtiyoriy diqqat yosh bilan rivojlanadi", 'Произвольное внимание развивается с возрастом'], ['Rivojlanish psixologiyasida tasdiqlangan.', 'Подтверждено возрастной психологией.']],
        [["Qiziqish diqqatni kuchaytiradi", 'Интерес усиливает внимание'], ['Tasdiqlangan.', 'Подтверждено.']],
      ], 'B', ["«O'qitish uslublari» gipotezasi tasdiqlanmagan.", 'Гипотеза «стилей обучения» не подтверждена.']),
  ],
});

/* ---------------- Reading literacy: theme and main idea ---------------- */

const TI = 'read-theme-idea';
const RM = { lang: 'both' as const, lesson: TI, src: ['pirls', 'pirlsuz2020'] };

const STORY: [string, string] = [
  "«Yangi o'quvchi». Aziz yangi maktabga keldi. Tanaffusda u hech kimni tanimay, deraza oldida yolg'iz turardi. Shunda Dilnoza yoniga kelib: «Biz bilan to'p o'ynaysanmi?» — dedi. Aziz jilmayib, rozi bo'ldi. Bir oydan keyin sinfga yana yangi qiz keldi. Tanaffusda u burchakda jim o'tirardi. Aziz birinchi bo'lib uning yoniga bordi.",
  '«Новенький». Азиз пришёл в новую школу. На перемене он никого не знал и стоял один у окна. Тогда Дильноза подошла и спросила: «Поиграешь с нами в мяч?» Азиз улыбнулся и согласился. Через месяц в класс пришла новая девочка. На перемене она молча сидела в углу. Азиз первым подошёл к ней.',
];

export const READ_THEME = lesson({
  id: TI, module: 'read-core', level: 'intro', minutes: 15, codes: ['1.4.2', '1.2.7', '1.4.5'], sourceIds: RM.src,
  title: ['Matn mavzusi va asosiy fikri', 'Тема и основная мысль текста'],
  blocks: [
    B.intro(["Matnni tushunishning birinchi qadami — u nima haqida va muallif nima demoqchi ekanini aniqlash. Bu ikki savol PIRLS va imtihon topshiriqlarining katta qismida bor.", 'Первый шаг понимания текста — определить, о чём он и что хочет сказать автор. Эти два вопроса встречаются в большой части заданий PIRLS и экзамена.']),
    B.definition(["**Mavzu** — matn nima haqida (so'z birikmasi bilan aytiladi). **Asosiy fikr (g'oya)** — muallif shu mavzu haqida nima demoqchi (to'liq gap bilan aytiladi).", '**Тема** — о чём текст (называется словосочетанием). **Основная мысль (идея)** — что автор хочет сказать об этой теме (формулируется полным предложением).']),
    B.table([['', ''], ['Mavzu', 'Тема'], ['Asosiy fikr', 'Основная мысль']], [
      [['Savol', 'Вопрос'], ['Nima haqida?', 'О чём?'], ['Muallif nima demoqchi?', 'Что хочет сказать автор?']],
      [['Shakl', 'Форма'], ["So'z birikmasi", 'Словосочетание'], ['Gap (fikr)', 'Предложение (утверждение)']],
      [['Misol', 'Пример'], ["Do'stlik", 'Дружба'], ["Haqiqiy do'st qiyin paytda yoningda bo'ladi", 'Настоящий друг рядом в трудную минуту']],
    ]),
    B.rule(["Asosiy fikrni topish algoritmi: 1) sarlavha; 2) takrorlanadigan kalit so'zlar; 3) boshi va oxiri; 4) qahramonda nima o'zgardi; 5) bitta gap bilan aytish va tekshirish — u butun matnga mos keladimi?", 'Алгоритм поиска основной мысли: 1) заголовок; 2) повторяющиеся ключевые слова; 3) начало и конец; 4) что изменилось с героем; 5) сформулировать одним предложением и проверить — подходит ли ко всему тексту?']),
    B.explain([STORY[0], STORY[1]], undefined, ['Matn', 'Текст']),
    B.example(['Matnning mavzusi va asosiy fikrini aniqlang.', 'Определите тему и основную мысль текста.'], [
      ["Sarlavha: «Yangi o'quvchi» — kalit so'z «yangi».", 'Заголовок: «Новенький» — ключевое слово «новый».'],
      ["Boshi: Azizga yordam berishdi. Oxiri: Aziz o'zi yordam berdi.", 'Начало: Азизу помогли. Конец: Азиз помог сам.'],
      ["Qahramondagi o'zgarish: yolg'iz yangi o'quvchidan — yordam beruvchiga.", 'Изменение героя: из одинокого новичка — в того, кто помогает.'],
      ["Mavzu: yangi o'quvchiga munosabat. Asosiy fikr: yaxshilik ko'rgan odam uni boshqalarga ham ulashadi.", 'Тема: отношение к новичку. Основная мысль: тот, кому сделали добро, передаёт его другим.'],
      ["Tekshirish: fikr butun matnga mos keladi (bir epizodga emas).", 'Проверка: мысль подходит ко всему тексту, а не к одному эпизоду.'],
    ]),
    B.mistake(null, [
      ["Asosiy fikr o'rniga syujetni qayta hikoya qilish («Aziz maktabga keldi, keyin…»).", 'Пересказ сюжета вместо идеи («Азиз пришёл в школу, потом…»).'],
      ["Juda umumiy fikr («Do'stlik yaxshi») yoki faqat bir qismga tegishli fikr.", 'Слишком общая мысль («Дружба — это хорошо») или мысль только об одной части.'],
      ["Mavzu va asosiy fikrni chalkashtirish.", 'Путаница темы и основной мысли.'],
    ]),
    B.try(cq('a-r-ti-t1', '1.4.2', { ...RM, d: 1 },
      ["Quyidagilardan qaysi biri «Yangi o'quvchi» matnining asosiy fikri?", 'Что из этого — основная мысль текста «Новенький»?'],
      [
        [["Yangi o'quvchiga munosabat", 'Отношение к новичку'], ["Bu mavzu: so'z birikmasi, fikr emas.", 'Это тема: словосочетание, а не утверждение.']],
        [["Aziz maktabga keldi va to'p o'ynadi", 'Азиз пришёл в школу и играл в мяч'], ['Bu syujet qismi.', 'Это часть сюжета.']],
        [["Yaxshilik ko'rgan odam uni boshqalarga ham ulashadi", 'Тот, кому сделали добро, передаёт его другим']],
        [["Tanaffusda to'p o'ynash foydali", 'На перемене полезно играть в мяч'], ['Matn bu haqda emas.', 'Текст не об этом.']],
      ], 'C', ["Asosiy fikr — butun matndan chiqadigan xulosa-gap.", 'Основная мысль — вывод-утверждение по всему тексту.'])),
    B.method(["Bolalarga mavzu va asosiy fikrni qanday o'rgatish:", 'Как учить детей теме и основной мысли:'], [
      ["«Nima haqida?» va «Muallif bizga nimani o'rgatmoqchi?» savollarini ajratib bering.", 'Разводите вопросы «О чём?» и «Чему автор хочет нас научить?».'],
      ["Matnga sarlavha tanlash yoki «Nega muallif shunday nomlagan?» deb so'rash.", 'Подбирать заголовок к тексту или спрашивать «Почему автор так назвал?».'],
      ["Bir nechta tayyor formulalar orasidan eng mosini tanlab, nega boshqalari mos emasligini muhokama qilish.", 'Выбирать лучшую из нескольких формулировок и обсуждать, почему остальные не подходят.'],
      ["Matnga mos maqol tanlash — asosiy fikrni umumlashtirishning qiziqarli usuli.", 'Подбирать к тексту пословицу — увлекательный способ обобщить основную мысль.'],
    ]),
    B.summary(null, [
      ["Mavzu — nima haqida; asosiy fikr — muallif nima demoqchi.", 'Тема — о чём; основная мысль — что хочет сказать автор.'],
      ["Asosiy fikr butun matnga mos keladigan bitta gap.", 'Основная мысль — одно предложение, подходящее ко всему тексту.'],
      ["Qahramondagi o'zgarish ko'pincha g'oyaga yo'l ko'rsatadi.", 'Изменение героя часто указывает на идею.'],
    ]),
  ],
  check: [
    cq('a-r-ti-c1', '1.4.2', { ...RM, rule: ["Mavzu — so'z birikmasi («nima haqida»).", 'Тема — словосочетание («о чём»).'] },
      ["«Bahor kelishi bilan bog'da hamma narsa jonlandi: kurtaklar ochildi, qushlar qaytdi, bolalar ko'chaga chiqdi.» Bu matnning mavzusi qaysi?", '«С приходом весны в саду всё ожило: раскрылись почки, вернулись птицы, дети вышли на улицу». Какова тема этого текста?'],
      [
        [["Bahorda tabiatning uyg'onishi", 'Пробуждение природы весной']],
        [["Qushlar qaytdi", 'Вернулись птицы'], ['Bu bitta detal, butun matn emas.', 'Это одна деталь, а не весь текст.']],
        [["Bahor — eng yaxshi fasl", 'Весна — лучшее время года'], ["Bu fikr matnda aytilmagan.", 'Это утверждение в тексте не высказано.']],
        [['Bolalar o\'yini', 'Игры детей'], ['Faqat bitta detal.', 'Только одна деталь.']],
      ], 'A', ["Barcha detallar bitta mavzuni ochadi — bahorda tabiatning jonlanishi.", 'Все детали раскрывают одну тему — оживление природы весной.']),
    cq('a-r-ti-c2', '1.4.2', { ...RM, d: 3, rule: ["Asosiy fikr butun matnga mos bo'lishi kerak.", 'Основная мысль должна подходить ко всему тексту.'] },
      ["O'quvchi hikoyaning asosiy fikrini «Qahramon o'rmonga bordi» deb aytdi. Xato nimada?", 'Ученик сформулировал основную мысль рассказа как «Герой пошёл в лес». В чём ошибка?'],
      [
        [["Bu syujet voqeasi, muallifning fikri emas", 'Это событие сюжета, а не мысль автора']],
        [["Gap juda qisqa", 'Предложение слишком короткое'], ["Uzunlik emas, mazmun muhim.", 'Важна не длина, а содержание.']],
        [["Xato yo'q", 'Ошибки нет'], ["Voqea asosiy fikr emas.", 'Событие не является основной мыслью.']],
        [["Qahramon nomi aytilmagan", 'Не названо имя героя'], ["Ism muhim emas.", 'Имя не главное.']],
      ], 'A', ['Asosiy fikr — xulosa, voqea emas.', 'Основная мысль — вывод, а не событие.']),
    cq('a-r-ti-c3', '1.2.7', { ...RM },
      ["Asosiy fikrni o'rgatish uchun qaysi topshiriq eng foydali?", 'Какое задание наиболее полезно для обучения основной мысли?'],
      [
        [["Matnni yod olish", 'Выучить текст наизусть'], ['Yodlash tushunishni bermaydi.', 'Заучивание не даёт понимания.']],
        [["Bir nechta formuladan eng mosini tanlab, tanlovni asoslash", 'Выбрать из нескольких формулировок наиболее подходящую и обосновать выбор']],
        [["Matndagi so'zlarni sanash", 'Посчитать слова в тексте'], ["Mazmunga aloqasi yo'q.", 'Не связано с содержанием.']],
        [["Matnni ko'chirib yozish", 'Переписать текст'], ['Mexanik ish.', 'Механическая работа.']],
      ], 'B', ["Tanlov va asoslash — talqinni rivojlantiradi.", 'Выбор и обоснование развивают интерпретацию.']),
  ],
});

export const SHARED_LESSONS = [PED_FORMATIVE, PSY_ATTENTION, READ_THEME];
