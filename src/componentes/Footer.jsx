import React from "react";
import "../style/footer.css";
import Tetromino9 from "../img/tetromino9.svg";
import Linkedin from "../img/linkedin.svg";
import Gmail from "../img/correo-electronico.svg";
import Phone from "../img/llamada-telefonica.svg";



const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content-title-contact">
        <a href="#">
          <img
            className="img-contact"
            src={Tetromino9}
            alt="bloques de tetris"
          />
          Contact
        </a>
      </div>

      <div className="description-footer">
        <div className="footer-text-container">
          <p className="footer-1p">Thanks for your time! </p>
          <p className="footer-2p">
            I hope you like my work and if you want additional information, I
            leave you my networks.
          </p>
        </div>

        <div className="footer-container-contact">
          <div className="footer-contact">
            <a href="#">
              <img src={Phone} alt="icono de telefono" class="icons-contact" />
              315 251 9293
            </a>
          </div>

          <div className="footer-contact">
            <a href="#">
              <img src={Gmail} alt="icono de email" class="icons-contact" />{" "}
              bivianaorjuela@gmail.com
            </a>
          </div>
          <div className="footer-contact">
            <a href="https://www.linkedin.com/in/viviana-orjuela-pedraza/">
              <img
                src={Linkedin}
                alt="icono de linkedin"
                class="icons-contact"
              />
              viviana-orjuela-pedraza
            </a>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Footer;
