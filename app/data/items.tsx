import {
    IconTrophy,
    IconBrain,
    IconClock,
    IconUsers,
    IconChartBarPopular,
    IconStar,
    IconRocket,
  } from "@tabler/icons-react";

import { Skeleton } from "@/components/Skeleton";
import Image from "next/image";

export const items = [
    {
      title: "98% de Aprovação",
      description: "Nossos alunos conquistaram aprovações nas principais universidades do país usando nosso método.",
      url: 'https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconTrophy className="h-4 w-4 text-yellow-500" />,
    },
    {
      title: "Método Científico",
      description: "Repetição espaçada é comprovadamente o método mais eficiente para memorização de longo prazo.",
      url: 'https://www.numerise.com/img/Spaced-practice-graph.png',
      icon: <IconBrain className="h-4 w-4 text-pink-500" />,
    },
    {
      title: "Economia de Tempo",
      description: "Estude de forma inteligente: 2 horas com flashcards equivalem a 6 horas de revisão tradicional.",
      url: 'https://images.unsplash.com/photo-1539800644988-3424dd648c2b?q=80&w=3318&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconClock className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "+50.000 Alunos",
      description: "Junte-se à maior comunidade de estudantes usando repetição espaçada para o ENEM.",
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Resultados Comprovados",
      description: "Aumento médio de 150 pontos na nota do ENEM após 3 meses de uso.",
      url: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconChartBarPopular className="h-4 w-4 text-green-400" />,
    },
    {
      title: "1 bilhão de estrelas",
      description: "Avaliação média dos nossos alunos, com mais de 10.000 reviews positivos.",
      url: 'https://images.unsplash.com/photo-1633723251072-b9cf36493637?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconStar className="h-4 w-4 text-blue-600" />,
    },
    {
      title: "Comece Agora",
      description: "7 dias de garantia. Resultados ou seu dinheiro de volta.",
      url: 'https://images.unsplash.com/photo-1614850523503-6e4ef43bee40?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IconRocket className="h-4 w-4 text-red-500" />,
    },
  ];
  