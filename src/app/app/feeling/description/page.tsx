import { Metadata } from "next";
import DescriptionForm from "./_components/DescriptionForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Descreva sua resposta",
};

const AppFeelingDescription = () => {
  return (
    <>
      <p className={styles.description}>
        <b>Com base em sua resposta,</b> descreva o que aconteceu hoje:
      </p>
      <DescriptionForm />
    </>
  );
};

export default AppFeelingDescription;
