import React from "react";
import Image from "next/image";
import Wrapper from "../Wrapper.layout";

export default function Highlighted() {
  return (
    <>
      <Wrapper
        className="relative z-10 overflow-hidden md:py-20 sm:pb-10 p-4 
      bg-white"
      >
        <div
          className="-mx-4 flex flex-col-reverse items-center 
          justify-center md:flex-row-reverse"
        >
          <div className="w-full px-4 md:max-w-[700px]">
            <div
              className="wow fadeInUp mx-auto flex max-w-[800px] 
                flex-col text-center md:text-left"
              data-wow-delay=".2s"
            >
              <h1
                className="mb-5 text-4xl font-bold leading-tight
                 text-black mt-2  sm:text-4xl sm:leading-tight 
                 md:text-5xl md:leading-tight font-sans text-left"
              >
                Tenha seu Site e Gere trafego para seu negocio
              </h1>
              <p
                className=" text-left !leading-relaxed text-body-color 
                 text-xl md:text-xl font-medium text-slate-600 font-sans"
              >
                A presença online tornou-se essencial para o sucesso de qualquer
                negócio. É indispensavel hoje não estar em uma plataforma de
                midia social ou não ter um site proprio.
                <br />
              </p>
              <p
                className="text-blue-700 text-left font-sans
              text-xl md:text-xl font-medium"
              >
                {" "}
                Com um site você não encontra, os clientes encontram você.
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
            px-4 md:w-auto flex justify-center scale-100 border-b"
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
