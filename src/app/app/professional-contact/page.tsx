import { Metadata } from "next";
import ProfessionalContactIcon from "../../../../public/professional-contact.svg";
import Header from "@/components/Header";
import SearchForProfessionals from "./_components/SearchForProfessionals";
import getProfessionalList from "@/utils/getProfessionalList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contato professional",
};

const AppProfessionalContact = async () => {
  const professionals = await getProfessionalList();

  return (
    <>
      <Header return theme="light" />
      <main className={styles.main}>
        <div className={styles["title-container"]}>
          <ProfessionalContactIcon className={styles.icon} />
          <span className={styles.title}>Contato profissional</span>
        </div>
        <div className={styles.wrapper}>
          <SearchForProfessionals professionals={professionals} />
        </div>
      </main>
    </>
  );
};

export default AppProfessionalContact;
