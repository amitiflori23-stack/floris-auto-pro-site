import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'sq' | 'mk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.offers': 'Offers',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Reliable Automotive Solutions for Professionals',
    'hero.subtitle': 'Auto Pjese Flori provides high-quality auto parts, oils, and accessories with unmatched service and expertise.',
    'hero.cta': 'Explore Products',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Auto Pjese Flori is a leading provider of automotive parts and accessories. With years of experience and a commitment to quality, we deliver reliable solutions for every vehicle and customer.',
    
    // Brands
    'brands.title': 'Our Partner Brands',
    'brands.subtitle': 'We work with top international brands to ensure quality and performance you can trust.',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Explore our comprehensive range of automotive solutions',
    'products.engine': 'Engine Parts',
    'products.engine.desc': 'Premium engine components and replacement parts',
    'products.oils': 'Oils & Lubricants',
    'products.oils.desc': 'High-performance oils and lubricants for all vehicles',
    'products.batteries': 'Batteries',
    'products.batteries.desc': 'Reliable power solutions for every vehicle',
    'products.accessories': 'Accessories',
    'products.accessories.desc': 'Quality accessories and maintenance products',
    'products.viewAll': 'View All',
    
    // Offers
    'offers.title': 'Special Offers',
    'offers.subtitle': 'Discover our latest promotions and featured products',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Working Hours',
    'contact.hours.weekday': 'Monday - Saturday: 9 AM - 6 PM',
    'contact.hours.sunday': 'Sunday: Closed',
    
    // Footer
    'footer.copyright': 'Excellence in Automotive Parts and Service',
    'footer.quickLinks': 'Quick Links',
  },
  sq: {
    // Navigation
    'nav.home': 'Ballina',
    'nav.about': 'Rreth Nesh',
    'nav.products': 'Produktet',
    'nav.offers': 'Ofertat',
    'nav.contact': 'Kontakti',
    
    // Hero
    'hero.title': 'Zgjidhje të Besueshme Automobilistike për Profesionistë',
    'hero.subtitle': 'Auto Pjese Flori ofron pjesë auto, vaj dhe aksesorë me cilësi të lartë me shërbim dhe ekspertizë të pakrahasueshme.',
    'hero.cta': 'Shiko Produktet',
    
    // About
    'about.title': 'Rreth Nesh',
    'about.description': 'Auto Pjese Flori është një furnizues kryesor i pjesëve dhe aksesorëve automobilistikë. Me vite përvojë dhe përkushtim ndaj cilësisë, ne ofrojmë zgjidhje të besueshme për çdo mjet dhe klient.',
    
    // Brands
    'brands.title': 'Markat Tona Partnere',
    'brands.subtitle': 'Ne punojmë me marka ndërkombëtare të nivelit të lartë për të siguruar cilësi dhe performancë që mund të besoni.',
    
    // Products
    'products.title': 'Produktet Tona',
    'products.subtitle': 'Eksploroni gamën tonë gjithëpërfshirëse të zgjidhjeve automobilistike',
    'products.engine': 'Pjesë Motori',
    'products.engine.desc': 'Komponentë premium motori dhe pjesë zëvendësuese',
    'products.oils': 'Vajra & Lubrifikantë',
    'products.oils.desc': 'Vajra dhe lubrifikantë me performancë të lartë për të gjitha mjetet',
    'products.batteries': 'Bateri',
    'products.batteries.desc': 'Zgjidhje të besueshme energjie për çdo mjet',
    'products.accessories': 'Aksesorë',
    'products.accessories.desc': 'Aksesorë me cilësi dhe produkte mirëmbajtjeje',
    'products.viewAll': 'Shiko të Gjitha',
    
    // Offers
    'offers.title': 'Ofertat Speciale',
    'offers.subtitle': 'Zbuloni promovimet tona më të fundit dhe produktet e veçanta',
    
    // Contact
    'contact.title': 'Na Kontaktoni',
    'contact.subtitle': 'Lidhuni me ekipin tonë',
    'contact.name': 'Emri',
    'contact.email': 'Email',
    'contact.message': 'Mesazhi',
    'contact.send': 'Dërgo Mesazhin',
    'contact.info': 'Informacioni i Kontaktit',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefoni',
    'contact.hours': 'Orari i Punës',
    'contact.hours.weekday': 'E Hënë - E Shtunë: 9 AM - 6 PM',
    'contact.hours.sunday': 'E Diel: Mbyllur',
    
    // Footer
    'footer.copyright': 'Përsosmëri në Pjesë dhe Shërbim Automobilistik',
    'footer.quickLinks': 'Lidhje të Shpejta',
  },
  mk: {
    // Navigation
    'nav.home': 'Дома',
    'nav.about': 'За Нас',
    'nav.products': 'Производи',
    'nav.offers': 'Понуди',
    'nav.contact': 'Контакт',
    
    // Hero
    'hero.title': 'Доверливи Автомобилски Решенија за Професионалци',
    'hero.subtitle': 'Auto Pjese Flori обезбедува висококвалитетни автомобилски делови, масла и додатоци со неспоредлива услуга и експертиза.',
    'hero.cta': 'Погледнете ги Производите',
    
    // About
    'about.title': 'За Нас',
    'about.description': 'Auto Pjese Flori е водечки обезбедувач на автомобилски делови и додатоци. Со години искуство и посветеност на квалитетот, ние обезбедуваме доверливи решенија за секое возило и клиент.',
    
    // Brands
    'brands.title': 'Нашите Партнерски Брендови',
    'brands.subtitle': 'Работиме со врвни меѓународни брендови за да обезбедиме квалитет и перформанси на кои можете да им верувате.',
    
    // Products
    'products.title': 'Нашите Производи',
    'products.subtitle': 'Истражете го нашиот сеопфатен асортиман на автомобилски решенија',
    'products.engine': 'Делови за Мотор',
    'products.engine.desc': 'Премиум компоненти за мотор и резервни делови',
    'products.oils': 'Масла & Лубриканти',
    'products.oils.desc': 'Високо-перформансни масла и лубриканти за сите возила',
    'products.batteries': 'Батерии',
    'products.batteries.desc': 'Доверливи решенија за енергија за секое возило',
    'products.accessories': 'Додатоци',
    'products.accessories.desc': 'Квалитетни додатоци и производи за одржување',
    'products.viewAll': 'Погледнете ги Сите',
    
    // Offers
    'offers.title': 'Специјални Понуди',
    'offers.subtitle': 'Откријте ги нашите најнови промоции и истакнати производи',
    
    // Contact
    'contact.title': 'Контактирајте Не',
    'contact.subtitle': 'Стапете во контакт со нашиот тим',
    'contact.name': 'Име',
    'contact.email': 'Е-пошта',
    'contact.message': 'Порака',
    'contact.send': 'Испрати Порака',
    'contact.info': 'Информации за Контакт',
    'contact.address': 'Адреса',
    'contact.phone': 'Телефон',
    'contact.hours': 'Работно Време',
    'contact.hours.weekday': 'Понеделник - Сабота: 9 AM - 6 PM',
    'contact.hours.sunday': 'Недела: Затворено',
    
    // Footer
    'footer.copyright': 'Совршенство во Автомобилски Делови и Услуги',
    'footer.quickLinks': 'Брзи Линкови',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
