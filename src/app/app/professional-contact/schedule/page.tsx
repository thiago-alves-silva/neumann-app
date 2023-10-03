import { cookies } from "next/headers";
import { Metadata } from "next";
import { Professional } from "@/types/IProfessional";
import Header from "@/components/Header";
import Image from "next/image";
import AppointmentOptions from "./_components/AppointmentOptions";
import normalizeSpecialty from "@/utils/normalizeSpecialty";
import styles from "./page.module.css";
import SendButton from "./_components/SendButton";

export const metadata: Metadata = {
  title: "Agendamento de consulta",
};

const AppSchedule = () => {
  const cookie = cookies().get("schedule")?.value;
  const schedule = cookie
    ? (JSON.parse(cookie) as Professional & { chosen_time: string })
    : null;

  if (!schedule) {
    return "Agendamento não encontrado";
  }

  const scheduleDate = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(Date.parse(schedule.chosen_time));

  return (
    <>
      <Header return theme="dark" />
      <main className={styles.main}>
        <div className={styles.image}>
          <Image
            src={schedule.url_image ?? "/undefined.jpg"}
            alt={`Foto do ${schedule.name}`}
            width={96}
            height={96}
          />
        </div>
        <p className={styles.name}>{schedule.name}</p>
        <p className={styles.specialty}>
          {normalizeSpecialty(schedule.specialty)}
        </p>
        <time
          dateTime={schedule.chosen_time.slice(0, 16).replace("T", " ")}
          className={styles.time}
        >
          {scheduleDate}
        </time>
        <AppointmentOptions />
        <SendButton />
      </main>
    </>
  );
};

export default AppSchedule;
