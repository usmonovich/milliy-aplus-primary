// Certificate information center. Updatable separately from the curriculum:
// every legal statement carries its source and the date it was last checked.
import type { L } from '../../core/types';
import { tx, type Tx } from './build';

export interface CertFact { title: L; body: L; sourceId: string; checkedAt: string; }

const f = (title: Tx, body: Tx, sourceId: string, checkedAt = '2026-11-24'): CertFact => ({ title: tx(title), body: tx(body), sourceId, checkedAt });

export const CERT_INFO_VERSION = '2026-11-24';
export const REGISTRATION_URL = 'https://my.gov.uz/ru/service/1526';

export const CERT_FACTS: CertFact[] = [
  f(["Bu nima?", 'Что это?'],
    ["Boshlang'ich ta'lim o'qituvchilarining bilim darajasi va kasbiy mahoratini aniqlash bo'yicha milliy sertifikat. Natijalar Rash modeli asosida hisoblanadi.", 'Национальный сертификат об уровне знаний и профессиональном мастерстве учителей начальных классов. Результаты рассчитываются по модели Раша.'],
    'res411'),
  f(["Kim topshiradi?", 'Кто сдаёт?'],
    ["Maktabgacha va maktab ta'limi vazirligi tizimidagi umumiy o'rta ta'lim maktablarida ishlaydigan boshlang'ich sinf o'qituvchilari (Nizom, 1–2-bandlar).", 'Учителя начальных классов общеобразовательных школ системы Министерства дошкольного и школьного образования (Положение, п. 1–2).'],
    'res411'),
  f(['Format', 'Формат'],
    ["90 ta topshiriq, 180 daqiqa, kompyuterda. 3 qism × 30: ona tili va o'qish savodxonligi; matematika; pedagogik mahorat. Turlar: Y-1 (18), V-Y-1 (59), Y-2 (6), O-1 (7).", '90 заданий, 180 минут, на компьютере. 3 части × 30: язык и читательская грамотность; математика; педагогическое мастерство. Типы: Y-1 (18), V-Y-1 (59), Y-2 (6), O-1 (7).'],
    'spec2026'),
  f(['Daraja chegaralari', 'Пороги уровней'],
    ["A+ — 70 balldan yuqori; A — 65–69,9; B+ — 60–64,9; B — 55–59,9; C+ — 50–54,9; C — 46–49,9 (Nizom, 5-band). Ball Rash modeli bo'yicha hisoblanadi — to'g'ri javoblar soni yoki foiz emas.", 'A+ — выше 70 баллов; A — 65–69,9; B+ — 60–64,9; B — 55–59,9; C+ — 50–54,9; C — 46–49,9 (Положение, п. 5). Балл рассчитывается по модели Раша — это не число верных ответов и не процент.'],
    'res411'),
  f(['Amal qilish muddati', 'Срок действия'], ["3 yil, elektron sertifikat (QR-kod bilan).", '3 года, электронный сертификат (с QR-кодом).'], 'res411'),
  f(['Narx', 'Стоимость'], ["Ariza berilgan kundagi BHMning 1,5 baravari (Nizom, 4-band).", '1,5 БРВ на дату подачи заявления (Положение, п. 4).'], 'res411'),
  f(["Ro'yxatdan o'tish", 'Регистрация'],
    ["Yagona interaktiv davlat xizmatlari portali orqali elektron ariza; to'lov imtihondan kamida 12 kun oldin; sana va joy imtihondan 3 kun oldin yuboriladi.", 'Электронное заявление через Единый портал интерактивных госуслуг; оплата не позднее чем за 12 дней до экзамена; дата и место сообщаются за 3 дня.'],
    'res411'),
  f(['Ustama', 'Надбавка'],
    ["2026/2027 o'quv yilidan: boshlang'ich ta'lim mutaxassisligiga ega, boshlang'ich sinflarda dars beradigan va B+ yoki undan yuqori sertifikatga ega o'qituvchilarga sertifikat amal qilish muddatida lavozim maoshining 15 foizi miqdorida oylik ustama (Qaror, 6-band).", 'С 2026/2027 учебного года: учителям с специальностью «начальное образование», преподающим в начальных классах и имеющим сертификат B+ или выше, — ежемесячная надбавка 15% должностного оклада на срок действия сертификата (Постановление, п. 6).'],
    'res411'),
  f(['Natijalar va apellyatsiya', 'Результаты и апелляция'],
    ["Natijalar imtihondan keyin 21 ish kuni ichida e'lon qilinadi; apellyatsiya — e'londan keyin 3 kun ichida (Nizom, 16, 26-bandlar).", 'Результаты публикуются в течение 21 рабочего дня после экзамена; апелляция — в течение 3 дней после публикации (Положение, п. 16, 26).'],
    'res411'),
  f(['Imtihon sanalari', 'Даты экзаменов'],
    ["Sanalar vakolatli organ tomonidan davlat xizmatlari portali orqali e'lon qilinadi. Ilova sanalarni o'ylab topmaydi: rasmiy manbalarni tekshiring.", 'Даты объявляет уполномоченный орган через портал госуслуг. Приложение не придумывает даты: проверяйте официальные источники.'],
    'res411'),
  f(['Imtihon tillari', 'Языки экзамена'],
    ["Spetsifikatsiyada 1-qism uchun o'zbek, qoraqalpoq va rus tillaridagi mavzular jadvali berilgan. Ushbu ilova o'zbek va rus tillarini qo'llab-quvvatlaydi.", 'В спецификации для части 1 приведены таблицы тем на узбекском, каракалпакском и русском языках. Приложение поддерживает узбекский и русский.'],
    'spec2026'),
];

export const ALLOWANCE_RATE = 0.15;
export const ALLOWANCE_LEVELS = ['B+', 'A', 'A+'];
