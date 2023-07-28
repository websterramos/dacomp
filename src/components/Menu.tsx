import React from "react";

const Menu = () => {
  return (
    <div>
      <nav className="flex flex-col justify-between gap-8 p-4 md:flex-row md:items-center">
        <a className="hover:text-blue-400" href="#cursos">
          Cursos
        </a>

        <a className="hover:text-blue-400" href="#eventos">
          Eventos
        </a>

        <a className="hover:text-blue-400" href="#produtos">
          Produtos
        </a>

        <a className="hover:text-blue-400" href="#sobre">
          Sobre
        </a>

        <a className="hover:text-blue-400" href="#faq">
          FAQ
        </a>
      </nav>
    </div>
  );
};

export default Menu;
