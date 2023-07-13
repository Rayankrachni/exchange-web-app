import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslateFileEn from './local/en.json';
import TranslateFileAr from './local/ar.json';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {translation:TranslateFileEn},
  ar: {translation:TranslateFileAr},
  
};

i18n
.use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;