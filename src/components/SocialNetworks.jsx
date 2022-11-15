import "../styles/components/network.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/lucaandrey/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/lucaandrey",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/lucaandrey/",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
