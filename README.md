# My Portfolio Website

A modern, fully internationalized portfolio website showcasing projects across multiple categories with support for Vietnamese (VI) and English (EN) languages.

## 🌐 Live Demo

- **GitHub Pages**: https://mvtvn78.github.io/My_Portfolio

## 📋 Table of Contents

- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Configuration Flow](#configuration-flow)
- [Author](#author)
- [Projects Overview](#projects-overview)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Features](#features)

## 🛠 Technology Stack

### Frontend Framework & UI
- **React** (v18.3.1) - UI library with functional components and hooks
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework for responsive design
- **PostCSS** (v8.4.33) - CSS processing with Autoprefixer for cross-browser compatibility

### Internationalization (i18n)
- **i18next** (v23.7.6) - Core i18n framework
- **react-i18next** (v13.5.0) - React bindings for i18next
- **i18next-browser-languagedetector** (v7.2.0) - Auto-detect browser language preferences

### Icons & Visual Components
- **lucide-react** (v1.14.0) - Modern icon library (ChevronLeft, ChevronRight, Package, User, CheckCircle, Wrench, Calendar, ExternalLink, Grid3X3, Brain, Gamepad2, Wifi, Globe, Monitor, Smartphone, X)

### Build & Deployment
- **React Scripts** (v5.0.1) - Create React App build tooling
- **gh-pages** (v6.1.1) - GitHub Pages deployment

### Testing & Quality
- **@testing-library/react** (v13.4.0) - Testing utilities
- **@testing-library/jest-dom** (v5.17.0) - DOM matchers

## 📁 Project Structure

```
src_my_portfolio/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx        # Hero banner with language selector
│   │   ├── CategoryFilter.jsx      # Category filter with icons and scrolling
│   │   ├── ProjectGrid.jsx         # Paginated project grid (i18n enabled)
│   │   ├── Modal.jsx               # Project details modal (i18n enabled)
│   │   ├── NavBar.jsx              # Navigation bar (removed from layout)
│   │   └── LazyImage.jsx           # Lazy loading image component
│   ├── projects/                   # Project data organized by category
│   │   ├── ai/
│   │   │   ├── pneumonia-detection/index.jsx
│   │   │   └── deep-fake-detection/index.jsx
│   │   ├── games/
│   │   │   ├── game-sap-xep/index.jsx
│   │   │   └── tim-hieu-co-ban/index.jsx
│   │   ├── iot/
│   │   │   └── smart-socket/index.jsx
│   │   ├── mobile/
│   │   │   └── dating-app/index.jsx
│   │   ├── desktop/
│   │   │   ├── xuan-ha-thu-dong/index.jsx
│   │   │   ├── moto-a1-win/index.jsx
│   │   │   ├── ql-sv-winform/index.jsx
│   │   │   └── ql-sinh-vien-win/index.jsx
│   │   ├── websites/
│   │   │   ├── admin-mt5/index.jsx
│   │   │   ├── backend-mt5/index.jsx
│   │   │   ├── user-mt5/index.jsx
│   │   │   ├── mvt-shop-reactjs/index.jsx
│   │   │   └── mvt-film/index.jsx
│   │   └── others/
│   │       └── hidden-world/index.jsx
│   ├── i18n/
│   │   └── index.js                # i18n configuration with translations
│   ├── locales/                    # Language-specific translations (optional)
│   │   ├── en/
│   │   └── vi/
│   ├── css/
│   │   ├── app.css
│   │   ├── avatar.css
│   │   ├── cover_photo.css
│   │   ├── mymodal.css
│   │   └── reset.css
│   ├── data/                       # Project images and videos
│   ├── App.jsx                     # Main application component
│   ├── index.js                    # Entry point
│   └── index.css                   # Global styles
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── build/                          # Production build output
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # This file
```

## ⚙️ Configuration Flow

### 1. Language Detection & i18n Initialization
```javascript
// src/i18n/index.js
- Auto-detect browser language using i18next-browser-languagedetector
- Initialize with English (en) and Vietnamese (vi) as default languages
- Provide fallback translations for missing keys
```

### 2. Application Startup (App.jsx)
```javascript
- Initialize project loader from projectLoader utility
- Load all 16 projects from category folders
- Initialize modal state and scroll position tracking
- Set up category filtering
```

### 3. Component Rendering Flow
```
HeroSection (Language Selector)
    ↓ [Language Change]
ProjectGrid (displays localized titles)
    ↓ [Click Project]
Modal (displays full localized project details)

CategoryFilter 
    ↓ [Filter Projects]
ProjectGrid (updates with filtered projects)
```

### 4. Project Data Structure
Each project file exports a default object with:
```javascript
{
  url: 'unique-identifier',           // Used for routing
  avatar: 'icon-url',                 // Technology icon
  language: 'tech-stack-string',      // Display tech stack
  image: require('path-to-image'),    // Project thumbnail
  videoURL: 'video-url',              // Demo video
  linkGithub: 'github-url',           // Source code link
  finishedDay: 'completion-date',     // Finish date
  tech: ['tech1', 'tech2'],           // Technologies used
  vi: {                               // Vietnamese translations
    title: '...',
    about: '...',
    features: ['...'],
    role: ['...']
  },
  en: {                               // English translations
    title: '...',
    about: '...',
    features: ['...'],
    role: ['...']
  }
}
```

## 👤 Author

**Name**: Mã Văn Thái  
**GitHub**: @mvtvn78  
**Email**: Contact via portfolio website  
**Portfolio**: https://mvtvn78.github.io/My_Portfolio

## 📊 Projects Overview

### Total: 16 Projects across 7 Categories

#### 1. AI (2 Projects)
- **Pneumonia Detection** (86% Accuracy)
  - Technologies: Python, TensorFlow, ResNet50, DenseNet121, EfficientNetB0
  - Features: Disease diagnosis, tumor detection, GradCam++ visualization
  
- **Deepfake Detection** (80% Accuracy)
  - Technologies: Python, TensorFlow, Meso4, Haarcascade
  - Features: Deepfake detection, face recognition

#### 2. Games (2 Projects)
- **Puzzle Game with AI (9-piece)**
  - Technologies: C++, A* Algorithm
  - Features: Image fragmentation, position swapping, pathfinding
  
- **Game Learning Basics**
  - Technologies: C++, SDL Library
  - Features: Game mechanics, programming concepts

#### 3. IoT (1 Project)
- **Smart Socket**
  - Technologies: Arduino, Python, Firebase
  - Features: Remote control, real-time monitoring, energy tracking

#### 4. Mobile (1 Project)
- **Dating Application (Ông Tơ Bà Nguyệt)**
  - Technologies: Java, NodeJS, PeerJS, MongoDB, WebSocket
  - Features: Matchmaking, calling, real-time chat, OTP auth

#### 5. Desktop (4 Projects)
- **Computer Graphics (Four Seasons)**
  - Technologies: C++, OpenGL
  - Features: Scene transitions, fireworks effect, seasonal design
  
- **Motorcycle A1 Exam Practice**
  - Technologies: C#, Windows Forms
  - Features: 200 practice questions, exam simulation
  
- **Student Management System (Winform)**
  - Technologies: C#, Windows Forms
  - Features: Student/teacher management, grade viewing
  
- **Student Management (SQL Server)**
  - Technologies: C#, Windows Forms, SQL Server
  - Features: Statistics, login/registration, CRUD operations

#### 6. Websites (5 Projects)
- **MT5 Admin Page**
  - Technologies: HTML, CSS, JavaScript, jQuery
  - Features: Admin dashboard for music platform
  
- **MT5 Backend**
  - Technologies: Node.js, Express.js, MySQL, RESTful API, MVC
  - Features: Music streaming, lyrics sync, user auth, artist following
  
- **MT5 User Page**
  - Technologies: React, Bootstrap
  - Features: Music browsing, playback, user interface
  
- **Game Store (ReactJS)**
  - Technologies: React
  - Features: Game e-commerce, shopping cart, product display
  
- **MvtFilm (Video Streaming)**
  - Technologies: PHP Laravel 9, Node.js, Python Flask, MySQL
  - Features: Movie streaming, recommendations, admin panel, search, ratings

#### 7. Others (1 Project)
- **Hidden World Novel**
  - Type: Creative writing project
  - Features: Storytelling showcase

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation Steps
```bash
# Navigate to project directory
cd src_my_portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Configuration
- No environment variables required
- Language auto-detection based on browser settings
- Falls back to English if language not supported

## 💻 Usage

### Running Locally
```bash
npm start
# Opens http://localhost:3000
```

### Switching Languages
- Click **EN** or **VI** buttons in the top-right corner
- Language preference is stored in localStorage
- All project data updates automatically

### Filtering Projects
- Use category buttons below HeroSection
- Select a category to view related projects
- Click "All" to view all projects

### Viewing Project Details
- Click any project card to open modal
- Modal displays:
  - Project video/demo
  - Description and about section
  - Features list
  - My role in the project
  - Technologies used
  - Completion date
  - GitHub link

### Pagination
- Navigate through projects using Previous/Next buttons
- Click page numbers for direct access
- 9 projects displayed per page

## ✨ Features

### ✅ Responsive Design
- Mobile-first approach
- Tailwind CSS responsive utilities
- Works on all screen sizes

### ✅ Internationalization (i18n)
- Full Vietnamese and English support
- Real-time language switching
- Auto language detection
- All project data translated

### ✅ Component-Based Architecture
- Modular component structure
- Reusable components
- Easy to maintain and extend

### ✅ Performance Optimization
- Lazy image loading
- Efficient pagination
- Optimized re-renders

### ✅ User Experience
- Smooth scroll position preservation when opening/closing modals
- Hover effects and transitions
- Intuitive navigation
- Modal rounded corners persist on scroll

### ✅ Modern Development Stack
- React with Hooks
- Tailwind CSS for styling
- i18next for translations
- lucide-react for icons
- GitHub Pages deployment

## 📝 License

This project is open source and available under the LICENSE file in the repository.

## 🔗 Links

- **Live Site**: https://mvtvn78.github.io/My_Portfolio
- **GitHub Repository**: https://github.com/mvtvn78/My_Portfolio
- **Author GitHub**: https://github.com/mvtvn78
