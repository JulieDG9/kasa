import styles from "./Tags.module.scss";

export default function Tags({ tags }) {
  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
}
