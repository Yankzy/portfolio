import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Dojo Payroll",
    imgSrc: "project-imgs/hero.jpg",
    code: "https://github.com/Yankzy/payrollComposer",
    projectLink: "https://dojopayroll.com",
    tech: ["Python", "MUI", "Django", "GrahpQL", "Postgres", "React", "Apollo Client", 
      "Firebase", "AWS S3", "Celery"
    ],
    description:
      "Intuitive payroll software.",
    modalContent: (
      <>
        <p>
          Dojo Payroll is an intuitive payroll software for businesses of all sizes in the U.S.
        </p>
        <p>
          In its current configuration, Dojo has Cloud time tracking, 
          makes paystubs on-demand and employee dashboard.
        </p>
        <p>
          Dojo is a monolithic architecture, with a Django backend and React frontend. 
          It uses GraphQL to query the backend.
        </p>
        <p>
          This is my first fullstack solo project. This is the passion project that got me to learn React, 
          the first draft was built with Django templates and I would use jQuery to make the app interactive.
          Thought to myself, is there a better way to do this? Took some time off to learn React and here we are.
        </p>
        <p>
          This was a fun project to work on, I learnt a lot about React, the nuaces of datetime in Python,
          python design patterns, and took a dive into deep end of Django and GraphQL. 
           Three of my Medium articles are based on the second iteration of this project.
        </p>
        <p>
          1. 
          <span>
            <a href="https://betterprogramming.pub/validate-graphene-django-inputs-like-a-pro-e362cfc74372/" target="_blank" rel="noopener noreferrer"> 
            &nbsp;Graphene-Django Input Validation
          </a>
          </span>
          <br/>
          2.
          <span>
            <a href="https://towardsdev.com/containerize-react-django-postgresql-served-on-nginx-7ebde4499476" target="_blank" rel="noopener noreferrer"> 
            &nbsp;Containerize React, Django, PostgreSQL & Served on Nginx
          </a>
          </span>
          <br/>
          3.
          <span>
            <a href="https://medium.com/towardsdev/upload-files-directly-to-s3-in-react-using-pre-signed-url-from-python-61500713ea4" target="_blank" rel="noopener noreferrer"> 
            &nbsp;Upload Files Directly To S3 In React Using Pre-signed Url From Python.
          </a>
          </span>
        </p>
      </>
    ),
  },
  {
    title: "Banjul Mall",
    imgSrc: "project-imgs/2.jpg",
    code: "https://github.com/Yankzy/banjulmall-public",
    projectLink: "https://www.banjulmall.com/",
    tech: ["Typescript","React", "Redux", "Next.js", "Firestore", "Formik", "Stripe", "GraphQL", "Apollo Client", "Tailwind CSS"],
    description:
      "online mall for Gambians.",
    modalContent: (
      <>
        <p>
          Banjul Mall is an online mall to be launched in The Gambia.
        </p>
        <p>
          Had this domain for a while and decided to build an Amazon clone to horn my next.js server 
          side components skills.
          &nbsp; It&apos;s a lot of fun  building APIs with GraphQL and Python but Next.js is attempting to change 
          the game with server side components. So, I wanted to build something complex to see its full potential 
          and Amazon is the perfect candidate.
        </p>
        <p>
          Look at the tech stack, these are primarily for frontend development, yet all the 
          Stripe services and the GrahpQL schemas run only on the server. Truely impressive! 
        </p>
      </>
    ),
  },
  {
    title: "Evolov Ecommerce",
    imgSrc: "project-imgs/evolov.png",
    code: "https://github.com/Yankzy/evolov",
    projectLink: "https://www.evolov.com/",
    tech: ["Python", "Django", "GraphQL", "Postgres", "Celery", "Stripe", "Twilio"],
    description:
      "An ambitious ecommerce website.",
    modalContent: (
      <>
        <p>
          Evolov is built to be a one stop-shop ecommerce website that will sell diverse articles ranging from 
          Real Estate, cars, a marketplace etc.
        </p>
        <p>
          I worked on this project with a frontend developer and I was responsible for the backend.
          I built the API with Django and GraphQL. This project taught me a lot about GraphQL Relays
          and how to use them to build a scalable API. It&apos;s in big projects like this that you get to
          appreciate the flexibility and composability of Python.
        </p>
        <p>
          This was actually the first time I used django filters package and inspired me to write articles about it on Medium.
          <span>
            <a href="https://towardsdev.com/how-to-make-dynamic-filters-in-graphql-part-1-98d36107d459/" target="_blank" rel="noopener noreferrer"> 
            &nbsp; How To Make Dynamic Filters in GraphQL (Part 1)
          </a>
          </span>,
          <span>
            <a href="https://towardsdev.com/how-to-make-dynamic-filters-in-graphql-part-2-e2d9ff036f24" target="_blank" rel="noopener noreferrer"> 
            &nbsp; How To Make Dynamic Filters in GraphQL (Part 2)
          </a>
          </span>.
        </p>
      </>
    ),
  },
  {
    title: "Customer Support Agent", 
    imgSrc: "project-imgs/gpt4.png",
    code: "https://www.github.com",
    projectLink: "https://www.fignode.com",
    tech: ["ChatGPT API", "Typescript", "Firestore", "Next.js", "Tailwind CSS", "Firebase", "React", "AI"],
    description:
      "This is the chatbot used on this website, chat with it below.",
    modalContent: (
      <>
        <p>
          This is a chatbot that uses the ChatGPT API to generate responses. 
          It is built with Next.js, Firestore and Typescript.
        </p>
        <p>
          Its function is to answer questions about me and my services. 
          It&apos;s fed context from the Firestore database and uses prompt engineering to generate responses.
        </p>
      </>
    ),
  },
];
