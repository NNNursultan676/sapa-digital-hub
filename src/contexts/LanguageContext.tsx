import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'kz' | 'en';

interface Translations {
  [key: string]: {
    ru: string;
    kz: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.company': { ru: 'Компания', kz: 'Компания', en: 'Company' },
  'nav.about': { ru: 'О нас', kz: 'Біз туралы', en: 'About Us' },
  'nav.team': { ru: 'Команда', kz: 'Команда', en: 'Team' },
  'nav.licenses': { ru: 'Лицензии', kz: 'Лицензиялар', en: 'Licenses' },
  'nav.partners': { ru: 'Партнеры', kz: 'Серіктестер', en: 'Partners' },
  'nav.careers': { ru: 'Карьера', kz: 'Мансап', en: 'Careers' },
  'nav.products': { ru: 'Продукты', kz: 'Өнімдер', en: 'Products' },
  'nav.creditConveyor': { ru: 'Кредитный Конвейер', kz: 'Несие Конвейері', en: 'Credit Conveyor' },
  'nav.creditBroker': { ru: 'Кредитный Брокер', kz: 'Несие Брокері', en: 'Credit Broker' },
  'nav.solutions': { ru: 'Решения', kz: 'Шешімдер', en: 'Solutions' },
  'nav.forBanks': { ru: 'Для банков', kz: 'Банктерге', en: 'For Banks' },
  'nav.forMFO': { ru: 'Для МФО', kz: 'МҚҰ үшін', en: 'For MFOs' },
  'nav.forDealers': { ru: 'Для дилеров', kz: 'Дилерлерге', en: 'For Dealers' },
  'nav.media': { ru: 'Пресса', kz: 'Баспасөз', en: 'Media' },
  'nav.contacts': { ru: 'Контакты', kz: 'Байланыс', en: 'Contacts' },
  'nav.faq': { ru: 'FAQ', kz: 'FAQ', en: 'FAQ' },
  
  // Hero
  'hero.badge': { 
    ru: 'Платформа автоматизации кредитования', 
    kz: 'Несиелеуді автоматтандыру платформасы', 
    en: 'Credit Automation Platform' 
  },
  'hero.title': { 
    ru: 'Автоматизация кредитования для вашего бизнеса', 
    kz: 'Бизнесіңіз үшін несиелеуді автоматтандыру', 
    en: 'Credit Automation for Your Business' 
  },
  'hero.subtitle': { 
    ru: 'Полный цикл кредитных решений: от подачи заявки до выдачи средств. Объединяем банки, МФО и дилеров в единую экосистему', 
    kz: 'Несиелік шешімдердің толық циклі: өтінім беруден қаражат беруге дейін. Банктерді, МҚҰ-ларды және дилерлерді бірыңғай экожүйеге біріктіреміз', 
    en: 'Complete credit solutions cycle: from application to disbursement. Connecting banks, MFOs and dealers into a unified ecosystem' 
  },
  'hero.cta': { ru: 'Запросить демо', kz: 'Демо сұрау', en: 'Request Demo' },
  'hero.learnMore': { ru: 'Узнать больше', kz: 'Көбірек білу', en: 'Learn More' },

  // Stats
  'stats.cities': { ru: 'Городов Казахстана', kz: 'Қазақстан қалалары', en: 'Cities in Kazakhstan' },
  'stats.partners': { ru: 'Партнеров', kz: 'Серіктестер', en: 'Partners' },
  'stats.applications': { ru: 'Заявок обработано', kz: 'Өтінімдер өңделді', en: 'Applications Processed' },
  'stats.employees': { ru: 'Сотрудников', kz: 'Қызметкерлер', en: 'Employees' },
  'stats.uptime': { ru: 'Время работы', kz: 'Жұмыс уақыты', en: 'Uptime' },

  // Products
  'products.title': { ru: 'Наши продукты', kz: 'Біздің өнімдер', en: 'Our Products' },
  'products.subtitle': { 
    ru: 'Комплексные решения для автоматизации кредитных процессов', 
    kz: 'Несиелік процестерді автоматтандырудың кешенді шешімдері', 
    en: 'Comprehensive solutions for credit process automation' 
  },
  'products.conveyor.title': { ru: 'Кредитный Конвейер', kz: 'Несие Конвейері', en: 'Credit Conveyor' },
  'products.conveyor.desc': { 
    ru: 'Сквозная платформа кредитной автоматизации: от подачи заявки до выдачи средств', 
    kz: 'Өтінім беруден қаражат беруге дейінгі несиелік автоматтандырудың толық платформасы', 
    en: 'End-to-end credit automation platform: from application to disbursement' 
  },
  'products.broker.title': { ru: 'Кредитный Брокер', kz: 'Несие Брокері', en: 'Credit Broker' },
  'products.broker.desc': { 
    ru: 'Цифровая платформа, связывающая дилерские центры, банки и микрофинансовые организации', 
    kz: 'Дилерлік орталықтарды, банктерді және микроқаржы ұйымдарын байланыстыратын цифрлық платформа', 
    en: 'Digital platform connecting dealer centers, banks and microfinance organizations' 
  },
  'products.learnMore': { ru: 'Подробнее', kz: 'Толығырақ', en: 'Learn More' },

  // Solutions
  'solutions.title': { ru: 'Решения для бизнеса', kz: 'Бизнес шешімдері', en: 'Business Solutions' },
  'solutions.subtitle': { 
    ru: 'Индивидуальный подход для каждого сегмента рынка', 
    kz: 'Әрбір нарық сегментіне жеке тәсіл', 
    en: 'Tailored approach for each market segment' 
  },
  'solutions.banks.title': { ru: 'Для банков', kz: 'Банктерге', en: 'For Banks' },
  'solutions.banks.desc': { 
    ru: 'Интеграция с существующими банковскими системами, автоматизация скоринга и принятия решений', 
    kz: 'Қолданыстағы банктік жүйелермен интеграция, скоринг және шешім қабылдауды автоматтандыру', 
    en: 'Integration with existing banking systems, automated scoring and decision-making' 
  },
  'solutions.mfo.title': { ru: 'Для МФО', kz: 'МҚҰ үшін', en: 'For MFOs' },
  'solutions.mfo.desc': { 
    ru: 'Полный цикл работы с заявками, от первичной обработки до выдачи займа', 
    kz: 'Өтінімдермен жұмыс істеудің толық циклі, бастапқы өңдеуден несие беруге дейін', 
    en: 'Complete application cycle from initial processing to loan disbursement' 
  },
  'solutions.dealers.title': { ru: 'Для дилерских центров', kz: 'Дилерлік орталықтарға', en: 'For Dealer Centers' },
  'solutions.dealers.desc': { 
    ru: 'Мгновенный доступ к предложениям от множества кредиторов в одном интерфейсе', 
    kz: 'Бір интерфейсте көптеген несие берушілердің ұсыныстарына лезде қол жеткізу', 
    en: 'Instant access to offers from multiple lenders in one interface' 
  },

  // Media
  'media.title': { ru: 'СМИ о нас', kz: 'БАҚ біз туралы', en: 'Media About Us' },
  'media.subtitle': { 
    ru: 'Что пишут о Sapa Technologies в ведущих изданиях', 
    kz: 'Жетекші басылымдар Sapa Technologies туралы не жазады', 
    en: 'What leading publications write about Sapa Technologies' 
  },
  'media.readMore': { ru: 'Читать статью', kz: 'Мақаланы оқу', en: 'Read Article' },

  // CTA
  'cta.title': { ru: 'Готовы к цифровой трансформации?', kz: 'Цифрлық трансформацияға дайынсыз ба?', en: 'Ready for Digital Transformation?' },
  'cta.subtitle': { 
    ru: 'Свяжитесь с нами, чтобы узнать, как Sapa Technologies может помочь вашему бизнесу', 
    kz: 'Sapa Technologies сіздің бизнесіңізге қалай көмектесе алатынын білу үшін бізбен байланысыңыз', 
    en: 'Contact us to learn how Sapa Technologies can help your business' 
  },
  'cta.button': { ru: 'Связаться с нами', kz: 'Бізбен байланысыңыз', en: 'Contact Us' },
  'cta.demo': { ru: 'Запросить демо', kz: 'Демо сұрау', en: 'Request Demo' },

  // Demo Modal
  'demoModal.header': { ru: 'Заполните форму, и мы свяжемся с вами в ближайшее время', kz: 'Форманы толтырыңыз, біз сізбен жақын арада байланысамыз', en: 'Fill out the form and we will contact you soon' },
  'demoModal.form.name': { ru: 'Имя', kz: 'Аты', en: 'Name' },
  'demoModal.form.companyName': { ru: 'Название компании', kz: 'Компания атауы', en: 'Company Name' },
  'demoModal.form.phone': { ru: 'Телефон', kz: 'Телефон', en: 'Phone' },
  'demoModal.buttons.submit': { ru: 'Отправить', kz: 'Жіберу', en: 'Submit' },
  'demoModal.buttons.close': { ru: 'Отмена', kz: 'Болдырмау', en: 'Cancel' },
  'demoModal.buttons.submitting': { ru: 'Отправка...', kz: 'Жіберілуде...', en: 'Submitting...' },
  'demoModal.validation.required': { ru: 'Пожалуйста, заполните все поля', kz: 'Барлық өрістерді толтырыңыз', en: 'Please fill in all fields' },
  'demoModal.alerts.success': { ru: 'Заявка успешно отправлена!', kz: 'Өтінім сәтті жіберілді!', en: 'Request sent successfully!' },
  'demoModal.alerts.error': { ru: 'Ошибка при отправке заявки. Попробуйте позже.', kz: 'Өтінімді жіберу кезінде қате пайда болды. Кейінірек қайталаңыз.', en: 'Error sending request. Please try again later.' },

  // Footer
  'footer.description': { 
    ru: 'Технологическая компания, создающая цифровые платформы для автоматизации кредитных процессов', 
    kz: 'Несиелік процестерді автоматтандыру үшін цифрлық платформалар жасайтын технологиялық компания', 
    en: 'Technology company building digital platforms for credit process automation' 
  },
  'footer.quickLinks': { ru: 'Быстрые ссылки', kz: 'Жылдам сілтемелер', en: 'Quick Links' },
  'footer.legal': { ru: 'Правовая информация', kz: 'Құқықтық ақпарат', en: 'Legal' },
  'footer.privacy': { ru: 'Политика конфиденциальности', kz: 'Құпиялылық саясаты', en: 'Privacy Policy' },
  'footer.terms': { ru: 'Условия использования', kz: 'Пайдалану шарттары', en: 'Terms of Use' },
  'footer.contact': { ru: 'Контакты', kz: 'Байланыс', en: 'Contact' },
  'footer.address': { ru: 'Алматы, Казахстан', kz: 'Алматы, Қазақстан', en: 'Almaty, Kazakhstan' },
  'footer.rights': { ru: 'Все права защищены', kz: 'Барлық құқықтар қорғалған', en: 'All rights reserved' },

  // Features
  'feature.applications': { ru: 'Подача заявок', kz: 'Өтінім беру', en: 'Application Submission' },
  'feature.scoring': { ru: 'Скоринг и решения', kz: 'Скоринг және шешімдер', en: 'Scoring & Decisions' },
  'feature.integration': { ru: 'Интеграция', kz: 'Интеграция', en: 'Integration' },
  'feature.disbursement': { ru: 'Выдача средств', kz: 'Қаражат беру', en: 'Disbursement' },

  // Team
  'team.badge': { ru: 'Наша команда', kz: 'Біздің команда', en: 'Our Team' },
  'team.title': { ru: 'Люди, которые создают будущее fintech', kz: 'Fintech болашағын жасайтын адамдар', en: 'People Building the Future of Fintech' },
  'team.subtitle': { 
    ru: 'Более 40 профессионалов, объединённых общей целью — трансформировать финансовую индустрию Казахстана', 
    kz: '40-тан астам кәсіпқой Қазақстанның қаржы саласын өзгертуге бағытталған бірыңғай мақсатпен біріккен', 
    en: 'Over 40 professionals united by a common goal — to transform Kazakhstan\'s financial industry' 
  },
  'team.employees': { ru: 'Сотрудников', kz: 'Қызметкерлер', en: 'Employees' },
  'team.experience': { ru: 'Лет опыта', kz: 'Жыл тәжірибе', en: 'Years Experience' },
  'team.passion': { ru: 'Вовлеченность', kz: 'Қатысу', en: 'Commitment' },
  'team.value1.title': { ru: 'Инновации', kz: 'Инновациялар', en: 'Innovation' },
  'team.value1.description': { 
    ru: 'Мы постоянно исследуем новые технологии и методы для улучшения наших продуктов', 
    kz: 'Біз өнімдерімізді жақсарту үшін жаңа технологиялар мен әдістерді үнемі зерттейміз', 
    en: 'We constantly explore new technologies and methods to improve our products' 
  },
  'team.value2.title': { ru: 'Надежность', kz: 'Сенімділік', en: 'Reliability' },
  'team.value2.description': { 
    ru: 'Наши решения работают 24/7 с гарантией 99.9% uptime для критически важных процессов', 
    kz: 'Біздің шешімдер маңызды процестер үшін 99.9% жұмыс уақытының кепілдігімен 24/7 жұмыс істейді', 
    en: 'Our solutions work 24/7 with 99.9% uptime guarantee for critical processes' 
  },
  'team.value3.title': { ru: 'Партнерство', kz: 'Серіктестік', en: 'Partnership' },
  'team.value3.description': { 
    ru: 'Мы строим долгосрочные отношения, основанные на доверии и взаимной выгоде', 
    kz: 'Біз сенім мен өзара пайдаға негізделген ұзақ мерзімді қарым-қатынастар орнатамыз', 
    en: 'We build long-term relationships based on trust and mutual benefit' 
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}