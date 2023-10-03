"use client";
import Button from "@/components/Button";
import displayNotification from "@/utils/displayNotification";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SendButton = () => {
  const router = useRouter();

  const sendSchedule = () => {
    displayNotification({ text: "Consulta agendada", type: "success" });
    router.back();
  };

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <Button fullWidth onClick={sendSchedule}>
      Continuar
    </Button>
  );
};

export default SendButton;
