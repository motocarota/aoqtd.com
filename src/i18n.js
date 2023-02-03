import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = {
  translation: {
    'Welcome to React': 'Welcome to React and react-i18next',
  },
};
const it = {
  translation: {
    'Welcome to React': 'Benvenuto a Reagire e reagire-i18prossimo',
  },
};

export default function init() {
  return i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
    // manage translation via a UI
    // https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui
      resources: {
        en,
        it,
      },
      lng: 'it', // if you're using a language detector, do not define the lng option
      fallbackLng: 'it',

      interpolation: {
        escapeValue: false,
      },
    });
}
