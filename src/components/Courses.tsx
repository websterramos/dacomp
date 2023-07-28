"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "../utils/classesUtil";

const Courses = () => {
  const [bgState, setBgState] = useState();

  const updateBgState = (color: string) => {
    setBgState(color);
  };

  return (
    <div className={`flex-col ${bgState} overflow-hidden`}>
      <div className="flex items-center justify-center">
        <h3
          className="p-16 text-center text-4xl font-bold text-white drop-shadow-lg"
          id="Courses"
        >
          Cursos
        </h3>
      </div>

      <CoursesChild updateBgState={updateBgState} />
    </div>
  );
};

const CoursesChild = ({ updateBgState }) => {
  const handleTabClick = (color: string) => {
    updateBgState(color);
  };

  let [courses] = useState({
    CCO: [
      {
        id: 0,
        title: "Ciência da Computação",
        content:
          "O curso de Ciência da Computação da Universidade Federal de Itajubá (UNIFEI) foi implantado em 1998 e reconhecido em 2002. Até o ano de 2008, os ingressantes no curso cumpriam uma grade noturna num período mínimo de 10 semestres. Em 2009, o curso passou a ser integral, com período mínimo para integralização de oito semestres.",
        link: "https://prg.unifei.edu.br/cursos/ciencia-da-computacao/",
        color: " bg-gradient-to-r from-black from-10% to-light-blue",
      },
    ],
    ECO: [
      {
        id: 1,
        title: "Engenharia de Computação",
        content:
          "Procurando propiciar a formação de profissionais altamente qualificados, o curso de Engenharia de Computação da Universidade Federal de Itajubá vem sofrendo alterações ao longo dos anos até mesmo para atender a Lei das Diretrizes e Bases da Educação no Brasil (LDB) e a Proposta de Diretrizes Curriculares de Cursos da Área de Computação e Informática.",
        link: "https://prg.unifei.edu.br/cursos/engenharia-de-computacao/",
        color: "bg-gradient-to-r from-black from-10% to-engenharia-orange",
      },
    ],
    SIN: [
      {
        id: 2,
        title: "Sistemas de Informação",
        content:
          "Os últimos anos, a utilização de sistemas de informação como fator competitivo tornou-se uma realidade. Tal fato criou uma demanda crescente por profissionais habilitados a desenvolver e gerenciar tais sistemas. Por se tratarem de sistemas complexos e altamente especializados, os profissionais egressos de cursos de ciência ou engenharia de computação, os quais oferecem formação mais ampla e diversificada, precisam de formação complementar para lidar com as especificidades dos sistemas de informação.",
        link: "https://prg.unifei.edu.br/cursos/sistemas-de-informacao/",
        color: "bg-gradient-to-r from-black from-10% to-sistemas-red",
      },
    ],
  });

  return (
    <div className="flex flex-col items-center justify-center gap-12 space-x-10 py-10 sm:px-0 lg:flex-row">
      <Tab.Group>
        <Tab.List className="flex  w-max justify-between gap-4  rounded-xl p-6 lg:flex-col">
          {Object.keys(courses).map((course) => (
            <Tab
              key={course}
              onClick={() => handleTabClick(courses[course][0].color)}
              className={({ selected }) =>
                classNames(
                  "block w-full  rounded-lg py-2.5 text-2xl font-semibold leading-5 text-white",
                  "ring-transparent ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                  selected
                    ? "bg-neutral-300/50"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {course}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="flex h-[500px] w-[360px]  items-center justify-center md:h-[350px]">
          {Object.values(courses).map((course) => (
            <a href={course[0].link}>
              <Tab.Panel
                className={classNames(
                  "w-max rounded-xl  p-3 ",
                  "ring-transparent ring-opacity-100 ring-offset-2 hover:scale-105 focus:outline-none focus:ring-2"
                )}
              >
                <div
                  key={course[0].id}
                  className="flex flex-col items-center justify-center"
                >
                  <h3 className="text-2xl font-medium leading-5 text-white">
                    {course[0].title}
                  </h3>
                  <p className=" max-w-[300px] py-4 text-justify align-middle text-lg text-white md:max-w-md lg:max-w-lg">
                    {course[0].content}
                  </p>
                </div>
              </Tab.Panel>
            </a>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Courses;
