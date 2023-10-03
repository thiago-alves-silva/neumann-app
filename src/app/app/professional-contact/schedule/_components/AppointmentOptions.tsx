"use client";
import { useState } from "react";
import styles from "./AppointmentOptions.module.css";

type Options = "health_insurance" | "first_consultation" | "promotional";

const AppointmentOptions = () => {
  const [option, setOption] = useState<Options | null>(null);

  return (
    <div>
      <span className={styles.title}>Selecione uma opção de consulta</span>
      <ul className={styles["option-list"]}>
        <li className={option === "health_insurance" ? styles.active : ""}>
          <span className={styles.label}>Convênio médico</span>
          <p className={styles.description}>Apenas para sistema de reembolso</p>
          <button
            className={styles.button}
            onClick={() => setOption("health_insurance")}
          >
            Selecione
          </button>
        </li>
        <li className={option === "first_consultation" ? styles.active : ""}>
          <span className={styles.label}>Tipo de visita</span>
          <p className={styles.description}>Primeira consulta R$ 150,00</p>
          <button
            className={styles.button}
            onClick={() => setOption("first_consultation")}
          >
            Selecione
          </button>
        </li>
        <li className={option === "promotional" ? styles.active : ""}>
          <span className={styles.label}>Pacote promocional Neumann</span>
          <p className={styles.description}>
            Pacotes promocionais para clientes Neumann
          </p>
          <button
            className={styles.button}
            onClick={() => setOption("promotional")}
          >
            Selecione
          </button>
          <small className={styles.cashback}>10% de cashback em pontos</small>
        </li>
      </ul>
    </div>
  );
};

export default AppointmentOptions;
