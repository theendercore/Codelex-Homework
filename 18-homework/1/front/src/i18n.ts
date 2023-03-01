import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          game: {
            title: "Game Title",
            select_move: "Selected move : "
          },
          index: {
            home: "Home",
            game: "Game",
            scores: "Scores",
          },
          move:{
            rock: "Rock",
            paper: "Paper",
            scissors: "Scissors"
          }
        },
      },
      lv: {
        translation: {
          game: {
            title: "Spēles Virsraksts"
          },
          index: {
            home: "Mājas",
            game: "Spēle",
            scores: "Rezultāti",
          },
        },
      },
    },
  });

export default i18n;
