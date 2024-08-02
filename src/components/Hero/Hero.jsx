import { useLocation } from "react-router-dom";
import styles from "./Hero.module.scss";

export default function Hero({ image, texte, alt }) {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isAppPage = location.pathname === "/app";

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${isAppPage ? styles.shadow : ""}`}>
        <img
          src={image}
          alt={alt}
          className={isAboutPage ? styles.aboutImg : styles.defaultImg}
        />
        <h1>{texte}</h1>
      </div>
    </section>
  );
}
