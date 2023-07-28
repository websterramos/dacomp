"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Writer = () => {
  const [text] = useTypewriter({
    words: [
      "ciência-da-computação",
      "engenharia-da-computação",
      "sistemas-de-informação",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="text-medium flex items-center justify-start gap-2 pt-5 text-center text-white">
      <div className="font-semibold text-white">
        <span className="text-[#269860]">dacomp@unifei</span>
        <span>:</span>
        <span className="text-[#144787]">~</span>
        <span className="font-normal">$</span>
      </div>
      <div>
        <span> {text}</span>
        <Cursor />
      </div>
    </div>
  );
};

export default Writer;
