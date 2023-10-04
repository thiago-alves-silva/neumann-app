import { Emotion } from "@/types/Emotion";
import HappyIcon from "../../../../../public/happy.svg";
import SatisfiedIcon from "../../../../../public/satisfied.svg";
import CalmIcon from "../../../../../public/calm.svg";
import DissatisfiedIcon from "../../../../../public/dissatisfied.svg";
import SadIcon from "../../../../../public/sad.svg";
import StressedIcon from "../../../../../public/stressed.svg";
import FrustratedIcon from "../../../../../public/frustrated.svg";
import GladIcon from "../../../../../public/glad.svg";
import styles from "./Emotions.module.css";

interface EmotionsProps {
  onChange: (emotion: Emotion) => void;
}

const Emotions = (props: EmotionsProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    props.onChange(target.id as Emotion);
  };

  return (
    <ul className={styles["emotion-list"]}>
      <li className={styles.item}>
        <input type="radio" name="emotion" id="happy" onChange={handleChange} />
        <label htmlFor="happy" className={styles.label}>
          <HappyIcon className={styles.icon} />
          <span className={styles.name}>Feliz</span>
        </label>
      </li>
      <li className={styles.item}>
        <input
          type="radio"
          name="emotion"
          id="satisfied"
          onChange={handleChange}
        />
        <label htmlFor="satisfied" className={styles.label}>
          <SatisfiedIcon className={styles.icon} />
          <span className={styles.name}>Satisfeito</span>
        </label>
      </li>
      <li className={styles.item}>
        <input type="radio" name="emotion" id="calm" onChange={handleChange} />
        <label htmlFor="calm" className={styles.label}>
          <CalmIcon className={styles.icon} />
          <span className={styles.name}>Calmo</span>
        </label>
      </li>
      <li className={styles.item}>
        <input
          type="radio"
          name="emotion"
          id="dissatisfied"
          onChange={handleChange}
        />
        <label htmlFor="dissatisfied" className={styles.label}>
          <DissatisfiedIcon className={styles.icon} />
          <span className={styles.name}>Insatisfeito</span>
        </label>
      </li>
      <li className={styles.item}>
        <input type="radio" name="emotion" id="sad" onChange={handleChange} />
        <label htmlFor="sad" className={styles.label}>
          <SadIcon className={styles.icon} />
          <span className={styles.name}>Triste</span>
        </label>
      </li>
      <li className={styles.item}>
        <input
          type="radio"
          name="emotion"
          id="stressed"
          onChange={handleChange}
        />
        <label htmlFor="stressed" className={styles.label}>
          <StressedIcon className={styles.icon} />
          <span className={styles.name}>Estressado</span>
        </label>
      </li>
      <li className={styles.item}>
        <input
          type="radio"
          name="emotion"
          id="frustrated"
          onChange={handleChange}
        />
        <label htmlFor="frustrated" className={styles.label}>
          <FrustratedIcon className={styles.icon} />
          <span className={styles.name}>Frustrado</span>
        </label>
      </li>
      <li className={styles.item}>
        <input type="radio" name="emotion" id="glad" onChange={handleChange} />
        <label htmlFor="glad" className={styles.label}>
          <GladIcon className={styles.icon} />
          <span className={styles.name}>Contente</span>
        </label>
      </li>
      <li className={styles.item}>
        <input
          type="radio"
          name="emotion"
          id="powerless"
          onChange={handleChange}
        />
        <label htmlFor="powerless" className={styles.label}>
          <DissatisfiedIcon className={styles.icon} />
          <span className={styles.name}>Impotente</span>
        </label>
      </li>
    </ul>
  );
};

export default Emotions;
