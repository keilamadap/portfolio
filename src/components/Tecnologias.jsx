import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";

import "../styles/components/tecnologias.sass";

const tecnologias = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "javascript", name: "Javascript", icon: <DiJavascript1 /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const Tecnologias = () => {
  return (
    <section className="tecnologia-container">
      <h2>Tecnologias</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tech) => (
          <div className="tech-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;
