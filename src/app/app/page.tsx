import { Metadata } from "next";
import VirtualAssistentIcon from "../../../public/virtual-assistant.svg";
import FeelingIcon from "../../../public/feeling.svg";
import ProfessionalContactIcon from "../../../public/professional-contact.svg";
import FreeActivitiesIcon from "../../../public/free-activities.svg";
import InformationPortalIcon from "../../../public/information-portal.svg";
import GoalsIcon from "../../../public/goals.svg";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Neumann from "@/components/Neumann";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
};

const AppHome = () => {
  return (
    <>
      <Header theme="dark" return={false} />
      <main className={styles.main}>
        <Neumann withLabel className={styles.logo} />
        <div>
          <span className={styles.title}>Acesse a comunidade</span>
          <ul className={styles["page-list"]}>
            <li>
              <Link href={"/app/virtual-assistant"} className={styles.item}>
                <VirtualAssistentIcon />
                <span className={styles.label}>Assistente virtual</span>
              </Link>
            </li>
            <li>
              <Link href={"/app/feeling"} className={styles.item}>
                <FeelingIcon />
                <span className={styles.label}>Sentimento</span>
              </Link>
            </li>
            <li>
              <Link href={"/app/professional-contact"} className={styles.item}>
                <ProfessionalContactIcon />
                <span className={styles.label}>Contato profissional</span>
              </Link>
            </li>
            <li>
              <Link href={"/app/free-activities"} className={styles.item}>
                <FreeActivitiesIcon />
                <span className={styles.label}>Atividades livres</span>
              </Link>
            </li>
            <li>
              <Link href={"/app/information-portal"} className={styles.item}>
                <InformationPortalIcon />
                <span className={styles.label}>Portal informativo</span>
              </Link>
            </li>
            <li>
              <Link href={"/app/goals"} className={styles.item}>
                <GoalsIcon />
                <span className={styles.label}>Minhas metas</span>
              </Link>
            </li>
          </ul>
          <Link href={"/app/plans"}>
            <Button
              fullWidth
              className={styles["plans-button"]}
              variant="secondary"
            >
              Acesse nossos planos
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default AppHome;
