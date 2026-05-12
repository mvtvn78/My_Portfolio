# Portfolio Website - Project Addition Guide

Xây lại trang portfolio thành Single Page Application (SPA) với React + TailwindCSS và i18n

## Hướng dẫn thêm project mới

### Cấu trúc dự án
```
src/
├── projects/
│   ├── ai/
│   │   └── pneumonia-detection/
│   │       └── index.jsx
│   ├── games/
│   ├── iot/
│   │   └── smart-socket/
│   │       └── index.jsx
│   ├── mobile/
│   │   └── dating-app/
│   │       └── index.jsx
│   ├── websites/
│   ├── desktop/
│   └── others/
├── data/          # Tất cả hình ảnh, video
├── components/    # React components
├── i18n/          # i18n configuration
└── utils/         # projectLoader.js
```

### Bước 1: Tạo thư mục project
Tạo thư mục mới cho project của bạn theo cấu trúc:
```
src/projects/{category}/{project-name}/
```

Ví dụ:
```
src/projects/ai/my-new-ai-project/
src/projects/iot/smart-device-v2/
src/projects/websites/e-commerce-store/
```

### Bước 2: Tạo index.jsx với dữ liệu project
Tạo file `src/projects/{category}/{project-name}/index.jsx`:

```javascript
// Example: src/projects/ai/my-new-ai-project/index.jsx
export default {
  url: 'AI-project-slug',  // URL slug (duy nhất)
  avatar: 'https://example.com/logo.png',  // Avatar URL hoặc path
  title: 'My Awesome AI Project',
  language: 'Python - PyTorch',  // Công nghệ chính
  image: require('../../../data/my-project-image.jpg'),  // Ảnh đại diện
  videoURL: 'https://example.com/video.mp4',  // Video demo
  linkGithub: 'github.com/username/project',
  finishedDay: 'Dec 15, 2025',  // Ngày hoàn thành
  about: 'Mô tả ngắn gọn về dự án...',
  features: [
    'Tính năng 1',
    'Tính năng 2',
    'Tính năng 3',
  ],
  tech: ['Python', 'PyTorch', 'Flask', 'React'],  // Công nghệ sử dụng
  role: ['Backend', 'Frontend'],  // Vai trò của bạn
};
```

### Bước 3: Cập nhật projectLoader.js
Mở file `src/utils/projectLoader.js` và thêm import cho project mới:

```javascript
// Ví dụ thêm project AI mới
const aiProjects = [
  require('../projects/ai/pneumonia-detection').default,
  require('../projects/ai/my-new-ai-project').default,  // Thêm dòng này
];
```

### Bước 4: Thêm hình ảnh/video vào thư mục data
1. Đặt ảnh đại diện vào `src/data/`
2. Đặt video demo vào `src/data/` hoặc upload lên Dropbox/hosting khác

### Bước 5: Build và test
```bash
npm run build  # Build production
```

## Danh sách các category
- `ai` - Dự án AI/Machine Learning
- `games` - Trò chơi
- `iot` - Dự án IoT
- `websites` - Websites
- `desktop` - Ứng dụng Desktop
- `mobile` - Ứng dụng Mobile
- `others` - Khác

## Các tính năng đã triển khai

✅ **TailwindCSS** - CSS framework nhẹ và hiệu quả
✅ **i18n** - Hỗ trợ tiếng Anh (EN) và tiếng Việt (VI)
✅ **Lazy Loading Images** - Tải hình ảnh khi scroll vào view
✅ **Dynamic Project Loading** - Tự động load projects từ các thư mục
✅ **Phân trang** - Grid với phân trang (6 items/trang)
✅ **Modal tùy chỉnh** - Modal được xây dựng từ TailwindCSS
✅ **NavBar cố định** - Điều hướng danh mục luôn hiển thị

## Yêu cầu về dữ liệu project

| Trường | Loại | Bắt buộc | Mô tả |
|--------|------|---------|-------|
| url | string | ✅ | URL slug duy nhất |
| avatar | string | ✅ | URL hoặc require() path |
| title | string | ✅ | Tên dự án |
| language | string | ✅ | Công nghệ chính |
| image | string/require | ✅ | Ảnh đại diện |
| videoURL | string | ✅ | Link video demo |
| linkGithub | string | ✅ | Link GitHub |
| finishedDay | string | ✅ | Ngày hoàn thành (MM DD, YYYY) |
| about | string | ✅ | Mô tả về dự án |
| features | array | ✅ | Danh sách tính năng |
| tech | array | ✅ | Công nghệ sử dụng |
| role | array | ✅ | Vai trò trong dự án |

## Scripts khả dụng

```bash
npm start       # Chạy dev server (port 3000)
npm run build   # Build production
npm run deploy  # Deploy lên GitHub Pages
```

## Lưu ý quan trọng

1. **Đường dẫn ảnh**: Sử dụng `require('../../../data/filename')` từ file project index.jsx
2. **URL Slug**: Đảm bảo `url` là duy nhất và không có ký tự đặc biệt
3. **Ngày tháng**: Sử dụng định dạng "Mon DD, YYYY" (ví dụ: "Jan 6, 2026")
4. **Video**: Có thể sử dụng URL trực tiếp hoặc upload file .mp4 vào data folder

## Troubleshooting

### Lỗi: "Module not found: Can't resolve '...data/...'"
→ Kiểm tra đường dẫn file trong `require()`. Đường dẫn phải tương đối từ file index.jsx

### Project không hiển thị sau build
→ Kiểm tra xem projectLoader.js có import project mới không

### Ảnh không load
→ Sử dụng LazyImage component (đã được implements cho lazy load)

## Dành cho các category trống
Để thêm project vào category trống (games, websites, desktop, others):

1. Tạo thư mục: `src/projects/{category}/{project-name}/`
2. Tạo file `index.jsx` với dữ liệu
3. Update `projectLoader.js`:
```javascript
const gameProjects = [
  require('../projects/games/my-game-project').default,
];
```

---

**Sản phẩm cuối cùng**: Single Page Application hiện đại, nhẹ nhàng, hỗ trợ đa ngôn ngữ
