"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Flashcard = {
  id: number;
  question: string;
  answer: string;
};

const flashcards: Flashcard[] = [
  { id: 0, question: 'O que é Especiação alopátrica?', answer: 'Separação física de grandes populações biológicas, por barreiras geográficas e longo período de tempo.' },
  { id: 1, question: 'Qual a equação reduzida de uma circunferência?', answer: '(x-a)² + (y-b)² = r². Onde a e b - coordenadas do centro; r - raio.' },
  { id: 2, question: 'No contexto da revolução gloriosa, Charles II buscou implementar o ________ (absolutismo/totalitarismo).', answer: 'Absolutismo.' },
  { id: 3, question: 'As órbitas dos elétrons presentes no modelo de Rutherford-Bohr foram substituídas por', answer: 'Nuvens.' },
  { id: 4, question: 'Equação de Torricelli?', answer: 'V² = V0² + 2aΔS.' },
  { id: 5, question: 'Qual é a principal função do sistema circulatório?', answer: 'O sistema circulatório transporta oxigênio, nutrientes e hormônios para as células do corpo e remove resíduos.' },
  { id: 6, question: 'O que é a Revolução Industrial?', answer: 'Foi um período de transição para novos processos de fabricação na Europa e nos Estados Unidos, que começou no final do século 18.' },
  { id: 7, question: 'O que é a biodiversidade?', answer: 'A biodiversidade refere-se à variedade de espécies de plantas, animais e micro-organismos em um determinado ecossistema.' },
  // Adicione mais flashcards aqui
];

export const FlashcardStack = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [cards, setCards] = useState<Flashcard[]>(flashcards);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleDifficulty = (level: string) => {
    setDifficulty(level);
    console.log(`Dificuldade selecionada: ${level}`);

    // Mover para o próximo flashcard após a classificação
    setTimeout(() => {
      setShowAnswer(false);
      setDifficulty(null);
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length); // Mover para o próximo card
    }); // 1 segundo de espera antes de mostrar o próximo
  };

  return (
    <div className="relative h-80 w-80 md:h-96 md:w-96">
      {cards.map((card, index) => {
        if (currentCardIndex > 4) {
          window.location.href = "https://pay.kiwify.com.br/vSzcHhv";
          return null;
        }
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black overflow-hidden bg-white h-80 w-80 md:h-96 md:w-96 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index === currentCardIndex ? 0 : index * -2, // Mover o card atual para cima
              scale: index === currentCardIndex ? 1 : 0.9, // Escala maior para o card atual
              zIndex: index === currentCardIndex ? 1 : 0, // Z-index maior para o card atual
            }}
          >
            <div className="font-normal mt-6 text-2xl text-neutral-700 dark:text-neutral-200">
              {index === currentCardIndex ? cards[currentCardIndex].question : ""}
            </div>
            
            {index === currentCardIndex && showAnswer && (
              <p className="text-neutral-500 font-medium dark:text-white">
                {cards[currentCardIndex].answer}
              </p>
            )}

            {index === currentCardIndex && !showAnswer ? (
              <button
                className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
                onClick={handleShowAnswer}
              >
                Mostrar
              </button>
            ) : (
              index === currentCardIndex && showAnswer && (
                <div className="mt-4 flex justify-around">
                  <button
                    className="bg-red-500 text-white rounded-full px-4 py-2"
                    onClick={() => handleDifficulty('Difícil')}
                  >
                    Difícil
                  </button>
                  <button
                    className="bg-yellow-500 text-white rounded-full px-4 py-2"
                    onClick={() => handleDifficulty('Médio')}
                  >
                    Médio
                  </button>
                  <button
                    className="bg-green-500 text-white rounded-full px-4 py-2"
                    onClick={() => handleDifficulty('Fácil')}
                  >
                    Fácil
                  </button>
                </div>
              )
            )}
          </motion.div>
        );
      })}
    </div>
  );
}