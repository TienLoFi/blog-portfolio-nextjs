import { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "Pascal Group",
    companyLogo: "/images/companies/pascalgroup-logo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417t",
        title: "Junior Full-Stack Developer",
        year: "03.2025 - 05.2025",
        employmentType: "experiences.employmentType.fullTime",
        icon: "code",
        description:
          "experiences.descriptions.20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417t",
        skills: ["Flutter", "PHP Laravel", "AWS S3", "MySQL"],
        expanded: true,
      },
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Junior Full-Stack Developer",
        year: "01.2025 - 05.2025",
        employmentType: "experiences.employmentType.fullTime",
        icon: "code",
        description:
          "experiences.descriptions.20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        skills: [
          "PHP Laravel",
          "MySQL",
          "RESTful API",
          "Blade Templates",
          "Laravel Auth",
          "Middleware",
          "Figma",
        ],
        expanded: true,
      },

      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "Fresher Full-Stack Developer",
        year: "03.2024 - 01.2025",
        employmentType: "experiences.employmentType.fullTime",
        icon: "code",
        description:
          "experiences.descriptions.cedd7adb-4118-4085-9983-ae00530b49e2",
        skills: [
          "ReactJS",
          "Context API",
          "PHP Laravel",
          "Guzzle",
          "AWS S3",
          "MySQL",
        ],
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e3",
        title: "Internship Full-Stack Developer",
        year: "01.2024 - 03.2024",
        employmentType: "experiences.employmentType.fullTime",
        icon: "code",
        description:
          "experiences.descriptions.cedd7adb-4118-4085-9983-ae00530b49e3",
        skills: ["Flutter", "PHP Laravel", "AWS S3", "MySQL"],
      },
    ],
    current: true,
  },
];
