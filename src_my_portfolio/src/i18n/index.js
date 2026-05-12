import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        myProducts: 'My Products',
        all: 'All',
        games: 'Games',
        iot: 'IoT',
        ai: 'AI',
        websites: 'Websites',
        desktop: 'Desktop App',
        mobile: 'Mobile App',
        others: 'Others',
      },
      hero: {
        soundOn: 'Turn on sound',
        soundOff: 'Turn off sound',
        myGithub: 'My GitHub',
        myEmail: 'My Email',
      },
      modal: {
        description: 'Project Details',
        about: 'About',
        features: 'Features',
        technologies: 'Technologies',
        role: 'My Role',
        finished: 'Finished',
      },
      pagination: {
        previous: 'Previous',
        next: 'Next',
      },
      noData: 'No projects found',
      projects: {
        'AI-phat-hien-ung-thu': {
          title: 'Pneumonia Detection Website (86% Accuracy)',
          about: 'A tool to support doctors and medical interns in diagnosing diseases, helping quickly identify tumors and their location',
          features: [
            'Distinguish normal lungs from pneumonia',
            'Pneumonia caused by viruses or bacteria',
            'Train models: Resnet50, DenseNet121, EfficientNetB0',
            'Use GradCam++ to detect lung damage',
          ],
          role: ['All'],
        },
        'AI-phat-hien-deepfake': {
          title: 'Deepfake Detection Website (80% Accuracy)',
          about: 'In the era of global AI, the application of GAN to impersonate faces for malicious purposes has created many consequences, so we need a tool to detect deepfakes',
          features: [
            'Use Haarcascade models for preprocessing and face recognition',
            'Train models: Resnet50, Meso4',
            'Dataset: https://www.kaggle.com/datasets/manjilkarki/deepfake-and-real-images/data',
          ],
          role: ['Developer', 'Idea Contributor'],
        },
        'Game-Do-An-Tri-Tue-Nhan-Tao': {
          title: 'Puzzle Game with AI',
          about: 'Use the A* algorithm to solve a 9-piece puzzle game',
          features: [
            'Fragment the image into 9 regions',
            'Swap positions',
            'Find the shortest path',
          ],
          role: ['All'],
        },
        'Game-Tim-Hieu-Co-Ban': {
          title: 'Game Learning Basics',
          about: 'Mainly to improve programming thinking and understand how a game works based on the SDL library and C++ language',
          features: [],
          role: ['Developer', 'Explorer'],
        },
        'IOT-o-cam-thong-minh': {
          title: 'Smart Socket IoT',
          about: 'An IoT solution for smart power outlets with remote control and monitoring capabilities',
          features: [
            'Remote power control',
            'Real-time monitoring',
            'Energy consumption tracking',
          ],
          role: ['Hardware & Backend'],
        },
        'SW-ong-to-ba-nguyet': {
          title: 'Dating Application - Ông Tơ Bà Nguyệt',
          about: 'A comprehensive dating application connecting people through modern features',
          features: [
            'User profile management',
            'Matching algorithm',
            'Real-time messaging',
            'Location-based matching',
          ],
          role: ['All'],
        },
        'DH-Ha-Thu-Dong-Xuan': {
          title: 'Computer Graphics Project (Four Seasons)',
          about: 'A computer graphics project featuring the four seasons',
          features: [
            'Scene transitions',
            'Fireworks effect',
            'Design of Spring, Summer, Fall, Winter scenes',
          ],
          role: ['Team Lead', 'Handle transitions and spring scene integration'],
        },
        'SW-MotoA1-WinForm': {
          title: 'Motorcycle License A1 Exam Practice',
          about: 'Contains 200 exam questions for motorcycle license A1, helps create a tool for practicing and simulating the A1 license exam',
          features: [],
          role: ['All'],
        },
        'SW-QuanLySinhVien-WinForm': {
          title: 'Student Management System',
          about: 'Practice creating a desktop window application based on Winform',
          features: [],
          role: ['All'],
        },
        'SW-Quan-Ly-Sinh-Vien-Win': {
          title: 'Student Management / SQL Server',
          about: 'A student management project using Winform',
          features: [
            'Basic statistics',
            'Login & registration functionality',
            'Student management operations',
            'Teacher management operations',
            'Grade viewing',
          ],
          role: ['All'],
        },
        'SW-Trang-Admin-Mt5': {
          title: 'Mt5 Music Admin Panel',
          about: 'Admin website using pure HTML, CSS, JS, using Jquery for manipulation',
          features: [],
          role: ['All'],
        },
        'SW-BackendBasic-Mt5': {
          title: 'Mt5 Music Backend',
          about: 'Backend for Mt5 music website, using RESTful API and MVC model to implement the project',
          features: [
            'Music listening & song search functionality',
            'Lyrics display synchronized with music',
            'Login & registration functionality',
            'Artist tracking functionality',
            'Forgot password with OTP authentication',
            'Manage website entities',
          ],
          role: ['All'],
        },
        'SW-Trang-User-Mt5': {
          title: 'Mt5 Music User Page',
          about: 'Mt5 Music website developed with ReactJs',
          features: [],
          role: ['All'],
        },
        'SW-Do-An-WebsiteTinh-ReactJs': {
          title: 'Game Store Website',
          about: 'A game store website design for game retailers, with an attractive and beautiful interface creating a unique gaming feel',
          features: [],
          role: ['All'],
        },
        'SW-MvtFilm': {
          title: 'MvtFilm - Movie Streaming Website',
          about: 'MvtFilm is a movie watching application mainly for animations and anime. Create a simple website with a good-looking and easy-to-use interface for users, plus create an admin management page',
          features: [
            'Movie watching functionality',
            'Movie recommendation feature based on recently watched movies',
            'Movie download & storage functionality',
            'User information editing and security features',
            'Website entity management',
            'Movie rating functionality',
            'Login & registration functionality',
            'Google login integration',
            'Movie ranking list by category',
            'Movie search functionality',
          ],
          role: ['All'],
        },
        'Tiểu thuyết: Thế giới ẩn (Hidden World)': {
          title: 'Hidden World - Novel',
          about: 'A novel project showcasing creative storytelling',
          features: [],
          role: ['All'],
        },
      },
    },
  },
  vi: {
    translation: {
      nav: {
        myProducts: 'Sản phẩm của tôi',
        all: 'Tất cả',
        games: 'Trò chơi',
        iot: 'IoT',
        ai: 'AI',
        websites: 'Websites',
        desktop: 'Ứng dụng Desktop',
        mobile: 'Ứng dụng Mobile',
        others: 'Khác',
      },
      hero: {
        soundOn: 'Bật âm thanh',
        soundOff: 'Tắt âm thanh',
        myGithub: 'GitHub của tôi',
        myEmail: 'Email của tôi',
      },
      modal: {
        description: 'Mô tả chi tiết',
        about: 'Ứng dụng làm gì',
        features: 'Tính năng xây dựng',
        technologies: 'Công nghệ sử dụng',
        role: 'Vai trò trong dự án',
        finished: 'Hoàn thành',
      },
      pagination: {
        previous: 'Trước',
        next: 'Tiếp',
      },
      noData: 'Không tìm thấy dự án',
      projects: {
        'AI-phat-hien-ung-thu': {
          title: 'Website Phát hiện ung thư phổi ở trẻ (86%)',
          about: 'Việc phát hiện một công cụ giúp hỗ trợ bác sĩ hoặc thực tập bác sĩ để chẩn đoán bệnh là điều rất tốt, giúp xác định nhanh khối ung thư và vị trí tổn thương',
          features: [
            'Phân biệt phổi bình thường và viêm phổi',
            'Viêm phổi do virus hay vi khuẩn',
            'Huấn luyện mô hình Resnet50,DenseNet121,EfficientNetB0',
            'Dùng GradCam++ để phát hiện tổn thương phổi',
          ],
          role: ['Tất cả'],
        },
        'AI-phat-hien-deepfake': {
          title: 'Website Phát hiện DEEPFAKE 80%',
          about: 'Trước xu thế AI toàn cầu, việc ứng dụng GAN để giả mạo dung mạo với mục đích xấu đã tạo nên ra nhiều hệ lụy cho người bị giả cho nên cần một công cụ để mà phát hiện deepfake',
          features: [
            'Dùng mô hình haarcascade để tiền xử lý và nhận dạng khuôn mặt',
            'Huấn luyện mô hình Resnet50,Meso4',
            'Tập dữ liệu: https://www.kaggle.com/datasets/manjilkarki/deepfake-and-real-images/data',
          ],
          role: ['Người phát triển', 'Người đóng góp ý tưởng'],
        },
        'Game-Do-An-Tri-Tue-Nhan-Tao': {
          title: 'Game Trí Tuệ Sắp Xếp',
          about: 'Sử dụng thuật toán A* để mà giải game 9 ô',
          features: [
            'Phân mảnh hình ảnh thành 9 vùng',
            'Tráo vị trí',
            'Tìm đường đi ngắn nhất',
          ],
          role: ['Tất cả'],
        },
        'Game-Tim-Hieu-Co-Ban': {
          title: 'Làm quen với game',
          about: 'Chủ yếu cải thiện tư duy lập trình, cách thức để mà một con game hoạt động dựa trên thư viện SDL và ngôn ngữ C++',
          features: [],
          role: ['Người phát triển', 'Người tìm tòi'],
        },
        'IOT-o-cam-thong-minh': {
          title: 'IOT ổ cắm thông minh',
          about: 'Một giải pháp IoT cho ổ cắm thông minh với khả năng điều khiển và giám sát từ xa',
          features: [
            'Điều khiển nguồn điện từ xa',
            'Giám sát theo thời gian thực',
            'Theo dõi tiêu thụ năng lượng',
          ],
          role: ['Hardware & Backend'],
        },
        'SW-ong-to-ba-nguyet': {
          title: 'Ứng dụng Hẹn Hò - Ông Tơ Bà Nguyệt',
          about: 'Một ứng dụng hẹn hò toàn diện kết nối mọi người thông qua các tính năng hiện đại',
          features: [
            'Quản lý hồ sơ người dùng',
            'Thuật toán ghép đôi',
            'Nhắn tin theo thời gian thực',
            'Ghép đôi dựa trên vị trí',
          ],
          role: ['Tất cả'],
        },
        'DH-Ha-Thu-Dong-Xuan': {
          title: 'Đồ án ĐHMT',
          about: 'Đồ án môn học đồ họa máy tính',
          features: [
            'Tính năng chuyển cảnh',
            'Tính năng bắn pháo hoa',
            'Thiết kế các cảnh Xuân Hạ Thu Đông',
          ],
          role: ['Trưởng nhóm', 'Đảm nhiệm chuyển cảnh và cảnh xuân tích hợp'],
        },
        'SW-MotoA1-WinForm': {
          title: 'Luyện thi Mô Tô A1',
          about: 'Chứa 200 câu hỏi thi bằng lái mô tô A1, giúp tạo ra một công cụ để ôn luyện và mô phỏng việc thi bằng lái A1',
          features: [],
          role: ['Tất cả'],
        },
        'SW-QuanLySinhVien-WinForm': {
          title: 'Quản lý Sinh Viên',
          about: 'Tập tành tạo một sản phẩm cửa sổ đầu tiên dựa vào Winform',
          features: [],
          role: ['Tất cả'],
        },
        'SW-Quan-Ly-Sinh-Vien-Win': {
          title: 'QLSV / SQL Server',
          about: 'Đồ án quản lý sinh viên bằng Winform',
          features: [
            'Thống kê cơ bản',
            'Tính năng đăng nhập & đăng ký',
            'Thao tác với sinh viên',
            'Thao tác với giáo viên',
            'Xem điểm',
          ],
          role: ['Tất cả'],
        },
        'SW-Trang-Admin-Mt5': {
          title: 'Trang Admin Âm nhạc Mt5',
          about: 'Website Admin sử dụng HTML,CSS,JS thuần, dùng Jquery để thao tác',
          features: [],
          role: ['Tất cả'],
        },
        'SW-BackendBasic-Mt5': {
          title: 'Backend Âm nhạc Mt5',
          about: 'Backend Website âm nhạc mt5, sử dụng restfulAP và mô hình MVC để triển khai dự án',
          features: [
            'Tính năng nghe nhạc & tìm kiếm bài hát',
            'Tính năng hiện lyrics theo nhạc',
            'Tính năng đăng nhập & đăng ký',
            'Tính năng theo dõi nghệ sĩ',
            'Tính năng quên mật khẩu xác thực bằng OTP',
            'Quản lý các thực thể cấu hành website',
          ],
          role: ['Tất cả'],
        },
        'SW-Trang-User-Mt5': {
          title: 'Trang Âm nhạc Mt5',
          about: 'Website Âm nhạc Mt5 được phát triển bởi ReactJs',
          features: [],
          role: ['Tất cả'],
        },
        'SW-Do-An-WebsiteTinh-ReactJs': {
          title: 'Website Game Store',
          about: 'Website Game Store là một thiết kế dành cho các website bán game đại lý, với giao diện bắt mắt và đẹp tạo ra một cảm giác gaming khó tả',
          features: [],
          role: ['Tất cả'],
        },
        'SW-MvtFilm': {
          title: 'MvtFilm',
          about: 'MvtFilm là một ứng dụng website xem phim chủ yếu cho hoạt hình, anime. Tạo ra một website đơn giản với giao diện ưu nhìn và đơn giản cho người dùng, ngoài ra còn tạo một trang web quản lý cho quản trị viên',
          features: [
            'Tính năng xem phim',
            'Tính năng gợi ý phim dựa theo phim họ gần đây xem',
            'Tính năng tải phim & lưu trữ phim',
            'Tính năng chỉnh sửa thông tin và bảo mật người dùng',
            'Quản lý các thực thể cấu thành website',
            'Tính năng đánh giá phim',
            'Tính năng đăng nhập & đăng ký',
            'Tích hợp đăng nhập google',
            'Tính năng bảng xếp hạng phim theo từng loại',
            'Tính năng tìm kiếm phim',
          ],
          role: ['Tất cả'],
        },
        'Tiểu thuyết: Thế giới ẩn (Hidden World)': {
          title: 'Tiểu thuyết: Thế giới ẩn (Hidden World)',
          about: 'Một dự án tiểu thuyết thể hiện kỹ năng kể chuyện sáng tạo',
          features: [],
          role: ['Tất cả'],
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
