import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyImage from './LazyImage';

const ITEMS_PER_PAGE = 9;

const ProjectGrid = ({ projects, onProjectClick }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIdx, endIdx);

  if (projects.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <p className="text-gray-500 text-lg">{t('noData')}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentProjects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => onProjectClick(project)}
            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gray-200">
              {typeof project.image === 'string' ? (
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                  style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Avatar and Title */}
              <div className="flex gap-3 mb-3">
                <img
                  src={project.avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-sm line-clamp-2">{project.title}</h3>
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-1 text-xs text-gray-600">
                {project.language && (
                  <p className="font-semibold text-gray-700">{project.language}</p>
                )}
                {project.linkGithub && (
                  <p className="text-gray-600 line-clamp-1">{project.linkGithub}</p>
                )}
                {project.finishedDay && (
                  <p className="text-right font-semibold text-gray-700">
                    {project.finishedDay}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t('pagination.previous')}
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t('pagination.next')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
