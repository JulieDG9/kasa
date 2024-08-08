import styles from "./Infos.module.scss";

export default function Infos({ title, location }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  );
}
