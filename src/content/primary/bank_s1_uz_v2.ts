// Section 1 (Uzbek exam language) — Ona tili va o'qish savodxonligi metodikasi,
// mock variant 2. Written in Uzbek against the official Uzbek table of the
// specification; not a translation of the Russian items.
import { match, mc, open } from './build';
import type { Question } from '../../core/types';

const U = { lang: 'uz' as const, pool: 'exam' as const };
const S = ['spec2026', 'qosimova2022'];

export const BANK_S1_UZ_V2: Question[] = [
  mc('s1uz-v2-111', '1.1.1', { ...U, d: 2, src: S },
    "Savod o'rgatishda so'zning tovush modeli (sxemasi) qachon tuziladi?",
    [
      "Faqat barcha harflar o'rganib bo'lingandan keyin.",
      "So'z harflar bilan yozilishidan oldin: avval so'z eshitiladi, tovushlar ketma-ket ajratiladi va fishkalar bilan modellashtiriladi.",
      'Faqat 4-sinfda fonetik tahlil mavzusida.',
      'Faqat yozma diktant tekshirilayotganda.',
    ], 'B',
    "Savod o'rgatish «tovushdan harfga» tamoyiliga asoslanadi: o'quvchi avval jonli nutqdagi tovushlarni ajratadi va modellashtiradi, keyin ularni harf bilan belgilaydi. Shunda tovush (eshitiladi, aytiladi) va harf (ko'riladi, yoziladi) farqi anglanadi."),

  mc('s1uz-v2-112', '1.1.2', { ...U, d: 2, src: S },
    "O'zbek adabiy tilida nechta unli tovush bor?",
    [
      "6 ta: a, o, u, o', e, i",
      '5 ta: a, o, u, e, i',
      "8 ta: a, o, u, o', e, i, y, h",
      '10 ta',
    ], 'A',
    "O'zbek adabiy tilida 6 ta unli tovush bor: a, o, u, o', e, i. «y» va «h» — undoshlar. Unlilarni artikulyatsiyaga ko'ra (til oldi/orqa, lablangan/lablanmagan) farqlash talaffuz xatolarini aniqlashga yordam beradi."),

  mc('s1uz-v2-113', '1.1.3', { ...U, src: S },
    "2-sinf o'quvchilari so'zlarni satrdan satrga ko'chirdi. Qaysi ko'chirish qoidaga zid?",
    ['mak-tab', "o'qi-tuvchi", 'o-na', "bog'-cha"],
    'C',
    "Bitta unlidan iborat bo'g'in satr oxirida qoldirilmaydi va yangi satrga ham bir harf ko'chirilmaydi: «ona» so'zini ko'chirib bo'lmaydi. «mak-tab», «o'qi-tuvchi», «bog'-cha» — to'g'ri. Ko'chirish bo'g'inga ajratishga tayanadi, lekin har qanday bo'g'in chegarasi ko'chirish uchun yaramaydi."),

  mc('s1uz-v2-114', '1.1.4', { ...U, d: 2, src: S },
    "«sh», «ch», «ng» harf birikmalarini o'rgatishda qaysi vosita eng samarali?",
    [
      'Alifbo qo\'shig\'ini kuylash.',
      "Har bir harfni alohida chiroyli yozdirish.",
      "Harflar kassasida «s» va «h» ni bitta kartochkaga birlashtirib, «sh» bitta tovushni bildirishini so'zning tovush sxemasi bilan solishtirish.",
      'Harflarni alifbo tartibida yod oldirish.',
    ], 'C',
    "Harf birikmasi ikki harfdan iborat, lekin bitta tovushni ifodalaydi. Kartochkada birlashtirish va tovush sxemasi bilan solishtirish buni ko'rinadigan qiladi: «shamol» so'zining tovush sxemasida [sh] bitta katakda. Qo'shiq va yodlash tovush-harf munosabatini ochmaydi."),

  mc('s1uz-v2-115', '1.1.5', { ...U, src: [...S, 'azizxojayeva'] },
    "3-sinf o'quvchisi uyda sheva bilan gaplashadi va darsda ham shevaga xos talaffuzni qo'llaydi. Orfoepik xatoni bartaraf etishda qaysi yondashuv to'g'ri?",
    [
      "Shevada gapirgani uchun tanbeh berish va baho pasaytirish.",
      "Adabiy talaffuz namunasini (o'qituvchi nutqi, audio) eshittirish, sheva va adabiy shaklni qiyoslash, rasmiy vaziyatda adabiy shaklni qo'llashni mashq qildirish, shevani kamsitmaslik.",
      "E'tibor bermaslik: yoshi bilan o'tib ketadi.",
      'Faqat imlo qoidalarini yod oldirish.',
    ], 'B',
    "Sheva — xalq tilining qonuniy ko'rinishi; maktab vazifasi adabiy talaffuzni o'rgatish va vaziyatga mos qo'llashni shakllantirishdir. Namuna, qiyoslash va mashq natija beradi; kamsitish o'quvchini nutqdan qochiradi, imlo qoidasi talaffuzni o'rgatmaydi."),

  mc('s1uz-v2-116', '1.1.6', { ...U, d: 2, src: [...S, 'imlo'] },
    'Qaysi gapda bosh harf imlosi to\'g\'ri?',
    [
      "Biz Amir Temur ko'chasida yashaymiz.",
      'biz Toshkent shahriga bordik.',
      "Men Sirdaryo Daryosini ko'rdim.",
      'Bugun Dushanba.',
    ], 'A',
    "Atoqli ot (Amir Temur) bosh harf bilan, turdosh ot (ko'cha, daryo) kichik harf bilan yoziladi; gap bosh harf bilan boshlanadi; hafta kunlari nomlari kichik harf bilan yoziladi: dushanba."),

  mc('s1uz-v2-117', '1.1.7', { ...U, src: [...S, 'imlo'] },
    "Qaysi qatordagi barcha so'zlar to'g'ri yozilgan?",
    [
      'harkuni, hammavaqt, bordi keldi',
      'har-kuni, hamma-vaqt, bordikeldi',
      'harkuni, hamma vaqt, bordi-keldi',
      'har kuni, hamma vaqt, bordi-keldi',
    ], 'D',
    "«har», «hamma», «hech» so'zlari keyingi so'z bilan ajratib yoziladi: har kuni, hamma vaqt. Juft so'zlar chiziqcha bilan yoziladi: bordi-keldi."),

  mc('s1uz-v2-121', '1.2.1', { ...U, src: S },
    "O'qituvchi «ko'z» so'zining ko'p ma'noliligini o'rgatmoqda. Qaysi topshiriq eng mos?",
    [
      "Lug'atdan «ko'z» so'zining ta'rifini ko'chirib yozish.",
      "«Ko'z» so'zini besh marta yozish.",
      "«Ko'z» so'zining antonimini topish.",
      "«Odamning ko'zi», «bulog'ning ko'zi», «uzukning ko'zi» birikmalarini rasmlar bilan moslashtirish, ma'nolar o'rtasidagi o'xshashlikni topish va o'z gaplarini tuzish.",
    ], 'D',
    "Ko'p ma'noli so'zda ma'nolar o'xshashlik asosida bog'langan (ko'z — markaziy, muhim qism). Kontekstli birikmalar, ko'rgazma va o'z gapini tuzish ma'noni anglash va nutqda qo'llashni ta'minlaydi. Ko'chirish va takrorlash ma'no ustida ishlamaydi."),

  mc('s1uz-v2-122', '1.2.2', { ...U, src: S },
    "«Gulzorlarimizdan» so'zining tarkibi qaysi javobda to'g'ri ajratilgan?",
    ['gul-zor-lar-imiz-dan', 'gulzor-la-rimiz-dan', 'gul-zorlar-imizdan', 'gulz-or-lar-imiz-dan'],
    'A',
    "gul — o'zak, -zor — so'z yasovchi qo'shimcha (o'rin), -lar — ko'plik, -imiz — egalik (I shaxs ko'plik), -dan — chiqish kelishigi. Tahlilni «so'zdan o'zakka» yo'nalishida, har bir qo'shimchaning ma'nosini so'rab bajarish xatolarning oldini oladi."),

  mc('s1uz-v2-123', '1.2.3', { ...U, src: S },
    "O'quvchi «Ertaga kinoga bordim» gapini yozdi. Xato nimada va uni qanday tuzatish kerak?",
    [
      "Fe'l zamoni payt so'ziga mos emas: «ertaga» kelasi zamonni talab qiladi — «boraman».",
      "Gapda ega yo'q, «men» so'zini qo'shish kerak.",
      "Gap oxirida so'roq belgisi bo'lishi kerak.",
      "«Kino» so'zi noto'g'ri yozilgan.",
    ], 'A',
    "«Ertaga» kelasi zamonni bildiradi, «bordim» esa o'tgan zamon shakli. Ega fe'l qo'shimchasidan (-m) anglashiladi, shuning uchun xato emas. Fe'l zamonlarini vaqt chizig'i va payt so'zlari bilan bog'lab o'rgatish samarali."),

  mc('s1uz-v2-124', '1.2.4', { ...U, d: 4, src: S },
    "Qaysi gapda «bilan» so'zi ko'makchi vazifasida kelgan?",
    [
      'Olma bilan nok pishdi.',
      'Men ruchka bilan yozdim.',
      'Daftar bilan kitob stolda.',
      'Akam bilan opam keldi.',
    ], 'B',
    "«Ruchka bilan yozdim» — vosita ma'nosini bildiruvchi ko'makchi. Qolgan gaplarda «bilan» uyushiq bo'laklarni bog'laydi va uni «va» bilan almashtirish mumkin — bu teng bog'lovchi vazifasi. Almashtirish sinovi o'quvchilarga farqni ko'rsatadi."),

  mc('s1uz-v2-125', '1.2.5', { ...U, src: S },
    "«Oq qor» va «Qor oq.» birliklarining farqi nimada?",
    [
      "Farqi yo'q, ikkalasi ham gap.",
      "Ikkalasi ham so'z birikmasi.",
      "Birinchisi — so'z birikmasi (aniqlovchi + aniqlanmish, tobe bog'lanish), ikkinchisi — gap (ega va kesim, tugal fikr va ohang).",
      "Birinchisi — gap, ikkinchisi — so'z birikmasi.",
    ], 'C',
    "So'z birikmasi narsani nomlaydi va tugal fikr bildirmaydi; gap fikr ifodalaydi, ega-kesimga, tugal ohangga ega. Bir xil so'zlardan tuzilgan juftliklarni qiyoslash bu farqni yaqqol ko'rsatadi."),

  mc('s1uz-v2-126', '1.2.6', { ...U, d: 2, src: [...S, 'imlo'] },
    "«Voy, qanday chiroyli kapalak» gapi oxirida qaysi tinish belgisi qo'yiladi va bu gap qanday gap?",
    [
      'Nuqta; darak gap.',
      "So'roq belgisi; so'roq gap.",
      'Vergul; tugallanmagan gap.',
      "Undov belgisi; his-hayajonli gap.",
    ], 'D',
    "Gap kuchli his-hayajon bilan aytilgan («voy» undovi, «qanday» kuchaytiruvchi so'zi), shuning uchun oxirida undov belgisi qo'yiladi. «Qanday» so'zi bor bo'lsa ham, gap savol bildirmaydi — tipik xato."),

  mc('s1uz-v2-127', '1.2.7', { ...U, src: [...S, 'gulomova2010'] },
    "O'quvchi bayonida: «Bir it bor edi. It mehribon edi. It egasiga yordam berardi. It…» Matnning bog'lanishini yaxshilash uchun qaysi ish to'g'ri?",
    [
      "Gaplarni qisqartirib, sonini kamaytirish.",
      "«It» so'zining takrorini olmosh, sinonim va nom bilan almashtirish (u, sodiq do'st, Olapar), gaplarni bog'lovchi vositalar bilan ulash.",
      'Matnni boshqa mavzuda qayta yozdirish.',
      "Faqat imlo xatolarini tuzatish.",
    ], 'B',
    "Matn gaplari zanjir bog'lanish bilan ulanadi: oldingi gapdagi so'z keyingisida olmosh yoki sinonim bilan almashtiriladi. Bir xil so'z takrori nutqni qashshoqlashtiradi; vositalarni ataylab mashq qilish bog'lanishli nutqni rivojlantiradi."),

  mc('s1uz-v2-128', '1.2.8', { ...U, src: ['pirls', ...S] },
    "O'quvchilarga yangi kitobni tanlashdan oldin uning nima haqida ekanini tez aniqlash vazifasi berildi. Qaysi o'qish strategiyasi mos?",
    [
      "Umumiy tanishuv o'qishi (skimming): sarlavha, mundarija, annotatsiya va rasmlarni ko'zdan kechirish.",
      "Aniq ma'lumotni qidirish (scanning).",
      "Har bir so'zni sinchiklab o'qish.",
      'Kitobni boshidan oxirigacha ovoz chiqarib o\'qish.',
    ], 'A',
    "Skimming — matnning umumiy mazmunini tez aniqlash uchun o'qish; kitob tanlashda aynan shu kerak. Scanning aniq faktni (sana, nom) izlash uchun, sinchiklab o'qish — chuqur o'rganish uchun."),

  mc('s1uz-v2-131', '1.3.1', { ...U, src: [...S, 'matchonov2021'] },
    "3-sinfda «Klaster» metodidan qachon foydalanish o'rinli?",
    [
      "Matnni yod oldirishda.",
      "Imlo diktantini tekshirishda.",
      "Faqat chorak bahosini chiqarishda.",
      "Mavzu bo'yicha bilimlarni tizimlashda: markaziy so'z (masalan, «Bahor») atrofida bog'liq tushunchalarni guruhlab, ular o'rtasidagi aloqalarni ko'rsatishda.",
    ], 'D',
    "Klaster — g'oyalarni grafik tarzda guruhlash usuli: o'quvchilar tushunchalar o'rtasidagi aloqalarni o'zlari quradi, bu tizimli fikrlashni rivojlantiradi. Yod olish, diktant va baho chiqarish metod maqsadiga mos emas."),

  mc('s1uz-v2-132', '1.3.2', { ...U, src: [...S, 'qosimova2009'] },
    "2-sinf o'quvchisi yozuvda «b» va «d» harflarini doimiy almashtiradi, ba'zi harflarni oynadagidek teskari yozadi; ko'rishi normal. O'qituvchining to'g'ri harakati qaysi?",
    [
      "Ishni qayta-qayta ko'chirtirish.",
      "Past baho qo'yib, ota-onani ogohlantirish.",
      "Bu optik disgrafiya belgisi bo'lishi mumkin: logoped bilan maslahatlashish, harflarni elementlari bo'yicha qiyoslash, ko'rish-fazoviy idrokni rivojlantiruvchi mashqlar berish.",
      "E'tibor bermaslik: yoshi bilan o'tib ketadi.",
    ], 'C',
    "Turg'un, bir xil tipdagi almashtirishlar (o'xshash harflar, ko'zgu yozuvi) diqqatsizlik emas, disgrafiya belgisi bo'lishi mumkin. Mutaxassis bilan hamkorlik va maqsadli korreksion mashqlar kerak; ko'chirtirish va jazo sababni bartaraf etmaydi."),

  mc('s1uz-v2-133', '1.3.3', { ...U, src: S },
    "1-sinf o'quvchisi «o'» va «u» tovushlarini farqlamaydi: «o'rdak» ni «urdak» deb yozadi. Qaysi mashq eng mos?",
    [
      "Minimal juftliklar bilan ishlash: «o'n — un», «to'p — tup» so'zlarini eshitib, ma'nosiga mos rasmni tanlash va ko'zgu oldida lab holatini kuzatish.",
      "Xato so'zni o'n marta ko'chirish.",
      "Alifboni yod olish.",
      "Unlilar haqidagi qoidani yod olish.",
    ], 'A',
    "Fonematik eshitish ma'no farqlovchi tovushlarni qiyoslash orqali rivojlanadi: minimal juftliklarda bitta tovush ma'noni o'zgartiradi. Artikulyatsiyani ko'rish eshitish idrokini qo'llab-quvvatlaydi."),

  mc('s1uz-v2-134', '1.3.4', { ...U, src: S },
    "O'quvchilar «tuzli» so'zining o'zagini «tuzl» deb ajratdi. Qaysi usul o'zakni to'g'ri ajratishga o'rgatadi?",
    [
      "So'zni bo'g'inlarga ajratish.",
      "O'zakdosh so'zlar qatorini tuzish (tuz, tuzla, tuzsiz, tuzli) va ulardagi umumiy qismni topish.",
      "So'zni teskari o'qish.",
      "Eng uzun qismni o'zak deb olish.",
    ], 'B',
    "O'zak — o'zakdosh so'zlarning umumiy qismi; qatorni solishtirish «tuz» o'zagini va «-li» yasovchi qo'shimchasini ko'rsatadi. Bo'g'in chegarasi har doim ham morfema chegarasiga to'g'ri kelmaydi: «tuzi» so'zida bo'g'inlar tu-zi, morfemalar esa tuz-i."),

  open('s1uz-v2-135', '1.3.5', { ...U, src: [...S, 'xalikov2025'] },
    "O'qituvchi «qadimiy» so'zining ma'nosini tushuntirish uchun uni zid ma'noli so'z — «zamonaviy» bilan qiyosladi. So'z ma'nosini izohlashning bu usuli qanday ataladi? (qisqa javob)",
    'antonim orqali',
    "Bu zid ma'noli so'z (antonim) orqali izohlash usuli. Boshqa usullar: ko'rgazma (rasm, narsa), sinonim tanlash, kontekst orqali, ta'rif berish, so'z yasalishi orqali tushuntirish.",
    { uz: ['antonim', 'antonim tanlash', 'antonimlar orqali', "zid ma'noli so'z orqali", "zid ma'noli so'z", "qarama-qarshi ma'noli so'z orqali", 'antonim orqali izohlash', 'antonim tanlash usuli', 'antonim yordamida'] }),

  mc('s1uz-v2-136', '1.3.6', { ...U, src: S },
    "O'quvchilar «birinchi» so'zini sifat deb hisoblaydi. So'z turkumini to'g'ri aniqlashga qaysi yondashuv o'rgatadi?",
    [
      "Faqat so'zga savol berish.",
      "Faqat so'z oxiridagi qo'shimchaga qarash.",
      "Qoidani yod oldirish.",
      "So'z turkumini savol, umumiy ma'no va grammatik belgilar bilan birga aniqlash: «birinchi» — «nechanchi?» savoliga javob beradi va tartibni bildiradi, demak tartib son.",
    ], 'D',
    "So'z turkumi bitta belgi bilan emas, ma'no, savol va grammatik xususiyatlar majmui bilan aniqlanadi. «Birinchi» predmet belgisini emas, sanoqdagi o'rnini bildiradi; -inchi qo'shimchasi tartib sonni yasaydi."),

  mc('s1uz-v2-137', '1.3.7', { ...U, src: [...S, 'imlo'] },
    "O'quvchilar undalmali gaplarda vergul qo'ymaydi: «Onajon men sizni sevaman». Qaysi ish samarali?",
    [
      "Undalmani ohang bilan ajratib o'qish, gapdagi murojaat kimga qaratilganini topish va undalmani vergul bilan ajratish; undalma gap boshida, o'rtasida va oxirida kelgan gaplarni qiyoslash.",
      "Gapni qayta-qayta ko'chirish.",
      "Undalmani gapdan olib tashlash.",
      "Vergulni gap oxiriga qo'yishni o'rgatish.",
    ], 'A',
    "Undalma — so'zlovchi murojaat qilgan shaxs; u gap bo'lagi emas va vergul bilan ajratiladi: «Onajon, men sizni sevaman». Ohang bilan o'qish va o'rnini almashtirish punktuatsiya qoidasini ongli qiladi."),

  open('s1uz-v2-138', '1.3.8', { ...U, d: 4, src: ['qosimova2009', 'spec2026'] },
    "O'quvchi o'qishda harflarni tushirib qoldiradi, o'rnini almashtiradi, juda sekin o'qiydi va matnni yaxshi tushunmaydi; ko'rish, eshitish va intellekti normal. O'qish jarayonining bunday turg'un buzilishi qanday ataladi? (bir so'z)",
    'disleksiya',
    "Disleksiya — intellekt va sezgi a'zolari saqlangan holda o'qish ko'nikmasining turg'un buzilishi. O'qituvchi logoped bilan hamkorlikda ishlaydi: tovush-harf tahlili, bo'g'inlab o'qish, matnni qismlarga bo'lib tushunish.",
    { uz: ['disleksiya'] }),

  match('s1uz-v2-141', '1.4.1', { ...U, d: 4, src: [...S, 'pirlsuz2020'] },
    "O'qish malakasi sifatlari (1–3) va ularning tavsifi (A–F) o'rtasidagi moslikni aniqlang.",
    [
      ["Ongli o'qish", 'D'],
      ["Ravon o'qish", 'A'],
      ["Ifodali o'qish", 'E'],
    ],
    [
      "Mazmunni tushunishga imkon beradigan tezlikda, bo'g'inlab emas, butun so'z bilan o'qish.",
      'Matnni yod olib aytib berish.',
      "So'zlarni tovush va harflarni tushirmasdan, buzmasdan o'qish.",
      "Matn mazmuni, g'oyasi va qahramonlar xatti-harakatini tushunib o'qish.",
      "Ohang, pauza va urg'u orqali matn kayfiyatini yetkazish.",
      'Matnni daftarga ko\'chirib yozish.',
    ],
    "O'qish malakasining to'rt sifati: to'g'ri (C), ravon (A), ongli (D), ifodali (E). C — to'g'ri o'qish, u bu topshiriqda so'ralmagan; B va F o'qish malakasi sifati emas."),

  mc('s1uz-v2-142', '1.4.2', { ...U, src: [...S, 'matchonov2021'] },
    "4-sinfda hikoya o'qilgach, o'qituvchi «Muallif nima uchun hikoyani aynan shunday nomlagan?» deb so'radi. Bu savol nimaga qaratilgan?",
    [
      "Matndagi faktni eslashga.",
      "Asar g'oyasi va tagma'nosini, sarlavha bilan mazmun bog'liqligini anglashga.",
      "Notanish so'z ma'nosini topishga.",
      "O'qish tezligini tekshirishga.",
    ], 'B',
    "Sarlavha haqidagi savol o'quvchini asar g'oyasini umumlashtirishga va muallif niyatini tushunishga undaydi — bu talqin darajasidagi savol. Fakt va so'z ma'nosi haqidagi savollar matn yuzasida qoladi."),

  mc('s1uz-v2-143', '1.4.3', { ...U, d: 2, src: S },
    "She'rni ifodali o'qishga tayyorlashda birinchi qadam qaysi?",
    [
      "Darhol yod oldirish.",
      "Tez o'qish musobaqasini o'tkazish.",
      "She'r mazmuni va kayfiyatini anglash, keyin pauza, mantiqiy urg'u va ohangni belgilash.",
      "She'rni daftarga ko'chirish.",
    ], 'C',
    "Ifodali o'qish tushunishdan boshlanadi: o'quvchi muallif kayfiyatini anglagach, uni ovoz vositalari (pauza, urg'u, sur'at, ohang) bilan yetkazadi. Mazmunni tushunmay yodlash mexanik o'qishga olib keladi."),

  mc('s1uz-v2-144', '1.4.4', { ...U, src: [...S, 'pirlsuz2020'] },
    "Sinfdan tashqari o'qish darsida o'quvchilar o'qigan kitoblari haqida faqat «yoqdi» yoki «yoqmadi» deydi. Mustaqil kitobxonlik madaniyatini qaysi usul rivojlantiradi?",
    [
      "Kitobxonlik kundaligini yuritish (muallif, qahramon, eng yoqqan epizod va nega), kitob taqdimoti va sinfdoshlarga kitob tavsiya qilish.",
      "Har bir kitob uchun test yechish.",
      "Faqat o'qituvchi tanlagan kitoblarni o'qish.",
      "O'qilgan kitoblar sonini sanash.",
    ], 'A',
    "Mustaqil kitobxonlik tanlov, fikrni asoslash va kitob haqida muloqot orqali shakllanadi. Kundalik va taqdimot o'quvchini o'qiganini tahlil qilishga, tavsiya esa boshqalar bilan bo'lishishga undaydi."),

  open('s1uz-v2-145', '1.4.5', { ...U, src: ['pirls', 'pirlsuz2020'] },
    "O'quvchilardan muallif qahramon fikrini ko'rsatish uchun nega dialogdan foydalanganini baholash so'raldi. Bu PIRLS bo'yicha matnni tushunishning qaysi jarayoniga tegishli? (qisqa javob)",
    'tahlil va baholash',
    "PIRLS jarayonlari: 1) aniq ma'lumotni topish; 2) oddiy xulosa chiqarish; 3) talqin va integratsiya; 4) matn mazmuni, tili va unsurlarini tahlil qilish va baholash. Muallif tanlagan vositani baholash — 4-jarayon.",
    { uz: ['baholash', 'tahlil va baholash', 'baholash va tahlil', 'tahlil qilish va baholash', "matn mazmuni va tilini baholash", 'mazmun, til va unsurlarni tahlil qilish va baholash', 'tanqidiy baholash', 'matnni baholash', "mazmun va til unsurlarini tahlil qilish va baholash"] }),
];
