import Banner from "../../components/Banner/Banner";
import Collapses from "../../components/Collapse/Collapse";
import styles from "./About.module.scss";
import aboutImg from "../../assets/images/img-banner-about.png";

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <Banner image={aboutImg} alt={"Bannière page a propos"} />
        <Collapses />
      </div>
    </>
  );
}
