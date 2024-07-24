import Header from "../src/components/Header/Header.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={`${styles.container}`}>
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
