import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        myProducts: 'My Products',
        games: 'Games',
        iot: 'IoT',
        ai: 'AI',
        websites: 'Websites',
        desktop: 'Desktop App',
        mobile: 'Mobile App',
        others: 'Others',
      },
      hero: {
        soundOn: 'Turn on sound',
        soundOff: 'Turn off sound',
        myGithub: 'My GitHub',
        myEmail: 'My Email',
      },
      modal: {
        description: 'Project Details',
        about: 'About',
        features: 'Features',
        technologies: 'Technologies',
        role: 'My Role',
        finished: 'Finished',
      },
      pagination: {
        previous: 'Previous',
        next: 'Next',
      },
      noData: 'No projects found',
    },
  },
  vi: {
    translation: {
      nav: {
        myProducts: 'Sản phẩm của tôi',
        games: 'Trò chơi',
        iot: 'IoT',
        ai: 'AI',
        websites: 'Websites',
        desktop: 'Ứng dụng Desktop',
        mobile: 'Ứng dụng Mobile',
        others: 'Khác',
      },
      hero: {
        soundOn: 'Bật âm thanh',
        soundOff: 'Tắt âm thanh',
        myGithub: 'GitHub của tôi',
        myEmail: 'Email của tôi',
      },
      modal: {
        description: 'Mô tả chi tiết',
        about: 'Ứng dụng làm gì',
        features: 'Tính năng xây dựng',
        technologies: 'Công nghệ sử dụng',
        role: 'Vai trò trong dự án',
        finished: 'Hoàn thành',
      },
      pagination: {
        previous: 'Trước',
        next: 'Tiếp',
      },
      noData: 'Không tìm thấy dự án',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
