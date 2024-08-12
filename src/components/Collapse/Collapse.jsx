import { useState } from "react";
import styles from "./Collapse.module.scss";
import iconForOpen from "../../assets/images/chevron-for-open.png";
import iconForClosed from "../../assets/images/chevron-for-closed.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(0);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.collapse}>
      <div
        className={`${styles.titleContainer} ${isOpen ? styles.openTc : ""}`}
        onClick={onToggle}
      >
        <h2>{title}</h2>
        <img
          src={isOpen ? iconForOpen : iconForClosed}
          className={styles.chevron}
        />
      </div>
      <div
        className={`${styles.contentContainer} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}
