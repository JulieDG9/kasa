import { useLocation } from "react-router-dom";
import styles from "./Banner.module.scss";

export default function Banner({ image, texte, alt }) {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isHomePage = location.pathname === "/HomePage";

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${isHomePage ? styles.shadow : ""}`}>
        <img
          src={image}
          alt={alt}
          className={isAboutPage ? styles.aboutImg : styles.homeImg}
        />
        <h1>{texte}</h1>
      </div>
    </section>
  );
}
