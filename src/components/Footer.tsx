import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-16 bg-dark-gray text-white ">
      <div className="flex w-full max-w-7xl flex-col items-center justify-around px-4 py-4 md:flex-row md:gap-6">
        <div
          id="footer-contact"
          className="flex flex-col items-center gap-6 p-4"
        >
          <h2 className="text-xl font-bold uppercase">Contato</h2>

          <a
            className="text-lg font-medium transition-all duration-500 hover:scale-105 hover:text-blue-600 focus:text-blue-600"
            href="mailto:dacomp@unifei.edu.br"
          >
            dacomp@unifei.edu.br
          </a>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/dacompunifei/"
              target="__blank"
              rel="noopener"
            >
              <FontAwesomeIcon
                className="transition-all duration-500 hover:scale-105 hover:text-blue-600 focus:text-blue-600"
                icon={faInstagram}
                size="2xl"
              />
            </a>
            <a
              href="https://www.facebook.com/DacompUNIFEI"
              target="__blank"
              rel="noopener"
            >
              <FontAwesomeIcon
                className="transition-all duration-500 hover:scale-105 hover:text-blue-600 focus:text-blue-600"
                icon={faFacebook}
                size="2xl"
              />
            </a>
          </div>
        </div>

        <picture>
          <img
            className="w-64"
            src="dacomp-full.png"
            alt="Logo do DACOMP UNIFEI"
          />
        </picture>

        <div className="flex flex-col items-center justify-center gap-6 py-6">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h2 className="text-center text-lg font-bold uppercase">
              Diretório Acadêmico de Computação
            </h2>
            <h2 className="text-center text-lg">
              Universidade Federal de Itajubá
            </h2>
            <p className="text-center font-light">
              Av. BPS, 1303, Bairro Pinheirinho, Itajubá – MG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
