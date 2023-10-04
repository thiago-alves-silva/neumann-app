"use client";
import { Emotion } from "@/types/Emotion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";
import DateAndTime from "./DateAndTime";
import Emotions from "./Emotions";
import styles from "./FeelingForm.module.css";
import displayNotification from "@/utils/displayNotification";

const FeelingForm = () => {
  const [emotion, setEmotion] = useState<Emotion | null>(null);
  const router = useRouter();

  const handkeSubmit = () => {
    if (emotion) {
      router.push("/app/feeling/description");
    } else {
      displayNotification({ text: "Selecione uma emoção", type: "error" });
    }
  };

  return (
    <>
      <div>
        <DateAndTime />
      </div>
      <div>
        <span className={styles.title}>Emoção do dia</span>
        <Emotions onChange={setEmotion} />
      </div>
      <Button onClick={handkeSubmit}>Avançar</Button>
    </>
  );
};

export default FeelingForm;
