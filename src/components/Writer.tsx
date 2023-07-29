"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Writer = () => {
  const [text] = useTypewriter({
    words: [
      "Ciência da Computação",
      "Engenharia da Computação",
      "Sistemas de Informação",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="flex items-center justify-center gap-2 pt-5 text-center text-lg font-semibold text-white">
      <span>
        Diretório Acadêmico de {text} <Cursor />
      </span>
    </div>
  );
};

export default Writer;
