import { useTranslation } from 'react-i18next';
import { ExternalLink, Mail, Volume2, VolumeX } from 'lucide-react';
import info from '../author';

const HeroSection = ({ isMuted, onToggleMute }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative w-full h-[450px] bg-white overflow-hidden">
      {/* Video Background */}
      <video
        muted={isMuted}
        autoPlay
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={info.coverVideo} type="video/webm" />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Top Right - Language Selector, Sound and Social Icons */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {/* Language Selector */}
        <div className="flex items-center gap-1 bg-white/80 rounded-full p-1 backdrop-blur-sm">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-3 py-2 rounded-full font-medium transition-colors ${
              i18n.language === 'en'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage('vi')}
            className={`px-3 py-2 rounded-full font-medium transition-colors ${
              i18n.language === 'vi'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            VI
          </button>
        </div>
      </div>
      <div className='absolute bottom-4 right-4 z-10 flex gap-2'>
        {/* Sound Toggle */}
        <button
          onClick={onToggleMute}
          className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          title={isMuted ? t('hero.soundOn') : t('hero.soundOff')}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {/* GitHub Link */}
        <button
          onClick={() => window.open(info.githubLink, '_blank', 'noopener')}
          className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          title={t('hero.myGithub')}
        >
          <ExternalLink className="w-5 h-5" />
        </button>

        {/* Email Contact */}
        <button
          onClick={() =>
            window.open(
              'https://mail.google.com/mail/?view=cm&fs=1&to=' + info.emailContact,
              '_blank',
              'noopener'
            )
          }
          className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          title={t('hero.myEmail')}
        >
          <Mail className="w-5 h-5" />
        </button>
      </div>
      {/* Center - Avatar and Name */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16">
        <div className="relative">
          <img
            src={info.avatarURL}
            alt="avatar"
            className="w-48 h-48 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">
            {info.authorName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
