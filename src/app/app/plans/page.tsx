import { Metadata } from "next";
import Header from "@/components/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Planos",
};

const AppPlans = () => {
  return (
    <>
      <Header return theme="dark" />
      <main className={styles.main}>
        <div className={styles["title-container"]}>
          <span className={styles.label}>Neumann Pro</span>
          <h1 className={styles.title}>Nossos planos e preços</h1>
        </div>
        <ul className={styles["plan-list"]}>
          <li>
            <p className={styles.name}>Plano Básico</p>
            <p className={styles.price}>Gratuito</p>
            <ul className={styles["benefit-list"]}>
              <li>Trilha personalizada</li>
              <li>Diário dos pais</li>
              <li>Recomendação de conteúdo</li>
              <li>Contato com profissionais da área</li>
              <li>Calendário de metas</li>
            </ul>
          </li>
          <li>
            <p className={styles.name}>Plano Standard</p>
            <p className={styles.price}>
              R$ 19,90 <small>/ mensal</small>
            </p>
            <ul className={styles["benefit-list"]}>
              <li>Todas as funcionalidades do plano básico</li>
              <li>Acesso a comunidade de pais</li>
              <li>Desconto em consultas</li>
            </ul>
          </li>
          <li>
            <p className={styles.name}>Plano Premium</p>
            <p className={styles.price}>
              R$ 49,90 <small>/ mensal</small>
            </p>
            <ul className={styles["benefit-list"]}>
              <li>Todas as funcionalidades do plano básico e standard</li>
              <li>
                Benefício de uma consulta mensal gratuita de até R$ 100,00
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </>
  );
};

export default AppPlans;
