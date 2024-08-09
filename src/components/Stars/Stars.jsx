import ActiveStar from "../../assets/images/active-star.png";
import InactiveStar from "../../assets/images/inactive-star.png";
import styles from "./Stars.module.scss";

export default function Stars({ rating }) {
  const totalStars = 5;

  return (
    <div className={styles.container}>
      {[...Array(totalStars)].map((_, index) => (
        <img key={index} src={index < rating ? ActiveStar : InactiveStar} />
      ))}
    </div>
  );
}
