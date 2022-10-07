import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetwork.sass";

const socialnetworks = [
  {
    name: "linkedin",
    href: "https://linkedin.com/in/keila-amada-parreira",
    icon: <FaLinkedin />,
  },
  { name: "github", href: "https://github.com/keilamadap", icon: <FaGithub /> },
  {
    name: "instagram",
    href: "https://www.instagram.com/kingkeila_/",
    icon: <FaInstagram />,
  },
];

const SocialNetwork = () => {
  return (
    <section id="social-networks">
      {socialnetworks.map((network) => (
        <a
          href={network.href}
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

export default SocialNetwork;
