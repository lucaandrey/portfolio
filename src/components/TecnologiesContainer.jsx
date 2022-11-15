import "../styles/components/technologiescontainer.sass";
import {
  DiJava,
  DiMysql,
  DiJsBadge,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiSpringboot } from "react-icons/si";

const technologies = [
  { id: "java", name: "java", icon: <DiJava />, texto: "auhsduiahsh" },
  {
    id: "spring",
    name: "SpringBoot",
    icon: <SiSpringboot />,
    texto: "auhsduiahsh",
  },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, texto: "auhsduiahsh" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, texto: "auhsduiahsh" },
  { id: "react", name: "React", icon: <DiReact />, texto: "auhsduiahsh" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, texto: "auhsduiahsh" },
  { id: "html", name: "HTML5", icon: <DiHtml5 />, texto: "auhsduiahsh" },
];

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TecnologiesContainer;
