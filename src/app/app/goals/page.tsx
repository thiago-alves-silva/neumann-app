import { Metadata } from "next";
import GoalsIcon from "../../../../public/goals.svg";
import CommunicationIcon from "../../../../public/communication.svg";
import PartnershipIcon from "../../../../public/partnership.svg";
import SecretsIcon from "../../../../public/secrets.svg";
import SchoolIcon from "../../../../public/school.svg";
import CookieIcon from "../../../../public/cookie.svg";
import MoonIcon from "../../../../public/moon.svg";
import Header from "@/components/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Minhs metas",
};

const AppGoals = () => {
  return (
    <>
      <Header return theme="light" />
      <main className={styles.main}>
        <div className={styles["title-container"]}>
          <GoalsIcon className={styles.icon} />
          <span className={styles.title}>Neumann Pro</span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles["progress-container"]}>
            <span className={styles.label}>Progresso total</span>
            <div className={styles["bar-container"]}>
              <span className={styles.points}>10 pontos</span>
              <span className={styles.percentage}>20%</span>
              <progress value={20} max={100} className={styles.progress}>
                20%
              </progress>
            </div>
          </div>
          <div className={styles["popular-challenges"]}>
            <span className={styles.label}>Desafios mais populares</span>
            <ul className={styles["popular-list"]}>
              <li>
                <CommunicationIcon className={styles.icon} />
                <span className={styles.label}>Comunicação</span>
              </li>
              <li>
                <PartnershipIcon className={styles.icon} />
                <span className={styles.label}>Parceria</span>
              </li>
              <li>
                <SecretsIcon className={styles.icon} />
                <span className={styles.label}>Segredos</span>
              </li>
            </ul>
          </div>
          <div className={styles["suggested-challenges"]}>
            <span className={styles.label}>Desafios sugeridos</span>
            <ul className={styles["suggested-list"]}>
              <li>
                <div className={styles["icon-wrapper"]}>
                  <SchoolIcon className={styles.icon} />
                </div>
                <p className={styles.label}>Lição de casa Juntos</p>
                <span className={styles.reward}>+ 2 pontos</span>
              </li>
              <li>
                <div className={styles["icon-wrapper"]}>
                  <CookieIcon className={styles.icon} />
                </div>
                <p className={styles.label}>Cozinhando juntos</p>
                <span className={styles.reward}>+ 5 pontos</span>
              </li>
              <li>
                <div className={styles["icon-wrapper"]}>
                  <MoonIcon className={styles.icon} />
                </div>
                <p className={styles.label}>História para dormir</p>
                <span className={styles.reward}>+ 3 pontos</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppGoals;
