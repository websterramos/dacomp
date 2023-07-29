"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "@/utils/classesUtil";
import { Member } from "./MemberCard";
import MemberCard from "./MemberCard";

const About = () => {
  return (
    <div className={"flex flex-col items-center justify-center p-4"}>
      <div className="flex items-center justify-center">
        <h3
          className="p-16 text-center text-4xl font-bold text-white drop-shadow-lg"
          id="About"
        >
          Sobre
        </h3>
      </div>

      <AboutChild />
    </div>
  );
};

const AboutChild = () => {
  let [dacomp] = useState<{
    Sobre: {
      title: string;
      content: string;
    };

    Membros: Member[];
  }>({
    Sobre: {
      title:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      content:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },

    Membros: [

      {
        name: "Ana",
        course: "CCO",
        role: "Diretora Financeiro",
        phrase: "nada me faltara",
        photo: "/membros/Ana.jpg",
        link: "#",
      },

      {
        name: "Theo",
        course: "SIN",
        role: "Marketing",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },

      {
        name: "Mario",
        course: "ECO",
        role: "Repr. CCO",
        phrase: "nada me faltara",
        photo: "/membros/Mario.jpg",
        link: "#",
      },

      {
        name: "Hellen",
        course: "ECO",
        role: "Sla",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },

      {
        name: "Luara",
        course: "SIN",
        role: "Repr. SIN",
        phrase: "nada me faltara",
        photo: "/membros/Luara.png",
        link: "#",
      },
      
      {
        name: "Mariana",
        course: "ECO",
        role: "Vice Presidente",
        phrase: "nada me faltara",
        photo: "/membros/Ana.jpg",
        link: "#",
      },

      {
        name: "Clara",
        course: "ECO",
        role: "Presidente",
        phrase: "nada me faltara",
        photo: "/membros/Clara.png",
        link: "#",
      },

      {
        name: "Gui Martins",
        course: "ECO",
        role: "Diretor de Eventos",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },
      
      {
        name: "Joao Paulo",
        course: "CCO",
        role: "Assessor de Eventos",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },
      
      {
        name: "Botrel",
        course: "CCO",
        role: "Assessor de Graduaçao",
        phrase: "nada me faltara",
        photo: "/membros/Botrel.png",
        link: "#",
      },
      
      {
        name: "Ricardo",
        course: "ECO",
        role: "Repr. de Graduaçao",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },
{
        name: "Felipe",
        course: "ECO",
        role: "Assessor de Graduaçao",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },
    ],
  });

  return (
    <div className="max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg bg-dark-gray py-2.5 font-medium  text-blue-600 outline-none focus:ring-2 focus:ring-blue-600",
                  selected
                    ? "text-blue-600 ring-2 ring-blue-600"
                    : "text-white hover:bg-gray-800"
                )
              }
            >
              Sobre
            </Tab>
            
            <Tab
              className={({ selected }) => 
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'text-blue-600 ring-2 ring-blue-600'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )}
            >
              Membros
            </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <div className="container m-auto max-w-[400px] h-screen w-full  lg:max-h-[800px] md:w-[600px]">
            {Object.values(dacomp).map((topic, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-dark-gray p-3 text-white "
                )}
              >
                {Array.isArray(topic) ? (
                  <div className="grid grid-cols-2 place-content-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {topic.map((member) => (
                      <MemberCard  member={member} />
                    ))}
                  </div>
                ) : (
                  <div className="max-w-[500px] overflow-x-auto">
                    <h1>{topic.title}</h1>
                    <p className="text-justify">{topic.content}</p>
                  </div>
                )}
              </Tab.Panel>
            ))}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default About;
