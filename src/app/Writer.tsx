'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Writer = () => {
  const [text] = useTypewriter({
            words:['Ciencia da Computaçao', 'Engenharia da Computaçao', 'Sistemas de Informaçao'],
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
