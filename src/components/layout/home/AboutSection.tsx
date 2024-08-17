import React from "react";
import Wrapper from "../Wrapper.layout";
import Image from "next/image";
import { useRouter } from "next/router";

function AboutSection() {
  const router = useRouter();
  return (
    <>
      <Wrapper
        className="relative z-10 overflow-hidden bg-transparent py-20 
      pb-10 px-4 mb-20"
      >
        <div
          className="-mx-4 flex flex-col-reverse items-center 
          justify-center md:flex-row "
        >
          <div className="w-full px-4 md:max-w-[700px]">
            <div
              className="wow fadeInUp mx-auto flex max-w-[800px] 
                flex-col text-center md:text-left"
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
                className="mb-12 text-base !leading-relaxed text-body-color 
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans"
              >
                A Square Oden é composta por quatro profissionais especializados
                em áreas distintas do digital, cobrindo os principais aspectos
                da entrega digital. Para nós, os pontos essenciais para uma boa
                visibilidade pública de uma empresa são: Sistemas, Branding e
                Gestão de Dados e Comunição Clara.
              </p>
            </div>
            <div className="flex flex-col">
              <p
                className="mb-12 text-base !leading-relaxed text-body-color text-center
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans md:text-left
                 border p-2 px-3 rounded-md shadow"
              >
                Nossa missão é ajudar empresas e freelancers a se estabelecerem
                no mercado digital.
              </p>

              <p
                className="mb-12 text-base !leading-relaxed text-body-color text-center
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans
                 md:text-left border px-3 p-2 rounded-md shadow"
              >
                Nosso valor reside no acesso livre e transparente à comunicação.
              </p>
            </div>
          </div>

          <div
            className="pointer-events-none w-full select-none 
            px-4 md:w-auto flex justify-center scale-75"
          >
            <Image
              src="/imgs/aboutImage.png"
              alt="image"
              width={440}
              height={20}
              className="pointer-events-none select-none"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutSection;
