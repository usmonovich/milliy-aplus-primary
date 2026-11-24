// UI dictionary. Add a locale by adding a column; missing keys fail the
// i18n test (no silent fallback to another language).
import type { L, Locale } from './types';

export const LOCALES: { id: Locale; label: string; flag: string }[] = [
  { id: 'uz', label: "O'zbek tili", flag: '🇺🇿' },
  { id: 'ru', label: 'Русский язык', flag: '🇷🇺' },
];

const D = {
  appName: ['Milliy A+ Primary', 'Milliy A+ Primary'],
  chooseLang: ['Tilni tanlang', 'Выберите язык'],
  disclaimer: ["Mustaqil ta'lim mahsuloti. Bilim va ko'nikmalarni baholash agentligining rasmiy xizmati emas.", 'Независимый образовательный продукт. Не является официальным сервисом Агентства по оценке знаний и навыков.'],
  next: ['Davom etish', 'Далее'], back: ['Orqaga', 'Назад'], start: ['Boshlash', 'Начать'], finish: ['Yakunlash', 'Завершить'],
  close: ['Yopish', 'Закрыть'], save: ['Saqlash', 'Сохранить'], cancel: ['Bekor qilish', 'Отмена'], skip: ["O'tkazib yuborish", 'Пропустить'],
  check: ['Tekshirish', 'Проверить'], continue: ['Davom etish', 'Продолжить'], retry: ['Qayta urinish', 'Ещё раз'], minutes: ['daq', 'мин'],
  // onboarding
  uiLang: ['Interfeys tili', 'Язык интерфейса'], examLang: ['Tayyorgarlik va imtihon tili', 'Язык подготовки и экзамена'],
  examLangHint: ["Imtihonni qaysi tilda topshirasiz? 1-qism (ona tili) mazmuni shu tilga qarab farq qiladi. Interfeys tilidan mustaqil.", 'На каком языке вы сдаёте экзамен? Содержание части 1 (язык) зависит от этого выбора. Не зависит от языка интерфейса.'],
  aboutYou: ["O'zingiz haqingizda", 'О себе'], experience: ['Pedagogik staj', 'Педагогический стаж'],
  expOpts: [["Talaba", '0–3 yil', '4–10 yil', '10 yildan ko\'p'].join('|'), ['Студент', '0–3 года', '4–10 лет', 'Более 10 лет'].join('|')],
  selfLevel: ['Hozirgi bilim darajangiz', 'Текущий уровень знаний'],
  selfOpts: [["Boshlang'ich", "O'rta", 'Yaxshi', "A'lo"].join('|'), ['Начальный', 'Средний', 'Хороший', 'Высокий'].join('|')],
  target: ['Maqsadli daraja', 'Целевой уровень'], examDate: ['Taxminiy imtihon sanasi', 'Предполагаемая дата экзамена'],
  examDateHint: ["Rasmiy sanalar e'lon qilinganda tekshiring. Bo'sh qoldirish mumkin.", 'Сверьте с официальными датами. Можно оставить пустым.'],
  dailyMinutes: ['Kunlik vaqt', 'Время в день'], reminder: ['Eslatma vaqti', 'Время напоминания'],
  mode: ['Tayyorgarlik rejimi', 'Режим подготовки'],
  modes: [["Noldan|Butun dasturni takrorlash|Intensiv|B+ ga tayyorgarlik|A+ ga tayyorgarlik|Faqat sinov imtihonlari|Zaif mavzular"].join(''), ['С нуля|Повторение всей программы|Интенсив|Подготовка на B+|Подготовка на A+|Только пробные экзамены|Слабые темы'].join('')],
  diagnostic: ['Diagnostik test', 'Диагностический тест'],
  diagnosticIntro: ["15 ta savol, 3 qism bo'yicha. Natija shaxsiy rejani tuzadi. Bu rasmiy natija yoki Rash bali emas.", '15 вопросов по 3 частям. Результат формирует персональный план. Это не официальный результат и не балл по Рашу.'],
  diagnosticDone: ['Diagnostika yakunlandi', 'Диагностика завершена'],
  skipDiagnostic: ['Keyinroq', 'Позже'],
  // nav
  navHome: ['Bosh sahifa', 'Главная'], navLearn: ["O'qish", 'Обучение'], navExams: ['Imtihonlar', 'Экзамены'], navKnow: ['Bilimlar', 'База знаний'], navProfile: ['Profil', 'Профиль'],
  // home
  today: ['Bugungi reja', 'План на сегодня'], continueLearning: ["O'qishni davom ettirish", 'Продолжить обучение'],
  daysToExam: ['Imtihongacha', 'До экзамена'], days: ['kun', 'дн.'], streak: ['Faol kunlar', 'Серия дней'],
  dueReview: ['Takrorlash uchun', 'К повторению'], readiness: ['Tayyorgarlik indeksi', 'Индекс готовности'],
  readinessHint: ["Ichki ko'rsatkich: har bir rasmiy kod bo'yicha oxirgi javoblar aniqligi, topshiriqlar soniga ko'ra o'lchangan. Mashq qilinmagan kodlar 0 hisoblanadi. Rasmiy ball emas va natijani bashorat qilmaydi.", 'Внутренний показатель: точность последних ответов по каждому официальному коду, взвешенная по числу заданий. Непройденные коды считаются как 0. Не официальный балл и не прогноз результата.'],
  coverage: ['Qamrov', 'Охват'], planReview: ['Xatolarni takrorlash', 'Повторение ошибок'], planQuiz: ['Yakuniy viktorina', 'Итоговая викторина'],
  tightWarn: ["Imtihongacha 14 kundan kam qoldi. To'liq dasturni o'zlashtirish uchun vaqt kam: reja eng ko'p ball beradigan va zaif mavzularga qaratildi.", 'До экзамена меньше 14 дней. Времени на всю программу мало: план сосредоточен на слабых и наиболее весомых темах.'],
  done: ['Bajarildi', 'Выполнено'], xp: ['XP', 'XP'], level: ['Daraja', 'Уровень'],
  reminderNow: ["Bugungi mashg'ulot vaqti keldi", 'Время сегодняшнего занятия'],
  // learn
  roadmap: ["O'quv xaritasi", 'Дорожная карта'], lesson: ['Dars', 'Урок'], lessons: ['Darslar', 'Уроки'],
  levelDesc: ['Ichki pedagogik daraja (rasmiy sertifikat darajasi emas)', 'Внутренний уровень подготовки (не уровень сертификата)'],
  practice: ['Mashq', 'Практика'], quiz: ['Viktorina', 'Викторина'], simulator: ['Teacher Simulator', 'Teacher Simulator'],
  testOut: ['Bilimni tasdiqlash', 'Подтвердить знание'], testOutHint: ["80% va undan ko'p — dars o'zlashtirilgan deb belgilanadi.", 'От 80% — урок отмечается как освоенный.'],
  blockGoal: ['Maqsad', 'Цель'], blockTheory: ['Nazariya', 'Теория'], blockVisual: ["Ko'rgazma", 'Наглядно'], blockExample: ['Misol', 'Пример'],
  blockClassroom: ["Boshlang'ich sinfda", 'В начальной школе'], blockMistake: ['Tipik xato', 'Типичная ошибка'], blockTip: ['Maslahat', 'Совет'],
  startPractice: ['Mashqni boshlash', 'Начать практику'], lessonDone: ["Dars o'zlashtirildi", 'Урок освоен'],
  correct: ["To'g'ri", 'Верно'], wrong: ["Noto'g'ri", 'Неверно'], partly: ['Qisman', 'Частично'], yourAnswer: ['Sizning javobingiz', 'Ваш ответ'], rightAnswer: ["To'g'ri javob", 'Правильный ответ'],
  explanation: ['Izoh', 'Объяснение'], similar: ["O'xshash topshiriq", 'Похожее задание'], openLesson: ['Darsni ochish', 'Открыть урок'],
  typeAnswer: ['Javobni yozing', 'Введите ответ'], chooseFor: ['Tanlang', 'Выберите'], source: ['Manba', 'Источник'], competency: ['Kompetensiya', 'Компетенция'],
  sessionDone: ['Mashg\'ulot yakunlandi', 'Занятие завершено'], score: ['Natija', 'Результат'],
  simIntro: ["Real sinf vaziyatlari. Bir nechta oqilona strategiya bo'lishi mumkin — har bir variantning shartlari va oqibatlari ko'rsatiladi.", 'Реальные ситуации класса. Разумных стратегий может быть несколько — показаны условия и последствия каждого варианта.'],
  grade: ['sinf', 'класс'], constraints: ['Shartlar', 'Условия'], principle: ['Pedagogik tamoyil', 'Педагогический принцип'], consequence: ['Oqibat', 'Последствия'],
  whyFit: ['Nega', 'Почему'], fit: ['Maqsadga moslik', 'Соответствие цели'], otherOptions: ['Boshqa variantlar', 'Другие варианты'],
  // exams
  fullExams: ["To'liq sinov imtihonlari", 'Полные пробные экзамены'], variant: ['Variant', 'Вариант'],
  variantsReady: ['tayyor variantlar', 'готовых вариантов'], variantsPlanned: ["{n} ta variantdan {k} tasi tayyor. Qolganlari mualliflik va tekshiruv bosqichida — tayyor bo'lmagan variantlar ko'rsatilmaydi.", 'Готово {k} из {n} запланированных вариантов. Остальные в разработке и проверке — неготовые варианты не показываются.'],
  standard: ['Standart', 'Стандартный'], authorItems: ["Mualliflik topshiriqlari, haqiqiy imtihon savollari emas.", 'Авторские задания, не реальные экзаменационные вопросы.'],
  otherModes: ["Mashg'ulot formatlari (mualliflik)", 'Тренировочные форматы (авторские)'],
  modeSection: ['Bir qism · 60 daqiqa', 'Одна часть · 60 минут'], modeExpress: ['Ekspress · 15 daqiqa', 'Экспресс · 15 минут'], modeUntimed: ['Taymersiz', 'Без таймера'],
  modeSit: ['Vaziyatli topshiriqlar', 'Ситуационные задания'], modeOpen: ['Ochiq topshiriqlar', 'Открытые задания'], modeHard: ['Eng qiyin mavzular', 'Самые сложные темы'],
  history: ['Urinishlar tarixi', 'История попыток'], noHistory: ["Hali urinishlar yo'q.", 'Попыток пока нет.'],
  examRules: ["180 daqiqa · 90 topshiriq · qat'iy rejim: yakunlanguncha izoh va javoblar ko'rsatilmaydi. Taymer ilova yopilsa ham to'xtamaydi.", '180 минут · 90 заданий · строгий режим: до завершения ответы и объяснения не показываются. Таймер не останавливается при закрытии приложения.'],
  resume: ['Davom ettirish', 'Продолжить'], activeAttempt: ['Tugallanmagan urinish', 'Незавершённая попытка'],
  mark: ['Keyinroq qaytish', 'Вернуться позже'], answered: ['Javob berilgan', 'Отвечено'], marked: ['Belgilangan', 'Отмечено'], unanswered: ['Javobsiz', 'Без ответа'],
  prev: ['Oldingi', 'Предыдущее'], nextQ: ['Keyingi', 'Следующее'], section: ['Qism', 'Часть'], navigator: ['Topshiriqlar', 'Задания'],
  confirmFinish: ["Imtihonni yakunlaysizmi? Javobsiz topshiriqlar: {n}.", 'Завершить экзамен? Без ответа: {n}.'], timeUp: ['Vaqt tugadi — imtihon avtomatik yakunlandi.', 'Время вышло — экзамен завершён автоматически.'],
  report: ['Hisobot', 'Отчёт'], correctOf: ["90 dan to'g'ri", 'верных из 90'], percent: ['Foiz', 'Процент'], byType: ['Topshiriq turlari', 'По типам заданий'], bySection: ['Qismlar', 'По частям'],
  notOfficial: ["Bu to'g'ri javoblar soni va foiz. Rasmiy ball Rash modeli bo'yicha kalibrlangan parametrlar asosida hisoblanadi — ilova uni hisoblamaydi va sertifikat darajasini bermaydi.", 'Это число и процент верных ответов. Официальный балл рассчитывается по модели Раша на откалиброванных параметрах — приложение его не вычисляет и не присваивает уровень сертификата.'],
  reviewAnswers: ["Javoblarni ko'rish", 'Разбор ответов'], mistakes: ['Mening xatolarim', 'Мои ошибки'], noMistakes: ["Xatolar yo'q. Mashq qiling — xatolar shu yerda paydo bo'ladi va takrorlash rejasiga tushadi.", 'Ошибок нет. Практикуйтесь — ошибки появятся здесь и попадут в план повторения.'],
  reviewDue: ['Takrorlashni boshlash', 'Начать повторение'], timesWrong: ['marta xato', 'раз ошибка'], nextReview: ['Keyingi takrorlash', 'Следующее повторение'], mastered: ["O'zlashtirildi", 'Освоено'],
  // knowledge
  search: ['Qidirish: atama, formula, metod…', 'Поиск: термин, формула, метод…'], favorites: ['Sevimlilar', 'Избранное'], flashcards: ['Kartochkalar', 'Карточки'],
  simple: ['Oddiy tilda', 'Простыми словами'], professional: ['Ilmiy ta\'rif', 'Профессиональное определение'], example: ['Misol', 'Пример'], mistakesT: ['Tipik xatolar', 'Типичные ошибки'],
  relatedLessons: ["Bog'liq darslar", 'Связанные уроки'], flip: ["Aylantirish", 'Перевернуть'], knew: ['Bilardim', 'Знал'], didntKnow: ['Bilmasdim', 'Не знал'], all: ['Hammasi', 'Все'],
  sources: ['Manbalar', 'Источники'], accessed: ['Matni o\'rganilgan', 'Текст изучен'], notAccessed: ["Ro'yxatda (to'liq matn o'rganilmagan)", 'В списке (полный текст не изучен)'],
  // profile
  stats: ['Statistika', 'Статистика'], achievements: ['Yutuqlar', 'Достижения'], settings: ['Sozlamalar', 'Настройки'], certInfo: ['Sertifikat haqida', 'О сертификате'],
  theme: ['Mavzu', 'Тема'], themeSystem: ['Tizim', 'Системная'], themeLight: ['Yorug\'', 'Светлая'], themeDark: ["Qorong'i", 'Тёмная'],
  fontSize: ['Matn o\'lchami', 'Размер текста'], reduceMotion: ['Animatsiyani kamaytirish', 'Уменьшить анимацию'],
  exportData: ['Progressni eksport qilish', 'Экспорт прогресса'], importData: ['Progressni import qilish', 'Импорт прогресса'], resetData: ["Barcha ma'lumotni o'chirish", 'Удалить все данные'],
  resetConfirm: ["Barcha progress o'chiriladi. Davom etasizmi?", 'Весь прогресс будет удалён. Продолжить?'], imported: ['Import qilindi', 'Импортировано'], importFail: ["Fayl noto'g'ri", 'Неверный файл'],
  notifications: ['Bildirishnomalar', 'Уведомления'],
  notifHint: ["Brauzer ilova yopiq bo'lganda fon eslatmalarini server-siz yubora olmaydi. Mavjud imkoniyatlar: ilova ochiq bo'lganda eslatma va taqvimga takroriy eslatma qo'shish (.ics).", 'Без сервера браузер не может присылать фоновые напоминания, когда приложение закрыто. Доступно: напоминание при открытом приложении и повторяющееся событие в календаре (.ics).'],
  enableNotif: ['Ruxsat berish', 'Разрешить'], addCalendar: ["Taqvimga qo'shish (.ics)", 'Добавить в календарь (.ics)'],
  solved: ['Yechilgan topshiriqlar', 'Решено заданий'], accuracy: ['Aniqlik', 'Точность'], avgTime: ["O'rtacha vaqt", 'Среднее время'], sec: ['s', 'с'],
  activity: ['Faollik', 'Активность'], strong: ['Kuchli mavzular', 'Сильные темы'], weak: ['Zaif mavzular', 'Слабые темы'], examTrend: ['Sinov imtihonlari dinamikasi', 'Динамика пробных экзаменов'],
  recommendations: ['Tavsiyalar', 'Рекомендации'],
  recWeak: ["«{topic}» bo'yicha aniqlik {acc}%. Darsni takrorlang va {n} ta mashq bajaring.", 'Точность по теме «{topic}» — {acc}%. Повторите урок и выполните {n} заданий.'],
  recNone: ["Tavsiya uchun ma'lumot yetarli emas: avval diagnostika yoki bir nechta mashq bajaring.", 'Недостаточно данных для рекомендаций: пройдите диагностику или несколько тренировок.'],
  repeatedErr: ['Takroriy xatolar', 'Повторные ошибки'],
  registration: ["my.gov.uz orqali ro'yxatdan o'tish", 'Регистрация на my.gov.uz'], checkedAt: ['Tekshirilgan', 'Проверено'],
  allowanceCalc: ['Ustama kalkulyatori', 'Калькулятор надбавки'], salary: ['Lavozim maoshi (so\'m)', 'Должностной оклад (сум)'],
  certLevel: ['Sertifikat darajasi', 'Уровень сертификата'], condSpec: ["Boshlang'ich ta'lim mutaxassisligiga egaman", 'У меня специальность «начальное образование»'],
  condTeach: ["Boshlang'ich sinflarda dars beraman", 'Я преподаю в начальных классах'],
  allowanceRes: ['Taxminiy oylik ustama', 'Примерная ежемесячная надбавка'],
  allowanceNo: ["Kiritilgan ma'lumotlarga ko'ra ustama shartlari bajarilmagan.", 'По введённым данным условия надбавки не выполнены.'],
  allowanceNote: ["Taxminiy hisob. Huquq ish beruvchi tomonidan rasmiy hujjatlar asosida tasdiqlanadi.", 'Примерный расчёт. Право подтверждается работодателем по официальным документам.'],
  tiers: ['Tariflar', 'Тарифы'], tierNote: ["Sinov bosqichida barcha imkoniyatlar bepul. To'lovlar ulanmagan.", 'На этапе тестирования всё бесплатно. Платежи не подключены.'],
  perMonth: ['oy', 'мес.'], aiNote: ["AI yordamchi hali ulanmagan. Hozir barcha izohlar tekshirilgan statik materiallar.", 'AI-помощник пока не подключён. Сейчас все объяснения — проверенные статические материалы.'],
  offlineReady: ['Oflayn ishlashga tayyor', 'Готово к работе офлайн'], updateReady: ['Yangilanish tayyor — qayta yuklang', 'Доступно обновление — перезагрузите'], reload: ['Qayta yuklash', 'Перезагрузить'],
  version: ['Versiya', 'Версия'], contentStatus: ['Kontent holati', 'Статус контента'],
  statusAuto: ["Avtomatik tekshirilgan · mutaxassis ko'rigi kutilmoqda", 'Автоматически проверено · ожидает экспертной проверки'],
  achUnlocked: ['Yangi yutuq!', 'Новое достижение!'], internalAch: ["Ilova ichidagi yutuqlar rasmiy sertifikat bilan bog'liq emas.", 'Достижения приложения не связаны с официальным сертификатом.'],
  emptyPractice: ["Bu mavzu uchun mashqlar hali yo'q.", 'Для этой темы пока нет упражнений.'],
} satisfies Record<string, [string, string]>;

export type Key = keyof typeof D;

export function t(locale: Locale, key: Key, vars?: Record<string, string | number>): string {
  const row = D[key];
  let s = row[locale === 'uz' ? 0 : 1];
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
}

export const tl = (locale: Locale, l: L) => l[locale];
export const opts = (locale: Locale, key: Key) => t(locale, key).split('|');
export const DICT = D;
