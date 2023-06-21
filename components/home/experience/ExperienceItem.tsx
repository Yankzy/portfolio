import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
  link?: string;
}

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
  link,
}: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          </span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        {/* <p className={styles.description}>{description}</p> */}
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
