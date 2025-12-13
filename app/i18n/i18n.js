// /src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      get_quote: "Get a Quote",
      who: "Who We Are",
      mission: "Our Mission",
      team: "Our Team",
      why: "Why Choose Us",
    }
  },
  ur: {
    translation: {
      home: "گھر",
      about: "ہمارے بارے میں",
      services: "خدمات",
      portfolio: "پورٹ فولیو",
      blog: "بلاگ",
      contact: "رابطہ کریں",
      get_quote: "ایک قیمت حاصل کریں",
      who: "ہم کون ہیں",
      mission: "ہمارا مشن",
      team: "ہماری ٹیم",
      why: "کیوں ہم منتخب کریں",
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      about: "À propos de nous",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      get_quote: "Obtenez un devis",
      who: "Qui nous sommes",
      mission: "Notre mission",
      team: "Notre équipe",
      why: "Pourquoi nous choisir",
    }
  },
  es: {
    translation: {
      home: "Inicio",
      about: "Sobre nosotros",
      services: "Servicios",
      portfolio: "Portafolio",
      blog: "Blog",
      contact: "Contacto",
      get_quote: "Obtener una cotización",
      who: "Quiénes somos",
      mission: "Nuestra misión",
      team: "Nuestro equipo",
      why: "Por qué elegirnos",
    }
  },
  de: {
    translation: {
      home: "Startseite",
      about: "Über uns",
      services: "Dienstleistungen",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Kontakt",
      get_quote: "Holen Sie sich ein Angebot",
      who: "Wer wir sind",
      mission: "Unsere Mission",
      team: "Unser Team",
      why: "Warum uns wählen",
    }
  },
  ar: {
    translation: {
      home: "الرئيسية",
      about: "معلومات عنا",
      services: "الخدمات",
      portfolio: "محفظة",
      blog: "مدونة",
      contact: "اتصل بنا",
      get_quote: "احصل على اقتباس",
      who: "من نحن",
      mission: "مهمتنا",
      team: "فريقنا",
      why: "لماذا تختارنا",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
