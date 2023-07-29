"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "@/utils/classesUtil";
import { Member } from "./MemberCard";
import MemberCard from "./MemberCard";

const About = () => {
  return (
    <div className={"flex-col"}>
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
    <div className="max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
          {Object.keys(dacomp).map((topic) => (
            <Tab
              key={topic}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg bg-blue-600 py-2.5 font-medium  text-white outline-none focus:ring-2 focus:ring-blue-600",
                  selected
                    ? "text-blue-600 ring-2 ring-blue-600"
                    : "bg-dark-gray text-white hover:bg-gray-800"
                )
              }
            >
              {topic}
            </Tab>
          ))}
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
