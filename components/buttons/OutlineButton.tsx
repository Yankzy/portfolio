import { MouseEventHandler, ComponentPropsWithRef } from "react";
import styles from "./outlinebutton.module.scss";

type ButtonProps = ComponentPropsWithRef<"button">;

interface Props extends ButtonProps {
  children: string | JSX.Element;
}

export const OutlineButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.outlineButton} {...props}>
      {children}
    </button>
  );
};
