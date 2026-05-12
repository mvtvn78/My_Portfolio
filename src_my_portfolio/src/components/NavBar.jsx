import { useTranslation } from 'react-i18next';
import { Volume2, VolumeX } from 'lucide-react';

const NavBar = ({ isMuted, onToggleMute, onCategoryChange, activeCategory, categories }) => {
  const { i18n, t } = useTranslation();

  const getCategoryLabel = (categoryId) => {
    const labelMap = {
      all: 'All',
      games: t('nav.games'),
      iot: t('nav.iot'),
      ai: t('nav.ai'),
      websites: t('nav.websites'),
      desktop: t('nav.desktop'),
      mobile: t('nav.mobile'),
      others: t('nav.others'),
    };
    return labelMap[categoryId] || categoryId;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Sound Toggle */}
        <button
          onClick={onToggleMute}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          title={isMuted ? t('hero.soundOn') : t('hero.soundOff')}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {/* Center - Category Navigation */}
        <div className="flex items-center gap-1 flex-wrap justify-center flex-1 mx-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryLabel(category.id)}
            </button>
          ))}
        </div>

        {/* Right - Language Switcher */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-3 py-1 rounded font-medium transition-colors ${
              i18n.language === 'en'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage('vi')}
            className={`px-3 py-1 rounded font-medium transition-colors ${
              i18n.language === 'vi'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            VI
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
