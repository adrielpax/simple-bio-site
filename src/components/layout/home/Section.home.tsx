import React from "react";
import Image from "next/image";
import Wrapper from "../Wrapper.layout";

export default function Highlighted() {
  return (
    <>
      <Wrapper className="relative z-10 overflow-hidden bg-transparent md:py-20 sm:pb-10 p-4">
        <div
          className="-mx-4 flex flex-col-reverse items-center 
          justify-center md:flex-row-reverse "
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
                 md:text-5xl md:leading-tight font-sans text-left"
              >
                Tenha seu Site e Gere trafego para seu negocio
              </h1>
              <p
                className="mb-12 text-left text-base !leading-relaxed text-body-color 
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans"
              >
                Em um mundo cada vez mais digital, a presença online tornou-se
                essencial para o sucesso de qualquer negócio. Aqui estão algumas
                razões cruciais pelas quais ter um site é indispensável:
              </p>
              <div
                className="flex flex-col items-center justify-start
                 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                {/* <button
                    className="w-full rounded bg-blue-600 px-8 py-4 
                    text-base font-semibold text-white duration-300
                    md:w-auto hover:scale-105 transition-all ease-in-out"
                  >
                    Vamos Começar 🔥
                  </button> */}
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none w-full select-none 
            px-4 md:w-auto flex justify-center scale-75"
          >
            <Image
              src="/imgs/target-audience.png"
              alt="image"
              width={340}
              height={20}
              className="pointer-events-none select-none"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
