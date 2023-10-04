"use client";
import { useState } from "react";
import CalendarIcon from "../../../../../public/calendar.svg";
import ClockIcon from "../../../../../public/clock.svg";
import styles from "./DateAndTime.module.css";

const DateAndTime = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (target.type === "date") {
      const [year, month, day] = target.value.split("-").map(Number);

      setDate((date) => new Date(date.setFullYear(year, month - 1, day)));
    }

    if (target.type === "time") {
      const [hours, minutes] = target.value.split(":").map(Number);

      setDate((date) => new Date(date.setHours(hours, minutes)));
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type="date"
          value={date.toJSON().slice(0, 10)}
          onChange={handleChange}
        />
        <CalendarIcon className={styles.icon} />
        <span className={styles.value}>
          {Intl.DateTimeFormat("pt-BR", {
            day: "numeric",
            month: "long",
          }).format(date)}
        </span>
      </label>
      <label className={styles.label}>
        <input
          type="time"
          value={`${date.getHours()}:${date.getMinutes()}`}
          onChange={handleChange}
        />
        <ClockIcon className={styles.icon} />
        <span className={styles.value}>
          {Intl.DateTimeFormat("pt-BR", { timeStyle: "short" }).format(date)}
        </span>
      </label>
    </div>
  );
};

export default DateAndTime;
