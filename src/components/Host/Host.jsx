import styles from "./Host.module.scss";

export default function Host({ name, picture }) {
  console.log(name);
  const [firstName, lastName] = name.split(/\s+/);
  return (
    <div className={styles.container}>
      <div className={styles.hostName}>
        <h3 className={styles.firstName}>{firstName}</h3>
        <h3 className={styles.lastName}>{lastName}</h3>
      </div>

      <div className={styles.pictureContainer}>
        <img src={picture} alt={name} className={styles.picture} />
      </div>
    </div>
  );
}
