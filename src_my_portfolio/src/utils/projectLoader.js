/**
 * Central registry of all projects
 * Import all project data from their respective folders
 */

// AI Projects
const aiProjects = [
  require('../projects/ai/pneumonia-detection').default,
  require('../projects/ai/deep-fake-detection').default,
];

// Games Projects
const gameProjects = [
  require('../projects/games/game-sap-xep').default,
  require('../projects/games/tim-hieu-co-ban').default,
];

// IoT Projects
const iotProjects = [
  require('../projects/iot/smart-socket').default,
];

// Websites Projects
const websiteProjects = [
  require('../projects/websites/admin-mt5').default,
  require('../projects/websites/backend-mt5').default,
  require('../projects/websites/mvt-film').default,
  require('../projects/websites/mvt-shop-reactjs').default,
  require('../projects/websites/user-mt5').default,
];

// Desktop Projects
const desktopProjects = [
  require('../projects/desktop/moto-a1-win').default,
  require('../projects/desktop/ql-sv-winform').default,
  require('../projects/desktop/ql-sinh-vien-win').default,
  require('../projects/desktop/xuan-ha-thu-dong').default,
];

// Mobile Projects
const mobileProjects = [
  require('../projects/mobile/dating-app').default,
];

// Others Projects
const otherProjects = [
  require('../projects/others/hidden-world').default,
];

// Export organized by category
export const projectsByCategory = {
  ai: aiProjects,
  games: gameProjects,
  iot: iotProjects,
  websites: websiteProjects,
  desktop: desktopProjects,
  mobile: mobileProjects,
  others: otherProjects,
};

/**
 * Load projects for a specific category
 * @param {string} category - Category key
 * @returns {Array} Array of projects for that category
 */
export const loadProjectsByCategory = (category) => {
  let projects = [];
  
  if (category === 'all') {
    // Return all projects from all categories
    Object.values(projectsByCategory).forEach(categoryProjects => {
      projects = [...projects, ...categoryProjects];
    });
  } else {
    projects = projectsByCategory[category] || [];
  }
  
  return projects.sort((a, b) => {
    if (!a.finishedDay || !b.finishedDay) return 0;
    return new Date(b.finishedDay) - new Date(a.finishedDay);
  });
};

/**
 * Get all categories with metadata
 * @returns {Array} Array of category objects
 */
export const getCategories = () => {
  return [
    { id: 'all', name: 'All', enName: 'All' },
    { id: 'ai', name: 'AI', enName: 'AI' },
    { id: 'games', name: 'Games', enName: 'Games' },
    { id: 'iot', name: 'IoT', enName: 'IoT' },
    { id: 'websites', name: 'Websites', enName: 'Websites' },
    { id: 'desktop', name: 'Desktop App', enName: 'Desktop App' },
    { id: 'mobile', name: 'Mobile App', enName: 'Mobile App' },
    { id: 'others', name: 'Others', enName: 'Others' },
  ];
};

/**
 * Get category name by ID
 * @param {string} id - Category ID
 * @returns {string} Category name
 */
export const getCategoryName = (id) => {
  const categories = getCategories();
  const category = categories.find(cat => cat.id === id);
  return category ? category.name : id;
};

/**
 * Find a project by its URL slug across all categories
 * @param {string} url - Project URL slug
 * @returns {object|null} Matching project or null
 */
export const getProjectByUrl = (url) => {
  if (!url) return null;

  for (const categoryProjects of Object.values(projectsByCategory)) {
    const project = categoryProjects.find(item => item.url === url);
    if (project) return project;
  }

  return null;
};
