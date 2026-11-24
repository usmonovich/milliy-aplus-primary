// Section 2 — Mathematics and its teaching methodology. Original items for
// mock variant 1. Computational slots (2.2.6, 2.2.7, 2.2.8–10, 2.3.4, 2.3.8)
// come from generators.ts. Numeric facts are re-checked in content.test.ts.
import { mc } from './build';
import type { Question } from '../../core/types';

const E = { lang: 'both' as const, pool: 'exam' as const };

export const BANK_S2: Question[] = [
  mc('s2-v1-211', '2.1.1', { ...E, d: 2, src: ['bikbayeva', 'jumayev2020'] },
    ["1-sinf o'quvchisi buyumlarni sanashda ba'zilarini ikki marta sanaydi, ba'zilarini o'tkazib yuboradi. Sanoqning qaysi tamoyili shakllanmagan?", 'Первоклассник при счёте некоторые предметы считает дважды, а некоторые пропускает. Какой принцип счёта не сформирован?'],
    [
      ["Sonlar nomlarining barqaror tartibi.", 'Устойчивый порядок числительных.'],
      ["Birga-bir moslik: har bir buyumga faqat bitta son nomi.", 'Взаимно однозначное соответствие: каждому предмету — одно числительное.'],
      ["Kardinallik: oxirgi son to'plam miqdorini bildiradi.", 'Кардинальность: последнее число обозначает количество.'],
      ["Sanash tartibining natijaga ta'sir qilmasligi.", 'Независимость результата от порядка счёта.'],
    ], 'B',
    ["Ikki marta sanash va o'tkazib yuborish — birga-bir moslik buzilishi. Tuzatish: sanalgan buyumni chetga surish yoki belgilash, barmoq bilan tegib sanash.", 'Двойной счёт и пропуски — нарушение взаимно однозначного соответствия. Коррекция: отодвигать или отмечать сосчитанный предмет, считать с касанием.']),

  mc('s2-v1-212', '2.1.2', { ...E, src: ['bikbayeva'] },
    ["4-sinf o'quvchisi 30 405 sonini «uch ming to'rt yuz besh» deb o'qidi. Xatoni bartaraf etishning eng to'g'ri usuli qaysi?", 'Ученик 4 класса прочитал число 30 405 как «три тысячи четыреста пять». Каков наиболее верный способ устранить ошибку?'],
    [
      ["Sonni bir necha marta baland ovozda to'g'ri o'qib berish.", 'Несколько раз громко прочитать число правильно.'],
      ["Sonni xona qo'shiluvchilari yig'indisi sifatida yozdirish.", 'Попросить записать число суммой разрядных слагаемых.'],
      ["Sonni sinflar jadvaliga (minglar sinfi | birlar sinfi) joylashtirib, har bir sinfni alohida o'qib, sinf nomini qo'shish: «o'ttiz ming | to'rt yuz besh».", 'Разместить число в таблице классов (класс тысяч | класс единиц), читать каждый класс отдельно, добавляя название класса: «тридцать тысяч | четыреста пять».'],
      ["Sonni teskari tartibda o'qitish.", 'Попросить прочитать число в обратном порядке.'],
    ], 'C',
    ["Ko'p xonali sonlarni o'qish sinflar bo'yicha amalga oshiriladi: minglar sinfida «30» → «o'ttiz ming». Jadval nol turgan xonani ham ko'rinadigan qiladi. A ko'rsatmali emas, B foydali, ammo o'qish algoritmini bermaydi.", 'Многозначные числа читают по классам: в классе тысяч «30» → «тридцать тысяч». Таблица делает видимым и разряд с нулём. A не наглядно, B полезно, но не даёт алгоритма чтения.']),

  mc('s2-v1-213', '2.1.3', { ...E, d: 2, src: ['tojiyev2012'] },
    ['49 soni Rim raqamlarida qanday yoziladi?', 'Как записывается число 49 римскими цифрами?'],
    [['XLIX', 'XLIX'], ['IL', 'IL'], ['XXXXVIIII', 'XXXXVIIII'], ['LIX', 'LIX']], 'A',
    ["49 = 40 + 9 = XL + IX = XLIX. Ayirish faqat I ni V va X dan, X ni L va C dan oldin qo'yishda qo'llanadi, shuning uchun IL noto'g'ri. LIX = 59. Metodik: sonni avval xona qo'shiluvchilariga ajrating, keyin har birini yozing.", '49 = 40 + 9 = XL + IX = XLIX. Вычитание допускается только I перед V и X, X перед L и C, поэтому IL неверно. LIX = 59. Методически: сначала разложите число на разрядные слагаемые, затем запишите каждое.']),

  mc('s2-v1-214', '2.1.4', { ...E, src: ['bikbayeva', 'jumayev2005'] },
    ["2-sinf o'quvchisi 47 + 8 ni hisoblab, 415 deb yozdi. Konsentrik yondashuvga mos eng to'g'ri metodik harakat qaysi?", 'Второклассник вычислил 47 + 8 и записал 415. Какое методическое действие наиболее соответствует концентрическому подходу?'],
    [
      ["Ustun shaklida qo'shishni darhol o'rgatish.", 'Сразу научить сложению в столбик.'],
      ["Birliklarni sanoq bilan bittalab qo'shib borish.", 'Прибавлять единицы по одной, пересчитывая.'],
      ["To'g'ri javobni aytib, qoida yozdirish.", 'Сказать правильный ответ и записать правило.'],
      ["10 ichidagi tarkibga tayanib o'nlikkacha to'ldirish: 47 + 3 = 50, 50 + 5 = 55, buni sonlar o'qi yoki o'nlik ramkasida ko'rsatish.", 'Опираясь на состав чисел в пределах 10, дополнить до десятка: 47 + 3 = 50, 50 + 5 = 55, показав это на числовом луче или в рамке-десятке.'],
    ], 'D',
    ["47 + 8 = 55. O'quvchi birliklar yig'indisini (15) o'nlik va birlikka ajratmagan. O'nlikkacha to'ldirish usuli 10 ichidagi bilimni 100 ichiga ko'chiradi (konsentrizm). A tushunchasiz algoritm, B samarasiz.", '47 + 8 = 55. Ученик не разложил сумму единиц (15) на десяток и единицы. Приём дополнения до десятка переносит знания из концентра 10 в концентр 100. A — алгоритм без понимания, B неэффективен.']),

  mc('s2-v1-215', '2.1.5', { ...E, src: ['bikbayeva'] },
    ["O'quvchilar «12 ta olmani 3 bolaga teng bo'ling» va «12 ta olmani 3 tadan bo'ling» masalalarini farqlamaydi. Bo'lishning ikki ma'nosini ochishda qaysi usul eng samarali?", 'Ученики не различают задачи «Раздели 12 яблок поровну между 3 детьми» и «Раздели 12 яблок по 3». Какой приём наиболее эффективен для раскрытия двух смыслов деления?'],
    [
      ["Ikkala vaziyatni buyumlar bilan amalda bajarib, «har biriga nechtadan?» va «nechta bolaga yetadi?» savollarini solishtirish.", 'Выполнить обе ситуации с предметами и сравнить вопросы «по сколько каждому?» и «скольким детям хватит?».'],
      ["Ikkalasi ham 12 : 3 = 4 ekanini ta'kidlab, farqqa e'tibor bermaslik.", 'Подчеркнуть, что в обоих случаях 12 : 3 = 4, и не обращать внимания на различие.'],
      ["Bo'lish jadvalini yodlatish.", 'Заучить таблицу деления.'],
      ["Faqat teng bo'lishga oid masalalar yechtirish.", 'Решать только задачи на деление поровну.'],
    ], 'A',
    ["Teng qismlarga bo'lish (12 : 3 = 4 tadan) va mazmuniga ko'ra bo'lish (12 : 3 = 4 bola) — bo'lishning ikki ma'nosi. Predmetli harakat ularni farqlash va amalni ongli tanlash imkonini beradi.", 'Деление на равные части (12 : 3 = по 4) и деление по содержанию (12 : 3 = 4 ребёнка) — два смысла деления. Предметное действие позволяет их различать и осознанно выбирать действие.']),

  mc('s2-v1-216', '2.1.6', { ...E, src: ['jumayev2005'] },
    ["3-sinfda 23 · 4 ni og'zaki hisoblash o'rgatilmoqda. Bir o'quvchi 2 · 4 = 8 va 3 · 4 = 12 ni yonma-yon yozib, 812 javob berdi. Qaysi usul xatoning sababini yaxshiroq ochib beradi?", 'В 3 классе учат устно вычислять 23 · 4. Один ученик записал рядом 2 · 4 = 8 и 3 · 4 = 12 и получил 812. Какой приём лучше раскрывает причину ошибки?'],
    [
      ["Ustun shaklida ko'paytirish algoritmini yodlatish.", 'Заучить алгоритм умножения в столбик.'],
      ["23 ni 4 marta qo'shib chiqishni tavsiya etish.", 'Предложить сложить 23 четыре раза.'],
      ["23 ni 20 + 3 ga ajratib, to'g'ri to'rtburchak (yuza) modelida 20 · 4 = 80 va 3 · 4 = 12 ni ko'rsatish, so'ng 80 + 12 = 92 ni qo'shish.", 'Разложить 23 на 20 + 3 и на модели прямоугольника (площади) показать 20 · 4 = 80 и 3 · 4 = 12, затем сложить 80 + 12 = 92.'],
      ["Javobni kalkulyatorda tekshirtirish.", 'Проверить ответ на калькуляторе.'],
    ], 'C',
    ["23 · 4 = 92. O'quvchi 2 ni o'nlik sifatida (20) ko'rmagan. Yig'indini songa ko'paytirish xossasi (taqsimot) va yuza modeli xona qiymatini ko'rinadigan qiladi. B to'g'ri, ammo usulni o'rgatmaydi.", '23 · 4 = 92. Ученик не увидел в 2 десятки (20). Свойство умножения суммы на число и модель площади делают разрядное значение видимым. B верно, но не учит приёму.']),

  mc('s2-v1-217', '2.1.7', { ...E, d: 2, src: ['bikbayeva'] },
    ["O'quvchilar 25 · 7 · 4 ni chapdan o'ngga ketma-ket hisoblashda qiynaldi. O'qituvchi amallar xossalarini qo'llashni o'rgatmoqchi. Qaysi yo'l to'g'ri?", 'Ученики затрудняются, вычисляя 25 · 7 · 4 последовательно слева направо. Учитель хочет научить применять свойства действий. Какой путь верен?'],
    [
      ["Avval 25 · 7 = 175 ni topib, so'ng 4 ga ko'paytirish.", 'Сначала найти 25 · 7 = 175, затем умножить на 4.'],
      ["O'rin almashtirish va guruhlash xossasiga ko'ra (25 · 4) · 7 = 100 · 7 = 700 ni topish.", 'По переместительному и сочетательному свойствам найти (25 · 4) · 7 = 100 · 7 = 700.'],
      ["Ustun shaklida ikki marta ko'paytirish.", 'Дважды умножить в столбик.'],
      ["Har bir sonni xona qo'shiluvchilariga ajratish.", 'Разложить каждое число на разрядные слагаемые.'],
    ], 'B',
    ["25 · 4 = 100, 100 · 7 = 700. Qulay juftlikni (yaxlit son beradigan) guruhlash og'zaki hisoblashni osonlashtiradi. A natijani beradi, lekin xossani qo'llashni o'rgatmaydi.", '25 · 4 = 100, 100 · 7 = 700. Группировка удобной пары (дающей круглое число) упрощает устный счёт. A даёт результат, но не учит применению свойства.']),

  mc('s2-v1-218', '2.1.8', { ...E, src: ['tojiyev2012', 'bikbayeva'] },
    ["O'quvchilar 51 tub son deb hisoblaydi, chunki u juft emas va 5 bilan tugamaydi. 3 ga bo'linish belgisini ongli o'rgatishning eng to'g'ri yo'li qaysi?", 'Ученики считают 51 простым числом, так как оно нечётное и не оканчивается на 5. Каков наиболее верный путь осознанного изучения признака делимости на 3?'],
    [
      ["Qoidani yozdirib, yodlatish.", 'Записать и выучить правило.'],
      ["51 ni ketma-ket 2, 3, 4, … ga bo'lib ko'rishni tavsiya etish.", 'Предложить последовательно делить 51 на 2, 3, 4, …'],
      ["Tub sonlar jadvalini ko'chirtirish.", 'Переписать таблицу простых чисел.'],
      ["3 ga karrali sonlar jadvalida raqamlar yig'indisini hisoblab, qonuniyatni o'quvchilarning o'zi topishini tashkil etish, so'ng 5 + 1 = 6 orqali 51 = 3 · 17 ekanini tekshirish.", 'Организовать самостоятельное открытие закономерности: в таблице чисел, кратных 3, считать сумму цифр; затем по 5 + 1 = 6 проверить, что 51 = 3 · 17.'],
    ], 'D',
    ["3 · 17 = 51, demak 51 murakkab son. Induktiv izlanish (kuzatish → qonuniyat → tekshirish) belgini ongli o'zlashtirishga olib keladi. B to'g'ri natija beradi, ammo belgini o'rgatmaydi.", '3 · 17 = 51, значит 51 — составное. Индуктивный поиск (наблюдение → закономерность → проверка) ведёт к осознанному усвоению признака. B даёт верный результат, но не учит признаку.']),

  mc('s2-v1-219', '2.1.9', { ...E, src: ['bikbayeva'] },
    ["O'quvchilar 1/5 > 1/3 deb hisoblaydi, chunki 5 > 3. Bu noto'g'ri tasavvurni bartaraf etishning eng samarali usuli qaysi?", 'Ученики считают, что 1/5 > 1/3, так как 5 > 3. Какой приём наиболее эффективен для устранения этого заблуждения?'],
    [
      ["Bir xil uzunlikdagi qog'oz tasmalarni 3 va 5 teng bo'lakka bo'lib, bitta bo'laklarni yonma-yon solishtirish.", 'Разделить одинаковые полоски бумаги на 3 и на 5 равных частей и сравнить по одной части рядом.'],
      ["«Maxraji katta kasr kichik» qoidasini yodlatish.", 'Заучить правило «чем больше знаменатель, тем меньше дробь».'],
      ["Kasrlarni umumiy maxrajga keltirish.", 'Привести дроби к общему знаменателю.'],
      ["Sonlar o'qida 3 va 5 ni belgilash.", 'Отметить на числовом луче числа 3 и 5.'],
    ], 'A',
    ["Butun bir xil bo'lganda, u qancha ko'p bo'lakka bo'linsa, har bir bo'lak shuncha kichik: 1/5 < 1/3. Ko'rgazmali model qoidani tushunishga olib keladi; B tushunchasiz qoida, C boshlang'ich sinf uchun erta, D noto'g'ri tasavvurni mustahkamlaydi.", 'При одинаковом целом: чем на большее число частей оно разделено, тем меньше каждая часть: 1/5 < 1/3. Наглядная модель ведёт к пониманию правила; B — правило без понимания, C преждевременно, D закрепляет заблуждение.']),

  mc('s2-v1-2110', '2.1.10', { ...E, src: ['timss', 'pirlstimss'] },
    ["Piktogrammada bitta kitob belgisi 5 ta kitobni bildiradi. «Dilnoza» qatorida 4 ta belgi bor. O'quvchilar «Dilnoza 4 ta kitob o'qigan» deb javob berdi. O'qituvchi nimaga e'tibor qaratishi kerak?", 'В пиктограмме один значок книги обозначает 5 книг. В строке «Дильноза» 4 значка. Ученики ответили: «Дильноза прочитала 4 книги». На что учителю следует обратить внимание?'],
    [
      ["Belgilarni qayta sanashga.", 'Пересчитать значки ещё раз.'],
      ["Piktogrammaning shartli belgisiga (kalitiga) va 5 tadan sanashga: 4 · 5 = 20 kitob.", 'На условное обозначение (ключ) пиктограммы и счёт пятёрками: 4 · 5 = 20 книг.'],
      ["Ustunli diagrammaga o'tishga.", 'Перейти к столбчатой диаграмме.'],
      ["Belgilarning rangiga.", 'На цвет значков.'],
    ], 'B',
    ["Grafik ma'lumot bilan ishlashda masshtab (kalit) eng ko'p e'tibordan chetda qoladi. 4 · 5 = 20. TIMSS ma'lumotlar bilan ishlashda aynan shu «o'qish va talqin qilish» ko'nikmasini tekshiradi.", 'При работе с графическими данными чаще всего упускают масштаб (ключ). 4 · 5 = 20. TIMSS в разделе «Данные» проверяет именно умение читать и интерпретировать.']),

  mc('s2-v1-2111', '2.1.11', { ...E, src: ['bikbayeva', 'jumayev2020'] },
    ["Masala: «Bog'da 15 tup olma va 8 tup nok bor. Hammasi bo'lib nechta daraxt bor?» Qaysi masala unga teskari masala hisoblanadi?", 'Задача: «В саду 15 яблонь и 8 груш. Сколько всего деревьев?» Какая задача является обратной к ней?'],
    [
      ["Bog'da 16 tup olma va 9 tup nok bor. Hammasi nechta?", 'В саду 16 яблонь и 9 груш. Сколько всего?'],
      ["Bog'da 15 tup olma va 8 tup nok bor. Olma nokdan nechta ko'p?", 'В саду 15 яблонь и 8 груш. На сколько яблонь больше, чем груш?'],
      ["Bog'da 23 tup daraxt bor, ulardan 15 tasi olma, qolgani nok. Nok nechta?", 'В саду 23 дерева, из них 15 яблонь, остальные груши. Сколько груш?'],
      ["Bog'da 15 tup olma, 8 tup nok va 4 tup o'rik bor. Hammasi nechta?", 'В саду 15 яблонь, 8 груш и 4 абрикоса. Сколько всего?'],
    ], 'C',
    ["Teskari masalada berilgan masalaning javobi (23) ma'lum bo'ladi, berilganlardan biri (8) esa izlanadi: 23 − 15 = 8. A — shu turdagi boshqa masala, B — boshqa savol (farq), D — murakkablashtirilgan masala.", 'В обратной задаче ответ исходной (23) становится данным, а одно из данных (8) — искомым: 23 − 15 = 8. A — аналогичная задача, B — другой вопрос (разность), D — усложнённая задача.']),

  mc('s2-v1-221', '2.2.1', { ...E, d: 1, src: ['tojiyev2012'] },
    ["Quyidagilardan qaysi biri nurning ta'rifi?", 'Какое из определений относится к лучу?'],
    [
      ["Ikki nuqta bilan chegaralangan to'g'ri chiziq qismi.", 'Часть прямой, ограниченная двумя точками.'],
      ["Ikki tomonga cheksiz davom etadigan chiziq.", 'Линия, бесконечная в обе стороны.'],
      ["Bir uchidan chiqib, bir tomonga cheksiz davom etadigan to'g'ri chiziq qismi.", 'Часть прямой, имеющая начало и бесконечная в одну сторону.'],
      ["Bitta nuqtadan chiqqan ikki kesmadan iborat shakl.", 'Фигура из двух отрезков, выходящих из одной точки.'],
    ], 'C',
    ["Nurning boshi bor va u bir tomonga cheksiz. A — kesma, B — to'g'ri chiziq, D — siniq chiziq/burchakka yaqin tasvir. Metodik: «quyosh nuri» va «fonar nuri» tasvirlari bilan bog'lash.", 'У луча есть начало, и он бесконечен в одну сторону. A — отрезок, B — прямая, D — ломаная/угол. Методически: связать с образами «солнечный луч», «луч фонарика».']),

  mc('s2-v1-222', '2.2.2', { ...E, src: ['jumayev2020'] },
    ["3-sinf o'quvchilari qiya joylashgan to'g'ri burchakni «to'g'ri burchak emas» deyishdi, chunki uning tomonlari gorizontal va vertikal emas. Qaysi harakat ushbu noto'g'ri tasavvurni yaxshiroq yo'qotadi?", 'Третьеклассники назвали наклонно расположенный прямой угол «не прямым», потому что его стороны не горизонтальны и не вертикальны. Какое действие лучше устранит это заблуждение?'],
    [
      ["To'g'ri burchakning ta'rifini doskaga yozish.", 'Записать на доске определение прямого угла.'],
      ["Faqat daftar kataklari bo'ylab burchak chizdirish.", 'Чертить углы только по клеткам тетради.'],
      ["Burchakning tomonlarini uzaytirib chizish.", 'Удлинить стороны угла.'],
      ["Qog'ozni ikki marta buklab yasalgan to'g'ri burchak modeli bilan turli holatda joylashgan burchaklarni tekshirish va varaqni aylantirib kuzatish.", 'Проверять углы в разных положениях моделью прямого угла из дважды сложенного листа и наблюдать, поворачивая лист.'],
    ], 'D',
    ["Burchak turi uning joylashuviga bog'liq emas. Model bilan amaliy tekshirish va varaqni aylantirish buni ko'rsatadi. B noto'g'ri tasavvurni mustahkamlaydi, A va C muammoga tegmaydi.", 'Вид угла не зависит от его положения. Практическая проверка моделью и поворот листа это показывают. B закрепляет заблуждение, A и C не затрагивают проблему.']),

  mc('s2-v1-223', '2.2.3', { ...E, src: ['jumayev2020', 'tojiyev2012'] },
    ["O'quvchilar «kvadrat to'g'ri to'rtburchak emas» deb hisoblaydi. Shakllar xossalarini vizual-amaliy o'rgatishda qaysi yondashuv to'g'ri?", 'Ученики считают, что «квадрат — не прямоугольник». Какой подход верен при наглядно-практическом изучении свойств фигур?'],
    [
      ["To'g'ri to'rtburchak xossalari ro'yxatini (4 ta to'g'ri burchak, qarama-qarshi tomonlar teng) tuzib, kvadratni burchak modeli va o'lchash bilan shu ro'yxat bo'yicha tekshirish, natijani tasnif chizmasida ko'rsatish.", 'Составить список свойств прямоугольника (4 прямых угла, противоположные стороны равны), проверить по нему квадрат моделью угла и измерением, показать результат на схеме классификации.'],
      ["Kvadrat va to'g'ri to'rtburchakni alohida mavzu sifatida o'rganish.", 'Изучать квадрат и прямоугольник как отдельные темы.'],
      ["Kvadratning tomonlari teng, shuning uchun u boshqa shakl, deb tushuntirish.", 'Объяснить, что у квадрата стороны равны, поэтому это другая фигура.'],
      ["Faqat shakllarning rasmlarini ko'rsatish.", 'Показывать только изображения фигур.'],
    ], 'A',
    ["Kvadrat to'g'ri to'rtburchakning barcha xossalariga ega, ya'ni uning xususiy holi. Xossalar bo'yicha tekshirish tasniflash tafakkurini rivojlantiradi. C noto'g'ri tasavvurni kuchaytiradi.", 'Квадрат обладает всеми свойствами прямоугольника, то есть является его частным случаем. Проверка по свойствам развивает классификационное мышление. C усиливает заблуждение.']),

  mc('s2-v1-224', '2.2.4', { ...E, src: ['jumayev2020'] },
    ["O'quvchilar «aylana» va «doira» tushunchalarini chalkashtiradi. Farqni amaliy anglatishning eng to'g'ri usuli qaysi?", 'Ученики путают понятия «окружность» и «круг». Каков наиболее верный способ практически показать различие?'],
    [
      ["Ta'riflarni yodlatish.", 'Заучить определения.'],
      ["Sirkul bilan aylana chizib, so'ng chizilgan chiziq bo'ylab qirqib doirani ajratish: aylanani barmoq bilan chegara bo'ylab yurgizish, doirani esa to'liq bo'yash.", 'Начертить циркулем окружность, затем вырезать по линии круг: окружность обвести пальцем по границе, а круг закрасить целиком.'],
      ["Ikkalasini bitta so'z bilan atashga ruxsat berish.", 'Разрешить называть их одним словом.'],
      ["Faqat radiusni o'lchash.", 'Только измерять радиус.'],
    ], 'B',
    ["Aylana — yopiq chiziq (chegara), doira — aylana bilan chegaralangan tekislik qismi. «Chegara bo'ylab yurish» va «ichini bo'yash» harakatlari farqni sezish orqali mustahkamlaydi.", 'Окружность — замкнутая линия (граница), круг — часть плоскости, ограниченная окружностью. Действия «провести по границе» и «закрасить внутри» закрепляют различие через ощущение.']),

  mc('s2-v1-225', '2.2.5', { ...E, src: ['tojiyev2012'] },
    ["Kub rasmi bo'yicha qirralarni sanashda o'quvchilar ko'rinmaydigan qirralarni tashlab, 9 ta deb javob berdi. Qaysi metodik yo'l to'g'ri?", 'Считая рёбра куба по рисунку, ученики пропустили невидимые рёбра и ответили «9». Какой методический путь верен?'],
    [
      ["Rasmni kattaroq chizish.", 'Нарисовать изображение крупнее.'],
      ["To'g'ri javobni (12) aytib, yodlatish.", 'Сказать правильный ответ (12) и выучить его.'],
      ["Rasmdagi ko'rinmas qirralarni shtrix bilan belgilashni ko'rsatish va boshqa rasm berish.", 'Показать, как обозначать невидимые рёбра штрихом, и дать другой рисунок.'],
      ["Cho'p va plastilindan kub karkasini yasatib, qirralarni tizimli sanash (yuqori 4, pastki 4, yon 4 = 12) va natijani rasm bilan solishtirish.", 'Сделать каркас куба из палочек и пластилина, систематически посчитать рёбра (верх 4, низ 4, боковые 4 = 12) и сравнить с рисунком.'],
    ], 'D',
    ["Kubning 12 qirrasi, 8 uchi, 6 yog'i bor. Fazoviy tasavvur predmetli modeldan rasmga o'tish orqali shakllanadi; tizimli sanash usuli xatoni oldini oladi. C foydali, lekin model bosqichisiz yetarli emas.", 'У куба 12 рёбер, 8 вершин, 6 граней. Пространственные представления формируются переходом от предметной модели к рисунку; систематический счёт предотвращает ошибку. C полезно, но недостаточно без модели.']),

  mc('s2-v1-231', '2.3.1', { ...E, d: 3, src: ['sinfoniyeva'] },
    ["Sinfda 25 o'quvchi bor. 15 nafari futbolni, 12 nafari shaxmatni yaxshi ko'radi, 5 nafari ikkalasini ham. Nechta o'quvchi ikkalasini ham yoqtirmaydi?", 'В классе 25 учеников. 15 любят футбол, 12 — шахматы, 5 — и то и другое. Сколько учеников не любят ни того, ни другого?'],
    [['3', '3'], ['7', '7'], ['10', '10'], ['22', '22']], 'A',
    ["Venn diagrammasi: faqat futbol 15 − 5 = 10, faqat shaxmat 12 − 5 = 7, ikkalasi 5; jami 22. Hech birini yoqtirmaydiganlar 25 − 22 = 3. Tipik xato — kesishmani ikki marta sanash (15 + 12 = 27).", 'Диаграмма Венна: только футбол 15 − 5 = 10, только шахматы 12 − 5 = 7, оба 5; всего 22. Ни то ни другое: 25 − 22 = 3. Типичная ошибка — двойной учёт пересечения (15 + 12 = 27).']),

  mc('s2-v1-232', '2.3.2', { ...E, src: ['sinfoniyeva'] },
    ["O'quvchilar «Barcha qushlar ucha oladi» mulohazasini rost deb topdi. Mulohazalarning rost-yolg'onligini aniqlashni o'rgatishda eng to'g'ri harakat qaysi?", 'Ученики сочли истинным высказывание «Все птицы умеют летать». Какое действие наиболее верно при обучении определять истинность высказываний?'],
    [
      ["Qushlar haqida matn o'qitish.", 'Прочитать текст о птицах.'],
      ["Ko'pchilik qushlar ucha olgani uchun javobni qabul qilish.", 'Принять ответ, ведь большинство птиц летает.'],
      ["Rad etuvchi misol (pingvin, tuyaqush) izlashga undab, «barcha» so'zi qatnashgan mulohazani bitta qarshi misol yolg'onga chiqarishini ko'rsatish.", 'Побудить найти контрпример (пингвин, страус) и показать, что одно исключение делает ложным высказывание со словом «все».'],
      ["Mulohazani «Ba'zi qushlar ucha oladi» deb o'zgartirib, muhokamani yakunlash.", 'Заменить высказывание на «Некоторые птицы умеют летать» и завершить обсуждение.'],
    ], 'C',
    ["Umumiy mulohazani rad etish uchun bitta qarshi misol yetarli. Bu mantiqiy fikrlashning asosiy usuli. D to'g'ri mulohaza beradi, ammo o'quvchi o'zi kashf qilmaydi.", 'Для опровержения общего высказывания достаточно одного контрпримера — это базовый приём логического мышления. D даёт верное высказывание, но ученик не делает открытия сам.']),

  mc('s2-v1-233', '2.3.3', { ...E, src: ['abduhalimov'] },
    ["«3 yuguruvchi (Ali, Vali, G'ani) shohsupada 1-, 2-, 3-o'rinlarni necha xil usulda egallashi mumkin?» masalasida o'quvchilar tartibsiz sanab, 4 ta variant topdi. Qaysi metodik yo'l to'g'ri?", 'В задаче «Сколькими способами 3 бегуна (Али, Вали, Гани) могут занять 1-е, 2-е и 3-е места на пьедестале?» ученики перебирали беспорядочно и нашли 4 варианта. Какой методический путь верен?'],
    [
      ["Imkoniyatlar daraxtini tuzish: 1-o'ringa 3 nomzod, har biridan 2-o'ringa 2 ta, 3-o'ringa 1 ta → 3 · 2 · 1 = 6.", 'Построить дерево возможностей: на 1-е место 3 кандидата, от каждого на 2-е — 2, на 3-е — 1 → 3 · 2 · 1 = 6.'],
      ["To'g'ri javob 6 ekanini aytish.", 'Сообщить, что правильный ответ 6.'],
      ["Sonlarni qo'shish: 3 + 2 + 1 = 6.", 'Сложить числа: 3 + 2 + 1 = 6.'],
      ["Ko'proq variant yozishni so'rash.", 'Попросить записать больше вариантов.'],
    ], 'A',
    ["Tizimli sanash vositasi — imkoniyatlar daraxti — hech bir variant tushib qolmasligini kafolatlaydi. 3 · 2 · 1 = 6. C tasodifan bir xil javob beradi, lekin noto'g'ri mulohaza (4 yuguruvchida 4+3+2+1=10, to'g'risi 24).", 'Систематический перебор — дерево возможностей — гарантирует, что ни один вариант не пропущен. 3 · 2 · 1 = 6. C случайно даёт тот же ответ, но рассуждение неверно (для 4 бегунов 4+3+2+1=10, а верно 24).']),

  mc('s2-v1-235', '2.3.5', { ...E, d: 4, src: ['sinfoniyeva', 'abduhalimov'] },
    ["O'qituvchi «qalamni qog'ozdan uzmay chizish» masalalarida o'quvchilar har bir shaklni sinab ko'rmasdan, oldindan mumkin yoki mumkin emasligini aniqlashini istaydi. Qaysi usulni o'rgatish kerak?", 'Учитель хочет, чтобы в задачах «нарисовать, не отрывая карандаша» ученики заранее, без проб, определяли, возможно ли это. Какому приёму следует научить?'],
    [
      ["Shaklni ko'p marta qayta chizib ko'rish.", 'Много раз пробовать перерисовать фигуру.'],
      ["Shakldagi chiziqlar umumiy sonini sanash.", 'Посчитать общее количество линий фигуры.'],
      ["Har bir nuqtadan chiqadigan chiziqlar sonini sanash: toq sonli chiziqlar chiqadigan nuqtalar 0 ta yoki 2 ta bo'lsa — mumkin, 2 tadan ko'p bo'lsa — mumkin emas.", 'Считать число линий, выходящих из каждой точки: если «нечётных» точек 0 или 2 — можно, если больше двух — нельзя.'],
      ["Faqat simmetrik shakllarni chizish mumkin, deb tushuntirish.", 'Объяснить, что можно нарисовать только симметричные фигуры.'],
    ], 'C',
    ["Graf nazariyasi (Eyler): toq darajali uchlar soni 0 yoki 2 bo'lsa, shaklni bir chiziqda chizish mumkin; 2 tasi toq bo'lsa, chizish shu nuqtalarning birida boshlanadi. Bu sinovsiz bashorat qilish imkonini beradi.", 'Теория графов (Эйлер): если вершин нечётной степени 0 или 2, фигуру можно нарисовать одним росчерком; при двух нечётных начинать нужно в одной из них. Это позволяет предсказать без проб.']),

  mc('s2-v1-236', '2.3.6', { ...E, src: ['sinfoniyeva'] },
    ["«Sinfda 13 o'quvchi bor. Ulardan kamida ikkitasi bir oyda tug'ilganini isbotlang» masalasida o'quvchilar har birining tug'ilgan oyini so'rab chiqmoqchi. O'qituvchining eng to'g'ri metodik harakati qaysi?", 'В задаче «В классе 13 учеников. Докажите, что хотя бы двое родились в одном месяце» ученики хотят опросить всех о месяце рождения. Каково наиболее верное методическое действие учителя?'],
    [
      ["O'quvchilarning so'rovini o'tkazishga ruxsat berish.", 'Разрешить провести опрос учеников.'],
      ["12 ta «quti» (oylar) va 13 ta fishka modeli bilan «eng yomon holat»ni ko'rsatish: har oyga bittadan qo'yilsa, 13-fishka albatta band qutiga tushadi.", 'Показать «худший случай» на модели из 12 «ящиков» (месяцев) и 13 фишек: если положить по одной в каждый месяц, 13-я фишка обязательно попадёт в занятый ящик.'],
      ["Dirixle prinsipi ta'rifini yodlatish.", 'Заучить формулировку принципа Дирихле.'],
      ["Masalani o'tkazib yuborish, chunki u murakkab.", 'Пропустить задачу как слишком сложную.'],
    ], 'B',
    ["Dirixle prinsipi: n ta qutiga n+1 ta narsa joylansa, kamida bitta qutida 2 ta bo'ladi. So'rov faqat shu sinf uchun natija beradi, isbot emas; model esa umumiy mulohazani ko'rsatadi.", 'Принцип Дирихле: если n+1 предмет разложить по n ящикам, хотя бы в одном окажется 2. Опрос даёт результат только для этого класса и не является доказательством; модель показывает общее рассуждение.']),

  mc('s2-v1-237', '2.3.7', { ...E, d: 3, src: ['sinfoniyeva'] },
    ["9 ta bir xil ko'rinishdagi tangadan bittasi soxta va boshqalardan yengil. Toshsiz pallali tarozida eng kamida necha marta tortib, soxta tangani albatta topish mumkin?", 'Из 9 одинаковых на вид монет одна фальшивая и легче остальных. За какое наименьшее число взвешиваний на чашечных весах без гирь можно наверняка найти фальшивую?'],
    [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']], 'B',
    ["Tangalarni 3 + 3 + 3 guruhga bo'lamiz. 1-tortish: ikki guruhni solishtirib, yengil guruhni (yoki tortilmagan uchinchisini) aniqlaymiz. 2-tortish: shu guruhdan 1 + 1 ni solishtiramiz. Har tortishda imkoniyatlar 3 marta kamayadi: 9 → 3 → 1.", 'Делим монеты на 3 + 3 + 3. 1-е взвешивание: сравниваем две группы и находим лёгкую (или невзвешенную третью). 2-е: из неё сравниваем 1 + 1. Каждое взвешивание сокращает варианты в 3 раза: 9 → 3 → 1.']),

  mc('s2-v1-239', '2.3.9', { ...E, d: 3, src: ['sinfoniyeva'] },
    ["Ali, Vali va G'ani — biri tor, biri dutor, biri doira chaladi. Ali tor ham, doira ham chalmaydi. Vali tor chalmaydi. Kim tor chaladi?", 'Али, Вали и Гани: один играет на таре, другой на дутаре, третий на дойре. Али не играет ни на таре, ни на дойре. Вали не играет на таре. Кто играет на таре?'],
    [["Ali", 'Али'], ['Vali', 'Вали'], ["G'ani", 'Гани'], ["Aniqlab bo'lmaydi", 'Определить нельзя']], 'C',
    ["Matritsa (jadval) metodi: Ali — tor «−», doira «−» → dutor. Vali — tor «−», dutor band → doira. G'ani — tor. Jadvalda har satr va ustunda bittadan «+» bo'lishi (o'zaro bir qiymatli moslik) yechimni kafolatlaydi.", 'Матричный (табличный) метод: Али — тар «−», дойра «−» → дутар. Вали — тар «−», дутар занят → дойра. Гани — тар. Наличие ровно одного «+» в каждой строке и столбце (взаимно однозначное соответствие) гарантирует решение.']),
];
