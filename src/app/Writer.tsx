'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { scrollToNextSection } from '../utils/scrollUtils';

const Writer = () => {
  const [text] = useTypewriter({
            words:['Ciencia da Computaçao', 'Engenharia da Computaçao', 'Sistemas de Informaçao'],
            typeSpeed:70,
            deleteSpeed:50,
            delaySpeed:1000
            })

  return (
    <div className="mt-4 text-lg text-black">
      <span>Diretorio Academico de {text}</span>
      <Cursor/>
    </div>
  )
}


const FrontPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 px-8 py-16 md:py-32 md:pl-32">
        <h1 className="text-4xl font-bold text-black">DACOMP</h1>
        
        <Writer/>

        <button type="button" className="rotate-90 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>  

      </div>

   </div>
  );
};

export default FrontPage;
