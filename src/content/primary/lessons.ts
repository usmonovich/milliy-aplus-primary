// Lessons: one per specification block. Section 1 has separate Uzbek and
// Russian lessons (different grammar and methodology); sections 2–3 are shared.
// Structure follows the lesson format: goal → theory → visual → example →
// classroom application → typical mistake → practice (from the practice pool).
import type { Lesson, LessonBlock, LevelId, Locale } from '../../core/types';
import { tx, type Tx } from './build';

const b = (kind: LessonBlock['kind'], body: Tx, items?: Tx[], widget?: string): LessonBlock => ({
  kind, body: tx(body), items: items?.map(tx), widget,
});

function lesson(id: string, lang: Locale | 'both', block: string, level: LevelId, minutes: number, title: Tx, codes: string[], src: string[], blocks: LessonBlock[]): Lesson {
  return { id, lang, block, section: Number(block[0]), level, minutes, title: tx(title), codes, sourceIds: src, blocks };
}

export const LESSONS: Lesson[] = [
  /* =================== Section 1 · Uzbek =================== */
  lesson('L1.1-uz', 'uz', '1.1', 'F', 12, "Tovush va harf, fonetik hodisalar, imlo", ['1.1.1', '1.1.2', '1.1.3', '1.1.4', '1.1.5', '1.1.6', '1.1.7'], ['qosimova2022', 'sayfullayeva', 'imlo'], [
    b('goal', "Tovush va harfni farqlash, fonetik hodisalar va asosiy imlo qoidalarini o'quvchiga tushuntira olish."),
    b('theory', "Tovush — eshitiladi va talaffuz qilinadi; harf — tovushning yozuvdagi belgisi. Lotin yozuvidagi o'zbek alifbosida 29 harf va tutuq belgisi bor; sh, ch, ng harf birikmalari bitta tovushni ifodalaydi. Unlilar: a, e, i, o, u, o'.", [
      "Tovush almashishi: o'rtoq → o'rtog'im (q → g'), ko'ylak → ko'ylagi (k → g).",
      "Tovush tushishi: o'g'il → o'g'li, shahar → shahri, burun → burni.",
      "Tutuq belgisi: ma'no farqlaydi (sher – she'r), s va h ni ajratadi (Is'hoq).",
      "-ga qo'shimchasi: k/g → -ka (terakka), q/g' → -qa (qishloqqa), boshqalar → -ga.",
      "Juft so'zlar chiziqcha bilan: ota-ona, katta-kichik; qo'shma so'zlar qo'shib: toshbaqa, kungaboqar.",
    ]),
    b('visual', "Tovush modeli: har bir tovushga bitta fishka. «Shamol» → 6 harf, 5 fishka.", undefined, 'soundmodel'),
    b('example', "Ko'chirish: bo'g'inga asoslanadi; bitta unli harf satrda yolg'iz qolmaydi (o-na emas), sh/ch/ng bo'linmaydi: qish-loq, o'qi-tuv-chi."),
    b('classroom', "Qoidani tayyor holda berish o'rniga juftliklarni kuzatish (o'rtoq – o'rtog'im, qishloq – qishlog'i) va o'quvchining o'zi qonuniyat topishini tashkil eting; keyin nutqiy vaziyatda qo'llating."),
    b('mistake', "Tipik xato: harflar sonini tovushlar soniga tenglashtirish; shevadagi talaffuzni «xato» deb tanbeh berish. Sheva — adabiy tildan farqli nutq shakli: uni qiyoslab, adabiy shaklni muloqotda mashq qildiring."),
  ]),
  lesson('L1.2-uz', 'uz', '1.2', 'C', 14, "Leksika, so'z tarkibi, so'z turkumlari va sintaksis", ['1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5', '1.2.6', '1.2.7', '1.2.8'], ['sayfullayeva', 'jamolxonov', 'qosimova2022'], [
    b('goal', "Leksik ma'nolar, morfemika, so'z turkumlari va gap qurilishini yoshga mos usullarda o'rgata olish."),
    b('theory', "Leksik ma'no qatlamlari va so'z tarkibi:", [
      "Omonim — shakli bir, ma'nosi boshqa (ot: hayvon / ism). Sinonim — ma'nodosh. Antonim — zid ma'noli. Paronim — talaffuzi o'xshash (shox – shoh).",
      "O'zak — umumiy ma'noli qism; so'z yasovchi qo'shimcha yangi so'z hosil qiladi (ish → ishchi), shakl yasovchi — shaklni o'zgartiradi (ish → ishlar).",
      "Mustaqil so'z turkumlari: ot, sifat, son, olmosh, ravish, fe'l. Yordamchilar: ko'makchi, bog'lovchi, yuklama. Alohida: modal, undov, taqlid so'zlar.",
      "So'z birikmasi narsani nomlaydi (yashil daraxt); gap tugallangan fikr bildiradi va grammatik asosga ega (daraxt yashillandi).",
      "Undalma va uyushiq bo'laklar vergul bilan ajratiladi.",
    ]),
    b('example', "«Chiroyli gul» — sifat (qanday gul?); «chiroyli yozadi» — ravish vazifasida (qanday qilib yozadi?). So'z turkumi gapdagi so'rog'i va vazifasi bilan aniqlanadi."),
    b('classroom', "Grammatikani nutqiy vaziyatda o'rgating: «Rost yoki yolg'on» o'yinida bo'lishsiz fe'l, rolli o'yinda zamon shakllari, bog'lovchilarni almashtirib ma'no o'zgarishini kuzatish."),
    b('mistake', "Tipik xato: qoidani yodlatib, uni nutqda qo'llatmaslik. Natija — o'quvchi yozma mashqda to'g'ri, suhbatda noto'g'ri qo'llaydi."),
  ]),
  lesson('L1.3-uz', 'uz', '1.3', 'B', 14, "Ona tili metodikasi: savod o'rgatish va vaziyatli keyslar", ['1.3.1', '1.3.2', '1.3.3', '1.3.4', '1.3.5', '1.3.6', '1.3.7', '1.3.8'], ['qosimova2022', 'qosimova2009', 'gulomova2010'], [
    b('goal', "Savod o'rgatish bosqichlari va real dars keyslarida eng mos metodni tanlay olish."),
    b('theory', "Savod o'rgatish tahlil-tarkib metodiga asoslanadi: gap → so'z → bo'g'in → tovush (tahlil) va tovushdan bo'g'in, so'z tuzish (tarkib). Davrlar: tayyorlov (alifbegacha), alifbo, alifbodan keyingi.", [
      "Fonematik eshitish: minimal juftliklar (non – nom, tol – tor).",
      "Yozuv gigiyenasi: to'g'ri o'tirish, ruchka ushlash, qisqa mashqlar, barmoq mashqlari.",
      "Lug'at ishi usullari: ko'rgazmali, sinonim/antonim orqali, kontekst orqali, ta'rif berish.",
      "Yozma ishlar: diktant (so'zma-so'z), bayon (tayyor matnni qayta hikoya qilish), insho (o'z fikri).",
      "Grafik organayzerlar: Venn (solishtirish), Baliq skeleti (sabab-oqibat), Klaster (bog'liqlik), Insert (matnni belgilab o'qish).",
    ]),
    b('example', "Disleksiya belgisi bor o'quvchi uchun ko'p sensorli (ko'rish + eshitish + harakat) usul: harfni qumda chizish, plastilindan yasash, aytib turish."),
    b('classroom', "Agar o'quvchida disgrafiya/disleksiya belgilari bo'lsa, o'qituvchi tashxis qo'ymaydi: kuzatuv natijalarini yozib, ota-ona bilan kelishib, logoped yoki psixologga murojaat qiladi va darsda qo'llab-quvvatlovchi usullarni qo'llaydi."),
    b('mistake', "Tipik xato: harf o'rgatishni tovush tahlilidan oldin boshlash; yozuvda charchagan bolaga ko'proq yozuv berish."),
  ]),
  lesson('L1.4-uz', 'uz', '1.4', 'B+', 13, "O'qish savodxonligi, badiiy asar tahlili va PIRLS", ['1.4.1', '1.4.2', '1.4.3', '1.4.4', '1.4.5'], ['matchonov2021', 'xalikov2025', 'pirls', 'pirlsuz2020'], [
    b('goal', "O'qish malakasi sifatlari va PIRLS jarayonlari bo'yicha topshiriq tuza olish."),
    b('theory', "O'qish malakasining sifatlari: to'g'ri, tez (ravon), ongli, ifodali. PIRLS matnni tushunishning 4 jarayonini baholaydi:", [
      "1. Aniq ifodalangan ma'lumotni topish.",
      "2. Oddiy xulosa chiqarish.",
      "3. Fikr va ma'lumotlarni talqin qilish va integratsiya.",
      "4. Mazmun va matn elementlarini baholash.",
    ], 'pirls'),
    b('example', "«Qahramon qaysi kuni qaytdi?» (javob matnda) → 1-jarayon. «Nega u xafa bo'ldi?» (sabab bitta joyda, ochiq aytilmagan) → 2. «Uch epizod asosida qahramon xarakteri haqida xulosa» → 3. «Muallif qaysi maqsadda shu so'zni tanlagan?» → 4."),
    b('classroom', "Masal va ertakda ramziy ma'noni ochib, uni hayotiy vaziyatga ko'chiruvchi savollar bering. Kitob tanlashda «besh barmoq» usulini o'rgating."),
    b('mistake', "Tipik xato: faqat 1-jarayon savollarini berish. PIRLS'da yuqori darajali jarayonlar (3–4) muhim ulushga ega."),
  ]),

  /* =================== Section 1 · Russian =================== */
  lesson('L1.1-ru', 'ru', '1.1', 'F', 12, 'Звуки и буквы, ударение, орфография', ['1.1.1', '1.1.2', '1.1.3', '1.1.4', '1.1.5', '1.1.6', '1.1.7'], ['spec2026', 'ru-lvov', 'ru-ramzaeva'], [
    b('goal', 'Уметь объяснять ученикам различие звука и буквы, редукцию гласных, подвижное ударение и основные орфограммы.'),
    b('theory', 'Звук слышим и произносим, букву видим и пишем. В русском алфавите 33 буквы; «ь» и «ъ» звуков не обозначают. Буквы е, ё, ю, я в начале слова и после гласных, ь, ъ обозначают два звука.', [
      'Безударные гласные (редукция) проверяются ударением: вода — вОды.',
      'Парные согласные на конце и перед глухими проверяются гласным: дуб — дубы.',
      'Ударение разноместное и подвижное: рукА — рУки.',
      '«ъ» — после приставки на согласный перед е, ё, ю, я (подъезд); «ь» — в корне перед е, ё, ю, я, и (вьюга, ручьи).',
      'Предлог пишется раздельно, приставка — слитно: на столе — наступил.',
    ]),
    b('visual', 'Звуковая модель: фишка на каждый звук. «Юла» → 3 буквы, 4 фишки [й у л а].', undefined, 'soundmodel'),
    b('example', 'Перенос: по слогам; нельзя оставлять одну букву; ь, ъ, й не отрываются от предыдущей буквы; двойные согласные разделяются: кас-са.'),
    b('classroom', 'В классах с интерференцией родного языка сравнивайте пары на слух (звонИт — звОнит), используйте орфоэпический словарик и речевые ситуации («диктор новостей»).'),
    b('mistake', 'Типичная ошибка: опора на написание вместо звучания при звуковом анализе; замечания вместо системной работы над произношением.'),
  ]),
  lesson('L1.2-ru', 'ru', '1.2', 'C', 14, 'Лексика, состав слова, части речи и синтаксис', ['1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5', '1.2.6', '1.2.7', '1.2.8'], ['ru-lvov', 'ru-ramzaeva'], [
    b('goal', 'Уметь объяснять лексические значения, морфемный состав, падежную систему и строение предложения с учётом возраста.'),
    b('theory', 'Ключевые понятия:', [
      'Омонимы (ключ — от двери / родник), синонимы, антонимы, паронимы (одеть — надеть), фразеологизмы (бить баклуши).',
      'Морфемы: приставка, корень, суффикс, окончание. Однокоренные слова — общий корень и общее значение.',
      'Шесть падежей; безударное окончание проверяется «словом-помощником» того же склонения.',
      'Служебные части речи: предлоги, союзы, частицы; «не» с глаголами пишется раздельно.',
      'Словосочетание называет, предложение сообщает и имеет грамматическую основу; обращение и однородные члены выделяются/разделяются запятыми.',
    ]),
    b('example', '«Бег» — существительное со значением действия: вопрос «что?», изменяется по падежам. Часть речи определяется по вопросу и грамматическим признакам, а не только по значению.'),
    b('classroom', 'Грамматика усваивается через речевые ситуации и наблюдение: пары «знал — не знал», «рукА — рУки», «водитель — водный» (омонимия корней).'),
    b('mistake', 'Типичная ошибка: выделение морфем без опоры на значение («по-дснеж-ник»). Разбор начинается с корня через подбор родственных слов.'),
  ]),
  lesson('L1.3-ru', 'ru', '1.3', 'B', 14, 'Методика обучения грамоте и ситуационные кейсы', ['1.3.1', '1.3.2', '1.3.3', '1.3.4', '1.3.5', '1.3.6', '1.3.7', '1.3.8'], ['ru-lvov', 'ru-ramzaeva'], [
    b('goal', 'Уметь выбирать метод в типичных ситуациях урока русского языка.'),
    b('theory', 'Обучение грамоте ведётся звуковым аналитико-синтетическим методом: от звука к букве; периоды — добукварный, букварный, послебукварный.', [
      'Фонематический слух: минимальные пары (дом — том, бочка — почка).',
      'Гигиена письма: посадка, захват ручки, чередование письма и пальчиковой гимнастики.',
      'Семантизация: наглядная, через синоним/антоним, через контекст, толкование, словообразование.',
      'Письменные работы: диктант, изложение (пересказ текста), сочинение (собственный текст).',
      'Графические организаторы: Венн (сравнение), «рыбий скелет» (причины), кластер (связи), «Инсерт» (пометки на полях).',
    ]),
    b('example', 'Для ученика с признаками дислексии — мультисенсорный подход: обвести букву на песке, вылепить, проговорить звук.'),
    b('classroom', 'Учитель не ставит диагноз «дисграфия/дислексия»: фиксирует наблюдения, обсуждает с родителями и направляет к логопеду/психологу, а на уроке использует поддерживающие приёмы.'),
    b('mistake', 'Типичная ошибка: введение буквы до звукового анализа; увеличение объёма письма уставшему ребёнку.'),
  ]),
  lesson('L1.4-ru', 'ru', '1.4', 'B+', 13, 'Читательская грамотность, анализ произведения и PIRLS', ['1.4.1', '1.4.2', '1.4.3', '1.4.4', '1.4.5'], ['pirls', 'ru-lvov'], [
    b('goal', 'Уметь составлять задания по качествам навыка чтения и процессам понимания PIRLS.'),
    b('theory', 'Качества навыка чтения: правильность, беглость, осознанность, выразительность. Процессы понимания PIRLS:', [
      '1. Поиск явно заданной информации.',
      '2. Формулирование прямых выводов.',
      '3. Интерпретация и интеграция идей и информации.',
      '4. Анализ и оценка содержания и элементов текста.',
    ], 'pirls'),
    b('example', '«Где жил герой?» (прямо в тексте) → 1. «Почему герой расстроился?» (причина не названа, но следует из одного места) → 2. «Какой характер у героя по трём эпизодам?» → 3. «Зачем автор использовал это сравнение?» → 4.'),
    b('classroom', 'В басне раскрывайте аллегорию и переносите её в жизнь; при выборе книги учите методу «пяти пальцев».'),
    b('mistake', 'Типичная ошибка: только вопросы уровня 1. В PIRLS значимая доля заданий относится к процессам 3–4.'),
  ]),

  /* =================== Section 2 · shared =================== */
  lesson('L2.1', 'both', '2.1', 'C', 15, ['Sonlar, amallar, kasrlar va ma\'lumotlar', 'Числа, действия, дроби и данные'], ['2.1.1', '2.1.2', '2.1.3', '2.1.4', '2.1.5', '2.1.6', '2.1.7', '2.1.8', '2.1.9', '2.1.10', '2.1.11'], ['bikbayeva', 'jumayev2020', 'tojiyev2012', 'timss'], [
    b('goal', ["Son tushunchasi, xona qiymati, amallar ma'nosi va kasrlarni ko'rgazmali o'rgata olish.", 'Уметь наглядно обучать понятию числа, разрядному значению, смыслу действий и дробям.']),
    b('theory', ['Asosiy tushunchalar:', 'Ключевые понятия:'], [
      ["Sanoq tamoyillari: barqaror tartib, birga-bir moslik, kardinallik (oxirgi son — miqdor), tartibning ahamiyatsizligi.", 'Принципы счёта: устойчивый порядок, взаимно однозначное соответствие, кардинальность (последнее число — количество), независимость от порядка.'],
      ["O'nlik pozitsion sistema: raqam qiymati o'rniga bog'liq (111). Rim sistemasi nopozitsion: X har doim 10; ayirish: IV, IX, XL, XC.", 'Десятичная позиционная система: значение цифры зависит от места (111). Римская — непозиционная: X всегда 10; вычитание: IV, IX, XL, XC.'],
      ["Konsentrlar: 10, 100, 1000, ko'p xonali sonlar — har konsentrda oldingi bilim yangi sonlarga ko'chiriladi.", 'Концентры: 10, 100, 1000, многозначные числа — в каждом знания переносятся на новые числа.'],
      ["Bo'lishning ikki ma'nosi: teng qismlarga va mazmuniga ko'ra. Qoldiq < bo'luvchi.", 'Два смысла деления: на равные части и по содержанию. Остаток < делителя.'],
      ["Bo'linish belgilari: 2 — juft oxirgi raqam; 3 va 9 — raqamlar yig'indisi; 5 — 0 yoki 5; 10 — 0.", 'Признаки делимости: на 2 — чётная последняя цифра; на 3 и 9 — сумма цифр; на 5 — 0 или 5; на 10 — 0.'],
    ]),
    b('visual', ['Xonalar jadvali: raqam kartochkalarini joylashtiring, bo\'sh xonaga nol qo\'ying.', 'Таблица разрядов: разместите карточки цифр, в пустой разряд поставьте ноль.'], undefined, 'placevalue'),
    b('visual', ['Kasr tasmalari: bir xil butunni 2, 3, 4, … bo\'lakka bo\'lib solishtiring.', 'Полоски дробей: делите одно и то же целое на 2, 3, 4, … частей и сравнивайте.'], undefined, 'fractions'),
    b('example', ["47 + 8: o'nlikkacha to'ldirish 47 + 3 = 50, 50 + 5 = 55. 23 · 4 = 20 · 4 + 3 · 4 = 92 (yuza modeli). 25 · 7 · 4 = (25 · 4) · 7 = 700.", '47 + 8: дополнение до десятка 47 + 3 = 50, 50 + 5 = 55. 23 · 4 = 20 · 4 + 3 · 4 = 92 (модель площади). 25 · 7 · 4 = (25 · 4) · 7 = 700.']),
    b('classroom', ["Matnli masalada kesmali (grafik) model chizdiring; har bir masalaga teskari masala tuzdiring. Piktogrammada avval kalitni (1 belgi = ?) o'qitish.", 'В текстовой задаче стройте схему-отрезок; к каждой задаче составляйте обратную. В пиктограмме сначала читайте ключ (1 значок = ?).']),
    b('mistake', ["Tipik xatolar: «ko'p» so'ziga qarab qo'shish; 1/5 > 1/3 deb o'ylash; xona qiymatini e'tiborsiz qoldirish (23 · 4 = 812).", 'Типичные ошибки: складывать из-за слова «больше»; считать 1/5 > 1/3; игнорировать разрядное значение (23 · 4 = 812).']),
  ]),
  lesson('L2.2', 'both', '2.2', 'C+', 14, ['Geometriya va kattaliklar', 'Геометрия и величины'], ['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5', '2.2.6', '2.2.7', '2.2.8', '2.2.9', '2.2.10'], ['tojiyev2012', 'jumayev2020'], [
    b('goal', ["Geometrik tushunchalar va o'lchov birliklarini amaliy-ko'rgazmali o'rgata olish.", 'Уметь практически и наглядно обучать геометрическим понятиям и единицам измерения.']),
    b('theory', ['Formulalar va nisbatlar:', 'Формулы и соотношения:'], [
      ["Kesma — ikki uchli; nur — boshi bor, bir tomonga cheksiz; to'g'ri chiziq — ikki tomonga cheksiz.", 'Отрезок — два конца; луч — есть начало, бесконечен в одну сторону; прямая — бесконечна в обе стороны.'],
      ["To'g'ri to'rtburchak: P = 2(a + b), S = a · b. Kvadrat — to'g'ri to'rtburchakning xususiy holi.", 'Прямоугольник: P = 2(a + b), S = a · b. Квадрат — частный случай прямоугольника.'],
      ['Kub: 12 qirra, 8 uch, 6 yoq; to\'la sirt 6a², hajm a³. To\'g\'ri burchakli parallelepiped: V = a · b · c.', 'Куб: 12 рёбер, 8 вершин, 6 граней; полная поверхность 6a², объём a³. Прямоугольный параллелепипед: V = a · b · c.'],
      ['1 m = 10 dm = 100 sm; 1 dm² = 100 sm²; 1 l = 1 dm³ = 1000 sm³; 1 m³ = 1000 dm³; 1 t = 1000 kg.', '1 м = 10 дм = 100 см; 1 дм² = 100 см²; 1 л = 1 дм³ = 1000 см³; 1 м³ = 1000 дм³; 1 т = 1000 кг.'],
      ['Aylana — chiziq, doira — aylana bilan chegaralangan tekislik qismi.', 'Окружность — линия, круг — часть плоскости, ограниченная окружностью.'],
    ]),
    b('visual', ["Kub yoyilmasi: 6 ta kvadrat; buklaganda kub hosil bo'ladi.", 'Развёртка куба: 6 квадратов; при сгибании получается куб.'], undefined, 'cubenet'),
    b('example', ["1 dm² = 10 sm · 10 sm = 100 sm² — 10 emas. Chiziqli nisbatni yuzaga ko'chirish — eng ko'p uchraydigan xato.", '1 дм² = 10 см · 10 см = 100 см² — не 10. Перенос линейного отношения на площадь — самая частая ошибка.']),
    b('classroom', ["Burchak turini qog'oz modeli bilan turli holatda tekshiring; kub karkasini cho'p va plastilindan yasating; yuzani kvadrat birliklar bilan qoplab o'lchang.", 'Проверяйте вид угла бумажной моделью в разных положениях; делайте каркас куба из палочек и пластилина; измеряйте площадь, покрывая фигуру единичными квадратами.']),
    b('mistake', ["Perimetr va yuzani chalkashtirish; burchak kattaligini tomonlar uzunligiga bog'lash; ko'rinmas qirralarni sanamaslik.", 'Путать периметр и площадь; связывать величину угла с длиной сторон; не считать невидимые рёбра.']),
  ]),
  lesson('L2.3', 'both', '2.3', 'B', 15, ['Mantiqiy masalalar va yechish strategiyalari', 'Логические задачи и стратегии решения'], ['2.3.1', '2.3.2', '2.3.3', '2.3.4', '2.3.5', '2.3.6', '2.3.7', '2.3.8', '2.3.9'], ['sinfoniyeva', 'abduhalimov'], [
    b('goal', ["Nostandart masalalarni yechish strategiyalarini bilish va o'quvchiga o'rgata olish.", 'Знать стратегии решения нестандартных задач и уметь им обучать.']),
    b('theory', ['Strategiyalar:', 'Стратегии:'], [
      ["Venn diagrammasi: |A ∪ B| = |A| + |B| − |A ∩ B|.", 'Диаграмма Венна: |A ∪ B| = |A| + |B| − |A ∩ B|.'],
      ["Umumiy mulohazani bitta qarshi misol rad etadi.", 'Общее высказывание опровергается одним контрпримером.'],
      ["Imkoniyatlar daraxti: ko'paytirish qoidasi (3 · 2 · 1 = 6).", 'Дерево возможностей: правило произведения (3 · 2 · 1 = 6).'],
      ["Orqaga qaytish: teskari amallar teskari tartibda.", 'Обратный ход: обратные действия в обратном порядке.'],
      ["Eyler: toq darajali uchlar 0 yoki 2 ta bo'lsa — bir chiziqda chizish mumkin.", 'Эйлер: если нечётных вершин 0 или 2 — фигуру можно нарисовать одним росчерком.'],
      ["Dirixle: n qutiga n + 1 narsa → kamida bir qutida 2 ta; «eng yomon holat».", 'Дирихле: n + 1 предмет в n ящиках → хотя бы в одном 2; «худший случай».'],
      ["Tarozi: har tortishda 3 guruhga bo'lish (9 → 3 → 1). Quyish: holatlar jadvali.", 'Весы: каждое взвешивание — деление на 3 группы (9 → 3 → 1). Переливания: таблица состояний.'],
      ["Matritsa metodi: har satr va ustunda bitta «+».", 'Матричный метод: в каждой строке и столбце один «+».'],
    ]),
    b('visual', ["Venn diagrammasini sinab ko'ring: sonlarni kiriting, bo'laklar avtomatik hisoblanadi.", 'Попробуйте диаграмму Венна: введите числа — части вычисляются автоматически.'], undefined, 'venn'),
    b('example', ["Ali son o'yladi, +5, ×3, −4 → 41. Orqaga: (41 + 4) : 3 − 5 = 10.", 'Али задумал число, +5, ×3, −4 → 41. Обратно: (41 + 4) : 3 − 5 = 10.']),
    b('classroom', ["Avval o'quvchilar sinab ko'radi, so'ng strategiya nomlanadi va umumlashtiriladi; har masalada «Qanday tekshiramiz?» savoli.", 'Сначала ученики пробуют сами, затем стратегия называется и обобщается; к каждой задаче — вопрос «Как проверить?».']),
    b('mistake', ["Tartibsiz sanash; kesishmani ikki marta sanash; so'rov o'tkazishni isbot deb hisoblash.", 'Беспорядочный перебор; двойной учёт пересечения; считать опрос доказательством.']),
  ]),

  /* =================== Section 3 · shared =================== */
  lesson('L3.1', 'both', '3.1', 'C', 12, ["O'qituvchining kasbiy kompetensiyalari", 'Профессиональные компетенции учителя'], ['3.1.1', '3.1.2', '3.1.3', '3.1.4', '3.1.5'], ['kasbstandart', 'ibragimov', 'inklyuziv2022'], [
    b('goal', ["SMART-maqsad qo'yish, dars vaqtini taqsimlash va rivojlantiruvchi qayta aloqa bera olish.", 'Уметь ставить SMART-цели, распределять время урока и давать развивающую обратную связь.']),
    b('theory', ['SMART: aniq, o\'lchanadigan, erishiladigan, dolzarb, vaqt bilan cheklangan.', 'SMART: конкретная, измеримая, достижимая, значимая, ограниченная во времени.'], [
      ["Maqsad o'quvchi natijasini tavsiflaydi, o'qituvchi harakatini emas.", 'Цель описывает результат ученика, а не действие учителя.'],
      ["Dars tuzilmasi: qisqa tushuntirish → yo'naltirilgan mashq → mustaqil mashq → refleksiya.", 'Структура урока: короткое объяснение → направляемая практика → самостоятельная работа → рефлексия.'],
      ["O'sish mentaliteti: harakat va strategiyani maqtash, keyingi qadamni ko'rsatish.", 'Мышление роста: хвалить усилия и стратегию, указывать следующий шаг.'],
      ["Inklyuziya: to'siqlarni olib tashlash, assistiv vositalar, psixologik xavfsizlik.", 'Инклюзия: устранение барьеров, ассистивные средства, психологическая безопасность.'],
      ["Autorefleksiya: dalil → xulosa → rivojlanish maqsadi.", 'Саморефлексия: данные → вывод → цель развития.'],
    ]),
    b('example', ["«Dars oxirida o'quvchilarning kamida 80% i 10 ta misolni 5 daqiqada xatosiz yechadi» — SMART. «Ko'paytirishni yaxshi bilsin» — SMART emas.", '«К концу урока не менее 80% учеников за 5 минут без ошибок решат 10 примеров» — SMART. «Хорошо знать умножение» — не SMART.']),
    b('classroom', ["Har darsdan keyin 2 daqiqa: rejadagi natija va chiqish kartochkalarini solishtiring.", 'После каждого урока 2 минуты: сравните плановый результат с карточками выхода.']),
    b('mistake', ["«Barakalla, sen aqllisan» — qobiliyatni maqtash qat'iy mentalitetni kuchaytiradi.", '«Молодец, ты умный» — похвала способностей усиливает фиксированное мышление.']),
  ]),
  lesson('L3.2', 'both', '3.2', 'C+', 12, ['Kichik maktab yoshi psixologiyasi', 'Психология младшего школьника'], ['3.2.1', '3.2.2', '3.2.3', '3.2.4', '3.2.5'], ['goziyev', 'nishanova', 'karimova'], [
    b('goal', ["Yosh xususiyatlari va individual farqlarni hisobga olib qaror qabul qila olish.", 'Принимать решения с учётом возрастных особенностей и индивидуальных различий.']),
    b('theory', ['Asosiy qonuniyatlar:', 'Ключевые закономерности:'], [
      ["7 yosh inqirozi — normativ: «kattalik», mustaqillik ehtiyoji, injiqlik.", 'Кризис 7 лет — нормативный: потребность во «взрослости» и самостоятельности, капризы.'],
      ["Yetakchi faoliyat — o'quv faoliyati; o'yin muhimligicha qoladi.", 'Ведущая деятельность — учебная; игра остаётся важной.'],
      ["Ixtiyorsiz diqqat ustun; ixtiyoriy diqqat, xotira va tafakkur shakllanmoqda.", 'Преобладает непроизвольное внимание; произвольные внимание, память и мышление формируются.'],
      ["Adaptatsiya: xavfsizlik hissi, bashorat qilinadigan tartib, hamkorlik.", 'Адаптация: чувство безопасности, предсказуемый распорядок, сотрудничество.'],
      ["SEL: o'zini anglash, o'zini boshqarish, ijtimoiy anglash, munosabatlar, mas'uliyatli qaror.", 'SEL: самосознание, саморегуляция, социальная осведомлённость, отношения, ответственные решения.'],
    ]),
    b('example', ["Sekin ishlaydigan sezgir o'quvchi: tayyorlanish vaqti, avval yozma reja, iliq qayta aloqa.", 'Медлительный чувствительный ученик: время на подготовку, сначала письменный план, тёплая обратная связь.']),
    b('classroom', ["Faoliyatni 10–15 daqiqalik bosqichlarga bo'ling, harakat va ko'rgazmalilikdan foydalaning.", 'Делите деятельность на этапы по 10–15 минут, используйте движение и наглядность.']),
    b('mistake', ["O'qituvchi psixologik tashxis qo'ymaydi: kuzatadi, ota-ona va psixolog bilan hamkorlik qiladi.", 'Учитель не ставит психологических диагнозов: наблюдает и сотрудничает с родителями и психологом.']),
  ]),
  lesson('L3.3', 'both', '3.3', 'B', 12, ["Zamonaviy ta'lim texnologiyalari", 'Современные образовательные технологии'], ['3.3.1', '3.3.2', '3.3.3', '3.3.4', '3.3.5'], ['azizxojayeva', 'gafforova'], [
    b('goal', ["Maqsadga mos interfaol texnologiyani tanlay olish va darsni natija bo'yicha tahlil qilish.", 'Уметь выбирать интерактивную технологию под цель и анализировать урок по результату.']),
    b('theory', ['Texnologiyalar:', 'Технологии:'], [
      ["4K: tanqidiy fikrlash, kreativlik, kollaboratsiya, kommunikatsiya.", '4К: критическое мышление, креативность, коллаборация, коммуникация.'],
      ["FSMU: Fikr — Sabab — Misol — Umumlashtirish. Keys-stadi: real vaziyat tahlili. Aqliy hujum: tanqidsiz g'oya yig'ish.", 'FSMU: Мнение — Причина — Пример — Обобщение. Кейс-стади: анализ реальной ситуации. Мозговой штурм: сбор идей без критики.'],
      ["Loyihaviy ta'lim: real muammo → izlanish → mahsulot → taqdimot.", 'Проектное обучение: реальная проблема → исследование → продукт → презентация.'],
      ["Differensiatsiya: bir maqsad, turli yo'l va yordam darajasi.", 'Дифференциация: одна цель, разные пути и уровни поддержки.'],
      ["Raqamli gigiyena: qisqa ekran bosqichlari, tanaffus, manbani tekshirish.", 'Цифровая гигиена: короткие экранные этапы, перерывы, проверка источника.'],
    ]),
    b('example', ["«Maktabimizda suv sarfi» loyihasi: o'lchash, diagramma, taklif, taqdimot.", 'Проект «Расход воды в школе»: измерения, диаграмма, предложения, презентация.']),
    b('classroom', ["Dars tahlilida birinchi savol: o'quvchilar maqsadga erishganini qaysi dalil ko'rsatadi?", 'Первый вопрос анализа урока: какие свидетельства показывают, что ученики достигли цели?']),
    b('mistake', ["Texnologiyani maqsadsiz qo'llash; «kuchsiz/kuchli» doimiy guruhlar.", 'Применять технологию без цели; постоянные группы «слабых/сильных».']),
  ]),
  lesson('L3.4', 'both', '3.4', 'A', 15, ['Metodik moslashuvchanlik va amaliy keyslar', 'Методическая гибкость и практические кейсы'], ['3.4.1', '3.4.2', '3.4.3', '3.4.4', '3.4.5', '3.4.6', '3.4.7'], ['spec2026', 'tojiyev2022', 'karimova'], [
    b('goal', ["Kutilmagan vaziyatlarda dars maqsadini saqlagan holda usulni tezkor o'zgartira olish.", 'Быстро менять способ работы в неожиданной ситуации, сохраняя цель урока.']),
    b('theory', ['Qaror qabul qilish algoritmi:', 'Алгоритм принятия решения:'], [
      ["1) Dalil: nima bo'lyapti (kim, qancha, qaysi bosqichda)?", '1) Данные: что происходит (кто, сколько, на каком этапе)?'],
      ["2) Sabab: bilim bo'shlig'i, usul, charchoq yoki munosabat?", '2) Причина: пробел в знаниях, способ, утомление или отношения?'],
      ["3) Maqsadni saqlagan holda usulni o'zgartirish.", '3) Изменить способ, сохраняя цель.'],
      ["4) Tekshirish: o'zgarish ishladimi?", '4) Проверка: сработало ли изменение?'],
      ["Bulling: to'xtatish → himoya → alohida suhbat → hamkorlik → profilaktika. Tibbiy holat: xavfsizlik → tibbiyot xodimi → xabardor qilish.", 'Буллинг: остановить → защитить → отдельная беседа → сотрудничество → профилактика. Медицинская ситуация: безопасность → медработник → информирование.'],
    ]),
    b('example', ["Guruhda 2 kishi gapiradi, qolganlar jim → «O'yla — juftlash — bo'lish» va rollar.", 'В группе говорят двое, остальные молчат → «Думай — объединяйся — делись» и роли.']),
    b('classroom', ["Teacher Simulator'dagi vaziyatlarni yeching: u yerda bir nechta oqilona strategiyalar va ularning shartlari ko'rsatiladi.", 'Решайте ситуации в Teacher Simulator: там показаны несколько разумных стратегий и условия их применения.']),
    b('mistake', ["Rejani har qanday holatda saqlash; xuddi shu tushuntirishni balandroq takrorlash; tibbiy vaziyatda o'zi davolashga urinish.", 'Держаться плана любой ценой; повторять то же объяснение громче; пытаться лечить самому в медицинской ситуации.']),
  ]),
  lesson('L3.5', 'both', '3.5', 'B', 11, ['Tarbiya va sinf jamoasini boshqarish', 'Воспитание и управление классом'], ['3.5.1', '3.5.2', '3.5.3', '3.5.4'], ['tarbiya2021', 'kuronov'], [
    b('goal', ["Ijobiy sinf muhiti va ota-onalar bilan nizosiz hamkorlikni tashkil eta olish.", 'Создавать позитивный климат класса и бесконфликтное сотрудничество с родителями.']),
    b('theory', ['Tamoyillar:', 'Принципы:'], [
      ["Sinf qoidalarini o'quvchilar bilan birga ishlab chiqish — egalik hissi.", 'Правила класса вырабатываются вместе с учениками — чувство причастности.'],
      ["Ota-ona bilan muloqot: faol tinglash, dalillar, umumiy maqsad, keyingi qadam.", 'Общение с родителями: активное слушание, доказательства, общая цель, следующий шаг.'],
      ["Qadriyatlar muhokama va amaliy tajriba orqali shakllanadi.", 'Ценности формируются через обсуждение и практический опыт.'],
      ["To'garak: ixtiyoriylik, qiziqish, natijani namoyish etish.", 'Кружок: добровольность, интерес, демонстрация результата.'],
    ]),
    b('example', ["Norozi ota-ona: tinglash → ish namunalari va mezonlar → birgalikdagi reja → keyingi uchrashuv.", 'Недовольный родитель: выслушать → образцы работ и критерии → совместный план → следующая встреча.']),
    b('classroom', ["Navbatma-navbat almashadigan vazifalar va hamkorlik o'yinlari jamoani birlashtiradi.", 'Сменяемые поручения и игры на сотрудничество сплачивают коллектив.']),
    b('mistake', ["Natijalar reytingini ochiq ilish; bahoni bosim ostida o'zgartirish.", 'Открытые рейтинги результатов; изменение оценки под давлением.']),
  ]),
  lesson('L3.6', 'both', '3.6', 'B+', 13, ['Kriterial baholash va pedagogik diagnostika', 'Критериальное оценивание и педагогическая диагностика'], ['3.6.1', '3.6.2', '3.6.3', '3.6.4'], ['kriterial2023', 'pardayeva'], [
    b('goal', ["Formativ va summativ baholashni rejalashtirish, rubrika va deskriptor tuza olish.", 'Планировать формативное и суммативное оценивание, составлять рубрики и дескрипторы.']),
    b('theory', ['Baholash turlari:', 'Виды оценивания:'], [
      ["Formativ — jarayonda, o'qitishni moslashtirish uchun (chiqish kartochkasi, svetofor, savol-javob).", 'Формативное — в процессе, для корректировки обучения (карточка выхода, светофор, опрос).'],
      ["Summativ — bo'lim/chorak yakunida (BSB, ChSB).", 'Суммативное — по итогам раздела/четверти (СОР, СОЧ).'],
      ["Mezon — nimani baholaymiz; deskriptor — kuzatiladigan harakat tavsifi; rubrika — mezonlar va darajalar jadvali.", 'Критерий — что оцениваем; дескриптор — описание наблюдаемого действия; рубрика — таблица критериев и уровней.'],
      ["Shaffoflik: mezonlar oldindan ma'lum; obyektivlik: hammaga bir xil rubrika.", 'Прозрачность: критерии известны заранее; объективность: единая рубрика для всех.'],
      ["Korreksiya: xato turini aniqlash → maqsadli qayta o'qitish → vaqt o'tib qayta tekshirish.", 'Коррекция: определить тип ошибки → целевое повторное обучение → повторная проверка спустя время.'],
    ]),
    b('example', ["Deskriptor: «Hikoyada boshlanish, voqea rivoji va yakun bor». «Yaxshi yozadi» — deskriptor emas.", 'Дескриптор: «В рассказе есть начало, развитие событий и концовка». «Хорошо пишет» — не дескриптор.']),
    b('classroom', ["Har bir dars rejasida bitta formativ tekshiruv nuqtasini belgilang va uning natijasiga ko'ra keyingi qadamni oldindan rejalashtiring.", 'В каждом плане урока отметьте одну точку формативной проверки и заранее запланируйте шаг по её результату.']),
    b('mistake', ["Formativ natijani jurnal bahosiga aylantirish; mezonlarni sir saqlash.", 'Превращать формативный результат в отметку в журнале; держать критерии в секрете.']),
  ]),
];

export const lessonFor = (block: string, examLang: Locale) =>
  LESSONS.find((l) => l.block === block && (l.lang === 'both' || l.lang === examLang));
