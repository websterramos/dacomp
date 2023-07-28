import Image from "next/image";
import Writer from "@/components/Writer";
import ButtonDown from "@/components/ButtonDown";
import Courses from "@/components/Courses";
import About from "@/components/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import QuestionResponse from "@/components/QuestionResponse";

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

      <section>
        <Courses />
      </section>

      <section>
        <About />
      </section>

      <section id="contato" className="bg-dark-gray text-white">
        <div className="flex w-full flex-col items-center justify-center gap-16 px-4">
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

      <section id="faq" className="text-white">
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-4 py-16">
          <h3 className="text-4xl font-bold drop-shadow-lg">FAQ</h3>

          <div className="mx-auto flex max-w-full flex-col items-center justify-center rounded-2xl bg-dark-gray p-2 md:max-w-xl">
            <QuestionResponse
              question="Como interpretar horários de aula?"
              response="O primeiro número representa o dia da semana, a letra significa o período do dia e os demais números diz respeito as respectivas aulas. Exemplo: 2M34 = segunda-feira de manhã, 3ª e 4ª aula."
            />
            <QuestionResponse
              question="Como interpretar códigos de sala de aula?"
              response="O código é composto do bloco + o andar + número da sala de aula. Demais códigos dizem respeito a laboratórios, como o Laboratório de Computação (LDC). Exemplo: C1103 = bloco C1, 1º andar, sala 3.  "
            />
            <QuestionResponse
              question="Como consultar turmas do próximo semestre?"
              response="No portal do discente, acesse a aba Ensino -> Consultas Gerais -> Consultar Turma. Após isso, selecione os paramêtros desejados para a consulta."
            />
            <QuestionResponse
              question="Onde encontro o Projeto Pedagógico do meu curso?"
              response="Nesse site é possível encontrar o link para a página do seu curso na seção Cursos, nessa página está disponível o Projeto Pedagógico e outros documentos relevantes."
            />
            <QuestionResponse
              question="Como acessar o eduroam?"
              response="Os campos Identidade e Senha devem ser preenchidos com o e-mail institucional UNIFEI e sua senha, respectivamente."
            />
            <QuestionResponse
              question="Como cadastrar atividades complementares no SIGAA?"
              response="No portal do discente, acesse a aba Ensino -> Registro de Atividades Autônomas. É possível cadastrar um novo registro e consultar o status de registros previamente cadastrados."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
