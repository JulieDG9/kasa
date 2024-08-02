import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo-kasa-orange.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      {/* <header className={`${styles.header}`}> */}
      <header className={styles.header}>
        <img src={logo} alt="Logo Kasa" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">a propos</Link>
        </nav>
      </header>
    </div>
  );
}
