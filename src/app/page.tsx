import Writer  from '../app/Writer'
import ButtonDown  from '../app/ButtonDown'
import Curses from '../app/Curses'

export default function Home() {
  return (
    <main>
      <section>
          <header className="w-full flex flex-col items-center justify-center h-[36rem] bg-gradient-to-r from-dark-blue to-light-blue ">
            <div className="flex flex-col align-center justify-center items-center p-16">
              <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">Bem-vind@ ao 
                <span className="text-cyan-900"> DACOMP</span>
              </h1>
              <Writer/>
            </div>
          <ButtonDown/>  
          </header>
      </section>

      <Curses/>
    </main>
  )
}
