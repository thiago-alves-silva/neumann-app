"use client";
import { useEffect, useRef } from "react";
import styles from "./InstallButton.module.css";

let installPrompt: any;

const InstallButton = () => {
  const button = useRef<HTMLButtonElement>(null);

  const displayPrompt = async () => {
    if (!installPrompt) {
      console.log("Prompt não encontrado!");
      return;
    }

    const { outcome } = await installPrompt.prompt();

    if (outcome === "accepted") {
      button.current?.classList.add(styles.hidden);
      installPrompt = null;
    }
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPrompt = event;

      button.current?.classList.remove(styles.hidden);
    });
  }, []);

  return (
    <button
      className={[styles.button, styles.hidden].join(" ")}
      ref={button}
      onClick={displayPrompt}
    >
      Instalar nosso aplicativo
    </button>
  );
};

export default InstallButton;
