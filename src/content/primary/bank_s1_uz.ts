// Section 1 (Uzbek exam language) — Ona tili va o'qish savodxonligi metodikasi.
// Original items for mock variant 1. Uzbek-only content (not a translation).
import { match, mc, open } from './build';
import type { Question } from '../../core/types';

const U = { lang: 'uz' as const, pool: 'exam' as const };

export const BANK_S1_UZ: Question[] = [
  mc('s1uz-v1-111', '1.1.1', { ...U, d: 2, src: ['qosimova2022', 'sayfullayeva'], pit: "Tipik xato: harflar sonini tovushlar soniga tenglashtirish (sh, ch, ng)." },
    "1-sinf o'quvchilari «shamol» so'zida 6 ta tovush bor deb hisoblashdi. Tovush va harf farqini anglatishga eng mos topshiriq qaysi?",
    [
      "So'zni ko'chirib yozib, harflarini sanash.",
      "So'zni bo'g'inlarga ajratib, bo'g'inlar sonini aniqlash.",
      "So'zni sekin talaffuz qilib, har bir tovushga bitta fishka qo'yish va «sh» ikki harf bilan yozilsa-da bitta tovush ekanini chizma bilan solishtirish.",
      "So'zdagi unli harflarni qizil rang bilan bo'yash.",
    ], 'C',
    "«Shamol»da 6 harf (s-h-a-m-o-l), ammo 5 tovush [sh-a-m-o-l]: «sh» harf birikmasi bitta tovushni ifodalaydi. Tovush eshitiladi va talaffuz qilinadi, harf yoziladi; fishkali tovush modeli ularni ajratishga yordam beradi. A va D faqat yozuv bilan ishlaydi."),

  mc('s1uz-v1-112', '1.1.2', { ...U, src: ['sayfullayeva', 'qosimova2022'] },
    "3-sinf o'quvchisi «o'rtog'im» so'zini «o'rtoqim» deb yozdi. Ushbu xatoning sababi va uni bartaraf etish yo'li to'g'ri ko'rsatilgan javobni aniqlang.",
    [
      "So'z oxiridagi q unli bilan boshlanuvchi qo'shimcha qo'shilganda g' ga almashadi (tovush almashishi); o'rtoq – o'rtog'im, qishloq – qishlog'i juftliklarini kuzatish orqali qonuniyatni o'quvchining o'zi topishi.",
      "O'quvchi diqqatsiz; so'zni 10 marta ko'chirib yozdirish.",
      "Bu sheva xatosi; o'quvchining nutqini tuzatish shart emas.",
      "So'zni bo'g'inlarga ajratib, urg'uni aniqlash.",
    ], 'A',
    "Bu fonetik hodisa — tovush almashishi (q → g', k → g): o'rtoq + im → o'rtog'im, ko'ylak + i → ko'ylagi. Juftliklarni solishtirish orqali kuzatish qonuniyatni ongli o'zlashtirishga olib keladi. B mexanik, C noto'g'ri, D muammoga aloqasiz."),

  mc('s1uz-v1-113', '1.1.3', { ...U, src: ['qosimova2022', 'imlo'] },
    "O'qituvchi 2-sinfda so'zlarni bo'g'in ko'chirish qoidasiga oid topshiriq tuzmoqda. Qaysi topshiriq qoidaning asosiy talablarini to'liq qamraydi?",
    [
      "So'zlarni bo'g'inga ajratib, faqat bo'g'inlar sonini yozish.",
      "«Kitob, ona, o'qituvchi, qishloq» so'zlarini satrdan satrga ko'chirishning barcha mumkin variantlarini topish va nima uchun «o-na» deb ko'chirib bo'lmasligini, «sh/ch» nega bo'linmasligini juftlikda tushuntirish.",
      "Darslikdagi qoidani daftarga ko'chirib yozish.",
      "So'zlarni alifbo tartibida joylashtirish.",
    ], 'B',
    "Ko'chirish bo'g'inga asoslanadi, ammo bitta unli harf satrda yolg'iz qoldirilmaydi (o-na emas) va sh, ch, ng harf birikmalari bo'linmaydi (qish-loq, o'-qi-tuv-chi — «o'» ham alohida ko'chirilmaydi). B o'quvchini qoidani qo'llash va asoslashga undaydi."),

  mc('s1uz-v1-114', '1.1.4', { ...U, src: ['imlo', 'qosimova2022'] },
    "3-sinfda tutuq belgisining vazifalarini o'rgatish uchun qaysi didaktik vosita eng mos?",
    [
      "Tutuq belgisi qatnashgan so'zlarni ko'chirib yozish.",
      "Alifbo jadvalini osib qo'yish.",
      "Tutuq belgisini rangli qalam bilan chiroyli yozishni mashq qilish.",
      "«Sher – she'r», «san'at», «Is'hoq» so'zlari kartochkalarini solishtirib, belgining ma'no farqlash, bo'g'inni ajratish va s bilan h ni ajratish vazifalarini aniqlash.",
    ], 'D',
    "Tutuq belgisi ma'no farqlaydi (sher – she'r), tovushni ajratib talaffuz qilishni ko'rsatadi (san'at) va s, h harflari «sh» deb o'qilmasligi uchun ularni ajratadi (Is'hoq). Kartochkali qiyoslash vazifani tushunishga olib keladi."),

  mc('s1uz-v1-115', '1.1.5', { ...U, src: ['qosimova2022', 'gulomova2010'] },
    "3-sinf o'quvchilari sheva ta'sirida «boraman» o'rniga «boramman», «kelyapti» o'rniga «kevotti» deb gapiradi. Orfoepik xatolarni bartaraf etishning eng samarali yo'li qaysi?",
    [
      "Shevada gapirgani uchun tanbeh berish.",
      "«Teleboshlovchi» rolli o'yinida adabiy va shevadagi talaffuzni tinglab qiyoslash, so'ng adabiy shaklda qisqa xabar tayyorlab aytish.",
      "Adabiy shakllarni daftarga 5 martadan yozdirish.",
      "Sheva so'zlarini umuman ishlatmaslikni talab qilish.",
    ], 'B',
    "Sheva — xato emas, balki adabiy til bilan farq qiluvchi nutq shakli. Ikkalasini qiyoslash va adabiy shaklni muloqot vaziyatida qo'llash ongli o'zlashtirishni ta'minlaydi; tanbeh va taqiq motivatsiyani pasaytiradi, yozuv talaffuzni tuzatmaydi."),

  mc('s1uz-v1-116', '1.1.6', { ...U, src: ['imlo'] },
    "2-sinf o'quvchilari «bog'ga», «qishloqga», «teragga» deb yozmoqda. Qo'shimchalar imlosini o'rgatish uchun qaysi mashq eng mos?",
    [
      "So'z oxiridagi tovushga qarab so'zlarni uch guruhga ajratish (k/g → -ka, q/g' → -qa, boshqalar → -ga) va har guruhdan namuna tuzish.",
      "Barcha so'zlarga -ga qo'shimchasini qo'shishni mashq qilish.",
      "So'zlarni alifbo tartibida yozish.",
      "Qo'shimchalarni yoddan aytish.",
    ], 'A',
    "Imlo qoidasiga ko'ra -ga qo'shimchasi k, g bilan tugagan so'zlarga -ka (terakka, bargka), q, g' bilan tugagan so'zlarga -qa (qishloqqa, bog'qa) shaklida yoziladi. Guruhlash qonuniyatni ko'rsatadi; B xatoni mustahkamlaydi."),

  mc('s1uz-v1-117', '1.1.7', { ...U, d: 2, src: ['imlo'] },
    "Juft so'zlarning imlosini o'rgatish uchun qaysi topshiriq to'g'ri tuzilgan?",
    [
      "«Ota, ona, katta, kichik» so'zlarini alohida gaplarda qo'llash.",
      "«Toshbaqa, kungaboqar» so'zlarini bo'g'inlarga ajratish.",
      "Rasmlar asosida ma'nosi yaqin yoki qarama-qarshi so'zlarni juftlab (ota-ona, katta-kichik, opa-singil) chiziqcha bilan yozish va ularni gapda qo'llash.",
      "Juft so'zlarni qo'shib yozishni mashq qilish.",
    ], 'C',
    "Juft so'zlar chiziqcha bilan yoziladi (ota-ona, katta-kichik). C imloni ma'no bilan bog'laydi va nutqda qo'llatadi. B dagi so'zlar qo'shma so'zlar bo'lib qo'shib yoziladi; D noto'g'ri qoida."),

  mc('s1uz-v1-121', '1.2.1', { ...U, src: ['qosimova2022', 'sayfullayeva'] },
    "3-sinf o'quvchilari «shox» va «shoh» so'zlarini nutqda almashtirib qo'llamoqda. Paronimlarni farqlashni shakllantirishda eng samarali topshiriq qaysi?",
    [
      "Ikkala so'zni lug'atdan topib, ta'rifini ko'chirish.",
      "So'zlarni ko'p marta takrorlab aytish.",
      "So'zlarni alifbo tartibida yozish.",
      "Ikkala so'z qatnashgan rasmli vaziyatlar (bug'u shoxi, ertakdagi shoh) asosida gaplar tuzib, so'z almashtirilganda ma'no qanday o'zgarishini juftlikda muhokama qilish.",
    ], 'D',
    "Paronimlar talaffuzi o'xshash, ma'nosi har xil so'zlar. Ularni kontekstda qo'llash va almashtirishdagi ma'no o'zgarishini kuzatish ongli farqlashga olib keladi; A va B mexanik."),

  mc('s1uz-v1-122', '1.2.2', { ...U, src: ['sayfullayeva', 'jamolxonov'] },
    "4-sinf o'quvchilari «ishchi» va «ishlar» so'zlaridagi qo'shimchalarni bir xil turdagi qo'shimcha deb hisoblaydi. Farqni anglatishning eng to'g'ri yo'li qaysi?",
    [
      "Qo'shimcha qo'shilgandan keyin yangi lug'aviy ma'noli so'z hosil bo'ldimi (ish → ishchi — kasb egasi) yoki faqat so'z shakli o'zgardimi (ish → ishlar — ko'plik) degan savol bilan juftliklarni tahlil qilish.",
      "Qo'shimchalar ro'yxatini yodlatish.",
      "So'zlarni bo'g'inlarga ajratish.",
      "Qo'shimchalarni qizil rang bilan belgilash.",
    ], 'A',
    "So'z yasovchi qo'shimcha yangi so'z (yangi lug'aviy ma'no) hosil qiladi (-chi), shakl yasovchi qo'shimcha esa so'zning grammatik shaklini o'zgartiradi (-lar). Ma'no o'zgarishi mezonini qo'llash farqni ongli o'zlashtiradi."),

  mc('s1uz-v1-123', '1.2.3', { ...U, src: ['qosimova2022'] },
    "4-sinfda fe'lning bo'lishli va bo'lishsiz shakllarini o'rgatish uchun yoshga mos eng samarali topshiriq qaysi?",
    [
      "Fe'llarni jadvalga ikki ustunga ajratib yozish.",
      "«Rost yoki yolg'on» o'yinida o'quvchilar sinf hayotiga oid gaplarni aytadi, sherigi esa fe'lning bo'lishsiz shaklidan foydalanib inkor qiladi (Men kitob o'qidim. – Yo'q, sen kitob o'qimading).",
      "Bo'lishsizlik qo'shimchasini yodlatish.",
      "Matndan fe'llarni ko'chirib yozish.",
    ], 'B',
    "Kichik maktab yoshida grammatik kategoriya nutqiy vaziyat va o'yin orqali yaxshi o'zlashtiriladi; B da -ma qo'shimchasi muloqotda ma'noli qo'llanadi. A, C, D reproduktiv faoliyat."),

  mc('s1uz-v1-124', '1.2.4', { ...U, src: ['sayfullayeva'] },
    "3-sinf o'quvchilari matn yozishda «va», «lekin», «ammo» so'zlarini noto'g'ri qo'llab, fikrlarni mantiqsiz bog'lamoqda. Bog'lovchilarning nutqiy vazifasini o'rgatishga qaysi topshiriq mos?",
    [
      "Bog'lovchilar ro'yxatini yodlatish.",
      "Matndagi bog'lovchilarni topib, tagiga chizish.",
      "Ikki gapni turli bog'lovchilar bilan birlashtirib («Kun sovuq edi, … biz sayrga chiqdik»), qaysi bog'lovchi ma'noga mos kelishini va nega ekanini juftlikda asoslash.",
      "Bog'lovchilarni alifbo tartibida yozish.",
    ], 'C',
    "Bog'lovchi gaplar o'rtasidagi munosabatni (biriktiruv — va, zidlov — lekin, ammo) ifodalaydi. Turli bog'lovchilarni sinab ko'rish va ma'noni solishtirish uning nutqiy vazifasini anglatadi."),

  mc('s1uz-v1-125', '1.2.5', { ...U, src: ['sayfullayeva', 'jamolxonov'] },
    "4-sinf o'quvchilari «yashil daraxt» va «daraxt yashillandi» tuzilmalarini bir xil deb biladi. So'z birikmasi va gap farqini anglatishda qaysi yo'l to'g'ri?",
    [
      "Har ikki tuzilmaga «Bu nima haqida xabar beradi va tugallangan fikrmi?» savolini berib, gapda ega va kesim borligini, birikmada esa hokim va tobe so'z faqat narsani nomlashini ko'rsatish.",
      "Ikkala tuzilmani ko'chirib yozdirish.",
      "So'zlarni bo'g'inga ajratish.",
      "Birikmalar ro'yxatini yodlatish.",
    ], 'A',
    "So'z birikmasi narsa-hodisani nomlaydi (yashil daraxt: tobe + hokim), gap esa tugallangan fikr ifodalaydi va grammatik asosga (ega + kesim) ega (daraxt yashillandi). Savol orqali taqqoslash farqni ongli qiladi."),

  mc('s1uz-v1-126', '1.2.6', { ...U, src: ['sayfullayeva'] },
    "4-sinf o'quvchilari «Do'stlar biz bugun sayohatga chiqamiz» gapida tinish belgisini qo'ymagan. Qaysi topshiriq xatoni ongli bartaraf etishga yordam beradi?",
    [
      "Gapni 5 marta ko'chirish.",
      "Undalma qoidasini yodlatish.",
      "Gapni sintaktik tahlil qilib, bo'laklar ostiga chiziq chizish.",
      "Gapni chaqiriq ohangi va pauza bilan o'qib, kimga murojaat qilinayotganini aniqlash, so'ng pauza joyini vergul bilan belgilash va boshqa undalmali gaplar tuzish.",
    ], 'D',
    "«Do'stlar» — undalma; u gap bo'lagi bo'lmaydi va vergul bilan ajratiladi: «Do'stlar, biz bugun sayohatga chiqamiz». Ohang va pauzani eshitish orqali undalmani topish qoidani tushunishga olib keladi."),

  mc('s1uz-v1-127', '1.2.7', { ...U, src: ['gulomova2010'] },
    "3-sinf o'quvchilari «Bahor» mavzusida matn yozganda fikrlarni tartibsiz, kirish va xulosasiz bayon qilmoqda. Matnning mantiqiy tuzilishini shakllantirishga qaysi topshiriq mos?",
    [
      "Namuna matnni ko'chirib yozish.",
      "«Kirish – asosiy qism – xulosa» chizmasidan foydalanib, avval har bir qism uchun tayanch so'zlar va savollar bilan reja tuzish, so'ng har qismni alohida abzasda yozish.",
      "Bahor haqidagi so'zlar ro'yxatini tuzish.",
      "Matnni imlo xatolari bo'yicha tekshirish.",
    ], 'B',
    "Bog'lanishli nutq reja va tuzilma orqali rivojlanadi: kirish (mavzuga olib kirish), asosiy qism (voqea/tasvir), xulosa (fikrni yakunlash). Grafik tayanch va abzaslarga bo'lish mantiqni ko'rinadigan qiladi."),

  mc('s1uz-v1-128', '1.2.8', { ...U, src: ['xalikov2025', 'pirls'] },
    "4-sinf o'quvchilari «Hayvonot bog'i» bukletidan faqat bitta ma'lumotni — bog' qachon ochilishini topishi kerak, ammo ular matnni boshidan oxirigacha o'qib vaqt yo'qotmoqda. O'qituvchi qaysi o'qish strategiyasini o'rgatishi lozim?",
    [
      "Scanning — aniq axborotni izlab o'qish: kalit so'zni (soat, ish vaqti) belgilab, sarlavha va jadvallar bo'ylab ko'z yugurtirish.",
      "Skimming — umumiy mazmunni anglash uchun ko'zdan kechirish.",
      "Matnni ovoz chiqarib to'liq o'qish.",
      "Matnni yod olish.",
    ], 'A',
    "Muayyan faktni topish uchun scanning (izlab o'qish) qo'llanadi; skimming esa umumiy mazmunni tez anglash uchun. O'quvchiga maqsadga ko'ra strategiya tanlashni o'rgatish o'qish savodxonligining muhim qismi."),

  mc('s1uz-v1-131', '1.3.1', { ...U, src: ['azizxojayeva', 'gafforova'] },
    "3-sinfda ertak o'qilgandan keyin o'qituvchi o'quvchilardan qahramonning muammosi, uning sabablari va oqibatlarini tizimli ko'rsatishni istaydi. Qaysi grafik organayzer bu maqsadga eng mos?",
    [
      "Venn diagrammasi.",
      "«Baliq skeleti» (Isikava) chizmasi.",
      "Klaster.",
      "T-jadval «ha/yo'q».",
    ], 'B',
    "«Baliq skeleti» muammo (bosh) va uning sabablari (suyaklar) hamda oqibatini tizimlashtiradi. Venn — ikki obyektni solishtirish, klaster — tushunchalar bog'liqligi, T-jadval — ikki tomonlama ro'yxat uchun."),

  mc('s1uz-v1-132', '1.3.2', { ...U, src: ['qosimova2022', 'qosimova2009'] },
    "Savod o'rgatishning tayyorlov davrida 1-sinf o'quvchisi so'zdagi birinchi tovushni ajrata olmaydi va ruchkani noto'g'ri ushlab, tez charchaydi. O'qituvchining to'g'ri harakatlari qaysi?",
    [
      "Harflarni tezroq o'rgatishni boshlash.",
      "Uyga ko'proq yozuv vazifasi berish.",
      "O'yin orqali tovush tahlili (so'zni cho'zib aytish, tovushni chapak bilan ajratish) mashqlarini o'tkazish, ruchka ushlash va o'tirish tartibini ko'rsatish, yozuvni qisqa mashqlar va qo'l barmoqlari uchun mashq bilan almashtirish.",
      "O'quvchini yozuvdan vaqtincha ozod qilish.",
    ], 'C',
    "Tahlil-tarkib metodida harfdan oldin tovush tahlili shakllanadi; yozuv gigiyenasi (o'tirish, ruchka ushlash) va mayda motorika mashqlari disgrafiya xavfini kamaytiradi. A va B yuklamani oshiradi, D rivojlanishni to'xtatadi."),

  mc('s1uz-v1-133', '1.3.3', { ...U, src: ['qosimova2022'] },
    "1-sinf o'quvchilari «non» va «nom» so'zlarini eshitganda farqini sezmayapti. Fonematik eshitishni rivojlantirish uchun qaysi mashq eng mos?",
    [
      "So'zlarni doskaga yozib o'qitish.",
      "Rasmlarni rangli bo'yash.",
      "So'zlarni alifbo tartibida joylashtirish.",
      "Faqat bitta tovushi bilan farq qiluvchi so'z juftliklarini (non – nom, tol – tor) eshitib, mos rasmni ko'rsatish va qaysi tovush o'zgarganini aniqlash.",
    ], 'D',
    "Fonematik eshitish — tovushlarni eshitib farqlash qobiliyati. Minimal juftliklar (bitta tovush farqi) bilan eshitish mashqi yozuvga tayanmasdan tovush farqini anglatadi."),

  mc('s1uz-v1-134', '1.3.4', { ...U, src: ['sayfullayeva'] },
    "3-sinf o'quvchilari «guldon» va «gulchi» so'zlarida asosni to'g'ri ajratadi, lekin «bilim» so'zida «bil» ni emas, «bilim» ni o'zak deb hisoblaydi. Qiyinchilikni bartaraf etishning to'g'ri yo'li qaysi?",
    [
      "«Bilmoq, bilim, bilimdon, bilag'on» o'zakdosh so'zlar qatorini tuzib, barcha so'zlarda takrorlanuvchi umumiy ma'noli qismni topish.",
      "So'zlarni bo'g'inga ajratish.",
      "O'zak ta'rifini yodlatish.",
      "So'zni teskari o'qish.",
    ], 'A',
    "O'zak — so'zning qo'shimchalarsiz umumiy ma'noli qismi. O'zakdosh so'zlar qatorini tuzish umumiy qismni (bil-) ko'rinadigan qiladi va -im qo'shimchasini ajratishga yordam beradi."),

  open('s1uz-v1-135', '1.3.5', { ...U, src: ['qosimova2022', 'xalikov2025'] },
    "2-sinf matnida «shijoatli» so'zi uchradi. O'qituvchi uni izohlash uchun o'quvchilarga tanish bo'lgan ma'nodosh so'zni — «jasur» so'zini aytdi va «shijoatli» o'rniga qo'yib ko'rishni so'radi. O'qituvchi so'z ma'nosini izohlashning qaysi usulidan foydalandi? (qisqa javob)",
    'sinonim orqali izohlash',
    "Bu — ma'nodosh (sinonim) tanlash orqali izohlash usuli. Boshqa usullar: ko'rgazmali (rasm/predmet), kontekst orqali, ta'rif berish, antonim orqali.",
    { uz: ['sinonim', 'sinonim tanlash', 'sinonimlar orqali', 'sinonim orqali', 'sinonim tanlash usuli', "ma'nodosh so'z orqali", "ma'nodosh so'z tanlash", 'sinonim orqali izohlash usuli'] }),

  mc('s1uz-v1-136', '1.3.6', { ...U, src: ['qosimova2022'] },
    "3-sinf o'quvchilari «chiroyli» so'zini «Gul chiroyli» gapida ham, «U chiroyli yozadi» gapida ham sifat deb hisoblamoqda. Qaysi yondashuv so'z turkumini to'g'ri aniqlashga o'rgatadi?",
    [
      "Sifatlar ro'yxatini yodlatish.",
      "So'zga gapdagi o'rniga ko'ra so'roq berish (qanday gul? — qanday yozadi? / qanday qilib?) va u qaysi so'zga — narsaga yoki harakatga bog'lanayotganini aniqlash.",
      "So'zni lug'atdan topish.",
      "So'zni bo'g'inga ajratish.",
    ], 'B',
    "So'z turkumi so'zning ma'nosi, so'rog'i va gapdagi vazifasiga qarab aniqlanadi: narsaning belgisi — sifat (chiroyli gul), harakatning belgisi — ravish vazifasida (chiroyli yozadi). So'roq va bog'lanishni tahlil qilish ikkalasini farqlaydi."),

  mc('s1uz-v1-137', '1.3.7', { ...U, src: ['sayfullayeva'] },
    "4-sinf o'quvchilari uyushiq bo'lakli gaplarda vergul qo'ymayapti: «Bozordan olma nok uzum oldik». Amaliy mashqlar tizimida qaysi topshiriq birinchi navbatda qo'llanadi?",
    [
      "Gapni ohang bilan sanab o'qib, har bir sanoq pauzasida vergul qo'yish va o'z hayotidan uyushiq bo'lakli gaplar tuzish.",
      "Vergul qoidasini yodlatish.",
      "Gapdagi so'zlarni sanash.",
      "Gapni bo'laklarga ajratmasdan ko'chirish.",
    ], 'A',
    "Uyushiq bo'laklar sanash ohangi bilan aytiladi va bir-biridan vergul bilan ajratiladi: «Bozordan olma, nok, uzum oldik». Ohang → tinish belgisi bog'lanishini sezish, so'ng mustaqil gap tuzish — mashqlar tizimining mantiqiy ketma-ketligi."),

  open('s1uz-v1-138', '1.3.8', { ...U, src: ['gulomova2010'] },
    "3-sinfda o'qituvchi matnni ikki marta o'qib berdi, reja tuzildi, so'ng o'quvchilar shu matn mazmunini o'z so'zlari bilan yozma ravishda qayta hikoya qildi. Bog'lanishli nutqni o'stirishning bu yozma ish turi qanday ataladi? (bir so'z)",
    'bayon',
    "Bayon — tayyor matn mazmunini yozma qayta hikoya qilish. Insho — o'quvchining o'z fikri asosida mustaqil yozgan ijodiy ishi; diktant — eshitganini so'zma-so'z yozish.",
    { uz: ['yozma bayon'] }),

  match('s1uz-v1-141', '1.4.1', { ...U, d: 4, src: ['matchonov2021', 'xalikov2025'] },
    "O'qish malakasidagi muammolar (1–3) va ularni bartaraf etishga qaratilgan topshiriqlar (A–F) o'rtasidagi moslikni aniqlang.",
    [
      ["O'quvchi tez o'qiydi, ammo so'z oxirlarini tushirib, harflarni o'zgartirib o'qiydi.", 'C'],
      ["O'quvchi to'g'ri va ravon o'qiydi, lekin matn nima haqida ekanini aytib bera olmaydi.", 'E'],
      ["O'quvchi bir xil ohangda o'qiydi, tinish belgilari va qahramonlar kayfiyatini e'tiborga olmaydi.", 'A'],
    ],
    [
      "Tinish belgilari va qahramon kayfiyatiga ko'ra pauza va ohangni matnda belgilab, rollarga bo'lib o'qish.",
      "O'qish tezligini oshirish uchun vaqtga qarab o'qish musobaqasi.",
      "Qiyin so'zlarni oldindan bo'g'inlab o'qish va o'z o'qishini audioyozuvdan tinglab xatolarni topish.",
      "Matnni daftarga ko'chirib yozish.",
      "O'qishdan oldin savol qo'yish va matnni qismlarga bo'lib, har bir qismdan so'ng mazmunini o'z so'zi bilan aytish.",
      "Notanish so'zlarning lug'at diktantini o'tkazish.",
    ],
    "O'qish malakasining sifatlari: to'g'ri (1 — harflarni tushirmay o'qish → C), ongli (2 — mazmunni tushunish → E), ifodali (3 — ohang va pauza → A), tez (ravon). B tezlikni oshiradi, ammo 1-muammoni kuchaytiradi; D va F mos emas."),

  mc('s1uz-v1-142', '1.4.2', { ...U, src: ['matchonov2021'] },
    "4-sinfda «Chumoli va ninachi» masali o'rganilmoqda. O'qituvchi o'quvchilar masalning majoziy ma'nosini anglab, undan hayotiy xulosa chiqara olishini bitta topshiriqda tekshirmoqchi. Qaysi topshiriq ikkala maqsadga javob beradi?",
    [
      "Masalni yoddan aytish.",
      "Ninachining so'zlarini matndan topib o'qish.",
      "Masal qahramonlarining rasmini chizish.",
      "Chumoli va ninachi qaysi insonlar xislatini ramziy ifodalashini aniqlab, hozirgi hayotdan shunga o'xshash vaziyat misolini keltirib asoslash.",
    ], 'D',
    "Masalda hayvon obrazlari insonlar xislatini (mehnatsevarlik va beparvolik) ramziy ifodalaydi. D ramziy ma'noni ochish va uni real hayotga ko'chirishni birlashtiradi; A, B — matn darajasidagi faoliyat, C — ijodiy, ammo tahliliy emas."),

  mc('s1uz-v1-143', '1.4.3', { ...U, d: 2, src: ['matchonov2021'] },
    "Tez aytishlardan boshlang'ich sinfda foydalanishning asosiy metodik maqsadi qaysi?",
    [
      "Diksiyani (aniq talaffuzni) va nutq apparatini mashq qildirish.",
      "Matn mazmunini tahlil qilish.",
      "Yangi so'zlarni yodlash.",
      "Imlo qoidalarini mustahkamlash.",
    ], 'A',
    "Tez aytish — og'zaki ijod janri, unda talaffuzi qiyin tovushlar takrorlanadi; asosiy maqsad diksiya va nutqning ravonligi. Avval sekin va aniq, so'ng tezlashtirib aytish tavsiya etiladi."),

  mc('s1uz-v1-144', '1.4.4', { ...U, src: ['matchonov2021'] },
    "3-sinf o'quvchilari kutubxonadan kitobni faqat muqovasi chiroyli bo'lgani uchun tanlab, keyin o'qishni tashlab qo'ymoqda. Mustaqil kitob tanlash ko'nikmasini shakllantirishda eng to'g'ri qadam qaysi?",
    [
      "O'qituvchi har bir o'quvchiga kitobni o'zi tanlab beradi.",
      "Faqat qisqa kitoblarni tavsiya qilish.",
      "Kitobni tanlashda muallif, annotatsiya, mundarija va birinchi sahifani ko'zdan kechirib, «besh barmoq» usulida (bir sahifadagi notanish so'zlar soni) mosligini tekshirishni o'rgatish.",
      "Kitob o'qishni majburiy reyting bilan baholash.",
    ], 'C',
    "Mustaqil kitobxonlik — kitob haqida ma'lumot olish va uni o'z imkoniyatiga moslashni o'rganish. «Besh barmoq» usuli: sahifada 0–1 notanish so'z — oson, 2–3 — mos, 5 dan ko'p — hozircha murakkab. A mustaqillikni bermaydi, D motivatsiyani pasaytiradi."),

  open('s1uz-v1-145', '1.4.5', { ...U, src: ['pirls', 'pirlsuz2020'] },
    "4-sinf o'quvchilariga hikoyani o'qib, «Qahramon qishloqqa qaysi kuni qaytdi?» savoliga matnda to'g'ridan-to'g'ri yozilgan javobni topish topshirildi. PIRLS bo'yicha bu topshiriq matnni tushunishning qaysi jarayoniga tegishli?",
    "ma'lumot topish",
    "PIRLS 4 jarayoni: 1) aniq ifodalangan ma'lumotni topish; 2) oddiy xulosa chiqarish; 3) fikr va ma'lumotlarni talqin qilish va integratsiya; 4) mazmun va matn elementlarini baholash. Javob matnda ochiq yozilgan — bu 1-jarayon.",
    { uz: ["aniq ma'lumotni topish", "ma'lumotni topish", 'axborot topish', "aniq ifodalangan ma'lumotni topish", "ochiq ma'lumotni topish", "ma'lumot izlash", "aniq ma'lumot topish"] }),
];
