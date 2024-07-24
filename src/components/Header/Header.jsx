import styles from "./Header.module.scss";
import logo from "../../assets/images/logo-kasa-orange.svg";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <a href="#">Accueil</a>
        <a href="#">A propos</a>
      </nav>
    </header>
  );
}
