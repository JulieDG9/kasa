import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Header from "../src/components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);
