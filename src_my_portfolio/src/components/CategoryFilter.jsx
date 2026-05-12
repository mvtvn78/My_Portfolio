import { useTranslation } from 'react-i18next';
import { Grid3X3, Brain, Gamepad2, Wifi, Globe, Monitor, Smartphone, Package } from 'lucide-react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const { t } = useTranslation();

  const iconMap = {
    all: <Grid3X3 className="w-4 h-4" />,
    ai: <Brain className="w-4 h-4" />,
    games: <Gamepad2 className="w-4 h-4" />,
    iot: <Wifi className="w-4 h-4" />,
    websites: <Globe className="w-4 h-4" />,
    desktop: <Monitor className="w-4 h-4" />,
    mobile: <Smartphone className="w-4 h-4" />,
    others: <Package className="w-4 h-4" />,
  };

  const getCategoryLabel = (categoryId) => {
    const labelMap = {
      all: t('nav.all') || 'All',
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
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-2 flex-shrink-0 ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {iconMap[category.id]}
              {getCategoryLabel(category.id)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
