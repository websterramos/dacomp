import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-dark-gray text-white">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center px-4 py-4 md:flex-row md:gap-6">
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
