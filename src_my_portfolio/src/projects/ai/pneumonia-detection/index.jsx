// AI Pneumonia Detection Project
export default {
  url: 'AI-phat-hien-ung-thu',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/219px-Python-logo-notext.svg.png',
  title: 'Website Phát hiện ung thư phổi ở trẻ (86%)',
  language: 'Python - Tensorflow',
  image: require('../../../data/pneum.png'),
  videoURL:
    'https://www.dropbox.com/scl/fi/wg27dgrgh8o4bpdismwyu/2025-12-19-10-24-41.mp4?rlkey=e1x8q4ec72xur5l55sljqkxna&st=p31kgl4p&dl=0&raw=1',
  linkGithub: 'github.com/mvtvn78/pneumonia_classification',
  finishedDay: 'Oct 31, 2025',
  about:
    'Việc phát hiện một công cụ giúp hỗ trợ bác sĩ hoặc thực tập bác sĩ để chẩn đoán bệnh là điều rất tốt, giúp xác định nhanh khối ung thư và vị trí tổn thương',
  features: [
    'Phân biệt phổi bình thường và viêm phổi',
    'Viêm phổi do virus hay vi khuẩn',
    'Huấn luyện mô hình Resnet50,DenseNet121,EfficientNetB0',
    'Dùng GradCam++ để phát hiện tổn thương phổi',
  ],
  tech: ['Tensorflow', 'GradCam++', 'Flask', 'ReactJs', 'TypeScript', 'ReactBits', 'DenseNet121'],
  role: ['Tất cả'],
};
