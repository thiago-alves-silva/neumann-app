import { Metadata } from "next";
import Neumann from "@/components/Neumann";
import LoginForm from "./_components/LoginForm";
import styles from "../layout.module.css";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <div>
      <Neumann withLabel className={styles.logo} />
      <b className={styles.title}>Acesse sua conta</b>
      <p className={styles.description}>
        Insira suas credenciais abaixo para acessar a plataforma
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
