export type LocalizedText = { vi: string; en: string };

export const SITE_NAV = [
  { href: "/", label: { vi: "Trang chủ", en: "Home" } },
  { href: "/about", label: { vi: "Về mình", en: "About" } },
  { href: "/portfolio", label: { vi: "Portfolio", en: "Portfolio" } },
  { href: "/blog", label: { vi: "Kho kiến thức", en: "Knowledge" } },
] as const;

export const CAREER_COMPANIES = [
  {
    name: "Pascal Group",
    period: "01.2024 — 05.2025",
    roles: [
      {
        title: "Junior Full-Stack Developer",
        period: "03.2025 — 05.2025",
        summary: "Hoàn thiện ZUDO Desktop App cùng team Hitech.",
        skills: ["Flutter", "Laravel", "MySQL", "RESTful API", "AWS S3"],
      },
      {
        title: "Junior Full-Stack Developer",
        period: "01.2025 — 05.2025",
        summary: "Phát triển module Công cụ Tiếp thị Liên kết cho CRM Fimi.",
        skills: ["Laravel", "MySQL", "Blade", "Figma"],
      },
      {
        title: "Fresher Full-Stack Developer",
        period: "03.2024 — 01.2025",
        summary: "Phát triển ứng dụng đăng ký thẻ tín dụng cards.fimi.tech.",
        skills: ["ReactJS", "Context API", "Laravel", "Guzzle", "AWS S3"],
      },
      {
        title: "Internship Full-Stack Developer",
        period: "01.2024 — 03.2024",
        summary: "Tham gia phát triển ZUDO App trong nhóm ba thành viên.",
        skills: ["Flutter", "Laravel", "AWS S3", "MySQL"],
      },
    ],
  },
] as const;

export const PROJECT_CASE_STUDIES = [
  {
    slug: "cards-fimi-tech",
    title: "cards.fimi.tech",
    period: "03.2024 — 01.2025",
    role: "Fresher Full-Stack Developer",
    context: "Nhóm 2 thành viên",
    summary:
      "Ứng dụng web di động hỗ trợ khách hàng đăng ký thẻ tín dụng VPBank trực tuyến, từ nhập thông tin đến xử lý tài liệu eKYC.",
    responsibilities: [
      "Triển khai frontend ReactJS và backend Laravel.",
      "Tích hợp Guzzle cho dịch vụ bên ngoài và AWS S3 cho tài liệu eKYC.",
      "Sửa lỗi, tối ưu UI và hiệu suất trên thiết bị di động.",
    ],
    skills: ["ReactJS", "Context API", "Laravel", "Guzzle", "AWS S3", "MySQL"],
    href: "https://cards.fimi.tech",
  },
  {
    slug: "backend-fimi-tech",
    title: "backend.fimi.tech",
    period: "01.2025 — 05.2025",
    role: "Junior Full-Stack Developer",
    context: "CRM nội bộ Fimi",
    summary:
      "Module Công cụ Tiếp thị Liên kết quản lý chiến dịch, chương trình, sản phẩm, nhà phát hành và hiệu suất.",
    responsibilities: [
      "Xây tính năng quản lý chiến dịch, ngân sách và chỉ số hiệu suất.",
      "Phát triển quy trình nhà phát hành, vai trò và hoa hồng.",
      "Tích hợp báo cáo lượt nhấp, chuyển đổi và doanh thu.",
    ],
    skills: [
      "Laravel",
      "MySQL",
      "RESTful API",
      "Blade",
      "Auth",
      "Middleware",
      "Figma",
    ],
    href: "https://backend.fimi.tech",
  },
  {
    slug: "zudo-app",
    title: "zudo.vn",
    period: "01.2024 — 05.2025",
    role: "Intern → Junior Full-Stack",
    context: "Nhóm 3 người + Hitech",
    summary:
      "Ứng dụng desktop kết nối nhiều nền tảng thương mại điện tử trên một giao diện thống nhất.",
    responsibilities: [
      "Phát triển giao diện Flutter và backend Laravel.",
      "Viết API cho đơn hàng, tồn kho và tài khoản người dùng.",
      "Tối ưu hiệu năng, kiểm thử nghiệp vụ và tích hợp AWS S3.",
    ],
    skills: ["Flutter", "Dart", "Laravel", "MySQL", "RESTful API", "AWS S3"],
    href: "https://zudo.vn",
  },
] as const;

export const TECH_GROUPS = [
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Ant Design",
    ],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Node.js", "MySQL", "MongoDB", "RESTful API"],
  },
  {
    title: "AI & Tools",
    skills: [
      "ChatGPT",
      "Content Workflow",
      "Git",
      "Docker",
      "AWS S3",
      "Figma",
      "Photoshop",
    ],
  },
] as const;

export function getLocalizedText(text: LocalizedText, locale: "vi" | "en") {
  return text[locale];
}
