import Link from "next/link";
import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper.layout";
import { useRouter } from "next/router";

export default function Offer() {
  const router = useRouter();
  return (
    <>
      <Wrapper className="relative z-10 overflow-hidden bg-transparent py-20 pb-10 px-4 mb-20">
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
                Melhore, Otimize e Gerencie Posts e Midias Sociais
              </h1>
              <p
                className="mb-12 text-base !leading-relaxed text-body-color 
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans"
              >
                Aumente seu engajamento e alcance com nossos serviços
                especializados em gerenciamento de redes sociais: branding,
                criativos, trafego de publico alvo e mais..
              </p>
              <div
                className="flex flex-col items-center justify-start
                 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <button
                  className="w-full rounded bg-blue-600 px-8 py-4 
                    text-base font-semibold text-white duration-300
                    md:w-auto hover:scale-105 transition-all ease-in-out
                    shadow shadow-blue-600 active:bg-blue-400"
                  onClick={() => router.push("request-form")}
                >
                  Eu quero isso !
                </button>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none w-full select-none 
            px-4 md:w-auto flex justify-center scale-75"
          >
            <Image
              src="/imgs/performance-overview.png"
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
