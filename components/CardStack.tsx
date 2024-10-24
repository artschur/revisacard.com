"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Aurora",
    designation: "Medicina na USP ⚕️",
    content: (
      <p>
        O RevisaENEM fez eu <Highlight>organizar meus estudos</Highlight>.
        O método de repetição espaçada foi muito importante na hora da prova
      </p>
    ),
  },
  {
    id: 1,
    name: "Arthur Camargo",
    designation: "Economia na Alemanha 📈",
    content: (
      <p>
        Eu sempre fui aquele aluno que estudava muito, mas na hora da prova dava branco.
        Com os flashcards, finalmente <Highlight>consegui fixar o conteúdo de verdade. </Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Eduardo Luckman",
    designation: "Medicina na UFRJ 🩻",
    content: (
      <p>
        Com os flashcards do RevisaENEM, eu consegui memorizar <Highlight>mais conteudo, mais rápido!</Highlight>
      </p>
    ),
  },
];
