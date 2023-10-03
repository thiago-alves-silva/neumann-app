import { Metadata } from "next";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Configurações e privacidade",
};

const AppSettings = () => {
  return (
    <>
      <Header return theme="dark" />
      <main className={styles.main}>
        <h1 className={styles.title}>Configurações e privacidade</h1>
        <ul className={styles["setting-list"]}>
          <li>
            <Link href={"/app/settings/account"} className={styles.link}>
              Gerenciar minha conta
            </Link>
          </li>
          <li>
            <Link href={"/app/settings/children"} className={styles.link}>
              Perfil de filhos
            </Link>
          </li>
          <li>
            <Link href={"/app/settings/contact"} className={styles.link}>
              Preferências de contato
            </Link>
          </li>
          <li>
            <Link href={"/app/settings/terms"} className={styles.link}>
              Termos e condições
            </Link>
          </li>
          <li>
            <Link href={"/app/settings/feedback"} className={styles.link}>
              Avaliação e feedback
            </Link>
          </li>
          <li>
            <Link href={"/app/settings/about"} className={styles.link}>
              Sobre a Neumann
            </Link>
          </li>
          <li>
            <Link href={"/app/settings/my-points"} className={styles.link}>
              Meus Pontos
            </Link>
          </li>
        </ul>
        <Link href={"/"}>
          <Button fullWidth variant="secondary">
            Sair
          </Button>
        </Link>
      </main>
    </>
  );
};

export default AppSettings;
