import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl text-center font-semibold text-black dark:text-white">
            Cansado de estudar e esquecer tudo?
            <br />
            <span className="text-4xl text-[4rem] md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-700">
              Memorize 4x mais rápido
            </span>
          </h1>
        </>
      }
    >
      <Image
        src={`/sonomaHero3.png`}
        alt="hero"
        height={940}
        width={1080}
        className="rounded-2xl h-full object-cover md:object-left-top"
        draggable={false}
      />

    </ContainerScroll>
  );
};