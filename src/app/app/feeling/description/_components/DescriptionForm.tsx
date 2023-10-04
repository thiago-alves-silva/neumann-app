"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import displayNotification from "@/utils/displayNotification";
import styles from "./DescriptionForm.module.css";

const DescriptionForm = () => {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    displayNotification({ text: "Emoção salva", type: "success" });
    router.push("/app");
  };

  return (
    <>
      <Textarea
        placeholder="Descreva aqui..."
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit}>Enviar</Button>
    </>
  );
};

export default DescriptionForm;
