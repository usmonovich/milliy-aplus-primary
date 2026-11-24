// Section 3 — Pedagogical mastery, mock variant 2. Original items (not official
// questions), one per official code. Shared bilingual content.
import { mc } from './build';
import type { Question } from '../../core/types';

const E = { lang: 'both' as const, pool: 'exam' as const };

export const BANK_S3_V2: Question[] = [
  mc('s3-v2-311', '3.1.1', { ...E, d: 2, src: ['spec2026', 'kasbstandart'] },
    ["Dars maqsadi: «Dars oxirida o'quvchilar to'g'ri to'rtburchak perimetrini topishga oid masalalarni yechadi». SMART talablariga ko'ra unda eng avvalo nima yetishmaydi?",
     'Цель урока: «К концу урока ученики будут решать задачи на нахождение периметра прямоугольника». Чего в ней по требованиям SMART не хватает в первую очередь?'],
    [
      ['Vaqt chegarasi', 'Ограничения во времени'],
      ["O'lchanadigan muvaffaqiyat mezoni (masalan, 5 ta masaladan kamida 4 tasini to'g'ri yechish)", 'Измеримого критерия успеха (например, верно решить не менее 4 задач из 5)'],
      ["O'quv dasturiga aloqadorlik", 'Связи с учебной программой'],
      ["O'quvchining harakatini ko'rsatish", 'Указания на действие ученика'],
    ], 'B',
    ["Maqsadda muddat (dars oxiri), o'quvchi harakati (yechadi) va dasturga aloqadorlik bor. Natija qanday darajada erishilganini o'lchash mezoni yo'q — shuning uchun maqsadga erishildi-erishilmadi, deb aniqlab bo'lmaydi.",
     'В цели есть срок (конец урока), действие ученика (решать) и связь с программой. Нет критерия, по которому можно измерить достижение, — поэтому нельзя однозначно сказать, достигнута ли цель.']),

  mc('s3-v2-312', '3.1.2', { ...E, src: ['spec2026', 'ibragimov'] },
    ["Yangi bilimni o'rganish darsining qaysi bosqichlar ketma-ketligi eng mantiqiy?", 'Какая последовательность этапов урока изучения нового материала наиболее логична?'],
    [
      ["Mustaqil ish → yangi mavzu tushuntirilishi → maqsad qo'yish → refleksiya", 'Самостоятельная работа → объяснение новой темы → постановка цели → рефлексия'],
      ["Yangi mavzuni tushuntirish → uyga vazifa → bilimlarni faollashtirish → maqsad qo'yish", 'Объяснение новой темы → домашнее задание → актуализация знаний → постановка цели'],
      ["Bilimlarni faollashtirish → maqsad qo'yish → namuna bilan yangi bilim → yo'naltirilgan mashq → mustaqil ish → refleksiya", 'Актуализация знаний → постановка цели → новое знание с образцом → направляемая практика → самостоятельная работа → рефлексия'],
      ["Refleksiya → mustaqil ish → bilimlarni faollashtirish → yangi bilim", 'Рефлексия → самостоятельная работа → актуализация знаний → новое знание'],
    ], 'C',
    ["Avval tayanch bilim faollashtiriladi va maqsad qo'yiladi, so'ng yangi bilim namuna bilan beriladi; o'quvchi avval o'qituvchi yordamida, keyin mustaqil mashq qiladi; oxirida refleksiya natijani maqsad bilan solishtiradi. Qolgan variantlarda mantiqiy bog'liqlik buzilgan.",
     'Сначала актуализируются опорные знания и ставится цель, затем новое знание даётся с образцом; ученик тренируется сначала с поддержкой, потом самостоятельно; в конце рефлексия соотносит результат с целью. В остальных вариантах логика нарушена.']),

  mc('s3-v2-313', '3.1.3', { ...E, d: 2, src: ['spec2026', 'mavlonova'] },
    ["Qaysi usul kichik maktab yoshidagi o'quvchilarning ichki motivatsiyasini birinchi navbatda qo'llab-quvvatlaydi?", 'Какой приём в первую очередь поддерживает внутреннюю мотивацию младших школьников?'],
    [
      ["Har bir to'g'ri javob uchun stiker berish", 'Наклейка за каждый правильный ответ'],
      ["Bir nechta topshiriqdan tanlash imkoniyati va aniq maqsad sari ko'rinadigan o'sish", 'Возможность выбора из нескольких заданий и видимый прогресс к понятной цели'],
      ["O'quvchini sinf oldida eng yaxshi o'quvchilar bilan solishtirish", 'Сравнение ученика с лучшими учениками перед классом'],
      ["Yomon baho qo'yish bilan ogohlantirish", 'Предупреждение о плохой отметке'],
    ], 'B',
    ["Ichki motivatsiya avtonomiya (tanlov), kompetentlik hissi (o'z o'sishini ko'rish) va maqsad ma'nosiga tayanadi. Stiker — tashqi mukofot, uzoq muddatda qiziqishni pasaytirishi mumkin; solishtirish va qo'rqitish xavotirni oshiradi.",
     'Внутренняя мотивация опирается на автономию (выбор), чувство компетентности (видимый рост) и смысл цели. Наклейка — внешнее подкрепление, со временем может снижать интерес; сравнение и угрозы повышают тревожность.']),

  mc('s3-v2-314', '3.1.4', { ...E, src: ['inklyuziv2020', 'inklyuziv2022'] },
    ["2-sinfda diqqat yetishmasligi va giperaktivlik sindromi (DYeGS) tashxisi bor o'quvchi darsda uzoq o'tira olmaydi, tez-tez o'rnidan turadi. O'qituvchining eng to'g'ri yondashuvi qaysi?",
     'Ученик 2 класса с синдромом дефицита внимания и гиперактивности (СДВГ) не может долго сидеть, часто вскакивает с места. Какой подход учителя наиболее верен?'],
    [
      ["Uni darsdan chiqarib, alohida ishlatish", 'Удалять его с урока и заниматься с ним отдельно'],
      ["Har safar o'rnidan turganda tanbeh berish", 'Делать замечание каждый раз, когда он встаёт'],
      ["E'tibor bermaslik, xatti-harakati o'zi o'tib ketadi", 'Не обращать внимания: поведение пройдёт само'],
      ["Topshiriqlarni qisqa qadamlarga bo'lish, dars rejasini ko'rinadigan qilish, harakat pauzalari va topshiriq-yumushlar berish, chalg'ituvchilardan uzoqroq joy ajratish", 'Делить задания на короткие шаги, сделать план урока видимым, давать двигательные паузы и поручения, посадить подальше от отвлекающих факторов'],
    ], 'D',
    ["Inklyuziv yondashuv bola xususiyatiga muhitni moslashtiradi: qisqa qadamlar va vizual reja diqqatni ushlab turadi, ruxsat etilgan harakat ehtiyojni qondiradi. Chiqarib yuborish ajratadi, doimiy tanbeh o'zini past baholashga olib keladi, e'tiborsizlik yordam bermaydi.",
     'Инклюзивный подход адаптирует среду к особенностям ребёнка: короткие шаги и визуальный план удерживают внимание, разрешённое движение удовлетворяет потребность. Удаление изолирует, постоянные замечания снижают самооценку, игнорирование не помогает.']),

  mc('s3-v2-315', '3.1.5', { ...E, d: 2, src: ['kasbstandart'] },
    ["Qaysi kasbiy rivojlanish shakli o'qituvchi amaliyotini yaxshilash bilan eng bevosita bog'liq?", 'Какая форма профессионального развития наиболее непосредственно связана с улучшением практики учителя?'],
    [
      ["Bir martalik ma'ruzani tinglash", 'Прослушивание разовой лекции'],
      ["Iloji boricha ko'proq sertifikat to'plash", 'Сбор как можно большего числа сертификатов'],
      ["Hamkasblar bilan darsni birga rejalashtirish, o'zaro kuzatish, natijalarni tahlil qilib, keyingi darsga o'zgartirish kiritish (Lesson study)", 'Совместное планирование урока с коллегами, взаимопосещение, анализ результатов и внесение изменений в следующий урок (Lesson study)'],
      ["Nazariy adabiyotni amaliyotga tatbiq etmasdan o'qish", 'Чтение теоретической литературы без применения на практике'],
    ], 'C',
    ["Kasbiy o'sish amaliyotga bog'langan va takroriy bo'lsa samarali: rejalashtirish → kuzatish → o'quvchi natijalari tahlili → o'zgartirish. Bir martalik tadbir va sertifikatlar o'z-o'zidan amaliyotni o'zgartirmaydi.",
     'Профессиональный рост эффективен, когда он встроен в практику и цикличен: планирование → наблюдение → анализ результатов учеников → изменения. Разовые мероприятия и сертификаты сами по себе практику не меняют.']),

  mc('s3-v2-321', '3.2.1', { ...E, src: ['goziyev', 'nishanova'] },
    ["O'quvchi topshiriqni bajarishdan oldin harakatlarini rejalashtiradi va natijani namuna bilan o'zi tekshiradi. Bu kichik maktab yoshining qaysi psixologik yangi tuzilmalarini aks ettiradi?",
     'Ученик перед выполнением задания планирует свои действия и сам сверяет результат с образцом. Какие психологические новообразования младшего школьного возраста это отражает?'],
    [
      ["Rolli o'yin yetakchi faoliyat sifatida", 'Сюжетно-ролевая игра как ведущая деятельность'],
      ["Ixtiyoriylik, ichki harakat rejasi va refleksiya", 'Произвольность, внутренний план действий и рефлексия'],
      ['Kattalik hissi', 'Чувство взрослости'],
      ["«Men o'zim» avtonomiyasi", 'Автономия «я сам»'],
    ], 'B',
    ["D.B. Elkonin va V.V. Davydov bo'yicha kichik maktab yoshining yangi tuzilmalari — ixtiyoriylik, ichki harakat rejasi va refleksiya; yetakchi faoliyat — o'quv faoliyati. Rolli o'yin — maktabgacha yosh, kattalik hissi — o'smirlik, «men o'zim» — 3 yosh inqirozi.",
     'По Д.Б. Эльконину и В.В. Давыдову новообразования младшего школьного возраста — произвольность, внутренний план действий и рефлексия; ведущая деятельность — учебная. Ролевая игра — дошкольный возраст, чувство взрослости — подростковый, «я сам» — кризис 3 лет.']),

  mc('s3-v2-322', '3.2.2', { ...E, src: ['goziyev'] },
    ["2-sinf o'quvchilari qoidani so'zma-so'z yodlaydi, lekin uni qo'llay olmaydi. Qaysi usul mazmunli eslab qolishni rivojlantiradi?", 'Ученики 2 класса дословно заучивают правило, но не могут его применить. Какой приём развивает смысловое запоминание?'],
    [
      ["Qoidani misollar asosida o'z so'zlari bilan tushuntirish, tayanch sxema tuzish va ma'lum bilim bilan bog'lash", 'Объяснять правило своими словами на примерах, составлять опорную схему и связывать с уже известным'],
      ["Qoidani 10 marta ovoz chiqarib takrorlash", 'Повторить правило вслух 10 раз'],
      ["Qoidani daftarga uch marta ko'chirish", 'Трижды переписать правило в тетрадь'],
      ["Ertangi darsgacha qoidani yod olish", 'Выучить правило наизусть к следующему уроку'],
    ], 'A',
    ["Mazmunli eslab qolish tushunish, tuzilmani ko'rish va yangi bilimni avvalgisi bilan bog'lashga asoslanadi. Takrorlash va ko'chirish mexanik xotiraga tayanadi va qo'llashga o'tkazilmaydi.",
     'Смысловое запоминание опирается на понимание, выделение структуры и связь нового с известным. Повторение и переписывание задействуют механическую память и не дают переноса на применение.']),

  mc('s3-v2-323', '3.2.3', { ...E, src: ['goziyev', 'nishanova'] },
    ["Ota-onalar birinchi sinf o'quvchisi hafta oxiriga kelib charchoq va bosh og'rig'idan shikoyat qilayotganini aytishdi. O'qituvchi nima qilishi kerak?",
     'Родители рассказывают, что к концу недели первоклассник жалуется на усталость и головную боль. Что следует сделать учителю?'],
    [
      ["Bolaga qo'shimcha mashg'ulotlar tayinlash", 'Назначить ребёнку дополнительные занятия'],
      ["Uyga vazifani ko'paytirish, chunki u ortda qolmoqda", 'Увеличить домашние задания, так как он отстаёт'],
      ["Shikoyatlarga e'tibor bermaslik — bu odatiy holat", 'Не обращать внимания на жалобы — это обычное явление'],
      ["Yuklamani me'yorlash va darsda harakat pauzalarini kiritish, kun tartibi bo'yicha ota-onalar bilan maslahatlashish, moslashuv buzilishi belgilarini kuzatish, kerak bo'lsa psixolog va tibbiyot xodimini jalb qilish", 'Дозировать нагрузку и вводить двигательные паузы, обсудить режим дня с родителями, наблюдать за признаками дезадаптации, при необходимости привлечь психолога и медработника'],
    ], 'D',
    ["Charchoq va somatik shikoyatlar — moslashuv qiyinligining mumkin bo'lgan belgilari. Yuklamani me'yorlash, kun tartibi va mutaxassis bilan hamkorlik moslashuvni qo'llaydi; yuklamani oshirish holatni og'irlashtiradi.",
     'Утомление и соматические жалобы — возможные признаки трудностей адаптации. Дозирование нагрузки, режим дня и сотрудничество со специалистами поддерживают адаптацию; увеличение нагрузки ухудшает состояние.']),

  mc('s3-v2-324', '3.2.4', { ...E, src: ['spec2026', 'mavlonova'] },
    ["Doska oldida xato qilgan o'quvchi qiz yig'lab, davom etishdan bosh tortdi. O'qituvchining qaysi javobi o'z-o'zini boshqarishni (SEL) rivojlantiradi?",
     'Ученица, ошибившись у доски, расплакалась и отказывается продолжать. Какой ответ учителя развивает саморегуляцию (SEL)?'],
    [
      ["«Yig'lama, bu arzimas narsa», deb davom etishni talab qilish", 'Сказать «Не плачь, это ерунда» и потребовать продолжить'],
      ["Darhol joyiga o'tqazib, boshqa o'quvchini chaqirish va keyin bu haqda gapirmaslik", 'Сразу посадить на место, вызвать другого и больше не возвращаться к этому'],
      ["«Sen xafa bo'lding — bu tabiiy. Keling, chuqur nafas olamiz. Xato — o'rganishning bir qismi. Birinchi qadamni birga qilamiz», deyish", 'Сказать: «Ты расстроилась — это нормально. Давай глубоко вдохнём. Ошибка — часть учёбы. Сделаем первый шаг вместе»'],
      ["Ota-onasini chaqirtirish", 'Вызвать родителей'],
    ], 'C',
    ["SEL yondashuvi: hissiyotni nomlash va qabul qilish, o'zini tinchlantirish usulini ko'rsatish, xatoga normal munosabatni shakllantirish va yordam bilan vazifaga qaytish. Hissiyotni inkor etish yoki vaziyatdan chetlatish o'z-o'zini boshqarishni o'rgatmaydi.",
     'Подход SEL: назвать и принять эмоцию, показать способ успокоиться, нормализовать ошибку и вернуться к задаче с поддержкой. Отрицание чувств или устранение из ситуации саморегуляции не учат.']),

  mc('s3-v2-325', '3.2.5', { ...E, src: ['goziyev'] },
    ["Xolerik temperamentli o'quvchi javoblarni baqirib aytadi va boshqalarning gapini bo'ladi. Qaysi yondashuv eng to'g'ri?", 'Ученик холерического темперамента выкрикивает ответы и перебивает других. Какой подход наиболее верен?'],
    [
      ["Navbat qoidalarini (signal kartochkalari) kiritish, faolligini yumushlar va faol topshiriqlarga yo'naltirish, o'zini tutishini ijobiy qayd etish", 'Ввести правила очерёдности (сигнальные карточки), направлять активность на поручения и деятельностные задания, позитивно отмечать сдержанность'],
      ["Uni sinf oldida uyaltirish", 'Стыдить его перед классом'],
      ["Unga hech qachon so'z bermaslik", 'Никогда не давать ему слова'],
      ["Har doim birinchi bo'lib javob berishiga ruxsat berish", 'Всегда разрешать отвечать первым'],
    ], 'A',
    ["Temperament o'zgarmaydi, lekin xulq-atvorni boshqarish o'rgatiladi: aniq qoidalar va energiyani foydali faoliyatga yo'naltirish. Uyaltirish va e'tiborsizlik munosabatni buzadi; doimiy imtiyoz boshqalarni faollikdan mahrum qiladi.",
     'Темперамент не меняется, но управлению поведением можно научить: чёткие правила и направление энергии в полезную деятельность. Стыжение и игнорирование портят отношения; постоянная привилегия лишает активности остальных.']),

  mc('s3-v2-331', '3.3.1', { ...E, d: 2, src: ['spec2026', 'ibragimov'] },
    ["«Zigzag» (Jigsaw) metodida har bir o'quvchi nima qiladi?", 'Что делает каждый ученик в методе «Зигзаг» (Jigsaw)?'],
    [
      ["Butun matnni yakka o'qib, test yechadi", 'Читает весь текст в одиночку и решает тест'],
      ["Ekspert guruhida materialning bir qismini o'rganadi, so'ng o'z guruhiga qaytib, uni boshqalarga o'rgatadi", 'Изучает часть материала в экспертной группе, затем возвращается в свою группу и обучает ей остальных'],
      ["O'qituvchi tushuntirishini tinglab, konspekt yozadi", 'Слушает объяснение учителя и пишет конспект'],
      ["Guruh sardorining topshirig'ini bajaradi", 'Выполняет поручения капитана группы'],
    ], 'B',
    ["«Zigzag»da har bir o'quvchi bir qism bo'yicha «ekspert» bo'ladi va uni guruhdoshlariga o'rgatadi: bu ijobiy o'zaro bog'liqlik va shaxsiy javobgarlikni ta'minlaydi (hamkorlik va kommunikatsiya — 4K).",
     'В «Зигзаге» каждый ученик становится «экспертом» по одной части и обучает ей одногруппников: это обеспечивает положительную взаимозависимость и личную ответственность (сотрудничество и коммуникация — 4К).']),

  mc('s3-v2-332', '3.3.2', { ...E, src: ['spec2026', 'mavlonova'] },
    ["3-sinf matematika darsida o'quv muammosini qo'yishning qaysi usuli eng muvaffaqiyatli?", 'Какая постановка учебной проблемы на уроке математики в 3 классе наиболее удачна?'],
    [
      ["Mavzu va qoidani e'lon qilib, darhol misollar berish", 'Объявить тему и правило и сразу дать примеры'],
      ["Ko'plab bir xil misollar yechdirish", 'Дать решить много однотипных примеров'],
      ["«Hammaga tushunarlimi?» deb so'rash", 'Спросить: «Всем понятно?»'],
      ["Shakli har xil, lekin yuzasi taqqoslanishi kerak bo'lgan ikki figurani berib, o'quvchilar ma'lum usul bilan javob topa olmasligini sezishlariga imkon berish", 'Предложить сравнить площади двух фигур разной формы, чтобы ученики обнаружили, что известным способом ответить нельзя'],
    ], 'D',
    ["Muammoli vaziyat ma'lum bilim bilan yangi vazifa o'rtasidagi qarama-qarshilikdan tug'iladi: o'quvchilar yangi usul (masalan, yuza o'lchovi) zarurligini o'zlari anglaydi. Boshqa variantlarda tayyor bilim beriladi, izlanish yo'q.",
     'Проблемная ситуация возникает из противоречия между известным и новой задачей: ученики сами осознают потребность в новом способе (например, в мерке площади). В остальных вариантах знание даётся в готовом виде, поиска нет.']),

  mc('s3-v2-333', '3.3.3', { ...E, d: 2, src: ['spec2026'] },
    ["O'quvchi messenjerdan «Ertaga darslar bekor qilinadi» degan xabarni olib keldi. Ma'lumotni tekshirishga o'rgatadigan eng to'g'ri savol qaysi?", 'Ученик принёс из мессенджера сообщение «Завтра уроки отменят». Какой вопрос лучше всего учит проверять информацию?'],
    [
      ["«Muallif kim va bu xabar maktab yoki vazirlikning rasmiy sahifasida bormi?»", '«Кто автор и есть ли это сообщение на официальной странице школы или министерства?»'],
      ["«Buni necha kishi ulashgan?»", '«Сколько человек это переслали?»'],
      ["«Xabar chiroyli bezatilganmi?»", '«Красиво ли оформлено сообщение?»'],
      ["«Bu xabar senga yoqdimi?»", '«Тебе понравилось это сообщение?»'],
    ], 'A',
    ["Media-savodxonlikning asosiy qadami — manba va muallifni aniqlash hamda ma'lumotni rasmiy manba bilan solishtirish. Ulashishlar soni, bezak yoki shaxsiy yoqish ishonchlilik mezoni emas.",
     'Ключевой шаг медиаграмотности — определить источник и автора и сверить информацию с официальным источником. Число пересылок, оформление или личная симпатия не являются критериями достоверности.']),

  mc('s3-v2-334', '3.3.4', { ...E, src: ['spec2026', 'gafforova'] },
    ["O'qituvchi bitta mavzu bo'yicha uch darajadagi topshiriq tayyorladi. Bunda nimaga rioya qilish muhim?", 'Учитель подготовил задания трёх уровней по одной теме. Что при этом важно соблюдать?'],
    [
      ["Zaif o'quvchilarga faqat rasm bo'yash topshirig'ini berish", 'Давать слабым ученикам только раскрашивание'],
      ["Guruhlarni butun o'quv yiliga o'zgarmas qilib belgilash", 'Закрепить группы неизменными на весь учебный год'],
      ["Barcha darajalar dars maqsadiga olib boradi, o'quvchi keyingi darajaga o'tishi mumkin, guruhlar natijaga qarab o'zgarib turadi", 'Все уровни ведут к цели урока, ученик может перейти на следующий уровень, группы меняются по результатам'],
      ["Kuchli o'quvchilar o'z topshirig'isiz faqat boshqalarga yordam beradi", 'Сильные ученики без своих заданий только помогают другим'],
    ], 'C',
    ["Tabaqalashtirishda maqsad umumiy, yordam darajasi va murakkablik har xil. Moslashuvchan guruhlar va yuqoriga o'tish imkoniyati past kutishlar «tamg'asi»ning oldini oladi. Kuchli o'quvchilar ham o'z o'sish topshirig'iga muhtoj.",
     'При дифференциации цель общая, различаются уровень поддержки и сложность. Гибкие группы и возможность перейти выше предотвращают «ярлык» низких ожиданий. Сильным ученикам тоже нужны задания для роста.']),

  mc('s3-v2-335', '3.3.5', { ...E, src: ['spec2026', 'kasbstandart'] },
    ["Hamkasb dars tahlilida shunday yozdi: «O'qituvchi yaxshi tushuntirdi, bolalar intizomli edi». Bu tahlilda nima yetishmaydi?", 'Коллега написал в анализе урока: «Учитель хорошо объяснял, дети были дисциплинированы». Чего не хватает этому анализу?'],
    [
      ["O'qituvchining tashqi ko'rinishiga baho", 'Оценки внешнего вида учителя'],
      ["O'quvchilar dars maqsadiga erishgani haqidagi dalillar (chiqish kartochkalari, mustaqil ish natijalari)", 'Доказательств того, что ученики достигли цели урока (карточки выхода, результаты самостоятельной работы)'],
      ["Dars davomida qilingan barcha savollar ro'yxati", 'Перечня всех вопросов, заданных на уроке'],
      ["Sinf xonasining jihozlari tavsifi", 'Описания оборудования кабинета'],
    ], 'B',
    ["Dars samaradorligi o'qituvchi faoliyati bilan emas, o'quvchilar natijasi bilan o'lchanadi: maqsadga erishilganini dalillar bilan ko'rsatish kerak. Tushuntirish va intizom — vosita, natija emas.",
     'Эффективность урока измеряется результатами учеников, а не действиями учителя: нужны доказательства достижения цели. Объяснение и дисциплина — средства, а не результат.']),

  mc('s3-v2-341', '3.4.1', { ...E, src: ['spec2026', 'gafforova'] },
    ["Darsning o'rtasida o'quvchilar rejalashtirilgan topshiriqlarni kutilganidan tez va to'g'ri bajargani ma'lum bo'ldi. O'qituvchi nima qilgani ma'qul?", 'К середине урока выяснилось, что ученики выполнили запланированные задания быстрее и верно. Как лучше поступить учителю?'],
    [
      ["Mavzuni chuqurlashtiruvchi qo'llash yoki yuqori murakkablikdagi topshiriqqa o'tish", 'Перейти к заданию на применение или повышенной сложности по той же теме'],
      ["Xuddi shunday topshiriqlardan yana bir nechtasini berish", 'Дать ещё несколько таких же заданий'],
      ["Darsni erta tugatib, o'quvchilarni bo'shatish", 'Закончить урок раньше и отпустить учеников'],
      ["Bog'liqliksiz keyingi darsning yangi mavzusini boshlash", 'Начать новую тему следующего урока без связи с текущей'],
    ], 'A',
    ["Dinamik rejalashtirish formativ ma'lumotga javob beradi: maqsadga erishilgan bo'lsa, o'qitish chuqurlashtiriladi. Bir xil topshiriqlar vaqtni behuda sarflaydi, bog'liqsiz yangi mavzu izchillikni buzadi.",
     'Динамическое планирование реагирует на формативные данные: если цель достигнута, обучение углубляется. Однотипные задания тратят время впустую, несвязанная новая тема нарушает последовательность.']),

  mc('s3-v2-342', '3.4.2', { ...E, src: ['spec2026'] },
    ["3-sinfda qaysi mavzu matematika, ona tili va tabiiy fanni eng yaxshi integratsiya qiladi?", 'Какая тема в 3 классе лучше всего интегрирует математику, родной язык и естествознание?'],
    [
      ["Tabiat darsida misollar yechish", 'Решение примеров на уроке природоведения'],
      ["Raqamlar haqidagi she'rlarni o'qish", 'Чтение стихов о цифрах'],
      ["Daraxtlarni rasmga chizish", 'Рисование деревьев'],
      ["«Ob-havo kuzatuvi»: harorat kundaligi (jadval va diagramma), ob-havo tavsifi (matn), fasl o'zgarishlari bo'yicha xulosa", '«Наблюдение за погодой»: дневник температур (таблица и диаграмма), описание погоды (текст), вывод о сезонных изменениях'],
    ], 'D',
    ["Haqiqiy integratsiyada bitta hayotiy vazifa har bir fan vositasini mazmunli talab qiladi: o'lchash va diagramma (matematika), tavsif matni (til), tabiat hodisalari (tabiiy fan). Boshqa variantlarda fanlar mexanik qo'shilgan.",
     'При настоящей интеграции одна жизненная задача содержательно требует средств каждого предмета: измерения и диаграммы (математика), текст-описание (язык), природные явления (естествознание). В остальных вариантах предметы соединены механически.']),

  mc('s3-v2-343', '3.4.3', { ...E, src: ['spec2026', 'kasbstandart'] },
    ["O'quvchi o'qituvchi javobini bilmaydigan savol berdi. Eng to'g'ri pedagogik harakat qaysi?", 'Ученик задал вопрос, на который учитель не знает ответа. Какое педагогическое действие наиболее верно?'],
    [
      ["Savolni darsga aloqasiz deb e'tiborsiz qoldirish", 'Проигнорировать вопрос как не относящийся к уроку'],
      ["Halol tan olish, savolni qadrlash va javobni birga topishni taklif qilish (keyingi darsga manba bilan qaytish)", 'Честно признать, поблагодарить за вопрос и предложить найти ответ вместе (вернуться к нему на следующем уроке с источником)'],
      ["Taxminiy javobni aniq fakt sifatida aytish", 'Дать предполагаемый ответ как точный факт'],
      ["O'quvchini darsni chalg'itgani uchun tanqid qilish", 'Сделать ученику замечание за то, что он отвлекает'],
    ], 'B',
    ["Halollik va izlanishga namuna bo'lish o'quvchilar ishonchini va qiziquvchanligini saqlaydi. Noto'g'ri ma'lumot berish yoki savolni bostirish bilish motivatsiyasini pasaytiradi.",
     'Честность и пример поиска сохраняют доверие и любознательность учеников. Недостоверный ответ или подавление вопроса снижают познавательную мотивацию.']),

  mc('s3-v2-344', '3.4.4', { ...E, src: ['spec2026'] },
    ["Tanaffusdan keyin sinf hayajonlangan va shovqinli, darsni boshlash qiyin. O'qituvchining eng samarali harakati qaysi?", 'После перемены класс возбуждён и шумит, урок не удаётся начать. Какое действие учителя наиболее эффективно?'],
    [
      ["Ovozini ko'tarib, baqirib tinchlantirish", 'Повысить голос и успокаивать криком'],
      ["Butun sinfni jazolash", 'Наказать весь класс'],
      ["Qisqa almashtiruvchi mashq (qarsak ritmini takrorlash, nafas mashqi) va darsni boshlash uchun aniq signal, so'ng darhol qiziqarli topshiriq", 'Короткое переключающее упражнение (повтор ритма хлопков, дыхательное упражнение) и чёткий сигнал начала, затем сразу интересное задание'],
      ["Tinchlik o'zi o'rnatilguncha uzoq vaqt jim kutish", 'Долго молча ждать, пока тишина установится сама'],
    ], 'C',
    ["Kichik maktab yoshidagi bolalar diqqatini o'tish rituallari va harakat orqali tez almashtirish mumkin; aniq signal va darhol faoliyat vaqtni tejaydi. Baqiriq va jamoaviy jazo muhitni buzadi, uzoq kutish dars vaqtini yo'qotadi.",
     'Внимание младших школьников быстро переключается ритуалами перехода и движением; чёткий сигнал и немедленная деятельность экономят время. Крик и коллективное наказание портят климат, долгое ожидание отнимает время урока.']),

  mc('s3-v2-345', '3.4.5', { ...E, src: ['spec2026', 'tarbiya2021'] },
    ["Ona sinf chatida qiziga kulishayotgani va uning suratlarini tarqatishayotganini aytdi. O'qituvchining to'g'ri harakatlari qaysi?", 'Мама сообщила, что в чате класса над её дочерью смеются и рассылают её фото. Каковы верные действия учителя?'],
    [
      ["Faktlarni qayd etish (skrinshotlar), jabrlanuvchini alohida qo'llab-quvvatlash, ishtirokchilar bilan alohida suhbat, ota-onalar va maktab psixologini jalb qilish, sinfda internetda muloqot qoidalarini muhokama qilish", 'Зафиксировать факты (скриншоты), отдельно поддержать пострадавшую, поговорить с участниками по отдельности, привлечь родителей и школьного психолога, обсудить в классе правила общения в сети'],
      ["Chat maktab ishi emasligini aytish", 'Сказать, что чат — не дело школы'],
      ["Aybdorlarni butun sinf oldida jazolash", 'Наказать виновных перед всем классом'],
      ["Qizni chatdan chiqarib yuborishni maslahat berish", 'Посоветовать удалить девочку из чата'],
    ], 'A',
    ["Kiberbulling ham bulling: maktab hamkorlikda choralar ko'radi — dalillar, jabrlanuvchini himoya qilish, tajovuzkorlar bilan ish, ota-onalar va psixolog, profilaktika. Ommaviy jazo eskalatsiyaga, jabrlanuvchini chiqarish uni yana jazolashga olib keladi.",
     'Кибербуллинг — тоже буллинг: школа действует совместно — доказательства, защита пострадавшей, работа с агрессорами, родители и психолог, профилактика. Публичное наказание ведёт к эскалации, удаление пострадавшей наказывает её повторно.']),

  mc('s3-v2-346', '3.4.6', { ...E, d: 2, src: ['kriterial2023'] },
    ["Yozma ishdan keyin 2-sinf o'quvchisi uchun qaysi o'z-o'zini baholash vositasi eng ma'lumotli?", 'Какой инструмент самооценивания наиболее информативен для ученика 2 класса после письменной работы?'],
    [
      ["O'ziga 1 dan 5 gacha baho qo'yish", 'Поставить себе отметку от 1 до 5'],
      ["Kayfiyat smayligini chizish", 'Нарисовать смайлик настроения'],
      ["O'zini partadoshi bilan solishtirish", 'Сравнить себя с соседом по парте'],
      ["Misollari bilan mezonlar varag'i: «Gapni bosh harf bilan boshladim», «Oxirida nuqta qo'ydim» — har biriga «ha / hali yo'q» belgisi", 'Лист критериев с примерами: «Я начал предложение с большой буквы», «Поставил точку в конце» — по каждому отметка «да / пока нет»'],
    ], 'D',
    ["O'z-o'zini baholash aniq mezonlarga tayansa, o'quvchi nimani bajargani va nimani yaxshilashi kerakligini ko'radi. Raqamli baho va smaylik sababni ko'rsatmaydi, solishtirish raqobatga yo'naltiradi.",
     'Самооценивание по конкретным критериям показывает ученику, что получилось и что улучшить. Отметка и смайлик не раскрывают причин, сравнение с другими переводит в соперничество.']),

  mc('s3-v2-347', '3.4.7', { ...E, src: ['spec2026'] },
    ["Dars vaqtida kuchli silkinishlar bilan zilzila boshlandi. O'qituvchining to'g'ri harakatlar ketma-ketligi qaysi?", 'Во время урока началось землетрясение с сильными толчками. Какова верная последовательность действий учителя?'],
    [
      ["Silkinish paytida darhol hammani zinapoyadan yugurib tushirish", 'Во время толчков немедленно отправить всех бегом по лестнице'],
      ["Silkinish paytida derazalardan uzoqda parta ostiga yashirinib, boshni himoya qilish; silkinish tugagach, evakuatsiya yo'nalishi bo'yicha tartib bilan ochiq joyga chiqib, o'quvchilarni ro'yxat bo'yicha sanash", 'Во время толчков укрыться под партами вдали от окон, защищая голову; после окончания толчков организованно выйти по маршруту эвакуации на открытое место и пересчитать учеников по списку'],
      ["Liftdan foydalanib, tezroq chiqish", 'Быстрее выйти, воспользовавшись лифтом'],
      ["Silkinish tugagandan keyin ham sinfda qolib, ko'rsatma kutish", 'После окончания толчков оставаться в классе и ждать указаний'],
    ], 'B',
    ["Silkinish paytida zinapoya va yo'laklarda yugurish jarohatlarga olib keladi; xavfsiz joyda boshni himoya qilish kerak. Silkinish tugagach — evakuatsiya rejasi bo'yicha chiqish va hammani sanash. Liftdan foydalanish taqiqlanadi.",
     'Бег по лестницам и коридорам во время толчков ведёт к травмам; нужно укрыться и защитить голову. После толчков — выход по плану эвакуации и пересчёт всех детей. Лифтом пользоваться запрещено.']),

  mc('s3-v2-351', '3.5.1', { ...E, src: ['spec2026', 'tarbiya2021'] },
    ["Sinfda hech kim birga o'tirishni istamaydigan «chetga surilgan» bolalar guruhi paydo bo'ldi. O'qituvchining eng to'g'ri yondashuvi qaysi?", 'В классе появилась группа «отверженных» детей, с которыми никто не хочет сидеть. Какой подход учителя наиболее верен?'],
    [
      ["Boshqalarni sinf oldida uyaltirish", 'Пристыдить остальных перед классом'],
      ["Vaziyatni o'z holiga qo'yish — bolalar o'zlari kelishib oladi", 'Оставить как есть — дети сами договорятся'],
      ["Kuzatish va sotsiometriya bilan munosabatlarni o'rganib, har bir ishtirokchining hissasi zarur bo'lgan rollar taqsimlangan qo'shma topshiriqlar berish va juftliklarni almashtirib turish", 'Изучить отношения наблюдением и социометрией, давать совместные задания с распределёнными ролями, где нужен вклад каждого, и регулярно менять пары'],
      ["Chetga surilgan bolalarni doim o'qituvchi yoniga o'tqazish", 'Всегда сажать отверженных детей рядом с учителем'],
    ], 'C',
    ["Ijobiy psixologik muhit tuzilgan hamkorlik orqali shakllanadi: har bir bola qadrli hissa qo'shganda munosabatlar o'zgaradi. Uyaltirish qarshilik tug'diradi, aralashmaslik izolyatsiyani mustahkamlaydi, alohida o'tqazish «tamg'a»ni kuchaytiradi.",
     'Позитивный климат создаётся через структурированное сотрудничество: отношения меняются, когда вклад каждого ребёнка значим. Стыжение вызывает сопротивление, невмешательство закрепляет изоляцию, отдельная посадка усиливает «ярлык».']),

  mc('s3-v2-352', '3.5.2', { ...E, src: ['spec2026', 'tarbiya2021'] },
    ["O'quvchi tez-tez darsga kelmaydi, ota-onasi bilan bog'lanib bo'lmayapti. O'qituvchi qanday harakat qilgani ma'qul?", 'Ученик часто пропускает уроки, связаться с родителями не удаётся. Как лучше действовать учителю?'],
    [
      ["Barcha mavjud kanallar orqali bog'lanishga urinish, natija bo'lmasa maktab rahbariyati, ijtimoiy pedagog va mahalla fuqarolar yig'ini vakillari bilan oilaga borib, sababni aniqlash va yordam rejasini tuzish", 'Попытаться связаться по всем доступным каналам, а при неудаче вместе с администрацией школы, социальным педагогом и представителями махалли посетить семью, выяснить причину и составить план поддержки'],
      ["O'quvchini jurnalda «kelmadi» deb belgilab qo'yish bilan cheklanish", 'Ограничиться отметками «отсутствовал» в журнале'],
      ["Sinfda boshqa o'quvchilar oldida dars qoldirish haqida gapirish", 'Обсуждать пропуски ученика перед классом'],
      ["Chorak oxirida baholamaslik bilan ogohlantirish", 'Пригрозить не аттестовать в конце четверти'],
    ], 'A',
    ["Davomat muammosi ortida ijtimoiy yoki oilaviy sabab bo'lishi mumkin; maktab, oila va mahalla hamkorligi uni aniqlash va bolani qo'llab-quvvatlash imkonini beradi. Rasmiy qayd, ommaviy muhokama va tahdid sababni hal qilmaydi.",
     'За пропусками могут стоять социальные или семейные причины; сотрудничество школы, семьи и махалли позволяет выяснить их и поддержать ребёнка. Формальная отметка, публичное обсуждение и угрозы причину не устраняют.']),

  mc('s3-v2-353', '3.5.3', { ...E, d: 2, src: ['tarbiya2021'] },
    ["O'qish darsida qaysi usul ma'naviy-axloqiy tarbiyaga eng ko'p hissa qo'shadi?", 'Какой приём на уроке чтения больше всего способствует духовно-нравственному воспитанию?'],
    [
      ["Masal xulosasini yod oldirish", 'Заучить мораль басни наизусть'],
      ["Xulq-atvor qoidalarini daftarga yozdirish", 'Записать правила поведения в тетрадь'],
      ["Xulq-atvor uchun alohida baho qo'yish", 'Ставить отдельную отметку за поведение'],
      ["Qahramonning axloqiy dilemmasini muhokama qilish: «Sen qanday yo'l tutgan bo'larding? Nega?»", 'Обсуждение нравственной дилеммы героя: «Как бы ты поступил? Почему?»'],
    ], 'D',
    ["Axloqiy tarbiya qadriyatlarni anglash va shaxsiy tanlovni asoslashda amalga oshadi: dilemma muhokamasi axloqiy fikrlashni rivojlantiradi. Yodlash va yozish bilim beradi, lekin munosabatni shakllantirmaydi.",
     'Нравственное воспитание происходит через осмысление ценностей и обоснование собственного выбора: обсуждение дилеммы развивает нравственное мышление. Заучивание и записи дают знание, но не формируют отношение.']),

  mc('s3-v2-354', '3.5.4', { ...E, d: 2, src: ['spec2026'] },
    ["O'qituvchi «Yosh tadqiqotchi» to'garagini rejalashtirmoqda. Ishni nimadan boshlash kerak?", 'Учитель планирует кружок «Юный исследователь». С чего следует начать?'],
    [
      ["Boshqa maktab to'garagi rejasini o'zgartirmasdan ko'chirishdan", 'Скопировать без изменений план кружка другой школы'],
      ["O'quvchilarning qiziqishlari va ehtiyojlarini o'rganishdan (so'rovnoma, suhbat), so'ng maqsad va mashg'ulot shaklini belgilashdan", 'Изучить интересы и запросы учеников (анкета, беседа), затем определить цель и формат занятий'],
      ["Faqat a'lochi o'quvchilarni tanlashdan", 'Отобрать только отличников'],
      ["To'garakdagi ish uchun baholar tizimini kiritishdan", 'Ввести систему отметок за работу в кружке'],
    ], 'B',
    ["Sinfdan tashqari ishning asosiy tamoyillari — ixtiyoriylik va qiziqishga tayanish. Ehtiyojlarni o'rganish to'garakni o'quvchilar uchun ma'noli qiladi. Tanlab olish va baholash ixtiyoriylik ruhini buzadi.",
     'Ключевые принципы внеклассной работы — добровольность и опора на интересы. Изучение запросов делает кружок значимым для учеников. Отбор и отметки противоречат добровольности.']),

  mc('s3-v2-361', '3.6.1', { ...E, src: ['kriterial2023'] },
    ["Qaysi usul o'qituvchiga barcha o'quvchilarning tushunishi haqida bir vaqtning o'zida ma'lumot beradi?", 'Какой приём даёт учителю информацию о понимании всех учеников одновременно?'],
    [
      ["Hamma o'quvchi bir vaqtda javob kartochkasini (A/B/C/D) yoki mini-doskani ko'taradi", 'Все ученики одновременно поднимают карточку ответа (A/B/C/D) или мини-доску'],
      ["Bitta o'quvchidan so'rash", 'Спросить одного ученика'],
      ["«Hammaga tushunarlimi?» deb so'rash", 'Спросить: «Всем понятно?»'],
      ["Chorak oxiridagi nazorat ishi", 'Контрольная работа в конце четверти'],
    ], 'A',
    ["«Hamma javob beradi» texnikasi formativ baholashning samarali vositasi: o'qituvchi bir qarashda kim tushunganini ko'radi va darsni moslashtiradi. Bitta o'quvchi javobi sinfni aks ettirmaydi, «tushunarlimi?» ishonchli ma'lumot bermaydi, chorak ishi — summativ.",
     'Техника «отвечают все» — эффективный инструмент формативного оценивания: учитель сразу видит, кто понял, и корректирует урок. Ответ одного не отражает класс, «понятно?» не даёт надёжных данных, четвертная работа — суммативная.']),

  mc('s3-v2-362', '3.6.2', { ...E, src: ['kriterial2023'] },
    ["O'qituvchi qayta hikoya qilish uchun rubrika tuzmoqda. Qaysi darajalar to'plami to'g'ri tavsiflangan?", 'Учитель составляет рубрику для пересказа. Какой набор уровней описан корректно?'],
    [
      ["«A'lo / yaxshi / yomon»", '«Отлично / хорошо / плохо»'],
      ["«Tirishqoq edi / tinch o'tirdi / chalg'idi»", '«Старался / сидел тихо / отвлекался»'],
      ["«Barcha asosiy voqealarni to'g'ri tartibda aytadi / 1–2 voqeani tushirib qoldiradi yoki tartibini buzadi / asosiy voqealarning yarmidan kamini aytadi»", '«Передаёт все главные события в правильном порядке / пропускает 1–2 события или нарушает порядок / передаёт меньше половины главных событий»'],
      ["«Hammadan yaxshi aytdi / o'rtacha / hammadan yomon»", '«Пересказал лучше всех / средне / хуже всех»'],
    ], 'C',
    ["Rubrika darajalari kuzatiladigan sifat belgilarini tavsiflaydi va bir-biridan aniq farq qiladi. Baho so'zlari noaniq, xulq-atvor mezoni natijaga aloqador emas, boshqalar bilan solishtirish kriterial baholashga zid.",
     'Уровни рубрики описывают наблюдаемые признаки качества и чётко отличаются друг от друга. Оценочные слова размыты, поведение не относится к результату, сравнение с другими противоречит критериальному оцениванию.']),

  mc('s3-v2-363', '3.6.3', { ...E, src: ['kriterial2023', 'bikbayeva'] },
    ["Diagnostika ko'rsatdiki, o'quvchi misollarni to'g'ri yechadi, lekin matnli masalalarda noto'g'ri amalni tanlaydi. Korreksion ish qaysi?", 'Диагностика показала: ученик верно решает примеры, но в текстовых задачах выбирает неверное действие. Какая коррекционная работа нужна?'],
    [
      ["Ko'proq misollar yechdirish", 'Давать больше примеров на вычисления'],
      ["Masalalar yechimini yod oldirish", 'Заучивать решения задач'],
      ["Matnli masalalarni vaqtincha o'tkazib yuborish", 'Временно пропускать текстовые задачи'],
      ["Masala tahliliga o'rgatish: qisqa yozuv va chizma, «nima ma'lum, nima topilishi kerak?» savollari, ortiqcha yoki yetishmaydigan ma'lumotli masalalar", 'Учить анализу задачи: краткая запись и схема, вопросы «что известно, что нужно найти?», задачи с лишними или недостающими данными'],
    ], 'D',
    ["Xato hisoblashda emas, masalani tushunish va modellashtirishda. Korreksiya aniqlangan qiyinchilikka qaratiladi: tahlil, sxema, amal mazmunini tushunish. Boshqa variantlar sababni bartaraf etmaydi.",
     'Ошибка не в вычислениях, а в понимании и моделировании задачи. Коррекция направлена на выявленную трудность: анализ, схема, понимание смысла действий. Остальные варианты причину не устраняют.']),

  mc('s3-v2-364', '3.6.4', { ...E, src: ['kriterial2023'] },
    ["O'qituvchi chiroyli yozadigan o'quvchilarning ishlariga beixtiyor yuqoriroq baho qo'yayotganini payqadi. Bu qanday hodisa va uni qanday bartaraf etish mumkin?", 'Учитель заметил, что невольно ставит более высокие отметки ученикам с красивым почерком. Что это за явление и как его устранить?'],
    [
      ["Bu to'g'ri: chiroyli yozuv har doim yaxshi bilimni bildiradi", 'Это правильно: красивый почерк всегда говорит о хороших знаниях'],
      ["«Oreol effekti»; ishni faqat oldindan e'lon qilingan mezonlar bo'yicha, imkon bo'lsa ism yashirilgan holda baholash", '«Эффект ореола»; оценивать работы только по заранее объявленным критериям, по возможности без имени'],
      ["Baholashda o'quvchining avvalgi baholariga tayanish", 'Опираться при оценивании на прежние отметки ученика'],
      ["Yozuvi yomon o'quvchilardan qo'shimcha ball ayirish", 'Снимать дополнительные баллы ученикам с плохим почерком'],
    ], 'B',
    ["Oreol effekti — bitta yorqin belgi (yozuv chiroyi) umumiy bahoga ta'sir qilishi. Oldindan belgilangan mezonlar va anonim baholash obyektivlikni oshiradi. Avvalgi baholarga tayanish ham xuddi shunday kognitiv xato.",
     'Эффект ореола — влияние одного яркого признака (почерка) на общую оценку. Заранее заданные критерии и анонимная проверка повышают объективность. Опора на прежние отметки — такая же когнитивная ошибка.']),
];
