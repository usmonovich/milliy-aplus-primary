// O'zbek tili — asoslar, 2-to'plam (faqat o'zbek tilida imtihon topshiruvchilar uchun).
import { B, cq, lesson, oq } from './build';

const SRC = ['qosimova2022', 'imlo', 'spec2026'];
const U = (l: string) => ({ lang: 'uz' as const, lesson: l, src: SRC });

/* ======================= Unli va undoshlar ======================= */
const UU = 'uz-unli-undosh';
export const UZ_VOWELS = lesson({
  id: UU, module: 'uz-fon', level: 'intro', stage: 'F', minutes: 18, codes: ['1.1.2', '1.3.3'], requires: ['uz-tovush-harf'], sourceIds: SRC,
  title: 'Unli va undosh tovushlar',
  blocks: [
    B.intro("Tovushlarning belgilarini bilish imlo xatolarining sababini topishga yordam beradi: «kitop» deb yozish, «o'» va «u» ni chalkashtirish kabi xatolar aynan tovush xususiyatlari bilan bog'liq."),
    B.definition("**Unli tovush** faqat ovozdan hosil bo'ladi: havo og'iz bo'shlig'idan to'siqsiz chiqadi, uni cho'zib aytish mumkin. **Undosh tovush** og'izda to'siqqa uchrab hosil bo'ladi va shovqindan yoki ovoz va shovqindan iborat. Bo'g'in unli asosida hosil bo'ladi."),
    B.table(['Belgi', 'Unlilar'], [
      ["Til holatiga ko'ra", "til oldi: i, e, a; til orqa: u, o', o"],
      ["Lab ishtirokiga ko'ra", "lablangan: u, o', o; lablanmagan: i, e, a"],
      ["Og'iz ochilishiga ko'ra", "tor: i, u; o'rta keng: e, o'; keng: a, o"],
    ], "O'zbek tilining 6 unlisi"),
    B.explain("Undoshlar ovoz ishtirokiga ko'ra:", [
      "**Jarangli** — ovoz va shovqindan: b, v, d, z, g, j, m, n, l, r, y, ng, g'.",
      "**Jarangsiz** — faqat shovqindan: p, f, t, s, k, sh, ch, x, h, q.",
      "Ba'zi juftlar: b — p, v — f, d — t, z — s, g — k.",
      "**Sonor** undoshlar (m, n, ng, l, r, y) jarangsiz juftga ega emas.",
    ]),
    B.rule("So'z oxirida jarangli undosh jarangsizlanib aytilishi mumkin (kitob [kitop], ozod [ozot]), lekin imloda asl tovush yoziladi: **kitob, ozod, barg**. To'g'ri yozuvni qo'shimcha qo'shib tekshiring: kitob**i**, ozod**i**."),
    B.example("«Kitop» yoki «kitob»?", [
      "Qo'shimcha qo'shamiz: kitob + i → «kitobi» — [b] aniq eshitiladi.",
      "Demak, o'zakda «b» yoziladi.",
    ], 'kitob'),
    B.example("«O'n» va «un» so'zlarini qanday farqlash mumkin?", [
      "o' — o'rta keng, lablangan; u — tor, lablangan.",
      "Ko'zgu oldida og'iz ochilishini kuzatish farqni ko'rsatadi; ma'no farqi: «o'n» — son, «un» — bug'doy uni.",
    ], "Og'iz ochilishi farqlaydi"),
    B.example("«Daraxt» so'zidagi undoshlarni ovoz ishtirokiga ko'ra ajrating.", [
      "d — jarangli, r — jarangli (sonor), x — jarangsiz, t — jarangsiz.",
    ], 'Jarangli: d, r; jarangsiz: x, t'),
    B.mistake(null, [
      "So'z oxiridagi jarangsizlanishni yozuvga ko'chirish: «kitop», «ozot».",
      "y harfini unli deb hisoblash — y undosh.",
      "«o'» va «u», «i» va «e» ni farqlamaslik (sheva ta'siri).",
    ]),
    B.try(cq('a-uz-uu-t1', '1.1.2', { ...U(UU), d: 1, rule: "O'zbek tilida 6 unli: a, o, u, o', e, i." }, "Qaysi harf unli tovushni bildiradi?",
      [["o'"], ['y', "y — undosh."], ['h', 'h — undosh.'], ['q', 'q — undosh.']], 'A', "o' — lablangan, o'rta keng unli.")),
    B.method("Tovushlarni o'rgatish usullari:", [
      "Kaftni bo'g'izga qo'yish: jarangli undoshda tebranish seziladi, jarangsizda yo'q.",
      "Rangli model: qizil — unli, ko'k — undosh.",
      "Minimal juftliklar: «bol — pol», «o'n — un», «tez — tes» (eshitib farqlash).",
      "Imlo bilan bog'lash: so'z oxiridagi undoshni qo'shimcha qo'shib tekshirish.",
    ]),
    B.summary(null, [
      "6 unli: a, o, u, o', e, i.",
      "Undoshlar jarangli va jarangsiz; sonorlarning jarangsiz jufti yo'q.",
      "So'z oxiridagi jarangli undosh qo'shimcha bilan tekshiriladi.",
    ]),
  ],
  check: [
    cq('a-uz-uu-c1', '1.1.2', { ...U(UU) }, "Qaysi qatorda faqat lablangan unlilar berilgan?",
      [["u, o', o"], ['i, e, a', 'Bular lablanmagan.'], ["a, o', i", "a va i lablanmagan."], ["e, u, o", "e lablanmagan."]], 'A', "Lablangan unlilar: u, o', o."),
    cq('a-uz-uu-c2', '1.1.6', { ...U(UU), rule: "So'z oxiridagi undosh qo'shimcha qo'shib tekshiriladi." }, "So'z oxiridagi undosh imlosi to'g'ri ko'rsatilgan so'zni toping.",
      [['ozod'], ['ozot', "Ozodi — [d] eshitiladi."], ['kitop', "Kitobi — [b] eshitiladi."], ['bark', "Bargi — [g] eshitiladi."]], 'A', "Imloda asl jarangli undosh yoziladi: ozod."),
    cq('a-uz-uu-c3', '1.1.2', { ...U(UU) }, "Qaysi juftlik jarangli — jarangsiz juftligi?",
      [['z — s'], ['m — n', 'Ikkalasi ham sonor jarangli.'], ['l — r', 'Ikkalasi ham sonor.'], ["sh — ch", "Ikkalasi ham jarangsiz."]], 'A', 'z — jarangli, s — jarangsiz.'),
    oq('a-uz-uu-c4', '1.1.2', { ...U(UU), steps: ["Unlilar: a, o, u, o', e, i."] }, "Adabiy tilimizdagi unli tovushlar sonini son bilan yozing.", '6', "Oltita unli: a, o, u, o', e, i.", {}, 6),
    cq('a-uz-uu-c5', '1.3.3', { ...U(UU) }, "1-sinf o'quvchisi «bol» va «pol» so'zlarini eshitib farqlamaydi. Qaysi usul yordam beradi?",
      [["Kaftni bo'g'izga qo'yib tebranishni sezish va minimal juftliklarni solishtirish"], ["So'zlarni besh marta ko'chirish", "Eshitishni rivojlantirmaydi."], ["Qoidani yod oldirish", "Tajribasiz qoida ishlamaydi."], ["Tezroq o'qitish", "Eshitib farqlashga xalaqit beradi."]], 'A', "Sezgi va minimal juftliklar fonematik eshitishni rivojlantiradi."),
  ],
});

/* ======================= Bo'g'in, ko'chirish, urg'u ======================= */
const BU = 'uz-bogin-urgu';
export const UZ_SYLLABLE = lesson({
  id: BU, module: 'uz-fon', level: 'core', stage: 'C', minutes: 18, codes: ['1.1.3'], requires: [UU], sourceIds: SRC,
  title: "Bo'g'in, so'zlarni ko'chirish va urg'u",
  blocks: [
    B.intro("Bo'g'in — o'qishni o'rgatishning asosiy birligi: birinchi sinf o'quvchisi so'zni bo'g'inlab o'qiydi. Ko'chirish va urg'u qoidalari ham bo'g'inga tayanadi."),
    B.definition("**Bo'g'in** — bir nafas bilan aytiladigan tovush yoki tovushlar birikmasi. Bo'g'in unli asosida hosil bo'ladi: so'zda nechta unli bo'lsa, shuncha bo'g'in bor. **Urg'u** — so'zdagi bir bo'g'inni kuchliroq aytish."),
    B.table(["Bo'g'in turi", 'Belgisi', 'Misol'], [
      ['Ochiq', 'Unli bilan tugaydi', "o-na, ki-ta-bi"],
      ['Yopiq', 'Undosh bilan tugaydi', "kel; mak-tab"],
    ], "Bo'g'in turlari"),
    B.rule("Ko'chirish qoidalari: 1) so'z bo'g'in bo'yicha ko'chiriladi; 2) bitta harf satrda qoldirilmaydi va yangi satrga o'tkazilmaydi (ona so'zi ko'chirilmaydi); 3) sh, ch, ng harf birikmalari bo'linmaydi (ma-shi-na); 4) tutuq belgisi oldingi harf bilan qoladi (ma'-no)."),
    B.explain("O'zbek tilida urg'u odatda so'zning **oxirgi bo'g'iniga** tushadi va qo'shimcha qo'shilganda unga ko'chadi: kiTOB — kitobLAR. Ba'zi qo'shimchalar urg'u olmaydi (masalan, -mi so'roq yuklamasi): kiTOBmi?"),
    B.example("«Maktabimiz» so'zini bo'g'inlarga ajrating.", [
      "Unlilar: a, a, i, i → 4 ta bo'g'in.",
      "mak-ta-bi-miz.",
    ], "mak-ta-bi-miz"),
    B.example("«Olma» so'zining ikki ma'nosini urg'u qanday farqlaydi?", [
      "olMA (meva) — urg'u oxirgi bo'g'inda.",
      "OLma (fe'l: «olmang» ma'nosida) — urg'u birinchi bo'g'inda, chunki bo'lishsizlik -ma qo'shimchasi urg'u olmaydi.",
    ], "Urg'u ma'no farqlaydi"),
    B.example("«Mashina» so'zini qanday ko'chirish mumkin?", [
      "Bo'g'inlar: ma-shi-na.",
      "«sh» birikmasi bo'linmaydi: mas-hina noto'g'ri.",
    ], "ma-shina yoki mashi-na"),
    B.exception(null, [
      "Bir bo'g'inli so'zlar ko'chirilmaydi: kel, gul, non.",
      "Birinchi bo'g'in bitta unlidan iborat bo'lsa, u satrda qoldirilmaydi: aka so'zi butunlay keyingi satrga o'tkaziladi.",
    ]),
    B.mistake(null, [
      "Bo'g'inlarni unlilar soniga qarab emas, «ko'z bilan» ajratish.",
      "Harf birikmasini bo'lib ko'chirish: tos-hkent.",
      "Bitta unlini satr oxirida qoldirish: o-ta.",
    ]),
    B.try(oq('a-uz-bu-t1', '1.1.3', { ...U(BU), d: 1, steps: ["Unlilar: o', i, u, i → 4."], rule: "Bo'g'inlar soni = unlilar soni." }, "«O'qituvchi» so'zida nechta bo'g'in bor? Son bilan yozing.", '4', "o'-qi-tuv-chi — 4 ta bo'g'in.", {}, 4)),
    B.method("Bo'g'in va urg'uni o'rgatish:", [
      "Chapak bilan bo'g'inlash: har bir bo'g'inga bitta chapak.",
      "Iyakka kaft qo'yish: har bir unlida iyak pastga tushadi — bo'g'inni sezish usuli.",
      "Urg'uni «chaqirish»: so'zni chaqirib aytganda urg'uli bo'g'in kuchli eshitiladi.",
      "Ko'chirish uchun bo'g'in sxemalari va «qaysi joyda chiziqcha qo'yish mumkin?» o'yini.",
    ]),
    B.summary(null, [
      "Bo'g'inlar soni = unlilar soni.",
      "Ko'chirishda bitta harf qolmaydi, harf birikmasi bo'linmaydi.",
      "Urg'u odatda oxirgi bo'g'inda; ba'zi qo'shimchalar urg'u olmaydi.",
    ]),
  ],
  check: [
    oq('a-uz-bu-c1', '1.1.3', { ...U(BU), steps: ["Unlilar: a, a, i, i."] }, "«Maktabimiz» so'zidagi bo'g'inlar sonini aniqlang va son bilan yozing.", '4', "mak-ta-bi-miz — 4 ta bo'g'in.", {}, 4),
    cq('a-uz-bu-c2', '1.1.3', { ...U(BU), rule: "Harf birikmasi (sh, ch, ng) ko'chirishda bo'linmaydi." }, "Satrdan satrga ko'chirishning qaysi namunasi qoidaga mos?",
      [['ma-shina'], ['mas-hina', "«sh» bo'lingan."], ['a-ka', "Bitta harf satrda qolgan."], ['to-ng', "«tong» — bir bo'g'inli so'z, ko'chirilmaydi."]], 'A', "ma-shi-na bo'g'inlari bo'yicha."),
    cq('a-uz-bu-c3', '1.1.3', { ...U(BU) }, "Qaysi so'zda birinchi bo'g'in ochiq?",
      [['o-na'], ['mak-tab', "«mak» — yopiq."], ["bog'-cha", "«bog'» — yopiq."], ['kel-di', "«kel» — yopiq."]], 'A', "«o» — unli bilan tugaydi, ochiq bo'g'in."),
    cq('a-uz-bu-c4', '1.1.3', { ...U(BU), d: 3 }, "O'zbek tilida urg'u odatda qaysi bo'g'inga tushadi?",
      [["So'zning oxirgi bo'g'iniga"], ["Har doim birinchi bo'g'iniga", "Bunday qoida o'zbek tiliga xos emas."], ["Doim o'rtadagi bo'g'inga", "Bunday qoida yo'q."], ["Urg'u yo'q", "Urg'u bor va ma'no farqlashi mumkin."]], 'A', "Odatda oxirgi bo'g'in; qo'shimcha qo'shilsa ko'chadi."),
    cq('a-uz-bu-c5', '1.1.3', { ...U(BU) }, "1-sinfda bo'g'inni sezdirishning eng qulay usuli?",
      [["So'zni aytib, har bir bo'g'inga chapak chalish yoki iyak harakatini sezish"], ["Bo'g'in ta'rifini yod oldirish", "Ta'rif sezgi bermaydi."], ["So'zni harflab o'qish", "Harflab o'qish bo'g'inni ko'rsatmaydi."], ["Faqat ko'chirib yozish", "Mexanik ish."]], 'A', "Harakat va eshitish bo'g'inni sezdiradi."),
  ],
});

/* ======================= So'z tarkibi ======================= */
const ST = 'uz-soz-tarkibi';
export const UZ_WORD_STRUCTURE = lesson({
  id: ST, module: 'uz-morfem', level: 'core', stage: 'C', minutes: 20, codes: ['1.2.2', '1.3.4'], requires: [UU], sourceIds: SRC,
  title: "So'z tarkibi: o'zak va qo'shimchalar",
  blocks: [
    B.intro("O'zbek tili — agglyutinativ til: so'z o'zakka qo'shimchalar ketma-ket qo'shilib hosil bo'ladi. Qo'shimchalarning turi va tartibini bilish imlo va so'z yasalishi uchun asosiy ko'nikma."),
    B.definition("**O'zak** — so'zning asosiy ma'noni bildiradigan, boshqa qismlarga bo'linmaydigan qismi. **So'z yasovchi qo'shimcha** yangi so'z hosil qiladi (gul → gulzor). **Shakl yasovchi qo'shimcha** so'zning shaklini o'zgartiradi, yangi so'z yasamaydi (gul → gullar, gulni)."),
    B.table(["Qo'shimcha turi", 'Vazifasi', 'Misol'], [
      ["So'z yasovchi", "Yangi so'z", "-chi (ishchi), -zor (gulzor), -kor (paxtakor), -li (tuzli), -siz (tuzsiz), -lik (do'stlik)"],
      ["Ko'plik", 'Son shakli', '-lar (kitoblar)'],
      ['Egalik', 'Kimga tegishli', '-im, -ing, -i (kitobim)'],
      ['Kelishik', "Gapdagi munosabat", '-ning, -ni, -ga, -da, -dan'],
    ], "Qo'shimchalar"),
    B.rule("Qo'shimchalar tartibi: **o'zak → so'z yasovchi → ko'plik → egalik → kelishik**. Tahlilni so'zning oxiridan boshlab, har bir qo'shimchaning ma'nosini so'rab olib borish kerak."),
    B.example("«Paxtakorlarimizga» so'zini tarkibga ajrating.", [
      "paxta — o'zak.",
      "-kor — so'z yasovchi (kasb egasi).",
      "-lar — ko'plik; -imiz — egalik (I shaxs ko'plik); -ga — jo'nalish kelishigi.",
    ], 'paxta-kor-lar-imiz-ga'),
    B.example("«Gulchilar» va «gullar»: farqi nimada?", [
      "gul-chi-lar: -chi yangi so'z yasaydi (gul bilan shug'ullanuvchi), -lar — ko'plik.",
      "gul-lar: faqat ko'plik shakli, yangi so'z emas.",
    ], "Yangi so'z va shakl"),
    B.example("«Tuzsiz» so'zining o'zagini qanday aniqlash mumkin?", [
      "O'zakdosh so'zlar: tuz, tuzli, tuzla.",
      "Umumiy qism — tuz; -siz — so'z yasovchi (belgi yo'qligi).",
    ], 'tuz-siz'),
    B.exception(null, [
      "Ba'zi qo'shimchalar qo'shilganda o'zakda tovush tushib qolishi mumkin: o'g'il + i → o'g'li, burun + i → burni.",
      "So'z yasovchi qo'shimcha shakl yasovchidan keyin kelmaydi: «gullarzor» noto'g'ri.",
    ]),
    B.mistake(null, [
      "So'zni bo'g'inlarga ajratib, uni tarkibga ajratish deb hisoblash.",
      "Ko'plik -lar ni so'z yasovchi deb hisoblash.",
      "Yasama so'zni o'zak deb olish: «paxtakor» ning o'zagini «paxtakor» deb ko'rsatish.",
    ]),
    B.try(cq('a-uz-st-t1', '1.2.2', { ...U(ST), d: 1, rule: "So'z yasovchi qo'shimcha yangi so'z hosil qiladi." }, "«ish» o'zagidan hosil bo'lgan so'zlardan qaysi biri yangi so'z (yasama so'z)?",
      [['ishchi'], ['ishlar', "-lar — ko'plik."], ['ishni', '-ni — kelishik.'], ['ishim', '-im — egalik.']], 'A', "-chi yangi so'z yasaydi: ish → ishchi.")),
    B.method("So'z tarkibini o'rgatish:", [
      "«O'zakdosh so'zlar oilasi»: daraxt rasmi, o'zak — tanasida, yasama so'zlar — shoxlarda.",
      "Qo'shimchani savol bilan aniqlash: nima o'zgardi — ma'nomi yoki shaklmi?",
      "Kartochkalardan so'z yig'ish: o'zak + qo'shimchalar to'g'ri tartibda.",
      "Imlo bilan bog'lash: -ga/-ka/-qa tanlovi o'zak oxiriga bog'liq.",
    ]),
    B.summary(null, [
      "O'zak + so'z yasovchi + shakl yasovchi qo'shimchalar.",
      "So'z yasovchi — yangi so'z; shakl yasovchi — shu so'zning shakli.",
      "Tahlil oxiridan boshlab, ma'noni so'rab olib boriladi.",
    ]),
  ],
  check: [
    cq('a-uz-st-c1', '1.2.2', { ...U(ST) }, "«Kitobxonlarga» so'zi qaysi javobda to'g'ri ajratilgan?",
      [['kitob-xon-lar-ga'], ['kito-bxon-larga', "O'zak va qo'shimchalar chegarasi buzilgan."], ['kitobxon-la-rga', "Qo'shimchalar noto'g'ri bo'lingan."], ['kit-obxon-lar-ga', "O'zak — kitob."]], 'A', "kitob — o'zak, -xon — so'z yasovchi, -lar — ko'plik, -ga — kelishik."),
    cq('a-uz-st-c2', '1.2.2', { ...U(ST) }, "Qaysi qo'shimcha shakl yasovchi?",
      [['-lar'], ['-chi', "So'z yasovchi."], ['-zor', "So'z yasovchi."], ['-li', "So'z yasovchi (sifat yasaydi)."]], 'A', "-lar ko'plik shaklini yasaydi."),
    cq('a-uz-st-c3', '1.3.4', { ...U(ST) }, "Qo'shimchalarning to'g'ri tartibi qaysi?",
      [["o'zak → so'z yasovchi → ko'plik → egalik → kelishik"], ["o'zak → kelishik → ko'plik", "Kelishik oxirida keladi."], ["o'zak → ko'plik → so'z yasovchi", "So'z yasovchi shakl yasovchidan oldin keladi."], ["kelishik → o'zak", "O'zak boshda turadi."]], 'A', "paxta-kor-lar-imiz-ga tartibi."),
    cq('a-uz-st-c4', '1.2.2', { ...U(ST) }, "«Do'stlik» so'zidagi -lik qanday qo'shimcha?",
      [["So'z yasovchi (mavhum ot yasaydi)"], ["Ko'plik", "Ko'plik — -lar."], ['Egalik', "Egalik — -im, -ing, -i."], ['Kelishik', "Kelishik — -ning, -ni, -ga, -da, -dan."]], 'A', "do'st → do'stlik: yangi so'z."),
    cq('a-uz-st-c5', '1.3.4', { ...U(ST), d: 3 }, "O'quvchi «gulzorlar» so'zining o'zagini «gulzor» deb ajratdi. Qaysi usul yordam beradi?",
      [["O'zakdosh so'zlarni topish (gul, gulchi, gulli) va umumiy qismni ajratish"], ["So'zni bo'g'inlarga ajratish", "Bo'g'in morfema emas."], ["So'zni ko'chirib yozish", "Tahlilga yordam bermaydi."], ["Lug'atdan so'zni topish", "O'zakni ko'rsatmaydi."]], 'A', "gul-zor-lar: o'zak — gul."),
  ],
});

export const UZ2_LESSONS = [UZ_VOWELS, UZ_SYLLABLE, UZ_WORD_STRUCTURE];
