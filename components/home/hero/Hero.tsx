import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
// import { DotGrid } from "./DotGrids";
import styles from "./hero.module.scss";

export const Hero = () => {
  const startDate = new Date(2019, 5, 1); // Replace with your start date
  const currentDate = new Date();
  const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear();
  return (
    <section id="top" className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Yankz<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Full Stack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            TL;DR: I&apos;ve spent the last {yearsOfExperience} years building and scaling software for
            some pretty cool companies. I also do contract work on&nbsp;
            <span>
              <a href="https://www.upwork.com/freelancers/~014d9cca84ac4bbd86?viewMode=1&s=1110580748673863680" target="_blank" rel="noopener noreferrer">
                Upwork
              </a>
            </span>&nbsp;and&nbsp;
            <span>
              <a href="https://www.fiverr.com/kuyatehyankz" target="_blank" rel="noopener noreferrer">
                Fiverr
              </a>
            </span>.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
