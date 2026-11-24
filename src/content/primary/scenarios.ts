// Teacher Simulator: branching classroom scenarios. Several strategies may be
// reasonable; `fit` reflects the stated goal and constraints, and every option
// explains its conditions. Exam-style single-answer items live in the banks.
import type { Scenario, ScenarioOption } from '../../core/types';
import { tx, type Tx } from './build';

const o = (id: string, fit: 0 | 1 | 2 | 3, text: Tx, consequence: Tx, reasoning: Tx, next?: string): ScenarioOption => ({
  id, fit, text: tx(text), consequence: tx(consequence), reasoning: tx(reasoning), next,
});

export const SCENARIOS: Scenario[] = [
  {
    id: 'sim-mixed-pace', code: '3.4.1', grade: 3, sourceIds: ['spec2026', 'gafforova'],
    title: tx(['Turli sur\'at: kimdir tushundi, kimdir yo\'q', 'Разный темп: одни поняли, другие нет']),
    goal: tx(["O'quvchilar ikki xonali sonni bir xonaliga ko'paytirishni (23 · 4) tushunib bajaradi.", 'Ученики осознанно умножают двузначное число на однозначное (23 · 4).']),
    constraints: tx(["Darsning 20-daqiqasi, 25 o'quvchi, qo'shimcha o'qituvchi yo'q.", '20-я минута урока, 25 учеников, помощника нет.']),
    principle: tx(["Metodik moslashuvchanlik: maqsad o'zgarmaydi, yo'l va yordam darajasi o'zgaradi.", 'Методическая гибкость: цель не меняется, меняются путь и уровень поддержки.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["Tushuntirishdan keyin 15 o'quvchi misollarni to'g'ri yechmoqda, 7 o'quvchi 23 · 4 = 812 deb xato qilmoqda, Sardor esa daftarini yopib, deraza tomon qarab o'tiribdi.", 'После объяснения 15 учеников решают верно, 7 пишут 23 · 4 = 812, а Сардор закрыл тетрадь и смотрит в окно.']),
        dialogue: [
          { who: tx(['Madina', 'Мадина']), line: tx(['Ustoz, men hammasini yechib bo\'ldim!', 'Учитель, я всё решила!']) },
          { who: tx(['Sardor', 'Сардор']), line: tx(['Baribir tushunmayman…', 'Всё равно не понимаю…']) },
        ],
        options: [
          o('a', 3, ["Tayyorlarga murakkabroq topshiriq (teskari masala tuzish) berib, 7 o'quvchi va Sardor bilan kichik guruhda yuza modeli orqali 20 · 4 + 3 · 4 ni qayta ko'rsatish.", 'Готовым дать задание посложнее (составить обратную задачу), а с 7 учениками и Сардором в малой группе ещё раз показать 20 · 4 + 3 · 4 на модели площади.'],
            ["Kichik guruhda xato sababi (xona qiymati) ko'rinadigan bo'ladi; tayyor o'quvchilar band va rivojlanmoqda.", 'В малой группе причина ошибки (разрядное значение) становится видимой; готовые ученики заняты и развиваются.'],
            ["Maqsad saqlangan, yordam darajasi tabaqalashtirilgan; vaqt ham samarali.", 'Цель сохранена, поддержка дифференцирована, время использовано эффективно.'], 's2'),
          o('b', 1, ["Butun sinf uchun mavzuni boshidan qayta tushuntirish.", 'Заново объяснить тему всему классу.'],
            ["15 o'quvchi zerikadi, Madina chalg'iydi; 7 o'quvchiga xuddi shu usul yana yordam bermasligi mumkin.", '15 учеников скучают, Мадина отвлекается; 7 ученикам тот же способ может снова не помочь.'],
            ["Usul o'zgarmagan, tayyor o'quvchilar vaqti yo'qotilgan. Ko'pchilik tushunmagan bo'lsa (masalan, 70%) bu oqlanadi.", 'Способ не изменён, время готовых потеряно. Оправдано, если не понял большинство (например, 70%).'], 's2'),
          o('c', 0, ["Rejani davom ettirib, xato qilganlarga uyga ko'proq misol berish.", 'Продолжить по плану, а ошибающимся задать на дом больше примеров.'],
            ["Noto'g'ri usul uyda mustahkamlanadi; Sardor motivatsiyasini butunlay yo'qotadi.", 'Неверный способ закрепится дома; Сардор окончательно потеряет мотивацию.'],
            ["Diagnostika natijasi e'tiborsiz qoldirildi.", 'Результат диагностики проигнорирован.'], 's2'),
        ],
      },
      s2: {
        situation: tx(["Kichik guruhda ishlaganingizdan so'ng Sardor model bilan 20 · 4 ni to'g'ri topdi, lekin hali ishonchsiz.", 'После работы в малой группе Сардор на модели верно нашёл 20 · 4, но ещё неуверен.']),
        options: [
          o('a', 3, ["Uning harakatini aniq maqtab («Avval o'nliklarni ko'paytirding — to'g'ri strategiya!»), unga yana bitta o'xshash misolni mustaqil yechishni va natijani sherigiga tushuntirishni topshirish.", 'Конкретно похвалить его действие («Сначала умножил десятки — верная стратегия!») и предложить решить ещё один похожий пример и объяснить соседу.'],
            ["Sardor muvaffaqiyatni o'z harakati bilan bog'laydi va tushuntirish orqali bilimni mustahkamlaydi.", 'Сардор связывает успех со своими действиями и закрепляет знание, объясняя другому.'],
            ["O'sish mentaliteti va «o'rgatish orqali o'rganish».", 'Мышление роста и «обучение через объяснение».']),
          o('b', 1, ["«Mana, ko'rdingmi, aqlli bolasan!» deb, keyingi mavzuga o'tish.", 'Сказать «Вот видишь, ты умный!» и перейти к следующей теме.'],
            ["Ijobiy his paydo bo'ladi, ammo strategiya mustahkamlanmaydi.", 'Появляется позитивное чувство, но стратегия не закрепляется.'],
            ["Qobiliyatni maqtash — qat'iy mentalitetga xos; mustaqil mashq yo'q.", 'Похвала способностей — признак фиксированного мышления; нет самостоятельной практики.']),
        ],
        summary: tx(["Xulosa: diagnostika → tabaqalashtirilgan yordam → mustaqil qo'llash → aniq qayta aloqa.", 'Итог: диагностика → дифференцированная помощь → самостоятельное применение → конкретная обратная связь.']),
      },
    },
  },
  {
    id: 'sim-repeat-error', code: '3.6.3', grade: 2, sourceIds: ['pardayeva'],
    title: tx(["Bir xil xato takrorlanmoqda", 'Повторяющаяся ошибка']),
    goal: tx(["O'quvchi o'nlikdan o'tib ayirishni to'g'ri bajaradi.", 'Ученик верно вычитает с переходом через десяток.']),
    constraints: tx(["Uch hafta davomida xato takrorlanmoqda; ota-ona uyda ham mashq qildirmoqda.", 'Ошибка повторяется три недели; родители занимаются и дома.']),
    principle: tx(["Korreksion o'qitish xato sababini topishdan boshlanadi.", 'Коррекционное обучение начинается с выявления причины ошибки.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["Aziz 52 − 17 = 45 deb yozdi. Daftarida 63 − 28 = 45, 41 − 15 = 34 ham bor.", 'Азиз записал 52 − 17 = 45. В тетради также 63 − 28 = 45, 41 − 15 = 34.']),
        options: [
          o('a', 3, ["Xatolarni tahlil qilib, qonuniyatni topish: u har doim kattadan kichikni ayiradi (7 − 2 = 5). So'ng o'nlik bloklari bilan «o'nlikni maydalash»ni ko'rsatish.", 'Проанализировать ошибки и найти закономерность: он всегда вычитает меньшее из большего (7 − 2 = 5). Затем показать «размен десятка» на блоках.'],
            ["Sabab aniqlandi va ko'rgazmali bartaraf etildi.", 'Причина найдена и устранена наглядно.'],
            ["Xato tizimli — bu tushuncha bo'shlig'i, diqqatsizlik emas.", 'Ошибка системная — это пробел в понимании, а не невнимательность.'], 's2'),
          o('b', 1, ["Ko'proq misol yechtirish.", 'Дать больше примеров.'],
            ["Noto'g'ri algoritm yanada mustahkamlanadi.", 'Неверный алгоритм закрепляется сильнее.'],
            ["Miqdor sifatni almashtirmaydi.", 'Количество не заменяет понимания.'], 's2'),
          o('c', 0, ["Ota-onaga uyda ko'proq shug'ullanishni aytish.", 'Попросить родителей заниматься больше.'],
            ["Mas'uliyat o'tkaziladi, sabab hal bo'lmaydi.", 'Ответственность перекладывается, причина не устранена.'],
            ["Diagnostika qilinmagan.", 'Диагностики не было.'], 's2'),
        ],
      },
      s2: {
        situation: tx(["Bir hafta o'tdi, Aziz bloklar bilan to'g'ri ishlaydi. Keyingi qadam?", 'Прошла неделя, Азиз верно работает с блоками. Следующий шаг?']),
        options: [
          o('a', 3, ["Modeldan chizmaga, so'ng yozuvga o'tish va 3–7 kundan keyin qayta tekshirish.", 'Перейти от модели к рисунку, затем к записи и перепроверить через 3–7 дней.'],
            ["Bilim barqarorlashadi; qayta tekshiruv uni tasdiqlaydi.", 'Знание становится устойчивым; повторная проверка это подтверждает.'],
            ["Bir marta to'g'ri javob — hali o'zlashtirish emas.", 'Один верный ответ — ещё не усвоение.']),
          o('b', 1, ["Muammo hal bo'ldi deb, mavzuni yopish.", 'Считать проблему решённой и закрыть тему.'],
            ["Xato yana qaytishi mumkin.", 'Ошибка может вернуться.'],
            ["Intervalli takrorlash yo'q.", 'Нет интервального повторения.']),
        ],
        summary: tx(["Xulosa: xato turini tahlil qilish → sababni ko'rgazmali bartaraf etish → model → chizma → yozuv → kechiktirilgan qayta tekshiruv.", 'Итог: анализ типа ошибки → наглядное устранение причины → модель → рисунок → запись → отсроченная проверка.']),
      },
    },
  },
  {
    id: 'sim-conflict', code: '3.4.5', grade: 4, sourceIds: ['karimova', 'spec2026'],
    title: tx(["O'quvchilar o'rtasidagi nizo", 'Конфликт между учениками']),
    goal: tx(["Nizoni xavfsiz to'xtatish va munosabatlarni tiklash.", 'Безопасно остановить конфликт и восстановить отношения.']),
    constraints: tx(["Dars boshlanishiga 2 daqiqa qoldi.", 'До начала урока 2 минуты.']),
    principle: tx(["Deeskalatsiya → xavfsizlik → mediatsiya → profilaktika.", 'Деэскалация → безопасность → медиация → профилактика.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["Ikki o'quvchi baland ovozda bahslashib, biri ikkinchisini itarib yubordi. Sinf ularni o'rab oldi.", 'Двое учеников громко спорят, один толкнул другого. Класс их окружил.']),
        dialogue: [{ who: tx(['Jasur', 'Жасур']), line: tx(['U mening ruchkamni sindirdi!', 'Он сломал мою ручку!']) }],
        options: [
          o('a', 3, ["Xotirjam, qat'iy ovozda to'xtatish, ularni bir-biridan ajratish, sinfni o'rnida o'tirishga yo'naltirish va tanaffusda ikkalasi bilan gaplashishni aytish.", 'Спокойно и твёрдо остановить, развести учеников, направить класс по местам и сказать, что поговорите с обоими на перемене.'],
            ["Vaziyat sokinlashdi, tomoshabinlar tarqaldi.", 'Ситуация успокоилась, зрители разошлись.'],
            ["Avval xavfsizlik va deeskalatsiya; tahlil keyin.", 'Сначала безопасность и деэскалация, разбор потом.'], 's2'),
          o('b', 0, ["Darhol sinf oldida kim aybdor ekanini aniqlashga kirishish.", 'Сразу при всём классе выяснять, кто виноват.'],
            ["Hissiyotlar kuchayadi, ikkalasi ham o'zini himoya qiladi.", 'Эмоции усиливаются, оба защищаются.'],
            ["Tomoshabinlar oldida tahlil eskalatsiyaga olib keladi.", 'Разбор при зрителях ведёт к эскалации.'], 's2'),
          o('c', 1, ["Ikkalasini direktor huzuriga yuborish.", 'Отправить обоих к директору.'],
            ["Nizo vaqtincha to'xtaydi, ammo o'qituvchi munosabatni tiklash imkoniyatini yo'qotadi.", 'Конфликт временно прекращён, но учитель теряет возможность восстановить отношения.'],
            ["Takroriy yoki xavfli holatda ma'muriyatni jalb qilish to'g'ri; birinchi qadam sifatida — ortiqcha.", 'При повторном или опасном случае подключение администрации верно; как первый шаг — избыточно.'], 's2'),
        ],
      },
      s2: {
        situation: tx(["Tanaffusda ikkala o'quvchi bilan uchrashdingiz.", 'На перемене вы встретились с обоими учениками.']),
        options: [
          o('a', 3, ["Har biriga navbat bilan, bo'lmasdan gapirish imkonini berib, his-tuyg'ularini nomlashga yordam berish va yechimni ularning o'zi taklif qilishini so'rash (ruchkani almashtirish, kechirim).", 'Дать каждому по очереди высказаться без перебивания, помочь назвать чувства и попросить самих предложить решение (замена ручки, извинение).'],
            ["Kelishuvga erishildi, o'quvchilar nizoni hal qilish tajribasini oldi.", 'Достигнута договорённость, ученики получили опыт разрешения конфликта.'],
            ["Mediatsiya: o'qituvchi neytral vositachi.", 'Медиация: учитель — нейтральный посредник.']),
          o('b', 1, ["O'zingiz qaror chiqarib, ikkalasini kechirim so'rashga majburlash.", 'Самому вынести решение и заставить обоих извиниться.'],
            ["Tashqi kelishuv bor, ichki muammo qolishi mumkin.", 'Внешнее примирение есть, внутренняя проблема может остаться.'],
            ["Majburiy kechirim — mediatsiya emas.", 'Принудительное извинение — не медиация.']),
        ],
        summary: tx(["Xulosa: avval to'xtatish va xavfsizlik, so'ng alohida va xotirjam muhitda mediatsiya. Takrorlansa — ota-ona va psixologni jalb qilish.", 'Итог: сначала остановить и обеспечить безопасность, затем медиация в спокойной обстановке. При повторении — подключить родителей и психолога.']),
      },
    },
  },
  {
    id: 'sim-attention', code: '3.4.4', grade: 1, sourceIds: ['goziyev'],
    title: tx(["Sinf diqqati pasaydi", 'Класс потерял внимание']),
    goal: tx(["Darsning qolgan 15 daqiqasida yangi harfni mustahkamlash.", 'За оставшиеся 15 минут закрепить новую букву.']),
    constraints: tx(["Kunning 4-darsi, issiq kun.", '4-й урок, жаркий день.']),
    principle: tx(["Faoliyat turini almashtirish va harakat diqqatni tiklaydi.", 'Смена деятельности и движение восстанавливают внимание.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["O'quvchilar partada yotib olgan, ba'zilari gaplashmoqda, yozish mashqi to'xtab qoldi.", 'Ученики легли на парты, некоторые разговаривают, письменное упражнение остановилось.']),
        options: [
          o('a', 3, ["1–2 daqiqalik harakatli o'yin («Harfni havoda chiz»), so'ng harfni plastilindan yasash yoki juftlikda topishmoq.", '1–2-минутная подвижная игра («Нарисуй букву в воздухе»), затем лепка буквы из пластилина или загадки в парах.'],
            ["Diqqat tiklandi, maqsad saqlandi.", 'Внимание восстановлено, цель сохранена.'],
            ["Yosh xususiyati (ixtiyorsiz diqqat) hisobga olindi.", 'Учтена возрастная особенность (непроизвольное внимание).']),
          o('b', 0, ["«Kim gaplashsa, past baho oladi» deb ogohlantirish.", 'Предупредить: «Кто будет разговаривать, получит плохую оценку».'],
            ["Bir necha daqiqa jimlik, so'ng yana chalg'ish; xavotir kuchayadi.", 'Несколько минут тишины, затем снова отвлечение; растёт тревожность.'],
            ["Charchoq sabab — bosim uni yo'qotmaydi.", 'Причина — утомление, давление её не устраняет.']),
          o('c', 1, ["Darsni erta tugatib, o'yinga ruxsat berish.", 'Закончить урок раньше и разрешить играть.'],
            ["Bolalar xursand, ammo maqsadga erishilmadi.", 'Дети рады, но цель не достигнута.'],
            ["Maqsadsiz o'yin — o'quv faoliyati emas.", 'Игра без цели — не учебная деятельность.']),
        ],
        summary: tx(["Xulosa: diqqat pasayganda maqsadni saqlab, faoliyat shaklini o'zgartiring.", 'Итог: при падении внимания сохраняйте цель и меняйте форму деятельности.']),
      },
    },
  },
  {
    id: 'sim-reading', code: '1.3.8', grade: 2, sourceIds: ['qosimova2022', 'inklyuziv2022'],
    title: tx(["O'qishda qiynalayotgan o'quvchi", 'Ученик с трудностями чтения']),
    goal: tx(["O'quvchining o'qish malakasini qo'llab-quvvatlash.", 'Поддержать развитие навыка чтения ученика.']),
    constraints: tx(["2-sinf, o'quvchi harflarni adashtiradi (b–d), sekin o'qiydi, sinfdoshlari kuladi.", '2 класс, ученик путает буквы (б–д), читает медленно, одноклассники смеются.']),
    principle: tx(["O'qituvchi tashxis qo'ymaydi: kuzatadi, qo'llab-quvvatlaydi va mutaxassisga yo'naltiradi.", 'Учитель не ставит диагноз: наблюдает, поддерживает и направляет к специалисту.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["Ovoz chiqarib o'qish paytida o'quvchi to'xtab qoldi, ko'zlari yoshlandi.", 'Во время чтения вслух ученик остановился, на глазах слёзы.']),
        options: [
          o('a', 3, ["Uni bosimsiz to'xtatib, keyin alohida oldindan tayyorlangan qisqa matnni o'qishni taklif qilish; sinfda masxarani to'xtatish; ko'p sensorli mashqlar (harfni qumda chizish) qo'llash; kuzatuvni yozib, ota-ona bilan logopedga murojaat haqida gaplashish.", 'Мягко остановить, позже предложить прочитать заранее подготовленный короткий текст; пресечь насмешки; применять мультисенсорные упражнения (буква на песке); фиксировать наблюдения и обсудить с родителями консультацию логопеда.'],
            ["Bola xavfsiz his qiladi, qo'llab-quvvatlash rejasi boshlandi.", 'Ребёнок чувствует себя в безопасности, начат план поддержки.'],
            ["Psixologik xavfsizlik + metodik yordam + mutaxassis bilan hamkorlik.", 'Психологическая безопасность + методическая помощь + сотрудничество со специалистом.']),
          o('b', 1, ["Uni ovoz chiqarib o'qishdan butunlay ozod qilish.", 'Полностью освободить его от чтения вслух.'],
            ["Stress kamaydi, lekin ko'nikma rivojlanmaydi.", 'Стресс снизился, но навык не развивается.'],
            ["Vaqtincha moslashuv mumkin, doimiy ozod qilish — yo'q.", 'Временная адаптация допустима, постоянное освобождение — нет.']),
          o('c', 0, ["Ota-onaga «farzandingizda disleksiya bor» deb aytish.", 'Сказать родителям: «У вашего ребёнка дислексия».'],
            ["Ota-ona xavotirga tushadi; tashxis asossiz.", 'Родители встревожены; диагноз необоснован.'],
            ["Tashxis qo'yish — mutaxassis vakolati.", 'Постановка диагноза — компетенция специалиста.']),
        ],
        summary: tx(["Xulosa: bolani himoya qiling, ko'p sensorli usullarni qo'llang, kuzatuvni hujjatlashtiring va mutaxassis bilan hamkorlik qiling.", 'Итог: защитите ребёнка, применяйте мультисенсорные приёмы, документируйте наблюдения и сотрудничайте со специалистом.']),
      },
    },
  },
  {
    id: 'sim-parent', code: '3.5.2', grade: 3, sourceIds: ['tarbiya2021'],
    title: tx(["Norozi ota-ona", 'Недовольный родитель']),
    goal: tx(["Muloqotni hamkorlikka aylantirish.", 'Превратить разговор в сотрудничество.']),
    constraints: tx(["Ota-ona ish vaqtida, asabiy holda keldi; 10 daqiqangiz bor.", 'Родитель пришёл в рабочее время, взволнован; у вас 10 минут.']),
    principle: tx(["Faol tinglash → dalillar → umumiy maqsad → aniq keyingi qadam.", 'Активное слушание → доказательства → общая цель → конкретный следующий шаг.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["«Farzandimga nohaq past baho qo'ydingiz! Boshqalarga yaxshi baho qo'yasiz!»", '«Вы несправедливо поставили моему ребёнку низкую оценку! А другим ставите хорошие!»']),
        options: [
          o('a', 3, ["«Xavotiringizni tushunaman. Keling, birga ishini va baholash mezonlarini ko'raylik» — so'ng ish va rubrikani ko'rsatish.", '«Понимаю ваше беспокойство. Давайте вместе посмотрим работу и критерии оценивания» — затем показать работу и рубрику.'],
            ["Ota-ona tinchlanib, dalillarga e'tibor qaratadi.", 'Родитель успокаивается и переключается на факты.'],
            ["Hissiyotni tan olish + shaffof dalil.", 'Признание эмоции + прозрачные доказательства.'], 's2'),
          o('b', 0, ["«Men o'qituvchiman, qanday baholashni men bilaman».", '«Я учитель, мне виднее, как оценивать».'],
            ["Nizo kuchayadi, ota-ona direktorga shikoyat qiladi.", 'Конфликт усиливается, родитель жалуется директору.'],
            ["Muloqot yopildi.", 'Диалог закрыт.'], 's2'),
          o('c', 0, ["Bahoni o'zgartirishga va'da berish.", 'Пообещать исправить оценку.'],
            ["Bir martalik tinchlik, ammo baholash obyektivligi buzildi.", 'Разовое успокоение, но объективность оценивания нарушена.'],
            ["Bahoni bosim ostida o'zgartirish mumkin emas.", 'Оценку нельзя менять под давлением.'], 's2'),
        ],
      },
      s2: {
        situation: tx(["Ota-ona ishni ko'rib, «Xo'sh, endi nima qilamiz?» dedi.", 'Посмотрев работу, родитель спрашивает: «И что теперь делать?»']),
        options: [
          o('a', 3, ["Bolaning kuchli tomonini aytib, ikki haftalik aniq birgalikdagi reja (uyda 10 daqiqa o'qish, darsda qo'shimcha yordam) tuzish va keyingi uchrashuvni belgilash.", 'Назвать сильные стороны ребёнка, составить конкретный совместный план на две недели (10 минут чтения дома, помощь на уроке) и назначить следующую встречу.'],
            ["Ota-ona hamkorga aylandi.", 'Родитель стал партнёром.'],
            ["Umumiy maqsad va o'lchanadigan qadamlar.", 'Общая цель и измеримые шаги.']),
          o('b', 1, ["«Ko'proq shug'ullaning» deb suhbatni yakunlash.", 'Завершить словами «Занимайтесь больше».'],
            ["Noaniq tavsiya — natija bo'lmaydi.", 'Размытая рекомендация — результата не будет.'],
            ["Aniq reja yo'q.", 'Нет конкретного плана.']),
        ],
        summary: tx(["Xulosa: his-tuyg'uni tan oling, dalil ko'rsating, birgalikdagi aniq reja tuzing va keyingi uchrashuvni belgilang.", 'Итог: признайте эмоцию, покажите доказательства, составьте совместный конкретный план и назначьте встречу.']),
      },
    },
  },
  {
    id: 'sim-group', code: '3.4.3', grade: 4, sourceIds: ['azizxojayeva'],
    title: tx(["Guruh ishi ishlamayapti", 'Групповая работа не работает']),
    goal: tx(["Har bir o'quvchi guruh topshirig'iga hissa qo'shadi.", 'Каждый ученик вносит вклад в групповое задание.']),
    constraints: tx(["5 ta guruh, 20 daqiqa; ikki guruhda bitta o'quvchi hammasini qilmoqda.", '5 групп, 20 минут; в двух группах всё делает один ученик.']),
    principle: tx(["Ijobiy o'zaro bog'liqlik va shaxsiy mas'uliyat guruh ishining shartlari.", 'Позитивная взаимозависимость и личная ответственность — условия групповой работы.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["Bir guruhda Laylo yozmoqda, qolganlar telefon haqida gaplashmoqda.", 'В одной группе пишет только Лайло, остальные болтают о телефоне.']),
        options: [
          o('a', 3, ["Rollarni taqsimlash (yozuvchi, vaqt nazoratchisi, ma'ruzachi, tekshiruvchi) va har kim alohida qismni bajarib, natijada har kim taqdimot qilishi mumkinligini e'lon qilish.", 'Распределить роли (секретарь, хронометрист, докладчик, проверяющий), дать каждому отдельную часть и объявить, что представлять результат может любой.'],
            ["Hamma ishga kirishdi.", 'Все включились в работу.'],
            ["Shaxsiy mas'uliyat va o'zaro bog'liqlik yaratildi.", 'Созданы личная ответственность и взаимозависимость.']),
          o('b', 1, ["Guruhni tarqatib, yakka ishga o'tish.", 'Распустить группы и перейти к индивидуальной работе.'],
            ["Ish davom etadi, lekin hamkorlik ko'nikmasi rivojlanmaydi.", 'Работа продолжается, но навык сотрудничества не развивается.'],
            ["Metoddan voz kechish — oxirgi chora.", 'Отказ от метода — крайняя мера.']),
          o('c', 0, ["Laylo yaxshi ishlayapti, boshqalarga aralashmaslik.", 'Лайло хорошо работает — не вмешиваться.'],
            ["Faqat bitta o'quvchi o'rganadi.", 'Учится только один ученик.'],
            ["Guruh ishining maqsadi buzildi.", 'Цель групповой работы нарушена.']),
        ],
        summary: tx(["Xulosa: rollar, alohida hissa va tasodifiy ma'ruzachi — teng ishtirok kafolati.", 'Итог: роли, индивидуальный вклад и случайный докладчик — гарантия равного участия.']),
      },
    },
  },
  {
    id: 'sim-assessment', code: '3.6.1', grade: 4, sourceIds: ['kriterial2023'],
    title: tx(["Baholash vositasini tanlash", 'Выбор инструмента оценивания']),
    goal: tx(["Darsdan keyin kim maqsadga erishganini bilish va ertangi darsni moslashtirish.", 'Узнать после урока, кто достиг цели, и скорректировать завтрашний урок.']),
    constraints: tx(["Darsning oxirgi 4 daqiqasi.", 'Последние 4 минуты урока.']),
    principle: tx(["Formativ baholash ma'lumoti o'qitish qarorlariga xizmat qiladi.", 'Данные формативного оценивания служат решениям об обучении.']),
    start: 's1',
    steps: {
      s1: {
        situation: tx(["Siz «Kasrlarni solishtirish» mavzusini o'tdingiz.", 'Вы провели тему «Сравнение дробей».']),
        options: [
          o('a', 3, ["Ikki savolli chiqish kartochkasi (1/3 va 1/5 ni solishtiring va sababini rasm bilan ko'rsating), natijani uch guruhga ajratib, ertangi darsni rejalash.", 'Карточка выхода из двух вопросов (сравните 1/3 и 1/5 и покажите причину рисунком), разложить результаты на три группы и спланировать завтрашний урок.'],
            ["Ertangi dars uchun aniq ma'lumot olindi.", 'Получены конкретные данные для завтрашнего урока.'],
            ["Qisqa, maqsadga mos va harakatga olib keladigan vosita.", 'Короткий, соответствующий цели инструмент, ведущий к действию.']),
          o('b', 1, ["«Hamma tushundimi?» deb so'rash.", 'Спросить: «Всем понятно?»'],
            ["Hamma «ha» deydi — ma'lumot ishonchsiz.", 'Все говорят «да» — данные ненадёжны.'],
            ["O'z-o'zini baholash mezonsiz — ishonchsiz.", 'Самооценка без критериев ненадёжна.']),
          o('c', 0, ["20 savolli test.", 'Тест из 20 вопросов.'],
            ["4 daqiqaga sig'maydi.", 'Не помещается в 4 минуты.'],
            ["Vosita vaqt cheklovi va maqsadga mos emas.", 'Инструмент не соответствует времени и цели.']),
        ],
        summary: tx(["Xulosa: vosita maqsadga, vaqtga va keyingi qarorga mos bo'lishi kerak.", 'Итог: инструмент должен соответствовать цели, времени и следующему решению.']),
      },
    },
  },
];
