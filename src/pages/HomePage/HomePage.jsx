import Banner from "../../components/Banner/Banner";
import Annonces from "../../components/Annonces/Annonces";
import styles from "./HomePage.module.scss";
import HomeImg from "../../assets/images/img-banner-home.png";

export default function HomePage() {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <Banner
          image={HomeImg}
          texte={
            <>
              Chez vous, <span>partout et ailleurs</span>
            </>
          }
          alt={"Bannière page accueil"}
        />
        <Annonces />
      </div>
    </>
  );
}
