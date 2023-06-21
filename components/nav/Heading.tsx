import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() => window.open("https://docs.google.com/document/d/15QCAsREFnc4_EoCUcLrcpLaBfilDDDsj--6ZcG0D7l8/edit?usp=sharing")}>
        Resume
      </OutlineButton>
    </header>
  );
};
