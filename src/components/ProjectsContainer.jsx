import React from "react";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Tenho desenvolvido diversos projetos a fim de evoluir profissionalmente.
        No meu github estão disponíveis várias APIs desenvolvidas em SpringBoot
        com Java, além de projetos fazendo o uso de arquiteturas de micro
        serviços. No Front-end fiz o consumo de algumas das APIs que desenvolvi
        usando React e TypeScript, além do consumo de APIs de terceiros como a
        API de Pokedex usando JavaScript e React. Continuo atualizando meu
        repositório diariamente.
      </p>
      <a
        href="https://github.com/lucaandrey?tab=repositories"
        className="btn"
        target="_blank"
      >
        Ver Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;
