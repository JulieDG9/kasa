import { useState } from "react";
import styles from "./Gallery.module.scss";
import arrowPrevious from "../../assets/images/arrow-previous.png";
import arrowNext from "../../assets/images/arrow-next.png";

export default function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      {pictures.length > 1 && (
        <div className={styles.nav}>
          <div className={styles.arrows}>
            <img src={arrowPrevious} onClick={previous} />
            <img src={arrowNext} onClick={next} />
          </div>
          <div className={styles.counter}>
            {currentIndex + 1}/{pictures.length}
          </div>
        </div>
      )}
      <div className={styles.pictures}>
        <img src={pictures[currentIndex]} />
      </div>
    </div>
  );
}
