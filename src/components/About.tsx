'use client'

import { useState, useEffect } from "react";
import classNames from '@/utils/classesUtil'
import axios from "axios";
import { Tab } from '@headlessui/react';
import { Member } from './MemberCard'
import MemberCard from './MemberCard'

const About = () => {

  return (
      <div className={'flex flex-col items-center justify-center p-4' }>
        <div className='flex justify-center items-center'>
          <h3 className='text-center text-4xl text-white font-bold drop-shadow-lg p-16' id='About'>Sobre</h3>
        </div>

      <AboutChild/>
      </div>
  )
}

const AboutChild = () => {

  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:1337/api/members")
    .then(({ data }) => setMembers(data.data))
    .catch((error) => setError(error));
  }, []);


  return (
    <div className="max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
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

        <Tab.Panels className='max-h-[500px]'>
          
          <div className="h-screen w-full container m-auto md:w-[400px] lg:w-[550px]">
              <Tab.Panel
                key={idx}
                className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {members.map((member, id) => (
                   <MemberCard key={id} member={member} />
                  ))}
                </div>
               </Tab.Panel>
          </div>
       </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default About;
