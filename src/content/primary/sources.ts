// Source catalog. `accessed: true` only for documents whose text was actually
// read while building this app. Book entries come from Section VIII of the
// official specification; their full text was NOT available to the authors,
// so content is original and aligned with the specification topics only.
import type { Source } from '../../core/types';

const CHECKED = '2026-11-24';

export const SOURCES: Source[] = [
  { id: 'spec2026', kind: 'official', accessed: true, checkedAt: CHECKED, year: '2026',
    title: "Boshlang'ich ta'lim o'qituvchilarining bilim daraja va kasbiy mahoratini aniqlash bo'yicha test varianti tafsiloti (UZBMB, 30.10.2026)",
    url: 'https://api-portal.gov.uz/uploads/165/2026/10/30/856f9ab0-532c-8750-1bbe-bb0aaf2e2604_media_.pdf' },
  { id: 'demo2026', kind: 'official', accessed: true, checkedAt: CHECKED, year: '2026',
    title: 'Namunaviy test varianti (UZBMB, 30.10.2026) — format reference only, items not reproduced',
    url: 'https://api-portal.gov.uz/uploads/165/2026/10/30/4820f66e-7aa3-29c7-ddef-f18bb5793399_media_.pdf' },
  { id: 'res411', kind: 'law', accessed: true, checkedAt: CHECKED, year: '2026',
    title: "Vazirlar Mahkamasining 2026-yil 29-iyuldagi 411-son qarori (Milliy sertifikat berish tizimini takomillashtirish)",
    url: 'https://lex.uz/uz/acts/-8362485' },
  { id: 'news241044', kind: 'official', accessed: true, checkedAt: CHECKED, year: '2026',
    title: 'UZBMB: e\'lon (30.10.2026)', url: 'https://gov.uz/ru/uzbmb/news/view/241044' },
  { id: 'mygov1526', kind: 'official', accessed: false, title: 'my.gov.uz — xizmat 1526 (ro\'yxatdan o\'tish)', url: 'https://my.gov.uz/ru/service/1526' },
  { id: 'law637', kind: 'law', accessed: false, year: '2020', title: "O'zbekiston Respublikasining «Ta'lim to'g'risida»gi Qonuni (O'RQ-637)", url: 'https://lex.uz/' },
  { id: 'imlo', kind: 'law', accessed: false, title: "O'zbek tilining asosiy imlo qoidalari (lotin yozuvi)", url: 'https://lex.uz/' },
  { id: 'pirls', kind: 'international', accessed: false, title: 'PIRLS Assessment Framework (IEA, TIMSS & PIRLS International Study Center)', url: 'https://timssandpirls.bc.edu/' },
  { id: 'timss', kind: 'international', accessed: false, title: 'TIMSS Assessment Frameworks (IEA)', url: 'https://timssandpirls.bc.edu/' },
  // Section VIII of the specification (not accessed in full text)
  { id: 'qosimova2022', kind: 'textbook', accessed: false, year: '2022', author: 'Qosimova K., Matchonov S. va b.', title: 'Ona tili o\'qitish metodikasi (Bayoz)' },
  { id: 'xalikov2025', kind: 'textbook', accessed: false, year: '2025', author: 'Xalikov A.A. va b.', title: "Ona tili-o'qish savodxonligi va uni o'qitish metodikasi" },
  { id: 'sayfullayeva', kind: 'textbook', accessed: false, year: '2009', author: 'Sayfullayeva R., Mengliyev B. va b.', title: "Hozirgi o'zbek adabiy tili" },
  { id: 'jamolxonov', kind: 'textbook', accessed: false, year: '2013', author: 'Jamolxonov H.A.', title: "Hozirgi o'zbek adabiy tili" },
  { id: 'qosimova2009', kind: 'textbook', accessed: false, year: '2009', author: 'Qosimova K., Matchonov S. va b.', title: "Ona tili o'qitish metodikasi (Nosir)" },
  { id: 'gulomova2010', kind: 'textbook', accessed: false, year: '2010', author: "G'ulomova X., Yo'ldosheva Sh. va b.", title: "Nutq o'stirish metodikasi" },
  { id: 'azizxojayeva', kind: 'textbook', accessed: false, year: '2006', author: "Azizxo'jayeva N.N.", title: 'Pedagogik texnologiyalar va pedagogik mahorat' },
  { id: 'matchonov2021', kind: 'textbook', accessed: false, year: '2021', author: 'Matchonov S., Bakiyeva H. va b.', title: "O'qish o'qitish metodikasi" },
  { id: 'pirlsuz2020', kind: 'official', accessed: false, year: '2020', title: "PIRLS bo'yicha metodik qo'llanma (Milliy markaz)" },
  { id: 'rtm2021', kind: 'official', accessed: false, year: '2019–2021', title: "Xalqaro tadqiqotlarda o'qish savodxonligini baholash (RTM)" },
  { id: 'bikbayeva', kind: 'textbook', accessed: false, year: '2008', author: 'Bikbayeva N.U., Yangabayeva E., Yarashova N.', title: "Boshlang'ich sinflarda matematika o'qitish metodikasi" },
  { id: 'jumayev2005', kind: 'textbook', accessed: false, year: '2005', author: 'Jumayev M.E.', title: 'Matematika o\'qitish metodikasidan praktikum' },
  { id: 'jumayev2020', kind: 'textbook', accessed: false, year: '2020', author: 'Jumayev M.E.', title: "Boshlang'ich sinflarda matematika o'qitish metodikasi" },
  { id: 'tojiyev2012', kind: 'textbook', accessed: false, year: '2012', author: 'Tojiyev Sh.', title: "Boshlang'ich matematika kursining nazariy asoslari" },
  { id: 'sinfoniyeva', kind: 'textbook', accessed: false, year: '2019', author: 'Sinfoniyeva L., Shavkatov N.', title: 'Matematikadan nostandart va mantiqiy masalalar' },
  { id: 'abduhalimov', kind: 'textbook', accessed: false, year: '2021', author: 'Abduhalimov S., Ismoilov Sh.', title: 'Olimpiada matematika asoslari' },
  { id: 'math14', kind: 'textbook', accessed: false, year: '2021–2024', title: "Amaldagi «Matematika» darsliklari (1–4-sinflar) va «O'qituvchi kitobi»" },
  { id: 'ibragimov', kind: 'textbook', accessed: false, year: '2008', author: 'Ibragimov X.I., Abdullayeva Sh.A.', title: 'Pedagogika nazariyasi' },
  { id: 'gafforova', kind: 'textbook', accessed: false, year: '2021', author: "G'afforova J.A.", title: "Boshlang'ich ta'limda innovatsion texnologiyalar" },
  { id: 'pirlstimss', kind: 'official', accessed: false, year: '2019–2021', title: "PIRLS va TIMSS bo'yicha metodik qo'llanma (Milliy markaz)" },
  { id: 'goziyev', kind: 'textbook', accessed: false, year: '2010', author: "G'oziyev E.E.", title: 'Ontogenez psixologiyasi' },
  { id: 'nishanova', kind: 'textbook', accessed: false, year: '2018', author: 'Nishanova Z.T., Kamilova N.G. va b.', title: 'Psixologik diagnostika va korreksiya' },
  { id: 'karimova', kind: 'textbook', accessed: false, year: '2012', author: 'Karimova V.M.', title: 'Ijtimoiy psixologiya' },
  { id: 'tojiyev2022', kind: 'textbook', accessed: false, year: '2022', author: 'Tojiyev B., Mahkamova M.', title: "Boshlang'ich ta'lim metodikasi integratsiyasi" },
  { id: 'mavlonova', kind: 'textbook', accessed: false, year: '2011', author: 'Mavlonova R.A., Vohidova N.X.', title: 'Pedagogik mahorat' },
  { id: 'kuronov', kind: 'textbook', accessed: false, year: '2014', author: 'Kuronov M.', title: 'Maktabda tarbiyaviy ishlarni tashkil etish metodikasi' },
  { id: 'kriterial2023', kind: 'official', accessed: false, year: '2023', title: "Umumiy o'rta ta'lim muassasalarida kriterial baholash tizimi (RTM)" },
  { id: 'pardayeva', kind: 'textbook', accessed: false, year: '2019', author: 'Pardayeva A.S.', title: "Ta'lim jarayonida diagnostika va baholash" },
  { id: 'kasbstandart', kind: 'official', accessed: false, year: '2022', title: "Maktab o'qituvchisi faoliyatida kasb standartini qo'llash (UNICEF ko'magida)" },
  { id: 'inklyuziv2020', kind: 'textbook', accessed: false, year: '2020', author: "Mo'minova L.R., Ro'ziyeva D.A., Mamarajabova Z.N.", title: "Inklyuziv ta'lim" },
  { id: 'inklyuziv2022', kind: 'official', accessed: false, year: '2022', author: "Ro'ziyeva D.A., Abidova N.Z.", title: "Boshlang'ich ta'limda inklyuziv ta'limni tashkil etish (RTM, UNICEF)" },
  { id: 'tarbiya2021', kind: 'textbook', accessed: false, year: '2021', author: 'Abdullayeva B.S., Qodirova X.N.', title: 'Tarbiyaviy ishlar metodikasi' },
  // Russian-language section (official topic table exists in the spec; book list is not given for it)
  { id: 'ru-lvov', kind: 'textbook', accessed: false, author: 'Львов М.Р., Горецкий В.Г., Сосновская О.В.', title: 'Методика преподавания русского языка в начальных классах' },
  { id: 'ru-ramzaeva', kind: 'textbook', accessed: false, author: 'Рамзаева Т.Г.', title: 'Методика обучения русскому языку в начальных классах' },
];

export const sourceById = (id: string) => SOURCES.find((s) => s.id === id);
