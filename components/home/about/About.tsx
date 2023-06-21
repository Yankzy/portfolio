import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              I&apos;m full stack with specialization in the backend, primarily API development 
              with Django, GraphQL, Celery and docker. 
              I like to get feel of what the users of APIs are getting, so I learned frontend skills too, 
              especially React, Typescript, Next.js, Redux, firebese. Battle-proved tools to get the job done.
            </p>
          </Reveal>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              As a specialist in Python ecosystem, I have a lot of experience with Django, Flask, FastAPI, Celery, etc. 
              Python also allowed me to jump onboard the AI train, I have experience with Tensorflow. 
              So, I also build ChatGPT&nbsp;
              <span>
                <a href="https://www.fiverr.com/s/Lzdodo" target="_blank" rel="noopener noreferrer">
                  chatbots
                </a>
              </span>
              &nbsp;and&nbsp;
              <span>
                <a href="https://www.fiverr.com/s/VdYGDV" target="_blank" rel="noopener noreferrer">
                  fine tuned AI models
                </a>
              </span> (OpenAI & Huggingface). 
                I alread got my first ML specialization certificate from&nbsp;
              <span>
                <a href="https://bit.ly/3BOihIS" target="_blank" rel="noopener noreferrer">
                  Coursera
                </a>
              </span>. More on the way.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m open to discussions to help in any capacity where I can merge my
              love for code with my love for AI. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect.
              🔗
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I write&nbsp;
              <span>
                <a href="https://yankz.medium.com/" target="_blank" rel="noopener noreferrer">
                  programming articles
                </a>
              </span>
              &nbsp;on Medium. Check them out.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
