"use client";

import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import classNames from "../utils/classesUtil";
import MemberCard from "../components/MemberCard"

const About = () => {
  return (
    <div className={"flex-col"}>
      <div className="flex items-center justify-center">
        <h3
          className="p-16 text-center text-4xl font-bold text-white drop-shadow-lg"
          id="Courses"
        >
          Sobre
        </h3>
      </div>

      <AboutChild />
    </div>
  );
};

const AboutChild = () => {
  
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/members")
      .then(({ data }) => setMembers(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className="w-full max-w-md flex-col justify-center px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Sobre
            </Tab>
            
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Membros
            </Tab>
        </Tab.List>

        <Tab.Panels className='mt-2'>
          
        <div className="h-screen w-full container m-auto md:w-[350px] lg:w-[550px] p-0">
          <Tab.Panel
            className={classNames(
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((id, attributes) => {
                  console.log({attributes});
                })}
            </div>
          </Tab.Panel>
        </div>
       </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default About;
