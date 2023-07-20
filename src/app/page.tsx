import Writer  from '../app/Writer'
import ButtonDown  from '../app/ButtonDown'


export default function Home() {
  return (
    <main>
      <section>
          <header className="w-full flex flex-col items-center  h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="flex flex-col align-center justify-center items-center p-16">
              <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">Bem-vind@ ao 
                <span className="text-cyan-900"> DACOMP</span>
              </h1>
              <Writer/>
            </div>
          <ButtonDown/>  
          </header>
          
        <div className="container p-20" id='Cursos'>
          <h1 className="text-4xl">Other Content</h1>
        </div>
      </section>
    </main>
  )
}
