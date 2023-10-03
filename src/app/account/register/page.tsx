import { Metadata } from "next";
import Neumann from "@/components/Neumann";
import RegisterForm from "./_components/RegisterForm";
import styles from "../layout.module.css";

export const metadata: Metadata = {
  title: "Criar uma conta",
};

const RegisterPage = () => {
  return (
    <div>
      <Neumann withLabel className={styles.logo} />
      <b className={styles.title}>Criar uma conta </b>
      <p className={styles.description}>
        Preencha os dados abaixo para ter acesso a plataforma
      </p>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
