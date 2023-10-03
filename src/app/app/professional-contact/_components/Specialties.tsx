import { Specialty } from "@/types/Specialty";
import { useState } from "react";
import PsychologistIcon from "../../../../../public/psychologist.svg";
import PedagogueIcon from "../../../../../public/pedagogue.svg";
import SpeechTherapistIcon from "../../../../../public/speech_therapist.svg";
import PsychopedagogueIcon from "../../../../../public/psychopedagogue.svg";
import PsychiatristIcon from "../../../../../public/psychiatrist.svg";
import PediatricianIcon from "../../../../../public/pediatrician.svg";
import PsychoanalystIcon from "../../../../../public/psychoanalyst.svg";
import OtolaryngologistIcon from "../../../../../public/otolaryngologist.svg";
import TeacherIcon from "../../../../../public/teacher.svg";
import styles from "./Specialties.module.css";

interface SpecialtiesProps {
  onChange: (specialty: Specialty[]) => void;
}

const Specialties = (props: SpecialtiesProps) => {
  const [specialties, setSpecialties] = useState(new Set<Specialty>());
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setSpecialties((specialties) => {
      if (target.checked) {
        specialties.add(target.value as Specialty);
      } else {
        specialties.delete(target.value as Specialty);
      }

      return new Set(specialties);
    });

    props.onChange(Array.from(specialties));
  };

  return (
    <ul className={styles["specialty-list"]}>
      <li>
        <input
          type="checkbox"
          value="psychologist"
          id="psychologist"
          className={styles.input}
          checked={specialties.has("psychologist")}
          onChange={handleChange}
        />
        <label htmlFor="psychologist" className={styles.item}>
          <PsychologistIcon className={styles.icon} />
          <span className={styles.label}>Psicólogo</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="pedagogue"
          id="pedagogue"
          className={styles.input}
          checked={specialties.has("pedagogue")}
          onChange={handleChange}
        />
        <label htmlFor="pedagogue" className={styles.item}>
          <PedagogueIcon className={styles.icon} />
          <span className={styles.label}>Pedagogo</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="speech_therapist"
          id="speech_therapist"
          className={styles.input}
          checked={specialties.has("speech_therapist")}
          onChange={handleChange}
        />
        <label htmlFor="speech_therapist" className={styles.item}>
          <SpeechTherapistIcon className={styles.icon} />
          <span className={styles.label}>Fonoaudiólogo</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="psychopedagogue"
          id="psychopedagogue"
          className={styles.input}
          checked={specialties.has("psychopedagogue")}
          onChange={handleChange}
        />
        <label htmlFor="psychopedagogue" className={styles.item}>
          <PsychopedagogueIcon className={styles.icon} />
          <span className={styles.label}>Psicopedagogo</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="psychiatrist"
          id="psychiatrist"
          className={styles.input}
          checked={specialties.has("psychiatrist")}
          onChange={handleChange}
        />
        <label htmlFor="psychiatrist" className={styles.item}>
          <PsychiatristIcon className={styles.icon} />
          <span className={styles.label}>Psiquiatra</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="pediatrician"
          id="pediatrician"
          className={styles.input}
          checked={specialties.has("pediatrician")}
          onChange={handleChange}
        />
        <label htmlFor="pediatrician" className={styles.item}>
          <PediatricianIcon className={styles.icon} />
          <span className={styles.label}>Pediatra</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="psychoanalyst"
          id="psychoanalyst"
          className={styles.input}
          checked={specialties.has("psychoanalyst")}
          onChange={handleChange}
        />
        <label htmlFor="psychoanalyst" className={styles.item}>
          <PsychoanalystIcon className={styles.icon} />
          <span className={styles.label}>Psicanalista</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="otolaryngologist"
          id="otolaryngologist"
          className={styles.input}
          checked={specialties.has("otolaryngologist")}
          onChange={handleChange}
        />
        <label htmlFor="otolaryngologist" className={styles.item}>
          <OtolaryngologistIcon className={styles.icon} />
          <span className={styles.label}>Otorrino</span>
        </label>
      </li>
      <li>
        <input
          type="checkbox"
          value="teacher"
          id="teacher"
          className={styles.input}
          checked={specialties.has("teacher")}
          onChange={handleChange}
        />
        <label htmlFor="teacher" className={styles.item}>
          <TeacherIcon className={styles.icon} />
          <span className={styles.label}>Professor</span>
        </label>
      </li>
    </ul>
  );
};

export default Specialties;
