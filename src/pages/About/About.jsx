import Banner from "../../components/Banner/Banner";
import aboutImg from "../../assets/images/img-banner-about.png";
import collapsesData from "../../data/collapses.json";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <Banner image={aboutImg} alt={"Bannière page à propos"} />
        <div className={styles.collapseContainer}>
          {collapsesData.map((collapse, index) => (
            <Collapse
              key={index}
              title={collapse.title}
              content={collapse.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
