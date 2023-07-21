'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'


export default function Curses() {

  return (

  <section className="items-center justify-center flex flex-col p-10" id="Cursos">
      <h2 className="text-center text-5xl text-gray-700 font-bold drop-shadow-lg">Cursos</h2>
      <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">

              <Tab
                className={
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                }
              > CCO
              </Tab>

              <Tab
                className={
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                }
              > ECO
              </Tab>
              
              <Tab
                className={
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                }
              > SIN
              </Tab>
          </Tab.List>

          <Tab.Panels className="mt-2">
              <Tab.Panel
                className={
                  'rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                }
              >
                <ul>
                    <li
                      className="relative rounded-md p-3 "
                    >
                      <h3 className="text-sm font-medium leading-5">Cco</h3>
                      <p>lkjohiuh</p>
                      <a
                        href='#'
                        className={
                          'absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        }
                      />
                    </li>
                </ul>
              </Tab.Panel>

            <Tab.Panel
                className={
                  'rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                }
              >
                <ul>
                    <li
                      className="relative rounded-md p-3 "
                    >
                      <h3 className="text-sm font-medium leading-5">ECO</h3>
                      <p>lkjohiuh</p>
                      <a
                        href='#'
                        className={
                          'absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        }
                      />
                    </li>
                </ul>
              </Tab.Panel>

            <Tab.Panel
                className={
                  'rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                }
              >
                <ul>
                    <li
                      className="relative rounded-md p-3 "
                    >
                      <h3 className="text-sm font-medium leading-5">SIN</h3>
                      <p>lkjohiuh</p>
                      <a
                        href='#'
                        className={
                          'absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        }
                      />
                    </li>
                </ul>
              </Tab.Panel>


          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
