import { useParams, Navigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Infos from "../../components/Infos/Infos";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Stars from "../../components/Stars/Stars";
import Collapse from "../../components/Collapse/Collapse";
import annonces from "../../data/annonces.json";
import styles from "./Accommodation.module.scss";

export default function Accommodation() {
  const { id } = useParams();
  const annonce = annonces.find((item) => item.id === id);

  if (!annonce) {
    return <Navigate to="/404" replace />;
  }

  const equipmentList = annonce.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <div className={styles.container}>
        <Gallery pictures={annonce.pictures} />
        <div className={styles.infosContainer}>
          <div className={styles.titleTagsContainer}>
            <Infos title={annonce.title} location={annonce.location} />
            <Tags tags={annonce.tags} />
          </div>
          <div className={styles.hostRatingContainer}>
            <Host name={annonce.host.name} picture={annonce.host.picture} />
            <Stars rating={annonce.rating} />
          </div>
        </div>
        <div className={styles.collapsesContainer}>
          <Collapse title={"Description"} content={annonce.description} />
          <Collapse
            title={"Équipements"}
            content={<ul className={styles.equipmentList}>{equipmentList}</ul>}
            className={styles.equipmentsList}
          />
        </div>
      </div>
    </>
  );
}
