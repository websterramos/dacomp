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
        id: 0,
        name: "Ana",
        course: "CCO",
        role: "Diretora",
        phrase: "nada me faltara",
        photo: "/membros/Ana.jpg",
        link: "#",
      },

      {
        id: 1,
        name: "Theo",
        course: "SIN",
        role: "Marketing",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },

      {
        id: 2,
        name: "Mario",
        course: "ECO",
        role: "Sla",
        phrase: "nada me faltara",
        photo: "/membros/Theo.jpg",
        link: "#",
      },

      {
        id: 3,
        name: "Hellen",
        course: "ECO",
        role: "Sla",
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
              key={topic}
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
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )}
            >
              Membros
            </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <div className="container m-auto h-screen w-full md:w-[400px]">
            {Object.values(dacomp).map((topic, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-dark-gray p-3 text-white "
                )}
              >
                {Array.isArray(topic) ? (
                  <div className="grid grid-cols-2 place-content-center gap-4 md:grid-cols-2">
                    {topic.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                ) : (
                  <div className="max-w-[400px] overflow-x-auto">
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
