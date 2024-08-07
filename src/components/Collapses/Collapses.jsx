import styles from "./Collapses.module.scss";
import iconForOpen from "../../assets/images/chevron-for-open.png";
import iconForClosed from "../../assets/images/chevron-for-closed.png";

export default function Collapse({ title, content, isOpen, onToggle }) {
  return (
    <div className={styles.collapse}>
      <div className={styles.titleContainer} onClick={onToggle}>
        <h2>{title}</h2>
        <img
          src={isOpen ? iconForOpen : iconForClosed}
          className={styles.chevron}
        />
      </div>
      <div
        className={`${styles.contentContainer} ${isOpen ? styles.open : ""}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
