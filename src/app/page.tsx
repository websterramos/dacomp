import Writer from "@/components/Writer";
import Courses from "@/components/Courses";
import Events from "@/components/Events";
import Product from "@/components/Product";
import About from "@/components/About";
import QuestionResponse from "@/components/QuestionResponse";

export default function Home() {
  return (
    <main className="text-white">
      <section className="flex items-center justify-center">
        <div
          id="hero-section"
          className="flex w-full max-w-7xl items-center justify-center px-12 py-16 lg:justify-between"
        >
          <div className="flex flex-col content-stretch items-center justify-center rounded-lg drop-shadow-md ">
            <h1 className="text-center text-5xl font-bold text-blue-600 drop-shadow-lg">
              Bem-vind@ ao
              <span className="text-white drop-shadow-lg"> DACOMP</span>
            </h1>
            <Writer />
          </div>

          <img
            className="hidden max-w-md drop-shadow-lg lg:flex"
            src="dacomp-logo.png"
            alt="Logo do DACOMP UNIFEI"
          />
        </div>
      </section>

      <section id="cursos">
        <Courses />
      </section>

      <section id="eventos" className="flex items-center justify-center">
        <div
          id="events-section"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-4 py-16"
        >
          <h3 className="text-center text-4xl font-bold drop-shadow-lg">
            Eventos
          </h3>

          <Events />
        </div>
      </section>

      <section id="produtos" className="flex items-center justify-center">
        <div
          id="products-section"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-4 py-16"
        >
          <h3 className="text-center text-4xl font-bold drop-shadow-lg">
            Produtos
          </h3>

          <div className="lg:grid-cols-auto flex max-w-full flex-col items-center justify-center gap-4 rounded-2xl bg-dark-gray p-4 drop-shadow-lg md:grid md:max-w-xl md:grid-cols-2">
            <Product imageURL="camiseta.png" name="Camiseta" />
            <Product imageURL="corta-vento.png" name="Corta Vento" />
            <Product imageURL="moletom.png" name="Moletom" />
            <Product imageURL="samba-doll.png" name="Samba/Doll" />
            <Product imageURL="caneca.png" name="Caneca" />
            <Product imageURL="tirante.png" name="Tirante" />
          </div>

          <button className="rounded-2xl bg-blue-600 p-4 font-semibold uppercase drop-shadow-lg transition-all duration-500 hover:scale-105 focus:scale-105 focus:outline-none">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8WZtYCKUaFCPF5rL6WpADlUMY47CQksPX2v5XxJLO5QQsyg/viewform?usp=sf_link"
              target="__blank"
              rel="noopener"
            >
              Compre agora
            </a>
          </button>
        </div>
      </section>

      <section id="sobre" className="flex items-center justify-center">
        <div
          id="about-section"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-4 py-16"
        >
          <h3 className="text-center text-4xl font-bold drop-shadow-lg">
            Sobre
          </h3>

          <About />
        </div>
      </section>

      <section id="faq" className="flex items-center justify-center">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-4 pb-32">
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
