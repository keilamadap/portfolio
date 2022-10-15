import Avatar from "./img/keila-eua.jpg";

import SocialNetwork from "./SocialNetwork.jsx";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Keila-Perfil" />
      <p className="title">Desenvolvedora</p>
      <SocialNetwork />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1QfYMSfnjp5Qtggars265ZemoBDzWCdTP/view?usp=sharing"
        download="Curriculo Keila"
        target="_blank"
        className="btn"
      >
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
