import { useState } from "react";

import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Infos from "../../components/Infos/Infos";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Stars from "../../components/Stars/Stars";
import Collapses from "../../components/Collapses/Collapses";
import annonces from "../../data/annonces.json";
import styles from "./Accommodation.module.scss";

export default function Accommodation() {
  const [state, setState] = useState([false, false]);

  const toggleCollapse = (index) => {
    setState((state) =>
      state.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const { id } = useParams();
  const annonce = annonces.find((item) => item.id === id);

  //   if (!annonce) {
  //     return <div> Annonce non trouvée</div>;
  //   }

  const equipmentList = annonce.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <div className={styles.container}>
        <Gallery pictures={annonce.pictures} />
        <div className={styles.infosHostContainer}>
          <Infos title={annonce.title} location={annonce.location} />
          <Host name={annonce.host.name} picture={annonce.host.picture} />
        </div>
        <div className={styles.tagsRatingContainer}>
          <Tags tags={annonce.tags} />
          <Stars rating={annonce.rating} />
        </div>
        <div className={styles.collapsesContainer}>
          <Collapses
            title={"Description"}
            content={annonce.description}
            isOpen={state[0]}
            onToggle={() => toggleCollapse(0)}
          />
          <Collapses
            title={"Équipements"}
            content={<ul className={styles.equipmentList}>{equipmentList}</ul>}
            isOpen={state[1]}
            onToggle={() => toggleCollapse(1)}
            className={styles.equipmentsList}
          />
        </div>
      </div>
    </>
  );
}
