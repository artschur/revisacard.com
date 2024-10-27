"use client";
import { HeroSection } from "@/components/HeroSection";
import { BentoSection } from "@/components/BentoSection";
import { CardStackDemo, Highlight } from "@/components/CardStack";
import { FlashcardStack } from '@/components/Flashcards';
import { HoverBorderGradientDemo } from '@/components/GradButton';
import { NavbarDemo } from "@/components/NavBarMenu";


export default function Home() {
  return (
    <div className="flex flex-col justify-center px-10 ">
      <NavbarDemo />
      <HeroSection />

      <p className="text-[2.75rem] leading-tight mx-6 pb-4 md:mx-auto mb-12 md:text-[4rem] md:text-nowrap font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">
        com nossos flashcards inteligentes.
      </p>

      <HoverBorderGradientDemo text="Aprender de forma eficiente" emoji="🧠" url="https://pay.kiwify.com.br/vSzcHhv" />
      {/* <p className="md:mx-auto mt-24 mb-8 text-3xl md:text-5xl mx-8 font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          Revise <Highlight className="rounded-lg"> 3x mais rápido</Highlight> e garanta sua vaga na universidade. Porque sabemos que tempo importa.
        </p> */}

      <p className="mb-12 md:mx-auto text-[2.30rem] leading-tight md:text-[3rem] font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl ">
        Descubra como ser aprovado nas melhores universidades com apenas <Highlight className="rounded-lg">8 minutos de revisão</Highlight> por dia!
      </p>
      <CardStackDemo />

      {/* <p className="md:mx-auto text-3xl md:text-4xl mx-8 font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
              Domine todo o conteúdo do ENEM em 
              <Highlight className="rounded-lg mx-2 p-1">menos da metade</Highlight>
              do tempo.
              </p> */}

      <div className="mt-10">
        <HoverBorderGradientDemo text="Quero ser aprovado" emoji="🏆" url="https://pay.kiwify.com.br/vSzcHhv" />
      </div>
      <p className="md:mx-auto md:mt-24 mb-8 text-[2.3rem] leading-tight md:text-5xl  font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
        Quer saber o segredo dos alunos com as melhores notas? <br />
        {/* <span className="mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">Repetição espaçada</span> */}
      </p>
      <span className="text-[2.0rem] md:mx-auto md:mb-32 mb-8 leading-none md:text-[3rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">
        Teste você mesmo.
      </span>
      {/* <span className="mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">Repetição espaçada</span> */}

      <div className="h-[25rem] flex items-center justify-center w-full mb-8 md:mb-16">
        <FlashcardStack />
      </div>

      {/* <p className="md:mx-auto md:mt-24 text-[2.3rem] leading-tight md:text-[3rem]  font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          Seu sucesso não precisa ser complicado.
          <span className="mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">Repetição espaçada</span> */}
      {/* </p>  */}
      <p className="md:mx-auto md:mt-24 text-[2.0rem] leading-tight md:text-[3rem]  font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
        Nós fazemos os melhores flashcards, e o nosso objetivo é te aprovar < Highlight className="rounded-lg"> rápido</Highlight>, pois sabemos que tempo é tudo.<br />
        {/* <span className="mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">Repetição espaçada</span> */}
      </p>
      <p className="md:mx-auto mt-4 mb-8 text-[1.3rem] leading-tight md:text-[2rem]  font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
        Cobrimos os conteúdos que mais caiem em todas as matérias, treine em qualquer lugar e não esqueça nenhum detalhe.
        <br />
        {/* <span className="mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">Repetição espaçada</span> */}
      </p>

      <HoverBorderGradientDemo text="Quero passar no ENEM" emoji="📚" url="https://pay.kiwify.com.br/vSzcHhv" />

      <p className="md:mx-auto  mb-8 text-3xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
        Estude usando repetição espaçada.<br />
      </p>
      <BentoSection link="https://pay.kiwify.com.br/vSzcHhv" />
      <div className="md:mx-auto mb-4 md:mt-12 text-[2.0rem] leading-none md:text-[3rem]  text-neutral-700 dark:text-neutral-200 max-w-7xl">
        <p className="md:mx-auto md:mt-24 text-[2.0rem] md:text-[3rem]  font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          O que são flashcards?
        </p>
        <span className="md:mx-auto mt-4 text-[1.3rem] md:text-[2rem] text-neutral-600 dark:text-neutral-200 max-w-7xl">
          São cartões de estudo que ajudam na memorização de informações. <br /> Cada cartão possui uma pergunta de um lado e a resposta do outro.
          São uma <Highlight>ferramenta eficaz</Highlight> para revisar e reforçar o aprendizado, e usam a técnica de repetição espaçada.
        </span>
      </div>
      <div className="md:mx-auto mb-4 md:mt-12 text-[2.0rem] leading-none md:text-[3rem] text-neutral-700 dark:text-neutral-200 max-w-7xl">
        <p className="md:mx-auto md:mt-24 mt-4 text-[2.0rem] md:text-[3rem]  font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          O que é repetição espacada?
        </p>
        <span className="md:mx-auto mt-4 text-[1.3rem] md:text-[2rem] text-neutral-600 dark:text-neutral-200 max-w-7xl">
          É um método que maximiza a retenção ao revisar informações em intervalos crescentes 📈.
          Ao invés de estudar tudo de uma vez, você revisita o conteúdo em momentos estratégicos, <Highlight> garantindo que a informação fique gravada</Highlight> na sua memória a longo prazo.
        </span>
      </div>

      <div className="mt-8">
        <HoverBorderGradientDemo text="Quero usar essas técnicas" emoji="🚀" url="https://pay.kiwify.com.br/vSzcHhv" />
      </div>
      <div className="md:mx-auto mb-4 md:mt-8 text-[2.0rem] leading-none md:text-[3rem] font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
        <p className="md:mx-auto mt-4 md:mt-12 text-[2.0rem] md:text-[3rem] font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          Por que usar?
        </p>
        <ul className="md:mx-auto mb-16 leading-tight mt-4 text-[1.3rem] md:text-[2rem] font-semibold text-neutral-600 dark:text-neutral-200">
          <li className="mt-8">
            Melhor Retenção: Estudos mostram que você pode reter até 50% a mais de informações com a repetição espaçada.
          </li>
          <li className="mt-8">
            Eficiência: Com apenas algumas horas de estudo com flashcards, você pode substituir mais de 8 horas de revisão tradicional.
          </li>
        </ul>
      </div>



    </div>
  );
}