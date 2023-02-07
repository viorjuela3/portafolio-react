import React from "react";
import "../style/objectives.css";

import Tetromino3 from "../img/tetromino3.svg";
import Tetromino4 from "../img/tetromino4.svg";
import Tetromino5 from "../img/Tetromino5.png";
import Tetromino6 from "../img/tetromino6.svg";
import Tetromino7 from "../img/tetromino7.svg";
import {cursosData} from "../Data/cursos";
import Cursos from "../componentes/Cursos";

const Objectives = () => {

  // console.log(cursosData);

  return (
    <div className="objectives-container">
      <div className="objectives-intro">
        <div className="content-title-objectives">
          <a href="#">
            <img
              className="img-objectives"
              src={Tetromino3}
              alt="bloques de tetris"
            />
            Objectives
          </a>
        </div>

        <p className="objetives-intro-text">
          My professional objective is to be able to put what I have learned
          empirically into practice, take on work challenges that allow me to
          get out of my comfort zone, encouraging myself to investigate and
          acquire new knowledge.
        </p>
      </div>

      <div className="objectives-content">

        <Cursos data={cursosData}/> 

      </div> 
    </div>
  );
};

export default Objectives;
