import { Professional } from "@/types/IProfessional";
import CalendarIcon from "../../../../../public/calendar.svg";
import Image from "next/image";
import normalizeSpecialty from "@/utils/normalizeSpecialty";
import styles from "./ProfessionalList.module.css";
import setCookie from "@/utils/setCookie";
import { useRouter } from "next/navigation";

interface ProfessionalListProps {
  professionals: Professional[];
}

const ProfessionalList = (props: ProfessionalListProps) => {
  const router = useRouter();

  if (!props.professionals.length) {
    return null;
  }

  const scheduleAppointment = (
    professional: Professional,
    hourIndex: number
  ) => {
    const schedule = {
      ...professional,
      chosen_time: professional.available_dates[hourIndex],
    };

    setCookie({ name: "schedule", value: JSON.stringify(schedule), path: "/" });
    router.push("/app/professional-contact/schedule");
  };

  return (
    <div>
      <span className={styles.title}>Ver resultados</span>
      <ul className={styles["professional-list"]}>
        {props.professionals.map((p) => {
          const nextDate = p.available_dates[0]
            ? new Date(p.available_dates[0])
            : undefined;
          const formattedNextDate = Intl.DateTimeFormat("pt-BR", {
            day: "numeric",
            month: "long",
          }).format(nextDate);

          return (
            <li key={p._id}>
              <div className={styles.image}>
                <Image
                  src={p.url_image ?? "/undefined.jpg"}
                  alt={`Foto do ${p.name}`}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <p className={styles.name}>{p.name}</p>
                <p className={styles.specialty}>
                  {normalizeSpecialty(p.specialty)}
                </p>
                {nextDate ? (
                  <div>
                    <p className={styles["next-date"]}>
                      <CalendarIcon className={styles["calendar-icon"]} />{" "}
                      Próxima data: {formattedNextDate}
                    </p>
                    <ul className={styles["hour-list"]}>
                      {p.available_dates.map((date, index) => {
                        const hour = date.slice(11, 16);

                        return (
                          <li key={index}>
                            <time
                              dateTime={date.slice(0, 16).replace("T", " ")}
                              className={styles.time}
                              onClick={() => scheduleAppointment(p, index)}
                            >
                              {hour}
                            </time>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfessionalList;
