// O'zbek tili — 3-to'plam (faqat o'zbek tilida imtihon topshiruvchilar uchun): ot, egalik, kelishik,
// sifat, son, fe'l. Rus tili darslarining tarjimasi emas.
import { B, cq, lesson, oq } from './build';

const SRC = ['qosimova2022', 'imlo', 'sayfullayeva', 'jamolxonov', 'spec2026'];
const U = (l: string) => ({ lang: 'uz' as const, lesson: l, src: SRC });

/* ======================= 1. Otlarning grammatik xususiyatlari ======================= */
const OG = 'uz-ot-xususiyat';
export const UZ_OT_GRAM = lesson({
  id: OG, module: 'uz-morf', level: 'core', stage: 'C', minutes: 20, codes: ['1.2.3', '1.3.6'], requires: ['uz-ot'], sourceIds: SRC,
  title: "Otlarning grammatik xususiyatlari: son, egalik, kelishik",
  blocks: [
    B.intro("«Kitoblarimni» — bitta so'z, lekin unda to'rtta ma'lumot bor: nima (kitob), nechta (ko'p), kimniki (meniki), gapdagi vazifasi (nimani?). O'zbek tilida bu ma'lumotlar qo'shimchalar orqali beriladi va ular qat'iy tartibda qo'shiladi."),
    B.definition("Otning uchta grammatik kategoriyasi bor: **son** (birlik — kitob, ko'plik — kitoblar), **egalik** (narsaning kimga tegishliligi: kitobim, kitobing, kitobi), **kelishik** (otning gapdagi boshqa so'zlarga munosabati: kitobni, kitobga, kitobdan). Bundan tashqari otlar ma'nosiga ko'ra **atoqli** (Toshkent, Aziz) va **turdosh** (shahar, bola), **aniq** (daraxt) va **mavhum** (do'stlik), tuzilishiga ko'ra **tub** (ish) va **yasama** (ishchi) bo'ladi."),
    B.table(['Qism', 'Vazifasi', 'Misol: kitoblarimni'], [
      ["O'zak", "Asosiy ma'no", 'kitob'],
      ["Ko'plik qo'shimchasi", 'Son', '-lar'],
      ['Egalik qo\'shimchasi', 'Tegishlilik (shaxs)', '-im'],
      ['Kelishik qo\'shimchasi', "Gapdagi munosabat", '-ni'],
    ], "Qo'shimchalar tartibi"),
    B.rule("Qo'shimchalar tartibi: **o'zak + ko'plik + egalik + kelishik**: bola-lar-imiz-ga, daftar-lar-ing-dan. Bu tartib o'zgarmaydi: «kitobimlar» yoki «kitobnilar» deb bo'lmaydi. **Ko'plik qo'shimchasi -lar** asosan ko'plikni bildiradi, lekin hurmat (Dadamlar keldilar), taxminiylik (soat o'nlarda) ma'nolarini ham beradi."),
    B.example("«Do'stlarimizdan» so'zini tarkibiga ajrating.", [
      "O'zak: do'st (asosiy ma'no).",
      "-lar — ko'plik qo'shimchasi.",
      "-imiz — egalik qo'shimchasi (1-shaxs ko'plik: bizning).",
      "-dan — chiqish kelishigi qo'shimchasi.",
    ], "do'st + lar + imiz + dan"),
    B.example("«Bolalarning kulgisi butun hovlini to'ldirdi» gapidagi otlarning grammatik belgilarini aniqlang.", [
      "Bolalarning: ko'plikda (-lar), qaratqich kelishigida (-ning).",
      "Kulgisi: birlikda, 3-shaxs egalik (-si), bosh kelishikda.",
      "Hovlini: birlikda, tushum kelishigida (-ni).",
    ], "bolalarning — ko'plik, qaratqich; kulgisi — egalik, bosh k.; hovlini — tushum k."),
    B.example("Quyidagi otlarni aniq va mavhumga ajrating: «quvonch, stol, bilim, olma, mehr».", [
      "Aniq otlar ko'z bilan ko'rib, qo'l bilan ushlab bo'ladigan narsalarni bildiradi: stol, olma.",
      "Mavhum otlar tushuncha, his, holatni bildiradi: quvonch, bilim, mehr.",
    ], "aniq: stol, olma; mavhum: quvonch, bilim, mehr"),
    B.exception(null, [
      "Ba'zi otlar ko'plikda deyarli qo'llanmaydi: suv, un, oltin (moddalar) — «suvlar» faqat «daryo suvlari» kabi maxsus ma'noda.",
      "-lar har doim ko'plik emas: «Onamlar keldilar» — hurmat ma'nosi.",
    ]),
    B.mistake(null, [
      "Qo'shimchalar tartibini buzish: «kitobimlar» (to'g'ri: kitoblarim).",
      "Yasovchi qo'shimchani (ish-chi) shakl yasovchi (ish-lar) bilan aralashtirish.",
      "Atoqli otni kichik harf bilan yozish: «samarqand» (to'g'ri: Samarqand).",
    ]),
    B.apply("Morfemik tahlil — imlo uchun ham kerak: qo'shimchalarni to'g'ri ajrata olgan o'quvchi «o'g'lim», «burni» kabi o'zgarishli shakllarni ham tushunadi va qo'shimchalarni tushirib qoldirmaydi."),
    B.try(cq('a-uz-og-t1', '1.2.3', { ...U(OG), d: 1, rule: "o'zak + ko'plik + egalik + kelishik." },
      "Qaysi so'zda qo'shimchalar to'g'ri tartibda qo'shilgan?",
      [["uylarimizga"], ["uyimizlarga", "Ko'plik egalikdan oldin keladi."], ["uylargamiz", "Kelishik eng oxirida bo'ladi."], ["uygalarimiz", "Kelishik egalik va ko'plikdan keyin keladi."]],
      'A', "uy + lar + imiz + ga: o'zak, ko'plik, egalik, kelishik.")),
    B.method("Otning grammatik belgilarini o'rgatish:", [
      "«Poyezd» modeli: o'zak — lokomotiv, qo'shimchalar — vagonlar; vagonlar tartibini almashtirib bo'lmaydi.",
      "Rangli belgilash: ko'plik — yashil, egalik — ko'k, kelishik — qizil.",
      "So'z yasash o'yini: bitta o'zakdan ketma-ket qo'shimcha qo'shib, har bir bosqichda ma'no qanday o'zgarganini aytish.",
      "Mavhum otlarni tushuntirishda «ko'rib bo'ladimi? ushlab bo'ladimi?» savoli.",
    ]),
    B.summary(null, [
      "Otning grammatik kategoriyalari: son, egalik, kelishik.",
      "Tartib: o'zak + ko'plik + egalik + kelishik.",
      "Otlar: atoqli/turdosh, aniq/mavhum, tub/yasama.",
    ]),
  ],
  check: [
    cq('a-uz-og-c1', '1.2.3', { ...U(OG) }, "«Ukalarimning» tarkibidagi «-im» qismi qanday vazifani bajaradi?",
      [["Egalik qo'shimchasi (1-shaxs birlik)"], ["Ko'plik qo'shimchasi", "Ko'plik — «-lar»."], ["Kelishik qo'shimchasi", "Kelishik — «-ning»."], ["So'z yasovchi qo'shimcha", "«-im» bu yerda yangi so'z yasamaydi."]],
      'A', "uka + lar + im + ning: «-im» — «mening» ma'nosi."),
    cq('a-uz-og-c2', '1.2.3', { ...U(OG) }, "Qaysi qatorda faqat mavhum otlar berilgan?",
      [["sabr, orzu, quvonch"], ["sabr, olma, quvonch", "Olma — aniq ot."], ["kitob, orzu, sabr", "Kitob — aniq ot."], ["daraxt, tosh, quvonch", "Daraxt va tosh — aniq otlar."]],
      'A', "Sabr, orzu, quvonch — tushuncha va his: mavhum otlar."),
    cq('a-uz-og-c3', '1.2.3', { ...U(OG) }, "«Buvamlar bugun keladilar» gapida «-lar» qanday ma'noda?",
      [["Hurmat ma'nosida"], ["Ko'plik ma'nosida", "Gap bitta kishi haqida."], ["Taxminiylik ma'nosida", "Vaqt yoki son taxmin qilinmayapti."], ["So'z yasash uchun", "«-lar» so'z yasamaydi."]],
      'A', "Bitta shaxsga nisbatan «-lar» hurmatni bildiradi."),
    oq('a-uz-og-c4', '1.2.3', { ...U(OG), steps: ["maktab — o'zak.", "-lar, -imiz, -da — 3 ta qo'shimcha."] },
      "«Maktablarimizda» so'zida nechta qo'shimcha bor? (son)", '3', "maktab + lar (ko'plik) + imiz (egalik) + da (o'rin-payt kelishigi) — 3 ta qo'shimcha.", {}, 3),
    cq('a-uz-og-c5', '1.3.6', { ...U(OG) }, "O'quvchi «kitobimlar» deb yozdi. Qaysi usul xatoni tushunishga eng ko'p yordam beradi?",
      [["Qo'shimchalarni kartochkaga yozib, «o'zak — ko'plik — egalik — kelishik» tartibida terish"], ["To'g'ri so'zni besh marta yozdirish", "Mexanik takror sababni tushuntirmaydi."], ["Xatoni qizil bilan chizib qo'yish", "Usul ko'rsatilmaydi."], ["Qoidani yod oldirish", "Amaliy harakatsiz qoida tez unutiladi."]],
      'A', "Kartochkalar bilan ishlash tartibni ko'rinadigan va qo'l bilan sezadigan qiladi."),
  ],
});

/* ======================= 2. Egalik qo'shimchalari ======================= */
const EG = 'uz-egalik';
export const UZ_EGALIK = lesson({
  id: EG, module: 'uz-morf', level: 'core', stage: 'C', minutes: 22, codes: ['1.2.3', '1.1.6', '1.3.6'], requires: [OG], sourceIds: SRC,
  title: "Egalik qo'shimchalari va ularning imlosi",
  blocks: [
    B.intro("«Mening kitobim», «sening kitobing», «uning kitobi» — egalik qo'shimchalari narsaning kimga tegishli ekanini ko'rsatadi. Ular qo'shilganda ba'zi so'zlarda tovush o'zgaradi yoki tushib qoladi: o'g'il — o'g'li, tilak — tilagi. Aynan shu yerda o'quvchilar ko'p xato qiladi."),
    B.definition("**Egalik qo'shimchalari** — otga qo'shilib, predmetning uch shaxsdan biriga (1-shaxs — so'zlovchi, 2-shaxs — tinglovchi, 3-shaxs — boshqa) tegishliligini bildiradigan qo'shimchalar. Ular so'z unli yoki undosh bilan tugashiga qarab ikki xil shaklda bo'ladi."),
    B.table(['Shaxs', 'Birlik: unlidan keyin', 'Birlik: undoshdan keyin', "Ko'plik: unlidan keyin", "Ko'plik: undoshdan keyin"], [
      ['1-shaxs', 'ona-m', 'kitob-im', 'ona-miz', 'kitob-imiz'],
      ['2-shaxs', 'ona-ng', 'kitob-ing', 'ona-ngiz', 'kitob-ingiz'],
      ['3-shaxs', 'ona-si', 'kitob-i', 'ona-si', 'kitob-i'],
    ], "Egalik qo'shimchalari"),
    B.rule("Imlo qoidalari: 1) **k** va **q** bilan tugagan ko'p bo'g'inli so'zlarga unli bilan boshlanadigan egalik qo'shimchasi qo'shilganda **k → g**, **q → g'** bo'ladi: tilak — tilagi, yurak — yuragim, qishloq — qishlog'imiz, o'rtoq — o'rtog'i. Bir bo'g'inli so'zlarda o'zgarmaydi: yuk — yuki, ko'k — ko'ki. 2) Ba'zi ikki bo'g'inli so'zlarda ikkinchi bo'g'indagi unli tushadi: o'g'il — o'g'lim, burun — burni, og'iz — og'zi, singil — singlim, qorin — qorni."),
    B.example("«Qoshiq» va «yurak» so'zlariga 3-shaxs egalik qo'shimchasini qo'shing.", [
      "Ikkalasi ko'p bo'g'inli va k/q bilan tugaydi.",
      "Unli bilan boshlanadigan «-i» qo'shiladi: q → g', k → g.",
      "qoshiq + i → qoshig'i; yurak + i → yuragi.",
    ], "qoshig'i, yuragi"),
    B.example("«O'g'il» so'zini 1-shaxs birlik va 3-shaxs egalikda yozing.", [
      "O'g'il + im: ikkinchi bo'g'indagi «i» tushadi → o'g'lim.",
      "O'g'il + i → o'g'li.",
      "Tekshirish: talaffuzda ham «o'g'lim», «o'g'li» deymiz.",
    ], "o'g'lim, o'g'li"),
    B.example("«Mening daftarim» va «daftarim» — farqi bormi?", [
      "«Mening» — qaratqich kelishigidagi olmosh, «-im» — egalik qo'shimchasi; ikkalasi bir ma'noni beradi.",
      "O'zbek tilida egalik qo'shimchasi yetarli: «daftarim» deb aytish mumkin; «mening» ta'kid uchun qo'shiladi.",
      "Xato: «mening daftar» — egalik qo'shimchasi tushib qolgan.",
    ], "Egalik qo'shimchasi majburiy, olmosh — ixtiyoriy"),
    B.exception(null, [
      "Ba'zi o'zlashma so'zlarda k/q o'zgarmaydi: ishtirok — ishtiroki, idrok — idroki.",
      "Unli tushishi faqat ayrim so'zlarda bo'ladi (o'g'il — o'g'li, ko'ngil — ko'ngli); «gul — guli», «bilim — bilimi», «quyosh — quyoshi» kabi so'zlarda unli tushmaydi.",
    ]),
    B.mistake(null, [
      "k/q ni saqlab yozish: «yuraki», «qishloqi» (to'g'ri: yuragi, qishlog'i).",
      "Unlini tushirmaslik: «o'g'ilim», «burunim» (to'g'ri: o'g'lim, burnim).",
      "Unli bilan tugagan so'zga «-i» qo'shish: «onai» (to'g'ri: onasi).",
    ]),
    B.try(cq('a-uz-eg-t1', '1.1.6', { ...U(EG), d: 1, rule: "Ko'p bo'g'inli so'zda q → g'." },
      "«O'rtoq» so'ziga 1-shaxs birlik egalik qo'shimchasi qo'shilgan to'g'ri shaklni toping.",
      [["o'rtog'im"], ["o'rtoqim", "Ko'p bo'g'inli so'zda q → g' bo'ladi."], ["o'rtoqm", "Undoshdan keyin «-im» qo'shiladi."], ["o'rtog'm", "Undoshdan keyin «-im» shakli keladi."]],
      'A', "o'rtoq + im → o'rtog'im.")),
    B.method("Egalikni o'rgatish:", [
      "Shaxslar jadvali bilan «Kimning?» o'yini: o'qituvchi narsani ko'rsatadi, bolalar «kitobim — kitobing — kitobi» deb aytadi.",
      "Juft so'zlar ustida kuzatish: tilak — tilagi, yuk — yuki; bolalar qoidani o'zlari xulosa qiladi.",
      "Talaffuz orqali tekshirish: «burni» deymizmi yoki «buruni»? — imlo talaffuzga tayanadi.",
      "Xatolar daftari: o'quvchining o'z xatolari bo'yicha qisqa mashqlar.",
    ]),
    B.summary(null, [
      "Egalik: 1-shaxs -(i)m/-(i)miz, 2-shaxs -(i)ng/-(i)ngiz, 3-shaxs -i/-si.",
      "Ko'p bo'g'inli so'zlarda k → g, q → g'.",
      "Ayrim so'zlarda unli tushadi: o'g'li, burni, og'zi.",
    ]),
  ],
  check: [
    cq('a-uz-eg-c1', '1.1.6', { ...U(EG) }, "«Tayoq» so'zining 3-shaxs egalik shakli qaysi?",
      [["tayog'i"], ["tayoqi", "Ko'p bo'g'inli so'zda q → g'."], ["tayoqsi", "Undoshdan keyin «-i» qo'shiladi."], ["tayog'si", "«-si» faqat unlidan keyin."]],
      'A', "tayoq + i → tayog'i."),
    cq('a-uz-eg-c2', '1.1.6', { ...U(EG) }, "Egalik qo'shilganda unli tushadigan so'zlar to'g'ri yozilgan qatorni toping.",
      [["burni, og'zi, singlim"], ["buruni, og'zi, singlim", "To'g'ri: burni (unli tushadi)."], ["burni, og'izi, singlim", "To'g'ri: og'zi."], ["burni, og'zi, singilim", "To'g'ri: singlim."]],
      'A', "Bu so'zlarda ikkinchi bo'g'indagi unli tushadi."),
    cq('a-uz-eg-c3', '1.2.3', { ...U(EG) }, "«Dalamiz» so'zidagi egalik qo'shimchasi qaysi shaxs va sonni bildiradi?",
      [["1-shaxs ko'plik"], ["1-shaxs birlik", "Birlikda «dalam» bo'lardi."], ["2-shaxs ko'plik", "2-shaxs ko'plik — «dalangiz»."], ["3-shaxs", "3-shaxs — «dalasi»."]],
      'A', "«-miz» — bizning: 1-shaxs ko'plik."),
    cq('a-uz-eg-c4', '1.1.6', { ...U(EG) }, "Qaysi so'zda egalik qo'shimchasi qo'shilganda k o'zgarmaydi?",
      [["yuk"], ["tilak", "Ko'p bo'g'inli: tilagi."], ["kurak", "Ko'p bo'g'inli: kuragi."], ["yurak", "Ko'p bo'g'inli: yuragi."]],
      'A', "Bir bo'g'inli so'zlarda k saqlanadi: yuki."),
    cq('a-uz-eg-c5', '1.3.6', { ...U(EG) }, "2-sinf o'quvchisi «qishloqimiz» deb yozdi. O'qituvchining eng to'g'ri harakati?",
      [["So'zni ovoz chiqarib aytishni so'rash va «qishloq — qishlog'imiz», «tayoq — tayog'i» juftlarini solishtirib, qoidani birga chiqarish"], ["Faqat to'g'ri javobni aytish", "O'quvchi qoidani tushunmaydi."], ["Xatoni e'tiborsiz qoldirish", "Xato mustahkamlanadi."], ["Diktantni qayta yozdirish", "Usul o'rgatilmaydi."]],
      'A', "Talaffuz va juftliklar orqali qoida tushunib o'zlashtiriladi."),
  ],
});

/* ======================= 3. Kelishiklar ======================= */
const KE = 'uz-kelishik';
export const UZ_KELISHIK = lesson({
  id: KE, module: 'uz-morf', level: 'core', stage: 'B', minutes: 25, codes: ['1.2.3', '1.1.6', '1.3.6'], requires: [EG], sourceIds: SRC,
  title: "Kelishiklar: ma'nosi, so'roqlari va imlosi",
  blocks: [
    B.intro("Kelishik qo'shimchasi otni gapdagi boshqa so'zlar bilan bog'laydi: «maktab**ga** bordim», «maktab**dan** keldim». O'zbek tilida oltita kelishik bor va har birining o'z so'rog'i va qo'shimchasi bor."),
    B.definition("**Kelishik** — otning gapdagi boshqa so'zlarga munosabatini ko'rsatuvchi grammatik shakl. **Turlanish** — otning kelishiklar bo'yicha o'zgarishi. Bosh kelishikning maxsus qo'shimchasi yo'q; qolgan beshtasi qo'shimcha bilan yasaladi."),
    B.table(['Kelishik', "So'roqlari", "Qo'shimchasi", 'Misol'], [
      ['Bosh', "kim? nima? qayer?", '—', 'kitob'],
      ['Qaratqich', "kimning? nimaning? qayerning?", '-ning', 'kitobning'],
      ['Tushum', "kimni? nimani? qayerni?", '-ni', 'kitobni'],
      ["Jo'nalish", "kimga? nimaga? qayerga?", '-ga (-ka, -qa)', 'kitobga'],
      ["O'rin-payt", "kimda? nimada? qayerda? qachon?", '-da', 'kitobda'],
      ['Chiqish', "kimdan? nimadan? qayerdan?", '-dan', 'kitobdan'],
    ], "Oltita kelishik"),
    B.rule("Jo'nalish kelishigi imlosi: **k** yoki **g** bilan tugagan so'zlarga **-ka** (terak — terakka, barg — bargka), **q** yoki **g'** bilan tugagan so'zlarga **-qa** (qishloq — qishloqqa, tog' — tog'qa), qolganlarga **-ga** (maktabga, uyga) qo'shiladi. Egalik qo'shimchasidan keyin har doim **-ga**: uyimga, qishlog'imga, teragiga."),
    B.example("«Bayroq», «chelak», «bog'», «shahar» so'zlariga jo'nalish kelishigi qo'shimchasini qo'shing.", [
      "bayroq — q bilan tugaydi → bayroqqa.",
      "chelak — k → chelakka.",
      "bog' — g' → bog'qa.",
      "shahar — boshqa undosh → shaharga.",
    ], "bayroqqa, chelakka, bog'qa, shaharga"),
    B.example("«Bahorda daraxtlar gulladi» gapidagi «bahorda» qaysi kelishikda?", [
      "So'roq beramiz: qachon? — bahorda.",
      "«-da» qo'shimchasi va «qachon?» so'rog'i — o'rin-payt kelishigi (payt ma'nosi).",
    ], "O'rin-payt kelishigi"),
    B.example("«Men kitob o'qidim» va «Men kitobni o'qidim» — farqi nimada?", [
      "Birinchi gapda tushum kelishigi qo'shimchasisiz (belgisiz): umuman kitob o'qish.",
      "Ikkinchisida «-ni» bilan (belgili): aniq, ma'lum bir kitob.",
      "Xuddi shunday qaratqich ham belgisiz bo'ladi: «maktab hovlisi» (= maktabning hovlisi).",
    ], "Belgisiz shakl — umumiy, belgili — aniq narsa"),
    B.example("«Qishlog'imizdan» so'zini tahlil qiling.", [
      "O'zak: qishloq; egalik qo'shilganda q → g': qishlog'-.",
      "-imiz — 1-shaxs ko'plik egalik.",
      "-dan — chiqish kelishigi: qayerdan?",
    ], "qishloq + imiz + dan: chiqish kelishigi"),
    B.exception(null, [
      "Tushum va qaratqich kelishiklari belgisiz (qo'shimchasiz) qo'llanishi mumkin: «xat yozdi», «maktab bog'i».",
      "Egalikdan keyin jo'nalish qo'shimchasi o'zgarmaydi: terak — terakka, lekin teragi — teragiga.",
      "3-shaxs egalikdan keyin kelishik qo'shimchalari odatdagidek qo'shiladi: kitobida, uyiga, uyini; so'zlashuvdagi «uyinga», «kitobinda» shakllari adabiy emas.",
    ]),
    B.mistake(null, [
      "«Terakga», «qishloqga» deb yozish (to'g'ri: terakka, qishloqqa).",
      "Qaratqich va tushumni chalkashtirish: «kitobning o'qidim» (to'g'ri: kitobni o'qidim).",
      "«Qachon?» so'rog'iga javob beruvchi o'rin-payt kelishigini «hol» deb, kelishikni aniqlamaslik.",
    ]),
    B.try(cq('a-uz-ke-t1', '1.1.6', { ...U(KE), d: 1, rule: "k, g → -ka; q, g' → -qa." },
      "«Barg» so'zining jo'nalish kelishigidagi to'g'ri shakli qaysi?",
      [["bargka"], ["bargga", "g bilan tugagan so'zga -ka qo'shiladi."], ["bargqa", "-qa faqat q va g' dan keyin."], ["barga", "Qo'shimcha to'liq yoziladi: -ka."]],
      'A', "barg — g bilan tugaydi → bargka.")),
    B.method("Kelishiklarni o'rgatish:", [
      "So'roqlar jadvali sinfda yil davomida osilib turadi; o'quvchilar avval so'roq beradi, keyin qo'shimchani topadi.",
      "Bitta so'zni oltita gapda qo'llash («Kitob» zinapoyasi).",
      "Jo'nalish imlosi uchun «oxirgi harfni ko'r» qoidasi: k/g → ka, q/g' → qa.",
      "Rus tilidagi padejlar bilan aralashtirmaslik: o'zbek tilida kelishik qo'shimcha orqali, predlogsiz ifodalanadi (ikki tilli sinflarda muhim).",
    ]),
    B.summary(null, [
      "Oltita kelishik: bosh, qaratqich (-ning), tushum (-ni), jo'nalish (-ga), o'rin-payt (-da), chiqish (-dan).",
      "Jo'nalish: k, g → -ka; q, g' → -qa; egalikdan keyin -ga.",
      "Qaratqich va tushum belgisiz ham bo'ladi.",
    ]),
  ],
  check: [
    cq('a-uz-ke-c1', '1.1.6', { ...U(KE) }, "Qaysi qatorda jo'nalish kelishigi qo'shimchasi to'g'ri yozilgan?",
      [["tog'qa, terakka, uyga"], ["tog'ga, terakka, uyga", "g' dan keyin -qa: tog'qa."], ["tog'qa, terakga, uyga", "k dan keyin -ka: terakka."], ["tog'qa, terakka, uyka", "Unli/boshqa tovushdan keyin -ga: uyga."]],
      'A', "g' → -qa, k → -ka, boshqa hollarda -ga."),
    cq('a-uz-ke-c2', '1.2.3', { ...U(KE) }, "«Aziz ukasiga kitob sovg'a qildi» gapida «ukasiga» qaysi kelishikda?",
      [["Jo'nalish"], ['Tushum', "Tushum — «kimni?»: ukasini."], ['Qaratqich', "Qaratqich — «kimning?»: ukasining."], ['Chiqish', "Chiqish — «kimdan?»: ukasidan."]],
      'A', "Kimga? — ukasiga: jo'nalish kelishigi."),
    cq('a-uz-ke-c3', '1.2.3', { ...U(KE) }, "Qaysi gapda tushum kelishigi belgisiz qo'llangan?",
      [["Onam non yopdi."], ["Onam nonni stolga qo'ydi.", "«Nonni» — belgili tushum."], ["Nonning hidi yoqimli.", "«Nonning» — qaratqich."], ["Bu nondan oling.", "«Nondan» — chiqish kelishigi."]],
      'A', "«Non yopdi» — nimani? so'rog'iga javob, qo'shimchasiz."),
    cq('a-uz-ke-c4', '1.1.6', { ...U(KE), rule: "Egalikdan keyin jo'nalish qo'shimchasi -ga." }, "«Qishloq» so'zining 1-shaxs birlik egalik va jo'nalish kelishigidagi to'g'ri shakli?",
      [["qishlog'imga"], ["qishloqimqa", "Egalik qo'shilganda q → g'; egalikdan keyin -ga."], ["qishlog'imqa", "Egalikdan keyin -ga yoziladi."], ["qishloqqamim", "Qo'shimchalar tartibi buzilgan."]],
      'A', "qishloq + im → qishlog'im; + ga → qishlog'imga."),
    cq('a-uz-ke-c5', '1.3.6', { ...U(KE) }, "O'quvchilar «-ning» va «-ni» ni ko'p chalkashtiradi. Qaysi usul samaraliroq?",
      [["So'roq bilan tekshirish: «kimning? nimaning?» — qaratqich, «kimni? nimani?» — tushum; juft gaplarda solishtirish"], ["Faqat qo'shimchalarni yodlatish", "So'roqsiz farqlash qiyin."], ["Ko'proq ko'chirib yozdirish", "Ko'chirish farqni tushuntirmaydi."], ["Bu xatoni e'tiborsiz qoldirish", "Xato yozma nutqda mustahkamlanadi."]],
      'A', "So'roq kelishikni aniq ajratadi."),
  ],
});

/* ======================= 4. Sifat ======================= */
const SI = 'uz-sifat';
export const UZ_SIFAT = lesson({
  id: SI, module: 'uz-morf', level: 'core', stage: 'C', minutes: 20, codes: ['1.2.3', '1.3.6', '1.1.6'], requires: [OG], sourceIds: SRC,
  title: "Sifat: ma'noviy turlari va darajalari",
  blocks: [
    B.intro("«Olma» — narsa, «qizil olma», «shirin olma», «katta olma» — narsaning belgisi. Sifat nutqni aniq va obrazli qiladi. Boshlang'ich sinfda o'quvchi sifatni topishni, uning turini va darajasini aniqlashni o'rganadi."),
    B.definition("**Sifat** — predmetning belgisini bildiradigan va **qanday? qanaqa? qaysi?** so'roqlariga javob beradigan mustaqil so'z turkumi. Sifat odatda otdan oldin kelib, uni aniqlaydi: «baland tog'»."),
    B.table(["Ma'noviy turi", 'Misollar'], [
      ["Xususiyat (xarakter, aql)", "dono, mehribon, dangasa"],
      ['Rang-tus', "qizil, yashil, oq"],
      ["Maza-ta'm", "shirin, achchiq, nordon"],
      ["Shakl-ko'rinish", "dumaloq, egri, to'g'ri"],
      ["Hajm-o'lchov", "katta, uzun, og'ir"],
      ['Hid', "xushbo'y, qo'lansa"],
      ["O'rin-payt", "yozgi, kechki, tog'li"],
    ], "Sifatning ma'noviy turlari"),
    B.rule("**Sifat darajalari**: **oddiy** (baland), **qiyosiy** — **-roq** qo'shimchasi: balandroq (boshqasiga nisbatan), **orttirma** — belgining kuchliligi: eng, juda, g'oyat so'zlari (eng baland) yoki birinchi bo'g'inni takrorlash (qip-qizil, yam-yashil, oppoq), **ozaytirma** — belgining kuchsizligi: -ish, -(i)mtir (oqish, ko'kimtir, sarg'ish). Sifat yasovchi qo'shimchalar: -li (aqlli), -siz (aqlsiz), -chan (ishchan), -gi/-ki (yozgi, kechki)."),
    B.example("«Akam mendan balandroq, lekin sinfimizda eng baland — Sardor» gapidagi sifatlarning darajasini aniqlang.", [
      "«Balandroq» — -roq qo'shimchasi, ikki kishini solishtirish → qiyosiy daraja.",
      "«Eng baland» — «eng» so'zi, belgi eng yuqori → orttirma daraja.",
    ], "balandroq — qiyosiy; eng baland — orttirma"),
    B.example("«Ko'kimtir osmon», «qip-qizil olma», «oqish tuman» — darajalarni aniqlang.", [
      "Ko'kimtir: -imtir — belgi kuchsiz → ozaytirma.",
      "Qip-qizil: birinchi bo'g'in takrori — belgi kuchli → orttirma.",
      "Oqish: -ish → ozaytirma.",
    ], "ozaytirma, orttirma, ozaytirma"),
    B.example("«Aql», «ish», «yoz» so'zlaridan sifat yasang.", [
      "aql + li → aqlli (ikki «l» yoziladi: o'zakdagi va qo'shimchadagi).",
      "ish + chan → ishchan.",
      "yoz + gi → yozgi.",
    ], "aqlli, ishchan, yozgi"),
    B.exception(null, [
      "«Kechki» — kech + ki (k dan keyin -ki); «yozgi» — yoz + gi.",
      "Ba'zi sifatlar daraja olmaydi: «temir (eshik)», «yozgi» — belgining ko'p-ozligini bildirib bo'lmaydi.",
      "Sifat ot o'rnida kelsa (otlashsa), ot kabi qo'shimcha oladi: «Yaxshilar ko'p».",
    ]),
    B.mistake(null, [
      "Ot bilan sifatni almashtirish: «quvonch» (ot) — «quvnoq» (sifat).",
      "«Eng balandroq» — ikki daraja ko'rsatkichini birga ishlatish (to'g'ri: eng baland yoki balandroq).",
      "«Aqli» deb yozish (sifat ma'nosida to'g'ri: aqlli; «aqli» — egalik shakli: uning aqli).",
    ]),
    B.try(cq('a-uz-si-t1', '1.2.3', { ...U(SI), d: 1, rule: "-roq — qiyosiy daraja." },
      "Qaysi sifat qiyosiy darajada?",
      [["shirinroq"], ["eng shirin", "«Eng» — orttirma daraja."], ["shirin", "Bu oddiy daraja."], ["juda shirin", "«Juda» — orttirma daraja."]],
      'A', "-roq qo'shimchasi qiyosiy darajani bildiradi.")),
    B.method("Sifatni o'rgatish:", [
      "«Sehrli qopcha» o'yini: bola narsani ko'rmasdan ushlab, belgilarini aytadi (yumshoq, dumaloq, silliq).",
      "Narsalarni solishtirish: ikki qalamni o'lchab «uzun — uzunroq», sinfdagi eng uzunini topish.",
      "Ranglar shkalasi: oqish → oq → oppoq — darajalarni ko'z bilan ko'rish.",
      "Matnni «jonlantirish»: sifatlarsiz matnga sifat qo'shib, farqini muhokama qilish.",
    ]),
    B.summary(null, [
      "Sifat — belgi; qanday? qanaqa? qaysi?",
      "Darajalar: oddiy, qiyosiy (-roq), orttirma (eng, qip-qizil), ozaytirma (-ish, -imtir).",
      "Yasovchilar: -li, -siz, -chan, -gi/-ki.",
    ]),
  ],
  check: [
    cq('a-uz-si-c1', '1.2.3', { ...U(SI) }, "Qaysi so'z ozaytirma darajadagi sifat?",
      [["sarg'ish"], ["sap-sariq", "Birinchi bo'g'in takrori — orttirma."], ["sariqroq", "-roq — qiyosiy."], ["sariq", "Oddiy daraja."]],
      'A', "-ish qo'shimchasi belgining kuchsizligini bildiradi."),
    cq('a-uz-si-c2', '1.2.3', { ...U(SI) }, "«Nordon» sifati qaysi ma'noviy turga kiradi?",
      [["Maza-ta'm"], ['Rang-tus', "Rangni emas, ta'mni bildiradi."], ["Hajm-o'lchov", "O'lchovni bildirmaydi."], ['Xususiyat', "Xarakter yoki aqlni bildirmaydi."]],
      'A', "Nordon — ta'm belgisi."),
    cq('a-uz-si-c3', '1.1.6', { ...U(SI) }, "Qaysi qatorda barcha sifatlar to'g'ri yozilgan?",
      [["aqlli, kechki, yozgi"], ["aqli, kechki, yozgi", "Sifat: aqlli (ikki l)."], ["aqlli, kechgi, yozgi", "k dan keyin -ki: kechki."], ["aqlli, kechki, yozki", "z dan keyin -gi: yozgi."]],
      'A', "aql + li, kech + ki, yoz + gi."),
    cq('a-uz-si-c4', '1.2.3', { ...U(SI) }, "Qaysi birikmada sifat noto'g'ri qo'llangan?",
      [["eng chiroyliroq gul"], ["eng chiroyli gul", "To'g'ri: orttirma daraja."], ["chiroyliroq gul", "To'g'ri: qiyosiy daraja."], ["juda chiroyli gul", "To'g'ri: orttirma daraja."]],
      'A', "«Eng» va «-roq» birga ishlatilmaydi."),
    cq('a-uz-si-c5', '1.3.6', { ...U(SI) }, "1-sinfda sifat tushunchasini kiritish uchun eng mos topshiriq?",
      [["Haqiqiy narsalarni (olma, qalam) ko'rib, «qanday?» so'rog'iga javob berish: qizil, uzun, silliq"], ["Sifat ta'rifini yod oldirish", "Ta'rif amaliy tajribasiz tushunilmaydi."], ["Darajalar jadvalini ko'chirib yozish", "1-sinf uchun erta va mexanik."], ["Gapdagi sifatlarni topib, tahlil qilish", "Avval tushuncha, keyin tahlil."]],
      'A', "Narsa — belgi — so'roq: tushuncha tajribadan shakllanadi."),
  ],
});

/* ======================= 5. Son ======================= */
const SN = 'uz-son';
export const UZ_SON = lesson({
  id: SN, module: 'uz-morf', level: 'core', stage: 'C', minutes: 20, codes: ['1.2.3', '1.1.6', '1.3.6'], requires: [OG], sourceIds: SRC,
  title: "Son so'z turkumi va uning ma'noviy turlari",
  blocks: [
    B.intro("Matematika darsida raqamlar bilan ishlaymiz, ona tili darsida esa ularning **so'z** bilan yozilishini o'rganamiz: «uchinchi», «beshtadan», «o'ntacha», «ikkala». Har bir shakl o'z ma'nosiga va imlosiga ega."),
    B.definition("**Son** — predmetning miqdorini yoki tartibini bildiradigan va **necha? qancha? nechanchi?** so'roqlariga javob beradigan mustaqil so'z turkumi. **Raqam** — sonni yozish uchun belgi (5, V), **son** — so'z (besh)."),
    B.table(["Turi", "Qo'shimcha / belgi", "So'rog'i", 'Misol'], [
      ['Sanoq', '—', 'necha? qancha?', "bir, besh, o'n"],
      ['Tartib', '-inchi / -nchi', 'nechanchi?', 'birinchi, ikkinchi'],
      ['Jamlovchi', '-ov / -ala', 'nechov?', 'ikkov, uchala'],
      ['Taqsim', '-tadan', 'nechtadan?', 'beshtadan'],
      ['Chama', "-tacha, -larcha, -lab", 'qancha?', "o'ntacha, yuzlab"],
      ['Kasr', '... dan ...', 'qancha?', 'beshdan bir'],
    ], "Sonning ma'noviy turlari"),
    B.rule("Imlo: 1) Tartib son undosh bilan tugagan sonlarga **-inchi**, unli bilan tugaganlarga **-nchi** qo'shib yasaladi: besh — beshinchi, ikki — ikkinchi. 2) Arab raqami bilan yozilgan tartib sondan keyin **chiziqcha** qo'yiladi: 3-sinf, 5-dars; Rim raqamidan keyin chiziqcha qo'yilmaydi: XXI asr. 3) Murakkab sonlar **ajratib** yoziladi: o'n besh, ikki yuz yigirma."),
    B.example("«Sinfimizdagi o'quvchilar ikkitadan qatorga turishdi» gapidagi sonning turini aniqlang.", [
      "So'roq: nechtadan? — ikkitadan.",
      "-tadan qo'shimchasi — teng bo'lib taqsimlash ma'nosi.",
    ], 'Taqsim son'),
    B.example("«Olti» va «to'qqiz» sonlaridan tartib son yasang va arab raqami bilan yozing.", [
      "Olti — unli bilan tugaydi → -nchi: oltinchi; raqamda: 6-.",
      "To'qqiz — undosh bilan tugaydi → -inchi: to'qqizinchi; raqamda: 9-.",
      "Gapda: 6-sinf, 9-qavat (chiziqcha bilan).",
    ], "oltinchi (6-), to'qqizinchi (9-)"),
    B.example("«Ikkala do'st» va «ikki do'st» — farqi nimada?", [
      "«Ikki do'st» — sanoq son: shunchaki miqdor.",
      "«Ikkala do'st» — jamlovchi son: ma'lum ikki kishining birgalikda olinishi (ikkalasi ham).",
    ], "Sanoq va jamlovchi son"),
    B.exception(null, [
      "Jamlovchi -ov odatda ikkidan yettigacha bo'lgan sonlar bilan qo'llanadi (ikkov, beshov, yettov); -ala — ikkala, uchala, to'rtala.",
      "«Yuzlab», «minglab» — chama son, aniq miqdor emas.",
      "Kasr son so'z bilan: «uchdan ikki» (2/3), «yarim» (1/2).",
    ]),
    B.mistake(null, [
      "Chiziqchani tushirib qoldirish: «3 sinf» (to'g'ri: 3-sinf) yoki Rim raqamidan keyin qo'yish: «XXI-asr».",
      "Murakkab sonni qo'shib yozish: «o'nbesh» (to'g'ri: o'n besh).",
      "-inchi / -nchi ni almashtirish: «ikkiinchi», «beshnchi».",
    ]),
    B.try(cq('a-uz-sn-t1', '1.1.6', { ...U(SN), d: 1, rule: "Arab raqamidan keyin chiziqcha; Rim raqamidan keyin yo'q." },
      "Qaysi yozuv to'g'ri?",
      [["XXI asr, 4-sinf"], ["XXI-asr, 4-sinf", "Rim raqamidan keyin chiziqcha qo'yilmaydi."], ["XXI asr, 4 sinf", "Arab raqamidagi tartib sondan keyin chiziqcha kerak."], ["XXI-asr, 4 sinf", "Ikkala qoida ham buzilgan."]],
      'A', "Rim raqami — chiziqchasiz, arab raqami — chiziqcha bilan.")),
    B.method("Sonni o'rgatish:", [
      "Matematika bilan integratsiya: misol javobini so'z bilan yozish (o'n besh, ikki yuz).",
      "«Navbat» o'yini: bolalar qatorga turib «birinchi, ikkinchi...» deb sanaydi — tartib son ma'nosi.",
      "Taqsimlash vaziyati: «Har kimga nechtadan qalam?» — taqsim son.",
      "Imlo uchun kalendar va dars jadvali bilan ishlash: «5-dars», «XXI asr».",
    ]),
    B.summary(null, [
      "Son — miqdor yoki tartib; necha? qancha? nechanchi?",
      "Turlari: sanoq, tartib, jamlovchi, taqsim, chama, kasr.",
      "3-sinf (chiziqcha), XXI asr (chiziqchasiz), o'n besh (ajratib).",
    ]),
  ],
  check: [
    cq('a-uz-sn-c1', '1.2.3', { ...U(SN) }, "«Yuzlab qushlar uchib o'tdi» gapidagi son qaysi turga kiradi?",
      [['Chama son'], ['Sanoq son', "Aniq miqdor aytilmagan."], ['Taqsim son', "Taqsim -tadan bilan yasaladi."], ['Tartib son', "Tartib nechanchi? so'rog'iga javob beradi."]],
      'A', "«-lab» taxminiy miqdorni bildiradi: chama son."),
    cq('a-uz-sn-c2', '1.1.6', { ...U(SN) }, "«Yetti» sonidan yasalgan tartib sonning imlosi to'g'ri berilgan variantni belgilang.",
      [["yettinchi"], ["yettiinchi", "Unli bilan tugagan songa -nchi qo'shiladi."], ["yetinchi", "O'zakdagi «tt» saqlanadi."], ["yettnchi", "O'zakdagi «i» tushmaydi."]],
      'A', "yetti + nchi → yettinchi."),
    cq('a-uz-sn-c3', '1.2.3', { ...U(SN) }, "Qaysi gapda jamlovchi son bor?",
      [["Uchala aka-uka dalaga chiqdi."], ["Uch kitob sotib oldim.", "«Uch» — sanoq son."], ["Uchinchi qavatda yashaymiz.", "«Uchinchi» — tartib son."], ["Uchtadan olma oldik.", "«Uchtadan» — taqsim son."]],
      'A', "«-ala» — jamlovchi son qo'shimchasi."),
    cq('a-uz-sn-c4', '1.1.6', { ...U(SN) }, "Qaysi yozuvda xato bor?",
      [["o'nbesh o'quvchi"], ["o'n besh o'quvchi", "To'g'ri: murakkab son ajratib yoziladi."], ["5-sinf o'quvchisi", "To'g'ri: chiziqcha bilan."], ["XX asr", "To'g'ri: Rim raqamidan keyin chiziqcha yo'q."]],
      'A', "Murakkab sonlar ajratib yoziladi: o'n besh."),
    cq('a-uz-sn-c5', '1.3.6', { ...U(SN) }, "O'quvchilar taqsim son ma'nosini tushunmayapti. Qaysi usul eng samarali?",
      [["Haqiqiy taqsimlash: har bir guruhga «ikkitadan» qalam berib, keyin gap tuzdirish"], ["Qo'shimchani yod oldirish", "Ma'nosiz yodlash tushuncha bermaydi."], ["Darslikdagi qoidani ko'chirish", "Amaliy tajriba yo'q."], ["Faqat test yechish", "Tushunish shakllanmaydi."]],
      'A', "Harakat → ma'no → atama: taqsim son vaziyatdan tushuniladi."),
  ],
});

/* ======================= 6. Fe'l ======================= */
const FE = 'uz-fel';
export const UZ_FEL = lesson({
  id: FE, module: 'uz-morf', level: 'core', stage: 'B', minutes: 25, codes: ['1.2.3', '1.1.6', '1.3.6'], requires: [OG], sourceIds: SRC,
  title: "Fe'l: zamon, shaxs-son, bo'lishli va bo'lishsiz shakllar",
  blocks: [
    B.intro("Gapning markazi — fe'l: «Bolalar maktabga **ketishdi**». Fe'l qo'shimchalari harakat qachon bo'lganini, kim bajarganini va bajarilgan-bajarilmaganini bildiradi. Bitta «o'qi» o'zagidan o'nlab shakl yasaladi: o'qidim, o'qiyapsan, o'qimaydi."),
    B.definition("**Fe'l** — harakat yoki holatni bildiradigan va **nima qildi? nima qilyapti? nima qiladi?** so'roqlariga javob beradigan mustaqil so'z turkumi. Fe'lning lug'aviy (noaniq) shakli **-moq** bilan: o'qimoq, yozmoq. Fe'l o'zagi buyruq shaklining 2-shaxs birligiga teng: o'qi! yoz!"),
    B.table(['Zamon', "Qo'shimcha", 'Misol', "So'rog'i"], [
      ["O'tgan", '-di', "o'qidi, yozdi", 'nima qildi?'],
      ['Hozirgi', '-yap(ti), -moqda', "o'qiyapti, yozmoqda", 'nima qilyapti?'],
      ['Kelasi', '-a / -y (+di)', "o'qiydi, yozadi", 'nima qiladi?'],
    ], "Fe'l zamonlari"),
    B.table(['Shaxs', "O'tgan zamon (birlik / ko'plik)", "Hozirgi zamon (birlik / ko'plik)"], [
      ['1-shaxs', "o'qidi**m** / o'qidi**k**", "o'qiyap**man** / o'qiyap**miz**"],
      ['2-shaxs', "o'qidi**ng** / o'qidi**ngiz**", "o'qiyap**san** / o'qiyap**siz**"],
      ['3-shaxs', "o'qidi / o'qidi**lar**", "o'qiyap**ti** / o'qiyapti**lar**"],
    ], "Shaxs-son qo'shimchalari"),
    B.rule("**Bo'lishsiz shakl** **-ma** qo'shimchasi bilan yasaladi va o'zakdan keyin, zamon qo'shimchasidan oldin keladi: o'qi + ma + di → o'qimadi, yoz + ma + yap + ti → yozmayapti. Tartib: **o'zak + (bo'lishsizlik) + zamon + shaxs-son**: kel-ma-di-m."),
    B.example("«Yozmadingiz» fe'lini tahlil qiling.", [
      "yoz — o'zak (harakat).",
      "-ma — bo'lishsizlik qo'shimchasi.",
      "-di — o'tgan zamon.",
      "-ngiz — 2-shaxs ko'plik (siz).",
    ], "yoz + ma + di + ngiz: o'tgan zamon, 2-shaxs ko'plik, bo'lishsiz"),
    B.example("«Men o'qiyman» gapini o'tgan va hozirgi zamonga o'zgartiring.", [
      "O'tgan: o'qi + di + m → Men o'qidim.",
      "Hozirgi: o'qi + yap + man → Men o'qiyapman.",
      "Kelasi (berilgan): o'qi + y + man → o'qiyman.",
    ], "o'qidim, o'qiyapman"),
    B.example("«Ishla» fe'lini 3-shaxs hozirgi zamonda bo'lishli va bo'lishsiz shaklda yozing.", [
      "Bo'lishli: ishla + yap + ti → ishlayapti.",
      "Bo'lishsiz: ishla + ma + yap + ti → ishlamayapti.",
    ], "ishlayapti — ishlamayapti"),
    B.exception(null, [
      "Ko'plik 3-shaxsda «-lar» o'rniga so'zlashuvda «-ishdi» ham ishlatiladi: o'qishdi (= o'qidilar).",
      "Bo'lishsizlik «emas», «yo'q» so'zlari bilan ham ifodalanadi: «kelgan emas», «borgani yo'q».",
      "«-moqchi» — maqsad (niyat) ma'nosi: o'qimoqchiman.",
    ]),
    B.mistake(null, [
      "«-ma» ni noto'g'ri joyga qo'yish: «o'qidima» (to'g'ri: o'qimadi).",
      "Shaxs qo'shimchasini tushirib qoldirish: «Men o'qidi» (to'g'ri: o'qidim).",
      "«o'qiyapti» o'rniga «o'qiypti», «ishlayapti» o'rniga «ishlapti» deb yozish (og'zaki nutq ta'siri).",
    ]),
    B.try(cq('a-uz-fe-t1', '1.2.3', { ...U(FE), d: 1, rule: "-ma o'zakdan keyin, zamondan oldin." },
      "Qaysi fe'l bo'lishsiz shaklda?",
      [["bormadik"], ["bordik", "Bo'lishli shakl."], ["boryapmiz", "Bo'lishli, hozirgi zamon."], ["boramiz", "Bo'lishli, kelasi zamon."]],
      'A', "bor + ma + di + k: bo'lishsiz, o'tgan zamon, 1-shaxs ko'plik.")),
    B.method("Fe'lni o'rgatish:", [
      "Harakatli o'yin «Nima qilyapman?»: o'qituvchi harakat ko'rsatadi, bolalar fe'l bilan aytadi.",
      "Vaqt chizig'i: kecha — bugun — ertaga; bitta fe'lni uch zamonda aytish.",
      "Shaxslar jadvalini qo'shiq yoki ritm bilan takrorlash: «o'qidim, o'qiding, o'qidi...».",
      "Imlo: og'zaki va yozma shaklni solishtirish («o'qiyapti» — og'zakida «o'qiyapti/o'qivotti»).",
    ]),
    B.summary(null, [
      "Fe'l — harakat-holat; nima qildi? nima qilyapti? nima qiladi?",
      "Zamonlar: o'tgan (-di), hozirgi (-yap), kelasi (-a/-y).",
      "Tartib: o'zak + -ma + zamon + shaxs-son.",
    ]),
  ],
  check: [
    cq('a-uz-fe-c1', '1.2.3', { ...U(FE) }, "«Kelmayapsizmi» fe'li tarkibidagi «-ma» nimani bildiradi?",
      [["Bo'lishsizlik qo'shimchasi"], ["Zamon qo'shimchasi", "Zamon — «-yap»."], ["Shaxs-son qo'shimchasi", "Shaxs-son — «-siz»."], ["So'roq yuklamasi", "So'roq — «-mi»."]],
      'A', "kel + ma + yap + siz + mi: -ma — bo'lishsizlik."),
    cq('a-uz-fe-c2', '1.2.3', { ...U(FE) }, "Qaysi fe'l hozirgi zamonda?",
      [["yozyapsan"], ["yozding", "O'tgan zamon (-di)."], ["yozasan", "Kelasi zamon (-a)."], ["yozmoqchisan", "Maqsad ma'nosi (-moqchi)."]],
      'A', "-yap — hozirgi zamon qo'shimchasi."),
    cq('a-uz-fe-c3', '1.1.6', { ...U(FE) }, "«O'qimoq» fe'lining hozirgi zamon 3-shaxs birlikdagi adabiy yozilishi qaysi?",
      [["o'qiyapti"], ["o'qiypti", "Og'zaki talaffuz ta'siri: -yap- to'liq yoziladi."], ["o'qiyabdi", "Adabiy imloda: o'qiyapti."], ["o'qivotti", "So'zlashuv shakli, yozuvda qo'llanmaydi."]],
      'A', "o'qi + yap + ti → o'qiyapti."),
    cq('a-uz-fe-c4', '1.2.3', { ...U(FE) }, "«Biz kecha kinoga ...» gapini to'g'ri davom ettiring.",
      [["bordik"], ["bordim", "«Biz» — ko'plik, -k kerak."], ["bording", "2-shaxs — «sen» uchun."], ["boramiz", "«Kecha» — o'tgan zamon talab qiladi."]],
      'A', "Biz (1-shaxs ko'plik) + o'tgan zamon: bor + di + k."),
    cq('a-uz-fe-c5', '1.3.6', { ...U(FE) }, "O'quvchilar «Men o'qidi» deb yozadi. Qaysi usul yordam beradi?",
      [["Kishilik olmoshlari va shaxs-son qo'shimchalarini juftlab ko'rsatuvchi jadval (men — -m, sen — -ng...) va og'zaki mashq"], ["Xatoni qizil ruchka bilan belgilash", "Usul berilmaydi."], ["Qoidani uyga yod olishga berish", "Mashqsiz qoida ishlamaydi."], ["Bunday gaplarni bermaslik", "Muammo hal bo'lmaydi."]],
      'A', "Olmosh va qo'shimcha moslashuvini ko'rish — xatoning oldini oladi."),
  ],
});

export const UZ3_LESSONS = [UZ_OT_GRAM, UZ_EGALIK, UZ_KELISHIK, UZ_SIFAT, UZ_SON, UZ_FEL];
