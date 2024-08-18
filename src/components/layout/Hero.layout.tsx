import React from "react";
import Image from "next/image";
import Wrapper from "./Wrapper.layout";
import { SvgHero } from "@/utils/svgs";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter()

  return (
    <>
      <div className="absolute right-0 top-0 z-0">
        <SvgHero />
      </div>
      <Wrapper className="relative z-10 overflow-hidden bg-transparent py-20 pb-10 px-4">
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
                className="mb-5 font-bold 
                 text-black text-left text-4xl
                 md:text-5xl leading-tight font-sans"
              >
                Potencialize sua presença online com a {" "}
                <span className="text-blue-700">Square Oden</span>
              </h1>
              <p
                className="mb-12 text-xl text-left !leading-relaxed text-body-color 
                md:text-xl font-medium text-slate-600 font-sans"
              >
                Soluções em Marketing e Tecnologia no digital, personalizadas para
                impulsionar o seu negócio 🚀. Desenvolvemos o melhor em tecnologia e design
                para impulsionar sua marcar atraves do branding.
              </p>
              <div
                className="flex flex-col items-center justify-start
                 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <button
                  className="md:w-1/2 rounded-md bg-blue-600 px-8 py-4 
                    text-base font-semibold text-white border-2
                    hover:scale-105 transition-all ease-in-out hover:shadow-md
                    hover:bg-blue-800 shadow-slate-500 hover:border-black
                    active:bg-black w-[220px]"
                    onClick={()=>router.push("request-form")}
                >
                  Vamos Começar 🔥
                </button>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none w-full select-none 
            px-4 md:w-auto flex justify-center"
          >
            <Image
              src="/imgs/shape-00.png"
              alt="image"
              width={540}
              height={20}
              className="pointer-events-none select-none"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
export default Hero;
