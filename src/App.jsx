import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import SobreMim from "./components/SobreMim.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Projetos from "./components/Projetos.jsx";
import Footer from "./components/Footer.jsx";
import GlobalStyle from "./styles/global.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Footer />
    </>
  );
}


