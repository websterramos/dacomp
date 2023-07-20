'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Curses() {

  let [curses] = useState({
    CCO: [
      {
        id: 0,
        title: 'Porque CCO eh o melhor curso?',
        content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        link: 'https://prg.unifei.edu.br/cursos/ciencia-da-computacao/'
      }
    ],
    ECO: [
      {
        id: 1,
        title: 'Oque faz ECO?',
        content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        link: 'https://prg.unifei.edu.br/cursos/engenharia-de-computacao/'
      }
    ],
    SIN: [
      {
        id: 2,
        title: 'Fodase',
        content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        link: 'https://prg.unifei.edu.br/cursos/sistemas-de-informacao/'
      }   
    ],
  })

  const tabColors = {
    0: 'bg-cyan-700 hover:bg-cyan-600',
    1: 'bg-amber-500 hover:bg-amber-400',
    2: 'bg-red-700 hover:bg-red-600'
  }

  return (

  <section className="items-center justify-center flex flex-col p-10" id="Cursos">
      <h2 className="text-center text-5xl text-gray-700 font-bold drop-shadow-lg">Cursos</h2>
      <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(curses).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(curses).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  tabColors[idx],  
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 "
                    >
                      <h3 className="text-sm font-medium leading-5">{post.title}</h3>
                      <p>{post.content}</p>
                      <a
                        href={post.link}
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
