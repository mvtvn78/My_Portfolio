import { useTranslation } from 'react-i18next';
import { X, Package, User, CheckCircle, Wrench, Calendar, ExternalLink } from 'lucide-react';

const Modal = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
          {/* Close Button */}
          <div className="sticky top-0 right-0 p-4 flex justify-end bg-white border-b">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
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
                    <p className="text-sm text-gray-700">{project.about}</p>
                  </div>

                  {/* Role */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" /> {t('modal.role')}
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {project.role?.map((role, idx) => (
                        <li key={idx}>• {role}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" /> {t('modal.features')}
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 max-h-48 overflow-y-auto">
                      {project.features?.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Wrench className="w-4 h-4" /> {t('modal.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Title and Meta Info */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> <span>{t('modal.finished')}: {project.finishedDay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> <span>{project.linkGithub}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
