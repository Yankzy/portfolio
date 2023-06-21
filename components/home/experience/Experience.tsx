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
    title: "Creative Media",
    link: "https://creativemediani.com/",
    position: "Backend Engineer",
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
    position: "Junior Back-end Developer",
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
