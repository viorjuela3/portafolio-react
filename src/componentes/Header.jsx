import React from "react";
import "../style/header.css";
import Tetromino1 from '../img/tetromino1.svg';
import Logo from "../img/LogoPortafolio.jpg";
import Freecodecamp from "../img/freecodecamp.svg";
import GitHub from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import Gmail from "../img/correo-electronico.svg";
import Phone from "../img/llamada-telefonica.svg";

const Header = () => {

    return (
        <div className="about-container">
            
            <div className="content-title">
                <a href="#">
                    <img className="img-about" src={Tetromino1} alt="tres cuadrados"/>About
                </a>
            </div>  

            <div className="about-content">
                            
                <div className="img-about-content">
                    <img src={Logo} alt="Logo"/>
                </div>
                
                <div className="description-about">
                    <h1>Viviana Orjuela Pedraza</h1>
                    <hr />
                    <h2> Full-Stack Developer</h2>
                    <p>Full-Stack developer graduated from Educamas and Software Engineering student, with experience in development for the implementation, control and quality of technology solutions, developing and analyzing information from databases to organize and manage the representation of the data used.</p>
                </div>


            </div>

            <div className="about-icons-container">
                <a href="https://www.freecodecamp.org/Viviana-Orjuela-Pedraza">
                <img src={Freecodecamp} alt="Logo Freecodecamp" />
                </a>
                <a href="https://github.com/viorjuela3">
                <img src={GitHub} alt="Logo GitHub"/>
                </a>
                <a href="https://linkedin.com/in/viviana-orjuela-pedraza">
                <img src={Linkedin} alt="Logo Linkedin"/>
                </a>
                <a href="#">
                    <img src={Gmail} alt="Logo Gmail"/></a>
                <a href="#">
                    <img src={Phone} alt="Logo Phone"/></a>
            </div>
    
        </div>
    );
};

export default Header;
