import "../style/projects.css";
import GitHub from "../img/github.svg";
import IconReact from "../img/React.svg";
import SignoMas from "../img/anadir.svg";

const proyectos = ({ data }) => {
  console.log(data, "cards proyectos");

  return (
    <>
      {data.map((item, index) => (
        <div className="projects-container-cards" key={index}>
            <div className="projects-card">
                <img src={item.image} alt={item.title} className={"img-card"} />

                <div className="info-card">
                    <div className="text-card-content">
                        <p className="text-card-top">{item.title}</p>
                        <p className="text-card-bottom">{item.description}</p>
                    </div>
                    <div className="icons-card">

                        <a href="#">
                            <img className="icon-card" src={IconReact} alt="react icon"/>
                        </a>

                        <a href="#">
                            <img className="icon-card" src={GitHub} alt="github icon"/>
                        </a>

                        <a href="#">
                            <img className="icon-card" src={SignoMas} alt="add icon"/>
                        </a>
                    </div>
                </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default proyectos;
