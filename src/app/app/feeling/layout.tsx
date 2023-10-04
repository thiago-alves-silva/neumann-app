import FeelingIcon from "../../../../public/feeling.svg";
import Header from "@/components/Header";
import styles from "./layout.module.css";

const FeelingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header return theme="light" />
      <main className={styles.main}>
        <div className={styles["title-container"]}>
          <FeelingIcon className={styles.icon} />
          <span className={styles.title}>Sentimento</span>
        </div>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </>
  );
};

export default FeelingLayout;
