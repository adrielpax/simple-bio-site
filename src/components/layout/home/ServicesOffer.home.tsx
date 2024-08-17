import React from "react";
import Wrapper from "../Wrapper.layout";
import { FaCheckSquare } from "react-icons/fa";
import { useRouter } from "next/router";

export default function ServicesOffer() {
  const router = useRouter();
  return (
    <>
      <Wrapper className="relative z-10 overflow-hidden bg-transparent py-20 px-4">
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
                 md:text-5xl md:leading-tight font-sans w-full "
              >
                O que entregamos para você
              </h1>
              <p
                className="mb-12 text-base !leading-relaxed text-body-color md:text-center 
                 sm:text-lg md:text-xl font-medium text-slate-600 font-sans"
              >
                Clique no botão para saber mais sobre planos e serviços
              </p>
              <ul className="flex flex-wrap gap-5 justify-center">
                <li className="flex items-center gap-2 border rounded p-2 bg-[whitesmoke] font-sans font-medium">
                  {" "}
                  <FaCheckSquare className="text-blue-500" />
                  Site Personalizado
                </li>
                <li className="flex items-center gap-2 border rounded p-2 bg-[whitesmoke] font-sans font-medium">
                  {" "}
                  <FaCheckSquare className="text-blue-500" />
                  Painel Gerenciador de Conteudo
                </li>
                <li className="flex items-center gap-2 border rounded p-2 bg-[whitesmoke] font-sans font-medium">
                  {" "}
                  <FaCheckSquare className="text-blue-500" />
                  Controle de dados dos clientes
                </li>
                <li className="flex items-center gap-2 border rounded p-2 bg-[whitesmoke] font-sans font-medium">
                  {" "}
                  <FaCheckSquare className="text-blue-500" />
                  Branding com sua Marca
                </li>
                <li className="flex items-center gap-2 border rounded p-2 bg-[whitesmoke] font-sans font-medium">
                  {" "}
                  <FaCheckSquare className="text-blue-500" />
                  Criativos, posts e Design
                </li>
                <li className="flex items-center gap-2 border rounded p-2 bg-[whitesmoke] font-sans font-medium">
                  {" "}
                  <FaCheckSquare className="text-blue-500" />
                  Sites Wordpress
                </li>
                <li className="flex items-center gap-2 border rounded p-2 bg-[whitesmoke] font-sans font-medium">
                  {" "}
                  <FaCheckSquare className="text-blue-500" />
                  Sites React
                </li>
              </ul>
             
              <div
                className="flex flex-col items-center justify-center
                 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 my-6"
              >
                <button
                  className="w-full rounded bg-blue-600 px-8 py-4 
                    text-base font-semibold text-white duration-300
                    md:w-auto hover:scale-105 transition-all ease-in-out
                    shadow shadow-blue-600 active:bg-blue-400"
                    onClick={()=>router.push("/request-form")}
                >
                  Saber Mais
                </button>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none w-full select-none 
            px-4 md:w-auto flex justify-center"
          ></div>
          {/* <Image
            src="/imgs/performance-overview.png"
            alt="image"
            width={440}
            height={20}
            className="pointer-events-none select-none"
          /> */}
        </div>
      </Wrapper>
    </>
  );
}
