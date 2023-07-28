import Image from "next/image";
import Writer from "@/components/Writer";
import ButtonDown from "@/components/ButtonDown";
import Courses from "@/components/Courses";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <section>
        <header className="flex h-[35rem] w-full flex-col justify-evenly  bg-gradient-to-r from-black from-10% to-light-blue ">
          <div className="flex justify-center  md:justify-evenly">
            <div className="flex flex-col items-center justify-center p-16">
              <h1 className="text-center text-4xl font-bold text-cyan-700 drop-shadow-lg">
                Bem-vind@ ao
                <span className="text-white"> DACOMP</span>
              </h1>
              <Writer />
            </div>

            <Image
              className=" hidden md:block"
              src={"/logo.png"}
              alt="Logo da Dacomp"
              width={500}
              height={600}
              priority
            />
          </div>

          <div className="flex items-center justify-center">
            <ButtonDown />
          </div>
        </header>
      </section>

      <Courses />

      <About />
    </main>
  );
}
