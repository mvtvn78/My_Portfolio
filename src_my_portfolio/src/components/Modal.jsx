import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { X, Package, User, CheckCircle, Wrench, Calendar, ExternalLink } from 'lucide-react';

const Modal = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();

  if (!isOpen || !project) return null;

  // Get current language
  const currentLanguage = i18n.language;
  
  // Get translated project data from project vi/en structure
  const languageData = project[currentLanguage] || project.vi || project.en;
  
  const title = languageData?.title || project.title || '';
  const about = languageData?.about || project.about || '';
  const features = languageData?.features || project.features || [];
  const role = languageData?.role || project.role || [];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header with Title and Close Button */}
          <div className="sticky top-0 p-4 flex justify-between items-center bg-white border-b flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto flex-1">
            {/* Video and Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Video - 2/3 width */}
              <div className="lg:col-span-2">
                <video
                  src={project.videoURL}
                  controls
                  autoPlay
                  className="w-full rounded-lg bg-black"
                />
              </div>

              {/* Info - 1/3 width */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-bold mb-4">{t('modal.description')}</h3>
                
                <div className="space-y-4">
                  {/* About */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Package className="w-4 h-4" /> {t('modal.about')}
                    </h4>
                    <p className="text-sm text-gray-700">{about}</p>
                  </div>

                  {/* Role */}
                  {role && role.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" /> {t('modal.role')}
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {role.map((roleItem, idx) => (
                          <li key={idx}>• {roleItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Features */}
                  {features && features.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> {t('modal.features')}
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 max-h-48 overflow-y-auto">
                        {features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.tech && project.tech.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Wrench className="w-4 h-4" /> {t('modal.technologies')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Project Title and Meta Info */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold mb-3">{title}</h2>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> <span>{t('modal.finished')}: {project.finishedDay}</span>
                </div>
                {project.linkGithub && (
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> <span>{project.linkGithub}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
