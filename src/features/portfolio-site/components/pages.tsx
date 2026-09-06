"use client";

import { ChevronDown, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/hooks/use-language";

import {
  CAREER_COMPANIES,
  PROJECT_CASE_STUDIES,
  TECH_GROUPS,
} from "../data/site-content";
import { Chips, SiteShell, TechBackground } from "./site-shell";

const copy = (language: "vi" | "en", vi: string, en: string) =>
  language === "vi" ? vi : en;

export function HomePage() {
  const { language } = useLanguage();
  return (
    <SiteShell>
      <main>
        <section className="np-home-hero np-dark">
          <TechBackground />
          <div className="np-home-copy">
            <span className="np-kicker">AI-Powered Digital Marketer</span>
            <h1>
              {copy(language, "Biến AI", "Turn AI")}
              <span>
                {copy(language, "thành lợi thế thật.", "into real leverage.")}
              </span>
            </h1>
            <p>
              {copy(
                language,
                "Tôi kết hợp marketing, nội dung và nền tảng công nghệ để xây những quy trình AI dùng được trong công việc, không chỉ nằm trên bản demo.",
                "I combine marketing, content and technology to build AI workflows that work beyond demos."
              )}
            </p>
            <div className="np-actions">
              <Link className="np-button primary" href="/portfolio">
                {copy(language, "Xem Portfolio", "View Portfolio")} →
              </Link>
              <Link className="np-button" href="/about">
                {copy(language, "Về mình", "About me")}
              </Link>
            </div>
          </div>
          <div className="np-home-photo">
            <Image
              src="/images/ngoc-tien/home-portrait.png"
              alt="Ngọc Tiến"
              fill
              priority
              sizes="(max-width: 700px) 80vw, 48vw"
            />
          </div>
          <div className="np-ticker">
            AI STRATEGY　✦　CONTENT SYSTEMS　✦　CREATIVE AUTOMATION　✦　IT
            BACKGROUND
          </div>
        </section>
        <section className="np-section np-light np-destinations">
          <div>
            <span className="np-kicker">
              01 / {copy(language, "KHÁM PHÁ", "EXPLORE")}
            </span>
            <h2>
              {copy(
                language,
                "Chọn điều bạn muốn xem.",
                "Choose what to explore."
              )}
            </h2>
          </div>
          <div className="np-card-grid two">
            <Link className="np-card" href="/portfolio">
              <small>01 / PORTFOLIO</small>
              <h3>Portfolio</h3>
              <p>
                {copy(
                  language,
                  "Kinh nghiệm theo công ty, dự án, kỹ năng và hồ sơ nghề nghiệp.",
                  "Experience, projects, skills and professional profile."
                )}
              </p>
              <ExternalLink />
            </Link>
            <Link className="np-card" href="/blog">
              <small>02 / KNOWLEDGE</small>
              <h3>{copy(language, "Kho kiến thức", "Knowledge Hub")}</h3>
              <p>
                {copy(
                  language,
                  "Những kiến thức AI đã học, góp nhặt và chia sẻ lại.",
                  "Collected AI knowledge, experiments and practical notes."
                )}
              </p>
              <ExternalLink />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function AboutPage() {
  const { language } = useLanguage();
  return (
    <SiteShell>
      <main>
        <section className="np-about-hero np-dark">
          <TechBackground />
          <div className="np-about-photo">
            <Image
              src="/images/ngoc-tien/about-pointing-portrait.png"
              alt="Ngọc Tiến đang chỉ tay sang phải"
              fill
              priority
              sizes="(max-width: 700px) 75vw, 48vw"
            />
          </div>
          <div className="np-about-copy">
            <span className="np-kicker">HELLO, I AM</span>
            <h1>
              NGỌC <span>TIẾN</span>
            </h1>
            <h2>AI-Powered Digital Marketer</h2>
            <p>
              {copy(
                language,
                "Tôi từng làm Full-Stack Developer. Hiện tại, tôi mang tư duy hệ thống và nền tảng công nghệ sang Digital Marketing để xây nội dung, quy trình và trải nghiệm AI có thể dùng trong công việc thật.",
                "I used to work as a Full-Stack Developer. Now I bring systems thinking and technology into Digital Marketing and practical AI workflows."
              )}
            </p>
          </div>
        </section>
        <section className="np-section np-light">
          <div className="np-section-head">
            <div>
              <span className="np-kicker">
                {copy(language, "CÂU CHUYỆN", "STORY")}
              </span>
              <h2>
                {copy(
                  language,
                  "Một hướng đi mới, không phải bắt đầu lại.",
                  "A new direction, not a restart."
                )}
              </h2>
            </div>
            <p>
              {copy(
                language,
                "Nền tảng IT giúp tôi hiểu công cụ từ bên trong. Marketing giúp tôi nhìn rõ người dùng, thông điệp và kết quả cần đạt.",
                "IT helps me understand tools from within. Marketing sharpens my view of people, messages and outcomes."
              )}
            </p>
          </div>
          <div className="np-card-grid two">
            <article className="np-card">
              <small>{copy(language, "TRƯỚC ĐÂY", "BEFORE")}</small>
              <h3>Full-Stack Developer</h3>
              <p>React · Next.js · Laravel · MySQL · Flutter</p>
            </article>
            <article className="np-card">
              <small>{copy(language, "HIỆN TẠI", "NOW")}</small>
              <h3>AI-Powered Digital Marketer</h3>
              <p>AI Strategy · Content Systems · Creative Automation</p>
            </article>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function PortfolioPage() {
  const { language } = useLanguage();
  return (
    <SiteShell>
      <main>
        <section className="np-portfolio-hero np-dark">
          <TechBackground />
          <span className="np-kicker">PORTFOLIO / NGỌC TIẾN</span>
          <h1>
            AI MARKETING
            <span>
              {copy(
                language,
                "VỚI NỀN TẢNG KỸ THUẬT.",
                "WITH A TECHNICAL FOUNDATION."
              )}
            </span>
          </h1>
          <p>
            {copy(
              language,
              "Tôi đang chuyển trọng tâm từ Full-Stack Development sang AI-Powered Digital Marketing. Lợi thế của tôi là hiểu cả cách công cụ vận hành lẫn cách biến ý tưởng thành quy trình có thể triển khai.",
              "I am moving from Full-Stack Development toward AI-Powered Digital Marketing, combining technical understanding with practical execution."
            )}
          </p>
          <div className="np-actions">
            <a
              className="np-button primary"
              href="mailto:ngoctien9940@gmail.com"
            >
              <Mail />
              {copy(language, "Liên hệ tuyển dụng", "Contact me")}
            </a>
            <a className="np-button" href="#experience">
              {copy(language, "Xem kinh nghiệm", "View experience")}
            </a>
          </div>
        </section>
        <nav className="np-anchor">
          <a href="#profile">{copy(language, "Hồ sơ", "Profile")}</a>
          <a href="#experience">
            {copy(language, "Kinh nghiệm", "Experience")}
          </a>
          <a href="#projects">{copy(language, "Dự án", "Projects")}</a>
          <a href="#contact">{copy(language, "Liên hệ", "Contact")}</a>
        </nav>
        <section className="np-section np-light" id="profile">
          <div className="np-section-head">
            <div>
              <span className="np-kicker">
                {copy(language, "HỒ SƠ NHANH", "PROFILE")}
              </span>
              <h2>
                {copy(language, "Điểm mạnh mang theo.", "Strengths I bring.")}
              </h2>
            </div>
            <p>
              {copy(
                language,
                "Ứng dụng AI vào nội dung, marketing và những quy trình cần làm thật mỗi ngày.",
                "Applying AI to content, marketing and daily workflows."
              )}
            </p>
          </div>
          <div className="np-stack-grid">
            {TECH_GROUPS.map((group) => (
              <article className="np-card" key={group.title}>
                <small>{group.title}</small>
                <h3>{group.title}</h3>
                <Chips items={group.skills} />
              </article>
            ))}
          </div>
        </section>
        <section className="np-section np-dark" id="experience">
          <div className="np-section-head">
            <div>
              <span className="np-kicker">EXPERIENCE</span>
              <h2>
                {copy(
                  language,
                  "Kinh nghiệm theo công ty.",
                  "Experience by company."
                )}
              </h2>
            </div>
            <p>
              {copy(
                language,
                "Mở từng giai đoạn để xem vai trò và công việc cụ thể.",
                "Open each period to see the role and responsibilities."
              )}
            </p>
          </div>
          {CAREER_COMPANIES.map((company) => (
            <article className="np-company" key={company.name}>
              <header>
                <span className="np-company-mark">PG</span>
                <div>
                  <h3>{company.name}</h3>
                  <p>{company.period} · TP. Hồ Chí Minh</p>
                </div>
                <i />
              </header>
              {company.roles.map((role, index) => (
                <details
                  key={`${role.title}-${role.period}`}
                  open={index === 0}
                >
                  <summary>
                    <span>&lt;/&gt;</span>
                    <div>
                      <b>{role.title}</b>
                      <small>{role.period}</small>
                    </div>
                    <ChevronDown />
                  </summary>
                  <div className="np-role-body">
                    <p>{role.summary}</p>
                    <Chips items={role.skills} />
                  </div>
                </details>
              ))}
            </article>
          ))}
        </section>
        <section className="np-section np-light" id="projects">
          <div className="np-section-head">
            <div>
              <span className="np-kicker">PROJECTS</span>
              <h2>
                {copy(language, "Dự án đã thực hiện.", "Selected projects.")}
              </h2>
            </div>
            <p>
              {copy(
                language,
                "Vai trò, bối cảnh và phần việc trực tiếp trong từng sản phẩm.",
                "Role, context and direct contribution in each product."
              )}
            </p>
          </div>
          <div className="np-projects">
            {PROJECT_CASE_STUDIES.map((project, index) => (
              <article className="np-project" key={project.slug}>
                <div>
                  <small>CASE 0{index + 1}</small>
                  <h3>{project.title}</h3>
                  <dl>
                    <div>
                      <dt>{copy(language, "Vai trò", "Role")}</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>{copy(language, "Thời gian", "Period")}</dt>
                      <dd>{project.period}</dd>
                    </div>
                    <div>
                      <dt>{copy(language, "Bối cảnh", "Context")}</dt>
                      <dd>{project.context}</dd>
                    </div>
                  </dl>
                  <Chips items={project.skills} />
                </div>
                <div>
                  <p className="np-summary">{project.summary}</p>
                  <ul>
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {copy(language, "Xem sản phẩm", "View product")}{" "}
                    <ExternalLink />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="np-contact np-dark" id="contact">
          <span className="np-kicker">OPEN TO WORK</span>
          <h2>
            {copy(
              language,
              "Cần một người hiểu công nghệ và đang đi sâu vào AI Marketing?",
              "Looking for someone technical who is growing into AI Marketing?"
            )}
          </h2>
          <a className="np-button primary" href="mailto:ngoctien9940@gmail.com">
            ngoctien9940@gmail.com →
          </a>
        </section>
      </main>
    </SiteShell>
  );
}

export type KnowledgePost = {
  slug: string;
  title: string;
  description: string;
  date: string;
};
export function KnowledgePage({ posts }: { posts: KnowledgePost[] }) {
  const { language } = useLanguage();
  return (
    <SiteShell>
      <main>
        <section className="np-knowledge-hero np-dark">
          <TechBackground />
          <span className="np-kicker">
            03 / {copy(language, "KHO KIẾN THỨC", "KNOWLEDGE HUB")}
          </span>
          <h1>
            {copy(language, "GÓP NHẶT,", "COLLECT,")}
            <span>{copy(language, "RỒI CHIA SẺ.", "THEN SHARE.")}</span>
          </h1>
          <p>
            {copy(
              language,
              "Đây là nơi tôi lưu lại những kiến thức AI đã học và góp nhặt trong quá trình làm việc. Có điều đến từ một khóa học, có điều chỉ hiểu ra sau khi tự thử nhiều lần.",
              "This is where I collect AI knowledge from courses, work and repeated experiments, then share it in a practical form."
            )}
          </p>
        </section>
        <section className="np-section np-light">
          <div className="np-section-head">
            <div>
              <span className="np-kicker">
                {copy(language, "BÀI VIẾT", "ARTICLES")}
              </span>
              <h2>
                {copy(
                  language,
                  "Kiến thức đã góp nhặt.",
                  "Collected knowledge."
                )}
              </h2>
            </div>
          </div>
          <div className="np-posts">
            {posts.map((post) => (
              <Link
                className="np-card"
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <small>{post.date}</small>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span>{copy(language, "Đọc bài viết", "Read article")} →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
