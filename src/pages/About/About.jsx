import Banner from "../../components/Banner/Banner";
import aboutImg from "../../assets/images/img-banner-about.png";
import collapsesData from "../../data/collapses.json";
import Collapses from "../../components/Collapses/Collapses";
import styles from "./About.module.scss";

// export default function About() {
//   return (
//     <>
//       <div className={styles.aboutContainer}>
//         <Banner image={aboutImg} alt={"Bannière page à propos"} />
//         <div className={styles.collapseContainer}>
//           {collapsesData.map((item, index) => (
//             <Collapses key={index} title={item.title} content={item.content} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// {collapsesData.map((item) => (
//     <div className={styles.annonceCard}>
//       <img src={item.cover} alt={item.title} />
//       <h2>{item.title}</h2>
//     </div>
// ))}

import { useState } from "react";
// import Collapse from "./Collapse"; // Assurez-vous que le chemin est correct
// import styles from "./About.module.scss";
// import collapsesData from "../../data/collapses.json"; // Assurez-vous que le chemin est correct

export default function About() {
  const initialState = collapsesData.map(() => false);
  const [state, setState] = useState(initialState);

  const toggleCollapse = (index) => {
    setState(state.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  return (
    <>
      <div className={styles.aboutContainer}>
        <Banner image={aboutImg} alt={"Bannière page à propos"} />
        <div className={styles.collapseContainer}>
          {collapsesData.map((collapse, index) => (
            <Collapses
              key={index}
              title={collapse.title}
              content={collapse.content}
              isOpen={state[index]}
              onToggle={() => toggleCollapse(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
