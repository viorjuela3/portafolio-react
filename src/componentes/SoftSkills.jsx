import React from "react";
import "../style/softSkills.css";
import Tetromino2 from '../img/tetromino2.svg';
import Cuadro from '../img/Cuadro.jpg';

 const SoftSkills = () => {

    return (
    
        <div className="softskills-container">

            <div className="content-title-softSkills">
                <a href="#">
                    <img className="img-skills" src={Tetromino2} alt="bloques de tetris"/>Soft Skills
                </a>
            </div>

            <div className="softskills-content">

                <div className="softskills-description">
                    <p >I have achievement-oriented teamwork skills to solve problems, investigate and analyze with the capacity for adaptation and significant learning.
                    </p>
                </div>
              

                <div className="softskills-list">
                    <ul>
                        <li><img className="cuadro-descriptivo" src={Cuadro} alt="Img de un cuadro amarillo"/>Course of Strategies to Learn Online Effectively 2019</li>
                        <li><img className="cuadro-descriptivo" src={Cuadro} alt="Img de un cuadro amarillo"/>Effective Time Management Course</li>
                        <li><img className="cuadro-descriptivo" src={Cuadro} alt="Img de un cuadro amarillo"/>Budgeting course for managing personal finances.</li>
                    </ul>

                </div>
                  
             </div>
        </div>
    );
};
export default SoftSkills;
