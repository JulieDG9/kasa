import { Link } from "react-router-dom";
import annonces from "../../data/annonces.json";
import styles from "./Annonces.module.scss";

export default function Annonces() {
  return (
    <div className={styles.annoncesContainer}>
      {annonces.map((item) => (
        <Link
          className={styles.linkAnnonce}
          key={item.id}
          to={`/logement/${item.id}`}
        >
          <div className={styles.annonceCard}>
            <img src={item.cover} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
