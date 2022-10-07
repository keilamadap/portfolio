import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjetosContainer from "./Projetos";
import Tecnologias from "./Tecnologias";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <Tecnologias />
      <ProjetosContainer />
    </main>
  );
};

export default MainContent;
