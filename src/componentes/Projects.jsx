import React from "react";
import "../style/projects.css";
import Tetromino8 from '../img/tetromino8.svg';
import FlechaAbajo from "../img/flecha-hacia-abajo.png";
import Proyectos from "./Proyectos";
import { proyectosData } from "../Data/proyectos";



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
               
                <Proyectos data={proyectosData}/>

            </div>

            <div className="arrow-right">
                <img src={FlechaAbajo} alt="arrow right"/>
            </div>
            

        </div>
    );
};

export default Objectives;
