import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Django</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Celery</span>
            <span className="chip">Docker</span>
            <span className="chip">API Development</span>
            <span className="chip">API Integration</span>
            <span className="chip">System Design</span>
            <span className="chip">Design Patterns</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">Material UI</span>
            <span className="chip">Formik</span>
            <span className="chip">Redux</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Apollo Client</span>
            <span className="chip">Postgres</span>
            <span className="chip">Firebase</span>
            <span className="chip">GitHub</span>
            <span className="chip">Algorithms</span>
            <span className="chip">GitHub</span>
            <span className="chip">AWS</span>
            <span className="chip">Google Cloud</span>
            <span className="chip">Heroku</span>
            <span className="chip">Digital Ocean</span>
            <span className="chip">CI/CD</span>
            <span className="chip">Pulumi</span>
            <span className="chip">ChaGPT</span>
            <span className="chip">OpenAI API</span>
            <span className="chip">HuggingFace Models</span>
            <span className="chip">Machine Learning</span>
            <span className="chip">Deep Learning</span>
            <span className="chip">AI</span>
            <span className="chip">NLP</span>
            <span className="chip">Prompt Engineering</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Figma</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Flask</span>
            <span className="chip">Empathy for users</span>
            <span className="chip">Writing</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
