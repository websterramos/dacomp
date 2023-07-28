import Image from "next/image";
import Writer from "@/components/Writer";
import ButtonDown from "@/components/ButtonDown";
import Courses from "@/components/Courses";
import About from "@/components/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

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

      <section id="contato" className="bg-dark-gray text-white">
        <div className="flex w-full flex-col items-center justify-center gap-16 px-4 py-16">
          <h3 className="text-4xl font-bold drop-shadow-lg">Contato</h3>

          <div className="flex flex-col gap-16 md:flex-row md:justify-between md:gap-64">
            <div className="items flex flex-col justify-between gap-4">
              <div className="flex flex-col items-center gap-8">
                <h3 className="text-2xl font-bold">E-mail</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col text-xl">
                    <span className="font-bold text-blue-600">Dacomp</span>
                    <a href="mailto:contato@email.com">contato@email.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="items flex flex-col justify-between gap-4">
              <div className="flex flex-col items-center gap-8">
                <h3 className="text-2xl font-bold">Redes Sociais</h3>
                <div className="flex items-center justify-between gap-12">
                  <a
                    href="https://www.instagram.com/dacompunifei/"
                    target="__blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                  </a>

                  <a
                    href="https://www.facebook.com/DacompUNIFEI"
                    target="__blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
