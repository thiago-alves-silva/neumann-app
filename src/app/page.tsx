import { Metadata } from "next";
import Button from "@/components/Button";
import Neumann from "@/components/Neumann";
import Link from "next/link";
import styles from "./page.module.css";
import InstallButton from "@/components/InstallButton";

export const metadata: Metadata = {
  title: "Bem-vindo | Neumann",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Neumann withLabel className={styles.logo} />
      <b className={styles.welcome}>Bem-vindo</b>
      <p className={styles.description}>
        Entre com a sua conta ou crie uma conta nova para acessar nosso conteúdo{" "}
      </p>
      <Link href={"/account/login"} className={styles.link}>
        <Button variant="primary" fullWidth>
          Acessar conta
        </Button>
      </Link>
      <Link href={"/account/register"} className={styles.link}>
        <Button variant="secondary" fullWidth>
          Criar uma conta
        </Button>
      </Link>
      <InstallButton />
    </main>
  );
}
