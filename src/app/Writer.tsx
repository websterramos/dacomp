'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Writer = () => {
  const [text] = useTypewriter({
            words:['Ciência da Computação', 'Engenharia da Computação', 'Sistemas de Informação'],
            typeSpeed:70,
            deleteSpeed:50,
            delaySpeed:1000
            })

  return (
    <div className="mt-5 text-center text-lg text-white opacity-70">
      <span>Diretorio Academico de {text}</span>
      <Cursor/>
    </div>
  )
}




export default Writer;
