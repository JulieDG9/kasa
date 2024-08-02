import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo-kasa-white.svg";

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer className={`${styles.footer}`}>
        <img src={logo} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}
