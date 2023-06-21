import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {SiUpwork} from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
import { TbBrandFiverr } from "react-icons/tb";

export const MyLinks = () => {
  return (
    <div className={styles.links}>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://www.upwork.com/freelancers/~014d9cca84ac4bbd86?viewMode=1&s=1110580748673863680" target="_blank" rel="nofollow">
          <SiUpwork size="2.4rem" />
        </Link>
      </motion.span>
      
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://www.fiverr.com/kuyatehyankz" target="_blank" rel="nofollow">
          <TbBrandFiverr size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/yankuba" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://www.github.com/Yankzy/" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://www.twitter.com/qubzen" target="_blank" rel="nofollow">
          <AiFillTwitterCircle size="2.4rem" />
        </Link>
      </motion.span>

    </div>
  );
};
