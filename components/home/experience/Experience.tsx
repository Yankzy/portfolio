import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Blue Square",
    link: "https://creativemediani.com/",
    position: "Full Stack Developer (Contract Work)",
    time: "December 2022 - Present",
    location: "Remote",
    description: `
    <ul>\n
      <li>Integrate openIMIS backend with Gambia Civil Registration API and frontend pages for insurance management.</li>\n 
    </ul>
    `,
    tech: [
      "Python",
      "Django",
      "GraphQL",
      "Celery",
      "PostgresQL",
      "React",
      "Redux",
      "Git",
      "GitHub",
      "Material UI",
      "API integration",
    ],
  },
  {
    title: "Evolov",
    link: "https://creativemediani.com/",
    position: "Full Stack Developer (Contract Work)",
    time: "As needed",
    location: "Remote",
    description: `
    <ul>\n
      <li>Made their backend with Django and GraphQL and frontend integration with Apollo client.</li>\n 
    </ul>
    `,
    tech: [
      "Python",
      "Django",
      "GraphQL",
      "Celery",
      "PostgresQL",
      "React",
      "API integration",
      "Apollo client",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Creative Media",
    link: "https://creativemediani.com/",
    position: "Backend Developer",
    time: "April 2021 - Dec. 2022",
    location: "Remote",
    description: `
    <ul>\n
      <li>Analyzed and recognized the inefficiencies of the legacy REST backend, leading to the proposal to migrate to GraphQL for an optimized data fetching solution.</li>\n 
      <li>Leveraged Graphene-Django to build a robust GraphQL API, streamlining the data retrieval process for the frontend and increasing the overall system performance.</li>\n 
      <li>Wrote the frontend schema in Apollo client and collaboratively worked with the two frontend developers to ensure a seamless integration of the newly implemented GraphQL API, resulting in better client-server communication and data handling.</li>\n
    </ul>
    `,
    tech: [
      "Python",
      "Django",
      "GraphQL",
      "Celery",
      "PostgresQL",
      "Apollo client",
      "React",
      "AWS",
      "Git",
      "GitHub",
      "Docker",
      "Typescript",
    ],
  },
  {
    title: "Halal Anywhere",
    link: "https://web.facebook.com/halalanywhere/",
    position: "Junior Backend Developer",
    time: "June 2019 - April 2021",
    location: "Casablanca, Morocco",
    description: `
    <ul>\n
      <li>Collaborated closely with the team lead, David, to identify and rewrite outdated functionalities built using Magento CMS, optimizing the codebase and improving overall system performance.</li>\n 
      <li>Engaged in requirements gathering from restaurant partners to comprehend and analyze their needs for the development and implementation of new features within the application.</li>\n 
      <li>Supported client onboarding and training by addressing their questions and concerns, resulting in an enhanced user experience and increased partner satisfaction.</li>\n
    </ul>
    `,
    tech: [
      "Python",
      "Django",
      "GraphQL",
      "Celery",
      "Git",
      "GitHub",
      "Docker",
      "Firebase",
      "PostgreQL",
      "MangoDB",
    ],
  },
  
];
