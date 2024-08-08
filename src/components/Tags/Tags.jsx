// import annonces from "../../data/annonces.json";
// import styles from "./Tags.module.scss";

// export default function Tags() {
//   return (
//     <div className={styles.tagsContainer}>
//       {annonces.map((item) => (
//         <div key={item.id} className={styles.tagsWrapper}>
//           {item.tags.map((tag, index) => (
//             <div key={index} className={styles.tag}>
//               <p>{tag}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// import annonces from "../../data/annonces.json";
import styles from "./Tags.module.scss";

export default function Tags({ tags }) {
  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        /* {annonces.map((item) => (
        <div key={item.id} className={styles.annonceWrapper}>
          <h2>{item.title}</h2>
          <div className={styles.tagsWrapper}>
            {annonces.item.tags.map((tag, index) => ( */
        <div key={index} className={styles.tag}>
          {/* {index} */}
          <p>{tag}</p>
        </div>
      ))}
    </div>

    //   </div>
    // </div>
    //   ))}
    // </div>
  );
}
