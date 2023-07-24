import Image from 'next/image'
import Writer  from '@/components/Writer'
import ButtonDown  from '@/components/ButtonDown'
import Courses from '@/components/Courses'
import About from '@/components/About'

export default function Home() {
  return (
    <main>
      <section>
          <header className="w-full flex flex-col justify-evenly h-[35rem]  bg-gradient-to-r from-black from-10% to-light-blue ">
            <div className='flex md:justify-evenly  justify-center'>
            <div className="flex flex-col justify-center items-center p-16">
              <h1 className="text-center text-4xl text-cyan-700 font-bold drop-shadow-lg">Bem-vind@ ao 
                <span className="text-white"> DACOMP</span>
              </h1>
              <Writer/>
            </div>

            <Image className=' hidden md:block'
              src={'/logo.png'}
              alt='Logo da Dacomp'
              width={500}
              height={600}
              priority
            />

          </div>
        
        <div className='flex justify-center items-center'>
          <ButtonDown/>
        </div>

        </header>
      </section>

      <Courses/>

      <About/>
    </main>
  )
}
