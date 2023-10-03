import NeumannIcon from "../../public/neumann.svg";
import styles from "./Neumann.module.css";

interface NeumannProps {
  withLabel: boolean;
  className?: string;
}

const Neumann = (props: NeumannProps) => {
  return (
    <div className={`${styles.container} ${props.className ?? ""}`}>
      <NeumannIcon className={styles.icon} />
      {props.withLabel && <span className={styles.label}>NeumannApp</span>}
    </div>
  );
};

export default Neumann;
