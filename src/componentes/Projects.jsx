import React from "react";
import "../style/projects.css";
import Tetromino8 from '../img/tetromino8.svg';
import Sabujcha from '../img/Sabujcha.svg';
import GitHub from "../img/github.svg";
import IconReact from "../img/React.svg";
import SignoMas from "../img/anadir.svg";
import FlechaAbajo from "../img/flecha-hacia-abajo.png";



const Objectives = () => {

    return (
        <div className="projects-container">

            <div class="projects-intro">
                <div className="content-title-projects">
                    <a href="#">
                    <img className="img-projects" src={Tetromino8} alt="bloques de tetris"/>
                    Projects
                    </a>  
                </div>
                 <p className="description-projects">See some of my projects their code and functionality.</p>
            </div>
 
            <div className="projects-container-cards">

                <div className="projects-card">
                    <img src={Sabujcha} alt="imagen de proyecto" className="img-card"/>
                    <div className="info-card">
                        <div className="text-card-content">
                            <p className="text-card-top">Sabujcha</p>
                            <p className="text-card-bottom">Web design</p>
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

                <img className="arrow-right" src={FlechaAbajo} alt="arrow right"/>

            </div>

        </div>
    );
};

export default Objectives;
