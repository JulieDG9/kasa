import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo-kasa-orange.svg";

export default function Header() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Logo Kasa" />
        <nav>
          <Link
            to="/"
            className={`${styles.navLink} ${
              location.pathname === "/" ? styles.active : ""
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={`${styles.navLink} ${
              location.pathname === "/about" ? styles.active : ""
            }`}
          >
            a propos
          </Link>
        </nav>
      </header>
    </div>
  );
}
