import { useLocation } from "react-router-dom";
import styles from "./Banner.module.scss";

export default function Banner({ image, texte, alt }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  return (
    <section className={styles.banner}>
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
