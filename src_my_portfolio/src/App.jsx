import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/HeroSection';
import ProjectGrid from './components/ProjectGrid';
import Modal from './components/Modal';
import CategoryFilter from './components/CategoryFilter';
import { getCategories, loadProjectsByCategory } from './utils/projectLoader';

const App = () => {
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const categories = getCategories();

  // Load projects when category changes
  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      try {
        const loadedProjects = loadProjectsByCategory(selectedCategory);
        setProjects(loadedProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      }
      setIsLoading(false);
    };

    loadProjects();
  }, [selectedCategory]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Store current scroll position before changing hash
    if (project.url) {
      const scrollPos = window.scrollY;
      window.location.hash = project.url;
      // Prevent automatic scroll to top
      setTimeout(() => {
        window.scrollTo(0, scrollPos);
      }, 0);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Remove hash without causing scroll
    const scrollPos = window.scrollY;
    window.location.hash = '';
    setTimeout(() => {
      window.scrollTo(0, scrollPos);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with background video */}
      <HeroSection isMuted={isMuted} onToggleMute={() => setIsMuted(!isMuted)} />

      {/* Category Filter */}
      <CategoryFilter 
        categories={categories}
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <div className="pt-0">
        {/* Projects Section */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            {t('nav.myProducts')}
          </h2>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : (
            <ProjectGrid projects={projects} onProjectClick={handleProjectClick} />
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default App;
