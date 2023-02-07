import "../style/objectives.css";
import Cuadro from "../img/Cuadro.jpg";

const Cursos = ({ data }) => {
  console.log(data, "este es diferente");

  return (
    <>
      {data.map((item, index) => (
        <div className="objectives-content-description" key={index}>
          <div>
            <img src={item.image} alt={item.title} className={"img-about"} />

            <p className="section-title">{item.title}</p>
          </div>

          <div className="objectives-content-description-list">
            <ul>
              {item.cursos.map((curso, index) => (
                <li key={index}>
                  <img
                    className="cuadro-descriptivo"
                    src={Cuadro}
                    alt="Img de un cuadro amarillo"
                  />
                  {curso}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cursos;
