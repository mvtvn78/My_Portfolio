import { useTranslation } from 'react-i18next';
import { ExternalLink, Mail, Volume2, VolumeX } from 'lucide-react';
import info from '../services/info';

const HeroSection = ({ isMuted, onToggleMute }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-96 bg-white overflow-hidden">
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

      {/* Top Right - Sound and Social Icons */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
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
        <button
          onClick={() => window.open(info.githubLink, '_blank', 'noopener')}
          className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          title={t('hero.myGithub')}
        >
          <ExternalLink className="w-5 h-5" />
        </button>
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
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
        <div className="relative">
          <img
            src={info.avatarURL}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
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
