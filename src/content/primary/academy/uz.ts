// O'zbek tili kursi (faqat o'zbek tilida imtihon topshiruvchilar uchun).
// Rus tili darslarining tarjimasi emas: o'zbek tili qonuniyatlari asosida yozilgan.
import { B, cq, lesson, oq } from './build';

const SRC = ['qosimova2022', 'imlo', 'spec2026'];

/* ---------------- Tovush va harf ---------------- */

const TH = 'uz-tovush-harf';
const TM = { lang: 'uz' as const, lesson: TH, src: SRC };

export const UZ_SOUNDS = lesson({
  id: TH, module: 'uz-fon', level: 'intro', minutes: 15, codes: ['1.1.1', '1.1.4', '1.3.3'], sourceIds: SRC,
  title: 'Tovush va harf',
  blocks: [
    B.intro("Bola avval gapirishni, keyin yozishni o'rganadi. Og'zaki nutq tovushlardan, yozma nutq harflardan iborat. Boshlang'ich sinfdagi ko'plab imlo xatolari tovush bilan harfni chalkashtirishdan kelib chiqadi. Shuning uchun fonetika ham, savod o'rgatish ham shu mavzudan boshlanadi."),
    B.definition("**Tovush** — nutqning eng kichik birligi: uni eshitamiz va talaffuz qilamiz. **Harf** — tovushning yozuvdagi belgisi: uni ko'ramiz va yozamiz."),
    B.table(['', 'Tovush', 'Harf'], [
      ['Qanday idrok qilinadi', 'Eshitiladi, aytiladi', "Ko'riladi, yoziladi"],
      ['Qanday yoziladi', 'Kvadrat qavsda: [sh]', 'Oddiy yozuvda: sh'],
      ['Unlilar', '6 ta: [a], [o], [u], [o‘], [e], [i]', "a, o, u, o', e, i"],
    ], 'Tovush va harf'),
    B.explain("O'zbek lotin yozuvida tovush va harf soni har doim ham mos kelmaydi:", [
      "**Harf birikmalari** sh, ch, ng — ikki harf, lekin **bitta tovush**: «shamol» so'zida 6 ta harf, lekin 5 ta tovush: [sh] [a] [m] [o] [l].",
      "**Tutuq belgisi (')** alohida tovush emas: u o' va g' harflarining tarkibida keladi yoki so'z ichida tovushni ajratib, cho'zib talaffuz qilishni ko'rsatadi (ma'no, sur'at).",
      "o' va g' — bitta harf, bitta tovush: «o'rik» so'zida 4 ta tovush: [o‘] [r] [i] [k].",
    ]),
    B.rule("Tovushlarni sanash uchun so'zni ko'z bilan o'qimay, **ovoz chiqarib talaffuz qiling**: sh, ch, ng birikmasi bitta tovush sifatida sanaladi."),
    B.example("«Choynak» so'zida nechta harf va nechta tovush bor?", [
      'Harflar: c, h, o, y, n, a, k — 7 ta.',
      "Talaffuz qilamiz: [ch] [o] [y] [n] [a] [k] — 6 ta tovush, chunki «ch» bitta tovush.",
    ], '7 ta harf, 6 ta tovush'),
    B.example("«Tong» so'zida nechta tovush bor?", [
      'Harflar: t, o, n, g — 4 ta.',
      "«ng» — bitta burun tovushi [ng]: [t] [o] [ng] — 3 ta tovush.",
    ], '3 ta tovush'),
    B.exception(null, [
      "Bo'g'in ko'chirishda harf birikmalari ajratilmaydi: ma-shina, to-ngi (mas-hina emas).",
      "o' va g' harflaridagi belgi ham, so'z ichidagi tutuq belgisi ham alohida tovush sifatida sanalmaydi.",
    ]),
    B.mistake(null, [
      "Harflar sonini tovushlar soni deb hisoblash («shamol» — 6 tovush).",
      "Tutuq belgisini alohida tovush deb sanash.",
      "Harf birikmasini ko'chirishda bo'lib yuborish: mas-hina.",
    ]),
    B.try(oq('a-uz-th-t1', '1.1.1', { ...TM, d: 1, steps: ["[ch] [o] [y] — «ch» bitta tovush.", '3 ta tovush.'] },
      "«Choy» so'zini ovoz chiqarib ayting va tovushlarini sanang. Javobni son bilan yozing.", '3', "[ch] [o] [y] — 3 ta tovush: «ch» harf birikmasi bitta tovushni bildiradi.", {}, 3)),
    B.method("Tovush va harf farqini qanday o'rgatish:", [
      "Avval faqat tovushlar bilan ishlang: so'zni eshitish, tovushni cho'zib aytish («shshsh-amol»), birinchi va oxirgi tovushni topish.",
      "Tovush modeli (fishkalar): har bir tovushga bitta fishka. Bola sxemani harflarni ko'rishdan oldin tuzadi.",
      "So'ng sxemani yozuv bilan solishtiring: «shamol» da fishkalar 5 ta, harflar 6 ta — nega? Shu tarzda harf birikmasi tushunchasi kiritiladi.",
      "Harflar kassasida s va h ni bitta kartochkaga yopishtirib, «sh» bitta tovushni bildirishini ko'rsating.",
      "Tushunishni tekshirish: «Harflari tovushlaridan ko'p bo'lgan so'z ayt», «Nega 'tong' so'zida 3 ta tovush?»",
    ]),
    B.summary(null, [
      "Tovushni eshitamiz va aytamiz, harfni ko'ramiz va yozamiz.",
      "sh, ch, ng — ikki harf, bitta tovush.",
      "Tutuq belgisi alohida tovush emas.",
      "Tovushlar talaffuz bo'yicha sanaladi.",
    ]),
  ],
  check: [
    cq('a-uz-th-c1', '1.1.1', { ...TM, rule: "sh, ch, ng — bitta tovush; harf soni tovushdan ko'p bo'ladi." },
      "Qaysi so'zda harflar soni tovushlar sonidan ko'p?",
      [['ishchi'], ['kitob', "5 ta harf, 5 ta tovush."], ['olma', '4 ta harf, 4 ta tovush.'], ['daraxt', '6 ta harf, 6 ta tovush.']],
      'A', "«ishchi» — 6 ta harf, 4 ta tovush: [i] [sh] [ch] [i]."),
    oq('a-uz-th-c2', '1.1.1', { ...TM, steps: ["[sh] [a] [m] [o] [l]", '5 ta tovush'] },
      "«Shamol» so'zini sekin talaffuz qiling. U nechta tovushdan iborat? (son)", '5', "[sh] [a] [m] [o] [l] — 5 ta tovush.", {}, 5),
    cq('a-uz-th-c3', '1.1.4', { ...TM },
      "Ikki harf bilan yozilib, bitta tovushni bildiradigan birikmalar to'liq va to'g'ri ko'rsatilgan javobni toping.",
      [["sh, ch, ng"], ["o', g', sh", "o' va g' — alohida harflar, harf birikmasi emas."], ['ch, x, h', 'x va h — alohida harflar.'], ["ng, q, g'", "q va g' — alohida harflar."]],
      'A', "Harf birikmalari: sh, ch, ng."),
    cq('a-uz-th-c4', '1.3.3', { ...TM, rule: "Tovush tahlili talaffuz va model asosida olib boriladi." },
      "1-sinf o'quvchisi «choy» so'zida 4 ta tovush bor, deydi. Unga eng ko'p nima yordam beradi?",
      [
        ["So'zni uch marta ko'chirib yozish", "Ko'chirish harflarga tayanishni mustahkamlaydi."],
        ["So'zni sekin aytib, har bir tovushga bitta fishka qo'yish va sxemani harflar bilan solishtirish"],
        ["Qoidani yod oldirish", "Tovush tajribasisiz qoida ishlamaydi."],
        ["So'zni bo'g'inlarga ajratish", "Bo'g'inlar harf birikmasini ko'rsatmaydi."],
      ], 'B', "[ch] [o] [y] — 3 ta tovush; model buni ko'rinadigan qiladi."),
  ],
});

/* ---------------- Ot ---------------- */

const OT = 'uz-ot';
const OM = { lang: 'uz' as const, lesson: OT, src: SRC };

export const UZ_OT = lesson({
  id: OT, module: 'uz-morf', level: 'core', minutes: 25, codes: ['1.2.3', '1.3.6', '1.1.6'], requires: [TH], sourceIds: SRC,
  title: "Ot so'z turkumi",
  blocks: [
    B.intro("Narsa, shaxs, joy va hodisalarning nomlarisiz birorta fikrni ifodalab bo'lmaydi. Otni ishonchli aniqlash va uning shakllarini to'g'ri yasash kelishik qo'shimchalari imlosi uchun ham, gap bo'laklarini topish uchun ham zarur."),
    B.definition("**Ot** — shaxs, narsa, joy va hodisani bildiradigan mustaqil so'z turkumi. U **kim? nima? qayer?** so'roqlariga javob beradi."),
    B.explain("Grammatikada «narsa» keng ma'noda tushuniladi:", [
      'shaxslar: o\'quvchi, ona;', 'narsalar: daftar, stol;', 'joylar: maktab, Toshkent (qayer?);',
      "hodisalar: yomg'ir, bayram;", "harakat va belgi nomlari: **o'qish**, **yaxshilik**.",
    ]),
    B.rule("So'z turkumi uchta belgi birgalikda aniqlanadi: **umumiy ma'no** + **so'roq** + **grammatik shakllar** (son, egalik, kelishik). Faqat ma'noga tayanish xatoga olib keladi."),
    B.table(['Belgi', 'Mazmuni', 'Misol'], [
      ['Atoqli / turdosh', "Yakka nom / umumiy nom", "Toshkent, Aziz — shahar, bola"],
      ['Aniq / mavhum', "Ko'z bilan ko'rinadi / tushuncha", "kitob — do'stlik"],
      ['Son', 'Birlik / ko\'plik (-lar)', 'kitob — kitoblar'],
      ['Egalik', 'Narsa kimga tegishli', "kitobim, kitobing, kitobi"],
      ['Kelishik', "Gapdagi boshqa so'zga munosabat", 'kitobni, kitobga'],
    ], "Otning belgilari"),
    B.table(['Kelishik', "Qo'shimcha", "So'roqlar", 'Misol'], [
      ['Bosh', '—', 'kim? nima? qayer?', 'maktab'],
      ['Qaratqich', '-ning', 'kimning? nimaning? qayerning?', 'maktabning'],
      ['Tushum', '-ni', 'kimni? nimani? qayerni?', 'maktabni'],
      ["Jo'nalish", '-ga (-ka, -qa)', 'kimga? nimaga? qayerga?', 'maktabga'],
      ["O'rin-payt", '-da', 'kimda? nimada? qayerda?', 'maktabda'],
      ['Chiqish', '-dan', 'kimdan? nimadan? qayerdan?', 'maktabdan'],
    ], "Olti kelishik"),
    B.table(['Shaxs', 'Birlik', "Ko'plik"], [
      ['I shaxs', 'kitob**im**', 'kitob**imiz**'],
      ['II shaxs', 'kitob**ing**', 'kitob**ingiz**'],
      ['III shaxs', 'kitob**i**', 'kitob**i** / kitob**lari**'],
    ], "Egalik qo'shimchalari"),
    B.example("«Bolalar bog'dagi daraxtlarga suv quyishdi» gapidagi «daraxtlarga» so'zini tahlil qiling.", [
      "So'roq: quyishdi (nimaga?) daraxtlarga — ot.",
      "Asos: daraxt — turdosh, aniq ot.",
      "-lar — ko'plik qo'shimchasi.",
      "-ga — jo'nalish kelishigi qo'shimchasi.",
      "Gapdagi vazifasi: to'ldiruvchi.",
    ], "daraxtlarga — turdosh ot, ko'plikda, jo'nalish kelishigida"),
    B.exception(null, [
      "O'zbek tilida otlarda **rod (jins) kategoriyasi yo'q** — rus tilidan farqli ravishda.",
      "-ga qo'shimchasi k, g bilan tugagan so'zlarga **-ka** (terakka, bargka), q, g' bilan tugagan so'zlarga **-qa** (qishloqqa, bog'qa) shaklida qo'shiladi.",
      "-lar faqat ko'plikni emas, hurmatni ham bildirishi mumkin: dadamlar keldilar.",
      "Tushum kelishigi belgisiz ham bo'lishi mumkin: kitob o'qidim (umuman) — kitobni o'qidim (aniq kitob).",
    ]),
    B.mistake(null, [
      "Harakat nomini (o'qish) yoki belgi nomini (yaxshilik) faqat ma'nosiga qarab boshqa turkumga kiritish — so'roqni tekshirish kerak.",
      "«qishloqga», «terakga» deb yozish.",
      "Atoqli otlarni kichik harf bilan yozish: «toshkent».",
      "Qaratqich (-ning) va tushum (-ni) qo'shimchalarini aralashtirish: «kitobning o'qidim».",
    ]),
    B.try(cq('a-uz-ot-t1', '1.3.6', { ...OM, d: 1, rule: "Ot kim? nima? qayer? so'roqlariga javob beradi." },
      "Qaysi so'z ot?",
      [["o'qish"], ["o'qidi", "Fe'l: nima qildi?"], ["o'qimishli", 'Sifat: qanday?'], ["o'qib", "Ravishdosh: qanday qilib?"]],
      'A', "«O'qish» — nima? — harakat nomi, ot kabi so'roq oladi.")),
    B.method("Otni bolalarga qanday tanishtirish:", [
      "«Kim? Nima?» o'yini: narsalar va rasmlar ko'rsatiladi, bolalar so'roq qo'yadi. Xulosa: kim? — shaxslar, nima? — narsalar.",
      "«Qayer?» so'rog'ini alohida mashq qiling: maktab, bog', Samarqand — bu otlar ham joy nomi.",
      "Kartochkalarni rasm bo'yicha emas, so'roq bo'yicha guruhlang — bolalar grammatikaga tayanishni o'rganadi.",
      "Kelishiklarni qo'shimcha jadvalini yodlatish orqali emas, gapda so'roq berish orqali o'rgating.",
      "Imlo bilan bog'lang: «-ga / -ka / -qa» qo'shimchalarini so'z oxiridagi tovush bo'yicha guruhlash.",
      "Tushunishni tekshirish: «'yaxshilik' ot ekanini isbotla», «Bitta otni olti kelishikda gap ichida qo'lla».",
    ]),
    B.summary(null, [
      "Ot — shaxs, narsa, joy, hodisa; kim? nima? qayer?",
      "Grammatik shakllar: son, egalik, kelishik; rod yo'q.",
      "Olti kelishik: bosh, qaratqich, tushum, jo'nalish, o'rin-payt, chiqish.",
      "-ga → -ka / -qa imlo qoidasini unutmang.",
    ]),
  ],
  check: [
    cq('a-uz-ot-c1', '1.1.6', { ...OM, rule: "k, g → -ka; q, g' → -qa.", steps: ["So'z oxiri: «q».", "q bilan tugagan so'zga -qa qo'shiladi: qishloqqa."] },
      "Qaysi so'z to'g'ri yozilgan?",
      [['qishloqqa'], ['qishloqga', "q bilan tugagan so'zga -ga emas, -qa qo'shiladi."], ['qishloqka', "-ka k, g bilan tugagan so'zlarga qo'shiladi."], ['qishloga', "O'zakdagi «q» tushib qolgan."]],
      'A', "Imlo qoidasi: qishloq + -qa = qishloqqa."),
    cq('a-uz-ot-c2', '1.2.3', { ...OM, rule: "Kelishik so'roq orqali aniqlanadi.", steps: ["keldi (qayerdan?) maktabdan", "-dan — chiqish kelishigi."] },
      "«Aziz maktabdan kech keldi» gapidagi «maktabdan» so'zi qaysi kelishikda?",
      [["O'rin-payt", "O'rin-payt: qayerda? (-da)."], ['Chiqish'], ["Jo'nalish", "Jo'nalish: qayerga? (-ga)."], ['Qaratqich', "Qaratqich: qayerning? (-ning)."]],
      'B', "keldi (qayerdan?) maktabdan — chiqish kelishigi."),
    cq('a-uz-ot-c3', '1.2.3', { ...OM },
      "O'zbek tilidagi otga xos bo'lmagan grammatik kategoriya qaysi?",
      [['Rod (jins)'], ['Son', "Otlarda bor: kitob — kitoblar."], ['Egalik', 'Bor: kitobim, kitobing.'], ['Kelishik', "Bor: olti kelishik."]],
      'A', "O'zbek tilida rod kategoriyasi yo'q."),
    cq('a-uz-ot-c4', '1.3.6', { ...OM, d: 3, rule: "So'z turkumi ma'no + so'roq + grammatik belgilar bilan aniqlanadi." },
      "O'quvchi «yaxshilik» so'zini sifat deb hisobladi, chunki u «yaxshi» so'zidan yasalgan. Qaysi yondashuv xatoni tuzatadi?",
      [
        ["So'zning qaysi so'zdan yasalganiga qarash", "Yasalish manbai turkumni belgilamaydi: -lik ot yasaydi."],
        ["So'roq berish va grammatik shakllarini tekshirish: «yaxshilik» — nima? — ko'plik va kelishik oladi (yaxshiliklar, yaxshilikni), demak ot"],
        ["Qoidani yod oldirish", "Usul bermaydi."],
        ["Lug'atdan ta'rif ko'chirish", "Turkumni aniqlash ko'nikmasini shakllantirmaydi."],
      ], 'B', "-lik qo'shimchasi ot yasaydi; so'roq va shakllar buni tasdiqlaydi."),
    cq('a-uz-ot-c5', '1.1.6', { ...OM },
      "Atoqli ot qatnashgan gaplardan qaysi biri xatosiz yozilgan?",
      [["Biz Samarqandga bordik."], ["biz samarqandga bordik.", "Gap boshi va atoqli ot bosh harf bilan yoziladi."], ["Biz Samarqand Shahriga bordik.", "«shahar» turdosh ot — kichik harf bilan."], ["Biz samarqandga bordik.", "Atoqli ot bosh harf bilan yoziladi."]],
      'A', "Atoqli ot (Samarqand) va gap boshi bosh harf bilan yoziladi."),
  ],
});

export const UZ_LESSONS = [UZ_SOUNDS, UZ_OT];
