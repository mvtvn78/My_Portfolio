// Smart Socket IoT Project Data
export default {
  url: 'IOT-o-cam-thong-minh',
  avatar: 'https://education.oracle.com/file/general/p-80-java.png',
  title: 'IOT ổ cắm thông minh',
  language: 'Java - SpringBoot',
  image: require('../../../data/final_iot.jpg'),
  videoURL:
    'https://www.dropbox.com/scl/fi/0ik0u7hng2r4mbue2uawv/cuoinam_iot.mp4?rlkey=waior6rzgip4szwm6srs8ve8w&st=6vhxldr7&dl=0&raw=1',
  linkGithub: 'github.com/mvtvn78/final_iot',
  finishedDay: 'Jan 6, 2026',
  about:
    'Đây là một dự án mã nguồn mở nhằm phát triển một ổ cắm thông minh có thể điều khiển từ xa thông qua ứng dụng di động. Ổ cắm này cho phép người dùng bật/tắt thiết bị điện tử, theo dõi mức tiêu thụ năng lượng và lập lịch hoạt động.',
  features: [
    'Điều khiển ổ cắm qua ứng dụng bật/ tắt',
    'Hiển thị công suất thời gian thực về cho ứng dụng',
    'Dùng MQTT thao tác với thiết bị ở tầng device',
    'Dùng Websocket để gửi thông tin cho ứng dụng',
    'Cung cấp Restful API để thao tác với thiết bị ở tầng app',
    'Lưu trữ dữ liệu ở vào cơ sở dữ liệu để dễ dàng truy vết',
  ],
  tech: [
    'Java',
    'Java SpringBoot',
    'PostgreSQL',
    'Websocket',
    'MQTT',
    'ESP-IDF',
    'ESP32C3',
    'Relay',
    'ACS712',
    'Nguồn biến đổi 5V',
    'Ổ cắm nối âm',
  ],
  role: ['Hardware & Backend'],
};
