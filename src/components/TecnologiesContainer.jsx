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
  {
    id: "java",
    name: "java",
    icon: <DiJava />,
    texto: "Main Skills: Collections, Lambdas, POO, StreamAPI, Strings",
  },
  {
    id: "spring",
    name: "Spring",
    icon: <SiSpringboot />,
    texto:
      "Main Skills: SpringBoot, APIs Rest, Microsevices, Spring Security, jUnit ",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: <DiMysql />,
    texto: "Main Skills: Manipular dados, ManyToOne, OneToMany, ManyToMany",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    texto:
      "Main Skills: Codigo funcional, manipulação de arrays e objetos, filters, map, Etc",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    texto: "Main Skills: Redux, Hooks, Router, Consumo de Apis e mais",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    texto: "Main Skills: Sass, SCSS, BootStrap",
  },
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    texto: "Main SKills: Conhecimentos sólidos de HTML",
  },
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
