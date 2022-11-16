import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Luca Andrey Costa" />
      <p className="title">Full Stack Java Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/13r-Hk_TYtuXOEnXLfVrQ-DezSZ3_VZSI/view?usp=sharing"
        className="btn"
        target="_blank"
      >
        Ver currículo
      </a>
    </aside>
  );
};

export default Sidebar;
