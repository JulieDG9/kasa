import Content from "../src/components/Content/Content";
import styles from "./App.module.scss";
import imgherohome from "../src/assets/images/img-hero-home.png";

function App() {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <Content image={imgherohome} texte={"Chez vous, partout et ailleurs"} />
      </div>
    </>
  );
}

export default App;
