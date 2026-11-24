// Section 2 — Mathematics and its teaching methodology, mock variant 2.
// Original items; computational slots (2.2.6, 2.2.7, 2.2.8–10, 2.3.4, 2.3.8)
// come from generators.ts. Every numeric answer is re-checked in content.test.ts.
import { mc } from './build';
import type { Question } from '../../core/types';

const E = { lang: 'both' as const, pool: 'exam' as const };

export const BANK_S2_V2: Question[] = [
  mc('s2-v2-211', '2.1.1', { ...E, d: 2, src: ['bikbayeva', 'jumayev2020'] },
    ["Bola 7 ta kubikni to'g'ri sanadi, lekin «Hammasi nechta?» deb so'ralganda yana boshidan sanay boshladi. Sanoqning qaysi tamoyili hali shakllanmagan?", 'Ребёнок правильно сосчитал 7 кубиков, но на вопрос «Сколько всего?» снова начинает считать сначала. Какой принцип счёта ещё не сформирован?'],
    [
      ["Sonlar nomlarining barqaror tartibi", 'Устойчивый порядок числительных'],
      ["Birga-bir moslik", 'Взаимно однозначное соответствие'],
      ["Miqdorning saqlanishi (buyumlar joyi o'zgarganda)", 'Сохранение количества (при перестановке предметов)'],
      ["Kardinallik: oxirgi aytilgan son to'plamdagi buyumlar sonini bildiradi", 'Кардинальность: последнее названное число обозначает количество предметов'],
    ], 'D',
    ["Bola sanash jarayonini egallagan, lekin oxirgi son butun to'plam miqdorini bildirishini tushunmaydi — bu kardinallik tamoyili. Ish usuli: sanab bo'lgach, buyumlarni bir harakat bilan aylantirib «Hammasi — yetti» deb umumlashtirish.",
     'Ребёнок владеет процессом пересчёта, но не понимает, что последнее число обозначает количество всего множества, — это принцип кардинальности. Приём: после счёта обвести все предметы одним жестом и обобщить: «Всего — семь».']),

  mc('s2-v2-212', '2.1.2', { ...E, src: ['bikbayeva'] },
    ["O'quvchi «to'rt yuz yetti ming o'ttiz besh» sonini 40 735 deb yozdi. To'g'ri yozuv qaysi va xato nimada?", 'Ученик записал число «четыреста семь тысяч тридцать пять» как 40 735. Какая запись верна и в чём ошибка?'],
    [
      ["407 035 — yuzlar xonasidagi nol tushirib qoldirilgan", '407 035 — пропущен нуль в разряде сотен'],
      ["470 035 — minglar xonasi noto'g'ri", '470 035 — неверен разряд тысяч'],
      ["407 350 — o'nlar va birlar almashgan", '407 350 — переставлены десятки и единицы'],
      ["4 070 035 — sinf ortiqcha", '4 070 035 — лишний класс'],
    ], 'A',
    ["Minglar sinfi: 407; birlar sinfi: 035 (yuzlar 0, o'nlar 3, birlar 5) → 407 035. O'quvchi birlar sinfini uch raqam bilan to'ldirmay, nolni tushirib qoldirgan. Har bir sinf uch xonadan iborat ekanini jadvalda ko'rsatish kerak.",
     'Класс тысяч: 407; класс единиц: 035 (сотни 0, десятки 3, единицы 5) → 407 035. Ученик не дополнил класс единиц до трёх цифр и пропустил нуль. Нужно показать в таблице, что каждый класс состоит из трёх разрядов.']),

  mc('s2-v2-213', '2.1.3', { ...E, d: 2, src: ['tojiyev2012'] },
    ['Rim raqamlarida yozilgan MCMXCIV soni qaysi?', 'Какое число записано римскими цифрами MCMXCIV?'],
    ['1494', '2196', '1994', '1996'], 'C',
    ["M = 1000, CM = 1000 − 100 = 900, XC = 100 − 10 = 90, IV = 5 − 1 = 4; jami 1994. Rim sistemasi nopozitsion: belgi qiymati o'rniga bog'liq emas, kichik belgi kattasidan oldin kelsa ayiriladi.",
     'M = 1000, CM = 1000 − 100 = 900, XC = 100 − 10 = 90, IV = 5 − 1 = 4; всего 1994. Римская система непозиционная: значение знака не зависит от места, меньший знак перед большим вычитается.']),

  mc('s2-v2-214', '2.1.4', { ...E, src: ['bikbayeva', 'jumayev2005'] },
    ["2-sinf o'quvchisi 52 − 17 ni shunday hisobladi: 52 − 10 = 42, 42 − 7 = 35. U qaysi usuldan foydalandi?", 'Второклассник вычислил 52 − 17 так: 52 − 10 = 42, 42 − 7 = 35. Каким приёмом он воспользовался?'],
    [
      ["Yaxlitlash va tuzatish", 'Округление и поправка'],
      ["Ayriluvchini xona qo'shiluvchilariga ajratib, sonni qismlab ayirish", 'Вычитание числа по частям с разложением вычитаемого на разрядные слагаемые'],
      ["Qo'shiluvchilar o'rnini almashtirish", 'Перестановка слагаемых'],
      ["Kamayuvchini yaxlit songacha to'ldirish", 'Дополнение уменьшаемого до круглого числа'],
    ], 'B',
    ["17 = 10 + 7, shuning uchun 52 − 17 = (52 − 10) − 7 = 35. Bu sondan yig'indini ayirish xossasiga asoslangan usul. Yaxlitlash bo'lsa: 52 − 20 + 3 = 35 ko'rinishida bo'lardi.",
     '17 = 10 + 7, поэтому 52 − 17 = (52 − 10) − 7 = 35. Приём основан на свойстве вычитания суммы из числа. При округлении было бы: 52 − 20 + 3 = 35.']),

  mc('s2-v2-215', '2.1.5', { ...E, src: ['bikbayeva'] },
    ["O'quvchi 7 · 8 va 6 · 8 ni chalkashtiradi. Ko'paytirish jadvalining qiyin holatlarini ongli eslab qolishga qaysi usul eng ko'p yordam beradi?", 'Ученик путает 7 · 8 и 6 · 8. Какой приём больше всего помогает осознанно запомнить трудные случаи таблицы умножения?'],
    [
      ["Jadvalni har kuni boshidan oxirigacha yodlash", 'Ежедневно заучивать таблицу от начала до конца'],
      ["Faqat kalkulyatordan foydalanish", 'Пользоваться только калькулятором'],
      ["Ma'lum faktlarga tayanish: 7 · 8 = 5 · 8 + 2 · 8 = 40 + 16 = 56 yoki 7 · 8 = 7 · 4 · 2 = 28 · 2", 'Опираться на известные факты: 7 · 8 = 5 · 8 + 2 · 8 = 40 + 16 = 56 или 7 · 8 = 7 · 4 · 2 = 28 · 2'],
      ["Faqat qo'shiq orqali takrorlash", 'Повторять только с помощью песенки'],
    ], 'C',
    ["Taqsimot xossasi va ikkilantirish yordamida qiyin holat oson faktlardan «tiklanadi»: o'quvchi unutganda ham natijani mustaqil topadi. Mexanik takrorlash tushunishni bermaydi, kalkulyator ko'nikma hosil qilmaydi.",
     'С помощью распределительного свойства и удвоения трудный случай «восстанавливается» из лёгких фактов: даже забыв, ученик сам найдёт результат. Механическое повторение не даёт понимания, калькулятор не формирует навык.']),

  mc('s2-v2-216', '2.1.6', { ...E, src: ['bikbayeva'] },
    ["96 : 4 ni og'zaki hisoblash uchun bo'linuvchini qaysi qo'shiluvchilarga ajratish eng qulay?", 'На какие слагаемые удобнее всего разложить делимое, чтобы устно вычислить 96 : 4?'],
    ['90 + 6', '80 + 16', '50 + 46', '70 + 26'], 'B',
    ["Har ikki qo'shiluvchi 4 ga bo'linishi kerak: (80 + 16) : 4 = 20 + 4 = 24. Qolgan ajratishlarda qo'shiluvchilar 4 ga butun bo'linmaydi (90, 6, 50, 46, 70, 26).",
     'Оба слагаемых должны делиться на 4: (80 + 16) : 4 = 20 + 4 = 24. В остальных разложениях слагаемые на 4 нацело не делятся (90, 6, 50, 46, 70, 26).']),

  mc('s2-v2-217', '2.1.7', { ...E, d: 2, src: ['bikbayeva'] },
    ["38 + 47 + 62 + 53 ni qaysi guruhlash bilan hisoblash eng qulay?", 'Какая группировка удобнее всего для вычисления 38 + 47 + 62 + 53?'],
    ['(38 + 47) + (62 + 53)', '38 + (47 + 62) + 53', '((38 + 47) + 62) + 53', '(38 + 62) + (47 + 53)'], 'D',
    ["O'rin almashtirish va guruhlash xossalari bilan yaxlit sonlar hosil qilinadi: (38 + 62) + (47 + 53) = 100 + 100 = 200. Boshqa guruhlashlar ham 200 beradi, lekin oraliq hisoblar murakkabroq.",
     'Переместительное и сочетательное свойства позволяют получить круглые числа: (38 + 62) + (47 + 53) = 100 + 100 = 200. Другие группировки тоже дают 200, но промежуточные вычисления сложнее.']),

  mc('s2-v2-218', '2.1.8', { ...E, src: ['bikbayeva'] },
    ["Sonni 6 ga bo'lganda to'liqsiz bo'linma 14, qoldiq 5 chiqdi. Bo'linuvchini toping.", 'При делении числа на 6 получили неполное частное 14 и остаток 5. Найдите делимое.'],
    ['84', '95', '79', '89'], 'D',
    ["Bo'linuvchi = bo'luvchi · to'liqsiz bo'linma + qoldiq = 6 · 14 + 5 = 89. Tekshirish: 89 : 6 = 14 (qoldiq 5), qoldiq bo'luvchidan kichik.",
     'Делимое = делитель · неполное частное + остаток = 6 · 14 + 5 = 89. Проверка: 89 : 6 = 14 (ост. 5), остаток меньше делителя.']),

  mc('s2-v2-219', '2.1.9', { ...E, src: ['bikbayeva', 'math14'] },
    ["Sinfda 24 o'quvchi bor, ularning 3/8 qismi qizlar. Sinfda nechta o'g'il bola bor?", 'В классе 24 ученика, 3/8 из них — девочки. Сколько в классе мальчиков?'],
    ['9', '15', '16', '21'], 'B',
    ["Qizlar: 24 : 8 · 3 = 9; o'g'il bolalar: 24 − 9 = 15 (yoki 5/8 · 24 = 15). 9 — qizlar soni (savolga javob emas), 21 = 24 − 3 — kasrni son deb olish xatosi.",
     'Девочек: 24 : 8 · 3 = 9; мальчиков: 24 − 9 = 15 (или 5/8 · 24 = 15). 9 — число девочек (не ответ на вопрос), 21 = 24 − 3 — ошибка, когда дробь принимают за число.']),

  mc('s2-v2-2110', '2.1.10', { ...E, src: ['math14'] },
    ["Doiraviy diagrammada o'quvchilarning yarmi futbolni, chorak qismi shaxmatni tanlagan, qolgan 6 o'quvchi suzishni tanlagan. Jami nechta o'quvchi so'ralgan?", 'По круговой диаграмме половина учеников выбрала футбол, четверть — шахматы, остальные 6 учеников — плавание. Сколько всего учеников опрошено?'],
    ['12', '18', '24', '30'], 'C',
    ["Qolgan qism: 1 − 1/2 − 1/4 = 1/4. Demak 1/4 qism 6 o'quvchi, butun — 6 · 4 = 24. Tekshirish: 12 + 6 + 6 = 24.",
     'Оставшаяся часть: 1 − 1/2 − 1/4 = 1/4. Значит, 1/4 — это 6 учеников, всего 6 · 4 = 24. Проверка: 12 + 6 + 6 = 24.']),

  mc('s2-v2-2111', '2.1.11', { ...E, src: ['bikbayeva', 'jumayev2020'] },
    ["Qaysi masalada savolga javob berish uchun ma'lumot yetarli emas?", 'В какой задаче недостаточно данных, чтобы ответить на вопрос?'],
    [
      ["«Avtobusda yo'lovchilar ketayotgan edi. Bekatda 5 kishi tushdi. Avtobusda nechta yo'lovchi qoldi?»", '«В автобусе ехали пассажиры. На остановке вышли 5 человек. Сколько пассажиров осталось?»'],
      ["«Sinfda 12 o'g'il va 14 qiz bor. Sinfda jami nechta bola bor?»", '«В классе 12 мальчиков и 14 девочек. Сколько всего детей в классе?»'],
      ["«Qalam 2000 so'm turadi. 3 ta qalam necha so'm turadi?»", '«Карандаш стоит 2000 сумов. Сколько стоят 3 карандаша?»'],
      ["«15 ta konfet bor edi, 6 tasi yeyildi. Nechta konfet qoldi?»", '«Было 15 конфет, 6 съели. Сколько конфет осталось?»'],
    ], 'A',
    ["Birinchi masalada avtobusdagi dastlabki yo'lovchilar soni berilmagan. Ma'lumoti yetishmaydigan va ortiqcha masalalar o'quvchini masala shartini tahlil qilishga o'rgatadi, «sonlar bilan biror amal bajarish» odatini yo'qotadi.",
     'В первой задаче не дано начальное число пассажиров. Задачи с недостающими и лишними данными учат анализировать условие и отучают «делать что-нибудь с числами».']),

  mc('s2-v2-221', '2.2.1', { ...E, d: 2, src: ['math14'] },
    ["To'g'ri chiziqda 4 ta nuqta belgilangan. Uchlari shu nuqtalarda bo'lgan nechta kesma hosil bo'ladi?", 'На прямой отмечены 4 точки. Сколько получилось отрезков с концами в этих точках?'],
    ['4', '6', '3', '8'], 'B',
    ["Har bir nuqta qolgan 3 tasi bilan kesma hosil qiladi: 4 · 3 = 12, har bir kesma ikki marta sanaladi: 12 : 2 = 6 (AB, AC, AD, BC, BD, CD). Faqat qo'shni kesmalarni sanash 3 ni beradi — tipik xato.",
     'Каждая точка образует отрезок с тремя другими: 4 · 3 = 12, каждый отрезок посчитан дважды: 12 : 2 = 6 (AB, AC, AD, BC, BD, CD). Если считать только соседние отрезки, получится 3 — типичная ошибка.']),

  mc('s2-v2-222', '2.2.2', { ...E, d: 2, src: ['math14'] },
    ["Soat roppa-rosa 4:00 ni ko'rsatganda soat va minut millari qanday burchak hosil qiladi?", 'Какой угол образуют часовая и минутная стрелки ровно в 4:00?'],
    [
      ["To'g'ri burchak, 90°", 'Прямой, 90°'],
      ["O'tkir burchak, 60°", 'Острый, 60°'],
      ["O'tmas burchak, 120°", 'Тупой, 120°'],
      ["Yoyiq burchak, 180°", 'Развёрнутый, 180°'],
    ], 'C',
    ["Siferblat 12 qismga bo'lingan, har bir qism 360° : 12 = 30°. Soat 4 da millar orasida 4 qism: 4 · 30° = 120° — 90° dan katta, 180° dan kichik, ya'ni o'tmas burchak.",
     'Циферблат разделён на 12 частей, каждая 360° : 12 = 30°. В 4 часа между стрелками 4 части: 4 · 30° = 120° — больше 90°, меньше 180°, то есть угол тупой.']),

  mc('s2-v2-223', '2.2.3', { ...E, src: ['math14'] },
    ["Qavariq oltiburchakning nechta diagonali bor?", 'Сколько диагоналей у выпуклого шестиугольника?'],
    ['6', '12', '3', '9'], 'D',
    ["Har bir uchdan o'zi va ikki qo'shni uchdan tashqari 6 − 3 = 3 ta diagonal chiqadi: 6 · 3 = 18, har biri ikki marta sanalgan: 18 : 2 = 9. Formula: n(n − 3) : 2.",
     'Из каждой вершины выходят диагонали ко всем вершинам, кроме неё самой и двух соседних: 6 − 3 = 3; 6 · 3 = 18, каждая посчитана дважды: 18 : 2 = 9. Формула: n(n − 3) : 2.']),

  mc('s2-v2-224', '2.2.4', { ...E, d: 2, src: ['math14'] },
    ["Aylana radiusi 7 sm. Uning diametri nechaga teng va eng uzun vatar qaysi?", 'Радиус окружности 7 см. Чему равен её диаметр и какая хорда самая длинная?'],
    [
      ["14 sm; eng uzun vatar — diametr", '14 см; самая длинная хорда — диаметр'],
      ["3,5 sm; eng uzun vatar — radius", '3,5 см; самая длинная хорда — радиус'],
      ["14 sm; eng uzun vatar — radius", '14 см; самая длинная хорда — радиус'],
      ["49 sm; eng uzun vatar — diametr", '49 см; самая длинная хорда — диаметр'],
    ], 'A',
    ["d = 2r = 14 sm. Vatar — aylananing ikki nuqtasini tutashtiruvchi kesma; markazdan o'tgan vatar — diametr va u eng uzun. Radius vatar emas (bir uchi markazda). 49 — r² bilan chalkashtirish.",
     'd = 2r = 14 см. Хорда — отрезок, соединяющий две точки окружности; хорда через центр — диаметр, она самая длинная. Радиус хордой не является (один конец — в центре). 49 — путаница с r².']),

  mc('s2-v2-225', '2.2.5', { ...E, d: 2, src: ['math14'] },
    ["Uchburchakli piramidaning nechta uchi, qirrasi va yog'i bor?", 'Сколько вершин, рёбер и граней у треугольной пирамиды?'],
    [
      ["3 ta uch, 6 ta qirra, 4 ta yoq", '3 вершины, 6 рёбер, 4 грани'],
      ["4 ta uch, 6 ta qirra, 4 ta yoq", '4 вершины, 6 рёбер, 4 грани'],
      ["4 ta uch, 4 ta qirra, 6 ta yoq", '4 вершины, 4 ребра, 6 граней'],
      ["6 ta uch, 9 ta qirra, 5 ta yoq", '6 вершин, 9 рёбер, 5 граней'],
    ], 'B',
    ["Asosda 3 ta uch va 3 ta qirra, cho'qqi — yana 1 uch va 3 qirra: 4 uch, 6 qirra; yoqlar: asos + 3 yon yoq = 4. Eyler formulasi bilan tekshiruv: 4 − 6 + 4 = 2. 6/9/5 — uchburchakli prizma.",
     'В основании 3 вершины и 3 ребра, вершина пирамиды — ещё 1 вершина и 3 ребра: 4 вершины, 6 рёбер; граней: основание + 3 боковые = 4. Проверка по формуле Эйлера: 4 − 6 + 4 = 2. 6/9/5 — треугольная призма.']),

  mc('s2-v2-231', '2.3.1', { ...E, src: ['abduhalimov'] },
    ["30 o'quvchidan 18 tasi suzish bilan, 14 tasi raqs bilan shug'ullanadi, 4 tasi hech biri bilan shug'ullanmaydi. Nechta o'quvchi ikkalasi bilan ham shug'ullanadi?", 'Из 30 учеников 18 занимаются плаванием, 14 — танцами, 4 не занимаются ни тем, ни другим. Сколько учеников занимаются и тем, и другим?'],
    ['4', '8', '6', '2'], 'C',
    ["Kamida bittasi bilan shug'ullanadiganlar: 30 − 4 = 26. 18 + 14 = 32, ikkalasi bilan shug'ullanuvchilar ikki marta sanalgan: 32 − 26 = 6. Eyler-Venn diagrammasida: faqat suzish 12, faqat raqs 8, ikkalasi 6, hech biri 4.",
     'Занимаются хотя бы одним: 30 − 4 = 26. 18 + 14 = 32, занимающиеся обоими посчитаны дважды: 32 − 26 = 6. На диаграмме Эйлера–Венна: только плавание 12, только танцы 8, оба 6, ни одного 4.']),

  mc('s2-v2-232', '2.3.2', { ...E, src: ['abduhalimov'] },
    ["«Barcha o'quvchilar darsga keldi» mulohazasining inkori qaysi?", 'Какое высказывание является отрицанием высказывания «Все ученики пришли на урок»?'],
    [
      ["«Barcha o'quvchilar darsga kelmadi»", '«Все ученики не пришли на урок»'],
      ["«Hech bir o'quvchi darsga kelmadi»", '«Ни один ученик не пришёл на урок»'],
      ["«Darsga faqat o'quvchilar keldi»", '«На урок пришли только ученики»'],
      ["«Kamida bitta o'quvchi darsga kelmadi»", '«Хотя бы один ученик не пришёл на урок»'],
    ], 'D',
    ["«Hammasi ...» mulohazasini rad etish uchun bitta qarshi misol yetarli: inkor — «kamida bittasi ... emas». «Hech biri kelmadi» — kuchliroq mulohaza, u inkor emas: bir nechta o'quvchi kelmagan holatda ikkalasi ham yolg'on bo'lishi mumkin.",
     'Чтобы опровергнуть высказывание «все ...», достаточно одного контрпримера: отрицание — «хотя бы один ... не». «Ни один не пришёл» — более сильное утверждение и отрицанием не является: если не пришли лишь некоторые, оба высказывания ложны.']),

  mc('s2-v2-233', '2.3.3', { ...E, d: 2, src: ['abduhalimov'] },
    ["1, 3, 5, 7 raqamlaridan raqamlari takrorlanmaydigan nechta ikki xonali son tuzish mumkin?", 'Сколько двузначных чисел с неповторяющимися цифрами можно составить из цифр 1, 3, 5, 7?'],
    ['16', '12', '8', '24'], 'B',
    ["Imkoniyatlar daraxti: o'nlar xonasiga 4 ta raqamdan biri, birlar xonasiga qolgan 3 tadan biri: 4 · 3 = 12. 16 = 4 · 4 — takrorlanishga ruxsat berilgan holat.",
     'Дерево возможностей: на место десятков — любая из 4 цифр, на место единиц — любая из 3 оставшихся: 4 · 3 = 12. 16 = 4 · 4 — случай, когда повторение разрешено.']),

  mc('s2-v2-235', '2.3.5', { ...E, src: ['abduhalimov', 'sinfoniyeva'] },
    ["5 do'st uchrashganda har biri boshqasi bilan bir martadan qo'l berib ko'rishdi. Jami nechta qo'l berib ko'rishish bo'ldi?", 'Пять друзей при встрече обменялись рукопожатиями — каждый с каждым по одному разу. Сколько было рукопожатий?'],
    ['10', '20', '25', '5'], 'A',
    ["Graf usuli: do'stlar — uchlar, qo'l berishlar — qirralar. Har bir uchdan 4 qirra: 5 · 4 = 20, har bir qirra ikki marta sanalgan: 20 : 2 = 10.",
     'Метод графов: друзья — вершины, рукопожатия — рёбра. Из каждой вершины 4 ребра: 5 · 4 = 20, каждое ребро посчитано дважды: 20 : 2 = 10.']),

  mc('s2-v2-236', '2.3.6', { ...E, d: 4, src: ['sinfoniyeva'] },
    ["Xaltada 5 ta qizil, 7 ta ko'k va 9 ta yashil shar bor. Qaramasdan kamida nechta shar olinsa, ular orasida albatta uchala rangdagi shar bo'ladi?", 'В мешке 5 красных, 7 синих и 9 зелёных шаров. Какое наименьшее число шаров нужно вынуть не глядя, чтобы среди них наверняка были шары всех трёх цветов?'],
    ['3', '15', '22', '17'], 'D',
    ["Eng yomon holatni ko'rib chiqamiz: avval eng ko'p ikki rangdagi barcha sharlar chiqadi — 9 yashil va 7 ko'k = 16 ta, ular orasida qizil yo'q. Keyingi, 17-shar albatta qizil bo'ladi. 3 — «omadli» holat, kafolat emas.",
     'Рассматриваем худший случай: сначала вынимаются все шары двух самых многочисленных цветов — 9 зелёных и 7 синих = 16, красного среди них нет. Следующий, 17-й шар обязательно красный. 3 — «удачный» случай, а не гарантия.']),

  mc('s2-v2-237', '2.3.7', { ...E, d: 2, src: ['sinfoniyeva'] },
    ["Pallali tarozi va bittadan 1 kg hamda 3 kg li toshlar bor. Toshlarni tarozining istalgan pallasiga qo'yish mumkin bo'lsa, bir marta tortishda necha xil butun kilogramm massani o'lchash mumkin?", 'Есть чашечные весы и по одной гире 1 кг и 3 кг. Гири можно ставить на любую чашу. Сколько разных масс в целых килограммах можно отвесить за одно взвешивание?'],
    ['2', '3', '4', '5'], 'C',
    ["1 kg; 3 kg; 1 + 3 = 4 kg; 3 − 1 = 2 kg (3 kg li tosh bir pallada, 1 kg li tosh esa yuk bilan ikkinchi pallada). Jami 4 xil massa. Toshni ikkala pallaga qo'yish imkoniyatini unutish 3 javobiga olib keladi.",
     '1 кг; 3 кг; 1 + 3 = 4 кг; 3 − 1 = 2 кг (гиря 3 кг на одной чаше, гиря 1 кг вместе с грузом — на другой). Всего 4 разные массы. Если забыть, что гирю можно ставить на чашу с грузом, получится 3.']),

  mc('s2-v2-239', '2.3.9', { ...E, src: ['sinfoniyeva', 'abduhalimov'] },
    ["Aziz, Botir va Dilnoza — rassom, musiqachi va shoir (har biri bittadan). Botir musiqachi ham, shoir ham emas. Dilnoza shoir emas. Shoir kim?", 'Азиз, Ботир и Дильноза — художник, музыкант и поэт (каждый — кто-то один). Ботир не музыкант и не поэт. Дильноза не поэт. Кто поэт?'],
    ['Botir', 'Dilnoza', 'Aziz', ["Aniqlab bo'lmaydi", 'Определить нельзя']], 'C',
    ["Jadval usuli: Botir musiqachi va shoir emas → rassom. Dilnoza shoir emas va rassom ham emas (rassom — Botir) → musiqachi. Qolgan kasb — shoir — Azizga tegishli.",
     'Табличный метод: Ботир не музыкант и не поэт → художник. Дильноза не поэт и не художник (художник — Ботир) → музыкант. Оставшаяся профессия — поэт — у Азиза.']),
];
