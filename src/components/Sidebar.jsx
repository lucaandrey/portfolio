import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Luca Andrey Costa" />
      <p className="title">Full Stack Java Developer</p>
      <SocialNetworks />
      <p>Meus contatos</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
