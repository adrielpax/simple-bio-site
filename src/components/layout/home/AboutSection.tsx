import React from "react";
import Wrapper from "../Wrapper.layout";
import Image from "next/image";
import { useRouter } from "next/router";

function AboutSection() {
  const router = useRouter();
  return (
    <>
      <Wrapper
        className="relative z-10 overflow-hidden py-20 
      pb-10 px-4 mb-20  cursor-default"
      >
        <div
          className="-mx-4 flex flex-col items-center 
          justify-center md:flex-row border-2 p-4 rounded-lg hover:shadow-lg
          hover:border-blue-500 bg-gradient "
        >
          <div className="w-full px-4 md:max-w-[700px]">
            <div
              className="wow fadeInUp mx-auto flex max-w-[800px] 
                flex-col text-center md:text-left p-6 rounded-lg"
              data-wow-delay=".2s"
            >
              <h1
                className="mb-5 text-3xl font-bold leading-tight
                 text-black  sm:text-4xl sm:leading-tight 
                 md:text-5xl md:leading-tight font-sans "
              >
                Sobre a Square Oden
              </h1>
              <p
                className="mb-12 text-base !leading-relaxed text-body-color text-justify
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans"
              >
                A Square Oden foi fundada para suprir a necessidade dos negocios
                de estarem no digital. cobrindo os principais aspectos da
                entrega digital: Estrutura, Marca, Visibilidade e Gerenciamento de Dados.{" "}
              </p>
          
            <div className="flex flex-col">
              <p
                className="mb-12 text-base !leading-relaxed text-body-color
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans md:text-left
                 rounded-md text-justify"
              >
                Nossa missão é ajudar empresas e freelancers a se estabelecerem
                no mercado digital, seja nas midias sociais ou com uma estrutura digital.
              </p>

              <p
                className="mb-12 text-base !leading-relaxed text-body-color
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans
                 md:text-left text-justify"
              >
                Nosso valor reside no acesso livre e transparente, simplificado e claro da comunicação.
              </p>
            </div>
          </div>
          </div>
          <div
            className="pointer-events-none w-auto select-none 
            px-4 h-auto flex justify-center"
          >
            <img
              src="/imgs/aboutImage.png"
              alt="image"
              width={400}
              height={80}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutSection;
