"use client";
import { HeroSection } from "@/components/HeroSection";
import { BentoSection } from "@/components/BentoSection";
import { CardStack } from "@/components/ui/card-stack";
import { CardStackDemo, Highlight } from "@/components/CardStack";
import { FlashcardStack} from '@/components/Flashcards';
import { MovingBorderDemo} from '@/components/MovingBorder';
import { HoverBorderGradientDemo } from '@/components/GradButton';
import { EyeCatchingButton_v2 } from "@/components/EyeCatchingButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center px-10 ">
      <HeroSection/>
  
      <p className="text-[2.75rem] leading-tight mx-6 pb-4 md:mx-auto mb-12 md:text-[4rem] md:text-nowrap font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">
        com nossos flashcards inteligentes.
      </p>

      <HoverBorderGradientDemo text="Aprender de forma eficiente" emoji="🧠" url="https://www.google.com/"/>
        {/* <p className="md:mx-auto mt-24 mb-8 text-3xl md:text-5xl mx-8 font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          Revise <Highlight className="rounded-lg"> 3x mais rápido</Highlight> e garanta sua vaga na universidade. Porque sabemos que tempo importa.
        </p> */}

      <p className="mb-12 md:mx-auto text-[2.30rem] leading-tight md:text-[3rem] font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl ">
        Descubra como ser aprovado nas melhores universidades com apenas <Highlight className="rounded-lg">8 minutos de revisão</Highlight> por dia!
      </p>
        <CardStackDemo/>

        {/* <p className="md:mx-auto text-3xl md:text-4xl mx-8 font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
              Domine todo o conteúdo do ENEM em 
              <Highlight className="rounded-lg mx-2 p-1">menos da metade</Highlight>
              do tempo.
              </p> */}

        <div className="mt-10">
          <HoverBorderGradientDemo text="Quero ser aprovado" emoji="🏆" url="https://www.google.com/"/>
        </div>

        <p className="md:mx-auto md:mt-24 mb-8 text-[2.3rem] leading-tight md:text-5xl  font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          Quer saber o segredo dos alunos com as melhores notas? <br />
          {/* <span className="mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">Repetição espaçada</span> */}

        </p>          
        <span className="text-[2.0rem] md:mx-auto md:mb-32 mb-8 leading-none md:text-[3rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">
          Teste você mesmo.
          </span> 
          {/* <span className="mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">Repetição espaçada</span> */}
        
              <div className="h-[20rem] flex items-center justify-center w-full md:mb-16">
                <FlashcardStack/>
              </div>
              

          <HoverBorderGradientDemo text="Descobrir o próximo passo" emoji="📚" url="https://www.google.com/"/>

        <p className="md:mx-auto  mb-8 text-3xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-200 max-w-7xl">
          Estude usando repetição espaçada.<br />
        </p>
      <BentoSection link="https://www.google.com/"/>
      
    </div>
  );
}